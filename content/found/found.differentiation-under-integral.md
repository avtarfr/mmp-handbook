---
id: found.differentiation-under-integral
title: Differentiation under the integral sign
kind: theorem
level: core
summary: If $f$ and all its first partial derivatives in the parameters $x \in U \subseteq \mathbb{R}^n$ are continuous on $U \times [a,b]$, then $F(x) = \int_a^b f(x,t)\,dt$ is of class $C^1$ with $\partial F/\partial x_i = \int_a^b \partial f/\partial x_i\,dt$; with differentiable limits of integration the derivative acquires the two boundary terms of the Leibniz rule.
prereqs: [found.uniform-convergence, found.partial-derivatives-chain-rule, found.compactness]
provenance: adapted
sources:
  - work: lee-2013
    loc: "App. C, Thm C.14, p. 648: differentiation under an integral sign for $f$ and $\\partial f/\\partial x^i$ continuous on $U \\times [a,b]$, giving $F \\in C^1$; the paragraph introducing it, at the foot of p. 647, states that no proof is given and refers to [Apo74], [Rud76], [Str00]"
    pages: "647-648"
    role: the fixed-limit theorem with its exact hypotheses, in $n$ parameters
  - work: stakgold-holst-2011
    loc: "§1.2, Eq. (1.2.11), p. 64: the classical formula for differentiation under the integral sign with variable limits, used there to differentiate a Green's-function integral split at $t = x$"
    pages: "64"
    role: the Leibniz formula with variable limits, and a standard use of it
  - work: arfken-2013
    loc: "§1.10, pp. 70–71: multiple integrals written as iterated integrals, and the evaluation of an integral by reversing the order of integration (Example 1.10.6)"
    pages: "70-71"
    role: comparison with the companion technique of exchanging integration order
---

:::statement[Fixed limits of integration]{provenance=adapted src="lee-2013:App. C, Thm C.14, p. 648"}
Let $U \subseteq \mathbb{R}^n$ be open, let $a < b$ be real, and let $f : U \times [a,b] \to \mathbb{R}$ be continuous. Suppose that for each $i = 1,\dots,n$ the partial derivative $\partial f/\partial x_i$ exists at every point of $U \times [a,b]$ and is continuous on $U \times [a,b]$. Define

$$
F(x) = \int_a^b f(x,t)\, dt \qquad (x \in U).
$$

Then $F$ is of class $C^1$ on $U$ and, for every $x \in U$ and every $i$,

$$
\frac{\partial F}{\partial x_i}(x) = \int_a^b \frac{\partial f}{\partial x_i}(x,t)\, dt .
$$

For $n = 1$ this reads $F'(x) = \int_a^b \partial f/\partial x\,(x,t)\, dt$.

The following corollary is ours, not part of Lee's theorem, which concludes only $C^1$; it is proved in Step 7 below. **Iteration.** If $f$ and all its partial derivatives in $x$ up to order $k$ are continuous on $U \times [a,b]$, then $F$ is of class $C^k$ and each such derivative may be taken inside the integral.
:::

:::statement[Leibniz rule with variable limits]{provenance=adapted src="stakgold-holst-2011:§1.2, Eq. (1.2.11), p. 64; lee-2013:App. C, Thm C.14, p. 648"}
Let $I, J \subseteq \mathbb{R}$ be open intervals, let $f : I \times J \to \mathbb{R}$ be continuous with $\partial f/\partial x$ existing and continuous on $I \times J$, and let $\alpha, \beta : I \to J$ be differentiable. Define

$$
F(x) = \int_{\alpha(x)}^{\beta(x)} f(x,t)\, dt \qquad (x \in I).
$$

Then $F$ is differentiable on $I$ and

$$
F'(x) = f\bigl(x, \beta(x)\bigr)\, \beta'(x) \;-\; f\bigl(x, \alpha(x)\bigr)\, \alpha'(x) \;+\; \int_{\alpha(x)}^{\beta(x)} \frac{\partial f}{\partial x}(x,t)\, dt .
$$

If in addition $\alpha$ and $\beta$ are of class $C^1$, then $F$ is of class $C^1$. The two boundary terms are the rate at which the interval of integration sweeps across the integrand at each end; the integral term is the previous statement with the limits frozen.
:::

:::note{provenance=original}
**What it means.** The question answered here is when a limit (the derivative in $x$) may be moved through an integral (over $t$). Continuity of $\partial f/\partial x$ on the closed strip makes the difference quotients in $x$ converge *uniformly* in $t \in [a,b]$, which is one sufficient condition for a limit to pass under a sign of integration (:ref[uniform convergence]{to=found.uniform-convergence}); that is the whole content of the fixed-limit theorem. The variable-limit version is then the chain rule applied to $(x,u,v) \mapsto \int_u^v f(x,t)\,dt$, whose three partial derivatives are, by the fundamental theorem of calculus and the fixed-limit theorem, $\int_u^v \partial f/\partial x\,dt$, $-f(x,u)$ and $f(x,v)$. On an unbounded interval of integration, or with an unbounded integrand, continuity is not enough and the hypothesis has to be a domination condition instead; see :ref[dominated convergence]{to=measure.dominated-convergence}.
:::

:::idea[Fixed limits]{provenance=original}
The derivative of $F$ at $x$ is a limit of averages of difference quotients of $f$, and the integral of $\partial f/\partial x$ is the average of a limit. So the whole question is whether one limit, taken in $x$, may be exchanged with an average taken in $t$ — and the one hypothesis that always licenses such an exchange over a bounded interval is that the convergence be uniform in $t$.

That uniformity is bought by compactness. The mean value theorem rewrites each difference quotient in $x$ as a value of $\partial f/\partial x$ at an unknown nearby point; continuity of $\partial f/\partial x$ on a compact strip around the segment $\{x\}\times[a,b]$ makes that value close to $\partial f/\partial x(x,t)$ by an amount that does not depend on $t$. Integrating an error smaller than $\varepsilon$ over an interval of length $b-a$ costs at most $(b-a)\varepsilon$, which is the whole estimate. The same compactness argument, used once more, shows the resulting partial derivatives are continuous, which is what upgrades "differentiable" to $C^1$.
:::

:::proof[Fixed limits]{provenance=original}
Lee states the theorem on p. 648 without proving it: the paragraph that introduces it, at the foot of p. 647, says only that a proof may be found in [Apo74], [Rud76] or [Str00]. So the argument below is ours; it is the standard compactness route sketched in the remark.

**Step 0 ($F$ is defined).** For each fixed $x \in U$ the map $t \mapsto f(x,t)$ is continuous on $[a,b]$, hence Riemann integrable, so $F(x)$ is a well-defined real number.

**Step 1 (localise).** Fix $x_0 \in U$ and an index $i$. Since $U$ is open there is $r > 0$ with the closed ball $K = \{x \in \mathbb{R}^n : \lvert x - x_0\rvert \le r\}$ contained in $U$. The set $K \times [a,b] \subseteq \mathbb{R}^{n+1}$ is closed and bounded, hence compact by :ref[Heine-Borel]{to=found.compactness}.

**Step 2 (uniform continuity of the derivative).** By hypothesis $\partial f/\partial x_i$ is continuous on $U \times [a,b]$, hence on the compact set $K \times [a,b]$, hence *uniformly* continuous there (:ref[compactness]{to=found.compactness}, "what continuity gains on a compact space", part 2). So, given $\varepsilon > 0$, there is $\delta$ with $0 < \delta \le r$ such that

$$
\left\lvert \frac{\partial f}{\partial x_i}(y,s) - \frac{\partial f}{\partial x_i}(y',s) \right\rvert < \varepsilon
\qquad\text{whenever } y, y' \in K,\ \lvert y - y'\rvert < \delta,\ s \in [a,b] .
$$

This is the only place the *continuity* of $\partial f/\partial x_i$ is used; its mere existence at every point of $U \times [a,b]$ is used again in Step 3, to apply the mean value theorem. Existence alone would not give the display.

**Step 3 (mean value theorem in the $i$-th variable).** Let $0 < \lvert h \rvert < \delta$, so that $x_0 + h e_i \in K \subseteq U$, and fix $t \in [a,b]$. The one-variable function $s \mapsto f(x_0 + s e_i, t)$ is defined for $\lvert s \rvert \le r$, is continuous there (as $f$ is continuous) and is differentiable with derivative $\partial f/\partial x_i (x_0 + s e_i, t)$, because that partial derivative exists at every point of $U \times [a,b]$. The mean value theorem therefore supplies a number $\theta \in (0,1)$, depending on $t$ and $h$, with

$$
\frac{f(x_0 + h e_i, t) - f(x_0, t)}{h} = \frac{\partial f}{\partial x_i}\bigl(x_0 + \theta h e_i, t\bigr) .
$$

**Step 4 (the difference quotients converge uniformly in $t$).** The point $x_0 + \theta h e_i$ lies in $K$ and is at distance $\lvert \theta h\rvert < \delta$ from $x_0$, so Step 2 applied to $y = x_0 + \theta h e_i$ and $y' = x_0$ turns Step 3 into

$$
\left\lvert \frac{f(x_0 + h e_i, t) - f(x_0, t)}{h} - \frac{\partial f}{\partial x_i}(x_0, t) \right\rvert < \varepsilon
\qquad\text{for every } t \in [a,b] \text{ and every } 0 < \lvert h\rvert < \delta .
$$

The bound is independent of $t$: the difference quotients converge to $\partial f/\partial x_i(x_0, \cdot)$ uniformly on $[a,b]$ (:ref[uniform convergence]{to=found.uniform-convergence}).

**Step 5 (integrate the estimate).** By linearity of the integral and the elementary bound $\lvert\int_a^b g\rvert \le (b-a)\sup_{[a,b]}\lvert g\rvert$, Step 4 gives, for every $0 < \lvert h \rvert < \delta$,

$$
\left\lvert \frac{F(x_0 + h e_i) - F(x_0)}{h} - \int_a^b \frac{\partial f}{\partial x_i}(x_0,t)\,dt \right\rvert \le (b-a)\,\varepsilon .
$$

As $\varepsilon > 0$ was arbitrary, the limit of the left-hand difference quotient as $h \to 0$ exists and equals the integral: $\partial F/\partial x_i(x_0)$ exists and is $\int_a^b \partial f/\partial x_i (x_0,t)\,dt$. This is the displayed formula.

Nothing in Steps 1 to 5 singled out the point $x_0$ or the index $i$: the hypotheses hold at every point of $U$ and for every $i$, so the argument may be run again at any $x \in U$. Hence every first partial derivative of $F$ exists at every point of $U$ and is given there by the displayed formula. That is what makes Step 6 legitimate as stated.

**Step 6 (the partial derivatives are continuous).** Fix again a point $x_0 \in U$ and the ball $K \subseteq U$, $\varepsilon$ and $\delta$ of Steps 1 and 2. By the paragraph just above, $\partial F/\partial x_i$ exists at every point of $K$ and is the integral of $\partial f/\partial x_i$ there. So for $x, x' \in K$ with $\lvert x - x'\rvert < \delta$, Step 2 bounds the integrands and the same elementary estimate gives

$$
\left\lvert \frac{\partial F}{\partial x_i}(x) - \frac{\partial F}{\partial x_i}(x') \right\rvert
\le \int_a^b \left\lvert \frac{\partial f}{\partial x_i}(x,t) - \frac{\partial f}{\partial x_i}(x',t) \right\rvert dt
\le (b-a)\,\varepsilon .
$$

Since $\varepsilon$ was arbitrary and $\delta$ depends only on $\varepsilon$, this says $\partial F/\partial x_i$ is continuous at $x_0$; and $x_0 \in U$ was arbitrary. Every first partial derivative of $F$ therefore exists on $U$ and is continuous on $U$, which is exactly the statement that $F$ is of class $C^1$ (:ref[partial derivatives and the chain rule]{to=found.partial-derivatives-chain-rule}).

**Step 7 (iteration).** Suppose $f$ and all its $x$-partials up to order $k$ are continuous on $U \times [a,b]$. Steps 1 to 6 apply to $f$ and give $\partial F/\partial x_i = \int_a^b \partial f/\partial x_i\,dt$; the integrand is a function to which the hypotheses again apply, with $k$ replaced by $k-1$. Induction on $k$ therefore gives $F \in C^k$ and the interchange for every derivative of order at most $k$. $\square$
:::

:::idea[Variable limits]{provenance=original}
There is nothing new to prove. Freeze the two limits of integration as independent variables, so that the single function $\Phi(x,u,v) = \int_u^v f(x,t)\,dt$ contains all the information, and note that $F$ is the composite of $\Phi$ with the curve $x \mapsto (x, \alpha(x), \beta(x))$.

The three partial derivatives of $\Phi$ are known separately: the derivative in $x$ is the fixed-limit theorem just proved, and the derivatives in $u$ and in $v$ are the fundamental theorem of calculus, with a minus sign at the lower end. The chain rule then assembles them, and the three terms of the Leibniz formula are just those three partial derivatives weighted by $1$, $\alpha'(x)$ and $\beta'(x)$.
:::

:::proof[Variable limits]{provenance=original}
Write $\Phi(x,u,v) = \int_u^v f(x,t)\,dt$ for $(x,u,v) \in I \times J \times J$, with the usual orientation convention $\int_u^v = -\int_v^u$. Because $J$ is an interval, the closed segment between $u$ and $v$ lies in $J$, so the integrand is defined and continuous there and $\Phi$ is well defined. By construction $F(x) = \Phi\bigl(x, \alpha(x), \beta(x)\bigr)$, the composition being legitimate because $\alpha$ and $\beta$ take values in $J$.

**Step 1 (the two derivatives in the limits).** Fix $x$ and $u$. The map $v \mapsto \int_u^v f(x,t)\,dt$ is an indefinite integral of the continuous function $t \mapsto f(x,t)$, so by the fundamental theorem of calculus $\partial \Phi/\partial v = f(x,v)$. Exchanging the roles of the endpoints and using the orientation convention, $\partial \Phi/\partial u = -f(x,u)$.

**Step 2 (the derivative in the parameter).** Fix $u, v \in J$ and choose a closed interval $[c,d] \subseteq J$ containing both $u$ and $v$, and an open interval $I' \subseteq I$ containing the point $x$ of interest. Then $f$ and $\partial f/\partial x$ are continuous on $I' \times [c,d]$, so the fixed-limit statement applies with $[c,d]$ in place of $[a,b]$ and gives

$$
\frac{\partial \Phi}{\partial x}(x,u,v) = \int_u^v \frac{\partial f}{\partial x}(x,t)\,dt ,
$$

the sign convention carrying over from $\int_u^v$ to $\int_u^v \partial f/\partial x$ unchanged.

**Step 3 ($\Phi$ is of class $C^1$).** The two derivatives of Step 1 are continuous in $(x,u,v)$ because $f$ is continuous. For the third, let $(x,u,v)$ and $(x',u',v')$ both lie in $I' \times [c,d]^2$ with $I'$ and $[c,d]$ as in Step 2, and let $M = \max \lvert \partial f/\partial x\rvert$ over the compact set $\overline{I''} \times [c,d]$ for a compact subinterval $\overline{I''} \subseteq I'$ containing $x$ and $x'$. Then

$$
\left\lvert \frac{\partial \Phi}{\partial x}(x,u,v) - \frac{\partial \Phi}{\partial x}(x',u',v') \right\rvert
\le \left\lvert \int_u^v \Bigl( \frac{\partial f}{\partial x}(x,t) - \frac{\partial f}{\partial x}(x',t) \Bigr) dt \right\rvert
+ M\bigl( \lvert u - u'\rvert + \lvert v - v'\rvert \bigr) ,
$$

because changing the endpoints alters the integral only over two intervals of lengths $\lvert u - u'\rvert$ and $\lvert v-v'\rvert$. The first term tends to $0$ as $x' \to x$ by Step 6 of the previous proof, and the second tends to $0$ as $(u',v') \to (u,v)$. So all three partial derivatives of $\Phi$ exist and are continuous on $I \times J \times J$, that is, $\Phi$ is of class $C^1$, and in particular differentiable at every point (:ref[partial derivatives and the chain rule]{to=found.partial-derivatives-chain-rule}).

**Step 4 (chain rule).** The curve $\gamma(x) = \bigl(x, \alpha(x), \beta(x)\bigr)$ is differentiable on $I$, since $\alpha$ and $\beta$ are differentiable by hypothesis, with $\gamma'(x) = \bigl(1, \alpha'(x), \beta'(x)\bigr)$. As $\Phi$ is differentiable, the chain rule applies to $F = \Phi \circ \gamma$ and gives, at every $x \in I$,

$$
F'(x) = \frac{\partial \Phi}{\partial x} \cdot 1 + \frac{\partial \Phi}{\partial u}\,\alpha'(x) + \frac{\partial \Phi}{\partial v}\,\beta'(x) ,
$$

all three partials evaluated at $\gamma(x)$. Substituting Steps 1 and 2 produces

$$
F'(x) = \int_{\alpha(x)}^{\beta(x)} \frac{\partial f}{\partial x}(x,t)\,dt - f\bigl(x,\alpha(x)\bigr)\alpha'(x) + f\bigl(x,\beta(x)\bigr)\beta'(x) ,
$$

which is the Leibniz formula.

**Step 5 (the $C^1$ refinement).** If in addition $\alpha, \beta \in C^1$, then $\gamma$ is continuous with continuous derivative, and the right-hand side above is a continuous function of $x$: the three partials of $\Phi$ are continuous by Step 3 and $\gamma$, $\alpha'$, $\beta'$ are continuous. A differentiable function with continuous derivative is of class $C^1$, so $F \in C^1(I)$. $\square$
:::

:::method[Evaluating an integral by introducing a parameter]{provenance=original}
A definite integral with no visible parameter can often be computed by creating one and differentiating.

1. **Embed the integral in a family.** Write the wanted number as $F(x_0)$ for some $F(x) = \int_a^b f(x,t)\,dt$, choosing the parameter $x$ so that $\partial f/\partial x$ is simpler than $f$ — typically by inserting a factor $e^{-xt}$, $t^{x}$ or $\cos(xt)$, or by promoting a constant already present to a variable.
2. **Check the hypotheses on a region containing $x_0$.** Find an open $I \ni x_0$ on which $f$ and $\partial f/\partial x$ are continuous on $I \times [a,b]$, endpoints included. If the $t$-interval is infinite or $f$ is unbounded, this step must instead produce a function $g$, integrable over the $t$-range, with $\lvert \partial f/\partial x (x,t)\rvert \le g(t)$ for every $x \in I$ and every $t$, so that dominated convergence applies.
3. **Differentiate under the sign** to get $F'(x) = \int_a^b \partial f/\partial x\,(x,t)\,dt$, and evaluate that integral in closed form. If it is still hard, differentiate again, or combine with a reversal of the order of integration, the companion technique for a double integral :cite[]{work=arfken-2013 loc="§1.10, Example 1.10.6, pp. 70–71"}.
4. **Solve the resulting equation for $F$.** Usually $F' = \varphi(x)$ is integrated directly; sometimes step 3 yields a first-order differential equation for $F$, for example $F' = c(x)F$.
5. **Fix the constant of integration** from a value of $x$ at which $F$ is known, often an endpoint or a limit $x \to \infty$; frequently it is a value at which the integrand vanishes identically in $t$, so that $F$ there is $0$. The constant cannot be recovered from the differentiated equation alone, and this step is where the answer is pinned down.
6. **Evaluate at $x_0$**, checking that $x_0$ lies in the interval $I$ on which steps 2–5 were justified.

**How it fails.** Omitting step 2 is the usual error: on a strip that is not closed, or with an infinite interval of integration, continuity of $f$ and $\partial f/\partial x$ does not justify step 3, and the identity can be false (see the remark). Omitting step 5 produces an answer right up to an additive constant. If $f$ or $\partial f/\partial x$ is discontinuous at some $t = t_0$ in $[a,b]$, split the integral at $t_0$ first and use the Leibniz rule on each piece, as Stakgold and Holst do for a Green's function whose $t$-derivative jumps at $t = x$.
:::

:::remark{provenance=original}
**Where the hypotheses are used, and what fails without them.**

- *The continuity must hold on a closed strip $U \times [a,b]$.* Let
  $$
  f(x,t) = \frac{2x^3}{(x^2+t^2)^2} ,
  $$
  which is continuous, together with $\partial f/\partial x$, on $\mathbb{R}\times(0,\infty)$ — but on no strip $U \times [0,b]$ with $0 \in U$, since $f(x,0) = 2/x$ has no limit as $x \to 0$. With the full range $t \in (0,\infty)$, $\int_0^\infty dt/(x^2+t^2)^2 = \pi/(4x^3)$ for $x > 0$, so
  $$
  F(x) = \int_0^\infty f(x,t)\, dt = \frac{\pi}{2}\ (x>0), \qquad F(0) = 0, \qquad F(x) = -\frac{\pi}{2}\ (x<0),
  $$
  and $F$ is not even continuous at $0$, let alone differentiable; meanwhile $f(x,t)$ vanishes to third order in $x$ for each fixed $t > 0$, so $\partial f/\partial x(0,t) = 0$ and the differentiated integral exists and equals $0$. One side of the formula does not exist at all.
- *It is the open end at $t = 0$, not the length of the $t$-interval, that fails here.* Shortening the range to $(0,1]$ changes nothing: $\int_0^1 f(x,t)\,dt = x/(x^2+1) + \arctan(1/x)$, with one-sided limits $\pm\pi/2$ at $0$ while the value there is $0$. Keeping the range infinite but closing it at the bad end repairs the identity: on $\mathbb{R}\times[1,\infty)$ one finds $\int_1^\infty f(x,t)\,dt = \arctan x - x/(1+x^2) = \tfrac23 x^3 + O(x^5)$, whose derivative at $0$ is $0 = \int_1^\infty \partial f/\partial x(0,t)\,dt$. What goes wrong in the first bullet is that the mass of $\partial f/\partial x$ escapes to $t = 0$ as $x \to 0$: no function of $t$ integrable near $0$ dominates $\partial f/\partial x(x,t)$ for all small $x$.
- *Existence of $\partial f/\partial x$ is not enough; its continuity is what is used.* The fixed-limit statement is proved by controlling $(f(x+h,t)-f(x,t))/h$ uniformly in $t \in [a,b]$, via the mean value theorem and the continuity of $\partial f/\partial x$ on the compact strip $K \times [a,b]$ for a compact $K \ni x$. Drop that continuity and the difference quotients need not converge uniformly.
- *The boundary terms need only differentiability of the limits.* In the Leibniz rule $\alpha$ and $\beta$ are required to be differentiable, not $C^1$; $F$ is then differentiable but perhaps not $C^1$. They must also take values in $J$, so that $f(x,\alpha(x))$ and $f(x,\beta(x))$ are defined, and $J$ must be an interval, so that the whole segment between $\alpha(x)$ and $\beta(x)$ lies in it.
- *A jump in the integrand across the diagonal.* Stakgold and Holst apply the rule to a Green's-function integral $\int_0^1 g(x,\xi)\,q(\xi)\,d\xi$ — they call the source term $f$, which we rename $q$ here to keep $f$ for the integrand of the statements above — where $\partial g/\partial x$ jumps at $\xi = x$. The integral must first be split at $\xi = x$, after which each piece has a continuous $x$-derivative and a variable limit. The boundary terms from the two pieces cancel on the first differentiation precisely because $g$ is continuous across $\xi = x$, and fail to cancel on the second, which is what produces the delta-like source term.
- *Conventions.* Some texts call the fixed-limit identity "Leibniz's rule" and others reserve that name for the variable-limit formula with its two boundary terms, which is the usage here. The same name is also attached, in an unrelated context, to the formula for the $n$th derivative of a product.
- *The general hypothesis.* For an infinite interval or an unbounded integrand the right statement replaces continuity of $\partial f/\partial x$ by a bound $\lvert \partial f/\partial x(x,t)\rvert \le g(t)$ valid for all $x$ in a neighbourhood, with $g$ integrable over the $t$-range; that belongs to :ref[dominated convergence]{to=measure.dominated-convergence}. Domination is what replaces the compactness of $[a,b]$ used in the proof above.
:::

:::example[A parameter inserted where there was none]{provenance=original}
Evaluate
$$
N = \int_0^1 \frac{\ln(1+t)}{1+t^2}\, dt .
$$
There is no parameter in sight, so we create one.

1. **Embed in a family.** Put $f(x,t) = \ln(1+xt)/(1+t^2)$ and $F(x) = \int_0^1 f(x,t)\,dt$, so that $N = F(1)$ and $F(0) = 0$. The point of this choice is that differentiating in $x$ removes the logarithm.
2. **Check the hypotheses.** Take $I = (-1,\infty)$. For $x \in I$ and $t \in [0,1]$ we have $1 + xt \ge \min\{1, 1+x\} > 0$, so $f$ is continuous on $I \times [0,1]$, and so is
   $$
   \frac{\partial f}{\partial x}(x,t) = \frac{t}{(1+xt)(1+t^2)} .
   $$
   The $t$-interval is closed and bounded, so the fixed-limit theorem applies on the whole of $I$ and $F \in C^1(I)$.
3. **Differentiate under the sign and split the integrand.** Partial fractions in $t$ give
   $$
   \frac{t}{(1+xt)(1+t^2)} = \frac{1}{1+x^2}\left( \frac{-x}{1+xt} + \frac{t+x}{1+t^2} \right),
   $$
   which is checked by clearing denominators: $-x(1+t^2) + (t+x)(1+xt) = t + x^2 t = t(1+x^2)$.
4. **Evaluate the three pieces.** For $x \neq 0$, $\int_0^1 dt/(1+xt) = \ln(1+x)/x$, while $\int_0^1 t\,dt/(1+t^2) = \tfrac12 \ln 2$ and $\int_0^1 dt/(1+t^2) = \pi/4$. Hence
   $$
   F'(x) = \frac{1}{1+x^2}\left( -\ln(1+x) + \tfrac12 \ln 2 + \frac{\pi x}{4} \right),
   $$
   and this also holds at $x = 0$, where both sides equal $\tfrac12\ln 2$.
5. **Integrate from $0$ to $1$.** $F$ is $C^1$ on $I \supseteq [0,1]$, so $F(1) = F(0) + \int_0^1 F'(x)\,dx$ with $F(0) = 0$:
   $$
   F(1) = -\int_0^1 \frac{\ln(1+x)}{1+x^2}\,dx + \frac{\ln 2}{2}\int_0^1 \frac{dx}{1+x^2} + \frac{\pi}{4}\int_0^1 \frac{x\,dx}{1+x^2} .
   $$
6. **Recognise the integral on the right.** The first integral is $N = F(1)$ again — only the name of the variable has changed. The other two are $\pi/4$ and $\tfrac12\ln 2$, so
   $$
   F(1) = -F(1) + \frac{\ln 2}{2}\cdot\frac{\pi}{4} + \frac{\pi}{4}\cdot\frac{\ln 2}{2} = -F(1) + \frac{\pi \ln 2}{4} .
   $$
7. **Solve.** $2F(1) = \pi \ln 2/4$, so
   $$
   N = \frac{\pi \ln 2}{8} = 0.2721982613\ldots
   $$
   Numerical quadrature of the original integral gives $0.2721982613$, which is the check. Note that step 5, fixing the value of $F$ at a point where it is known, is what pins the answer down; step 4 alone determines $N$ only up to a constant.
:::

:::example[Variable limits: a Volterra integral and the equation it solves]{provenance=original}
Let $q : \mathbb{R} \to \mathbb{R}$ be continuous and set
$$
u(x) = \int_0^x \sin(x - s)\, q(s)\, ds .
$$
We show that $u$ solves $u'' + u = q$ with $u(0) = u'(0) = 0$, and then compute it for $q(s) = s$.

1. **Hypotheses.** Here $f(x,s) = \sin(x-s)q(s)$ is continuous on $\mathbb{R}^2$, and $\partial f/\partial x = \cos(x-s)q(s)$ is too; the limits $\alpha(x) = 0$ and $\beta(x) = x$ are of class $C^1$ with $\alpha' = 0$, $\beta' = 1$. The Leibniz rule applies, with $I = J = \mathbb{R}$.
2. **First differentiation.** The boundary term at the lower limit carries the factor $\alpha' = 0$, and the one at the upper limit is $f(x,x)\cdot 1 = \sin(0)q(x) = 0$. So only the integral term survives:
   $$
   u'(x) = \int_0^x \cos(x-s)\, q(s)\, ds .
   $$
   In particular $u(0) = u'(0) = 0$, both integrals being over an interval of zero length.
3. **Second differentiation.** Apply the rule again, now to the integrand $\cos(x-s)q(s)$, whose $x$-derivative is $-\sin(x-s)q(s)$. This time the upper boundary term is $\cos(0)q(x) = q(x)$ and does not vanish:
   $$
   u''(x) = q(x) - \int_0^x \sin(x-s)\,q(s)\,ds = q(x) - u(x) .
   $$
   Hence $u'' + u = q$. The whole content of the computation is that the boundary term is invisible at the first differentiation and decisive at the second.
4. **A closed form.** Take $q(s) = s$. Substituting $\sigma = x - s$,
   $$
   u(x) = \int_0^x (x - \sigma)\sin\sigma\, d\sigma = x\bigl(1 - \cos x\bigr) - \bigl(\sin x - x\cos x\bigr) = x - \sin x .
   $$
5. **Check.** $u'' = \sin x$, so $u'' + u = \sin x + (x - \sin x) = x = q(x)$, and $u(0) = u'(0) = 0$. The value at $x = 1$ is
   $$
   u(1) = 1 - \sin 1 = 0.1585290152\ldots,
   $$
   and numerical quadrature of $\int_0^1 \sin(1-s)\,s\,ds$ returns $0.1585290152$.
:::

:::application{provenance=original}
Differentiating an integral in a parameter, and in its limits, is one of the standard moves of theoretical physics.

- *Impulse response and Duhamel's formula.* For a mass on a spring driven from rest, $m\ddot{x} + kx = f(t)$ with $x(0) = \dot{x}(0) = 0$ and $\omega = \sqrt{k/m}$, the solution is
  $$
  x(t) = \frac{1}{m\omega}\int_0^t \sin\bigl(\omega(t-s)\bigr) f(s)\,ds ,
  $$
  and the verification is Example 2 word for word, with the factor $1/(m\omega)$ and $\omega$ inserted: the first differentiation loses its boundary term because the impulse response $\sin(\omega\tau)/(m\omega)$ vanishes at $\tau = 0$ (the system starts at rest), and the second keeps it because the derivative of that response is $1/m$ at $\tau = 0$ (an impulse delivers momentum). That surviving boundary term *is* the force at the present instant. For $m = 1$, $\omega = 2$ and a step force $f \equiv 1$ the formula gives $x(t) = (1 - \cos 2t)/4$, which oscillates about the static displacement $f/k = 1/4$; at $t = 1$ it equals $0.3540367091$.
- *Green's functions with a kink.* The same rule, applied twice, is how one checks that $u(x) = \int_0^1 g(x,\xi)\,q(\xi)\,d\xi$ solves $-u'' = q$ on $(0,1)$ with $u(0) = u(1) = 0$. Because $\partial g/\partial x$ jumps across $\xi = x$, the integral must first be split at $\xi = x$, which turns a fixed-limit integral into two variable-limit ones. Stakgold and Holst carry this out :cite[]{work=stakgold-holst-2011 loc="§1.2, pp. 63–64"}: the boundary terms of the two pieces cancel on the first differentiation, because $g$ is continuous across the diagonal, and fail to cancel on the second, where their difference is exactly the unit jump of $\partial g/\partial x$ and delivers $-q(x)$. Every delta-function source in a Green's-function calculation appears in this way.
- *Generating functions in statistical mechanics and quantum theory.* Thermodynamic averages are parameter derivatives of integrals: from $Z(\beta) = \int e^{-\beta H}\,d\Gamma$ one gets $\langle H \rangle = -\partial(\ln Z)/\partial\beta$, and differentiating again gives the energy variance, hence the heat capacity. Moments of any distribution come the same way from its moment generating function, and the Hellmann-Feynman theorem $\partial E/\partial\lambda = \langle \psi \vert \partial H/\partial\lambda \vert \psi\rangle$ is the same interchange applied to $E(\lambda) = \int \overline{\psi}\,H_\lambda \psi$. In each case the hypothesis that has to be checked is the one of step 2 of the method: on an infinite range of integration continuity is not enough, and one needs a dominating integrable bound valid throughout a neighbourhood of the parameter value.
:::
