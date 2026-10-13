---
id: prob.random-variables
title: Random variables and distributions
kind: definition
level: core
summary: Defines a random variable as a measurable function on a probability space and its distribution function as the object that carries all the probabilistic information about it, characterises which functions are distribution functions, separates the discrete and continuous cases, and catalogues the standard distributions with the mechanism each one models.
prereqs: [prob.probability-spaces]
provenance: adapted
sources:
  - work: grimmett-stirzaker-2020
    loc: "Chs. 2-4: $\\S$2.1, the motivation for using $F$ rather than a pointwise probability, Definition (2.1.3) of a random variable as an $\\mathcal{F}$-measurable function, Definition (2.1.4) of the distribution function, Lemma (2.1.6) with its proof by the continuity theorem (1.3.5), the remark on p. 31 that (6a)-(6c) characterise distribution functions, Examples (2.1.7)-(2.1.9) (constant, Bernoulli and indicator variables), Lemma (2.1.11) giving $\\mathbb{P}(X>x)$, $\\mathbb{P}(x<X\\le y)$ and $\\mathbb{P}(X=x)=F(x)-\\lim_{y\\uparrow x}F(y)$, and the definition of the two tails, pp. 29-32; $\\S$2.3, Definitions (2.3.1) and (2.3.2) of discrete and continuous random variables with mass and density functions, the remark that an atomic distribution function is a step function, the mention of singular variables and of mixtures, the warning that 'continuous' describes $F$ and not $X$, Example (2.3.4) (the uniform angle and its square) and Example (2.3.5) (a variable that is continuous except for an atom at $-1$), pp. 35-36; $\\S$3.1, Examples (3.1.3) and (3.1.4), the binomial and Poisson mass functions, p. 50; $\\S$3.5, Examples (1)-(6): Bernoulli, binomial with its means and variances, trinomial, Poisson as the $n\\to\\infty$, $p\\to0$, $np\\to\\lambda$ limit of the binomial, geometric in the convention $f(k)=p(1-p)^{k-1}$ for $k\\ge1$ with mean $p^{-1}$ and variance $(1-p)p^{-2}$, and negative binomial as the waiting time for the $r$th success, pp. 64-65; $\\S$4.1, Definition (4.1.2) of the density function and the remark that it is not unique, pp. 99-100; $\\S$4.4, Examples (1)-(8): uniform, exponential with its derivation as the $\\delta\\downarrow0$ limit of a geometric waiting time and its mean $1/\\lambda$, normal $N(\\mu,\\sigma^2)$ with the standardisation $(X-\\mu)/\\sigma$ and the notation $\\phi$, $\\Phi$, gamma $\\Gamma(\\lambda,t)$ and the chi-squared special case, Cauchy with its absence of moments, and beta, pp. 106-108"
    pages: "29-32, 35-36, 50, 64-65, 99-100, 106-108"
    role: the definition of a random variable and of its distribution function; the three properties of $F$ and the fact that they characterise distribution functions; the formulas recovering interval and point probabilities from $F$; the discrete/continuous split and the vocabulary of mass and density functions; the existence of mixed variables; and the catalogue of standard distributions with the mechanism generating each one and the stated means and variances we quote
  - work: rhb-2006
    loc: "$\\S$30.4, pp. 1139-1142: the definition of a random variable as a real variable defined for all outcomes in the sample space; $\\S$30.4.1, the probability function (30.38), the normalisation (30.39), the cumulative probability function (30.40) as a step function with jumps $p_i$, and the interval formula (30.41); $\\S$30.4.2, the probability density function defined through $\\Pr(x<X\\le x+dx)=f(x)dx$, the normalisation over the range, eq. (30.42) for $\\Pr(a<X\\le b)$ as an area, eq. (30.43) for the cumulative function and the consequence $f(x)=dF/dx$; and eq. (30.44), the representation of a discrete variable as a continuous one with density $\\sum_i p_i\\delta(x-x_i)$"
    pages: "1139-1142"
    role: the applied-science formulation in which the density is defined by its infinitesimal probability rather than by an integral identity; the names probability function, cumulative probability function and probability density function; and the delta-function device that puts discrete and continuous variables into one formalism
  - work: folland-1999
    loc: "$\\S$10.1, pp. 314-315: the dictionary entry identifying a random variable with a measurable real-valued function and a distribution with a Borel probability measure on $\\mathbb{R}$; the image measure $\\mathbb{P}_\\phi(E)=\\mathbb{P}(\\phi^{-1}(E))$ and Proposition 10.1; the definition of the distribution $\\mathbb{P}_X$ of a random variable $X$, the statement that the distribution function $F(t)=\\mathbb{P}_X((-\\infty,t])$ determines $\\mathbb{P}_X$ by Theorem 1.16, and the definition of identically distributed random variables"
    pages: "314-315"
    role: the identification of the distribution as a measure on the line pushed forward from the sample space, which is what makes the distribution function a complete description; and the vocabulary of identically distributed variables
  - work: arfken-2013
    loc: "$\\S$23.2, pp. 1134-1135: the description of a random variable as a variable assuming numerical values with individual probabilities, with the remark that a non-numerical outcome such as a colour must first be coded numerically; the summary bullets giving the discrete case $P(X=x_i)=p_i\\ge0$ with $\\sum_i p_i=1$ and the continuous case $P(x\\le X\\le x+dx)=f(x)dx$ with $f\\ge0$ and $\\int f\\,dx=1$; Example 23.2.1 (the sum of two dice, with the triangular mass function $P(x)=(x-1)/36$ for $x\\le7$) and Example 23.2.2 (the radial density of the hydrogen $1s$ electron as a continuous random variable)"
    pages: "1134-1135"
    role: the coding step by which a non-numerical outcome becomes a random variable; the quantum-mechanical reading of a probability density, used in our application block
---

:::note[Why a distribution function and not a list of probabilities]{provenance=original}
A random variable is just a numerical readout of an experiment: the sample space $\Omega$ may be a set of card hands, molecular configurations or detector hit patterns, but what gets recorded is a number. The obvious way to describe the number is to list $\mathbb{P}(X = x)$ for each possible value $x$, and for a die or a photon count that is exactly right. For a length, a time or a temperature it is useless, because every single value has probability zero.

The device that covers both cases is the distribution function $F(x) = \mathbb{P}(X \le x)$, an increasing function from $0$ to $1$. It exists for every random variable, it determines all the probabilities of interest, and it is a function on $\mathbb{R}$ rather than on $\Omega$ — so once it is written down the original probability space can be forgotten. Two experiments with entirely different sample spaces can share a distribution function, and for most purposes they are then the same experiment.
:::

:::definition[Random variable, distribution function, distribution]{provenance=adapted src="grimmett-stirzaker-2020:§2.1, Definitions (2.1.3) and (2.1.4) and the discussion preceding them, pp. 29-30; folland-1999:§10.1, pp. 314-315"}
Let $(\Omega, \mathcal{F}, \mathbb{P})$ be a probability space as in :ref[Probability spaces]{to=prob.probability-spaces}.

A **random variable** is a function $X : \Omega \to \mathbb{R}$ such that
$$
\{\omega \in \Omega : X(\omega) \le x\} \in \mathcal{F} \qquad \text{for every } x \in \mathbb{R} ;
$$
such an $X$ is called $\mathcal{F}$-measurable. The condition is exactly what is needed for the probabilities below to be defined; it is automatic when $\mathcal{F}$ consists of all subsets of $\Omega$, as it does for a finite or countable sample space.

Following the usual abuse, the event $\{\omega : X(\omega) \le x\}$ is written $\{X \le x\}$ and its probability $\mathbb{P}(X \le x)$.

The **distribution function** of $X$ is
$$
F : \mathbb{R} \to [0,1] , \qquad F(x) = \mathbb{P}(X \le x) ,
$$
written $F_X$ when the variable must be named. Measure-theoretically, $X$ pushes $\mathbb{P}$ forward to a Borel probability measure on the line,
$$
\mathbb{P}_X(B) = \mathbb{P}\bigl( X^{-1}(B) \bigr) \qquad (B \subseteq \mathbb{R} \text{ Borel}) ,
$$
called the **distribution** of $X$; and $F$ determines $\mathbb{P}_X$ completely. Two random variables with the same distribution function are **identically distributed**, whether or not they are defined on the same space, and no purely distributional statement can tell them apart.

The two **tails** of $X$ are $T_1(x) = \mathbb{P}(X > x) = 1 - F(x)$ and $T_2(x) = \mathbb{P}(X \le -x) = F(-x)$ for large positive $x$; how fast they decay governs which moments exist.
:::

:::definition[Discrete and continuous random variables]{provenance=adapted src="grimmett-stirzaker-2020:§2.3, Definitions (2.3.1) and (2.3.2) and the surrounding discussion, p. 35, and §4.1, Definition (4.1.2), p. 99; rhb-2006:§30.4.1-§30.4.2, eqs. (30.38)-(30.44), pp. 1139-1142"}
$X$ is **discrete** when its range lies inside a countable subset $\{x_1, x_2, \dots\}$ of the line. Its **(probability) mass function** is
$$
f : \mathbb{R} \to [0,1] , \qquad f(x) = \mathbb{P}(X = x) ,
$$
which vanishes off the countable set and satisfies $\sum_i f(x_i) = 1$. Then $F(x) = \sum_{x_i \le x} f(x_i)$ is a step function, constant between the $x_i$ and jumping by $f(x_i)$ at $x_i$; such a distribution is called **atomic**, and the points $x_i$ with $f(x_i) > 0$ are its **atoms**. Riley, Hobson and Bence call $f$ the probability function and $F$ the cumulative probability function.

$X$ is **continuous** when some integrable $f : \mathbb{R} \to [0,\infty)$, called a **(probability) density function** for $X$, reproduces $F$ by integration:
$$
F(x) = \int_{-\infty}^{x} f(u)\,du \qquad \text{at every } x \in \mathbb{R} .
$$

Then $F$ is continuous, $\mathbb{P}(X = x) = 0$ for every $x$, and

$$
\mathbb{P}(a < X \le b) = \int_a^b f(u)\,du .
$$
The density is not unique — changing $f$ at finitely many points changes no integral — but wherever $F$ is differentiable one takes $f(x) = F'(x)$. Physicists usually define the density the other way round, by $\mathbb{P}(x < X \le x + dx) = f(x)\,dx$, which is the same statement in infinitesimal form.

Two cautions. First, the word "continuous" describes $F$, not the function $X$ on $\Omega$. Second, these two classes are not exhaustive: there exist *singular* distribution functions, continuous but with no density, and there exist **mixtures** of all three kinds. A convenient device for handling discrete and continuous variables in one formalism, used throughout physics, is to allow densities containing Dirac deltas, writing $f(x) = \sum_i p_i\,\delta(x - x_i)$ for a discrete variable; see :ref[The Dirac delta]{to=vcalc.dirac-delta-basics}.
:::

:::statement[Which functions are distribution functions, and what they tell you]{provenance=adapted src="grimmett-stirzaker-2020:§2.1, Lemma (2.1.6) with the remark following it on p. 31, and Lemma (2.1.11), p. 32"}
Let $X$ be a random variable with distribution function $F$.

1. $F$ is non-decreasing: $x < y$ implies $F(x) \le F(y)$.
2. $F(x) \to 0$ as $x \to -\infty$ and $F(x) \to 1$ as $x \to +\infty$.
3. $F$ is right-continuous: $F(x + h) \to F(x)$ as $h \downarrow 0$.

Conversely, any $F : \mathbb{R} \to [0,1]$ having properties 1-3 arises as $F_Y$ for some random variable $Y$ on some probability space, constructed in step 5 of the proof. So these three properties characterise distribution functions exactly.

Moreover, writing $F(x-) = \lim_{y \uparrow x} F(y)$ for the left limit, which exists by monotonicity,
$$
\mathbb{P}(X > x) = 1 - F(x) , \qquad
\mathbb{P}(x < X \le y) = F(y) - F(x) , \qquad
\mathbb{P}(X = x) = F(x) - F(x-) .
$$
In particular $F$ is continuous at $x$ if and only if $\mathbb{P}(X = x) = 0$, so the atoms of $X$ are precisely the jumps of $F$, and there are at most countably many of them because the jumps at distinct points sum to at most $1$.
:::

:::idea[The three properties are the three continuity statements]{provenance=original}
Each property of $F$ is the continuity theorem for probability measures applied to a different monotone sequence of events, and the side on which $F$ is continuous is decided by the choice of $\le$ rather than $<$ in the definition.

Monotonicity needs no limit: $\{X \le x\}$ sits inside $\{X \le y\}$ when $x < y$, and a probability measure is monotone. The two limits at $\pm\infty$ come from the sequences $\{X \le -n\}$, which decrease to $\emptyset$, and $\{X \le n\}$, which increase to $\Omega$.

Right-continuity is the same argument at a finite point: the events $\{X \le x + 1/n\}$ decrease, and their intersection is $\{X \le x\}$ — because a real number that is $\le x + 1/n$ for every $n$ is $\le x$. Had we defined $F(x) = \mathbb{P}(X < x)$, the corresponding intersection would have been $\{X \le x\}$ again and $F$ would have come out left-continuous instead. The mass at a point is then the gap between the two conventions, $\mathbb{P}(X = x) = \mathbb{P}(X \le x) - \mathbb{P}(X < x) = F(x) - F(x-)$.
:::

:::proof[Properties of the distribution function]{provenance=adapted src="grimmett-stirzaker-2020:§2.1, the proofs of Lemma (2.1.6) and Lemma (2.1.11), pp. 30-32"}
Write $A(x) = \{X \le x\}$, an event by the measurability requirement in the definition.

**1. Monotone.** If $x < y$ then $A(y) = A(x) \cup \{x < X \le y\}$, a disjoint union of events, so by additivity
$$
F(y) = F(x) + \mathbb{P}(x < X \le y) \ \ge \ F(x) .
$$
This also proves the second displayed formula of the statement.

**2. Limits at $\pm\infty$.** The events $B_n = A(-n)$ decrease as $n$ grows, and $\bigcap_n B_n = \emptyset$, since no real number $X(\omega)$ satisfies $X(\omega) \le -n$ for every $n$. By continuity of $\mathbb{P}$ along decreasing sequences (:ref[Probability spaces]{to=prob.probability-spaces}, consequence 6), $F(-n) = \mathbb{P}(B_n) \to \mathbb{P}(\emptyset) = 0$. As $F$ is monotone, convergence along the integers forces $F(x) \to 0$ as $x \to -\infty$. Symmetrically, $A(n)$ increases with union $\Omega$, so $F(n) \to 1$ and hence $F(x) \to 1$ as $x \to +\infty$.

**3. Right-continuity.** The events $C_n = A(x + 1/n)$ decrease, and $\bigcap_n C_n = A(x)$: if $X(\omega) \le x + 1/n$ for all $n$ then $X(\omega) \le x$, and the reverse inclusion is clear. Continuity along decreasing sequences gives $F(x + 1/n) \to F(x)$, and monotonicity upgrades this to $F(x+h) \to F(x)$ as $h \downarrow 0$.

**4. Mass at a point.** Let $D_n = \{x - 1/n < X \le x\}$. These decrease with $\bigcap_n D_n = \{X = x\}$. By part 1, $\mathbb{P}(D_n) = F(x) - F(x - 1/n)$, and continuity along decreasing sequences gives
$$
\mathbb{P}(X = x) = \lim_{n \to \infty}\bigl[ F(x) - F(x-1/n) \bigr] = F(x) - F(x-) .
$$
The first displayed formula, $\mathbb{P}(X>x) = 1 - F(x)$, is the complement rule.

**5. The converse.** Given $F$ with properties 1-3, take $\Omega = (0,1)$ with Lebesgue measure and set
$$
X(\omega) = \inf\{ x \in \mathbb{R} : F(x) \ge \omega \} ,
$$
the generalised inverse of $F$. Right-continuity of $F$ makes the infimum attained, so $F(X(\omega)) \ge \omega$; and monotonicity makes $X(\omega) \le x$ equivalent to $\omega \le F(x)$. Hence $\mathbb{P}(X \le x) = \mathbb{P}\bigl( (0, F(x)] \bigr) = F(x)$, and property 2 guarantees that $X$ is finite for every $\omega \in (0,1)$. $\square$
:::

:::remark[Where each hypothesis is used, and what goes wrong without it]{provenance=adapted src="grimmett-stirzaker-2020:§2.1, the discussion of measurability on p. 29, §2.3, the remarks on singular and mixed variables and Example (2.3.5), pp. 35-36"}
**Measurability.** Nothing above works if $\{X \le x\}$ is not an event: $F(x)$ is then simply undefined. On a countable sample space with $\mathcal{F}$ the full power set the condition is vacuous, which is why it can be ignored in elementary work. It becomes real on $\Omega = \mathbb{R}$ with the Borel $\sigma$-field, where non-measurable functions exist (see :ref[Measurable functions]{to=measure.measurable-functions}).

**Countable additivity.** Properties 2 and 3 are the continuity theorem, which as noted in :ref[Probability spaces]{to=prob.probability-spaces} is equivalent to countable rather than finite additivity. A finitely additive set function can produce a monotone "distribution function" that fails to tend to $1$, or that jumps without having an atom.

**Right- rather than left-continuity is a convention,** forced by writing $F(x) = \mathbb{P}(X \le x)$. Some applied texts define $F(x) = \mathbb{P}(X < x)$ and obtain a left-continuous function. The two differ exactly at the atoms, and every formula involving $F$ at a jump has to be read in the right convention; we use $\le$ throughout, as do all four of our sources.

**Discrete and continuous do not exhaust the possibilities.** The worked example below is a variable that is neither: it has a density on part of the line and an atom at one point. Grimmett and Stirzaker give a similar example in which a coin toss decides between a point mass at $-1$ and a uniform angle. There are also singular distributions, continuous but with $F' = 0$ almost everywhere; the standard construction is supported on the Cantor set. When a theorem below is stated for continuous variables, the hypothesis is that $F$ is an integral of a density, not merely that $F$ is a continuous function.

**Non-uniqueness of the density.** Because $f$ enters only through its integrals, altering $f$ on a set of Lebesgue measure zero changes nothing. So "the" density is really an equivalence class, and statements such as "$f$ is largest at the mode" require choosing the continuous representative when one exists.
:::

:::note[A catalogue of the standard distributions]{provenance=adapted src="grimmett-stirzaker-2020:§3.5, Examples (1)-(6), pp. 64-65, and §4.4, Examples (1)-(8), pp. 106-108"}
In each row the parameters are as shown and the mass or density function is zero outside the stated range. The mean and variance are included for reference; they are defined, and the method for computing them given, in :ref[Expectation, variance and covariance]{to=prob.expectation-variance} and :ref[Generating functions]{to=prob.generating-functions}.

**Discrete.**

| Distribution | $f(k) = \mathbb{P}(X=k)$ | Range | Mean | Variance | Mechanism |
|---|---|---|---|---|---|
| Bernoulli $(p)$ | $p^{k}(1-p)^{1-k}$ | $k \in \{0,1\}$ | $p$ | $p(1-p)$ | one trial; the indicator of an event |
| Binomial $\mathrm{bin}(n,p)$ | $\binom{n}{k}p^{k}(1-p)^{n-k}$ | $0 \le k \le n$ | $np$ | $np(1-p)$ | successes in $n$ independent trials |
| Poisson $(\lambda)$ | $e^{-\lambda}\lambda^{k}/k!$ | $k \ge 0$ | $\lambda$ | $\lambda$ | rare events: $n \to \infty$, $p \to 0$, $np \to \lambda$ |
| Geometric $(p)$ | $p(1-p)^{k-1}$ | $k \ge 1$ | $1/p$ | $(1-p)/p^{2}$ | trial number of the first success |
| Negative binomial $(r,p)$ | $\binom{k-1}{r-1}p^{r}(1-p)^{k-r}$ | $k \ge r$ | $r/p$ | $r(1-p)/p^{2}$ | trial number of the $r$th success |

**Continuous.**

| Distribution | $f(x)$ | Range | Mean | Variance | Mechanism |
|---|---|---|---|---|---|
| Uniform $[a,b]$ | $1/(b-a)$ | $a < x < b$ | $(a+b)/2$ | $(b-a)^{2}/12$ | no preference within an interval |
| Exponential $(\lambda)$ | $\lambda e^{-\lambda x}$ | $x \ge 0$ | $1/\lambda$ | $1/\lambda^{2}$ | waiting time with no memory |
| Normal $N(\mu, \sigma^{2})$ | $\dfrac{1}{\sqrt{2\pi\sigma^{2}}}\exp\!\left[-\dfrac{(x-\mu)^{2}}{2\sigma^{2}}\right]$ | $x \in \mathbb{R}$ | $\mu$ | $\sigma^{2}$ | sums of many small independent effects |
| Gamma $\Gamma(\lambda, t)$ | $\lambda^{t}x^{t-1}e^{-\lambda x}/\Gamma(t)$ | $x \ge 0$ | $t/\lambda$ | $t/\lambda^{2}$ | waiting time for the $t$th event |
| Chi-squared $\chi^{2}(d)$ | $\Gamma(\tfrac12, \tfrac{d}{2})$ density | $x \ge 0$ | $d$ | $2d$ | sum of $d$ squared standard normals |
| Cauchy | $1/[\pi(1+x^{2})]$ | $x \in \mathbb{R}$ | none | none | ratio of two independent normals |
| Beta $(a,b)$ | $x^{a-1}(1-x)^{b-1}\Gamma(a+b)/[\Gamma(a)\Gamma(b)]$ | $0 < x < 1$ | $a/(a+b)$ | $\dfrac{ab}{(a+b)^{2}(a+b+1)}$ | a random proportion |

Three conventions to watch. The geometric distribution is here the number of *trials* up to and including the first success, so it starts at $k=1$ and has mean $1/p$; many texts instead count the *failures* before the first success, shifting everything by one and giving mean $(1-p)/p$. Grimmett and Stirzaker parametrise the gamma distribution as $\Gamma(\lambda, t)$ with $\lambda$ a rate, so that $\Gamma(\lambda,1)$ is the exponential and $\chi^{2}(d) = \Gamma(\tfrac12, \tfrac{d}{2})$; writers who use a scale parameter $\theta = 1/\lambda$ invert it. The Cauchy distribution has no mean, not a mean of zero: the defining integral is not absolutely convergent.

For the standard normal the density and distribution function have their own symbols,
$$
\phi(x) = \frac{1}{\sqrt{2\pi}}e^{-x^{2}/2} , \qquad \Phi(y) = \int_{-\infty}^{y}\phi(v)\,dv ,
$$
and if $X$ is $N(\mu,\sigma^{2})$ then $(X - \mu)/\sigma$ is $N(0,1)$, so that $F_X(x) = \Phi\bigl((x-\mu)/\sigma\bigr)$. This standardisation is why one table of $\Phi$ serves for all normal distributions.
:::

:::example[A clipped decay time: a variable that is neither discrete nor continuous]{provenance=original}
A counter records the time $T$ at which an unstable state decays, but the acquisition window closes after $c = 3$ hours; if no decay has occurred by then the counter writes down $3$ and stops. Model the true decay time as exponential with rate $\lambda = \tfrac12$ per hour, and let $X = \min(T, 3)$ be the recorded value.

**The distribution function.** For $x < 0$, $F(x) = 0$. For $0 \le x < 3$ the recorded value is at most $x$ exactly when the true decay time is, so
$$
F(x) = \mathbb{P}(T \le x) = 1 - e^{-x/2} .
$$
For $x \ge 3$, $F(x) = 1$, because $X$ never exceeds $3$. The function is non-decreasing, tends to $0$ and $1$ at the ends, and is right-continuous — at $x = 3$ it jumps up to the value $1$ and stays there, which is continuity from the right, not from the left.

**The atom.** By the formula $\mathbb{P}(X = x) = F(x) - F(x-)$,
$$
\mathbb{P}(X = 3) = 1 - \bigl( 1 - e^{-3/2} \bigr) = e^{-3/2} = 0.2231301\ldots ,
$$
which is just the probability that the state survives the whole window. At every other point $F$ is continuous, so $X$ has exactly one atom and $X$ is not continuous. Nor is it discrete, since the set of values it takes, $(0,3]$, is uncountable and $F$ is not a step function. It is a **mixture**: a density $f(x) = \tfrac12 e^{-x/2}$ on $(0,3)$, of total mass $1 - e^{-3/2} = 0.7768698\ldots$, together with a point mass of $0.2231301\ldots$ at $3$. The two add to $1$, as they must.

**Interval probabilities.** Between one and two hours,
$$
\mathbb{P}(1 < X \le 2) = F(2) - F(1) = e^{-1/2} - e^{-1} = 0.6065307 - 0.3678794 = 0.2386512 .
$$

**Quantiles, and why the generalised inverse is needed.** The median solves $F(m) = \tfrac12$, that is $e^{-m/2} = \tfrac12$, giving
$$
m = 2\ln 2 = 1.3862944 \text{ hours} ,
$$
comfortably inside the window; the upper quartile solves $e^{-q/2} = \tfrac14$, giving $q = 4\ln 2 = 2.7725887$, still inside. But the $90$th percentile would need $e^{-x/2} = 0.1$, that is $x = 2\ln 10 = 4.6051702$, which lies beyond the window. There is no $x$ with $F(x) = 0.9$: the function leaps from $0.7768698$ to $1$ at $x = 3$. The generalised inverse $\inf\{x : F(x) \ge 0.9\}$ used in step 5 of the proof returns $3$, which is the right answer — nine runs in ten do finish by the time the counter stops, because in fact more than nine in ten do.

**What the clipping costs.** The recorded distribution agrees with the true one below $3$ hours and lumps everything above into a single spike. Any analysis that treats $X$ as exponential will therefore underestimate the mean lifetime; the correct treatment keeps the atom, and this is the elementary case of what survival analysis calls right-censoring.
:::

:::application[Distributions as models]{provenance=original}
**Counting.** Radioactive decays in a fixed interval, photons on a pixel, cosmic rays through a detector and raindrops in a gauge are all modelled as Poisson, for the reason in the catalogue: a very large number of potential contributors each with a very small probability. The quality of the model is a statement about independence, not about the counts, and when the contributors cluster the data are overdispersed relative to Poisson, which is itself a diagnostic.

**Waiting and lifetimes.** The exponential distribution is the unique continuous distribution with no memory, and is therefore the universal model for the time to the next event of a process with a constant hazard rate: spontaneous emission, nuclear decay, the time between arrivals in a queue. The gamma distribution is the waiting time for the $t$th such event, which is why it describes the total dead time of a counter that must record several hits.

**Measurement error.** Gaussian errors are assumed throughout experimental science, on the strength of :ref[The central limit theorem]{to=prob.central-limit-theorem}: an error that is the accumulation of many small independent contributions is approximately normal regardless of their individual laws. The assumption fails when one contribution dominates, or when the tails matter, and the Cauchy distribution — the ratio of two normals, with no mean at all — is the standard warning of how badly it can fail. The Lorentzian line shape of a resonance is the same function.

**Quantum mechanics.** A wavefunction is a probability density in exactly the sense of this unit: :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="Example 23.2.2, p. 1135"} treat the radial position of the hydrogen $1s$ electron as a continuous random variable with density $4r^{2}a^{-3}e^{-2r/a}$, obtained from $\lvert\psi\rvert^{2}$ by integrating over angles. Normalisation of the wavefunction is the condition $\int f = 1$, and the Born rule is the assertion that $\lvert\psi\rvert^{2}$ is a density and not merely a weight.

**Simulation.** The generalised inverse constructed in step 5 of the proof is the inverse-transform sampling method: feed a uniform random number on $(0,1)$ into $F^{-1}$ and out comes a sample from $F$. It works for any distribution function, mixed ones included, and it is how the clipped variable of the worked example would be simulated. More efficient alternatives for specific distributions are in :ref[Joint distributions and transformations]{to=prob.joint-distributions}.

**Statistics.** The chi-squared, Student and $F$ distributions that appear in :ref[Sampling distributions]{to=stats.sampling-distributions} are all built from normal variables by the transformations of :ref[Joint distributions and transformations]{to=prob.joint-distributions}, and the beta distribution is the standard prior for an unknown proportion in :ref[Bayesian inference]{to=stats.bayesian-inference}.
:::
