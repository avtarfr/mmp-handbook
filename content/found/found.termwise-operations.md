---
id: found.termwise-operations
title: Integrating and differentiating series term by term
kind: theorem
level: core
summary: Uniform convergence on a finite interval lets a limit or a sum be taken through an integral, while term-by-term differentiation needs the differentiated series to converge uniformly; both fail without those hypotheses.
prereqs: [found.uniform-convergence, found.series-convergence-tests]
provenance: adapted
sources:
  - work: arfken-2013
    loc: "§1.2, Properties of uniformly convergent series, p. 24, Eqs. (1.38) and (1.39)"
    pages: "24"
    role: statements of term-by-term integration and term-by-term differentiation with their hypotheses
  - work: rhb-2006
    loc: "§4.4(v), p. 131; §4.5.2(iii), p. 135"
    pages: "131, 135"
    role: the warning that termwise operations are not generally valid, and the contrast with power series
  - work: stakgold-holst-2011
    loc: "§2.2, p. 112 (distributional versus classical term-by-term differentiation); §2.3, p. 128 (termwise integration of a uniformly convergent series to get Fourier coefficients)"
    pages: "112, 128"
    role: a standard use of termwise integration, and the contrast with distributional differentiation
---

:::note{provenance=original}
**What it means.** Integration averages, so it tolerates a small uniform error: a band of width $\varepsilon$ around the limit changes the integral by at most $\varepsilon$ times the length of the interval. Differentiation reads off slopes, and a function can lie within $\varepsilon$ of another while oscillating steeply, so no uniform bound on the functions controls their derivatives. That asymmetry is why the integration theorem assumes uniform convergence of the series itself and the differentiation theorem assumes it of the differentiated series. When you cannot check hypothesis 3, differentiate inside the sum only if the series is a power series, where the differentiated series automatically has the same radius of convergence; see :ref[Power series]{to=found.power-series}.
:::

:::statement[Term-by-term integration]{provenance=adapted src="arfken-2013:§1.2, p. 24, property 2 and Eq. (1.38)"}
Let $a < b$ be finite.

1. **Sequence form.** Let $f_n : [a,b] \to \mathbb{C}$ be continuous and let $f_n \to f$ uniformly on $[a,b]$. Then $f$ is continuous, every integral below exists, and
   $$
   \int_a^b f_n(x)\,dx \ \longrightarrow \ \int_a^b f(x)\,dx ,
   \qquad\text{since}\qquad
   \Bigl\lvert \int_a^b (f_n - f) \Bigr\rvert \le (b-a) \sup_{x \in [a,b]} \lvert f_n(x) - f(x) \rvert .
   $$
2. **Series form.** Let every $u_n : [a,b] \to \mathbb{C}$ be continuous and let $\sum_{n \ge 1} u_n$ converge uniformly on $[a,b]$ to $S$. Then $S$ is continuous and
   $$
   \int_a^b S(x)\,dx = \sum_{n=1}^{\infty} \int_a^b u_n(x)\,dx ,
   $$
   the series on the right being convergent. The same holds with $[a,b]$ replaced by any $[\alpha,\beta] \subseteq [a,b]$, uniformly in $\alpha$ and $\beta$.

Continuity of the terms is used only to make the integrals exist; the estimate shows that the length of the interval is what converts a uniform bound on the error into a bound on the error of the integral.
:::

:::idea{provenance=original}
Only one estimate is needed. An error that is everywhere smaller than $\varepsilon$ can shift an integral over an interval of length $b-a$ by at most $\varepsilon(b-a)$, and uniform convergence is exactly the statement that the error is eventually everywhere smaller than any prescribed $\varepsilon$. The series form is then not a second theorem: apply the sequence form to the partial sums, whose integrals are, by linearity of the integral, the partial sums of $\sum_n \int u_n$.
:::

:::proof{provenance=original}
**Part 1.** Each $f_n$ is continuous on $[a,b]$ and the convergence is uniform, so by :ref[the continuity of a uniform limit]{to=found.uniform-convergence} the limit $f$ is continuous on $[a,b]$. A continuous function on a closed bounded interval is Riemann integrable, so all three integrals $\int_a^b f_n$, $\int_a^b f$ and $\int_a^b (f_n - f)$ exist.

Write $\delta_n = \sup_{x \in [a,b]} \lvert f_n(x) - f(x)\rvert$, which is finite because $f_n - f$ is continuous on a closed bounded interval. Monotonicity of the integral applied to the pointwise bound $\lvert f_n - f\rvert \le \delta_n$ gives

$$
\Bigl\lvert \int_a^b f_n(x)\,dx - \int_a^b f(x)\,dx \Bigr\rvert
= \Bigl\lvert \int_a^b \bigl(f_n(x) - f(x)\bigr) dx \Bigr\rvert
\le \int_a^b \lvert f_n - f \rvert
\le (b-a)\,\delta_n .
$$

Uniform convergence says precisely that $\delta_n \to 0$, and $b - a$ is a finite constant, so the right-hand side tends to $0$ and the integrals converge as claimed. This is the step at which the hypothesis cannot be weakened to pointwise convergence, and the step at which finiteness of $b-a$ is used.

**Part 2.** Put $s_N = \sum_{n=1}^{N} u_n$. Each $s_N$ is a finite sum of continuous functions, hence continuous, and $s_N \to S$ uniformly on $[a,b]$ by hypothesis. Part 1, applied to the sequence $(s_N)$, gives $\int_a^b s_N \to \int_a^b S$, and $S$ is continuous.

By linearity of the integral over a finite sum, $\int_a^b s_N = \sum_{n=1}^{N} \int_a^b u_n$. The left-hand side converges, so the partial sums of the numerical series $\sum_n \int_a^b u_n$ converge; that is what it means for that series to converge, and its sum is $\lim_N \int_a^b s_N = \int_a^b S$.

For a subinterval $[\alpha,\beta] \subseteq [a,b]$ the same estimate gives $\bigl\lvert\int_{\alpha}^{\beta}(s_N - S)\bigr\rvert \le (\beta - \alpha)\sup_{[\alpha,\beta]}\lvert s_N - S\rvert \le (b-a)\,\delta_N$, a bound in which $\alpha$ and $\beta$ no longer appear; so the convergence holds for every subinterval at once. $\square$
:::

:::statement[Term-by-term differentiation]{provenance=adapted src="arfken-2013:§1.2, p. 24, property 3 and Eq. (1.39)"}
Let $u_n : [a,b] \to \mathbb{C}$ with $[a,b]$ finite, and assume

1. $\sum_{n \ge 1} u_n$ converges uniformly on $[a,b]$, with sum $S$;
2. each $u_n$ is differentiable on $[a,b]$ with $u_n'$ continuous there;
3. $\sum_{n \ge 1} u_n'$ converges uniformly on $[a,b]$.

Then $S$ is differentiable on $[a,b]$, $S'$ is continuous, and

$$
S'(x) = \sum_{n=1}^{\infty} u_n'(x) \qquad \text{for every } x \in [a,b] .
$$

Hypothesis 3 is the essential one and is not implied by hypotheses 1 and 2: uniform convergence of a series says nothing about the convergence of the differentiated series.
:::

:::idea{provenance=original}
Derivatives are not controlled by uniform bounds, but integrals are, so the proof turns the differentiation claim into an integration claim and uses the theorem just proved. Each partial sum is recovered from its own derivative by the fundamental theorem of calculus; pass to the limit in that identity, which is legitimate because hypothesis 3 lets the integral be taken through the sum, and the limit identity exhibits $S$ as an integral of the continuous function $\sum_n u_n'$. Differentiating that identity back gives the result.
:::

:::proof{provenance=original}
Write $g = \sum_{n \ge 1} u_n'$ for the sum of the differentiated series and $s_N = \sum_{n=1}^{N} u_n$ for the partial sums of the original one.

The function $g$ is continuous on $[a,b]$: each $u_n'$ is continuous there by hypothesis 2, and the series $\sum_n u_n'$ converges uniformly on $[a,b]$ by hypothesis 3, so :ref[a uniform limit of continuous functions is continuous]{to=found.uniform-convergence} applies to it.

Each $s_N$ is differentiable on $[a,b]$ with $s_N' = \sum_{n \le N} u_n'$, a finite sum, and this derivative is continuous by hypothesis 2. The fundamental theorem of calculus therefore gives, for every $x \in [a,b]$,

$$
s_N(x) = s_N(a) + \int_a^x s_N'(t)\,dt .
$$

Now let $N \to \infty$ in that identity, one term at a time. On the left, $s_N(x) \to S(x)$ by hypothesis 1, and likewise $s_N(a) \to S(a)$. For the integral, hypothesis 3 gives uniform convergence of $\sum_n u_n'$ on $[a,b]$, hence on $[a,x]$, and the terms $u_n'$ are continuous; so part 2 of the term-by-term integration theorem applies on $[a,x]$ and gives $\int_a^x s_N' \to \int_a^x g$. Hence

$$
S(x) = S(a) + \int_a^x g(t)\,dt \qquad (a \le x \le b).
$$

Since $g$ is continuous on $[a,b]$, its indefinite integral on the right-hand side is differentiable in $x$ with derivative $g(x)$, by the fundamental theorem of calculus once more. Therefore $S$ is differentiable on $[a,b]$ with $S' = g = \sum_{n \ge 1} u_n'$, and $S'$ is continuous because $g$ is. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
- **Uniform convergence cannot be weakened to pointwise in the integration theorem.** On $[0,1]$ put $f_n(x) = 2nx\,e^{-nx^2}$. Each $f_n$ is continuous, and $f_n(x) \to 0$ for every $x \in [0,1]$, yet
  $$
  \int_0^1 f_n(x)\,dx = \bigl[-e^{-nx^2}\bigr]_0^1 = 1 - e^{-n} \ \longrightarrow\ 1 \neq 0 .
  $$
  The convergence is not uniform: $f_n$ attains the value $\sqrt{2n}\,e^{-1/2}$ at $x = 1/\sqrt{2n}$, so $\sup_{[0,1]}\lvert f_n \rvert \to \infty$. The spike carries a fixed amount of area while sliding towards the origin.
- **The interval must be finite.** On $[0,\infty)$ put $g_n(x) = e^{-x/n}/n$. Then $\sup_{x \ge 0} \lvert g_n(x) \rvert = 1/n \to 0$, so $g_n \to 0$ uniformly, but $\int_0^{\infty} g_n(x)\,dx = 1$ for every $n$. The factor $(b-a)$ in the estimate above is exactly what fails. (A limit theorem that survives on unbounded intervals needs a different hypothesis, dominated convergence rather than uniformity.)
- **Uniform convergence of a series does not permit differentiation.** On $\mathbb{R}$ put $f_n(x) = \sin(nx)/n$. Then $\sup_{x}\lvert f_n(x)\rvert = 1/n \to 0$, so $f_n \to 0$ uniformly, while $f_n'(x) = \cos(nx)$ does not converge at all for most $x$: at $x = \pi$ it is $(-1)^n$. To put this in the series form in which the theorem above is stated, telescope: set $u_1 = \sin x$ and $u_n(x) = \sin(nx)/n - \sin((n-1)x)/(n-1)$ for $n \ge 2$, so that the partial sums of $\sum_n u_n$ are exactly the $f_n$. Then $\sum_n u_n$ converges uniformly on $\mathbb{R}$ to $0$, satisfying hypotheses 1 and 2, while the partial sums of $\sum_n u_n'$ are $\cos(nx)$, so hypothesis 3 fails and the conclusion fails with it: the sum is the constant $0$, whose derivative is $0$, while $\sum_n u_n'$ diverges at $x = \pi$. Stakgold and Holst make the same point (p. 112): classically, term-by-term differentiation is available only under restrictive conditions, whereas for distributions it is always allowed, and there $\sin(nx) \to 0$ in the distributional sense.
- **Hypothesis 1 can be weakened to convergence at one point.** If each $u_n$ is continuously differentiable on $[a,b]$, $\sum u_n'$ converges uniformly on $[a,b]$, and $\sum u_n(x_0)$ converges for a single $x_0 \in [a,b]$, then $\sum u_n$ converges uniformly on $[a,b]$ and its sum satisfies $S' = \sum u_n'$. This is stronger than the form stated by Arfken (p. 24), who assumes uniform convergence of $\sum u_n$ outright; it follows by integrating the differentiated series from $x_0$ and using the integration theorem above.
- **A convergent series may not be integrated or differentiated termwise as a matter of course.** Two separate warnings in Riley, Hobson and Bence bear on this. Item (v) on p. 131 is the narrower one: the differentiated or integrated series need not have the same convergence properties as the original. The general warning, that termwise operations are not to be performed as a matter of course, is the one in §4.5.2(iii) on p. 135, where power series are then given as the exception.
- **Part 1 of the integration statement is ours.** Arfken's p. 24 states only the series form, property 2. The sequence form, the $(b-a)\sup$ estimate and the extension to every subinterval $[\alpha,\beta] \subseteq [a,b]$ uniformly in $\alpha$ and $\beta$ are additions of this handbook, and the proof above establishes them; the series form is then a corollary rather than a separate result.
:::

:::example[A geometric cosine series, integrated and differentiated term by term]{provenance=original}
Take $u_n(x) = 2^{-n}\cos(nx)$ for $n \ge 1$ and let $S(x) = \sum_{n \ge 1} u_n(x)$. We shall compute $\int_0^{\pi/2} S$ and $S'(\pi/2)$ term by term, and check both against closed forms obtained without any series.

1. *The hypotheses.* Each $u_n$ is continuous on $\mathbb{R}$, and $\lvert u_n(x)\rvert \le 2^{-n}$ for every real $x$, with $\sum_{n\ge1} 2^{-n} = 1 < \infty$ (a geometric series, :ref[convergent]{to=found.series-convergence-tests}). By the :ref[Weierstrass M-test]{to=found.uniform-convergence} the series converges uniformly on $\mathbb{R}$, so the hypotheses of part 2 of term-by-term integration — continuous terms and a uniformly convergent series — hold on every finite interval. For the derivatives, $u_n'(x) = -n\,2^{-n}\sin(nx)$ is continuous with $\lvert u_n'(x)\rvert \le n\,2^{-n}$, and $\sum_{n \ge 1} n\,2^{-n} = 2 < \infty$; the M-test again gives uniform convergence, so hypothesis 3 of term-by-term differentiation holds too. Both parts of the integration statement and all three hypotheses of the differentiation statement are therefore available on any $[a,b]$.

2. *The sum in closed form.* Summing the geometric series $\sum_{n \ge 1} w^n = w/(1-w)$ at $w = e^{ix}/2$ and taking real parts,
   $$
   S(x) = \operatorname{Re}\frac{e^{ix}/2}{1 - e^{ix}/2}
        = \operatorname{Re}\frac{e^{ix}}{2 - e^{ix}}
        = \frac{2\cos x - 1}{5 - 4\cos x} ,
   $$
   the last step on multiplying numerator and denominator by $\overline{2 - e^{ix}} = 2 - e^{-ix}$ and using $\lvert 2 - e^{ix}\rvert^2 = 5 - 4\cos x$. At $x = \pi/2$ this gives $S(\pi/2) = -1/5$.

3. *Integrate term by term.* Since $\int_0^{\pi/2}\cos(nx)\,dx = \sin(n\pi/2)/n$, which vanishes for even $n$ and equals $(-1)^k/(2k+1)$ at $n = 2k+1$,
   $$
   \int_0^{\pi/2} S(x)\,dx = \sum_{n=1}^{\infty} \frac{\sin(n\pi/2)}{n\,2^{n}}
   = \sum_{k=0}^{\infty} \frac{(-1)^k}{(2k+1)\,2^{2k+1}}
   = \tfrac12 - \tfrac{1}{24} + \tfrac{1}{160} - \tfrac{1}{896} + \cdots
   $$
   The partial sums are $0.5$, $0.458333$, $0.464583$, $0.463467$, $0.463684$, $0.463640$, bracketing the limit from alternate sides.

4. *The same number without series.* Because $2\cos x - 1 = -\tfrac12(5 - 4\cos x) + \tfrac32$, the integrand of step 2 is $-\tfrac12 + \tfrac32 (5-4\cos x)^{-1}$. The substitution $t = \tan(x/2)$, under which $\cos x = (1-t^2)/(1+t^2)$ and $dx = 2\,dt/(1+t^2)$, turns $5 - 4\cos x$ into $(1+9t^2)/(1+t^2)$ and so the second piece into $3\int_0^1 dt/(1 + 9t^2) = \bigl[\arctan 3t\bigr]_0^1 = \arctan 3$, while the first piece contributes $-\pi/4$. Hence
   $$
   \int_0^{\pi/2} S(x)\,dx = -\frac{\pi}{4} + \arctan 3 = 0.4636476090008061 .
   $$
   The series of step 3 is the Maclaurin series of $\arctan$ at $1/2$ — it is what term-by-term integration of the geometric series $1/(1+t^2) = \sum_{k \ge 0}(-1)^k t^{2k}$ over $[0,1/2]$ produces, the M-test with $M_k = 4^{-k}$ supplying the uniform convergence there — so its value is $\arctan\tfrac12$. The two agree exactly: by the addition formula, $\arctan 3 - \arctan 1 = \arctan\frac{3-1}{1+3} = \arctan\tfrac12$.

5. *Differentiate term by term.* By the differentiation theorem, $S'(x) = -\sum_{n\ge1} n\,2^{-n}\sin(nx)$. At $x = \pi/2$ only odd $n$ contribute:
   $$
   S'(\pi/2) = -\sum_{k=0}^{\infty} \frac{(-1)^k (2k+1)}{2^{2k+1}}
   = -\Bigl(\tfrac12 - \tfrac38 + \tfrac{5}{32} - \tfrac{7}{128} + \cdots\Bigr) = -0.24 ,
   $$
   the partial sums being $0.5$, $0.125$, $0.28125$, $0.2265625$, $0.244140625$, $0.23876953125$. Differentiating the closed form of step 2 instead, $S'(x) = -6\sin x/(5 - 4\cos x)^2$, so $S'(\pi/2) = -6/25 = -0.24$ exactly. Both routes give $-6/25$.

6. *What made it work.* The decay $2^{-n}$ is fast enough that multiplying the terms by $n$ leaves a convergent comparand, which is why hypothesis 3 survived differentiation. Replace $2^{-n}$ by $1/n^2$ and the series still converges uniformly (M-test with $M_n = 1/n^2$), but the differentiated series $-\sum_n \sin(nx)/n$ does not converge uniformly on any neighbourhood of $0$, so hypothesis 3 is lost. Its individual terms are no help here: $\sup_x \lvert \sin(nx)/n\rvert = 1/n \to 0$, so the terms do tend to $0$ uniformly, and the failure is in the tails. It is visible in the sum, which is $(\pi - x)/2$ for $0 < x < 2\pi$ and $0$ at $x = 0$, hence discontinuous at $0$; a uniformly convergent series of continuous terms has a continuous sum, so this series cannot converge uniformly near $0$. Concretely, the tail after $N$ terms, evaluated at $x = \pi/N$, is $-0.278521$, $-0.281115$, $-0.281140$ for $N = 10, 100, 1000$ — it does not shrink, but tends to $\pi/2 - \operatorname{Si}(\pi) = -0.2811407$.
:::

:::application{provenance=adapted src="stakgold-holst-2011:§2.3, p. 128"}
**Reading off Fourier coefficients.** A measured signal is often presented already as a uniformly convergent series $f(x) = \sum_{n} c_n e^{inx}$ on $[-\pi,\pi]$. Term-by-term integration against $e^{-imx}$ — legitimate because multiplying a uniformly convergent series by a bounded continuous function leaves it uniformly convergent — collapses the sum by orthogonality to $c_m = (2\pi)^{-1}\int_{-\pi}^{\pi} f(x)e^{-imx}dx$. This is how the coefficients of such an expansion are identified with integrals of the function. The derivation is the one Stakgold and Holst give at p. 128, and this paragraph follows it; that is what the `src` on this block refers to, the two paragraphs below it being ours.

**Verifying a separated-variable solution.** The standard solution of the heat equation $u_t = \kappa u_{xx}$ on $0 \le x \le \pi$ with $u = 0$ at both ends is $u(x,t) = \sum_{n \ge 1} b_n e^{-n^2\kappa t}\sin(nx)$, with the $b_n$ fixed by the initial profile. Checking that this really solves the equation means differentiating the series once in $t$ and twice in $x$, and that needs hypothesis 3. For $t \ge t_0 > 0$ it holds comfortably: the differentiated terms are bounded by $n^2\lvert b_n\rvert e^{-n^2 \kappa t_0}$, and $\sum_n n^2 e^{-n^2\kappa t_0}$ converges, so the M-test applies and the termwise derivatives are legitimate on $x \in [0,\pi]$, $t \ge t_0$. At $t = 0$ it fails: for a discontinuous initial profile such as a step, $b_n$ decays only like $1/n$, and $\sum_n n^2 b_n \sin(nx)$ diverges. The mathematics and the physics agree here — the solution is smooth for every positive time, and no smoothness of the initial data is claimed. The same calculation is what justifies differentiating a Fourier-series solution of the wave or Laplace equation inside the domain while refusing to do so on the boundary.

**Where the warning bites.** In perturbative calculations one routinely differentiates a series expansion with respect to a parameter — a coupling, a temperature, a frequency. The theorem says that this is safe only when the differentiated series converges uniformly in that parameter on the range of interest. A series whose terms peak more and more sharply as the index grows, which is the mechanism in every counterexample in the remark above, will pass the convergence test and fail the differentiation test.
:::
