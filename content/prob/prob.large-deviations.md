---
id: prob.large-deviations
title: Large deviations and Cramer's theorem
kind: theorem
level: advanced
summary: Gives the exponential rate at which the probability of a sum straying a fixed fraction away from its mean decays, identifies that rate as the Fenchel-Legendre transform of the cumulant generating function, and computes it on a worked tail against the exact answer.
prereqs: [prob.probability-inequalities, prob.generating-functions, prob.law-of-large-numbers, prob.central-limit-theorem]
provenance: adapted
sources:
  - work: grimmett-stirzaker-2020
    loc: "§5.11 Large deviations: the opening discussion of deviations of order $n^{\\alpha}$, eqs. (5.11.1) and (5.11.2) (the value and derivative of $\\Lambda$ at the origin, and its convexity via Cauchy-Schwarz), the definition (5.11.3) of the Fenchel-Legendre transform, Theorem (5.11.4) with its footnote attributing the result to Cramer, the reductions (5.11.6) and (5.11.7), the exponential Markov step preceding eq. (5.11.8), and the tilted-distribution argument (5.11.11)-(5.11.14) and the truncation argument (5.11.15)-(5.11.18), pp. 226-230; Exercises (5.11.3) and (5.11.4), p. 231; §5.7, Definition (5.7.1) and the properties (a)-(c) following it, p. 203"
    pages: "203, 226-231"
    role: the whole framework and the theorem - the cumulant generating function and its transform, the hypotheses and conclusion of the large deviation theorem, the centring reduction, the proof of positivity of the rate, the exponential upper bound, the tilting proof of the lower bound in the regular case and the truncation argument in the non-regular case; the equivalence between a finite moment generating function near the origin and exponentially decaying tails, and the Cauchy sum, both used in the remark; the standard properties of the moment generating function used throughout
  - work: evans-2010
    loc: "§3.3.2a Legendre transform (Evans numbers equations afresh in each chapter, so these are Ch. 3, eqs. (11), (12), (13), (16)): the hypotheses (11)-(12) on a convex Lagrangian, the definition (13) of $L^{*}$ (also called the Fenchel transform), the motivation identifying the maximiser through $p = DL(v^{*})$, and Theorem 3 (convex duality of Hamiltonian and Lagrangian) with the inequality $H(p) + L(v) \\ge p \\cdot v$ and the equivalences (16), pp. 116-117"
    pages: "116-117"
    role: the convex-analytic side of the same transform - that the transform of any function is convex, that the maximiser is located by setting the derivative equal to the conjugate variable, that the transform is an involution on convex superlinear functions, and the Fenchel-Young inequality
---

:::note[What large deviations add to the two limit theorems]{provenance=original}
The two classical limit theorems describe a sum $S_n$ of $n$ independent copies of a random variable on two different scales. :ref[The law of large numbers]{to=prob.law-of-large-numbers} says $S_n$ is close to $n\mu$ in the sense that $S_n/n \to \mu$; :ref[The central limit theorem]{to=prob.central-limit-theorem} says the discrepancy is of size $\sqrt{n}$ and is asymptotically normal. Neither answers the question an engineer actually asks about a rare event: *what is the chance that the average of a thousand measurements comes out ten per cent high?*

That is a deviation of $S_n$ from $n\mu$ of order $n$, not of order $\sqrt{n}$. Its probability tends to zero, and the central limit theorem cannot be used to estimate it, because the normal approximation is accurate in the bulk and is not a bound in the far tail. What survives is cruder but much stronger: the probability decays exponentially in $n$, at a rate that depends on the whole distribution of a single summand rather than on its mean and variance alone. This unit identifies that rate.
:::

:::definition[Cumulant generating function, and its Fenchel-Legendre transform]{provenance=adapted src="grimmett-stirzaker-2020:§5.11, eqs. (5.11.1)-(5.11.3), p. 226, and §5.7, Definition (5.7.1), p. 203; evans-2010:§3.3.2a, Ch. 3 eq. (13) (the definition of the Legendre transform) and the motivation following it, p. 116"}
Throughout, $X, X_1, X_2, \dots$ are independent random variables with one common distribution, $\mu = \mathbb{E}(X)$ is their mean, and

$$
S_n = X_1 + X_2 + \cdots + X_n .
$$

Write $M(t) = \mathbb{E}\bigl(e^{tX}\bigr)$ for the moment generating function of a single summand (see :ref[Generating functions]{to=prob.generating-functions}), and

$$
\Lambda(t) = \log M(t) ,
$$

the **cumulant generating function**. Let $D = \{t \in \mathbb{R} : M(t) < \infty\}$ be the set where this is defined; $0 \in D$ always, since $M(0) = 1$ and so $\Lambda(0) = 0$. Put

$$
T = \sup\{t : M(t) < \infty\} ,
$$

the right-hand edge of $D$.

The **Fenchel-Legendre transform** of $\Lambda$ is the function

$$
\Lambda^{*}(a) = \sup_{t \in \mathbb{R}} \bigl\{ at - \Lambda(t) \bigr\} , \qquad a \in \mathbb{R} .
$$

In the large deviation literature $\Lambda^{*}$ is called the **rate function**. It is the same operation that convex analysis and the calculus of variations apply to a convex Lagrangian: Evans writes $L^{*}(p) = \sup_{v}\{p \cdot v - L(v)\}$ and calls it the Legendre, or Fenchel, transform of $L$. Two features of that general picture are used below. First, a supremum of affine functions of $a$ is convex, so $\Lambda^{*}$ is convex whatever $\Lambda$ is. Secondly, when the supremum is attained at an interior point $\tau$ of $D$ and $\Lambda$ is differentiable there, the stationarity condition is

$$
\Lambda'(\tau) = a ,
$$

which is how one computes $\Lambda^{*}$ in practice: it pairs the deviation $a$ with the conjugate variable $\tau$. Evans states the duality in the form $H(p) + L(v) \ge p \cdot v$, with equality exactly when $p$ and $v$ are conjugate in this sense, and proves that the transform is an involution on convex functions of superlinear growth.
:::

:::statement[Elementary properties of $\Lambda$ and $\Lambda^{*}$]{provenance=adapted src="grimmett-stirzaker-2020:§5.11, eqs. (5.11.1), (5.11.2), (5.11.6) and (5.11.7), and the centring identities in the proof of Theorem (5.11.4), pp. 226-227"}
Let $\Lambda$ and $\Lambda^{*}$ be as above.

1. **Value and slope at the origin.** $\Lambda(0) = 0$, and $\Lambda'(0) = M'(0)/M(0) = \mu$ whenever $M'(0)$ exists.
2. **Convexity.** $\Lambda$ is convex at every point where it is finite. Indeed
   $$
   \Lambda''(t) = \frac{M(t)M''(t) - M'(t)^{2}}{M(t)^{2}}
    = \frac{\mathbb{E}\bigl(e^{tX}\bigr)\,\mathbb{E}\bigl(X^{2}e^{tX}\bigr) - \mathbb{E}\bigl(Xe^{tX}\bigr)^{2}}{M(t)^{2}} \ \ge \ 0 ,
   $$
   and the numerator is non-negative: it is what the Cauchy-Schwarz inequality yields for the pair of variables $Xe^{tX/2}$, $e^{tX/2}$.
3. **The rate function is non-negative, and vanishes at the mean.** Taking $t = 0$ in the supremum gives $\Lambda^{*}(a) \ge -\Lambda(0) = 0$ for every $a$. If $M$ is finite near the origin then $\Lambda^{*}(\mu) = 0$, since $t \mapsto \mu t - \Lambda(t)$ has derivative $\mu - \Lambda'(0) = 0$ at $t = 0$ and is concave by (2).
4. **Centring.** Replacing $X$ by $X - \mu$ shifts the two functions in a predictable way:
   $$
   \Lambda_{X}(t) = \Lambda_{X - \mu}(t) + \mu t , \qquad \Lambda^{*}_{X}(a) = \Lambda^{*}_{X - \mu}(a - \mu) .
   $$
   One may therefore always assume $\mu = 0$, and then the deviation level satisfies $a > 0$.
5. **Only positive $t$ matters.** If $M$ is finite in a neighbourhood of the origin, $\mu = 0$ and $a > 0$, then
   $$
   \Lambda^{*}(a) = \sup_{t > 0} \bigl\{ at - \Lambda(t) \bigr\} .
   $$
   The reason is (1) and (2): finiteness near the origin makes $M$, and hence $\Lambda$, differentiable there with $\Lambda'(0) = \mu = 0$, so $at - \Lambda(t)$ is concave with derivative $a - \Lambda'(0) = a > 0$ at the origin, and nothing is lost by discarding $t \le 0$. The finiteness hypothesis is not decoration: if $M(t) = \infty$ for every $t > 0$, as happens for a centred summand with a heavy right tail, the right-hand side is a supremum of $-\infty$, whereas the left-hand side is still $0$ at worst, by (3). This is the standing hypothesis under which Grimmett and Stirzaker use the identity inside the proof of their Theorem (5.11.4).
:::

:::statement[Cramer's theorem]{provenance=adapted src="grimmett-stirzaker-2020:§5.11, Theorem (5.11.4) with eq. (5.11.5) and the footnote attributing it to Cramer, and the exponential bound preceding eq. (5.11.8), pp. 226-228"}
Let $X_1, X_2, \dots$ be independent random variables with one common distribution and mean $\mu$, and suppose that $M(t) = \mathbb{E}(e^{tX})$ is finite in some neighbourhood of $t = 0$. Let $a$ be a number with

$$
a > \mu \qquad \text{and} \qquad \mathbb{P}(X > a) > 0 .
$$

Then $\Lambda^{*}(a) > 0$ and

$$
\frac{1}{n} \log \mathbb{P}(S_n > na) \ \longrightarrow \ -\Lambda^{*}(a) \qquad \text{as } n \to \infty .
$$

So $\mathbb{P}(S_n > na)$ decays like $e^{-n\Lambda^{*}(a)}$ on the logarithmic scale. Grimmett and Stirzaker attribute a version of this result to Cramer in 1938, by a different route.

Three riders come with the theorem.

- **A bound at every $n$, not only in the limit.** One half of the proof is an inequality rather than an asymptotic statement: for every $n \ge 1$,
  $$
  \mathbb{P}(S_n > na) \ \le \ e^{-n\Lambda^{*}(a)} .
  $$
  This holds with no limit taken, and is the form used in practice.
- **Deviations below the mean.** Apply the theorem to $-X_1, -X_2, \dots$, whose mean is $-\mu$; this gives the rate for $\mathbb{P}(S_n < na)$ when $a < \mu$.
- **The condition $\mathbb{P}(X > a) > 0$ is not cosmetic.** If $\mathbb{P}(X > a) = 0$ then $\mathbb{P}(S_n > na) = 0$ for every $n$, and the left-hand side is $-\infty$ rather than a finite limit.
:::

:::idea{provenance=original}
Both halves of the proof come from the same picture: the rare event is made typical by reweighting the distribution, and $\Lambda^{*}(a)$ is the price of the reweighting.

For the upper bound this is the Chernoff argument of :ref[Markov, Chebyshev, Jensen and Chernoff inequalities]{to=prob.probability-inequalities}, applied to $S_n$ rather than to a single variable. Multiplying by $e^{tS_n}$ with $t > 0$ and using Markov's inequality gives $\mathbb{P}(S_n > na) \le e^{-n(at - \Lambda(t))}$, because independence turns the moment generating function of the sum into the $n$th power of that of a summand. Every admissible $t$ gives a bound, so we may take the best one, and the best exponent is by definition $\Lambda^{*}(a)$. Nothing here is asymptotic.

The lower bound has to show that no better rate is available, and for that we need to know that the event really can happen in roughly $e^{-n\Lambda^{*}(a)}$ ways. Tilt the distribution of a summand by the factor $e^{\tau u}/M(\tau)$, where $\tau$ is the maximiser in the definition of $\Lambda^{*}(a)$. The stationarity condition $\Lambda'(\tau) = a$ says precisely that the tilted summand has mean $a$. Under the tilted law the event $\{S_n > na\}$ is no longer rare: it is the event that a sum exceeds its own mean, which has probability close to $\tfrac12$ by the central limit theorem. Undoing the tilt costs a factor $M(\tau)^{n}e^{-\tau u}$, and evaluating that factor on the relevant range of $u$ produces exactly $e^{-n(\tau a - \Lambda(\tau))} = e^{-n\Lambda^{*}(a)}$.

The only gap is that the maximiser $\tau$ need not exist inside the domain of $M$. That case is reached from the first by truncating the summands at a high level, which makes $M$ finite everywhere and so forces a maximiser to exist, and then letting the truncation level grow.
:::

:::proof[Cramer's theorem]{provenance=adapted src="grimmett-stirzaker-2020:§5.11, proof of Theorem (5.11.4), pp. 227-230"}
**Step 0: centring.** By property (4) of the previous statement, replacing each $X_i$ by $X_i - \mu$ and $a$ by $a - \mu$ changes neither side of the conclusion. Assume from here on that $\mu = 0$, so that $a > 0$.

**Step 1: the rate is strictly positive.** Because $M$ is finite on a neighbourhood of the origin, it may be expanded there in moments, $M(t) = 1 + \tfrac12 \sigma^{2}t^{2} + o(t^{2})$ as $t \to 0$, where $\sigma^{2} = \operatorname{var}(X)$ and the linear term is absent because $\mu = 0$. Also $e^{at} = 1 + at + o(t)$. Hence, for small $t > 0$,

$$
at - \Lambda(t) = \log \frac{e^{at}}{M(t)} = \log \frac{1 + at + o(t)}{1 + \tfrac12 \sigma^{2} t^{2} + o(t^{2})} .
$$

The numerator exceeds the denominator once $t$ is small enough and positive, since $at$ dominates $\tfrac12\sigma^{2}t^{2}$ there. The logarithm is then strictly positive, and $\Lambda^{*}(a) > 0$ follows by taking the supremum.

Note also that $\sigma^{2} > 0$: the hypothesis $\mathbb{P}(X > a) > 0$ with $a > 0 = \mu$ forbids $X$ from being almost surely constant. Property (2) then gives the strict inequality $\Lambda'' > 0$, because the Cauchy-Schwarz bound applied there to the pair $Xe^{tX/2}$, $e^{tX/2}$ is an equality only when the two are proportional almost surely, that is, only when $X$ is almost surely constant. (Grimmett and Stirzaker make the same step, citing the equality case as their Theorem (4.5.12).) So $\Lambda$ is strictly convex wherever it is twice differentiable. This is used in Step 3.

**Step 2: the upper bound.** Fix $t > 0$ with $M(t) < \infty$. Since $e^{tx}$ is increasing and positive, $e^{tS_n} \ge e^{nat}\mathbf{1}_{\{S_n > na\}}$ pointwise. Taking expectations and using independence to factorise $\mathbb{E}(e^{tS_n}) = M(t)^{n}$,

$$
\mathbb{P}(S_n > na) \ \le \ e^{-nat}\,\mathbb{E}\bigl(e^{tS_n}\bigr) = \bigl\{ e^{-at}M(t) \bigr\}^{n} = e^{-n\,(at - \Lambda(t))} .
$$

This is one inequality for each admissible $t > 0$. Taking logarithms, dividing by $n$ and then taking the supremum over $t > 0$ gives, by property (5),

$$
\frac{1}{n}\log \mathbb{P}(S_n > na) \ \le \ -\sup_{t>0}\{at - \Lambda(t)\} = -\Lambda^{*}(a) ,
$$

valid at every $n$, which also proves the non-asymptotic bound stated above.

**Step 3: the lower bound, regular case.** Call the problem *regular* if the supremum defining $\Lambda^{*}(a)$ is attained at some $\tau$ strictly inside the domain of convergence, that is, if there is $\tau \in (0, T)$ with

$$
\Lambda^{*}(a) = a\tau - \Lambda(\tau) .
$$

Since $\Lambda$ is infinitely differentiable on $(0,T)$ and $at - \Lambda(t)$ has an interior maximum at $\tau$, the derivative vanishes there:

$$
\Lambda'(\tau) = a .
$$

Write $F$ for the distribution function shared by the summands, and build from it a second one, $\widetilde{F}$, by **exponential tilting**:

$$
d\widetilde{F}(u) = \frac{e^{\tau u}}{M(\tau)}\, dF(u) ,
\qquad\text{equivalently}\qquad
\widetilde{F}(y) = \frac{1}{M(\tau)}\int_{-\infty}^{y} e^{\tau u}\, dF(u) .
$$

This is a probability distribution because the total mass is $M(\tau)/M(\tau) = 1$, and it is here that $\tau$ must lie inside the domain: $M(\tau)$ has to be finite and non-zero. Let $\widetilde{X}_1, \widetilde{X}_2, \dots$ be independent with distribution function $\widetilde{F}$ and put $\widetilde{S}_n = \widetilde{X}_1 + \cdots + \widetilde{X}_n$. Three facts about the tilted variables are needed.

- Their moment generating function is a shift of the old one,
  $$
  \widetilde{M}(t) = \int_{-\infty}^{\infty} e^{tu}\,d\widetilde{F}(u) = \frac{1}{M(\tau)}\int_{-\infty}^{\infty} e^{(t+\tau)u}\,dF(u) = \frac{M(t+\tau)}{M(\tau)} ,
  $$
  finite for $t$ in a neighbourhood of $0$ because $\tau$ is interior to $D$.
- Their mean is the deviation level itself: $\mathbb{E}(\widetilde{X}_i) = \widetilde{M}'(0) = M'(\tau)/M(\tau) = \Lambda'(\tau) = a$, by the stationarity condition.
- Their variance is $\widetilde{M}''(0) - \widetilde{M}'(0)^{2} = \Lambda''(\tau)$, which lies in $(0,\infty)$ by Step 1.

Because $\widetilde{S}_n$ is a sum of $n$ independent tilted summands, the same shift relates the distribution function $\widetilde{F}_n$ of $\widetilde{S}_n$ to the distribution function $F_n$ of $S_n$:

$$
d\widetilde{F}_n(u) = \frac{e^{\tau u}}{M(\tau)^{n}}\,dF_n(u) .
$$

Now pick any $b > a$ and read this identity backwards to express the probability we want as an integral against the tilted law:

$$
\mathbb{P}(S_n > na) = \int_{na}^{\infty} dF_n(u) = \int_{na}^{\infty} M(\tau)^{n} e^{-\tau u}\, d\widetilde{F}_n(u)
\ \ge \ M(\tau)^{n} e^{-\tau n b} \int_{(na,\,nb]} d\widetilde{F}_n(u) ,
$$

where we have thrown away the range $u > nb$, which is legitimate because the integrand is non-negative, and bounded $e^{-\tau u} \ge e^{-\tau nb}$ on the remaining range, which uses $\tau > 0$. The right-hand side is

$$
e^{-n(\tau b - \Lambda(\tau))}\,\mathbb{P}\bigl(na < \widetilde{S}_n \le nb\bigr) .
$$

The tilted summands have mean exactly $a$ and finite non-zero variance, so :ref[The central limit theorem]{to=prob.central-limit-theorem} gives $\mathbb{P}(\widetilde{S}_n > na) \to \tfrac12$, while $b > a$ and :ref[The law of large numbers]{to=prob.law-of-large-numbers} give $\mathbb{P}(\widetilde{S}_n > nb) \to 0$. The interval is kept half-open, as the Stieltjes integral over $(na, nb]$ demands, so that an atom of $\widetilde{F}_n$ at an endpoint is counted on one side only; then $\mathbb{P}(na < \widetilde{S}_n \le nb) = \mathbb{P}(\widetilde{S}_n > na) - \mathbb{P}(\widetilde{S}_n > nb) \to \tfrac12$, a constant, and its logarithm divided by $n$ tends to $0$. Therefore

$$
\liminf_{n\to\infty} \frac{1}{n}\log \mathbb{P}(S_n > na) \ \ge \ -\bigl(\tau b - \Lambda(\tau)\bigr) .
$$

This holds for every $b > a$; letting $b \downarrow a$ gives $-(\tau a - \Lambda(\tau)) = -\Lambda^{*}(a)$. Together with Step 2 this proves the theorem in the regular case.

**Step 4: the non-regular case.** Suppose now that no interior maximiser exists. Fix $c > a$ and truncate, writing $X^{c} = \min\{X, c\}$ and $\Lambda^{c} = \log M^{c}$ for the truncated summand. Three observations make the truncated problem regular.

- $X^{c} \le c$ with probability one, so $M^{c}(t) \le e^{tc} < \infty$ for all $t > 0$: the truncated moment generating function is finite everywhere on the right.
- $\mathbb{E}(X^{c}) \le \mathbb{E}(X) = 0 < a$, and $\mathbb{E}(X^{c}) \to 0$ as $c \to \infty$ by monotone convergence, so $a$ is still a genuine upward deviation for the truncated variables.
- Since $\mathbb{P}(X > a) > 0$ there is some $b \in (a,c)$ with $\mathbb{P}(X > b) > 0$, whence $M^{c}(t) \ge e^{tb}\mathbb{P}(X > b)$ and so $at - \Lambda^{c}(t) \le (a-b)t - \log \mathbb{P}(X > b) \to -\infty$ as $t \to \infty$, because $a - b < 0$. The function $at - \Lambda^{c}(t)$ is therefore maximised at a finite $\tau = \tau^{c} > 0$.

Step 3 applies to the truncated variables and gives $n^{-1}\log \mathbb{P}\bigl(\sum_{i \le n} X_i^{c} > na\bigr) \to -\Lambda^{c*}(a)$, where $\Lambda^{c*}(a) = \sup_{t>0}\{at - \Lambda^{c}(t)\}$. Since $X^{c} \le X$ we have $S_n \ge \sum_{i\le n} X_i^{c}$, so the probability we want is at least the truncated one and

$$
\liminf_{n\to\infty}\frac{1}{n}\log \mathbb{P}(S_n > na) \ \ge \ -\Lambda^{c*}(a) \qquad \text{for every } c > a .
$$

It remains to let $c \to \infty$. For $t > 0$ the quantity $M^{c}(t)$ increases with $c$, so $\Lambda^{c*}(a)$ decreases, and being bounded below by $0$ it has a limit $\Lambda^{\infty*} \in [0,\infty)$. What has to be shown is $\Lambda^{\infty*} \le \Lambda^{*}(a)$. Grimmett and Stirzaker obtain this by a compactness argument: each set $I_c = \{t \ge 0 : at - \Lambda^{c}(t) \ge \Lambda^{\infty*}\}$ is a non-empty closed bounded interval, by the smoothness and growth of $\Lambda^{c}$ just established, and the $I_c$ shrink as $c$ grows; a nested family of non-empty compact sets has a common point $\zeta$. Monotone convergence gives $\Lambda^{c}(\zeta) \to \Lambda(\zeta)$, so $a\zeta - \Lambda(\zeta) \ge \Lambda^{\infty*}$, and taking the supremum over $t$ gives $\Lambda^{*}(a) \ge \Lambda^{\infty*}$ as required. $\square$
:::

:::remark[Where the hypotheses are used, and what happens without them]{provenance=adapted src="grimmett-stirzaker-2020:§5.11, Exercises (5.11.3) and (5.11.4), p. 231, and the remarks following Theorem (5.11.4), p. 226"}
**$M$ finite near the origin.** This is the hypothesis that makes the whole theory non-trivial, and it is used twice: in Step 1, to expand $M$ in moments and conclude $\Lambda^{*}(a) > 0$, and in Step 3, to know that $\widetilde{M}(t) = M(t+\tau)/M(\tau)$ is finite near $t = 0$ so that the tilted variables have two moments. Exercise (5.11.3) of Grimmett and Stirzaker identifies the hypothesis exactly: $M$ is finite on a neighbourhood of $0$ if and only if there are positive constants $\lambda$ and $\nu$ with $\mathbb{P}(\lvert X\rvert \ge a) \le \nu e^{-\lambda a}$ for $a > 0$. The hypothesis and the conclusion are two faces of the same exponential tail behaviour.

What fails without it is not a technicality. For independent standard Cauchy summands $M(t) = \infty$ for every $t \ne 0$, so $\Lambda(t) = \infty$ off the origin and $\Lambda^{*} \equiv 0$. In this case $S_n/n$ is again standard Cauchy for every $n$, so $\mathbb{P}(S_n > na) = \tfrac12 - \pi^{-1}\arctan a$ does not depend on $n$ at all: there is no decay, exponential or otherwise. The displayed limit survives only because both sides are zero, and the content of the theorem — that the rate is strictly positive — is gone.

**$a > \mu$.** Used in Step 1 (where $at$ must beat $\tfrac12 \sigma^{2}t^{2}$ for small positive $t$) and in property (5) of the statement (where the supremum is restricted to $t > 0$), and then in Step 3, where $\tau > 0$ is what makes $e^{-\tau u} \ge e^{-\tau n b}$ the right way round. It cannot be dropped. Take $X$ exponential with mean $1$ and $a = \tfrac12 < \mu$. Then $\Lambda^{*}(\tfrac12) = \tfrac12 - 1 - \log\tfrac12 = 0.19315$, which is strictly positive, whereas the law of large numbers gives $\mathbb{P}(S_n > n/2) \to 1$ and so $n^{-1}\log\mathbb{P}(S_n > na) \to 0$. The conclusion is simply false below the mean. The correct statement there is about the other tail, obtained by applying the theorem to $-X$.

**$\mathbb{P}(X > a) > 0$.** Used in Step 1, to rule out a degenerate $X$ and get $\sigma^{2} > 0$, and in Step 4, to produce the level $b$ at which the truncated transform grows. A clean example of what it excludes: let $X$ be Bernoulli with $\mathbb{P}(X = 1) = p$ and take $a = 1$. Here $\Lambda(t) = \log(1 - p + pe^{t})$ and $t - \Lambda(t) \to -\log p$ as $t \to \infty$, so $\Lambda^{*}(1) = -\log p$, a perfectly finite number; but $\mathbb{P}(S_n > n) = 0$ for every $n$, so $n^{-1}\log\mathbb{P}(S_n > na) = -\infty$. Note that it is strictness that bites: $\mathbb{P}(S_n \ge n) = p^{n}$ has exactly the rate $-\log p$ predicted by the transform.

**Regularity.** The Bernoulli case at $a = 1$ is also the standard example of the non-regular case of Step 4: the supremum of $t - \Lambda(t)$ is approached only as $t \to \infty$ and is never attained, so no tilt $\tau$ exists and the tilting argument has nothing to work with. For $p < a < 1$ the same Bernoulli problem is regular, with $\Lambda^{*}(a) = a\log(a/p) + (1-a)\log\bigl((1-a)/(1-p)\bigr)$, the relative entropy of $a$ with respect to $p$. This is the sharp exponent quoted in the remark of :ref[Markov, Chebyshev, Jensen and Chernoff inequalities]{to=prob.probability-inequalities}, which is why Bernstein's inequality with its exponent $\epsilon^{2}/4$ is conservative: that inequality is Step 2 with a convenient rather than optimal choice of $t$.

**Independence and a common distribution.** Independence is used once, in Step 2, to write $\mathbb{E}(e^{tS_n}) = M(t)^{n}$, and implicitly in Step 3, where $\widetilde{S}_n$ is a sum of independent tilted variables. A common distribution is what makes the exponent proportional to $n$ with one $n$-independent rate; without it one gets a sum $\sum_i \Lambda_i$ of different cumulant generating functions and the rate is in general a limit rather than a single transform.

**What the theorem does not say.** It is a statement about $n^{-1}\log \mathbb{P}$, so it determines the exponent and nothing else. Any prefactor that grows or decays more slowly than exponentially — a power of $n$, for instance — is invisible to it. The worked example below shows a factor of this kind, decaying like $n^{-1/2}$, sitting between the bound of Step 2 and the exact probability.
:::

:::method[Computing and using a rate function]{provenance=original}
Given a summand distribution and a deviation level $a > \mu$:

1. **Find $M$ and its domain.** Compute $M(t) = \mathbb{E}(e^{tX})$ and record the interval where it is finite. If that interval does not contain an open neighbourhood of $0$, stop: there is no exponential rate to find.
2. **Form $\Lambda = \log M$ and check it.** Two sanity checks that catch most algebra slips: $\Lambda(0) = 0$ and $\Lambda'(0) = \mu$.
3. **Solve the stationarity condition $\Lambda'(\tau) = a$.** Because $\Lambda$ is strictly convex, $\Lambda'$ is strictly increasing and the solution is unique when it exists. If it lies strictly inside the domain, the problem is regular and
   $$
   \Lambda^{*}(a) = a\tau - \Lambda(\tau) .
   $$
4. **If there is no interior solution**, the supremum is attained at an endpoint of the domain or approached as $t$ tends to it; evaluate $\lim_{t \uparrow T}\{at - \Lambda(t)\}$ and compare it with the values at interior critical points.
5. **Use the result in the right direction.** For an actual bound at a finite $n$, use $\mathbb{P}(S_n > na) \le e^{-n\Lambda^{*}(a)}$, which is Step 2 of the proof and is always valid. Use $\mathbb{P}(S_n > na) \approx e^{-n\Lambda^{*}(a)}$ only as a statement about the exponent; it will typically overestimate the probability by an algebraic factor in $n$.
6. **For a downward deviation $a < \mu$**, run the whole calculation for $-X$, which replaces $\Lambda(t)$ by $\Lambda(-t)$ and the level $a$ by $-a$.
7. **Cross-check near the mean.** Expanding $\Lambda(t) = \mu t + \tfrac12\sigma^{2}t^{2} + O(t^{3})$ and maximising gives
   $$
   \Lambda^{*}(a) \approx \frac{(a-\mu)^{2}}{2\sigma^{2}} \qquad \text{for } a \text{ near } \mu ,
   $$
   which is the exponent of the normal density; a rate function that does not reduce to this near the mean has an error in it. Far from the mean the two part company, and it is the rate function that is right.
:::

:::example[Arrival times: the rate function for an exponential sum, against the exact tail]{provenance=original}
A detector records the waiting times between successive events. The waiting times $X_1, X_2, \dots$ are independent and exponentially distributed with mean $1$ (in milliseconds), so the total time for $n$ events is $S_n$. We want the chance that $n = 200$ events take longer than $300$ ms, that is, that the average gap comes out at $a = 1.5$ ms rather than the expected $1$ ms.

**The transform.** For an exponential variable of mean $1$,

$$
M(t) = \int_{0}^{\infty} e^{tu}e^{-u}\,du = \frac{1}{1-t} \quad (t < 1), \qquad \Lambda(t) = -\log(1-t), \qquad T = 1 .
$$

Checks: $\Lambda(0) = 0$ and $\Lambda'(0) = 1 = \mu$. The stationarity condition is

$$
\Lambda'(\tau) = \frac{1}{1-\tau} = a \quad\Longrightarrow\quad \tau = 1 - \frac{1}{a} = \frac{1}{3} ,
$$

which lies strictly inside $(0,1)$, so the problem is regular. Hence

$$
\Lambda^{*}(1.5) = a\tau - \Lambda(\tau) = \frac{1.5}{3} + \log\Bigl(1 - \frac13\Bigr) = \frac12 + \log\frac23 = 0.0945349 .
$$

The same calculation runs for any level $a > 0$, since $\tau = 1 - 1/a$ lies in the domain $(-\infty, 1)$ there, and gives the closed form $\Lambda^{*}(a) = a - 1 - \log a$ for every $a > 0$; it is the range $a > 1$, above the mean, that Cramer's theorem speaks about, and the remark above uses the same formula at $a = \tfrac12$ to show what goes wrong below the mean.

**What the tilt is, concretely.** The tilted density is proportional to $e^{\tau u}e^{-u} = e^{-2u/3}$, so $\widetilde{F}$ is the exponential distribution of rate $\tfrac23$. Its mean is $1.5 = a$ and its variance is $2.25 = \Lambda''(\tfrac13) = (1-\tfrac13)^{-2}$, exactly as the proof predicts. Under the tilted law the "rare" total of $300$ ms is the typical one.

**The bound and the exact answer.** The bound of Step 2 at $n = 200$ is

$$
\mathbb{P}(S_{200} > 300) \ \le \ e^{-200 \times 0.0945349} = e^{-18.9070} = 6.1490 \times 10^{-9} .
$$

A sum of $n$ independent exponentials of mean $1$ has the Gamma distribution with shape $n$ and scale $1$, whose tail can be evaluated exactly, so for once we can see how good the rate is:

| $n$ | $\mathbb{P}(S_n > 1.5n)$ (exact) | $n^{-1}\log \mathbb{P}$ | bound $e^{-n\Lambda^{*}}$ | ratio | ratio $\times \sqrt{n}$ |
|---|---|---|---|---|---|
| $10$ | $6.9854 \times 10^{-2}$ | $-0.26614$ | $3.8854\times10^{-1}$ | $0.17978$ | $0.5685$ |
| $50$ | $9.0393 \times 10^{-4}$ | $-0.14018$ | $8.8553\times10^{-3}$ | $0.10208$ | $0.7218$ |
| $200$ | $3.3711 \times 10^{-10}$ | $-0.10905$ | $6.1490\times10^{-9}$ | $0.05482$ | $0.7753$ |
| $1000$ | $2.2047 \times 10^{-43}$ | $-0.09822$ | $8.7906\times10^{-42}$ | $0.02508$ | $0.7931$ |

The third column is converging to $-\Lambda^{*}(1.5) = -0.094535$, as the theorem says, and the convergence is slow, which is characteristic: what tends to zero is $n^{-1}$ times the logarithm of the missing factor, not the factor itself. The last column shows what that factor is: the ratio of the true probability to the bound behaves like a constant times $n^{-1/2}$, the constant being near $0.80$ on this evidence. Only the exponent is captured by $\Lambda^{*}$; the algebraic prefactor is not, which is the point made at the end of the remark.

**Against the second-moment bound.** The variance of $S_{200}$ is $200$ and the deviation is $300 - 200 = 100$, so Chebyshev's inequality gives only

$$
\mathbb{P}(S_{200} > 300) \ \le \ \frac{200}{100^{2}} = 0.02 ,
$$

larger than the truth by a factor of about $6 \times 10^{7}$, and larger than the Chernoff bound by a factor of about $3 \times 10^{6}$. Two moments are simply not enough information about a tail this far out.
:::

:::application[Rare events in simulation, physics and engineering]{provenance=original}
**Importance sampling.** The proof is also an algorithm. To estimate $\mathbb{P}(S_n > na)$ by direct Monte Carlo when the probability is $10^{-10}$, one would need of order $10^{12}$ samples for a few significant figures, because almost every sample returns zero. Sampling instead from the tilted law $\widetilde{F}$, under which the event has probability about $\tfrac12$, and reweighting each sample by $M(\tau)^{n}e^{-\tau S_n}$, gives an unbiased estimator whose relative error no longer blows up as the event becomes rare. The exponential tilt at the conjugate point $\Lambda'(\tau) = a$ is the standard choice of importance distribution for exactly the reason the proof gives: it is the tilt that makes the target event typical.

**Statistical mechanics.** Take $X_i$ to be the energies of $n$ independent, identical subsystems. Then $\Lambda(t)$ is, up to sign conventions, the free energy per subsystem at inverse temperature $-t$, and $\Lambda^{*}(a)$ measures the entropy lost by constraining the mean energy to $a$ rather than letting it take its equilibrium value $\mu$. The stationarity condition $\Lambda'(\tau) = a$ is then the equation of state linking temperature to mean energy, and $\mathbb{P}(\text{mean energy} \approx a) \approx e^{-n\Lambda^{*}(a)}$ is the statement that fluctuations of an intensive quantity are exponentially suppressed in the system size. This is why thermodynamic variables are sharp for macroscopic $n$, and it quantifies the sharpness in a way the central limit theorem cannot, because it remains valid for deviations of order one rather than of order $n^{-1/2}$.

**Buffers, queues and reserves.** In a queue fed by independent increments, the probability that a buffer of size $B$ overflows, or that an insurer's reserve of size $B$ is exhausted, is governed by the event that a partial sum of increments exceeds a level proportional to $B$. The same transform produces the exponential decay rate in $B$, and the engineering question "how large a buffer gives an overflow probability below $10^{-9}$?" becomes the arithmetic question "how large must $B\Lambda^{*}(a)$ be?". The practical value of the rate function here is that it converts an impossible simulation into a one-dimensional maximisation.

**Connection with asymptotic analysis.** The structure $n^{-1}\log(\text{integral}) \to \max(\text{exponent})$ is the probabilistic form of the principle behind :ref[Laplace's method]{to=asym.laplace-method}: an integral of $e^{n\phi}$ is dominated, on the logarithmic scale, by the largest value of $\phi$. Cramer's theorem is that statement for the distribution of a sum, with the Fenchel-Legendre transform doing the maximisation. The prefactors that Laplace's method supplies by expanding about the maximum are precisely the algebraic factors that the example above exhibits and that the theorem discards.
:::
