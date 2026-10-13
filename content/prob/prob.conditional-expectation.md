---
id: prob.conditional-expectation
title: Conditional expectation
kind: definition
level: core
summary: Defines the conditional distribution and the conditional expectation $\mathbb{E}(Y \mid X)$ as a random variable, proves the tower, pull-through and conditional-variance rules, shows that $\mathbb{E}(Y \mid X)$ is the function of $X$ closest to $Y$ in mean square, and works a mixture example whose checks are $\log 2$ and $\tfrac12$.
prereqs: [prob.joint-distributions, prob.expectation-variance, prob.probability-spaces]
provenance: adapted
sources:
  - work: grimmett-stirzaker-2020
    loc: "§3.7 Conditional distributions and conditional expectation, pp. 71-73: Definitions (3.7.1) and (3.7.2) (conditional distribution function and mass function given $X=x$), Definition (3.7.3) ($\\psi(X)$ is called the conditional expectation of $Y$ given $X$), Theorem (3.7.4) ($\\mathbb{E}(\\psi(X))=\\mathbb{E}(Y)$) with its proof, and Theorem (3.7.6) with eq. (3.7.7), $\\mathbb{E}(\\psi(X)g(X))=\\mathbb{E}(Yg(X))$, together with the remark that (3.7.7) may be taken as the definition; Exercises (3.7.1)(a)-(f) (linearity, positivity, $\\mathbb{E}(1\\mid X)=1$, independence, the pull-through property, the tower property), Exercise (3.7.2) (almost sure uniqueness) and Exercise (3.7.4) (the conditional variance formula), pp. 73-74; §4.6, pp. 117-119: Definitions (4.6.1) and (4.6.2) (conditional distribution and density functions), the $\\mathrm{d}x\\downarrow0$ motivation preceding them, Theorem (4.6.5) with eq. (4.6.6), and Example (4.6.7) (the standard bivariate normal, $\\mathbb{E}(Y\\mid X)=\\rho X$); §7.7, p. 381: Lemma (7.7.10)(a)-(c) and Lemma (7.7.11), the tower property for random vectors; §7.9 Prediction and conditional expectation, pp. 388-392: the $L^2$ norm (7.9.1)-(7.9.2), Definition (7.9.5) (minimum mean-squared-error predictor), the closed linear space conditions (7.9.7)-(7.9.8), Theorem (7.9.9) (existence and almost sure uniqueness of the closest point) with the parallelogram proof, the Projection theorem (7.9.14) with the equivalence of (7.9.15) and (7.9.16), Theorem (7.9.17) (the best predictor of $Y$ given $X$ is $\\mathbb{E}(Y\\mid X)$) with its proof, the remark that (7.9.17) may be taken as a definition, Example (7.9.18), and Definition (7.9.20) with eqs. (7.9.21)-(7.9.23) (conditioning on a sub-$\\sigma$-field)"
    pages: "71-74, 117-119, 381, 388-392"
    role: the whole framework followed here - conditional mass and density functions, the two-step definition of $\mathbb{E}(Y\mid X)$ as $\psi(X)$, the tower property and its proof, the partial-averaging identity and the remark that it can serve as a definition, the list of algebraic rules, the conditional variance formula, the $L^2$ projection route to best mean-square prediction with the parallelogram argument, and the statement of the general $\sigma$-field definition
  - work: rhb-2006
    loc: "§30.11.3 Marginal and conditional distributions, p. 1199: the marginal (30.130) by summation or integration over the other variable, the conditional distribution $g(x)=f(x,y_0)/f_Y(y_0)$ of $X$ given $Y=y_0$, and the statement that the division by $f_Y(y_0)$ is what makes $g$ normalised"
    pages: "1199"
    role: the physicists' statement of the conditional density as a renormalised slice of the joint density, and the normalisation argument quoted in the remark
  - work: folland-1999
    loc: "§3.2, Exercise 17, p. 93: for a $\\sigma$-finite $(X,\\mathcal{M},\\mu)$, a sub-$\\sigma$-algebra $\\mathcal{N}$ and $\\nu=\\mu|\\mathcal{N}$, every $f\\in L^1(\\mu)$ admits an $\\mathcal{N}$-measurable $g\\in L^1(\\nu)$ with $\\int_E f\\,d\\mu=\\int_E g\\,d\\nu$ for all $E\\in\\mathcal{N}$, unique $\\nu$-almost everywhere, and the remark that $g$ is what probability theory calls the conditional expectation of $f$ on $\\mathcal{N}$"
    pages: "93"
    role: the measure-theoretic existence and uniqueness statement, obtained from the Radon-Nikodym theorem, which covers $L^1$ variables rather than only $L^2$ ones and is reported here as the general construction
---

:::note[What conditioning is for]{provenance=original}
Two quantities are measured together and only one of them is observed. A detector records an energy deposit but not the particle that caused it; a survey records a household's income but not its wealth; a simulation stores a coarse field but not the microstate behind it. The question in every case is the same: given what was seen, what is the average of what was not?

The answer is a number for each observed value, and therefore a *function* of the observed variable, and therefore itself a random variable. That one shift of viewpoint - from $\mathbb{E}(Y \mid X = x)$, a number, to $\mathbb{E}(Y \mid X)$, a random variable - is what makes conditional expectation a tool rather than a notation. It gives the tower property, which computes hard expectations in two easy stages; it gives the conditional variance formula, which splits a variance into a part explained by $X$ and a part not; and it gives the best mean-square prediction of $Y$ from $X$, which is the whole content of regression.

This unit covers the case where $X$ and $Y$ are both discrete or both continuous. The general construction, which conditions on a $\sigma$-field rather than on a variable, is stated at the end and used in :ref[Martingales]{to=prob.martingales}.
:::

:::definition[Conditional distributions, conditional expectation and conditional variance]{provenance=adapted src="grimmett-stirzaker-2020:§3.7, Definitions (3.7.1), (3.7.2) and (3.7.3), pp. 71-72; grimmett-stirzaker-2020:§4.6, Definitions (4.6.1) and (4.6.2) with the preceding limit argument, and the definition of $\psi$ following Example (4.6.3), pp. 117-118; rhb-2006:§30.11.3, p. 1199"}
Let $X$ and $Y$ be random variables on a probability space $(\Omega, \mathcal{F}, \mathbb{P})$, with joint mass function $f_{X,Y}$ or joint density $f_{X,Y}$ in the sense of :ref[]{to=prob.joint-distributions}, and write $f_X$ for the marginal of $X$.

**Discrete case.** For any $x$ with $\mathbb{P}(X = x) > 0$, the **conditional mass function** of $Y$ given $X = x$ is

$$
f_{Y \mid X}(y \mid x) \;=\; \mathbb{P}(Y = y \mid X = x) \;=\; \frac{f_{X,Y}(x,y)}{f_X(x)} ,
$$

and the **conditional distribution function** is $F_{Y\mid X}(y \mid x) = \mathbb{P}(Y \le y \mid X = x)$. Both are undefined at any $x$ with $\mathbb{P}(X=x) = 0$, because the elementary conditional probability of :ref[]{to=prob.probability-spaces} conditions only on events of positive probability.

**Continuous case.** Here $\{X = x\}$ has probability zero and the elementary definition is unavailable. The way round it is to condition on the thickened event $\{x \le X \le x + h\}$, which has probability $\approx f_X(x)h$, and let $h \downarrow 0$:

$$
\mathbb{P}\bigl(Y \le y \;\big|\; x \le X \le x+h\bigr)
\;=\; \frac{\int_{-\infty}^{y} \int_{x}^{x+h} f_{X,Y}(u,v)\,du\,dv}{\int_x^{x+h} f_X(u)\,du}
\;\xrightarrow[h \downarrow 0]{}\; \int_{-\infty}^{y} \frac{f_{X,Y}(x,v)}{f_X(x)}\,dv .
$$

The limit is taken as the definition: for any $x$ with $f_X(x) > 0$, the **conditional density** and **conditional distribution function** of $Y$ given $X = x$ are

$$
f_{Y \mid X}(y \mid x) \;=\; \frac{f_{X,Y}(x,y)}{f_X(x)} ,
\qquad
F_{Y \mid X}(y \mid x) \;=\; \int_{-\infty}^{y} f_{Y\mid X}(v \mid x)\,dv .
$$

One formula, $f_{Y\mid X} = f_{X,Y}/f_X$, serves both cases. :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§30.11.3, p. 1199"} describe it as taking the slice of the joint density at the observed value and dividing by whatever is needed to make it integrate to $1$; since $\int f_{X,Y}(x,v)\,dv = f_X(x)$, that divisor is exactly $f_X(x)$.

**Conditional expectation.** Suppose $\mathbb{E}\lvert Y\rvert < \infty$. For each $x$ with $f_X(x) > 0$ put

$$
\psi(x) \;=\; \mathbb{E}(Y \mid X = x) \;=\;
\begin{cases}
\displaystyle\sum_{y} y\, f_{Y\mid X}(y \mid x) & \text{(discrete)},\\[2ex]
\displaystyle\int_{-\infty}^{\infty} y\, f_{Y\mid X}(y \mid x)\,dy & \text{(continuous)}.
\end{cases}
$$

Then the **conditional expectation of $Y$ given $X$** is the random variable

$$
\mathbb{E}(Y \mid X) \;=\; \psi(X) ,
$$

the composition of the function $\psi$ with the random variable $X$. Its value at a sample point $\omega$ is $\psi(X(\omega))$. Grimmett and Stirzaker emphasise that although the phrase sounds like a number, the object is a random variable; the number is $\mathbb{E}(Y\mid X=x)$ for a fixed $x$.

**Conditional variance.** With $\psi$ as above and $\mathbb{E}(Y^2) < \infty$, set $v(x) = \mathbb{E}\bigl((Y - \psi(x))^2 \mid X = x\bigr)$, the variance of the conditional distribution of $Y$ given $X=x$, and define the random variable $\operatorname{var}(Y \mid X) = v(X)$. Equivalently $\operatorname{var}(Y\mid X) = \mathbb{E}(Y^2 \mid X) - \bigl(\mathbb{E}(Y\mid X)\bigr)^2$.

Everywhere below, an identity between conditional expectations is an identity between random variables and holds with probability $1$; we follow Grimmett and Stirzaker in not repeating the qualification.
:::

:::statement[The rules of conditional expectation]{provenance=adapted src="grimmett-stirzaker-2020:§3.7, Theorem (3.7.4), Theorem (3.7.6) with eq. (3.7.7), and Exercises (3.7.1)(a)-(f), (3.7.2) and (3.7.4), pp. 72-74; grimmett-stirzaker-2020:§7.7, Lemmas (7.7.10) and (7.7.11), p. 381"}
Let $X$, $Y$, $Z$ be random variables with $\mathbb{E}\lvert Y\rvert, \mathbb{E}\lvert Z\rvert < \infty$, let $a, b \in \mathbb{R}$, and let $g$ be a function for which the expectations written below exist.

1. **Partial averaging.** $\displaystyle \mathbb{E}\bigl(\psi(X)\,g(X)\bigr) \;=\; \mathbb{E}\bigl(Y\,g(X)\bigr)$, where $\psi(X) = \mathbb{E}(Y\mid X)$.
2. **Tower property (first form).** Taking $g \equiv 1$ in rule 1,
   $$
   \mathbb{E}\bigl(\mathbb{E}(Y \mid X)\bigr) \;=\; \mathbb{E}(Y) ,
   \qquad\text{that is}\qquad
   \mathbb{E}(Y) \;=\; \sum_x \mathbb{E}(Y \mid X = x)\,\mathbb{P}(X = x)
   $$
   in the discrete case and $\mathbb{E}(Y) = \int \mathbb{E}(Y\mid X=x) f_X(x)\,dx$ in the continuous case.
3. **Linearity.** $\mathbb{E}(aY + bZ \mid X) = a\,\mathbb{E}(Y\mid X) + b\,\mathbb{E}(Z \mid X)$, and $\mathbb{E}(1 \mid X) = 1$.
4. **Positivity.** If $Y \ge 0$ then $\mathbb{E}(Y \mid X) \ge 0$.
5. **Pull-through.** $\mathbb{E}\bigl(Y\,g(X) \mid X\bigr) = g(X)\,\mathbb{E}(Y \mid X)$: a function of the conditioning variable behaves as a constant.
6. **Independence.** If $X$ and $Y$ are independent then $\mathbb{E}(Y\mid X) = \mathbb{E}(Y)$, a constant.
7. **Relabelling.** $\mathbb{E}(Y \mid h(X)) = \mathbb{E}(Y \mid X)$ whenever $h$ is one-to-one.
8. **Tower property (general form).** $\mathbb{E}\bigl(\mathbb{E}(Y \mid X, Z) \,\big|\, X\bigr) = \mathbb{E}(Y \mid X) = \mathbb{E}\bigl(\mathbb{E}(Y\mid X) \,\big|\, X, Z\bigr)$. Conditioning twice, coarsely after finely or finely after coarsely, gives the coarser answer.
9. **Almost sure uniqueness.** If $\varphi(X)$ and $\psi(X)$ both satisfy rule 1 for every admissible $g$, then $\mathbb{P}(\varphi(X) = \psi(X)) = 1$. Consequently rule 1 *characterises* $\mathbb{E}(Y\mid X)$ and may be taken as its definition; Grimmett and Stirzaker say so explicitly and use that route for the general theory.
10. **Conditional variance formula.** If $\mathbb{E}(Y^2) < \infty$ then
    $$
    \operatorname{var}(Y) \;=\; \mathbb{E}\bigl(\operatorname{var}(Y \mid X)\bigr) \;+\; \operatorname{var}\bigl(\mathbb{E}(Y \mid X)\bigr) .
    $$
:::

:::statement[Conditional expectation is the best mean-square prediction]{provenance=adapted src="grimmett-stirzaker-2020:§7.9, Definition (7.9.5), Theorem (7.9.9), Projection theorem (7.9.14) and Theorem (7.9.17), pp. 388-391"}
Write $\lVert U \rVert_2 = \sqrt{\mathbb{E}(U^2)}$, and let

$$
H \;=\; \bigl\{\, h(X) \;:\; h : \mathbb{R}\to\mathbb{R},\ \mathbb{E}\bigl(h(X)^2\bigr) < \infty \,\bigr\}
$$

be the set of square-integrable functions of $X$. An element $\widehat Y \in H$ carries the name **best predictor** (in full, **minimum mean-squared-error predictor**, which is Grimmett and Stirzaker's term) when $\lVert Y - \widehat Y\rVert_2 \le \lVert Y - Z\rVert_2$ for every $Z \in H$. Suppose $\mathbb{E}(Y^2) < \infty$. Then:

- **(a) Existence and uniqueness.** A best predictor exists, and it is unique up to a null event: if $\widehat Y$ and $\widetilde Y$ both attain the minimum then $\mathbb{P}(\widehat Y = \widetilde Y) = 1$.
- **(b) Orthogonality.** For $M \in H$, the two statements
  $$
  \mathbb{E}\bigl((Y - M)Z\bigr) = 0 \ \ \text{for all } Z \in H
  \qquad\text{and}\qquad
  \lVert Y - M\rVert_2 \le \lVert Y - Z\rVert_2 \ \ \text{for all } Z \in H
  $$
  are equivalent. This is the **projection theorem**: minimising the distance and being perpendicular to $H$ are the same condition.
- **(c) Identification.** The best predictor of $Y$ given $X$ is $\mathbb{E}(Y\mid X)$, and the minimum value of the mean squared error is
  $$
  \mathbb{E}\Bigl(\bigl(Y - \mathbb{E}(Y\mid X)\bigr)^2\Bigr) \;=\; \mathbb{E}\bigl(\operatorname{var}(Y\mid X)\bigr) .
  $$

Because (c) holds for every pair $X, Y$ with $\mathbb{E}(Y^2)<\infty$, whatever their types, Grimmett and Stirzaker point out that it can be *adopted* as the definition of $\mathbb{E}(Y\mid X)$: the conditional expectation is the orthogonal projection of $Y$ onto the functions of $X$. That is the formulation which generalises.
:::

:::statement[The general definition, by conditioning on a sub-$\sigma$-field]{provenance=adapted src="grimmett-stirzaker-2020:§7.9, Definition (7.9.20) with eqs. (7.9.21)-(7.9.23), pp. 391-392; folland-1999:§3.2, Exercise 17, p. 93"}
Let $\mathcal{G} \subseteq \mathcal{F}$ be a sub-$\sigma$-field. For $Y$ with $\mathbb{E}(Y^2) < \infty$, Grimmett and Stirzaker define $\mathbb{E}(Y \mid \mathcal{G})$ to be the $\mathcal{G}$-measurable random variable with

$$
\mathbb{E}\Bigl(\bigl(Y - \mathbb{E}(Y\mid\mathcal{G})\bigr) Z\Bigr) = 0
\quad\text{for all $\mathcal{G}$-measurable $Z$ with } \mathbb{E}(Z^2)<\infty ,
$$

which they then show may equivalently be required only for the indicators $Z = \mathbf{1}_G$, $G \in \mathcal{G}$; taking $G = \Omega$ recovers $\mathbb{E}(\mathbb{E}(Y\mid\mathcal{G})) = \mathbb{E}(Y)$. Taking $\mathcal{G}$ to be the smallest $\sigma$-field making a family $\{X_i\}$ measurable returns the earlier notion, $\mathbb{E}(Y\mid\mathcal{G}) = \mathbb{E}(Y \mid X_i, i \in I)$.

:cite[Folland]{work=folland-1999 loc="§3.2, Exercise 17, p. 93"} gives the construction that removes the second-moment hypothesis. On a $\sigma$-finite measure space $(\Omega, \mathcal{F}, \mu)$ with sub-$\sigma$-algebra $\mathcal{G}$ and $\nu = \mu|_{\mathcal{G}}$, every $f \in L^1(\mu)$ admits a $\mathcal{G}$-measurable $g \in L^1(\nu)$ with

$$
\int_G f \, d\mu \;=\; \int_G g \, d\nu \qquad \text{for every } G \in \mathcal{G} ,
$$

and $g$ is determined up to a $\nu$-null set. Folland records that $g$ is what probability theory calls the conditional expectation of $f$ on $\mathcal{G}$. Specialised to a probability measure this is $\mathbb{E}(Y\mid\mathcal{G})$, defined for every $Y \in L^1$ by exactly the partial-averaging property of rule 1, and existence comes from the Radon-Nikodym theorem (:ref[]{to=measure.radon-nikodym}) rather than from a projection.
:::

:::idea{provenance=original}
Everything in this unit comes from one identity. Summing or integrating $f_{Y\mid X}(y\mid x)\,f_X(x)$ over $x$ rebuilds the joint law, because by construction that product *is* $f_{X,Y}(x,y)$. So averaging the conditional average over the conditioning variable undoes the conditioning: that is the tower property, and the pull-through and partial-averaging rules are the same computation with an extra factor $g(x)$ carried along, which can leave the inner average because it does not depend on $y$.

The prediction statement needs a second idea, geometric rather than algebraic. Square-integrable random variables form an inner-product space with $(U,V) = \mathbb{E}(UV)$, the functions of $X$ form a closed subspace $H$ of it, and the best predictor is the foot of the perpendicular from $Y$ to $H$. Existence of that foot is the standard closest-point argument, in which the parallelogram law turns a minimising sequence into a Cauchy sequence. Identifying the foot as $\mathbb{E}(Y\mid X)$ is then one line: partial averaging says precisely that $Y - \mathbb{E}(Y\mid X)$ is orthogonal to every $g(X)$.
:::

:::proof[Partial averaging, the tower property and the algebraic rules]{provenance=adapted src="grimmett-stirzaker-2020:§3.7, proofs of Theorems (3.7.4) and (3.7.6), pp. 72-73"}
We give the discrete argument; the continuous one is the same with sums replaced by integrals, which is legitimate because the conditional density was defined so that $f_{Y\mid X}(y\mid x) f_X(x) = f_{X,Y}(x,y)$ at every $x$ with $f_X(x) > 0$, and the set $\{x : f_X(x) = 0\}$ contributes nothing to any of the integrals.

**Rule 1.** By the law of the unconscious statistician (:ref[]{to=prob.expectation-variance}) applied to the function $x \mapsto \psi(x)g(x)$ of $X$,

$$
\mathbb{E}\bigl(\psi(X)g(X)\bigr) \;=\; \sum_x \psi(x)\,g(x)\,f_X(x) .
$$

Insert the definition $\psi(x) = \sum_y y\, f_{Y\mid X}(y\mid x)$ and move $g(x) f_X(x)$ inside the inner sum:

$$
\mathbb{E}\bigl(\psi(X)g(X)\bigr) \;=\; \sum_x \sum_y y\,g(x)\, f_{Y\mid X}(y\mid x)\, f_X(x)
\;=\; \sum_{x,y} y\,g(x)\, f_{X,Y}(x,y) ,
$$

using $f_{Y\mid X}f_X = f_{X,Y}$. The last double sum is $\mathbb{E}(Y g(X))$, again by the law of the unconscious statistician, now for the function $(x,y)\mapsto y\,g(x)$ of the pair. The interchange of the two sums is justified by absolute convergence, which is the hypothesis that the expectations exist.

**Rule 2.** Put $g \equiv 1$ in rule 1. The right-hand side is $\mathbb{E}(Y)$ and the left-hand side is $\mathbb{E}(\psi(X))$, which written out is $\sum_x \mathbb{E}(Y\mid X=x)\mathbb{P}(X=x)$.

**Rules 3, 4, 6.** Each holds at every fixed $x$ and therefore holds after substituting $X$ for $x$. Linearity holds because $\mathbb{E}(\,\cdot \mid X=x)$ is an expectation with respect to the probability mass function $f_{Y\mid X}(\cdot\mid x)$, and expectations are linear; the same remark gives $\mathbb{E}(1\mid X=x)=1$ and $\mathbb{E}(Y\mid X=x)\ge0$ for $Y\ge0$. For rule 6, independence makes $f_{X,Y} = f_X f_Y$, hence $f_{Y\mid X}(y\mid x) = f_Y(y)$ for every $x$ with $f_X(x)>0$, so $\psi(x) = \mathbb{E}(Y)$ does not depend on $x$.

**Rule 5.** Fix $x$ with $f_X(x) > 0$. Conditional on $\{X = x\}$ the factor $g(X)$ equals the constant $g(x)$, so
$$
\mathbb{E}\bigl(Y g(X) \mid X = x\bigr) = \sum_y y\,g(x)\,f_{Y\mid X}(y \mid x) = g(x)\,\mathbb{E}(Y \mid X = x) .
$$
Substituting $X$ for $x$ gives the claim.

**Rule 7.** If $h$ is one-to-one then the events $\{X = x\}$ and $\{h(X) = h(x)\}$ are the same event, so the two conditional distributions, and hence the two conditional expectations, coincide. Grimmett and Stirzaker make exactly this observation.

**Rule 8.** Write $\chi(x,z) = \mathbb{E}(Y \mid X = x, Z = z)$, so that $\mathbb{E}(Y\mid X,Z) = \chi(X,Z)$. Conditioning on $\{X=x\}$ and using the definition twice,

$$
\mathbb{E}\bigl(\chi(X,Z) \mid X = x\bigr)
= \sum_z \chi(x,z)\, f_{Z\mid X}(z \mid x)
= \sum_z \sum_y y \,\frac{f_{X,Y,Z}(x,y,z)}{f_{X,Z}(x,z)}\cdot\frac{f_{X,Z}(x,z)}{f_X(x)} .
$$

The factor $f_{X,Z}(x,z)$ cancels - this is the only step in the proof, and it is why the property holds - leaving $\sum_y y \sum_z f_{X,Y,Z}(x,y,z)/f_X(x) = \sum_y y\, f_{Y\mid X}(y\mid x) = \psi(x)$. For the second equality in rule 8, note that $\mathbb{E}(Y\mid X)$ is already a function of $X$ alone, hence a function of the pair $(X,Z)$, so rule 5 with $Y$ replaced by $1$ returns it unchanged.

**Rule 9.** If $\mathbb{E}(\varphi(X)g(X)) = \mathbb{E}(\psi(X)g(X))$ for all admissible $g$, write $D = \varphi(X)-\psi(X)$ and choose $g(x) = \operatorname{sign}(\varphi(x)-\psi(x))$, which is bounded. Then $\mathbb{E}\lvert D\rvert = \mathbb{E}(Dg(X)) = 0$, and a non-negative random variable with zero mean vanishes with probability $1$.

**Rule 10.** Abbreviate $\psi = \mathbb{E}(Y\mid X)$ and $v = \operatorname{var}(Y\mid X) = \mathbb{E}(Y^2\mid X) - \psi^2$. Take expectations and use rule 2 twice:

$$
\mathbb{E}(v) = \mathbb{E}(Y^2) - \mathbb{E}(\psi^2),
\qquad
\operatorname{var}(\psi) = \mathbb{E}(\psi^2) - \bigl(\mathbb{E}\psi\bigr)^2 = \mathbb{E}(\psi^2) - \bigl(\mathbb{E}Y\bigr)^2 .
$$

Adding the two displays cancels $\mathbb{E}(\psi^2)$ and leaves $\mathbb{E}(Y^2) - (\mathbb{E}Y)^2 = \operatorname{var}(Y)$. $\square$
:::

:::proof[Best mean-square prediction]{provenance=adapted src="grimmett-stirzaker-2020:§7.9, proofs of Theorem (7.9.9), the Projection theorem (7.9.14) and Theorem (7.9.17), pp. 389-391"}
**Step 1: $H$ is a closed linear space.** A linear combination of square-integrable functions of $X$ is a square-integrable function of $X$, by the Minkowski inequality, so $H$ is a linear space. It is closed in the norm $\lVert\cdot\rVert_2$: if $h_n(X)$ is a Cauchy sequence in $H$ then it converges in mean square to some square-integrable limit, and a mean-square limit of functions of $X$ is again (almost surely equal to) a function of $X$. This is the completeness of $L^2$ (:ref[]{to=measure.lp-spaces}).

**Step 2: a closest point exists.** Let $d = \inf\{\lVert Y - Z\rVert_2 : Z \in H\}$ and pick $Z_1, Z_2, \dots \in H$ with $\lVert Y - Z_n\rVert_2 \to d$. For any $A, B \in H$ the parallelogram law, applied to the vectors $Y-A$ and $Y-B$, reads

$$
\lVert A - B\rVert_2^2 \;=\; 2\lVert Y-A\rVert_2^2 + 2\lVert Y-B\rVert_2^2 - 4\bigl\lVert Y - \tfrac12(A+B)\bigr\rVert_2^2 ;
$$

expanding both sides as expectations verifies it. Take $A = Z_m$, $B = Z_n$. Since $\tfrac12(Z_m+Z_n) \in H$ (here linearity of $H$ is used), the last term is at least $4d^2$, so

$$
\lVert Z_m - Z_n\rVert_2^2 \;\le\; 2\bigl(\lVert Y - Z_m\rVert_2^2 - d^2\bigr) + 2\bigl(\lVert Y-Z_n\rVert_2^2 - d^2\bigr) \;\longrightarrow\; 0 .
$$

Thus $(Z_n)$ is Cauchy, and by closedness it converges in mean square to some $\widehat Y \in H$. The triangle inequality gives $\lVert Y - \widehat Y\rVert_2 \le \lVert Y - Z_n\rVert_2 + \lVert Z_n - \widehat Y\rVert_2 \to d$, so $\lVert Y-\widehat Y\rVert_2 = d$ and $\widehat Y$ attains the minimum.

**Step 3: the minimiser is unique up to a null event.** If $\widetilde Y \in H$ also attains $d$, apply the parallelogram law with $A = \widetilde Y$, $B = \widehat Y$: the first two terms give $4d^2$ and the last is at least $4d^2$, so $\lVert \widetilde Y - \widehat Y\rVert_2^2 \le 0$. Hence $\mathbb{E}((\widetilde Y - \widehat Y)^2) = 0$ and the two agree with probability $1$.

**Step 4: minimising is the same as being orthogonal.** Suppose $M \in H$ satisfies $\mathbb{E}((Y-M)Z) = 0$ for all $Z \in H$. For $M' \in H$ the difference $M - M'$ lies in $H$, so the cross term in

$$
\mathbb{E}\bigl((Y-M')^2\bigr) = \mathbb{E}\bigl((Y-M)^2\bigr) + 2\,\mathbb{E}\bigl((Y-M)(M-M')\bigr) + \mathbb{E}\bigl((M-M')^2\bigr)
$$

vanishes, leaving $\lVert Y-M'\rVert_2^2 = \lVert Y-M\rVert_2^2 + \lVert M-M'\rVert_2^2 \ge \lVert Y-M\rVert_2^2$: $M$ minimises. Conversely suppose $M$ minimises but $\mathbb{E}((Y-M)Z) = c > 0$ for some $Z \in H$; rescaling $Z$ we may take $\mathbb{E}(Z^2)=1$. Then $M' = M + cZ \in H$ has

$$
\mathbb{E}\bigl((Y-M')^2\bigr) = \mathbb{E}\bigl((Y-M)^2\bigr) - 2c\,\mathbb{E}\bigl((Y-M)Z\bigr) + c^2 = \mathbb{E}\bigl((Y-M)^2\bigr) - c^2 ,
$$

contradicting minimality. (If $c<0$ replace $Z$ by $-Z$.) So a minimiser is orthogonal to $H$.

**Step 5: the projection is $\mathbb{E}(Y\mid X)$.** First, $\psi(X) = \mathbb{E}(Y\mid X)$ lies in $H$: by the conditional Jensen inequality in the form $\psi(x)^2 = \mathbb{E}(Y\mid X=x)^2 \le \mathbb{E}(Y^2 \mid X = x)$, which is the Cauchy-Schwarz inequality applied inside the conditional distribution, taking expectations gives $\mathbb{E}(\psi(X)^2) \le \mathbb{E}(Y^2) < \infty$. Second, for any $Z = h(X) \in H$,

$$
\mathbb{E}\bigl((Y - \psi(X))\,h(X)\bigr) \;=\; \mathbb{E}\bigl(Y h(X)\bigr) - \mathbb{E}\bigl(\psi(X) h(X)\bigr) \;=\; 0
$$

by rule 1 with $g = h$. So $\psi(X)$ is orthogonal to $H$, and by step 4 it minimises. Finally, by rules 2 and 5,

$$
\mathbb{E}\bigl((Y-\psi(X))^2\bigr) = \mathbb{E}\Bigl(\mathbb{E}\bigl((Y-\psi(X))^2 \,\big|\, X\bigr)\Bigr) = \mathbb{E}\bigl(\operatorname{var}(Y\mid X)\bigr) ,
$$

the inner conditional expectation being the variance of the conditional distribution because $\psi(X)$ is its mean. $\square$
:::

:::remark[Where the hypotheses are used, and what fails without them]{provenance=original}
- **$f_X(x) > 0$ is needed to define anything at $x$.** Conditioning is division by $f_X(x)$. At values the conditioning variable never takes, there is no conditional distribution, and $\mathbb{E}(Y\mid X)$ is simply not specified there. This costs nothing, because the set $\{f_X = 0\}$ has probability zero, but it is why every identity above is an identity "with probability $1$" and no more.
- **The limiting definition in the continuous case is a choice, not a theorem.** $\mathbb{P}(Y\le y \mid X=x)$ has no elementary meaning; we defined it as the limit of $\mathbb{P}(Y\le y\mid x\le X\le x+h)$. Conditioning the *same* event on a different family of shrinking sets can give a different answer. The standard warning case is a point on a sphere: conditioning on a shrinking band of latitude and conditioning on a shrinking wedge of longitude produce different "conditional distributions" of the other coordinate, because the two families of thick events shrink in different ways. Nothing below is affected, since we fix the family once and for all, but the notation $\mathbb{P}(\cdot \mid X=x)$ hides a convention.
- **$\mathbb{E}\lvert Y\rvert<\infty$ is what rules 1-9 need; $\mathbb{E}(Y^2)<\infty$ is what the prediction theorem needs.** Rule 10 and the whole of the projection argument use the second moment, in three places: to put $\psi(X)$ in $H$, to make the parallelogram law meaningful, and to make $d$ finite. For $Y$ with $\mathbb{E}\lvert Y\rvert < \infty$ but $\mathbb{E}(Y^2) = \infty$ - a Pareto variable with index $3/2$, say - the conditional expectation still exists by the Folland construction above, and rules 1-9 still hold, but "closest in mean square" is vacuous because every candidate is at infinite distance.
- **Linearity of $H$ is used, and it is not free.** Step 2 needs $\tfrac12(Z_m+Z_n) \in H$. If $H$ were replaced by a non-convex set of predictors - say, the functions of $X$ taking only the values $0$ and $1$ - the minimising sequence argument collapses and the closest point can fail to be unique.
- **Rule 5 is why the proof of rule 8 is a cancellation and not a computation.** The only property of $g(X)$ used is that it is already determined by the conditioning variable. Replace $g(X)$ by $g(Y)$ and the rule is false: for $X, Y$ independent standard normals, $\mathbb{E}(Y\cdot Y\mid X) = 1 \ne Y\,\mathbb{E}(Y\mid X) = 0$.
- **Uncorrelated is weaker than "conditional mean is constant", which is weaker than independence.** Rule 6 goes one way only. Let $X$ be uniform on $\{-1,0,1\}$ and $Y = X^2$. Then $\mathbb{E}(Y\mid X) = X^2$, not constant, yet $\operatorname{cov}(X,Y) = \mathbb{E}(X^3) = 0$. Conversely $\mathbb{E}(Y\mid X) = \mathbb{E}(Y)$ forces $\operatorname{cov}(X,Y)=0$ by rules 1 and 2, but does not force independence, since it says nothing about $\mathbb{E}(Y^2\mid X)$.
:::

:::method[Computing a conditional expectation]{provenance=original}
1. **Decide which variable is observed.** Write down the joint law $f_{X,Y}$ of the observed $X$ and the unobserved $Y$. If the model is specified the other way round - $X$ has some law and, given $X = x$, $Y$ has some law - then $f_{X,Y}(x,y) = f_X(x) f_{Y\mid X}(y\mid x)$ is already the joint law and step 2 is unnecessary.
2. **Marginalise.** Compute $f_X(x) = \sum_y f_{X,Y}(x,y)$ or $\int f_{X,Y}(x,y)\,dy$, and note where it vanishes.
3. **Divide.** Form $f_{Y\mid X}(y\mid x) = f_{X,Y}(x,y)/f_X(x)$ and *check that it integrates (or sums) to $1$ in $y$ for each fixed $x$*. This catches most algebra slips at once.
4. **Average in $y$.** Compute $\psi(x) = \int y\,f_{Y\mid X}(y\mid x)\,dy$. Recognising the conditional law as a standard distribution usually saves the integral: if $f_{Y\mid X}(\cdot\mid x)$ is exponential with rate $\lambda(x)$, then $\psi(x) = 1/\lambda(x)$ with no work.
5. **Substitute the random variable.** $\mathbb{E}(Y\mid X) = \psi(X)$. If what is wanted is $\mathbb{E}(Y)$, stop here and apply the tower property, $\mathbb{E}(Y) = \int \psi(x) f_X(x)\,dx$, which is usually a one-dimensional integral in place of a two-dimensional one.
6. **Check.** The tower property is a free consistency test: compute $\mathbb{E}(Y)$ both ways. If the second moment is wanted as well, the conditional variance formula gives a second independent check, since the two terms $\mathbb{E}(\operatorname{var}(Y\mid X))$ and $\operatorname{var}(\mathbb{E}(Y\mid X))$ are separately non-negative and must sum to $\operatorname{var}(Y)$.
:::

:::example[A mixed exponential: conditioning, the tower property and the variance split]{provenance=original}
A radioactive source is placed at a random distance from a counter, and the waiting time to the next recorded count is exponential with a rate that depends on the distance. Model this by letting the rate $X$ be uniform on $[1,2]$ and, given $X = x$, letting the waiting time $Y$ be exponential with parameter $x$. The joint density is then

$$
f_{X,Y}(x,y) \;=\; f_X(x)\, f_{Y\mid X}(y\mid x) \;=\; 1 \cdot x e^{-xy} \;=\; x e^{-xy},
\qquad 1 \le x \le 2,\ y > 0 ,
$$

and zero elsewhere. It is a density: $\int_0^\infty x e^{-xy}\,dy = 1$ for each $x$, and $\int_1^2 1\,dx = 1$.

**Step 1: the conditional law of $Y$ given $X$.** It was given: $f_{Y\mid X}(y\mid x) = xe^{-xy}$ for $y>0$, exponential with parameter $x$. Hence, reading the mean and variance of an exponential off the standard list,

$$
\mathbb{E}(Y \mid X = x) = \frac{1}{x} ,
\qquad
\operatorname{var}(Y\mid X = x) = \frac{1}{x^2} ,
\qquad\text{so}\qquad
\mathbb{E}(Y\mid X) = \frac{1}{X}, \quad \operatorname{var}(Y\mid X) = \frac{1}{X^2} .
$$

**Step 2: the mean of $Y$, by the tower property.**

$$
\mathbb{E}(Y) \;=\; \mathbb{E}\bigl(\mathbb{E}(Y\mid X)\bigr) \;=\; \int_1^2 \frac{1}{x}\,dx \;=\; \log 2 \;=\; 0.693147\ldots
$$

The direct route would be the double integral $\int_1^2\int_0^\infty y\,xe^{-xy}\,dy\,dx$, whose inner integral is $1/x$: the same calculation, with the tower property making the first stage invisible.

**Step 3: the variance of $Y$, both ways.** For the second moment, $\mathbb{E}(Y^2\mid X=x) = 2/x^2$, so

$$
\mathbb{E}(Y^2) \;=\; \int_1^2 \frac{2}{x^2}\,dx \;=\; 2\Bigl[-\frac1x\Bigr]_1^2 \;=\; 2\Bigl(1-\tfrac12\Bigr) \;=\; 1 ,
\qquad
\operatorname{var}(Y) \;=\; 1 - (\log 2)^2 \;=\; 0.519547\ldots
$$

Now split it. The unexplained part is

$$
\mathbb{E}\bigl(\operatorname{var}(Y\mid X)\bigr) \;=\; \int_1^2 \frac{dx}{x^2} \;=\; \frac12 \;=\; 0.5 ,
$$

and the part explained by knowing $X$ is

$$
\operatorname{var}\bigl(\mathbb{E}(Y\mid X)\bigr) \;=\; \mathbb{E}\Bigl(\frac{1}{X^2}\Bigr) - \Bigl(\mathbb{E}\frac1X\Bigr)^2 \;=\; \frac12 - (\log 2)^2 \;=\; 0.019547\ldots
$$

Their sum is $1 - (\log 2)^2$, matching $\operatorname{var}(Y)$ exactly, as rule 10 requires. Only $3.8\%$ of the variance of the waiting time is attributable to not knowing the rate; the rest is the intrinsic randomness of the exponential.

**Step 4: the best prediction and its error.** By the theorem, the best mean-square prediction of $Y$ from $X$ is $\widehat Y = 1/X$, with mean squared error $\mathbb{E}(\operatorname{var}(Y\mid X)) = \boxed{\tfrac12}$. Compare the best *linear* prediction $a + bX$. Here $\mathbb{E}(XY) = \mathbb{E}(X\,\mathbb{E}(Y\mid X)) = \mathbb{E}(X \cdot X^{-1}) = 1$ by rules 5 and 2, so

$$
\operatorname{cov}(X,Y) = 1 - \tfrac32\log 2 = -0.0397208\ldots, \qquad \operatorname{var}(X) = \tfrac1{12} ,
$$

and the best linear predictor has mean squared error $\operatorname{var}(Y) - \operatorname{cov}(X,Y)^2/\operatorname{var}(X) = 0.500614\ldots$ The nonlinear predictor wins, as it must, but only just: over $1 \le x \le 2$ the curve $1/x$ is nearly straight.

**Step 5: a check by a different route.** Rule 2 applied to the indicator of an event gives $\mathbb{P}(Y > 1) = \mathbb{E}(\mathbb{P}(Y>1\mid X)) = \int_1^2 e^{-x}\,dx = e^{-1}-e^{-2} = 0.2325442\ldots$. Integrating the joint density directly, $\int_1^2\int_1^\infty x e^{-xy}\,dy\,dx = \int_1^2 e^{-x}dx$, the same number. (All values here were confirmed symbolically.)
:::

:::application[Regression, filtering and coarse-graining]{provenance=original}
**Regression is conditional expectation.** The regression function of $Y$ on $X$ is by definition $x \mapsto \mathbb{E}(Y\mid X=x)$, and the theorem above is the reason least squares is the default fitting criterion: minimising mean squared error over *all* functions of the predictors returns the conditional mean, and minimising it over affine functions returns the line that statisticians call the regression line. The familiar decomposition of a total sum of squares into "explained" and "residual" parts is rule 10 estimated from data, and the coefficient of determination $R^2$ estimates $\operatorname{var}(\mathbb{E}(Y\mid X))/\operatorname{var}(Y)$ - in the worked example, $0.0195/0.5195 = 3.8\%$.

**Filtering and data assimilation.** A Kalman filter propagates exactly one object: the conditional distribution of the unobserved state given all observations so far. The update step is Bayes' theorem on conditional densities, the forecast step is the tower property, and the reported state estimate is the conditional mean because that is the estimate with least mean squared error. Weather and ocean models assimilate observations by the same logic on a very large state space, with ensembles standing in for the conditional distribution.

**Coarse-graining in statistical physics.** Integrating a Gibbs distribution over fast degrees of freedom at fixed slow ones produces a conditional distribution, and the resulting effective Hamiltonian is built from conditional expectations of the microscopic one. The conditional variance formula is the statement that the fluctuation of an observable splits into a within-cell part and a between-cell part - the decomposition behind block-spin renormalisation and behind the separation of thermal noise from sampling noise in a Monte Carlo estimate.

**Variance reduction in simulation.** If a quantity $Y$ can be averaged analytically given some auxiliary variable $X$, replacing the sampled $Y$ by the computed $\mathbb{E}(Y\mid X)$ leaves the mean unchanged (rule 2) and reduces the variance by exactly $\mathbb{E}(\operatorname{var}(Y\mid X))$ (rule 10). This is conditional Monte Carlo, and it is free whenever the inner average is available in closed form.

**Martingales.** The defining property of a martingale, $\mathbb{E}(S_{n+1}\mid X_1,\dots,X_n) = S_n$, is a statement about conditional expectation, and the whole theory in :ref[]{to=prob.martingales} runs on the tower property. The same is true of the Markov property in :ref[]{to=prob.markov-chains}, which says that conditioning on the whole past is the same as conditioning on the present.
:::
