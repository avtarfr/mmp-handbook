---
id: funcan.metric-spaces
title: Metric spaces and completeness
kind: definition
level: core
summary: Gives the distance axioms that let convergence be defined on any set, the Cauchy criterion that tests for convergence without naming the limit, and the proofs that the continuous functions on a closed interval are complete in the sup metric but not in the integral metric.
prereqs: [found.limits-of-sequences, found.uniform-convergence]
provenance: adapted
sources:
  - work: kreyszig-1978
    loc: "§1.1, Def. 1.1-1 (axioms (M1)–(M4)) and the generalized triangle inequality, pp. 3–4, with Examples 1.1-2 to 1.1-5, pp. 5–6; §1.4, Def. 1.4-1 (convergence), p. 25, Lemma 1.4-2 (boundedness and uniqueness of the limit), pp. 26–27, Def. 1.4-3 (Cauchy sequence, completeness) and Thm 1.4-4, p. 28, Thm 1.4-5 (convergent implies Cauchy), p. 29, Thm 1.4-6 (closure by sequences) and Thm 1.4-7 (a subspace of a complete space is complete iff closed), p. 30, Thm 1.4-8 (sequential continuity), pp. 30–31; §1.5, the three-step scheme for completeness proofs and Problem 2 (a Cauchy sequence with a convergent subsequence converges, proved here independently), p. 32, Examples 1.5-1 ($\\mathbb{R}^n$), 1.5-2 ($\\ell^\\infty$), pp. 33–34, 1.5-4 ($\\ell^p$), pp. 35–36, 1.5-5 ($C[a,b]$) with Thm 1.5-6, pp. 36–37, and the incomplete Examples 1.5-7 to 1.5-9, pp. 37–39"
    pages: "3-6, 25-39"
    role: the axiom list and its numbering, the definitions of convergence, Cauchy sequence and completeness, the closed-subspace criterion, the completeness proofs for $\ell^\infty$, $\ell^p$ and $C[a,b]$, the three-step scheme, and the incompleteness of the continuous functions in an integral metric
  - work: folland-1999
    loc: "§0.6, pp. 13–15: the metric axioms with nonnegativity built into the codomain and the examples $\\rho_1$, $\\rho_\\infty$ on $C([0,1])$, p. 13; Prop. 0.22 (closure by sequences), the definition of a Cauchy sequence and of a complete subset, and Prop. 0.24 (a closed subset of a complete space is complete, a complete subset is closed), p. 14; diameter, boundedness and total boundedness, and Thm 0.25 (complete and totally bounded = Bolzano-Weierstrass = Heine-Borel), p. 15"
    pages: "13-15"
    role: the economical form of the axioms, the pairing of the two propositions on closure and completeness, and the characterisation of compactness as completeness plus total boundedness
  - work: hassani-2013
    loc: "§1.3, Def. 1.3.1 (metric space) and the reading of the three axioms as properties of distance, p. 8; Example 1.3.2 (the chord and great-circle metrics on a sphere; the integral and sup metrics on continuous functions), p. 9; Def. 1.3.3 (convergence), Def. 1.3.4 (Cauchy sequence), p. 9, and Def. 1.3.5 (complete metric space) with the alternating-harmonic example in $\\mathbb{Q}$, p. 10"
    pages: "8-10"
    role: the two-metric example on the sphere, the physicists' reading of the axioms, and the Minkowski caveat that a relativistic interval is not a metric
  - work: stakgold-holst-2011
    loc: "§4.3, pp. 234–242: the axioms (4.3.1) and the remark that a general metric needs a function of two variables, p. 234; convergence and the definition of a convergent series in a normed space, p. 235; the Cauchy sequence, the theorem that a convergent sequence is fundamental, and the definition of completeness, p. 236; the incompleteness of the rationals via $\\sum 1/k!$, pp. 237–238; Examples 1–8 ($\\mathbb{R}$, $\\mathbb{C}$, $\\mathbb{R}^n$ with $\\|\\cdot\\|_p$, $C[a,b]$ with the sup norm, $C[a,b]$ with the $L_2$ norm and the arctangent sequence, $L_2(a,b)$ as a completion, the Hamming metric), pp. 238–240; closure, density, boundedness and compactness, pp. 240–241"
    pages: "234-242"
    role: the completeness proof for $\mathbb{R}^n$ in the $p$-norms, the Hamming metric as a non-linear example, the reading of $L_2$ as a completion, and the statement that completeness is what lets limiting processes stay inside the space
  - work: reed-simon-1980
    loc: "§I.2, pp. 5–9: the two metrics on $C[0,1]$ and the spike functions that converge in the integral metric but not the sup metric, p. 5 and p. 8; the definitions of Cauchy sequence, completeness, dense set and isometry, and the rationals as the model incomplete space, pp. 5, 8–9"
    pages: "5-9"
    role: the comparison of two metrics on one set, the spike sequence separating them, and the subscript convention this unit departs from
---

:::definition[Metric space]{provenance=adapted src="kreyszig-1978:§1.1, Def. 1.1-1, p. 3; hassani-2013:§1.3, Def. 1.3.1, p. 8; folland-1999:§0.6, p. 13; stakgold-holst-2011:§4.3, (4.3.1), p. 234"}
A **metric** on a set $X$ is a function $d$ of two points of $X$ that returns a real number, subject to four conditions. For all $x,y,z \in X$:

- **(M1)** $d(x,y)$ is real, finite and $\ge 0$;
- **(M2)** $d(x,y) = 0$ if and only if $x = y$;
- **(M3)** $d(x,y) = d(y,x)$;
- **(M4)** $d(x,z) \le d(x,y) + d(y,z)$ — the **triangle inequality**.

The pair $(X,d)$ is a **metric space**, its elements are **points**, and $d(x,y)$ is the **distance** from $x$ to $y$. We write $X$ alone when $d$ is clear. The labels (M1)–(M4) are :cite[Kreyszig's]{work=kreyszig-1978 loc="§1.1, Def. 1.1-1, p. 3"}.

Induction on (M4) gives the **generalized triangle inequality**: $d(x_0,x_n) \le \sum_{j=1}^{n} d(x_{j-1},x_j)$ for any finite chain of points.

If $Y \subseteq X$, then $Y$ with $d$ restricted to $Y \times Y$ is a **subspace** of $X$, carrying the **induced metric**. The **open ball** of radius $r>0$ about $x$ is $B(x;r) = \{y \in X : d(x,y) < r\}$; a set $U \subseteq X$ is **open** if every point of $U$ has some ball about it inside $U$, and **closed** if its complement is open. The **closure** $\overline{E}$ of $E \subseteq X$ is the intersection of all the closed sets that contain $E$, and $E$ is **dense** in $X$ if $\overline{E} = X$. A set $E$ is **bounded** if its **diameter** $\operatorname{diam} E = \sup\{d(x,y) : x,y \in E\}$ is finite. These are the metric cases of the notions in :ref[topological spaces]{to=found.topological-spaces}.

$X$ needs no algebraic structure whatever: a metric is defined on a bare set. When $X$ also carries a norm the two structures are linked by $d(x,y) = \lVert x-y\rVert$, and a function of one variable then does the work of a function of two; that is the subject of :ref[normed and Banach spaces]{to=funcan.normed-banach-spaces}.
:::

:::note[Axiom lists that look different and are not]{provenance=adapted src="folland-1999:§0.6, p. 13; hassani-2013:§1.3, Def. 1.3.1, p. 8; stakgold-holst-2011:§4.3, (4.3.1), p. 234; kreyszig-1978:§1.1, Def. 1.1-1, p. 3"}
The library's four statements of this definition are packaged differently and say the same thing.

- :cite[Folland]{work=folland-1999 loc="§0.6, p. 13"} declares $\rho : X\times X \to [0,\infty)$, so (M1) is absorbed into the codomain, and then lists only (M2), (M3), (M4).
- :cite[Hassani]{work=hassani-2013 loc="§1.3, Def. 1.3.1, p. 8"} lists three conditions, the first combining nonnegativity with (M2).
- :cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="§4.3, (4.3.1), p. 234"} split (M2) into $d(u,v)>0$ for distinct points and $d(u,u)=0$.
- :cite[Kreyszig]{work=kreyszig-1978 loc="§1.1, Def. 1.1-1, p. 3"} keeps all four, which is the list used above because each axiom is then available by name.

Nonnegativity is in fact forced by (M2)–(M4): putting $z = x$ in (M4) and using (M3) gives $0 = d(x,x) \le 2d(x,y)$. It is listed anyway, as all four books do in one form or another, because it is used constantly and a reader should not have to rederive it.

Hassani adds a warning worth repeating: in relativity the squared interval between two events can be negative, so it is not a metric in this sense, and none of what follows applies to it.
:::

:::definition[Convergence, Cauchy sequences, completeness]{provenance=adapted src="kreyszig-1978:§1.4, Def. 1.4-1, p. 25, and Def. 1.4-3, p. 28; hassani-2013:§1.3, Defs. 1.3.3–1.3.5, pp. 9–10; folland-1999:§0.6, p. 14; stakgold-holst-2011:§4.3, p. 236"}
Let $(X,d)$ be a metric space and $(x_n)_{n\ge1}$ a sequence in $X$.

- $(x_n)$ **converges** to $x \in X$ if $d(x_n,x) \to 0$ as $n\to\infty$: for every $\varepsilon>0$ there is $N$ with $d(x_n,x) < \varepsilon$ for all $n>N$. We write $x_n \to x$ and call $x$ the **limit**. A sequence with no limit in $X$ is **divergent**.
- $(x_n)$ is a **Cauchy sequence** (also *fundamental*) if for every $\varepsilon>0$ there is $N$ with
  $$
  d(x_m,x_n) < \varepsilon \qquad \text{for all } m,n > N .
  $$
- $X$ is **complete** when each of its Cauchy sequences has a limit lying in $X$.

The definition of convergence names the limit; the Cauchy condition does not. That is the entire point of completeness: in a complete space a sequence may be certified convergent by an estimate involving only its own terms, before anything is known about what it converges to. The price is that the certificate says nothing about *which* point the limit is.

Convergence is not a property of the sequence alone but of the sequence together with the space it is regarded as living in. The sequence $1, \tfrac12, \tfrac13, \dots$ converges in $[0,1]$ and diverges in $(0,1]$, with no term changed.
:::

:::statement[The basic facts]{provenance=adapted src="kreyszig-1978:§1.4, Lemma 1.4-2, p. 26, Thm 1.4-4, p. 28, Thms 1.4-5 and 1.4-6, pp. 29–30, Thm 1.4-7, p. 30, and Thm 1.4-8, pp. 30–31; folland-1999:§0.6, Prop. 0.22 and Prop. 0.24, p. 14; stakgold-holst-2011:§4.3, p. 236"}
Let $(X,d)$ and $(Y,\tilde d)$ be metric spaces.

1. **Uniqueness and boundedness.** A convergent sequence in $X$ has exactly one limit, and its set of terms is bounded. If $x_n\to x$ and $y_n\to y$ then $d(x_n,y_n)\to d(x,y)$.
2. **Convergent implies Cauchy.** Every convergent sequence in $X$ is Cauchy. The converse holds for every sequence in $X$ precisely when $X$ is complete.
3. **A Cauchy sequence with a convergent subsequence converges**, to the same limit.
4. **Closure by sequences.** For $E \subseteq X$, a point $x$ lies in $\overline{E}$ if and only if some sequence in $E$ converges to $x$. Hence $E$ is closed if and only if it contains the limit of every convergent sequence of its own points.
5. **Completeness and closedness.** A subspace $M$ of a complete metric space $X$ is complete exactly when $M$ is closed in $X$. In an arbitrary metric space, a complete subspace is closed.
6. **Sequential continuity.** A map $T : X \to Y$ is continuous at the point $x_0$ exactly when every sequence with $x_n \to x_0$ satisfies $Tx_n \to Tx_0$.
7. **Which spaces are complete.** $\mathbb{R}$ and $\mathbb{C}$ are complete, and so are $\mathbb{R}^n$ and $\mathbb{C}^n$ in the Euclidean metric; so are the sequence spaces $\ell^\infty$ and $\ell^p$ for $1\le p<\infty$, and so is $C[a,b]$, the real- or complex-valued continuous functions on a closed bounded interval, in the sup metric
   $$
   d_\infty(x,y) = \max_{t\in[a,b]} \lvert x(t)-y(t)\rvert .
   $$
   Convergence in $d_\infty$ *is* uniform convergence on $[a,b]$. Of these, only the case of $C[a,b]$ is proved below. Completeness of $\mathbb{R}$ and $\mathbb{C}$ is taken as known from :ref[limits of sequences]{to=found.limits-of-sequences}, and the cases $\mathbb{R}^n$, $\mathbb{C}^n$, $\ell^\infty$ and $\ell^p$ are taken on the authority of :cite[Kreyszig]{work=kreyszig-1978 loc="§1.5, Examples 1.5-1, 1.5-2 and 1.5-4, pp. 33–36"} and :cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="§4.3, Examples 1–4, pp. 238–239"}; each of them runs the three-step scheme of the method block below.
8. **Which are not.** $\mathbb{Q}$ with $d(x,y)=\lvert x-y\rvert$ is incomplete, as is any bounded open interval $(a,b)$ with $a<b$, as is the set of polynomials on $[a,b]$ in the sup metric. Most important here: $C[a,b]$ in the **integral metric**
   $$
   d_1(x,y) = \int_a^b \lvert x(t)-y(t)\rvert \,\mathrm{d}t
   $$
   is **not** complete, and neither is it complete in the mean-square metric $d_2(x,y) = \bigl(\int_a^b \lvert x-y\rvert^2\bigr)^{1/2}$.
:::

:::idea{provenance=adapted src="kreyszig-1978:§1.5, p. 32"}
Every estimate in parts 1–6 comes from the triangle inequality applied to one interpolating point. To compare $x$ with $z$ when the hypothesis is about $x$ and $y$, insert $y$; the cost is one extra term, which the hypothesis makes small.

Completeness proofs for concrete spaces all run the same way, and the reason is that the metric is built out of real or complex numbers whose completeness is already known. A Cauchy sequence in the space forces, coordinate by coordinate or point by point, a Cauchy sequence of scalars; those converge, and their limits assemble into a candidate. Two things then remain, and they are where the work is: the candidate must lie in the space, and the convergence must hold in the metric of the space, not merely coordinatewise.

Incompleteness proofs run the other way. One exhibits a sequence whose terms are visibly in the space and whose pointwise limit is visibly not, then shows that no other element of the space can be the metric limit either — because a metric limit would have to agree with the pointwise limit, which it cannot.
:::

:::proof[Parts 1–6]{provenance=adapted src="kreyszig-1978:§1.4, pp. 26–31; folland-1999:§0.6, p. 14"}
**1.** Suppose $x_n\to x$ and $x_n \to z$. By (M4), $0 \le d(x,z) \le d(x,x_n)+d(x_n,z)$, and both terms on the right tend to $0$; so $d(x,z)=0$ and $x=z$ by (M2). For boundedness, take $\varepsilon=1$ in the definition of convergence to get $N$ with $d(x_n,x)<1$ for $n>N$; then $d(x_n,x) \le 1 + \max\{d(x_1,x),\dots,d(x_N,x)\}$ for every $n$, a finite bound, so all terms lie in one ball. For the third claim, the generalized triangle inequality gives $d(x_n,y_n) \le d(x_n,x)+d(x,y)+d(y,y_n)$, hence $d(x_n,y_n)-d(x,y) \le d(x_n,x)+d(y,y_n)$; interchanging the roles of the two pairs gives the same bound for $d(x,y)-d(x_n,y_n)$, so $\lvert d(x_n,y_n)-d(x,y)\rvert \to 0$.

**2.** If $x_n\to x$, pick $N$ with $d(x_n,x) < \varepsilon/2$ for $n>N$. For $m,n>N$, (M4) and (M3) give $d(x_m,x_n) \le d(x_m,x)+d(x,x_n) < \varepsilon$. The second sentence is the definition of completeness restated.

**3.** Let $(x_n)$ be Cauchy with $x_{n_k} \to x$. Given $\varepsilon>0$ choose $N$ with $d(x_m,x_n)<\varepsilon/2$ for $m,n>N$, then choose $k$ with $n_k>N$ and $d(x_{n_k},x)<\varepsilon/2$. For any $n>N$, $d(x_n,x) \le d(x_n,x_{n_k})+d(x_{n_k},x) < \varepsilon$. **Here the Cauchy hypothesis is what transports the good behaviour of one subsequence to the whole sequence**; without it a sequence may have a convergent subsequence and still not converge.

**4.** If $x \in E$, the constant sequence works. If $x \in \overline{E}\setminus E$, then every ball $B(x;1/n)$ meets $E$ — otherwise the complement of that ball would be a closed set containing $E$ but not $x$, contradicting minimality of the closure — so choosing $x_n \in B(x;1/n)\cap E$ gives $x_n \to x$. Conversely, if $x_n \in E$ and $x_n \to x$ but $x \notin \overline{E}$, then the open set $X\setminus\overline{E}$ contains a ball about $x$ that contains no point of $E$, contradicting $x_n\to x$. The second sentence is the case $\overline{E}=E$.

**5.** Let $X$ be any metric space and $M \subseteq X$ complete as a subspace; completeness of $X$ is not assumed in this half. If $x\in\overline{M}$, part 4 supplies $x_n \in M$ with $x_n \to x$; by part 2 the sequence is Cauchy, by completeness of $M$ it converges in $M$, and by uniqueness of limits (part 1) that limit is $x$, so $x \in M$. Thus $M$ is closed. Conversely let $M$ be closed in the complete space $X$ and let $(x_n)$ be Cauchy in $M$. It is Cauchy in $X$, so it converges to some $x \in X$; by part 4 and closedness, $x \in M$. **Completeness of the ambient space is used only in this second direction**, which is why the first direction — a complete subspace is closed — is stated in part 5 for an arbitrary ambient space.

**6.** Suppose $T$ is continuous at $x_0$ and $x_n\to x_0$. Given $\varepsilon>0$ take $\delta>0$ with $\tilde d(Tx,Tx_0)<\varepsilon$ whenever $d(x,x_0)<\delta$, then $N$ with $d(x_n,x_0)<\delta$ for $n>N$; so $\tilde d(Tx_n,Tx_0)<\varepsilon$ for $n>N$. Conversely, if $T$ is not continuous at $x_0$ there is an $\varepsilon>0$ for which no $\delta$ works; taking $\delta = 1/n$ produces $x_n$ with $d(x_n,x_0)<1/n$ and $\tilde d(Tx_n,Tx_0)\ge\varepsilon$, so $x_n\to x_0$ while $Tx_n \not\to Tx_0$. $\square$
:::

:::proof[Part 7 for $C[a,b]$, and part 8]{provenance=adapted src="kreyszig-1978:§1.5, Example 1.5-5 and Thm 1.5-6, pp. 36–37, and Example 1.5-9, pp. 38–39; stakgold-holst-2011:§4.3, Example 5, p. 239, and Example 6, pp. 239–240"}
**$C[a,b]$ is complete in $d_\infty$.** Let $(x_m)$ be Cauchy in $d_\infty$ and write $J=[a,b]$.

1. *A candidate.* Fix $t\in J$. Since $\lvert x_m(t)-x_n(t)\rvert \le d_\infty(x_m,x_n)$, the numbers $x_1(t),x_2(t),\dots$ form a Cauchy sequence in $\mathbb{R}$ (or $\mathbb{C}$), which converges because $\mathbb{R}$ and $\mathbb{C}$ are complete. Call the limit $x(t)$. This defines a function $x$ on $J$.
2. *The convergence is uniform.* Given $\varepsilon>0$ take $N$ with $d_\infty(x_m,x_n)\le\varepsilon$ for $m,n>N$. Fix $m>N$ and $t\in J$ and let $n\to\infty$ in $\lvert x_m(t)-x_n(t)\rvert\le\varepsilon$: the bound survives the limit, giving $\lvert x_m(t)-x(t)\rvert\le\varepsilon$ for every $t\in J$ at once. **The bound is independent of $t$ because the sup metric made it so**, and that is exactly uniform convergence.
3. *The candidate is in the space.* A uniform limit of continuous functions is continuous (:ref[uniform convergence]{to=found.uniform-convergence}), so $x \in C[a,b]$, and step 2 says $d_\infty(x_m,x)\le\varepsilon$ for $m>N$, that is $x_m\to x$ in $C[a,b]$.

Step 2 also proves the parenthetical claim of part 7: convergence in $d_\infty$ is uniform convergence, and conversely.

**$C[a,b]$ is not complete in $d_1$.** It is enough to produce one Cauchy sequence with no continuous limit; take $[a,b]=[-1,1]$ and
$$
g_n(t) = \tanh(nt), \qquad n = 1,2,\dots,
$$
each of which is continuous on $[-1,1]$.

1. *The distances.* For $t>0$ the map $n\mapsto\tanh(nt)$ increases, so for $n<m$ we have $\lvert g_m - g_n\rvert = g_m-g_n$ on $(0,1]$ and $= g_n - g_m$ on $[-1,0)$; by oddness,
   $$
   d_1(g_n,g_m) = 2\int_0^1\bigl[\tanh(mt)-\tanh(nt)\bigr]\,\mathrm{d}t
   = 2\left[\frac{\ln\cosh m}{m} - \frac{\ln\cosh n}{n}\right],
   $$
   using $\int_0^1 \tanh(nt)\,\mathrm{d}t = n^{-1}\ln\cosh n$. Since $\ln\cosh n = n - \ln 2 + \ln(1+e^{-2n})$, the bracket equals $\ln 2\,(n^{-1}-m^{-1})$ up to a term smaller than $e^{-2n}$, so $d_1(g_n,g_m) \le 2\ln 2/n \to 0$ and the sequence is Cauchy in $d_1$.
2. *No continuous limit.* Suppose $h\in C[-1,1]$ with $d_1(g_n,h)\to0$. The same computation with $\operatorname{sgn}$ in place of $g_m$ gives $d_1(g_n,\operatorname{sgn}) = 2(1 - n^{-1}\ln\cosh n) \to 0$. These two statements are read on the larger set of bounded functions continuous off a finite set, the only place a larger space is used. There the formula $\int_{-1}^{1}\lvert u-v\rvert$ is **not** a metric but a *pseudometric*: altering $\operatorname{sgn}$ at the single point $0$ changes no integral, so (M2) fails. Only (M4) is needed, and (M4) does hold, because the pointwise inequality $\lvert u-w\rvert \le \lvert u-v\rvert+\lvert v-w\rvert$ integrates. Hence
   $$
   \int_{-1}^{1}\lvert h-\operatorname{sgn}\rvert \;\le\; d_1(h,g_n) + d_1(g_n,\operatorname{sgn}) \;\xrightarrow[n\to\infty]{}\; 0 ,
   $$
   and the left side does not depend on $n$, so $\int_{-1}^{1}\lvert h-\operatorname{sgn}\rvert = 0$. The integrand is nonnegative and continuous except at $0$, so $h(t)=\operatorname{sgn} t$ for every $t\ne0$; letting $t\to0^{\pm}$ forces $h(0)$ to equal both $1$ and $-1$. No continuous $h$ exists, so $(g_n)$ is Cauchy and divergent in $(C[-1,1],d_1)$.

**The remaining claims of part 8.**

- *A general interval $[a,b]$.* Put $c = \tfrac12(a+b)$ and $\tilde g_n(t) = \tanh\bigl(n(t-c)\bigr)$. The two steps above run word for word, with $\operatorname{sgn}(t-c)$ as the obstruction, so $(C[a,b],d_1)$ is incomplete for every $a<b$.
- *The mean-square metric.* Back on $[-1,1]$: $g_m$ and $g_n$ have the same sign as $t$ and modulus below $1$, so $\lvert g_m-g_n\rvert\le1$ pointwise, hence $\lvert g_m-g_n\rvert^2 \le \lvert g_m-g_n\rvert$ and $d_2(g_n,g_m)^2 \le d_1(g_n,g_m) \to 0$. The same sequence is therefore Cauchy in $d_2$. If some $h \in C[-1,1]$ had $d_2(g_n,h)\to0$, then Cauchy–Schwarz against the constant function $1$, in the form $\int_{-1}^{1}\lvert u\rvert\cdot 1 \le \bigl(\int_{-1}^{1}\lvert u\rvert^2\bigr)^{1/2}\bigl(\int_{-1}^{1}1^2\bigr)^{1/2}$ applied to $u=g_n-h$, would give $d_1(g_n,h) \le \sqrt{2}\,d_2(g_n,h) \to 0$, which step 2 has just excluded. **Boundedness of the interval enters only through the finite factor** $\sqrt{b-a}$, which is $\sqrt2$ here; on a general $[a,b]$ the same two lines work with $\tilde g_n$.
- *$\mathbb{Q}$.* The decimal truncations $q_n$ of $\sqrt2$ satisfy $\lvert q_n-q_m\rvert\le 10^{-\min(n,m)}$, so they are Cauchy in $\mathbb{Q}$; a rational limit would also be a limit in $\mathbb{R}$, and limits there are unique, so it would be $\sqrt2\notin\mathbb{Q}$.
- *A bounded open interval $(a,b)$.* The points $a+(b-a)/n$, $n\ge2$, lie in $(a,b)$ and are Cauchy; a limit in $(a,b)$ would be the limit taken in $\mathbb{R}$, namely $a$, which is not in $(a,b)$. What the argument actually uses is that the endpoint $a$ is finite, not that the interval is bounded: $(0,\infty)$ is unbounded and incomplete by the same two lines, with the points $1/n$. Part 8 says *bounded* because that is the cheapest hypothesis giving one clean statement; what has to be excluded is $\mathbb{R}$ itself, which is an open interval of $\mathbb{R}$ and is complete.
- *The polynomials on $[a,b]$ in $d_\infty$.* The partial sums $p_n(t)=\sum_{k=0}^{n}t^k/k!$ converge uniformly on $[a,b]$ to $e^t$, so by step 2 of the first half they are $d_\infty$-Cauchy. A polynomial limit would have to equal $e^t$, uniform limits being unique, and $e^t$ is not a polynomial: a polynomial of degree $N$ has vanishing $(N+1)$-st derivative, while every derivative of $e^t$ is $e^t \ne 0$.

The sequence $(g_n)$ of the second half, in the same set $C[-1,1]$, is *not* Cauchy in $d_\infty$: $d_\infty(g_n,g_{2n}) \ge \lvert \tanh(2n/n) - \tanh(n/n)\rvert$ evaluated at $t=1/n$, namely $\tanh 2 - \tanh 1 = 0.2024334\ldots$, bounded away from $0$. Completeness is a property of the metric, not of the set. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=adapted src="kreyszig-1978:§1.4, Thm 1.4-7, p. 30, §1.5, p. 32, and Examples 1.5-7 to 1.5-9, pp. 37–39; folland-1999:§0.6, Prop. 0.24 and Thm 0.25, pp. 14–15; stakgold-holst-2011:§4.3, pp. 236, 241"}
- **(M2) is what makes limits unique.** Drop the "only if" half and $d$ becomes a *pseudometric*: distinct points at distance $0$ are then limits of the same sequences. This is not a pathology to be avoided but the standard situation in integration theory, where $\int\lvert f-g\rvert = 0$ for functions equal almost everywhere; the repair is to pass to equivalence classes, which is exactly what makes $\lVert\cdot\rVert_p$ a norm on :ref[$L^p$]{to=measure.lp-spaces} rather than a seminorm.
- **(M4) is the engine of parts 1–6.** Every estimate above is one application of the triangle inequality with a single interpolating point. The other axioms enter only to close the arguments those estimates set up: (M2) turns $d(x,z)=0$ into $x=z$ at the uniqueness step of part 1, and (M3) reverses $d(x,x_n)$ to $d(x_n,x)$ in part 2. Nothing about $d$ beyond the four axioms is used anywhere in parts 1–6, which is why those facts hold in every metric space whatever its elements are.
- **Closedness, in part 5, is relative.** $[\tfrac12,1)$ is closed as a subset of $(0,1)$ and not as a subset of $\mathbb{R}$, as :cite[Reed and Simon]{work=reed-simon-1980 loc="§I.2, p. 6"} warn. Part 5 is therefore a statement about $M$ *inside a named* $X$; "complete" by contrast is intrinsic to $(M,d)$.
- **Completeness of the ambient space is needed only one way round in part 5.** A complete subspace of any metric space is closed in it; a closed subspace of an *incomplete* space need not be complete. For instance $\mathbb{Q}$ is closed in $\mathbb{Q}$ and not complete.
- **Boundedness of the interval, and closedness of it, are used in part 7.** On $[a,b]$ a continuous function attains its maximum, so $d_\infty$ is finite and is a maximum rather than a supremum. On $(0,1)$ or on $\mathbb{R}$ one must restrict to the *bounded* continuous functions for $d_\infty$ to be defined at all; that space is again complete, by the same proof.
- **Completeness is not inherited by passing to a weaker metric on the same set**, as the two metrics on $C[-1,1]$ show, and it is not a topological property: $\mathbb{R}$ and $(0,1)$ are homeomorphic (:ref[continuity and homeomorphism]{to=found.continuity-homeomorphism}), one is complete and the other is not. What *is* topological is completeness plus total boundedness, which by :cite[Folland's Thm 0.25]{work=folland-1999 loc="§0.6, p. 15"} is exactly :ref[compactness]{to=found.compactness}.
- **Every incomplete metric space sits densely inside a complete one**, its *completion*, unique up to a distance-preserving bijection. :cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="§4.3, Examples 6 and 7, pp. 239–240"} take this as the *definition* of $L_2(a,b)$: the completion of the continuous functions in the mean-square metric. That is a legitimate route to the space, and it is not the route of :ref[$L^p$ spaces]{to=measure.lp-spaces}, which builds the same space from the Lebesgue integral and then proves completeness. The two descriptions agree; this unit uses neither as a hypothesis.
:::

:::note[A subscript convention]{provenance=adapted src="reed-simon-1980:§I.2, p. 5"}
On $C[0,1]$, :cite[Reed and Simon]{work=reed-simon-1980 loc="§I.2, p. 5"} write $d_1$ for the sup metric and $d_2$ for the integral metric, numbering the two metrics in the order they introduce them. This unit instead indexes by the exponent, so $d_1$ is the integral metric and $d_\infty$ the sup metric, matching $\lVert\cdot\rVert_p$ throughout the handbook. Their observation that $d_2 \le d_1$ reads here as $d_1 \le d_\infty$ on an interval of length $1$: the integral metric is the weaker of the two, so sup-convergence implies integral-convergence and not conversely.
:::

:::method[Proving a space complete, or proving it is not]{provenance=adapted src="kreyszig-1978:§1.5, p. 32"}
To show $(X,d)$ is complete, take an arbitrary Cauchy sequence $(x_m)$ and carry out :cite[Kreyszig's]{work=kreyszig-1978 loc="§1.5, p. 32"} three steps.

1. **Build a candidate limit $x$.** Use the metric to extract, from the Cauchy condition, a Cauchy sequence of real or complex numbers — one per coordinate, per point of the domain, or per basis element — and let $x$ be assembled from their limits. This step uses completeness of $\mathbb{R}$ and $\mathbb{C}$ and nothing else.
2. **Check $x \in X$.** This is where membership conditions are verified: boundedness for $\ell^\infty$, summability of the $p$-th powers for $\ell^p$, continuity for $C[a,b]$. It is the step that fails for the spaces in part 8.
3. **Check $d(x_m,x)\to 0$.** Pointwise or coordinatewise convergence is not enough. The standard device is to freeze $m$ in the Cauchy estimate, let the other index go to infinity, and observe that a non-strict inequality survives the limit; finite partial sums are handled first and the number of terms let go to infinity afterwards.

Shortcut: if $X$ is a subspace of a space already known to be complete, do not repeat the argument — show $X$ is **closed** and quote part 5.

To show $(X,d)$ is **not** complete, exhibit one Cauchy sequence and rule out every limit:

1. Choose a sequence in $X$ whose natural limit object (pointwise limit, formal sum, supremum) lies outside $X$.
2. Estimate $d(x_m,x_n)$ directly and show it tends to $0$.
3. Suppose $x_m \to h$ for some $h\in X$ and derive a contradiction, usually by showing $h$ would have to coincide with the natural limit object.
:::

:::example[One set, two metrics, worked numerically]{provenance=original}
Take $X = C[0,1]$ and the functions $f_n(t) = t^n$, $n\ge1$. All lie in $X$. We compute both distances exactly.

**The sup metric.** For $n<m$ and $t\in[0,1]$ we have $t^n \ge t^m$, so
$$
d_\infty(f_n,f_m) = \max_{0\le t\le 1}\bigl(t^n - t^m\bigr) .
$$
Setting the derivative $nt^{n-1} - mt^{m-1}$ to zero gives $t_\ast = (n/m)^{1/(m-n)}$, the unique interior critical point, and the value there is
$$
d_\infty(f_n,f_m) = \Bigl(\frac{n}{m}\Bigr)^{n/(m-n)}\Bigl(1 - \frac{n}{m}\Bigr).
$$
Take $m = 2n$. Then $n/m = 1/2$ and $n/(m-n) = 1$, so
$$
d_\infty(f_n,f_{2n}) = \tfrac12\cdot\tfrac12 = \frac14 \qquad\text{for every } n .
$$
Checking $n=1$, $m=2$ by hand: $t_\ast = 1/2$ and $t_\ast - t_\ast^2 = \tfrac12-\tfrac14 = \tfrac14$. The distance between $f_n$ and $f_{2n}$ is therefore the constant $0.25$, however large $n$ is, so $(f_n)$ is **not** Cauchy in $d_\infty$.

**The integral metric.** For $n<m$,
$$
d_1(f_n,f_m) = \int_0^1 (t^n - t^m)\,\mathrm{d}t = \frac{1}{n+1}-\frac{1}{m+1} ,
$$
which is at most $1/(n+1)$ and tends to $0$: the sequence **is** Cauchy in $d_1$. Numerically, $d_1(f_3,f_7) = \tfrac14-\tfrac18 = 0.125$ while $d_\infty(f_3,f_7) = (3/7)^{3/4}(4/7) = 0.3026769\ldots$.

**What each metric sees.** In $d_1$ the sequence converges, and its limit is the zero function: $d_1(f_n,0) = 1/(n+1) \to 0$, and $0 \in C[0,1]$. In $d_\infty$ it does not converge at all, since a non-Cauchy sequence cannot converge. The pointwise limit is the discontinuous function that is $0$ on $[0,1)$ and $1$ at $t=1$; the integral metric cannot distinguish it from $0$, and the sup metric can.

**The checkable number.** $d_\infty(f_n,f_{2n}) = 0.25$ exactly, for every $n$, while $d_1(f_n,f_{2n}) = \dfrac{1}{n+1}-\dfrac{1}{2n+1} = \dfrac{n}{(n+1)(2n+1)}$, which is $0.0888889$ at $n=4$ and $0.0097069$ at $n=50$. A single sequence in a single set is Cauchy in one metric and uniformly far from Cauchy in another.
:::

:::example[A quantitative version: the rate at which the missing limit is approached]{provenance=original}
Return to $g_n(t)=\tanh(nt)$ on $[-1,1]$ from the proof, which is $d_1$-Cauchy in $C[-1,1]$ and has no limit there.

**First, the quantity that does *not* measure this.** It is tempting to measure the defect as a distance from the sequence to the space, or from the space to its missing limit. Both are zero. Each $g_n$ is itself a continuous function, so
$$
\inf_{h \in C[-1,1]} d_1(g_n,h) \;=\; 0 \qquad\text{for every } n,
$$
attained at $h = g_n$. And the missing limit is no further away: in the pseudometric space $P$ of the proof — bounded functions on $[-1,1]$ continuous off a finite set, with $d_1(u,v) = \int_{-1}^{1}\lvert u-v\rvert$ — the continuous functions are $d_1$-dense. For $0<\eta<1$ let $h_\eta$ equal $\operatorname{sgn}$ off $(-\eta,\eta)$ and be linear across it; then $h_\eta \in C[-1,1]$ and
$$
d_1(\operatorname{sgn},h_\eta) \;=\; 2\int_0^{\eta}\Bigl(1-\frac{t}{\eta}\Bigr)\mathrm{d}t \;=\; \eta \;\longrightarrow\; 0 .
$$
So no positive number separates $C[-1,1]$ from the point it is missing. **Incompleteness is never a gap of positive width**: it is the absence of a point, and the only thing left to quantify is the *rate* at which the sequence travels towards the place where that point should be.

**The quantity that does.** Measure $g_n$ against the limit itself, inside $P$. For $t>0$ we have $\operatorname{sgn}t = 1$ and $\tanh(nt) < 1$, and both functions are odd, so with $\int_0^1\tanh(nt)\,\mathrm{d}t = n^{-1}\ln\cosh n$,
$$
d_1(g_n,\operatorname{sgn}) \;=\; 2\int_0^1\bigl(1-\tanh(nt)\bigr)\,\mathrm{d}t \;=\; 2\Bigl(1-\frac{\ln\cosh n}{n}\Bigr) .
$$
This is an equality, not a bound, and it is strictly positive for every $n$: it says by how much $g_n$ still misses the function it is heading for. (Changing $\operatorname{sgn}$ at the single point $0$ changes neither side, which is exactly why $d_1$ is only a pseudometric on $P$.)

At $n=10$, $\ln\cosh 10 = 9.3068528\ldots$ and
$$
d_1(g_{10},\operatorname{sgn}) \;=\; 2\bigl(1 - 0.93068528\bigr) \;=\; 0.13862944 ,
$$
in agreement with the asymptotic value $2\ln 2/n = 0.13862944$ to eight decimals; numerical quadrature of $\int_{-1}^{1}\lvert\tanh(10t)-\operatorname{sgn}t\rvert\,\mathrm{d}t$ returns $0.138629436$, the same number. The gap between the exact value and the asymptotic one is exactly $(2/n)\ln\bigl(1+e^{-2n}\bigr)$, which at $n=10$ is $4.12\times10^{-10}$, of order $e^{-2n}/n$ and not of order $e^{-2n}$. At $n=50$ the distance is $0.027725887$ and at $n=100$ it is $0.013862944$: the approach is of order $1/n$, even though away from the origin $g_n \to \operatorname{sgn}$ exponentially fast. The $1/n$ is the width of the window $\lvert t\rvert \lesssim 1/n$ in which $g_n$ has not yet made up its mind, and the integral measures the area of that window.

Meanwhile the mutual distances are $d_1(g_{10},g_{20}) = 2[\,\tfrac{1}{20}\ln\cosh 20 - \tfrac{1}{10}\ln\cosh 10\,] = 0.069314718$, which is $\ln2/10$ to nine decimals. So by $n=10$ the terms are within $0.07$ of each other and the sequence is going somewhere; the space simply has no point there. Numerical quadrature of $\int_{-1}^{1}\lvert\tanh(10t)-\tanh(20t)\rvert\,\mathrm{d}t$ returns $0.0693147176$, confirming the closed form.
:::

:::application{provenance=original}
**Which notion of "close" a calculation needs.** Two temperature fields can be close in the mean-square sense and differ by a large amount on a thin layer; two spectra can agree to high accuracy in energy and disagree badly at one frequency. Choosing the metric is choosing which errors count, and the two examples above show how far the choice can go: the same sequence may converge, diverge, or not even be Cauchy. A tolerance quoted without a metric is not a tolerance.

**Existence proofs that never write down the answer.** The pattern in nearly every existence theorem of analysis is: construct approximations, bound their mutual distances, invoke completeness. The solution is then produced before any formula for it is known. :ref[The contraction mapping theorem]{to=funcan.banach-fixed-point} packages this pattern, and the hypothesis it cannot do without is completeness of the space the iterates live in.

**Why $L^2$ and not the continuous functions.** Quantum mechanics, signal processing and least-squares estimation all need a space in which a limit of approximations is again a legitimate object. The computation above shows that the continuous functions in a mean-square metric are not such a space: a perfectly well-behaved sequence of smooth states has no continuous limit. Enlarging to :ref[$L^2$]{to=measure.lp-spaces} is not a technicality but the minimum required for the theory to close, and it is why :ref[Hilbert spaces]{to=funcan.hilbert-spaces} are defined with completeness built in.

**Numerical analysis.** An iterative solver is stopped when successive iterates are within tolerance — a Cauchy-type test, since the answer is unknown. The test is only meaningful if the space of candidates is complete in the norm being measured, and if that norm is the one in which the answer is required. Convergence of an iteration in a discrete $\ell^2$ norm says nothing about the pointwise error unless the two are compared, and in infinite dimensions they cannot be compared uniformly; see :ref[normed and Banach spaces]{to=funcan.normed-banach-spaces}.

**Geometry on curved sets.** :cite[Hassani's]{work=hassani-2013 loc="§1.3, Example 1.3.2, p. 9"} two metrics on a sphere — straight-line chord and great-circle arc — are both legitimate, give the same convergent sequences, and give quite different distances. Navigation uses the second; a linear-algebra embedding uses the first. The general lesson is that a set can carry many metrics, and that theorems about convergence often survive the change while theorems about distance do not.
:::
