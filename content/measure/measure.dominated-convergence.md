---
id: measure.dominated-convergence
title: Dominated convergence
kind: theorem
level: core
summary: If a sequence of measurable functions converges almost everywhere and is held under one fixed integrable envelope, the limit is integrable and the integrals converge — indeed in the $L^1$ norm — and the same envelope condition licenses taking a limit, or a derivative in a parameter, inside an integral.
prereqs: [measure.monotone-convergence-fatou]
provenance: adapted
sources:
  - work: folland-1999
    loc: "§2.3, pp. 54–56: Thm 2.24 (the dominated convergence theorem) with its proof applying Fatou's lemma to $g \\pm f_n$; the paragraph on p. 54 describing the hypothesis as confining the graphs of $|f_n|$ to a region of finite area; Thm 2.25 (a series with $\\sum \\int |f_j| < \\infty$ converges a.e. in $L^1$ and may be integrated term by term); Thm 2.27 (a) and (b), continuity and differentiation under the integral sign, with their proofs and the remark that the estimates need only hold on compact subintervals; Exercises 20 and 21, p. 59"
    pages: "54-56, 59"
    role: the statement and proof route of the main theorem; the series corollary; the parameter-dependent continuity and differentiation theorems with their exact hypotheses and proofs; the generalised form with a varying dominating function and the criterion $\\int |f_n| \\to \\int |f|$
  - work: reed-simon-1980
    loc: "§1.3, p. 17: Thm 1.11 (dominated convergence theorem), stated with $f_n(p) \\to f(p)$ for each $p$ and $|f_n(p)| \\le G(p)$ for a fixed $G \\in \\mathcal{L}^1$, and concluding $f \\in \\mathcal{L}^1$ and $\\int |f(p) - f_n(p)|\\,dp \\to 0$; the counterexample $f_n = n^{-1}\\mathbf{1}_{(-n,n)}$ with $\\int |f_n| = 2$ and $\\sup_n |f_n| \\notin \\mathcal{L}^1$; Thm 1.12 (Riesz–Fischer) and its proof, p. 18, where monotone and dominated convergence are used in turn"
    pages: "17-18"
    role: the $L^1$-norm form of the conclusion; the counterexample in which the dominating candidate just fails to be integrable; the use of the theorem to prove completeness of $L^1$
  - work: stakgold-holst-2011
    loc: "§0.7, p. 45: the Lebesgue dominated convergence theorem on $[a,b]$, with $|s_n(x)| \\le f(x)$ required only for all sufficiently large $n$ and convergence only almost everywhere, and the remark that integrability of the limit is a conclusion rather than a hypothesis; the worked application to the sequence $s_n(x) = n^a x e^{-nx}$ of Eq. (0.6.2), with the bound $s_n(x) \\le x^{1-a}$ valid for $a < e$ and the conclusion $\\int_0^1 s_n \\to 0$ for $a < 2$; §0.6, pp. 37–39: Eq. (0.6.1) $s_n(x) = nxe^{-nx}$ on $0 < x \\le 1$, whose bump has the fixed height $1/e$ at $x = 1/n$, Thm 0.6.2 (uniform convergence on a *bounded* interval permits termwise integration), and the remark that boundedness is needed there, with the counterexample $s_n(x) = n^{-1}f(x/n)$ on $[0,\\infty)$; §0.7, p. 46, Thm 0.7.1, the $\\mathbb{R}^n$ form"
    pages: "37-39, 45-46"
    role: the comparison with the uniform-convergence theorem it replaces, including that theorem's own hypotheses and its failure on an unbounded interval; a sequence that converges pointwise but not uniformly and to which dominated convergence applies; the observation that integrability of the limit comes free; a model for the worked use of a dominating function
  - work: evans-2010
    loc: "Appendix E.3, p. 687, Thm 5 (dominated convergence theorem): $f_k$ integrable, $f_k \\to f$ a.e., $|f_k| \\le g$ a.e. for a summable $g$, conclusion $\\int f_k \\to \\int f$; the definitions of integrable and summable, p. 686"
    pages: "686-687"
    role: the statement in the vocabulary that reserves 'summable' for a finite integral, and the a.e. form of both hypotheses
  - work: grimmett-stirzaker-2020
    loc: "§5.6(B), p. 201, item (12)(b) (dominated convergence for expectations, with $|X_n| \\le Y$ and $\\mathbb{E}|Y| < \\infty$) and item (12)(c) (bounded convergence, the special case $Y$ constant), together with the remark that pointwise convergence and the bound need only hold outside a null event"
    pages: "201"
    role: the probabilistic statement and the bounded-convergence special case, which is the form used on a probability space
---

:::statement[Dominated convergence theorem]{provenance=adapted src="folland-1999:§2.3, Thm 2.24, p. 54; evans-2010:App. E.3, Thm 5, p. 687; reed-simon-1980:§1.3, Thm 1.11, p. 17"}
Let $(X,\Sigma,\mu)$ be a measure space and let $(f_n)_{n \ge 1}$ be a sequence in $L^{1}(\mu)$, real- or complex-valued, such that

- **(a)** $f_n \to f$ almost everywhere, and
- **(b)** there is a single non-negative $g \in L^{1}(\mu)$, independent of $n$, with $\lvert f_n \rvert \le g$ almost everywhere, for every $n$.

Then $f \in L^{1}(\mu)$ and

$$
\int f \, d\mu \;=\; \lim_{n \to \infty} \int f_n \, d\mu .
$$

Moreover the convergence holds in the $L^{1}$ norm:

$$
\lVert f_n - f \rVert_{1} = \int \lvert f_n - f \rvert \, d\mu \;\longrightarrow\; 0 ,
$$

which is the form in which :cite[Reed and Simon]{work=reed-simon-1980 loc="§1.3, Thm 1.11, p. 17"} state the conclusion. Integrability of the limit is part of the conclusion, not a hypothesis, a point :cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="§0.7, p. 45"} emphasise. Read literally, "$f \in L^{1}(\mu)$" asserts in particular that $f$ is measurable, and that does not follow from (a) alone when $\mu$ is not complete, since (a) leaves $f$ free on a null set; as in :cite[Folland]{work=folland-1999 loc="§2.3, Thm 2.24 and its proof, pp. 54–55"}, the conclusion is to be read in the $L^{1}$ of a.e.-defined equivalence classes set up in :ref[]{to=measure.lebesgue-integral}, where $f$ is identified with the measurable function it equals almost everywhere. Step 0 of the proof says this precisely.

**Bounded convergence.** If $\mu(X) < \infty$ and $\lvert f_n \rvert \le c$ a.e. for a constant $c$, condition (b) holds with $g \equiv c$, whose integral is $c\,\mu(X) < \infty$. On a probability space this is :cite[Grimmett and Stirzaker's]{work=grimmett-stirzaker-2020 loc="§5.6(B), item (12)(c), p. 201"} bounded convergence theorem: $X_n \to X$ a.s. and $\lvert X_n \rvert \le c$ a.s. give $\mathbb{E}(X_n) \to \mathbb{E}(X)$.
:::

:::statement[Termwise integration of an absolutely summable series]{provenance=adapted src="folland-1999:§2.3, Thm 2.25, p. 55"}
Let $(f_j)_{j \ge 1} \subset L^{1}(\mu)$ satisfy $\sum_{j \ge 1} \int \lvert f_j \rvert \, d\mu < \infty$. Then $\sum_{j \ge 1} f_j$ converges almost everywhere, its sum is in $L^{1}(\mu)$, and

$$
\int \sum_{j \ge 1} f_j \, d\mu \;=\; \sum_{j \ge 1} \int f_j \, d\mu .
$$

This is the signed counterpart of the non-negative termwise theorem of :ref[]{to=measure.monotone-convergence-fatou}: there, no hypothesis at all; here, absolute summability of the integrals.
:::

:::statement[Limits and derivatives in a parameter]{provenance=adapted src="folland-1999:§2.3, Thm 2.27 and the paragraph following it, p. 56"}
Let $-\infty < a < b < \infty$, let $f : X \times [a,b] \to \mathbb{C}$ be such that $f(\cdot, t) \in L^{1}(\mu)$ for each $t$, and set

$$
F(t) = \int_{X} f(x,t) \, d\mu(x) .
$$

1. **Continuity.** Suppose there is $g \in L^{1}(\mu)$ with $\lvert f(x,t) \rvert \le g(x)$ for all $x$ and all $t$. If $\lim_{t \to t_0} f(x,t) = f(x,t_0)$ for every $x$, then $\lim_{t\to t_0} F(t) = F(t_0)$. In particular, should every map $t \mapsto f(x,t)$ be continuous, $F$ inherits continuity throughout $[a,b]$.
2. **Differentiation.** Suppose $\partial f/\partial t$ exists at every point of $X \times [a,b]$ and there is $g \in L^{1}(\mu)$ with $\lvert (\partial f/\partial t)(x,t)\rvert \le g(x)$ for all $x$ and all $t$. Then $F$ is differentiable at every $t \in [a,b]$ — one-sidedly at $t = a$ and $t = b$, where the difference quotient is only defined from inside the interval, and $\partial f/\partial t$ is likewise a one-sided derivative there — and
   $$
   F'(t) \;=\; \int_{X} \frac{\partial f}{\partial t}(x,t) \, d\mu(x) .
   $$

The interval $[a,b]$ may be a compact subinterval of a larger interval $I$ on which $f(x,\cdot)$ is defined. If the hypotheses hold on every compact $[a,b] \subset I$, with a dominating function allowed to depend on $a$ and $b$, then $F$ is continuous, respectively differentiable, on all of $I$, continuity and differentiability being local properties. Compare :ref[]{to=found.differentiation-under-integral}, which asks for joint continuity of $f$ and $\partial f/\partial t$ on a product with a compact interval and needs no dominating function.
:::

:::idea{provenance=original}
Only one inequality is available for an arbitrary sequence of non-negative integrands, Fatou's lemma, and it points one way: the integral of the limit is at most the lower limit of the integrals. To get an equality out of a one-sided tool, apply it twice, to two different non-negative sequences built from the same data. The envelope $g$ is exactly what makes this possible: $g + f_n \ge 0$ and $g - f_n \ge 0$, so Fatou applies to both. Applied to $g + f_n$ it bounds $\int f$ *above* by $\liminf_n \int f_n$; applied to $g - f_n$, where the minus sign turns the $\liminf$ on the right into $-\limsup$, it bounds $\int f$ *below* by $\limsup_n \int f_n$. Since always $\liminf \le \limsup$, the chain $\int f \le \liminf_n \int f_n \le \limsup_n \int f_n \le \int f$ closes on itself, every inequality in it is an equality, and the limit exists.

:cite[Folland]{work=folland-1999 loc="§2.3, p. 54"} describes the hypothesis geometrically: the graphs of all the $\lvert f_n \rvert$ are confined to one region of finite area, so the area cannot leak away to infinity as it does for $\mathbf{1}_{(n,n+1)}$ or climb out of sight as it does for $n\mathbf{1}_{(0,1/n)}$. The $L^{1}$-norm form of the conclusion comes free: $\lvert f_n - f \rvert \to 0$ a.e. and is dominated by $2g$, so the theorem applies to that sequence too.
:::

:::proof[Dominated convergence]{provenance=adapted src="folland-1999:§2.3, proof of Thm 2.24, p. 55"}
**Step 0: dispose of the null sets and of the complex case.** The hypotheses hold off a countable union of null sets, which is null; call its union $Z$ and let $\tilde f_n = f_n \mathbf{1}_{X \setminus Z}$, $\tilde g = g\mathbf{1}_{X\setminus Z}$ and $\tilde f = \lim_n \tilde f_n$, the limit now existing at every point. Redefining a function on a null set changes no integral (:ref[]{to=measure.lebesgue-integral}), so $\int \tilde f_n = \int f_n$ and $\int \tilde g = \int g$, while $\tilde f$ is measurable as a pointwise limit of measurable functions (:ref[]{to=measure.measurable-functions}) and $\tilde f = f$ off $Z$.

Here is the one place where a care is needed that the statement hides. On the exceptional set $Z$ the hypotheses say nothing about $f$, so $f$ itself need not be measurable unless $\mu$ is complete: what the argument produces is a measurable $\tilde f$ agreeing with $f$ almost everywhere. That is exactly enough, because $L^{1}(\mu)$ was redefined in :ref[]{to=measure.lebesgue-integral} as a space of equivalence classes of a.e.-defined functions, in which $f$ and $\tilde f$ are the same element; and it is how :cite[Folland]{work=folland-1999 loc="§2.3, proof of Thm 2.24, p. 55"} reads his own conclusion: he allows $f$ to be altered on a null set before calling it measurable, and appeals to the completion of $\mu$ to do so. We work with $\tilde f$ and drop the tildes. Since $\lvert \tilde f \rvert = \lim_n \lvert \tilde f_n \rvert \le \tilde g$ and $\tilde g$ is integrable, $\tilde f \in L^{1}(\mu)$ — this is the first of the two uses of $g$, and it is what makes every integral below finite. Finally, $\lvert \operatorname{Re} h \rvert \le \lvert h \rvert$ and $\lvert \operatorname{Im} h\rvert \le \lvert h \rvert$, so the complex case follows from the real one applied to real and imaginary parts; assume from here that all functions are real-valued.

**Step 1: two non-negative sequences.** By (b), $g + f_n \ge 0$ and $g - f_n \ge 0$ pointwise, and both are measurable. This is the second and essential use of $g$: Fatou's lemma (:ref[]{to=measure.monotone-convergence-fatou}) needs non-negative integrands, and nothing in the data is non-negative until $g$ is added.

**Step 2: Fatou on $g + f_n$.** Since $g + f_n \to g + f$ pointwise, $\liminf_n (g+f_n) = g+f$, and Fatou gives $\int (g+f) \le \liminf_n \int (g + f_n)$. All the integrals are finite, so linearity on $L^{1}$ lets us cancel the common $\int g$:

$$
\int g + \int f \;\le\; \int g + \liminf_{n} \int f_n
\qquad\Longrightarrow\qquad
\int f \;\le\; \liminf_{n} \int f_n ,
$$

using $\liminf_n (c + a_n) = c + \liminf_n a_n$ for a finite constant $c$.

**Step 3: Fatou on $g - f_n$.** Likewise $\int (g - f) \le \liminf_n \int (g - f_n)$. Now $\liminf_n(-a_n) = -\limsup_n a_n$, so the right-hand side is $\int g - \limsup_n \int f_n$, and cancelling $\int g$ again gives

$$
-\int f \;\le\; -\limsup_{n} \int f_n
\qquad\Longrightarrow\qquad
\limsup_{n} \int f_n \;\le\; \int f .
$$

**Step 4: squeeze.** Combining steps 2 and 3 with the general inequality $\liminf \le \limsup$,

$$
\int f \;\le\; \liminf_{n} \int f_n \;\le\; \limsup_{n} \int f_n \;\le\; \int f ,
$$

so all four quantities are equal; in particular $\lim_n \int f_n$ exists and equals $\int f$.

**Step 5: convergence in $L^{1}$.** Apply steps 0–4 to the sequence $h_n = \lvert f_n - f \rvert$. It is measurable and non-negative, $h_n \to 0$ a.e. by (a), and $h_n \le \lvert f_n \rvert + \lvert f \rvert \le 2g$ a.e., with $2g$ integrable. The theorem just proved gives $\int h_n \to \int 0 = 0$, which is $\lVert f_n - f\rVert_1 \to 0$. The first conclusion follows from this one as well, since $\lvert \int f_n - \int f \rvert \le \int \lvert f_n - f\rvert$. $\square$
:::

:::proof[The series corollary and the parameter theorems]{provenance=adapted src="folland-1999:§2.3, proofs of Thm 2.25, p. 55 and Thm 2.27, p. 56"}
**Series.** Put $G = \sum_{j \ge 1} \lvert f_j \rvert$, a pointwise sum of non-negative measurable functions. The termwise theorem for non-negative integrands (:ref[]{to=measure.monotone-convergence-fatou}) gives $\int G = \sum_j \int \lvert f_j \rvert < \infty$ by hypothesis, so $G \in L^{1}(\mu)$ and therefore $G < \infty$ almost everywhere — if $\mu(\{G = \infty\}) > 0$ then $\int G = \infty$. At each point where $G(x) < \infty$ the series $\sum_j f_j(x)$ is absolutely convergent, hence convergent. Let $S_N = \sum_{j \le N} f_j$ be the partial sums. Then $S_N \to \sum_j f_j$ a.e., and $\lvert S_N \rvert \le \sum_{j \le N}\lvert f_j\rvert \le G$ for every $N$, so $G$ is a dominating function. Dominated convergence applied to $(S_N)_N$ gives both that the sum is in $L^{1}$ and that $\int \sum_j f_j = \lim_N \int S_N = \lim_N \sum_{j\le N} \int f_j = \sum_j \int f_j$, the middle equality by linearity on $L^{1}$.

**Continuity in the parameter.** Dominated convergence speaks about sequences, so convert: $\lim_{t \to t_0}F(t) = F(t_0)$ holds if and only if $F(t_n) \to F(t_0)$ for *every* sequence $t_n \to t_0$ in $[a,b]$. Fix such a sequence and set $f_n(x) = f(x,t_n)$. Then $f_n \to f(\cdot, t_0)$ pointwise by the hypothesis on $f(x,\cdot)$, and $\lvert f_n \rvert \le g$ for every $n$ by hypothesis. Dominated convergence gives $F(t_n) = \int f_n \to \int f(\cdot,t_0) = F(t_0)$. As the sequence was arbitrary, $F$ is continuous at $t_0$.

**Differentiation in the parameter.** Fix $t_0 \in [a,b]$ and a sequence $t_n \to t_0$ with $t_n \ne t_0$, and set

$$
h_n(x) = \frac{f(x,t_n) - f(x,t_0)}{t_n - t_0} .
$$

- *Pointwise limit.* By hypothesis $\partial f/\partial t$ exists everywhere, so $h_n(x) \to (\partial f/\partial t)(x,t_0)$ for every $x$. In particular $\partial f/\partial t\,(\cdot, t_0)$ is measurable, being a pointwise limit of measurable functions.
- *Domination.* Each $h_n$ is a difference quotient of $t \mapsto f(x,t)$, which is differentiable on $[a,b]$. For real-valued $f$ the mean value theorem on the interval between $t_0$ and $t_n$ gives $\lvert h_n(x)\rvert \le \sup_{t\in[a,b]} \lvert(\partial f/\partial t)(x,t)\rvert \le g(x)$ directly, which is the bound :cite[Folland]{work=folland-1999 loc="§2.3, proof of Thm 2.27b, p. 56"} writes. For complex-valued $f$ the mean value theorem has to be applied to the real and the imaginary part separately, and the two intermediate points differ, so what it yields is $\lvert h_n(x)\rvert \le \lvert \operatorname{Re} h_n(x)\rvert + \lvert \operatorname{Im} h_n(x)\rvert \le 2 g(x)$. Nothing is lost: $2g \in L^{1}(\mu)$ as well, and $2g$ is all the next bullet needs. Either way the hypothesis is used as stated: the bound on the *derivative* must be uniform in $t$, and it is the derivative, not $f$ itself, that has to be dominated.
- *Conclusion.* Dominated convergence applied to $(h_n)$, with envelope $2g$, gives
  $$
  \frac{F(t_n) - F(t_0)}{t_n - t_0} = \int h_n \, d\mu \;\longrightarrow\; \int \frac{\partial f}{\partial t}(x,t_0)\, d\mu(x) .
  $$
  The sequence $t_n \to t_0$ was arbitrary, so the difference quotient of $F$ has that limit, which is the claim. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
- **The envelope is used three times.** In step 0 it puts $f$ in $L^{1}$; in step 1 it makes the two sequences non-negative, so that Fatou's lemma applies at all; and in steps 2 and 3 the quantity $\int g$ appears on both sides of each inequality and is cancelled, which is legitimate only because $\int g < \infty$. That last use is easy to overlook and is where integrability of $g$, as opposed to mere domination, earns its keep: with $\int g = \infty$ the cancellation would be an $\infty - \infty$. All three uses need $g$ to be the *same* function for every $n$.
- **An envelope that is not integrable is no envelope.** The pointwise supremum $\sup_n \lvert f_n \rvert$ always dominates; the content of (b) is that *some* dominating function is integrable. :cite[Reed and Simon]{work=reed-simon-1980 loc="§1.3, p. 17"} give $f_n = n^{-1}\mathbf{1}_{(-n,n)}$ on $\mathbb{R}$: here $f_n \to 0$ at every point, uniformly in fact, yet $\int \lvert f_n \rvert = 2$ for every $n$, so $\int f_n \to 2 \ne 0$. The smallest envelope is $\sup_n \lvert f_n\rvert(x) = 1/(\lfloor \lvert x\rvert\rfloor + 1)$ — the supremum is over those $n$ with $n > \lvert x \rvert$, and the smallest such $n$ is $\lfloor \lvert x\rvert\rfloor + 1$ — which decays like $1/\lvert x\rvert$ and so is not integrable. The complementary failure is $n\,\mathbf{1}_{(0,1/n)}$, whose smallest envelope behaves like $1/x$ near $0$.
- **Uniform convergence is neither necessary nor sufficient.** The theorem it is measured against is :cite[Stakgold and Holst's]{work=stakgold-holst-2011 loc="§0.6, Thm 0.6.2, p. 38"} Thm 0.6.2: if $s_n \to s$ uniformly on a *bounded* interval $E$ and all the functions are integrable there, then $\int_E s_n \to \int_E s$. *Not sufficient*, because the boundedness of $E$ cannot be dropped: the example just given converges uniformly on $\mathbb{R}$ and the conclusion fails, and :cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="§0.6, p. 39"} make the same point with $s_n(x) = n^{-1}f(x/n)$ on $[0,\infty)$, which tends to $0$ uniformly while $\int_0^\infty s_n = \int_0^\infty f = 1$ for every $n$. *Not necessary*, because on a bounded interval domination is weaker than uniformity: their own $s_n(x) = nxe^{-nx}$ on $(0,1]$ (Eq. (0.6.1), p. 37) has a bump of the fixed height $1/e$ at $x = 1/n$, so it converges to $0$ pointwise but not uniformly, yet $\lvert s_n\rvert \le 1/e$ there and the constant $1/e$ is integrable on a set of measure $1$ — dominated convergence applies and gives $\int_0^1 s_n \, dx \to 0$, as the exact value $n^{-1}\bigl(1 - (1+n)e^{-n}\bigr)$ confirms ($0.2642$, $0.1919$, $0.0500$, $0.0100$ at $n = 1, 5, 20, 100$). :cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="§0.7, p. 45"} sum up the comparison: against the uniform-convergence theorem it replaces, dominated convergence needs only pointwise convergence, only almost everywhere, on a possibly unbounded interval, and it delivers integrability of the limit instead of assuming it.
- **"Almost everywhere" is enough in both hypotheses**, since a countable union of null sets is null; this is the weakening :cite[Grimmett and Stirzaker]{work=grimmett-stirzaker-2020 loc="§5.6(B), item (12), p. 201"} record for the probabilistic form. :cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="§0.7, p. 45"} relax (b) further to "for all sufficiently large $n$", which costs nothing: changing finitely many terms of a sequence changes neither its limit nor the limit of its integrals.
- **The envelope may be allowed to move.** :cite[Folland]{work=folland-1999 loc="§2.3, Exercise 20, p. 59"} records a generalised form: if $f_n \to f$ and $g_n \to g$ a.e. with $\lvert f_n \rvert \le g_n$, all in $L^{1}$, and if $\int g_n \to \int g$, then $\int f_n \to \int f$. The fixed-$g$ statement is the case $g_n = g$. :cite[Folland's Exercise 21]{work=folland-1999 loc="§2.3, p. 59"} adds the sharp criterion for $L^{1}$ convergence: for $f_n, f \in L^{1}$ with $f_n \to f$ a.e., $\lVert f_n - f\rVert_1 \to 0$ holds **iff** $\int \lvert f_n \rvert \to \int \lvert f \rvert$ — so no envelope is needed at all if the norms are known to converge.
- **The parameter theorems need the bound uniformly in $t$, and on the right function.** In part 1 it is $f$ that is dominated; in part 2 it is $\partial f/\partial t$, and no bound on $f$ itself is required beyond $f(\cdot,t) \in L^{1}$. Dropping uniformity in $t$ breaks the mean value theorem step. The restriction to a compact $[a,b]$ is what allows the supremum over $t$ to be finite in practice; as the statement notes, a dominating function depending on $[a,b]$ suffices because differentiability is local.
- **The sequential device is not optional.** Dominated convergence is a statement about sequences, so both parameter theorems are proved along arbitrary sequences $t_n \to t_0$ and then invoke the sequential characterisation of a limit of a function of a real variable. :cite[Folland]{work=folland-1999 loc="§2.3, p. 56"} notes that one afterwards writes "let $t \to t_0$" with this understood.
- **It is dominated convergence that makes $L^{1}$ complete.** In :cite[Reed and Simon's]{work=reed-simon-1980 loc="§1.3, Thm 1.12, p. 18"} proof of the Riesz–Fischer theorem, monotone convergence puts the telescoping series $\sum_k \lvert f_k - f_{k+1}\rvert$ of a rapidly Cauchy subsequence into $L^{1}$, and dominated convergence then converts the resulting pointwise a.e. limit into an $L^{1}$ limit. See :ref[]{to=measure.lp-spaces}.
:::

:::method[Taking a limit or a derivative inside an integral]{provenance=original}
1. **Identify the pointwise limit** of the integrand for each fixed $x$, allowing a null set of exceptions. If it does not exist a.e., stop; no version of the theorem applies.
2. **Hunt for an envelope.** Find one function $g(x)$, free of $n$ (or of the parameter $t$), with $\lvert f_n(x)\rvert \le g(x)$ a.e. Standard supplies: $\lvert \sin u \rvert \le \min(1, \lvert u\rvert)$; $(1+u)^{-1} \le 1$; $\lvert e^{iu}\rvert = 1$; $u^{k}e^{-u} \le C_k e^{-u/2}$ on $[0,\infty)$; and, when the sequence is monotone, $g = \lim_n \lvert f_n \rvert$ itself.
3. **Verify $\int g < \infty$.** This is the step that actually does work, and the step most often skipped. A bound such as $g(x) = 1$ on $\mathbb{R}$, or $g(x) = 1/x$ near $0$, is useless.
4. **Conclude**, and if the $L^{1}$ statement is wanted, note that $\lvert f_n - f\rvert \le 2g$ gives it at once.
5. **For a parameter integral $F(t) = \int f(x,t)\,d\mu(x)$:** to prove $F$ continuous, dominate $f$; to differentiate under the integral, dominate $\partial f/\partial t$, uniformly over $t$ in a compact interval around the point of interest. Then $F' (t) = \int \partial_t f\, d\mu$, and the resulting ordinary differential equation in $t$ is often easier than the integral.
6. **If no envelope exists**, fall back: non-negative integrands need none (:ref[]{to=measure.monotone-convergence-fatou}); an inequality rather than an equality may suffice, and then Fatou's lemma needs none either; or check whether $\int \lvert f_n\rvert \to \int \lvert f \rvert$, which by Folland's Exercise 21 is equivalent to $L^{1}$ convergence.
:::

:::example[Two uses of one envelope]{provenance=original}
**Part A: a limit under the integral sign.** Evaluate

$$
L = \lim_{n \to \infty} \int_{0}^{\infty} \frac{n \sin(x/n)}{x\,(1 + x^{2})} \, dx .
$$

*Step 1: the pointwise limit.* Write $f_n(x) = \dfrac{n\sin(x/n)}{x\,(1+x^{2})}$ for the integrand. For fixed $x > 0$, $n\sin(x/n)/x = \sin(x/n)/(x/n) \to 1$ as $n \to \infty$, since $\sin u / u \to 1$ as $u \to 0$. So $f_n(x) \to f(x) := 1/(1+x^{2})$ at every $x > 0$.

*Step 2: the envelope.* Hypothesis (b) bounds a modulus, so the inequality to use is the two-sided $\lvert \sin u \rvert \le u$ for $u \ge 0$, not $\sin u \le u$, which says nothing where $\sin u < 0$ (at $u = 4$ the quotient $\sin u / u$ equals $-0.1892$, so the one-sided bound would leave the claim "$0 < n\sin(x/n)/x$" false). Writing $u = x/n > 0$,

$$
\Bigl\lvert \frac{n\sin(x/n)}{x}\Bigr\rvert = \Bigl\lvert \frac{\sin u}{u}\Bigr\rvert \le 1 \qquad (n \ge 1,\ x > 0),
$$

so the integrand is dominated in modulus by

$$
g(x) = \frac{1}{1+x^{2}} , \qquad \int_{0}^{\infty} g(x) \, dx = \bigl[\arctan x\bigr]_{0}^{\infty} = \frac{\pi}{2} < \infty .
$$

The envelope does not depend on $n$ and is integrable, so hypothesis (b) holds.

*Step 3: conclude.*

$$
L = \int_{0}^{\infty} \frac{dx}{1+x^{2}} = \frac{\pi}{2} = 1.5707963268\ldots
$$

*Step 4: check.* This integral has a closed form. Writing $a = 1/n$ and using $\int_{0}^{\infty} \frac{\sin(ax)}{x(1+x^{2})}\,dx = \frac{\pi}{2}\bigl(1 - e^{-a}\bigr)$ for $a > 0$, the $n$th integral equals $\frac{n\pi}{2}\bigl(1 - e^{-1/n}\bigr)$, which indeed increases to $\pi/2$ as $n \to \infty$ because $n(1-e^{-1/n}) \uparrow 1$. Numerically, and confirmed to twelve digits by oscillatory quadrature of the original integral:

| $n$ | $\frac{n\pi}{2}(1-e^{-1/n})$ | $\pi/2 - {}$that |
|---|---|---|
| $1$ | $0.9929327$ | $0.5778637$ |
| $5$ | $1.4236853$ | $0.1471110$ |
| $50$ | $1.5551926$ | $0.0156038$ |
| $500$ | $1.5692266$ | $0.0015697$ |

*Step 5: why a uniform-convergence theorem would still not have served.* Here the convergence happens to be uniform. From $0 \le 1 - \frac{\sin u}{u} \le \min\bigl(2, \frac{u^{2}}{6}\bigr)$ for $u > 0$, with $u = x/n$,

$$
\lvert f_n(x) - f(x)\rvert \;=\; \frac{1 - \sin(x/n)\big/(x/n)}{1+x^{2}} \;\le\; \frac{\min\bigl(2,\ x^{2}/6n^{2}\bigr)}{1+x^{2}} \;\le\; \frac{1}{6n^{2}} ,
$$

the last step because $x^{2}/(1+x^{2}) \le 1$ handles the first branch, while the second branch is in force only for $x > n\sqrt{12}$, where $2/(1+x^{2}) < 1/(6n^{2})$. The bound is tight: the exact suprema of $\lvert f_n - f\rvert$ are $0.10907$, $0.0061021$, $6.6074 \times 10^{-5}$ and $6.6607\times 10^{-7}$ at $n = 1, 5, 50, 500$, against $1/(6n^{2}) = 0.16667$, $0.0066667$, $6.6667\times 10^{-5}$ and $6.6667 \times 10^{-7}$.

Uniform convergence nevertheless delivers nothing here, because the interval is unbounded: the termwise-integration theorem built on uniform convergence, :cite[Stakgold and Holst's]{work=stakgold-holst-2011 loc="§0.6, Thm 0.6.2 and the discussion on p. 39"} Thm 0.6.2, requires a *bounded* interval, and they show by example that the hypothesis cannot be dropped. Dominated convergence is what actually licenses the interchange above, and the envelope $1/(1+x^{2})$ is what it needed.

**Part B: differentiating under the integral sign.** Let

$$
F(t) = \int_{0}^{\infty} e^{-x^{2}} \cos(tx) \, dx , \qquad t \in \mathbb{R} .
$$

*Step 1: hypotheses for part 2 of the parameter theorem.* Here $\mu$ is Lebesgue measure on $(0,\infty)$ and $f(x,t) = e^{-x^{2}}\cos(tx)$. For each $t$, $\lvert f(\cdot,t)\rvert \le e^{-x^{2}} \in L^{1}(0,\infty)$, so $f(\cdot,t)$ is integrable. The derivative $\partial f/\partial t = -x e^{-x^{2}}\sin(tx)$ exists everywhere and satisfies, for *all* $t \in \mathbb{R}$,

$$
\Bigl\lvert \frac{\partial f}{\partial t}(x,t) \Bigr\rvert \le x\,e^{-x^{2}} =: g(x), \qquad \int_{0}^{\infty} x\,e^{-x^{2}}\,dx = \tfrac12 < \infty .
$$

The bound is uniform in $t$ on every compact interval — indeed on all of $\mathbb{R}$ — so the theorem applies on each $[a,b]$ and hence on $\mathbb{R}$.

*Step 2: differentiate and integrate by parts.*

$$
F'(t) = -\int_{0}^{\infty} x\,e^{-x^{2}} \sin(tx)\,dx
= \Bigl[\tfrac12 e^{-x^{2}}\sin(tx)\Bigr]_{0}^{\infty} - \frac{t}{2}\int_{0}^{\infty} e^{-x^{2}}\cos(tx)\,dx = -\frac{t}{2}\,F(t) ,
$$

the bracket vanishing at both ends because $e^{-x^{2}}\sin(tx) \to 0$ as $x \to \infty$ and $\sin 0 = 0$.

*Step 3: solve.* The relation $F' + \tfrac{t}{2}F = 0$ is linear, so multiply by the integrating factor $e^{t^{2}/4}$ rather than dividing by $F$, whose vanishing is not yet excluded: $\bigl(e^{t^{2}/4}F(t)\bigr)' = e^{t^{2}/4}\bigl(F'(t) + \tfrac{t}{2}F(t)\bigr) = 0$, so $e^{t^{2}/4}F(t)$ is constant and equals its value $F(0)$ at $t = 0$. With $F(0) = \int_0^\infty e^{-x^{2}}dx = \sqrt{\pi}/2$ (:ref[]{to=found.gaussian-integrals}),

$$
F(t) = \frac{\sqrt{\pi}}{2}\, e^{-t^{2}/4} .
$$

*Step 4: a checkable number.* At $t = 2$,

$$
F(2) = \frac{\sqrt{\pi}}{2e} = 0.3260246661\ldots ,
$$

and direct numerical quadrature of $\int_{0}^{\infty} e^{-x^{2}}\cos 2x \, dx$ returns $0.3260246661$, agreeing to ten decimals.
:::

:::application{provenance=original}
**The Fourier transform of an $L^{1}$ function is continuous and bounded.** For $f \in L^{1}(\mathbb{R})$ the integrand of $\hat f(\xi) = \int f(x) e^{-i\xi x}dx$ obeys $\lvert f(x)e^{-i\xi x}\rvert = \lvert f(x)\rvert$, one envelope serving every $\xi$, so part 1 of the parameter theorem makes $\hat f$ continuous, with $\lVert \hat f\rVert_\infty \le \lVert f\rVert_1$. If in addition $x f(x) \in L^{1}$, then $x f(x)$ dominates $\partial_\xi (f(x)e^{-i\xi x})$ and part 2 gives $\hat f' (\xi) = \int (-ix) f(x) e^{-i\xi x}dx$: decay of $f$ buys smoothness of $\hat f$. This is the elementary half of the smoothness–decay duality of :ref[]{to=fourier.smoothness-decay}, and the same argument with $\mathbb{P}$ in place of Lebesgue measure makes a characteristic function $\varphi_X(t) = \mathbb{E}(e^{itX})$ continuous always, and differentiable at $0$ with $\varphi_X'(0) = i\,\mathbb{E}(X)$ whenever $\mathbb{E}\lvert X\rvert < \infty$ (:ref[]{to=prob.characteristic-functions}).

**Thermodynamic averages from a partition function.** With $Z(\beta) = \int e^{-\beta E(x)}\,d\mu(x)$ over phase space, the internal energy is $U = -\partial_\beta \ln Z$. Justifying the differentiation means producing an envelope for $\partial_\beta e^{-\beta E} = -E e^{-\beta E}$ valid on a closed interval $[\beta_1,\beta_2]$ of inverse temperatures with $\beta_1 > 0$: if $E \ge 0$, then $\lvert E e^{-\beta E}\rvert \le E e^{-\beta_1 E}$, which is integrable exactly when $Z(\beta_1)$ converges with one derivative to spare. The physical content of the hypothesis is that the system have a finite mean energy throughout the temperature range; where it fails — near a phase transition, or for a system whose density of states grows too fast — differentiating under the integral is not a formality, and the thermodynamic quantity it defines may not exist.

**Passing to the limit in a numerical scheme.** A quadrature or a Galerkin method produces approximants $u_n$ converging pointwise a.e. to $u$. Convergence of the energies $\int \lvert u_n \rvert^{2}$ to $\int \lvert u \rvert^{2}$ needs an envelope, and a uniform-in-$n$ bound such as a maximum principle or an a priori estimate $\lvert u_n \rvert \le g$ with $g \in L^{2}$ is precisely what supplies it. Without such an estimate the limit may lose energy, exactly as in $n\mathbf{1}_{(0,1/n)}$, and the scheme converges pointwise to the wrong thing in the mean.

**Expectations of truncated random variables.** For $X$ with $\mathbb{E}\lvert X\rvert < \infty$, the truncations $X_n = X\,\mathbf{1}_{\{\lvert X\rvert \le n\}}$ satisfy $X_n \to X$ a.s. and $\lvert X_n\rvert \le \lvert X \rvert \in L^{1}$, so $\mathbb{E}(X_n) \to \mathbb{E}(X)$. Truncation is the first move in most proofs of the :ref[law of large numbers]{to=prob.law-of-large-numbers} and in the construction of :ref[conditional expectation]{to=prob.conditional-expectation}, and dominated convergence is what lets the truncation be removed at the end.
:::
