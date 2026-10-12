---
id: fourier.delta-identities
title: Delta-function identities
kind: table
level: core
summary: Collects the working identities for the Dirac delta — scaling, evenness, multiplication by a smooth function, composition with a function, the derivative rules, the transformation of the multidimensional delta under a change of coordinates, and the standard representations as limits — each with a proof in the distributional sense and a statement of the hypothesis it needs.
prereqs: [fourier.distributions, vcalc.dirac-delta-basics, found.change-of-variables, measure.dominated-convergence]
provenance: adapted
sources:
  - work: arfken-2013
    loc: "§1.11, pp. 75–81: the delta sequences (1.152)–(1.155) and the definition (1.157) by the limit of integrals, the rescaling (1.158) and shift (1.159), the composition rule (1.160) for $\\delta(g(x))$ with the Taylor-series argument for it, the derivative (1.161), the three-dimensional delta and its spherical-polar form (1.162), the Fourier representation (1.163), and Exercises 1.11.1–1.11.9 giving the rectangular, Lorentzian, Fejér, Gauss and $\\operatorname{sech}^2$ sequences together with the identity $(d/dx)\\,x\\delta(x) = -\\delta(x)$"
    pages: "75-81"
    role: the list of identities and of delta sequences, and the spherical-polar form of the three-dimensional delta
  - work: hassani-2013
    loc: "§7.3, pp. 229–233: the sifting property (7.20), the Gaussian family of Example 7.3.1, the Dirichlet family $\\sin T(x-x')/\\pi(x-x')$ of Example 7.3.2 with the Fourier representation (7.22), the piecewise-linear smoothing of the step in Example 7.3.3 and the resulting identity (7.23), the $n$-dimensional delta (7.24) with its weight factor $w(r)$, and the identity (7.26) for the Laplacian of $1/|\\mathbf{r}-\\mathbf{r}'|$"
    pages: "229-233"
    role: three of the families, the weight-factor form of the multidimensional delta, and the smoothed-step representation
  - work: folland-1999
    loc: "§9.1, p. 283: Proposition 9.1, that if $f \\in L^1(\\mathbb{R}^n)$ with $\\int f = a$ and $f_t(x) = t^{-n}f(t^{-1}x)$, then $f_t \\to a\\delta$ in $\\mathcal{D}'$ as $t \\to 0$, together with the convergence notion in $\\mathcal{D}'$ in which it is stated"
    pages: "283"
    role: the general theorem behind every representation of the delta as a limit
  - work: rhb-2006
    loc: "§13.1.3, p. 441: the three-dimensional delta as a product $\\delta(x-x_0)\\delta(y-y_0)\\delta(z-z_0)$ in Eq. (13.21), the charge density of a point charge and the resulting total enclosed charge, the derivative of the delta (13.19), and the idealised impulse (13.20)"
    pages: "441"
    role: the factorised multidimensional delta and the point-source reading used in the examples
  - work: stakgold-holst-2011
    loc: "§2.1, pp. 99–100: the translation of a distribution (2.1.7), the similarity transformation (2.1.8) defining $f(ax)$ for singular $f$, and multiplication by an infinitely differentiable function (2.1.11) with the special case $a(x)\\delta(x) = a(0)\\delta(x)$ (2.1.11a)"
    pages: "99-100"
    role: the definitions that give the scaling and multiplication identities their meaning for a singular distribution
---

:::note[What an identity between deltas means]{provenance=original}
Every line below is an identity in $\mathcal{D}'(\mathbb{R}^n)$: the two sides give the same number when paired with every test function. None of them is an identity between functions, and checking one pointwise is meaningless. :ref[]{to=vcalc.dirac-delta-basics} states most of these rules and derives them from delta sequences, which is how a physicist meets them; here each is proved from the definitions of :ref[]{to=fourier.distributions}, the hypotheses are made explicit, and the transformation of the multidimensional delta under a change of coordinates is derived.

Two conventions are fixed throughout. For a distribution $f$ and real $a\ne0$, the translate and the rescaling are *defined* by

$$
\bigl\langle f(x-b),\varphi(x)\bigr\rangle = \bigl\langle f(x),\varphi(x+b)\bigr\rangle, \qquad
\bigl\langle f(ax),\varphi(x)\bigr\rangle = \frac{1}{\lvert a\rvert}\Bigl\langle f(x),\varphi\bigl(\tfrac{x}{a}\bigr)\Bigr\rangle ,
$$

these being what the change of variable gives when $f$ happens to be a function (Stakgold and Holst's Eqs. (2.1.7) and (2.1.8); the modulus and the reversal of the limits for $a<0$ are built in). And for $a\in C^\infty$, $\langle af,\varphi\rangle = \langle f,a\varphi\rangle$.
:::

:::statement[One-dimensional identities]{provenance=adapted src="arfken-2013:§1.11, Eqs. (1.158)–(1.161) and Exercise 1.11.6, pp. 78–81; stakgold-holst-2011:§2.1, Eqs. (2.1.8) and (2.1.11a), pp. 99–100"}
Let $\varphi$ be a test function, $b\in\mathbb{R}$, $a\in\mathbb{R}\setminus\{0\}$, $n\in\mathbb{N}$, and let $u \in C^\infty(\mathbb{R})$.

| Identity | Hypothesis |
|---|---|
| $\langle\delta(x-b),\varphi\rangle = \varphi(b)$ | — |
| $\delta(-x) = \delta(x)$ | — |
| $\delta(ax) = \dfrac{1}{\lvert a\rvert}\,\delta(x)$ | $a\ne0$ |
| $\delta\bigl(a(x-b)\bigr) = \dfrac{1}{\lvert a\rvert}\,\delta(x-b)$ | $a\ne0$ |
| $u(x)\,\delta(x-b) = u(b)\,\delta(x-b)$ | $u\in C^\infty$ |
| $x\,\delta(x) = 0$ | — |
| $\bigl\langle\delta^{(n)}(x-b),\varphi\bigr\rangle = (-1)^n\varphi^{(n)}(b)$ | — |
| $\delta^{(n)}(-x) = (-1)^n\,\delta^{(n)}(x)$ | — |
| $\delta^{(n)}(ax) = \dfrac{1}{\lvert a\rvert\,a^{n}}\,\delta^{(n)}(x)$ | $a\ne0$ |
| $x\,\delta'(x) = -\delta(x)$ | — |
| $x^2\,\delta''(x) = 2\,\delta(x)$ | — |
| $u(x)\,\delta'(x) = u(0)\,\delta'(x) - u'(0)\,\delta(x)$ | $u\in C^\infty$ |
| $\displaystyle\delta\bigl(g(x)\bigr) = \sum_{i}\frac{\delta(x-a_i)}{\bigl\lvert g'(a_i)\bigr\rvert}$ | $g\in C^1$; the zeros $a_i$ of $g$ in $\operatorname{supp}\varphi$ are finitely many and satisfy $g'(a_i)\ne0$ |

The composition rule is Arfken's Eq. (1.160); the two displayed forms of it,

$$
\int_{-\infty}^{\infty}\varphi(x)\,\delta\bigl(g(x)\bigr)\, dx = \sum_i \frac{\varphi(a_i)}{\lvert g'(a_i)\rvert} ,
$$

are what is used in practice. It contains the rescaling rule as the case $g(x) = ax$, and $\delta\bigl((x-x_1)(x-x_2)\bigr) = \bigl[\delta(x-x_1)+\delta(x-x_2)\bigr]/\lvert x_1-x_2\rvert$ for $x_1\ne x_2$ as another case.
:::

:::proof[One-dimensional identities]{provenance=original}
Each is the definition of the operation, applied once.

**Evenness and rescaling.** By the convention above with $a=-1$, $\langle\delta(-x),\varphi\rangle = \langle\delta,\varphi(-x)\rangle = \varphi(-0) = \varphi(0)$, so $\delta(-x)=\delta(x)$. For general $a\ne0$,

$$
\bigl\langle\delta(ax),\varphi\bigr\rangle = \frac{1}{\lvert a\rvert}\Bigl\langle\delta,\varphi\bigl(\tfrac{x}{a}\bigr)\Bigr\rangle = \frac{\varphi(0)}{\lvert a\rvert} = \Bigl\langle\frac{\delta}{\lvert a\rvert},\varphi\Bigr\rangle .
$$

The shifted version follows by composing with a translation.

**Multiplication.** $\langle u\,\delta(\cdot-b),\varphi\rangle = \langle\delta(\cdot-b),u\varphi\rangle = u(b)\varphi(b) = \langle u(b)\delta(\cdot-b),\varphi\rangle$. Taking $u(x)=x$, $b=0$ gives $x\delta(x)=0$. Note that $u$ must be smooth for $u\varphi$ to be a test function; continuity at $b$ is not enough to make $u\delta$ a distribution in general, though it is enough for this one identity.

**Derivatives.** Iterating $\langle f',\varphi\rangle = -\langle f,\varphi'\rangle$ gives $\langle\delta^{(n)}(\cdot-b),\varphi\rangle = (-1)^n\varphi^{(n)}(b)$. For the parity, $\langle\delta^{(n)}(-x),\varphi\rangle = \langle\delta^{(n)},\varphi(-x)\rangle = (-1)^n\frac{d^n}{dx^n}\varphi(-x)\big\vert_{x=0} = (-1)^n(-1)^n\varphi^{(n)}(0)$; comparing with $\langle\delta^{(n)},\varphi\rangle = (-1)^n\varphi^{(n)}(0)$ gives the factor $(-1)^n$. For the rescaling,

$$
\bigl\langle\delta^{(n)}(ax),\varphi\bigr\rangle = \frac{1}{\lvert a\rvert}\Bigl\langle\delta^{(n)},\varphi\bigl(\tfrac{x}{a}\bigr)\Bigr\rangle
= \frac{(-1)^n}{\lvert a\rvert}\,\frac{d^n}{dx^n}\varphi\bigl(\tfrac{x}{a}\bigr)\Big\vert_{x=0}
= \frac{(-1)^n}{\lvert a\rvert\,a^n}\,\varphi^{(n)}(0) = \Bigl\langle\frac{\delta^{(n)}}{\lvert a\rvert a^n},\varphi\Bigr\rangle .
$$

**Products with powers.** $\langle x\delta',\varphi\rangle = \langle\delta', x\varphi\rangle = -(x\varphi)'(0) = -\bigl[\varphi(0)+0\cdot\varphi'(0)\bigr] = -\varphi(0)$, so $x\delta' = -\delta$. Similarly $\langle x^2\delta'',\varphi\rangle = (x^2\varphi)''(0) = \bigl[2\varphi+4x\varphi'+x^2\varphi''\bigr]_{x=0} = 2\varphi(0)$, so $x^2\delta''=2\delta$. For a general smooth $u$, $\langle u\delta',\varphi\rangle = -(u\varphi)'(0) = -u'(0)\varphi(0) - u(0)\varphi'(0) = \langle u(0)\delta' - u'(0)\delta,\varphi\rangle$. $\square$
:::

:::statement[Composition with a function]{provenance=adapted src="arfken-2013:§1.11, Eq. (1.160), p. 79"}
Let $\rho$ be continuous with support in $[-1,1]$ and $\int_{-1}^1\rho = 1$, and put $\rho_\varepsilon(t) = \varepsilon^{-1}\rho(t/\varepsilon)$. Let $g\in C^1(\mathbb{R})$ and let $\varphi$ be a test function such that the zeros of $g$ in $\operatorname{supp}\varphi$ are a finite set $a_1,\dots,a_N$ with $g'(a_i)\ne0$ for each $i$. Then

$$
\lim_{\varepsilon\to0^+}\int_{-\infty}^{\infty}\rho_\varepsilon\bigl(g(x)\bigr)\,\varphi(x)\, dx = \sum_{i=1}^{N}\frac{\varphi(a_i)}{\bigl\lvert g'(a_i)\bigr\rvert} ,
$$

and the limit does not depend on which $\rho$ was used. This is the precise meaning of $\delta(g(x)) = \sum_i\delta(x-a_i)/\lvert g'(a_i)\rvert$. Arfken obtains the same formula by replacing $g$ near each zero by the leading term of its Taylor series.
:::

:::idea{provenance=original}
A narrow spike in the variable $t = g(x)$ becomes, in the variable $x$, a spike sitting at each solution of $g(x)=0$. Its height is unchanged but its width is divided by $\lvert g'\rvert$, because that is the rate at which $x$ must move to make $t$ move; so each spike carries weight $1/\lvert g'(a_i)\rvert$ instead of $1$. The proof is that sentence made into a substitution: near each simple zero, $g$ is invertible, and the change of variable $t = g(x)$ turns the spike back into the standard one, leaving behind the Jacobian factor $1/\lvert g'\rvert$ evaluated at the zero.
:::

:::proof[Composition with a function]{provenance=original}
**Step 1: isolate the zeros.** Since $g'(a_i)\ne0$ and $g'$ is continuous, the inverse function theorem (:ref[]{to=found.implicit-inverse-function}) gives an open interval $I_i\ni a_i$ on which $g$ is a $C^1$ bijection onto an open interval $J_i\ni0$, with $g'$ of one sign on $I_i$. Shrink the $I_i$ so that they are disjoint. The set $K = \operatorname{supp}\varphi\setminus\bigcup_i I_i$ is compact and contains no zero of $g$, so $m = \min_K\lvert g\rvert > 0$.

**Step 2: the remainder contributes nothing.** For $x\in K$ we have $\lvert g(x)/\varepsilon\rvert \ge m/\varepsilon > 1$ once $\varepsilon < m$, and $\rho$ vanishes outside $[-1,1]$. So $\rho_\varepsilon(g(x)) = 0$ on $K$ for all small $\varepsilon$: this is where the compact support of $\rho$ is used, and it is the only place.

**Step 3: change variables near each zero.** On $I_i$ substitute $t = g(x)$, so $x = g_i^{-1}(t)$ and $dx = dt/\lvert g'(g_i^{-1}(t))\rvert$ — the modulus absorbing the orientation when $g' < 0$. Writing

$$
\Psi_i(t) = \frac{\varphi\bigl(g_i^{-1}(t)\bigr)}{\bigl\lvert g'\bigl(g_i^{-1}(t)\bigr)\bigr\rvert}, \qquad t\in J_i ,
$$

a continuous function on $J_i$ with $\Psi_i(0) = \varphi(a_i)/\lvert g'(a_i)\rvert$, we get

$$
\int_{I_i}\rho_\varepsilon\bigl(g(x)\bigr)\varphi(x)\, dx = \int_{J_i}\rho_\varepsilon(t)\,\Psi_i(t)\, dt .
$$

**Step 4: let $\varepsilon\to0$.** For $\varepsilon$ small enough that $[-\varepsilon,\varepsilon]\subset J_i$, substitute $t = \varepsilon s$:

$$
\int_{J_i}\rho_\varepsilon(t)\Psi_i(t)\, dt = \int_{-1}^{1}\rho(s)\,\Psi_i(\varepsilon s)\, ds \xrightarrow[\varepsilon\to0^+]{} \Psi_i(0)\int_{-1}^1\rho(s)\, ds = \Psi_i(0) ,
$$

the limit by uniform convergence of $\Psi_i(\varepsilon s)\to\Psi_i(0)$ for $s\in[-1,1]$, which holds because $\Psi_i$ is continuous at $0$, and $\int\rho=1$. Summing over $i$ and adding the vanishing contribution of $K$ from Step 2 gives the claim; the answer involves $\rho$ only through $\int\rho=1$, so it is independent of $\rho$. $\square$
:::

:::statement[The delta in several variables and in curvilinear coordinates]{provenance=adapted src="rhb-2006:§13.1.3, Eq. (13.21), p. 441; arfken-2013:§1.11, Eq. (1.162), p. 79; hassani-2013:§7.3, Eq. (7.24), p. 232"}
In $\mathbb{R}^n$ the delta at $x_0$ is the functional $\varphi\mapsto\varphi(x_0)$, and in Cartesian coordinates it factorises,

$$
\delta^{(n)}(x-x_0) = \prod_{j=1}^{n}\delta(x_j - x_{0j}) ,
$$

which is Riley, Hobson and Bence's Eq. (13.21) in three dimensions. Let $X : U \to V$ be a $C^1$ bijection between open subsets of $\mathbb{R}^n$ with Jacobian determinant

$$
J(u) = \det\frac{\partial X}{\partial u}, \qquad J(u)\ne0 \ \text{ on } U ,
$$

and let $x_0 = X(u_0)$ with $u_0\in U$. Then, for every test function supported in $V$,

$$
\delta^{(n)}(x - x_0) = \frac{1}{\lvert J(u_0)\rvert}\,\prod_{j=1}^{n}\delta\bigl(u_j - u_{0j}\bigr) ,
$$

meaning that the right-hand side, integrated against $f(X(u))\,\lvert J(u)\rvert\, d^nu$, returns $f(x_0)$. Hassani writes the same thing with a weight $w$ in place of $\lvert J\rvert$. In the two standard systems of :ref[]{to=vcalc.cylindrical-spherical}, where $\lvert J\rvert = r^2\sin\theta$ and $\lvert J\rvert = \rho$:

$$
\delta^{(3)}(\mathbf{r}-\mathbf{r}_0) = \frac{\delta(r-r_0)\,\delta(\theta-\theta_0)\,\delta(\phi-\phi_0)}{r_0^2\sin\theta_0}
\qquad (r_0>0,\ 0<\theta_0<\pi) ,
$$

$$
\delta^{(3)}(\mathbf{r}-\mathbf{r}_0) = \frac{\delta(\rho-\rho_0)\,\delta(\phi-\phi_0)\,\delta(z-z_0)}{\rho_0}
\qquad (\rho_0>0) .
$$

The first is the form behind Arfken's Eq. (1.162). For a delta **at the origin** paired with functions of $r$ alone, the angular factors integrate to $4\pi$ and the correct expression is instead

$$
\delta^{(3)}(\mathbf{r}) = \frac{\delta(r)}{4\pi r^2} \quad\text{on radial test functions},
$$

since $\int_0^\infty\!\!\int_{S^2} \bigl[\delta(r)/4\pi r^2\bigr] f(r)\, r^2dr\, d\Omega = f(0)$. That last step uses the **half-line convention** $\int_0^\infty\delta(r)f(r)\,dr = f(0)$, which assigns the whole unit mass to the endpoint $r=0$ rather than splitting it. This is exactly the boundary root that step 1 of the method below refuses to evaluate, so it is a convention and not a consequence of the identities above; it is forced here by requiring that $\delta^{(3)}$ integrate to $1$ over any ball about the origin, and it is the convention used throughout physics for radial deltas at the origin. Against a test function with angular dependence the expression is wrong, which is the restriction already stated.
:::

:::proof[Change of coordinates]{provenance=original}
Let $\varphi$ be a test function supported in $V$. The change-of-variables formula for integrals (:ref[]{to=found.change-of-variables}) says

$$
\int_V \varphi(x)\, d^nx = \int_U \varphi\bigl(X(u)\bigr)\,\lvert J(u)\rvert\, d^nu .
$$

Write $\tilde\varphi(u) = \varphi(X(u))$, which is $C^1$ on $U$ with $\tilde\varphi(u_0) = \varphi(x_0)$. Pair the proposed right-hand side with $\varphi$, using the volume element $\lvert J(u)\rvert\,d^nu$ as the statement prescribes:

$$
\int_U \frac{\prod_j\delta(u_j-u_{0j})}{\lvert J(u_0)\rvert}\ \tilde\varphi(u)\,\lvert J(u)\rvert\, d^nu
= \frac{\tilde\varphi(u_0)\,\lvert J(u_0)\rvert}{\lvert J(u_0)\rvert}
= \tilde\varphi(u_0) = \varphi(x_0) ,
$$

the middle step by the sifting property of the product delta applied to the function $u\mapsto\tilde\varphi(u)\lvert J(u)\rvert$, which is continuous at $u_0$. Since $\varphi(x_0)$ is also $\langle\delta^{(n)}(x-x_0),\varphi\rangle$, the two distributions agree. The hypothesis $J(u_0)\ne0$ is what allows the division; the hypothesis that $X$ is a bijection is what makes $u_0$ the unique preimage, so that no sum over branches appears — compare the composition rule above, where several zeros do contribute. $\square$
:::

:::statement[Representations as limits]{provenance=adapted src="folland-1999:§9.1, Proposition 9.1, p. 283; arfken-2013:§1.11, Eqs. (1.152)–(1.155) and Exercises 1.11.1–1.11.9, pp. 76–81; hassani-2013:§7.3, Examples 7.3.1–7.3.3, pp. 229–232"}
Let $\rho\in L^1(\mathbb{R}^n)$ with $\int_{\mathbb{R}^n}\rho = A$, and for $\varepsilon>0$ put

$$
\rho_\varepsilon(x) = \varepsilon^{-n}\rho(x/\varepsilon) .
$$

Then $\rho_\varepsilon \to A\,\delta^{(n)}$ weakly as $\varepsilon\to0^+$: for every bounded continuous $\varphi$ on $\mathbb{R}^n$, and in particular for every test function,

$$
\int_{\mathbb{R}^n}\rho_\varepsilon(x)\,\varphi(x)\, dx \longrightarrow A\,\varphi(0) .
$$

This is Folland's Proposition 9.1. No positivity, no monotonicity and no smoothness of $\rho$ is required, only absolute integrability; with $A=1$ it covers every family in the table below except the last two rows.

| Family in one dimension | $\int$ | Source |
|---|---|---|
| $\dfrac{1}{\varepsilon\sqrt\pi}\,e^{-x^2/\varepsilon^2}$ (Gaussian) | $1$ | Arfken (1.153), p. 76; Hassani, Example 7.3.1 |
| $\dfrac{1}{2\varepsilon}$ on $\lvert x\rvert<\varepsilon$, else $0$ (rectangular) | $1$ | Arfken, Exercise 1.11.1 |
| $\dfrac{1}{\pi}\,\dfrac{\varepsilon}{\varepsilon^2+x^2}$ (Lorentzian) | $1$ | Arfken (1.154), p. 77, and Exercise 1.11.2 |
| $\dfrac{1}{2\varepsilon}\operatorname{sech}^2(x/\varepsilon)$ | $1$ | Arfken, Exercise 1.11.9 |
| the rectangular family again, as $\dfrac{d}{dx}$ of a piecewise-linear smoothing of the step | $1$ | Hassani, Example 7.3.3 |
| $D_T(x) = \dfrac{\sin Tx}{\pi x}$, $T\to\infty$ (Dirichlet) | — | Arfken (1.155); Hassani, Example 7.3.2 |
| $\dfrac{1}{2\pi N}\left(\dfrac{\sin(Nt/2)}{\sin(t/2)}\right)^{2}$, $N\to\infty$ (Fejér) | $1$ | Arfken, Exercise 1.11.3 |

The last two rows need separate arguments. $D_T$ is **not** in $L^1$ — $\int\lvert D_T\rvert$ diverges — so the theorem does not apply to it; its convergence to $\delta$ is the Dirichlet-integral computation of :ref[]{to=fourier.dirichlet-convergence}, and the associated formal identity $\delta(x) = (2\pi)^{-1}\int e^{ikx}dk$ (Arfken's Eq. (1.163), Hassani's Eq. (7.22)) is made rigorous in :ref[]{to=fourier.tempered-distributions} as the inversion formula applied to $\hat\delta = 1$. The Fejér kernel is integrable but periodic rather than a rescaling of a fixed profile, so it converges to $\delta$ on an interval of length $2\pi$ rather than on the line; see :ref[]{to=fourier.fejer-theorem}.
:::

:::proof[Representations as limits]{provenance=original}
Let $\varphi$ be bounded and continuous, with $M = \sup\lvert\varphi\rvert$. Substituting $x = \varepsilon y$, so that $d^nx = \varepsilon^n d^ny$ and the factor $\varepsilon^{-n}$ cancels,

$$
\int_{\mathbb{R}^n}\rho_\varepsilon(x)\varphi(x)\, d^nx = \int_{\mathbb{R}^n}\rho(y)\,\varphi(\varepsilon y)\, d^ny .
$$

The rescaling has been moved off the singular factor and onto the smooth one — that is the whole trick. Now let $\varepsilon\to0^+$ inside the integral. The integrands are dominated uniformly in $\varepsilon$,

$$
\bigl\lvert\rho(y)\varphi(\varepsilon y)\bigr\rvert \le M\,\lvert\rho(y)\rvert \in L^1(\mathbb{R}^n) ,
$$

and converge pointwise to $\rho(y)\varphi(0)$ by continuity of $\varphi$ at $0$. The dominated convergence theorem (:ref[]{to=measure.dominated-convergence}) applies and gives

$$
\int\rho(y)\varphi(\varepsilon y)\, d^ny \longrightarrow \varphi(0)\int\rho(y)\, d^ny = A\,\varphi(0) . \qquad\square
$$
:::

:::remark[Where the hypotheses are used]{provenance=original}
- **Simple zeros in the composition rule.** $g'(a_i)\ne0$ is used twice: to invert $g$ near $a_i$, and to divide by $\lvert g'(a_i)\rvert$. Without it the rule is false and the left side is usually undefined. The standard counterexample is $g(x)=x^2$: $\int\rho_\varepsilon(x^2)\varphi(x)\,dx$ behaves like $\varepsilon^{-1/2}$, so $\delta(x^2)$ does not exist. Likewise $\delta(g)$ is undefined when $g\equiv0$ on an interval.
- **Finitely many zeros in the support.** If $g$ has infinitely many zeros accumulating inside $\operatorname{supp}\varphi$ — for example $g(x) = x\sin(1/x)$ near $0$ — the sum need not converge and the proof's Step 1 fails, since the intervals $I_i$ cannot be made disjoint.
- **Smoothness of the multiplier.** $u\delta$ requires $u\in C^\infty$ so that $u\varphi$ is a test function. The identity $u(x)\delta'(x) = u(0)\delta' - u'(0)\delta$ shows why: a derivative of $u$ appears, so $u$ merely continuous will not do. In particular $\delta(x)H(x)$, with $H$ the step, is not defined, and neither is $\delta^2$. Any identity that appears to multiply two deltas has been written down carelessly.
- **The Jacobian must not vanish.** The curvilinear formulas fail exactly at the coordinate singularities: at $r_0=0$ or $\theta_0\in\{0,\pi\}$ in spherical polars, and on the axis $\rho_0=0$ in cylindrical polars, because $\lvert J\rvert = 0$ there and $X$ is not injective. That is why the delta at the origin needs the separate expression $\delta(r)/4\pi r^2$, and why that expression is stated only against radial test functions: a general test function sees angular structure at the origin that $\delta(r)/4\pi r^2$ has averaged away.
- **Integrability in the limit theorem.** Absolute integrability of $\rho$ supplies the dominating function; the conclusion can fail without it, as $D_T$ shows — it does converge to $\delta$, but the proof above cannot see this, and the convergence is genuinely more delicate, being conditional rather than absolute.
- **Continuity of $\varphi$ at the origin only.** Nothing in the proof needs $\varphi$ smooth, or even continuous away from $0$: a bounded $\varphi$ continuous at the single point $0$ suffices. This is the same hypothesis as in the sifting property of :ref[]{to=vcalc.dirac-delta-basics}.
:::

:::method[Evaluating an integral containing a delta]{provenance=original}
To compute $\int \varphi(x)\,\delta(g(x))\, dx$ over an interval or region:

1. **Solve $g(x)=0$** and keep the roots inside the region of integration. A root on the boundary makes the integral ambiguous; a root outside contributes nothing.
2. **Check each root is simple**, $g'(a_i)\ne0$. If one is not, stop: the integral is not defined by these rules.
3. **Add up $\varphi(a_i)/\lvert g'(a_i)\rvert$** over the surviving roots. Take the modulus; a sign error here is the commonest mistake.
4. **In several dimensions**, first write the delta in the coordinates in which the integral is set up, dividing by $\lvert J\rvert$ at the point where the delta sits, and then integrate with the volume element of those coordinates. The two Jacobian factors must cancel; if they do not, one of them has been put in twice.
5. **Check dimensions.** $\delta(g)$ carries the reciprocal of the units of $g$. A delta in energy has units of inverse energy, so the final answer's units are a quick and reliable check on step 3.
:::

:::example[A cubic argument, and a charged ring]{provenance=original}
**(a) One dimension.** Evaluate

$$
I = \int_{-\infty}^{\infty}\bigl(x^2+1\bigr)\,\delta\bigl(x^3-4x\bigr)\, dx .
$$

*Step 1.* $g(x) = x^3-4x = x(x-2)(x+2)$ vanishes at $x=-2,\,0,\,2$, all inside the range.

*Step 2.* $g'(x) = 3x^2-4$, so $\lvert g'(0)\rvert = 4$ and $\lvert g'(\pm2)\rvert = \lvert 12-4\rvert = 8$. All three roots are simple.

*Step 3.* With $\varphi(x)=x^2+1$, so $\varphi(0)=1$ and $\varphi(\pm2)=5$,

$$
I = \frac{1}{4} + \frac{5}{8} + \frac{5}{8} = \frac{2+5+5}{8} = \frac{12}{8} = \frac{3}{2} = 1.5 .
$$

A quick sanity check on the dominant term: the two outer roots are in a region where $g$ is steep, so they are weighted less per unit of $\varphi$ than the root at the origin — $1/8$ against $1/4$ — yet they still dominate because $\varphi$ is five times larger there.

**(b) Three dimensions.** A total charge $Q$ is spread uniformly on the circle $r=R$, $\theta=\pi/2$ in spherical polars. Its density is a delta supported on a curve, and by the curvilinear rule the two angular-and-radial deltas must be divided by the Jacobian at the ring:

$$
\rho(\mathbf{r}) = \frac{Q}{2\pi}\cdot\frac{\delta(r-R)\,\delta(\theta-\pi/2)}{R^2\sin(\pi/2)} = \frac{Q\,\delta(r-R)\,\delta(\theta-\pi/2)}{2\pi R^2} ,
$$

the factor $1/2\pi$ spreading the charge over the azimuth, and no $\delta(\phi-\phi_0)$ appearing because the ring covers every $\phi$. Checking the total charge with the spherical volume element $r^2\sin\theta\,dr\,d\theta\,d\phi$:

$$
\int\rho\, dV = \frac{Q}{2\pi R^2}\int_0^{2\pi}\!\!d\phi\int_0^{\pi}\!\!\delta\bigl(\theta-\tfrac\pi2\bigr)\sin\theta\, d\theta\int_0^\infty\!\!\delta(r-R)\,r^2\, dr
= \frac{Q}{2\pi R^2}\cdot 2\pi\cdot 1\cdot R^2 = Q ,
$$

using $\sin(\pi/2)=1$. Both the $R^2$ and the $2\pi$ cancel exactly, which is the step-4 check: had the $\sin\theta$ of the volume element been forgotten, the answer would have been $Q/\sin(\pi/2)$ — right here by luck, and wrong for a ring at any other latitude. For a ring at colatitude $\theta_0$ the density is $Q\,\delta(r-R)\delta(\theta-\theta_0)/(2\pi R^2\sin\theta_0)$ and the $\sin\theta_0$ is essential.
:::

:::application[Energy conservation and phase space]{provenance=original}
**Fermi's golden rule and densities of states.** A transition rate in quantum mechanics carries a factor $\delta(E_f - E_i)$, which is a delta in an energy and therefore has units of inverse energy; summing it over final states converts it into a density of states. Whenever the final states are labelled by a continuous variable $k$ with $E = E(k)$, the composition rule does the conversion:

$$
\int \delta\bigl(E(k) - E\bigr)\, dk = \sum_i \frac{1}{\lvert E'(k_i)\rvert} ,
$$

the sum running over the solutions of $E(k)=E$. The group velocity $E'(k)$ in the denominator is why flat bands have large densities of states, and why a van Hove singularity occurs exactly where $E'(k_i)=0$ — precisely the point at which the composition rule's hypothesis fails and the integral ceases to be finite.

**Relativistic phase space.** In a scattering calculation the on-shell condition is imposed by $\delta(p^2 - m^2)$ with $p^2 = (p^0)^2 - \lvert\mathbf{p}\rvert^2$. Regarded as a function of $p^0$ at fixed $\mathbf{p}$, this argument has simple zeros at $p^0 = \pm E_{\mathbf{p}}$ with $E_{\mathbf{p}} = (\lvert\mathbf{p}\rvert^2+m^2)^{1/2}$, and derivative $2p^0$ there, so

$$
\delta\bigl(p^2-m^2\bigr)\,\theta(p^0) = \frac{\delta\bigl(p^0 - E_{\mathbf{p}}\bigr)}{2E_{\mathbf{p}}} ,
$$

the step function (:ref[]{to=fourier.heaviside-step}) discarding the negative-energy root. This single application of the composition rule is what makes $d^4p\,\delta(p^2-m^2)\theta(p^0)$ the Lorentz-invariant measure $d^3p/2E_{\mathbf{p}}$ on the mass shell, the normalisation that appears in front of every relativistic cross-section.

**Idealised sources.** The curvilinear forms are the standard way of writing the charge or mass density of an idealised ring, shell, wire or point, as in the worked example — Riley, Hobson and Bence's Eq. (13.20) for an impulse is the same idea in time. These densities are the right-hand sides of the Poisson and wave equations whose solutions are the Green's functions of :ref[]{to=green.laplace-green-functions}, and the Jacobian factors in them are what make a multipole expansion in :ref[]{to=pde.multipole-expansion} come out with the correct powers of the radius.
:::
