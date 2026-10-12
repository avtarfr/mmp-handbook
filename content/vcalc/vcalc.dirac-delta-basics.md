---
id: vcalc.dirac-delta-basics
title: The Dirac delta in calculations
kind: definition
level: core
summary: Introduces the delta as the limit of a normalized family of peaked functions, proves that the Gaussian family sifts the value of any bounded function continuous at the point, collects the working rules (evenness, rescaling, $\delta(g(x))$, the derivative, $\theta' = \delta$), defines the three-dimensional delta, and proves $\nabla^2(1/r) = -4\pi\delta^{(3)}(\mathbf{r})$ from Green's second identity.
prereqs: [vcalc.divergence-theorem, vcalc.green-identities, found.gaussian-integrals]
provenance: adapted
sources:
  - work: arfken-2013
    loc: "§1.11, pp. 75–78: Eqs. (1.149)–(1.151) (the defining properties), the delta sequences (1.152)–(1.155) with Figs. 1.21–1.22, and Eq. (1.157), which defines $\\delta$ as a distribution by the limit of the integrals; pp. 78–79: evenness, Eq. (1.158) for $\\delta(ax)$, Eq. (1.159) for a shift of origin, Eq. (1.160) for $\\delta(g(x))$ with its proof, Eq. (1.161) for $\\delta'$, the three-dimensional delta and Eq. (1.162) in spherical polars; §3.9, Eqs. (3.119)–(3.121), p. 177 ($\\nabla^2(1/r) = -4\\pi\\delta(\\mathbf{r})$ and its two-point form)"
    pages: "75-79, 177"
    role: the definition by delta sequences, the complete list of working rules with their derivations, and the identity for the Laplacian of $1/r$
  - work: hassani-2013
    loc: "§7.3, pp. 229–232: Eq. (7.20) (the sifting property, including the case $x' \\notin (a,b)$); Example 7.3.1 (the Gaussian family $(\\epsilon\\pi)^{-1/2}e^{-(x-x')^2/\\epsilon}$ and Fig. 7.2); Example 7.3.2 (the family $\\sin T(x-x')/\\pi(x-x')$ and Eq. (7.22)); Example 7.3.3 with Eq. (7.23) ($d\\theta/dx = \\delta$); and Eq. (7.24) for the $n$-dimensional delta"
    pages: "229-232"
    role: the Gaussian family that this unit's proof uses, the Fourier-kernel family, the step-function family, and the multidimensional delta
  - work: rhb-2006
    loc: "§11.8.3, p. 405: the point source in an incompressible fluid, the defining properties of the three-dimensional delta as used there, and $\\nabla\\cdot\\mathbf{v} = Q\\delta(\\mathbf{r})$ reconciling the divergence theorem with a non-differentiable source; the source-and-sink field and its divergence"
    pages: "405"
    role: why the three-dimensional delta is introduced in vector calculus, and the point-source example
  - work: stakgold-holst-2011
    loc: "§1.2, pp. 62–63: the delta as the source density of a concentrated unit source, the rectangular family $f_n$, the sifting property (1.2.6) stated for $\\phi$ continuous at the point, and the remark that no integrable function has the required properties"
    pages: "62-63"
    role: the point-source motivation, the rectangular family, and the exact continuity hypothesis in the sifting property
---

:::definition[Delta sequence, the delta, the sifting property]{provenance=adapted src="arfken-2013:§1.11, Eqs. (1.149)–(1.157), pp. 75–78; hassani-2013:§7.3, Eq. (7.20) and Examples 7.3.1–7.3.3, pp. 229–232; stakgold-holst-2011:§1.2, pp. 62–63"}
What one wants is an object $\delta$ concentrated at a single point with unit total weight:

$$
\delta(x) = 0 \ \ (x \ne 0), \qquad \int_a^b f(x)\,\delta(x)\, dx = f(0) \ \ \text{whenever } 0 \in (a,b), \qquad \int_{-\infty}^{\infty}\delta(x)\, dx = 1 .
$$

These are Arfken's Eqs. (1.149)–(1.151). **No function has them**: a function vanishing off a single point has integral zero. Stakgold and Holst make the same point for the concentrated unit source. So the symbol is given meaning in two steps.

- A **delta family** (or delta sequence) is a family $\{\delta_\varepsilon\}_{\varepsilon > 0}$ of integrable functions with $\int_{-\infty}^{\infty}\delta_\varepsilon = 1$ for every $\varepsilon$, becoming taller and narrower as $\varepsilon \to 0$. The standard three are
  $$
  \delta_\varepsilon(x) = \frac{1}{\sqrt{\varepsilon\pi}}\,e^{-x^2/\varepsilon}
  \quad\text{(Gaussian)}, \qquad
  \delta_\varepsilon(x) = \begin{cases} 1/2\varepsilon, & \lvert x\rvert < \varepsilon \\ 0 & \text{otherwise}\end{cases}
  \quad\text{(rectangular)}, \qquad
  D_T(x) = \frac{\sin Tx}{\pi x}
  \quad (T = 1/\varepsilon \to \infty).
  $$
- **$\delta$ is defined by what it does inside an integral.** For a given class of test functions $f$,
  $$
  \int f(x)\,\delta(x)\, dx \;:=\; \lim_{\varepsilon\to 0}\int f(x)\,\delta_\varepsilon(x)\, dx ,
  $$
  which is Arfken's Eq. (1.157). The limit $\lim_{\varepsilon\to 0}\delta_\varepsilon(x)$ itself does not exist, and the integral on the left is not a Riemann integral; $\delta$ is a **distribution**, not a function. Every statement below is an abbreviation for a statement about such limits.

The identity $\int f(x)\,\delta(x - x_0)\, dx = f(x_0)$ is called the **sifting property**; $\delta(x - x_0)$ is the delta translated to $x_0$. In three dimensions,

$$
\delta^{(3)}(\mathbf{r}) = \delta(x)\,\delta(y)\,\delta(z), \qquad
\int_V f(\mathbf{r})\,\delta^{(3)}(\mathbf{r} - \mathbf{a})\, dV = \begin{cases} f(\mathbf{a}), & \mathbf{a} \in V, \\ 0, & \mathbf{a} \notin V,\end{cases}
$$

which is the form Riley, Hobson and Bence use for a point source and Hassani's Eq. (7.24) in $n$ dimensions. The object $\delta^{(3)}$ is localized at a point and carries unit integrated weight whatever coordinate system is in use; in spherical polars this reads $\int f(r,\theta,\phi)\,\delta^{(3)}(\mathbf{r}-\mathbf{r}_1)\, r^2\sin\theta\, dr\, d\theta\, d\phi = f(\mathbf{r}_1)$, Arfken's Eq. (1.162).
:::

:::statement[The Gaussian family sifts]{provenance=original}
Let $\delta_\varepsilon(x) = (\varepsilon\pi)^{-1/2}e^{-x^2/\varepsilon}$ for $\varepsilon > 0$, and let $f : \mathbb{R}\to\mathbb{R}$ be bounded and continuous at $x = 0$. Then

$$
\int_{-\infty}^{\infty}\delta_\varepsilon(x)\, dx = 1 \quad\text{for every } \varepsilon > 0,
\qquad\text{and}\qquad
\lim_{\varepsilon\to 0^+}\int_{-\infty}^{\infty} f(x)\,\delta_\varepsilon(x)\, dx = f(0) .
$$

Continuity at the one point $x = 0$ is all that is needed; $f$ may be discontinuous elsewhere. Arfken's Eq. (1.150) states the sifting property for "any well-behaved function", and Stakgold and Holst state their Eq. (1.2.6) for $\phi$ continuous at the point in question, which is the hypothesis used here.
:::

:::statement[Working rules]{provenance=adapted src="arfken-2013:§1.11, Eqs. (1.158)–(1.162), pp. 78–79; hassani-2013:§7.3, Eqs. (7.22)–(7.23), pp. 231–232"}
Each identity below means that the two sides give the same value when integrated against a test function.

1. **Evenness.** $\delta(-x) = \delta(x)$.
2. **Rescaling.** $\delta(ax) = \delta(x)/\lvert a\rvert$ for real $a \ne 0$. (Arfken states Eq. (1.158) for $a>0$ and records the modulus for $a<0$ immediately after.)
3. **Shift.** $\int f(x)\,\delta(x - x_0)\, dx = f(x_0)$.
4. **Composition with a function.** If $g$ is $C^1$ with simple zeros $a_i$ on the real axis, so that $g'(a_i) \ne 0$, then
   $$
   \delta\bigl(g(x)\bigr) = \sum_i \frac{\delta(x - a_i)}{\lvert g'(a_i)\rvert},
   \qquad\text{hence}\qquad
   \int f(x)\,\delta\bigl(g(x)\bigr)\, dx = \sum_i \frac{f(a_i)}{\lvert g'(a_i)\rvert} .
   $$
5. **Derivative.** $\displaystyle\int f(x)\,\delta'(x - x_0)\, dx = -f'(x_0)$, which may be taken as the definition of $\delta'$; more generally the $n$-th derivative gives $(-1)^nf^{(n)}(x_0)$.
6. **Step function.** With $\theta(x - x_0) = 0$ for $x < x_0$ and $1$ for $x > x_0$, $\ \dfrac{d}{dx}\theta(x - x_0) = \delta(x - x_0)$ (Hassani's Eq. (7.23)).
7. **Fourier representation.** $\displaystyle\delta(x - x') = \frac{1}{2\pi}\int_{-\infty}^{\infty}e^{i(x-x')t}\, dt$, meaningful only under a further integral sign (Hassani's Eq. (7.22), Arfken's Eq. (1.163)).
:::

:::statement[The Laplacian of $1/r$]{provenance=adapted src="arfken-2013:§3.9, Eqs. (3.119)–(3.121), p. 177"}
Let $r = \lvert\mathbf{r}\rvert$. Then $\nabla^2(1/r) = 0$ at every point with $r > 0$, while

$$
\nabla^2\frac{1}{r} = -4\pi\,\delta^{(3)}(\mathbf{r}) ,
$$

meaning precisely that

$$
\int_{\mathbb{R}^3} \frac{1}{r}\,\nabla^2 f(\mathbf{r})\; dV = -4\pi\, f(\mathbf{0})
\qquad\text{for every } f \in C^2(\mathbb{R}^3) \text{ of compact support.}
$$

In the two-point form, $\nabla_1^2\bigl(1/r_{12}\bigr) = -4\pi\,\delta^{(3)}(\mathbf{r}_1-\mathbf{r}_2)$ with $r_{12} = \lvert\mathbf{r}_1-\mathbf{r}_2\rvert$, the subscript on $\nabla_1$ indicating that the derivatives act on $\mathbf{r}_1$. Arfken stresses that this identity sidesteps the non-existence of the derivatives of $1/r$ at the origin and is meaningful only inside an integral; it is what makes the point-charge potential $q/4\pi\varepsilon_0 r$ a solution of Poisson's equation $\nabla^2\varphi = -q\,\delta^{(3)}(\mathbf{r})/\varepsilon_0$.
:::

:::idea{provenance=original}
The sifting property is a statement that a narrowing bump cannot see anything but the value of $f$ at its centre. Split the integral at a small radius $\rho$: inside, $f$ differs from $f(0)$ by as little as we like, by continuity, and the bump's total mass there is at most $1$; outside, $f$ is merely bounded, and the bump's mass out there tends to $0$ because the mass is normalized and the bump is concentrating. Choosing $\rho$ first and then $\varepsilon$ makes both errors small.

For $\nabla^2(1/r)$ the mechanism is geometric. Away from the origin $1/r$ is harmonic, so all the content sits at the one bad point; and the flux of $\nabla(1/r) = -\hat{\mathbf{r}}/r^2$ through a sphere of radius $a$ is $-(1/a^2)(4\pi a^2) = -4\pi$, the same for every $a$, because the field weakens exactly as fast as the sphere grows. So the divergence theorem assigns a total "divergence" of $-4\pi$ to any region containing the origin and $0$ to any region avoiding it: that is what $-4\pi\delta^{(3)}$ records. The proof below converts this into a statement about integrals against test functions, by excising a small ball and using Green's second identity on the shell that remains.
:::

:::proof[The Gaussian family sifts]{provenance=original}
**Step 1 (normalization).** Substituting $x = \sqrt\varepsilon\, s$ and using $\int_{-\infty}^\infty e^{-s^2}\, ds = \sqrt\pi$ (:ref[Gaussian integrals]{to=found.gaussian-integrals}),

$$
\int_{-\infty}^{\infty}\delta_\varepsilon(x)\, dx = \frac{1}{\sqrt{\varepsilon\pi}}\int_{-\infty}^{\infty} e^{-x^2/\varepsilon}\, dx = \frac{1}{\sqrt{\varepsilon\pi}}\cdot\sqrt{\varepsilon}\cdot\sqrt{\pi} = 1 .
$$

**Step 2 (what has to be estimated).** Since $\delta_\varepsilon$ integrates to $1$,

$$
\int f\,\delta_\varepsilon\, dx - f(0) = \int_{-\infty}^{\infty}\bigl[f(x) - f(0)\bigr]\,\delta_\varepsilon(x)\, dx ,
$$

and the integral converges absolutely because $f$ is bounded and $\delta_\varepsilon$ is integrable. Let $M = \sup\lvert f\rvert$ and fix $\eta > 0$.

**Step 3 (the near part, using continuity at $0$).** By continuity of $f$ at $0$ there is $\rho > 0$ with $\lvert f(x) - f(0)\rvert < \eta/2$ for $\lvert x\rvert \le \rho$. Since $\delta_\varepsilon \ge 0$ and its total integral is $1$,

$$
\left\lvert \int_{\lvert x\rvert \le \rho}\bigl[f - f(0)\bigr]\delta_\varepsilon\, dx \right\rvert \;\le\; \frac{\eta}{2}\int_{\lvert x\rvert\le\rho}\delta_\varepsilon\, dx \;\le\; \frac{\eta}{2} .
$$

**Step 4 (the far part, using boundedness and concentration).** On $\lvert x\rvert > \rho$ we only know $\lvert f - f(0)\rvert \le 2M$. Substituting $x = \sqrt\varepsilon s$ again,

$$
\int_{\lvert x\rvert > \rho}\delta_\varepsilon(x)\, dx = \frac{2}{\sqrt\pi}\int_{\rho/\sqrt\varepsilon}^{\infty} e^{-s^2}\, ds \;\le\; \frac{2}{\sqrt{\pi}}\;\frac{e^{-\rho^2/\varepsilon}}{2\rho/\sqrt{\varepsilon}} ,
$$

using $\int_T^\infty e^{-s^2}ds \le \int_T^\infty (s/T)e^{-s^2}ds = e^{-T^2}/2T$ for $T > 0$. The right-hand side tends to $0$ as $\varepsilon \to 0^+$ with $\rho$ held fixed, so there is $\varepsilon_0 > 0$ such that for $0 < \varepsilon < \varepsilon_0$ the far part contributes less than $\eta/2$ in absolute value — here the hypothesis that $f$ is *bounded* is used, and nothing more.

**Step 5 (conclude).** For $0 < \varepsilon < \varepsilon_0$ the two estimates give $\bigl\lvert\int f\delta_\varepsilon - f(0)\bigr\rvert < \eta$. As $\eta > 0$ was arbitrary, the limit is $f(0)$. $\square$
:::

:::proof[The Laplacian of $1/r$]{provenance=original}
**Step 1 ($1/r$ is harmonic off the origin).** For a function of $r$ alone, $\nabla^2F = F'' + (2/r)F'$ (:ref[the radial Laplacian]{to=vcalc.divergence-curl}). With $F = 1/r$ we have $F' = -1/r^2$ and $F'' = 2/r^3$, so

$$
\nabla^2\frac{1}{r} = \frac{2}{r^3} - \frac{2}{r}\cdot\frac{1}{r^2} = 0 \qquad (r > 0) .
$$

**Step 2 (excise the singularity).** Let $f \in C^2(\mathbb{R}^3)$ vanish outside the ball $r < R$, and for $0 < \varepsilon < R$ let $A_\varepsilon = \{\varepsilon < r < R\}$, a spherical shell on which $u = 1/r$ is $C^\infty$. By :ref[Green's second identity]{to=vcalc.green-identities} applied to $u = 1/r$ and $v = f$ on $A_\varepsilon$, and using $\nabla^2u = 0$ there (Step 1),

$$
\int_{A_\varepsilon}\frac{1}{r}\,\nabla^2 f\; dV = \oint_{\partial A_\varepsilon}\left( \frac{1}{r}\frac{\partial f}{\partial n} - f\,\frac{\partial}{\partial n}\frac{1}{r} \right) dS .
$$

**Step 3 (the outer sphere contributes nothing).** $\partial A_\varepsilon$ has two components. On $r = R$ both $f$ and $\nabla f$ vanish, because $f \equiv 0$ on a neighbourhood of that sphere, so this component contributes $0$.

**Step 4 (the inner sphere).** On $r = \varepsilon$ the normal pointing out of $A_\varepsilon$ points towards the origin, so $\partial/\partial n = -\partial/\partial r$ there, and $-\partial(1/r)/\partial n = +\partial(1/r)/\partial r = -1/\varepsilon^2$. The inner contribution is therefore

$$
\oint_{r=\varepsilon}\left( -\frac{1}{\varepsilon}\frac{\partial f}{\partial r} - \frac{f}{\varepsilon^2} \right) dS .
$$

The first piece is bounded in modulus by $\varepsilon^{-1}\max\lvert\nabla f\rvert\cdot 4\pi\varepsilon^2 = 4\pi\varepsilon\max\lvert\nabla f\rvert$, which tends to $0$; here $f \in C^1$ with bounded gradient is used. The second piece is exactly $-4\pi$ times the average of $f$ over the sphere of radius $\varepsilon$, since the sphere has area $4\pi\varepsilon^2$; as $\varepsilon\to 0$ that average tends to $f(\mathbf{0})$ by continuity. So the inner contribution tends to $-4\pi f(\mathbf{0})$.

**Step 5 (the left side converges to the full integral).** Near the origin $\lvert\nabla^2 f\rvert \le C$, so

$$
\int_{r<\varepsilon}\left\lvert\frac{\nabla^2f}{r}\right\rvert\, dV \;\le\; C\int_0^{\varepsilon}\frac{1}{r}\,4\pi r^2\, dr = 2\pi C\varepsilon^2 \longrightarrow 0 ,
$$

so $(1/r)\nabla^2f$ is absolutely integrable on $r < R$ and $\int_{A_\varepsilon} \to \int_{r<R} = \int_{\mathbb{R}^3}$.

**Step 6 (conclude).** Letting $\varepsilon \to 0$ in Step 2 and using Steps 3–5,

$$
\int_{\mathbb{R}^3}\frac{1}{r}\,\nabla^2 f\; dV = -4\pi f(\mathbf{0}) ,
$$

which is the assertion. Since the distributional Laplacian of $u$ is defined by making $\int (\nabla^2 u)f$ mean $\int u\,\nabla^2 f$ — the two integrations by parts of Green's second identity, with no boundary terms for compactly supported $f$ — this is the statement $\nabla^2(1/r) = -4\pi\delta^{(3)}(\mathbf{r})$. Translating by $\mathbf{r}_2$ gives the two-point form. $\square$
:::

:::remark{provenance=original}
**What the symbols are allowed to mean.**

- *$\delta$ is not a function, and $\delta(0)$ is not a number.* Hassani's remark that "$\delta(0) = \infty$" is a description of the shape of the approximating family, not an equation. Products such as $\delta(x)^2$ and compositions such as $\delta(\delta(x))$ have no meaning at all; the rules of the working list are exactly the operations that survive the limit.
- *Which family is used does not matter, but the test class does.* The Gaussian, rectangular and $\sin Tx/\pi x$ families all sift. The last is not non-negative and not integrable in absolute value on $\mathbb{R}$, so Steps 3 and 4 above do not apply to it verbatim and it requires more of $f$ — which is why the Fourier representation of rule 7 is the most delicate of the list and is stated by both Arfken and Hassani as meaningful only under a further integral.
- *The simple-zero hypothesis in rule 4.* If $g'(a) = 0$ the rule fails: for $g(x) = x^2$ the right-hand side is undefined, and indeed $\int f(x)\,\delta(x^2)\, dx$ has no finite value, since the rectangular family gives $\int_{-\sqrt\varepsilon}^{\sqrt\varepsilon} f/2\varepsilon \sim f(0)/\sqrt{\varepsilon} \to \infty$. Arfken's derivation of rule 4 replaces $g$ near each zero by the first term of its Taylor series, which is legitimate only when that term is nonzero.
- *Where the delta is forced on vector calculus.* The field $\mathbf{v} = Q\hat{\mathbf{r}}/4\pi r^2$ of a point source has $\nabla\cdot\mathbf{v} = 0$ wherever it is defined, yet flux $Q$ out of every surface enclosing the origin: the divergence theorem appears to fail. Riley, Hobson and Bence resolve this by writing $\nabla\cdot\mathbf{v} = Q\,\delta^{(3)}(\mathbf{r})$, after which the theorem holds for every closed surface, enclosing the source or not. This is the same identity as $\nabla^2(1/r) = -4\pi\delta^{(3)}$, since $\mathbf{v} = -(Q/4\pi)\nabla(1/r)$.
- *Dimensions.* $\delta(x)$ has the dimensions of $1/x$, and $\delta^{(3)}(\mathbf{r})$ those of $1/\text{volume}$ — which is why a point charge $q$ has charge density $q\,\delta^{(3)}(\mathbf{r})$ and not $q\,\delta(r)$. Confusing $\delta^{(3)}(\mathbf{r})$ with the radial $\delta(r)$ is the commonest error in spherical coordinates: for a radially symmetric test function, $\delta^{(3)}(\mathbf{r})$ pairs with $f(0)$ while $\delta(r - a)$ pairs with $4\pi a^2 f(a)$ when the volume element is included.
- *What is deferred.* The systematic theory — which test functions, what topology, why the limits exist, how far the calculus extends — belongs to :ref[distributions]{to=fourier.distributions} and :ref[tempered distributions]{to=fourier.tempered-distributions}. Arfken's §1.11 and Stakgold and Holst's §1.2 both say explicitly that their treatment is provisional in exactly this sense, and this unit follows them: it is the practitioner's rulebook, with the two proofs that make the rules trustworthy.
:::

:::example[The Gaussian family sifting a cosine, exactly]{provenance=original}
Take $f(x) = \cos x$, which is bounded and continuous, so the theorem applies. Here the approximating integrals can be computed in closed form:

$$
\int_{-\infty}^{\infty}\frac{\cos x}{\sqrt{\varepsilon\pi}}\;e^{-x^2/\varepsilon}\, dx = e^{-\varepsilon/4} .
$$

1. *Derivation.* Write $\cos x = \tfrac12(e^{ix} + e^{-ix})$ and complete the square: $-x^2/\varepsilon \pm ix = -\bigl(x/\sqrt\varepsilon \mp i\sqrt\varepsilon/2\bigr)^2 - \varepsilon/4$. Each of the two Gaussian integrals (:ref[Gaussian integrals]{to=found.gaussian-integrals}) contributes $\tfrac12\sqrt{\varepsilon\pi}\,e^{-\varepsilon/4}$, and dividing by $\sqrt{\varepsilon\pi}$ leaves $e^{-\varepsilon/4}$.
2. *The limit.* $e^{-\varepsilon/4}\to 1 = \cos 0$ as $\varepsilon\to 0$, as the theorem promises.
3. *Numbers.* $\varepsilon = 0.05$ gives $0.987578$; $\varepsilon = 0.01$ gives $0.997503$. The error is $\varepsilon/4$ to leading order, so the approximation converges, but only linearly in the width parameter — one reason numerical work with narrow bumps is delicate.
4. *A function that is bounded but not continuous at $0$.* For $f = \theta$, the unit step, the same family gives $\int\theta\,\delta_\varepsilon = \tfrac12$ for every $\varepsilon$, by the evenness of $\delta_\varepsilon$. The limit exists but is the *average* of the two one-sided limits, not a value of $f$: with continuity at the point dropped, the conclusion changes.
:::

:::example[A delta composed with a quadratic]{provenance=original}
Evaluate $\displaystyle I = \int_{-\infty}^{\infty}\bigl(x^4 + 1\bigr)\,\delta\bigl(x^2 - 4\bigr)\, dx$.

1. *Zeros and slopes.* $g(x) = x^2 - 4$ vanishes at $a_{1,2} = \pm 2$, and $g'(x) = 2x$, so $\lvert g'(\pm 2)\rvert = 4 \ne 0$: both zeros are simple and rule 4 applies.
2. *Apply the rule.*
   $$
   I = \frac{f(2)}{\lvert g'(2)\rvert} + \frac{f(-2)}{\lvert g'(-2)\rvert} = \frac{17}{4} + \frac{17}{4} = \frac{17}{2} = 8.5 .
   $$
3. *Check it directly from a family.* Using the rectangular family, $\delta_\varepsilon(x^2-4)$ is $1/2\varepsilon$ on the two intervals where $\lvert x^2 - 4\rvert < \varepsilon$, that is, $\lvert x \mp 2\rvert < \varepsilon/4 + O(\varepsilon^2)$. Each interval has length $\varepsilon/2$ to leading order, so each contributes $f(\pm 2)\cdot(\varepsilon/2)/(2\varepsilon) = f(\pm2)/4$, confirming the rule and the factor $\lvert g'\rvert^{-1}$.
4. *Where it would break.* For $\delta(x^2)$ the same computation gives intervals of length $2\sqrt\varepsilon$ and a contribution $f(0)\sqrt{\varepsilon}/\varepsilon\to\infty$: the double zero makes the expression meaningless, as the remark above says.
:::

:::example[$\nabla^2(1/r) = -4\pi\delta^{(3)}$, tested on a Gaussian]{provenance=original}
Take $f(\mathbf{r}) = e^{-r^2}$. This is not of compact support, but it and all its derivatives decay faster than any power, so the proof's estimates apply with the outer sphere pushed to infinity, where the boundary terms vanish.

1. *Its Laplacian.* For a radial function $\nabla^2f = f'' + (2/r)f'$ with $f' = -2re^{-r^2}$ and $f'' = (4r^2-2)e^{-r^2}$, so
   $$
   \nabla^2 f = \bigl(4r^2 - 2 - 4\bigr)e^{-r^2} = \bigl(4r^2 - 6\bigr)e^{-r^2} .
   $$
2. *The integral.* With $dV = 4\pi r^2\, dr$ for a radial integrand,
   $$
   \int_{\mathbb{R}^3}\frac{\nabla^2 f}{r}\; dV = 4\pi\int_0^{\infty}\bigl(4r^3 - 6r\bigr)e^{-r^2}\, dr .
   $$
3. *Evaluate.* $\int_0^\infty re^{-r^2}dr = \tfrac12$ and $\int_0^\infty r^3e^{-r^2}dr = \tfrac12$ (substitute $s = r^2$ in each), so the bracket integrates to $4\cdot\tfrac12 - 6\cdot\tfrac12 = -1$ and
   $$
   \int_{\mathbb{R}^3}\frac{1}{r}\,\nabla^2 f\; dV = -4\pi .
   $$
4. *Comparison.* The identity predicts $-4\pi f(\mathbf{0}) = -4\pi\cdot 1 = -4\pi$. They agree.
5. *A scaled version.* For $f = e^{-\lambda r^2}$ the same computation gives $4\pi\int_0^\infty(4\lambda^2r^3 - 6\lambda r)e^{-\lambda r^2}dr = 4\pi(2 - 3) = -4\pi$, independent of $\lambda$ — as it must be, since $f(\mathbf{0}) = 1$ for every $\lambda$. The integral is insensitive to the width of the test function, which is the signature of a delta.
:::

:::application{provenance=original}
The delta is how a point-like source is written as a density, so that one formula covers both continuous and concentrated sources. A point charge $q$ at $\mathbf{r}_0$ has $\rho = q\,\delta^{(3)}(\mathbf{r}-\mathbf{r}_0)$, and Poisson's equation $\nabla^2\varphi = -\rho/\varepsilon_0$ then has the solution $\varphi = q/4\pi\varepsilon_0\lvert\mathbf{r}-\mathbf{r}_0\rvert$ *because of* the identity proved above; superposing gives the Coulomb integral for any charge distribution, and the same algebra with $\rho$ read as mass density gives Newtonian gravity. A point mass in mechanics, a concentrated load on a beam, and an instantaneous injection of tracer into a flow are the same device.

That observation is the whole idea of a :ref[Green's function]{to=green.laplace-green-functions}: solve the equation once with a delta on the right, and the solution for arbitrary data follows by superposition, since $f(\mathbf{r}) = \int f(\mathbf{r}')\delta^{(3)}(\mathbf{r}-\mathbf{r}')\, dV'$ expresses any source as a superposition of point sources. In signal processing the same function is the impulse response, and rule 7 — the Fourier representation — is what connects it to the transfer function (:ref[convolution]{to=fourier.convolution-theorem}). Rule 6, $\theta' = \delta$, is how a jump in a physical quantity becomes a singular term in its derivative: the surface charge on a conductor, the shock in a compressible flow, the bending moment at a point load.

In probability the delta is the density of a degenerate distribution, so that a mixture of discrete and continuous outcomes has a single density; in quantum mechanics it is the position eigenstate normalization $\langle \mathbf{r}'|\mathbf{r}\rangle = \delta^{(3)}(\mathbf{r}-\mathbf{r}')$, which is what makes the continuous-index formalism of Hassani's §7.3 work; and rule 4 is used constantly to impose energy or momentum conservation inside a phase-space integral, as in $\delta(E_f - E_i)$ in Fermi's golden rule.
:::
