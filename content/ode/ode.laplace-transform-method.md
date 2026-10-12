---
id: ode.laplace-transform-method
title: Solving initial-value problems with the Laplace transform
kind: method
level: core
summary: Turns a constant-coefficient initial-value problem into one algebraic equation for the transform of the unknown, the subsidiary equation p(s)Y(s) = Q(s) + F(s), whose numerator carries the initial data, and shows how partial fractions, the shifting theorem and the convolution rule recover the solution, including for forcing that is switched on at a later time or delivered as an impulse.
prereqs: [fourier.laplace-transform, ode.constant-coefficients, fourier.partial-fractions, fourier.heaviside-step, fourier.delta-identities, fourier.distributions, green.green-function-bvp]
provenance: adapted
sources:
  - work: arfken-2013
    loc: "§20.8, pp. 1016-1026: the transforms of derivatives, Eqs. (20.147)-(20.149) with their hypotheses, p. 1016; Example 20.8.2 (simple harmonic oscillator), p. 1017; Example 20.8.4 (an impulsive force given by a multiple of the delta, and the ballistic galvanometer), pp. 1019-1020; the substitution rule (20.157) and Eqs. (20.158)-(20.159), p. 1020; Example 20.8.5 (damped oscillator by completing the square), p. 1021; the translation formula (20.164)-(20.166) and the name Heaviside shifting theorem, pp. 1022-1023; the derivative-of-a-transform rules (20.173)-(20.178), pp. 1024-1025; Example 20.8.7 (Bessel's equation), pp. 1025-1026"
    pages: "1016-1026"
    role: the derivative rule and its hypotheses; the shifting theorem; impulsive forcing; the completing-the-square and transform-differentiation devices; the failure of the method for non-constant coefficients; the lower-case-for-transform convention, which this unit reverses
  - work: rhb-2006
    loc: "§13.2, the definition (13.53) and the region of convergence s > s_0, p. 453, the footnote on the near-uniqueness of the inverse and Eq. (13.56), p. 454, and Table 13.1 of standard transforms with their s_0, p. 455; §13.2.1, the transforms of derivatives (13.57)-(13.58), pp. 455-456; §15.1.5, the Laplace transform method, pp. 501-503: the two results (15.31)-(15.32) it needs, the worked example (15.33)-(15.35) with its partial fractions, the coupled-circuit example solved as simultaneous transformed equations, and the Solution method summary, p. 503"
    pages: "453-456, 501-503"
    role: the recipe followed by the method block, the one-step character of the transform solution, the partial-fraction step, the standard transform table and the uniqueness proviso; the bar notation for the transform
  - work: strauss-2008
    loc: "§12.5, pp. 353-355: the definition (1), the table of transforms, whose entries (8) and (9) give the transforms of the Heaviside step and of the delta at t = b as exp(-bs)/s and exp(-bs), the table of properties (i) to (ix), covering the first and second derivative, exponential substitution, the shift rule for a function multiplied by a step at t = b, and convolution, the Bromwich inversion formula (13), and Example 2 solving u'' + (omega^2)u = f(t) with zero data by transform and convolution; Examples 4 and 5, the half-line wave and diffusion equations solved by transforming in t, pp. 355-356"
    pages: "353-356"
    role: the capital-letter convention for the transform, which this unit adopts; the transform pairs for the step and the delta, the convolution property, the Bromwich inversion formula, and the convolution form of the forced solution
---

:::note[Notation, and the three rules the method uses]{provenance=adapted src="arfken-2013:§20.8, Eqs. (20.147)-(20.149), p. 1016 and Eq. (20.166), p. 1023; rhb-2006:§13.2, Eq. (13.53), p. 453 and §13.2.1, Eqs. (13.57)-(13.58), pp. 455-456; strauss-2008:§12.5, Eq. (1), p. 353 and the property table (ii), (iii), (vii), (ix), p. 354"}
Throughout this unit a function of $t$ carries a lower-case letter and **its transform the corresponding capital**:

$$
\mathcal{L}\{v\}(s) = V(s) = \int_0^\infty e^{-st}\, v(t)\,dt
$$

(:ref[the Laplace transform]{to=fourier.laplace-transform}); so the unknown $y$ has transform $Y$, the forcing $f$ has transform $F$, and so on.

The cited books do not agree on this, and the disagreement is pure notation. Strauss writes exactly the convention above, $F(s)$ for the transform of $f(t)$ (:cite{work=strauss-2008 loc="§12.5, Eq. (1), p. 353"}). Riley, Hobson and Bence keep the letter and put a bar on it, $\bar f(s)$ (:cite{work=rhb-2006 loc="§13.2, Eq. (13.53), p. 453"}). Arfken uses the opposite case to ours: for him the time function is the capital and the transform the lower-case letter, $\mathcal{L}\{F(t)\} = f(s)$ (:cite{work=arfken-2013 loc="§20.8, Eqs. (20.147)-(20.149), p. 1016"}). Every formula imported from Arfken below is therefore restated in the convention above, his $F$ becoming our $v$ and his $f$ our $V$.

Three properties of the transform, proved in the unit cited above, are the whole machinery of this unit.

1. **Derivatives.** Integration by parts gives
$$
\mathcal{L}\{v'\}(s) = s\,V(s) - v(+0) ,
$$
and by iteration
$$
\mathcal{L}\{v^{(n)}\}(s) = s^n V(s) - s^{n-1}v(+0) - s^{n-2}v'(+0) - \dots - v^{(n-1)}(+0) .
$$
Arfken attaches three conditions to these identities (:cite{work=arfken-2013 loc="§20.8, the text following Eq. (20.147), p. 1016"}). The value at the origin is to be read as the one-sided limit $v(+0)$. The derivative is allowed jumps, being asked only to be piecewise continuous on the whole half-line $t \ge 0$. And the transform integrals of $v$ and of $v'$ must both converge rather than run off to infinity. Riley, Hobson and Bence derive the same identities and append the proviso $s > 0$ (:cite{work=rhb-2006 loc="§13.2.1, Eqs. (13.57)-(13.58), pp. 455-456"}); the remark on limitations below returns to the difference.
2. **Shifting in $t$ (the Heaviside shifting theorem).** For $b > 0$,
$$
\mathcal{L}\bigl\{ H(t-b)\,v(t-b)\bigr\}(s) = e^{-bs}\,V(s) ,
$$
with $H$ the :ref[Heaviside step]{to=fourier.heaviside-step}. Arfken derives it in the form $\mathcal{L}\{v(t-b)\} = e^{-bs}V(s)$ on the convention that $v$ vanishes for negative argument, and notes that it is a Heaviside factor inserted into the integrand that enforces that convention; he calls the result the Heaviside shifting theorem (:cite{work=arfken-2013 loc="§20.8, Eqs. (20.164)-(20.166), pp. 1022-1023"}). Strauss lists it in the form above (:cite{work=strauss-2008 loc="§12.5, property (vii), p. 354"}).
3. **Convolution.** $\mathcal{L}\bigl\{\int_0^t v(t-\tau)\,w(\tau)\,d\tau\bigr\}(s) = V(s)\,W(s)$ (:cite{work=strauss-2008 loc="§12.5, property (ix), p. 354"}).

Two transform pairs are used constantly: $\mathcal{L}\{H(t-b)\} = e^{-bs}/s$ and $\mathcal{L}\{\delta(t-b)\} = e^{-bs}$, both tabulated by Strauss and by Riley, Hobson and Bence (:cite{work=strauss-2008 loc="§12.5, entries (8) and (9), p. 353"}; :cite{work=rhb-2006 loc="§13.2, Table 13.1, p. 455"}). The second is a statement about the :ref[delta distribution]{to=fourier.delta-identities} rather than about a function, and is read as $\int_0^\infty e^{-st}\delta(t-b)\,dt = e^{-bs}$.
:::

:::statement[The subsidiary equation]{provenance=adapted src="rhb-2006:§15.1.5, pp. 501-503; arfken-2013:§20.8, pp. 1016-1017"}
Let $a_1, \dots, a_n$ be constants, let

$$
p(s) = s^n + a_1 s^{n-1} + \dots + a_{n-1}s + a_n
$$

be the characteristic polynomial of the operator $L = \frac{d^n}{dt^n} + a_1\frac{d^{n-1}}{dt^{n-1}} + \dots + a_n$, and consider

$$
L y = f(t), \qquad y(0) = y_0, \ y'(0) = y_1, \ \dots, \ y^{(n-1)}(0) = y_{n-1} .
$$

Assume $y$ and its first $n$ derivatives have Laplace transforms in the sense of rule 1 above, and write, in the capital-for-transform convention of the note, $Y = \mathcal{L}\{y\}$ and $F = \mathcal{L}\{f\}$. Then $Y$ satisfies one algebraic equation, the **subsidiary equation**

$$
p(s)\,Y(s) = Q(s) + F(s), \qquad
Q(s) = \sum_{m=1}^{n} a_{n-m}\sum_{j=0}^{m-1} s^{\,m-1-j}\, y_j \quad (a_0 := 1) ,
$$

so that

$$
Y(s) = \frac{Q(s)}{p(s)} + \frac{F(s)}{p(s)} .
$$

Here $Q$ is a polynomial of degree at most $n-1$ built from the initial data alone, and $1/p(s)$ — the **transfer function** — knows only the equation. Consequently:

1. **Separation of the two jobs.** $y = y_{\text{free}} + y_{\text{forced}}$ with $Y_{\text{free}} = Q/p$ and $Y_{\text{forced}} = F/p$. The first depends only on the initial data, the second only on the forcing.
2. **The free part is the complementary function.** $Q/p$ is a *proper* rational function, so partial fractions (:ref[partial fractions for inverse transforms]{to=fourier.partial-fractions}) express it as a sum of terms $c/(s-\lambda)^k$ with $\lambda$ a root of $p$ and $k$ at most its multiplicity; inverting term by term with $\mathcal{L}^{-1}\{(s-\lambda)^{-k}\} = t^{k-1}e^{\lambda t}/(k-1)!$ gives exactly the solutions $t^{k-1}e^{\lambda t}$ of :ref[the constant-coefficient equation]{to=ode.constant-coefficients}. The characteristic equation and the denominator of the transform are the same polynomial.
3. **The forced part is a convolution.** By rule 3, with $k = \mathcal{L}^{-1}\{1/p\}$,
$$
y_{\text{forced}}(t) = \int_0^t k(t-\tau)\,f(\tau)\,d\tau .
$$
The kernel $k$ is the **impulse response**: it is the solution of $Lk = 0$ with $k(0) = \dots = k^{(n-2)}(0) = 0$, $k^{(n-1)}(0) = 1$, and this integral is the Duhamel integral of :ref[nonhomogeneous systems]{to=ode.nonhomogeneous-systems} in scalar form. Strauss's Example 2 is this statement for $n = 2$: $u'' + \omega^2 u = f$ with zero data has $U(s) = F(s)/(s^2+\omega^2)$, hence $u(t) = \int_0^t \omega^{-1}\sin\bigl(\omega(t-\tau)\bigr)f(\tau)\,d\tau$ (:cite{work=strauss-2008 loc="§12.5, Example 2, pp. 354-355"}).

For $n = 2$ the polynomial $Q$ is $Q(s) = (s + a_1)y_0 + y_1$, which is the form Riley, Hobson and Bence produce in their worked example and the one met in practice (:cite{work=rhb-2006 loc="§15.1.5, Eqs. (15.33)-(15.34), p. 502"}).

The same manipulation handles a **system** of constant-coefficient equations: transforming each equation gives a set of simultaneous linear algebraic equations in the transforms, which are then solved by elimination, as in the coupled-circuit example of :cite{work=rhb-2006 loc="§15.1.5, pp. 502-503"} and the Earth-nutation example of :cite{work=arfken-2013 loc="§20.8, Example 20.8.3, pp. 1018-1019"}. Arfken makes this the headline property of the method: coupled constant-coefficient differential equations transform into simultaneous linear algebraic equations (:cite{work=arfken-2013 loc="§20.8, p. 1016"}).
:::

:::idea{provenance=original}
Each differentiation costs one factor of $s$ and leaves behind one piece of initial data; that is the whole of rule 1. Apply it to every term of a constant-coefficient equation and the differential operator becomes multiplication by its characteristic polynomial, while the debris of initial data collects into a polynomial of lower degree. One division then solves the problem in the transform variable, and all the remaining work — partial fractions, table look-up, shifting — is about getting back. The reason the initial data land in the *numerator* and the equation in the *denominator* is worth noticing: it is why changing the initial conditions cannot change which exponentials appear in the answer, only their coefficients.
:::

:::proof{provenance=original}
1. **Transform each term.** Write $\mathcal{L}\{y^{(m)}\} = s^m Y - \sum_{j=0}^{m-1}s^{\,m-1-j}y_j$, which is rule 1 with $n$ replaced by $m$ (and is an empty sum for $m=0$, i.e. $\mathcal{L}\{y\} = Y$). The equation $Ly = f$ reads $\sum_{m=0}^{n} a_{n-m}\,y^{(m)} = f$ with $a_0 = 1$, and $\mathcal{L}$ is linear, so
$$
\sum_{m=0}^{n} a_{n-m}\Bigl[s^m Y - \sum_{j=0}^{m-1}s^{\,m-1-j}y_j\Bigr] = F(s) .
$$
The coefficients being **constants** is what allows this: $\mathcal{L}$ is linear over constants, not over functions of $t$, and that restriction is exactly the limitation discussed in the remark below.

2. **Collect.** $\sum_{m=0}^n a_{n-m}s^m = p(s)$ by definition, and the remaining double sum is $Q(s)$, which therefore satisfies $p(s)Y(s) - Q(s) = F(s)$. Each inner sum has highest power $s^{m-1}$, and the outer index runs to $m = n$, so $\deg Q \le n-1$.

3. **Part 1** is the linearity of $\mathcal{L}^{-1}$ applied to the splitting $Y = Q/p + F/p$: the two inverse transforms are separately well defined, and their sum is $y$ because the inverse transform is linear and (up to the proviso recorded below) unique.

4. **Part 2.** $\deg Q \le n - 1 < n = \deg p$, so $Q/p$ is proper and the partial-fraction theorem applies with no polynomial part. Each resulting term is $c\,(s-\lambda)^{-k}$ with $\lambda$ a root of $p$ and $1 \le k \le$ its multiplicity. From $\mathcal{L}\{t^{k-1}\} = (k-1)!/s^{k}$ and the substitution rule $\mathcal{L}\{e^{\lambda t}v(t)\}(s) = V(s - \lambda)$ (:cite{work=arfken-2013 loc="§20.8, Eq. (20.157), p. 1020"}) we get $\mathcal{L}\{t^{k-1}e^{\lambda t}\} = (k-1)!\,(s-\lambda)^{-k}$, which inverts each term. The functions so produced are precisely a basis of the solution space of $Ly = 0$.

5. **Part 3.** $1/p$ is proper, so it is the transform of some $k$ by step 4; then $F/p = \mathcal{L}\{k\}\mathcal{L}\{f\}$, and rule 3 identifies the inverse transform as $\int_0^t k(t-\tau)f(\tau)d\tau$. To see that $k$ has the stated initial data, apply the subsidiary equation to the problem $Lk = 0$ with those data: $Q(s)$ then reduces to its $m = n$, $j = n-1$ term, $a_0 \cdot s^0 \cdot k^{(n-1)}(0) = 1$, so $K(s) = 1/p(s)$. Conversely a function with transform $1/p$ is unique, so $k$ is that solution. Finally $y_{\text{forced}}$ has $n-1$ vanishing derivatives at $0$, because differentiating $\int_0^t k(t-\tau)f(\tau)d\tau$ $j < n$ times gives $\int_0^t k^{(j)}(t-\tau)f(\tau)\,d\tau$ plus terms containing $k^{(i)}(0)$ with $i < j \le n-1$, all zero; so the splitting in part 1 matches the initial data as claimed. $\square$
:::

:::method[Solving a constant-coefficient initial-value problem by transform]{provenance=adapted src="rhb-2006:§15.1.5, the Solution method, p. 503"}
1. **Transform the whole equation**, using the derivative rule, and substitute the given values of $y(0), y'(0), \dots$ as you go. The initial conditions enter here and are never fitted afterwards — the reason Riley, Hobson and Bence describe the method as giving the solution in one step instead of requiring a complementary function and a particular integral to be found separately (:cite{work=rhb-2006 loc="§15.1.5, p. 501"}).
2. **Solve the resulting algebraic equation for $Y(s)$.** For a system, solve the simultaneous algebraic equations by elimination. The result is always a rational function of $s$, possibly multiplied by factors $e^{-bs}$ if the forcing is switched on at times $b > 0$.
3. **Put each rational factor into partial fractions** (:ref[partial fractions]{to=fourier.partial-fractions}). Factor the denominator first; a real quadratic factor with complex roots is best kept intact and handled by **completing the square**, $s^2 + 2\alpha s + \beta^2 = (s+\alpha)^2 + \omega^2$ with $\omega^2 = \beta^2 - \alpha^2$, after which the numerator is arranged as $A(s+\alpha) + B\omega$ so that the two standard pairs $e^{-\alpha t}\cos\omega t$ and $e^{-\alpha t}\sin\omega t$ apply. Arfken's damped-oscillator example is this step done once (:cite{work=arfken-2013 loc="§20.8, Example 20.8.5, p. 1021"}).
4. **Invert term by term from a table** (:cite{work=rhb-2006 loc="§13.2, Table 13.1, p. 455"}). A factor $e^{-bs}$ is removed last, by the shifting theorem: if $\mathcal{L}^{-1}\{\Psi(s)\} = \psi(t)$, then $\mathcal{L}^{-1}\{e^{-bs}\Psi(s)\} = H(t-b)\,\psi(t-b)$. Where a factor of the transform has no convenient inverse, use the convolution rule instead and leave the answer as an integral.
5. **If the table fails**, two further devices often rescue the inversion: differentiating a known transform with respect to a parameter, since $\mathcal{L}\{(-t)^n v(t)\}(s) = V^{(n)}(s)$ — Arfken's rule, restated in our convention (:cite{work=arfken-2013 loc="§20.8, Eqs. (20.173)-(20.174), pp. 1024-1025"}) — and in the last resort the Bromwich inversion integral $v(t) = (2\pi i)^{-1}\int_{\alpha - i\infty}^{\alpha+i\infty}e^{st}V(s)\,ds$ (:cite{work=strauss-2008 loc="§12.5, Eq. (13), p. 354"}), evaluated by residues as in :ref[the Laplace transform]{to=fourier.laplace-transform}.
6. **Check.** Verify the initial conditions directly on the answer; verify the differential equation at one convenient value of $t$ or symbolically; and check the limit $s \to \infty$ of the subsidiary equation against $y(0)$, since $sY(s) \to y(+0)$.

**When to use it, and when not.** The transform is the method of choice when the forcing is discontinuous, impulsive, or switched on at a later time, because a step or a delta transforms to something no more complicated than $e^{-bs}/s$ or $e^{-bs}$, whereas handling them by undetermined coefficients requires splitting the time axis and matching at the junctions by hand. It is the wrong tool when the coefficients are not constant, when the data are given at two different points instead of all at $t = 0$ (a boundary-value problem — use :ref[Green's functions]{to=green.green-function-bvp}), or when the forcing has no elementary transform.
:::

:::statement[Switched and impulsive forcing]{provenance=original}
Let $L$ be as above with $n \ge 1$, let $k = \mathcal{L}^{-1}\{1/p\}$ be the impulse response, and let $b > 0$. For zero initial data:

1. **Impulse.** The problem $Ly = c\,\delta(t-b)$ has transform $Y(s) = c\,e^{-bs}/p(s)$, hence
$$
y(t) = c\,H(t-b)\,k(t-b) .
$$
So $y$ vanishes until the impulse arrives and then evolves as a free solution; $y, y', \dots, y^{(n-2)}$ are continuous at $t = b$, while $y^{(n-1)}$ jumps there by $c$. Nothing but the jump distinguishes an impulse from a change of initial condition: an impulse of strength $c$ at time $b$ is the same as restarting the equation at $t = b$ with $y^{(n-1)}$ increased by $c$.
2. **Step.** The problem $Ly = c\,H(t-b)$ has $Y(s) = c\,e^{-bs}/\bigl(s\,p(s)\bigr)$, hence
$$
y(t) = c\,H(t-b)\,\kappa(t-b), \qquad \kappa(t) = \int_0^t k(\tau)\,d\tau ,
$$
so the **step response** $\kappa$ is the integral of the impulse response. Now $y, y', \dots, y^{(n-1)}$ are all continuous at $t = b$ and $y^{(n)}$ jumps by $c$.
3. **Several pieces.** Because the problem is linear, a forcing assembled from steps, impulses and ordinary pieces is handled term by term and the results added; the shifting theorem supplies one $H(t - b_i)$ per switch-on time.

Part 1 is to be read distributionally: $\delta$ is not a function and $y$ is not a classical solution at $t = b$ (:ref[distributions]{to=fourier.distributions}). The content that survives in classical terms is exactly the jump statement, and that is how the formula is verified below. The remark after the proof records the $n = 2$ case as Arfken gives it.
:::

:::idea{provenance=original}
The transform turns "wait until time $b$, then act" into a multiplication by $e^{-bs}$, and multiplication is something an algebraic expression can absorb without any case distinction. So all three parts are the single observation that the forcing's transform factors as $e^{-bs}$ times something already inverted. The classical content — which derivative jumps and by how much — is then read off by integrating the differential equation across $t = b$: only the top derivative can absorb a delta, so only it jumps, and the amount is the strength of the delta.
:::

:::proof{provenance=original}
1. **Impulse.** $\mathcal{L}\{c\,\delta(t-b)\} = c\,e^{-bs}$, so the subsidiary equation with zero data gives $Y = c\,e^{-bs}/p(s) = c\,e^{-bs}\mathcal{L}\{k\}$, and the shifting theorem (rule 2, available because $b>0$) inverts this to $c\,H(t-b)k(t-b)$.

   For the jump statement, argue classically. On $t < b$ the function is $0$ and on $t > b$ it is $c\,k(t-b)$, which solves $Ly = 0$ there. Since $k(0) = \dots = k^{(n-2)}(0) = 0$ and $k^{(n-1)}(0) = 1$, the one-sided limits at $b$ are
$$
y^{(j)}(b^-) = 0 = y^{(j)}(b^+) \ \ (j \le n-2), \qquad y^{(n-1)}(b^-) = 0, \quad y^{(n-1)}(b^+) = c ,
$$
which is continuity of the first $n-1$ functions and a jump of $c$ in the last. Conversely, integrating $Ly = c\,\delta(t-b)$ over $(b-\varepsilon, b+\varepsilon)$: the term $y^{(n)}$ integrates to $y^{(n-1)}(b+\varepsilon) - y^{(n-1)}(b-\varepsilon)$, every lower term integrates to something tending to $0$ with $\varepsilon$ because $y^{(j)}$ is bounded for $j \le n-1$, and the right-hand side integrates to $c$. So the jump in $y^{(n-1)}$ must be $c$, and no lower derivative may jump, since a jump in $y^{(j)}$ with $j \le n-2$ would make $y^{(j+1)}$ contain a delta and $y^{(n)}$ a derivative of a delta, which the right-hand side does not have.

2. **Step.** $\mathcal{L}\{c\,H(t-b)\} = c\,e^{-bs}/s$, so $Y = c\,e^{-bs}/(s\,p(s))$. By rule 1 read backwards — or by the convolution rule with $\mathcal{L}\{1\} = 1/s$ — division of a transform by $s$ corresponds to integration from $0$: $\mathcal{L}\{\int_0^t k\} = \mathcal{L}\{k\}/s$, since $\kappa' = k$ and $\kappa(0) = 0$ give $\mathcal{L}\{k\} = s\mathcal{L}\{\kappa\} - 0$. Hence $1/(s\,p(s)) = \mathcal{L}\{\kappa\}$ and the shifting theorem finishes it. The continuity statement follows from part 1 by integration: $\kappa^{(j)} = k^{(j-1)}$ for $j \ge 1$, so $\kappa, \dots, \kappa^{(n-1)}$ all vanish at $0$ and $\kappa^{(n)}(0) = k^{(n-1)}(0) = 1$.

3. **Several pieces.** $\mathcal{L}$ and $\mathcal{L}^{-1}$ are linear, and so is $L$; a finite sum of forcings therefore produces the sum of the responses. $\square$
:::

:::remark[The second-order case, as Arfken reads it]{provenance=adapted src="arfken-2013:§20.8, Example 20.8.4, pp. 1019-1020"}
Part 1 appears in the cited sources only in its second-order case, and Arfken reads it mechanically rather than algebraically. His operator is the bare $L = m\,d^2/dt^2$ and his forcing a multiple of the delta, so the single jump the statement predicts is a jump in the velocity: the impulse transfers its strength in units of linear momentum to the particle, instantaneously, and after that the particle coasts. He then runs the identical computation for a ballistic galvanometer, where the deposit is of angular momentum and its size is proportional to the charge $q$ passed (:cite{work=arfken-2013 loc="§20.8, Example 20.8.4, pp. 1019-1020"}). Translating to the statement above: $n = 2$, the derivative that jumps is $y^{(n-1)} = y'$, and the strength $c$ of the impulse is the transferred momentum divided by $m$ — with the one difference that Arfken delivers his kick at $t = 0$, whereas the statement above keeps $b > 0$ so that the shifting theorem can be used. The general-$n$ form of the statement — one impulse, one jump, in the top derivative only — is the handbook's extension of that reading, not Arfken's.
:::

:::remark[Limitations, and the small print]{provenance=adapted src="arfken-2013:§20.8, pp. 1016, 1025-1026; rhb-2006:§13.2, p. 454 and §13.2.1, pp. 455-456"}
- **Constant coefficients are essential.** If a coefficient depends on $t$ the transform of the equation is no longer algebraic. Arfken's Example 20.8.7 shows what happens instead: Bessel's equation of order zero, written here as $t\,w'' + w' + t\,w = 0$, transforms — using also $\mathcal{L}\{t\,v(t)\}(s) = -V'(s)$ — into the *first-order differential equation* $(s^2+1)W'(s) + s\,W(s) = 0$ for the transform $W = \mathcal{L}\{w\}$, which happens to be solvable and yields $W(s) = C(s^2+1)^{-1/2}$ (:cite{work=arfken-2013 loc="§20.8, Example 20.8.7, pp. 1025-1026"}; Arfken writes the same calculation with his $F$ for $w$ and his $f$ for $W$). He presents it as an interesting application of the transform-differentiation rule, and gives the general warning separately, where the derivative rules are set up, by pointing the reader to that very example for what may happen when the coefficients are *not* constant, and by locating the power of the transform in the collapse of a constant-coefficient equation to an algebraic one (:cite{work=arfken-2013 loc="§20.8, p. 1016"}). The further comment is ours and not his: the outcome here is a piece of luck — the transformed problem turned out easier than the original — and is not what to expect, since a variable coefficient in general trades one differential equation for another of no lower order.
- **The one-sided value $v(+0)$, not $v(0)$.** The derivative rule carries the limit from the right, because the transform integral starts at $t = 0$. For a problem whose forcing switches on at $t=0$ this matters: $y(+0)$ is the initial condition the transform sees, and a jump of the solution *at* the origin is invisible to it.
- **The region of convergence.** Riley, Hobson and Bence state the derivative rules with the proviso $s > 0$ (:cite{work=rhb-2006 loc="§13.2.1, Eqs. (13.57)-(13.58), pp. 455-456"}), an inequality that holds for the bounded and polynomially growing functions transformed in that subsection but is not sufficient in general: for $v(t) = e^{2t}$ neither side of the first identity exists at $s = 1$. Their own general discussion supplies the condition that is needed, namely that for each $v$ there is a number $s_0$ with the defining integral convergent for $s > s_0$ and divergent for $s \le s_0$, and their table lists $s_0$ for every entry (:cite{work=rhb-2006 loc="§13.2, p. 453 and Table 13.1, p. 455"}). This handbook states the rule with Arfken's hypothesis — that the integrals do not diverge — and reads the inequality on $s$ off the table entry in each case. In practice no harm comes of it, because the final inversion is done by recognizing transforms and not by evaluating any integral at a particular $s$.
- **Uniqueness of the inverse.** Riley, Hobson and Bence say that the inverse transform may for every practical purpose be treated as unique, and attach the footnote that two functions which disagree at only finitely many isolated points share one transform (:cite{work=rhb-2006 loc="§13.2, p. 454 and its footnote"}). This is why the method is entitled to assert that a transform found in a table *is* the solution, and why the value of a switched solution exactly at the switching time is not determined by the transform.
- **What the method assumes about the answer.** Step 1 of the proof presumes that $y$ and its derivatives have transforms. For a constant-coefficient problem this is harmless, since the solution exists by :ref[the constant-coefficient theory]{to=ode.constant-coefficients} and is a combination of $t^je^{\lambda t}$ and of integrals of the forcing, all of exponential type if $f$ is; but the presumption is there, and strictly the transform method *verifies* a solution it has guessed rather than proving existence.
:::

:::example[A damped oscillator kicked twice: a switched step and an impulse]{provenance=original}
Solve

$$
y'' + 2y' + 5y = H(t-1) + 3\,\delta(t-2), \qquad y(0) = y'(0) = 0 .
$$

Physically: an oscillator with natural frequency $\sqrt5$ and damping $2$, at rest, has a constant force switched on at $t = 1$ and receives a sharp blow of strength $3$ at $t = 2$.

**1. Transform (step 1).** With zero initial data the polynomial $Q$ vanishes, so $p(s) = s^2 + 2s + 5$ and

$$
(s^2+2s+5)\,Y(s) = \frac{e^{-s}}{s} + 3e^{-2s} ,
\qquad
Y(s) = e^{-s}\,\underbrace{\frac{1}{s(s^2+2s+5)}}_{= G(s)} + 3e^{-2s}\underbrace{\frac{1}{s^2+2s+5}}_{= K(s)} .
$$

**2. Partial fractions and completing the square (steps 2-3).** Write $G(s) = A/s + (Bs+C)/(s^2+2s+5)$. Multiplying by $s(s^2+2s+5)$,

$$
1 = A(s^2+2s+5) + s(Bs + C) .
$$

Setting $s = 0$ gives $A = 1/5$. Comparing coefficients of $s^2$ gives $A + B = 0$, so $B = -1/5$; comparing coefficients of $s$ gives $2A + C = 0$, so $C = -2/5$. Hence

$$
G(s) = \frac15\left[\frac1s - \frac{s+2}{s^2+2s+5}\right] .
$$

Completing the square, $s^2 + 2s + 5 = (s+1)^2 + 4$, so $\omega = 2$ and the numerator is arranged as $s + 2 = (s+1) + \tfrac12 \cdot 2$:

$$
\frac{s+2}{(s+1)^2+4} = \frac{s+1}{(s+1)^2+4} + \frac12\cdot\frac{2}{(s+1)^2+4} .
$$

**3. Invert (step 4).** From the standard pairs $e^{-\alpha t}\cos\omega t \leftrightarrow (s+\alpha)/((s+\alpha)^2+\omega^2)$ and $e^{-\alpha t}\sin\omega t \leftrightarrow \omega/((s+\alpha)^2+\omega^2)$ with $\alpha = 1$, $\omega = 2$,

$$
k(t) = \mathcal{L}^{-1}\{K\} = \tfrac12 e^{-t}\sin 2t ,
\qquad
g(t) = \mathcal{L}^{-1}\{G\} = \tfrac15\Bigl[1 - e^{-t}\bigl(\cos 2t + \tfrac12 \sin 2t\bigr)\Bigr] .
$$

Here $k$ is the impulse response and $g$ the step response, and the general statement $\kappa' = k$ is visible: differentiating $g$,

$$
g'(t) = \tfrac15 e^{-t}\Bigl[\bigl(\cos 2t + \tfrac12\sin 2t\bigr) - \bigl(-2\sin 2t + \cos 2t\bigr)\Bigr] = \tfrac15 e^{-t}\cdot\tfrac52\sin 2t = k(t) .
$$

Removing the exponential factors by the shifting theorem,

$$
\boxed{\;y(t) = H(t-1)\,g(t-1) + 3\,H(t-2)\,k(t-2)\;}
$$

that is, $y \equiv 0$ on $[0,1]$; $y(t) = g(t-1)$ on $[1,2]$; and $y(t) = g(t-1) + 3k(t-2)$ for $t \ge 2$.

**4. Checks (step 6).** $y(0) = y'(0) = 0$ because nothing happens before $t=1$. At the switch-on time $t = 1$: $g(0) = \tfrac15[1 - 1] = 0$ and $g'(0) = k(0) = 0$, so $y$ and $y'$ are continuous there and only $y''$ jumps, by $1$ — which is part 2 of the statement with $n = 2$. At the impulse time $t = 2$: $k(0) = 0$ but $k'(0) = \tfrac12(2) = 1$, so $y$ is continuous while $y'$ jumps by $3 \cdot 1 = 3$ — part 1 of the statement. And as $t \to \infty$ all the exponentials die and $y \to \tfrac15$, which is the static response $1/p(0) = 1/5$ to a constant force of $1$, as it must be.

**5. Numbers.** At $t = 3$, two units after the step and one after the blow,

$$
y(3) = g(2) + 3k(1) = \tfrac15\bigl[1 - e^{-2}(\cos 4 + \tfrac12 \sin 4)\bigr] + \tfrac32 e^{-1}\sin 2 .
$$

With $\cos 4 = -0.6536436$, $\sin 4 = -0.7568025$, $e^{-2} = 0.1353353$, $\sin 2 = 0.9092974$ and $e^{-1} = 0.3678794$,

$$
g(2) = 0.2279344 , \qquad 3k(1) = 0.5017677 , \qquad y(3) = 0.7297022 .
$$

Differentiating gives $y'(t) = H(t-1)k(t-1) + 3H(t-2)k'(t-2)$ with $k'(t) = \tfrac12 e^{-t}(2\cos 2t - \sin 2t)$, so

$$
y'(3) = k(2) + 3k'(1) = -0.0512110 - 0.9610433 = -1.0122544 :
$$

three units of time in, the blow has pushed the oscillator past its static level and it is on its way back down. Integrating the equation numerically from $t = 0$ to $t = 3$, with the impulse imposed as a jump of $3$ in $y'$ at $t = 2$, reproduces both numbers to seven decimals.

**6. What the transform saved.** Done by undetermined coefficients, this problem is three separate problems on $[0,1]$, $[1,2]$ and $[2,\infty)$ with two matching conditions at each junction, one of which is a jump condition. The transform never splits the time axis: the three switch-on times appear as the three factors $1, e^{-s}, e^{-2s}$, and the shifting theorem puts them back at the end.
:::

:::example[A repeated pole is resonance]{provenance=original}
Solve $y'' + \omega^2 y = \sin \omega t$ with $y(0) = y'(0) = 0$ and $\omega > 0$: an undamped oscillator driven exactly at its own frequency.

**1. Transform.** $p(s) = s^2 + \omega^2$ and $\mathcal{L}\{\sin\omega t\} = \omega/(s^2+\omega^2)$, so

$$
Y(s) = \frac{\omega}{(s^2+\omega^2)^2} .
$$

The forcing has contributed poles at $s = \pm i\omega$ that the equation already had, so the poles are **double**. Partial fractions cannot reduce a double pole to simple ones, and that is the algebraic signature of resonance.

**2. Invert using transform differentiation (step 5 of the method).** From $\mathcal{L}\{\sin\omega t\} = \omega/(s^2+\omega^2)$ and $\mathcal{L}\{\cos\omega t\} = s/(s^2+\omega^2)$, the rule $\mathcal{L}\{t\,v(t)\}(s) = -V'(s)$ gives

$$
\mathcal{L}\{t\sin\omega t\} = \frac{2\omega s}{(s^2+\omega^2)^2} ,
\qquad
\mathcal{L}\{t\cos\omega t\} = -\frac{d}{ds}\frac{s}{s^2+\omega^2} = \frac{s^2 - \omega^2}{(s^2+\omega^2)^2} .
$$

Subtract the second from $\mathcal{L}\{\sin\omega t\}$ after matching coefficients:

$$
\frac{\omega}{s^2+\omega^2} - \omega\,\frac{s^2-\omega^2}{(s^2+\omega^2)^2}
= \frac{\omega(s^2+\omega^2) - \omega s^2 + \omega^3}{(s^2+\omega^2)^2}
= \frac{2\omega^3}{(s^2+\omega^2)^2} ,
$$

so $Y(s) = \dfrac{\omega}{(s^2+\omega^2)^2} = \dfrac{1}{2\omega^2}\left[\dfrac{\omega}{s^2+\omega^2} - \omega\,\dfrac{s^2-\omega^2}{(s^2+\omega^2)^2}\right]$ and

$$
y(t) = \frac{1}{2\omega^2}\bigl(\sin\omega t - \omega t\cos\omega t\bigr) .
$$

**3. Checks.** $y(0) = 0$; differentiating, $y' = \frac{1}{2\omega^2}(\omega\cos\omega t - \omega\cos\omega t + \omega^2 t \sin\omega t) = \tfrac12 t\sin\omega t$, so $y'(0) = 0$; differentiating again, $y'' = \tfrac12\sin\omega t + \tfrac12 \omega t\cos\omega t$, and

$$
y'' + \omega^2 y = \tfrac12 \sin\omega t + \tfrac12\omega t \cos\omega t + \tfrac12 \sin\omega t - \tfrac12 \omega t\cos\omega t = \sin\omega t .
$$

**4. A number.** At $\omega = 3$, $t = \pi$: $\sin 3\pi = 0$ and $\cos 3\pi = -1$, so $y(\pi) = \frac{1}{18}(0 + 3\pi) = \pi/6 = 0.5235988$.

**5. Reading it.** The amplitude $\frac{t}{2\omega}$ of the $\cos\omega t$ term grows without bound: an undamped oscillator driven at resonance absorbs energy indefinitely. Compare the damped resonance of :ref[nonhomogeneous systems]{to=ode.nonhomogeneous-systems}, where the same double pole occurs but sits strictly left of the imaginary axis, so the factor $t$ is beaten by the decaying exponential and the response stays bounded. The dividing line is exactly whether the repeated root of $p$ has negative real part, which is why a vanishing damping coefficient is a singular limit and not a small perturbation.
:::

:::application{provenance=original}
- **Circuit transients.** A series $RLC$ loop driven by a switch obeys $L\ddot q + R \dot q + q/C = V(t)$, and every practical $V$ — a switch closing, a square wave, a spark — is a combination of steps and impulses. The transform turns the whole analysis into algebra in $s$: the impedance $Ls + R + 1/(Cs)$ is $p(s)$ up to a factor, the transfer function $1/p(s)$ is what an engineer reads off a Bode plot, and the poles of $1/p$ are the damped natural frequencies. That the same formalism describes the mechanical oscillator is the dictionary $L \leftrightarrow m$, $R \leftrightarrow b$, $1/C \leftrightarrow k$ that Arfken sets out as the $RLC$ analogue (:cite{work=arfken-2013 loc="§20.8, Eqs. (20.162)-(20.163), p. 1022"}).
- **Impulse response and transfer function as the language of linear systems.** Because $Y = F/p$ for zero initial data, a linear time-invariant system is completely described either by $k(t)$ in the time domain or by $1/p(s)$ in the transform domain, and measuring one determines the other. Stability is then a statement about where the poles are — all in the open left half plane — which is why control engineering is done with pole diagrams and why the transform variable $s$ carries the name complex frequency.
- **Instrument calibration from a kick.** A ballistic galvanometer, a seismometer and an accelerometer are all read by delivering a brief pulse and recording the response. The statement above says why the recorded curve is the impulse response shifted to the arrival time, and why the area of the pulse — not its shape — sets the amplitude: the only thing a short pulse does is jump the highest derivative by its integral, exactly as Arfken's impulse transfers $P$ units of momentum (:cite{work=arfken-2013 loc="§20.8, Example 20.8.4, p. 1019"}).
- **Boundary data for partial differential equations.** Transforming in $t$ reduces an evolution equation in one space variable to an ordinary differential equation in that variable, with the time-dependent boundary data appearing as transformed boundary values; inverting at the end often needs nothing but the shifting theorem. That is how a signal injected at the end of a transmission line comes out as $H(t - x/v)E(0, t-x/v)$, a wave travelling at speed $v$ with nothing ahead of its front (:cite{work=arfken-2013 loc="§20.8, Example 20.8.6, pp. 1023-1024"}; :cite{work=strauss-2008 loc="§12.5, Examples 4 and 5, pp. 355-356"}), and the same route handles the half-line heat equation with a prescribed surface temperature.
- **Why numerical work still needs the pole picture.** A stiff constant-coefficient problem is one whose $p$ has roots of very different magnitude, and the stability of an explicit integrator is decided by where the products (step size) $\times$ (root) lie. The transform is thus the analytic companion to :ref[stiffness]{to=num.stiffness}: it says what the exact solution does, which is what a numerical method has to be asked to reproduce.
:::
