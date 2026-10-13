---
id: prob.characteristic-functions
title: Characteristic functions
kind: theorem
level: core
summary: Defines $\varphi_X(t)=\mathbb{E}(e^{itX})$, proves that it is bounded, uniformly continuous and non-negative definite and that it turns independent sums into products and affine maps into phases, states the inversion and continuity theorems and the moment expansion, and inverts $\sin^2 t/t^2$ to the triangular density as a worked check.
prereqs: [prob.expectation-variance, prob.generating-functions, fourier.fourier-inversion, prob.convergence-random-variables]
provenance: adapted
sources:
  - work: grimmett-stirzaker-2020
    loc: "§5.7 Characteristic functions, pp. 203-206: Definition (5.7.1) of the moment generating function with the Laplace-transform footnote and properties (a)-(c), the statement that moment generating functions may be infinite, Definition (5.7.2) of $\\varphi(t)=\\mathbb{E}(e^{itX})$ with the reading $\\varphi(t)=\\mathbb{E}(\\cos tX)+i\\mathbb{E}(\\sin tX)$ and the identification with $\\int e^{itx}\\,dF(x)$, Theorem (5.7.3)(a)-(c) (boundedness, uniform continuity, non-negative definiteness) with its proof and the attribution of the converse to Bochner, Theorem (5.7.4)(a)-(b) (what the existence of $\\varphi^{(k)}(0)$ gives, and the expansion $\\varphi(t)=\\sum_{j\\le k}\\mathbb{E}(X^{j})(it)^{j}/j!+o(t^{k})$ with $\\varphi^{(k)}(0)=i^{k}\\mathbb{E}(X^{k})$) stated with its proof referred elsewhere, Theorem (5.7.5) ($\\varphi_{X+Y}=\\varphi_X\\varphi_Y$ for independent $X,Y$) and Theorem (5.7.6) ($\\varphi_{aX+b}(t)=e^{itb}\\varphi_X(at)$) with their proofs, Definition (5.7.7) of the joint characteristic function, Theorem (5.7.8) (independence is equivalent to factorisation of the joint characteristic function) with the warning at eq. (5.7.9) that $\\varphi_{X+Y}=\\varphi_X\\varphi_Y$ alone is not sufficient, Remark (5.7.10) (the moment problem, the log-normal counterexample, and the sufficiency of a finite moment generating function near the origin) and Remark (5.7.11) with Theorem (5.7.12) relating $M$ and $\\varphi$ by analytic continuation; §5.8 Examples of characteristic functions, pp. 208-211: Examples (5.8.1)-(5.8.5) and (5.8.8) (Bernoulli, binomial, exponential, Cauchy with the semicircular contour, normal via analytic continuation of $M(s)=e^{s^{2}/2}$ and then $\\varphi_Y(t)=\\exp(i\\mu t-\\tfrac12\\sigma^{2}t^{2})$, and gamma and chi-squared), Example (5.8.6) (the multivariate normal, $\\varphi(t)=\\exp(-\\tfrac12 tVt')$), and Exercise (5.8.1) (that $\\overline{\\varphi}$, $\\varphi^{2}$, $\\lvert\\varphi\\rvert^{2}$ and $\\operatorname{Re}\\varphi$ are characteristic functions while $\\lvert\\varphi\\rvert$ need not be); §5.9 Inversion and continuity theorems, pp. 212-215: Theorem (5.9.1) (the density inversion formula $f(x)=\\tfrac{1}{2\\pi}\\int e^{-itx}\\varphi(t)\\,dt$ at points of differentiability, proved by reference to Fourier inversion and with the principal-value caveat), the sufficient condition $\\int\\lvert\\varphi\\rvert<\\infty$, the general Inversion theorem (5.9.2) for $\\overline F(b)-\\overline F(a)$, Corollary (5.9.3) (equality of characteristic functions is equality of distributions) with its proof, the footnote that agreement on a bounded interval is not enough, the two-dimensional inversion formula, and the Continuity theorem (5.9.5)(a)-(b) with the requirement that the limit be continuous at $t=0$; §5.1, Examples (5.1.17)(a) and (d), p. 171: the probability generating functions $s^{c}$ of a constant and $e^{\\lambda(s-1)}$ of a Poisson variable, which give the point-mass and Poisson rows of the table on putting $s=e^{it}$; §5.12, Problems 22, 24, 27(b) and 30, p. 234: symmetry of $X$ is equivalent to $\\operatorname{Im}\\varphi\\equiv0$, the average of independent Cauchy variables is Cauchy, the pair of distributions - one continuous, one discrete - whose characteristic functions agree on $[-\\pi,\\pi]$, and $i^{m+n}\\mathbb{E}(X^{m}Y^{n})=\\partial^{m+n}\\varphi/\\partial s^{m}\\partial t^{n}$ at the origin"
    pages: "171, 203-206, 208-215, 234"
    role: the definition, the three basic properties with their proofs, the affine and independent-sum rules with their proofs, the joint characteristic function and the exact form of the independence criterion together with the warning about the insufficient version, the moment theorem, the whole of the inversion and continuity material (statements, with the proofs referred onward), the standard examples, and the problems used for the symmetry criterion, the joint moments and the bounded-interval counterexample; also the probability generating functions of §5.1 behind the point-mass and Poisson rows of the table
  - work: reed-simon-1980
    loc: "§IX.2 The range of the Fourier transform, pp. 329-330: the computation showing that $\\{\\hat\\mu(\\lambda_i-\\lambda_j)\\}$ is a positive matrix for a finite positive measure $\\mu$, with their normalisation $\\hat\\mu(\\lambda)=(2\\pi)^{-n/2}\\int e^{-i\\lambda x}d\\mu(x)$, the continuity and boundedness $\\lvert\\hat\\mu\\rvert\\le(2\\pi)^{-n/2}\\mu(\\mathbb{R}^{n})$, the Definition of a function of positive type and the three consequences $f(0)\\ge0$, $f(x)=\\overline{f(-x)}$ and $\\lvert f(x)\\rvert\\le f(0)$, and Theorem IX.9 (Bochner's theorem: the Fourier transforms of the finite positive measures on $\\mathbb{R}^{n}$ are exactly the cone of functions of positive type) with the proof via Stone's theorem"
    pages: "329-330"
    role: the precise statement and proof of Bochner's theorem, which is the converse that Grimmett and Stirzaker quote without proof, together with the definition of a function of positive type and the elementary consequences of it; also their Fourier normalisation, recorded because it differs from the probabilists'. These pages treat characteristic functions under the names "Fourier transform of a finite positive measure" and "function of positive type"; the phrase "characteristic function" does not occur on them, and in Reed and Simon it would in any case mean an indicator function
  - work: rhb-2006
    loc: "§30.7.3 Characteristic function, pp. 1165-1166: the definition (30.91) of $C_X(t)=\\mathbb{E}[e^{itX}]$ for discrete and continuous distributions, the relation $C_X(t)=M_X(it)$, the statement that every relation obeyed by the moment generating function transfers by substituting $it$ for $t$, the moment formula $\\mathbb{E}[X^{n}]=(-i)^{n}C_X^{(n)}(0)$ and the affine rule $C_Y(t)=e^{ibt}C_X(at)$, the argument that replacing $e^{tX}$ by $e^{itX}$ removes all convergence difficulties, and the inverse Fourier transform $f(x)=\\tfrac{1}{2\\pi}\\int C_X(t)e^{-itx}\\,dt$; §30.7.2, p. 1165, the uniqueness statement for the moment generating function with the footnote that a rigorous proof is beyond the book's scope"
    pages: "1165-1166"
    role: the physicists' notation and the explicit dictionary between the moment generating function and the characteristic function, the moment formula in the $(-i)^{n}$ form, the convergence argument for preferring $\\varphi$ over $M$, and the inversion formula written as a Fourier inverse
  - work: folland-1999
    loc: "§10.1, p. 314: the dictionary between analysts' and probabilists' terms, in which the Fourier transform of a measure is what probabilists call the characteristic function of a distribution, and the analysts' characteristic function is the probabilists' indicator function; §8.3, pp. 251-253: Theorem 8.26 (the Fourier Inversion Theorem, with the hypothesis $f,\\hat f\\in L^{1}$ and the almost-everywhere conclusion) and Corollary 8.27 (uniqueness)"
    pages: "251-253, 314"
    role: the identification of the characteristic function as the Fourier transform of the distribution, the terminological warning that "characteristic function" means the indicator function in analysis, and the measure-theoretic inversion and uniqueness statements underlying the probabilistic ones
---

:::note[Why a complex exponential]{provenance=original}
The moment generating function $M(t)=\mathbb{E}(e^{tX})$ of :ref[]{to=prob.generating-functions} does everything one wants - until the integral diverges, which it does for the Cauchy distribution at every $t\ne0$ and for any heavy-tailed law on half the line. Replacing the real exponential by $e^{itX}$ cures this at a stroke: $\lvert e^{itX}\rvert = 1$, so the expectation exists for every random variable and every real $t$, with no hypothesis whatever. :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§30.7.3, p. 1166"} give exactly this as the reason for preferring the characteristic function.

What is gained is not only safety. The characteristic function is the Fourier transform of the distribution - :cite[Folland]{work=folland-1999 loc="§10.1, p. 314"} lists the two names as translations of one another in his dictionary between analysts' and probabilists' usage - so the whole apparatus of :ref[]{to=fourier.fourier-inversion} becomes available: the distribution can be recovered from $\varphi$, convolution becomes multiplication, and convergence of distributions becomes pointwise convergence of transforms. That last equivalence, the continuity theorem, is what makes the proof of :ref[the central limit theorem]{to=prob.central-limit-theorem} three lines long.

One warning about words. In analysis, "characteristic function" means the indicator function $\chi_E$ of a set; Folland's dictionary records the clash. In this chapter the term always means $\mathbb{E}(e^{itX})$.
:::

:::definition[The characteristic function]{provenance=adapted src="grimmett-stirzaker-2020:§5.7, Definition (5.7.2) with the surrounding discussion and Definition (5.7.7), pp. 204-205; rhb-2006:§30.7.3, eq. (30.91) and the relation $C_X(t)=M_X(it)$, pp. 1165-1166"}
The **characteristic function** of a real random variable $X$ is the function $\varphi_X : \mathbb{R}\to\mathbb{C}$,

$$
\varphi_X(t) \;=\; \mathbb{E}\bigl(e^{itX}\bigr) \;=\; \mathbb{E}\bigl(\cos tX\bigr) \;+\; i\,\mathbb{E}\bigl(\sin tX\bigr) ,
$$

the second expression being the definition of the expectation of a complex-valued random variable and showing that $\varphi_X(t)$ is defined for every $t$, since $\cos tX$ and $\sin tX$ are bounded. Equivalently $\varphi_X(t) = \int_{\mathbb{R}} e^{itx}\,dF(x)$, which reads $\sum_j e^{itx_j}\mathbb{P}(X=x_j)$ in the discrete case and $\int e^{itx}f(x)\,dx$ in the continuous case. Riley, Hobson and Bence write it $C_X(t)$ and record the relation to the moment generating function,

$$
\varphi_X(t) = M_X(it) \qquad\text{wherever } M_X \text{ is defined} ,
$$

so that any identity for $M$ transfers by substituting $it$ for $t$ - with the caveat of the remark below that this substitution needs justification, since $M$ may be finite nowhere but the origin.

**Relation to the Fourier transform.** If $X$ has density $f$ then, in the convention of :ref[]{to=fourier.fourier-transform} where $\hat f(k)=\int f(x)e^{-ikx}dx$,

$$
\varphi_X(t) \;=\; \hat f(-t) ,
\qquad\text{so}\qquad
f(x) \;=\; \frac{1}{2\pi}\int_{-\infty}^{\infty}\hat f(k)e^{ikx}\,dk \;=\; \frac{1}{2\pi}\int_{-\infty}^{\infty}\varphi_X(t)\,e^{-itx}\,dt .
$$

The probabilists' sign convention is the opposite of the handbook's forward transform, and this is the only difference. Reed and Simon carry an extra $(2\pi)^{-n/2}$: their transform of a measure is $\hat\mu(\lambda) = (2\pi)^{-n/2}\int e^{-i\lambda x}d\mu(x)$, so for the distribution of $X$ in one dimension $\hat\mu(\lambda) = (2\pi)^{-1/2}\varphi_X(-\lambda)$.

**Joint characteristic function.** For random variables $X$ and $Y$ on the same probability space,

$$
\varphi_{X,Y}(s,t) \;=\; \mathbb{E}\bigl(e^{isX + itY}\bigr) ,
$$

and similarly for a random vector $X$ on $\mathbb{R}^n$, $\varphi_X(t) = \mathbb{E}\bigl(e^{it^{T}X}\bigr)$ for $t \in \mathbb{R}^n$.

**Non-negative definiteness.** A function $\phi:\mathbb{R}\to\mathbb{C}$ is **non-negative definite** if

$$
\sum_{j,k=1}^{n} \phi(t_j - t_k)\, z_j\, \overline{z_k} \;\ge\; 0
$$

for every $n$, all real $t_1,\dots,t_n$ and all complex $z_1,\dots,z_n$. Reed and Simon call a bounded continuous $\phi$ with this property a **function of positive type**, and record three immediate consequences of the definition: $\phi(0)\ge0$, $\phi(-x) = \overline{\phi(x)}$ and $\lvert\phi(x)\rvert\le\phi(0)$.
:::

:::statement[Basic properties]{provenance=adapted src="grimmett-stirzaker-2020:§5.7, Theorem (5.7.3)(a)-(c) with the attribution of the converse to Bochner, Theorems (5.7.5) and (5.7.6), Theorem (5.7.8) with eq. (5.7.9), pp. 204-206, and Problem (5.12.22), p. 234; reed-simon-1980:§IX.2, Theorem IX.9, p. 330"}
Let $X$, $Y$ be random variables and $a, b \in \mathbb{R}$.

1. **Normalisation and bound.** $\varphi_X(0) = 1$ and $\lvert\varphi_X(t)\rvert \le 1$ for every $t$.
2. **Uniform continuity.** $\varphi_X$ is uniformly continuous on $\mathbb{R}$ - for *every* $X$, with no moment hypothesis.
3. **Non-negative definiteness.** $\varphi_X$ is non-negative definite in the sense above.
4. **Bochner's theorem (the converse).** Properties 1-3 are not merely necessary but sufficient: whenever $\phi$ is continuous, non-negative definite and normalised by $\phi(0)=1$, some random variable has $\phi$ for its characteristic function - and by the uniqueness statement below that variable's distribution is the only one with this $\phi$. Grimmett and Stirzaker state this and give no proof. :cite[Reed and Simon]{work=reed-simon-1980 loc="§IX.2, Theorem IX.9, p. 330"} prove the measure-theoretic version: on $\mathbb{R}^{n}$, the cone they call the functions of positive type is precisely the image of the finite positive measures under their Fourier transform. Translating by $\hat\mu(\lambda)=(2\pi)^{-1/2}\varphi(-\lambda)$ and normalising at the origin turns their theorem into the statement above.
5. **Affine images.** $\varphi_{aX+b}(t) = e^{itb}\,\varphi_X(at)$.
6. **Independent sums.** If $X$ and $Y$ are **independent** then $\varphi_{X+Y}(t) = \varphi_X(t)\,\varphi_Y(t)$.
7. **Independence criterion.** Independence of $X$ and $Y$ is **equivalent** to the factorisation $\varphi_{X,Y}(s,t) = \varphi_X(s)\varphi_Y(t)$ holding at every pair of real arguments $s,t$. It is **not** enough that $\varphi_{X+Y}(t) = \varphi_X(t)\varphi_Y(t)$ for all $t$, which is the statement with $s=t$ only; Grimmett and Stirzaker flag this explicitly and set the construction of a counterexample as an exercise.
8. **Symmetry.** $\varphi_X(-t) = \overline{\varphi_X(t)}$ always; and $X$ has the same distribution as $-X$ if and only if $\varphi_X$ is real-valued, that is $\operatorname{Im}\varphi_X \equiv 0$.
9. **Stability of the class.** If $\varphi$ is a characteristic function then so are $\overline\varphi$, $\varphi^2$, $\lvert\varphi\rvert^2$ and $\operatorname{Re}\varphi$; but $\lvert\varphi\rvert$ need not be one.
:::

:::statement[Moments]{provenance=adapted src="grimmett-stirzaker-2020:§5.7, Theorem (5.7.4)(a)-(b), p. 205, Remark (5.7.10) and Theorem (5.7.12), p. 206, and Problem (5.12.30), p. 234; rhb-2006:§30.7.3, the moment formula, p. 1166"}
Let $\varphi = \varphi_X$ and let $k \ge 1$ be an integer.

- **(a) From derivatives to moments.** If $\varphi^{(k)}(0)$ exists then $\mathbb{E}\lvert X^{k}\rvert < \infty$ when $k$ is **even**, and $\mathbb{E}\lvert X^{k-1}\rvert < \infty$ when $k$ is **odd**. Note what this does and does not promise: an odd derivative buys only the moment one order below it.
- **(b) From moments to the expansion.** If $\mathbb{E}\lvert X^{k}\rvert<\infty$ then
  $$
  \varphi(t) \;=\; \sum_{j=0}^{k}\frac{\mathbb{E}(X^{j})}{j!}\,(it)^{j} \;+\; o(t^{k}) \qquad (t\to0) ,
  \qquad\text{and}\qquad
  \varphi^{(k)}(0) \;=\; i^{k}\,\mathbb{E}(X^{k}) .
  $$
  Riley, Hobson and Bence write the second relation as $\mathbb{E}(X^{n}) = (-i)^{n}\varphi^{(n)}(0)$, which is the same statement.
- **(c) Joint moments.** $\displaystyle i^{m+n}\,\mathbb{E}(X^{m}Y^{n}) = \frac{\partial^{m+n}\varphi_{X,Y}}{\partial s^{m}\,\partial t^{n}}\bigg|_{s=t=0}$, subject to the appropriate differentiability.
- **(d) The moment problem.** The moments do not always determine the distribution: Grimmett and Stirzaker record that distinct distribution functions can have identical moments of every order, the usual example being built from the log-normal, and that no simple necessary and sufficient condition is known. The simplest condition they offer as sufficient: $M(t)=\mathbb{E}(e^{tX})$ should be finite throughout some neighbourhood of the origin. They also state, as a theorem whose proof they omit, that for $a>0$ the three conditions "$\lvert M(t)\rvert<\infty$ for $\lvert t\rvert<a$", "$\varphi$ is analytic on the strip $\lvert\operatorname{Im}z\rvert<a$" and "$\limsup_k (\lvert m_k\rvert/k!)^{1/k}\le 1/a$" are equivalent, and that under any of them $M$ extends analytically with $\varphi(t)=M(it)$.

Grimmett and Stirzaker state (a) and (b) without proof, remarking that it is Taylor's theorem for a function of a complex variable and referring the reader to other texts; we follow them.
:::

:::statement[Inversion and continuity]{provenance=adapted src="grimmett-stirzaker-2020:§5.9, Theorem (5.9.1) with the integrability condition, Inversion theorem (5.9.2), Corollary (5.9.3) with its footnote, the two-dimensional formula, and Continuity theorem (5.9.5), pp. 212-214; rhb-2006:§30.7.3, the inverse transform, p. 1166; folland-1999:§8.3, Theorem 8.26 and Corollary 8.27, pp. 252-253"}
**Inversion, density form.** If $X$ is continuous with density $f$ and characteristic function $\varphi$, then

$$
f(x) \;=\; \frac{1}{2\pi}\int_{-\infty}^{\infty} e^{-itx}\,\varphi(t)\,dt
$$

at every $x$ at which $f$ is differentiable. This is the Fourier inversion theorem of :ref[]{to=fourier.fourier-inversion} written in probabilists' notation; where the integral does not converge absolutely it is read as a principal value. Absolute integrability, $\int_{-\infty}^{\infty}\lvert\varphi(t)\rvert\,dt < \infty$, suffices to place $\varphi$ among the transforms of variables possessing a density; it is not required. :cite[Folland]{work=folland-1999 loc="§8.3, Theorem 8.26, p. 252"} states the underlying $L^1$ theorem with the hypothesis that both the function and its transform are integrable, the conclusion holding almost everywhere.

**Inversion, general form.** Let $X$ have distribution function $F$ and characteristic function $\varphi$, and define $\overline F(x) = \tfrac12\bigl(F(x) + \lim_{y\uparrow x}F(y)\bigr)$, the midpoint value at a jump. Then for all $a<b$,

$$
\overline F(b) - \overline F(a) \;=\; \lim_{N\to\infty}\int_{-N}^{N}\frac{e^{-iat}-e^{-ibt}}{2\pi i t}\,\varphi(t)\,dt .
$$

No assumption is made about the type of $X$: this holds for discrete, continuous and mixed distributions alike.

**Uniqueness.** Agreement of two characteristic functions at every real argument is **equivalent** to agreement of the two distribution functions everywhere. Grimmett and Stirzaker add a footnote worth keeping: agreement of $\varphi_X$ and $\varphi_Y$ on a *bounded interval* does not force $F_X=F_Y$, and they give an example.

**Joint inversion.** If $X,Y$ have joint density $f$ and joint characteristic function $\varphi$, then at every point of differentiability of $f$,

$$
f(x,y) \;=\; \frac{1}{4\pi^{2}}\iint_{\mathbb{R}^{2}} e^{-isx}e^{-ity}\,\varphi(s,t)\,ds\,dt ,
$$

from which the independence criterion 7 follows.

**Continuity theorem.** Let $F_1,F_2,\dots$ be distribution functions with characteristic functions $\varphi_1,\varphi_2,\dots$.

- **(a)** Suppose $F_n\to F$, where $F$ is a distribution function whose characteristic function is $\varphi$. Then $\varphi_n(t)\to\varphi(t)$ at every real $t$.
- **(b)** Conversely, suppose the pointwise limit $\varphi(t)=\lim_{n\to\infty}\varphi_n(t)$ exists at every real $t$, **and that this limit function is continuous at the origin**. Then there is a distribution function $F$ whose characteristic function is $\varphi$, and $F_n\to F$.

Here $F_n\to F$ means convergence at every continuity point of $F$, the mode of :ref[]{to=prob.convergence-random-variables}. Grimmett and Stirzaker refer the proofs of the inversion and continuity theorems to other texts; we do the same.
:::

:::statement[The standard characteristic functions]{provenance=adapted src="grimmett-stirzaker-2020:§5.8, Examples (5.8.1)-(5.8.5) and (5.8.8), pp. 208-211, for the Bernoulli, binomial, exponential, Cauchy, normal, gamma and chi-squared rows; grimmett-stirzaker-2020:§5.8, Example (5.8.6), pp. 209-210, for $N(0,V)$, extended to $N(\mu,V)$ by Theorem (5.7.6); grimmett-stirzaker-2020:§5.1, Examples (5.1.17)(a) and (d), p. 171, for the point-mass and Poisson probability generating functions $s^{c}$ and $e^{\lambda(s-1)}$, converted by $\varphi_X(t)=G_X(e^{it})$"}
| distribution | density or mass function | $\varphi(t)$ |
|---|---|---|
| point mass at $c$ | $\mathbb{P}(X=c)=1$ | $e^{itc}$ |
| Bernoulli$(p)$ | $\mathbb{P}(X=1)=p$, $\mathbb{P}(X=0)=q$ | $q + pe^{it}$ |
| $\mathrm{bin}(n,p)$ | $\binom{n}{k}p^kq^{n-k}$ | $(q+pe^{it})^{n}$ |
| Poisson$(\lambda)$ | $e^{-\lambda}\lambda^{k}/k!$ | $\exp\bigl(\lambda(e^{it}-1)\bigr)$ |
| exponential$(\lambda)$ | $\lambda e^{-\lambda x}$, $x\ge0$ | $\lambda/(\lambda - it)$ |
| gamma $\Gamma(\lambda,s)$ | $\lambda^{s}x^{s-1}e^{-\lambda x}/\Gamma(s)$, $x\ge0$ | $\bigl(\lambda/(\lambda-it)\bigr)^{s}$ |
| $\chi^{2}(d) = \Gamma(\tfrac12,\tfrac d2)$ | | $(1-2it)^{-d/2}$ |
| $N(0,1)$ | $(2\pi)^{-1/2}e^{-x^{2}/2}$ | $e^{-t^{2}/2}$ |
| $N(\mu,\sigma^{2})$ | | $\exp\bigl(i\mu t - \tfrac12\sigma^{2}t^{2}\bigr)$ |
| Cauchy | $1/\bigl(\pi(1+x^{2})\bigr)$ | $e^{-\lvert t\rvert}$ |
| $N(\mu, V)$ on $\mathbb{R}^{n}$ | | $\exp\bigl(it^{T}\mu - \tfrac12 t^{T}Vt\bigr)$ |

Two entries deserve comment. The Cauchy characteristic function $e^{-\lvert t\rvert}$ has a corner at the origin: its one-sided derivatives there are $+1$ from the left and $-1$ from the right, so $\varphi'(0)$ does not exist. Statement (b) read backwards then confirms that the Cauchy law has no mean, since $\mathbb{E}\lvert X\rvert<\infty$ would have forced $\varphi'(0)=i\,\mathbb{E}(X)$ to exist. The implication runs in that direction only: statement (a) at $k=1$ is vacuous (see the remark below), so the absence of a mean does not by itself prevent a characteristic function from being differentiable at $0$, and the corner here has to be read off the formula rather than deduced from the missing moment. And the normal entry is obtained, as Grimmett and Stirzaker emphasise, **not** by substituting $s=it$ into $M(s)=e^{s^{2}/2}$ as if $i$ were real, but by analytic continuation, which their Remark (5.7.11) licenses; they warn twice against treating $i$ as a real number, noting that for the exponential distribution the illegitimate substitution happens to give the right answer and for the Cauchy distribution it gives nothing at all.
:::

:::idea{provenance=original}
Each of the three basic properties has a one-line reason. Boundedness: the integrand has modulus $1$, so the average does too at worst. Uniform continuity: the increment $\varphi(t+h)-\varphi(t)$ is $\mathbb{E}\bigl(e^{itX}(e^{ihX}-1)\bigr)$, whose modulus is bounded by $\mathbb{E}\lvert e^{ihX}-1\rvert$, a quantity depending on $h$ alone and tending to $0$ because the integrand is bounded by $2$ and tends to $0$ pointwise. Non-negative definiteness: the double sum is literally the expected squared modulus of $\sum_j z_je^{it_jX}$, and a squared modulus cannot be negative.

The rules for sums and affine maps are the exponential law $e^{a+b}=e^ae^b$ plus the factorisation of expectations over independent variables - the same two facts that made generating functions multiply in :ref[]{to=prob.generating-functions}. The deep results, inversion and continuity, are not proved here: inversion is the Fourier inversion theorem, and continuity rests on it. What this unit supplies is the dictionary that lets those analytic theorems be read as statements about distributions.
:::

:::proof[The basic properties, and the rules for sums and affine maps]{provenance=adapted src="grimmett-stirzaker-2020:§5.7, proofs of Theorem (5.7.3)(a)-(c), Theorem (5.7.5) and Theorem (5.7.6), pp. 204-205; reed-simon-1980:§IX.2, the positivity computation and its three consequences, p. 329"}
**Property 1.** $\varphi_X(0)=\mathbb{E}(e^{0})=\mathbb{E}(1)=1$. For the bound, $\lvert\mathbb{E}(Z)\rvert \le \mathbb{E}\lvert Z\rvert$ for a complex random variable $Z$, and $\lvert e^{itx}\rvert = 1$ for real $t,x$, so $\lvert\varphi_X(t)\rvert \le \mathbb{E}\lvert e^{itX}\rvert = 1$.

**Property 2.** Fix $h$ and estimate

$$
\bigl\lvert\varphi_X(t+h)-\varphi_X(t)\bigr\rvert
= \bigl\lvert\mathbb{E}\bigl(e^{itX}(e^{ihX}-1)\bigr)\bigr\rvert
\le \mathbb{E}\bigl\lvert e^{ihX}-1\bigr\rvert \;=:\; \epsilon(h) ,
$$

using $\lvert e^{itX}\rvert=1$ again. The right-hand side does not involve $t$, so **uniform** continuity will follow once $\epsilon(h)\to0$. Set $Y_h = \lvert e^{ihX}-1\rvert$. Then $0 \le Y_h \le 2$ for every $h$, and $Y_h \to 0$ pointwise as $h\to0$ because $u\mapsto e^{iu}$ is continuous at $0$. The bounded convergence theorem (:ref[]{to=measure.dominated-convergence}) therefore gives $\mathbb{E}(Y_h)\to0$. **This is where the boundedness of the integrand does the work that no moment hypothesis could**: nothing was assumed about $X$.

**Property 3.** Let $t_1,\dots,t_n$ be real and $z_1,\dots,z_n$ complex, and put $W = \sum_{j} z_j e^{it_jX}$. Then

$$
\lvert W\rvert^{2} = W\overline W = \sum_{j,k} z_j\overline{z_k}\,e^{i(t_j-t_k)X} ,
$$

since $\overline{e^{it_kX}} = e^{-it_kX}$. Taking expectations term by term - a finite sum, so no interchange issue arises - gives

$$
0 \;\le\; \mathbb{E}\bigl(\lvert W\rvert^{2}\bigr) \;=\; \sum_{j,k} z_j\overline{z_k}\,\varphi_X(t_j-t_k) ,
$$

which is the claim. Reed and Simon run the same computation for a finite measure and then read off the three consequences of positivity by specialising: $n=1$ gives $\varphi(0)\ge0$, and $n=2$ with $t_1=x$, $t_2=0$ forces the $2\times2$ matrix $\begin{pmatrix}\varphi(0)&\varphi(x)\\ \varphi(-x)&\varphi(0)\end{pmatrix}$ to be self-adjoint with non-negative determinant, giving $\varphi(-x)=\overline{\varphi(x)}$ and $\lvert\varphi(x)\rvert\le\varphi(0)$. With $\varphi(0)=1$ this reproves property 1 and the first half of property 8.

**Property 5.** $\varphi_{aX+b}(t) = \mathbb{E}\bigl(e^{it(aX+b)}\bigr) = e^{itb}\,\mathbb{E}\bigl(e^{i(at)X}\bigr) = e^{itb}\varphi_X(at)$, the constant $e^{itb}$ coming out of the expectation because it is not random.

**Property 6.** If $X$ and $Y$ are independent then so are the complex random variables $e^{itX}$ and $e^{itY}$, being functions of $X$ and of $Y$ separately. Expanding both into real and imaginary parts, multiplying out, applying $\mathbb{E}(UV)=\mathbb{E}(U)\mathbb{E}(V)$ to each of the four real products, and reassembling gives

$$
\varphi_{X+Y}(t) = \mathbb{E}\bigl(e^{itX}e^{itY}\bigr) = \mathbb{E}\bigl(e^{itX}\bigr)\mathbb{E}\bigl(e^{itY}\bigr) = \varphi_X(t)\varphi_Y(t) .
$$

This is the route Grimmett and Stirzaker indicate; the detour through real and imaginary parts is needed because the factorisation theorem for expectations is stated for real variables.

**Property 7, forward direction.** The argument of property 6 with $e^{isX}$ and $e^{itY}$ gives the factorisation of $\varphi_{X,Y}$. For the converse one inverts the joint characteristic function and finds that the joint distribution function factorises; this uses the two-dimensional inversion formula and we do not reproduce it.

**Property 8.** $\overline{\varphi_X(t)} = \mathbb{E}\bigl(\overline{e^{itX}}\bigr) = \mathbb{E}\bigl(e^{-itX}\bigr) = \varphi_X(-t)$. By property 5 with $a=-1$, $b=0$, the characteristic function of $-X$ is $\varphi_X(-t) = \overline{\varphi_X(t)}$. So $X$ and $-X$ have the same characteristic function exactly when $\varphi_X = \overline{\varphi_X}$, that is when $\varphi_X$ is real; by uniqueness, that happens exactly when $X$ and $-X$ have the same distribution.

**Property 9.** $\overline\varphi = \varphi_{-X}$ by property 8. If $X'$ is an independent copy of $X$ then $\varphi^{2} = \varphi_{X+X'}$ and $\lvert\varphi\rvert^{2} = \varphi\overline\varphi = \varphi_{X-X'}$, both by property 6. Finally $\operatorname{Re}\varphi = \tfrac12(\varphi+\overline\varphi)$ is the characteristic function of the variable equal to $X$ or to $-X$ with probability $\tfrac12$ each, independently of $X$, since a mixture of distributions has the corresponding mixture of characteristic functions. That $\lvert\varphi\rvert$ need not be a characteristic function is Grimmett and Stirzaker's exercise, and is why the square in $\lvert\varphi\rvert^{2}$ matters. $\square$
:::

:::remark[Where the hypotheses are used, and four traps]{provenance=original}
- **Property 6 uses independence and property 7 shows that the converse needs more.** The single-variable identity $\varphi_{X+Y}=\varphi_X\varphi_Y$ is the factorisation of the *joint* characteristic function evaluated only on the diagonal $s=t$, and a function of two variables is not determined by its values on a line. Grimmett and Stirzaker make this point at their eq. (5.7.9) and ask the reader to construct dependent $X$, $Y$ satisfying it. So "the transform of the sum is the product of the transforms" is evidence of independence, never a proof of it.
- **Continuity of the limit at $t=0$ is indispensable in the continuity theorem, and failure is not a technicality.** Let $Z\sim N(0,1)$ and $X_n = nZ$. By property 5, $\varphi_n(t) = e^{-n^{2}t^{2}/2}$, which converges pointwise to the function equal to $1$ at $t=0$ and $0$ elsewhere. That limit is not continuous at $0$, and correspondingly there is no limiting distribution: $F_n(x)\to\tfrac12$ for every fixed $x$, and $\tfrac12$ is not a distribution function. The probability mass has escaped to $\pm\infty$, and the discontinuity of the limit at the origin is exactly the signal that it did.
- **An odd derivative buys one moment less than you expect.** Statement (a) says that the existence of $\varphi'(0)$ gives only $\mathbb{E}\lvert X^{0}\rvert<\infty$, which is no information at all; it does *not* give $\mathbb{E}\lvert X\rvert<\infty$. Even derivatives are different: $\varphi''(0)$ existing does force $\mathbb{E}(X^{2})<\infty$. The asymmetry is real and is why the hypothesis of the central limit theorem is a finite **variance** and not a finite mean plus a differentiable transform.
- **Characteristic functions that agree on an interval need not agree.** Uniqueness requires agreement on all of $\mathbb{R}$. Grimmett and Stirzaker's footnote to Corollary (5.9.3) records that agreement on a bounded interval is not enough and points to their :cite[Problem (5.12.27)(b)]{work=grimmett-stirzaker-2020 loc="§5.12, Problem 27(b), p. 234"}, which supplies the pair: one continuous distribution and one discrete distribution whose characteristic functions coincide on $[-\pi,\pi]$ and then part company, the discrete one being periodic. So matching transforms over a finite band of frequencies identifies nothing.
- **The modulus is not a characteristic function.** Property 9 gives $\lvert\varphi\rvert^{2}$ but stops there; Grimmett and Stirzaker's exercise asks for an example where $\lvert\varphi\rvert$ fails. The class of characteristic functions is a convex set, closed under products and under conjugation, but not under square roots. It is not a cone: every characteristic function satisfies $\varphi(0)=1$, so $\lambda\varphi$ is again one only for $\lambda=1$. The cone is Reed and Simon's larger class of functions of positive type, of which the characteristic functions are exactly the members normalised at the origin.
- **$\varphi(t)=M(it)$ is a theorem, not a definition.** Riley, Hobson and Bence state the relation flatly, and it is correct wherever $M$ is finite. But $M$ may be finite only at $t=0$ - the Cauchy case - and then the formula says nothing, while $\varphi(t)=e^{-\lvert t\rvert}$ exists and is perfectly well behaved. Grimmett and Stirzaker's Theorem (5.7.12) states the precise conditions under which the analytic continuation is legitimate: $\lvert M(t)\rvert<\infty$ for $\lvert t\rvert<a$ is equivalent to $\varphi$ being analytic on the strip $\lvert\operatorname{Im}z\rvert<a$. Treating $i$ as a real number inside an integral is not a proof even when the answer is right, a point they make twice.
- **Two notational hazards.** The analysts' "characteristic function" is the indicator function, as Folland's dictionary records; and the probabilists' sign convention $\int e^{+itx}dF$ is opposite to this handbook's forward Fourier transform, while Reed and Simon add a factor $(2\pi)^{-n/2}$. Any formula imported from a Fourier text must be converted before use, by the dictionary given in the definition block.
:::

:::method[Using characteristic functions]{provenance=original}
1. **Write down $\varphi$ for each ingredient**, from the table or by direct integration. For a density supported on a half-line, the integral is usually a contour integral or a Laplace transform in disguise; for a bounded discrete variable it is a finite sum.
2. **Combine.** Independent sums multiply (property 6); affine maps contribute a phase and rescale the argument (property 5); mixtures mix. A standardised sum $(S_n - n\mu)/(\sigma\sqrt n)$ therefore has characteristic function $e^{-it\sqrt n\mu/\sigma}\bigl[\varphi_X\bigl(t/(\sigma\sqrt n)\bigr)\bigr]^{n}$, which is the opening line of the proof of the central limit theorem.
3. **Identify or invert.** If the result is in the table, uniqueness finishes the job. Otherwise, if $\int\lvert\varphi\rvert<\infty$, recover the density from $f(x)=\tfrac1{2\pi}\int e^{-itx}\varphi(t)\,dt$; for a lattice variable, use the general inversion formula or extract the coefficient directly.
4. **For a limit, take the pointwise limit of $\varphi_n$ and check continuity at $0$.** If the limit is continuous at the origin, the continuity theorem converts it into convergence in distribution. If it is not, there is no limit law and mass is escaping.
5. **For moments, expand near $0$.** Match coefficients against $\sum_j \mathbb{E}(X^{j})(it)^{j}/j!$; the coefficient of $t^{j}$ is $i^{j}\mathbb{E}(X^{j})/j!$.
6. **Check.** $\varphi(0)=1$ and $\lvert\varphi(t)\rvert\le1$ must hold; if $X$ is real and symmetric, $\varphi$ must be real and even; the small-$t$ expansion must reproduce the mean and variance you already know; and a corner or other non-smoothness at $t=0$ signals an infinite moment of the corresponding order.
:::

:::example[The sum of two uniforms, by inversion]{provenance=original}
Let $X$ and $Y$ be independent, each uniform on $[-1,1]$, and let $S = X+Y$.

**Step 1: the characteristic function of one summand.** The density is $\tfrac12$ on $[-1,1]$, so for $t\ne0$

$$
\varphi_X(t) = \int_{-1}^{1}\frac12 e^{itx}\,dx = \frac{1}{2}\cdot\frac{e^{it}-e^{-it}}{it} = \frac{\sin t}{t} ,
$$

and $\varphi_X(0)=1$, which is the limit of $\sin t/t$, so $\varphi_X(t) = \operatorname{sinc} t$ is continuous everywhere. Two checks: $\varphi_X$ is real and even, as property 8 requires for a symmetric variable, and $\lvert\varphi_X(t)\rvert\le1$.

**Step 2: the characteristic function of the sum.** By property 6,

$$
\varphi_S(t) = \varphi_X(t)\varphi_Y(t) = \frac{\sin^{2}t}{t^{2}} .
$$

**Step 3: moments from the expansion.** Using $\sin t/t = 1 - t^{2}/6 + t^{4}/120 - \cdots$ and squaring,

$$
\varphi_S(t) = 1 - \frac{t^{2}}{3} + \frac{2t^{4}}{45} + O(t^{6}) .
$$

Matching against $\sum_j \mathbb{E}(S^{j})(it)^{j}/j!$: the coefficient of $t^{2}$ is $-\mathbb{E}(S^{2})/2$, so $\mathbb{E}(S^{2}) = 2/3$; the coefficient of $t^{4}$ is $\mathbb{E}(S^{4})/24$, so

$$
\mathbb{E}(S^{4}) = 24\cdot\frac{2}{45} = \frac{16}{15} = 1.06667 .
$$

Both agree with a direct computation: $\operatorname{var}(X)=\tfrac13$ so $\mathbb{E}(S^{2}) = \tfrac13+\tfrac13 = \tfrac23$, and $\mathbb{E}(S^{4}) = \mathbb{E}(X^{4}) + 6\mathbb{E}(X^{2})\mathbb{E}(Y^{2}) + \mathbb{E}(Y^{4}) = \tfrac15 + 6\cdot\tfrac19 + \tfrac15 = \tfrac{16}{15}$, the odd cross terms vanishing by symmetry.

**Step 4: recover the density by inversion.** Here $\lvert\varphi_S(t)\rvert \le \min(1, t^{-2})$ is integrable, so the density form of the inversion theorem applies:

$$
f_S(z) \;=\; \frac{1}{2\pi}\int_{-\infty}^{\infty} e^{-itz}\,\frac{\sin^{2}t}{t^{2}}\,dt
\;=\; \frac{1}{2\pi}\int_{-\infty}^{\infty} \cos(tz)\,\frac{\sin^{2}t}{t^{2}}\,dt ,
$$

the sine part dropping out because the rest of the integrand is even. Evaluating,

$$
\boxed{\;f_S(z) \;=\; \frac{2-\lvert z\rvert}{4}\quad\text{for }\lvert z\rvert\le2, \qquad f_S(z)=0 \text{ otherwise.}\;}
$$

This is the triangular density on $[-2,2]$, which is also what the convolution of two uniform densities gives directly - the independent confirmation that the inversion was done correctly.

**Step 5: numerical checks.** At $z=0$ the formula predicts $f_S(0)=\tfrac12$, and indeed $\tfrac1{2\pi}\int \sin^{2}t/t^{2}\,dt = \tfrac{1}{2\pi}\cdot\pi = \tfrac12$. At $z=\tfrac12$ it predicts $(2-0.5)/4 = 0.375$, and numerical quadrature of the inversion integral gives $0.37493$, agreeing to the accuracy of the quadrature. Finally

$$
\mathbb{P}\bigl(\lvert S\rvert \le 1\bigr) = \int_{-1}^{1}\frac{2-\lvert z\rvert}{4}\,dz = 2\int_{0}^{1}\frac{2-z}{4}\,dz = \frac12\Bigl(2 - \frac12\Bigr) = \frac34 = 0.75 .
$$

(Every value in this example was verified symbolically and, where an integral was involved, numerically as well.)

**Step 6: a contrast.** Repeat the calculation with $X$ and $Y$ independent Cauchy variables. Then $\varphi_X(t)=e^{-\lvert t\rvert}$, so $\varphi_{S}(t) = e^{-2\lvert t\rvert}$ and, by property 5, the *average* $Z = \tfrac12 S$ has $\varphi_Z(t) = \varphi_S(t/2) = e^{-\lvert t\rvert}$: the average of two independent Cauchy variables is again Cauchy, with no narrowing whatever. Grimmett and Stirzaker set this as a problem and ask why it does not violate the law of large numbers; the answer is that the Cauchy law has no mean, so :ref[]{to=prob.law-of-large-numbers} does not apply. The corner of $e^{-\lvert t\rvert}$ at $t=0$ is where that failure is visible.
:::

:::application[Limit theorems, lineshapes and scattering]{provenance=original}
**The central limit theorem and its relatives.** The standard proof - expand $\varphi$ to second order, raise to the $n$th power, take the limit, apply the continuity theorem - is carried out in :ref[]{to=prob.central-limit-theorem}. The same three steps give the Poisson limit of the binomial, the convergence of a standardised Poisson or gamma variable to the normal, and the stable laws that arise when the variance is infinite; the Cauchy calculation in step 6 above is the simplest stable law other than the normal.

**Infinitely divisible laws and Lévy processes.** A law is infinitely divisible when $\varphi = (\varphi_n)^{n}$ for a characteristic function $\varphi_n$, at every $n$; the Lévy-Khinchin formula classifies all such $\varphi$. These are exactly the laws that can be the increment distributions of a process with stationary independent increments, which is how :ref[]{to=prob.brownian-motion} and the jump processes of mathematical finance and of anomalous diffusion are built.

**Spectral lineshapes.** The intensity profile of a spectral line is the Fourier transform of the correlation function of the emitting dipole, which is a characteristic function in disguise. Doppler broadening, which convolves the emission with a Maxwellian velocity distribution, multiplies transforms and gives a Gaussian profile; collisional broadening gives a Lorentzian, which is the Cauchy density, with the non-differentiability of $e^{-\lvert t\rvert}$ at the origin corresponding to the infinite second moment of a Lorentzian line. A Voigt profile is the convolution of the two, and is handled by multiplying $e^{-\sigma^{2}t^{2}/2}$ by $e^{-\gamma\lvert t\rvert}$.

**Scattering and structure factors.** In diffraction from a disordered medium, the scattered amplitude at wavevector $q$ is $\mathbb{E}(e^{iq\cdot R})$ for the distribution of scatterer positions $R$ - a characteristic function evaluated at the momentum transfer. The Debye-Waller factor $e^{-q^{2}\langle u^{2}\rangle/2}$ is exactly the characteristic function of a Gaussian displacement, and the intermediate scattering function measured in neutron spin-echo experiments is $\varphi_{\Delta R(\tau)}(q)$ for the displacement over time $\tau$.

**Random walks and Fourier methods.** The position after $n$ steps of a random walk has characteristic function $\varphi_{\text{step}}(t)^{n}$, so lattice Green functions, recurrence criteria and first-passage results in :ref[]{to=prob.random-walks} are all obtained by contour integration of a power of one transform. The same device, in the form of the structure function, underlies the numerical solution of master equations by Fourier transform.
:::
