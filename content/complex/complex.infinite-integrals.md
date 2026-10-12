---
id: complex.infinite-integrals
title: Infinite real integrals and Jordan's lemma
kind: method
level: core
summary: A real integral over the whole line is computed by closing the contour with a large semicircle and summing the residues in that half-plane; the semicircle is negligible when $zf(z)\to0$, and, for an integrand carrying a factor $e^{iax}$, already when $f(z)\to0$, which is Jordan's lemma.
prereqs: [complex.residue-theorem, complex.singularities, complex.contour-integrals]
provenance: adapted
sources:
  - work: arfken-2013
    loc: "§11.8, Integrals, Range $-\\infty$ to $\\infty$, Eqs. (11.95)-(11.97) and the arc estimate (11.96), pp. 525-526; Integrals with Complex Exponentials and Jordan's lemma, Eqs. (11.100)-(11.103), pp. 527-529, with Example 11.8.4, pp. 529-530"
    pages: "525-530"
    role: the two sets of hypotheses; the arc-vanishing lemma and its proof; the statement and proof of Jordan's lemma via $\\sin\\theta \\ge 2\\theta/\\pi$
  - work: rhb-2006
    loc: "§24.13.2, the conditions (i)-(iii) for closing with a large semicircle, including \"$R$ times the maximum of $\\lvert f\\rvert$ tends to zero\", p. 862; Jordan's lemma and Eqs. (24.70)-(24.71), pp. 864-865"
    pages: "862, 864-865"
    role: the hypotheses of Jordan's lemma as stated for a semicircular contour; the comparison with the stronger condition $R\\,M(R)\\to0$, which is imposed on p. 862 and contrasted with $M(R)\\to0$ on p. 864; their condition (iii), that both half-line integrals exist, which corroborates the remark block's point that $R\\,M(R)\\to0$ alone yields only the symmetric limit
  - work: ahlfors-1979
    loc: "Ch. 4, §5.3, cases 2 and 3, pp. 156-157"
    pages: "156-157"
    role: the convergence condition for a rational integrand; the rectangle argument showing that a simple zero at infinity suffices for a Fourier-type integral, where symmetric limits alone would not settle convergence
  - work: hassani-2013
    loc: "§11.3.1, Integrals of Rational Functions, pp. 345-347; §11.3.2, Products of Rational and Trigonometric Functions, pp. 348-349"
    pages: "345-349"
    role: cross-check of the recipe and of the hypotheses; the convention that closing in the lower half-plane carries a minus sign
---

:::note{provenance=original}
**What it means.** The residue theorem needs a closed contour; a real integral has an open one. The fix is to add a large semicircular arc in the upper half-plane, apply the residue theorem to the closed contour, and then argue that the arc contributes nothing as its radius grows. How fast the integrand must decay for that argument to work is the whole content of the method. For a bare rational function one needs $z f(z)\to 0$. For an integrand with a factor $e^{iaz}$, $a>0$, the exponential itself supplies decay in the upper half-plane, and $f(z)\to 0$ is already enough: that is Jordan's lemma, and it is what makes Fourier transforms of rational functions computable.
:::

:::definition[The contours and the arc]{provenance=original}
For $R > 0$ let $\Gamma_R$ denote the semicircular arc $z = Re^{i\theta}$, $0 \le \theta \le \pi$, traversed from $R$ to $-R$, and let $C_R$ be the closed contour consisting of the segment $[-R, R]$ of the real axis followed by $\Gamma_R$. Then $C_R$ is a positively oriented simple closed contour whose interior is the half-disc $\lvert z\rvert < R$, $\operatorname{Im} z > 0$, so for a function $f$ analytic on and inside $C_R$ apart from finitely many isolated singularities there,

$$
\int_{-R}^{R} f(x)\, dx \;+\; \int_{\Gamma_R} f(z)\, dz \;=\; 2\pi i \sum \operatorname*{Res} f ,
$$

the sum over singularities in the open upper half-disc (:ref[]{to=complex.singularities}). The lower-half-plane contour $\overline{C}_R$ is built from the same two pieces, but the arc must now be traversed so that the two pieces join up: the real axis is run from $-R$ to $R$, and then the arc $\overline{\Gamma}_R$ runs **from $R$ to $-R$** through $-iR$, returning to the starting point. Being closed is all that the residue theorem needs; what the orientation then decides is the sign. Walking from $-R$ to $R$ along the real axis, the enclosed lower half-disc lies on the *right*, so $\overline{C}_R$ traversed in this order is **negatively** oriented -- equivalently, the argument of $z$ seen from an interior point decreases, from $0$ at $R$ through $-\pi/2$ at $-iR$ to $-\pi$ at $-R$, which is the clockwise sense. Hence

$$
\int_{-R}^{R} f(x)\, dx \;+\; \int_{\overline{\Gamma}_R} f(z)\, dz \;=\; -2\pi i \sum \operatorname*{Res} f ,
$$

the sum now over singularities in the open lower half-disc. (To get a positively oriented boundary of the lower half-disc instead, run the real axis from $R$ to $-R$ and the arc from $-R$ through $-iR$ to $R$; that is the same identity with both sides negated.)

For an arc $A \subseteq \{\lvert z\rvert = R\}$ write

$$
M_A(R) \;=\; \max_{z \in A}\lvert f(z)\rvert ,
$$

and reserve the unsubscripted $M(R) = \max_{0\le\theta\le\pi}\lvert f(Re^{i\theta})\rvert$ for the **upper** semicircular arc $\Gamma_R$, which is the arc Jordan's lemma is about. Statements made for a general arc below use $M_A$; a lower-half-plane semicircle or a wedge of opening less than $2\pi$ gets its own maximum, which is in general unrelated to $M(R)$.
:::

:::statement[Vanishing of the arc for a rational-type integrand]{provenance=adapted src="arfken-2013:§11.8, Eq. (11.96) and its proof, pp. 525-526"}
Let $C = C(R)$ be the arc $z = Re^{i\theta}$ with $\theta_1\le\theta\le\theta_2$, the angles fixed, and let $f$ be continuous on $C(R)$ for every large $R$ -- so that $\lvert f\rvert$ attains a finite maximum $M_C(R)$ on the compact arc, and the contour integral is defined at all. If $\lim_{R\to\infty} z f(z) = 0$ uniformly for $z$ on those arcs -- that is, $R\,M_{C}(R)\to 0$ -- then

$$
\lim_{R\to\infty}\int_{C} f(z)\, dz \;=\; 0 .
$$

For a rational $f = p/q$ this holds exactly when $\deg q \ge \deg p + 2$.
:::

:::statement[Jordan's lemma]{provenance=adapted src="arfken-2013:§11.8, Eq. (11.102) and its proof, pp. 528-529; rhb-2006:§24.13.2, Eq. (24.70), p. 864"}
Let $a > 0$ and let $f$ be analytic in the upper half-plane except at finitely many points, and continuous on each arc $\Gamma_R$ for all large $R$ -- which holds as soon as $R$ exceeds the modulus of every one of those points, since $f$ is then analytic, hence continuous, on $\Gamma_R$, and $\lvert f\rvert$ attains a finite maximum there. Assume

$$
M(R) \;=\; \max_{0\le\theta\le\pi}\bigl\lvert f(Re^{i\theta})\bigr\rvert \;\longrightarrow\; 0
\qquad\text{as } R \to \infty .
$$

Then

$$
\lim_{R\to\infty}\int_{\Gamma_R} e^{iaz} f(z)\, dz \;=\; 0 ,
$$

and quantitatively $\bigl\lvert \int_{\Gamma_R} e^{iaz}f(z)\,dz\bigr\rvert \le \pi M(R)/a$.

**Only one half-plane.** The hypothesis $a>0$ ties the conclusion to the *upper* half-plane: there $\lvert e^{iaz}\rvert = e^{-a\operatorname{Im}z}\le1$, while in the lower half-plane the same factor grows. For $a < 0$ the lemma applies instead to a semicircle in the lower half-plane.
:::

:::statement[The resulting evaluations]{provenance=adapted src="arfken-2013:§11.8, Eqs. (11.97) and (11.103), pp. 526, 529; ahlfors-1979:Ch. 4, §5.3, cases 2 and 3, pp. 156-157"}
1. **Rational integrand.** Let $f$ be analytic on $\mathbb{R}$ and in the upper half-plane except for finitely many isolated singularities, with $R\,M(R)\to0$. Then the symmetric limit exists and
   $$
   \lim_{R\to\infty}\int_{-R}^{R} f(x)\, dx \;=\; 2\pi i \sum_{\operatorname{Im} z_j > 0} \operatorname*{Res}_{z=z_j} f .
   $$
   For a rational $f = p/q$ with no real poles, the hypothesis amounts to $\deg q \ge \deg p + 2$; then $\lvert f(x)\rvert = O(x^{-2})$, so $\int_{-\infty}^{\infty}f$ converges absolutely and *is* the symmetric limit. Ahlfors notes (p. 156) that $\deg q \ge \deg p + 2$ is also exactly the condition for the real integral of a rational function to converge. Beyond the rational case, $R\,M(R)\to0$ alone does **not** give convergence of $\int_{-\infty}^{\infty}f$: see the remark block for an $f$, analytic on the closed upper half-plane with $R\,M(R)\to0$, whose integral over $[1,\infty)$ diverges, so that only the symmetric limit exists.
2. **Fourier-type integrand.** Let $a > 0$ and let $f$ be analytic on $\mathbb{R}$ and in the upper half-plane except for finitely many isolated singularities, with $M(R)\to0$. Then
   $$
   \int_{-\infty}^{\infty} f(x)\,e^{iax}\, dx \;=\; 2\pi i\sum_{\operatorname{Im}z_j > 0}\operatorname*{Res}_{z=z_j}\bigl( f(z)e^{iaz}\bigr) ,
   $$
   the integral being understood as $\lim_{X_1,X_2\to\infty}\int_{-X_1}^{X_2}$, with the two limits taken independently. Taking real and imaginary parts gives $\int f(x)\cos ax\, dx$ and $\int f(x)\sin ax\,dx$.
:::

:::idea{provenance=original}
Both arc estimates are the $ML$ inequality plus one extra idea.

For the rational case there is no extra idea: the arc has length $\pi R$ and the integrand is at most $M(R)$, so the integral is at most $\pi R\, M(R)$, which is the hypothesis.

For Jordan's lemma that crude bound is useless, since $R\,M(R)$ need not tend to $0$. But $\lvert e^{iaz}\rvert = e^{-aR\sin\theta}$ is exponentially small except within $O(1/(aR))$ of the two ends of the arc, so the *effective* length of the arc is $O(1/a)$, not $\pi R$. Making that precise needs only a lower bound on $\sin\theta$, and the elementary chord bound $\sin\theta \ge 2\theta/\pi$ on $[0,\pi/2]$ does it: it turns the $\theta$-integral into a geometric one whose value is $(1-e^{-aR})\pi/(2aR)$, and the factor $R$ cancels.

The second point, which Ahlfors emphasises, is about convergence rather than estimation: for a Fourier-type integrand with only a simple zero at infinity the integral converges only conditionally, so proving that the *symmetric* limit exists is not enough. Integrating over a rectangle instead of a semicircle lets the two ends go to infinity independently.
:::

:::proof{provenance=adapted src="arfken-2013:§11.8, pp. 526, 528-529; rhb-2006:§24.13.2, Eq. (24.71), p. 865"}
**The arc lemma.** On the arc, $\lvert dz\rvert = R\,d\theta$ and $\lvert f(z)\rvert \le M_C(R)$, so by the $ML$ estimate (:ref[]{to=complex.contour-integrals})

$$
\left\lvert \int_C f(z)\, dz\right\rvert \;\le\; (\theta_2-\theta_1)\, R\, M_C(R) \;=\; (\theta_2-\theta_1)\,\max_{C}\lvert z f(z)\rvert ,
$$

which tends to $0$ by hypothesis. For a rational $f=p/q$ of degrees $m$ and $n$, $\lvert z f(z)\rvert \sim \lvert z\rvert^{m+1-n}$ for large $\lvert z\rvert$, which tends to $0$ exactly when $n \ge m+2$.

**Jordan's lemma.** Parametrise $\Gamma_R$ by $z = Re^{i\theta}$. Since $\lvert e^{iaz}\rvert = \lvert e^{iaR\cos\theta}\rvert\,e^{-aR\sin\theta} = e^{-aR\sin\theta}$,

$$
\left\lvert \int_{\Gamma_R} e^{iaz}f(z)\, dz \right\rvert
\;\le\; \int_0^{\pi} e^{-aR\sin\theta}\,\lvert f(Re^{i\theta})\rvert\, R\, d\theta
\;\le\; M(R)\,R\int_0^{\pi} e^{-aR\sin\theta}\, d\theta .
$$

The last integrand is symmetric about $\theta = \pi/2$, because $\sin\theta$ is, so the integral equals twice the integral over $[0,\pi/2]$. On that interval $\sin\theta$ is concave, hence lies above the chord joining $(0,0)$ to $(\pi/2,1)$:

$$
\sin\theta \;\ge\; \frac{2\theta}{\pi} , \qquad 0\le\theta\le\frac\pi2 .
$$

(Concavity holds because $(\sin\theta)'' = -\sin\theta \le 0$ there, and a concave function on an interval is at least its chord.) Therefore $e^{-aR\sin\theta} \le e^{-2aR\theta/\pi}$ and

$$
R\int_0^{\pi}e^{-aR\sin\theta}\,d\theta \;\le\; 2R\int_0^{\pi/2} e^{-2aR\theta/\pi}\, d\theta
\;=\; 2R\cdot\frac{\pi}{2aR}\Bigl(1 - e^{-aR}\Bigr) \;<\; \frac{\pi}{a} .
$$

Hence the arc integral is at most $\pi M(R)/a$, which tends to $0$ with $M(R)$. Note where $a>0$ entered: in the sign of the exponent $-aR\sin\theta$, which is non-positive only because $\sin\theta\ge0$ on the upper arc and $a>0$.

**Evaluation 1.** Apply the residue theorem to $C_R$ for $R$ large enough that every singularity of $f$ in the upper half-plane lies inside (there are finitely many, so such $R$ exists):

$$
\int_{-R}^{R} f(x)\,dx \;+\; \int_{\Gamma_R} f(z)\, dz \;=\; 2\pi i \sum_{\operatorname{Im}z_j>0}\operatorname*{Res}_{z=z_j} f .
$$

The right-hand side is independent of $R$; the arc integral tends to $0$ by the arc lemma applied to $\Gamma_R$, for which $M_{\Gamma_R}(R) = M(R)$; hence $\int_{-R}^{R} f$ converges to the residue sum, which is the symmetric limit asserted. If moreover $f = p/q$ is rational with $\deg q \ge \deg p + 2$, then $\lvert f(x)\rvert \le C x^{-2}$ for large $\lvert x\rvert$, so $\int_{-\infty}^{\infty}\lvert f\rvert < \infty$ and the symmetric limit is the integral. Nothing stronger is claimed in general, and nothing stronger is true: the remark block gives a non-rational $f$ satisfying every hypothesis of part 1 for which $\int_{-\infty}^{\infty}f$ does not exist.

**Evaluation 2.** Jordan's lemma gives the same conclusion for the symmetric limit. To obtain the integral with independent limits, follow Ahlfors (p. 157) and replace the semicircle by three sides of a rectangle with vertices $X_2$, $X_2 + iY$, $-X_1+iY$, $-X_1$, chosen large enough to contain all upper-half-plane singularities. The only hypothesis available is $M(R)\to0$, so put

$$
m(X) \;=\; \sup_{R \ge X} M(R) \;=\; \sup\{\,\lvert f(z)\rvert : \lvert z\rvert \ge X,\ \operatorname{Im}z\ge0\,\} ,
$$

which is finite for large $X$ and tends to $0$ as $X\to\infty$ precisely because $M(R)\to0$. (Note $m$ is non-increasing, and $m(X) \ge M(X)$.) Every point of the right-hand vertical side has $\lvert z\rvert \ge X_2$, so $\lvert f\rvert \le m(X_2)$ there, while $\lvert e^{iaz}\rvert = e^{-ay}$; hence that side contributes at most

$$
\int_0^{Y} m(X_2)\,e^{-ay}\, dy \;<\; \frac{m(X_2)}{a} ,
$$

and similarly the left side contributes at most $m(X_1)/a$. Every point of the top side has $\lvert z\rvert\ge Y$, so that side contributes at most $m(Y)\,e^{-aY}(X_1+X_2)$, which tends to $0$ as $Y\to\infty$ for fixed $X_1,X_2$. Letting $Y\to\infty$ first and then $X_1, X_2\to\infty$ independently gives

$$
\left\lvert \int_{-X_1}^{X_2} f(x)e^{iax}\,dx \;-\; 2\pi i\sum_{\operatorname{Im}z_j>0}\operatorname*{Res}\bigl(fe^{iaz}\bigr)\right\rvert
\;\le\; \frac{m(X_1)+m(X_2)}{a} \;\longrightarrow\; 0 ,
$$

so the integral exists as an improper integral with independent limits and equals the residue sum. $\square$
:::

:::method[Recipe]{provenance=adapted src="arfken-2013:§11.8, pp. 525-530"}
1. **Make the integrand a function of a complex variable** and locate all its singularities. If any lies on the real axis, this method does not apply as it stands: see :ref[]{to=complex.principal-value-integrals}. If there is a branch point, see :ref[]{to=complex.branch-cut-integrals}.
2. **Choose the half-plane.** With a factor $e^{iax}$ present, the choice is forced: upper half-plane if $a>0$, lower if $a<0$. Without such a factor, either will do; pick the one with fewer or simpler poles.
3. **Check the decay.** Compute $M(R)$. Use the arc lemma if $R\,M(R)\to0$; otherwise use Jordan's lemma, which needs only $M(R)\to0$ but requires the exponential factor.
4. **Convert a cosine or sine to an exponential before closing the contour**, not after: $\cos ax$ and $\sin ax$ both grow in *both* half-planes, so neither Jordan's lemma nor the arc lemma applies to them directly. Write $\int f\cos ax\,dx = \operatorname{Re}\int f e^{iax}dx$ when $f$ is real on the real axis, or symmetrise the range first.
5. **Sum the residues in the chosen half-plane** and multiply by $2\pi i$ (upper) or $-2\pi i$ (lower).
6. **Reduce a half-line integral to the whole line first, if possible.** If the integrand is even, $\int_0^{\infty} = \tfrac12\int_{-\infty}^{\infty}$. If it is neither even nor odd, this method may not apply; a sector contour may instead (Arfken, Example 11.8.6, p. 531).
7. **Check.** The answer must be real if the integrand is; it must have the right sign; and numerical quadrature settles it.
:::

:::remark[Where the hypotheses are used]{provenance=original}
- **Decay, not merely convergence of the real integral.** $\int_{-\infty}^{\infty}\sin x/x\,dx$ converges, but $f(z) = \sin z/z$ grows like $e^{\lvert \operatorname{Im}z\rvert}$ and no arc lemma applies. Rewriting it with $e^{iz}$ and a principal value is the correct route (:ref[]{to=complex.principal-value-integrals}).
- **Jordan's lemma is strictly stronger where it applies.** Riley, Hobson and Bence impose $R$ times the maximum of $\lvert f\rvert$ tending to zero as condition (ii) for closing with a semicircle (p. 862), and then make the comparison explicit when they come to Jordan's lemma (p. 864): there one needs only $M(R)\to0$. The example $\int x\sin 2x/(x^2+9)\,dx$ below has $z f(z) \to 1 \ne 0$, so the arc lemma fails and Jordan's lemma is required.
- **$R\,M(R)\to0$ controls the arc, not the convergence of the real integral.** Part 1 asserts only the symmetric limit, and outside the rational case that is all one gets. Take

  $$
  f(z) \;=\; \frac{1}{(z+i)\operatorname{Log}(z+i)} ,
  $$

  with $\operatorname{Log}$ the principal branch. For $\operatorname{Im}z \ge 0$ the point $z+i$ has imaginary part at least $1$, so it never meets the cut $(-\infty,0]$ and never equals $1$: $f$ is analytic on the whole closed upper half-plane, with no singularities at all. On $\lvert z\rvert = R$ in the upper half-plane, $\lvert z+i\rvert \ge R-1$ and $\lvert \operatorname{Log}(z+i)\rvert \ge \ln(R-1)$, so $R\,M(R) \le R/\bigl((R-1)\ln(R-1)\bigr) \to 0$; numerically $R\,M(R) = 0.2171$ at $R=100$ and $0.05429$ at $R = 10^{8}$, tracking $1/\ln R$. Every hypothesis of part 1 holds, and the symmetric limit is $0$ because there are no residues -- numerically $\int_{-R}^{R}f$ has modulus $0.225$ at $R = 10^{6}$ and falls like $\pi/\ln R$, not like $1/\ln R$: the products $\lvert\int_{-R}^{R}f\rvert\ln R$ come out as $3.0696$ at $R = 10^{4}$, $3.1086$ at $R = 10^{6}$ and $3.1228$ at $R = 10^{8}$, climbing towards $\pi$. (The constant matters only to keep the two decay rates quoted in this bullet distinct: the $R\,M(R)$ values above are $1/\ln R$ with constant $1$.) But on the real axis $f(x) \sim 1/(x\ln x)$ as $x\to+\infty$, whose integral diverges: $\operatorname{Re}\int_1^{X}f$ grows like $\ln\ln X$, taking the values $1.680$ at $X=10^{2}$ and $3.289$ at $X = 10^{10}$, a difference of $1.609$ against $\ln\ln 10^{10} - \ln\ln 10^{2} = 1.609$. So $\int_{-\infty}^{\infty}f$ does not exist, while $\lim_{R}\int_{-R}^{R}f$ does. The two tails cancel; they do not separately converge.

  Riley, Hobson and Bence corroborate the point from the other side: their recipe for closing with a large semicircle carries, besides the analyticity condition (i) and the decay condition (ii) quoted above, a third hypothesis (iii) that $\int_{-\infty}^{0}f$ and $\int_{0}^{\infty}f$ *both exist* (p. 862). That is exactly what this example violates, and it is why our part 1 can only assert the symmetric limit: we have not assumed (iii), so we must not conclude anything stronger than what the contour gives.
- **$a>0$ and the choice of half-plane are not interchangeable.** Closing $\int e^{ix}f(z)\,dz$ downwards makes $\lvert e^{iz}\rvert = e^{+\lvert y\rvert}$ blow up, and the arc contribution diverges. Arfken states this as the remark that the two half-planes are not equivalent for Jordan's lemma (p. 528).
- **Finitely many singularities in the half-plane.** Needed so that some finite $R$ encloses them all. A function such as $1/\sinh(\pi z)$ has infinitely many poles going up the imaginary axis, and this method must be replaced by one that controls an infinite residue sum.
- **No poles on the real axis.** Otherwise the real integral diverges and only a principal value can be assigned.
:::

:::example[Rational integrand: a quartic denominator]{provenance=original}
Evaluate

$$
I \;=\; \int_0^{\infty}\frac{x^{2}}{x^{4}+16}\, dx .
$$

**Step 6 first: symmetrise.** The integrand is even, so $I = \tfrac12\int_{-\infty}^{\infty} x^{2}(x^4+16)^{-1}dx$.

**Steps 1-3.** Put $f(z) = z^{2}/(z^{4}+16)$. Its poles are the solutions of $z^{4} = -16$, i.e. $z = 2e^{i(2k+1)\pi/4}$ for $k=0,1,2,3$:

$$
z_1 = \sqrt2(1+i),\quad z_2 = \sqrt2(-1+i),\quad z_3 = \sqrt2(-1-i),\quad z_4=\sqrt2(1-i),
$$

all simple and none real. The upper half-plane contains $z_1$ and $z_2$. Since $\deg(\text{denominator}) = 4 \ge 2 + 2 = \deg(\text{numerator})+2$, the arc lemma applies; concretely $\lvert z f(z)\rvert \sim \lvert z\rvert^{-1}\to0$.

**Step 5: residues.** Each pole is a simple zero of $z^4+16$, so by the quotient rule (:ref[]{to=complex.residue-theorem})

$$
\operatorname*{Res}_{z=z_j} f \;=\; \frac{z_j^{2}}{4z_j^{3}} \;=\; \frac{1}{4z_j} .
$$

Using $1/(1+i) = (1-i)/2$ and $1/(-1+i) = (-1-i)/2$,

$$
\operatorname*{Res}_{z=z_1} f = \frac{1}{4\sqrt2\,(1+i)} = \frac{1-i}{8\sqrt2},
\qquad
\operatorname*{Res}_{z=z_2} f = \frac{1}{4\sqrt2\,(-1+i)} = \frac{-1-i}{8\sqrt2} ,
$$

whose sum is $\dfrac{(1-i)+(-1-i)}{8\sqrt2} = \dfrac{-2i}{8\sqrt2} = \dfrac{-i}{4\sqrt2}$.

**Assemble.**

$$
\int_{-\infty}^{\infty}\frac{x^{2}\,dx}{x^{4}+16} \;=\; 2\pi i\cdot\frac{-i}{4\sqrt2} \;=\; \frac{2\pi}{4\sqrt2} \;=\; \frac{\pi}{2\sqrt2} ,
\qquad
I \;=\; \frac{\pi}{4\sqrt2} \;=\; \frac{\sqrt2\,\pi}{8} .
$$

**Check.** $\sqrt2\pi/8 = 0.5553603673$; numerical quadrature of $I$ returns $0.5553603673$.
:::

:::example[Fourier-type integrand: Jordan's lemma doing work the arc lemma cannot]{provenance=original}
Evaluate

$$
J_1 \;=\; \int_{-\infty}^{\infty}\frac{\cos 2x}{x^{2}+9}\, dx
\qquad\text{and}\qquad
J_2 \;=\; \int_{-\infty}^{\infty}\frac{x\sin 2x}{x^{2}+9}\, dx .
$$

**Set up both at once.** Both are parts of $\displaystyle\int_{-\infty}^{\infty} g(x)\, e^{2ix}dx$ with $g(x)$ real: take $g(z) = 1/(z^2+9)$ for $J_1$ and $g(z) = z/(z^{2}+9)$ for $J_2$, and use

$$
J_1 \;=\; \operatorname{Re}\int_{-\infty}^{\infty}\frac{e^{2ix}}{x^{2}+9}\,dx ,
\qquad
J_2 \;=\; \operatorname{Im}\int_{-\infty}^{\infty}\frac{x\,e^{2ix}}{x^{2}+9}\,dx ,
$$

valid because $g$ is real on the real axis and $e^{2ix} = \cos2x + i\sin2x$.

**Decay.** $z^2+9$ vanishes only at $\pm3i$, so in both cases the only upper-half-plane singularity is the simple pole $z = 3i$. For $J_1$, $M(R) = 1/(R^2-9)\to0$ and even $R\,M(R)\to0$: either lemma works. For $J_2$, $M(R) = R/(R^{2}-9)\to0$ but $R\,M(R) \to 1 \ne 0$: the arc lemma fails and **Jordan's lemma is essential**. Since $a = 2 > 0$, we close upwards in both cases.

**Residues.** With $z^2+9 = (z-3i)(z+3i)$ and $e^{2i(3i)} = e^{-6}$,

$$
\operatorname*{Res}_{z=3i}\frac{e^{2iz}}{z^{2}+9} \;=\; \frac{e^{-6}}{6i} ,
\qquad
\operatorname*{Res}_{z=3i}\frac{z\,e^{2iz}}{z^{2}+9} \;=\; \frac{3i\,e^{-6}}{6i} \;=\; \frac{e^{-6}}{2} .
$$

**Assemble.**

$$
\int_{-\infty}^{\infty}\frac{e^{2ix}}{x^{2}+9}dx \;=\; 2\pi i\cdot\frac{e^{-6}}{6i} \;=\; \frac{\pi e^{-6}}{3},
\qquad
\int_{-\infty}^{\infty}\frac{x\,e^{2ix}}{x^{2}+9}dx \;=\; 2\pi i \cdot \frac{e^{-6}}{2} \;=\; i\pi e^{-6} .
$$

Taking real and imaginary parts,

$$
J_1 \;=\; \frac{\pi e^{-6}}{3} \;=\; 0.0025957432 ,
\qquad
J_2 \;=\; \pi e^{-6} \;=\; 0.0077872296 .
$$

As a by-product, $\int_{-\infty}^{\infty}\sin 2x\,(x^2+9)^{-1}dx = 0$ and $\int_{-\infty}^{\infty} x\cos2x\,(x^2+9)^{-1}dx = 0$, both correct by oddness.

**Check.** Oscillatory numerical quadrature returns $0.0025957432$ and $0.0077872296$. The exponential smallness is characteristic: the Fourier transform of a function analytic in a strip of width $3$ about the real axis decays like $e^{-3\lvert k\rvert}$, and here $k = 2$ with the pole at distance $3$ gives $e^{-6}$.
:::

:::application[Fourier transforms, causal response and lattice Green's functions]{provenance=original}
- **Fourier transforms of rational spectra.** The pair $1/(x^2+b^2) \leftrightarrow (\pi/b)e^{-b\lvert k\rvert}$, computed above with $b = 3$, is the Lorentzian-to-exponential pair that underlies linewidth analysis: a Lorentzian spectral line of half-width $b$ corresponds to an exponentially decaying correlation function with rate $b$. The method generalises to any rational spectral density, which is how the correlation function of a linear system driven by white noise is computed.
- **Causality and which half-plane.** A response function $\chi(\omega)$ with no poles in the upper half-plane gives, by closing the contour upwards for $t<0$, the vanishing of the response before the stimulus. Jordan's lemma is the step that discards the arc, and the half-plane in which the exponential decays is fixed by the sign of $t$. The retarded, advanced and Feynman Green's functions differ only in how the contour passes the poles, and the different results are the different causal structures.
- **Lattice sums and propagators.** Momentum integrals of the form $\int dk\, e^{ikx}/(k^{2}+m^{2})$ produce the Yukawa factor $e^{-m\lvert x\rvert}$ by exactly the computation above, with the pole at $k = im$ fixing the range $1/m$. The "mass equals inverse range" dictionary is a statement about the position of a pole in the complex momentum plane.
- **Deciding whether to use a sector instead.** When the integrand is neither even nor odd and no exponential is available -- for instance $\int_0^\infty dx/(x^3+1)$ -- a wedge of opening $2\pi/3$ replaces the semicircle and the same arc lemma applies to the arc of the wedge (Arfken, Example 11.8.6, p. 531). Recognising which contour closes an integral is the practical skill this method teaches.
:::
