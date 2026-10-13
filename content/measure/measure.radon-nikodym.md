---
id: measure.radon-nikodym
title: The Radon-Nikodym theorem
kind: theorem
level: advanced
summary: Gives the exact condition under which one measure is an integral of a density against another, constructs that density as the Radon-Nikodym derivative $d\nu/d\mu$, and separates off the singular part of a measure that has no density at all.
prereqs: [measure.lp-spaces, measure.monotone-convergence-fatou, measure.lebesgue-integral, measure.measurable-functions, measure.sigma-algebras-measures, funcan.riesz-representation]
provenance: adapted
sources:
  - work: folland-1999
    loc: "§3.1, pp. 85–88: signed measures, extended $\\mu$-integrable functions (p. 86), the Jordan decomposition Thm 3.4 and mutual singularity (p. 87). §3.2, pp. 88–93: the definition of $\\nu \\ll \\mu$ and the incompatibility of $\\ll$ with $\\perp$ (pp. 88–89); Thm 3.5, the $\\varepsilon$–$\\delta$ form of absolute continuity, and the notation $d\\nu = f\\,d\\mu$ (p. 89); Lemma 3.7 and the Lebesgue-Radon-Nikodym Thm 3.8 with its Case I / Case II / signed-case structure (pp. 89–90); the name and notation $d\\nu/d\\mu$, the chain rule Prop. 3.9, Cor. 3.10, the Dirac nonexample and Prop. 3.11 (p. 91); Exercises 10, 13 and 14 (p. 92) and Exercise 17 on conditional expectation (p. 93)"
    pages: "85-93"
    role: the statement of the theorem in its full Lebesgue-Radon-Nikodym form, the definitions and notation, the $\sigma$-finite reduction, the calculus of derivatives (change of variables, chain rule, reciprocal), and the counterexamples that show where the hypotheses are needed
  - work: reed-simon-1980
    loc: "§I.4, pp. 22–23: mutual singularity and absolute continuity, the Radon-Nikodym Thm I.19 and the Lebesgue decomposition Thm I.20. Supplement to §II.2, Application 1, Thm S.1 and its proof, pp. 344–346 (von Neumann's proof from the Riesz lemma). §VII.2, Thm VII.4 and the definitions of $\\sigma_{\\mathrm{pp}}$, $\\sigma_{\\mathrm{ac}}$, $\\sigma_{\\mathrm{sing}}$, pp. 230–231. Supplement to §III.1, Thm S.4, p. 350"
    pages: "22-23, 230-231, 344-346, 350"
    role: the proof route used here (compare both measures with their sum and apply the Riesz representation theorem in $L^2$), the decomposition of spectral measures in quantum mechanics, and the derivation of the duality $(L^p)^* \cong L^q$ from this theorem
  - work: grimmett-stirzaker-2020
    loc: "§2.3, Definitions (1) and (2) and the following paragraph, p. 35"
    pages: "35"
    role: the probabilists' definition of a discrete and of a continuous random variable, the density function, and the remark that a distribution function may also be singular or a mixture
---

:::definition[Absolute continuity, singularity and densities]{provenance=adapted src="folland-1999:§3.1, pp. 86–87, and §3.2, pp. 88–89; reed-simon-1980:§I.4, p. 22"}
Throughout, $(X,\mathcal{M})$ is a measurable space and all measures are defined on $\mathcal{M}$. Recall from :ref[sigma-algebras and measures]{to=measure.sigma-algebras-measures} that a measure $\mu$ is **$\sigma$-finite** if $X$ is a countable union of sets of finite measure.

Let $\mu$ and $\nu$ be positive measures.

- $\nu$ is **absolutely continuous** with respect to $\mu$, written $\nu \ll \mu$, if $\mu(E) = 0$ forces $\nu(E) = 0$. Every $\mu$-null set is then $\nu$-null, so "$\mu$-almost everywhere" implies "$\nu$-almost everywhere".
- $\nu$ and $\mu$ are **mutually singular**, written $\nu \perp \mu$, if $X$ splits as a disjoint union $X = B \sqcup C$ with $\mu(B) = 0$ and $\nu(C) = 0$. Informally the two measures live on disjoint sets. :cite[Reed and Simon]{work=reed-simon-1980 loc="§I.4, p. 22"} phrase it as a single set $B$ with $\mu(B) = 0$ and $\nu(X \setminus B) = 0$, which is the same condition with $C = X \setminus B$.

The two relations are opposites rather than variants: if $\nu \ll \mu$ *and* $\nu \perp \mu$ then $\nu = 0$, because with $B, C$ as above $\mu(B) = 0$ gives $\nu(B) = 0$ by absolute continuity, while $\nu(C) = 0$ by singularity, so $\nu(X) = 0$.

If $f : X \to [0,\infty]$ is measurable, the set function
$$
\nu(E) \;=\; \int_E f \, d\mu \qquad (E \in \mathcal{M})
$$
is a positive measure, by termwise integration of non-negative series (:ref[]{to=measure.monotone-convergence-fatou}), and it satisfies $\nu \ll \mu$, because $\mu(E) = 0$ makes the integral over $E$ vanish. We abbreviate this relation to
$$
d\nu = f\,d\mu ,
$$
and call $f$ a **density** of $\nu$ with respect to $\mu$. When $\nu \ll \mu$ and such an $f$ exists it is unique up to $\mu$-a.e. equality *provided $\mu$ and $\nu$ are $\sigma$-finite*, which is the standing hypothesis of the theorem below and is what Step 9 uses; without it uniqueness fails, as $X = \{1\}$ with $\mu(\{1\}) = \nu(\{1\}) = \infty$ shows, where $f \equiv 1$ and $f \equiv 2$ are both densities. Under that hypothesis the resulting equivalence class is the **Radon-Nikodym derivative**, written $d\nu/d\mu$. Following :cite[Folland]{work=folland-1999 loc="§3.2, p. 91"} we treat $d\nu/d\mu$ as a function, remembering that only its $\mu$-a.e. equivalence class is determined.

For the signed version stated in the note below we also need Folland's term: a measurable $f : X \to [-\infty,\infty]$ is **extended $\mu$-integrable** when $\int f^{+}\,d\mu < \infty$ or $\int f^{-}\,d\mu < \infty$, so that $\int f\,d\mu$ is defined in $[-\infty,\infty]$.
:::

:::statement[Lebesgue-Radon-Nikodym]{provenance=adapted src="folland-1999:Thm 3.8, p. 90; reed-simon-1980:Thms I.19 and I.20, p. 23"}
Let $\mu$ and $\nu$ be $\sigma$-finite positive measures on $(X,\mathcal{M})$.

1. **(Lebesgue decomposition.)** There are $\sigma$-finite positive measures $\lambda$ and $\rho$ on $(X,\mathcal{M})$ with
$$
\nu = \lambda + \rho , \qquad \lambda \perp \mu , \qquad \rho \ll \mu ,
$$
and this pair is unique.
2. **(Existence of a density.)** There is a measurable $f : X \to [0,\infty]$ with $\rho(E) = \int_E f\,d\mu$ for every $E \in \mathcal{M}$, and any two such functions agree $\mu$-a.e.
3. **(Radon-Nikodym.)** If in addition $\nu \ll \mu$, then $\lambda = 0$ and
$$
\nu(E) = \int_E \frac{d\nu}{d\mu}\, d\mu \qquad \text{for all } E \in \mathcal{M} .
$$
Conversely any $\nu$ of this form is absolutely continuous with respect to $\mu$. So, for $\sigma$-finite measures, *having a density with respect to $\mu$* and *being absolutely continuous with respect to $\mu$* are the same property.
:::

:::note[The version in the sources, and what we prove]{provenance=adapted src="folland-1999:Thm 3.8, p. 90, Thm 3.4, p. 87, Thm 3.12, p. 93, and Exercise 14, p. 92; reed-simon-1980:Thms I.19 and I.20, p. 23"}
:cite[Folland]{work=folland-1999 loc="Thm 3.8, p. 90"} states the theorem with $\nu$ allowed to be a $\sigma$-finite **signed** measure: $\lambda$ and $\rho$ are then $\sigma$-finite signed measures and $f$ is extended $\mu$-integrable with values in $\mathbb{R}$. The general case follows from the positive case proved below by applying it separately to the two positive measures $\nu^{+}$ and $\nu^{-}$ of the Jordan decomposition $\nu = \nu^{+} - \nu^{-}$ (:cite[Folland]{work=folland-1999 loc="Thm 3.4, p. 87"}) and subtracting; Folland's Thm 3.12 (p. 93) does the same for complex $\nu$. We state and prove the positive case, which is what the rest of this handbook uses.

:cite[Reed and Simon]{work=reed-simon-1980 loc="Thms I.19 and I.20, p. 23"} split the result into two statements — the Radon-Nikodym theorem for $\nu \ll \mu$, and the Lebesgue decomposition theorem — and state both for measures on a measure space without writing a $\sigma$-finiteness hypothesis into the statement; their proof in the supplement (pp. 344–346) treats the finite case and leaves the passage to $\sigma$-finite measures as a problem. Folland's Exercise 14 (p. 92) records that for part 3 alone the hypothesis on $\nu$ can be dropped: if $\mu$ is $\sigma$-finite and $\nu$ is an arbitrary signed measure with $\nu \ll \mu$, an extended $\mu$-integrable density still exists. The $\sigma$-finiteness of $\mu$ cannot be dropped; see the remark on hypotheses.
:::

:::idea{provenance=original}
A measure $\nu$ fails to have a density with respect to $\mu$ only because of the part of $\nu$ that lives where $\mu$ has no mass, so the whole problem is to locate that part. The trick is to stop comparing $\nu$ with $\mu$ and compare both with their sum $\alpha = \mu + \nu$, which dominates each of them. Against $\alpha$ nothing can blow up: $E \mapsto \nu(E)$ extends to a bounded linear functional on the Hilbert space $L^2(\alpha)$, so the :ref[Riesz representation theorem]{to=funcan.riesz-representation} hands us a single function $F$ with $d\nu = F\,d\alpha$, and $0 \le F \le 1$ because $0 \le \nu \le \alpha$. Subtracting, $d\mu = (1-F)\,d\alpha$. Now read off the answer: on $\{F = 1\}$ the factor $1-F$ vanishes, so $\mu$ gives that set no mass and it carries the singular part of $\nu$; on $\{F < 1\}$ we may divide, and $F/(1-F)$ is the density we want.
:::

:::proof{provenance=adapted src="reed-simon-1980:Thm S.1 and its proof, pp. 344–346; folland-1999:Thm 3.8, Case II, p. 90"}
The argument for finite measures is von Neumann's, which :cite[Reed and Simon]{work=reed-simon-1980 loc="pp. 344–346"} give as an application of the Riesz lemma; the passage to $\sigma$-finite measures follows :cite[Folland]{work=folland-1999 loc="Thm 3.8, Case II, p. 90"}. Steps 1–7 assume $\mu(X) < \infty$ and $\nu(X) < \infty$.

**Step 1: a bounded functional on $L^2(\alpha)$.** Put $\alpha = \mu + \nu$, a finite positive measure. Let $L^2(\alpha)$ be the real Hilbert space of square-$\alpha$-integrable real functions with $(g,h) = \int gh \, d\alpha$; it is complete by Riesz-Fischer (:ref[]{to=measure.lp-spaces}). Define
$$
L(g) = \int_X g \, d\nu \qquad (g \in L^2(\alpha)).
$$
This is defined and bounded: $\nu \le \alpha$ as set functions, so $\int |g|\,d\nu \le \int |g| \, d\alpha$, and Hölder's inequality with $p = q = 2$ applied to $|g| \cdot 1$ on the finite measure space $(X,\alpha)$ gives
$$
|L(g)| \;\le\; \int_X |g| \, d\alpha \;\le\; \|g\|_{L^2(\alpha)}\,\alpha(X)^{1/2} .
$$
Finiteness of $\alpha(X)$, which is where both measures being finite is used, is what makes the constant $\alpha(X)^{1/2}$ available; $L$ is linear because the integral is.

**Step 2: the representing function.** By the :ref[Riesz representation theorem]{to=funcan.riesz-representation} there is $F \in L^2(\alpha)$ with $L(g) = \int_X gF\,d\alpha$ for every $g \in L^2(\alpha)$. Since $\alpha$ is finite, $\chi_E \in L^2(\alpha)$ for every $E \in \mathcal{M}$, and taking $g = \chi_E$ gives
$$
\nu(E) = \int_E F \, d\alpha \qquad (E \in \mathcal{M}). \tag{$*$}
$$

**Step 3: $0 \le F \le 1$ $\alpha$-almost everywhere.** Fix $\gamma > 1$ and let $E_\gamma = \{F \ge \gamma\}$. On $E_\gamma$ the integrand in $(*)$ is at least $\gamma$, so
$$
\nu(E_\gamma) \;\ge\; \gamma\,\alpha(E_\gamma) \;=\; \gamma\bigl(\mu(E_\gamma) + \nu(E_\gamma)\bigr) \;\ge\; \gamma\,\nu(E_\gamma) .
$$
Here $\nu(E_\gamma) \le \nu(X) < \infty$, so this may be rearranged to $(\gamma - 1)\nu(E_\gamma) \le 0$, and $\gamma > 1$ forces $\nu(E_\gamma) = 0$; feeding that back gives $\gamma\,\alpha(E_\gamma) \le 0$, so $\alpha(E_\gamma) = 0$. Letting $\gamma$ run through $1 + 1/n$ and using countable subadditivity, $\alpha(\{F > 1\}) = 0$. In the other direction let $D_n = \{F \le -1/n\}$; then $(*)$ gives $0 \le \nu(D_n) \le -\alpha(D_n)/n \le 0$, so $\alpha(D_n) = 0$, and the union over $n$ gives $\alpha(\{F < 0\}) = 0$. Changing $F$ on an $\alpha$-null set changes no integral in $(*)$, so we may and do assume $0 \le F(x) \le 1$ for every $x$.

**Step 4: the companion formula $d\mu = (1-F)\,d\alpha$, and its use on functions.** Subtracting $(*)$ from $\alpha(E) = \mu(E) + \nu(E)$ and using $\alpha(E) = \int_E 1 \, d\alpha$,
$$
\mu(E) = \int_E (1 - F)\,d\alpha \qquad (E \in \mathcal{M}),
$$
all three quantities being finite. We need this for integrands other than indicators: for every measurable $h : X \to [0,\infty]$,
$$
\int_X h \, d\mu = \int_X h\,(1-F)\,d\alpha . \tag{$**$}
$$
Indeed $(**)$ is the displayed formula when $h = \chi_E$; it extends to non-negative simple $h$ by linearity of the integral; and for general $h \ge 0$ choose simple $0 \le s_1 \le s_2 \le \cdots$ with $s_k \uparrow h$ pointwise (:ref[]{to=measure.measurable-functions}), note that $s_k(1-F) \uparrow h(1-F)$ because $1 - F \ge 0$, and apply the monotone convergence theorem (:ref[]{to=measure.monotone-convergence-fatou}) on both sides.

**Step 5: the singular set.** Let
$$
B = \{x : F(x) = 1\}, \qquad A = X \setminus B = \{x : F(x) < 1\} .
$$
Taking $h = \chi_B$ in $(**)$ gives $\mu(B) = \int_B (1-F)\,d\alpha = 0$, since $1 - F$ vanishes identically on $B$. So $B$ is $\mu$-null.

**Step 6: the density on the rest.** Define
$$
f = \frac{F}{1-F}\,\chi_A ,
$$
a non-negative measurable function (the quotient is formed only where $1 - F > 0$, and $f = 0$ on $B$). For $E \in \mathcal{M}$ apply $(**)$ to $h = \chi_E f$:
$$
\int_E f \, d\mu = \int_X \chi_E \frac{F}{1-F}\chi_A (1-F) \, d\alpha = \int_{E \cap A} F \, d\alpha = \nu(E \cap A) ,
$$
the last equality by $(*)$ applied to $E \cap A$. The cancellation of $1-F$ is legitimate because it happens only on $A$, where $1 - F > 0$.

**Step 7: the decomposition, for finite measures.** Set $\lambda(E) = \nu(E \cap B)$ and $\rho(E) = \nu(E \cap A)$. Both are positive measures, and $\lambda + \rho = \nu$ because $A$ and $B$ partition $X$. Since $\mu(B) = 0$ by Step 5 and $\lambda(A) = \nu(\varnothing) = 0$, the splitting $X = B \sqcup A$ witnesses $\lambda \perp \mu$. Step 6 says $\rho(E) = \int_E f \, d\mu$, which makes $\rho \ll \mu$. Finally, if $\nu \ll \mu$ then $\mu(B) = 0$ gives $\nu(B) = 0$, hence $\lambda = 0$ and $\nu(E) = \int_E f\,d\mu$ for every $E$: part 3.

**Step 8: $\sigma$-finite measures.** Write $X = \bigcup_i P_i$ with $\mu(P_i) < \infty$ and $X = \bigcup_k Q_k$ with $\nu(Q_k) < \infty$. The countably many sets $P_i \cap Q_k$ have both measures finite and cover $X$; disjointifying them (replace each by what it adds to the union of its predecessors, as in :ref[]{to=measure.sigma-algebras-measures}) gives a countable partition $X = \bigsqcup_j X_j$ with $\mu(X_j) < \infty$ and $\nu(X_j) < \infty$. Apply Steps 1–7 to the finite measures $\mu_j : E \mapsto \mu(E \cap X_j)$ and $\nu_j : E \mapsto \nu(E \cap X_j)$, and write $\alpha_j = \mu_j + \nu_j$. This produces a set $B_j = \{F_j = 1\}$ with $\mu_j(B_j) = 0$ and a measurable $f_j \ge 0$ with $\nu_j(E) = \nu_j(E \cap B_j) + \int_E f_j\,d\mu_j$. Both $F_j$ and $f_j$ are determined only up to $\alpha_j$-null sets, and $\alpha_j(X \setminus X_j) = 0$, so we are free to normalise the representatives outside $X_j$; following :cite[Folland's]{work=folland-1999 loc="Thm 3.8, Case II, p. 90"} normalisation we choose $F_j = 0$ and hence $f_j = 0$ on $X \setminus X_j$. This makes $B_j \subseteq X_j$, so the $B_j$ are pairwise disjoint and $\mu(B_j) = \mu_j(B_j) = 0$; and since $f_j$ vanishes off $X_j$, $\int_E f_j \, d\mu_j = \int_{E \cap X_j} f_j\,d\mu = \int_E f_j \, d\mu$. Since also $\nu_j(E) = \nu(E \cap X_j)$ and $\nu_j(E \cap B_j) = \nu(E \cap B_j)$, the display above becomes
$$
\nu(E \cap X_j) = \nu(E \cap B_j) + \int_E f_j \, d\mu .
$$
Put $B = \bigcup_j B_j$, $\lambda(E) = \nu(E \cap B)$ and $f = \sum_j f_j$. Then $\mu(B) = 0$ by countable subadditivity, so $\lambda \perp \mu$; the $B_j$ are disjoint with $B_j \subseteq X_j$, so $\sum_j \nu(E \cap B_j) = \nu(E \cap B)$. Summing the display over $j$ and interchanging sum and integral by termwise integration of non-negative series (:ref[]{to=measure.monotone-convergence-fatou}) gives $\nu(E) = \lambda(E) + \int_E f \, d\mu$ for all $E$. Setting $\rho(E) = \int_E f\,d\mu$ completes the existence proof; $\lambda$ and $\rho$ are $\sigma$-finite because each is at most $\nu$ on each $X_j$. If $\nu \ll \mu$ then $\nu(B) = 0$ and $\lambda = 0$, as before.

**Step 9: uniqueness.** Suppose $\nu = \lambda + \rho = \lambda' + \rho'$ with $\lambda, \lambda' \perp \mu$ and $\rho, \rho' \ll \mu$. Choose $\mu$-null sets $C, C'$ carrying $\lambda, \lambda'$, that is $\mu(C) = 0 = \lambda(X \setminus C)$ and likewise for $C'$, and put $N = C \cup C'$, so $\mu(N) = 0$. For any $E$, absolute continuity gives $\rho(E \cap N) = 0 = \rho'(E \cap N)$, while $\lambda(E \setminus N) = 0 = \lambda'(E\setminus N)$ since $N \supseteq C, C'$. Hence
$$
\lambda(E) = \lambda(E \cap N) = \nu(E \cap N) = \lambda'(E \cap N) = \lambda'(E),
\qquad
\rho(E) = \rho(E \setminus N) = \nu(E \setminus N) = \rho'(E) ,
$$
with no subtraction of possibly infinite quantities anywhere. For the density, suppose $\int_E f \, d\mu = \int_E g\,d\mu$ for all $E$, with $f, g \ge 0$. Using the partition $\{X_j\}$ of Step 8, refined so that in addition $\rho(X_j) < \infty$, take $E = X_j \cap \{f > g\}$: both integrals are finite and equal, so $\int_E (f - g)\,d\mu = 0$ with a strictly positive integrand, which forces $\mu(E) = 0$. Exchanging $f$ and $g$ and taking the union over $j$ gives $f = g$ $\mu$-a.e. $\square$
:::

:::statement[Calculus of Radon-Nikodym derivatives]{provenance=adapted src="folland-1999:Prop. 3.9 and Cor. 3.10, p. 91"}
Let $\lambda, \mu, \nu$ be $\sigma$-finite positive measures on $(X,\mathcal{M})$.

1. **Change of variables.** If $\nu \ll \mu$ then for every measurable $g \ge 0$, and for every $g \in L^1(\nu)$,
$$
\int_X g \, d\nu = \int_X g \,\frac{d\nu}{d\mu}\, d\mu .
$$
2. **Chain rule.** If $\nu \ll \mu$ and $\mu \ll \lambda$ then $\nu \ll \lambda$ and
$$
\frac{d\nu}{d\lambda} = \frac{d\nu}{d\mu}\,\frac{d\mu}{d\lambda} \qquad \lambda\text{-a.e.}
$$
3. **Reciprocal.** If $\mu \ll \lambda$ and $\lambda \ll \mu$ (the measures are then called *equivalent*) then $(d\lambda/d\mu)(d\mu/d\lambda) = 1$ almost everywhere with respect to either.
:::

:::proof[Calculus rules]{provenance=adapted src="folland-1999:Prop. 3.9, p. 91"}
**1.** With $h = d\nu/d\mu$, the identity $\int g\,d\nu = \int gh\,d\mu$ holds for $g = \chi_E$ by the definition of $h$, hence for non-negative simple $g$ by linearity, hence for all measurable $g \ge 0$ by monotone convergence applied to a simple increasing approximation (:ref[]{to=measure.monotone-convergence-fatou}), exactly as in Step 4 of the previous proof. For $g \in L^1(\nu)$, split $g = g^{+} - g^{-}$ and subtract the two finite results.

**2.** $\nu \ll \lambda$ is immediate: $\lambda(E) = 0 \Rightarrow \mu(E) = 0 \Rightarrow \nu(E) = 0$. For the formula, fix $E$ and apply part 1 to the pair $\mu \ll \lambda$ with the non-negative integrand $g = \chi_E \,(d\nu/d\mu)$:
$$
\nu(E) = \int_E \frac{d\nu}{d\mu}\,d\mu = \int_E \frac{d\nu}{d\mu}\,\frac{d\mu}{d\lambda}\,d\lambda .
$$
Since also $\nu(E) = \int_E (d\nu/d\lambda)\,d\lambda$ for all $E$, the $\lambda$-a.e. uniqueness of a density (Step 9) gives the claim.

**3.** Apply part 2 with $\nu = \lambda$, using that $d\lambda/d\lambda = 1$ by the same uniqueness statement: this gives $(d\lambda/d\mu)(d\mu/d\lambda) = 1$ $\lambda$-a.e. The identity then also holds $\mu$-a.e., because $\mu \ll \lambda$ makes every $\lambda$-null set $\mu$-null. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=adapted src="folland-1999:Thm 3.5 and the discussion on p. 89, p. 91, and Exercises 10 and 13, p. 92"}
- **$\sigma$-finiteness of $\mu$ is essential, and it is used in Step 8.** Without it there is no partition into pieces on which Step 1 can run, and the theorem is false. :cite[Folland's]{work=folland-1999 loc="Exercise 13, p. 92"} example: on $X = [0,1]$ with the Borel sets, let $m$ be Lebesgue measure and $\mu$ counting measure. The only $\mu$-null set is $\varnothing$, so $m \ll \mu$ trivially. But if $m(E) = \int_E f \, d\mu$ for all $E$, then taking $E = \{x\}$ gives $f(x) = m(\{x\}) = 0$ for every $x$, hence $f \equiv 0$ and $m \equiv 0$, contradicting $m([0,1]) = 1$. Folland adds that this $\mu$ also has no Lebesgue decomposition with respect to $m$. Note that the failure is in the *reference* measure: $m$ here is finite, and $\mu$ is not $\sigma$-finite because $[0,1]$ is uncountable.
- **$\sigma$-finiteness of $\nu$ is used only for the decomposition.** For part 3 alone it can be dropped, by Folland's Exercise 14 quoted in the note above.
- **Finiteness of $\nu$ is used in Step 3**, to rearrange $\nu(E_\gamma) \ge \gamma \nu(E_\gamma)$ into $(\gamma-1)\nu(E_\gamma) \le 0$. Had $\nu(E_\gamma)$ been infinite the inequality would have been vacuous and no bound on $F$ would follow. This is why the proof runs on finite pieces and only then is assembled.
- **Absolute continuity is used only in the last line of Steps 7 and 8.** Everything before it holds for arbitrary $\sigma$-finite $\nu$, and that is the content of part 1: a measure always splits into a part with a density and a part concentrated where $\mu$ is blind.
- **What the singular part looks like.** Take $\mu = m$ on $\mathbb{R}$ and $\nu = \delta_0$, the point mass at $0$. Then $\nu \perp \mu$, with $B = \{0\}$, and the theorem produces $f = 0$: there is no density. :cite[Folland]{work=folland-1999 loc="p. 91"} notes that the nonexistent derivative $d\delta_0/dm$ is what physicists call the Dirac delta function. It is recovered as a limit of densities, or as a distribution rather than a function; see :ref[]{to=fourier.delta-identities} and :ref[]{to=fourier.distributions}. The Radon-Nikodym theorem is thus a precise statement of *why* the delta function cannot be a function.
- **Absolute continuity as an $\varepsilon$-$\delta$ statement needs $\nu$ finite.** :cite[Folland's Thm 3.5]{work=folland-1999 loc="p. 89"} says that for a *finite* signed $\nu$, $\nu \ll \mu$ is equivalent to: for every $\varepsilon > 0$ there is $\delta > 0$ with $|\nu(E)| < \varepsilon$ whenever $\mu(E) < \delta$. His Exercise 10 (p. 92) shows this fails for infinite $\nu$: on $(0,1)$ take $d\nu = dx/x$ and $d\mu = dx$. Then $\nu \ll \mu$, but $\nu((0,\delta)) = \infty$ for every $\delta > 0$.
- **The derivative is a class, not a function.** $F$ in Step 2 is given by the Riesz theorem only as an element of $L^2(\alpha)$, and Step 3 modified it on a null set. Correspondingly $d\nu/d\mu$ is determined only $\mu$-a.e., which is exactly the ambiguity that Step 9 shows is the whole of the ambiguity. Any statement about the pointwise value of $d\nu/d\mu$ at a particular point is meaningless unless the point carries positive $\mu$-measure.
:::

:::method[Finding and using a density]{provenance=original}
1. **Test absolute continuity.** Identify the $\mu$-null sets and check that $\nu$ vanishes on all of them. The usual obstruction is an atom: if $\nu(\{a\}) > 0$ while $\mu(\{a\}) = 0$, then $\nu \not\ll \mu$ and the best available result is the decomposition, not a density.
2. **Check $\sigma$-finiteness** of $\mu$ (and of $\nu$ if you want the decomposition). On $\mathbb{R}^n$ with Lebesgue measure this is automatic; with counting measure on an uncountable set it fails.
3. **Guess the density.** For $\mu = m$ on $\mathbb{R}$, compute $G(b) = \nu((-\infty,b])$ and differentiate: if $G$ is an indefinite integral of a locally integrable $g$, then $g$ is the candidate.
4. **Verify it on a determining class.** To confirm $\nu(E) = \int_E f\,dm$ for every Borel $E$, it suffices to check it for $E = (a,b]$. Both sides are then measures agreeing on the algebra of finite disjoint unions of such intervals, and if they are $\sigma$-finite there the uniqueness clause of the extension theorem (:ref[]{to=measure.lebesgue-measure}) forces them to agree on all of $\mathcal{B}_{\mathbb{R}}$.
5. **Compute with it** using the change-of-variables rule: every integral against $\nu$ becomes an integral against $\mu$ with an extra factor $d\nu/d\mu$. This is the one formula that turns a statement about measures into a statement about functions.
6. **Change reference measure** with the chain rule, and invert with the reciprocal rule when the two measures are equivalent.
7. **Compare several measures** by dominating them all at once: for $\nu_1,\dots,\nu_n$ the measure $\mu = \sum_j \nu_j$ satisfies $\nu_j \ll \mu$ for every $j$ (:cite[Folland, Prop. 3.11]{work=folland-1999 loc="p. 91"}), so all of them acquire densities simultaneously and their ratios are well defined. This is what makes a likelihood ratio meaningful whether the model is discrete or continuous.
8. **If the test in step 1 fails,** split instead: strip off the atoms, then the remaining singular part, and apply steps 3–6 to what is left.
:::

:::example[A measure with an atom: decomposition, density, and numbers]{provenance=original}
Let $X = [0,2]$ with its Borel sets, let $\mu$ be Lebesgue measure on $X$, and let
$$
\nu(E) \;=\; \int_{E \cap [0,1]} 3x^2\,dx \;+\; \tfrac12\,\delta_1(E) ,
$$
where $\delta_1$ is the point mass at $x = 1$. Both are finite: $\mu(X) = 2$ and $\nu(X) = 1 + \tfrac12 = \tfrac32$.

**Step 1: $\nu \not\ll \mu$.** We have $\mu(\{1\}) = 0$ but $\nu(\{1\}) = \tfrac12 \neq 0$. So no density exists, and we must decompose.

**Step 2: the function $F$ of the proof.** Here $\alpha = \mu + \nu$ acts as follows: on $[0,1)$ it has Lebesgue density $1 + 3x^2$; on $(1,2]$ it has Lebesgue density $1$; and $\alpha(\{1\}) = 0 + \tfrac12 = \tfrac12$. Set
$$
F(x) = \frac{3x^2}{1+3x^2} \ \ (0 \le x < 1), \qquad F(1) = 1, \qquad F(x) = 0 \ \ (1 < x \le 2) .
$$
To check $(*)$, split any Borel $E$ into three pieces. On $E \cap [0,1)$,
$$
\int_{E\cap[0,1)} F \, d\alpha = \int_{E \cap [0,1)} \frac{3x^2}{1+3x^2}\,(1+3x^2)\,dx = \int_{E\cap[0,1)} 3x^2\,dx ,
$$
which is $\nu(E \cap [0,1))$. If $1 \in E$, that piece contributes $F(1)\,\alpha(\{1\}) = 1 \cdot \tfrac12 = \tfrac12 = \nu(\{1\})$. On $E \cap (1,2]$ both sides are $0$. So $(*)$ holds, and $0 \le F \le 1$ as Step 3 of the proof predicts.

**Step 3: read off the decomposition.** The singular set is $B = \{F = 1\} = \{1\}$, with $\mu(B) = 0$, and
$$
\lambda = \tfrac12\,\delta_1 , \qquad f(x) = \frac{F(x)}{1-F(x)}\chi_{A}(x) = \begin{cases} 3x^2, & 0 \le x < 1,\\[2pt] 0, & 1 \le x \le 2,\end{cases}
\qquad \rho(E) = \int_E f \, d\mu .
$$
The algebra behind the first line of the formula is $\bigl[3x^2/(1+3x^2)\bigr]\big/\bigl[1/(1+3x^2)\bigr] = 3x^2$. As a numerical spot check at $x = \tfrac12$: $F(\tfrac12) = \tfrac{3/4}{7/4} = \tfrac37$, and $\tfrac{3/7}{4/7} = \tfrac34 = 3(\tfrac12)^2$, as required.

**Step 4: checkable numbers.** From $\nu = \lambda + \rho$,
$$
\nu\bigl([0,\tfrac12]\bigr) = \int_0^{1/2} 3x^2\,dx = \tfrac18 = 0.125 ,
$$
$$
\nu\bigl([\tfrac12,1]\bigr) = \int_{1/2}^{1} 3x^2\,dx + \tfrac12 = \tfrac78 + \tfrac12 = \tfrac{11}{8} = 1.375 .
$$
The second of these exceeds the integral of the density over the same interval, $\int_{1/2}^{1} 3x^2\,dx = \tfrac78$, by exactly $\tfrac12$: that excess is the atom at $x = 1$, equivalently the jump of $\tfrac12$ in $b \mapsto \nu([0,b])$ at $b = 1$, and it is exactly what no density could produce. Finally the change-of-variables rule applied to the absolutely continuous part gives
$$
\int_X x \, d\nu(x) = \int_0^1 x\cdot 3x^2\,dx + \tfrac12 \cdot 1 = \tfrac34 + \tfrac12 = \tfrac54 = 1.25 .
$$
Each of these was confirmed symbolically: $\int_0^{1/2}3x^2dx = 1/8$, $\int_{1/2}^{1}3x^2dx = 7/8$, $\int_0^1 3x^3dx = 3/4$.
:::

:::application[Densities and likelihood ratios in probability]{provenance=original}
A random variable $X$ on $(\Omega,\mathcal{F},\mathbb{P})$ pushes $\mathbb{P}$ forward to its **law** $\mathbb{P}_X(E) = \mathbb{P}(X \in E)$, a probability measure on $\mathbb{R}$. :cite[Grimmett and Stirzaker]{work=grimmett-stirzaker-2020 loc="§2.3, Definition (2), p. 35"} call $X$ *continuous* when its distribution function is an integral, $F(x) = \int_{-\infty}^{x} f(u)\,du$, and call $f$ the density; in the language of this unit that is precisely the statement $\mathbb{P}_X \ll m$, and $f = d\mathbb{P}_X/dm$. Their *discrete* variables are the case $\mathbb{P}_X \ll$ counting measure on a countable set, with the mass function as density. They also note (p. 35) that a distribution may be neither — it may be *singular*, the Cantor distribution being the standard example — or a mixture of the three kinds; those are exactly the measures whose Lebesgue decomposition has a non-zero $\lambda$. So the trichotomy that probability textbooks introduce by cases is one theorem.

The practical gain is that one formula covers all cases. Fix a dominating measure $\mu$ for a family of candidate laws (step 7 of the method) and write each as $p_\theta = dP_\theta/d\mu$. Then $p_\theta$ is the likelihood, whether the model is discrete, continuous or mixed, and the ratio $dQ/dP$ of two laws is the likelihood ratio on which :ref[maximum likelihood]{to=stats.maximum-likelihood} and :ref[likelihood-ratio tests]{to=stats.hypothesis-testing} are built. A small example: let $P$ be the exponential law with rate $1$ and $Q$ the exponential law with rate $2$ on $(0,\infty)$. Both are absolutely continuous with respect to $m$, and because both densities $e^{-x}$ and $2e^{-2x}$ are strictly positive on $(0,\infty)$ the converse holds too: a set of positive Lebesgue measure has positive probability under each, so $m \ll P$ and $m \ll Q$ as well. Hence $P$ and $Q$ are each equivalent to $m$, and therefore to each other; in particular $Q \ll P$, which is what the chain rule needs. (Absolute continuity with respect to $m$ alone would not suffice: the uniform laws on $(0,1)$ and on $(1,2)$ are both $\ll m$ and yet mutually singular.) By the chain and reciprocal rules
$$
\frac{dQ}{dP}(x) = \frac{2e^{-2x}}{e^{-x}} = 2e^{-x} .
$$
Computing a $Q$-probability as a $P$-expectation then uses the change-of-variables rule:
$$
Q(X > 1) = \int_{1}^{\infty} \frac{dQ}{dP}\,dP = \int_1^\infty 2e^{-x}\cdot e^{-x}\,dx = e^{-2} = 0.1353352832\ldots ,
$$
which agrees with the direct computation $\int_1^\infty 2e^{-2x}dx = e^{-2}$. Reweighting samples from one distribution to estimate probabilities under another is importance sampling, and the same identity, applied to the law of a diffusion, is the Girsanov change of measure behind risk-neutral pricing (:ref[]{to=prob.ito-calculus}).

Finally, :ref[conditional expectation]{to=prob.conditional-expectation} is a Radon-Nikodym derivative and not merely an analogue of one: given $Y \in L^1(\mathbb{P})$ and a sub-$\sigma$-algebra $\mathcal{G} \subseteq \mathcal{F}$, the set function $E \mapsto \int_E Y\,d\mathbb{P}$ on $\mathcal{G}$ is absolutely continuous with respect to $\mathbb{P}|_{\mathcal{G}}$, and $\mathbb{E}[Y \mid \mathcal{G}]$ is defined as its density; :cite[Folland]{work=folland-1999 loc="Exercise 17, p. 93"} sets exactly this exercise. The a.e. uniqueness of Step 9 is the reason conditional expectation is well defined up to null sets and no better, and the tower property $\mathbb{E}\bigl[\mathbb{E}[Y \mid \mathcal{G}] \mid \mathcal{H}\bigr] = \mathbb{E}[Y \mid \mathcal{H}]$ for $\mathcal{H} \subseteq \mathcal{G}$ follows from that same uniqueness: both sides are densities on $\mathcal{H}$ of the one set function $E \mapsto \int_E Y\,d\mathbb{P}$. (It is not an instance of the chain rule, which multiplies derivatives of three measures on a single $\sigma$-algebra, whereas here one measure is restricted to successively smaller $\sigma$-algebras.) Everything in :ref[]{to=prob.martingales} rests on this.
:::

:::application[Spectral measures and the structure of $L^p$ duality]{provenance=adapted src="reed-simon-1980:§VII.2, Thm VII.4 and the definitions on pp. 230–231; reed-simon-1980:Thm S.4, p. 350"}
**Quantum mechanics.** For a bounded self-adjoint operator $A$ on a Hilbert space $\mathcal{H}$, each vector $\psi$ has a spectral measure $\mu_\psi$ on $\mathbb{R}$ (:ref[]{to=funcan.spectral-theorem-general}), and :cite[Reed and Simon]{work=reed-simon-1980 loc="§VII.2, p. 230"} apply this unit's decomposition, refined by a further splitting of the singular part, to every one of them (their Thm I.13): each $\mu_\psi$ splits uniquely into three pieces: a pure point part, a part that is absolutely continuous for Lebesgue measure, and a part that is both continuous and singular for it. Only the absolutely continuous / singular cut is the Lebesgue decomposition proved above; the splitting of the singular part into a pure point piece and a continuous singular piece is extra. Collecting the vectors by the type of their spectral measure gives
$$
\mathcal{H} = \mathcal{H}_{\mathrm{pp}} \oplus \mathcal{H}_{\mathrm{ac}} \oplus \mathcal{H}_{\mathrm{sing}} ,
$$
and Reed and Simon's Thm VII.4 states that all three subspaces are invariant under $A$, that $A$ restricted to $\mathcal{H}_{\mathrm{pp}}$ has a complete set of eigenvectors, and that the restrictions to the other two summands have only absolutely continuous, respectively only continuous singular, spectral measures. The :ref[spectrum]{to=funcan.spectrum} splits correspondingly into $\sigma_{\mathrm{pp}}$, $\sigma_{\mathrm{ac}}$ and $\sigma_{\mathrm{sing}}$ (pp. 230–231). Physically, $\mathcal{H}_{\mathrm{pp}}$ holds the bound states of a Hamiltonian and $\mathcal{H}_{\mathrm{ac}}$ the scattering states, so this is the decomposition that separates the two regimes; the Radon-Nikodym derivative $d\mu_\psi/dm$ on the absolutely continuous part is the spectral density that appears in response functions and in the local density of states. Reed and Simon warn (p. 231) that $\sigma_{\mathrm{sing}}$, the exotic middle case, need not be negligible: it can have positive Lebesgue measure.

**Duality of $L^p$ spaces.** The identification $(L^p)^* \cong L^q$ for $\sigma$-finite measures is proved from this theorem. Given a positive bounded functional $L$ on $L^p$, :cite[Reed and Simon]{work=reed-simon-1980 loc="Thm S.4, p. 350"} define $\nu(E) = L(\chi_E)$, verify countable additivity using monotone convergence, observe that $\mu(E) = 0$ makes $\chi_E$ the zero element of $L^p$ and hence $\nu(E) = 0$, and then invoke the Radon-Nikodym theorem to produce the representing function $g$ with $L(h) = \int hg\,d\mu$. The $q$-integrability of $g$ is then extracted from the boundedness of $L$. This is the main structural theorem about the spaces of :ref[]{to=measure.lp-spaces}, and the one that makes weak convergence and the direct method of variational calculus available.
:::
