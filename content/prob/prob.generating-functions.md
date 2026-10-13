---
id: prob.generating-functions
title: Generating functions
kind: method
level: core
summary: Encodes a distribution in its probability, moment and cumulant generating functions, turns convolution into multiplication and random sums into composition, and applies the composition rule to branching processes, extracting the extinction probability $1/2$ for a worked offspring law.
prereqs: [prob.expectation-variance, prob.random-variables, prob.conditional-expectation, found.power-series]
provenance: adapted
sources:
  - work: grimmett-stirzaker-2020
    loc: "§5.1 Generating functions, pp. 169-175: the convolution (5.1.4)-(5.1.5) and the product rule (5.1.6) for its generating function, Definition (5.1.10) of the probability generating function $G(s)=\\mathbb{E}(s^{X})$, the power-series facts (5.1.11)-(5.1.15) (radius of convergence, term-by-term differentiation, uniqueness with $a_n=G^{(n)}(0)/n!$, Abel's theorem), eq. (5.1.16) ($G(0)=\\mathbb{P}(X=0)$, $G(1)=1$), Examples (5.1.17)(a)-(d) (constant, Bernoulli, geometric, Poisson), Theorem (5.1.18) on factorial moments with its proof by Abel's theorem, eq. (5.1.19) for the variance, the change of variable to $M_X(t)=G_X(e^{t})$ and the expansion (5.1.21) identifying the moment generating function, Theorem (5.1.23) ($G_{X+Y}=G_XG_Y$) with both proofs, Example (5.1.24) (the binomial), Theorem (5.1.25) with eq. (5.1.26) (the random sum formula $G_S=G_N\\circ G_X$) and its proof by conditioning, Example (5.1.27) (Poisson number of eggs, Bernoulli hatching), Definition (5.1.28) and Theorem (5.1.29) (joint generating functions and the factorisation criterion for independence), and eq. (5.1.30) for defective variables; §5.4 Branching processes, pp. 192-195: the two modelling assumptions on family sizes, Theorem (5.4.1) ($G_{m+n}=G_m\\circ G_n$, so $G_n$ is the $n$-fold iterate of $G$) with its proof via (5.1.25), Lemma (5.4.2) ($\\mathbb{E}(Z_n)=\\mu^{n}$ and the two cases of $\\operatorname{var}(Z_n)$) with its proof by differentiating the iterate, Example (5.4.3) (geometric family sizes) and Theorem (5.4.5) (extinction probability is the smallest non-negative root of $s=G(s)$; $\\eta=1$ if $\\mu<1$, $\\eta<1$ if $\\mu>1$, and $\\eta=1$ when $\\mu=1$ provided the family-size variance is strictly positive) with its proof by monotone iteration and convexity; §5.7, p. 203: Definition (5.7.1) of the moment generating function, the Laplace-transform remark with the sign footnote, and properties (a)-(c); §5.7, Remark (5.7.10), p. 206: the moment problem, the log-normal counterexample, and the sufficient condition that $M$ be finite near the origin"
    pages: "169-175, 192-195, 203, 206"
    role: the definitions, every structural theorem proved here (factorial moments, convolution, the random sum formula, joint factorisation), the whole branching-process development including the extinction theorem and its proof route, and the warnings about convergence, defective variables and the moment problem
  - work: rhb-2006
    loc: "§30.7 Generating functions, pp. 1157-1167: the analogy with the generating functions of orthogonal polynomials; §30.7.1, the definition (30.71) of $\\Phi_X(t)=\\sum f_nt^{n}=\\mathbb{E}[t^{X}]$ with $\\Phi_X(1)=1$, the Bernoulli and Poisson examples (30.72)-(30.73), the mean and variance formulas (30.74)-(30.76), the worked geometric example (30.77)-(30.78), the convolution argument (30.79)-(30.80) for $\\Phi_{X+Y}=\\Phi_X\\Phi_Y$ with the change of summation order and (30.81)-(30.82), and the variable-length sum formula (30.84) $\\Xi_S=\\chi_N(\\Phi_X)$ with the clutch-of-eggs example; §30.7.2, the definition (30.85) of the moment generating function for discrete and continuous distributions, the statement that it exists for all $t$ if $X$ is bounded and always at $t=0$, the relation obtained by replacing $t$ by $e^{t}$, the moment formula (30.86) and variance (30.87), the Gaussian example, the scaling-and-shifting rule (30.88), the sum rules (30.89)-(30.90), the variable-length sum $M_{S_N}=\\chi_N(M_X)$, and the uniqueness statement with its footnote that a rigorous proof is beyond the book's scope; §30.7.4, the cumulant generating function $K_X(t)=\\ln M_X(t)$ and the definition (30.92) of the cumulants, with the Gaussian example giving $\\kappa_1=\\mu$, $\\kappa_2=\\sigma^{2}$ and all higher cumulants zero"
    pages: "1157-1167"
    role: the parallel treatment in physicists' notation, the moment generating function for continuous distributions, the scaling and shifting rule, the cumulant generating function and the Gaussian cumulants, and the explicit statement that uniqueness of the moment generating function is assumed rather than proved there
  - work: arfken-2013
    loc: "§23.2 Random Variables, p. 1141: the definition of the higher moments (23.31) relative to the mean, the moment-generating function (23.32) $\\langle e^{tX}\\rangle=\\int e^{tx}f(x)\\,dx=1+t\\langle X\\rangle+\\tfrac{t^{2}}{2!}\\langle X^{2}\\rangle+\\cdots$, the differentiation formulas (23.33), the sentence stating that the moments so generated are taken relative to $x=0$ and calling them central moments, and Example 23.2.4 computing $\\langle X\\rangle=5$ and $\\sigma^{2}=5/3$ for a two-card draw"
    pages: "1141"
    role: the physicists' notation $\langle e^{tX}\rangle$ and the Taylor-expansion derivation of the moment formulas; also the terminological clash over "central moment", reported in the remark
---

:::note[What a generating function buys]{provenance=original}
A distribution on $\{0,1,2,\dots\}$ is an infinite list of numbers. Packing that list into the coefficients of a power series replaces three awkward operations by three easy ones:

| operation on distributions | operation on generating functions |
|---|---|
| convolution (adding independent variables) | multiplication |
| summing a random number of copies | composition |
| extracting moments | differentiating at one point |

The third is a convenience. The first two are the reason the method exists: a convolution is a sum over all the ways a total can be split, and a power series multiplies by doing exactly that bookkeeping. Everything in this unit, including the entire theory of branching processes, follows from those two lines of the table.

Three transforms are in use, and the difference between them is only a change of variable. The **probability generating function** $G(s)=\mathbb{E}(s^{X})$ handles variables on the non-negative integers. The **moment generating function** $M(t)=\mathbb{E}(e^{tX})$, obtained by putting $s=e^{t}$, handles any variable but may be infinite. The **characteristic function** $\varphi(t)=\mathbb{E}(e^{itX})$, which exists always, is the subject of :ref[]{to=prob.characteristic-functions}.
:::

:::definition[The three generating functions]{provenance=adapted src="grimmett-stirzaker-2020:§5.1, Definition (5.1.10) and the change of variable at eq. (5.1.21), pp. 170, 172, and §5.7, Definition (5.7.1), p. 203; rhb-2006:§30.7.1, eq. (30.71), p. 1158, §30.7.2, eq. (30.85), p. 1162, and §30.7.4, eq. (30.92), p. 1166; arfken-2013:§23.2, eq. (23.32), p. 1141"}
Let $X$ be a random variable with mass function $f$ or density $f$.

**Probability generating function.** If $X$ takes values in $\{0,1,2,\dots\}$, its probability generating function is

$$
G_X(s) \;=\; \mathbb{E}\bigl(s^{X}\bigr) \;=\; \sum_{n=0}^{\infty} s^{n}\,\mathbb{P}(X = n) .
$$

The series has non-negative coefficients summing to $1$, so it converges absolutely for $\lvert s\rvert \le 1$ at least; its radius of convergence $R$ satisfies $R \ge 1$. Riley, Hobson and Bence write it $\Phi_X(t)$ and Grimmett and Stirzaker $G_X(s)$; the object is the same.

**Moment generating function.** For any real random variable,

$$
M_X(t) \;=\; \mathbb{E}\bigl(e^{tX}\bigr) \;=\;
\begin{cases}
\sum_i e^{tx_i} f(x_i) & \text{(discrete)},\\
\int_{-\infty}^{\infty} e^{tx} f(x)\,dx & \text{(continuous)},
\end{cases}
$$

defined at those real $t$ for which the sum or integral is finite. Always $M_X(0)=1$. Where both exist, $M_X(t) = G_X(e^{t})$. Physicists write $M_X(t) = \langle e^{tX}\rangle$, as :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§23.2, eq. (23.32), p. 1141"} do. Grimmett and Stirzaker note that $M_X$ is a Laplace transform of the distribution up to the sign of the exponent: the usual Laplace transform of a density carries $e^{-tx}$, this one carries $e^{+tx}$.

**Cumulant generating function.** Wherever $M_X$ is finite and positive on a neighbourhood of the origin,

$$
K_X(t) \;=\; \log M_X(t) \;=\; \kappa_1 t + \kappa_2\frac{t^2}{2!} + \kappa_3\frac{t^3}{3!} + \cdots ,
$$

and the coefficients $\kappa_k$ are the **cumulants** of $X$. There is no constant term because $M_X(0)=1$.

**Joint generating functions.** For two variables on the non-negative integers, $G_{X_1,X_2}(s_1,s_2) = \mathbb{E}\bigl(s_1^{X_1}s_2^{X_2}\bigr)$, and likewise $M_{X_1,X_2}(t_1,t_2) = \mathbb{E}\bigl(e^{t_1X_1+t_2X_2}\bigr)$ for general variables.
:::

:::statement[The rules]{provenance=adapted src="grimmett-stirzaker-2020:§5.1, eq. (5.1.16), Theorem (5.1.18) with eq. (5.1.19), the uniqueness statement (5.1.13)-(5.1.14), Theorems (5.1.23), (5.1.25) and (5.1.29), pp. 170-174, and §5.7, properties (a)-(c) and Remark (5.7.10), pp. 203, 206; rhb-2006:§30.7.1, eqs. (30.74)-(30.76) and (30.80)-(30.84), pp. 1158-1162, and §30.7.2, eqs. (30.86)-(30.90), pp. 1163-1164"}
Let $X$, $Y$ be random variables and let $a,b$ be real constants.

**For probability generating functions** ($X,Y$ on the non-negative integers):

1. **Boundary values.** $G_X(0) = \mathbb{P}(X=0)$ and $G_X(1) = 1$.
2. **Recovery.** $\mathbb{P}(X=n) = G_X^{(n)}(0)/n!$. In particular $G_X$ determines the distribution: two variables with the same probability generating function on some interval $(-R',R')$ with $R'>0$ have the same mass function.
3. **Factorial moments.** $\mathbb{E}\bigl(X(X-1)\cdots(X-k+1)\bigr) = G_X^{(k)}(1)$, where $G^{(k)}(1)$ means $\lim_{s\uparrow1}G^{(k)}(s)$ when the radius of convergence is exactly $1$. Hence
   $$
   \mathbb{E}(X) = G_X'(1), \qquad \operatorname{var}(X) = G_X''(1) + G_X'(1) - G_X'(1)^2 .
   $$
4. **Sums.** If $X$ and $Y$ are **independent** then $G_{X+Y}(s) = G_X(s)\,G_Y(s)$; for $n$ independent summands the generating functions multiply, and for $n$ independent copies of one variable $G_{S_n} = (G_X)^{n}$.
5. **Random sums.** Let $X_1,X_2,\dots$ be independent, identically distributed with common generating function $G_X$, and let $N \ge 0$ be an integer-valued random variable **independent of all the $X_i$**, with generating function $G_N$. Then $S = X_1 + \cdots + X_N$ (an empty sum being $0$) has
   $$
   G_S(s) \;=\; G_N\bigl(G_X(s)\bigr) .
   $$
   Grimmett and Stirzaker record the mnemonic that fixes the order of composition: if $N \equiv n$ is constant then $G_N(s)=s^{n}$ and the formula returns $G_X(s)^{n}$, as rule 4 demands.
6. **Independence.** The factorisation $G_{X_1,X_2}(s_1,s_2) = G_{X_1}(s_1)\,G_{X_2}(s_2)$, holding at every pair $(s_1,s_2)$, is **equivalent** to independence of $X_1$ and $X_2$ - not merely implied by it.
7. **Defective variables.** If $\mathbb{P}(X=\infty) > 0$ then $G_X(s) = \mathbb{E}(s^{X})$ still converges for $\lvert s\rvert<1$ and $\lim_{s\uparrow1}G_X(s) = 1 - \mathbb{P}(X=\infty) < 1$. A probability generating function with $G(1^-)<1$ is the signature of a defective distribution.

**For moment generating functions** (any real $X$, wherever the functions are finite):

8. **Moments.** If $M_X$ is finite on an open interval containing $0$, then all moments exist, $M_X$ has the convergent expansion $M_X(t) = \sum_{k\ge0}\mathbb{E}(X^{k})t^{k}/k!$ there, and $\mathbb{E}(X^{k}) = M_X^{(k)}(0)$; in particular $\operatorname{var}(X) = M_X''(0) - M_X'(0)^2$.
9. **Affine changes.** $M_{aX+b}(t) = e^{bt}M_X(at)$. Taking $b=-\mu$ with $\mu = \mathbb{E}X$ produces the generator of the moments about the mean.
10. **Sums.** If $X_1,\dots,X_m$ are independent, with $m$ a fixed integer, then $M_{\sum_{i\le m} c_iX_i}(t) = \prod_{i\le m} M_{X_i}(c_it)$. For a random number of summands, with $N$ and the identically distributed $X_i$ as in rule 5, $M_S(t) = G_N\bigl(M_X(t)\bigr)$.
11. **Cumulants.** $K_{X+Y} = K_X + K_Y$ for independent $X,Y$, and $\kappa_1 = \mathbb{E}(X)$, $\kappa_2 = \operatorname{var}(X)$. For $X\sim N(\mu,\sigma^2)$, $K_X(t) = \mu t + \tfrac12\sigma^2t^2$, so $\kappa_1=\mu$, $\kappa_2=\sigma^2$, and every cumulant from the third on vanishes.
12. **Uniqueness, with a caveat.** If $M_X = M_Y$ and both are finite on a neighbourhood of $0$, then $X$ and $Y$ have the same distribution. Riley, Hobson and Bence state this and say a rigorous proof lies outside their scope. Grimmett and Stirzaker add the warning that the *moments alone* do not always determine a distribution: there exist distinct distribution functions all of whose moments agree, the standard example being built from the log-normal. Finiteness of $M$ near the origin is their simplest sufficient condition for a distribution to be determined by its moments.
:::

:::statement[Branching processes]{provenance=adapted src="grimmett-stirzaker-2020:§5.4, the modelling assumptions (a)-(b), Theorem (5.4.1), Lemma (5.4.2) and Theorem (5.4.5), pp. 192-195"}
A **branching process** is a population in which each individual, independently of all others, produces a random number of offspring with a common mass function $f$ and probability generating function $G$. Write $Z_n$ for how many individuals generation $n$ contains, take $Z_0 = 1$, and put $G_n(s) = \mathbb{E}(s^{Z_n})$, $\mu = \mathbb{E}(Z_1) = G'(1)$ and $\sigma^2 = \operatorname{var}(Z_1)$.

1. **Iteration.** $G_{m+n}(s) = G_m\bigl(G_n(s)\bigr)$, so $G_n$ is the $n$-fold composite of $G$ with itself and $G_1 = G$.
2. **Moments.**
   $$
   \mathbb{E}(Z_n) = \mu^{n},
   \qquad
   \operatorname{var}(Z_n) =
   \begin{cases}
   n\sigma^{2}, & \mu = 1,\\[1ex]
   \dfrac{\sigma^{2}(\mu^{n}-1)\mu^{n-1}}{\mu-1}, & \mu \ne 1.
   \end{cases}
   $$
3. **Extinction.** As $n\to\infty$, $\mathbb{P}(Z_n = 0)$ increases to the probability $\eta$ of ultimate extinction, and $\eta$ is **the smallest non-negative root of $s = G(s)$**. Moreover $\eta = 1$ if $\mu < 1$, $\eta < 1$ if $\mu > 1$, and in the critical case $\mu = 1$ extinction is certain, $\eta=1$, so long as the offspring law is not concentrated at a single value, that is, so long as $\sigma^{2}>0$.
:::

:::idea{provenance=original}
Why a product? Expanding $G_X(s)G_Y(s)$ and collecting the coefficient of $s^{n}$ gives $\sum_{k} \mathbb{P}(X=k)\mathbb{P}(Y=n-k)$, which is precisely the number of ways $X+Y$ can equal $n$ weighted by their probabilities - the convolution. The power series does the sum over splittings automatically, because that is what multiplying polynomials means. Equivalently and more quickly: $s^{X}$ and $s^{Y}$ are independent when $X$ and $Y$ are, so the expectation of their product factorises.

Why a composition? For a random sum, condition on $N$. Given $N=n$ the sum has generating function $G_X(s)^{n}$, so averaging over $n$ gives $\sum_n G_X(s)^{n}\mathbb{P}(N=n)$ - and that sum *is* $G_N$ evaluated at the number $G_X(s)$. Substituting a generating function into a generating function is the same operation as randomising the number of terms.

Branching processes are then immediate: generation $n+m$ is a random sum over the individuals of generation $m$, each contributing an independent copy of an $n$-generation descendant count, so generation sizes compose. Extinction is the fixed point of that composition, and the geometry of a convex increasing curve meeting the diagonal decides whether the fixed point is $1$ or something smaller - which is why the mean family size $\mu = G'(1)$, the slope at the diagonal point $s=1$, is what separates the cases.
:::

:::proof[The rules]{provenance=adapted src="grimmett-stirzaker-2020:§5.1, the convolution computation (5.1.6), the proof of Theorem (5.1.18) by Abel's theorem, eq. (5.1.19), and the proofs of Theorems (5.1.23) and (5.1.25), pp. 169-174; rhb-2006:§30.7.1, eqs. (30.74)-(30.76), p. 1158"}
**Rules 1 and 2.** Setting $s=0$ in the series leaves the constant term, $\mathbb{P}(X=0)$; setting $s=1$ sums the mass function, giving $1$. Rule 2 is the standard uniqueness statement for power series: inside the disc of convergence a power series may be differentiated term by term any number of times, and evaluating the $n$th derivative at $0$ kills every term but one (:ref[]{to=found.power-series}).

**Rule 3.** For $\lvert s\rvert < 1$, differentiating $k$ times term by term,

$$
G_X^{(k)}(s) \;=\; \sum_{i \ge k} i(i-1)\cdots(i-k+1)\, s^{\,i-k}\, \mathbb{P}(X=i) .
$$

Every coefficient here is non-negative, so Abel's theorem applies: as $s \uparrow 1$ the sum tends to $\sum_i i(i-1)\cdots(i-k+1)\mathbb{P}(X=i)$, whether that is finite or $+\infty$. That sum is $\mathbb{E}(X(X-1)\cdots(X-k+1))$ by the law of the unconscious statistician (:ref[]{to=prob.expectation-variance}). **Abel's theorem is exactly what is needed here**, because when $R=1$ one has no right to evaluate the series at the endpoint without it. For the variance, take $k=1,2$:
$$
\operatorname{var}(X) = \mathbb{E}(X^2)-\mathbb{E}(X)^2 = \mathbb{E}\bigl(X(X-1)\bigr) + \mathbb{E}(X) - \mathbb{E}(X)^2 = G''(1)+G'(1)-G'(1)^2 .
$$

**Rule 4.** If $X$ and $Y$ are independent then so are the random variables $s^{X}$ and $s^{Y}$, being functions of independent variables, and the expectation of a product of independent variables is the product of the expectations:
$$
G_{X+Y}(s) = \mathbb{E}\bigl(s^{X+Y}\bigr) = \mathbb{E}\bigl(s^{X}s^{Y}\bigr) = \mathbb{E}(s^{X})\,\mathbb{E}(s^{Y}) .
$$
The same conclusion comes from multiplying the two series and recognising the coefficient of $s^{n}$ as the convolution $\sum_{k=0}^{n}\mathbb{P}(X=k)\mathbb{P}(Y=n-k)$, which is $\mathbb{P}(X+Y=n)$; Riley, Hobson and Bence present the argument in that order, justifying the interchange of the two summations by the geometry of the index set. **Independence is used once and is indispensable**: see the remark.

**Rule 5.** Condition on $N$ and use the tower property (:ref[]{to=prob.conditional-expectation}):

$$
G_S(s) = \mathbb{E}\bigl(s^{S}\bigr) = \mathbb{E}\Bigl(\mathbb{E}\bigl(s^{S}\;\big|\;N\bigr)\Bigr) = \sum_{n\ge0}\mathbb{E}\bigl(s^{X_1+\cdots+X_n}\bigr)\mathbb{P}(N=n) ,
$$

where the inner conditional expectation was replaced by an unconditional one because $N$ is independent of the $X_i$. By rule 4 applied $n-1$ times the $n$th term is $G_X(s)^{n}\mathbb{P}(N=n)$, and summing over $n$ gives $\sum_n G_X(s)^{n}\mathbb{P}(N=n) = G_N(G_X(s))$, since $0 \le G_X(s)\le1$ for $0\le s\le 1$ puts the argument inside the disc of convergence of $G_N$.

**Rule 6.** If $X_1,X_2$ are independent the argument of rule 4 applies to $s_1^{X_1}$ and $s_2^{X_2}$. Conversely, if the joint generating function factorises then comparing the coefficient of $s_1^{i}s_2^{j}$ on the two sides gives $\mathbb{P}(X_1=i,X_2=j) = \mathbb{P}(X_1=i)\mathbb{P}(X_2=j)$ for every $i,j$, which is independence.

**Rule 7.** The series $\sum_n s^{n}\mathbb{P}(X=n)$ omits the value $+\infty$ entirely, since $s^{\infty}=0$ for $\lvert s\rvert<1$; letting $s\uparrow1$ and applying Abel's theorem to the non-negative coefficients gives $\sum_{n<\infty}\mathbb{P}(X=n) = 1-\mathbb{P}(X=\infty)$.

**Rules 8-11.** Rule 8 is the substitution $s = e^{t}$ together with the expansion
$$
M_X(t) = \mathbb{E}\Bigl(\sum_{k\ge0}\frac{(tX)^{k}}{k!}\Bigr) = \sum_{k\ge0}\frac{t^{k}}{k!}\,\mathbb{E}(X^{k}) ,
$$
the interchange of expectation and sum being justified when $M_X$ is finite on a neighbourhood of $0$; this is the derivation :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§23.2, eq. (23.32), p. 1141"} give. Rule 9 is $\mathbb{E}(e^{t(aX+b)}) = e^{bt}\mathbb{E}(e^{(at)X})$. Rule 10 repeats the argument of rules 4 and 5 with $e^{tX}$ in place of $s^{X}$. Rule 11 follows from rule 10 by taking logarithms, and the Gaussian values from $K(t) = \log\exp(\mu t+\tfrac12\sigma^2t^2)$, which is already a polynomial, so the coefficients beyond $t^2$ are zero. $\square$
:::

:::proof[The branching process theorems]{provenance=adapted src="grimmett-stirzaker-2020:§5.4, proofs of Theorem (5.4.1), Lemma (5.4.2) and Theorem (5.4.5), pp. 193-195"}
**Iteration.** Each member of generation $m+n$ descends from exactly one member of generation $m$. Writing $W_i$ for the number of generation-$(m+n)$ descendants of the $i$th member of generation $m$, we have $Z_{m+n} = W_1 + \cdots + W_{Z_m}$. The $W_i$ are independent, by the independence assumption on family sizes; they are identically distributed, each with the law of $Z_n$ started from a single ancestor; and $Z_m$ is a function of the family sizes in generations $0$ to $m-1$ only, whereas each $W_i$ is a function of the family sizes of generation $m$ onwards, so $Z_m$ is independent of the whole sequence $W_1,W_2,\dots$. Rule 5 therefore applies and gives $G_{m+n} = G_m \circ G_n$. Taking $m=1$ and iterating, $G_n = G\circ G\circ\cdots\circ G$ ($n$ factors).

**Moments.** Differentiate $G_n(s) = G\bigl(G_{n-1}(s)\bigr)$ by the chain rule and let $s\uparrow1$. Since $G_{n-1}(1)=1$,
$$
G_n'(1) = G'(1)\,G_{n-1}'(1) = \mu\,G_{n-1}'(1) ,
$$
so $\mathbb{E}(Z_n) = \mu^{n}$ by induction from $\mathbb{E}(Z_0)=1$. Differentiating once more,
$$
G_n''(1) = G''(1)\,G_{n-1}'(1)^2 + G'(1)\,G_{n-1}''(1) = G''(1)\mu^{2(n-1)} + \mu\,G_{n-1}''(1) .
$$
Write $v_n = \operatorname{var}(Z_n) = G_n''(1)+\mu^{n}-\mu^{2n}$, substitute $G_n''(1) = v_n - \mu^n + \mu^{2n}$ and $G''(1) = \sigma^2 - \mu + \mu^2$ into the last display, and the terms in $\mu^{n}$, $\mu^{2n-1}$ and $\mu^{2n}$ all cancel, leaving the one-term recursion
$$
v_n = \mu\,v_{n-1} + \sigma^{2}\mu^{2n-2} , \qquad v_0 = 0 .
$$
Unrolling it gives $v_n = \sigma^{2}\bigl(\mu^{2n-2} + \mu^{2n-3} + \cdots + \mu^{n-1}\bigr) = \sigma^{2}\mu^{n-1}\bigl(1+\mu+\cdots+\mu^{n-1}\bigr)$, which is $n\sigma^2$ when $\mu=1$ and $\sigma^2\mu^{n-1}(\mu^{n}-1)/(\mu-1)$ otherwise.

**Extinction.** The events $\{Z_n = 0\}$ increase with $n$, because an empty generation has empty descendants; so $\eta_n = \mathbb{P}(Z_n=0)$ is non-decreasing and, by continuity of probability along increasing sequences, $\eta_n \uparrow \eta = \mathbb{P}(\text{some }Z_n = 0) = \mathbb{P}(\text{extinction})$. Now $\eta_n = G_n(0) = G(G_{n-1}(0)) = G(\eta_{n-1})$, and $G$ is continuous on $[0,1]$, so letting $n\to\infty$ gives

$$
\eta = G(\eta) :
$$

the extinction probability is a fixed point. It is the smallest non-negative one: if $\psi \ge 0$ satisfies $\psi = G(\psi)$, then, because $G$ has non-negative coefficients and so is non-decreasing on $[0,1]$, $\eta_1 = G(0) \le G(\psi) = \psi$, and inductively $\eta_n = G(\eta_{n-1}) \le G(\psi) = \psi$; letting $n\to\infty$ gives $\eta\le\psi$.

For the three cases, note that $G''(s) = \mathbb{E}\bigl(Z_1(Z_1-1)s^{Z_1-2}\bigr) \ge 0$ on $[0,1]$, so $G$ is convex there, and $G(1)=1$. A convex function on $[0,1]$ that equals $1$ at $s=1$ meets the diagonal $y=s$ in at most one further point.

- If $\mu = G'(1) > 1$ then $G(s) < s$ for $s$ slightly below $1$, while $G(0) = \mathbb{P}(Z_1=0) \ge 0$; so $G(s)-s$ changes sign on $[0,1)$ and there is a root $\eta<1$.
- If $\mu < 1$ then $G(s) > s$ for all $s\in[0,1)$ - by convexity the chord from $(s,G(s))$ to $(1,1)$ has slope at most $G'(1)=\mu<1$, which forces $G(s) \ge 1-\mu(1-s) > s$ - so the only fixed point in $[0,1]$ is $1$ and $\eta=1$.
- If $\mu = 1$ and $\sigma^2 > 0$ then $G$ is *strictly* convex (strict convexity is exactly $\sigma^2>0$ here, since $\sigma^2=0$ with $\mu=1$ means $Z_1\equiv1$ and $G(s)=s$), so $G(s) > s$ on $[0,1)$ and again $\eta=1$. In the degenerate case $\sigma^2=0$, $\mu=1$, every individual has exactly one child, $G(s)=s$, every point is a fixed point and the population never dies: the smallest non-negative root is $0$, which is the correct extinction probability. $\square$
:::

:::remark[Where the hypotheses are used, and where the method breaks]{provenance=original}
- **Rule 4 needs independence, not merely zero correlation.** Let $X$ be Bernoulli with parameter $\tfrac12$ and $Y = 1-X$. Then $G_X(s)=G_Y(s)=\tfrac12(1+s)$, so the product is $\tfrac14(1+s)^2$, the generating function of a $\mathrm{bin}(2,\tfrac12)$ variable. But $X+Y\equiv1$, with generating function $s$. The two disagree everywhere except at $s=1$.
- **Rule 5 needs $N$ independent of the $X_i$, and the proof shows exactly why.** The step that replaces $\mathbb{E}(s^{X_1+\cdots+X_n}\mid N=n)$ by $\mathbb{E}(s^{X_1+\cdots+X_n})$ is the only use of that hypothesis, and it fails if the number of terms is chosen after looking at them. If $X_1,X_2,\dots$ are independent Bernoulli$(\tfrac12)$ and $N = 1 + X_1$, then $S = X_1 + \cdots + X_N$ can be enumerated in four equally likely cases. If $X_1=0$ then $N=1$ and $S = X_1 = 0$; if $X_1=1$ then $N=2$ and $S = 1 + X_2$, which is $1$ or $2$ according to $X_2$. Hence $\mathbb{P}(S=0)=\tfrac12$, $\mathbb{P}(S=1)=\tfrac14$, $\mathbb{P}(S=2)=\tfrac14$ and $G_S(s)=\tfrac12+\tfrac14 s+\tfrac14 s^{2}$, whereas $G_N(u) = \tfrac12(u+u^2)$ gives $G_N(G_X(s)) = \tfrac12\bigl(\tfrac{1+s}2 + \tfrac{(1+s)^2}4\bigr) = \tfrac38 + \tfrac12 s + \tfrac18 s^{2}$. The two agree at $s=1$, as both must, and nowhere else: the formula is wrong here because $N$ was chosen after looking at $X_1$.
- **The moment generating function can fail to exist.** $M_X(t)=\infty$ for every $t\ne0$ when $X$ is Cauchy, and for every $t>0$ when $X$ is log-normal or has any heavy tail; rules 8-12 are then empty, and the characteristic function of :ref[]{to=prob.characteristic-functions} is the right tool. Riley, Hobson and Bence note that boundedness of $X$ guarantees existence for all $t$; the honest general statement is that $M_X$ is finite on an interval containing $0$, possibly the single point $\{0\}$.
- **Moments do not always determine a distribution.** Grimmett and Stirzaker state this explicitly and point to the log-normal: there are distinct distribution functions with identical moments of every order. So "matching all the moments" is not by itself a proof that two laws agree; what is needed is rule 12's hypothesis that $M$ is finite near the origin, or a characteristic-function argument.
- **A terminology clash to be aware of.** :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§23.2, p. 1141"} define the higher moments about the mean in their eq. (23.31), then introduce $\langle e^{tX}\rangle$ and remark that the moments it generates are taken relative to $x=0$ rather than to the expectation value, calling those quantities central moments. Everywhere else in this handbook, and in :ref[]{to=prob.expectation-variance}, *central moment* means a moment about the mean, $\mathbb{E}((X-\mathbb{E}X)^{k})$, and $M_X$ as defined above generates the moments about the origin; rule 9 with $b=-\mu$ is what converts between them. We follow the handbook's usage and record Arfken, Weber and Harris's wording so that a reader moving between the two is not caught out.
- **The critical branching case is genuinely delicate.** With $\mu=1$ and $\sigma^2>0$ the population dies out with probability $1$ even though $\mathbb{E}(Z_n)=1$ for every $n$; the mean is held up by ever rarer, ever larger survivals, and $\operatorname{var}(Z_n)=n\sigma^2$ grows without bound. This is why the theorem must say "provided the variance is strictly positive": the one excluded case, $Z_1\equiv1$, has $\mu=1$ and never dies.
- **Abel's theorem is doing real work in rule 3.** For a variable with $\mathbb{E}(X)=\infty$ - say $\mathbb{P}(X=n)\propto n^{-2}$ - the radius of convergence is exactly $1$, $G$ is finite on $[0,1]$, and $G'(s)\to+\infty$ as $s\uparrow1$. Rule 3 reports this correctly as $\mathbb{E}(X)=+\infty$ only because Abel's theorem permits the limit to be taken.
:::

:::method[Using a generating function]{provenance=original}
1. **Choose the transform.** Non-negative integer values and questions about probabilities: use $G(s)=\mathbb{E}(s^{X})$. Real values, or questions about moments: use $M(t)=\mathbb{E}(e^{tX})$, after checking it is finite near $0$. Heavy tails or a limit theorem: use the characteristic function instead.
2. **Build it from the pieces.** Write the quantity of interest as a sum of independent variables (multiply), as a sum of a random number of them (compose), or as an affine function (rule 9). Almost never sum the defining series directly.
3. **Recognise the answer.** Keep a short table: Bernoulli$(p)$ gives $q+ps$; $\mathrm{bin}(n,p)$ gives $(q+ps)^{n}$; Poisson$(\lambda)$ gives $e^{\lambda(s-1)}$; geometric on $\{1,2,\dots\}$ gives $ps/(1-qs)$; $N(\mu,\sigma^2)$ has $M(t)=\exp(\mu t+\tfrac12\sigma^2t^2)$; exponential$(\lambda)$ has $M(t)=\lambda/(\lambda-t)$ for $t<\lambda$. By uniqueness, matching one of these identifies the distribution.
4. **Extract what you need.** Probabilities: $\mathbb{P}(X=n) = G^{(n)}(0)/n!$, or read off the coefficient of $s^n$ in a closed form expanded as a series. Moments: differentiate at $s=1$ (factorial moments) or at $t=0$ (ordinary moments). Cumulants: expand $\log M$.
5. **Check.** $G(1)=1$ and $M(0)=1$ always; $G(0)$ must equal $\mathbb{P}(X=0)$; $G'(1)$ must be the mean you expect; and in a composite model the answer must reduce to the known one when the randomness is switched off (for example, $N$ constant in rule 5).
6. **For a branching process**, write down $G$, compute $\mu=G'(1)$, and solve $s=G(s)$ on $[0,1]$; the smallest non-negative root is the extinction probability, and $\mu \lessgtr 1$ tells you in advance whether it is $1$.
:::

:::example[A branching process with a quadratic offspring generating function]{provenance=original}
A neutron entering a block of fissile material is absorbed, and the absorption produces $0$, $1$ or $2$ further neutrons with probabilities

$$
p_0 = \tfrac14, \qquad p_1 = \tfrac14, \qquad p_2 = \tfrac12 .
$$

Each neutron behaves independently and in the same way, so the generations of neutrons form a branching process with $Z_0=1$ and

$$
G(s) \;=\; \tfrac14 + \tfrac14 s + \tfrac12 s^{2} .
$$

(Check: $G(1) = \tfrac14+\tfrac14+\tfrac12 = 1$, and $G(0)=\tfrac14=p_0$.)

**Step 1: the mean and variance of a family.**

$$
\mu = G'(1) = \tfrac14 + 1 = \tfrac54 = 1.25 ,
\qquad
G''(1) = 1 ,
\qquad
\sigma^{2} = G''(1)+G'(1)-G'(1)^{2} = 1 + \tfrac54 - \tfrac{25}{16} = \tfrac{11}{16} = 0.6875 .
$$

Since $\mu > 1$ the chain is supercritical and extinction is not certain.

**Step 2: the second generation, explicitly.** By the iteration rule, $G_2 = G\circ G$. Substituting,

$$
G_2(s) = \tfrac14 + \tfrac14\Bigl(\tfrac14+\tfrac14 s+\tfrac12 s^2\Bigr) + \tfrac12\Bigl(\tfrac14+\tfrac14 s+\tfrac12 s^2\Bigr)^{2}
= \tfrac{11}{32} + \tfrac18 s + \tfrac{9}{32}s^{2} + \tfrac18 s^{3} + \tfrac18 s^{4} .
$$

The five coefficients sum to $\tfrac{11}{32}+\tfrac{4}{32}+\tfrac{9}{32}+\tfrac{4}{32}+\tfrac{4}{32} = 1$, as they must, and they are the mass function of $Z_2$: for instance $\mathbb{P}(Z_2 = 3) = \tfrac18$. The degree is $4$, correct because at most two neutrons each produce at most two.

**Step 3: moments of later generations, two ways.** From $G_2$ directly, $G_2'(1) = \tfrac18+2\cdot\tfrac9{32}+3\cdot\tfrac18+4\cdot\tfrac18 = \tfrac{25}{16}$, and $G_2''(1)+G_2'(1)-G_2'(1)^2 = \tfrac{495}{256}$. From the general formulas,

$$
\mathbb{E}(Z_2) = \mu^{2} = \tfrac{25}{16} = 1.5625 ,
\qquad
\operatorname{var}(Z_2) = \frac{\sigma^{2}(\mu^{2}-1)\mu}{\mu-1} = \frac{\tfrac{11}{16}\cdot\tfrac{9}{16}\cdot\tfrac54}{\tfrac14} = \frac{495}{256} = 1.93359 ,
$$

the same numbers. For the third generation, $\mathbb{E}(Z_3) = \mu^{3} = \tfrac{125}{64} = 1.953125$ and

$$
\operatorname{var}(Z_3) = \frac{\sigma^{2}(\mu^{3}-1)\mu^{2}}{\mu-1} = \frac{\tfrac{11}{16}\cdot\tfrac{61}{64}\cdot\tfrac{25}{16}}{\tfrac14} = \frac{16775}{4096} = 4.09546 .
$$

**Step 4: the extinction probability.** Solve $s = G(s)$:

$$
s = \tfrac14+\tfrac14 s+\tfrac12 s^2
\iff 4s = 1 + s + 2s^{2}
\iff 2s^{2}-3s+1 = 0
\iff (2s-1)(s-1) = 0 ,
$$

with roots $s = \tfrac12$ and $s=1$. The smallest non-negative root is

$$
\boxed{\ \eta \;=\; \tfrac12\ }.
$$

So a single initial neutron sets off a chain reaction that dies out with probability $\tfrac12$ and grows without bound with probability $\tfrac12$. This is consistent with $\mu>1$, which guarantees $\eta<1$.

**Step 5: a check on the convergence.** The theorem says $\eta_n = G_n(0)$ increases to $\eta$. Iterating $\eta_n = G(\eta_{n-1})$ from $\eta_0=0$:

$$
\eta_1 = \tfrac14 = 0.25,\quad
\eta_2 = \tfrac{11}{32} = 0.34375,\quad
\eta_3 = \tfrac{809}{2048} = 0.395020,\quad
\eta_4 = 0.426775,\quad
\eta_5 = 0.447762,\quad
\eta_6 = 0.462186 ,
$$

increasing towards $0.5$, as predicted. Note how slowly: the convergence rate is $G'(\eta) = \tfrac14+\eta = \tfrac34$ per generation. (The value $\eta_2 = \tfrac{11}{32}$ agrees with the constant term of $G_2$ computed in step 2, an independent check. All the numbers in this example were verified symbolically.)

**Step 6: what happens if the material is made slightly less reactive.** Replace $p_2$ by $\tfrac14$ and $p_1$ by $\tfrac12$: then $G(s) = \tfrac14+\tfrac12 s+\tfrac14 s^2$, $\mu = \tfrac12+\tfrac12 = 1$, and $\sigma^2 = \tfrac12+1-1 = \tfrac12 > 0$. The fixed-point equation becomes $4s = 1+2s+s^2$, that is $(s-1)^2 = 0$, with the single root $s=1$: extinction is now certain, although the expected population size is exactly $1$ in every generation. The transition between $\eta=\tfrac12$ and $\eta=1$ is entirely controlled by $\mu$ crossing $1$ - the criticality condition of a chain reaction.
:::

:::application[Chain reactions, queues, polymers and epidemics]{provenance=original}
**Nuclear chain reactions.** The example above is the standard neutron-multiplication model: $\mu$ is the effective multiplication factor $k$ of reactor physics, and the three regimes $\mu<1$, $\mu=1$, $\mu>1$ are subcritical, critical and supercritical. The extinction probability $\eta$ is the chance that a single stray neutron fails to start a divergent chain, which is why reactor startup is a statistical rather than a deterministic event and why source neutrons are deliberately supplied. Electromagnetic and hadronic cascades in detectors, and photon multiplication in a photomultiplier dynode chain, are modelled the same way, with the generating function of the per-stage gain composed once per stage.

**Compound Poisson totals.** Rule 5 with $N$ Poisson is the compound Poisson model: total charge deposited by a Poisson number of independent scattering events, total claim size in insurance, total shot noise in a photodiode. The random sum formula gives the transform immediately, and expanding $\log M_S$ gives the cumulants of the total in one line - the basis of Campbell's theorem for shot noise.

**Queues and recurrence times.** The equilibrium queue length of an M/G/1 queue is found by writing a balance relation between generating functions and solving it; the first-return time of a random walk is obtained in the same way, and :ref[]{to=prob.random-walks} uses the convolution rule to turn the renewal relation between return probabilities into an algebraic one.

**Polymers and percolation.** The size distribution of a branched polymer cluster is a branching process in the mean-field approximation, and the gel point - the onset of an infinite connected cluster - is precisely the critical point $\mu=1$. The same calculation gives the percolation threshold on a tree and the giant-component threshold in a random network, where $\mu$ is the mean number of further edges reached from an edge.

**Epidemics.** In the early stage of an outbreak, infections form a branching process whose mean offspring number is the basic reproduction number $R_0$. The extinction theorem says that an outbreak started by one case fizzles out with probability $1$ if $R_0 \le 1$, and with probability $\eta<1$ given by the smallest root of $s=G(s)$ if $R_0>1$ - a statement about the whole offspring distribution, not just its mean, which is why superspreading (large $\sigma^2$ at fixed $\mu$) raises the chance of early extinction while leaving $R_0$ unchanged.

**Large deviations.** The cumulant generating function $K(t) = \log M(t)$ is the object whose Legendre transform is the rate function of :ref[]{to=prob.large-deviations}, and the exponential Markov bound of :ref[]{to=prob.probability-inequalities} is an inequality about $M$ directly.
:::
