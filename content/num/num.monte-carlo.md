---
id: num.monte-carlo
title: Monte Carlo methods
kind: method
level: core
summary: Turns an integral into the mean of a random variable, so that the law of large numbers computes it and the central limit theorem supplies an error bar; shows that the root-mean-square error is $\sigma/\sqrt{n}$ whatever the dimension, which is why the method is used above four dimensions and not below; and derives importance sampling and the Metropolis algorithm as the two ways of changing the sampling distribution when the obvious one is too noisy or unavailable.
prereqs: [prob.law-of-large-numbers, prob.central-limit-theorem, prob.markov-chain-convergence, prob.expectation-variance]
provenance: adapted
sources:
  - work: rhb-2006
    loc: "§27.4.4 (Monte Carlo methods): the reduction of any integral to $\\theta=\\int_0^1 f(x)\\,\\mathrm{d}x$ (27.48), the requirement that the estimator $t$ be unbiased, $\\mathrm{E}[t]=\\theta$, and that the method report the variance of the estimate rather than a certainty interval, the crude estimator (27.49), stratified sampling (27.50) with its variance, the importance-sampling construction through a normalised $G$ with $G(1)=1$ and the identity $\\theta=\\int_0^1 (f/g)\\,\\mathrm{d}G$ with its worked comparison for $f=(\\tan^{-1}x)^{1/2}$ against $g=x^{1/2}(1-x^{2}/6)$, control variates (27.51), antithetic variates, the hit-or-miss method and the reduction (27.52) to a unit square, the octahedron volume as a multidimensional example, the linear congruential generator $x_i=ax_{i-1}+c \\pmod m$ with $c$ odd and $a=4k+1$, the inverse-transform rule $y=F^{-1}(\\xi)$ with the Cauchy worked example, look-up tables, and the central-limit recipe (27.55) for Gaussian variates, pp. 1009–1018"
    pages: "1009-1018"
    role: the framing of Monte Carlo integration as the construction of an unbiased estimator whose variance is the error measure; crude Monte Carlo; the importance-sampling identity and the statement that the variance falls when $f/g$ is nearly constant; hit-or-miss and the multidimensional example; and the generation machinery — linear congruential generators and inverse-transform sampling
  - work: grimmett-stirzaker-2020
    loc: "§2.6 (Monte Carlo simulation): simulation as a substitute for an intractable calculation, Example (3) (integration), the hit-or-miss technique with $(X,Y)$ uniform on the unit square and success declared when $Y\\le g(X)$ so that the success probability is $I$, the appeal to the law of averages (2.2.1), the warning about pseudo-random generators and about not knowing how many repetitions are needed, and the attribution of the name to Metropolis, von Neumann and Ulam at Los Alamos, pp. 43–45; Exercise (4.11.12) (Importance sampling): the estimator $J=n^{-1}\\sum_r g(Y_r)f_X(Y_r)/f_Y(Y_r)$ for $I=\\mathrm{E}(g(X))$, the equivalence condition that $f_X$ and $f_Y$ vanish together, and the three conclusions $\\mathrm{E}(J)=I$, $\\mathrm{var}(J)=n^{-1}[\\mathrm{E}(g(Y)^2f_X(Y)^2/f_Y(Y)^2)-I^{2}]$ and $J\\to I$ almost surely, with the remark naming $f_Y$ the importance density, pp. 142–143; §6.14 (Markov chain Monte Carlo): the two requirements (a) and (b) on the chain, the restriction to reversible chains through the detailed balance equations (6.14.3), the proposal matrix $H$ and acceptance matrix $A$, the transition probabilities (6.14.4), the Hastings choice (6.14.5) $a_{ij}=1\\wedge(\\pi_jh_{ji})/(\\pi_ih_{ij})$, Example (6.14.6) (Gibbs sampler), Example (6.14.8) (Metropolis algorithm, $a_{ij}=1\\wedge\\pi_j/\\pi_i$ for symmetric $H$), the Ising model Example (6.14.2), and the burn-in estimator $n^{-1}\\sum_{r=M}^{M+n-1}g(X_r)$ with the remark that $M$ is notoriously hard to choose, pp. 330–333"
    pages: "43-45, 142-143, 330-333"
    role: the statement that the hit-or-miss success probability is the integral and that the law of averages is what licenses the estimate; the importance-sampling estimator with its exact mean and variance and the name "importance density"; and the Metropolis-Hastings construction — proposal and acceptance matrices, the acceptance formula forced by detailed balance, the symmetric-proposal special case, and the burn-in prescription
---

:::definition[The estimator, and the three ways of choosing the samples]{provenance=adapted src="rhb-2006:§27.4.4, Eqs. (27.48)–(27.49), pp. 1011–1012; grimmett-stirzaker-2020:§2.6, Example (3), p. 44; grimmett-stirzaker-2020:Exercise (4.11.12), pp. 142–143; grimmett-stirzaker-2020:§6.14, Eqs. (6.14.3)–(6.14.5) and Example (6.14.8), pp. 331–332"}
Every integral is an expectation. If $D\subseteq\mathbb{R}^{d}$ has finite volume $\lvert D\rvert$ and $X$ is uniform on $D$, then

$$
\theta=\int_D g(x)\,\mathrm{d}x=\lvert D\rvert\,\mathrm{E}\bigl[g(X)\bigr] ,
$$

and more generally, for any probability density $p$ that is positive wherever $g$ is non-zero,

$$
\theta=\int_D g(x)\,\mathrm{d}x=\mathrm{E}_p\!\left[\frac{g(Y)}{p(Y)}\right],\qquad Y\sim p .
$$

A **Monte Carlo method** estimates $\theta$ by drawing samples and averaging. Three choices of sampling distribution give the three methods of this unit. Throughout, $X_1,X_2,\dots$ are independent and $\xi_1,\xi_2,\dots$ are independent and uniform on $[0,1)$.

**1. Crude Monte Carlo.** Sample uniformly. Riley, Hobson and Bence first reduce the problem by a change of variable to the standard form $\theta=\int_0^1 f(x)\,\mathrm{d}x$ and then estimate it by

$$
\hat\theta_n=\frac1n\sum_{i=1}^{n}f(\xi_i) .
$$

They insist on two properties of any such scheme: the estimator must be **unbiased**, $\mathrm{E}[\hat\theta_n]=\theta$, and the method must report the **variance** of the estimate — a statistical statement, not an interval inside which the answer is guaranteed to lie.

A variant, the **hit-or-miss method**, estimates the area under a curve by the proportion of random points in a bounding box that fall below it: if $0\le f\le1$ on $[0,1]$ and $(\xi_{2i-1},\xi_{2i})$ are uniform on the unit square, the fraction of $i$ with $\xi_{2i}\le f(\xi_{2i-1})$ estimates $\theta$, because that event has probability exactly $\theta$. It is simpler and, as the remark below shows, always noisier.

**2. Importance sampling.** Sample from a density $p$ of our choosing and correct by the likelihood ratio. For $\theta=\mathrm{E}[g(X)]$ with $X$ of density $q$, choose a density $p$ that vanishes exactly where $q$ does and put

$$
\hat\theta_n^{\,\mathrm{IS}}=\frac1n\sum_{i=1}^{n} w(Y_i)\,g(Y_i),
\qquad
w(y)=\frac{q(y)}{p(y)},
\qquad Y_i\sim p \text{ independent} .
$$

Grimmett and Stirzaker call $p$ the **importance density**. The point is to put the samples where $\lvert g\rvert q$ is large; the price is that one must be able to sample from $p$.

**3. Markov chain Monte Carlo.** When $\pi$ is a distribution on a finite set $\Theta$ known only up to its normalising constant, as a Boltzmann weight $\pi(\vartheta)=Z^{-1}\mathrm{e}^{-\beta E(\vartheta)}$ is, independent sampling from $\pi$ is out of reach. Instead build a Markov chain with stationary distribution $\pi$ and average along a single trajectory. Grimmett and Stirzaker's recipe has two ingredients: a **proposal matrix** $H=(h_{ij})$, any stochastic matrix that is cheap to simulate, and an **acceptance matrix** $A=(a_{ij})$ with $0\le a_{ij}\le1$. From state $i$ one draws $j$ with probability $h_{ij}$ and moves there with probability $a_{ij}$, staying put otherwise, so that

$$
p_{ij}=h_{ij}a_{ij}\ (i\ne j),
\qquad
p_{ii}=1-\sum_{k\ne i}h_{ik}a_{ik} .
$$

The **Hastings** choice of acceptance probability is

$$
a_{ij}=\min\left\{1,\ \frac{\pi_j h_{ji}}{\pi_i h_{ij}}\right\} ,
$$

and when the proposal is symmetric, $h_{ij}=h_{ji}$, this reduces to the **Metropolis** rule

$$
a_{ij}=\min\left\{1,\ \frac{\pi_j}{\pi_i}\right\} .
$$

Both depend on $\pi$ only through ratios, so the unknown constant $Z$ never appears. The estimator, allowing a **burn-in** of $M$ discarded steps, is

$$
\hat\theta^{\,\mathrm{MC}}_{M,n}=\frac1n\sum_{r=M}^{M+n-1} g(X_r) .
$$
:::

:::statement[What the three estimators cost]{provenance=adapted src="rhb-2006:§27.4.4, pp. 1011–1012; grimmett-stirzaker-2020:Exercise (4.11.12), pp. 142–143; grimmett-stirzaker-2020:§6.14, Eqs. (6.14.3)–(6.14.5), pp. 331–332"}
**1. Crude Monte Carlo.** Let $f$ be measurable on $[0,1]$ with $\theta=\int_0^1f$ and $\sigma^{2}=\int_0^1 f^{2}-\theta^{2}<\infty$. Then for every $n$

$$
\mathrm{E}\bigl[\hat\theta_n\bigr]=\theta,
\qquad
\operatorname{Var}\bigl[\hat\theta_n\bigr]=\frac{\sigma^{2}}{n},
\qquad
\sqrt{\mathrm{E}\bigl[(\hat\theta_n-\theta)^{2}\bigr]}=\frac{\sigma}{\sqrt n} .
$$

Moreover $\hat\theta_n\to\theta$ almost surely; and if in addition $\sigma>0$, then $\sqrt n(\hat\theta_n-\theta)/\sigma$ converges in distribution to a standard normal, so that

$$
\Pr\Bigl(\lvert\hat\theta_n-\theta\rvert\le 1.96\,\frac{s_n}{\sqrt n}\Bigr)\longrightarrow 0.95,
\qquad
s_n^{2}=\frac{1}{n-1}\sum_{i=1}^{n}\bigl(f(\xi_i)-\hat\theta_n\bigr)^{2} .
$$

(The hypothesis $\sigma>0$ is not cosmetic: for $f$ constant the ratio is $0/0$, $s_n$ vanishes identically, and the probability on the left is $1$ for every $n$, not $0.95$.)

**2. Dimension.** None of this mentions the dimension. In $d$ dimensions, with $\theta=\int_{[0,1]^d}f$ and $\sigma^{2}=\operatorname{Var}f(X)$ for $X$ uniform on the cube, the same three statements hold verbatim. By contrast a product quadrature rule of order $p$ (:ref[]{to=num.quadrature}) with $k$ nodes per axis uses $n=k^{d}$ points and has error $O(k^{-p})=O(n^{-p/d})$. Hence

$$
\text{Monte Carlo is asymptotically the better rate exactly when } d>2p .
$$

For the trapezoidal rule ($p=2$) the crossover is $d=4$; for Simpson's rule ($p=4$) it is $d=8$.

**3. Importance sampling.** With $q$, $p$, $w=q/p$ and $Y_i\sim p$ as in the definition, and assuming $\mathrm{E}_p[(wg)^{2}]<\infty$,

$$
\mathrm{E}\bigl[\hat\theta^{\,\mathrm{IS}}_n\bigr]=\theta,
\qquad
\operatorname{Var}\bigl[\hat\theta^{\,\mathrm{IS}}_n\bigr]=\frac{1}{n}\left(\int \frac{g^{2}q^{2}}{p}-\theta^{2}\right),
$$

and $\hat\theta^{\,\mathrm{IS}}_n\to\theta$ almost surely. The variance is minimised, over all densities $p$ that are positive wherever $gq\neq0$, by

$$
p^{\ast}(y)=\frac{\lvert g(y)\rvert q(y)}{\int\lvert g\rvert q} ,
$$

for which the variance is $\bigl(\int\lvert g\rvert q\bigr)^{2}-\theta^{2}$, and this is zero when $g$ does not change sign. The class competed over here is wider than the one the definition allows: $p^{\ast}$ vanishes wherever $g$ does, so if $g=0$ on a set where $q>0$ then $p^{\ast}$ is not a density that "vanishes exactly where $q$ does". That is harmless — the estimator needs $p>0$ only where $gq\neq0$, since the summand $wg$ is zero elsewhere — but the two conditions are different, and it is the weaker one that the optimality is proved over. The ideal is unusable — it needs the answer — but it says what to aim at: make $w g$ nearly constant.

**4. Markov chain Monte Carlo.** Let $\pi$ be positive on a finite $\Theta$, let $H$ be a stochastic matrix with $h_{ij}>0$ exactly when $h_{ji}>0$, and let $P$ be built with the Hastings acceptance probabilities. Then $P$ satisfies the detailed balance equations $\pi_ip_{ij}=\pi_jp_{ji}$, so $\pi$ is stationary for $P$ and the chain is reversible. If $P$ is in addition irreducible and aperiodic then, by :ref[]{to=prob.markov-chain-convergence},

$$
\hat\theta^{\,\mathrm{MC}}_{M,n}\longrightarrow\sum_{\vartheta}g(\vartheta)\pi(\vartheta)
\quad\text{almost surely as } n\to\infty,\ \text{for every } M \text{ and every starting state},
$$

and the distribution of $X_n$ approaches $\pi$ geometrically at the rate $\lvert\lambda_2\rvert$, the second largest eigenvalue modulus of $P$. For large $n$ the variance of the estimator is

$$
\operatorname{Var}\bigl[\hat\theta^{\,\mathrm{MC}}_{M,n}\bigr]\ \sim\ \frac{\gamma_0\,\tau}{n},
\qquad
\tau=1+2\sum_{k=1}^{\infty}\rho_k,
\qquad
\rho_k=\frac{\gamma_k}{\gamma_0},\qquad
\gamma_k=\operatorname{Cov}_\pi\bigl(g(X_0),g(X_k)\bigr) ,
$$

so $n/\tau$ correlated samples are worth $n$ independent ones. The quantity $\tau$ is the **integrated autocorrelation time**; it exceeds $1$ when successive states are positively correlated, which is the usual case, and can be less than $1$.
:::

:::idea{provenance=original}
The law of large numbers is a numerical method. Write the quantity you want as an average over a probability distribution, draw from that distribution, and average: convergence is guaranteed by :ref[]{to=prob.law-of-large-numbers}, and the central limit theorem (:ref[]{to=prob.central-limit-theorem}) converts the convergence into an error bar computed from the same samples that produced the answer. Nothing in that argument knows how many variables there are, which is the whole reason the method exists: a product quadrature rule must pay $k^{d}$ points to resolve $k$ scales per axis, while a Monte Carlo estimate pays $\sigma^{2}/\epsilon^{2}$ points for accuracy $\epsilon$ no matter what $d$ is.

The price is the rate: $n^{-1/2}$ is slow, and nothing improves it, because it is the central limit theorem. What *can* be improved is $\sigma$, and the two refinements do exactly that. Importance sampling changes the measure so that the quantity being averaged is more nearly constant, which is the only thing that makes a variance small. The Metropolis algorithm changes the measure in the opposite situation, where the target distribution is known only up to a constant: it gives up independence, building instead a chain whose equilibrium is the target, and buys that with a loss of efficiency measured by the autocorrelation time.

The acceptance formula is not guessed. Demand detailed balance — that the chain in equilibrium runs the same backwards as forwards — write out what that requires of $a_{ij}$, and the condition is a single equation in the ratio $a_{ij}/a_{ji}$. Taking each $a$ as large as that equation allows gives the minimum, and it involves $\pi$ only through ratios, which is why an unknown partition function is no obstacle.
:::

:::proof[Parts 1–4]{provenance=adapted src="grimmett-stirzaker-2020:Exercise (4.11.12), pp. 142–143; grimmett-stirzaker-2020:§6.14, Eqs. (6.14.3)–(6.14.5), p. 332"}
**1.** Each $f(\xi_i)$ has mean $\theta$ and variance $\sigma^{2}$, so $\mathrm{E}[\hat\theta_n]=\theta$ by linearity. Since the $\xi_i$ are independent, the variances add (:ref[]{to=prob.expectation-variance}):

$$
\operatorname{Var}\bigl[\hat\theta_n\bigr]=\frac1{n^{2}}\sum_{i=1}^{n}\operatorname{Var}\bigl[f(\xi_i)\bigr]=\frac{\sigma^{2}}{n} .
$$

Because the estimator is unbiased, its mean square error *is* its variance, which gives the third formula. Almost sure convergence is the strong law of :ref[]{to=prob.law-of-large-numbers}, which needs only $\mathrm{E}\lvert f(\xi)\rvert<\infty$ — weaker than the variance hypothesis. The normal limit is :ref[]{to=prob.central-limit-theorem} applied to the i.i.d. summands $f(\xi_i)$; replacing $\sigma$ by the sample standard deviation $s_n$ is legitimate because $s_n\to\sigma$ almost surely and Slutsky's lemma lets a convergent-in-probability factor be substituted into a weak limit.

**2.** The computation in part 1 used independence and the two moments of $f(\xi)$ and nothing else, so it is insensitive to the domain. For the comparison, a product rule of order $p$ has error $Ck^{-p}$ per axis with $k$ nodes per axis, hence $n=k^{d}$ and error $Cn^{-p/d}$. Setting $n^{-p/d}=n^{-1/2}$ gives $p/d=1/2$; for $d>2p$ the exponent $p/d$ is smaller than $1/2$ and the deterministic rule is asymptotically worse.

**3.** Since $p>0$ wherever $q>0$, the substitution is legitimate and

$$
\mathrm{E}\bigl[w(Y)g(Y)\bigr]=\int \frac{q(y)}{p(y)}g(y)\,p(y)\,\mathrm{d}y=\int g\,q=\theta ,
$$

so each summand is unbiased and so is the average. The summands are independent with common variance $\mathrm{E}_p[(wg)^{2}]-\theta^{2}=\int g^{2}q^{2}/p-\theta^{2}$, and dividing by $n$ gives the stated variance; the strong law gives almost sure convergence. For the optimal density, apply the Cauchy–Schwarz inequality in the form

$$
\left(\int \lvert g\rvert q\right)^{2}=\left(\int \frac{\lvert g\rvert q}{\sqrt p}\cdot\sqrt p\,\right)^{2}\le \int\frac{g^{2}q^{2}}{p}\cdot\int p=\int\frac{g^{2}q^{2}}{p} ,
$$

using $\int p=1$. So $\int g^{2}q^{2}/p$ is at least $(\int\lvert g\rvert q)^{2}$ for every $p$ that is positive wherever $gq\neq0$ (read $g^{2}q^{2}/p$ as $0$ on the set where $gq$ and $p$ both vanish, which is what the estimator does), and equality holds exactly when $\lvert g\rvert q/\sqrt p$ is a constant multiple of $\sqrt p$, that is when $p\propto\lvert g\rvert q$. Substituting $p=p^{\ast}$ gives the variance $(\int\lvert g\rvert q)^{2}-\theta^{2}$, which vanishes when $\lvert\int gq\rvert=\int\lvert g\rvert q$, that is when $g$ has one sign.

**4. Detailed balance forces the acceptance rule.** For $i\ne j$ the requirement $\pi_ip_{ij}=\pi_jp_{ji}$ reads

$$
\pi_i h_{ij}a_{ij}=\pi_j h_{ji}a_{ji},
\qquad\text{that is}\qquad
\frac{a_{ij}}{a_{ji}}=\frac{\pi_j h_{ji}}{\pi_i h_{ij}}=:R_{ij} ,
$$

with $R_{ji}=1/R_{ij}$. Any pair $(a_{ij},a_{ji})$ in $[0,1]^{2}$ with that ratio will do; taking the larger of the two equal to $1$ gives the largest admissible pair, namely $a_{ij}=\min\{1,R_{ij}\}$ and $a_{ji}=\min\{1,1/R_{ij}\}$ — exactly the Hastings formula, which is therefore the choice that rejects as rarely as possible. The diagonal entries satisfy detailed balance trivially. Since detailed balance implies stationarity (sum $\pi_ip_{ij}=\pi_jp_{ji}$ over $i$ and use $\sum_ip_{ji}=1$), $\pi$ is stationary and the chain is reversible; both statements, and the convergence of the $n$-step probabilities and the geometric rate $\lvert\lambda_2\rvert$, are proved in :ref[]{to=prob.markov-chain-convergence}. The almost sure convergence of the time average is the ergodic theorem for an irreducible positive-recurrent chain; it holds for every starting state, so the burn-in $M$ affects the finite-$n$ bias but not the limit.

**The autocorrelation formula.** In equilibrium $\{g(X_r)\}$ is stationary (:ref[]{to=prob.stationary-processes}), so $\operatorname{Cov}(g(X_r),g(X_s))=\gamma_{\lvert r-s\rvert}$ and

$$
\operatorname{Var}\Bigl[\frac1n\sum_{r=0}^{n-1}g(X_r)\Bigr]
=\frac{1}{n^{2}}\sum_{r,s=0}^{n-1}\gamma_{\lvert r-s\rvert}
=\frac{1}{n}\left(\gamma_0+2\sum_{k=1}^{n-1}\Bigl(1-\frac kn\Bigr)\gamma_k\right) ,
$$

counting the $n-k$ pairs at lag $k$ for each $k\ge1$. If $\sum_k\lvert\gamma_k\rvert<\infty$, which geometric mixing guarantees, dominated convergence lets $n\to\infty$ inside and the bracket tends to $\gamma_0+2\sum_{k\ge1}\gamma_k=\gamma_0\tau$. $\square$
:::

:::remark[Where the hypotheses are used, and the traps]{provenance=original}
**Finite variance is the hypothesis that matters.** The strong law needs only $\mathrm{E}\lvert f\rvert<\infty$, so the estimator converges; but if $\sigma^{2}=\infty$ the error bar is meaningless, the central limit theorem does not apply, and the sample standard deviation $s_n$ wanders without settling — while the running mean, deceptively, still looks as though it is converging. This is the characteristic failure of an importance density with tails lighter than $\lvert g\rvert q$: then $w g$ has heavy tails, $\int g^{2}q^{2}/p$ diverges, and the estimator is worse than the crude one it was meant to improve, yet it reports a small error bar until a rare large $w$ arrives. The safe habit is to choose $p$ with tails at least as heavy as $q$ and to monitor $\max_i w(Y_i)/\sum_i w(Y_i)$.

**Unbiasedness is not automatic for a ratio.** When $q$ is known only up to a constant, one uses the *self-normalised* estimator $\sum_i w_ig(Y_i)/\sum_i w_i$. It is consistent but biased at order $1/n$; the bias is harmless beside the $n^{-1/2}$ noise, but it means two such estimates may not be averaged naively.

**Hit-or-miss is always worse than crude.** With $0\le f\le1$, the hit-or-miss indicator has variance $\theta(1-\theta)=\mathrm{E}[f]-\theta^{2}\ \ge\ \mathrm{E}[f^{2}]-\theta^{2}=\sigma^{2}$, since $f^{2}\le f$ on $[0,1]$. It also spends two random numbers per sample instead of one. Its merits are elsewhere: it needs no bound on $f$ beyond the box, and it generalises immediately to a region of complicated shape, which is Riley, Hobson and Bence's octahedron example.

**The crossover in part 2 is asymptotic and the constants matter.** At $d=10$ with a smooth integrand, a sparse grid or a quasi-random (low-discrepancy) sequence will usually beat plain Monte Carlo in practice — but not for the reason the rates suggest, and the rate bound must not be offered as the explanation. The Koksma–Hlawka bound for a low-discrepancy sequence is $O\bigl(n^{-1}(\log n)^{d}\bigr)$, and at $d=10$ that bound is *worse* than $n^{-1/2}$ throughout every range anyone computes in. Comparing the two, $(\log n)^{d}n^{-1/2}$ equals $1$ when $d\log\log n=\tfrac12\log n$; at $d=10$ this gives $\log n=89.995$, that is $n=1.2\times10^{39}$, and below that the quasi-random bound is the larger one — by a factor $4.4\times10^{7}$ at $n=10^{4}$, worst of all ($4.6\times10^{8}$) near $n=\mathrm{e}^{2d}=4.9\times10^{8}$, and still $1.1$ at $n=10^{39}$. What actually wins is that the bound is grossly pessimistic for an integrand of low effective dimension, where the observed error behaves like $n^{-1}$ with no power of $\log n$ in evidence. The rate bound therefore settles the question in neither direction at $d=10$. The honest statement of the case for Monte Carlo is not the rate alone but the rate *together with* the fact that the method needs nothing from the integrand — no smoothness, no product structure, no description of the domain beyond the ability to test membership.

**Burn-in and ergodicity are different questions.** Part 4 says the time average converges for any $M$, including $M=0$: discarding a burn-in is about reducing bias at finite $n$, not about correctness. The hard practical question is $\tau$, not $M$, and Grimmett and Stirzaker are explicit that deciding when a chain is near equilibrium is notoriously difficult. What makes $\tau$ large is a chain that moves slowly through the state space; the acceptance rule is the usual culprit, since a proposal that is too bold is almost always rejected and a proposal that is too timid moves nowhere.

**Detailed balance is sufficient, not necessary.** Part 4 builds a reversible chain because reversibility makes the construction easy and the spectral bound explicit. A chain can have $\pi$ stationary without being reversible, and such chains are deliberately used to reduce $\tau$.
:::

:::method[Running a Monte Carlo calculation]{provenance=original}
1. **Write the target as an expectation.** Identify $\theta=\mathrm{E}_p[h(Y)]$ for some density $p$ you can sample and some $h$ you can evaluate. For $\int_D g$ over a complicated $D$ inside a box $B$, take $p$ uniform on $B$ and $h=\lvert B\rvert\,g\,\mathbf{1}_D$.
2. **Generate the uniforms.** :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§27.4.4, p. 1017"} give the linear congruential recipe $x_i=ax_{i-1}+c \pmod m$ with $\xi_i=x_i/m$, where $c$ is odd and $a=4k+1$, which runs through all $m$ values before repeating; they take $m$ a large power of two. Any modern library generator is better, but fix and record the seed: a Monte Carlo result that cannot be reproduced cannot be debugged.
3. **Transform to the distribution you want.** If $F$ is the distribution function of the target and $F^{-1}$ is available, $Y=F^{-1}(\xi)$ has distribution $F$, because $\Pr(F^{-1}(\xi)\le y)=\Pr(\xi\le F(y))=F(y)$; this is the inverse-transform rule of :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§27.4.4, p. 1017"}, who also give the look-up table for a discrete or tabulated $F$. When $F^{-1}$ has no closed form, use rejection, a look-up table, or a special-purpose transformation.
4. **Run and accumulate.** Keep running sums of $h$ and $h^{2}$; never store the samples. After $n$ draws report
   $$
   \hat\theta_n\pm 1.96\,\frac{s_n}{\sqrt n},
   \qquad
   s_n^{2}=\frac{n}{n-1}\left(\frac{1}{n}\sum h_i^{2}-\hat\theta_n^{2}\right) .
   $$
5. **Decide how many samples.** Inverting the error formula, a target root-mean-square error $\epsilon$ needs $n=\sigma^{2}/\epsilon^{2}$. Estimate $\sigma$ from a short pilot run. Halving the error costs four times the work; one more decimal digit costs a hundred times.
6. **Reduce the variance before increasing $n$.** Factor out what you can integrate: if $g\approx \tilde g$ with $\int\tilde g$ known, estimate $\int(g-\tilde g)$ instead (a control variate). Or sample from $p\propto\tilde g$ (importance sampling). Either way the figure of merit is variance $\times$ cost per sample, since doubling the cost per sample to halve the variance is a wash.
7. **If you cannot sample the target, build a chain.** Choose a symmetric proposal $H$, use $a_{ij}=\min\{1,\pi_j/\pi_i\}$, and tune the proposal so that a sensible fraction of moves is accepted. Discard a burn-in, then estimate $\tau$ from the empirical autocorrelations and quote the error as $\sqrt{\gamma_0\tau/n}$, not $\sqrt{\gamma_0/n}$ — the second is the commonest way to publish an error bar that is too small by a factor of several.
:::

:::example[An error function, an importance density, and a three-state Metropolis chain]{provenance=original}
**(a) Crude Monte Carlo and its exact variance.** Estimate

$$
\theta=\int_0^1 \mathrm{e}^{-x^{2}}\,\mathrm{d}x=\frac{\sqrt\pi}{2}\operatorname{erf}(1)=0.746824132812
$$

(:ref[]{to=spec.error-function}). The crude estimator is $\hat\theta_n=n^{-1}\sum \mathrm{e}^{-\xi_i^{2}}$. Its variance constant is exactly computable: writing $J(a)=\int_0^1\mathrm{e}^{-at^{2}}\mathrm{d}t$,

$$
\sigma^{2}=J(2)-J(1)^{2}=0.598144006661-0.557746285351=0.040397721310,
\qquad \sigma=0.200991844 .
$$

So an accuracy of $10^{-3}$ needs $n=\sigma^{2}/10^{-6}=40398$ samples.

**(b) An importance density, chosen and used.** The integrand falls from $1$ to $\mathrm{e}^{-1}=0.3679$, so sample more near $0$. Take the linear density

$$
p(y)=\tfrac23(2-y)\ \text{ on }[0,1],
\qquad
P(y)=\int_0^y p=\frac{4y-y^{2}}{3} ,
$$

which is positive throughout $[0,1]$ — so the ratio $w=1/p$ is bounded — and invertible in closed form: solving $P(y)=\xi$, that is $y^{2}-4y+3\xi=0$, and taking the root in $[0,1]$ gives

$$
y=2-\sqrt{4-3\xi} .
$$

The weight is $w(y)g(y)=\mathrm{e}^{-y^{2}}\big/\bigl[\tfrac23(2-y)\bigr]=\dfrac{3\,\mathrm{e}^{-y^{2}}}{2(2-y)}$, and by part 3 its variance is

$$
\sigma^{2}_{\mathrm{IS}}=\int_0^1\frac{\mathrm{e}^{-2y^{2}}}{p(y)}\,\mathrm{d}y-\theta^{2}
=0.562409079663-0.557746285351=0.004662794312,
\qquad \sigma_{\mathrm{IS}}=0.068284656 .
$$

The variance has dropped by the factor $0.040397721/0.004662794=8.664$: the same accuracy now needs $n=4663$ samples instead of $40398$. (The weight ranges only over $[0.5518,\,0.8064]$ on $[0,1]$: its smallest value there is $wg(1)=0.551819$ and its largest is $wg(1-1/\sqrt2)=0.806444$, at the stationary point $y=1-1/\sqrt2=0.292893$ of $\log wg$. That near-constancy is the reason for the gain, since part 3 says the variance measures how far $wg$ is from constant.)

**(c) The two estimators on the same ten numbers.** Generate $\xi_i$ with the congruential recipe of step 2, taking $m=2^{31}$, $a=1103515245$, $c=12345$ and $x_0=1$:

$$
\xi=(0.5138701,\ 0.1757413,\ 0.3086515,\ 0.5345339,\ 0.9476279,\ 0.1717363,\ 0.7022312,\ 0.2264307,\ 0.4947734,\ 0.1247203).
$$

Crude: averaging $\mathrm{e}^{-\xi_i^{2}}$ gives $\hat\theta_{10}=0.8104593$, an error of $+0.063635$. The predicted standard deviation is $\sigma/\sqrt{10}=0.0635592$ — the error landed at $1.001$ standard deviations.

Importance sampling, on the *same* ten uniforms: $y_i=2-\sqrt{4-3\xi_i}$ gives

$$
y=(0.4320747,\ 0.1364614,\ 0.2467044,\ 0.4519695,\ 0.9243066,\ 0.1332405,\ 0.6240253,\ 0.1777190,\ 0.4139106,\ 0.0958364),
$$

and averaging $3\mathrm{e}^{-y_i^{2}}/[2(2-y_i)]$ gives $\hat\theta^{\,\mathrm{IS}}_{10}=0.7675041$, an error of $+0.020680$ against a predicted standard deviation $\sigma_{\mathrm{IS}}/\sqrt{10}=0.0215935$ — $0.958$ standard deviations. Ten samples is far too few to demonstrate anything statistically, and that is the point of quoting the predicted deviations: the two errors are where they should be, and the two predicted deviations differ by the factor $\sqrt{8.664}=2.94$ that part 3 forecast.

**(d) A Metropolis chain small enough to do exactly.** Take $\Theta=\{1,2,3\}$ with target $\pi\propto(1,2,3)$, so $\pi=(\tfrac16,\tfrac13,\tfrac12)$, and the symmetric proposal "pick one of the other two states at random", $h_{ij}=\tfrac12$ for $i\ne j$. The Metropolis rule $a_{ij}=\min\{1,\pi_j/\pi_i\}$ gives, for instance, $a_{12}=\min\{1,2\}=1$ and $a_{21}=\min\{1,\tfrac12\}=\tfrac12$, hence $p_{12}=\tfrac12$ and $p_{21}=\tfrac14$. Carrying this out for every pair:

$$
P=\begin{pmatrix}
0 & \tfrac12 & \tfrac12\\[2pt]
\tfrac14 & \tfrac14 & \tfrac12\\[2pt]
\tfrac16 & \tfrac13 & \tfrac12
\end{pmatrix} .
$$

*Checks.* Rows sum to $1$. Detailed balance: $\pi_1p_{12}=\tfrac16\cdot\tfrac12=\tfrac1{12}$ and $\pi_2p_{21}=\tfrac13\cdot\tfrac14=\tfrac1{12}$; $\pi_1p_{13}=\tfrac1{12}=\tfrac12\cdot\tfrac16=\pi_3p_{31}$; $\pi_2p_{23}=\tfrac13\cdot\tfrac12=\tfrac16=\tfrac12\cdot\tfrac13=\pi_3p_{32}$. So $\pi P=\pi$, as part 4 promises.

*Rate.* The characteristic polynomial of $P$ factorises as $\lambda(\lambda-1)(\lambda+\tfrac14)$, so the spectrum is $\{1,-\tfrac14,0\}$ and the second largest eigenvalue modulus is $\lvert\lambda_2\rvert=\tfrac14$. Starting from state $1$, the exact $n$-step row is

$$
p_{1\cdot}(n)=\Bigl(\tfrac16+\tfrac{2}{3}\bigl(-\tfrac14\bigr)^{n},\ \ \tfrac13-\tfrac{2}{3}\bigl(-\tfrac14\bigr)^{n},\ \ \tfrac12\Bigr),\qquad n\ge1
$$

— the third component is exactly right after a single step, because the third column of $P$ is constant. Hence, in the normalisation of :ref[]{to=prob.markov-chain-convergence},

$$
d_{\mathrm{TV}}\bigl(p_{1\cdot}(n),\pi\bigr)=\tfrac43\,4^{-n}
= \tfrac13,\ \tfrac1{12},\ \tfrac1{48},\ \tfrac1{192},\dots\ \text{ for } n=1,2,3,4 .
$$

The reversible spectral bound of that unit gives, with $N=3$, $\lvert\lambda_2\rvert=\tfrac14$ and the $\pi$-orthonormal right eigenvectors $v_1=(1,1,1)$, $v_2=(-2,1,0)$, $v_3=(1,1,-1)$ (each already of unit norm for $\langle x,y\rangle=\sum\pi_ix_iy_i$), $\sup_r\lvert v_r(1)\rvert=2$ and so $d_{\mathrm{TV}}\le 6\cdot4^{-n}$. True value $\tfrac43 4^{-n}$: the bound has the rate exactly right and the prefactor too large by $4.5$.

*Efficiency.* Estimate $\theta=\mathrm{E}_\pi[g]$ with $g(i)=i$, so $\theta=\tfrac16+\tfrac23+\tfrac32=\tfrac73$. Then $\gamma_0=\operatorname{Var}_\pi g=6-\tfrac{49}{9}=\tfrac59$, and expanding $g$ in the eigenbasis gives $\gamma_k=\tfrac19(-\tfrac14)^{k}$ for $k\ge1$ (the $\lambda=0$ mode contributes only at $k=0$). Hence

$$
\tau=1+2\sum_{k\ge1}\frac{\gamma_k}{\gamma_0}
=1+2\cdot\frac95\cdot\frac19\cdot\frac{-\tfrac14}{1+\tfrac14}
=1-\frac{2}{25}=\frac{23}{25}=0.92 ,
$$

so the predicted variance of the time average is $\gamma_0\tau/n=\tfrac{23}{45n}=0.511111/n$. Computing the variance exactly from the finite-$n$ formula of the proof gives $0.0514667$ at $n=10$ and $0.00511467$ at $n=100$, against the predictions $0.0511111$ and $0.00511111$. Note $\tau<1$: successive states are *negatively* correlated, because a Metropolis move from state $1$ never stays put, so this chain is very slightly more efficient than independent sampling. That is unusual, and it happens here only because the chain mixes in essentially one step.
:::

:::application[Where the method earns its keep]{provenance=original}
**Statistical mechanics.** The canonical average $\langle A\rangle=Z^{-1}\sum_{\vartheta}A(\vartheta)\mathrm{e}^{-\beta E(\vartheta)}$ over the $2^{L^{d}}$ configurations of a lattice model cannot be enumerated or sampled directly, and $Z$ is not known. The Metropolis rule needs neither: a single spin flip changes the energy by a local amount $\Delta E$ and is accepted with probability $\min\{1,\mathrm{e}^{-\beta\Delta E}\}$. This is the original application — the algorithm was published for exactly this problem in the early 1950s — and it remains the standard tool for lattice gauge theory, for polymer and protein conformations, and for phase diagrams. Near a critical point $\tau$ diverges with system size, which is the critical slowing down discussed in :ref[]{to=prob.markov-chain-convergence}.

**Particle transport and radiation.** Neutron transport, radiotherapy dose planning and detector response are all high-dimensional integrals over particle histories, with geometry too complicated for a mesh. Each simulated history is one sample, variance reduction is done by splitting and Russian roulette in the regions that matter, and the reported dose carries a statistical error bar computed exactly as in step 4. Grimmett and Stirzaker record that the name and the method date from the Los Alamos work of Metropolis, von Neumann and Ulam in the 1940s, where this was the problem.

**Financial valuation.** The price of a path-dependent option is an expectation under a risk-neutral measure over paths of the stochastic differential equation of :ref[]{to=prob.stochastic-differential-equations}; the dimension is the number of time steps, often hundreds, so no quadrature rule is possible. Importance sampling is used in precisely the form of part 3 to price deep out-of-the-money options, where the payoff is non-zero on an event of probability $10^{-4}$, so that $10^{8}$ crude paths would produce only $10^{4}$ non-zero ones and the other $99.99\%$ of the work would be wasted.

**Bayesian inference.** The posterior $\pi(\vartheta\mid x)\propto f(x\mid\vartheta)\pi(\vartheta)$ is known up to its normalising constant by construction, which is the situation part 4 was built for; Markov chain Monte Carlo is what made Bayesian analysis of large structured models practical, and Grimmett and Stirzaker open their treatment with this example. The quantity a practitioner must report alongside a posterior mean is the effective sample size $n/\tau$, which is the content of part 4's variance formula.

**And where it does not.** For a smooth one-dimensional integral, Monte Carlo is absurd: Gauss–Legendre quadrature (:ref[]{to=num.quadrature}) gets twenty digits from twenty points, while Monte Carlo would need some $10^{39}$ samples (step 5 with $\epsilon=7.5\times10^{-21}$ gives $n=\sigma^{2}/\epsilon^{2}=7.2\times10^{38}$). The method is for problems whose dimension or whose geometry defeats a grid, and for nothing else.
:::
