---
id: measure.monotone-convergence-fatou
title: Monotone convergence and Fatou's lemma
kind: theorem
level: core
summary: For non-negative measurable integrands, an increasing pointwise limit may always be taken outside the integral, a non-negative series may always be integrated term by term, and for an arbitrary sequence the integral of the lower limit never exceeds the lower limit of the integrals.
prereqs: [measure.sigma-algebras-measures, measure.measurable-functions, measure.lebesgue-integral]
provenance: adapted
sources:
  - work: folland-1999
    loc: "§2.2, pp. 50–52: Thm 2.14 (monotone convergence) with its proof by the sets $E_n = \\{f_n \\ge a\\varphi\\}$ and $a \\in (0,1)$; Thm 2.15 (termwise integration of a finite or infinite non-negative series) with its proof; Cor. 2.17 (the almost-everywhere version); Thm 2.18 (Fatou's lemma) with its proof from monotone convergence; Cor. 2.19 (the almost-everywhere version); Prop. 2.16, p. 51; the paragraph on p. 51 giving $\\mathbf{1}_{(n,n+1)}$ and $n\\mathbf{1}_{(0,1/n)}$ as the two ways area escapes; Prop. 2.13d and Thm 1.8c, used in the proof; Exercise 22, p. 59, which leaves the identification of the integral against counting measure on $\\mathbb{N}$ with the sum of a series to the reader"
    pages: "50-52, 59"
    role: the statements of all four results, the proof route for each, the role of the auxiliary factor $a < 1$, and the two standard counterexamples to dropping monotonicity
  - work: evans-2010
    loc: "Appendix E.3, p. 686: Thm 3 (Fatou's lemma, for non-negative measurable $f_k$ on $\\mathbb{R}^n$) and Thm 4 (monotone convergence theorem, for measurable $f_k$ with $0 \\le f_1 \\le f_2 \\le \\cdots$)"
    pages: "686"
    role: the concrete $\\mathbb{R}^n$ statements with Lebesgue measure, and the ordering of the hypotheses
  - work: stakgold-holst-2011
    loc: "§0.7, pp. 46–47: Thm 0.7.2 (monotone convergence theorem on a measurable $\\Omega \\subseteq \\mathbb{R}^n$, with $0 \\le f_i \\le f_{i+1}$ for every $i$ and every $x$) and Thm 0.7.3 (Fatou's lemma), together with the definition of $\\liminf$ used there and the remark that Fatou's lemma matters for variational problems in partial differential equations"
    pages: "46-47"
    role: the statements in the form used in partial-differential-equations practice; the observation that Fatou's lemma is the tool behind lower semicontinuity arguments; a statement of Fatou's lemma whose hypotheses differ from ours
  - work: reed-simon-1980
    loc: "§1.3, p. 17, Thm 1.10 (monotone convergence theorem): for measurable $f_n \\ge 0$ with $f_n \\uparrow f$ pointwise and $\\int f_n \\le C$ for all $n$, the conclusion is $f \\in \\mathcal{L}^1$ and $\\int |f - f_n| \\to 0$; also the definition of 'almost everywhere', p. 17"
    pages: "17"
    role: a variant of the monotone convergence theorem carrying a uniform bound as a hypothesis and delivering convergence in the $L^1$ norm, which we compare with the version we state
  - work: grimmett-stirzaker-2020
    loc: "§5.6(B), pp. 201–202: item (12)(a) (monotone convergence for expectations) with the remark that the hypotheses may be weakened to hold almost surely; item (13), the termwise expectation of a sum of non-negative random variables, derived from monotone convergence; item (14), Fatou's lemma stated for $X_n \\ge Y$ almost surely with $\\mathbb{E}|Y| < \\infty$, 'often applied in practice with $Y = 0$'"
    pages: "201-202"
    role: the probabilistic statements; the termwise-expectation corollary; a version of Fatou's lemma with an integrable lower bound in place of non-negativity
---

:::definition[The set-up]{provenance=adapted src="folland-1999:§2.2, p. 49 and §2.3, p. 54; reed-simon-1980:§1.3, p. 17"}
Throughout, $(X, \Sigma, \mu)$ is a measure space and $\mathcal{L}^{+}$ is the set of measurable functions $f : X \to [0,\infty]$, with $\int f \, d\mu \in [0,\infty]$ as defined in :ref[]{to=measure.lebesgue-integral}. No integrand below is assumed to have a finite integral.

Write $f_n \uparrow f$ for *$f_n$ increases pointwise to $f$*: $f_n(x) \le f_{n+1}(x)$ for every $n$ and every $x$, and $f_n(x) \to f(x)$. Since an increasing sequence in $[0,\infty]$ always converges in $[0,\infty]$, the limit function is $f = \sup_n f_n$, and it is measurable whenever the $f_n$ are (:ref[]{to=measure.measurable-functions}).

A property holds **almost everywhere** (a.e.) when the set where it fails is contained in a set of measure zero. For a sequence $(g_n)$ of measurable functions,

$$
\liminf_{n \to \infty} g_n \;=\; \lim_{k \to \infty} \ \inf_{n \ge k} g_n \;=\; \sup_{k \ge 1} \ \inf_{n \ge k} g_n ,
$$

the inner infima increasing with $k$; it is measurable, and is defined pointwise even when $(g_n(x))$ has no limit.
:::

:::statement[Monotone convergence theorem]{provenance=adapted src="folland-1999:§2.2, Thm 2.14 and Cor. 2.17, pp. 50–51; evans-2010:App. E.3, Thm 4, p. 686"}
Let $(f_n)_{n \ge 1}$ be a sequence in $\mathcal{L}^{+}$ with $f_n \uparrow f$. Then

$$
\int f \, d\mu \;=\; \lim_{n \to \infty} \int f_n \, d\mu ,
$$

both sides being allowed the value $+\infty$. The conclusion is unchanged if the hypothesis holds only almost everywhere, provided the limit is still required to be an integrand: if $(f_n) \subset \mathcal{L}^{+}$, **$f \in \mathcal{L}^{+}$**, and $f_n(x) \uparrow f(x)$ for a.e. $x$, then still $\int f = \lim_n \int f_n$. The measurability of $f$ has to be assumed here and not deduced: off the exceptional null set $f$ is unconstrained, so on a measure space that is not complete $f$ may fail to be measurable and $\int f$ may have no meaning. :cite[Folland]{work=folland-1999 loc="§2.2, Cor. 2.17, p. 51"} carries $f \in \mathcal{L}^{+}$ in the hypotheses for exactly this reason.

Three things are *not* assumed: that any $\int f_n$ is finite, that $f$ is finite anywhere, or that the convergence is uniform or even dominated.
:::

:::statement[Termwise integration of a non-negative series]{provenance=adapted src="folland-1999:§2.2, Thm 2.15, p. 51; grimmett-stirzaker-2020:§5.6(B), item (13), p. 201"}
Let $(f_n)_{n \ge 1}$ be a finite or infinite sequence in $\mathcal{L}^{+}$ and $f = \sum_n f_n$ pointwise. Then

$$
\int \sum_{n} f_n \, d\mu \;=\; \sum_{n} \int f_n \, d\mu .
$$

Again both sides may be $+\infty$, and no convergence hypothesis on the series is needed: the terms are non-negative, so the partial sums increase and the series converges in $[0,\infty]$ at every point. Taking $X = \mathbb{N}$ with counting measure turns the theorem into the statement that a non-negative double series may be summed in either order — but only once the integral against counting measure has been identified with the sum $\sum_{k} f(k)$, which :cite[Folland]{work=folland-1999 loc="§2.2, Exercise 22, p. 59"} leaves as an exercise and we do not prove here; see :ref[]{to=measure.fubini-tonelli}, where the interchange of two sums is obtained as a case of Tonelli's theorem.
:::

:::statement[Fatou's lemma]{provenance=adapted src="folland-1999:§2.2, Thm 2.18 and Cor. 2.19, p. 52; evans-2010:App. E.3, Thm 3, p. 686"}
Let $(f_n)_{n \ge 1}$ be *any* sequence in $\mathcal{L}^{+}$. Then

$$
\int \Bigl( \liminf_{n \to \infty} f_n \Bigr) d\mu \;\le\; \liminf_{n \to \infty} \int f_n \, d\mu .
$$

No monotonicity, no convergence and no domination is required. Consequently, if $(f_n) \subset \mathcal{L}^{+}$, $f \in \mathcal{L}^{+}$ and $f_n \to f$ a.e., then $\int f \, d\mu \le \liminf_n \int f_n \, d\mu$: mass can be lost in the limit, never gained. As in the monotone convergence theorem, $f \in \mathcal{L}^{+}$ is a hypothesis of this corollary and not a consequence of the others, which is how :cite[Folland]{work=folland-1999 loc="§2.2, Cor. 2.19, p. 52"} states it.
:::

:::idea{provenance=original}
In the monotone convergence theorem the inequality $\int f \ge \lim_n \int f_n$ is free: the limit function dominates each term, and the integral is monotone. (Fatou's lemma has no such free half — for an arbitrary sequence the $\liminf$ dominates nothing — which is why it is an inequality and not an identity.) The content of monotone convergence is the other direction, and one device supplies it. To beat the supremum defining $\int f$ one must beat every simple $\varphi$ with $0 \le \varphi \le f$. Since $f_n \uparrow f$, the set where $f_n$ has caught up with $\varphi$ grows to all of $X$ — but only if we give ourselves a margin, because $f_n$ may approach $\varphi$ from below without ever reaching it. Shrinking $\varphi$ to $a\varphi$ with $a < 1$ buys that margin, and then the sets $\{f_n \ge a\varphi\}$ increase to $X$, so continuity of a measure from below delivers $\lim_n \int f_n \ge a \int \varphi$. Letting $a \uparrow 1$ and taking the supremum over $\varphi$ finishes it.

The other two results are consequences rather than new arguments. A series of non-negative terms *is* an increasing sequence of partial sums, so termwise integration is monotone convergence plus additivity on two summands. And Fatou's lemma is monotone convergence applied to the increasing sequence $g_k = \inf_{n \ge k} f_n$, each $g_k$ being a lower bound for all later $f_n$ and hence for their integrals.
:::

:::proof[Monotone convergence]{provenance=adapted src="folland-1999:§2.2, proof of Thm 2.14, p. 50 and proof of Cor. 2.17, p. 51"}
**Step 1: the easy inequality.** $f_n \le f_{n+1} \le f$ for every $n$, so by monotonicity of the integral the numbers $\int f_n$ increase and are bounded above by $\int f$. An increasing sequence in $[0,\infty]$ converges in $[0,\infty]$, so $L := \lim_n \int f_n$ exists and $L \le \int f$.

**Step 2: fix a competitor and a margin.** Let $\varphi = \sum_{j=1}^{N} a_j \mathbf{1}_{E_j}$ be simple with $0 \le \varphi \le f$, and fix $a \in (0,1)$. Put

$$
A_n \;=\; \{\, x \in X : f_n(x) \ge a\,\varphi(x) \,\} \in \Sigma .
$$

**Step 3: the sets $A_n$ increase to $X$.** They increase because the $f_n$ do. They exhaust $X$: given $x$, either $\varphi(x) = 0$, and then $x \in A_1$ since $f_1 \ge 0$; or $\varphi(x) > 0$, and then $a\varphi(x) < \varphi(x) \le f(x)$ *strictly*, so some $f_n(x)$ exceeds $a\varphi(x)$, because $f_n(x) \uparrow f(x)$. This is the one place the margin $a < 1$ is used, and it is needed: at a point where $f_n(x) < \varphi(x) = f(x)$ for every $n$, the sets $\{f_n \ge \varphi\}$ would miss $x$ altogether.

**Step 4: continuity from below.** By monotonicity of the integral and then by restriction to $A_n$,

$$
\int f_n \, d\mu \;\ge\; \int_{A_n} f_n \, d\mu \;\ge\; a \int_{A_n} \varphi \, d\mu \;=\; a \sum_{j=1}^{N} a_j\, \mu(E_j \cap A_n) .
$$

For each fixed $j$ the sets $E_j \cap A_n$ increase with $n$ and their union is $E_j$, so $\mu(E_j \cap A_n) \uparrow \mu(E_j)$ by continuity of a measure from below (:ref[]{to=measure.sigma-algebras-measures}). The sum over $j$ is finite, so letting $n \to \infty$ in the display gives $L \ge a \int \varphi \, d\mu$.

**Step 5: remove the margin and take the supremum.** The inequality $L \ge a\int\varphi$ holds for every $a \in (0,1)$, so letting $a \uparrow 1$ gives $L \ge \int \varphi \, d\mu$. This holds for every simple $\varphi$ between $0$ and $f$, and $\int f$ is by definition the supremum of such $\int \varphi$, so $L \ge \int f$. With step 1, $L = \int f$.

**Step 6: the almost-everywhere version.** Suppose $f, f_n \in \mathcal{L}^{+}$ and $f_n \uparrow f$ on $X \setminus Z$ with $\mu(Z) = 0$, and set $E = X \setminus Z$. (Measurability of $f$ is where the extra hypothesis is spent: without it $\int f$ is not defined, and the identity to be proved has no left-hand side.) Then $f_n \mathbf{1}_E \uparrow f \mathbf{1}_E$ everywhere, so the version just proved gives $\int f\mathbf{1}_E = \lim_n \int f_n \mathbf{1}_E$. Finally $f\mathbf{1}_Z$ and $f_n\mathbf{1}_Z$ vanish off $Z$, hence are $0$ a.e., hence have zero integral by claim 6 of :ref[]{to=measure.lebesgue-integral}. Splitting $f = f\mathbf{1}_E + f\mathbf{1}_Z$ then needs additivity of the integral on $\mathcal{L}^{+}$, which is step 1 of the next proof; that step uses only the everywhere version established in steps 1–5, so invoking it here is not circular. It gives $\int f = \int f\mathbf{1}_E + \int f\mathbf{1}_Z = \int f \mathbf{1}_E$ and likewise $\int f_n = \int f_n \mathbf{1}_E$ for each $n$, so the two limits coincide. $\square$
:::

:::proof[Termwise integration of a non-negative series]{provenance=adapted src="folland-1999:§2.2, proof of Thm 2.15, p. 51"}
**Step 1: two summands.** Let $f, g \in \mathcal{L}^{+}$. By the approximation theorem of :ref[]{to=measure.measurable-functions} choose simple $\varphi_k \uparrow f$ and $\psi_k \uparrow g$ with all terms non-negative. Then $\varphi_k + \psi_k$ is simple, non-negative, and increases to $f + g$. Monotone convergence applies to all three sequences, and additivity of the integral on *simple* functions (:ref[]{to=measure.lebesgue-integral}) applies at each fixed $k$:

$$
\int (f + g) \,d\mu = \lim_{k} \int (\varphi_k + \psi_k)\, d\mu = \lim_{k} \Bigl( \int \varphi_k + \int \psi_k \Bigr) = \int f \, d\mu + \int g \, d\mu ,
$$

the last step because both limits exist in $[0,\infty]$ and are approached monotonically, so no $\infty - \infty$ can occur.

**Step 2: finitely many summands.** Induction on step 1 gives $\int \sum_{n=1}^{N} f_n = \sum_{n=1}^{N} \int f_n$ for every $N$.

**Step 3: pass to the infinite series.** Put $S_N = \sum_{n=1}^{N} f_n$. Each $f_n \ge 0$, so $S_N \uparrow \sum_{n \ge 1} f_n$ pointwise in $[0,\infty]$. Monotone convergence, applied now to $(S_N)_N$, together with step 2 gives

$$
\int \sum_{n \ge 1} f_n \, d\mu = \lim_{N \to \infty} \int S_N \, d\mu = \lim_{N \to \infty} \sum_{n=1}^{N} \int f_n \, d\mu = \sum_{n \ge 1} \int f_n \, d\mu ,
$$

the final equality being the definition of the sum of a series of terms in $[0,\infty]$. $\square$
:::

:::proof[Fatou's lemma]{provenance=adapted src="folland-1999:§2.2, proof of Thm 2.18 and of Cor. 2.19, p. 52"}
**Step 1: build an increasing sequence.** For $k \ge 1$ set $g_k = \inf_{n \ge k} f_n$, measurable and non-negative. Taking the infimum over a smaller index set can only increase it, so $g_k \le g_{k+1}$, and by definition $g_k \uparrow \liminf_n f_n$.

**Step 2: compare each $g_k$ with the tail.** For every $j \ge k$ we have $g_k \le f_j$ pointwise, hence $\int g_k \le \int f_j$ by monotonicity. The right-hand side is free to vary over $j \ge k$, so

$$
\int g_k \, d\mu \;\le\; \inf_{j \ge k} \int f_j \, d\mu .
$$

**Step 3: let $k \to \infty$.** The left-hand side tends to $\int \liminf_n f_n$ by monotone convergence applied to $g_k \uparrow \liminf_n f_n$; the right-hand side tends, by definition, to $\liminf_n \int f_n$. Both sides are monotone in $k$, so the inequality survives the limit:

$$
\int \Bigl(\liminf_{n} f_n\Bigr) d\mu \;=\; \lim_{k} \int g_k \, d\mu \;\le\; \lim_{k}\ \inf_{j \ge k} \int f_j \, d\mu \;=\; \liminf_{n} \int f_n \, d\mu .
$$

**Step 4: the almost-everywhere corollary.** Assume $f \in \mathcal{L}^{+}$, so that $\int f$ is defined, and $f_n \to f$ off a null set $Z$. Then $h := \liminf_n f_n$ is in $\mathcal{L}^{+}$ by step 1, and $h = f$ on $E := X \setminus Z$. Both $f\mathbf{1}_Z$ and $h\mathbf{1}_Z$ vanish a.e., so both have zero integral by claim 6 of :ref[]{to=measure.lebesgue-integral}; additivity on $\mathcal{L}^{+}$ (step 1 of the previous proof) then gives $\int f = \int f\mathbf{1}_E + \int f \mathbf{1}_Z = \int h \mathbf{1}_E + \int h\mathbf{1}_Z = \int h$. Steps 1–3 give $\int h \le \liminf_n \int f_n$, so $\int f \le \liminf_n \int f_n$. $\square$
:::

:::remark[Where the hypotheses are used, and how the books differ]{provenance=original}
- **Monotonicity is used three times in the first proof**: twice in step 1, to make the numbers $\int f_n$ increase (so that $L = \lim_n \int f_n$ exists) and to give $L \le \int f$; and once in step 3, to make the sets $A_n$ increase. The third use is the essential one — the first two only organise the easy inequality — and it cannot be dropped. :cite[Folland]{work=folland-1999 loc="§2.2, p. 51"} gives the two ways it fails on $\mathbb{R}$ with Lebesgue measure: $\mathbf{1}_{(n,n+1)} \to 0$ pointwise with the area walking off to the right, and $n\,\mathbf{1}_{(0,1/n)} \to 0$ pointwise with the area growing taller as it narrows. Both sequences have every integral equal to $1$ while the limit has integral $0$, so monotone convergence would be false and Fatou's inequality is strict: $0 < 1$.
- **The margin $a < 1$ is not a technicality.** Take $X = \{p\}$ a single point of measure $1$ and $f_n \equiv 1 - 1/n$, so $f \equiv 1$. With $\varphi = \mathbf{1}_{X}$ the sets $\{f_n \ge \varphi\}$ are all empty, and the proof would give nothing; the sets $\{f_n \ge a\varphi\}$ are eventually all of $X$ for each $a < 1$.
- **Non-negativity is used in Fatou's lemma** to guarantee that every integral appearing is defined. :cite[Grimmett and Stirzaker]{work=grimmett-stirzaker-2020 loc="§5.6(B), item (14), p. 202"} state the lemma under the weaker hypothesis that $X_n \ge Y$ almost surely for a single $Y$ with $\mathbb{E}\lvert Y \rvert < \infty$, noting that the case $Y = 0$ is the one normally used; our statement is that case. :cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="§0.7, Thm 0.7.3, p. 47"} state it for a sequence of measurable functions on a measurable $\Omega \subseteq \mathbb{R}^{n}$, their Thm 0.7.2 immediately above carrying the condition $0 \le f_i \le f_{i+1}$. We follow :cite[Folland]{work=folland-1999 loc="§2.2, Thm 2.18, p. 52"} and :cite[Evans]{work=evans-2010 loc="App. E.3, Thm 3, p. 686"}, who require the $f_n$ to be non-negative, and in our proof the hypothesis enters twice: at step 1, so that $g_k \in \mathcal{L}^{+}$ and $\int g_k$ is defined without a finiteness assumption, and at step 3, so that monotone convergence may be applied to $(g_k)$. Some lower bound is genuinely needed, since the sequence $-n\,\mathbf{1}_{(0,1/n)}$ on $\mathbb{R}$ has $\liminf = 0$ a.e. but every integral equal to $-1$.
- **Two forms of the monotone convergence theorem are in circulation.** Ours, from Folland and Evans, assumes only $f_n \uparrow f$ and concludes $\int f_n \to \int f$ in $[0,\infty]$. :cite[Reed and Simon]{work=reed-simon-1980 loc="§1.3, Thm 1.10, p. 17"} add the hypothesis $\int f_n \le C$ for all $n$ and strengthen the conclusion to $f \in \mathcal{L}^{1}$ with $\int \lvert f - f_n \rvert \to 0$. These are not in conflict: under their extra hypothesis our version gives $\int f = \lim \int f_n \le C < \infty$, so $f$ is integrable, and then $\lvert f - f_n \rvert = f - f_n$ has integral $\int f - \int f_n \to 0$ by linearity on $L^{1}$ — a subtraction that is legitimate precisely because $C$ is finite. Without a finite bound their conclusion is empty, since $f$ need not be integrable, while ours still says $\int f_n \to \infty$. We state the Folland–Evans form and use the Reed–Simon form where $L^{1}$ convergence is wanted.
- **Equality in Fatou's lemma is not the typical case**, and the lemma is normally used in exactly one direction: to bound the integral of a limit from above by what the sequence does. That is why it is the engine behind lower semicontinuity of energy functionals, a use :cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="§0.7, p. 47"} single out.
- **The three results are one result in disguise.** Monotone convergence proves termwise integration and Fatou's lemma, as above, and Fatou's lemma in turn proves :ref[dominated convergence]{to=measure.dominated-convergence}. Monotone convergence also closes a gap left in :ref[]{to=measure.lebesgue-integral}: additivity $\int (f+g) = \int f + \int g$ on $\mathcal{L}^{+}$ is step 1 of the second proof and is not available directly from the supremum definition, because the simple minorants of $f + g$ are not all of the form $\varphi + \psi$.
:::

:::method[Interchanging a limit or a sum with an integral, for non-negative integrands]{provenance=original}
1. **Check the sign first.** If the integrand is non-negative, no integrability hypothesis of any kind is needed for an increasing limit or for a series: go straight to step 2 or 3. If it changes sign, these theorems do not apply; use :ref[dominated convergence]{to=measure.dominated-convergence}.
2. **Increasing limit.** Verify $f_n \le f_{n+1}$ pointwise and identify $f = \lim_n f_n$. Holding a.e. is enough, provided $f$ is separately known to be measurable: off the exceptional null set it is unconstrained, and on an incomplete space its measurability cannot be deduced. Then $\int f = \lim_n \int f_n$. Both sides may be infinite, and this is often the cheapest way to *prove* an integral infinite.
3. **Series.** Write the integrand as $\sum_n f_n$ with every $f_n \ge 0$ — typically by expanding a geometric series $\frac{1}{1 - u} = \sum_{n \ge 0} u^{n}$ with $0 \le u < 1$, or $\frac{1}{e^{x} - 1} = \sum_{n \ge 1} e^{-nx}$ for $x > 0$. Integrate each term and add. No uniform convergence is required, and the interchange is valid even where the series diverges.
4. **Only a bound wanted?** Use Fatou's lemma. To show $\int f \le C$ when $f = \lim_n f_n$ a.e. — with $f$ again assumed measurable, for the same reason — and each $\int f_n \le C$, no monotonicity is needed.
5. **Check for escaping mass.** If the answer comes out smaller than expected, look for a sequence whose mass escapes to infinity or concentrates at a point: those are the two failure modes, and they are exactly the cases in which Fatou's inequality is strict.
:::

:::example[A logarithmic integral summed term by term]{provenance=original}
Evaluate

$$
I = \int_{0}^{1} \frac{\ln(1/x)}{1 - x} \, dx .
$$

The integrand is unbounded at the left end, behaving like $\ln(1/x)$ as $x \downarrow 0$, while at the right end it is harmless, tending to $1$ as $x \uparrow 1$. The singularity at $0$ is enough to make an interchange theorem that needs a bounded integrand awkward here. Non-negativity makes it routine.

**Step 1: the integrand is non-negative and measurable.** For $0 < x < 1$ both $\ln(1/x) > 0$ and $1 - x > 0$, and the integrand is continuous on $(0,1)$, hence measurable. The endpoints form a null set and may be ignored.

**Step 2: expand in a non-negative series.** For $0 < x < 1$ the geometric series gives $\frac{1}{1-x} = \sum_{n \ge 0} x^{n}$, so

$$
\frac{\ln(1/x)}{1-x} = \sum_{n \ge 0} f_n(x), \qquad f_n(x) = x^{n}\ln(1/x) \ \ge\ 0 \quad (0 < x < 1).
$$

Every term is non-negative, which is the only hypothesis the termwise theorem asks for.

**Step 3: integrate one term.** Substituting $x = e^{-t}$, so $dx = -e^{-t}dt$ and $\ln(1/x) = t$, turns $(0,1)$ into $(0,\infty)$:

$$
\int_{0}^{1} x^{n} \ln(1/x)\,dx = \int_{0}^{\infty} t\, e^{-(n+1)t} \, dt = \frac{1}{(n+1)^{2}} \int_{0}^{\infty} u \,e^{-u}\,du = \frac{1}{(n+1)^{2}} ,
$$

using $u = (n+1)t$ and $\int_{0}^{\infty} u e^{-u} du = \Gamma(2) = 1$.

**Step 4: add.** By the termwise theorem,

$$
I = \sum_{n \ge 0} \frac{1}{(n+1)^{2}} = \sum_{m \ge 1} \frac{1}{m^{2}} = \zeta(2) = \frac{\pi^{2}}{6} = 1.6449340668\ldots
$$

**Step 5: check.** The partial sums $\sum_{m \le M} m^{-2}$ are $1.4636111$ at $M = 5$, $1.5961632$ at $M = 20$ and $1.6349839$ at $M = 100$, climbing towards $1.6449341$ from below as they must, the terms being positive. For the Basel value $\zeta(2) = \pi^{2}/6$ see :ref[]{to=spec.zeta-bernoulli}. Numerical quadrature of the original integral gives $1.644934067$, agreeing to nine decimals.

**Step 6: what monotone convergence adds.** The same computation read backwards shows the partial sums $S_N(x) = \sum_{n < N} x^{n}\ln(1/x)$ increase pointwise to the integrand, so $\int_{0}^{1} S_N \uparrow I$: the sequence of partial sums of the series is *itself* an increasing sequence of integrands, and that is all the termwise theorem is.
:::

:::application{provenance=original}
**The Stefan–Boltzmann law.** Planck's law makes the energy density of black-body radiation per unit frequency proportional to $\nu^{3}/(e^{h\nu/kT} - 1)$. Integrating over all frequencies and substituting $x = h\nu/kT$ leaves the pure number

$$
J = \int_{0}^{\infty} \frac{x^{3}}{e^{x} - 1}\,dx .
$$

The integrand is non-negative on $(0,\infty)$, so no domination has to be checked. For $x > 0$ we have $e^{-x} < 1$ and

$$
\frac{1}{e^{x}-1} = \frac{e^{-x}}{1 - e^{-x}} = \sum_{n \ge 1} e^{-nx} ,
$$

all terms positive. Termwise integration and the substitution $u = nx$ give $\int_{0}^{\infty} x^{3} e^{-nx}\,dx = n^{-4}\int_{0}^{\infty} u^{3}e^{-u}\,du = 3!/n^{4} = 6/n^{4}$, whence

$$
J = 6 \sum_{n \ge 1} \frac{1}{n^{4}} = 6\,\zeta(4) = 6 \cdot \frac{\pi^{4}}{90} = \frac{\pi^{4}}{15} = 6.4939394023\ldots
$$

This is the constant that converts Planck's law into $u = aT^{4}$ and fixes $\sigma = 2\pi^{5}k^{4}/(15 h^{3}c^{2})$. The only analytic input beyond the substitution is the right to integrate a positive series term by term. See :ref[]{to=spec.zeta-bernoulli} for $\zeta(4) = \pi^4/90$.

**Expectations of sums of non-negative random variables.** :cite[Grimmett and Stirzaker]{work=grimmett-stirzaker-2020 loc="§5.6(B), item (13), p. 201"} derive from monotone convergence that for non-negative $Z_1, Z_2, \dots$ *with finite expectations*, $\mathbb{E}\bigl(\sum_i Z_i\bigr) = \sum_i \mathbb{E}(Z_i)$. The termwise theorem above drops even that hypothesis: the identity holds for any non-negative $Z_i$, both sides being allowed the value $+\infty$. This is what licenses counting arguments such as $\mathbb{E}(\text{number of records in } n \text{ draws}) = \sum_{i=1}^{n} 1/i$, in which the summands are indicators and the interchange is never questioned. It is also the step behind Tonelli's theorem for counting measure in :ref[]{to=measure.fubini-tonelli}.

**Lower semicontinuity in the calculus of variations.** The direct method minimises an energy $E(u) = \int_{\Omega} F(x, u, \nabla u)\,dx$ over an admissible class by taking a minimising sequence $(u_k)$, extracting a limit $u$, and then trying to prove

$$
E(u) \;\le\; \liminf_{k \to \infty} E(u_k) \;=\; \inf E ,
$$

which makes $u$ a minimiser. Fatou's lemma is the tool for that inequality, and it is worth being exact about what it does and does not supply. Write $F_k(x) = F(x, u_k(x), \nabla u_k(x))$ and suppose $F \ge 0$. Fatou gives $\int_{\Omega} \liminf_k F_k \le \liminf_k \int_{\Omega} F_k = \liminf_k E(u_k)$ with no hypothesis beyond non-negativity. The left-hand side is $E(u)$ only when $\liminf_k F_k = F(x,u,\nabla u)$ almost everywhere — that is, when the *integrands* converge, which by the a.e. corollary above needs $\nabla u_k \to \nabla u$ a.e., not merely $u_k \to u$. Supplying that convergence is the hard part of the direct method, since compactness normally yields only weak convergence of the gradients.

The gap is real, not pedantic. Take $\Omega = (0,1)$ and the Bolza energy

$$
E(u) \;=\; \int_{0}^{1} \Bigl[ \bigl(u'(x)^{2} - 1\bigr)^{2} + u(x)^{2} \Bigr] dx
$$

over the $u$ that are continuous and piecewise smooth with $u(0) = u(1) = 0$; the integrand is non-negative, so $F \ge 0$ as required. Let $u_k$ be the sawtooth that is linear on each of the $2k$ intervals $\bigl(\tfrac{j-1}{2k}, \tfrac{j}{2k}\bigr)$, $j = 1, \dots, 2k$, with slope $+1$ for $j$ odd and $-1$ for $j$ even, starting from $u_k(0) = 0$; it rises to $1/(2k)$ at the odd endpoints $j/(2k)$ and returns to $0$ at the even ones, so in particular $u_k(0) = u_k(1) = 0$, and $\lVert u_k \rVert_{\infty} = 1/(2k) \to 0$, while $u_k'(x) = \pm 1$ off the finite set of corners. The first term of the energy therefore vanishes identically, and the second is the same integral on each of the $2k$ pieces:

$$
E(u_k) = \int_{0}^{1} u_k^{2}\,dx = 2k \int_{0}^{1/(2k)} t^{2}\,dt = \frac{1}{12k^{2}} \ \longrightarrow\ 0 ,
$$

so $(u_k)$ is a minimising sequence and $\inf E = 0$. That infimum is not attained: $E(u) = 0$ would force $u = 0$ almost everywhere *and* $u'(x)^{2} = 1$ at all but finitely many $x$, whereas a piecewise-smooth $u$ vanishing almost everywhere vanishes identically on each interval of smoothness, where its derivative is $0$ and the first term contributes $1$. So here the direct method fails at the first hurdle — no minimiser exists — and it fails for the reason Fatou's lemma cannot repair. The uniform limit of the minimising sequence is $u \equiv 0$, with $E(0) = \int_{0}^{1} 1 \, dx = 1 > \inf E$: the functional is not lower semicontinuous along $(u_k)$. Fatou's lemma is not violated, merely silent. Here $F_k(x) = \bigl(u_k'(x)^2 - 1\bigr)^2 + u_k(x)^2 = u_k(x)^{2} \le 1/(4k^{2})$ for a.e. $x$, so $\liminf_k F_k = 0$ a.e. and the lemma reads $0 \le 0$ — the left-hand side is *not* $E(0) = 1$, precisely because the integrands do not converge to $F(x,0,0) = 1$. The derivatives $u_k'$ oscillate between $+1$ and $-1$ and converge at no point.

So Fatou's lemma delivers lower semicontinuity exactly when the integrands converge a.e.; it does not by itself turn the limit of a minimising sequence into a minimiser, and when the gradients only converge weakly a convexity hypothesis on $F$ in its last argument has to be supplied instead. That Fatou's lemma is the engine behind such lower semicontinuity arguments is the use :cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="§0.7, p. 47"} highlight, and it is the reason variational energies in continuum mechanics are written as non-negative integrands wherever possible.

**Partition functions and infinite level sums.** In statistical mechanics $Z = \sum_{j} e^{-\beta E_j}$ is interchanged with phase-space integrals as a matter of course. Because every term $e^{-\beta E_j}$ is positive, the interchange is the termwise theorem, valid even when $Z$ diverges — as it does for the hydrogen atom's bound states, where the divergence of $\sum_n n^{2} e^{-\beta E_n}$ with $E_n \to 0$ is a statement the theorem makes rigorous rather than one it forbids.
:::
