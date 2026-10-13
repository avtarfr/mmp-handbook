---
id: measure.lebesgue-integral
title: The Lebesgue integral
kind: definition
level: core
summary: Builds the integral against a measure in three stages — finite sums for simple functions, a supremum for non-negative measurable functions, a difference of two such for the rest — records the properties that make it a linear order-preserving functional on $L^1$, and shows that on a compact interval it reproduces every proper Riemann integral while reaching functions the Riemann theory cannot.
prereqs: [measure.measurable-functions, measure.lebesgue-measure]
provenance: adapted
sources:
  - work: folland-1999
    loc: "§2.2, pp. 49–50: the integral of a simple function in standard representation, Prop. 2.13 (scaling, additivity, monotonicity, and the induced measure $A \\mapsto \\int_A \\phi$), and the supremum definition on $L^+$; §2.3, pp. 52–54: positive and negative parts, the definition of integrable, Prop. 2.21 (linearity), Prop. 2.22 ($|\\int f| \\le \\int |f|$), Prop. 2.23b and the passage to equivalence classes; Prop. 2.16, p. 51 ($\\int f = 0$ iff $f = 0$ a.e.); Thm 2.28 and its proof, p. 57; the comparison of the two constructions and the list of advantages, pp. 57–58"
    pages: "49-54, 57-58"
    role: the whole three-stage construction and its notation; the elementary properties; the definition of integrable; the Riemann comparison theorem with its proof route; the remark that the proper Riemann integral is subsumed while some improper ones are not
  - work: stakgold-holst-2011
    loc: "§0.7, pp. 42–45: the shopkeeper analogy and the picture of partitioning the $y$ axis; the Tonelli-style construction of the integral of a non-negative function as a greatest lower bound over sequences of continuous approximants; Example 2, pp. 43–44 (the Dirichlet function and the null set of rationals); the remark on $x^{-a}$ and improper Riemann integrals; linearity"
    pages: "42-45"
    role: the motivating picture (partition the range, not the domain); the Dirichlet function as a Lebesgue-integrable function that is not Riemann integrable; the warning that Lebesgue integration does not make divergent integrals converge
  - work: reed-simon-1980
    loc: "§1.3, pp. 13–17: the completion of $C[a,b]$ in the $L^1$ norm as the motivation; the range-partition formula $\\sum_m (m/2^n)\\,\\mu(f^{-1}[m/2^n,(m+1)/2^n))$ and the remark that the official definition is a different one; Thm 1.9 (a)–(f), p. 16; the definition of $\\mathcal{L}^1$ via $f_\\pm$ and of $L^1$ as equivalence classes, p. 17"
    pages: "13-17"
    role: the dyadic range-partition formula as the intuitive definition; the list of elementary properties including the bound $|\\int_a^b f| \\le |b-a| \\sup |f|$; the motivation from completeness and the passage to equivalence classes
  - work: kreyszig-1978
    loc: "§2.2, Example 2.2-7, p. 62: the continuous real functions on $[a,b]$ under the norm $(\\int_a^b x(t)^2\\,dt)^{1/2}$ form an incomplete normed space whose completion is denoted $L^2[a,b]$"
    pages: "62"
    role: the statement that the continuous functions are incomplete in an integral norm and that the completion is an $L^2$ space, which is the structural reason for wanting a larger class of integrable functions
  - work: evans-2010
    loc: "Appendix E.2, p. 686: the Lebesgue integral of a non-negative measurable function by approximation with simple functions; the splitting $\\int f = \\int f_+ - \\int f_-$ 'provided at least one of the terms on the right-hand side is finite'; the definitions of *integrable* and *summable* and the warning that the two words are not interchangeable"
    pages: "686"
    role: the convention that distinguishes integrable (the integral exists, possibly infinite) from summable (the integral is finite), which differs from Folland's use of integrable
  - work: grimmett-stirzaker-2020
    loc: "§5.6(B), pp. 200–201, items (7)–(11): the integral of a simple random variable $\\sum_i x_i I_{A_i}$ as $\\sum_i x_i \\mathbb{P}(A_i)$; the integral of a non-negative random variable as the limit along any increasing sequence of simple variables, with the remark that the limit does not depend on the sequence; the splitting $X = X^+ - X^-$; the notation $\\mathbb{E}(X) = \\int_\\Omega X\\,d\\mathbb{P}$"
    pages: "200-201"
    role: the probabilistic reading of each stage, and the alternative second stage that takes a limit along one increasing sequence rather than a supremum over all simple minorants
---

:::definition[The integral, in three stages]{provenance=adapted src="folland-1999:§2.2, pp. 49–50 and §2.3, pp. 52–53; grimmett-stirzaker-2020:§5.6(B), items (7)–(11), pp. 200–201"}
Fix a measure space $(X, \Sigma, \mu)$: a set $X$, a $\sigma$-algebra $\Sigma$ of subsets of $X$ and a measure $\mu$ on it, as in :ref[]{to=measure.sigma-algebras-measures}. Write $\mathcal{L}^{+}$ for the set of :ref[measurable functions]{to=measure.measurable-functions} $f : X \to [0,\infty]$; values $+\infty$ are allowed, and throughout we use the convention

$$
0 \cdot \infty = 0 ,
$$

so that a set of infinite measure on which the integrand vanishes contributes nothing.

**Stage 1: simple functions.** A *simple function* is a measurable $\varphi : X \to \mathbb{R}$ taking only finitely many values. Listing its distinct non-zero values as $a_1, \dots, a_n$ and putting $E_j = \varphi^{-1}(\{a_j\}) \in \Sigma$ gives the *standard representation*

$$
\varphi = \sum_{j=1}^{n} a_j \, \mathbf{1}_{E_j},
$$

with the $E_j$ disjoint. For $\varphi \ge 0$ simple we *define*

$$
\int \varphi \, d\mu \;=\; \sum_{j=1}^{n} a_j \, \mu(E_j) \;\in\; [0,\infty] .
$$

This is a finite sum of areas of rectangles: each value $a_j$ is weighted by the measure of the set where it is taken.

**Stage 2: non-negative measurable functions.** For $f \in \mathcal{L}^{+}$,

$$
\int f \, d\mu \;=\; \sup\Bigl\{ \int \varphi \, d\mu \;:\; \varphi \ \text{simple},\ 0 \le \varphi \le f \Bigr\} \;\in\; [0,\infty] .
$$

No finiteness is assumed and none is concluded. Because a simple $\varphi \ge 0$ is one of its own competitors, the two definitions agree where both apply.

**Stage 3: the general case.** For measurable $f : X \to [-\infty, \infty]$ split off the positive and negative parts

$$
f^{+} = \max(f, 0), \qquad f^{-} = \max(-f, 0),
$$

both in $\mathcal{L}^{+}$, with $f = f^{+} - f^{-}$ and $\lvert f \rvert = f^{+} + f^{-}$. When at least one of $\int f^{+}$, $\int f^{-}$ is finite, set

$$
\int f \, d\mu \;=\; \int f^{+} d\mu \;-\; \int f^{-} d\mu .
$$

If both are finite — equivalently $\int \lvert f \rvert \, d\mu < \infty$ — we call $f$ **integrable** and write $f \in L^{1}(\mu)$. A complex-valued measurable $f$ is integrable when $\int \lvert f \rvert \, d\mu < \infty$, which happens exactly when $\operatorname{Re} f$ and $\operatorname{Im} f$ are both integrable, and then $\int f = \int \operatorname{Re} f + i \int \operatorname{Im} f$.

**Integrating over a set.** For $A \in \Sigma$, $\displaystyle \int_{A} f \, d\mu = \int f \, \mathbf{1}_{A} \, d\mu$. When $X = \mathbb{R}^{n}$ and $\mu$ is :ref[Lebesgue measure]{to=measure.lebesgue-measure} $m$, the resulting integral is *the Lebesgue integral*, written $\int_{A} f(x)\, dx$.
:::

:::note[Two words that are not synonyms, one notation that is a quotient, and two forward references]{provenance=adapted src="folland-1999:§2.3, pp. 53–54; evans-2010:App. E.2, p. 686; reed-simon-1980:§1.3, p. 17"}
**Integrable versus summable.** Our stage 3 uses the vocabulary of :cite[Folland]{work=folland-1999 loc="§2.3, p. 53"}, for whom *integrable* means $\int \lvert f \rvert < \infty$. :cite[Evans]{work=evans-2010 loc="App. E.2, p. 686"} splits the word in two: for him $f$ is *integrable* as soon as one of $\int f^{\pm}$ is finite, so that $\int f$ has a value in $[-\infty,\infty]$, and *summable* when that value is finite. The two books therefore use "integrable" for different classes. We follow Folland; where Evans would say summable, we say integrable. A function whose integral exists but equals $+\infty$ or $-\infty$ — stage 3 asks only that one of $\int f^{\pm}$ be finite, so such an $f$ need not be of one sign — is never called integrable here.

**$L^1$ is a space of equivalence classes.** Two integrable functions that agree outside a null set have the same integral over every measurable set, so $\int \lvert f - g \rvert \, d\mu = 0$ does not force $f = g$ pointwise. Both :cite[Folland]{work=folland-1999 loc="§2.3, p. 54"} and :cite[Reed and Simon]{work=reed-simon-1980 loc="§1.3, p. 17"} therefore redefine $L^{1}(\mu)$ as the set of equivalence classes under equality almost everywhere, which is what makes $\lVert f \rVert_{1} = \int \lvert f \rvert \, d\mu$ a norm rather than a seminorm. The cost is that for $f \in L^{1}$ the symbol $f(x)$ at one point $x$ carries no information; the gain is the completeness used in :ref[]{to=measure.lp-spaces}. We keep the usual abuse of writing $f \in L^{1}(\mu)$ for a function.

**Two forward references.** Three places below — step 4 of the proof of the elementary properties, step 3 of the Riemann comparison, and step 4 of the method — use the monotone or the dominated convergence theorem, which belong to :ref[]{to=measure.monotone-convergence-fatou} and :ref[]{to=measure.dominated-convergence}. Those units are *not* prerequisites of this one and are not listed as such: both are proved from the three stages defined above and from the monotonicity of the integral on $\mathcal{L}^{+}$ (claim 1 below), and neither uses the statements they are invoked to prove. The dependence therefore runs one way only, and nothing here is circular.
:::

:::statement[Elementary properties]{provenance=adapted src="folland-1999:§2.2, Prop. 2.13 and the display after it, pp. 49–50, Prop. 2.16, p. 51, and §2.3, Props. 2.21, 2.22 and 2.23b, pp. 53–54; reed-simon-1980:§1.3, Thm 1.9, p. 16"}
Let $(X,\Sigma,\mu)$ be a measure space.

1. **Monotonicity and scaling on $\mathcal{L}^{+}$.** If $f, g \in \mathcal{L}^{+}$ and $f \le g$ then $\int f \le \int g$; and $\int c f = c \int f$ for every $c \in [0,\infty)$.
2. **Additivity on simple functions.** If $\varphi, \psi \ge 0$ are simple then $\int(\varphi + \psi) = \int \varphi + \int \psi$.
3. **Each non-negative simple function induces a measure.** For $\varphi \ge 0$ simple, $A \mapsto \int_{A} \varphi \, d\mu$ is a measure on $\Sigma$.
4. **Linearity on $L^{1}$.** The integrable real-valued functions form a real vector space and $f \mapsto \int f \, d\mu$ is linear on it; the complex-valued ones form a complex vector space on which the integral is complex-linear.
5. **The triangle inequality.** If $f \in L^{1}(\mu)$, possibly complex-valued, then $\bigl\lvert \int f \, d\mu \bigr\rvert \le \int \lvert f \rvert \, d\mu$.
6. **Null sets are invisible.** For $f \in \mathcal{L}^{+}$: $\int f \, d\mu = 0$ if and only if $f = 0$ almost everywhere. For $f, g \in L^{1}(\mu)$ the three statements "$\int_{E} f = \int_{E} g$ for every $E \in \Sigma$", "$\int \lvert f - g \rvert = 0$" and "$f = g$ a.e." are equivalent.
7. **A crude bound.** If $f$ is measurable and bounded on a finite interval $(a,b) \subset \mathbb{R}$, then $f$ is Lebesgue integrable there and $\bigl\lvert \int_{a}^{b} f \, dx \bigr\rvert \le (b-a) \sup_{a < x < b} \lvert f(x) \rvert$.
:::

:::statement[Comparison with the Riemann integral]{provenance=adapted src="folland-1999:§2.3, Thm 2.28 and the discussion on pp. 57–58"}
Write $m$ for Lebesgue measure, fix a compact interval $[a,b]$, and let $f : [a,b] \to \mathbb{R}$ be bounded.

1. Suppose $f$ possesses a Riemann integral. Then $f$ belongs to the Lebesgue measurable functions; being bounded on a set of finite measure it is also Lebesgue integrable there; and the two numbers coincide,
   $$
   \int_{a}^{b} f(x) \, dx \;=\; \int_{[a,b]} f \, dm .
   $$
2. Conversely, what characterises the Riemann integrable $f$ among the bounded ones is a smallness condition on their discontinuities: $f$ has a Riemann integral exactly when $\{x \in [a,b] : f \text{ is not continuous at } x\}$ is a set of measure zero.

So the *proper* Riemann integral is a special case of the Lebesgue integral. Improper Riemann integrals are not all covered. Suppose $f$ has a Riemann integral over $[0,b]$ for each $b > 0$; if $f$ is also Lebesgue integrable over $[0,\infty)$ then $\int_{[0,\infty)} f \, dm = \lim_{b \to \infty} \int_{0}^{b} f(x)\, dx$, yet that limit may converge for an $f$ possessing no Lebesgue integral at all. :cite[Folland's example]{work=folland-1999 loc="§2.3, p. 57"} is $f = \sum_{n \ge 1} (-1)^{n} n^{-1} \mathbf{1}_{(n, n+1]}$, whose positive and negative parts both have infinite integral.
:::

:::idea{provenance=original}
The Riemann integral chops the domain and asks how high the function is over each piece; the Lebesgue integral chops the range and asks how wide the function is at each height. :cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="§0.7, p. 42"} put it as a shopkeeper counting a day's takings: transaction by transaction, or by sorting the coins into denominations first and multiplying each denomination by how many there are. Sorting by denomination is what the three stages do. A simple function has finitely many denominations and its total is a finite sum, so stage 1 is forced on us once we agree that a rectangle of height $a$ over a set of measure $\mu(E)$ should contribute $a\,\mu(E)$. Stage 2 says that the only honest value for a general non-negative $f$ is the best a simple function underneath it can do; monotonicity then comes for free, because enlarging $f$ enlarges the family of competitors. Stage 3 is bookkeeping: integrate the positive and negative parts separately and subtract, which is legitimate exactly when the subtraction is not $\infty - \infty$.

The price of sorting by denomination is that the level sets $f^{-1}([c,d))$ may be complicated, so a theory of measure has to come first; the reward is that a limit of functions perturbs each level set a little rather than perturbing the whole domain, which is why the convergence theorems of :ref[]{to=measure.monotone-convergence-fatou} and :ref[]{to=measure.dominated-convergence} are available here and not for the Riemann integral.
:::

:::proof[The elementary properties]{provenance=adapted src="folland-1999:§2.2, proof of Prop. 2.13, p. 50, proof of Prop. 2.16, p. 51, and §2.3, proofs of Props. 2.21 and 2.22, p. 53"}
**Step 1: monotonicity and scaling on $\mathcal{L}^{+}$ (claim 1).** If $f \le g$ then every simple $\varphi$ with $0 \le \varphi \le f$ also satisfies $0 \le \varphi \le g$, so the supremum defining $\int g$ is taken over a larger family and cannot be smaller. For $c > 0$ the map $\varphi \mapsto c\varphi$ is a bijection of the simple minorants of $f$ onto those of $cf$, and it multiplies the stage-1 sum by $c$ because $(c\varphi)^{-1}(\{ca_j\}) = E_j$; for $c = 0$ both sides vanish by the convention $0\cdot\infty = 0$.

**Step 2: additivity on simple functions (claim 2).** Let $\varphi = \sum_{j} a_j \mathbf{1}_{E_j}$ and $\psi = \sum_{k} b_k \mathbf{1}_{F_k}$ be standard representations, and adjoin to each the set where it vanishes, so that $\{E_j\}$ and $\{F_k\}$ are now finite measurable partitions of $X$. The sets $E_j \cap F_k$ form a common refinement, on each of which $\varphi + \psi$ is the constant $a_j + b_k$. Finite additivity of $\mu$ gives $\mu(E_j) = \sum_{k} \mu(E_j \cap F_k)$ and $\mu(F_k) = \sum_{j} \mu(E_j \cap F_k)$, so

$$
\int \varphi + \int \psi = \sum_{j,k} a_j \,\mu(E_j \cap F_k) + \sum_{j,k} b_k\, \mu(E_j \cap F_k) = \sum_{j,k} (a_j + b_k)\, \mu(E_j \cap F_k),
$$

and the last sum is the stage-1 integral of $\varphi + \psi$, collecting together the cells on which $a_j + b_k$ takes the same value — legitimate because $\mu$ is finitely additive and the cells are disjoint.

**Step 3: each simple function induces a measure (claim 3).** $\int_{A} \varphi \, d\mu = \sum_{j} a_j\, \mu(A \cap E_j)$ is $0$ at $A = \emptyset$, and for a disjoint sequence $A_1, A_2, \dots$ countable additivity of $\mu$ gives $\mu\bigl(\bigcup_i A_i \cap E_j\bigr) = \sum_{i} \mu(A_i \cap E_j)$ for each of the finitely many $j$; interchanging the finite sum over $j$ with the sum over $i$ — allowed, all terms being non-negative — gives countable additivity of $A \mapsto \int_A \varphi$.

**Step 4: linearity on $L^{1}$ (claim 4).** Scalar multiplication is step 1 applied to $f^{\pm}$, with the roles of $f^{+}$ and $f^{-}$ exchanged when $c < 0$. For additivity the obstacle is that $(f+g)^{\pm}$ is not $f^{\pm} + g^{\pm}$. Write $h = f + g$; then $h^{+} - h^{-} = f^{+} - f^{-} + g^{+} - g^{-}$, and rearranging so that only non-negative functions appear,

$$
h^{+} + f^{-} + g^{-} \;=\; h^{-} + f^{+} + g^{+} .
$$

Both sides are in $\mathcal{L}^{+}$, so :ref[additivity of the integral on $\mathcal{L}^{+}$]{to=measure.monotone-convergence-fatou} — which is where the monotone convergence theorem enters, applied to the increasing simple approximations supplied by :ref[]{to=measure.measurable-functions} — turns this into $\int h^{+} + \int f^{-} + \int g^{-} = \int h^{-} + \int f^{+} + \int g^{+}$. Every term is finite because $\lvert h \rvert \le \lvert f \rvert + \lvert g \rvert$ is integrable, so the terms may be moved across the equality sign, and regrouping gives $\int h = \int f + \int g$. The complex case follows by taking real and imaginary parts.

**Step 5: the triangle inequality (claim 5).** For real $f$, $\lvert \int f \rvert = \lvert \int f^{+} - \int f^{-} \rvert \le \int f^{+} + \int f^{-} = \int \lvert f \rvert$. For complex $f$ with $\int f \ne 0$, rotate: let $\alpha$ be the unit complex number with $\alpha \int f = \lvert \int f \rvert$. Then $\lvert \int f \rvert = \int \alpha f$ is real, so it equals its own real part, and by linearity

$$
\Bigl\lvert \int f \Bigr\rvert = \int \operatorname{Re}(\alpha f) \le \int \lvert \operatorname{Re} (\alpha f) \rvert \le \int \lvert \alpha f \rvert = \int \lvert f \rvert ,
$$

using the real case in the middle and $\lvert \alpha \rvert = 1$ at the end.

**Step 6: null sets (claim 6).** Let $f \in \mathcal{L}^{+}$. If $f = 0$ a.e. and $\varphi = \sum_j a_j \mathbf{1}_{E_j} \le f$ is simple, then each $E_j$ with $a_j > 0$ lies in the null set $\{f > 0\}$, so $\mu(E_j) = 0$ and $\int \varphi = 0$; the supremum over such $\varphi$ is $0$. Conversely suppose $f$ is not $0$ a.e. Since $\{f > 0\} = \bigcup_{n \ge 1} A_n$ with $A_n = \{f > 1/n\}$, continuity of $\mu$ from below forces $\mu(A_n) > 0$ for some $n$; then $\mathbf{1}_{A_n}/n$ is a simple minorant of $f$ and $\int f \ge \mu(A_n)/n > 0$. For the second part of claim 6: if $\int \lvert f - g \rvert = 0$ then for every $E$, $\lvert \int_E f - \int_E g\rvert = \lvert \int (f-g)\mathbf{1}_E \rvert \le \int \lvert f - g\rvert = 0$ by claim 5. If instead $f \ne g$ on a set of positive measure, then one of the four non-negative functions $(\operatorname{Re}(f-g))^{\pm}$, $(\operatorname{Im}(f-g))^{\pm}$ is positive on a set $E$ of positive measure; on that $E$ the opposite part vanishes, so by the first part $\int_E (f-g)$ has non-zero real or imaginary part, and $\int_E f \ne \int_E g$.

**Step 7: the crude bound (claim 7).** With $M = \sup_{(a,b)} \lvert f \rvert < \infty$, the constant $M$ is a simple function on $(a,b)$ with integral $M(b-a) < \infty$, so $\int_a^b \lvert f \rvert \le M(b-a)$ by claim 1 and $f$ is integrable there; claim 5 gives the bound. $\square$
:::

:::proof[Comparison with the Riemann integral]{provenance=adapted src="folland-1999:§2.3, proof of Thm 2.28, p. 57"}
We prove part 1 and indicate where part 2 comes from.

**Step 1: turn Darboux sums into integrals of simple functions.** A partition $P : a = t_0 < t_1 < \dots < t_n = b$ carries the two step functions

$$
G_P = \sum_{j=1}^{n} M_j \,\mathbf{1}_{(t_{j-1}, t_j]} , \qquad
g_P = \sum_{j=1}^{n} m_j \,\mathbf{1}_{(t_{j-1}, t_j]} ,
\qquad M_j = \sup_{[t_{j-1},t_j]} f, \quad m_j = \inf_{[t_{j-1},t_j]} f ,
$$

which are simple because the intervals are Borel sets and $f$ is bounded, so the suprema and infima are finite. Since $m(\,(t_{j-1},t_j]\,) = t_j - t_{j-1}$, stage 1 of the definition gives $\int G_P \, dm = S_P f$ and $\int g_P \, dm = s_P f$, the upper and lower Darboux sums. Note that $g_P \le f \le G_P$ at every point of $(a,b]$ but not at the left endpoint, where both step functions vanish while $f(a)$ may not; since $\{a\}$ is null this costs nothing, and all the squeezes below are read almost everywhere.

**Step 2: choose a nested sequence of partitions.** Riemann integrability means $\inf_P S_P f = \sup_P s_P f = \int_a^b f(x)\,dx =: I$. For each $k \ge 1$ pick a partition $Q_k$ realising the infimum to within $1/k$, so $S_{Q_k} f \le I + 1/k$, and a partition $R_k$ realising the supremum to within $1/k$, so $s_{R_k} f \ge I - 1/k$. Write $U_k$ for the uniform partition of $[a,b]$ into $k$ equal pieces, and define the $P_k$ *recursively* as sets of partition points,

$$
P_1 = Q_1 \cup R_1 \cup U_1, \qquad P_k = P_{k-1} \cup Q_k \cup R_k \cup U_k \quad (k \ge 2).
$$

The recursion is what makes the sequence nested: $P_k \supseteq P_{k-1}$ by construction, whereas the uniform partitions by themselves are not nested (the point $\tfrac12(a+b)$ of $U_2$ is absent from $U_3$). Refining a partition can only raise an infimum and lower a supremum over each piece, so $g_{P_k}$ increases pointwise with $k$ and $G_{P_k}$ decreases. Refining also only improves Darboux sums, so $I \le S_{P_k} f \le S_{Q_k} f \le I + 1/k$ and $I \ge s_{P_k} f \ge s_{R_k} f \ge I - 1/k$; hence both $S_{P_k} f$ and $s_{P_k} f$ converge to $I$. The sets $U_k$ are carried along only to force the mesh of $P_k$ to zero, which step 6 uses.

**Step 3: pass to the limit.** Set $G = \lim_k G_{P_k}$ and $g = \lim_k g_{P_k}$, which exist pointwise by monotonicity and are measurable as pointwise limits of simple functions. Each $\lvert G_{P_k} \rvert$ and $\lvert g_{P_k} \rvert$ is bounded by the constant $\sup_{[a,b]} \lvert f\rvert$, which is integrable on the bounded interval $[a,b]$, so :ref[dominated convergence]{to=measure.dominated-convergence} applies to both sequences and yields

$$
\int_{[a,b]} G \, dm = \lim_k S_{P_k} f = \int_a^b f(x)\,dx = \lim_k s_{P_k} f = \int_{[a,b]} g \, dm .
$$

(No circularity, as the note at the head of the unit records: dominated convergence is proved from the definition above and from Fatou's lemma, neither of which mentions the Riemann integral.)

**Step 4: identify $f$ with $G$.** By step 1, $g_{P_k} \le f \le G_{P_k}$ on $(a,b]$ for each $k$, hence $g \le f \le G$ there and $G - g \ge 0$ on $(a,b]$ — and $G \ge g$ everywhere, the two being limits of $G_{P_k} \ge g_{P_k}$. Step 3 gives $\int (G-g) \, dm = 0$, so $G = g$ almost everywhere by claim 6 of the elementary properties, and therefore $G = f$ almost everywhere, the squeeze forcing equality at every point of $(a,b]$ where $G = g$, and $\{a\}$ being null.

**Step 5: conclude.** $G$ is measurable, and $f$ differs from $G$ only on a null set. Lebesgue measure is *complete* — every subset of a null set is measurable, which is the point at which the completeness established in :ref[]{to=measure.lebesgue-measure} is used — so $\{f > c\} $ differs from $\{G > c\}$ by a subset of a null set and is measurable for each $c$; thus $f$ is Lebesgue measurable. Being bounded on a set of finite measure it is integrable, and $\int_{[a,b]} f \, dm = \int_{[a,b]} G \, dm = \int_a^b f(x)\,dx$.

**Step 6: part 2.** Folland obtains the criterion by comparing $G$ and $g$ with the upper and lower envelopes $H(x) = \lim_{\delta \downarrow 0} \sup_{\lvert y - x\rvert < \delta} f(y)$ and $h(x) = \lim_{\delta \downarrow 0} \inf_{\lvert y - x \rvert < \delta} f(y)$: one has $H = h$ exactly at the points of continuity of $f$, while $H = G$ and $h = g$ off the (countable, hence null) set of partition points, so $\int (H - h)\,dm = \int (G-g)\,dm$. Riemann integrability is $\int(G-g)\,dm = 0$, which by claim 6 is $H = h$ a.e., that is, continuity a.e. We follow :cite[Folland]{work=folland-1999 loc="§2.3, Thm 2.28b and Exercise 23, pp. 57, 59"}, who states the criterion as part of the theorem and leaves this route as an exercise. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
- **$0 \cdot \infty = 0$ is a convention, not a theorem**, and it is used in stage 1 whenever a simple function vanishes on a set of infinite measure. Without it, $\int 0 \, dm$ over $\mathbb{R}$ would be undefined. It is also what makes $\int_A f$ vanish for every $f$ when $\mu(A) = 0$, however large $f$ is on $A$ — even $+\infty$.
- **Non-negativity is what makes stage 2 unambiguous.** The supremum of a set of non-negative numbers always exists in $[0,\infty]$, so no hypothesis is needed and no limit has to be shown to exist. :cite[Grimmett and Stirzaker]{work=grimmett-stirzaker-2020 loc="§5.6(B), items (8)–(9), pp. 200–201"} instead define the second stage as $\lim_n \mathbb{E}(X_n)$ along *one* increasing sequence of simple variables and then have to argue that the limit does not depend on the sequence chosen; the supremum form avoids that step, and the monotone convergence theorem of :ref[]{to=measure.monotone-convergence-fatou} shows the two agree.
- **Stage 3 needs one of $\int f^{+}$, $\int f^{-}$ to be finite**, or the difference is $\infty - \infty$. The standard witness is $f(x) = 1/x$ on $\mathbb{R} \setminus \{0\}$, where $\int f^{+} = \int f^{-} = \infty$: the symmetric limit $\lim_{\varepsilon \downarrow 0}\bigl(\int_{-1}^{-\varepsilon} + \int_{\varepsilon}^{1}\bigr) f = 0$ exists as a principal value, but $f$ has no Lebesgue integral, because that limit depends on the symmetry of the exhaustion and the Lebesgue integral depends on no exhaustion at all.
- **Boundedness in the Riemann comparison is used twice**: in step 1 to make the $M_j$ finite, so that $G_P$ is a genuine simple function, and in step 3 to supply the constant dominating function. Both fail for unbounded $f$, which is why the theorem is about *proper* Riemann integrals only. The example $f = \sum_{n}(-1)^n n^{-1}\mathbf{1}_{(n,n+1]}$ above shows the other half of the gap: an improper Riemann integral may converge by cancellation, while the Lebesgue integral, built from $f^{+}$ and $f^{-}$ separately, never cancels.
- **Completeness of $m$ is used only in step 5.** Over an incomplete measure space the same argument shows that $f$ agrees a.e. with a measurable function, which is all one ever needs, but $f$ itself need not be measurable.
- **Lebesgue theory does not turn divergent integrals into finite numbers.** :cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="§0.7, Example 3 and the discussion following it, pp. 43–44"} make the point with $f(x) = x^{-a}$ on $(0,1]$: for $0 < a < 1$ the improper Riemann integral and the Lebesgue integral agree, while for $a \ge 1$ their verdict is that no integral of either sort is available — neither in the improper Riemann sense nor in the Lebesgue sense. That verdict belongs to *their* construction, which defines the integral of a non-negative $f$ as a greatest lower bound over sequences of continuous approximants whose Riemann integrals have a common bound, so that no such bound means no integral. Under the construction this unit follows, the two differ: $x^{-a}$ is non-negative and measurable, so stage 2 assigns it an integral in $[0,\infty]$ unconditionally, and that integral *exists* and equals $+\infty$ for $a \ge 1$. What fails is integrability, not existence. The arithmetic is the same either way, and nothing elsewhere in the handbook depends on the phrasing; we keep the Folland convention of stage 2 throughout.
- **Enlarging the class of integrands is not, by itself, the main gain.** :cite[Folland]{work=folland-1999 loc="§2.3, p. 58"} names exactly two genuine gains of the Lebesgue theory, and lists them in this order. The first is the strength of its convergence theorems, monotone and dominated convergence among them. The second is that more functions can be integrated — about which he observes at once that classical computations almost never need the extra generality, so that what makes it matter is a different thing, which he calls its crucial effect: function spaces whose metric is written as an integral turn out to be complete when their members are Lebesgue integrable and incomplete when only Riemann integrable functions are admitted. That crucial effect is exactly the defect :cite[Kreyszig]{work=kreyszig-1978 loc="§2.2, Example 2.2-7, p. 62"} exhibits: the continuous functions on $[a,b]$ are *not* complete under $\lVert x \rVert = (\int_a^b x(t)^2\,dt)^{1/2}$, and their completion is $L^2[a,b]$. :cite[Reed and Simon]{work=reed-simon-1980 loc="§1.3, pp. 12–13"} open their treatment with the same observation for the $L^1$ norm.
:::

:::method[Computing a Lebesgue integral]{provenance=original}
1. **Check measurability first.** Nothing below is meaningful otherwise. Continuity, monotonicity, or being a pointwise limit of measurable functions all suffice (:ref[]{to=measure.measurable-functions}).
2. **If the integrand is Riemann integrable on a compact interval, stop.** By the comparison theorem the answer is the Riemann integral, so use calculus. This covers almost every explicit integral.
3. **Otherwise look for a null set to discard.** If $f = g$ outside a set of measure zero and $g$ is easy, then $\int f = \int g$ by claim 6. This disposes of integrands defined by a different rule on the rationals, on a Cantor set, or at the endpoints.
4. **For a genuinely non-negative integrand, sort by height.** Use the dyadic truncation
   $$
   \varphi_n = \sum_{k=0}^{n2^{n}-1} \frac{k}{2^{n}} \,\mathbf{1}_{\{ k2^{-n} \,\le\, f \,<\, (k+1)2^{-n}\}} \;+\; n\,\mathbf{1}_{\{f \ge n\}} ,
   $$
   which is simple, satisfies $0 \le \varphi_n \le f$, increases with $n$ and converges pointwise to $f$. Each $\int \varphi_n$ is a finite sum of measures of level sets, and $\int \varphi_n \uparrow \int f$ by the monotone convergence theorem of :ref[]{to=measure.monotone-convergence-fatou} — the forward reference flagged in the note at the head of the unit. On $\{f < n\}$ the error obeys $0 \le f - \varphi_n < 2^{-n}$, so the truncation level $n$ and the mesh $2^{-n}$ control the accuracy.
5. **For a signed or complex integrand, split and check finiteness.** Compute $\int \lvert f \rvert$ first. If it is infinite, there is no integral to compute unless one of $\int f^{\pm}$ is finite, in which case the answer is $\pm\infty$. If it is finite, integrate $f^{+}$ and $f^{-}$, or real and imaginary parts, separately and combine by linearity.
6. **Sanity-check with the crude bound.** On a set of finite measure, $\lvert \int_A f \rvert \le \mu(A)\, \sup_A \lvert f \rvert$ catches most arithmetic slips.
:::

:::example[A function with no Riemann integral, integrated from the definition]{provenance=original}
On $X = [0,1]$ with Lebesgue measure, let $\mathbb{Q}_1 = \mathbb{Q} \cap [0,1]$ and define

$$
f(x) = \begin{cases} 2, & x \in \mathbb{Q}_1, \\ x^{2}, & x \notin \mathbb{Q}_1 .\end{cases}
$$

**It is measurable and bounded.** $f = 2\,\mathbf{1}_{\mathbb{Q}_1} + x^{2}\mathbf{1}_{[0,1]\setminus\mathbb{Q}_1}$ is a sum of products of a continuous function with indicators of Borel sets, and $0 \le f \le 2$.

**It is not Riemann integrable.** Every subinterval contains both rationals and irrationals, so on each subinterval the supremum of $f$ is $2$ while the infimum is at most $1$. Hence $S_P f \ge 2$ and $s_P f \le 1$ for every partition $P$, and the Darboux sums cannot meet. Equivalently, $f$ is discontinuous at every point of $[0,1]$, a set of measure $1 \ne 0$, so part 2 of the comparison theorem refuses it. :cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="§0.7, Example 2, pp. 43–44"} make the same point with the Dirichlet function, the case $f = \mathbf{1}_{\mathbb{Q}_1}$.

**Step 1: discard the null set.** $\mathbb{Q}_1$ is countable; enclosing its $k$th member in an interval of length $\varepsilon 2^{-k}$ covers it by a total length $\varepsilon \sum_{k \ge 1} 2^{-k} = \varepsilon$, for every $\varepsilon > 0$, so $m(\mathbb{Q}_1) = 0$. Thus $f(x) = x^{2}$ a.e. and claim 6 gives $\int_{[0,1]} f \, dm = \int_{[0,1]} x^{2} \, dm = \tfrac13$, the last step by the comparison theorem applied to the continuous function $x^2$.

**Step 2: confirm it from the definition, by sorting by height.** Apply step 4 of the method to $g(x) = x^{2}$ on $[0,1)$ with $n \ge 1$, so that the truncation at height $n$ never bites. For $0 \le k < 2^{n}$,

$$
\bigl\{\, k2^{-n} \le x^{2} < (k+1)2^{-n} \,\bigr\} = \bigl[\, 2^{-n/2}\sqrt{k},\ 2^{-n/2}\sqrt{k+1} \,\bigr), \qquad \text{of measure } 2^{-n/2}\bigl(\sqrt{k+1} - \sqrt{k}\bigr),
$$

because $x \mapsto x^{2}$ is increasing on $[0,1)$. Stage 1 of the definition therefore gives the finite sum

$$
\int \varphi_n \, dm \;=\; 2^{-3n/2} \sum_{k=0}^{2^{n}-1} k\bigl(\sqrt{k+1} - \sqrt{k}\bigr) .
$$

At $n = 2$ the four terms are $0$, $\sqrt2 - 1$, $2(\sqrt3-\sqrt2)$ and $3(2-\sqrt3)$, which sum to $5 - \sqrt2 - \sqrt3$, so

$$
\int \varphi_2 \, dm = \frac{5 - \sqrt2 - \sqrt3}{8} = 0.2317169\ldots
$$

**Step 3: check the error bound and the limit.** On $\{g < n\}$ we have $0 \le g - \varphi_n < 2^{-n}$, so $0 \le \tfrac13 - \int \varphi_n \le 2^{-n}$. At $n = 2$: $\tfrac13 - 0.2317169 = 0.1016164 \le 0.25$, as required. Continuing,

| $n$ | $\int \varphi_n \, dm$ | $\tfrac13 - \int \varphi_n \, dm$ | $2^{-n}$ |
|---|---|---|---|
| $2$ | $0.2317170$ | $0.1016164$ | $0.25$ |
| $4$ | $0.3051688$ | $0.0281645$ | $0.0625$ |
| $8$ | $0.3314303$ | $0.0019030$ | $0.00390625$ |
| $12$ | $0.3332121$ | $0.0001213$ | $0.000244$ |

The supremum over all simple minorants is therefore $\tfrac13$, confirming

$$
\int_{[0,1]} f \, dm = \frac13 ,
$$

a number the Riemann theory cannot produce for this $f$ at all.
:::

:::application{provenance=original}
**Expectation in probability is one Lebesgue integral.** On a probability space $(\Omega, \mathcal{F}, \mathbb{P})$ the expectation of a random variable is $\mathbb{E}(X) = \int_{\Omega} X \, d\mathbb{P}$, built by exactly the three stages above: finitely many outcomes weighted by their probabilities, then a supremum, then the split into $X^{+}$ and $X^{-}$. As :cite[Grimmett and Stirzaker]{work=grimmett-stirzaker-2020 loc="§5.6(B), items (7)–(11) and (15), pp. 200–202"} point out, this single definition replaces the separate sum-over-values and integral-against-a-density formulas of the discrete and continuous cases, and specialises to the Lebesgue–Stieltjes integral $\int g(x)\,dF(x)$ when the integration is pushed forward onto $\mathbb{R}$. The condition $\mathbb{E}\lvert X \rvert < \infty$ in every theorem about expectations is stage 3's finiteness requirement, and random variables with no mean (a Cauchy variable, for instance) are precisely those for which stage 3 is $\infty - \infty$. See :ref[]{to=prob.expectation-variance}.

**Quantum states live in a completion.** A wavefunction is an element of $L^{2}(\mathbb{R}^{3})$, and what makes that space usable — the existence of limits of Cauchy sequences, hence of spectral decompositions and of convergent variational schemes — is its completeness, which holds for the Lebesgue integral and fails for the Riemann integral on the same formula, as :cite[Kreyszig]{work=kreyszig-1978 loc="§2.2, Example 2.2-7, p. 62"} shows for continuous functions on an interval. Two wavefunctions differing on a set of measure zero are the same physical state, which is the equivalence-class convention of the note above, not a physical postulate.

**Signal energy and the "almost everywhere" clause in engineering statements.** For a finite-energy signal $s$ one writes $E = \int_{\mathbb{R}} \lvert s(t)\rvert^{2}\,dt$. Because null sets contribute nothing, an idealised signal may be left undefined at the switching instants of a sampler or at the jumps of a square wave without any effect on its energy, its Fourier coefficients, or the reconstruction theorem of :ref[]{to=fourier.sampling-theorem}. This is why statements such as "the sampled signal is recovered almost everywhere" are the right ones to prove; the pointwise statement is false at a measure-zero set of instants and would be useless even if true.

**Variational problems need the larger class.** A minimisation method such as :ref[Rayleigh–Ritz]{to=var.rayleigh-ritz} produces a minimiser as a limit of a minimising sequence, and the limit of a sequence of smooth functions is in general only measurable. Formulating energies as Lebesgue integrals, over the Sobolev spaces built from them, is what makes the limit admissible; over the Riemann-integrable functions the minimising sequence may simply leave the space.
:::
