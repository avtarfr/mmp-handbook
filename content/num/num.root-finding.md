---
id: num.root-finding
title: Root finding
kind: method
level: core
summary: Bisection, Newton-Raphson and the secant method for a scalar equation, with the error recursions that give them orders 1, 2 and 1.618, the hypotheses each one needs, and the ways Newton's method fails when they are dropped.
prereqs: [found.taylor-theorem]
provenance: adapted
sources:
  - work: rhb-2006
    loc: "§27.1, the four schemes for a real root of f(x)=0 - rearrangement x=phi(x) (27.5), linear interpolation (27.8), binary chopping (27.9) and Newton-Raphson (27.10)-(27.11) - with the tangent construction, the warning that the scheme works badly if f'(x_n) is close to zero and can oscillate near a stationary point, and the recommendation to combine a bracketing method with Newton-Raphson for accuracy, pp. 985-992; §27.2, the error recursion (27.15)-(27.16) for x_{n+1}=F(x_n), the definition (27.18)-(27.19) of Nth-order convergence and the computation F'(xi) = f(xi) f''(xi) / [f'(xi)]^2 = 0 showing Newton-Raphson is second order, pp. 992-994"
    pages: "985-994"
    role: bisection and Newton-Raphson (the book does not treat the unbracketed secant method) and the bracketing-plus-Newton strategy; the order-of-convergence definition and the fixed-point route to the order of Newton-Raphson; the failure modes near a stationary point
  - work: kreyszig-1978
    loc: "§5.1, Problem 10 (the sufficient condition |g'(x)| <= alpha < 1 for the convergence of x_n = g(x_{n-1}), to be verified from Banach's theorem), Problem 11 (the same with the explicit interval and error estimates) and Problem 15, which asks for the proof that Newton's method g(x) = x - f(x)/f'(x) is a contraction in some neighbourhood of a simple zero of a twice continuously differentiable f, pp. 304-306"
    pages: "304-306"
    role: the contraction-mapping reading of a one-point iteration, and of Newton's method in particular, which is where the local hypothesis "x_0 sufficiently close" comes from
---

:::note{provenance=original}
**What it means.** Three algorithms, and the whole of the engineering choice between them sits in one line each. Bisection cannot fail and cannot be fast: it buys one bit per step, and you can say in advance how many steps you need. Newton is fast when it works -- the number of correct digits doubles each step -- and it works only near the root, needs the derivative, and fails in several instructive ways. The secant method is Newton with the derivative replaced by a difference quotient: slightly slower per step, but it costs one function evaluation instead of two, which makes it the better buy when the derivative is expensive. Production code uses all three: bracket with bisection, finish with the other two.
:::

:::definition[Roots, multiplicity, order of convergence]{provenance=adapted src="rhb-2006:§27.2, Eqs. (27.18)-(27.19), p. 993"}
Let $f$ be real-valued on an interval. A **root** (or zero) of $f$ is a point $\xi$ with $f(\xi) = 0$. If $f$ is $m$ times differentiable at $\xi$ and

$$
f(\xi) = f'(\xi) = \cdots = f^{(m-1)}(\xi) = 0, \qquad f^{(m)}(\xi) \neq 0 ,
$$

the root has **multiplicity** $m$; a root of multiplicity $1$ is **simple**, and simple is exactly the condition $f'(\xi) \neq 0$.

An iterative method produces $x_0, x_1, x_2, \dots$; write $e_n = x_n - \xi$ for the error. Suppose $x_n \to \xi$ with $x_n \neq \xi$ for all $n$. The method **converges with order $p \ge 1$ and asymptotic error constant $C$** if

$$
\frac{|e_{n+1}|}{|e_n|^{p}} \longrightarrow C \in (0,\infty) .
$$

Order $1$ with $C < 1$ is called **linear** convergence (a fixed number of extra correct digits per step, namely $-\log_{10} C$ of them); order $2$ is **quadratic** (the number of correct digits doubles). :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§27.2, Eqs. (27.18)-(27.19), p. 993"} give the corresponding criterion for a one-point iteration $x_{n+1} = F(x_n)$ with $F$ smooth and $F(\xi) = \xi$: the iteration is of order $N$ when $F'(\xi) = \cdots = F^{(N-1)}(\xi) = 0$. For this to match the definition above exactly one must add, in our own voice, that $F^{(N)}(\xi) \neq 0$, since otherwise the limiting constant $C$ is zero and the order is higher than $N$. Either way the criterion follows by expanding $F(\xi + e_n)$ in a Taylor series (:ref[]{to=found.taylor-theorem}). They note that the error form of the definition is the more general one, since it does not require the iteration to be a differentiable function of a single previous iterate -- and indeed neither bisection nor the secant method is of that form.
:::

:::statement[The three methods and their rates]{provenance=adapted src="rhb-2006:§27.1.3 Eq. (27.9) p. 990 for (a), §27.1.4 Eqs. (27.10)-(27.11) pp. 990-991 for (b), and §27.2 pp. 992-994 for the order of convergence; kreyszig-1978:§5.1, Problem 15, pp. 305-306 for the local hypothesis in (b). Part (c) is our own: neither source treats the unbracketed secant method"}
**(a) Bisection.** Let $f$ be continuous on $[a,b]$ with $f(a)f(b) < 0$. Put $[a_1,b_1] = [a,b]$ and, for $n \ge 1$,

$$
x_n = \tfrac12 (a_n + b_n), \qquad
[a_{n+1}, b_{n+1}] = \begin{cases} [a_n, x_n] & \text{if } f(a_n) f(x_n) \le 0, \\ [x_n, b_n] & \text{otherwise.}\end{cases}
$$

The test must be the non-strict one. If a midpoint lands exactly on a root, so that $f(x_n) = 0$, the rule then keeps that point as the new right-hand endpoint and the bracket never loses it; with $<$ in its place the rule would throw the root away and the conclusion below would be false (take $f(x) = x - \tfrac12$ on $[0,1]$, where $x_1 = \tfrac12$ is the root and the strict test sends the bracket off to $1$).

Then $a_n \uparrow \xi$ and $b_n \downarrow \xi$ for a limit $\xi$ with $f(\xi) = 0$, and for every $n$

$$
|x_n - \xi| \ \le \ \frac{b-a}{2^{\,n}} .
$$

The bound is known before the computation starts: reaching a tolerance $\tau$ takes $n = \lceil \log_2((b-a)/\tau) \rceil$ steps and $n$ evaluations of $f$.

**(b) Newton-Raphson.** Let $\xi$ be a simple root of $f$ and let $f$ be twice continuously differentiable on a closed interval $I$ containing $\xi$ in its interior. There is a $\delta > 0$ such that for every starting point $x_0$ with $|x_0 - \xi| \le \delta$ the iteration

$$
x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}
$$

is well defined, stays in $[\xi-\delta, \xi+\delta]$ and converges to $\xi$, with

$$
\frac{e_{n+1}}{e_n^{2}} \longrightarrow \frac{f''(\xi)}{2 f'(\xi)} .
$$

The order is therefore $2$ whenever $f''(\xi) \neq 0$, and better than $2$ when $f''(\xi) = 0$.

**(c) Secant method.** Under the same hypotheses on $f$ and $\xi$, there is a $\delta > 0$ such that for distinct $x_0, x_1$ in $[\xi-\delta,\xi+\delta]$ the iteration

$$
x_{n+1} = x_n - f(x_n)\,\frac{x_n - x_{n-1}}{f(x_n) - f(x_{n-1})}
$$

is well defined and converges to $\xi$, with

$$
\frac{e_{n+1}}{e_n e_{n-1}} \longrightarrow \frac{f''(\xi)}{2 f'(\xi)} ,
$$

and the errors satisfy $K|e_n| \le \theta^{\,F_n}$ for constants $K>0$ and $\theta<1$, where $F_0 = F_1 = 1$ and $F_{n+1} = F_n + F_{n-1}$ are the Fibonacci numbers. If in addition $|e_{n+1}|/|e_n|^{p} \to C \in (0,\infty)$ for some $p$, then

$$
p = \frac{1+\sqrt5}{2} = 1.6180339887\ldots
$$

and $C = |f''(\xi)/2f'(\xi)|^{\,p-1}$. Each step costs one new evaluation of $f$ and none of $f'$. Part (c) is not taken from either source -- Riley, Hobson and Bence treat only the bracketed chord method of their §27.1.2, and Kreyszig's problems concern one-point iterations -- and the proof below establishes it in full.
:::

:::idea{provenance=original}
All three are one idea applied three times: replace $f$ near the current guess by something whose root you can write down, and take that root as the next guess.

Bisection replaces $f$ by its sign alone. One bit of information per evaluation, and a bracket that is never lost -- which is why its error bound is a theorem rather than a hope.

Newton replaces $f$ by its tangent at $x_n$. Taylor's theorem says the tangent misses $f$ by a term in $e_n^2$, and dividing that miss by the slope converts it directly into the next error: one squaring per step.

The secant method replaces $f$ by the line through the last two points. That line misses $f$ by a term in $e_n e_{n-1}$ rather than $e_n^2$, so each step multiplies two old errors instead of squaring one. Taking logarithms turns the recursion $|e_{n+1}| \sim K|e_n||e_{n-1}|$ into the Fibonacci recursion, and the golden ratio appears because that is how fast the Fibonacci numbers grow.
:::

:::proof{provenance=adapted src="rhb-2006:§27.1.3-27.1.4 and §27.2, pp. 990-994"}
**(a) Bisection.**

1. *The bracket survives.* We show inductively that $f(a_n) f(b_n) \le 0$ for every $n$; it holds at $n=1$ because $f(a)f(b) < 0$. Suppose it holds at $n$. If $f(a_n)f(x_n) \le 0$, the rule puts $[a_{n+1},b_{n+1}] = [a_n,x_n]$ and the invariant is the test itself. Otherwise $f(a_n)f(x_n) > 0$, and multiplying the inductive hypothesis $f(a_n)f(b_n) \le 0$ by this positive number gives $f(a_n)^2 f(x_n) f(b_n) \le 0$; since $f(a_n) \neq 0$ this forces $f(x_n)f(b_n) \le 0$, which is the invariant for $[a_{n+1},b_{n+1}] = [x_n, b_n]$. In either case the half kept is one across which $f$ does not keep a strict sign. The inequality has to be the non-strict one from here on: as soon as some $f(x_n)$ vanishes the product is $0$ rather than negative, and that is exactly the case the rule must not discard.
2. *The lengths.* By construction $b_{n+1} - a_{n+1} = \tfrac12 (b_n - a_n)$, so $b_n - a_n = (b-a)/2^{\,n-1}$.
3. *A common limit.* $(a_n)$ is non-decreasing, $(b_n)$ is non-increasing, $a_n < b_n$, and the gap tends to $0$; so both converge to one point $\xi \in [a,b]$, and $a_n \le \xi \le b_n$ for every $n$.
4. *It is a root.* $f$ is continuous, so $f(a_n) \to f(\xi)$ and $f(b_n) \to f(\xi)$. Passing to the limit in $f(a_n)f(b_n) \le 0$ gives $f(\xi)^2 \le 0$, hence $f(\xi) = 0$. This is the step that uses continuity, and it is the intermediate value theorem in the form we need.
5. *The bound.* $x_n$ is the midpoint of $[a_n,b_n]$ and $\xi$ lies in that interval, so $|x_n - \xi| \le \tfrac12 (b_n - a_n) = (b-a)/2^{\,n}$.

**(b) Newton-Raphson.** Fix $\delta_0 > 0$ with $J = [\xi - \delta_0, \xi + \delta_0] \subset I$. Since $f'$ is continuous and $f'(\xi) \neq 0$, shrinking $\delta_0$ makes $f'$ non-vanishing on $J$. Put

$$
K = \frac{\max_{J} |f''|}{2 \min_{J} |f'|} < \infty ,
$$

both extrema being attained because $J$ is compact and $f', f''$ continuous.

1. *One step, exactly.* Let $x_n \in J$. Apply Taylor's theorem with the Lagrange remainder (:ref[]{to=found.taylor-theorem}) to $f$ about $x_n$, evaluated at $\xi$: there is $\eta_n$ between $x_n$ and $\xi$ with
$$
0 = f(\xi) = f(x_n) + f'(x_n)(\xi - x_n) + \tfrac12 f''(\eta_n) (\xi - x_n)^2 .
$$
2. *Rearrange into the iteration.* Divide by $f'(x_n) \neq 0$ and use $x_{n+1} = x_n - f(x_n)/f'(x_n)$:
$$
0 = (x_n - x_{n+1}) - e_n + \frac{f''(\eta_n)}{2f'(x_n)} e_n^{2},
\qquad\text{that is}\qquad
e_{n+1} = \frac{f''(\eta_n)}{2 f'(x_n)}\, e_n^{2} .
$$
This identity is exact; no term has been discarded. It is the whole proof, and everything else is bookkeeping.
3. *Staying put.* Choose $\delta \le \delta_0$ with $\theta := K\delta < 1$. If $|e_n| \le \delta$ then $|e_{n+1}| \le K e_n^2 \le K\delta |e_n| = \theta |e_n| \le \delta$, so the iterates never leave $[\xi-\delta,\xi+\delta]$, where $f'$ does not vanish and the next step is defined.
4. *Convergence, and how fast.* Multiplying step 2 by $K$ gives $K|e_{n+1}| \le (K|e_n|)^2$, so by induction $K|e_n| \le \theta^{\,2^{n}} \to 0$: the error is squashed by one squaring per step, which is the doubling of correct digits. Finally $x_n \to \xi$ forces $\eta_n \to \xi$ (it is trapped between $x_n$ and $\xi$) and $f'(x_n) \to f'(\xi)$ by continuity, so the exact relation of step 2 gives $e_{n+1}/e_n^2 \to f''(\xi)/2f'(\xi)$.

**(c) Secant method.** The tangent of Newton is replaced by a chord, and the Taylor remainder by the error of linear interpolation.

*Lemma (error of a chord).* Let $f$ be twice continuously differentiable on an interval $J$, let $u \neq v$ in $J$, let $p$ be the line through $(u,f(u))$ and $(v,f(v))$, and let $z \in J$. Then $f(z) - p(z) = \tfrac12 f''(\eta)(z-u)(z-v)$ for some $\eta \in J$.

*Proof of the lemma.* For $z \in \{u,v\}$ both sides vanish. Otherwise set $K_z = (f(z)-p(z))/((z-u)(z-v))$ and $g(x) = f(x) - p(x) - K_z (x-u)(x-v)$. Then $g$ vanishes at the three distinct points $u, v, z$, so by Rolle's theorem $g'$ vanishes at two distinct points between them and $g''$ at one, say $\eta$. Since $p'' \equiv 0$, $g''(\eta) = f''(\eta) - 2K_z = 0$. $\square$ (This is the case $n=1$ of the interpolation error formula of :ref[]{to=num.interpolation}.)

1. *One step, exactly.* Let $p$ be the chord through $(x_{n-1}, f(x_{n-1}))$ and $(x_n, f(x_n))$, with slope $s_n = (f(x_n)-f(x_{n-1}))/(x_n - x_{n-1})$. The secant formula says exactly that $x_{n+1}$ is the root of $p$, so $p(x) = s_n(x - x_{n+1})$, and at $x = \xi$,
$$
p(\xi) = s_n(\xi - x_{n+1}) = -s_n e_{n+1} .
$$
2. *Insert the lemma at $z = \xi$.* Since $f(\xi) = 0$,
$$
-p(\xi) = f(\xi) - p(\xi) = \tfrac12 f''(\eta_n)(\xi - x_{n-1})(\xi - x_n) = \tfrac12 f''(\eta_n)\, e_{n-1} e_n ,
$$
so, using step 1,
$$
e_{n+1} = \frac{f''(\eta_n)}{2 s_n}\, e_{n-1} e_n .
$$
3. *The slope is a derivative.* By the mean value theorem $s_n = f'(\zeta_n)$ for some $\zeta_n$ between $x_{n-1}$ and $x_n$; in particular $s_n \neq 0$ once both iterates are in a neighbourhood of $\xi$ on which $f'$ does not vanish, so the step is defined.
4. *Staying put, and convergence.* With $J$, $K$ as in part (b), step 2 gives $|e_{n+1}| \le K |e_n||e_{n-1}|$. Choose $\delta$ with $\theta := K\delta < 1$. If $|e_{n-1}|, |e_n| \le \delta$ then $|e_{n+1}| \le K\delta^2 = \theta\delta \le \delta$, so all iterates stay in $[\xi-\delta,\xi+\delta]$. Writing $\epsilon_n = K|e_n|$, the recursion reads $\epsilon_{n+1} \le \epsilon_n \epsilon_{n-1}$ with $\epsilon_0, \epsilon_1 \le \theta$, so by induction $\epsilon_n \le \theta^{\,F_n}$ where $F_0 = F_1 = 1$ and $F_{n+1} = F_n + F_{n-1}$. Since $F_n \to \infty$, $e_n \to 0$.
5. *Where the golden ratio comes from.* The Fibonacci numbers satisfy $F_n = (\varphi^{\,n+1} - (-\varphi)^{-n-1})/\sqrt5$ with $\varphi = (1+\sqrt5)/2$, so $F_n$ grows like $\varphi^{\,n}$: the number of correct digits is multiplied by $\varphi$ at each step, which is the sense in which the order is $\varphi$. For the sharper statement, assume $|e_{n+1}| / |e_n|^{p} \to C$. Then $|e_n| \approx C|e_{n-1}|^{p}$ and step 2 gives
$$
C\,|e_n|^{p} \approx K_\ast |e_n| |e_{n-1}| \quad\text{with } K_\ast = \left|\frac{f''(\xi)}{2f'(\xi)}\right| .
$$
Substituting $|e_n| = C|e_{n-1}|^{p}$ on both sides,
$$
C^{\,p+1} |e_{n-1}|^{\,p^{2}} \approx K_\ast C\, |e_{n-1}|^{\,p+1} .
$$
For this to hold as $|e_{n-1}| \to 0$ the exponents must agree, $p^2 = p+1$, whose positive root is $p = \varphi$; the coefficients then give $C^{p} = K_\ast$, that is $C = K_\ast^{1/p} = K_\ast^{\,p-1}$, using $1/\varphi = \varphi - 1$. $\square$
:::

:::remark[Where the hypotheses are used, and how Newton fails without them]{provenance=adapted src="rhb-2006:§27.1.4, the behaviour near a stationary point, p. 991"}
- **Bisection uses continuity and nothing else** -- no derivative, no smoothness, not even a formula for $f$. What it does need is the sign change $f(a)f(b)<0$, and that is a real restriction: $f(x) = x^2$ has a root on $[-1,1]$ and no sign change, so bisection cannot be started, while $f(x) = 1/x$ has a sign change on $[-2,1]$ and no root, so what the method converges to need not be a root if $f$ is discontinuous: the rule produces $x_1 = -\tfrac12$, $x_2 = \tfrac14$, $x_3 = -\tfrac18$, $x_4 = \tfrac1{16}, \dots \to 0$, which is the pole and not a zero. (The bracket has to be chosen so that no midpoint is the pole itself; on $[-1,1]$ the first midpoint is $0$ and $f(x_1)$ is undefined.) Step 4 of the proof is where continuity enters and where the $1/x$ example breaks down. If the bracket contains several roots, bisection finds one of them and gives no warning about the others.
- **Newton uses $f'(\xi) \neq 0$** to divide in step 2 of the proof. At a root of multiplicity $m \ge 2$ it still converges, but only linearly. Write $f(x) = (x-\xi)^m g(x)$ with $g(\xi) \neq 0$; then $f/f' = (x-\xi)g/\bigl(mg + (x-\xi)g'\bigr)$ and
$$
e_{n+1} = e_n\left(1 - \frac{g(x_n)}{m g(x_n) + e_n g'(x_n)}\right) \longrightarrow \Bigl(1 - \frac1m\Bigr) e_n ,
$$
so the error is multiplied by $1-1/m$ each step: at a double root it merely halves, and reaching $10^{-15}$ from $10^{-1}$ takes about $47$ steps instead of $4$. The same algebra shows the cure when $m$ is known: iterating with $x_{n+1} = x_n - m f(x_n)/f'(x_n)$ gives $e_{n+1} = e_n^2 g'(x_n)/(mg(x_n) + e_n g'(x_n)) \to e_n^2 g'(\xi)/(m g(\xi))$, and quadratic convergence is restored.
- **Newton uses $f \in C^2$** for the Lagrange remainder in step 1. Dropping it costs the rate and sometimes the convergence: $f(x) = \operatorname{sign}(x)|x|^{1/3}$ has the single root $0$ and is differentiable away from it, but $f/f' = 3x$, so Newton reads $x_{n+1} = -2x_n$ and the iterate doubles in modulus and alternates in sign from any starting point.
- **Newton uses "$x_0$ close enough"**, which is step 3 of the proof, and this is the hypothesis that fails in practice. Three ways:
  1. *A small derivative throws the iterate far.* :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§27.1.4, p. 991"} note that the scheme behaves badly when some $x_n$ falls near a stationary point of $f$, where $f'(x_n) \approx 0$, and that a nearby maximum or minimum can leave the iterates hopping across the root rather than closing on it.
  2. *It can cycle.* For $f(x) = x^3 - 2x + 2$ and $x_0 = 0$: $f(0) = 2$, $f'(0) = -2$, so $x_1 = 1$; then $f(1) = 1$, $f'(1) = 1$, so $x_2 = 0$. The iteration repeats $0, 1, 0, 1, \dots$ for ever, and the only real root, $-1.769292354\ldots$, is never approached.
  3. *It can converge to the wrong root*, when $f$ has several and the tangent at $x_0$ points at a different one. Nothing in the method expresses a preference.
  The contraction-mapping view explains why all of this is local: :cite[Kreyszig]{work=kreyszig-1978 loc="§5.1, Problem 15, pp. 305-306"} sets the exercise of showing that $g(x) = x - f(x)/f'(x)$ is a contraction *in some neighbourhood of* a simple zero, so Banach's fixed point theorem (:ref[]{to=funcan.banach-fixed-point}) applies there and says nothing anywhere else.
- **The secant method needs $f(x_n) \neq f(x_{n-1})$** to divide, and it keeps no bracket, so an iterate can leave the neighbourhood and never come back. Its bracketed cousin, in which the two points are always kept on opposite sides of the root -- :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§27.1.2, Eq. (27.8), pp. 988-989"} call it linear interpolation; it is also known as false position -- is safe but slow, because, as they observe, when the curvature of $f$ keeps one sign near the root one endpoint tends to stay frozen, and the convergence degrades to linear.
- **Floating-point arithmetic sets a floor on all three.** Near a simple root the computed $f$ carries an absolute error of roughly $u$ times the size of the terms making it up (:ref[]{to=num.floating-point-errors}), so $f$ cannot be distinguished from zero within a band of width $\approx \text{noise}/|f'(\xi)|$ around $\xi$, and no method can do better. For the example below the noise in $f$ is about $1.1\times10^{-16}\times 18.4 \approx 2\times10^{-15}$ and $|f'(\xi)| = 11.16$, giving a floor of about $1.8\times10^{-16}$. One unit in the last place at $2.09$ is $2^{-51} = 4.4\times10^{-16}$, so the floor sits at about $0.4$ of an ulp: full double precision is attainable here, and the last bit is the only thing in doubt. At a double root the floor is $\sqrt{2\,\text{noise}/|f''(\xi)|}$ instead, typically around $10^{-8}$: half the digits are simply not there, whatever the algorithm.
:::

:::method[Solving $f(x)=0$ in one variable]{provenance=adapted src="rhb-2006:§27.1, the four schemes and the closing recommendation to combine them, pp. 985-992"}
1. **Bracket first.** Evaluate $f$ on a coarse grid over the range of interest and find a pair $a < b$ with $f(a)f(b) < 0$. Plot $f$ if you can; most root-finding disasters are failures to look at the function. If $f$ has a root of even multiplicity there is no sign change, and you must bracket the minimum of $|f|$ instead.
2. **Bisect a few times** to get inside the basin of the fast methods, say until $b_n - a_n$ is a per cent of the original bracket. This costs $\lceil \log_2 100 \rceil = 7$ evaluations and buys the guarantee.
3. **Switch to a fast method.**
   - If $f'$ is available cheaply and analytically, iterate $x_{n+1} = x_n - f(x_n)/f'(x_n)$.
   - If not, iterate the secant formula from the current bracket endpoints. Never form $f'$ by a finite difference merely to feed Newton: that costs two evaluations per step, the same as the secant method gets two steps out of, and it introduces a truncation error the secant method does not have.
4. **Guard the fast step.** Keep the bracket $[a_n,b_n]$ up to date. If a proposed $x_{n+1}$ falls outside it, or if the step has not at least halved, $|x_{n+1}-x_n| > \tfrac12|x_n - x_{n-1}|$, discard it and bisect instead. Both tests use only computed quantities; the error $|x_n - \xi|$ itself is of course not available, which is why the step length and the bracket width stand in for it. This hybrid inherits the guarantee of bisection and the speed of Newton; some combination of a bracketing method with Newton-Raphson at the end is what :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§27.1, p. 992"} recommend for most situations.
5. **Stop on the step, not on the residual.** Terminate when $|x_{n+1}-x_n| \le \tau(1+|x_{n+1}|)$, with a relative tolerance $\tau$ no smaller than a few times the unit roundoff, and cap the iteration count. A small $|f(x_n)|$ on its own means nothing: it is small whenever $f'$ is small, whether or not $x_n$ is near a root.
6. **Choose by cost.** Per *function evaluation*, Newton multiplies the number of correct digits by $2^{1/2} = 1.414$ (two evaluations, $f$ and $f'$, buy one squaring) while the secant method multiplies it by $\varphi = 1.618$ (one evaluation per step). So when $f'$ costs about as much as $f$, the secant method is the more efficient of the two; Newton wins when $f'$ is nearly free, as it is for a polynomial evaluated by Horner's rule.
:::

:::example[The three methods on $x^{3}-2x-5=0$]{provenance=original}
Take $f(x) = x^{3}-2x-5$, the equation Newton himself used. Then $f(2) = -1 < 0$ and $f(3) = 16 > 0$, so there is a root in $(2,3)$; and $f'(x) = 3x^{2}-2 \ge 10 > 0$ there, so the root is unique in the interval and simple. To twenty digits,

$$
\xi = 2.0945514815423265915 .
$$

The asymptotic error constant predicted by the theorem is

$$
\frac{f''(\xi)}{2f'(\xi)} = \frac{6\xi}{2(3\xi^{2}-2)} = \frac{3\xi}{3\xi^{2}-2} = \frac{6.28365444}{11.16143773} = 0.5629789458 .
$$

**Bisection on $[2,3]$.** $x_1 = 2.5$, $x_2 = 2.25$, $x_3 = 2.125$, $x_4 = 2.0625$, $x_5 = 2.09375$, $x_6 = 2.109375$; the errors are $0.4054$, $0.1554$, $0.03045$, $-0.03205$, $-0.0008015$, $0.01482$. They are not monotone -- only the bound $|x_n-\xi| \le 2^{-n}$ is -- and $x_5$ happens to be far better than $x_6$. To guarantee $10^{-10}$ requires $2^{-n} \le 10^{-10}$, that is $n \ge \log_2 10^{10} = 33.22$, so $34$ evaluations of $f$.

**Newton from $x_0 = 2$.** $f(2) = -1$, $f'(2) = 10$, so $x_1 = 2 - (-1)/10 = 2.1$. Next, $f(2.1) = 9.261 - 4.2 - 5 = 0.061$ and $f'(2.1) = 3(4.41)-2 = 11.23$, so $x_2 = 2.1 - 0.061/11.23 = 2.0945681211041852$. Continuing:

| $n$ | $x_n$ | $e_n = x_n - \xi$ | $e_n / e_{n-1}^{2}$ |
|---|---|---|---|
| 0 | $2$ | $-9.4551\times10^{-2}$ | |
| 1 | $2.1$ | $5.44852\times10^{-3}$ | $0.60946$ |
| 2 | $2.09456812110418522$ | $1.66396\times10^{-5}$ | $0.56051$ |
| 3 | $2.09455148169819930$ | $1.55873\times10^{-10}$ | $0.56297$ |
| 4 | $2.09455148154232659$ | $1.36783\times10^{-20}$ | $0.5629790$ |

The last column converges to $0.5629789458$, the predicted constant, and $\log_{10}|e_n| = -1.02, -2.26, -4.78, -9.81, -19.86$ doubles at each step. Reaching $1.6\times10^{-10}$ at $x_3$ costs three evaluations of $f$ and three of $f'$; bisection needed $34$ evaluations for $10^{-10}$.

**Secant from $x_0 = 2$, $x_1 = 3$.** The first step is $x_2 = 3 - 16 \times (3-2)/(16-(-1)) = 3 - 16/17 = 35/17 = 2.0588235294117647$. Continuing:

| $n$ | $x_n$ | $e_n$ | $e_n /(e_{n-1}e_{n-2})$ |
|---|---|---|---|
| 2 | $2.05882352941176471$ | $-3.5728\times10^{-2}$ | $0.41733$ |
| 3 | $2.08126365984502285$ | $-1.32878\times10^{-2}$ | $0.41075$ |
| 4 | $2.09482414609405235$ | $2.72665\times10^{-4}$ | $0.57434$ |
| 5 | $2.09454943103524732$ | $-2.05051\times10^{-6}$ | $0.56595$ |
| 6 | $2.09455148122759912$ | $-3.14727\times10^{-10}$ | $0.5629174$ |
| 7 | $2.09455148154232695$ | $3.63319\times10^{-16}$ | $0.5629794$ |

Again the last column tends to $0.5629789458$. The measured order, $\log|e_{n+1}|/\log|e_n|$, takes the successive values $1.596$, $1.671$, $1.625$, $1.632$, $1.623$, $1.622$, $1.620$ as the iteration proceeds, against the predicted $\varphi = 1.6180$.

**The cost comparison.** Reaching $x_6$, with error $3.1\times10^{-10}$, takes six evaluations of $f$ (two to start, one per step thereafter) and none of $f'$. Newton reached the comparable error $1.6\times10^{-10}$ at $x_3$, also after six evaluations -- but three of them were of $f'$. With a cubic polynomial the derivative is nearly free and the two methods tie; with an $f$ whose derivative must be assembled by hand or by automatic differentiation, the secant method does the same work for half the code and half the cost.
:::

:::application[Wien's displacement law]{provenance=original}
The spectral radiance of a black body per unit wavelength is Planck's function

$$
B_\lambda(T) = \frac{2hc^{2}}{\lambda^{5}}\,\frac{1}{e^{\,hc/\lambda k_B T}-1} .
$$

Where does it peak? Write $x = hc/(\lambda k_B T)$, so that $\lambda \propto 1/x$ and $B_\lambda \propto x^{5}/(e^{x}-1)$. Setting the derivative to zero,

$$
\frac{d}{dx}\log\frac{x^5}{e^x-1} = \frac5x - \frac{e^{x}}{e^{x}-1} = 0
\qquad\Longleftrightarrow\qquad
5\bigl(1 - e^{-x}\bigr) = x ,
$$

so the peak is at the positive root of

$$
g(x) = x - 5 + 5e^{-x} = 0 .
$$

There is no closed form, which is why this calculation is a root-finding problem and has been since 1893. The root is simple: $g'(x) = 1 - 5e^{-x}$, and at a root $5e^{-x} = 5-x$, so $g'(x_\ast) = x_\ast - 4$, which is not zero unless $x_\ast = 4$ -- and $g(4) = 5e^{-4} - 1 = -0.9084 \neq 0$. So Newton's theorem applies.

**Newton from $x_0 = 5$.** $g(5) = 5e^{-5} = 0.03368973$ and $g'(5) = 1-5e^{-5} = 0.96631027$, so

$$
x_1 = 5 - \frac{0.03368973}{0.96631027} = 4.96513569583650 .
$$

Then $g(x_1) = 2.07153\times10^{-5}$ gives $x_2 = 4.96511423175260$, and $g(x_2) = 8.03594\times10^{-12}$ gives

$$
x_3 = 4.96511423174428 ,
$$

with $g(x_3) = 1.2\times10^{-24}$: sixteen correct digits after three steps, and the errors $3.5\times10^{-2}$, $2.1\times10^{-5}$, $8.3\times10^{-12}$, $1.2\times10^{-24}$ show the doubling plainly. Bisection from the bracket $[4,6]$ would need $\lceil \log_2\bigl(2/(5\times10^{-16})\bigr)\rceil = \lceil 51.83 \rceil = 52$ evaluations for the same accuracy.

**The physical constant.** With the SI defining values $h = 6.62607015\times10^{-34}\ \mathrm{J\,s}$, $c = 299792458\ \mathrm{m\,s^{-1}}$ and $k_B = 1.380649\times10^{-23}\ \mathrm{J\,K^{-1}}$, so that $hc/k_B = 1.4387768775\times10^{-2}\ \mathrm{m\,K}$, the Wien displacement constant is

$$
b = \lambda_{\max} T = \frac{hc}{k_B x_\ast} = \frac{1.4387768775\times10^{-2}}{4.96511423174428}\ \mathrm{m\,K} = 2.8977719552\times10^{-3}\ \mathrm{m\,K} ,
$$

which is the value tabulated by CODATA. For the Sun, with effective temperature $T = 5772\ \mathrm{K}$, this puts the peak of the wavelength spectrum at

$$
\lambda_{\max} = \frac{2.8977719552\times10^{-3}}{5772}\ \mathrm{m} = 5.0204\times10^{-7}\ \mathrm{m} = 502.04\ \mathrm{nm} ,
$$

in the green. The same equation with $5$ replaced by $3$ gives the peak of the spectrum per unit *frequency*, at a different wavelength -- the two peaks disagree because a spectral density transforms with the Jacobian $d\nu/d\lambda$, and this is the standard trap that the root-finding step makes concrete rather than removing. Root finding of exactly this kind appears throughout physics whenever a dispersion relation, an equation of state or a transcendental eigenvalue condition has to be inverted: the quantisation condition for a finite square well, the Kepler equation $E - e\sin E = M$ of orbital mechanics, whose root is simple for every eccentricity $e<1$ because the derivative $1 - e\cos E$ is at least $1-e>0$, and the bisection-plus-Newton solvers inside every equation-of-state routine.
:::
