---
id: prob.joint-distributions
title: Joint distributions and transformations
kind: method
level: core
summary: Gives the working recipe for turning the joint density of several random variables into the density of functions of them -- invert the map, multiply by the modulus of the Jacobian, integrate out what is not wanted -- and derives from it the convolution formula for the density of a sum of independent variables.
prereqs: [prob.expectation-variance, found.change-of-variables]
provenance: adapted
sources:
  - work: grimmett-stirzaker-2020
    loc: "$\\S$3.6, pp. 67-68: Definition (3.6.2) of the joint distribution function and joint mass function of a discrete pair, Lemma (3.6.3) characterising independence by $f_{X,Y}=f_Xf_Y$ and by the factorisation of $f_{X,Y}$ into $g(x)h(y)$, with the warning that the factorisation must hold at every $(x,y)$, and the computation of the marginals by summing out one variable. $\\S$4.5, pp. 110-115: Definition (4.5.1) of the joint distribution function, Definition (4.5.2) of a jointly continuous pair with joint density and the identification $f=\\partial^2F/\\partial x\\partial y$; item (3), the rectangle formula and the reading of $f(x,y)\\,dx\\,dy$ as an element of probability, and (4), $\\mathbb{P}((X,Y)\\in B)=\\iint_B f$; item (5), the marginal density $f_X(x)=\\int f(x,y)\\,dy$, with the footnote that a marginal density of a jointly continuous pair need not be continuous (Exercise (4.5.1), Clarke's example); item (6), $\\mathbb{E}(g(X,Y))=\\iint g f$; item (7), independence as $F=F_XF_Y$, equivalently $f=f_Xf_Y$; Example (4.5.8), Buffon's needle; Example (4.5.9), the standard and general bivariate normal densities and the fact that jointly normal variables are independent if and only if uncorrelated. $\\S$4.7, pp. 121-126: the distribution-function route $\\mathbb{P}(g(X)\\le y)=\\int_{g^{-1}(-\\infty,y]}f$, with Examples (1) and (2) ($X^2$ for a standard normal, and the affine map giving $f_Y(y)=|a|^{-1}f_X((y-b)/a)$); the Jacobian $J$ of the inverse map and Theorem (4.7.3); Corollary (4.7.4), the transformation rule $f_{Y_1,Y_2}(y_1,y_2)=f(x_1(y),x_2(y))\\,|J(y_1,y_2)|$ on the range of $T$ and zero elsewhere, with its proof by comparison with the definition of a joint density, and the remark that it extends to $\\mathbb{R}^n$; Examples (5)-(8), including the density of $U=XY$ obtained by adjoining the dummy variable $v=x$ and integrating it out, and the pair $Y_1=X_1+X_2$, $Y_2=X_1/X_2$ for independent exponentials, which factorises and so is independent; Example (9), the warning that conditioning on $\\{X_1=X_2\\}$ gives different answers according to how the null event is approached; and eq. (4.7.16), $f_Y(y)=\\sum_i f_X(h_i(y))|h_i'(y)|$ for a map that is strictly monotone and continuously differentiable on each of a partition of $\\mathbb{R}$ into intervals, with the convention that a term is zero where its $h_i$ is undefined. $\\S$4.8, pp. 129-130: Theorem (4.8.1), $f_{X+Y}(z)=\\int f(x,z-x)\\,dx$, with the proof by the substitution $x=u$, $y=v+u$ and a reversal of the order of integration, the specialisation to the convolution $f_X*f_Y$ for independent $X$ and $Y$, and Example (3), the convolution of two standard normal densities"
    pages: "67-68, 110-115, 121-126, 129-130"
    role: the definitions of joint distribution function, joint mass function, joint density and marginals; the characterisations of independence in the discrete and the jointly continuous case; the Jacobian transformation rule in the form we state and the device of adjoining a dummy variable and integrating it out; the piecewise-monotone one-dimensional formula; the convolution theorem and its proof route; the example of a transformation whose image factorises, proving independence of the new variables; and the warning example about conditioning on a null event
  - work: rhb-2006
    loc: "$\\S$30.4.3 and $\\S$30.11, p. 1143 and p. 1199: independence of two random variables as the factorisation $f(x,y)=g(x)h(y)$ of the joint probability density function, with the discrete and continuous forms written out and the explicit comparison with $\\Pr(A\\cap B)=\\Pr(A)\\Pr(B)$ for independent events, and the worked product of two exponential interval probabilities; eq. (30.130), the marginal distribution obtained by summing or integrating the joint distribution over all values of the other variable, and the conditional distribution $g(x)=f(x,y_0)/f_Y(y_0)$ with the remark that the division is what normalises it. $\\S$30.7, eq. (30.79), p. 1160: the discrete convolution $\\Pr(X+Y=n)=\\sum_r \\Pr(X=r)\\Pr(Y=n-r)$, justified by the mutual exclusivity of the outcomes for different $r$. $\\S$30.14, pp. 1206-1207: transformation of variables in joint distributions, derived by demanding the equality of probability elements $|f(x_1,\\dots,x_n)\\,dx_1\\cdots dx_n| = |g(y_1,\\dots,y_m)\\,dy_1\\cdots dy_m|$, giving $g = f\\,|J|$ with $J = \\partial(x_1,\\dots,x_n)/\\partial(y_1,\\dots,y_n)$ in the case $n=m$; and the worked derivation of the chi-squared density of $\\chi_n^2 = \\sum_i Z_i^2$ by first standardising each Gaussian and then using an elemental spherical shell $dV = A\\chi_n^{n-1}d\\chi_n$ in $Z$-space"
    pages: "1143, 1160, 1199, 1206-1207"
    role: the probability-element derivation of the transformation rule, which is the form in which a physicist applies it; the statement of the rule in $n$ dimensions with the Jacobian of the old variables with respect to the new; the discrete convolution; and the shell trick for a function of several variables with spherical symmetry, which our first worked example uses in two dimensions
  - work: arfken-2013
    loc: "$\\S$23.2, pp. 1142-1143: eqs. (23.34)-(23.35) defining means and variances of two random variables from a joint density $f(x,y)$; the statement that two random variables are independent when the joint density factorises as $f(x)g(y)$; and the calculation showing that the covariance of independent variables vanishes, carried out by splitting the double integral into a product of two single integrals"
    pages: "1142-1143"
    role: the factorisation definition of independence for densities and the splitting of a double integral into a product, which is the step that turns the general change-of-variable formula into the convolution formula under independence
  - work: folland-1999
    loc: "$\\S$10.1, pp. 315-316: the joint distribution of a finite sequence $X_1,\\dots,X_n$ as the image measure $\\mathbb{P}_{(X_1,\\dots,X_n)}$ on $\\mathbb{R}^n$, with the general principle that every probabilistically relevant property is expressible through joint distributions; the definition of an independent collection of random variables through independence of the events $\\{X_\\alpha \\in B_\\alpha\\}$, and the rephrasing that $\\{X_\\alpha\\}$ is independent if and only if the joint distribution of any finite subcollection equals the product $\\prod_j \\mathbb{P}_{X_j}$ of the individual distributions; and Proposition 10.2, that Borel functions of disjoint blocks of independent random variables are independent, proved from $Y_n^{-1}(B_n) = \\mathbf{X}_n^{-1}(f_n^{-1}(B_n))$"
    pages: "315-316"
    role: the measure-theoretic statement that independence is exactly the factorisation of the joint distribution into a product measure, which is the hypothesis-free version of the density criterion; and Proposition 10.2, which is what licenses treating functions of separate independent inputs as independent in the examples
---

:::note[One question, one recipe]{provenance=original}
Almost every calculation in applied probability has the shape: *I know the distribution of the inputs; what is the distribution of the output?* The inputs are random variables $X_1, \dots, X_n$ with a known joint density, the output is $Y = g(X_1, \dots, X_n)$, and what is wanted is the density of $Y$.

There is one recipe. Complete $g$ to an invertible map of $\mathbb{R}^{n}$ to itself by adjoining whatever extra coordinates are convenient; transform the density by the rule for changing variables inside a multiple integral, which contributes the modulus of a Jacobian determinant; then integrate out the coordinates that were only there to make the map invertible. Everything else in this unit — the formula for a monotone function of one variable, the convolution formula for a sum, the chi-squared density, the Box-Muller sampler — is this recipe with a particular choice of the extra coordinates.

The Jacobian is not a technicality. A density is a probability *per unit volume*, so when a map stretches volume the density must shrink in compensation; the Jacobian is exactly the local volume factor.
:::

:::definition[Joint distributions, marginals, independence]{provenance=adapted src="grimmett-stirzaker-2020:Definition (3.6.2) and the marginals on p. 67, and §4.5, Definitions (4.5.1)-(4.5.2) with items (3)-(7), pp. 110-112; rhb-2006:§30.4.3 p. 1143 and eq. (30.130), p. 1199; folland-1999:§10.1, pp. 315-316"}
Let $X$ and $Y$ be random variables on one probability space. Their **joint distribution function** is
$$
F(x,y) = \mathbb{P}(X \le x,\, Y \le y) , \qquad (x,y) \in \mathbb{R}^{2} .
$$

If $X$ and $Y$ are both discrete, their **joint mass function** is $f(x,y) = \mathbb{P}(X = x,\, Y = y)$, and the **marginal** mass functions are recovered by summing out the other variable,
$$
f_X(x) = \sum_{y} f(x,y) , \qquad f_Y(y) = \sum_{x} f(x,y) ,
$$
because the events $\{Y = y\}$ partition the sample space.

The pair is **jointly continuous** with **joint density** $f : \mathbb{R}^{2} \to [0,\infty)$ if
$$
F(x,y) = \int_{-\infty}^{y}\!\!\int_{-\infty}^{x} f(u,v)\,du\,dv \qquad \text{for all } x, y ,
$$
in which case $f = \partial^{2}F/\partial x\,\partial y$ wherever $F$ is twice differentiable, and for reasonable $B \subseteq \mathbb{R}^{2}$,
$$
\mathbb{P}\bigl( (X,Y) \in B \bigr) = \iint_{B} f(x,y)\,dx\,dy .
$$
Physicists read $f(x,y)\,dx\,dy$ directly as the probability that $(X,Y)$ lies in the rectangle of sides $dx, dy$ at $(x,y)$. The **marginal densities** are
$$
f_X(x) = \int_{-\infty}^{\infty} f(x,y)\,dy , \qquad f_Y(y) = \int_{-\infty}^{\infty} f(x,y)\,dx .
$$
Expectations are computed without any further construction: $\mathbb{E}\bigl( g(X,Y) \bigr) = \iint g(x,y) f(x,y)\,dx\,dy$, the two-variable law of the unconscious statistician of :ref[Expectation, variance and covariance]{to=prob.expectation-variance}.

Call $X$ and $Y$ **independent** when, for every choice of Borel sets $B_1$ and $B_2$, the two events $\{X \in B_1\}$ and $\{Y \in B_2\}$ are independent in the sense of :ref[Probability spaces]{to=prob.probability-spaces}. Folland states this equivalently: the joint distribution on $\mathbb{R}^{2}$ is the product of the two individual distributions. All of this extends verbatim to $n$ variables, with $F(x_1,\dots,x_n)$, an $n$-fold integral, and $n-1$ integrations to obtain one marginal.
:::

:::statement[Criteria for independence]{provenance=adapted src="grimmett-stirzaker-2020:Lemma (3.6.3) and the following remark, pp. 67-68, and §4.5 item (7), p. 112; folland-1999:§10.1, pp. 315-316, including Proposition 10.2; arfken-2013:§23.2, p. 1142"}
1. **Discrete.** Independence of $X$ and $Y$ is equivalent to the identity $f(x,y) = f_X(x) f_Y(y)$ holding at **every** point $(x,y)$, and also to the weaker-looking requirement that $f(x,y) = g(x)h(y)$ at every point, for some pair of one-variable functions $g, h$.
2. **Jointly continuous.** Independence of $X$ and $Y$ is equivalent to $F(x,y) = F_X(x)F_Y(y)$ at every point, and this in turn to the possibility of choosing the joint density to be $f_X(x)f_Y(y)$.
3. **Factorisation suffices.** If a joint density factorises as $f(x,y) = g(x)h(y)$ on the whole plane, then $X$ and $Y$ are independent and $f_X, f_Y$ are $g, h$ normalised. The qualifier *on the whole plane* is essential: a density supported on a region that is not a product of intervals does not factorise even if its formula appears to.
4. **Functions preserve independence.** If $X_1, \dots, X_n$ are independent and the index set is split into disjoint blocks, then Borel functions of separate blocks are independent. In particular, if $X$ and $Y$ are independent, so are $u(X)$ and $v(Y)$ for any Borel $u, v$.
5. Independent variables are uncorrelated, and the converse fails; see :ref[Expectation, variance and covariance]{to=prob.expectation-variance}.
:::

:::statement[The transformation and convolution formulas]{provenance=adapted src="grimmett-stirzaker-2020:§4.7, Theorem (4.7.3), Corollary (4.7.4), p. 122, and eq. (4.7.16), p. 126; grimmett-stirzaker-2020:§4.8, Theorem (4.8.1) and the following specialisation, p. 129; rhb-2006:§30.14, pp. 1206-1207, and eq. (30.79), p. 1160"}
**1. Change of variables in $n$ dimensions.** Let $X = (X_1, \dots, X_n)$ have joint density $f$, and let
$$
T : D \to R , \qquad y = T(x)
$$
be a one-to-one map of an open set $D \subseteq \mathbb{R}^{n}$ containing the support of $f$ onto $R \subseteq \mathbb{R}^{n}$, with inverse $x = T^{-1}(y)$ whose partial derivatives $\partial x_i/\partial y_j$ are continuous. Let
$$
J(y) = \det\left( \frac{\partial x_i}{\partial y_j} \right)_{i,j=1}^{n}
$$
be the Jacobian determinant of the inverse map. Then $Y = T(X)$ has joint density
$$
f_Y(y) \; = \; \begin{cases} f\bigl( T^{-1}(y) \bigr)\,\bigl\lvert J(y) \bigr\rvert , & y \in R , \\[2pt] 0, & \text{otherwise.}\end{cases}
$$

**2. One variable, piecewise monotone.** Let $X$ have density $f_X$ and let $I_1, \dots, I_m$ be intervals partitioning $\mathbb{R}$ on each of which $g$ is strictly monotone and continuously differentiable, with inverse $h_i$ defined on $g(I_i)$. Then $Y = g(X)$ has density
$$
f_Y(y) \; = \; \sum_{i=1}^{m} f_X\bigl( h_i(y) \bigr)\,\bigl\lvert h_i'(y) \bigr\rvert ,
$$
a term being omitted wherever its $h_i$ is undefined. For a single increasing or decreasing branch this is the $n=1$ case of part 1; for the affine map $g(x) = ax+b$ with $a \neq 0$ it reads $f_Y(y) = \lvert a \rvert^{-1} f_X\bigl((y-b)/a\bigr)$.

**3. Sums.** If $X$ and $Y$ have joint density $f$, then $X + Y$ has density
$$
f_{X+Y}(z) = \int_{-\infty}^{\infty} f(x,\, z-x)\,dx .
$$
If moreover $X$ and $Y$ are independent, this is the **convolution** of the two marginal densities,
$$
f_{X+Y}(z) = \bigl( f_X * f_Y \bigr)(z) = \int_{-\infty}^{\infty} f_X(x)\,f_Y(z-x)\,dx = \int_{-\infty}^{\infty} f_X(z-y)\,f_Y(y)\,dy .
$$
For independent integer-valued $X$ and $Y$ the same statement reads $\mathbb{P}(X+Y = n) = \sum_{r} \mathbb{P}(X = r)\,\mathbb{P}(Y = n-r)$.
:::

:::idea[Why a Jacobian, and why a sum convolves]{provenance=original}
A joint density is a probability per unit area. If a map $T$ carries a small region $A$ near $x$ onto a small region $T(A)$ near $y = T(x)$, then $(X,Y) \in A$ exactly when the transformed pair lies in $T(A)$, so the two regions carry the same probability. Probability equals density times area, and the areas differ by the local stretching factor of $T$ — which is $\lvert \det DT \rvert$ going forwards, hence $\lvert J \rvert = \lvert \det DT^{-1}\rvert$ going backwards. So the new density is the old one evaluated at the preimage, divided by the forward stretch, which is the same as multiplied by $\lvert J \rvert$. Nothing probabilistic has happened: this is :ref[Multiple integrals and change of variables]{to=found.change-of-variables}, applied to the integral that defines a probability.

The sum formula is this with a deliberately wasteful choice of map. To find the law of $Z = X + Y$ one needs an invertible map, so adjoin a second coordinate that will be discarded: take $(x,y) \mapsto (z,w) = (x+y, x)$. This is a shear; it preserves area, so $\lvert J \rvert = 1$, and the joint density of $(Z,W)$ is $f(w, z-w)$. Integrating out the unwanted $w$ gives the marginal density of $Z$, which is the stated formula. Independence then factorises the integrand, and the integral of a product of two shifted functions is by definition a convolution.

That the density of a sum of independent variables is a convolution is the reason transforms dominate the subject: a convolution becomes a product under the Fourier or Laplace transform, so the sum of independent variables becomes multiplication of :ref[characteristic functions]{to=prob.characteristic-functions}. The piecewise formula of part 2 is the only genuine addition to the picture, and it says that when a map folds the line, each sheet of the fold contributes its own term.
:::

:::proof[The three formulas]{provenance=adapted src="grimmett-stirzaker-2020:the proof of Corollary (4.7.4), pp. 122-123, and of Theorem (4.8.1), p. 129; rhb-2006:the probability-element derivation in §30.14, p. 1206"}
**Part 1.** Let $B \subseteq R$ be a region and $A = T^{-1}(B) \subseteq D$ its preimage, so that $Y \in B$ holds exactly when $X \in A$. Then
$$
\mathbb{P}(Y \in B) = \mathbb{P}(X \in A) = \int_{A} f(x)\,dx .
$$
By the change-of-variables theorem for multiple integrals, applied to the one-to-one continuously differentiable map $T^{-1} : B \to A$,
$$
\int_{A} f(x)\,dx = \int_{B} f\bigl( T^{-1}(y) \bigr)\,\lvert J(y) \rvert \, dy .
$$
Thus $\mathbb{P}(Y \in B) = \int_{B} f(T^{-1}(y))\lvert J(y)\rvert\,dy$ for every such $B$. Comparing with the definition of a joint density for $Y$ — namely that $\mathbb{P}(Y \in B) = \int_B f_Y$ for all $B$ — identifies the integrand, and outside $R$ the probability is zero so the density may be taken to be zero. Riley, Hobson and Bence obtain the same formula in one line by equating the probability elements $\lvert f\,dx_1\cdots dx_n\rvert$ and $\lvert g\,dy_1\cdots dy_n \rvert$; that is the infinitesimal version of this argument.

**Part 2.** Fix $i$ and suppose first that $g$ is increasing on $I_i$. For $y \in g(I_i)$,
$$
\mathbb{P}\bigl( g(X) \le y,\; X \in I_i \bigr) = \mathbb{P}\bigl( X \le h_i(y),\; X \in I_i \bigr) ,
$$
because $g$ increasing makes $g(x) \le y$ equivalent to $x \le h_i(y)$ within $I_i$. Differentiating in $y$ and using the chain rule gives the contribution $f_X(h_i(y))\,h_i'(y)$, and $h_i' > 0$ here so this is $f_X(h_i(y))\lvert h_i'(y)\rvert$. If $g$ is decreasing on $I_i$ the inequality reverses, the contribution is $-f_X(h_i(y))h_i'(y)$, and $h_i' < 0$, so again the contribution is $f_X(h_i(y))\lvert h_i'(y)\rvert$. The events $\{X \in I_i\}$ are disjoint with union of full probability, since the $I_i$ partition $\mathbb{R}$, so
$$
\mathbb{P}\bigl( g(X) \le y \bigr) = \sum_i \mathbb{P}\bigl( g(X) \le y,\; X \in I_i \bigr) ,
$$
and differentiating term by term gives the stated sum.

**Part 3.** Apply part 1 to the map $T(x,y) = (x+y,\, x) = (z,w)$ of $\mathbb{R}^{2}$ onto itself. Its inverse is $x = w$, $y = z - w$, with
$$
J(z,w) = \det\begin{pmatrix} \partial x/\partial z & \partial y/\partial z \\ \partial x/\partial w & \partial y/\partial w \end{pmatrix} = \det\begin{pmatrix} 0 & 1 \\ 1 & -1 \end{pmatrix} = -1 ,
$$
so $\lvert J \rvert = 1$ and the joint density of $(Z, W)$ is $f_{Z,W}(z,w) = f(w,\, z-w)$. Integrating out $w$ gives the marginal density of $Z = X+Y$:
$$
f_{X+Y}(z) = \int_{-\infty}^{\infty} f(w,\, z-w)\,dw ,
$$
which is the stated formula after renaming $w$ as $x$. If $X$ and $Y$ are independent then $f(x,y) = f_X(x)f_Y(y)$ by criterion 2, and the integrand becomes $f_X(x)f_Y(z-x)$; substituting $y = z - x$ exchanges the two roles and gives the second form. The exchange of the order of integration implicit in computing a marginal is justified by Tonelli's theorem (:ref[Fubini and Tonelli]{to=measure.fubini-tonelli}), the integrand being non-negative.

In the discrete case the same argument needs no Jacobian: the events $\{X = r,\, Y = n-r\}$, as $r$ ranges over the integers, are disjoint with union $\{X + Y = n\}$, so their probabilities add. $\square$
:::

:::remark[Where each hypothesis is used]{provenance=adapted src="grimmett-stirzaker-2020:the hypotheses of Theorem (4.7.3) and Corollary (4.7.4), p. 122, the discussion of many-one maps preceding eq. (4.7.16), p. 126, Example (4.7.9), p. 125, and the footnote and Exercise (4.5.1) on marginals, p. 111"}
**One-to-one, on the support only.** The transformation rule needs $T$ to be injective where the density lives; what it does elsewhere is irrelevant, and a failure of injectivity on a set of Lebesgue measure zero is harmless because such a set carries no probability. The polar map of the first example below is not injective at the origin, and that costs nothing. When injectivity genuinely fails on a set of positive measure, the map folds, and part 2 — or its $n$-dimensional analogue, a sum over the sheets — is required. Using part 1 on a folding map loses the contributions of all but one sheet; applying it to $Y = X^{2}$ gives half the right answer.

**A non-vanishing Jacobian, and continuous partial derivatives.** These are the hypotheses of the change-of-variables theorem for multiple integrals, and they are used in exactly one place, the second display of the proof of part 1. Where $J = 0$ the map collapses volume and the formula would assign density zero to a point that may carry probability; such points must be excluded, and again a measure-zero set of them is harmless.

**Getting the range right is half the work.** The formula is $f_Y(y) = f(T^{-1}(y))\lvert J(y)\rvert$ *on $R = T(D)$ and zero elsewhere*, and the commonest error in practice is to write the formula down correctly and then integrate it over the wrong region. Grimmett and Stirzaker's Example (4.7.8) is the standard trap: for independent exponentials, the pair $X = X_1$, $S = X_1 + X_2$ has joint density $\lambda^{2}e^{-\lambda s}$, which looks like a product of a function of $x$ with a function of $s$ — but only on the region $0 \le x \le s$, which is not a rectangle, so $X$ and $S$ are *not* independent. This is why criterion 3 above insists that the factorisation hold on the whole plane.

**Independence, used only in the last step of part 3.** The formula $f_{X+Y}(z) = \int f(x, z-x)\,dx$ holds for any jointly continuous pair, dependent or not; it is only the collapse to a convolution of marginals that needs $f = f_Xf_Y$. Applying the convolution formula to dependent variables is a genuine error, not a conservative approximation: it can give a density with the wrong variance in either direction, since $\operatorname{var}(X+Y)$ differs from $\operatorname{var} X + \operatorname{var} Y$ by $2\operatorname{cov}(X,Y)$.

**This machinery does not condition on null events.** It computes the law of a transformed variable, not the law of one variable given that another takes an exact value. Grimmett and Stirzaker's Example (4.7.9) shows what goes wrong if the two are confused: for independent exponentials $X_1, X_2$, "the conditional density of $X_1+X_2$ given $X_1 = X_2$" comes out as $\lambda^{2}y e^{-\lambda y}$ if the condition is approached through the ratio $X_1/X_2 \to 1$ and as $\lambda e^{-\lambda y}$ if it is approached through the difference $X_1 - X_2 \to 0$. The event has probability zero and the answer depends on the approach. Conditioning of this kind belongs to :ref[Conditional expectation]{to=prob.conditional-expectation}.

**Joint continuity is stronger than continuity of each variable.** A jointly continuous pair has continuous marginals in the sense of having densities, but those densities need not be continuous functions; Grimmett and Stirzaker record a density, due to Clarke, whose first marginal is discontinuous. Conversely, two variables each with a density need not be jointly continuous at all: if $Y = X$ then the pair is supported on a line, which has zero area, and no joint density exists.
:::

:::method[Finding the density of a function of random variables]{provenance=original}
Given the joint density $f$ of $X = (X_1,\dots,X_n)$ and a function $Y_1 = g(X)$ whose density is wanted:

1. **Complete the map.** Choose $n-1$ further functions $Y_2, \dots, Y_n$ of $X$ so that $T = (g, Y_2, \dots, Y_n)$ is one-to-one on the support of $f$. Choose them for algebraic convenience: a coordinate of $X$ itself is usually the easiest, and that choice turns step 5 into an integral you can do.
2. **Invert.** Solve $y = T(x)$ for $x = T^{-1}(y)$ explicitly. If the solution is multi-valued, the map folds: split the support into pieces on which it is one-to-one, carry steps 2-4 out on each, and add the results.
3. **Jacobian.** Form the matrix of partial derivatives $\partial x_i/\partial y_j$ of the *inverse* map and take the modulus of its determinant, $\lvert J(y)\rvert$. (Differentiating the forward map instead and taking the reciprocal of the modulus of its determinant gives the same number, and is often less work.)
4. **Substitute.** Write $f_Y(y) = f\bigl(T^{-1}(y)\bigr)\lvert J(y)\rvert$.
5. **Determine the range and integrate out.** Express the image $R = T(D)$ as explicit inequalities on $y$ — this is the step that is easy to get wrong — and then integrate $f_Y$ over $y_2, \dots, y_n$ within that range to obtain the marginal density of $Y_1$.
6. **Shortcuts worth knowing.**
   - For $Y = g(X)$ with a single variable and a monotone or piecewise monotone $g$, use the formula of part 2 directly.
   - For a sum of independent variables, use the convolution formula rather than re-deriving it; for a sum of many, use :ref[characteristic functions]{to=prob.characteristic-functions} instead, since convolution is associative but tedious.
   - If the problem has a symmetry, exploit it: for a function of $\sum_i X_i^{2}$ with a spherically symmetric joint density, integrating over a shell of radius $r$ and thickness $dr$ replaces the whole construction, as Riley, Hobson and Bence do in deriving the chi-squared density.
   - When only the distribution function of $Y$ is wanted, computing $\mathbb{P}(g(X) \le y)$ as an integral of $f$ over the region $\{g \le y\}$ is often quicker than finding the density.
7. **Check.** Verify that $f_Y \ge 0$, that $\int f_Y = 1$, and that the mean and variance agree with what linearity and rule 6 of :ref[Expectation, variance and covariance]{to=prob.expectation-variance} predict. These three checks between them catch a missing Jacobian, a wrong range and an algebraic slip.
:::

:::example[Two velocity components to a speed: the two-dimensional Maxwell distribution]{provenance=original}
A gas is confined to a thin film so that its molecules move in a plane. The two velocity components $V_x$ and $V_y$ of a molecule are independent and each $N(0, \sigma^{2})$, where $\sigma^{2} = k_{B}T/m$. What is the distribution of the speed $S = \sqrt{V_x^{2} + V_y^{2}}$?

**Step 1: the joint density and the completed map.** By independence,
$$
f(v_x, v_y) = \frac{1}{\sqrt{2\pi\sigma^{2}}}e^{-v_x^{2}/2\sigma^{2}} \cdot \frac{1}{\sqrt{2\pi\sigma^{2}}}e^{-v_y^{2}/2\sigma^{2}} = \frac{1}{2\pi\sigma^{2}}\,\exp\!\left( -\frac{v_x^{2}+v_y^{2}}{2\sigma^{2}} \right) .
$$
The speed alone is not invertible, so adjoin the direction: let $S = \sqrt{V_x^{2}+V_y^{2}}$ and $\Theta \in [0, 2\pi)$ be the polar angle.

**Steps 2 and 3: inverse and Jacobian.** The inverse map is $v_x = s\cos\theta$, $v_y = s\sin\theta$, and
$$
J(s,\theta) = \det\begin{pmatrix} \cos\theta & \sin\theta \\ -s\sin\theta & s\cos\theta \end{pmatrix} = s\cos^{2}\theta + s\sin^{2}\theta = s ,
$$
so $\lvert J \rvert = s$. The map is one-to-one on $\{s > 0,\ 0 \le \theta < 2\pi\}$; it fails only at the origin, a single point of zero area, which carries no probability.

**Step 4: substitute.** Since $v_x^{2} + v_y^{2} = s^{2}$,
$$
f_{S,\Theta}(s,\theta) = \frac{1}{2\pi\sigma^{2}} e^{-s^{2}/2\sigma^{2}} \cdot s = \underbrace{\frac{s}{\sigma^{2}}e^{-s^{2}/2\sigma^{2}}}_{\text{a function of } s} \cdot \underbrace{\frac{1}{2\pi}}_{\text{a function of }\theta} , \qquad s > 0,\ 0 \le \theta < 2\pi .
$$

**Step 5: range and marginal.** The range is the product region $\{s>0\} \times [0,2\pi)$, so the factorisation is valid on the whole of it and criterion 3 applies: $S$ and $\Theta$ are **independent**, with $\Theta$ uniform on $[0,2\pi)$ and
$$
f_S(s) = \frac{s}{\sigma^{2}}\,e^{-s^{2}/2\sigma^{2}} , \qquad s > 0 ,
$$
the Rayleigh density. Had the Jacobian factor $s$ been forgotten, the "density" would have been largest at $s=0$, which is visibly wrong: there are more directions available at larger radius.

**Step 7: checks and numbers.** Substituting $u = s^{2}/2\sigma^{2}$ gives $\int_0^\infty f_S = \int_0^\infty e^{-u}du = 1$. The distribution function is $F_S(s) = 1 - e^{-s^{2}/2\sigma^{2}}$, so
$$
\mathbb{P}(S \le \sigma) = 1 - e^{-1/2} = 0.393469 , \qquad \mathbb{P}(S \le 2\sigma) = 1 - e^{-2} = 0.864665 .
$$
The most probable speed is at the maximum of $f_S$: $f_S'(s) = (1 - s^{2}/\sigma^{2})e^{-s^{2}/2\sigma^{2}}/\sigma^{2}$ vanishes at $s = \sigma$. The mean and root-mean-square speeds are
$$
\mathbb{E}(S) = \int_{0}^{\infty} \frac{s^{2}}{\sigma^{2}}e^{-s^{2}/2\sigma^{2}}\,ds = \sigma\sqrt{\tfrac{\pi}{2}} = 1.253314\,\sigma , \qquad
\sqrt{\mathbb{E}(S^{2})} = \sqrt{\mathbb{E}(V_x^{2}) + \mathbb{E}(V_y^{2})} = \sigma\sqrt{2} = 1.414214\,\sigma ,
$$
the second obtained from linearity of expectation without any integration, and the ordering $\sigma < 1.2533\sigma < 1.4142\sigma$ of mode, mean and root-mean-square is the familiar one for a right-skewed distribution. For nitrogen at $300\,\mathrm{K}$, with $m = 28.013\,u$, one finds $\sigma = \sqrt{k_BT/m} = 298.40\,\mathrm{m\,s^{-1}}$, a mean speed $\mathbb{E}(S) = 373.99\,\mathrm{m\,s^{-1}}$, a root-mean-square speed of $422.00\,\mathrm{m\,s^{-1}}$, and $\mathbb{P}(S \le 298.40\,\mathrm{m\,s^{-1}}) = 0.3935$.

The same calculation in three dimensions, with $\lvert J \rvert = r^{2}\sin\phi$, produces the factor $s^{2}$ instead of $s$ and so the full Maxwell-Boltzmann speed distribution.
:::

:::example[A decay time plus a readout delay: convolution]{provenance=original}
An unstable state decays at a time $D$ measured from the start of a gate, exponentially distributed with mean lifetime $\tau$; the electronics then timestamps the event after a delay $U$ that is uniformly distributed between $0$ and $\tau$, independently of $D$. Work in units of $\tau$, so that $D$ has density $e^{-d}$ for $d > 0$ and $U$ has density $1$ on $(0,1)$. What is the distribution of the recorded time $T = D + U$?

**Convolution.** By part 3, with $f_U(u) = 1$ on $(0,1)$ and zero elsewhere,
$$
f_T(t) = \int_{-\infty}^{\infty} f_D(t-u)\,f_U(u)\,du = \int_{0}^{\min(1,\,t)} e^{-(t-u)}\,du ,
$$
the upper limit being $\min(1,t)$ because $f_D$ vanishes unless $t - u > 0$, that is unless $u < t$, while $f_U$ vanishes unless $u < 1$. Carrying out the elementary integral $\int_0^{a} e^{-(t-u)}du = e^{-t}(e^{a} - 1)$ with $a = \min(1,t)$:
$$
f_T(t) = \begin{cases}
0 , & t \le 0 , \\[2pt]
e^{-t}\bigl( e^{t} - 1 \bigr) = 1 - e^{-t} , & 0 < t < 1 , \\[2pt]
e^{-t}\bigl( e - 1 \bigr) , & t \ge 1 .
\end{cases}
$$

**Checks.** The two branches agree at $t = 1$, where both give $1 - e^{-1} = 0.632121$, so $f_T$ is continuous; it rises from $0$ on $(0,1)$ and decays exponentially thereafter, with its maximum at $t = 1$. Its total mass is
$$
\int_{0}^{1}\bigl(1 - e^{-t}\bigr)dt + \int_{1}^{\infty}(e-1)e^{-t}\,dt = \bigl[ 1 - (1 - e^{-1}) \bigr] + (e-1)e^{-1} = e^{-1} + \bigl(1 - e^{-1}\bigr) = 1 .
$$
By linearity of expectation and rule 6 of :ref[Expectation, variance and covariance]{to=prob.expectation-variance}, using independence,
$$
\mathbb{E}(T) = \mathbb{E}(D) + \mathbb{E}(U) = 1 + \tfrac12 = 1.5 , \qquad
\operatorname{var}(T) = 1 + \tfrac{1}{12} = \tfrac{13}{12} = 1.083333 ,
$$
neither of which required the density at all — a useful independent check on it.

**A checkable number.** The probability that the recorded time falls within one mean lifetime of the start of the gate is
$$
\mathbb{P}(T \le 1) = \int_{0}^{1}\bigl( 1 - e^{-t}\bigr)dt = 1 - \bigl( 1 - e^{-1} \bigr) = e^{-1} = 0.367879 .
$$
For comparison, the undelayed decay satisfies $\mathbb{P}(D \le 1) = 1 - e^{-1} = 0.632121$. The delay has moved a large part of the probability past the one-lifetime mark: the uniform smearing, though small in mean, is comparable to the lifetime and badly distorts the early part of the spectrum. Fitting a pure exponential to $T$ would overestimate $\tau$, and the standard remedy — deconvolving the known instrument response from the measured spectrum — is exactly the inverse of the calculation just performed.
:::

:::application[Where transformations of densities are the work]{provenance=original}
**Instrument response.** Every measured spectrum is the convolution of the true spectrum with the response function of the apparatus: a pulse-height distribution smeared by electronic noise, a spectral line broadened by a finite slit, a time-of-flight peak widened by a trigger jitter. Part 3 is the statement of this, and the Gaussian-on-Gaussian case explains why resolutions add in quadrature, $\sigma_{\text{obs}}^{2} = \sigma_{\text{true}}^{2} + \sigma_{\text{inst}}^{2}$. Unfolding or deconvolution reverses it, and is hard precisely because convolution destroys the high-frequency content that would be needed to invert it.

**Derived quantities and error propagation.** A measured quantity is almost never the one of interest: one measures a period and wants a frequency, measures two lengths and wants an aspect ratio, measures counts and wants a rate. Part 2 gives the exact density of the derived quantity, and the first-order version of it — the affine case $f_Y(y) = \lvert a\rvert^{-1}f_X((y-b)/a)$ with $a = g'$ — is the linearised rule of :ref[Error propagation]{to=stats.error-propagation}. The exact rule matters when the function is strongly curved over the width of the input distribution, which is when the linear rule silently fails.

**Sampling distributions.** The chi-squared, Student and Fisher distributions of :ref[Sampling distributions]{to=stats.sampling-distributions} are each produced by one application of part 1 to independent normals: $\chi^{2}_{n} = \sum_i Z_i^{2}$ by the spherical-shell version of the method, as Riley, Hobson and Bence carry it out; Student's $t$ as a ratio of a normal to the square root of an independent chi-squared; and $F$ as a ratio of two chi-squareds. The Rayleigh density of the first example is the $n=2$ case, in disguise.

**Random number generation.** Inverse-transform sampling is part 2 run backwards: if $U$ is uniform on $(0,1)$ then $F^{-1}(U)$ has distribution function $F$. The Box-Muller algorithm is the first worked example read backwards — generate the Rayleigh radius from a uniform by inverting $1 - e^{-s^{2}/2}$, generate an independent uniform angle, and the Cartesian components are two independent standard normals. The whole of Monte Carlo rests on such transformations, and the Jacobian is what makes the output density correct.

**Statistical mechanics and kinetic theory.** The step from a distribution over velocity vectors to one over speeds, over energies, or over a relative velocity between two molecules is in every case an application of this method; the familiar density-of-states factors $s$, $s^{2}$, $\sqrt{E}$ are Jacobians and nothing else. The same is true of the change from Cartesian to action-angle variables in phase space, where Liouville's theorem is the statement that the relevant Jacobian is $1$ along the flow.

**Sums and limit theorems.** Repeated convolution is what the :ref[central limit theorem]{to=prob.central-limit-theorem} is about, and the reason the proof is conducted with :ref[characteristic functions]{to=prob.characteristic-functions} is that they turn the convolution of part 3 into multiplication. The stable distributions — normal, Cauchy, Lévy — are exactly the fixed points of repeated convolution followed by rescaling.
:::
