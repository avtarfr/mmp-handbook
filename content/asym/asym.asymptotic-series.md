---
id: asym.asymptotic-series
title: Asymptotic series
kind: definition
level: core
summary: Defines the order symbols and Poincare's notion of an asymptotic expansion, shows that such an expansion determines its coefficients but not its function, says which operations on it are legitimate, and gives the optimal-truncation rule that makes a divergent series into a numerical method.
prereqs: [found.series-convergence-tests, found.power-series, found.termwise-operations]
provenance: adapted
sources:
  - work: arfken-2013
    loc: "§12.6 Asymptotic series, pp. 577-584: the worked integral $I(x,p)=\\int_x^\\infty u^{-p}e^{-u}du$ built by repeated integration by parts, Eq. (12.82), and the ratio test showing the resulting series diverges for every $x$, Eq. (12.83) (p. 579); the remainder estimate (12.84) and the word *semiconvergent* (pp. 579-580); the numerical demonstration that the partial sums of $e^xE_1(x)$ at $x=5$ bracket the answer and that going past the best term makes matters worse, Eqs. (12.85)-(12.87) and Fig. 12.2 (pp. 580-581); the Poincare definition, $s_n(x)=a_0+a_1/x+\\cdots+a_n/x^n$, $R_n=f-s_n$, and the two requirements (12.97) $\\lim_{x\\to\\infty}x^nR_n=0$ at fixed $n$ and (12.98) $\\lim_{n\\to\\infty}x^nR_n=\\infty$ at fixed $x$, with footnotes 4 and 5 (p. 583); the notation $f(x)\\sim\\sum a_nx^{-n}$, Eq. (12.99); and the four closing facts on p. 584 (products, term-by-term integration, term-by-term differentiation only under special conditions, uniqueness of the expansion of a function and non-uniqueness of the function behind an expansion), together with the remark that $e^x$ has no such expansion; the opening remark (p. 577) that the WKB expansion is an asymptotic series"
    pages: "577-584"
    role: the Poincare definition and the $\sim$ notation; the fact that the defining series normally diverges and is used only through its partial sums; the rules for combining, integrating and differentiating expansions; the uniqueness of the coefficients and the non-uniqueness of the function; the optimal-truncation practice
  - work: rhb-2006
    loc: "§25.7.3 Accuracy of the WKB solutions, pp. 902-903: the three numbered observations about series in inverse powers of the variable -- (i) a multiplier analytic at infinity gives a convergent series, (ii) otherwise the series eventually diverges and there is a variable-dependent optimal number of terms, (iii) at fixed $\\arg z$ the asymptotic expansion is unique, one expansion may represent more than one function, and one function may need different expansions in different sectors"
    pages: "902-903"
    role: the statement that the best accuracy is obtained at a variable-dependent optimal truncation, the uniqueness of the expansion at fixed phase, and the warning that the correspondence between function and expansion runs only one way
  - work: ahlfors-1979
    loc: "Ch. 5, §2.5, pp. 204-205: the remainder $J(z)$ of Stirling's formula is expanded as $J(z)\\sim B_1/(1\\cdot 2z)-B_2/(3\\cdot 4z^3)+\\cdots$, with the warnings that $J$ has no Laurent development, that the series obtained does not converge as the number of terms grows, and that what can be said is that $J_k(z)z^{2k}\\to 0$ as $z\\to\\infty$ for each fixed $k$ -- this property being what characterises an asymptotic development"
    pages: "204-205"
    role: the usage we follow, in which an asymptotic development is defined by the fixed-order limit alone and divergence is not part of the definition; the warning that such an expansion is not a Laurent series and that increasing the number of terms at fixed argument is not an improvement
---

:::definition[Order symbols]{provenance=original}
Let $f$ and $g$ be defined on a neighbourhood of a point $x_0$, which may be $+\infty$, and suppose $g$ does not vanish there. All three relations below are statements about the limit $x \to x_0$ and about nothing else; none of them says anything at a fixed $x$.

- $f(x) = O\bigl(g(x)\bigr)$ means that $|f/g|$ is bounded near $x_0$: there are $C$ and a neighbourhood on which $|f(x)| \le C|g(x)|$.
- $f(x) = o\bigl(g(x)\bigr)$ means $f(x)/g(x) \to 0$ as $x \to x_0$.
- $f(x) \sim g(x)$ means $f(x)/g(x) \to 1$ as $x \to x_0$; equivalently $f = g + o(g)$.

A sequence of functions $\varphi_0, \varphi_1, \varphi_2, \dots$, none vanishing near $x_0$, is an **asymptotic sequence** at $x_0$ if
$$
\varphi_{n+1}(x) \;=\; o\bigl(\varphi_n(x)\bigr) \qquad (x \to x_0) \quad\text{for every } n .
$$
The two cases used in this part of the handbook are $\varphi_n(x) = x^{-n}$ as $x \to +\infty$ and $\varphi_n(x) = (x - x_0)^{n}$ as $x \to x_0$. Each term of an asymptotic sequence is negligible beside the one before it, and that is the only ordering the symbol $\sim$ will ever rest on.
:::

:::definition[Poincare asymptotic expansion]{provenance=adapted src="arfken-2013:§12.6, Eqs. (12.95)-(12.99) and footnotes 4-5, p. 583; ahlfors-1979:Ch. 5, §2.5, p. 205"}
Let $f$ be defined for all large real $x$ and let $a_0, a_1, a_2, \dots$ be constants. Write
$$
s_N(x) \;=\; \sum_{n=0}^{N} \frac{a_n}{x^{n}} , \qquad R_N(x) \;=\; f(x) - s_N(x) .
$$
We say that $\sum_{n \ge 0} a_n x^{-n}$ is an **asymptotic expansion** of $f$ as $x \to +\infty$, and write
$$
f(x) \;\sim\; \sum_{n=0}^{\infty} \frac{a_n}{x^{n}} \qquad (x \to +\infty) ,
$$
when
$$
\lim_{x \to \infty} x^{N} R_N(x) \;=\; 0 \qquad \text{for each fixed } N . \tag{P}
$$
Equivalently: $R_N(x) = o(x^{-N})$ for each $N$, so the error made by stopping after the $x^{-N}$ term is smaller than the last term kept. The sign $\sim$ is not an equality. It is a statement about $x \to \infty$ at fixed $N$, and it carries no information at a fixed $x$.

**Divergence is normal and is not part of the definition.** Nothing in (P) asks the series $\sum a_n x^{-n}$ to converge, and for the expansions of interest it does not: the coefficients $a_n$ typically grow like $n!$, so the series diverges for every $x$. Arfken calls such a series *semiconvergent* :cite[]{work=arfken-2013 loc="p. 580"}.

**A conflict of definition, and which we follow.** Arfken's formal definition of an asymptotic series imposes (P) *and* a second requirement, that $x^{N}R_N(x) \to \infty$ as $N \to \infty$ at fixed $x$, which excludes convergent series of inverse powers :cite[]{work=arfken-2013 loc="Eqs. (12.97)-(12.98), p. 583"}; his own footnote records that some authors regard that exclusion as artificial. Ahlfors, characterising the remainder in Stirling's formula, uses the fixed-order limit alone :cite[]{work=ahlfors-1979 loc="p. 205"}. We follow Ahlfors: in this handbook (P) *is* the definition, a convergent inverse-power series is allowed to count as its own asymptotic expansion, and when divergence matters we say so. Readers taking a statement from Arfken should keep his extra clause in mind.

More generally, if $\{\varphi_n\}$ is an asymptotic sequence at $x_0$, then $f \sim \sum a_n\varphi_n$ means
$$
f(x) - \sum_{n=0}^{N} a_n\varphi_n(x) \;=\; o\bigl(\varphi_N(x)\bigr) \qquad (x \to x_0) \quad \text{for each } N .
$$
Expansions in half-integer powers, and expansions carrying a prefactor such as $e^{-x}$ or $e^{x f(t_0)}$, are of this kind; see :ref[]{to=asym.watson-lemma} and :ref[]{to=asym.laplace-method}.
:::

:::statement[What an asymptotic expansion does and does not determine]{provenance=adapted src="arfken-2013:§12.6, p. 584; rhb-2006:§25.7.3, point (iii), pp. 902-903"}
Let $f$ and $g$ be defined for all large $x$.

1. **(The coefficients are unique.)** If $f \sim \sum_{n\ge0} a_n x^{-n}$ and also $f \sim \sum_{n\ge0} b_n x^{-n}$ as $x \to +\infty$, then $a_n = b_n$ for every $n$. A function has at most one asymptotic power-series expansion.
2. **(The function is not.)** If $f \sim \sum_{n\ge0} a_n x^{-n}$ and $h(x) = o(x^{-N})$ for every $N$, then $f + h$ has the *same* expansion. In particular $f$ and $f + e^{-x}$ are indistinguishable at this level of description, so infinitely many functions share one expansion.
3. **(Existence can fail.)** Not every function has an asymptotic power series; Arfken's example is $e^{x}$.

Riley, Hobson and Bence make the same two-sided point for expansions in the complex plane: at a fixed value of $\arg z$ the expansion is unique, but one expansion can stand for more than one function, and one function can need different expansions in different sectors.
:::

:::idea{provenance=original}
Both halves of the uniqueness statement come from the same observation: condition (P) pins down each coefficient as a limit, and a limit cannot see anything that decays faster than every power. Taking $x \to \infty$ in $f \sim a_0 + a_1/x + \cdots$ gives $a_0 = \lim f$; subtracting $a_0$, multiplying by $x$ and taking the limit again gives $a_1$; and so on. That recursion determines the $a_n$ from $f$ alone, which is part 1. It also shows what the recursion is blind to: a function $h$ with $x^N h(x) \to 0$ for every $N$ contributes zero at every stage, which is part 2. Part 3 is the first step of the recursion failing, since $e^{x}$ has no finite limit.
:::

:::proof{provenance=original}
1. **The coefficients as limits.** Suppose $f \sim \sum a_n x^{-n}$. We show by induction on $N$ that
   $$
   a_N \;=\; \lim_{x \to \infty} x^{N}\Bigl( f(x) - \sum_{n=0}^{N-1} a_n x^{-n} \Bigr) ,
   $$
   the empty sum being $0$. For $N = 0$: condition (P) with $N = 0$ says $f(x) - a_0 \to 0$, so $a_0 = \lim f(x)$, which is the claim. For the step, assume the formula for $0, \dots, N-1$. Condition (P) at order $N$ says $x^{N}\bigl(f - s_N\bigr) \to 0$, that is
   $$
   x^{N}\Bigl( f(x) - \sum_{n=0}^{N-1}a_nx^{-n} \Bigr) \;-\; a_N \;\longrightarrow\; 0 ,
   $$
   which is the claim at order $N$. Each $a_N$ is therefore a limit computed from $f$ and the earlier coefficients, and the earlier coefficients are themselves so computed. If $\sum b_nx^{-n}$ is also an asymptotic expansion of $f$, the same limits produce the $b_n$; since a limit is unique, $b_n = a_n$ for all $n$ by induction. This is part 1.

2. **Adding an invisible function.** Let $h$ satisfy $x^{N}h(x) \to 0$ for every $N$. With $\tilde R_N = (f+h) - s_N = R_N + h$ we get $x^{N}\tilde R_N = x^{N}R_N + x^{N}h \to 0 + 0 = 0$ for each fixed $N$, so $f + h$ satisfies (P) with the same coefficients. The function $h(x) = e^{-x}$ qualifies, because $x^{N}e^{-x} \to 0$ for every $N$. This is part 2.

3. **A function with no expansion.** If $f \sim \sum a_nx^{-n}$ then by step 1 the number $a_0 = \lim_{x\to\infty}f(x)$ exists and is finite. Since $e^{x} \to \infty$, no such $a_0$ exists, so $e^{x}$ has no asymptotic power-series expansion at $+\infty$. This is part 3. $\square$
:::

:::statement[Operations on asymptotic expansions]{provenance=adapted src="arfken-2013:§12.6, p. 584"}
Let $f \sim \sum_{n\ge0} a_nx^{-n}$ and $g \sim \sum_{n\ge0} b_nx^{-n}$ as $x \to +\infty$.

1. **Linear combinations.** $\alpha f + \beta g \sim \sum_{n\ge0}(\alpha a_n + \beta b_n)x^{-n}$ for all constants $\alpha,\beta$.
2. **Products.** $fg \sim \sum_{n \ge 0} c_n x^{-n}$ with $c_n = \sum_{k=0}^{n} a_k b_{n-k}$: the Cauchy product of two asymptotic expansions is the asymptotic expansion of the product.
3. **Integration.** If in addition $a_0 = a_1 = 0$ and $f$ is locally integrable on $[x_1,\infty)$ for some $x_1$, then $\int_x^{\infty} f(t)\,dt$ converges for large $x$ and
   $$
   \int_x^{\infty} f(t)\,dt \;\sim\; \sum_{n \ge 2} \frac{a_n}{n-1}\, x^{-(n-1)} .
   $$
4. **Differentiation is not permitted.** From $f \sim \sum a_nx^{-n}$ one may *not* conclude $f' \sim -\sum n\,a_nx^{-n-1}$. Arfken states this: term-by-term differentiation holds only under special extra conditions. If it is known in advance that $f'$ has *some* asymptotic power-series expansion, then that expansion is the differentiated one.

Arfken states 2 and 3 without the proviso $a_0 = a_1 = 0$ in 3; we have added it because without it $\int_x^\infty f$ need not exist, and we prove the statement in the form given here.
:::

:::proof{provenance=original}
Throughout, $s_N$ and $t_N$ denote the partial sums of the two expansions and $R_N = f - s_N$, $S_N = g - t_N$, so $R_N(x) = o(x^{-N})$ and $S_N(x) = o(x^{-N})$ for each fixed $N$.

1. $(\alpha f + \beta g) - (\alpha s_N + \beta t_N) = \alpha R_N + \beta S_N = o(x^{-N})$, and $\alpha s_N + \beta t_N$ is the $N$-th partial sum of $\sum(\alpha a_n + \beta b_n)x^{-n}$.

2. Write $u_N(x) = \sum_{n=0}^{N}c_nx^{-n}$ with $c_n$ the Cauchy coefficients. Then
   $$
   fg - u_N \;=\; (s_N + R_N)(t_N + S_N) - u_N \;=\; (s_Nt_N - u_N) \;+\; s_NS_N + t_NR_N + R_NS_N .
   $$
   The product $s_Nt_N$ is a finite sum of terms $a_kb_lx^{-(k+l)}$ with $k,l \le N$; those with $k+l \le N$ assemble to exactly $u_N$, so $s_Nt_N - u_N$ is a finite sum of powers $x^{-m}$ with $m > N$, hence $O(x^{-N-1}) = o(x^{-N})$. Next, $s_N$ and $t_N$ are bounded for large $x$ (each tends to $a_0$, resp. $b_0$), so $s_NS_N = o(x^{-N})$ and $t_NR_N = o(x^{-N})$; and $R_NS_N = o(x^{-N})\,o(x^{-N}) = o(x^{-N})$. Adding the four pieces gives $fg - u_N = o(x^{-N})$.

3. Fix $N \ge 2$. Because $a_0 = a_1 = 0$, the partial sum is $s_N(t) = \sum_{n=2}^{N}a_nt^{-n}$, and $f(t) = s_N(t) + R_N(t)$ with $R_N(t) = o(t^{-N})$. In particular $f(t) = O(t^{-2})$ for large $t$, so $\int_x^{\infty}f$ converges absolutely. Integrating the partial sum exactly,
   $$
   \int_x^{\infty} s_N(t)\,dt \;=\; \sum_{n=2}^{N}\frac{a_n}{n-1}\,x^{-(n-1)} ,
   $$
   which is the $(N-1)$-st partial sum of the claimed expansion. For the remainder, let $\varepsilon > 0$ and choose $X$ with $|R_N(t)| \le \varepsilon t^{-N}$ for $t \ge X$ (possible since $R_N(t) = o(t^{-N})$ and $N \ge 2$). For $x \ge X$,
   $$
   \Bigl| \int_x^{\infty} R_N(t)\,dt \Bigr| \;\le\; \varepsilon \int_x^{\infty} t^{-N}dt \;=\; \frac{\varepsilon}{N-1}\,x^{-(N-1)} ,
   $$
   so $\int_x^{\infty}R_N = o\bigl(x^{-(N-1)}\bigr)$. Since $N \ge 2$ was arbitrary, every order of the claimed expansion is verified.

4. For the last sentence of part 4, suppose $f$ is continuously differentiable for large $x$ and $f' \sim \sum_{n\ge0}d_nx^{-n}$.
   - $d_0 = 0$: by step 1 applied to $f'$, $d_0 = \lim_{x\to\infty}f'(x)$. If $d_0 \ne 0$ then $f(x) = f(x_1) + \int_{x_1}^{x}f'$ grows like $d_0x$, contradicting $f(x) \to a_0$ finite.
   - $d_1 = 0$: with $d_0 = 0$, step 1 at order $1$ gives $xf'(x) \to d_1$. If $d_1 \ne 0$ then $f'(t) \sim d_1/t$, so $f(x) - f(x_1) = \int_{x_1}^{x}f'$ grows like $d_1\ln x$, again contradicting convergence of $f$.
   - Hence the expansion of $f'$ starts at order $2$, and part 3 applies to $f'$. Since $f(X) \to a_0$, $\int_x^{\infty}f'(t)\,dt = a_0 - f(x)$, so
     $$
     a_0 - f(x) \;\sim\; \sum_{n\ge2}\frac{d_n}{n-1}\,x^{-(n-1)} , \qquad\text{that is}\qquad f(x) \;\sim\; a_0 - \sum_{m\ge1}\frac{d_{m+1}}{m}\,x^{-m} .
     $$
     By the uniqueness of part 1, $a_m = -d_{m+1}/m$ for $m \ge 1$, that is $d_{m+1} = -m\,a_m$: the expansion of $f'$ is the term-by-term derivative of that of $f$.

   The counterexample showing that the hypothesis "$f'$ has an expansion" cannot be dropped is in the remark below. $\square$
:::

:::remark[Where the hypotheses are used, and the standing counterexamples]{provenance=original}
- **"For each fixed $N$" is the whole content of (P).** Every statement above is proved one order at a time, with $N$ frozen before $x$ is sent to infinity. Nothing is ever summed over $N$, and nothing may be: the series usually diverges.
- **Why differentiation fails.** Let $f(x) = e^{-x}\sin(e^{x})$. Since $|f(x)| \le e^{-x}$, part 2 of the uniqueness statement gives $f \sim \sum_{n\ge0} 0 \cdot x^{-n}$, the zero expansion. But
  $$
  f'(x) \;=\; -e^{-x}\sin(e^{x}) + \cos(e^{x}) ,
  $$
  which oscillates between $-1$ and $1$ for arbitrarily large $x$ and so does not tend to a limit. Thus $f'$ has no asymptotic power-series expansion at all, let alone the differentiated one. The hypothesis that fails is smallness of $f'$: an asymptotically negligible function may have a large derivative. This is why part 4 is stated conditionally.
- **Why $a_0 = a_1 = 0$ is needed for integration.** With $f(x) = 1/x$ we have $f \sim x^{-1}$, but $\int_x^{\infty}dt/t$ diverges. The expansion says nothing about convergence of the integral; that has to be imposed.
- **What the expansion cannot see.** Part 2 is not a defect to be repaired but a permanent feature. Exponentially small terms, such as $e^{-x}$ at $+\infty$ or $e^{-1/\varepsilon}$ as $\varepsilon \downarrow 0$, are invisible to every order of a power-series expansion, and two physical answers that differ by such a term have identical expansions. Arfken's footnote records that Poincare's definition "allows (or neglects)" exactly these terms, and that sharpening it matters for the theory in the complex plane :cite[]{work=arfken-2013 loc="footnote 4, p. 583"}. In the complex plane the same function may need different expansions in different sectors :cite[]{work=rhb-2006 loc="§25.7.3, point (iii), p. 902"}; the switching is the Stokes phenomenon, and :ref[]{to=asym.wkb-approximation} meets it.
- **An expansion is not a Laurent series.** Ahlfors warns against the confusion explicitly: the function whose expansion he computes is not even defined in a neighbourhood of infinity, so it has no Laurent development, and the formal series he writes does not converge :cite[]{work=ahlfors-1979 loc="p. 205"}. The resemblance of the two notations is an accident of writing powers of $1/x$.
:::

:::method[Optimal truncation: computing with a divergent series]{provenance=adapted src="arfken-2013:§12.6, pp. 579-581; rhb-2006:§25.7.3, point (ii), p. 902"}
Given $f \sim \sum_{n \ge 0} a_n x^{-n}$ and a fixed numerical value of $x$:

1. **Form the terms, not the sum.** Compute $u_n = a_n x^{-n}$ for $n = 0, 1, 2, \dots$ and tabulate $|u_n|$. For an expansion with $a_n$ growing like $n!$ the ratio $|u_{n+1}/u_n|$ grows linearly in $n$, so the terms fall, reach a minimum, and then rise without limit.
2. **Find the smallest term.** Let $n_\ast(x)$ be the index minimising $|u_n|$. Riley, Hobson and Bence make the point that $n_\ast$ depends on $x$: there is no "number of terms" attached to the series, only one attached to the series *and* the value of $x$.
3. **Stop just before it.** Take $s_{n_\ast - 1}(x)$ as the numerical value. Adding further terms makes the answer worse, as Arfken's table shows for $e^{x}E_1(x)$ at $x = 5$.
4. **Quote the error as the smallest term.** The achievable accuracy is of the order of $|u_{n_\ast}|$; for the expansions of this chapter that is roughly $e^{-cx}$ for some $c > 0$, so it improves rapidly with $x$ and cannot be improved at all at fixed $x$.
5. **Turn the rule into a theorem when you can.** The step above is a rule of thumb unless the remainder has been bounded. When the series alternates and one can prove $|R_N| \le |u_{N+1}|$ — the first omitted term — consecutive partial sums bracket the answer, and steps 3 and 4 become rigorous: the value lies between $s_{n_\ast-1}$ and $s_{n_\ast}$, and their half-difference is an honest error bar. This happens whenever the remainder is an integral of a function of one sign, as in the example below.
6. **If that is not accurate enough, change the problem, not the truncation.** Increase $x$ (for a sum, by evaluating more terms explicitly first and expanding only the tail; see :ref[]{to=asym.euler-maclaurin}), or find an expansion in a different variable. Never add more terms.
:::

:::example[The Gaussian tail at three standard deviations]{provenance=original}
Let
$$
Q(x) \;=\; \int_x^{\infty} e^{-t^{2}/2}\,dt \qquad (x > 0) ,
$$
the unnormalised upper tail of a standard Gaussian. We build its asymptotic expansion, with a rigorous remainder, and then run the optimal-truncation rule at $x = 3$.

**Step 1: integrate by parts, keeping the remainder exact.** Write $e^{-t^{2}/2} = t^{-1}\cdot t e^{-t^{2}/2}$ and note $\frac{d}{dt}\bigl(-e^{-t^{2}/2}\bigr) = te^{-t^{2}/2}$. Then
$$
Q(x) \;=\; \Bigl[-\tfrac{1}{t}e^{-t^{2}/2}\Bigr]_x^{\infty} - \int_x^{\infty} \frac{e^{-t^{2}/2}}{t^{2}}\,dt \;=\; \frac{e^{-x^{2}/2}}{x} - \int_x^{\infty} t^{-2}e^{-t^{2}/2}\,dt .
$$
The same manoeuvre on $\int_x^\infty t^{-2k}e^{-t^2/2}dt$ gives $x^{-2k-1}e^{-x^{2}/2} - (2k+1)\int_x^{\infty}t^{-2k-2}e^{-t^{2}/2}dt$. Iterating $N$ times,
$$
Q(x) \;=\; e^{-x^{2}/2}\sum_{n=0}^{N-1} \frac{(-1)^{n}(2n-1)!!}{x^{2n+1}} \;+\; R_N(x) ,
\qquad
R_N(x) = (-1)^{N}(2N-1)!!\int_x^{\infty} \frac{e^{-t^{2}/2}}{t^{2N}}\,dt ,
$$
with $(-1)!! = 1$ and $(2n-1)!! = 1\cdot3\cdots(2n-1)$.

**Step 2: bound the remainder by the first omitted term.** Split off one power of $t$ and use $t^{-2N-1} \le x^{-2N-1}$, valid for every $t \ge x$:
$$
\frac{1}{t^{2N}} \;=\; \frac{1}{t^{2N+1}}\cdot t \;\le\; \frac{t}{x^{2N+1}} \qquad (t \ge x) ,
$$
so that
$$
|R_N(x)| \;\le\; (2N-1)!!\,x^{-2N-1}\int_x^{\infty} t\,e^{-t^{2}/2}\,dt \;=\; (2N-1)!!\,\frac{e^{-x^{2}/2}}{x^{2N+1}} .
$$
The right-hand side is exactly the magnitude of the first omitted term. Two consequences: $R_N(x) = O(x^{-2N-1}e^{-x^2/2})$, so the series is an asymptotic expansion of $e^{x^{2}/2}Q(x)$ in the sense of (P) (in the asymptotic sequence $\varphi_n = x^{-2n-1}$); and, the remainder alternating in sign with $N$, consecutive partial sums bracket the answer, so step 5 of the method applies.

**Step 3: run the truncation rule at $x = 3$.** The terms are $u_n = (2n-1)!!/3^{2n+1}$, with $|u_{n+1}/u_n| = (2n+1)/9$. This is below $1$ for $n \le 3$ and equals $1$ at $n = 4$, so the terms fall until $n = 4$, where $u_4$ and $u_5$ tie, and rise afterwards: $n_\ast = 4$. Writing $P_N = e^{-9/2}\sum_{n<N}(-1)^nu_n$ for the partial sums and comparing with the value $Q(3) = 0.00338369257$ obtained by quadrature:

| $N$ | first omitted term $e^{-9/2}u_N$ | $P_N$ | $P_N - Q(3)$ |
|---|---|---|---|
| $1$ | $4.11\times10^{-4}$ | $0.003702999$ | $+3.19\times10^{-4}$ |
| $2$ | $1.37\times10^{-4}$ | $0.003291555$ | $-9.21\times10^{-5}$ |
| $3$ | $7.62\times10^{-5}$ | $0.003428703$ | $+4.50\times10^{-5}$ |
| $4$ | $5.93\times10^{-5}$ | $0.003352509$ | $-3.12\times10^{-5}$ |
| $5$ | $5.93\times10^{-5}$ | $0.003411771$ | $+2.81\times10^{-5}$ |
| $6$ | $7.24\times10^{-5}$ | $0.003352509$ | $-3.12\times10^{-5}$ |
| $7$ | $1.05\times10^{-4}$ | $0.003424940$ | $+4.12\times10^{-5}$ |
| $8$ | $1.74\times10^{-4}$ | $0.003320318$ | $-6.34\times10^{-5}$ |

Every entry obeys the bracketing: the errors alternate in sign and are smaller in magnitude than the corresponding first omitted term. The best values are $P_4$ and $P_5$, and the rule of step 5 returns
$$
Q(3) \;\in\; [\,0.0033525,\ 0.0034118\,] , \qquad \text{midpoint } 0.0033821 ,
$$
against the true $0.0033837$: a relative error of $4.6\times10^{-4}$ from five terms of a series that diverges. From $N = 6$ on the partial sums move away again, exactly as step 3 predicts.

**Step 4: the same rule at $x = 6$.** Now $|u_{n+1}/u_n| = (2n+1)/36$, so the terms fall until $n_\ast = 18$ and the attainable accuracy is far higher. Truncating at $N = 18$ gives $Q(6) = 2.473008486\times10^{-9}$ with a relative error of $1.1\times10^{-8}$ — about eight correct figures. The lesson of the two tables together is the one the definition insists on: the quality of an asymptotic expansion is a statement about $x$, not about the number of terms.
:::

:::application[Tail probabilities, and the expansions of this part of the handbook]{provenance=original}
**Exceedance probabilities.** If $X$ is standard normal, $\Pr(X > x) = Q(x)/\sqrt{2\pi}$. Engineering and climate work routinely needs this at $x$ between $3$ and $6$ — a design wave height, a $5\sigma$ detection threshold, a once-in-a-century return level — where the convergent Taylor series $\int_0^x e^{-t^2/2}dt = \sum_n (-1)^n x^{2n+1}/\bigl(2^n n!(2n+1)\bigr)$ is numerically hopeless -- at $x = 6$ its largest term is $1.06\times10^{6}$ and the answer it must produce after cancellation is $2.5\times10^{-9}$, fifteen digits down -- while the expansion above is immediate. The five-term estimate of the example gives $\Pr(X>3) \approx 0.0033821/\sqrt{2\pi} = 1.3493\times10^{-3}$ against the true $1.3499\times10^{-3}$, and the eighteen-term estimate at $x=6$ gives $\Pr(X>6) = 9.86588\times10^{-10}$, correct to the figures shown. The same series is the standard large-argument representation of the complementary error function; see :ref[]{to=spec.error-function} and :ref[]{to=asym.watson-lemma}, where it is derived again in one line.

**Where else these series come from.** Almost every closed-form answer a physicist uses in a limiting regime is an asymptotic expansion in this sense and not a convergent one:

- the large-argument forms of the Bessel, Airy and Hankel functions, obtained from their integral representations (:ref[]{to=spec.bessel-asymptotics});
- Stirling's series for $\Gamma$, whose terms eventually grow (:ref[]{to=asym.stirling-formula});
- the WKB expansion of quantum mechanics, which Arfken names as the standard example at the opening of his treatment :cite[]{work=arfken-2013 loc="§12.6, p. 577"} (:ref[]{to=asym.wkb-approximation});
- perturbation series in a small coupling, where divergence is generic rather than exceptional (:ref[]{to=asym.regular-perturbation}).

In all of these the practical questions are the ones this unit answers: how many terms to keep, what error to quote, and what the series cannot tell you however many terms are computed.
:::
