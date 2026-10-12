---
id: prob.probability-inequalities
title: Markov, Chebyshev, Jensen and Chernoff inequalities
kind: theorem
level: core
summary: Bounds the probability that a random variable is far from its mean using only one or two of its moments, or its whole moment generating function, and shows on one worked tail which of the four bounds is worth using.
prereqs: [prob.random-variables, prob.expectation-variance, prob.generating-functions]
provenance: adapted
sources:
  - work: grimmett-stirzaker-2020
    loc: "§7.3 Some ancillary results, Theorem (7.3.1) and Examples (7.3.2), (7.3.3), (7.3.4), with the lower bound of Theorem (7.3.5), pp. 362-363; Lemma (7.2.7) (Markov's inequality) and its use in Lemma (7.2.6b), pp. 355-356; Exercise (5.6.1a) (Jensen's inequality, with the supporting-line definition of convexity and the footnote on it), p. 202; §2.2 The law of averages, the derivation of eqs. (2.2.2)-(2.2.4) and Bernstein's inequality, pp. 33-34; §5.11 Large deviations, the exponential Markov step before eq. (5.11.8), p. 227, and Exercise (5.11.3) on exponentially decaying tails, p. 231"
    pages: "33-34, 202, 227, 231, 355-356, 362-363"
    role: the master inequality for a non-negative function of a random variable and the specialisations to Markov, Chebyshov and a general increasing weight; the companion lower bound for a bounded weight; the supporting-line definition of convexity and the statement of Jensen's inequality with its equality case; the exponential Markov step that gives the Chernoff bound; the whole route to Bernstein's inequality for Bernoulli trials, including the elementary inequality used to linearise the exponentials
  - work: arfken-2013
    loc: "§23.2 Random Variables, eq. (23.29) (the Chebyshev inequality in $k\\sigma$ form), the preliminary bound $P(Y \\ge K) \\le \\langle Y\\rangle/K$ for a non-negative $Y$, and eq. (23.30), p. 1140; §23.5, eqs. (23.58) and the comparison with the Chebyshev bound at $k=3$, pp. 1156-1157"
    pages: "1140, 1156-1157"
    role: the physicists' $k\\sigma$ statement of Chebyshev's inequality and the two-step derivation through a non-negative variable; the numerical comparison of the Chebyshev bound with the exact normal tail at one, two and three standard deviations
  - work: evans-2010
    loc: "Appendix B.1 Convex functions: the chord definition (B.1.1), Theorem 1 (supporting hyperplanes, eq. (B.1.2)) and Theorem 2 (Jensen's inequality, eq. (B.1.3)) with its proof, p. 661"
    pages: "661"
    role: the chord definition of convexity used here, the supporting-hyperplane property derived from it, and the averaging form of Jensen's inequality with the supporting-plane proof
---

:::note[What these inequalities are for]{provenance=original}
A distribution is usually known only through a few of its moments: a measurement has a quoted mean and standard deviation, a simulation reports a sample average, a model fixes an energy scale. The inequalities below answer the question such partial knowledge can still answer — *how much probability can be sitting far out in the tail?* — without any assumption about the shape of the distribution.

They form a hierarchy. One moment gives a bound that decays like $1/a$, two moments give $1/a^2$, and the whole moment generating function gives a bound that decays exponentially. All three are proved by the same one-line device, and the worked example below shows what each is worth on a single concrete tail.
:::

:::definition[Tails, convex functions and the moment generating function]{provenance=adapted src="evans-2010:Appendix B.1, definition (B.1.1) and Theorem 1, p. 661; grimmett-stirzaker-2020:Exercise (5.6.1a) and its footnote, p. 202"}
Throughout, $X$ is a real random variable on a probability space $(\Omega, \mathcal{F}, \mathbb{P})$, $\mathbb{E}$ denotes expectation, and $\operatorname{var}(X) = \mathbb{E}\bigl[(X - \mathbb{E}X)^2\bigr]$. Physics texts write $\langle X \rangle$ for $\mathbb{E}X$ and $\sigma^2$ for $\operatorname{var}(X)$; we use both notations and say which is which when it matters. A **tail probability** is a quantity of the form $\mathbb{P}(X \ge a)$ or $\mathbb{P}(\lvert X \rvert \ge a)$.

A function $u : \mathbb{R} \to \mathbb{R}$ is **convex** if

$$
u\bigl(\tau x + (1-\tau) y\bigr) \ \le \ \tau\, u(x) + (1-\tau)\, u(y) \qquad \text{for all } x, y \in \mathbb{R} \text{ and } 0 \le \tau \le 1 ,
$$

which says that each chord of the graph lies on or above the graph. Convexity in this sense has a dual description: for every $c \in \mathbb{R}$ there is a slope $\lambda = \lambda(c)$ with

$$
u(x) \ \ge \ u(c) + \lambda\,(x - c) \qquad \text{for all } x \in \mathbb{R} ,
$$

so that the graph lies on or above each of its **supporting lines**. We call $u$ **strictly convex** if some such choice of $\lambda(c)$ is strictly increasing in $c$.

Two conventions are in play in the literature and it pays to know which one a book is using. Evans defines convexity by the chord inequality and derives the supporting-line property as a theorem; Grimmett and Stirzaker take the supporting-line property as the definition, remark in a footnote that this is convenient for their purposes, and assert that it is equivalent to the more usual one. We follow Evans' definition, and treat the supporting-line property as the consequence we actually use; nothing below depends on the choice.

The **moment generating function** of $X$ is $M(t) = \mathbb{E}\bigl(e^{tX}\bigr)$, defined for those real $t$ at which the expectation is finite (see :ref[Generating functions]{to=prob.generating-functions}). It is finite at $t = 0$, where $M(0) = 1$.
:::

:::statement[The master inequality, and Markov's and Chebyshev's inequalities]{provenance=adapted src="grimmett-stirzaker-2020:§7.3, Theorem (7.3.1) with Examples (7.3.2), (7.3.3) and (7.3.4), pp. 362-363, and Lemma (7.2.7), p. 355; arfken-2013:§23.2, eqs. (23.29) and (23.30), p. 1140"}
Let $h : \mathbb{R} \to [0, \infty)$ be non-negative and let $X$ be a random variable for which $\mathbb{E}\bigl(h(X)\bigr)$ is finite. Then

$$
\mathbb{P}\bigl(h(X) \ge a\bigr) \ \le \ \frac{\mathbb{E}\bigl(h(X)\bigr)}{a} \qquad \text{for every } a > 0 .
$$

Four specialisations are used constantly.

1. **Markov's inequality.** Take $h(x) = \lvert x \rvert$. If $\mathbb{E}\lvert X\rvert < \infty$ then
   $$
   \mathbb{P}\bigl(\lvert X\rvert \ge a\bigr) \ \le \ \frac{\mathbb{E}\lvert X\rvert}{a} \qquad (a > 0) .
   $$
2. **Chebyshov's inequality.** Take $h(x) = x^2$ to get $\mathbb{P}(\lvert X \rvert \ge a) \le \mathbb{E}(X^2)/a^2$ for $a > 0$. Applying this to $X - \mathbb{E}X$ and writing $a = k\sigma$ with $\sigma^2 = \operatorname{var}(X) > 0$ and $k > 0$ gives the form used in the physical sciences,
   $$
   \mathbb{P}\bigl(\lvert X - \langle X\rangle \rvert \ge k\sigma \bigr) \ \le \ \frac{1}{k^2} .
   $$
   Grimmett and Stirzaker spell the name Chebyshov, note in a footnote that this transliteration is at odds with common practice, and record that the inequality was found independently by Bienaymé and others; Arfken, Weber and Harris write Chebyshev. The two names denote the same inequality.
3. **A general increasing weight.** If $g : [0,\infty) \to [0,\infty)$ is strictly increasing then $h(x) = g(\lvert x\rvert)$ gives
   $$
   \mathbb{P}\bigl(\lvert X\rvert \ge a\bigr) \ \le \ \frac{\mathbb{E}\bigl(g(\lvert X\rvert)\bigr)}{g(a)} \qquad (a > 0) .
   $$
4. **A matching lower bound for a bounded weight.** If $h : \mathbb{R} \to [0, M]$ is non-negative and bounded above by $M$, then
   $$
   \mathbb{P}\bigl(h(X) \ge a\bigr) \ \ge \ \frac{\mathbb{E}\bigl(h(X)\bigr) - a}{M - a} \qquad \text{whenever } 0 \le a < M .
   $$
:::

:::statement[Jensen's inequality]{provenance=adapted src="grimmett-stirzaker-2020:Exercise (5.6.1a), p. 202; evans-2010:Appendix B.1, Theorem 2, p. 661"}
Let $u : \mathbb{R} \to \mathbb{R}$ be convex and let $X$ have a finite mean. Then

$$
\mathbb{E}\bigl(u(X)\bigr) \ \ge \ u\bigl(\mathbb{E}X\bigr) ,
$$

in the sense that the left-hand side is well defined in $(-\infty, +\infty]$ and dominates the right-hand side. If moreover $u$ is strictly convex and $\mathbb{E}\bigl(u(X)\bigr) = u(\mathbb{E}X)$, then $X$ is almost surely constant.

Evans states the same inequality for averages over a set: if $U \subset \mathbb{R}^n$ is open and bounded, $\mathbf{v} : U \to \mathbb{R}^m$ is summable and $f : \mathbb{R}^m \to \mathbb{R}$ is convex, then

$$
f\!\left( \frac{1}{\lvert U\rvert}\int_U \mathbf{v}\,dx \right) \ \le \ \frac{1}{\lvert U\rvert}\int_U f(\mathbf{v})\,dx .
$$

This is the probabilistic statement for $X = \mathbf{v}(\omega)$ with $\omega$ drawn uniformly from $U$, extended to vector-valued $\mathbf{v}$ and to a convex $f$ on $\mathbb{R}^m$.
:::

:::statement[The Chernoff bound, and Bernstein's inequality for Bernoulli trials]{provenance=adapted src="grimmett-stirzaker-2020:§5.11, the exponential step preceding eq. (5.11.8), p. 227, and §2.2, eqs. (2.2.2)-(2.2.4), pp. 33-34"}
Let $X$ be a random variable whose moment generating function $M(t) = \mathbb{E}(e^{tX})$ is finite for some $t > 0$. Then for every such $t$ and every $a \in \mathbb{R}$,

$$
\mathbb{P}(X \ge a) \ \le \ e^{-ta}\,M(t) ,
\qquad\text{and hence}\qquad
\mathbb{P}(X \ge a) \ \le \ \inf_{t > 0} e^{-ta} M(t) = \exp\Bigl( -\sup_{t>0}\bigl\{ta - \Lambda(t)\bigr\} \Bigr) ,
$$

where $\Lambda(t) = \log M(t)$. The exponent $\sup_{t>0}\{ta - \Lambda(t)\}$ is the quantity whose large-$n$ behaviour is the subject of :ref[Large deviations and Cramer's theorem]{to=prob.large-deviations}; here we use only the inequality, which holds for every single $X$ and needs no limit.

The concrete case worked out by Grimmett and Stirzaker is a sum of Bernoulli trials. Let $A_1, A_2, \dots$ be independent events of common probability $p$, let $S_n$ be the number of the first $n$ that occur, and put $q = 1-p$. Then

$$
\mathbb{P}\Bigl( \tfrac{1}{n} S_n \ge p + \epsilon \Bigr) \ \le \ e^{-n\epsilon^2/4} \qquad \text{for every } \epsilon > 0 ,
$$

and the same bound holds for $\mathbb{P}\bigl(n^{-1}S_n \le p - \epsilon\bigr)$ by applying it to the complementary events. This is **Bernstein's inequality**. Note what it says and what it does not: the bound is uniform in $p$, it decays exponentially in $n$ at fixed $\epsilon$, and the constant $\tfrac14$ in the exponent is not the best possible — see the remark and the example below.
:::

:::idea{provenance=original}
Every one of these bounds comes from the same two-line move. A probability is the expectation of an indicator, and an indicator can be bounded below by anything that is small where the event fails and large where it holds. If $h \ge 0$ and $A = \{h(X) \ge a\}$, then $h(X) \ge a \mathbf{1}_A$ pointwise: on $A$ the inequality is the definition of $A$, and off $A$ the right side is zero while the left is non-negative. Taking expectations converts a statement about functions into the master inequality. Every named case is a choice of $h$.

The choice of $h$ decides how fast the bound decays in $a$, because the bound is $\mathbb{E}(h(X))/a$ with $h(X) \ge a$ on the event. A weight that grows faster uses more of the distribution and pays off further out: $\lvert x\rvert$ gives $1/a$, $x^2$ gives $1/a^2$, and $e^{tx}$ gives $e^{-ta}$ — but only if $\mathbb{E}(e^{tX})$ is finite, which is a real restriction. Since the exponential bound holds for *every* admissible $t$, we are free to optimise over $t$, and that free parameter is what makes it sharp.

Jensen's inequality is not of this family. It is the statement that a convex graph lies above each of its tangents, integrated: put the supporting line at the mean, and averaging the inequality $u(X) \ge u(\mathbb{E}X) + \lambda(X - \mathbb{E}X)$ kills the linear term.
:::

:::proof[The master inequality and its four cases]{provenance=adapted src="grimmett-stirzaker-2020:§7.3, proofs of Theorem (7.3.1) and Theorem (7.3.5), pp. 362-363; arfken-2013:§23.2, p. 1140"}
**The master inequality.** Let $A = \{h(X) \ge a\}$ and let $\mathbf{1}_A$ be its indicator. Because $h \ge 0$ everywhere and $h(X) \ge a$ on $A$,

$$
h(X) \ \ge \ a\,\mathbf{1}_A \qquad \text{pointwise on } \Omega .
$$

Expectation is monotone, and $\mathbb{E}(\mathbf{1}_A) = \mathbb{P}(A)$, so $\mathbb{E}(h(X)) \ge a\,\mathbb{P}(A)$. Dividing by $a > 0$ gives the claim. Non-negativity of $h$ is used exactly once, in the step off $A$.

**Markov and Chebyshov.** Put $h(x) = \lvert x\rvert$; then $\{h(X) \ge a\} = \{\lvert X\rvert \ge a\}$ and the master inequality is Markov's. Put $h(x) = x^2$; then $\{X^2 \ge a^2\} = \{\lvert X\rvert \ge a\}$ for $a > 0$, so $\mathbb{P}(\lvert X\rvert \ge a) \le \mathbb{E}(X^2)/a^2$. Replacing $X$ by $X - \langle X\rangle$ turns $\mathbb{E}(X^2)$ into $\operatorname{var}(X) = \sigma^2$, and setting $a = k\sigma$ gives $\sigma^2/(k\sigma)^2 = 1/k^2$. For $k = 3$ this is the familiar $\tfrac19$.

Arfken, Weber and Harris reach the same conclusion in two visible steps rather than one, and the intermediate step is worth seeing because it is where the integral is cut. For a non-negative $Y$ with density $f$,

$$
\langle Y \rangle = \int_0^{\infty} y f(y)\,dy \ \ge \ \int_K^{\infty} y f(y)\,dy \ \ge \ K \int_K^{\infty} f(y)\,dy = K\,\mathbb{P}(Y \ge K) ,
$$

the first inequality discarding a non-negative piece of the integral and the second replacing $y$ by its smallest value on the remaining range. Applying this to $Y = (X - \langle X\rangle)^2$ with $K = k^2\sigma^2$ reproduces the $k\sigma$ form.

**A general increasing weight.** Let $g$ be strictly increasing on $[0,\infty)$ and put $h(x) = g(\lvert x\rvert)$, which is non-negative. Strict monotonicity gives $\lvert X\rvert \ge a \iff g(\lvert X\rvert) \ge g(a)$, so the master inequality applied with the level $g(a) > 0$ is the claim. (If $g$ were merely non-decreasing, the two events could differ and only one implication would survive.)

**The lower bound.** Let $h$ take values in $[0, M]$ and let $0 \le a < M$, with $A = \{h(X) \ge a\}$ as before. Now bound $h$ from *above*: on $A$ we have $h(X) \le M$, and on the complement $h(X) < a$. Hence

$$
h(X) \ \le \ M\,\mathbf{1}_A + a\,\mathbf{1}_{A^{c}} = a + (M - a)\,\mathbf{1}_A .
$$

Taking expectations gives $\mathbb{E}(h(X)) \le a + (M-a)\mathbb{P}(A)$, and dividing by $M - a > 0$ gives the stated bound. $\square$
:::

:::proof[Jensen's inequality]{provenance=adapted src="evans-2010:Appendix B.1, proof of Theorem 2, p. 661; grimmett-stirzaker-2020:Exercise (5.6.1a), p. 202"}
Let $\mu = \mathbb{E}X$, which exists by hypothesis, and take the supporting line of $u$ at the point $c = \mu$: there is a $\lambda \in \mathbb{R}$ with

$$
u(x) \ \ge \ u(\mu) + \lambda\,(x - \mu) \qquad \text{for all } x \in \mathbb{R} .
$$

Substituting $x = X(\omega)$ gives an inequality between random variables. The right-hand side has finite expectation $u(\mu) + \lambda(\mathbb{E}X - \mu) = u(\mu)$, using the hypothesis $\mathbb{E}\lvert X\rvert < \infty$ to split the expectation. Therefore the negative part of $u(X)$ is integrable, $\mathbb{E}(u(X))$ is well defined in $(-\infty, +\infty]$, and monotonicity of expectation gives

$$
\mathbb{E}\bigl(u(X)\bigr) \ \ge \ u(\mu) + \lambda\bigl(\mathbb{E}X - \mu\bigr) = u(\mu) ,
$$

which is the inequality. The whole content of the proof is that the linear term has mean zero when the line is placed at the mean; placing it anywhere else would leave a residue.

**The equality case.** Suppose $u$ is strictly convex and $\mathbb{E}(u(X)) = u(\mu)$. Write $\ell(x) = u(\mu) + \lambda(x-\mu)$ for the supporting line at $\mu$, and set $D = u(X) - \ell(X)$. Then $D \ge 0$ by the displayed inequality and $\mathbb{E}(D) = 0$ by assumption, so $D = 0$ almost surely: almost every value taken by $X$ lies *on* that line.

Suppose, for contradiction, that $X$ is not almost surely constant. Then $\mathbb{P}(X < \mu) > 0$, for otherwise $X \ge \mu$ almost surely with mean $\mu$, which forces $X = \mu$ almost surely. So there is some $x_1 < \mu$ with $u(x_1) = \ell(x_1)$, and also $u(\mu) = \ell(\mu)$ by construction. Now take any $c$ with $x_1 < c < \mu$. By the chord definition of convexity, $u(c)$ is at most the value at $c$ of the chord joining $\bigl(x_1, u(x_1)\bigr)$ to $\bigl(\mu, u(\mu)\bigr)$; both endpoints lie on $\ell$, so that chord *is* $\ell$, giving $u(c) \le \ell(c)$. Combined with $u(c) \ge \ell(c)$ this makes $u = \ell$ on the whole interval $[x_1, \mu]$, so $u$ is affine there with slope $\lambda$.

Finally, let $\lambda(c)$ be a supporting slope at such a $c$. Comparing $u(c+h) \ge u(c) + \lambda(c)h$ with $u(c+h) - u(c) = \lambda h$ for small $h$ of either sign gives $\lambda h \ge \lambda(c) h$ for $h > 0$ and for $h < 0$, hence $\lambda(c) = \lambda$ for every $c$ in the open interval $(x_1, \mu)$. A function that is constant on an interval is not strictly increasing, contradicting strict convexity. Therefore $X$ is almost surely constant. $\square$
:::

:::proof[The Chernoff bound and Bernstein's inequality]{provenance=adapted src="grimmett-stirzaker-2020:§5.11, p. 227, and §2.2, pp. 33-34"}
**The exponential bound.** Fix $t > 0$ with $M(t) < \infty$. The map $x \mapsto e^{tx}$ is strictly increasing, so $\{X \ge a\} = \{e^{tX} \ge e^{ta}\}$, and $h(x) = e^{tx}$ is non-negative. The master inequality at level $e^{ta} > 0$ gives

$$
\mathbb{P}(X \ge a) \ \le \ \frac{\mathbb{E}\bigl(e^{tX}\bigr)}{e^{ta}} = e^{-ta}M(t) = e^{-(ta - \Lambda(t))} .
$$

This holds for each admissible $t > 0$ separately, so we may take the infimum of the right-hand side, which is the exponential of minus the supremum of $ta - \Lambda(t)$.

**Bernstein's inequality.** Write $S_n = \sum_{i=1}^{n} I_i$, where $I_i$ is the indicator of $A_i$, so the $I_i$ are independent and take the value $1$ with probability $p$ and $0$ with probability $q = 1-p$. Fix $\epsilon > 0$ and $\lambda > 0$. We apply the exponential bound not to $S_n$ itself but to the centred and scaled variable, which keeps the algebra symmetric in $p$ and $q$. Since $\{S_n \ge n(p+\epsilon)\}$ is the event in question,

$$
\mathbb{P}\Bigl(\tfrac1n S_n \ge p+\epsilon\Bigr) \ \le \ e^{-\lambda n (p + \epsilon)}\,\mathbb{E}\bigl(e^{\lambda S_n}\bigr)
 = e^{-\lambda n \epsilon} \Bigl( p\,e^{\lambda q} + q\,e^{-\lambda p}\Bigr)^{\!n} ,
$$

where the last equality uses independence to factorise $\mathbb{E}(e^{\lambda S_n}) = \bigl(q + p e^{\lambda}\bigr)^n$ and then absorbs the factor $e^{-\lambda n p}$ into the bracket as $e^{-\lambda p}(q + pe^{\lambda}) = p e^{\lambda q} + q e^{-\lambda p}$.

The bracket must now be bounded by something manageable in $\lambda$. Grimmett and Stirzaker use the elementary inequality

$$
e^{x} \ \le \ x + e^{x^{2}} \qquad (x \in \mathbb{R}) ,
$$

which we verify in the remark below. Applying it with $x = \lambda q$ and with $x = -\lambda p$,

$$
p\,e^{\lambda q} + q\,e^{-\lambda p}
 \ \le \ p\bigl(\lambda q + e^{\lambda^2 q^2}\bigr) + q\bigl(-\lambda p + e^{\lambda^2 p^2}\bigr)
 = p\,e^{\lambda^2 q^2} + q\,e^{\lambda^2 p^2} ,
$$

because the two linear terms are $+\lambda pq$ and $-\lambda pq$ and cancel exactly. This cancellation is the point of centring: it is what removes the first-order term and leaves a bound that is quadratic in $\lambda$. Since $0 \le p, q \le 1$ we have $p^2, q^2 \le 1$, so each exponential is at most $e^{\lambda^2}$ and the bracket is at most $(p+q)e^{\lambda^2} = e^{\lambda^2}$. Therefore

$$
\mathbb{P}\Bigl(\tfrac1n S_n \ge p+\epsilon\Bigr) \ \le \ e^{-\lambda n \epsilon} e^{\lambda^2 n} = e^{n(\lambda^2 - \lambda\epsilon)} .
$$

The exponent is a quadratic in $\lambda$ with positive leading coefficient, minimised at $\lambda = \epsilon/2$, where $\lambda^2 - \lambda\epsilon = -\epsilon^2/4$. This choice is legitimate because it is positive. Hence the bound $e^{-n\epsilon^2/4}$.

For the lower tail, replace each $A_i$ by its complement: the indicators $1 - I_i$ are independent with common success probability $q$, their sum is $n - S_n$, and $\{n^{-1}S_n \le p - \epsilon\} = \{n^{-1}(n - S_n) \ge q + \epsilon\}$, to which the bound just proved applies with $q$ in place of $p$. Since the bound does not involve $p$, the same number comes out. $\square$
:::

:::remark[Where the hypotheses are used, and where each bound fails]{provenance=original}
**Non-negativity of $h$.** This is the only hypothesis in the master inequality, and it is used in exactly one place: bounding $h(X) \ge 0$ on the complement of $A$. Drop it and the conclusion is false. Let $X$ be $+1$ or $-3$ with probability $\tfrac12$ each and take $h(x) = x$, which is not non-negative. Then $\mathbb{E}(h(X)) = -1$, so the proposed bound $\mathbb{E}(h(X))/a$ is negative for every $a > 0$, while $\mathbb{P}(h(X) \ge 1) = \tfrac12$.

**Finiteness of the moment used.** Markov's inequality is vacuous but not false when $\mathbb{E}\lvert X\rvert = \infty$, and likewise for Chebyshov when the variance is infinite. The Cauchy distribution, with density $1/\bigl(\pi(1+x^2)\bigr)$, has no mean at all, so neither bound says anything about it; its tail really does decay only like $1/a$, which is the Markov rate, so no better moment-free bound is available in that generality.

**Finiteness of $M(t)$.** The Chernoff bound is the one with a genuine restriction. If $\mathbb{E}(e^{tX}) = \infty$ for every $t > 0$ — as for any distribution with a tail heavier than exponential, for instance the log-normal — the bound degenerates to $\mathbb{P}(X \ge a) \le \infty$ and is useless. Grimmett and Stirzaker's Exercise (5.11.3) records the converse: $M$ is finite in a neighbourhood of the origin exactly when there are positive constants $\lambda$ and $\nu$ with $\mathbb{P}(\lvert X\rvert \ge a) \le \nu e^{-\lambda a}$ for $a > 0$. So the hypothesis of the Chernoff bound and the kind of conclusion it delivers are two views of one property of $X$.

**Strict monotonicity of $g$ in case 3.** Used to turn $\{\lvert X\rvert \ge a\}$ into $\{g(\lvert X\rvert) \ge g(a)\}$. With a weight that is only non-decreasing, $g$ may be constant on an interval containing $a$, and then $\{g(\lvert X\rvert) \ge g(a)\}$ can be strictly larger than $\{\lvert X\rvert \ge a\}$; the inequality still holds in the direction we want, but the two events are no longer interchangeable.

**Convexity in Jensen.** Only the existence of one supporting line, at the mean, is used. Nothing is needed at any other point, and $u$ need not be differentiable. The inequality reverses for concave $u$ (apply it to $-u$), which is why $\mathbb{E}(\log X) \le \log \mathbb{E}(X)$ while $\mathbb{E}(e^{X}) \ge e^{\mathbb{E}X}$.

**The elementary inequality $e^x \le x + e^{x^2}$.** Both sides equal $1$ at $x = 0$. Three ranges:

- $x \ge 1$. Then $x^2 \ge x$, so $e^{x^2} \ge e^{x}$ already, and adding $x > 0$ only helps.
- $0 < x < 1$. Subtracting $x$ from the exponential series kills the linear term: $e^{x} - x = 1 + \sum_{k \ge 2} x^{k}/k!$. Factoring out $x^2$, the sum is $x^2\bigl(\tfrac12 + \tfrac{x}{6} + \tfrac{x^2}{24} + \cdots\bigr) \le x^2 \sum_{k\ge2} 1/k! = x^2(e-2) < x^2$, since $e - 2 = 0.71828$. And $e^{x^2} \ge 1 + x^2$. Hence $e^x - x < e^{x^2}$.
- $x \le 0$. Write $x = -s$ with $s \ge 0$. The alternating exponential series gives $e^{-s} \le 1 - s + s^2/2$ for $s \ge 0$, while $e^{s^2} - s \ge 1 + s^2 - s \ge 1 - s + s^2/2$ because $s^2 \ge s^2/2$. Chaining the two gives $e^{x} \le x + e^{x^2}$.

A numerical sweep over $x \in [-6,6]$ confirms that $x + e^{x^2} - e^{x} \ge 0$, with equality only at $x = 0$.

**The constant $\tfrac14$ in Bernstein's inequality.** It is not optimal, and the two places it is lost are visible in the proof: bounding $p^2$ and $q^2$ by $1$, and using $e^x \le x + e^{x^2}$ rather than the exact generating function. Optimising $e^{-\lambda n(p+\epsilon)}(q + pe^{\lambda})^n$ over $\lambda$ exactly instead gives the sharper exponent $-n\,D(p+\epsilon \Vert p)$, where
$$
D(b \Vert p) = b \log\frac{b}{p} + (1-b)\log\frac{1-b}{1-p} ,
$$
attained at $e^{\lambda} = \bigl((p+\epsilon)q\bigr)/\bigl(p(1-p-\epsilon)\bigr)$. For $p = \tfrac12$ and $\epsilon = 0.05$ this exponent is $0.005008$ per trial against Bernstein's $\epsilon^2/4 = 0.000625$, a factor of eight in the rate; the example below shows what that costs.
:::

:::method[Choosing a tail bound]{provenance=original}
Given a tail $\mathbb{P}(X \ge a)$ to bound, with $a$ above the mean:

1. **Ask what you know.** Only $\mathbb{E}\lvert X\rvert$: use Markov. Also the variance: use Chebyshov on $X - \mathbb{E}X$. Also the moment generating function, or $X$ is a sum of independent bounded pieces: use Chernoff.
2. **Centre before you bound.** Markov and Chebyshov applied to $X$ itself bound $\mathbb{P}(\lvert X\rvert \ge a)$, which is the wrong event when the mean is far from zero. Apply them to $X - \mathbb{E}X$ and ask for a deviation, not a value.
3. **Check whether the deviation is large or moderate.** Write the Chebyshov bound as $\sigma^2/(a - \mathbb{E}X)^2$ and the Chernoff bound as $e^{-nI}$ for a sum of $n$ pieces. Chebyshov wins at small deviations and small $n$; the exponential bound wins once $nI$ exceeds roughly $\log(1/\text{Chebyshov bound})$. Compute both: neither dominates.
4. **For a sum, do the optimisation in $t$ exactly if you can.** For independent summands, $M_{S_n}(t) = \prod_i M_i(t)$, so $\Lambda_{S_n} = \sum_i \Lambda_i$ and the supremum is a one-dimensional calculus problem. Differentiating $ta - \Lambda(t)$ gives the stationarity condition $\Lambda'(t) = a$. Only fall back on a ready-made bound like Bernstein's when the exact optimisation is inconvenient.
5. **Sanity-check against a known case.** If the summands are bounded, compare the bound with the normal approximation from :ref[The central limit theorem]{to=prob.central-limit-theorem}. The normal approximation is not a bound, but a tail bound that is smaller than it over the range where the approximation is good is a sign of an algebra slip.
:::

:::example[Four bounds on one tail, against the exact answer]{provenance=original}
A Monte Carlo program estimates a probability $p$ by generating $n = 10^4$ independent trials and reporting the success fraction $\hat p = S_n/n$. Suppose the truth is $p = \tfrac12$. How likely is the program to report $\hat p \ge 0.55$, that is, to be wrong by five percentage points on the high side? Here $S_n$ is binomial with parameters $n = 10^4$ and $p = \tfrac12$, so $\mathbb{E}S_n = 5000$, $\operatorname{var}(S_n) = npq = 2500$ and $\sigma = 50$; the event is $\{S_n \ge 5500\}$, a deviation of ten standard deviations.

**Markov, on $S_n$ itself.** With $a = 5500$,
$$
\mathbb{P}(S_n \ge 5500) \ \le \ \frac{\mathbb{E}S_n}{5500} = \frac{5000}{5500} = 0.9091 .
$$
This is correct and worthless: it is not far from the trivial bound $1$. The reason is step 2 of the method — Markov applied to an uncentred variable measures how large $S_n$ is, not how far it has moved.

**Chebyshov, on the deviation.** With $k\sigma = 500$, i.e. $k = 10$,
$$
\mathbb{P}\bigl(\lvert S_n - 5000\rvert \ge 500\bigr) \ \le \ \frac{\sigma^2}{500^2} = \frac{2500}{250000} = 0.01 ,
$$
or $1/k^2 = 1/100$. The single tail is at most this, so $\mathbb{P}(S_n \ge 5500) \le 0.01$. Two moments have bought a factor of ninety over Markov.

**Bernstein.** With $\epsilon = 0.05$ and $n = 10^4$,
$$
\mathbb{P}\bigl(\hat p \ge 0.55\bigr) \ \le \ e^{-n\epsilon^2/4} = e^{-10^4 \times 0.0025/4} = e^{-6.25} = 1.930 \times 10^{-3} ,
$$
five times better than Chebyshov.

**Chernoff, optimised exactly.** Here $M(t) = \bigl(\tfrac12 + \tfrac12 e^{t}\bigr)^{n}$, so with $b = p + \epsilon = 0.55$ the stationarity condition $\Lambda'(t) = nb$ reads $e^{t}/(1 + e^{t}) = b$, giving
$$
t^{\star} = \log\frac{b}{1-b} = \log\frac{0.55}{0.45} = 0.200671 .
$$
Substituting back, $t^{\star} n b - \Lambda(t^\star) = n\,D(b\Vert p)$ with $D(0.55 \Vert 0.5) = 0.55\log 1.1 + 0.45 \log 0.9 = 0.052421 - 0.047412 = 0.005008$. Hence
$$
\mathbb{P}\bigl(\hat p \ge 0.55\bigr) \ \le \ e^{-10^4 \times 0.005008} = e^{-50.084} = 1.774 \times 10^{-22} .
$$

**The exact answer.** Summing the binomial mass function from $5500$ to $10^4$ gives
$$
\mathbb{P}(S_n \ge 5500) = 7.755 \times 10^{-24} .
$$

So on this tail the four bounds overestimate the truth by factors of about $1.2\times 10^{23}$, $1.3 \times 10^{21}$, $2.5\times 10^{20}$ and $23$ respectively. The optimised Chernoff bound is the only one of the four that gets the order of magnitude even approximately right, and it is wrong only by a factor of $23$ — the polynomial prefactor that an exponential bound cannot see. Chebyshov and Bernstein, which differ by a factor of five from each other, are both off by twenty orders of magnitude. The moral is not that Chebyshov is bad but that at ten standard deviations the quantity being estimated is exponentially small, and only a bound with an exponential in it can track that.

**Where the ordering reverses.** At a *moderate* deviation the comparison goes the other way. Take $\epsilon = 0.02$ with the same $n = 10^4$. Chebyshov gives $\sigma^2/(n\epsilon)^2 = 2500/40000 = 0.0625$, whereas Bernstein gives $e^{-10^4 \times 0.0004/4} = e^{-1} = 0.3679$, six times worse. Setting $u = n\epsilon^2$, the two bounds are $1/(4u)$ and $e^{-u/4}$, and they cross near $u \approx 17$; below that, two moments beat the lossy exponential bound. This is why step 3 of the method says to compute both.
:::

:::application[Error bars, detector counts and free energies]{provenance=original}
**How many samples a simulation needs.** Chebyshov's inequality is the standard distribution-free answer to "how long must I run?". For a sample mean of $n$ independent measurements with variance $\sigma^2$, $\mathbb{P}(\lvert \hat\mu - \mu\rvert \ge \epsilon) \le \sigma^2/(n\epsilon^2)$, so $n \ge \sigma^2/(\delta\epsilon^2)$ guarantees accuracy $\epsilon$ with confidence $1-\delta$ whatever the distribution. This is the quantitative content of the weak law; see :ref[Laws of large numbers]{to=prob.law-of-large-numbers} for the limit statement and for a worked sample-size calculation.

**The $k\sigma$ language of experimental physics.** A claim quoted at "five sigma" is a statement about a tail, and which tail bound is meant matters. For a normal variable the two-sided tails at one, two and three standard deviations are $0.3173$, $0.04550$ and $0.002700$, computable as $\operatorname{erfc}(k/\sqrt2)$. Chebyshov's inequality gives only $1$, $\tfrac14$ and $\tfrac19 = 0.1111$ for the same three cases. Arfken, Weber and Harris make exactly this comparison at $k=3$ and call the contrast strong: the distribution-free bound is forty times weaker than the normal answer. The gap is the price of knowing nothing about the shape, and it is why an experiment that cannot justify a normal model quotes much more conservative limits.

**Concentration of counts.** A detector that records independent events with probability $p$ per gate, or a spin system in which $n$ independent sites each contribute $\pm 1$, has a count whose fluctuation is controlled by Bernstein's inequality uniformly in $p$: the chance that the observed rate differs from $p$ by more than $\epsilon$ is at most $2e^{-n\epsilon^2/4}$. Because the bound does not involve $p$, it can be used before the rate is known — for choosing a gate count in advance, or for setting a threshold that must hold for every source strength.

**Jensen and the free energy.** Let $H$ be the energy of a configuration drawn from some reference distribution and let $\beta = 1/k_{\mathrm{B}}T$. The map $x \mapsto e^{-\beta x}$ is strictly convex, so Jensen's inequality gives
$$
\bigl\langle e^{-\beta H}\bigr\rangle \ \ge \ e^{-\beta \langle H\rangle} ,
\qquad\text{that is}\qquad
-\frac{1}{\beta}\log\bigl\langle e^{-\beta H}\bigr\rangle \ \le \ \langle H\rangle .
$$
The left-hand side is a free energy and the right-hand side a mean energy, so the inequality is the familiar statement that the free energy of a system never exceeds the average energy of the reference ensemble, with equality only if $H$ is almost surely constant. Read in the other direction it is the variational principle behind mean-field approximations: any trial ensemble gives an upper bound on the true free energy, and the best trial ensemble is the one that makes the bound tightest.

**Jensen and information.** Applying the inequality to the convex function $x \mapsto x\log x$, or to $-\log$, gives the non-negativity of the Kullback-Leibler divergence $D(b \Vert p)$ that appeared in the optimised Chernoff exponent above, and with it the fact that the exponent is strictly positive whenever the deviation is real. That observation is the starting point of :ref[Large deviations and Cramer's theorem]{to=prob.large-deviations}.
:::
