---
id: ode.singular-points-infinity
title: Classifying singular points, including infinity
kind: definition
level: core
summary: 'A point is ordinary, regular singular or irregular singular according to how fast $p$ and $q$ blow up there; the point at infinity is classified by substituting $x = 1/t$ and looking at $t = 0$; an equation all of whose singular points in the extended plane are regular is Fuchsian, and with three such points it is the Riemann equation, whose six exponents sum to one.'
prereqs: [ode.frobenius-method, ode.euler-equation]
provenance: adapted
sources:
  - work: arfken-2013
    loc: "§7.4, Singular Points, the definitions of ordinary, regular and irregular singular points and the $x = 1/z$ transformation, Eqs. (7.19)-(7.22), pp. 343-344; Example 7.4.1 (Bessel's equation), pp. 344-345"
    pages: "343-345"
    role: the classification of a finite point by how fast $P$ and $Q$ diverge; the derivatives under $x = 1/z$ and the resulting criteria for the point at infinity; Bessel's equation as the worked case
  - work: coddington-1989
    loc: "Ch. 4, §9, Regular singular points at infinity, the induced equation Eq. (9.2) and the criterion on $a_1, a_2$, pp. 180-182; §1, the form of solutions at a regular singular point, p. 144; §2, the Euler equation, pp. 145-149"
    pages: "144-149, 180-182"
    role: the induced equation under $x = 1/t$; the definition of a regular singular point at infinity and the equivalent condition that the equation be $x^2y'' + a(x)xy' + b(x)y = 0$ with $a, b$ series in $1/x$; the observations that the Euler equation has exactly $0$ and $\infty$ as singular points and the hypergeometric equation exactly $0, 1, \infty$
  - work: hassani-2013
    loc: "§15.3, the expansions (15.15) and the indicial polynomial at infinity, p. 470; Def. 15.3.1 (Fuchsian differential equation), p. 470; Thm 15.3.2 (Riemann differential equation) and Thm 15.3.3 with the Riemann identity (15.19), pp. 471-472; the hypergeometric form (15.21), p. 473"
    pages: "470-473"
    role: the definition of a Fuchsian equation; the proof route that two regular singular points give an Euler equation and three give the Riemann equation; the exponent form of the Riemann equation and the identity that the six exponents sum to $1$; the reduction to the hypergeometric equation
  - work: rhb-2006
    loc: "§16.1.1, ordinary and singular points and the $w = 1/z$ substitution with Legendre's equation as the worked example, pp. 533-534; Table 16.1 (singularities of the standard equations of physics), p. 535"
    pages: "533-535"
    role: the physicist's statement of the criteria; the worked classification of Legendre's equation at infinity; the table of regular and essential singularities for the hypergeometric, Legendre, Chebyshev, Bessel, Laguerre, Hermite and oscillator equations
---

:::definition[Classification of a finite point]{provenance=adapted src="arfken-2013:§7.4, p. 344; rhb-2006:§16.1.1, pp. 533-534; hassani-2013:§15.2, Def. 15.2.2, p. 464"}
Write the second-order equation in normalised form

$$
y'' + P(x)\,y' + Q(x)\,y = 0 ,
$$

and let $x_0$ be a point of the (complex) plane. Then $x_0$ is

- an **ordinary point** if $P$ and $Q$ are both analytic at $x_0$;
- a **regular singular point** if not, but $(x-x_0)P(x)$ and $(x-x_0)^{2}Q(x)$ are both analytic at $x_0$ — equivalently, if $P$ has at worst a simple pole and $Q$ at worst a pole of order $2$;
- an **irregular singular point**, also called an **essential singularity** of the equation, otherwise.

:cite[Arfken, Weber and Harris]{work=arfken-2013 loc="p. 344"} phrase the last case by the rates of divergence: $x_0$ is irregular if $P$ diverges faster than $(x-x_0)^{-1}$, so that $(x-x_0)P(x) \to \infty$, or if $Q$ diverges faster than $(x-x_0)^{-2}$.

The classification controls what the solutions look like. At an ordinary point both solutions are analytic (:ref[]{to=ode.ordinary-point-series}). At a regular singular point they have the form

$$
(x-x_0)^{r}\sigma(x) + (x-x_0)^{s}\rho(x)\log(x-x_0)
$$

with $\sigma, \rho$ analytic at $x_0$, and the exponents are the roots of an indicial equation (:ref[]{to=ode.frobenius-method}). At an irregular singular point no such description holds in general, and the series the method produces may diverge everywhere.
:::

:::definition[The point at infinity]{provenance=adapted src="coddington-1989:Ch. 4, §9, Eq. (9.2) and the criterion, pp. 180-181; arfken-2013:§7.4, Eqs. (7.20)-(7.22), p. 344; rhb-2006:§16.1.1, p. 534"}
Substitute $x = 1/t$ and set $v(t) = y(1/t)$. Since $dt/dx = -t^{2}$,

$$
\frac{dy}{dx} = -t^{2}\frac{dv}{dt} , \qquad
\frac{d^{2}y}{dx^{2}} = t^{4}\frac{d^{2}v}{dt^{2}} + 2t^{3}\frac{dv}{dt} ,
$$

so the equation becomes the **induced equation**

$$
t^{4}\,v'' + \Bigl[2t^{3} - t^{2}P\bigl(\tfrac1t\bigr)\Bigr]v' + Q\bigl(\tfrac1t\bigr)\,v = 0 ,
$$

or, in normalised form,

$$
v'' + \left[\frac{2}{t} - \frac{P(1/t)}{t^{2}}\right]v' + \frac{Q(1/t)}{t^{4}}\,v = 0 .
$$

The **point at infinity** is called an ordinary point, a regular singular point or an irregular singular point of the original equation according to what $t = 0$ is for the induced equation. Explicitly, infinity is a regular singular point exactly when

$$
P(x) = \sum_{k\ge1}\frac{a_k}{x^{k}} , \qquad Q(x) = \sum_{k\ge2}\frac{b_k}{x^{k}}
$$

with both series convergent for $|x| > r_0$; equivalently, by :cite[Coddington]{work=coddington-1989 loc="Ch. 4, §9, p. 181"}, exactly when the equation can be written

$$
x^{2}y'' + a(x)\,x\,y' + b(x)\,y = 0
$$

with $a$ and $b$ given by convergent power series in $1/x$ for $|x| > r_0$. In that case the indicial polynomial at infinity is

$$
I_\infty(\alpha) \;=\; \alpha(\alpha-1) + (2 - a_1)\,\alpha + b_2 ,
$$

and a solution exists of the form

$$
y(x) = x^{-\alpha}\left(1 + \sum_{k\ge1}\frac{C_k}{x^{k}}\right) ,
$$

$\alpha$ a root of $I_\infty$. Note the sign: an exponent $\alpha$ at infinity describes a solution decaying (or growing) like $x^{-\alpha}$.
:::

:::definition[Fuchsian equations]{provenance=adapted src="hassani-2013:§15.3, Def. 15.3.1, p. 470"}
A homogeneous linear differential equation with single-valued analytic coefficients is a **Fuchsian differential equation** if all of its singular points in the *extended* complex plane — the plane together with the point at infinity — are regular singular points.

Because a function whose only singularities in the extended plane are poles is a rational function, the coefficients of a Fuchsian equation are rational. The number and position of its regular singular points, together with the exponents at each, then determine the equation almost completely; that is what makes the class worth naming.
:::

:::statement[Fuchsian equations with few singular points]{provenance=adapted src="hassani-2013:§15.3, Thms 15.3.2 and 15.3.3 with Eq. (15.19), pp. 471-472, and Eq. (15.21), p. 473; coddington-1989:Ch. 4, §9, pp. 181-182"}
Let the equation $y'' + P y' + Qy = 0$ be Fuchsian.

1. **Two regular singular points.** Mapping them to $0$ and $\infty$ by $\xi = (z-z_1)/(z-z_2)$ forces $\Phi(\xi) = a_1/\xi$ and $\Theta(\xi) = b_2/\xi^{2}$, so the equation becomes

   $$
   \xi^{2}u'' + a_1\,\xi u' + b_2\,u = 0 ,
   $$

   an :ref[Euler equation]{to=ode.euler-equation}, equivalent to one with constant coefficients and therefore producing nothing new. (:cite[Coddington]{work=coddington-1989 loc="p. 181"} records the same fact from the other side: the Euler equation has $0$ and $\infty$ as its only singular points, both regular.)
2. **Three regular singular points.** Mapping them to $0$, $1$, $\infty$ by a Mobius transformation, the most general such equation is the **Riemann differential equation**

   $$
   w'' + \left[\frac{A_1}{z} + \frac{B_1}{z-1}\right]w' + \left[\frac{A_2}{z^{2}} + \frac{B_2}{(z-1)^{2}} - \frac{A_3}{z(z-1)}\right]w = 0 ,
   $$

   with five constants. Writing the exponent pairs at $0$, $1$ and $\infty$ as $(\lambda_1,\lambda_2)$, $(\mu_1,\mu_2)$ and $(\nu_1,\nu_2)$, the equation is determined by them,

   $$
   w'' + \left[\frac{1-\lambda_1-\lambda_2}{z} + \frac{1-\mu_1-\mu_2}{z-1}\right]w'
   + \left[\frac{\lambda_1\lambda_2}{z^{2}} + \frac{\mu_1\mu_2}{(z-1)^{2}} + \frac{\nu_1\nu_2 - \lambda_1\lambda_2 - \mu_1\mu_2}{z(z-1)}\right]w = 0 ,
   $$

   and the six exponents obey the **Riemann identity**

   $$
   \lambda_1 + \lambda_2 + \mu_1 + \mu_2 + \nu_1 + \nu_2 \;=\; 1 .
   $$

   Multiplying $w$ by $z^{\lambda}(z-1)^{\mu}$ shifts the exponent pairs by $(\lambda,\lambda)$, $(\mu,\mu)$ and $(-\lambda-\mu,-\lambda-\mu)$, which normalises three of the six parameters away and brings the equation to the **hypergeometric** form

   $$
   z(1-z)\,w'' + \bigl[\gamma - (1+\alpha+\beta)z\bigr]w' - \alpha\beta\,w = 0 ,
   $$

   whose exponent pairs are $(0, 1-\gamma)$ at $0$, $(0, \gamma-\alpha-\beta)$ at $1$ and $(\alpha,\beta)$ at $\infty$.
:::

:::remark[How to use the classification]{provenance=original}
- **The count of parameters.** A Fuchsian equation with three regular singular points has five constants, and three of them can be absorbed; so there is a three-parameter family of genuinely different equations, which is the hypergeometric family $(\alpha,\beta,\gamma)$. This is why so many of the classical functions are hypergeometric: there is simply nothing else with three regular singular points.
- **The Riemann identity is a cheap check.** Compute the exponents at each singular point independently and add them; if the total is not $1$, something is wrong — either the equation is not Fuchsian with exactly those three points, or an indicial equation has been miscomputed. The example below uses it this way.
- **Exponents at infinity carry a sign.** A root $\alpha$ of $I_\infty$ corresponds to a solution behaving like $x^{-\alpha}$ at large $|x|$. A negative exponent at infinity therefore means a *growing* solution. Confusion between the two conventions is the commonest error in using this material.
- **Irregular points are not a defect of the method.** They are where the interesting asymptotics live. Bessel's equation has a regular singular point at $0$ and an irregular one at infinity, and correspondingly its solutions have convergent Frobenius series near $0$ but only asymptotic expansions, with the oscillatory factor $e^{\pm ix}$, at large $x$ (:cite{work=arfken-2013 loc="§7.5, p. 355"}). An essential singularity at infinity is exactly what allows exponential behaviour there, which no Fuchsian equation can have.
- **Confluence.** Letting two regular singular points merge produces an irregular one: the confluent hypergeometric equation $zw'' + (c-z)w' - aw = 0$ arises from the hypergeometric equation as $1$ and $\infty$ coalesce, and it has a regular singular point at $0$ and an irregular one at $\infty$ — the entry in :cite{work=rhb-2006 loc="Table 16.1, p. 535"}. Bessel's and Laguerre's equations are in the same class, and Hermite's and the oscillator equation have no finite singular point at all and an irregular one at infinity.
:::

:::example[Classifying Chebyshev's equation]{provenance=original}
Take

$$
(1-x^{2})\,y'' - x\,y' + \nu^{2}y = 0 ,
$$

with $\nu$ a constant. Normalised, $P(x) = -x/(1-x^{2})$ and $Q(x) = \nu^{2}/(1-x^{2})$.

1. **Finite singular points.** $P$ and $Q$ are analytic except where $1-x^{2} = 0$, so the only finite singular points are $x = \pm1$, and every other point is ordinary.
2. **The point $x = 1$.**

   $$
   s(x) = (x-1)P(x) = \frac{-x(x-1)}{(1-x)(1+x)} = \frac{x}{1+x} ,
   \qquad
   t(x) = (x-1)^{2}Q(x) = \frac{-\nu^{2}(x-1)}{1+x} ,
   $$

   both analytic at $1$, with $s_0 = \tfrac12$ and $t_0 = 0$. So $x = 1$ is a regular singular point with indicial polynomial $\sigma(\sigma-1) + \tfrac12\sigma = \sigma(\sigma-\tfrac12)$ and exponents

   $$
   (\lambda_1, \lambda_2) = \bigl(0, \tfrac12\bigr) .
   $$

3. **The point $x = -1$.** The same computation with $(x+1)$ gives $s_0 = \tfrac12$, $t_0 = 0$ again, so $x = -1$ is a regular singular point with exponents $(\mu_1,\mu_2) = (0, \tfrac12)$. (The symmetry $x \mapsto -x$ leaves the equation invariant, which is the quick reason.)
4. **The point at infinity.** Expand in powers of $1/x$:

   $$
   P(x) = \frac{x}{x^{2}-1} = \frac{1}{x} + \frac{1}{x^{3}} + \cdots ,
   \qquad
   Q(x) = \frac{-\nu^{2}}{x^{2}-1} = -\frac{\nu^{2}}{x^{2}} - \frac{\nu^{2}}{x^{4}} - \cdots ,
   $$

   both of the required shape, so infinity is a regular singular point with $a_1 = 1$ and $b_2 = -\nu^{2}$. Hence

   $$
   I_\infty(\alpha) = \alpha(\alpha-1) + (2-1)\alpha - \nu^{2} = \alpha^{2} - \nu^{2} ,
   \qquad (\nu_1,\nu_2) = (\nu, -\nu) ,
   $$

   and the two solutions behave like $x^{-\nu}$ and $x^{\nu}$ at large $|x|$.
5. **Fuchsian, with three regular singular points.** So Chebyshev's equation is Fuchsian with singular points $-1, 1, \infty$, all regular — the entry for it in :cite{work=rhb-2006 loc="Table 16.1, p. 535"} — and by the statement above it is a Riemann equation, hence a disguised hypergeometric equation.
6. **The Riemann identity as a check.**

   $$
   \underbrace{0 + \tfrac12}_{x=1} + \underbrace{0 + \tfrac12}_{x=-1} + \underbrace{\nu + (-\nu)}_{x=\infty} \;=\; 1 ,
   $$

   as required, for every $\nu$.
7. **What this predicts, before any series.** The exponent $0$ at each of $x = \pm1$ means one solution is bounded there and (since the exponents differ by $\tfrac12$, not an integer) the other behaves like $(1\mp x)^{1/2}$: no logarithms. The exponent $-\nu$ at infinity means a solution growing like $x^{\nu}$, so for $\nu = n$ a non-negative integer one expects a solution that is a polynomial of degree $n$ — the Chebyshev polynomial $T_n$. For $n = 2$, $T_2 = 2x^{2}-1$ and indeed $(1-x^{2})\cdot4 - x\cdot 4x + 4(2x^{2}-1) = 4 - 4x^{2} - 4x^{2} + 8x^{2} - 4 = 0$, and $T_2 \sim 2x^{2}$ at infinity, matching the exponent $\alpha = -2$.
:::

:::example[Two equations that are not Fuchsian]{provenance=original}
1. **Hermite's equation** $y'' - 2xy' + 2\nu y = 0$ has $P = -2x$ and $Q = 2\nu$, both entire: there is no finite singular point at all. At infinity, $P$ must be a series in $1/x$ starting at $1/x$; instead it grows, and the induced equation has

   $$
   \frac{2}{t} - \frac{P(1/t)}{t^{2}} = \frac{2}{t} + \frac{2}{t^{3}} ,
   $$

   whose product with $t$ is $2 + 2/t^{2}$, not analytic at $0$. So infinity is an irregular singular point, Hermite's equation is not Fuchsian, and nothing prevents its solutions from growing like $e^{x^{2}}$ — which the non-terminating series solutions do, and which is why normalisability quantises $\nu$.
2. **Bessel's equation** $x^{2}y'' + xy' + (x^{2}-\nu^{2})y = 0$ has $P = 1/x$ and $Q = 1 - \nu^{2}/x^{2}$. At $x = 0$: $xP = 1$ and $x^{2}Q = x^{2}-\nu^{2}$ are analytic, so the origin is a regular singular point with $s_0 = 1$, $t_0 = -\nu^{2}$, indicial polynomial $\sigma^{2}-\nu^{2}$ and exponents $\pm\nu$. At infinity: $Q$ must be a series in $1/x$ starting at $1/x^{2}$, but $Q \to 1 \ne 0$, so infinity is irregular. Bessel's equation is therefore not Fuchsian, and its large-$x$ behaviour $x^{-1/2}e^{\pm ix}$ — oscillation, which no power can produce — is exactly what an irregular singular point permits. Compare :cite[Arfken's]{work=arfken-2013 loc="Example 7.4.1, pp. 344-345"} classification of the same equation and the Bessel row of :cite{work=rhb-2006 loc="Table 16.1, p. 535"}.
:::

:::application{provenance=original}
**A map of the special functions.** The table of standard equations in :cite{work=rhb-2006 loc="Table 16.1, p. 535"} is a classification by singular points: hypergeometric, Legendre, associated Legendre and Chebyshev have regular singular points at $-1, 1, \infty$ (or $0, 1, \infty$) and nothing else, and so are all Riemann equations; confluent hypergeometric, Bessel, Laguerre and associated Laguerre have one regular singular point and an irregular one at infinity; Hermite and the oscillator have only the irregular point at infinity. The first group are therefore all the *same* equation after a change of variable and a factor $z^{\lambda}(z-1)^{\mu}$, which explains the web of identities relating Legendre, Gegenbauer, Chebyshev and Jacobi functions: they are different normalisations of ${}_2F_1$.

**Choosing boundary conditions.** In a physical problem the admissible solution is usually picked out by its behaviour at a singular point, and the exponents settle the matter without computing anything. The radial Schrodinger equation has exponents $\ell$ and $-\ell-1$ at the origin, so regularity selects $r^{\ell}$; Legendre's equation has exponents $0$ and $0$ at $x = \pm1$, so one solution is bounded at the poles of the sphere and the other has the logarithm that forces $Q_\ell$ to be discarded; and the exponent at infinity decides whether a solution is normalisable.

**Asymptotics and WKB.** The exponent at infinity tells you the power-law behaviour of a solution at large distance when infinity is a regular singular point, which is precisely the information needed to match an interior solution onto a multipole expansion. When infinity is irregular the solutions instead behave like $e^{S(x)}$ with $S$ a power of $x$, and the leading asymptotics are found by WKB or by the method of dominant balance rather than by series. The classification tells you in advance which of the two situations you are in.

**Monodromy and the global theory.** For a Fuchsian equation the analytic continuation of a solution around each singular point is a linear substitution, and the group these generate — the monodromy group — is a complete global invariant. This is the beginning of the Riemann-Hilbert problem, and it is why Fuchsian equations, and the hypergeometric equation in particular, recur in conformal field theory, in the theory of Painleve equations and in the study of periods of algebraic varieties.
:::
