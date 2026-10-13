---
id: prob.ito-calculus
title: The Ito integral and Ito's formula
kind: theorem
level: core
summary: Builds the Ito integral against a Wiener process by extending the elementary sum over predictable step functions along the Ito isometry, shows that the resulting integral is a martingale with second moment equal to the mean integrated square of the integrand, and states and sketches Ito's formula, the chain rule with its extra second-derivative term.
prereqs: [prob.brownian-motion, prob.martingales, prob.conditional-expectation, prob.convergence-random-variables, funcan.hilbert-spaces]
provenance: adapted
sources:
  - work: grimmett-stirzaker-2020
    loc: "§13.7 Stochastic calculus, pp. 603-604: the formal Taylor argument leading to $dX_t = f'(W_t)\\,dW_t + \\tfrac12 f''(W_t)\\,dt$ (equation (13.7.3)), the partition calculation $2I_n = W_t^2 - W_0^2 - Z_n$ with $Z_n \\to t$ in mean square (equation (13.7.4)), the resulting value (13.7.5) of $\\int_0^t W_s\\,dW_s$, the statement that other choices of the evaluation point give other answers, and Exercises (13.7.2) and (13.7.3); §13.8 The Ito integral, pp. 605-609: the filtration, the conditions 'measurable' and 'adapted', the integrability condition (13.8.1), the class $\\mathcal{A}$ and its norm (13.8.2), predictable step functions and their integral (13.8.3), Lemma (13.8.4) (the isometry) with its proof, Theorem (13.8.6) (approximation by step functions) and the Cauchy argument and uniqueness argument that follow it, the definition of an Ito process (13.8.9)-(13.8.10), Theorem (13.8.11) (the integral is a martingale) with proof, Theorem (13.8.13) (the martingale representation converse), the footnotes on local martingales and on predictable integrands, and Exercises (13.8.1), (13.8.4) and (13.8.6); §13.9 Ito's formula, pp. 610-612: Theorem (13.9.2) (Ito's formula, stated with proof omitted), Theorem (13.9.4) (Ito's simple formula) with its sketch proof and the remark that the differentiability assumption may be weakened, Example (13.9.7), Example (13.9.8) (the product rule) and Example (13.9.9) (geometric Brownian motion); §13.10, equation (13.10.2), p. 614"
    pages: "603-612, 614"
    role: the whole unit - the definition of the class of admissible integrands, the elementary integral, the isometry and its proof route, the passage to the limit, the martingale property, the statement of Ito's formula in both the general and the Wiener-process forms with the sketch proof of the latter, the hypotheses exactly as stated there, the failure of the naive chain rule, the dependence of the limit on the evaluation point, and geometric Brownian motion with its closed form
---

:::note[What goes wrong with the ordinary chain rule]{provenance=original}
Write $\delta W = W_{t+\delta t} - W_t$ for an increment of a standard Wiener process. The whole of this unit turns on one fact about that increment: it is of size $\sqrt{\delta t}$, not $\delta t$, because $\mathbb{E}\bigl[(\delta W)^2\bigr] = \delta t$.

In ordinary calculus a second-order Taylor term is negligible because $(\delta x)^2$ is small compared with $\delta x$. Here $(\delta W)^2$ is comparable with $\delta t$, so the second-order term of a Taylor expansion survives the limit and contributes a *drift*. Everything below is the bookkeeping that makes this precise: a definition of $\int \psi \, dW$ that is stable under the limit, and a chain rule that carries the extra term.

A reader who wants only the operational rule can take away one line, to be used inside any smooth function of an Itô process: $(dW)^2 = dt$, $dW\,dt = 0$, $(dt)^2 = 0$.
:::

:::definition[Admissible integrands, predictable step functions, and the integral]{provenance=adapted src="grimmett-stirzaker-2020:§13.8, pp. 605-608, including (13.8.1), (13.8.2), (13.8.3) and the definition of $I(\psi)$"}
Let $W$ be a standard Wiener process on a complete probability space $(\Omega, \mathcal{F}, \mathbb{P})$. For $t \ge 0$ let $\mathcal{F}_t$ be the smallest sub-$\sigma$-field of $\mathcal{F}$ that contains every null event and with respect to which each of $W_s$, $0 \le s \le t$, is measurable, and write $\mathbf{F} = \{\mathcal{F}_t : t \ge 0\}$ for the filtration so obtained.

A process $\psi$ is **measurable** if the map $(t, \omega) \mapsto \psi_t(\omega)$ is measurable for the product $\sigma$-field $\mathcal{B} \otimes \mathcal{F}$, where $\mathcal{B}$ is the Borel $\sigma$-field on $[0,\infty)$; a measurable $\psi$ is **adapted** if $\psi_t$ is $\mathcal{F}_t$-measurable for every $t$. Let

$$
\mathcal{A} = \Bigl\{\, \psi \text{ adapted} \ :\ \mathbb{E}\Bigl(\int_0^\infty |\psi_t|^2 \, dt\Bigr) < \infty \,\Bigr\} ,
\qquad
\|\psi\| = \sqrt{\mathbb{E}\Bigl(\int_0^\infty |\psi_t|^2\, dt\Bigr)} .
\tag{1}
$$

With $\|\cdot\|$ as its norm, $\mathcal{A}$ is a Hilbert space, and therefore complete. (Strictly, $\|\cdot\|$ is a norm on the equivalence classes of processes that agree with probability one, since $\|\psi\| = 0$ only forces $\psi$ to vanish almost everywhere.)

A **predictable step function** is a process of the form

$$
\varphi_t = \sum_{j=0}^{n-1} C_j \, \mathbf{1}_{(a_j,\, a_{j+1}]}(t) ,
\qquad 0 = a_0 < a_1 < \cdots < a_n ,
\tag{2}
$$

where each $C_j$ has a finite second moment and is $\mathcal{F}_{a_j}$-measurable — the height on an interval is decided *before* the interval begins. Its integral is the obvious sum,

$$
I(\varphi) = \sum_{j=0}^{n-1} C_j \,\bigl(W_{a_{j+1}} - W_{a_j}\bigr) ,
\tag{3}
$$

and $I$ is linear on predictable step functions.

For general $\psi \in \mathcal{A}$ the **Itô integral** $I(\psi)$ is the mean-square limit of $I(\varphi^{(n)})$ along any sequence $\{\varphi^{(n)}\}$ of predictable step functions with $\|\varphi^{(n)} - \psi\| \to 0$. The statement below says that such a sequence exists and that the limit does not depend on which one is used. We write

$$
\int_0^\infty \psi_s \, dW_s := I(\psi) ,
\qquad
\int_0^t \psi_s \, dW_s := I\bigl(\psi \,\mathbf{1}_{(0,t]}\bigr) .
$$

Finally, a continuous process $X$ is an **Itô process**, or a **diffusion**, with infinitesimal mean $\mu(t,x)$ and infinitesimal variance $\sigma(t,x)^2$ if

$$
X_t = X_0 + \int_0^t \mu(s, X_s)\, ds + \int_0^t \sigma(s, X_s)\, dW_s ,
\tag{4}
$$

for which the shorthand is $dX_t = \mu(t,X_t)\,dt + \sigma(t,X_t)\,dW_t$. Grimmett and Stirzaker state that the existence of such a process is beyond the scope of their account; see :ref[Stochastic differential equations]{to=prob.stochastic-differential-equations}.
:::

:::statement[The Ito isometry, and the integral it defines]{provenance=adapted src="grimmett-stirzaker-2020:§13.8, Lemma (13.8.4) and Theorem (13.8.6), p. 606, the uniqueness argument on p. 608, Theorem (13.8.11), p. 608, Theorem (13.8.13), p. 609, and Exercises (13.8.4) and (13.8.6), p. 610"}
Let $W$ be a standard Wiener process and $\mathbf{F}$ the filtration above. Write $\|U\|_2 = \sqrt{\mathbb{E}|U|^2}$ for a random variable $U$.

1. **Isometry on step functions.** If $\varphi$ is a predictable step function then $\|I(\varphi)\|_2 = \|\varphi\|$.
2. **Approximation.** If $\psi \in \mathcal{A}$ has continuous sample paths, there is a sequence $\{\varphi^{(n)}\}$ of predictable step functions with $\|\varphi^{(n)} - \psi\| \to 0$. (Grimmett and Stirzaker prove this under the continuity assumption and record that continuity is not necessary.)
3. **The limit exists and is unique.** For such a $\psi$ the random variables $I(\varphi^{(n)})$ converge in mean square, and any two approximating sequences give limits that agree with probability one. This limit is $I(\psi)$.
4. **The isometry persists.** For an adapted $\psi$ with $\|\psi\| < \infty$, $\|I(\psi)\|_2 = \|\psi\|$. The source also records the bilinear version
   $$
   \mathbb{E}\bigl(I(\psi_1) I(\psi_2)\bigr) = \mathbb{E}\Bigl(\int_0^\infty \psi_1(t)\psi_2(t)\,dt\Bigr) ,
   $$
   whenever both sides exist, for $\psi_1$ and $\psi_2$ *predictable step functions*. It extends to $\psi_1,\psi_2 \in \mathcal{A}$ at once by polarisation, since $I$ is linear and the norm identity holds throughout $\mathcal{A}$: four applications of $\|I(\cdot)\|_2 = \|\cdot\|$ to $\psi_1\pm\psi_2$ give it. (That last deduction is ours, not the source's.) In particular $\mathbb{E}\,I(\psi) = 0$.
5. **Martingale property.** If $\psi \in \mathcal{A}$ has continuous sample paths then $J_t = \int_0^t \psi_u\,dW_u$ is a martingale with respect to $\mathbf{F}$.
6. **Converse (martingale representation).** If $M$ is a martingale with respect to $\mathbf{F}$, there is an adapted process $\psi$ with $M_t = M_0 + \int_0^t \psi_u \, dW_u$ for all $t \ge 0$. Grimmett and Stirzaker state this without proof.

Item 4 is the identity usually called the **Itô isometry**. It is the workhorse: it turns a question about the second moment of a stochastic integral into an ordinary deterministic integral of a second moment.
:::

:::statement[Ito's formula]{provenance=adapted src="grimmett-stirzaker-2020:§13.9, Theorem (13.9.2), p. 610, and Theorem (13.9.4), p. 611"}
**General form.** Let $dX = \mu(t,X)\,dt + \sigma(t,X)\,dW$ and let $Y_t = f(t, X_t)$, where $f : [0,\infty) \times \mathbb{R} \to \mathbb{R}$ is twice continuously differentiable. Then $Y$ is again an Itô process, and

$$
dY = \Bigl[ f_x(t,X)\,\mu(t,X) \;+\; f_t(t,X) \;+\; \tfrac12 f_{xx}(t,X)\,\sigma^2(t,X) \Bigr]\,dt \;+\; f_x(t,X)\,\sigma(t,X)\,dW .
\tag{5}
$$

Grimmett and Stirzaker state (5) with the proof omitted, and record that it extends to multivariate diffusions.

**The case $X = W$.** Under the name *Itô's simple formula*, the source states the following. Suppose $W$ is standard, and let the function $f(s,w)$ possess continuous partial derivatives up to the third order on the half-plane $s \ge 0$. Then $Y_t = f(t, W_t)$ is an Itô process, and

$$
dY = \Bigl[ f_t(t,W) + \tfrac12 f_{ww}(t,W) \Bigr]\,dt \;+\; f_w(t,W)\,dW .
\tag{6}
$$

This is (5) with $\mu = 0$ and $\sigma = 1$. Grimmett and Stirzaker give a sketch proof of (6) and note that its differentiability assumption may be weakened; the extra derivative is an artefact of that proof, not of the result. The term $\tfrac12 f_{ww}$, absent from the Newton-Leibniz chain rule, is the **Itô correction**.
:::

:::idea{provenance=original}
**The integral is built by isometric extension, exactly as the Fourier transform is extended from nice functions to $L^2$.** For a step function whose heights are fixed before each interval starts, the sum (3) is a sum of uncorrelated terms, so its second moment is the sum of the individual second moments — which is precisely $\|\varphi\|^2$. So $I$ is an isometry from a subset of the Hilbert space $\mathcal{A}$ into $L^2(\Omega)$. An isometry is uniformly continuous, so it carries Cauchy sequences to Cauchy sequences; since both spaces are complete, $I$ extends uniquely and isometrically to the closure of the step functions, and the remaining work is to show that this closure is all of $\mathcal{A}$.

**The martingale property is the same cancellation looked at from one step back.** Condition on $\mathcal{F}_s$. Each term $C_j(W_{a_{j+1}} - W_{a_j})$ of the sum that lies wholly after $s$ contributes nothing, because the increment is independent of $\mathcal{F}_{a_j}$ and has zero mean while $C_j$ is known at time $a_j$; each term wholly before $s$ is already known. This is exactly where adaptedness is spent.

**Itô's formula is a second-order Taylor expansion in which the second-order term does not die.** Expand $f$ over a short interval: the first-order terms reproduce the ordinary chain rule, and the second-order term in $w$ carries $(\delta W)^2$. That quantity has mean $\delta t$ and fluctuations small enough that, summed over $t/\delta t$ intervals, it may be replaced by $\delta t$ in the limit. Third-order terms carry $(\delta W)^3 \sim (\delta t)^{3/2}$ and do vanish. So one extra term survives, and only one.
:::

:::proof[The isometry, and the construction of the integral]{provenance=adapted src="grimmett-stirzaker-2020:§13.8, proof of Lemma (13.8.4), p. 606, and the argument following Theorem (13.8.6), pp. 607-608"}
We prove items 1 and 3, and then item 5; items 2, 4 and 6 are quoted from the source as stated.

**Step 1: square the elementary sum.** For a predictable step function $\varphi$ as in (2), write $\Delta_j = W_{a_{j+1}} - W_{a_j}$. Multiplying out,

$$
\mathbb{E}\bigl(|I(\varphi)|^2\bigr)
= \sum_{j=0}^{n-1} \mathbb{E}\bigl(C_j^2 \Delta_j^2\bigr)
\;+\; 2 \sum_{0 \le j < k \le n-1} \mathbb{E}\bigl(C_j C_k \Delta_j \Delta_k\bigr) .
$$

**Step 2: the diagonal terms.** Fix $j$ and condition on $\mathcal{F}_{a_j}$. Because $\varphi$ is a *predictable* step function, $C_j$ is $\mathcal{F}_{a_j}$-measurable, so it comes out of the conditional expectation; and $\Delta_j$ is independent of $\mathcal{F}_{a_j}$ with $\mathbb{E}(\Delta_j^2) = a_{j+1} - a_j$, since $W$ has independent increments of variance equal to their length. By the tower property,

$$
\mathbb{E}\bigl(C_j^2\Delta_j^2\bigr)
= \mathbb{E}\Bigl( C_j^2 \,\mathbb{E}\bigl(\Delta_j^2 \mid \mathcal{F}_{a_j}\bigr)\Bigr)
= \mathbb{E}\bigl(C_j^2\bigr)\,(a_{j+1} - a_j) .
$$

**Step 3: the off-diagonal terms vanish.** Let $j < k$. Condition on $\mathcal{F}_{a_k}$. The three factors $C_j$, $C_k$ and $\Delta_j$ are all $\mathcal{F}_{a_k}$-measurable, again by predictability and because $a_j < a_{j+1} \le a_k$; the remaining factor $\Delta_k$ is independent of $\mathcal{F}_{a_k}$ and has mean zero. Hence each such term has expectation $0$.

**Step 4: recognise the answer.** Combining Steps 1-3,

$$
\mathbb{E}\bigl(|I(\varphi)|^2\bigr) = \sum_{j} \mathbb{E}\bigl(C_j^2\bigr)(a_{j+1}-a_j)
= \mathbb{E}\Bigl(\int_0^\infty |\varphi_t|^2\,dt\Bigr) = \|\varphi\|^2 ,
$$

the middle equality because $\varphi$ takes the constant value $C_j$ on an interval of length $a_{j+1}-a_j$. This is item 1.

**Step 5: the approximating integrals form a Cauchy sequence.** Let $\psi \in \mathcal{A}$ have continuous sample paths and take $\{\varphi^{(n)}\}$ from item 2. The difference $\varphi^{(m)} - \varphi^{(n)}$ is again a predictable step function, so by linearity of $I$, by Step 4 applied to that difference, and by the triangle inequality in $\mathcal{A}$,

$$
\bigl\|I(\varphi^{(m)}) - I(\varphi^{(n)})\bigr\|_2
= \bigl\|\varphi^{(m)} - \varphi^{(n)}\bigr\|
\le \bigl\|\varphi^{(m)} - \psi\bigr\| + \bigl\|\varphi^{(n)} - \psi\bigr\|
\ \longrightarrow\ 0
$$

as $m, n \to \infty$. The space $L^2(\Omega)$ is complete, so $I(\varphi^{(n)})$ converges in mean square to some random variable.

**Step 6: the limit does not depend on the sequence.** Let $\{\rho^{(n)}\}$ be a second sequence of predictable step functions with $\|\rho^{(n)} - \psi\| \to 0$, with limit $I(\rho)$. Insert both approximations:

$$
\|I(\varphi) - I(\rho)\|_2 \le \|I(\varphi) - I(\varphi^{(n)})\|_2 + \|I(\varphi^{(n)}) - I(\rho^{(n)})\|_2 + \|I(\rho^{(n)}) - I(\rho)\|_2 .
$$

The outer two terms tend to $0$ by the definition of the limits. The middle term equals $\|\varphi^{(n)} - \rho^{(n)}\|$ by Step 4 and linearity, and that is at most $\|\varphi^{(n)} - \psi\| + \|\rho^{(n)} - \psi\| \to 0$. So the left-hand side, which does not depend on $n$, is $0$: the two limits agree with probability one. This is item 3.

**Step 7: the martingale property.** Let $0 < s < t$ and choose a partition $0 = a_0 < \cdots < a_m = s < \cdots < a_n = t$ that includes $s$ as a partition point. Let $\psi^{(n)}_u = \sum_j \psi_{a_j}\mathbf{1}_{(a_j, a_{j+1}]}(u)$ and $J^{(n)}_v = \int_0^v \psi^{(n)}_u\,dW_u$. Conditioning the sum (3) on $\mathcal{F}_s$ term by term:

- a term with $j < m$ lies entirely in $[0,s]$, and is $\mathcal{F}_s$-measurable, so it is unchanged;
- a term with $j \ge m$ has $a_j \ge s$; conditioning first on $\mathcal{F}_{a_j}$ and using that $\psi_{a_j}$ is $\mathcal{F}_{a_j}$-measurable while $W_{a_{j+1}} - W_{a_j}$ is independent of $\mathcal{F}_{a_j}$ with zero mean, the term has conditional expectation $0$.

Hence $\mathbb{E}(J^{(n)}_t \mid \mathcal{F}_s) = J^{(n)}_s$. Now refine the partition so that its mesh tends to $0$. By the approximation of item 2, $\|\psi^{(n)}\mathbf{1}_{(0,v]} - \psi \mathbf{1}_{(0,v]}\| \to 0$ for $v = s$ and $v = t$, so $J^{(n)}_s \to J_s$ and $J^{(n)}_t \to J_t$ in mean square. Mean-square convergence is preserved by conditional expectation, so the identity passes to the limit: $\mathbb{E}(J_t \mid \mathcal{F}_s) = J_s$ almost surely. $\square$
:::

:::proof[Sketch of Ito's simple formula]{provenance=adapted src="grimmett-stirzaker-2020:§13.9, sketch proof of Theorem (13.9.4), p. 611, with Exercise (13.7.2), p. 604"}
This is a sketch; the source itself gives only a summary, and the estimates behind items (i), (ii) and (iv) below are omitted there and here. Fix $t > 0$, put $\delta = t/n$, write $t_j = j\delta$ and $\Delta_j = W_{t_{j+1}} - W_{t_j}$.

**Step 1: telescope, splitting each step into a time move and a space move.** Write the total increment as

$$
f(t, W_t) - f(0, W_0) = \sum_{j=0}^{n-1}\Bigl[ f(t_{j+1}, W_{t_{j+1}}) - f(t_j, W_{t_{j+1}}) \Bigr]
\;+\; \sum_{j=0}^{n-1}\Bigl[ f(t_j, W_{t_{j+1}}) - f(t_j, W_{t_j}) \Bigr] .
$$

Each bracket in the first sum moves only in time, each in the second only in space; the two sums are handled by different arguments, which is the reason for the split.

**Step 2: Taylor-expand each sum.** By the mean value theorem there are random $\theta_j \in [t_j, t_{j+1}]$ making the first sum $\sum_j f_t(\theta_j, W_{t_{j+1}})\delta$. By Taylor's theorem with Lagrange remainder in the space variable there are random $\Xi_j$ between $W_{t_j}$ and $W_{t_{j+1}}$ making the second sum

$$
\sum_{j} f_w(t_j, W_{t_j})\Delta_j
\;+\; \tfrac12 \sum_{j} f_{ww}(t_j, W_{t_j})\Delta_j^2
\;+\; \tfrac16 \sum_{j} f_{www}(t_j, \Xi_j)\Delta_j^3 .
$$

The third derivative appears here, and nowhere else; this is why the hypothesis of (6) asks for three derivatives.

**Step 3: the time sum becomes an ordinary integral.** $W$ has continuous sample paths and $f_t$ is continuous, so along almost every path the integrand is continuous and the sum is a Riemann sum: $\sum_j f_t(\theta_j, W_{t_{j+1}})\delta \to \int_0^t f_t(s,W_s)\,ds$ almost surely.

**Step 4: the first space sum becomes the Itô integral.** The summand is the elementary integral (3) of the predictable step function with heights $f_w(t_j, W_{t_j})$, which is exactly the approximating step function of the construction above; it converges in mean square to $\int_0^t f_w(s, W_s)\,dW_s$.

**Step 5: the quadratic sum becomes a time integral — the Itô correction.** Here is the one genuinely stochastic step. Each $\Delta_j^2$ has mean $\delta$, and $\Delta_j^2$ and $\Delta_k^2$ are independent for $j \ne k$ because $W$ has independent increments. Replacing $\Delta_j^2$ by its mean $\delta$ therefore introduces an error that is a sum of $n$ independent-in-the-relevant-sense, mean-zero terms each of size $\delta$; the variance of that error is of order $n\delta^2 = t\delta \to 0$. (For $f_{ww} \equiv 1$ this is the statement that $\sum_j \Delta_j^2 \to t$ in mean square, the quadratic variation of the Wiener process.) Hence
$$
\tfrac12\sum_j f_{ww}(t_j, W_{t_j})\Delta_j^2 - \tfrac12\sum_j f_{ww}(t_j, W_{t_j})\,\delta \ \longrightarrow\ 0
$$
in mean square, and the second of these is a Riemann sum converging to $\tfrac12\int_0^t f_{ww}(s,W_s)\,ds$.

**Step 6: the cubic sum is negligible.** $\mathbb{E}|\Delta_j|^3$ is of order $\delta^{3/2}$, so $n$ such terms total order $n\delta^{3/2} = t\,\delta^{1/2} \to 0$; the source states that this term converges to zero in mean square.

**Step 7: assemble.** Adding the limits of Steps 3-6 gives the integrated form of (6), and $t$ was arbitrary. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
**Predictability (the height $C_j$ is $\mathcal{F}_{a_j}$-measurable) is what makes the isometry true**, and it is used twice, in Steps 2 and 3. Drop it and both fail. Take the single-interval step function with $a_0 = 0$, $a_1 = t$ and height $C_0 = W_t$, which is $\mathcal{F}_t$-measurable but not $\mathcal{F}_0$-measurable. Then $I(\varphi) = W_t(W_t - W_0) = W_t^2$, whose mean is $t$, not $0$, and whose second moment is $\mathbb{E}(W_t^4) = 3t^2$, while $\|\varphi\|^2 = \mathbb{E}\int_0^t W_t^2\,ds = t^2$. Both item 4 and the martingale property are destroyed.

**This is the same thing as the dependence of the limit on the evaluation point.** Partition $(0,t]$ into $n$ equal pieces and form $\sum_j W_{\theta_j}(W_{t_{j+1}} - W_{t_j})$. Taking $\theta_j = t_j$, the left endpoint, gives $\tfrac12(W_t^2 - t)$ in mean square — the Itô value; taking $\theta_j = t_{j+1}$ gives $\tfrac12(W_t^2 + t)$. A Riemann integral would not notice the difference. The Wiener process has unbounded total variation on every non-trivial interval, and that is exactly why it does. The midpoint rule gives a third answer and a different calculus, discussed in :ref[Stochastic differential equations]{to=prob.stochastic-differential-equations}.

**The square-integrability condition (1) is what makes $J_t$ a martingale rather than only a local martingale.** Grimmett and Stirzaker record in a footnote that without it one obtains a local martingale, and that in a more general theory the correct condition on the integrand is not adaptedness but local boundedness and predictability, with $W$ replaced by a semimartingale.

**Continuity of the sample paths of $\psi$** is used only in item 2 and in item 5, and only because the proof given for the density of step functions uses uniform continuity on compact time intervals. The source states that this condition is not necessary.

**Two derivatives in Itô's formula (5) are not a technicality.** The term $\tfrac12 f_{xx}\sigma^2$ is a leading term, not a remainder. With $f$ only once continuously differentiable there is no formula of this shape at all, because the first-order Taylor remainder is of size $(\delta W)^2 \sim \delta t$ and does not vanish on summation. The simplest instance is $f(w) = w^2$: the Newton-Leibniz rule would give $d(W^2) = 2W\,dW$ and hence $\int_0^t W_s\,dW_s = \tfrac12 W_t^2$, whereas the correct value is $\tfrac12(W_t^2 - t)$. The two differ by a quantity, $t/2$, that is not small.

**The simple formula (6) asks for three derivatives where the general formula (5) asks for two.** This looks backwards, since (6) is a special case of (5). It is an honest feature of the source: (5) is quoted there without proof, while (6) is given the sketch proof above, and that sketch spends a third derivative on the Taylor remainder in Step 2. Grimmett and Stirzaker say explicitly that the assumption may be weakened. Use (5) when two derivatives are all you have.
:::

:::method[Evaluating a stochastic integral by reversing Ito's formula]{provenance=original}
There is no fundamental theorem of calculus for $\int \psi\,dW$ with a general adapted $\psi$. When the integrand has the form $g(s, W_s)$, however, the following works.

1. **Find an antiderivative in the space variable.** Choose $f(s,w)$ with $f_w(s,w) = g(s,w)$, three times continuously differentiable (or use (5) if you can justify two).
2. **Compute the drift** $f_t + \tfrac12 f_{ww}$.
3. **Write down Itô's formula in integrated form.**
   $$
   f(t, W_t) - f(0, W_0) = \int_0^t \Bigl[f_t(s,W_s) + \tfrac12 f_{ww}(s,W_s)\Bigr]ds + \int_0^t g(s,W_s)\,dW_s .
   $$
4. **Rearrange** to isolate the stochastic integral. If the drift in Step 2 vanishes identically, the stochastic integral is simply $f(t,W_t) - f(0,W_0)$ and is a martingale.
5. **Check admissibility before using the isometry or the martingale property.** Both need $g(\cdot, W_\cdot)\mathbf{1}_{(0,t]} \in \mathcal{A}$, that is $\int_0^t \mathbb{E}\bigl(g(s,W_s)^2\bigr)\,ds < \infty$. For a polynomial $g$ this is automatic, because all moments of a normal variable are finite.
6. **Take second moments with the isometry.** $\mathbb{E}\bigl[\bigl(\int_0^t g\,dW\bigr)^2\bigr] = \int_0^t \mathbb{E}\bigl(g(s,W_s)^2\bigr)\,ds$, an ordinary one-dimensional integral. Step 1 has already given the first moment, which is $0$.
7. **Check the answer independently** whenever the left-hand side has a known distribution; see the example.
:::

:::example[A cubic martingale, and its second moment two ways]{provenance=original}
Take $f(t,w) = w^3 - 3tw$, a polynomial and so as smooth as required, and let $W$ be a standard Wiener process with $W_0 = 0$.

**Step 1: the derivatives.**
$$
f_t = -3w , \qquad f_w = 3w^2 - 3t , \qquad f_{ww} = 6w .
$$

**Step 2: the drift cancels.**
$$
f_t + \tfrac12 f_{ww} = -3w + \tfrac12(6w) = 0 .
$$
So by Itô's simple formula (6), $Y_t = W_t^3 - 3tW_t$ has $dY = (3W_t^2 - 3t)\,dW_t$: a pure stochastic integral, with no drift.

**Step 3: read off the integral.** Since $f(0,0) = 0$,
$$
\int_0^t \bigl(3W_s^2 - 3s\bigr)\,dW_s = W_t^3 - 3t\,W_t .
$$

**Step 4: check admissibility.** With $g(s,w) = 3w^2 - 3s$ and $W_s \sim N(0,s)$,
$$
\mathbb{E}\bigl(g(s,W_s)^2\bigr) = 9\,\mathbb{E}\bigl(W_s^4 - 2sW_s^2 + s^2\bigr) = 9\bigl(3s^2 - 2s^2 + s^2\bigr) = 18 s^2 ,
$$
using $\mathbb{E}(W_s^2) = s$ and $\mathbb{E}(W_s^4) = 3s^2$. This is integrable on $[0,t]$, so $g(\cdot,W_\cdot)\mathbf{1}_{(0,t]} \in \mathcal{A}$ and items 4 and 5 of the statement apply. In particular $Y$ is a martingale, so $\mathbb{E}(W_t^3 - 3tW_t) = 0$ for every $t$.

**Step 5: second moment by the isometry.**
$$
\mathbb{E}\Bigl[\bigl(W_t^3 - 3tW_t\bigr)^2\Bigr] = \int_0^t 18 s^2\,ds = 6t^3 .
$$

**Step 6: the same number directly.** Expand the square and use the moments of $W_t \sim N(0,t)$, namely $\mathbb{E}(W_t^2) = t$, $\mathbb{E}(W_t^4) = 3t^2$ and $\mathbb{E}(W_t^6) = 15t^3$:
$$
\mathbb{E}\bigl(W_t^6 - 6t\,W_t^4 + 9t^2 W_t^2\bigr) = 15t^3 - 18t^3 + 9t^3 = 6t^3 .
$$
The two routes agree, which checks the isometry on this example.

**A number.** At $t = 2$, $\ \mathbb{E}\bigl[(W_2^3 - 6W_2)^2\bigr] = 6 \cdot 2^3 = \boxed{48}$.

Note how badly the naive chain rule would do here. Treating $dW$ as an ordinary differential would give $\int_0^t 3W_s^2\,dW_s = W_t^3$, and $W_t^3$ is not a martingale in any useful sense — it has the right mean, $0$, but the compensating $-3tW_t$ is exactly what the Itô correction supplies.
:::

:::application[Multiplicative noise and the gap between the mean and the typical path]{provenance=adapted src="grimmett-stirzaker-2020:§13.9, Example (13.9.9), p. 612, and §13.10, equation (13.10.2), p. 614"}
A quantity that grows by random *proportional* increments — a population, the size of an aerosol droplet under random coagulation, the price of a traded asset — is modelled by **geometric Brownian motion**,

$$
dS_t = S_t\bigl(\mu\,dt + \sigma\,dW_t\bigr) .
$$

Apply Itô's simple formula to $Y_t = \exp(\mu t + \sigma W_t)$: with $f(t,w) = e^{\mu t + \sigma w}$ one has $f_t = \mu f$, $f_w = \sigma f$, $f_{ww} = \sigma^2 f$, so $dY = (\mu + \tfrac12\sigma^2)Y\,dt + \sigma Y\,dW$. Therefore the solution of the displayed equation with $S_0 = 1$ is not $e^{\mu t + \sigma W_t}$ but

$$
S_t = \exp\Bigl[\bigl(\mu - \tfrac12\sigma^2\bigr)t + \sigma W_t\Bigr] ,
$$

which is the form in which the Black-Scholes model of §13.10 of the source states it, $\sigma$ there being called the volatility.

The consequence is one that is easy to get wrong in practice. Since $\mathbb{E}\,e^{\sigma W_t} = e^{\sigma^2 t/2}$, the *mean* grows at rate $\mu$:
$$
\mathbb{E}(S_t) = e^{\mu t} .
$$
But $\log S_t$ is normal with mean $(\mu - \tfrac12\sigma^2)t$, so the *median*, and the almost sure long-run growth rate of a single realisation, is governed by $\mu - \tfrac12\sigma^2$. The two differ by exactly the Itô correction.

Take $\mu = 0.05$ and $\sigma = 0.4$ per year. Then $\mu - \tfrac12\sigma^2 = 0.05 - 0.08 = -0.03$. After ten years the mean of the ensemble is $e^{0.5} = 1.6487$ times its initial value, while the median path is at $e^{-0.3} = 0.7408$ of it, and
$$
\mathbb{P}(S_{10} < S_0) = \Phi\!\left(\frac{0.03 \times 10}{0.4\sqrt{10}}\right) = \Phi(0.2372) = 0.5937 ,
$$
so a clear majority of realisations have gone *down* while the ensemble mean has gone up by nearly two thirds. The mean is carried by a thin tail of very large values. Whenever a quantity fluctuates multiplicatively, the average over an ensemble and the behaviour of a typical member are different questions, and Itô's formula is what converts between them. The same term reappears as the drift of the Fokker-Planck equation for $\log S$; see :ref[The Fokker-Planck equation]{to=prob.fokker-planck}.
:::
