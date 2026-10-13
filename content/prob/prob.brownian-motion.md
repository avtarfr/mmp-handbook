---
id: prob.brownian-motion
title: Brownian motion
kind: definition
level: core
summary: Defines the Wiener process, shows that it is the scaling limit of a random walk in the sense that the rescaled walk's finite-dimensional distributions converge to it, sketches the proof that a version with continuous paths exists, and establishes the path properties - covariance $\sigma^2\min\{s,t\}$, quadratic variation $\sigma^2 t$, and total variation infinite on every interval.
prereqs: [prob.random-variables, prob.expectation-variance, prob.multivariate-normal, prob.characteristic-functions, prob.probability-inequalities, prob.convergence-random-variables, prob.central-limit-theorem]
provenance: adapted
sources:
  - work: grimmett-stirzaker-2020
    loc: "§13.2 Brownian motion, pp. 578-580: the cubic-lattice symmetric random walk with spacing $\\delta$ and inter-jump time $\\tau$, the scaling (13.2.1) $\\tfrac13\\delta^2/\\tau = \\sigma^2$ under which the displacement tends to $N(0,\\sigma^2 t)$, the list (a)-(d) of properties guessed for the limit, and the two reported path properties (continuity, nowhere differentiability) on p. 579; Exercise (13.2.1), p. 580 (total variation of the Wiener process); §13.3, Definition (13.3.1) of the Wiener process, the autocovariance (13.3.2), the transition density (13.3.4), and Theorem (13.3.19) with its dyadic-interpolation existence proof, pp. 580-581 and 587-589; §8.5, Lemma (8.5.1) (finite-dimensional distributions) and Exercise (8.5.4) (quadratic variation), pp. 416-418; §8.8, Definition (8.8.5) of the quadratic variation process, p. 427; §8.7, p. 423, on fractional Brownian motion (self-similar with Hurst exponent $H$, stationary but dependent increments except when $H=\\tfrac12$, paths that may be taken almost surely continuous and nowhere differentiable)"
    pages: "416-418, 423, 427, 578-581, 587-589"
    role: the definition of the Wiener process and the convention that $\sigma^2$ is a free variance parameter; the covariance $\sigma^2\min\{s,t\}$ and the transition density; the random-walk scaling argument that motivates the definition and the role of the scaling $\delta^2/\tau$ constant; the existence theorem and the whole route of its proof (interpolate on the dyadic rationals, bound the level increments by a normal tail estimate, apply Borel-Cantelli, extend by continuity); the quadratic variation of the Wiener process and the divergence of its total variation; the statement that almost every path is nowhere differentiable; the properties of fractional Brownian motion quoted in the remark
  - work: folland-1999
    loc: "§10.5 The Wiener process, pp. 330-334: the postulates (10.20) $X_0 = 0$, (10.21) independent increments, (10.22) $X_t - X_s$ normal with mean $0$ and variance $C(t-s)$; the argument from subdividing $[s,t]$ and the central limit theorem that the increments ought to be normal with variance proportional to $t-s$; the finite-dimensional densities (10.23); and Theorem 10.28, that the measure with those finite-dimensional distributions is carried by $C([0,\\infty),\\mathbb{R})$"
    pages: "330-334"
    role: the second, axiomatic route to the definition and the physical reading of each postulate; the motivating subdivision-plus-central-limit-theorem discussion that *suggests* normality of the increments and variance proportional to elapsed time before (10.22) is adopted as the third postulate; the statement that the process can be realised on the space of continuous paths
  - work: strauss-2008
    loc: "§2.4 Diffusion on the whole line, p. 51, the probabilistic reading of the source function $S(x-y,t)$: the probability that a particle starting at $x$ lies in $(a,b)$ at time $t$ is $\\int_a^b S(x-y,t)\\,dy$, so a probability density evolving by Brownian motion satisfies the diffusion equation; §6.1 Laplace's equation, p. 153, item 4: for Brownian motion in a container $D$ stopped on the boundary, the probability $u$ of stopping on a chosen boundary piece $C_1$ solves $\\Delta u = 0$ in $D$ with $u = 1$ on $C_1$ and $u = 0$ on $C_2$"
    pages: "51, 153"
    role: the two standard partial-differential-equation readings used in the application block - the transition density as the fundamental solution of the diffusion equation, and the harmonic-measure interpretation of the Dirichlet problem
---

:::note[What has to be supplied, and what cannot be]{provenance=original}
A random walk is specified by one number per step. A process in continuous time has uncountably many times, so a list of distributions is no longer enough to pin it down: two processes can have exactly the same distribution at every finite collection of times and yet have completely different paths. One may be continuous and the other wild.

This is the one structural difficulty in defining Brownian motion, and it shapes everything below. The distributional half of the definition is the easy half, and it is strongly suggested - though, as the idea block explains, not forced - by subdividing a time interval and looking at :ref[the central limit theorem]{to=prob.central-limit-theorem}: the increments ought to be normal, with variance proportional to elapsed time. That is where both of our sources stop arguing and start assuming. The path half - continuity - has to be imposed as a separate requirement as well, and then one must prove that the two halves are compatible. They are, and that is the existence theorem.

Two warnings about names. Grimmett and Stirzaker use *Wiener process* for the mathematical object and keep *Brownian motion* for the physical phenomenon it models; Folland uses the two names interchangeably for the process. We follow the first convention, and say "Wiener process" whenever precision matters.
:::

:::definition[Gaussian processes, and the Wiener process]{provenance=adapted src="grimmett-stirzaker-2020:§13.3, Definition (13.3.1) with the standardisation paragraph, pp. 580-581, and §8.5, pp. 416-417; folland-1999:§10.5, postulates (10.20)-(10.22), pp. 330-331"}
A **random process** $X = \{X(t) : t \ge 0\}$ is a family of random variables on one probability space $(\Omega, \mathcal{F}, \mathbb{P})$ indexed by time. For a fixed $\omega \in \Omega$ the function $t \mapsto X(t;\omega)$ is a **sample path**. The **finite-dimensional distributions** of $X$ are the joint distributions of the vectors $(X(t_1), \dots, X(t_k))$ over all finite sets of times.

$X$ is a **Gaussian process** if every one of its finite-dimensional distributions is multivariate normal (see :ref[The multivariate normal distribution]{to=prob.multivariate-normal}). The process $X$ is said to have **independent increments** when, for any finite list of pairwise disjoint time intervals, the increments of $X$ across those intervals form an independent family; it is enough to require this for two intervals $[u,v]$ and $[s,t]$ with $u \le v \le s \le t$ and then for finitely many at a time.

**Definition.** Fix a constant $\sigma^{2} > 0$. A real-valued Gaussian process $W = \{W(t) : t \ge 0\}$ with $W(0) = w$ is called a **Wiener process** with variance parameter $\sigma^{2}$ when it has all three of these properties.

1. *(Independent increments.)* Increments of $W$ over disjoint time intervals are independent.
2. *(Stationary normal increments.)* Each increment $W(s+t) - W(s)$, with $s, t \ge 0$, is distributed as $N(0, \sigma^{2}t)$.
3. *(Continuity.)* Every sample path of $W$ is a continuous function of time.

$W$ is **standard** if $w = 0$ and $\sigma^2 = 1$. Any Wiener process is reduced to a standard one by $W_1(t) = \bigl(W(t) - W(0)\bigr)/\sigma$. Because the law of $W(s+t) - W(s)$ depends on $t$ and not on $s$, the increments are called **stationary**.

Condition 2 forces $\mathbb{E}\bigl(W(s+t) - W(s)\bigr) = 0$: a Wiener process has no drift. Condition 3 is a statement about the functions $t \mapsto W(t;\omega)$, not about any distribution, and is the only part of the definition that the finite-dimensional distributions do not see.

Folland reaches the same three conditions by a different route, reading each as a physical postulate about a particle bombarded by molecules: it starts at a known place (his (10.20)); a collision has no lasting memory, so increments over disjoint time intervals are independent (his (10.21)); the mechanism is unchanging in time, so the law of $W(t) - W(s)$ depends only on $t-s$; and the particle is pushed left and right equally, so the mean increment is zero. Normality and the proportionality of the variance to $t-s$ are *not* deduced from these. Folland subdivides $[s,t]$ into $n$ equal pieces, says that the central limit theorem "suggests" that the increment should be normal and that additivity of the variance "strongly indicates" that it should be proportional to $t-s$, and then writes: "we are led to the third assumption", namely his (10.22), that $W(t)-W(s)$ is normal with mean $0$ and variance $C(t-s)$. So normality and the variance law are a postulate for him too, as they are condition 2 for us; the subdivision argument recalled in the idea below is its motivation, not its proof.
:::

:::statement[Covariance, finite-dimensional distributions, and existence]{provenance=adapted src="grimmett-stirzaker-2020:§8.5, Lemma (8.5.1), p. 417, and §13.3, equation (13.3.2), transition density (13.3.4) and Theorem (13.3.19), pp. 581-587; folland-1999:§10.5, equation (10.23) and Theorem 10.28, pp. 332-334"}
Let $W$ be a Wiener process with variance parameter $\sigma^2$ and $W(0) = 0$.

1. **Covariance.** For all $s, t \ge 0$,
   $$
   \mathrm{cov}\bigl(W(s), W(t)\bigr) \ = \ \sigma^{2}\min\{s,t\} .
   $$
2. **Finite-dimensional distributions.** For $0 \le t_1 < t_2 < \cdots < t_k$, the vector $(W(t_1), \dots, W(t_k))$ is multivariate normal with zero mean vector and covariance matrix $V$ with entries $v_{ij} = \sigma^{2}\min\{t_i, t_j\}$. Conditions 1 and 2 of the definition therefore determine every finite-dimensional distribution, and so determine the conditional (transition) density of $W(t)$ given $W(s) = x$, which for the standard process is
   $$
   f(t, y \mid s, x) \ = \ \frac{1}{\sqrt{2\pi(t-s)}}\, \exp\left( -\frac{(y-x)^{2}}{2(t-s)} \right) , \qquad s < t .
   $$
3. **Existence.** There is a probability space carrying a process that satisfies all three conditions of the definition. Equivalently, the probability measure determined by the finite-dimensional distributions in part 2 can be realised on the space of continuous paths.

Part 3 is the content of the definition that is not free. A Gaussian process with the finite-dimensional distributions of part 2 exists by general constructions; what has to be proved is that one of them may be chosen with every sample path continuous.
:::

:::statement[The Wiener process as the scaling limit of a random walk]{provenance=original}
Let $X_1, X_2, \dots$ be independent and identically distributed with $\mathbb{E}(X_1) = 0$ and $\mathrm{var}(X_1) = \sigma^{2}$, where $0 < \sigma^{2} < \infty$. Put $S_0 = 0$ and $S_m = X_1 + \cdots + X_m$, and for each $n \ge 1$ define the rescaled walk

$$
W_n(t) \ = \ \frac{S_{\lfloor nt \rfloor}}{\sqrt{n}} , \qquad t \ge 0 ,
$$

in which space is compressed by $\sqrt n$ while time is compressed by $n$.

**Claim.** For every finite set of times $0 \le t_1 < t_2 < \cdots < t_k$,

$$
\bigl(W_n(t_1), \dots, W_n(t_k)\bigr) \ \xrightarrow{\mathrm{D}} \ \bigl(W(t_1), \dots, W(t_k)\bigr) \qquad \text{as } n \to \infty ,
$$

where $W$ is a Wiener process with variance parameter $\sigma^{2}$ and $W(0) = 0$.

That is: the finite-dimensional distributions of the rescaled walk converge to those of the Wiener process, whatever the step distribution, provided only that its mean is zero and its variance is finite and non-zero. No other scaling works: see the remark below.
:::

:::statement[Path properties]{provenance=adapted src="grimmett-stirzaker-2020:§13.2, p. 579 (nowhere differentiability), Exercise (13.2.1), p. 580, §8.5, Exercise (8.5.4), p. 418, and §8.8, Definition (8.8.5), p. 427"}
Let $W$ be a Wiener process with variance parameter $\sigma^{2}$, and fix $t > 0$. Write

$$
Q_n \ = \ \sum_{j=0}^{n-1} \Bigl( W\bigl((j+1)t/n\bigr) - W\bigl(jt/n\bigr) \Bigr)^{2}
$$

for the sum of squared increments over the uniform partition of $[0,t]$ into $n$ pieces.

1. **Quadratic variation.** $Q_n \to \sigma^{2} t$ in mean square as $n \to \infty$, and almost surely along the subsequence $n = 2^{k}$. (The mean-square statement is the one Grimmett and Stirzaker set as Exercise (8.5.4); the almost sure statement along the dyadic subsequence is an addition of ours, and both are proved below.)
2. **Unbounded total variation.** Almost surely, the sample path of $W$ has infinite total variation on every interval $[a,b]$ with $a < b$; that is,
   $$
   \sup \ \sum_{r} \bigl\lvert W(s_{r+1}) - W(s_r) \bigr\rvert \ = \ \infty ,
   $$
   the supremum being over all finite increasing sequences $a = s_0 < s_1 < \cdots < s_n = b$.
3. **Nowhere differentiability.** Almost every sample path is a continuous function of $t$ that is differentiable at no point. Grimmett and Stirzaker record this without proof, and we follow them. Part 2, which we do prove, gives a weaker statement of the same kind by itself: a function that is Lipschitz on an interval has finite total variation there, so almost surely no sample path is Lipschitz on any interval, and in particular none has a derivative that exists and is bounded throughout an interval.

Part 2 is why the Ito integral of :ref[The Ito integral and Ito's formula]{to=prob.ito-calculus} cannot be a Stieltjes integral taken path by path, and part 1 is what replaces it: the correct "$dW^2$" is not negligible but equals $\sigma^2\,dt$.
:::

:::idea{provenance=original}
Three separate ideas are at work, one for each statement.

**Why the increments are taken to be normal.** Split $[s,t]$ into $n$ equal pieces. By stationarity and independence, $W(t) - W(s)$ is a sum of $n$ independent identically distributed increments, for *every* $n$; in a word, its law is infinitely divisible. Two things should be separated here.

What the subdivision really settles is the *variance*. Write $v(h)$ for the variance of an increment across an interval of length $h$, assumed finite. Independence and stationarity give $v(s+t) = v(s) + v(t)$ for all $s,t \ge 0$, and $v$ is non-decreasing because a longer interval contains a shorter one and the extra variance is non-negative; a non-decreasing solution of that additive equation is $v(h) = v(1)h$. So once the increments are assumed to have finite variance, proportionality to elapsed time is a genuine consequence of conditions 1 and stationarity, with $\sigma^{2} = v(1)$.

Normality is *not*. Being an $n$-fold convolution of identical pieces for every $n$, even with finite variance, does not make a law normal: the Poisson and gamma laws, and compound Poisson laws generally, are infinitely divisible and have finite variance. The missing ingredient is a negligibility (Lindeberg) condition saying that no single piece of the subdivision carries a non-negligible share of the sum; a Poisson increment fails it, because a single jump is a macroscopic part of the total. With such a condition the central limit theorem for triangular arrays applies and the limit is normal, and that is the honest content of the heuristic. Folland supplies no such condition and claims none: he says the central limit theorem "suggests" normality and then assumes it. Condition 2 is therefore a postulate - very well motivated, and the physically right one for a particle hit by enormously many enormously small kicks, which is exactly a negligibility hypothesis - but a postulate.

**Why the rescaled walk converges.** Over disjoint time intervals the rescaled walk accumulates disjoint blocks of steps, so its increments are *exactly* independent at every $n$, not just in the limit. Each single increment is a normalised sum of about $n(t_j - t_{j-1})$ steps, so the central limit theorem sends it to $N(0, \sigma^2(t_j - t_{j-1}))$. A joint characteristic function that factorises into pieces, each of which converges, converges to the product of the limits; that product is the characteristic function of the Wiener vector.

**Why a continuous version exists.** Build the path by successive refinement. Fix its values at the times $m/2^{n}$ for $n = 1$, then $n = 2$, and so on, joining them by straight lines; passing from level $n-1$ to level $n$ only moves the midpoints of the existing segments. The midpoint displacement at level $j$ is normal with variance $2^{-j-1}$, and there are $2^{j-1}$ of them, so the largest of them is of order $\sqrt{j\,2^{-j}}$ - small enough that the total displacement over all levels converges. Summable corrections produce a uniformly convergent series of continuous functions, so the limit is continuous; the first Borel-Cantelli lemma turns "summable" into "almost surely".

**Why the quadratic variation survives.** Each squared increment has mean $\sigma^2 t/n$ and variance of the same order squared, so the sum has mean exactly $\sigma^{2}t$ and variance of order $1/n$: adding $n$ independent small terms averages the fluctuation away but not the mean. Since the increments themselves are of order $n^{-1/2}$ and there are $n$ of them, the sum of their absolute values is of order $\sqrt n$, which is why the total variation diverges.
:::

:::proof[Covariance, and the scaling limit]{provenance=original}
**Step 1: the covariance.** Take $0 \le s \le t$ and $W(0) = 0$. Write $W(t) = W(s) + \bigl(W(t) - W(s)\bigr)$ and multiply by $W(s) = W(s) - W(0)$:
$$
\mathbb{E}\bigl(W(s)W(t)\bigr) \ = \ \mathbb{E}\bigl(W(s)^{2}\bigr) + \mathbb{E}\Bigl( \bigl(W(s)-W(0)\bigr)\bigl(W(t)-W(s)\bigr) \Bigr) .
$$
The two factors in the second term are increments over the disjoint intervals $[0,s]$ and $[s,t]$, hence independent by condition 1, and each has mean zero by condition 2; so that term vanishes. The first term is $\mathrm{var}(W(s)) = \sigma^{2}s$ by condition 2. Since all means are zero, $\mathrm{cov}(W(s),W(t)) = \sigma^{2}s = \sigma^{2}\min\{s,t\}$, and the same holds with $s$ and $t$ exchanged.

The finite-dimensional distributions follow: $(W(t_1),\dots,W(t_k))$ is multivariate normal because $W$ is a Gaussian process, its mean vector is zero, and its covariance matrix has just been computed.

**Step 2: increments of the rescaled walk.** Fix $0 \le t_1 < \cdots < t_k$ and put $t_0 = 0$, so $W_n(t_0) = 0$. Define the increments
$$
D_{n,j} \ = \ W_n(t_j) - W_n(t_{j-1}) \ = \ \frac{1}{\sqrt n}\sum_{i = \lfloor n t_{j-1}\rfloor + 1}^{\lfloor n t_j \rfloor} X_i , \qquad j = 1, \dots, k .
$$
For distinct $j$ these sums use disjoint blocks of the $X_i$, so $D_{n,1}, \dots, D_{n,k}$ are independent for every $n$ - this is where the independence of the steps is used, and it is exact, not asymptotic.

**Step 3: the characteristic function of each increment converges.** Write $d_j = t_j - t_{j-1}$. We show that for every $c \in \mathbb{R}$
$$
\mathbb{E}\bigl( e^{i c D_{n,j}} \bigr) \ \longrightarrow \ \exp\left( -\tfrac12 c^{2}\sigma^{2} d_j \right) .
$$

The statement allows $t_1 = 0$, and then $d_1 = 0$ and the sum defining $D_{n,1}$ is empty, so $D_{n,1} = 0$ for every $n$ and both sides above equal $1$; that case is settled, and we assume $d_j > 0$ from here. Put $m_n = \lfloor n t_j\rfloor - \lfloor n t_{j-1}\rfloor$, so that $m_n/n \to d_j > 0$ and hence $m_n \to \infty$. Then
$$
D_{n,j} \ = \ a_n Y_n , \qquad a_n = \sqrt{\frac{m_n}{n}} , \qquad Y_n = \frac{1}{\sqrt{m_n}} \sum_{i=\lfloor n t_{j-1}\rfloor+1}^{\lfloor n t_j\rfloor} X_i .
$$
Here $Y_n$ is the sum of $m_n$ independent copies of $X_1$ divided by $\sqrt{m_n}$, which is $\sigma$ times the sum standardised in the usual way (divided by $\sigma\sqrt{m_n}$). Since $X_1$ is centred and has finite non-zero variance, :ref[the central limit theorem]{to=prob.central-limit-theorem} sends that standardised sum to $N(0,1)$, so $Y_n \xrightarrow{\mathrm{D}} N(0,\sigma^{2})$ and, by the direct half of the continuity theorem for characteristic functions (:ref[Characteristic functions]{to=prob.characteristic-functions}), $\mathbb{E}(e^{i\theta Y_n}) \to e^{-\theta^{2}\sigma^{2}/2}$ for each fixed $\theta$.

The factor $a_n$ is deterministic and tends to $\sqrt{d_j}$, but it moves with $n$, so the convergence just quoted cannot be applied at the argument $c a_n$ directly. Two elementary bounds remove the difficulty. First, $Y_n$ has mean $0$ and variance exactly $\sigma^{2}$ for every $n$, so $\mathbb{E}\lvert Y_n\rvert \le \sigma$ by the Cauchy-Schwarz inequality. Second, $\lvert e^{iu} - 1\rvert \le \lvert u\rvert$ for real $u$. Hence
$$
\Bigl\lvert \mathbb{E}\bigl(e^{i c a_n Y_n}\bigr) - \mathbb{E}\bigl(e^{i c \sqrt{d_j}\, Y_n}\bigr) \Bigr\rvert \ \le \ \mathbb{E}\Bigl\lvert e^{i c (a_n - \sqrt{d_j}) Y_n} - 1 \Bigr\rvert \ \le \ \lvert c\rvert\,\bigl\lvert a_n - \sqrt{d_j}\bigr\rvert\, \mathbb{E}\lvert Y_n\rvert \ \le \ \lvert c\rvert\,\sigma\,\bigl\lvert a_n - \sqrt{d_j}\bigr\rvert \ \longrightarrow \ 0 ,
$$
while $\mathbb{E}(e^{i c \sqrt{d_j} Y_n}) \to e^{-c^{2}d_j\sigma^{2}/2}$ by the previous paragraph with the *fixed* argument $\theta = c\sqrt{d_j}$. Adding the two statements gives the display at the head of this step, and with it $D_{n,j} \xrightarrow{\mathrm{D}} N(0,\sigma^{2}d_j)$.

**Step 4: assembling the joint limit.** Let $\theta_1, \dots, \theta_k$ be real and set $c_j = \theta_j + \theta_{j+1} + \cdots + \theta_k$. Writing each $W_n(t_j)$ as the sum of the increments up to $j$ and collecting terms,
$$
\sum_{j=1}^{k} \theta_j W_n(t_j) \ = \ \sum_{j=1}^{k} c_j D_{n,j} ,
$$
so by the independence of step 2 and the limit of step 3,
$$
\mathbb{E}\exp\left( i\sum_{j=1}^{k}\theta_j W_n(t_j) \right) = \prod_{j=1}^{k} \mathbb{E}\bigl(e^{i c_j D_{n,j}}\bigr) \ \longrightarrow \ \exp\left( -\tfrac12 \sum_{j=1}^{k} c_j^{2}\sigma^{2} d_j \right) .
$$
The identical algebra applied to a Wiener process $W$ with parameter $\sigma^2$, whose increments over $[t_{j-1}, t_j]$ are independent and $N(0, \sigma^2 d_j)$, shows that the right-hand side is exactly the characteristic function of $(W(t_1),\dots,W(t_k))$ evaluated at $(\theta_1,\dots,\theta_k)$. Pointwise convergence of characteristic functions to a characteristic function gives convergence in distribution, by the continuity theorem. $\square$
:::

:::proof[Existence of a version with continuous paths]{provenance=adapted src="grimmett-stirzaker-2020:§13.3, Theorem (13.3.19) and its proof, pp. 587-589"}
We construct the standard process on $[0,1]$; the general case follows by scaling ($W(t) = \sigma W_1(t) + w$) and by joining copies on $[n, n+1]$ end to end.

Start from a Gaussian process $X$ on $[0,1]$ with $X(0) = 0$, independent increments and $X(s+t) - X(s) \sim N(0,t)$. Such a process exists; the issue is its paths. Let $\mathcal{D}_n = \{m2^{-n} : 0 \le m \le 2^{n}\}$ be the level-$n$ dyadic points and $\mathcal{D} = \bigcup_n \mathcal{D}_n$.

**Step 1: the approximating polygons.** Let $X_n$ agree with $X$ on $\mathcal{D}_n$ and be linear in between, so $X_n$ is a continuous piecewise-linear function with $2^n$ segments. Put $X_0 \equiv 0$ and $Z_j = X_j - X_{j-1}$, so that
$$
X_n \ = \ \sum_{j=1}^{n} Z_j .
$$
Since $X_j$ and $X_{j-1}$ agree at every point of $\mathcal{D}_{j-1}$, the function $Z_j$ vanishes there; it is piecewise linear with corners only at points of $\mathcal{D}_j$. A piecewise-linear function attains its extreme values at its corners, so
$$
\sup_{0 \le t \le 1} \lvert Z_j(t)\rvert \ = \ \max\bigl\{ \lvert Z_j(m2^{-j})\rvert : m \text{ odd},\ 1 \le m \le 2^{j}-1 \bigr\} ,
$$
a maximum over $2^{j-1}$ points.

(One level is exceptional, and we follow Grimmett and Stirzaker in passing over it. With the convention $X_0 \equiv 0$ the function $Z_1 = X_1$ does not vanish on $\mathcal{D}_0 = \{0,1\}$, since $Z_1(1) = X(1)$; so at $j=1$ the supremum is a maximum over $\{\tfrac12, 1\}$ rather than over the single odd point, and the two values have variances $\tfrac12$ and $1$ rather than the $2^{-j-1} = \tfrac14$ that step 2 will give. The slip is harmless, because a single level contributes the one almost surely finite quantity $\sup_t\lvert Z_1(t)\rvert$ to the sum in step 4, and the estimates of steps 2 and 3 are needed only for $j \ge 2$, where the description above is exact. Taking $X_0$ to be the linear interpolant of $X$ on $\mathcal{D}_0$ instead of $0$ would remove the exception altogether.)

**Step 2: the size of one correction.** For odd $m$, $X_{j-1}$ interpolates linearly between the neighbouring even dyadics, so
$$
Z_j(m2^{-j}) = X(m2^{-j}) - \tfrac12\Bigl( X\bigl((m-1)2^{-j}\bigr) + X\bigl((m+1)2^{-j}\bigr) \Bigr) = \tfrac12 (A - B) ,
$$
where $A = X(m2^{-j}) - X((m-1)2^{-j})$ and $B = X((m+1)2^{-j}) - X(m2^{-j})$ are increments over adjacent intervals of length $2^{-j}$. By conditions 1 and 2 they are independent and each is $N(0, 2^{-j})$, so $Z_j(m2^{-j})$ is normal with mean $0$ and variance $\tfrac14(2^{-j} + 2^{-j}) = 2^{-j-1}$.

**Step 3: a tail bound, level by level.** For $Y \sim N(0,v)$ and $x > 0$ the standard tail estimate gives $\mathbb{P}(\lvert Y\rvert > x) \le (2\sqrt{v}/(x\sqrt{2\pi}))e^{-x^{2}/(2v)}$. With $v = 2^{-j-1}$ this is at most $x^{-1}2^{-j/2}e^{-x^{2}2^{j}}$. Combining with step 1 and the union bound over the $2^{j-1}$ odd points,
$$
\mathbb{P}\left( \sup_{0\le t\le 1} \lvert Z_j(t)\rvert > x \right) \ \le \ \frac{2^{j-1}}{x\,2^{j/2}}\, e^{-x^{2}2^{j}} .
$$
Choose the threshold $x_j = c\sqrt{j\,2^{-j}\log 2}$ with $c > 1$ fixed. Then $x_j^{2}2^{j} = c^{2}j\log 2$, so $e^{-x_j^2 2^j} = 2^{-c^{2}j}$ and $x_j 2^{j/2} = c\sqrt{j\log 2}$, whence
$$
\mathbb{P}\left( \sup_{0 \le t \le 1} \lvert Z_j(t)\rvert > x_j \right) \ \le \ \frac{2^{\,j(1-c^{2})-1}}{c\sqrt{j\log 2}} .
$$
Because $c > 1$ the exponent $j(1-c^{2})$ is negative and linear in $j$, so these probabilities form a convergent geometric-type series.

**Step 4: Borel-Cantelli, and uniform convergence.** By the first Borel-Cantelli lemma (:ref[Convergence of random variables]{to=prob.convergence-random-variables}), almost surely only finitely many $j$ have $\sup_t\lvert Z_j(t)\rvert > x_j$. Since $\sum_j x_j = c\sqrt{\log 2}\sum_j \sqrt{j}\,2^{-j/2} < \infty$, it follows that
$$
\sum_{j\ge1} \ \sup_{0\le t\le 1} \lvert Z_j(t)\rvert \ < \ \infty \qquad \text{almost surely.}
$$
On that event the series $\sum_j Z_j$ converges uniformly on $[0,1]$ by the Weierstrass criterion, so $X_n$ converges uniformly to a limit $Y$, and $Y$ is continuous as a uniform limit of continuous functions.

**Step 5: $Y$ has the right law.** If $t \in \mathcal{D}$ then $X_n(t) = X(t)$ for all large $n$, so $Y(t) = X(t)$. For general $t$, take dyadics $s \to t$; then $\mathbb{E}\bigl((X(s)-X(t))^{2}\bigr) = \lvert s-t\rvert \to 0$, so $X(s) \to X(t)$ in mean square, while $X(s) = Y(s) \to Y(t)$ almost surely by continuity of $Y$. Mean-square and almost-sure limits agree almost surely, so $Y(t) = X(t)$ almost surely for every fixed $t$. Hence $Y$ has the same finite-dimensional distributions as $X$, so conditions 1 and 2 hold for $Y$.

**Step 6: removing the exceptional set.** Let $\Omega'$ be the set of $\omega$ for which $t\mapsto Y(t;\omega)$ is continuous; steps 4 and 5 give $\mathbb{P}(\Omega') = 1$. Replace $\Omega$ by $\Omega'$ with the induced $\sigma$-field and probability measure. No probability changes, and now *every* path is continuous, so condition 3 holds as stated. $\square$
:::

:::proof[Quadratic variation, and the divergence of the total variation]{provenance=original}
Fix $t > 0$ and write $\Delta_j = W((j+1)t/n) - W(jt/n)$ for $j = 0,\dots,n-1$, so $Q_n = \sum_j \Delta_j^{2}$.

**Step 1: mean and variance of $Q_n$.** The $\Delta_j$ are increments over disjoint intervals of equal length $t/n$, hence independent and each $N(0, \sigma^{2}t/n)$. Therefore $\mathbb{E}(\Delta_j^{2}) = \sigma^{2}t/n$ and, using $\mathbb{E}(Y^{4}) = 3v^{2}$ for $Y \sim N(0,v)$,
$$
\mathrm{var}(\Delta_j^{2}) = 3\left(\frac{\sigma^{2}t}{n}\right)^{2} - \left(\frac{\sigma^{2}t}{n}\right)^{2} = \frac{2\sigma^{4}t^{2}}{n^{2}} .
$$
Summing over the $n$ independent terms,
$$
\mathbb{E}(Q_n) = \sigma^{2}t , \qquad \mathrm{var}(Q_n) = \frac{2\sigma^{4}t^{2}}{n} .
$$

**Step 2: mean-square convergence.** $\mathbb{E}\bigl((Q_n - \sigma^{2}t)^{2}\bigr) = \mathrm{var}(Q_n) = 2\sigma^{4}t^{2}/n \to 0$, which is convergence in mean square to the constant $\sigma^{2}t$. Note that the limit is deterministic although every $Q_n$ is random: the fluctuation is averaged away, the mean is not.

**Step 3: almost sure convergence along $n = 2^{k}$.** By Chebyshev's inequality (:ref[Markov, Chebyshev, Jensen and Chernoff inequalities]{to=prob.probability-inequalities}), for $\epsilon > 0$,
$$
\mathbb{P}\bigl( \lvert Q_{2^{k}} - \sigma^{2}t\rvert > \epsilon \bigr) \ \le \ \frac{2\sigma^{4}t^{2}}{\epsilon^{2}\,2^{k}} ,
$$
and these are summable in $k$. By the first Borel-Cantelli lemma the event on the left occurs for only finitely many $k$, almost surely, for each fixed $\epsilon$; taking $\epsilon = 1/i$ and intersecting the countably many full-probability events gives $Q_{2^{k}} \to \sigma^{2}t$ almost surely. (Summability is what is needed here; mean-square convergence alone would only give a subsequence.)

**Step 4: infinite total variation on one fixed interval.** Work on $[0,t]$; the argument on a general $[a,b]$ is the same with the origin shifted, because $s \mapsto W(a+s) - W(a)$ is again a Wiener process with the same parameter, by conditions 1 and 2. Let $V$ be the total variation of the path over $[0,t]$ and bound the quadratic variation by factoring out the largest increment:
$$
Q_n \ = \ \sum_{j} \Delta_j^{2} \ \le \ \Bigl( \max_{j} \lvert \Delta_j\rvert \Bigr) \sum_{j} \lvert \Delta_j \rvert \ \le \ \Bigl( \max_{j} \lvert \Delta_j\rvert \Bigr) \, V .
$$
Suppose $V < \infty$ on a path. The path is continuous on the compact interval $[0,t]$ by condition 3, hence uniformly continuous there, so $\max_j \lvert\Delta_j\rvert \to 0$ as the mesh $t/n$ tends to $0$. The displayed bound then forces $Q_n \to 0$. But by step 3, almost surely $Q_{2^{k}} \to \sigma^{2}t > 0$. So $V = \infty$ almost surely.

**Step 5: all intervals at once.** Step 4 gives, for each fixed interval, a full-probability event on which the variation over it is infinite; part 2 of the statement claims one full-probability event that works for every interval simultaneously, and the two are not the same thing, since there are uncountably many intervals. Let $\Omega_{a,b}$ be the event that the variation over $[a,b]$ is infinite, and put
$$
\Omega^{\ast} \ = \ \bigcap \bigl\{ \Omega_{a,b} \ : \ a < b, \ a, b \in \mathbb{Q}_{\ge 0} \bigr\} ,
$$
an intersection of countably many events of probability $1$, so $\mathbb{P}(\Omega^{\ast}) = 1$. Fix $\omega \in \Omega^{\ast}$ and let $[a,b]$ be *any* interval with $a < b$. Choose rationals $a'$ and $b'$ with $a \le a' < b' \le b$. Total variation is monotone under inclusion of intervals, because every partition of $[a',b']$ extends to a partition of $[a,b]$ and adjoining points can only increase the sum of absolute increments; hence the variation of this path over $[a,b]$ is at least its variation over $[a',b']$, which is infinite. So on $\Omega^{\ast}$ every interval carries infinite variation, which is part 2. $\square$
:::

:::remark[Where the hypotheses are used, and what fails without them]{provenance=adapted src="grimmett-stirzaker-2020:§13.2, equation (13.2.1) with properties (a)-(d), pp. 578-579, §13.3, p. 581, and §8.7, p. 423"}
**Independent increments** is used three times and in three different ways: to kill the cross term in the covariance computation, to make the blocks $D_{n,j}$ of the rescaled walk independent (which is what lets a product of characteristic functions appear at all), and to make the midpoint corrections $Z_j$ of the existence proof normal with a *known* variance. Drop it and nothing in this unit survives. Fractional Brownian motion with Hurst exponent $H \ne \tfrac12$ is Gaussian and self-similar with stationary increments, and Grimmett and Stirzaker report that its sample paths "may be taken to be" almost surely continuous and nowhere differentiable; but the only value of the exponent at which its increments come out independent is the Wiener value $H = \tfrac12$, and its covariance is not $\min\{s,t\}$.

**Finite non-zero variance of the step distribution** is where the scaling limit is decided. The compression $S_{\lfloor nt\rfloor}/\sqrt n$ is tuned to $\sigma^2 < \infty$: if the steps had infinite variance the central limit theorem would not apply and a different exponent, with a non-Gaussian stable limit, would be needed. Grimmett and Stirzaker make the same point in physical terms for the lattice walk of their §13.2: with lattice spacing $\delta$ and inter-jump time $\tau$ the limit is non-degenerate only if $\tfrac13\delta^{2}/\tau$ is held at a constant $\sigma^{2}$ as $\delta,\tau \downarrow 0$. If $\delta^{2}/\tau \to 0$ the displacement collapses to the constant $0$; if $\delta^{2}/\tau \to \infty$ its variance diverges. The factor $\tfrac13$ there is the probability of stepping along the chosen axis in their three-dimensional lattice; in our one-dimensional statement the corresponding constant is $\sigma^{2}$ itself.

**Zero mean of the steps** keeps the limit centred. With $\mathbb{E}(X_1) = \mu \ne 0$ the same calculation applied to $(S_{\lfloor nt\rfloor} - \mu\lfloor nt\rfloor)/\sqrt n$ gives a Wiener process, while $S_{\lfloor nt\rfloor}/n \to \mu t$: the walk is then dominated by its drift, and the Wiener process describes only the fluctuation around it.

**Continuity of paths is an extra condition, not a consequence.** The finite-dimensional distributions do not determine it. Take a Wiener process $W$ and an independent random time $U$, uniform on $[0,1]$, and define $\widetilde W(t) = W(t)$ for $t \ne U$ and $\widetilde W(U) = W(U) + 1$. For each *fixed* $t$ we have $\mathbb{P}(U = t) = 0$ and hence $\mathbb{P}(\widetilde W(t) = W(t)) = 1$, so every finite-dimensional distribution is unchanged; yet every path of $\widetilde W$ jumps at $U$, so no path of it is continuous. This is exactly why part 3 of the existence statement has content, and why the proof of it is the long one.

**Normality, not merely independence, fixes the size of the fluctuation.** Step 1 of the last proof uses $\mathbb{E}(Y^{4}) = 3v^{2}$, a property of the normal distribution; it is the normality supplied by condition 2, not merely independence, that gives $\mathrm{var}(Q_n) = O(1/n)$.

**What the scaling-limit statement does not say.** It is a statement about finitely many times at once. Convergence of the whole random *path* - as an element of the space of continuous functions, which would let one pass to the limit in quantities such as $\sup_{0\le s\le 1}W_n(s)$ - is Donsker's invariance principle, and it is not treated in the sources used here; our claim should not be read as asserting it.
:::

:::method[Computing with a Wiener process]{provenance=original}
Almost every elementary computation reduces to four moves.

1. **Re-express in increments.** Rewrite the quantity in terms of $W(t_1) - W(0), W(t_2) - W(t_1), \dots$ over disjoint intervals. These are independent and normal, so the joint law is a product of one-dimensional normals.
2. **Use the covariance for anything quadratic.** For means, variances and covariances of linear or quadratic functionals, do not integrate densities; use linearity together with $\mathrm{cov}(W(s),W(t)) = \sigma^{2}\min\{s,t\}$. For instance $\mathrm{var}(W(t)-W(s)) = \sigma^2 t - 2\sigma^2\min\{s,t\} + \sigma^2 s = \sigma^{2}\lvert t-s\rvert$.
3. **Use linearity to stay Gaussian.** Any finite linear combination $\sum_j \theta_j W(t_j)$ is a one-dimensional normal with mean $0$ and variance $\sum_{i,j}\theta_i\theta_j\sigma^{2}\min\{t_i,t_j\}$; a limit in distribution of such combinations (for example a limit of Riemann sums) is normal too, since the normal family is closed under limits in distribution. So probabilities about such quantities are read off a single standard normal table.
4. **Use the scaling law to remove parameters.** For standard $W$ and $c > 0$, the process $t \mapsto c^{-1/2}W(ct)$ is again a standard Wiener process, because it is Gaussian with mean zero and covariance $c^{-1}\min\{cs,ct\} = \min\{s,t\}$ and has continuous paths. (For a centred Gaussian process that covariance already forces the other two conditions: increments over disjoint intervals $[u,v]$ and $[s,t]$ with $u\le v\le s\le t$ have covariance $\min\{v,t\}-\min\{v,s\}-\min\{u,t\}+\min\{u,s\} = v-v-u+u = 0$, and jointly normal variables with zero covariance are independent, while $\mathrm{var}(W(t)-W(s)) = \lvert t-s\rvert$ by move 2.) Use it to reduce a question on $[0,T]$ to one on $[0,1]$.

A fifth move is to use the transition density when a genuine distribution function is wanted: conditionally on $W(s) = x$, $W(t)$ is $N(x, \sigma^{2}(t-s))$ for $t > s$.
:::

:::example[The time-average of a Brownian path]{provenance=original}
Let $W$ be a standard Wiener process ($\sigma^{2} = 1$, $W(0) = 0$) and let
$$
A \ = \ \int_0^1 W(s)\,ds .
$$
This integral makes sense path by path: every path is continuous by condition 3, hence Riemann integrable on $[0,1]$. We find the law of $A$, its correlation with the endpoint $W(1)$, and a numerical probability.

**Step 1: $A$ is normal.** Let $A_n = \frac1n\sum_{r=1}^{n} W(r/n)$ be the right-endpoint Riemann sum. Each $A_n$ is a finite linear combination of the $W(r/n)$, hence normal with mean $0$ by move 3 of the method. For each path, $A_n \to A$ as $n \to \infty$ by Riemann integrability, so $A_n \to A$ almost surely and therefore in distribution. The variances converge, since $\mathrm{var}(A_n) = n^{-2}\sum_{r,s \le n}\min\{r/n, s/n\}$ is a Riemann sum for the double integral evaluated in step 2, and a limit in distribution of $N(0,v_n)$ variables with $v_n \to v$ is $N(0,v)$. So $A$ is $N(0,v)$ with $v$ as computed next.

**Step 2: the variance.** Using $\mathbb{E}(W(s)W(u)) = \min\{s,u\}$ and exchanging expectation with the integrals,
$$
v = \mathbb{E}(A^{2}) = \int_0^1\!\!\int_0^1 \min\{s,u\}\,ds\,du = 2\int_0^1\!\!\int_0^{u} s \,ds\,du = 2\int_0^1 \frac{u^{2}}{2}\,du = \frac13 ,
$$
where the factor $2$ comes from the symmetry of $\min\{s,u\}$ in the two variables. So
$$
A \ \sim \ N\!\left(0, \tfrac13\right) , \qquad \mathrm{sd}(A) = 1/\sqrt3 = 0.577350 .
$$

**Step 3: correlation with the endpoint.** Likewise
$$
\mathrm{cov}\bigl(A, W(1)\bigr) = \int_0^1 \min\{s,1\}\,ds = \int_0^1 s\,ds = \tfrac12 ,
$$
so, since $\mathrm{sd}(W(1)) = 1$,
$$
\mathrm{corr}\bigl(A, W(1)\bigr) = \frac{1/2}{\sqrt{1/3}\cdot 1} = \frac{\sqrt3}{2} = 0.866025 .
$$
The average over $[0,1]$ and the final value are strongly but not perfectly correlated, as one expects: the average is dominated by the later part of the path, where the path has already moved.

**Step 4: a probability.** The chance that the path spends its first unit of time above the level $\tfrac12$ on average is
$$
\mathbb{P}\left( A > \tfrac12 \right) = \mathbb{P}\left( \frac{A}{1/\sqrt3} > \frac{\sqrt3}{2} \right) = 1 - \Phi\left(\tfrac{\sqrt3}{2}\right) = 1 - \Phi(0.866025) = 0.193238 ,
$$
with $\Phi$ the standard normal distribution function.

**Step 5: a check on the quadratic variation.** For the same process on $[0,3]$ with $n = 1000$ equal subintervals, the proof above gives $\mathbb{E}(Q_{1000}) = \sigma^{2}t = 3$ exactly and $\mathrm{sd}(Q_{1000}) = \sqrt{2\sigma^{4}t^{2}/n} = \sqrt{18/1000} = 0.134164$. A simulated path should return a value of $Q_{1000}$ within about $0.27$ of $3$ roughly $95\%$ of the time - a sharp and easily checked prediction, and one that fails for any process with differentiable paths, for which $Q_n \to 0$.
:::

:::application[Diffusion, the heat equation, and measuring molecules]{provenance=original}
**The transition density is the diffusion kernel.** Let $u(y,t)$ be the probability density of the position at time $t$ of a particle whose displacement is a Wiener process with parameter $\sigma^{2}$, started from a known point. By part 2 of the first statement, $u$ is the Gaussian kernel with variance $\sigma^{2}t$, which is exactly the fundamental solution of
$$
\frac{\partial u}{\partial t} = \frac{\sigma^{2}}{2}\,\frac{\partial^{2}u}{\partial y^{2}} ,
$$
the diffusion equation with diffusion coefficient $D = \sigma^{2}/2$ (see :ref[The heat kernel]{to=pde.heat-kernel}). Strauss states the correspondence in the other direction: the probability that a particle started at $x$ lies in $(a,b)$ at time $t$ is the integral of the source function over that interval, so a concentration profile transported by Brownian motion obeys the diffusion equation. The general version of this dictionary, for processes with drift and with a position-dependent diffusion coefficient, is :ref[The Fokker-Planck equation]{to=prob.fokker-planck}; the particular case in which the velocity rather than the position diffuses gives the Ornstein-Uhlenbeck process of :ref[Stochastic differential equations]{to=prob.stochastic-differential-equations}.

**Harmonic functions and the Dirichlet problem.** Strauss gives the companion steady-state statement: for Brownian motion in a container $D$, stopped the moment it reaches the boundary, the probability $u(x)$ that the particle stops on a chosen boundary piece $C_1$ satisfies $\Delta u = 0$ in $D$ with $u = 1$ on $C_1$ and $u = 0$ on the rest. This is a Dirichlet problem (:ref[Harmonic functions]{to=pde.harmonic-functions}), and it is the basis of "walk on spheres" Monte Carlo solvers, which estimate the potential at a single point of a complicated domain by simulating paths rather than meshing the domain.

**Einstein's relation and the size of a molecule.** The physically measurable content of the model is $\mathbb{E}\bigl((W(t)-W(0))^{2}\bigr) = \sigma^{2}t = 2Dt$: the mean square displacement grows linearly in time, not quadratically as it would for ballistic motion. For a sphere of radius $a$ in a fluid of viscosity $\eta$ at absolute temperature $T$, the Stokes-Einstein relation gives $D = k_{\mathrm{B}}T/(6\pi\eta a)$. For a bead of radius $a = 0.5\,\mu\mathrm{m}$ in water at $20\,^{\circ}\mathrm{C}$ ($\eta = 1.002\times10^{-3}\,\mathrm{Pa\,s}$, $T = 293\,\mathrm{K}$, $k_{\mathrm{B}} = 1.380649\times10^{-23}\,\mathrm{J\,K^{-1}}$),
$$
D = \frac{(1.380649\times10^{-23})(293)}{6\pi(1.002\times10^{-3})(0.5\times10^{-6})} = 4.2836\times10^{-13}\ \mathrm{m^{2}\,s^{-1}} = 0.4284\ \mu\mathrm{m^{2}\,s^{-1}} ,
$$
so after $10$ seconds the root-mean-square displacement along one axis is $\sqrt{2Dt} = \sqrt{8.567\times10^{-12}} = 2.93\,\mu\mathrm{m}$. Running this backwards - measure the displacements, infer $D$, and read off $k_{\mathrm{B}}$ and hence Avogadro's number - is Perrin's experiment, and it is why a theorem about path regularity has a place in a physics handbook.

**Where the irregularity matters.** The infinite total variation of part 2 of the path statement is not a curiosity. It means that integrals $\int H(s)\,dW(s)$ cannot be defined path by path as Stieltjes integrals, which is why a stochastic integral must be built as a limit in mean square instead, and why its chain rule carries the extra second-order term supplied by the quadratic variation $\sigma^{2}t$. That is the subject of :ref[The Ito integral and Ito's formula]{to=prob.ito-calculus}. It also means that a numerical simulation on a time grid of size $h$ reproduces increments of size $\sqrt h$, not $h$: halving the step size reduces the step length only by a factor $\sqrt2$, which is also why the error analysis of a Monte Carlo estimate of such a path functional behaves differently from that of an ordinary quadrature (:ref[Monte Carlo methods]{to=num.monte-carlo}).
:::
