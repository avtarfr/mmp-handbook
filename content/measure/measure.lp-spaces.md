---
id: measure.lp-spaces
title: L^p spaces
kind: theorem
level: core
summary: Establishes the two inequalities that make $\|\cdot\|_p$ a norm, proves that $L^p$ is complete for $1 \le p \le \infty$ (Riesz-Fischer), and identifies the simple and continuous functions as dense subspaces, so that every $L^p$ function can be approached by something concrete.
prereqs: [measure.dominated-convergence, measure.monotone-convergence-fatou, measure.modes-of-convergence, measure.lebesgue-integral, measure.measurable-functions, measure.lebesgue-measure, measure.sigma-algebras-measures]
provenance: adapted
sources:
  - work: folland-1999
    loc: "§6.1, pp. 181–186: the definition of $L^p$ and the failure of the triangle inequality for $p<1$, pp. 181–182; Lemma 6.1 (the weighted arithmetic-geometric mean inequality) and Hölder's Inequality 6.2 with (6.3), (6.4) and the equality condition, p. 182; the conjugate exponent and Minkowski's Inequality 6.5, p. 183; Thm 6.6 (completeness) and Prop. 6.7 (density of simple functions), p. 183; the definition of $\\|\\cdot\\|_\\infty$ and $L^\\infty$ and Thm 6.8(a)–(e), p. 184; the examples $f_a(x)=x^{-a}$ and Props. 6.9 and 6.10 on inclusions, p. 185. Also §7.2, Prop. 7.9 ($C_c(X)$ dense in $L^p$ for a Radon measure), p. 217"
    pages: "181-186, 217"
    role: the statements and proof routes for Hölder, Minkowski, completeness and both density theorems, the equality condition in Hölder, the $p = \\infty$ endpoint, and the counterexample showing the triangle inequality fails below $p=1$
  - work: reed-simon-1980
    loc: "§III.1, Example 2 and Thm III.1(a)–(c) (Minkowski, Riesz-Fisher, and Hölder in the form $p^{-1}+q^{-1}=r^{-1}$), p. 68; the supplement to §III.1, Thm S.3 (Hölder, with the area proof of $ab \\le a^p/p + b^q/q$) and its Corollaries 1 and 2, pp. 348–349"
    pages: "68, 348-349"
    role: the three-exponent generalisation of Hölder; the equality condition phrased as $|g|$ being a multiple of $|f|^{p-1}$; the dual characterisation of the norm and the derivation of Minkowski from it
  - work: stakgold-holst-2011
    loc: "§4.3, Example 6 (the continuous functions under the $L_2$ norm are not complete, with the arctangent sequence) and Example 7 ($L_2(a,b)$ as their completion), pp. 239–240; Exercise 4.3.6 (polynomials, continuous, differentiable and test functions dense in $L_2(a,b)$) and Exercise 4.3.7 (Young, Hölder and Minkowski in $\\mathbb{R}^n$), p. 244"
    pages: "239-240, 244"
    role: the concrete failure of completeness for continuous functions in the mean-square norm, the reading of $L^2$ as a completion, and the list of dense subspaces of $L_2(a,b)$
  - work: grimmett-stirzaker-2020
    loc: "§7.2, note (b), p. 353, where the norm $\\|Y\\|_r = (\\mathbb{E}|Y^r|)^{1/r}$ on the random variables with finite $r$th moment is defined; §7.3, Thm (6) (Hölder's inequality), Thm (7) (Minkowski's inequality) with the norm form of both, and Thm (8) (the $C_p$ inequality), p. 364"
    pages: "353, 364"
    role: the probabilists' statement of the same two inequalities for random variables, and the $C_p$ inequality that replaces Minkowski when $p<1$
---

:::definition[$L^p$, $L^\infty$ and conjugate exponents]{provenance=adapted src="folland-1999:§6.1, pp. 181–184"}
Fix a measure space $(X,\mathcal{M},\mu)$. For measurable $f : X \to \mathbb{C}$ and $0 < p < \infty$ put

$$
\|f\|_p = \Bigl[\int_X |f|^p \,d\mu\Bigr]^{1/p} \in [0,\infty] ,
\qquad
L^p(X,\mathcal{M},\mu) = \{\, f \text{ measurable} : \|f\|_p < \infty \,\} ,
$$

and for $p = \infty$ put

$$
\|f\|_\infty = \inf\{\, a > 0 : \mu(\{x : |f(x)| > a\}) = 0 \,\} ,
\qquad L^\infty = \{\, f : \|f\|_\infty < \infty \,\},
$$

with $\inf\varnothing = \infty$. The number $\|f\|_\infty$ is the **essential supremum** of $|f|$, and the infimum is attained, because $\{|f| > \|f\|_\infty\}$ is the countable union of the null sets $\{|f| > \|f\|_\infty + 1/n\}$. As with $L^1$, two functions equal a.e. are the same element of $L^p$; without this identification $\|f\|_p = 0$ would not force $f = 0$.

$L^p$ is a vector space: $|f+g|^p \le [2\max(|f|,|g|)]^p \le 2^p(|f|^p + |g|^p)$.

For $1 < p < \infty$ the **conjugate exponent** is the number $q = p/(p-1)$, equivalently $p^{-1} + q^{-1} = 1$. Following :cite[Folland]{work=folland-1999 loc="§6.1, p. 184"} we also call $1$ and $\infty$ conjugate to each other, which is the formal reading of $1^{-1} + \infty^{-1} = 1$.

When $\mu$ is counting measure on a set $A$ one writes $\ell^p(A)$, and $\ell^p$ for $A = \mathbb{N}$; then $\|a\|_p = (\sum_n |a_n|^p)^{1/p}$ and every statement below is a statement about series.
:::

:::statement[Hölder's inequality]{provenance=adapted src="folland-1999:Thm 6.2 with (6.3), p. 182, and Thm 6.8(a), p. 184; reed-simon-1980:Thm S.3, p. 348"}
Let $1 < p < \infty$ and let $q$ be its conjugate exponent. For all measurable $f, g$ on $X$,

$$
\|fg\|_1 \;\le\; \|f\|_p \,\|g\|_q .
$$

In particular if $f \in L^p$ and $g \in L^q$ then $fg \in L^1$, and in that case equality holds if and only if $\alpha|f|^p = \beta|g|^q$ a.e. for some constants $\alpha,\beta$ with $\alpha\beta \ne 0$. :cite[Reed and Simon]{work=reed-simon-1980 loc="Thm S.3, p. 348"} state the same equality condition in the equivalent form: if neither $f$ nor $g$ vanishes a.e., equality holds exactly when $|g|$ is a.e. a constant multiple of $|f|^{p-1}$.

The endpoint case is :cite[Folland's]{work=folland-1999 loc="Thm 6.8(a), p. 184"}: $\|fg\|_1 \le \|f\|_1\|g\|_\infty$, with equality for $f \in L^1$, $g \in L^\infty$ exactly when $|g| = \|g\|_\infty$ a.e. on the set where $f \ne 0$.

For $p = q = 2$ this is the Cauchy-Schwarz inequality of :ref[inner-product spaces]{to=linalg.inner-product-spaces}.
:::

:::statement[Minkowski's inequality, completeness, density]{provenance=adapted src="folland-1999:Thm 6.5, Thm 6.6 and Prop. 6.7, p. 183, Thm 6.8(b)(d)(e), p. 184, and Prop. 7.9, p. 217; reed-simon-1980:Thm III.1(a)(b), p. 68"}
Let $(X,\mathcal{M},\mu)$ be a measure space.

1. **Minkowski's inequality.** If $1 \le p < \infty$ and $f, g \in L^p$ then $\|f+g\|_p \le \|f\|_p + \|g\|_p$. The same holds for $p = \infty$. Hence $\|\cdot\|_p$ is a norm on $L^p$ for every $1 \le p \le \infty$, and $L^p$ is a normed vector space (see :ref[normed and Banach spaces]{to=funcan.normed-banach-spaces}).
2. **Riesz-Fischer: completeness.** For $1 \le p < \infty$, $L^p$ is complete, hence a Banach space; and so is $L^\infty$. Equivalently, every $\|\cdot\|_p$-Cauchy sequence of $L^p$ functions converges in $L^p$ to an $L^p$ function.
3. **Density of simple functions.** For $1 \le p < \infty$, the simple functions $f = \sum_{j=1}^n a_j \chi_{E_j}$ with $\mu(E_j) < \infty$ for every $j$ are dense in $L^p$. In $L^\infty$ the simple functions are dense without the finite-measure restriction.
4. **Density of continuous functions.** If $\mu$ is a Radon measure on a locally compact Hausdorff space $X$ — Lebesgue measure on $\mathbb{R}^n$ is one — then $C_c(X)$, the continuous functions of compact support, is dense in $L^p(\mu)$ for $1 \le p < \infty$.

Part 4 fails at $p = \infty$: a uniform limit of continuous functions is continuous, so the closure of $C_c(\mathbb{R})$ in $L^\infty(\mathbb{R})$ contains no discontinuous function.
:::

:::note[Three variants in the library]{provenance=adapted src="reed-simon-1980:Thm III.1(c), p. 68; grimmett-stirzaker-2020:note (b), p. 353 and Thms (6), (7) and (8), p. 364; stakgold-holst-2011:§4.3, Examples 6 and 7, pp. 239–240, and Exercise 4.3.6, p. 244"}
- **Three exponents.** :cite[Reed and Simon]{work=reed-simon-1980 loc="Thm III.1(c), p. 68"} state Hölder in the more flexible form: if $p,q,r \ge 1$ satisfy $p^{-1} + q^{-1} = r^{-1}$ and $f \in L^p$, $g \in L^q$, then $fg \in L^r$ with $\|fg\|_r \le \|f\|_p\|g\|_q$. Taking $r = 1$ recovers the statement above; taking $r = 2$ is what one needs to multiply two functions and stay in $L^2$. They also record the dual description of the norm, $\|f\|_p = \sup\{\|fg\|_1 : \|g\|_q = 1\}$, from which Minkowski follows in two lines by taking suprema in $\|(f+g)h\|_1 \le \|fh\|_1 + \|gh\|_1$; that is the route of their Corollary 2, and it is different from the route proved below.
- **Random variables.** :cite[Grimmett and Stirzaker]{work=grimmett-stirzaker-2020 loc="Thms (6) and (7), p. 364"} state the same two inequalities as $\|XY\|_1 \le \|X\|_p\|Y\|_q$ and $\|X+Y\|_p \le \|X\|_p + \|Y\|_p$ with $\|X\|_p = (\mathbb{E}|X^p|)^{1/p}$, the case of a probability measure. They add the $C_p$ inequality $\mathbb{E}(|X+Y|^p) \le C_p(\mathbb{E}|X^p| + \mathbb{E}|Y^p|)$ with $C_p = 1$ for $0 < p \le 1$ and $C_p = 2^{p-1}$ for $p > 1$, which is the substitute for Minkowski in the range $p<1$ where the triangle inequality is unavailable.
- **$L^2$ as a completion.** :cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="§4.3, Examples 6 and 7, pp. 239–240"} make completeness concrete the other way round: the continuous functions on $[a,b]$ under the mean-square norm are *not* complete, as the sequence $u_k(x) = \tfrac12 + \pi^{-1}\arctan(kx)$ on $(-1,1)$ shows — it is Cauchy in that norm and its limit $\tfrac12 + \tfrac12\operatorname{sgn} x$ is discontinuous — and they define $L_2(a,b)$ as the completion. Their Exercise 4.3.6 lists dense subspaces of $L_2(a,b)$: polynomials, continuous functions, differentiable functions, twice-differentiable functions vanishing at the endpoints, and the test functions $C_0^\infty(a,b)$.
:::

:::idea{provenance=original}
The three results have three different engines.

Hölder is convexity in disguise. The inequality $a^{\lambda}b^{1-\lambda} \le \lambda a + (1-\lambda) b$ says that the logarithm is concave; applied pointwise with $a = |f|^p$, $b = |g|^q$ and $\lambda = 1/p$ it turns a product into a sum, which integrates. Normalising both norms to $1$ beforehand is what makes the right-hand side integrate to $p^{-1}+q^{-1} = 1$ exactly.

Minkowski is Hölder applied once, after the trick of writing $|f+g|^p = |f+g|\,|f+g|^{p-1}$ and noticing that the conjugate exponent sends $p-1$ back to $p$. The whole content of "the triangle inequality holds exactly for $p \ge 1$" is the convexity of $t \mapsto t^p$.

Completeness is where the convergence theorems are used, and the route is to replace a Cauchy sequence by a series: a Cauchy sequence has a subsequence whose consecutive differences have summable norms, and such a series can be handled with monotone convergence (to build a dominating function) and then dominated convergence (to get convergence of the partial sums in norm). Density is the simple-function approximation of a measurable function, upgraded from pointwise to norm convergence by dominated convergence once more, and then, for continuity, one indicator at a time by squeezing a continuous function between a compact set and an open set.
:::

:::proof[Hölder]{provenance=adapted src="folland-1999:Lemma 6.1 and Thm 6.2, p. 182"}
**Step 1: a pointwise inequality between a product and a sum.** For $a, b \ge 0$ and $0 < \lambda < 1$,
$$
a^{\lambda}b^{1-\lambda} \le \lambda a + (1-\lambda) b , \qquad\text{with equality iff } a = b .
$$
If $b = 0$ both sides are what they are and the claim is immediate; otherwise divide by $b$ and set $t = a/b$, reducing the claim to $t^{\lambda} \le \lambda t + (1-\lambda)$. The function $t \mapsto t^{\lambda} - \lambda t$ has derivative $\lambda(t^{\lambda-1} - 1)$, positive for $t<1$ and negative for $t>1$, so its maximum over $t>0$ is its value $1-\lambda$ at $t = 1$, attained only there. That is the claim, with equality only at $t=1$, that is $a=b$.

**Step 2: reduce to normalised functions.** The inequality is trivial if $\|f\|_p$ or $\|g\|_q$ is $0$, since then $f$ or $g$ vanishes a.e. and so does $fg$; and it is trivial if either norm is infinite. So assume both are finite and non-zero. Replacing $f$ by $af$ and $g$ by $bg$ multiplies both sides by $|ab|$, so it costs nothing to assume $\|f\|_p = \|g\|_q = 1$, and the claim becomes $\|fg\|_1 \le 1$.

**Step 3: apply step 1 pointwise.** Fix $x$ and take $a = |f(x)|^p$, $b = |g(x)|^q$, $\lambda = 1/p$, so that $1-\lambda = 1/q$ and $a^\lambda b^{1-\lambda} = |f(x)|\,|g(x)|$:
$$
|f(x)g(x)| \le \frac{|f(x)|^p}{p} + \frac{|g(x)|^q}{q} .
$$

**Step 4: integrate.** By monotonicity and linearity of the integral,
$$
\|fg\|_1 \le \frac{1}{p}\int |f|^p + \frac{1}{q}\int|g|^q = \frac1p + \frac1q = 1 = \|f\|_p\|g\|_q .
$$

**Step 5: equality.** The inequality in step 4 is strict unless the pointwise inequality of step 3 is an equality a.e., which by step 1 happens exactly when $|f|^p = |g|^q$ a.e. Undoing the normalisation of step 2 turns this into $\alpha|f|^p = \beta|g|^q$ a.e. for constants with $\alpha\beta \ne 0$. $\square$
:::

:::proof[Minkowski]{provenance=adapted src="folland-1999:Thm 6.5, p. 183"}
Let $1 \le p < \infty$ and $f, g \in L^p$. For $p = 1$ the claim is $\int|f+g| \le \int|f| + \int|g|$, which is the pointwise triangle inequality integrated; and if $f+g = 0$ a.e. there is nothing to prove. So let $p > 1$ with conjugate exponent $q$, and note $(p-1)q = p$.

**Step 1: split off one factor.** Pointwise, $|f+g|^p = |f+g|\,|f+g|^{p-1} \le \bigl(|f| + |g|\bigr)|f+g|^{p-1}$.

**Step 2: Hölder on each term.** Integrating and applying Hölder to each of the two products,
$$
\int |f+g|^p \;\le\; \bigl\| |f+g|^{p-1} \bigr\|_q \bigl( \|f\|_p + \|g\|_p \bigr) .
$$

**Step 3: identify the leftover factor.** Because $(p-1)q = p$,
$$
\bigl\||f+g|^{p-1}\bigr\|_q = \Bigl[\int |f+g|^{(p-1)q}\Bigr]^{1/q} = \Bigl[\int|f+g|^p\Bigr]^{1/q} ,
$$
so with $A = \int |f+g|^p$ the last two steps read $A \le A^{1/q}\bigl(\|f\|_p + \|g\|_p\bigr)$.

**Step 4: divide.** $A$ is finite, because $L^p$ is a vector space, and we may assume $A > 0$. Dividing by $A^{1/q}$ and using $1 - 1/q = 1/p$ gives $A^{1/p} = \|f+g\|_p \le \|f\|_p + \|g\|_p$. **The division is the step that needs $A < \infty$**, and that in turn is where $f, g \in L^p$ is used rather than mere measurability.

For $p = \infty$: $|f| \le \|f\|_\infty$ and $|g| \le \|g\|_\infty$ a.e., so $|f+g| \le \|f\|_\infty + \|g\|_\infty$ off the union of two null sets, and the essential supremum obeys the same bound. $\square$
:::

:::proof[Riesz-Fischer: completeness]{provenance=adapted src="folland-1999:Thm 6.6, p. 183"}
Let $1 \le p < \infty$.

**Step 1: reduce a Cauchy sequence to a series.** Let $\{h_n\}$ be Cauchy in $L^p$. Choose indices $n_1 < n_2 < \cdots$ with $\|h_m - h_{n_k}\|_p \le 2^{-k}$ for every $m \ge n_k$, and set $f_1 = h_{n_1}$ and $f_{k+1} = h_{n_{k+1}} - h_{n_k}$. Then $\sum_{k\ge1} \|f_k\|_p \le \|h_{n_1}\|_p + \sum_{k\ge1} 2^{-k} < \infty$, and the series telescopes: $\sum_{k=1}^{j} f_k = h_{n_j}$. So if every absolutely convergent series in $L^p$ converges in $L^p$, the subsequence $\{h_{n_j}\}$ converges in $L^p$, and a Cauchy sequence with a convergent subsequence converges to the same limit by the triangle inequality. It therefore suffices to prove the statement for series.

**Step 2: a dominating function.** Let $\{f_k\} \subset L^p$ with $B = \sum_{k=1}^\infty \|f_k\|_p < \infty$. Put $G_n = \sum_{k=1}^n |f_k|$ and $G = \sum_{k=1}^\infty |f_k| \in [0,\infty]$. Minkowski gives $\|G_n\|_p \le \sum_{k=1}^n\|f_k\|_p \le B$ for every $n$. The functions $G_n^p$ increase pointwise to $G^p$, so :ref[monotone convergence]{to=measure.monotone-convergence-fatou} gives $\int G^p = \lim_n \int G_n^p \le B^p$. Hence $G \in L^p$ and in particular $G < \infty$ a.e.

**Step 3: the sum exists.** Where $G(x) < \infty$ the series $\sum_k f_k(x)$ converges absolutely, hence converges; call its sum $F(x)$, and set $F = 0$ on the null set where $G = \infty$. Then $|F| \le G$, so $F \in L^p$.

**Step 4: convergence in norm.** For each $n$, $\bigl|F - \sum_{k=1}^n f_k\bigr| \le |F| + G_n \le 2G$, so $\bigl|F - \sum_{k=1}^n f_k\bigr|^p \le (2G)^p \in L^1$ by step 2. The left side tends to $0$ pointwise a.e. by step 3, so :ref[dominated convergence]{to=measure.dominated-convergence} gives
$$
\Bigl\|F - \sum_{k=1}^n f_k\Bigr\|_p^p = \int \Bigl|F - \sum_{k=1}^n f_k\Bigr|^p \longrightarrow 0 .
$$
Thus $\sum_k f_k$ converges to $F$ in $L^p$, and by step 1, $L^p$ is complete.

**Step 5: the case $p = \infty$.** If $\{h_n\}$ is Cauchy in $L^\infty$, let $N$ be the union over all $m,n$ of the null sets where $|h_n - h_m| > \|h_n-h_m\|_\infty$; $N$ is null, being a countable union. Off $N$ the sequence is uniformly Cauchy, hence converges uniformly to some bounded $h$; setting $h = 0$ on $N$ gives $h \in L^\infty$ and $\|h_n - h\|_\infty \to 0$. $\square$
:::

:::proof[Density of simple and of continuous functions]{provenance=adapted src="folland-1999:Prop. 6.7, p. 183, and Prop. 7.9, p. 217"}
**Simple functions.** Let $1 \le p < \infty$ and $f \in L^p$. By the simple-function approximation theorem of :ref[measurable functions]{to=measure.measurable-functions} there are simple $f_n$ with $f_n \to f$ pointwise and $|f_n| \le |f|$. Each $f_n$ lies in $L^p$, and $|f_n - f|^p \le (|f_n|+|f|)^p \le 2^p|f|^p$, which is integrable; since $|f_n - f|^p \to 0$ pointwise, dominated convergence gives $\|f_n - f\|_p \to 0$. Finally, if $f_n = \sum_j a_j\chi_{E_j}$ with the $E_j$ disjoint and the $a_j$ non-zero, then $\sum_j |a_j|^p\mu(E_j) = \int|f_n|^p < \infty$ forces $\mu(E_j) < \infty$ for every $j$. **Finiteness of $p$ is used** in invoking dominated convergence on $|f_n-f|^p$; at $p=\infty$ the approximation is instead uniform and needs no convergence theorem.

**Continuous functions.** By the previous paragraph it is enough to approximate a single $\chi_E$ with $\mu(E) < \infty$. Let $\varepsilon > 0$. Regularity of the Radon measure $\mu$ supplies a compact $K \subseteq E$ and an open $U \supseteq E$ with $\mu(U \setminus K) < \varepsilon$, and Urysohn's lemma supplies $\varphi \in C_c(X)$ with $\chi_K \le \varphi \le \chi_U$. The functions $\chi_E$ and $\varphi$ both lie between $0$ and $1$ and agree outside $U\setminus K$, so $|\chi_E - \varphi|^p \le \chi_{U\setminus K}$ and
$$
\|\chi_E - \varphi\|_p \le \mu(U\setminus K)^{1/p} < \varepsilon^{1/p} .
$$
Since $\varepsilon$ was arbitrary and $p < \infty$, $\chi_E$ lies in the $L^p$-closure of $C_c(X)$. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=adapted src="folland-1999:§6.1, pp. 181–185"}
- **$p \ge 1$ is exactly what the triangle inequality needs.** :cite[Folland]{work=folland-1999 loc="§6.1, p. 182"} shows the failure below $1$ explicitly: for $0<p<1$ and $a,b>0$ one has $a^p + b^p > (a+b)^p$, so if $E$ and $F$ are disjoint of positive finite measure and $a = \mu(E)^{1/p}$, $b = \mu(F)^{1/p}$, then $\|\chi_E + \chi_F\|_p = (a^p+b^p)^{1/p} > a + b = \|\chi_E\|_p + \|\chi_F\|_p$. For $p<1$ the quantity $\|\cdot\|_p$ is therefore not a norm, and Grimmett and Stirzaker's $C_p$ inequality is what survives.
- **Conjugacy $p^{-1}+q^{-1}=1$ is used twice**: once in step 3 of the Hölder proof, to make $\lambda$ and $1-\lambda$ the two reciprocals, and once in step 3 of the Minkowski proof, where $(p-1)q = p$ is the only reason the leftover factor is a power of the quantity being estimated. Neither works for a mismatched pair.
- **Finiteness of $A = \int|f+g|^p$** is what allows the division in Minkowski step 4. It is guaranteed by $f, g \in L^p$ together with the estimate $|f+g|^p \le 2^p(|f|^p+|g|^p)$ of the definition block, and the proof would break for merely measurable $f, g$.
- **Completeness needs both convergence theorems**, monotone convergence to build the dominating $G$ and dominated convergence to finish, and so it is a genuinely Lebesgue-theoretic fact. With the Riemann integral it is false: :cite[Stakgold and Holst's]{work=stakgold-holst-2011 loc="§4.3, Example 6, pp. 239–240"} arctangent sequence is Cauchy in the mean-square norm with no continuous limit. Completeness is also what makes the $L^p$ limit in the :ref[modes of convergence]{to=measure.modes-of-convergence} usable without knowing the limit in advance.
- **$\sigma$-finiteness is not needed anywhere above**, and neither is any topology except in part 4, where a Radon measure on a locally compact Hausdorff space is assumed so that regularity and Urysohn's lemma are available.
- **There is no inclusion between $L^p$ and $L^q$ in general.** Folland's examples on $(0,\infty)$ with $f_a(x) = x^{-a}$, $a>0$, isolate the two obstructions: $f_a\chi_{(0,1)} \in L^p$ iff $p < a^{-1}$, so a function can be too singular at a point, while $f_a\chi_{(1,\infty)} \in L^p$ iff $p > a^{-1}$, so it can decay too slowly at infinity. Raising $p$ helps against slow decay and hurts against singularities. Inclusions do hold when one obstruction is excluded — on a finite measure space $L^q \subseteq L^p$ for $p<q$ — and Folland's Prop. 6.10 gives the interpolation bound $\|f\|_q \le \|f\|_p^{\lambda}\|f\|_r^{1-\lambda}$ for $p<q<r$ with $q^{-1} = \lambda p^{-1} + (1-\lambda)r^{-1}$.
- **Equality in Hölder is a rigidity statement**, not a technicality: it says the inequality is sharp and identifies the extremisers, which is what makes the duality formula $\|f\|_p = \sup\{\|fg\|_1 : \|g\|_q = 1\}$ of Reed and Simon true with a supremum that is attained.
:::

:::method[Using the $L^p$ toolkit]{provenance=original}
1. **To show $f \in L^p$,** split the domain at the places where $f$ is singular and where the domain is unbounded, and compare with a power $x^{-a}$ on each piece; the criterion is $ap < 1$ near a singularity and $ap > 1$ near infinity.
2. **To bound $\int |fg|$,** choose a conjugate pair $(p,q)$ for which both $\|f\|_p$ and $\|g\|_q$ are finite, and apply Hölder. If several choices work, the bound depends on the choice and may be optimised over $p$, as in the example below.
3. **To bound a product of three or more factors,** use the three-exponent form of :cite[Reed and Simon]{work=reed-simon-1980 loc="Thm III.1(c), p. 68"} repeatedly, or Hölder with exponents $p_1,\dots,p_k$ satisfying $\sum_j p_j^{-1} = 1$.
4. **To construct an element of $L^p$ as a limit,** verify that the candidate sequence is Cauchy in $\|\cdot\|_p$ and invoke completeness; this is how solutions of differential equations, Fourier series and conditional expectations are produced without a formula.
5. **To prove an identity or inequality for all $f \in L^p$,** prove it for simple functions or for $C_c$ functions, check that both sides are continuous in $\|\cdot\|_p$, and pass to the limit by density. This is the standard proof pattern for translation continuity, for the Plancherel theorem and for the boundedness of an operator defined at first only on nice functions.
6. **Never** use density at $p = \infty$ without checking: continuous functions are not dense there, and neither are the compactly supported ones.
:::

:::example[Hölder with an optimised exponent]{provenance=original}
Estimate, and then compare with the true value of,

$$
I = \int_0^1 x^{-1/3}(1-x)^{-1/2}\,dx .
$$

**Step 1: the two factors separately.** Let $f(x) = x^{-1/3}$ and $g(x) = (1-x)^{-1/2}$ on $(0,1)$. For $p < 3$,
$$
\|f\|_p = \Bigl[\int_0^1 x^{-p/3}dx\Bigr]^{1/p} = \Bigl[\frac{3}{3-p}\Bigr]^{1/p} ,
$$
since $\int_0^1 x^{-s}dx = 1/(1-s)$ for $s<1$. For $q<2$, likewise $\|g\|_q = [2/(2-q)]^{1/q}$.

**Step 2: the Hölder bound as a function of $p$.** With $q = p/(p-1)$ the condition $q<2$ reads $p>2$, and $2-q = (p-2)/(p-1)$, so the bound $I \le \|f\|_p\|g\|_q$ becomes
$$
B(p) = \Bigl[\frac{3}{3-p}\Bigr]^{1/p}\Bigl[\frac{2(p-1)}{p-2}\Bigr]^{(p-1)/p} ,
\qquad 2 < p < 3 .
$$
Both brackets blow up at the ends of the interval, so $B$ has an interior minimum.

**Step 3: the optimal exponent.** Try to make the two brackets equal. Setting $3/(3-p) = 2(p-1)/(p-2)$ gives $3(p-2) = 2(p-1)(3-p)$, that is $3p - 6 = -2p^2 + 8p - 6$, so $2p^2 = 5p$ and $p = 5/2$. Then $q = 5/3$, both brackets equal $6$, and
$$
B(5/2) = 6^{2/5}\cdot 6^{3/5} = 6^{2/5 + 3/5} = 6 .
$$
Numerically $\|f\|_{5/2} = 6^{2/5} = 2.0476725\ldots$ and $\|g\|_{5/3} = 6^{3/5} = 2.9301561\ldots$, whose product is $6.0000000$. Neighbouring exponents are worse: $B(2.45) = 6.020374$ and $B(2.55) = 6.019925$, so $p = 5/2$ is the minimiser and the best bound this method gives is

$$
I \le 6 .
$$

**Step 4: the true value.** The integral is a Beta function, $I = B\bigl(\tfrac23,\tfrac12\bigr) = \Gamma(\tfrac23)\Gamma(\tfrac12)/\Gamma(\tfrac76)$ (see :ref[the beta function]{to=spec.beta-function}), and numerically

$$
I = 2.5871095592\ldots
$$

so the optimised Hölder bound overshoots by a factor $6/2.58711 = 2.3192$. That is typical: Hölder is sharp only when $\alpha|f|^p = \beta|g|^q$ a.e., which here would require $x^{-5/6}$ to be proportional to $(1-x)^{-5/6}$, and it is not. The example shows both the strength of the method — a finite bound with no special function needed — and the price of its generality.
:::

:::example[Density made quantitative]{provenance=original}
Take $X = (0,1)$ with Lebesgue measure and $f(x) = x^{-1/3}$. Then $\|f\|_2 = [\int_0^1 x^{-2/3}dx]^{1/2} = \sqrt{3} = 1.7320508$, so $f \in L^2(0,1)$ although it is unbounded.

**Truncation.** For $N \ge 1$ let $f_N = \min(f, N)$, that is $f_N(x) = N$ for $0 < x \le N^{-3}$ and $f_N(x) = x^{-1/3}$ for $N^{-3} < x < 1$. The two functions differ only on $(0,N^{-3}]$, and there

$$
\|f - f_N\|_2^2 = \int_0^{N^{-3}}\bigl(x^{-1/3} - N\bigr)^2 dx
= \int_0^{N^{-3}} x^{-2/3}dx - 2N\int_0^{N^{-3}} x^{-1/3}dx + N^2 N^{-3} .
$$

The three terms are $3N^{-1}$, $-2N\cdot\tfrac32 N^{-2} = -3N^{-1}$ and $N^{-1}$, so

$$
\|f - f_N\|_2^2 = \frac{1}{N} , \qquad \|f-f_N\|_2 = N^{-1/2} .
$$

At $N = 100$ the error is exactly $0.1$, against $\|f\|_2 = 1.7320508$: a relative error of $5.77\%$. Numerical integration of $\int_0^{10^{-6}}(x^{-1/3}-100)^2dx$ returns $1.0000\times 10^{-2}$, confirming the algebra.

**From bounded to simple.** $f_N$ is bounded by $N$, so the dyadic simple functions $s_m = 2^{-m}\lfloor 2^m f_N\rfloor$ satisfy $0 \le f_N - s_m \le 2^{-m}$ everywhere, whence $\|f_N - s_m\|_2 \le 2^{-m}$ because the measure of $(0,1)$ is $1$. Each $s_m$ takes finitely many values, each on a set of finite measure. Combining, $\|f - s_m\|_2 \le N^{-1/2} + 2^{-m}$: with $N = 10^4$ and $m = 7$ this is $0.01 + 0.0078125 = 0.0178125$, that is a simple function whose $L^2$ distance from $f$ is at most $0.0178$, about $1.03\%$ of $\|f\|_2$. Density is not an abstract statement; the approximants are explicit and the error is computable.
:::

:::application{provenance=original}
**Quantum mechanics.** States are unit vectors of $L^2(\mathbb{R}^3)$, and completeness is what makes that space a Hilbert space, so that :ref[orthonormal bases]{to=funcan.orthonormal-bases} exist, projections onto closed subspaces exist, and a formally convergent eigenfunction expansion actually converges to a state. Cauchy-Schwarz, the $p=q=2$ case of Hölder, is the inequality behind the uncertainty principle. Density of $C_c^\infty$ is why one may verify an operator identity on smooth compactly supported wavefunctions and conclude it on all states.

**Partial differential equations.** Energy estimates live in $L^2$, Sobolev spaces are built from $L^p$ norms of derivatives, and existence proofs almost always produce a solution as the limit of a Cauchy sequence whose limit exists only because $L^p$ is complete. Hölder's inequality with a carefully chosen exponent pair is the standard device for absorbing a nonlinear term into a linear one; see :ref[weak solutions and Sobolev spaces]{to=pde.weak-solutions-sobolev}.

**Probability and statistics.** $L^2$ of a probability space is the space of finite-variance random variables, with the inner product given by covariance; the conditional expectation is the orthogonal projection onto a sub-$\sigma$-algebra, and it exists because $L^2$ is complete. Hölder with $p=q=2$ gives $|\operatorname{Cov}(X,Y)| \le \sigma_X\sigma_Y$, that is $|\rho| \le 1$ for the correlation coefficient, and the equality case says $|\rho|=1$ exactly for an affine relation. See :ref[probability inequalities]{to=prob.probability-inequalities}.

**Signal processing.** The energy of a signal is its squared $L^2$ norm, and :ref[Plancherel's theorem]{to=fourier.plancherel} is the statement that the Fourier transform is an isometry of $L^2$; it is proved by establishing the identity on a dense class and extending by continuity, which is exactly step 5 of the method above. Power constraints are $L^2$ bounds, peak constraints are $L^\infty$ bounds, and the lack of inclusion between the two is why both are specified in practice.

**Interpolation and scaling arguments.** The bound $\|f\|_q \le \|f\|_p^\lambda\|f\|_r^{1-\lambda}$ is the prototype of the interpolation inequalities used to trade regularity against integrability throughout fluid mechanics and kinetic theory, and the $x^{-a}$ examples are the scaling calculations that tell one in advance which exponent can possibly work.
:::
