---
id: measure.modes-of-convergence
title: Modes of convergence
kind: definition
level: core
summary: Defines almost-everywhere, almost-uniform, in-measure and $L^p$ convergence, settles exactly which of them implies which, proves Egorov's theorem and the almost-everywhere subsequence theorem, and gives the four standard counterexamples that block every remaining implication.
prereqs: [measure.dominated-convergence, measure.monotone-convergence-fatou, measure.lebesgue-integral, measure.measurable-functions, measure.lebesgue-measure, measure.sigma-algebras-measures, found.uniform-convergence]
provenance: adapted
sources:
  - work: folland-1999
    loc: "§2.4, pp. 60–63: the four standard sequences on $\\mathbb{R}$ and what each shows, p. 61; the definitions of Cauchy in measure and of convergence in measure, p. 61; Prop. 2.29 ($L^1$ convergence implies convergence in measure), p. 61; Thm 2.30 (a sequence Cauchy in measure converges in measure, with an a.e. convergent subsequence and an a.e. unique limit), pp. 61–62; Cor. 2.32, p. 62; Egoroff's Thm 2.33 and the remark naming almost uniform convergence, p. 62; Exercises 32–39, pp. 63–64"
    pages: "60-64"
    role: the whole framework — definitions, the implication structure, the four counterexamples, and the proof routes for the subsequence theorem and for Egorov's theorem
  - work: evans-2010
    loc: "Appendix E, §E.2, Thm 2 (Egoroff's theorem), pp. 685–686"
    pages: "685-686"
    role: the statement of Egorov's theorem specialised to Lebesgue measure on a set $A \\subset \\mathbb{R}^n$ of finite measure, in the form in which it is used in partial differential equations
  - work: grimmett-stirzaker-2020
    loc: "§7.2, Definition (1) of the four modes (almost sure, $r$th mean, in probability, in distribution), p. 352; the remarks on notation and on the $L^r$ norm, p. 353; Thm (3), the chart of implications, and Thm (4), the partial converses, p. 354"
    pages: "352-354"
    role: the probabilists' names for the same modes, the fourth (purely distributional) mode that has no measure-theoretic analogue, and the partial converses used in probability
---

:::definition[The four modes]{provenance=adapted src="folland-1999:§2.4, p. 61; grimmett-stirzaker-2020:Definition (1), p. 352"}
Let $(X,\mathcal{M},\mu)$ be a measure space and let $f, f_1, f_2, \dots$ be measurable complex-valued functions on $X$ (see :ref[measurable functions]{to=measure.measurable-functions}). We say that $f_n \to f$

- **almost everywhere** (a.e.) if $\mu\bigl(\{x : f_n(x) \not\to f(x)\}\bigr) = 0$;
- **almost uniformly** if for every $\varepsilon > 0$ there is a measurable $E$ with $\mu(E) < \varepsilon$ such that $f_n \to f$ uniformly on $X \setminus E$;
- **in measure** if for every $\varepsilon > 0$,
  $$
  \mu\bigl(\{x : |f_n(x) - f(x)| \ge \varepsilon\}\bigr) \longrightarrow 0 \quad\text{as } n \to \infty ;
  $$
- **in $L^p$** ($1 \le p < \infty$) if every $f_n$ and $f$ have $\int |f_n|^p\,d\mu < \infty$ and $\|f_n - f\|_p = \bigl(\int |f_n - f|^p d\mu\bigr)^{1/p} \to 0$. For $p = 1$ this is called convergence in mean, for $p = 2$ convergence in mean square; see :ref[$L^p$ spaces]{to=measure.lp-spaces}.

The sequence is **Cauchy in measure** if $\mu(\{x : |f_n(x) - f_m(x)| \ge \varepsilon\}) \to 0$ as $m, n \to \infty$, for every $\varepsilon > 0$. A note on the inequality: :cite[Folland]{work=folland-1999 loc="§2.4, p. 61"} and :cite[Grimmett and Stirzaker]{work=grimmett-stirzaker-2020 loc="Definition (1c), p. 352"} write these two definitions with the strict inequality $|f_n - f| > \varepsilon$. The two forms define the same notion, because both are quantified over every $\varepsilon > 0$ and $\{|f_n - f| > \varepsilon\} \subseteq \{|f_n - f| \ge \varepsilon\} \subseteq \{|f_n - f| > \varepsilon/2\}$; we use $\ge$ throughout the definitions, the statement and the examples, and keep the strict form only inside the proof of part 4, where the sets $E_n(k)$ are written as Folland writes them; either inequality serves there. Convergence in measure and almost-everywhere convergence determine the limit only up to a null set, so all four modes are statements about equivalence classes of functions equal a.e.

Two warnings about the shape of the definitions. Almost-uniform convergence is *not* "uniform convergence off a null set": the exceptional set is small but need not be null, and it is allowed to grow as $\varepsilon$ shrinks. And convergence in measure is a statement about the *size of the set* where the error is large, with no control at all of how large the error is on that set — which is the opposite emphasis to :ref[uniform convergence]{to=found.uniform-convergence}, where the error is controlled everywhere.
:::

:::note[The same four modes in probability]{provenance=adapted src="grimmett-stirzaker-2020:Definition (1) and the notes following it, pp. 352–353, and Thms (3) and (4), p. 354"}
On a probability space $(\Omega,\mathcal{F},\mathbb{P})$ the measure-theoretic modes acquire probabilists' names: a.e. convergence becomes **almost sure** convergence $X_n \xrightarrow{\text{a.s.}} X$ (also "with probability 1"), convergence in measure becomes convergence **in probability** $X_n \xrightarrow{P} X$, and $L^r$ convergence becomes convergence **in $r$th mean**, written $X_n \xrightarrow{r} X$ and defined by $\mathbb{E}|X_n - X|^r \to 0$ with $\mathbb{E}|X_n^r| < \infty$ for every $n$.

:cite[Grimmett and Stirzaker]{work=grimmett-stirzaker-2020 loc="§7.2, Definition (1d) and Thm (3), pp. 352, 354"} add a fourth mode with no analogue in a general measure space: convergence **in distribution**, $\mathbb{P}(X_n \le x) \to \mathbb{P}(X \le x)$ at every continuity point of the limit distribution function. It is a statement about distribution functions alone, so it does not even require the $X_n$ to live on one space. Their chart of implications is
$$
\bigl(X_n \xrightarrow{\text{a.s.}} X\bigr) \Rightarrow \bigl(X_n \xrightarrow{P} X\bigr) \Rightarrow \bigl(X_n \xrightarrow{D} X\bigr),
\qquad
\bigl(X_n \xrightarrow{r} X\bigr) \Rightarrow \bigl(X_n \xrightarrow{P} X\bigr),
$$
together with $\bigl(X_n \xrightarrow{r} X\bigr) \Rightarrow \bigl(X_n \xrightarrow{s} X\bigr)$ for $r > s \ge 1$, and they state that no other implications hold in general. Their partial converses are: convergence in distribution to a constant implies convergence in probability; convergence in probability with a uniform bound $\mathbb{P}(|X_n| \le k) = 1$ implies $r$th-mean convergence for every $r \ge 1$; and $\sum_n \mathbb{P}(|X_n - X| \ge \varepsilon) < \infty$ for every $\varepsilon > 0$ implies almost sure convergence.

The first arrow of their chart is stronger than what holds on a general measure space, and the reason is that a probability measure is finite: see the last sentence of part 5 of the statement below, which is that arrow, and part 4 (Egorov), which is what supplies it. The $r > s$ implication likewise uses $\mathbb{P}(\Omega) = 1$ and fails on $\mathbb{R}$. These are not disagreements with Folland but consequences of a standing hypothesis that probability carries for free. See :ref[convergence of random variables]{to=prob.convergence-random-variables}.
:::

:::statement[Which mode implies which]{provenance=adapted src="folland-1999:Prop. 2.29, Thm 2.30, Cor. 2.32 and Thm 2.33, pp. 61–62; evans-2010:Thm 2, pp. 685–686"}
Let $(X,\mathcal{M},\mu)$ be a measure space.

1. **$L^p$ implies in measure.** If $\|f_n - f\|_p \to 0$ for some $1 \le p < \infty$, then $f_n \to f$ in measure. :cite[Folland]{work=folland-1999 loc="Prop. 2.29, p. 61"} states and proves the case $p = 1$; the general case is the same Chebyshev estimate.
2. **Cauchy in measure is enough.** If $\{f_n\}$ is Cauchy in measure, there is a measurable $f$ with $f_n \to f$ in measure, and some subsequence $\{f_{n_j}\}$ with $f_{n_j} \to f$ a.e. The limit is unique up to a null set: if also $f_n \to g$ in measure then $g = f$ a.e.
3. **Consequently**, if $f_n \to f$ in $L^1$ then some subsequence converges to $f$ a.e.
4. **Egorov's theorem.** If $\mu(X) < \infty$ and $f_n \to f$ a.e., then for every $\varepsilon > 0$ there is a measurable $E$ with $\mu(E) < \varepsilon$ such that $f_n \to f$ uniformly on $X \setminus E$; that is, a.e. convergence on a finite measure space is almost uniform convergence. :cite[Evans]{work=evans-2010 loc="Thm 2, pp. 685–686"} states it for Lebesgue measure on a measurable $A \subset \mathbb{R}^n$ with $|A| < \infty$, with the conclusion written as $|A \setminus E| \le \varepsilon$ and $f_k \to f$ uniformly on $E$.
5. **Almost uniform implies both** a.e. convergence and convergence in measure. With part 4 this gives: on a finite measure space, a.e. convergence implies convergence in measure.
6. **Domination upgrades a.e. to $L^1$.** If $f_n \to f$ a.e. and $|f_n| \le g$ for all $n$ with $g \in L^1$, then $f_n \to f$ in $L^1$, by :ref[dominated convergence]{to=measure.dominated-convergence} applied to $|f_n - f| \le 2g$.

No implication other than those listed, and their compositions, is valid: the remark below gives four sequences which between them block every remaining implication, some of them only in combination with an implication already listed.
:::

:::idea{provenance=original}
The three substantive statements have three different mechanisms, and it is worth separating them.

Convergence in measure is weak because it only asks that a *bad set* be small; Chebyshev's inequality converts an integral bound into exactly such a statement, which is why every $L^p$ convergence implies it. Recovering pointwise information from convergence in measure is possible only along a subsequence, and the device is to make the bad sets summable: if the $n$th bad set has measure $2^{-n}$, then the union of all bad sets from the $k$th on is still small, and off that union the sequence is uniformly Cauchy by comparison with a geometric series. Egorov's theorem runs the opposite way, from pointwise to almost uniform, and the engine is continuity of the measure from above: the sets where some later term is still off by more than $1/k$ shrink to the empty set, so their measures shrink to zero — and this last step is exactly what fails without $\mu(X) < \infty$. Choosing the tolerance $\varepsilon 2^{-k}$ at level $k$ and taking the union lets one error budget pay for all $k$ at once.
:::

:::proof[Part 1: Chebyshev's inequality]{provenance=adapted src="folland-1999:Prop. 2.29, p. 61"}
Fix $\varepsilon > 0$ and put $E_{n,\varepsilon} = \{x : |f_n(x) - f(x)| \ge \varepsilon\}$. On $E_{n,\varepsilon}$ the integrand $|f_n - f|^p$ is at least $\varepsilon^p$, so restricting the integral to that set and bounding below,

$$
\|f_n - f\|_p^p = \int_X |f_n - f|^p \,d\mu \;\ge\; \int_{E_{n,\varepsilon}} |f_n - f|^p \,d\mu \;\ge\; \varepsilon^p\, \mu(E_{n,\varepsilon}) ,
$$

using monotonicity of the integral at both steps. Hence $\mu(E_{n,\varepsilon}) \le \varepsilon^{-p}\|f_n - f\|_p^p \to 0$. As $\varepsilon > 0$ was arbitrary, $f_n \to f$ in measure. $\square$
:::

:::proof[Part 2: from Cauchy in measure to an a.e. limit]{provenance=adapted src="folland-1999:Thm 2.30, pp. 61–62"}
**Step 1: choose a fast subsequence.** Being Cauchy in measure, the sequence admits indices $n_1 < n_2 < \cdots$ such that, writing $g_j = f_{n_j}$ and

$$
E_j = \{x : |g_j(x) - g_{j+1}(x)| \ge 2^{-j}\} ,
$$

we have $\mu(E_j) \le 2^{-j}$. Indeed, for each $j$ apply the Cauchy condition with $\varepsilon = 2^{-j}$ to obtain an index beyond which all pairs have bad set of measure at most $2^{-j}$.

**Step 2: a tail of bad sets is small.** Let $F_k = \bigcup_{j \ge k} E_j$. Countable subadditivity gives $\mu(F_k) \le \sum_{j\ge k} 2^{-j} = 2^{1-k}$.

**Step 3: off $F_k$ the subsequence is uniformly Cauchy.** Let $x \notin F_k$ and $i > j \ge k$. Then $x \notin E_l$ for every $l \ge k$, so telescoping and summing a geometric series,

$$
|g_j(x) - g_i(x)| \le \sum_{l=j}^{i-1} |g_l(x) - g_{l+1}(x)| < \sum_{l=j}^{\infty} 2^{-l} = 2^{1-j} .
$$

The bound $2^{1-j}$ does not depend on $x$ or on $i$, so $\{g_j\}$ is uniformly Cauchy on $X \setminus F_k$ and converges there.

**Step 4: the limit function.** Let $F = \bigcap_k F_k$. Since $\mu(F) \le \mu(F_k) \le 2^{1-k}$ for every $k$, $\mu(F) = 0$. Define $f(x) = \lim_j g_j(x)$ for $x \notin F$ and $f(x) = 0$ for $x \in F$; this is a pointwise limit of measurable functions off a measurable set, hence measurable. Every $x \notin F$ lies outside some $F_k$, so $g_j \to f$ a.e.

**Step 5: the subsequence converges in measure.** Letting $i \to \infty$ in step 3 gives $|g_j(x) - f(x)| \le 2^{1-j}$ for all $x \notin F_k$ and all $j \ge k$. Hence for $\varepsilon>0$, as soon as $2^{1-j} < \varepsilon$ and $j \ge k$, the set where $|g_j - f| \ge \varepsilon$ is contained in $F_k$, of measure at most $2^{1-k}$. Taking $k$ large makes this arbitrarily small, so $g_j \to f$ in measure.

**Step 6: the whole sequence converges in measure.** If $|f_n(x) - f(x)| \ge \varepsilon$ then at least one of $|f_n(x) - g_j(x)| \ge \varepsilon/2$ and $|g_j(x) - f(x)| \ge \varepsilon/2$ holds, so

$$
\{|f_n - f| \ge \varepsilon\} \subseteq \{|f_n - g_j| \ge \tfrac{\varepsilon}{2}\} \cup \{|g_j - f| \ge \tfrac{\varepsilon}{2}\} .
$$

Given $\delta > 0$, choose $j$ with $\mu(\{|g_j - f| \ge \varepsilon/2\}) < \delta/2$ and with $n_j$ large enough that the Cauchy condition makes $\mu(\{|f_n - g_j|\ge \varepsilon/2\}) < \delta/2$ for all large $n$. Then $\mu(\{|f_n - f|\ge\varepsilon\}) < \delta$.

**Step 7: uniqueness of the limit.** If also $f_n \to g$ in measure, the same two-set inclusion applied to $f$, $f_n$, $g$ shows that $\mu(\{|f - g| \ge \varepsilon\})$ is smaller than any positive number, hence zero, for every $\varepsilon > 0$. Taking $\varepsilon = 1/m$ and using countable subadditivity on $\{|f-g| > 0\} = \bigcup_m \{|f-g| \ge 1/m\}$ gives $f = g$ a.e. $\square$
:::

:::proof[Part 4: Egorov's theorem]{provenance=adapted src="folland-1999:Thm 2.33, p. 62"}
First reduce to convergence at every point. Let $Z = \{x : f_n(x) \not\to f(x)\}$, a measurable set with $\mu(Z) = 0$, and replace $f$ and every $f_n$ by $0$ on $Z$. The modified sequence converges to the modified limit at every point of $X$, and the modification changes neither $\mu$ of any set nor the difference $f_n - f$ off $Z$. So if the theorem is proved for the modified sequence, giving a measurable $E$ with $\mu(E) < \varepsilon$ and uniform convergence off $E$, then the original sequence converges uniformly off $E \cup Z$, which is measurable with $\mu(E \cup Z) \le \mu(E) + \mu(Z) = \mu(E) < \varepsilon$ and so is an admissible exceptional set. We may therefore assume $f_n \to f$ at every point of $X$.

**Step 1: the sets that measure "still off by $1/k$ somewhere later".** For $k, n \in \mathbb{N}$ put

$$
E_n(k) = \bigcup_{m \ge n} \Bigl\{ x : |f_m(x) - f(x)| > \tfrac{1}{k} \Bigr\} .
$$

For fixed $k$ these decrease as $n$ increases, because the union is over fewer terms.

**Step 2: they shrink to nothing.** If $x \in \bigcap_{n} E_n(k)$ then $|f_m(x) - f(x)| > 1/k$ for infinitely many $m$, contradicting $f_m(x) \to f(x)$. So $\bigcap_n E_n(k) = \varnothing$. **Here $\mu(X) < \infty$ enters**: continuity of a measure from above applies to a decreasing sequence only when some member has finite measure, and then it gives $\mu(E_n(k)) \to \mu(\varnothing) = 0$ as $n \to \infty$.

**Step 3: spend the budget geometrically.** Let $\varepsilon > 0$. For each $k$ use step 2 to choose $n_k$ with $\mu\bigl(E_{n_k}(k)\bigr) < \varepsilon 2^{-k}$, and set $E = \bigcup_{k\ge1} E_{n_k}(k)$. Countable subadditivity gives $\mu(E) < \varepsilon \sum_{k\ge1} 2^{-k} = \varepsilon$.

**Step 4: uniformity off $E$.** Let $x \notin E$ and let $k$ be given. Then $x \notin E_{n_k}(k)$, which by the definition in step 1 says precisely that $|f_m(x) - f(x)| \le 1/k$ for every $m \ge n_k$. The index $n_k$ depends on $k$ but not on $x$, so $\sup_{x \notin E} |f_m(x) - f(x)| \le 1/k$ for $m \ge n_k$: the convergence on $X\setminus E$ is uniform. $\square$
:::

:::proof[Part 5: what almost uniform convergence gives]{provenance=adapted src="folland-1999:the remark following Thm 2.33 and Exercise 39, pp. 62–63"}
Suppose $f_n \to f$ almost uniformly.

**A.e. convergence.** For each $m$ pick $E_m$ with $\mu(E_m) < 1/m$ and $f_n \to f$ uniformly, hence pointwise, on $X\setminus E_m$. Let $N = \bigcap_m E_m$. Then $\mu(N) \le \mu(E_m) < 1/m$ for every $m$, so $\mu(N) = 0$; and every $x \notin N$ lies outside some $E_m$, where convergence holds. So $f_n \to f$ off the null set $N$.

**Convergence in measure.** Let $\varepsilon, \delta > 0$. Choose $E$ with $\mu(E) < \delta$ and $f_n \to f$ uniformly on $X \setminus E$, and then $N_0$ with $\sup_{X\setminus E}|f_n - f| < \varepsilon$ for $n \ge N_0$. For such $n$ the set $\{|f_n - f| \ge \varepsilon\}$ is contained in $E$, so its measure is below $\delta$. As $\delta$ was arbitrary, $\mu(\{|f_n-f|\ge\varepsilon\}) \to 0$.

Combining this with part 4: on a space of finite measure, a.e. convergence implies almost uniform convergence, which implies convergence in measure. $\square$
:::

:::remark[Where the hypotheses are used, and the standard counterexamples]{provenance=adapted src="folland-1999:the four sequences on p. 61 and the discussion on pp. 61–62"}
:cite[Folland]{work=folland-1999 loc="§2.4, p. 61"} introduces four sequences on $\mathbb{R}$ with Lebesgue measure which between them block every implication not listed above. In our notation they are

$$
\text{(i) } f_n = \tfrac{1}{n}\chi_{(0,n)}, \quad
\text{(ii) } f_n = \chi_{(n,n+1)}, \quad
\text{(iii) } f_n = n\,\chi_{[0,1/n]},
$$

and (iv) the "typewriter" sequence: writing $n = 2^k + j$ with $0 \le j < 2^k$, set $f_n = \chi_{[j2^{-k},\,(j+1)2^{-k}]}$, so that the indicator of a dyadic interval of length $2^{-k}$ sweeps across $[0,1]$ and then halves its width.

- **$L^1$ is not implied by any pointwise mode.** In (i) the convergence to $0$ is uniform, in (ii) it is pointwise everywhere, in (iii) it is a.e.; yet $\int |f_n| = 1$ in all three cases, so none converges in $L^1$. Part 6 is therefore not a triviality: the hypothesis that supplies what is missing is the integrable dominating function, and in (i), (ii), (iii) the smallest dominating function is $\sup_n f_n$, which is comparable to $1/x$ for large $x$ in (i), equal to $1$ on $(1,\infty)$ in (ii), and comparable to $1/x$ near $0$ in (iii) — none of them integrable.
- **Convergence in measure does not imply $L^1$ convergence.** In (i) the set $\{f_n \ge \varepsilon\}$ equals $(0,n)$ while $1/n \ge \varepsilon$ and is empty once $n > 1/\varepsilon$, so its measure is eventually $0$; in (iii) it is $[0,1/n]$, of measure $1/n$. Both sequences therefore converge to $0$ in measure, and neither converges in $L^1$.
- **A.e. convergence does not imply convergence in measure** when $\mu(X) = \infty$. In (ii), $f_n \to 0$ at every point, but $\mu(\{f_n \ge \tfrac12\}) = 1$ for every $n$, so the sequence is not even Cauchy in measure. This is exactly the failure of step 2 of the Egorov proof: the sets $E_n(k)$ there have infinite measure and continuity from above does not apply. It is why Egorov and part 5 carry the hypothesis $\mu(X) < \infty$, and why in probability the corresponding arrow holds with no extra assumption.
- **Convergence in measure (even in $L^1$) does not imply a.e. convergence.** The typewriter sequence (iv) has $\int|f_n| = 2^{-k}$ for $2^k \le n < 2^{k+1}$, so $f_n \to 0$ in $L^1$ and hence in measure; but for every $x \in [0,1]$ there are infinitely many $n$ with $f_n(x) = 1$ and infinitely many with $f_n(x) = 0$, so $f_n(x)$ converges at no point of $[0,1]$. Part 3 is the best that can be said: along the subsequence $n = 2^k$ (say) convergence to $0$ is a.e.
- **Egorov's conclusion cannot be improved to "off a null set".** The witness is $f_n(x) = x^n$ on $[0,1]$, which converges to $0$ at every point of $[0,1)$ and so a.e. Let $N$ be any null set. A null set contains no interval, so $N$ cannot swallow $(1-\delta,1)$ for any $\delta > 0$; hence $[0,1]\setminus N$ contains points arbitrarily close to $1$, and since $x^n \to 1$ as $x \uparrow 1$ for each fixed $n$, $\sup_{[0,1]\setminus N}|f_n| = 1$ for every $n$. Convergence off a null set is therefore never uniform here. Deleting a set of *small positive* measure does work: off $(1-\delta,1]$ the supremum is $(1-\delta)^n \to 0$. So the exceptional set in Egorov's theorem has small, not zero, measure, and must genuinely depend on $\varepsilon$. (Sequence (iv) is no help with this point: it converges nowhere on $[0,1]$, so it does not satisfy Egorov's hypothesis at all.)
- **Egorov's theorem needs the limit to be finite a.e.**, implicitly: the proof measures $|f_m - f|$, which requires $f$ to be a complex-valued (hence finite) function, as the statement assumes.
:::

:::method[Deciding how a given sequence converges]{provenance=original}
1. **Find the pointwise limit first.** For each fixed $x$, compute $\lim_n f_n(x)$. If it exists off a null set, that function is the only possible limit in any of the four modes, by part 2 (uniqueness) and part 3.
2. **Test convergence in measure** by computing $\mu(\{|f_n - f| \ge \varepsilon\})$ explicitly as a function of $n$ and $\varepsilon$. For sequences built from indicators this is just the length of an interval.
3. **Test $L^p$ convergence** by computing $\|f_n - f\|_p$. This may hold for some $p$ and fail for others, so do it for the $p$ you need; failure for one $p$ says nothing about another.
4. **If $\mu(X) < \infty$ and the pointwise limit exists a.e.**, convergence in measure is automatic by part 5, and only the $L^p$ question remains. Look for an integrable dominant to settle it by part 6; if none exists, the mass is escaping, either to infinity or into a spike.
5. **If you need pointwise information but have only $L^p$ or in-measure convergence**, pass to a subsequence by part 3 and continue there; this is the standard move in existence proofs for differential equations.
6. **If you need uniformity and have a.e. convergence on a finite measure space**, use Egorov: fix the budget $\varepsilon$ first, get a set $E$ with $\mu(E) < \varepsilon$, argue uniformly on $X\setminus E$, and bound whatever happens on $E$ by $\varepsilon$ times a crude estimate.
:::

:::example[A one-parameter family that separates the modes]{provenance=original}
On $X = (0,1)$ with Lebesgue measure, and for a fixed real $\alpha > 0$, let

$$
f_n = n^{\alpha}\,\chi_{(0,1/n)} , \qquad n = 1, 2, \dots
$$

**Pointwise limit.** For fixed $x \in (0,1)$, $f_n(x) = 0$ as soon as $n > 1/x$. So $f_n \to 0$ everywhere on $(0,1)$, hence a.e.

**In measure.** For $0 < \varepsilon < n^{\alpha}$ the set $\{f_n \ge \varepsilon\}$ is $(0,1/n)$, of measure $1/n$; for $\varepsilon \ge n^{\alpha}$ it is empty. Either way $\mu(\{f_n \ge \varepsilon\}) \le 1/n \to 0$, so $f_n \to 0$ in measure for every $\alpha$. (This also follows from part 5, since $\mu(X) = 1 < \infty$.)

**In $L^p$.** Directly,

$$
\|f_n\|_p^p = \int_0^{1/n} n^{\alpha p}\,dx = n^{\alpha p - 1} ,
\qquad\text{so}\qquad
\|f_n\|_p = n^{\alpha - 1/p} .
$$

Hence $f_n \to 0$ in $L^p$ exactly when $\alpha < 1/p$, that is when $p < 1/\alpha$; at $p = 1/\alpha$ the norm is identically $1$, and for $p > 1/\alpha$ it diverges.

**Numbers.** Take $\alpha = \tfrac12$ and $n = 10^4$. Then

$$
\|f_n\|_1 = n^{-1/2} = 0.01 ,
\qquad
\|f_n\|_2 = n^{0} = 1 ,
\qquad
\|f_n\|_3 = n^{1/6} = 10^{2/3} = 4.64158883\ldots,
$$

while $\mu(\{f_n \ge \varepsilon\}) = 10^{-4}$ for every $\varepsilon \le 100$. One sequence, one limit, and three different verdicts: convergence in $L^1$, no convergence in $L^2$ (the norm sits at $1$ forever), divergence in $L^3$ — with a.e. and in-measure convergence throughout. The smallest dominating function is $\sup_n f_n$, which at $x$ equals $(\lceil 1/x\rceil - 1)^{1/2}$, since the terms that are non-zero at $x$ are those with $n < 1/x$; this sits just below $x^{-1/2}$ and is comparable to it, as $(1/x - 1)^{1/2} \le (\lceil 1/x\rceil - 1)^{1/2} < x^{-1/2}$. Now $x^{-1/2} \in L^1(0,1)$, with integral $2$, so part 6 applies and accounts for the $L^1$ convergence. It says nothing about $L^2$, being stated for $L^1$ only; and the natural way to borrow it — apply part 6 to $|f_n|^2$, which converges to $0$ a.e. and is dominated by $x^{-1}$ — fails at exactly the right place, because $x^{-1} \notin L^1(0,1)$. There is in any case no $L^2$ convergence to explain.
:::

:::example[Egorov's theorem made explicit]{provenance=original}
On $X = [0,1]$ with Lebesgue measure take $f_n(x) = x^n$ and $f = 0$.

**A.e. but not uniform.** $f_n(x) \to 0$ for every $x \in [0,1)$ and $f_n(1) = 1$ for all $n$, so $f_n \to 0$ a.e. (the exceptional set $\{1\}$ is null). The convergence is not uniform: $\sup_{[0,1]} |f_n| = 1$ for every $n$.

**In measure.** For $0 < \varepsilon < 1$, $\{x : x^n \ge \varepsilon\} = [\varepsilon^{1/n}, 1]$, of measure $1 - \varepsilon^{1/n} \to 0$. At $\varepsilon = \tfrac12$ and $n = 10$ this measure is $1 - 2^{-1/10} = 0.0669670\ldots$

**Egorov with $\varepsilon = 2\times 10^{-2}$.** Take $E = (0.99,\,1]$, so $\mu(E) = 0.01 < \varepsilon$, as part 4 requires with its strict inequality. On $[0,0.99]$,

$$
\sup_{0 \le x \le 0.99} |f_n(x)| = 0.99^{\,n} ,
$$

which tends to $0$, so the convergence is uniform there, as Egorov promises. The rate is explicit: $0.99^n < 10^{-3}$ requires $n > \log(10^{-3})/\log(0.99) = 687.3158\ldots$, so $n \ge 688$. Checking the two neighbouring values, $0.99^{687} = 1.00318\times 10^{-3}$ and $0.99^{688} = 9.93148\times 10^{-4}$, which confirms $n = 688$ as the first index at which the uniform error on $X \setminus E$ drops below $10^{-3}$.

**Why the set cannot be null.** Any $E$ with $\mu(E) = 0$ leaves points of $[0,1]$ arbitrarily close to $1$ in $X \setminus E$, and at such a point $x$ we have $f_n(x) = x^n$ close to $1$ for the first several $n$; taking a sequence of such points shows $\sup_{X\setminus E}|f_n| = 1$ for every $n$. Shrinking $\varepsilon$ forces $E$ to reach closer to $1$ and the index $n_k$ in the proof to grow — here, halving $\varepsilon$ to $10^{-2}$ means taking $E = (0.995,\,1]$, of measure $0.005 < \varepsilon$, in place of $(0.99,\,1]$, and pushes the index for error $10^{-3}$ to $n \ge 1379$, since $0.995^{1378} = 1.00047\times10^{-3}$ and $0.995^{1379} = 9.95470\times10^{-4}$.
:::

:::application{provenance=original}
**Existence proofs for differential equations.** A typical argument produces approximate solutions $u_n$ bounded in some $L^p$, extracts a subsequence converging in a weak or $L^p$ sense, and then needs pointwise convergence to pass to the limit inside a nonlinear term $F(u_n)$. Part 3 supplies exactly that: $L^p$ convergence yields an a.e. convergent subsequence, and continuity of $F$ then gives $F(u_{n_j}) \to F(u)$ a.e., after which :ref[dominated convergence]{to=measure.dominated-convergence} or :ref[Fatou's lemma]{to=measure.monotone-convergence-fatou} closes the argument. This is why Egorov's theorem appears in the appendix of a partial differential equations text at all; see :ref[weak solutions and Sobolev spaces]{to=pde.weak-solutions-sobolev}.

**Laws of large numbers.** The weak law is convergence in probability of the sample mean, the strong law is almost sure convergence; the chart says the strong law implies the weak one and not conversely, which is precisely why the two are separate theorems with separate hypotheses. See :ref[the law of large numbers]{to=prob.law-of-large-numbers}.

**Monte Carlo estimates.** An estimator that converges in $L^2$ has a variance that goes to zero and so comes with an error bar; one that converges only in probability has a guarantee of the form "the chance of being off by more than $\varepsilon$ is small", with no control of how bad the rare failures are. Sequence (iii) of the remark, $f_n = n\chi_{[0,1/n]}$, is the model of an estimator that is almost always right and occasionally catastrophically wrong: the error vanishes off a set of measure $1/n$, so the estimator converges in measure (in probability), but on that shrinking set it takes the value $n$, and $\|f_n\|_2^2 = n^2 \cdot n^{-1} = n$ diverges. That is why heavy-tailed sampling problems resist mean-square error analysis: the rare failures, invisible to convergence in probability, dominate the variance. See :ref[Monte Carlo methods]{to=num.monte-carlo}.

**Signal processing and the choice of error norm.** A reconstruction may converge in mean square while failing to converge at any single instant (the typewriter sequence), or converge at every instant while the $L^1$ mass of the error stays constant (sequence (i), a plateau of height $1/n$ spreading over $(0,n)$; here the energy $\|f_n\|_2^2 = 1/n$ does go to zero). The spike (iii) converges at every instant except $x = 0$ and keeps its $L^1$ mass too, but its energy $\|f_n\|_2^2 = n$ diverges — the same $L^1$ bookkeeping, opposite verdicts in mean square. Deciding which failure is acceptable is a modelling decision, and the four modes are the vocabulary for stating it.

**Approximation of measurable functions.** Egorov's theorem is one of the two standard bridges from measurable to continuous behaviour, the other being Lusin's theorem, and it is what makes "a measurable function is nearly continuous, a convergent sequence of measurable functions is nearly uniformly convergent" a precise statement rather than a slogan.
:::
