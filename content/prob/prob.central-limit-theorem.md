---
id: prob.central-limit-theorem
title: The central limit theorem
kind: theorem
level: core
summary: Proves that the standardised sum of independent identically distributed variables with finite non-zero variance converges in distribution to the standard normal, by expanding the characteristic function to second order and applying the continuity theorem, and gives the Berry-Esseen rate, the continuity correction and the Cauchy example where the theorem fails.
prereqs: [prob.characteristic-functions, prob.generating-functions, prob.convergence-random-variables, prob.law-of-large-numbers]
provenance: adapted
sources:
  - work: grimmett-stirzaker-2020
    loc: "§5.10 Two limit theorems, pp. 217-220: Theorem (5.10.2) (law of large numbers) with its proof, Theorem (5.10.4) (Central limit theorem) and its characteristic-function proof, Theorem (5.10.5) (the Berry-Esseen bound with $C \\in (0.4906, 0.5600)$, and the Lyapunov-type sufficient condition for non-identically-distributed summands), and Theorem (5.10.6) (local central limit theorem) with the lattice form (5.10.9); §5.9, the continuity theorem (5.9.5), p. 214; §5.7, Theorem (5.7.4b) (the Taylor expansion of a characteristic function) and Theorems (5.7.5) and (5.7.6) (characteristic function of a sum and of an affine image), p. 205; §7.4, Example (7.4.10) (the Cauchy distribution), p. 373"
    pages: "205, 214, 217-220, 373"
    role: the statement of the theorem and the whole proof route (standardise, expand the characteristic function to second order, take the $n$th power, apply the continuity theorem); the continuity theorem and the expansion theorem it uses; the Berry-Esseen bound with its numerical constants; the local central limit theorem and its lattice form; the Cauchy example in which the theorem's hypotheses fail
  - work: folland-1999
    loc: "§10.3 The central limit theorem, pp. 325-327: Theorem 10.14 (the Fourier-analytic statement, that $\\lambda^{*n}$ rescaled by $\\sqrt n$ converges vaguely to the Gaussian) with its proof, Theorem 10.15 (The Central Limit Theorem) with its proof and the explicit limiting integral, the generalisation to arbitrary finite index sets $K_n$ with $\\mathrm{card}(K_n) \\to \\infty$, and Exercise 19 (the standardised sum does not converge in probability)"
    pages: "325-327"
    role: the convolution formulation of the theorem and the reading of it as a statement in Fourier analysis; the explicit limit for $\\mathbb{P}(\\cdot \\le a)$; the remark that the standardised sum does not converge in probability; the normalisation convention $\\hat\\lambda(\\xi) = \\int e^{-2\\pi i \\xi x} d\\lambda(x)$, recorded here because it changes the form of the limit
  - work: rhb-2006
    loc: "§30.10 The central limit theorem, pp. 1195-1196: the statement for independent $X_i$ with individual densities $f_i(x)$, means $\\mu_i$ and variances $\\sigma_i^2$, the elementary proofs of properties (i) and (ii), the moment-generating-function derivation of property (iii), the remark excluding the Cauchy distribution, and the log-normal corollary for products"
    pages: "1195-1196"
    role: the physicists' statement for independent but differently distributed summands and the moment-generating-function route to it; the exact proofs of the mean and variance of the sample mean; the corollary that a product of many positive independent factors is log-normal
---

:::note[What the theorem is for]{provenance=original}
The law of large numbers says that $S_n/n$ settles on the mean $\mu$; it says nothing about the error. The central limit theorem says what the error looks like: $S_n - n\mu$ is of order $\sqrt n$, and after division by $\sigma\sqrt n$ its distribution approaches the standard normal — *whatever the distribution of the summands*, provided only that it has a finite non-zero variance.

Two consequences follow, and they are why the theorem is used daily. First, every error bar computed from a sample mean, every $\chi^{2}$ test and every $\pm 1\sigma$ quoted in an experimental paper rests on it. Second, it explains why the Gaussian is so ubiquitous in nature: any quantity built as a sum of many small independent contributions is approximately Gaussian, and the details of the contributions wash out. The theorem is also the reason that "$\sqrt N$ noise" is the default expectation for a counting experiment.

What it does *not* say matters too. The convergence is of distribution functions only, it is not uniform in the tails without extra assumptions, and it fails outright for heavy-tailed summands. All three limitations appear below.
:::

:::definition[Standardised sums, the normal distribution function, and the characteristic function]{provenance=adapted src="grimmett-stirzaker-2020:§5.10, the set-up of Theorem (5.10.4) and its proof, pp. 217-218, together with §5.7, Theorems (5.7.4b), (5.7.5) and (5.7.6), p. 205"}
Let $X_1, X_2, \dots$ be **independent** random variables with partial sums $S_n = X_1 + \cdots + X_n$; this is the set-up Grimmett and Stirzaker work in. If the $X_i$ also have a common mean $\mu$ and a common finite variance $\sigma^{2} > 0$, the **standardised sum** is

$$
U_n = \frac{S_n - n\mu}{\sqrt{n\sigma^{2}}} ,
$$

which has mean $0$ and variance $1$ for every $n$. The mean is $0$ by linearity of expectation alone. The variance is $1$ because **independence makes variances additive**, $\operatorname{var}(S_n) = \sum_{i\le n}\operatorname{var}(X_i) = n\sigma^{2}$, so that dividing by $\sqrt{n\sigma^{2}}$ divides the variance by $n\sigma^{2}$; uncorrelatedness of the $X_i$ would already be enough for this step. The hypothesis is not decorative: if every $X_i$ is one and the same variable $X$, each has mean $\mu$ and variance $\sigma^{2}$, but $S_n = nX$, so $U_n = \sqrt n\,(X - \mu)/\sigma$ and $\operatorname{var}(U_n) = n$. The factor $\sqrt n$ in the denominator is calibrated to independent summands and to nothing else. We write $N(0,1)$ for the standard normal distribution, with density $(2\pi)^{-1/2}e^{-x^{2}/2}$ and distribution function

$$
\Phi(z) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{z} e^{-t^{2}/2}\,dt .
$$

The **characteristic function** of a random variable $X$ is $\varphi_X(t) = \mathbb{E}\bigl(e^{itX}\bigr)$, $t \in \mathbb{R}$ (see :ref[Characteristic functions]{to=prob.characteristic-functions}). It is defined for every $X$, unlike the moment generating function, which is why it is the right tool here. Three of its properties are used below, all from :ref[Characteristic functions]{to=prob.characteristic-functions}:

- **Sums.** If $X$ and $Y$ are independent then $\varphi_{X+Y}(t) = \varphi_X(t)\varphi_Y(t)$.
- **Affine images.** If $Y = aX + b$ with $a,b$ real then $\varphi_Y(t) = e^{itb}\varphi_X(at)$.
- **Expansion.** If $\mathbb{E}\lvert X^{k}\rvert < \infty$ then
  $$
  \varphi_X(t) = \sum_{j=0}^{k} \frac{\mathbb{E}(X^{j})}{j!}\,(it)^{j} + o(t^{k}) \qquad \text{as } t \to 0 ,
  $$
  and $\varphi_X^{(k)}(0) = i^{k}\mathbb{E}(X^{k})$.

**A convention to watch.** Folland proves the theorem as a statement about Fourier transforms of measures with his normalisation $\hat\lambda(\xi) = \int e^{-2\pi i \xi x}\,d\lambda(x)$, under which the limit function is $e^{-2\pi^{2}\xi^{2}}$ rather than $e^{-t^{2}/2}$. The two differ only by the substitution $t = -2\pi\xi$; we use the probabilists' convention $\varphi(t) = \mathbb{E}(e^{itX})$ throughout, as Grimmett and Stirzaker do, and the limit is then $e^{-t^{2}/2}$. Nothing else changes.
:::

:::statement[Convergence of a standardised sum to the normal law]{provenance=adapted src="grimmett-stirzaker-2020:§5.10, Theorem (5.10.4), p. 217; folland-1999:§10.3, Theorem 10.15, p. 326"}
Suppose $X_1, X_2, \dots$ are mutually independent and all carry one and the same distribution, and suppose that this common distribution has a finite mean $\mu$ together with a variance $\sigma^{2}$ which is finite and **strictly positive**. Write $S_n$ for the $n$th partial sum. Then

$$
\frac{S_n - n\mu}{\sqrt{n\sigma^{2}}} \ \xrightarrow{\ \mathrm{D}\ } \ N(0,1) \qquad \text{as } n \to \infty .
$$

The symbol on the right names a distribution, not a variable, so the arrow is being stretched; Grimmett and Stirzaker point this out and accept it, on the ground that mode 4 of :ref[Convergence of random variables]{to=prob.convergence-random-variables} constrains nothing but the distribution functions. Written out, the conclusion is

$$
\mathbb{P}\!\left( \frac{1}{\sigma\sqrt n}\sum_{j=1}^{n}\bigl(X_j - \mu\bigr) \ \le \ a \right) \ \longrightarrow \ \frac{1}{\sqrt{2\pi}}\int_{-\infty}^{a} e^{-t^{2}/2}\,dt \ = \ \Phi(a) \qquad \text{for every } a \in \mathbb{R} ,
$$

and here *every* real $a$ may be taken, with no exclusion of discontinuity points, because $\Phi$ is continuous everywhere.

Folland states the same theorem as a fact about convolutions. If $\lambda$ is a Borel probability measure on $\mathbb{R}$ with $\int t\,d\lambda = 0$ and $\int t^{2}\,d\lambda = 1$, let $\lambda^{*n}$ be the $n$-fold convolution of $\lambda$ with itself and define $\lambda_n(E) = \lambda^{*n}\bigl(\sqrt n\,E\bigr)$. Then $\lambda_n$ converges vaguely to the standard Gaussian measure. This is the same statement — $\lambda^{*n}$ is the distribution of $S_n$ and the rescaling by $\sqrt n$ is the standardisation — but phrased so that the theorem is visibly a theorem about the Fourier transform of a measure.

**Extensions.** Folland notes that the same argument gives the conclusion along arbitrary finite index sets: if $K_n \subset \mathbb{N}$ are finite with $k_n = \operatorname{card}(K_n) \to \infty$, then $(\sigma\sqrt{k_n})^{-1}\sum_{j \in K_n}(X_j - \mu)$ also converges in distribution to the standard normal. Grimmett and Stirzaker give a version for independent but not identically distributed summands in Theorem (5.10.5), quoted in the remark below together with its rate.
:::

:::idea{provenance=original}
Characteristic functions turn the hard operation into the easy one. Adding independent random variables multiplies their characteristic functions, so the distribution of a sum of $n$ copies is encoded in the $n$th power of one function — and an $n$th power is something one can take a limit of.

Then the whole theorem is a single limit from calculus. Standardise so that the summands have mean $0$ and variance $1$. The expansion of a characteristic function to second order at the origin gives

$$
\varphi(t) = 1 - \tfrac12 t^{2} + o(t^{2}) ,
$$

with the linear term absent because the mean is zero and the quadratic coefficient equal to $-\tfrac12$ because the variance is one. Dividing the sum by $\sqrt n$ evaluates $\varphi$ at $t/\sqrt n$, which makes the correction of size $t^{2}/(2n)$, and

$$
\Bigl(1 - \frac{t^{2}}{2n} + o(n^{-1})\Bigr)^{\! n} \ \longrightarrow \ e^{-t^{2}/2} ,
$$

the standard limit $(1 + x/n)^{n} \to e^{x}$. The limit is the characteristic function of $N(0,1)$, and the continuity theorem says that pointwise convergence of characteristic functions to a function continuous at the origin is equivalent to convergence of the distribution functions. That is the proof.

Two things explain the theorem's universality. The scaling $\sqrt n$ is forced: it is the only power that makes the variance of the normalised sum constant. And only two numbers from the distribution of $X$ survive the limit, namely $\mu$ and $\sigma^{2}$, because the expansion is cut at second order and everything beyond is $o(t^{2})$ — divided by $n$, it vanishes. The normal law is what is left when a distribution is asked to remember only its first two moments.
:::

:::proof[The central limit theorem]{provenance=adapted src="grimmett-stirzaker-2020:§5.10, proof of Theorem (5.10.4), p. 218, using Theorems (5.7.4b), (5.7.5), (5.7.6) and the continuity theorem (5.9.5)"}
**Step 1: standardise the summands.** Put

$$
Y_i = \frac{X_i - \mu}{\sigma} , \qquad i \ge 1 .
$$

The $Y_i$ are independent and identically distributed, with $\mathbb{E}(Y_i) = 0$ and $\mathbb{E}(Y_i^{2}) = \operatorname{var}(Y_i) = 1$. This is where $\sigma^{2} \ne 0$ is needed: the division is otherwise undefined, and indeed with $\sigma = 0$ the sum is deterministic and there is nothing to standardise. Write $\varphi_Y$ for the one characteristic function shared by every $Y_i$. Re-expressed through the $Y_i$,

$$
U_n = \frac{S_n - n\mu}{\sqrt{n\sigma^{2}}} = \frac{1}{\sqrt n}\sum_{i=1}^{n} Y_i .
$$

**Step 2: the characteristic function of $U_n$.** Independence turns the characteristic function of a sum into a product of individual ones, and because all the factors coincide the product collapses to a power:
$$
\varphi_{Y_1 + \cdots + Y_n}(t) = \varphi_Y(t)^{n} .
$$
Dividing by $\sqrt n$ is an affine map, so by the affine rule with $a = n^{-1/2}$ and $b = 0$,
$$
\psi_n(t) \ := \ \varphi_{U_n}(t) = \varphi_Y\!\bigl(t/\sqrt n\bigr)^{n} .
$$
Independence and identical distribution are both used here and nowhere else in the proof.

**Step 3: expand $\varphi_Y$ to second order.** The $Y_i$ have a finite second moment, so the expansion theorem applies with $k = 2$:
$$
\varphi_Y(s) = 1 + \mathbb{E}(Y)\,(is) + \tfrac12\mathbb{E}(Y^{2})\,(is)^{2} + o(s^{2}) = 1 - \tfrac12 s^{2} + o(s^{2}) \qquad \text{as } s \to 0 ,
$$
the linear term vanishing because $\mathbb{E}(Y) = 0$ and the quadratic coefficient being $\tfrac12 \cdot 1 \cdot i^{2} = -\tfrac12$ because $\mathbb{E}(Y^{2}) = 1$. Finiteness of the variance is exactly the hypothesis that licenses $k = 2$; with only a finite first moment one gets $\varphi_Y(s) = 1 + o(s)$, which is enough for the law of large numbers but not for this theorem.

**Step 4: take the $n$th power.** Fix $t \in \mathbb{R}$ and substitute $s = t/\sqrt n$, which tends to $0$ as $n \to \infty$:
$$
\psi_n(t) = \left( 1 - \frac{t^{2}}{2n} + o\!\left(\frac{t^{2}}{n}\right) \right)^{\! n} .
$$
Taking logarithms of the bracket for $n$ large enough that it lies near $1$, and using $\log(1+z) = z + o(z)$ as $z \to 0$,
$$
\log \psi_n(t) = n\log\left(1 - \frac{t^{2}}{2n} + o(n^{-1})\right) = n\left(-\frac{t^{2}}{2n} + o(n^{-1})\right) = -\frac{t^{2}}{2} + o(1) ,
$$
so $\psi_n(t) \to e^{-t^{2}/2}$ for every fixed $t$. The $o(n^{-1})$ is where all the higher moments of $X$ went: multiplied by $n$ it still vanishes, which is why they do not appear in the answer.

**Step 5: identify the limit and invoke the continuity theorem.** Now $e^{-t^{2}/2}$ is precisely what $N(0,1)$ has for its characteristic function, and at the origin it is continuous with value $1$. Part (b) of the continuity theorem (Grimmett and Stirzaker (5.9.5)) says this: when a sequence of characteristic functions has a pointwise limit that is continuous at the origin, that limit belongs to some distribution function, and the distribution functions of the sequence converge to it. Feeding $\psi_n$ into that gives $U_n \xrightarrow{\mathrm{D}} N(0,1)$.

Because $\Phi$ is continuous on all of $\mathbb{R}$, convergence in distribution here means $\mathbb{P}(U_n \le a) \to \Phi(a)$ at every real $a$, with no exceptional set. $\square$

**The same proof in Folland's language.** Folland proves step 3-5 for a measure rather than a random variable. The hypotheses $\int t\,d\lambda = 0$, $\int t^{2}\,d\lambda = 1$ make $\hat\lambda$ of class $C^{2}$ with $\hat\lambda(0) = 1$, $\hat\lambda{}'(0) = 0$ and $\hat\lambda{}''(0) = -4\pi^{2}$; Taylor's theorem then gives $\hat\lambda(\xi) = 1 - 2\pi^{2}\xi^{2} + o(\xi^{2})$, the convolution identity $\widehat{\lambda^{*n}} = (\hat\lambda)^{n}$ plays the role of step 2, and $\log(1+z) = z + o(z)$ gives $\hat\lambda_n(\xi) \to e^{-2\pi^{2}\xi^{2}}$. The limiting exponent differs from ours only through his Fourier normalisation, as recorded in the definition block. He then converts vague convergence of measures into the statement about $\mathbb{P}(\,\cdot \le a)$.
:::

:::remark[Where the hypotheses are used, the rate, and what fails]{provenance=adapted src="grimmett-stirzaker-2020:§5.10, Theorem (5.10.5) and Theorem (5.10.6) with (5.10.9), pp. 218-220, and §7.4, Example (7.4.10), p. 373; folland-1999:§10.3, Exercise 19, p. 327; rhb-2006:§30.10, p. 1195"}
**Finite variance.** Used in step 3, to expand to second order, and in step 1, where $\sigma \ne 0$ makes the standardisation possible. If $\sigma^2 = 0$ then $X_i = \mu$ almost surely and $U_n$ is not defined; if $\sigma^{2} = \infty$ the normalising constant $\sqrt{n\sigma^{2}}$ is undefined too, so the theorem is not false but unformulated — there is no standardised sum to speak of. What one can say in that case is negative: the expansion of $\varphi$ stops at first order, and no normalisation of $S_n$ by a power of $n$ need produce a normal limit at all, as the Cauchy example immediately below shows. Riley, Hobson and Bence make the same point in words, noting that the probability density functions must possess formal means and variances and that the theorem therefore does not apply if any $X_i$ is Cauchy distributed.

**The Cauchy failure, explicitly.** Let the $X_i$ be independent with the Cauchy density $1/\bigl(\pi(1+x^{2})\bigr)$, whose characteristic function is $\varphi(t) = e^{-\lvert t\rvert}$. Then for every $n$,
$$
\varphi_{S_n/n}(t) = \varphi(t/n)^{n} = \bigl(e^{-\lvert t\rvert/n}\bigr)^{n} = e^{-\lvert t\rvert} ,
$$
so $S_n/n$ is Cauchy distributed for every $n$: the average of $n$ observations has exactly the distribution of one observation. No normalisation by any power of $n$ produces a normal limit, because $e^{-|t|}$ is not of the form $1 - \tfrac12 t^2 + o(t^2)$ — it is not even differentiable at $0$. Both of this chapter's limit theorems — the central limit theorem and the law of large numbers — fail here, and for one and the same reason.

**Independence.** Used in step 2 to factorise the characteristic function. The theorem has many extensions to dependent summands, all of which replace independence by some quantitative statement that the dependence is short-ranged; none is a free lunch.

**Identical distribution is not necessary, but something must replace it.** Grimmett and Stirzaker's Theorem (5.10.5) covers independent $X_j$ with $\mathbb{E}X_j = 0$, $\operatorname{var}(X_j) = \sigma_j^{2}$ and $\mathbb{E}\lvert X_j^{3}\rvert = t_j$, all finite and positive, with $\sigma(n)^{2} = \operatorname{var}(S_n) = \sum_{j \le n}\sigma_j^{2}$. Part (b) of that theorem states that
$$
\frac{1}{\sigma(n)^{3}}\sum_{j=1}^{n} t_j \ \longrightarrow \ 0
\qquad\Longrightarrow\qquad
\frac{S_n}{\sigma(n)} \ \xrightarrow{\ \mathrm{D}\ } \ N(0,1) ,
$$
a Lyapunov-type condition saying that no single summand dominates the sum. Riley, Hobson and Bence state the non-identically-distributed case without such a condition — their statement asks only that each $f_i$ possess a mean and a variance — and prove it by expanding each moment generating function to second order and multiplying. Their derivation is the right calculation and gives the right answer in the cases of practical interest, and we follow it in the application below; but we state the theorem in the identically distributed form of Grimmett and Stirzaker and quote their Theorem (5.10.5) when the summands differ, because that is the form in which an extra hypothesis on the third moments is supplied. A reader who needs the differently-distributed case should check the condition displayed above.

**The rate: Berry-Esseen.** Part (a) of the same theorem gives a uniform error bound. There is an absolute constant $C \in (0.4906, 0.5600)$ with
$$
\sup_{z \in \mathbb{R}} \left\lvert \mathbb{P}\!\left(\frac{S_n}{\sigma(n)} \le z\right) - \Phi(z) \right\rvert \ \le \ \frac{C}{\sigma(n)^{3}}\sum_{j=1}^{n} t_j .
$$
For i.i.d. summands with $\mathbb{E}\lvert X_1^{3}\rvert = t$ and variance $\sigma^{2}$ this reads $C t/(\sigma^{3}\sqrt n)$: the error decays like $n^{-1/2}$, and no faster in general. Note what the bound controls — the supremum of the *absolute* error in the distribution function. It says nothing useful about a relative error far out in the tail, where both the probability and its normal approximation are much smaller than $n^{-1/2}$. The example below shows this concretely.

**The theorem does not give convergence in probability.** Folland's Exercise 19 records that the sequence $U_n$ does not converge in probability, for any sequence satisfying the hypotheses: the subsequence $U_{2^{k}}$ is not Cauchy in probability. So convergence in distribution is genuinely all that is on offer, and the normalised sum is a permanent example of the gap discussed in :ref[Convergence of random variables]{to=prob.convergence-random-variables}.

**Densities, and the local theorem.** Convergence of distribution functions does not imply convergence of densities. Grimmett and Stirzaker's local central limit theorem (5.10.6) supplies the density version under a smoothness hypothesis: if the $X_i$ have zero mean, unit variance and a characteristic function with $\int_{-\infty}^{\infty}\lvert\varphi(t)\rvert^{r}\,dt < \infty$ for some integer $r \ge 1$, then for $n \ge r$ the density $g_n$ of $U_n$ exists and $g_n(x) \to (2\pi)^{-1/2}e^{-x^{2}/2}$ uniformly in $x$. For lattice-valued summands taking values in $\{a, a\pm h, a \pm 2h, \dots\}$ with $h$ maximal, the corresponding statement is $(\sqrt n/h)\,\mathbb{P}(U_n = x) \to (2\pi)^{-1/2}e^{-x^{2}/2}$, uniformly over the admissible $x$. The factor $\sqrt n/h$ is the reason for the continuity correction used in the example.
:::

:::method[Using the normal approximation on a sum]{provenance=original}
1. **Compute the exact mean and variance of the sum.** $\mathbb{E}S_n = n\mu$ and $\operatorname{var}(S_n) = n\sigma^{2}$ for i.i.d. summands; $\sum_j\mu_j$ and $\sum_j\sigma_j^{2}$ in general. Do not approximate these — the theorem approximates the shape, not the moments.
2. **Standardise the *event*, not the variable.** Rewrite the probability you want as $\mathbb{P}(U_n \le z)$ with $z = (a - \mathbb{E}S_n)/\sqrt{\operatorname{var}(S_n)}$, then read off $\Phi(z)$.
3. **Apply a continuity correction if the summands are lattice-valued.** For integer-valued $S_n$, replace the event $\{S_n \ge k\}$ by $\{S_n \ge k - \tfrac12\}$ and $\{S_n \le k\}$ by $\{S_n \le k + \tfrac12\}$ before standardising. This costs nothing and typically improves the accuracy by an order of magnitude; the local central limit theorem is the reason it works.
4. **Bound the error with Berry-Esseen before trusting a small answer.** Compute $Ct/(\sigma^{3}\sqrt n)$ with $C = 0.56$. If that number is comparable to the probability you have just estimated, the estimate's *relative* accuracy is unknown, and a tail bound from :ref[Markov, Chebyshev, Jensen and Chernoff inequalities]{to=prob.probability-inequalities} or a large-deviation estimate from :ref[Large deviations and Cramer's theorem]{to=prob.large-deviations} is the appropriate tool instead.
5. **Check the hypotheses are not violated in spirit.** A sum dominated by one or two large terms, or built from a heavy-tailed distribution, will not be normal however large $n$ is. For differently distributed summands, check the Lyapunov condition $\sigma(n)^{-3}\sum_j t_j \to 0$.
:::

:::example[Four hundred coin tosses, with and without the continuity correction]{provenance=original}
A fair coin is tossed $n = 400$ times and $S_n$ counts the heads. What is $\mathbb{P}(S_n \ge 220)$, that is, the chance of at least $55\%$ heads?

**Step 1: moments of the sum.** The tosses are i.i.d. indicators with $\mu = \tfrac12$ and $\sigma^{2} = pq = \tfrac14$, so
$$
\mathbb{E}S_n = 400 \times \tfrac12 = 200 , \qquad \operatorname{var}(S_n) = 400\times\tfrac14 = 100 , \qquad \text{s.d.} = 10 .
$$
The event is a deviation of exactly two standard deviations.

**Step 2: naive standardisation.** With $z = (220-200)/10 = 2.00$,
$$
\mathbb{P}(S_n \ge 220) \ \approx \ 1 - \Phi(2.00) = 0.022750 .
$$

**Step 3: with the continuity correction.** $S_n$ is integer-valued, so $\{S_n \ge 220\} = \{S_n \ge 219.5\}$ as far as the lattice is concerned, giving $z = (219.5-200)/10 = 1.95$ and
$$
\mathbb{P}(S_n \ge 220) \ \approx \ 1 - \Phi(1.95) = 0.025588 .
$$

**Step 4: the exact answer.** Summing the binomial mass function,
$$
\mathbb{P}(S_n \ge 220) = \sum_{k=220}^{400} \binom{400}{k} 2^{-400} = 0.025520 .
$$
So the uncorrected approximation is in error by $2.770\times 10^{-3}$, an eleven per cent relative error, while the corrected one is in error by $6.79\times 10^{-5}$, a relative error of $0.27$ per cent. The correction has bought a factor of forty.

**Step 5: the Berry-Esseen bound, and what it does and does not tell us.** Centre the tosses: $X_j - \tfrac12 = \pm\tfrac12$, so $t_j = \mathbb{E}\lvert X_j - \tfrac12\rvert^{3} = \tfrac18$ and $\sigma_j^{2} = \tfrac14$. Then $\sigma(n)^{2} = 100$, $\sigma(n)^{3} = 1000$ and $\sum_{j\le 400} t_j = 400/8 = 50$, so the bound is
$$
\sup_z \bigl\lvert \mathbb{P}(S_n/10 - 20 \le z) - \Phi(z)\bigr\rvert \ \le \ \frac{C \times 50}{1000} = 0.05\,C \ \in \ (0.02453,\ 0.02800) .
$$
This is *larger than the probability we just estimated*, so Berry-Esseen offers no guarantee at all about the relative accuracy of the answer in step 3 — exactly the warning in step 4 of the method. The bound is nevertheless close to being attained: the largest absolute discrepancy between the exact binomial distribution function and the uncorrected normal one, computed over all $401$ values of $k$, is
$$
\max_{k} \left\lvert \mathbb{P}(S_n \le k) - \Phi\!\left(\frac{k-200}{10}\right) \right\rvert = 0.019935 ,
$$
attained at $k = 200$ and equal to exactly half the central atom, $\tfrac12\mathbb{P}(S_n = 200) = \tfrac12 \times 0.039869$. That is no coincidence: a lattice distribution function jumps by $\mathbb{P}(S_n = k)$ at each $k$ while $\Phi$ rises continuously, so the uncorrected sup error can never be smaller than half the largest atom. Berry-Esseen's $0.0245$ is within $25$ per cent of that unavoidable floor, which is why one should not expect to improve the constant $C$ by much.

**Step 6: the moral.** In the body of the distribution, where the probability is comparable to $1$, the normal approximation with a continuity correction is excellent at $n = 400$. Two standard deviations out it is still good to a fraction of a per cent. At ten standard deviations — the regime of the example in :ref[Markov, Chebyshev, Jensen and Chernoff inequalities]{to=prob.probability-inequalities} — it would be worthless as a relative estimate, and the right tool is an exponential bound. The central limit theorem controls the middle of the distribution; large-deviation theory controls the edge.
:::

:::application[Error bars, counting noise, random walks and log-normal products]{provenance=original}
**Error bars and confidence intervals.** The standard error of a sample mean is $\sigma/\sqrt n$, and the statement that $\hat\mu \pm 1.96\,\sigma/\sqrt n$ is a $95\%$ interval is the central limit theorem plus a table of $\Phi$. Everything in :ref[Confidence intervals]{to=stats.confidence-intervals} and :ref[Hypothesis testing]{to=stats.hypothesis-testing} that invokes a normal or a $t$ distribution for a mean rests on this theorem, which is why those methods are robust to the shape of the parent distribution but not to heavy tails or to a few dominant observations.

**Counting noise.** A detector recording independent arrivals in a fixed window produces a count that is a sum of many independent indicators, so by the theorem it is approximately normal with standard deviation $\sqrt{\operatorname{var}}$. For Poisson arrivals of mean $N$ the variance is also $N$, giving the ubiquitous $\sqrt N$ noise and relative precision $N^{-1/2}$: a million counts gives a tenth of a per cent. The example above is the same calculation for a binomial counter, and it shows how good the approximation is at moderate $N$.

**Random walks and diffusion.** The position of a random walker after $n$ independent steps of mean $0$ and variance $\sigma^{2}$ is $S_n$, so $S_n/(\sigma\sqrt n)$ is asymptotically standard normal: the walk's displacement spreads like $\sqrt n$ with a Gaussian profile. Taking the limit of the walk as a process rather than at a single time is the construction of :ref[Brownian motion]{to=prob.brownian-motion}, and the Gaussian transition density that appears there is this theorem's limit. The same statement in continuum language is that the fundamental solution of the diffusion equation is a Gaussian whose width grows as $\sqrt{t}$ — see :ref[The heat kernel]{to=pde.heat-kernel} — so the central limit theorem and the heat kernel are two readings of one fact.

**Sums of unequal contributions.** Riley, Hobson and Bence state the theorem for independent $X_i$ with individually different densities $f_i$, means $\mu_i$ and variances $\sigma_i^{2}$, and record the two elementary facts that come for free: $\mathbb{E}(Z) = n^{-1}\sum_i\mu_i$ for $Z = n^{-1}\sum_i X_i$, which needs no independence at all, and $\operatorname{var}(Z) = n^{-2}\sum_i\sigma_i^{2}$, which does. Their moment-generating-function derivation then gives the Gaussian limit with that mean and variance. This is the form used in error propagation: a measurement assembled from many independent sources of error of differing sizes is approximately Gaussian with variance the sum of the individual variances — the content of :ref[Error propagation]{to=stats.error-propagation} — provided no single source dominates, which is the Lyapunov condition quoted in the remark.

**Products, and the log-normal distribution.** If $W = X_1X_2\cdots X_n$ with the $X_i$ independent and positive, then $\log W = \sum_i \log X_i$ is a sum, so by the theorem $\log W$ is asymptotically normal and $W$ is asymptotically **log-normal**, provided each $\log X_i$ has a mean and a variance. Riley, Hobson and Bence draw exactly this corollary. It is the reason log-normal distributions appear wherever a quantity is built multiplicatively: particle sizes after repeated fragmentation, incomes, cascade amplitudes, and the output of a chain of noisy gains.
:::
