---
id: fourier.poisson-summation
title: Poisson summation formula
kind: theorem
level: core
summary: "Wrapping a rapidly decreasing function around the circle and sampling its Fourier transform at the integers produce the same periodic function, so a slowly convergent lattice sum can be traded for a rapidly convergent one."
prereqs: [fourier.fourier-transform, fourier.fourier-inversion, fourier.fourier-series, fourier.fejer-theorem]
provenance: adapted
sources:
  - work: stein-shakarchi-2003
    loc: "Ch. 5, §1.1, the definition of moderate decrease, p. 131; §3, the periodization $F_1$ and the sampled series $F_2$, pp. 153–154; Thm 3.1 (Poisson summation formula) with its proof, p. 154; the extension to functions of moderate decrease and the cotangent periodization, p. 155; §3.1, the theta function and Thm 3.2 (its functional equation), p. 155; §3.2, Thm 3.3 (the heat kernel on the circle as a periodization), p. 156. Uniqueness for Fourier coefficients: Ch. 2, Thm 2.1, p. 39"
    pages: "39, 131, 153-156"
    role: the definition of moderate decrease, the statement followed here in both its $x$-dependent and $x=0$ forms, the proof route by computing the Fourier coefficients of the periodization, the extension to moderate decrease, the theta functional equation and the heat-kernel corollary
  - work: folland-1999
    loc: "§8.5, Thm 8.32 (The Poisson Summation Formula) with its decay hypotheses and proof, p. 254; the periodization operator $Pf$ and its Fourier coefficients, p. 254; the use of the formula in summability of Fourier series, Thm 8.36, p. 259"
    pages: "254, 259"
    role: the $n$-dimensional statement with explicit power decay hypotheses on both $f$ and $\\hat f$, and the observation that under them both series converge absolutely and uniformly
  - work: rhb-2006
    loc: "Exercise 13.9, p. 461: the impulse train identity and the general-period summation formula in the symmetric convention"
    pages: "461"
    role: the formula for a general period $X$ in the physicists' symmetric convention, and its reading as the Fourier series of a periodic train of delta functions
  - work: strauss-2008
    loc: "Exercise 12.3.7, p. 349: the periodization of a compactly supported continuous function, its Fourier coefficients and the resulting summation formula; the transform convention and table, pp. 344–345"
    pages: "344-345, 349"
    role: the same derivation carried out in the angular-frequency convention, and the resulting constant $1/2\\pi$ in that convention
  - work: stakgold-holst-2011
    loc: "§2.3, Example 5 (The Poisson summation formula), (2.3.26), p. 139, obtained from the completeness relation (2.3.23) for the periodic delta train"
    pages: "139"
    role: the distributional derivation from the delta-comb completeness relation, and the version with a general lattice spacing $\\lambda$
---

:::definition[Periodization and sampling]{provenance=adapted src="stein-shakarchi-2003:Ch. 5, §3, pp. 153–154; folland-1999:§8.5, p. 254"}
Let $f : \mathbb{R}\to\mathbb{C}$. Its **periodization** is

$$
(Pf)(x) = \sum_{n=-\infty}^{\infty} f(x+n) ,
$$

the function obtained by wrapping $f$ around a circle of circumference $1$ and adding the overlapping layers. Whenever the series converges, $Pf$ has period $1$, because replacing $x$ by $x+1$ only relabels the terms. :cite[Folland]{work=folland-1999 loc="§8.5, p. 254"} writes $Pf = \sum_k T_k f$ and treats it as an operator on $L^1$.

Against this stands a second periodic function built from $f$, the **sampled series**

$$
(Sf)(x) = \sum_{n=-\infty}^{\infty} \hat f(n)\,e^{2\pi i n x} ,
$$

formed by reading off the Fourier transform at the integers and using those numbers as Fourier coefficients.

**Convention, local to this unit.** Throughout this unit $\hat f$ denotes the transform in the $2\pi$-in-the-exponent convention,

$$
\hat f(\xi) = \int_{\mathbb{R}} f(x)\,e^{-2\pi i x\xi}\,dx ,
$$

which is the one :cite[Stein and Shakarchi]{work=stein-shakarchi-2003 loc="Ch. 5, §1, p. 134"} and :cite[Folland]{work=folland-1999 loc="§8.3, p. 249"} use. It is **not** the handbook's default: :ref[the Fourier transform]{to=fourier.fourier-transform} defines $\hat f(k) = \int f(x)e^{-ikx}dx$, and the dictionary in its table of conventions converts between the two by $\xi \mapsto 2\pi\xi$, that is, the $\hat f(\xi)$ of this unit is the $\hat f(2\pi\xi)$ of that one. Every transform quoted below — the Gaussian and dilation rules of the first example, the Lorentzian pair of the second — is the corresponding entry of that unit's table read through this dictionary, and the check is shown where it is used. The reason for departing from the default here is that in this convention the formula carries no constants at all; the price, and the other conventions in which the sources state it, are in the note below.

Two decay classes are used. $f$ belongs to the Schwartz space $\mathcal{S}(\mathbb{R})$ if it is smooth and $x^k f^{(m)}(x)$ is bounded for all $k,m \ge 0$. The second is :cite[Stein and Shakarchi's]{work=stein-shakarchi-2003 loc="Ch. 5, §1.1, p. 131"} **moderate decrease**, defined by them as: $f$ is continuous and $\lvert f(x)\rvert \le A/(1+x^2)$ for some constant $A>0$. Continuity is part of the definition and not an afterthought; a bounded function with a jump is not of moderate decrease however fast it decays. On $f$ alone the condition is weaker than membership of $\mathcal{S}$, but the form of the theorem that uses it — the one :cite[Stein and Shakarchi]{work=stein-shakarchi-2003 loc="Ch. 5, §3, p. 155"} record as sufficient — asks for moderate decrease of $\hat f$ as well, which a Schwartz function supplies for nothing. It is a trade, not a straight loosening.
:::

:::statement[Poisson summation formula]{provenance=adapted src="stein-shakarchi-2003:Ch. 5, Thm 3.1 and the remark on p. 155, pp. 154–155"}
Let $f \in \mathcal{S}(\mathbb{R})$. Then for every $x \in \mathbb{R}$

$$
\sum_{n=-\infty}^{\infty} f(x+n) \;=\; \sum_{n=-\infty}^{\infty} \hat f(n)\,e^{2\pi i n x} ,
$$

both series converging absolutely. Setting $x = 0$,

$$
\sum_{n=-\infty}^{\infty} f(n) \;=\; \sum_{n=-\infty}^{\infty} \hat f(n) .
$$

Read the other way round: sampling $\hat f$ on the integer lattice returns precisely the Fourier coefficients of $Pf$, so $Pf$ and $Sf$ of the definition above are one and the same function. The conclusion survives, with the same proof, if $f$ is only required to be of moderate decrease and $\hat f$ as well.
:::

:::statement[The formula in $\mathbb{R}^n$]{provenance=adapted src="folland-1999:§8.5, Thm 8.32, p. 254"}
The identity

$$
\sum_{k \in \mathbb{Z}^n} f(x+k) = \sum_{\kappa\in\mathbb{Z}^n}\hat f(\kappa)\,e^{2\pi i \kappa\cdot x} ,
\qquad\text{hence}\qquad
\sum_{k\in\mathbb{Z}^n} f(k) = \sum_{\kappa\in\mathbb{Z}^n}\hat f(\kappa) ,
$$

is Theorem 8.32 of :cite[Folland]{work=folland-1999 loc="§8.5, Thm 8.32, p. 254"}, who assumes a continuous $f$ on $\mathbb{R}^n$ obeying the two power bounds

$$
\lvert f(x)\rvert \le C(1+\lvert x\rvert)^{-n-\varepsilon} ,
\qquad
\lvert \hat f(\xi)\rvert \le C(1+\lvert\xi\rvert)^{-n-\varepsilon} ,
$$

with $C$ and $\varepsilon$ positive constants, and who records that under them each side converges absolutely, and uniformly on the torus $\mathbb{T}^n$. This block quotes that theorem; the proof given below is written for $n=1$, and Folland's runs the same way on $\mathbb{T}^n$, with the Fourier coefficients of the periodization computed over a fundamental cube instead of over $[0,1]$. The exponent is sharp in form rather than decorative: $-n-\varepsilon$ is exactly what makes $\sum_{k\in\mathbb{Z}^n}(1+\lvert k\rvert)^{-n-\varepsilon}$ finite, as a comparison with the corresponding integral over $\mathbb{R}^n$ shows.
:::

:::note[Other periods and other conventions]{provenance=adapted src="rhb-2006:Exercise 13.9, p. 461; strauss-2008:Exercise 12.3.7, p. 349; stakgold-holst-2011:§2.3, (2.3.26), p. 139"}
Rescaling $x$ turns the unit lattice into a lattice of spacing $L > 0$. Applying the theorem to $g(x) = f(Lx)$, whose transform is $\hat g(\xi) = L^{-1}\hat f(\xi/L)$, gives

$$
\sum_{n\in\mathbb{Z}} f(x+nL) = \frac{1}{L}\sum_{m\in\mathbb{Z}}\hat f\!\left(\frac{m}{L}\right)e^{2\pi i m x/L} .
$$

The lattice of spacing $L$ in $x$ is paired with the **reciprocal lattice** of spacing $1/L$ in $\xi$: squeezing one spreads the other.

- :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="Exercise 13.9, p. 461"} use $\tilde f(\omega) = (2\pi)^{-1/2}\int f(t)e^{-i\omega t}dt$ and period $X$, and write the result as $\sum_n f(t+nX) = (\sqrt{2\pi}/X)\sum_n \tilde f(2n\pi/X)e^{2\pi n i t/X}$. Since $\hat f(m/X) = \sqrt{2\pi}\,\tilde f(2\pi m/X)$, this is the displayed formula.
- :cite[Strauss]{work=strauss-2008 loc="Exercise 12.3.7, p. 349"} uses $F(k) = \int f(x)e^{-ikx}dx$ and period $2\pi$, and obtains $\sum_n f(2\pi n) = \frac{1}{2\pi}\sum_n F(n)$, again the same statement because $\hat f(m/2\pi) = F(m)$.
- :cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="§2.3, (2.3.26), p. 139"} derive it distributionally from the completeness relation $\sum_k \delta(x-2k\pi) = \frac{1}{2\pi}\sum_n e^{inx}$ applied to a test function, which is the same identity read as the Fourier series of a train of impulses; :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="Exercise 13.9, p. 461"} start from the same impulse train. That route needs :ref[distributions]{to=fourier.tempered-distributions} to be legitimate, and is the quickest way to remember the formula; the proof below needs nothing beyond Fourier series.

Nothing in this unit mixes conventions: all displayed formulas use $\hat f(\xi) = \int f(x)e^{-2\pi i x\xi}dx$.
:::

:::idea{provenance=original}
There are only two natural ways to manufacture a $1$-periodic function out of a function on the line. One is geometric: cut the line into unit intervals and stack them, which is the periodization. The other is spectral: the inversion formula writes $f$ as a continuous superposition $\int\hat f(\xi)e^{2\pi i x\xi}d\xi$ of exponentials, and keeping only the integer frequencies — the ones that are already $1$-periodic — leaves the sampled series. The theorem says these two constructions agree. The proof is correspondingly short: both candidates are continuous and $1$-periodic, so it is enough to compare their Fourier coefficients, and the $m$th coefficient of the periodization is computed by unfolding a sum of integrals over consecutive unit intervals back into a single integral over $\mathbb{R}$, which is $\hat f(m)$ by definition.
:::

:::proof{provenance=adapted src="stein-shakarchi-2003:Ch. 5, Thm 3.1, p. 154, using Ch. 2, Thm 2.1, p. 39"}
**Step 1: both sides are continuous and $1$-periodic.** Since $f \in \mathcal{S}(\mathbb{R})$, there is $A$ with $\lvert f(y)\rvert \le A/(1+y^2)$. For $x$ in a compact set $K$ the terms $f(x+n)$ are therefore dominated by a summable sequence independent of $x$, so $\sum_n f(x+n)$ converges absolutely and uniformly on $K$ and $Pf$ is continuous. It is $1$-periodic because $n \mapsto n+1$ permutes the terms. The same argument applies to $Sf$: the Fourier transform of a Schwartz function is Schwartz, so $\sum_n \lvert\hat f(n)\rvert < \infty$ and $Sf$ is a uniformly convergent series of continuous $1$-periodic functions.

**Step 2: the Fourier coefficients of the periodization.** Fix $m \in \mathbb{Z}$ and compute $\widehat{Pf}(m) = \int_0^1 (Pf)(x)e^{-2\pi i m x}dx$. The series converges uniformly on $[0,1]$ by step 1, so it may be integrated term by term:

$$
\widehat{Pf}(m) = \sum_{n=-\infty}^{\infty}\int_0^1 f(x+n)\,e^{-2\pi i m x}\,dx .
$$

In the $n$th term substitute $y = x+n$. The interval $[0,1]$ becomes $[n, n+1]$, and $e^{-2\pi i m x} = e^{-2\pi i m y}e^{2\pi i m n} = e^{-2\pi i m y}$ because $m n$ is an integer. This is the one place where it matters that the sampling points are the integers, that is, the lattice dual to the period.

**Step 3: unfold the sum of integrals.** The intervals $[n,n+1]$, $n \in \mathbb{Z}$, tile the line and overlap only at endpoints, so

$$
\widehat{Pf}(m) = \sum_{n=-\infty}^{\infty}\int_n^{n+1} f(y)e^{-2\pi i m y}\,dy = \int_{-\infty}^{\infty} f(y)e^{-2\pi i m y}\,dy = \hat f(m) ,
$$

the regrouping being justified by the absolute convergence of $\int\lvert f\rvert$.

**Step 4: the Fourier coefficients of the sampled series.** $Sf$ is a uniformly convergent trigonometric series, so again it may be integrated term by term, and $\int_0^1 e^{2\pi i n x}e^{-2\pi i m x}dx = \delta_{nm}$ by orthonormality. Hence $\widehat{Sf}(m) = \hat f(m)$ as well.

**Step 5: equal coefficients force equal functions.** The difference $Pf - Sf$ is continuous, $1$-periodic and has all Fourier coefficients zero, so by :ref[the uniqueness theorem for Fourier coefficients]{to=fourier.fejer-theorem} — an integrable function on the circle whose Fourier coefficients all vanish is zero at every point of continuity, which is :cite[Stein and Shakarchi's]{work=stein-shakarchi-2003 loc="Ch. 2, Thm 2.1, p. 39"} Theorem 2.1 and is obtained in this handbook as a corollary of Fejér's theorem — it vanishes identically. That is the first formula; evaluating it at $x=0$ gives the second.

**Step 6: moderate decrease.** If instead $f$ and $\hat f$ are only assumed to be of moderate decrease (continuity included, by the definition above), every step above goes through unchanged: step 1 used only the bound $A/(1+y^2)$ for $f$ and the summability of $\lvert\hat f(n)\rvert$, and steps 2–5 used only uniform convergence and integrability. This is the extension :cite[Stein and Shakarchi]{work=stein-shakarchi-2003 loc="Ch. 5, §3, p. 155"} record. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
- **Decay of $f$ is what makes the left side exist** and converge uniformly, which is needed for the term-by-term integration in step 2. Decay of $\hat f$ does the same for the right side in step 1. Folland's hypotheses make this explicit: $(1+\lvert x\rvert)^{-n-\varepsilon}$ on both sides of the transform is exactly summability over the lattice in both variables.
- **The hypotheses cannot be dropped.** Take $f = \mathbf{1}_{[0,1]}$, the indicator of the unit interval. It obeys the size bound $\lvert f(x)\rvert \le A/(1+x^2)$ but is discontinuous, so by the definition above it is *not* of moderate decrease; and $\hat f(\xi) = (1-e^{-2\pi i\xi})/(2\pi i\xi)$ decays only like $1/\lvert\xi\rvert$, so the hypothesis on $\hat f$ fails as well. Both sides can still be written down: $\hat f(0) = 1$ and $\hat f(n) = 0$ for every non-zero integer $n$, so the right side is $1$, while the left side is $f(0) + f(1) = 2$. The example does not separate the two hypotheses — for a compactly supported $f$ a jump is precisely what forces $\hat f$ to decay no faster than $1/\lvert\xi\rvert$ — but it does show where the proof stops: the periodization equals $1$ off $\mathbb{Z}$ and $2$ on $\mathbb{Z}$, so it is discontinuous, and step 5 concludes nothing about a function that is not continuous. Assigning $f$ the average of its one-sided limits at the two jumps replaces $f(0)+f(1) = 2$ by $\tfrac12+\tfrac12 = 1$ and restores the identity; this is the standard caution for a function with a **jump**. A corner is harmless: for the triangle $f(x) = \max(0,1-\lvert x\rvert)$ one has $\hat f(\xi) = (\sin\pi\xi/\pi\xi)^2 = O(\xi^{-2})$, both hypotheses hold, and both sides equal $1$.
- **Periodization is meaningful more often than the formula is true.** :cite[Stein and Shakarchi]{work=stein-shakarchi-2003 loc="Ch. 5, §3, p. 155"} point out that the symmetric periodization of $f(x) = 1/x$ is $\pi\cot \pi x$ and that of $1/x^2$ is $\pi^2/\sin^2\pi x$, although neither function is of moderate decrease and neither has a Fourier transform in the elementary sense. The lesson is that the left-hand side is the robust object; the equality with the right-hand side is what needs the hypotheses.
- **The lattice must be dual to the period.** Step 2 works because $e^{2\pi i m n}=1$ for integers $m,n$. If one samples $\hat f$ at $\lambda\mathbb{Z}$ with $\lambda \neq 1$ while periodizing over $\mathbb{Z}$, the phases no longer cancel and the computation of step 2 breaks down. It is not merely the argument that fails but the conclusion: for the Gaussian $f(x) = e^{-\pi x^2}$, which is its own transform, the left side at $x=0$ is $\sum_n e^{-\pi n^2} = 1.0864348112$, while the mismatched right side $\sum_n \hat f(\lambda n) = \sum_n e^{-\pi\lambda^2 n^2}$ equals $1.0098908590$ at $\lambda = 1.3$. (Both numbers are values of the theta function $\vartheta(s) = \sum_n e^{-\pi n^2 s}$ studied in the first example below, at $s=1$ and $s=\lambda^2$ respectively.) The correct pairing of spacings $L$ and $1/L$ is in the note above.
- **Smoothness is not needed directly, only through decay.** The formula is often quoted for Schwartz functions, but the proof uses no derivative of $f$. The role of smoothness is indirect: it is what guarantees decay of $\hat f$, by :ref[the smoothness-decay correspondence]{to=fourier.smoothness-decay}.
:::

:::method[Accelerating a lattice sum]{provenance=original}
A sum $\sum_{n\in\mathbb{Z}} f(n)$ whose terms die slowly can be replaced by one whose terms die fast, provided the transform is known.

1. Check the hypotheses: $f$ continuous with $\lvert f(x)\rvert \lesssim (1+\lvert x\rvert)^{-1-\varepsilon}$ and the same for $\hat f$. A corner costs nothing, since it still leaves $\hat f = O(\xi^{-2})$; a jump does, and at a jump $f$ must be given the average of its one-sided limits, or that point treated separately. See the remark.
2. Compute $\hat f$ once, in closed form.
3. Decide which side converges faster. If $f$ is concentrated on a scale $a$, then $\hat f$ is concentrated on the scale $1/a$, so the $f$-side is slow exactly when $a \gg 1$ and fast when $a \ll 1$. Sum on the fast side.
4. If the parameter range makes neither side fast, split $f = f_{\text{short}} + f_{\text{long}}$ with $f_{\text{short}}$ concentrated inside one lattice cell, sum $f_{\text{short}}$ directly and apply Poisson summation to $f_{\text{long}}$. This is the idea behind Ewald summation for Coulomb lattice sums.
5. Validate: evaluate both sides numerically at one convenient parameter value. They must agree to the accuracy of the slower side, and the discrepancy should shrink as more terms are kept.
6. For a lattice of spacing $L$, remember the prefactor $1/L$ and the sampling points $m/L$ from the note above.
:::

:::example[The theta functional equation, and a numerical check]{provenance=original}
For $s > 0$ define the theta function

$$
\vartheta(s) = \sum_{n=-\infty}^{\infty} e^{-\pi n^2 s} .
$$

**Setting up.** Apply the formula to $f(x) = e^{-\pi s x^2}$, a Schwartz function for each fixed $s>0$. In this unit's convention the Gaussian is its own transform, $\widehat{e^{-\pi x^2}}(\xi) = e^{-\pi\xi^2}$: the table of pairs in :ref[the Fourier transform]{to=fourier.fourier-transform} gives $\widehat{e^{-ax^2}}(k) = \sqrt{\pi/a}\,e^{-k^2/4a}$ in the handbook's default convention, and putting $a=\pi$ and reading it at $k=2\pi\xi$, as the dictionary of the definition block requires, turns it into $e^{-\pi\xi^2}$. Dilating with $f(x) = g(\sqrt s\,x)$ where $g(y) = e^{-\pi y^2}$ — the dilation rule $\widehat{g(\lambda\,\cdot)}(\xi) = \lambda^{-1}\hat g(\xi/\lambda)$ for $\lambda>0$ holds in both conventions, since the dictionary only relabels the variable — gives

$$
\hat f(\xi) = \frac{1}{\sqrt s}\,\hat g\!\left(\frac{\xi}{\sqrt s}\right) = s^{-1/2}e^{-\pi\xi^2/s} .
$$

**Applying the formula.** The left side at $x=0$ is $\sum_n e^{-\pi n^2 s} = \vartheta(s)$ and the right side is $\sum_n s^{-1/2}e^{-\pi n^2/s} = s^{-1/2}\vartheta(1/s)$. Hence

$$
\vartheta(s) = s^{-1/2}\,\vartheta(1/s) \qquad (s > 0) ,
$$

which is :cite[Stein and Shakarchi's]{work=stein-shakarchi-2003 loc="Ch. 5, Thm 3.2, p. 155"} Theorem 3.2. Large $s$ on the left corresponds to small $s$ on the right: the identity exchanges a fast series for a slow one.

**A number to check.** Take $s = 4$, so that $1/s = 1/4$ and the identity reads $\vartheta(1/4) = 2\,\vartheta(4)$.

The fast side needs two terms:

$$
\vartheta(4) = 1 + 2e^{-4\pi} + 2e^{-16\pi} + \cdots = 1 + 2(3.4873\times 10^{-6}) + 2(1.5\times10^{-22}) = 1.0000069747 .
$$

The slow side needs five:

$$
\vartheta(\tfrac14) = 1 + 2\bigl(e^{-\pi/4} + e^{-\pi} + e^{-9\pi/4} + e^{-4\pi} + e^{-25\pi/4} + \cdots\bigr)
$$

with terms $0.4559381278$, $0.0432139183$, $0.0008514383$, $0.0000034873$, $0.0000000030$, whose sum is $0.5000069747$, giving

$$
\vartheta(\tfrac14) = 1 + 2(0.5000069747) = 2.0000139494 = 2\,\vartheta(4) ,
$$

to all ten digits shown. The two series needed five terms and two terms respectively for the same accuracy, and the gap widens as $s$ moves away from $1$: near $s = 0$ the left-hand series needs about $s^{-1/2}$ terms and the right-hand one needs a handful.
:::

:::example[A slowly convergent sum done in closed form]{provenance=original}
Let $a > 0$ and $f(x) = 1/(x^2+a^2)$. Then $f$ is continuous and of moderate decrease, and its transform is

$$
\hat f(\xi) = \frac{\pi}{a}\,e^{-2\pi a\lvert\xi\rvert} ,
$$

again this unit's convention: the table in :ref[the Fourier transform]{to=fourier.fourier-transform} gives $(\pi/a)e^{-a\lvert k\rvert}$ for this $f$ in the handbook's default convention, and the dictionary $k = 2\pi\xi$ produces the exponent above. It is continuous and decays exponentially, so the extension of the theorem to moderate decrease applies to the pair $(f,\hat f)$. At $x=0$,

$$
\sum_{n=-\infty}^{\infty}\frac{1}{n^2+a^2} = \frac{\pi}{a}\sum_{n=-\infty}^{\infty}e^{-2\pi a\lvert n\rvert}
= \frac{\pi}{a}\left(1 + \frac{2e^{-2\pi a}}{1-e^{-2\pi a}}\right)
= \frac{\pi}{a}\cdot\frac{1+e^{-2\pi a}}{1-e^{-2\pi a}}
= \frac{\pi}{a}\coth(\pi a) ,
$$

the middle step being a geometric series.

**Numbers.** Take $a = \tfrac12$. The closed form gives

$$
\sum_{n\in\mathbb{Z}}\frac{1}{n^2+\tfrac14} = 2\pi\coth\!\left(\frac{\pi}{2}\right) = 2\pi(1.0903314107) = 6.8507542998 .
$$

The original series converges like $\sum 1/n^2$: its symmetric partial sums are $6.4890893$ at $N=5$, $6.8111529$ at $N=50$ and $6.8467583$ at $N=500$, so after a thousand terms the relative error is still $5.8\times 10^{-4}$ and only the leading $6.8$ is correct. The transformed series converges geometrically with ratio $e^{-\pi} = 0.0432$: keeping $\lvert m\rvert \le 5$ already gives $6.8507542143$, correct to eight digits. This is step 3 of the method in action, and it is the whole practical point of the formula.
:::

:::application{provenance=original}
**The heat kernel on a ring.** :cite[Stein and Shakarchi]{work=stein-shakarchi-2003 loc="Ch. 5, §3.2, Thm 3.3, p. 156"} deduce at once that periodizing the line's heat kernel produces the circle's: $H_t(x) = \sum_n \mathcal{H}_t(x+n)$ with $\mathcal{H}_t(x) = (4\pi t)^{-1/2}e^{-x^2/4t}$. Physically this is the method of images — heat diffusing on a ring is heat diffusing on a line from infinitely many image sources — and the two representations are useful at opposite ends of the time range: the image sum converges in a term or two for short times, the eigenfunction sum $\sum_n e^{-4\pi^2n^2t}e^{2\pi i n x}$ for long times. See :ref[the heat kernel]{to=pde.heat-kernel}.

**Diffraction from a crystal.** A perfect lattice of scatterers has, as its Fourier transform, a lattice of delta functions on the reciprocal lattice; the general-period formula in the note is this statement for one dimension, and the $\mathbb{R}^n$ version of Folland is the three-dimensional statement used in crystallography. Bragg peaks appear only at reciprocal-lattice vectors for exactly this reason, and the inverse relation between the two spacings is why a finely spaced crystal gives widely spaced diffraction spots.

**Ewald summation.** The electrostatic energy of a periodic array of charges is a lattice sum of $1/r$ terms that converges only conditionally. Splitting each charge into a screened short-range part and a smooth long-range part, summing the first in real space and the second in reciprocal space by Poisson summation, turns an unusable sum into two exponentially convergent ones. This is the standard method in molecular dynamics and solid-state calculations, and step 4 of the method above is its skeleton.

**Sampling.** Poisson summation is the identity behind the reconstruction of a band-limited signal from its samples: periodizing the spectrum is exactly what sampling in time does, and aliasing is the overlap of the periodized copies. The statement and proof belong to :ref[the sampling theorem]{to=fourier.sampling-theorem}.

**Number theory.** The functional equation of the theta function proved above is the input to the functional equation of the Riemann zeta function, through the integral representation $\pi^{-s/2}\Gamma(s/2)\zeta(s) = \tfrac12\int_0^\infty t^{s/2-1}(\vartheta(t)-1)\,dt$ recorded by :cite[Stein and Shakarchi]{work=stein-shakarchi-2003 loc="Ch. 5, §3.1, p. 155"}; see :ref[the zeta function]{to=spec.zeta-bernoulli}. It is also the mechanism behind the Euler-Maclaurin-style conversion of lattice sums into integrals plus exponentially small corrections, for which see :ref[the Euler-Maclaurin formula]{to=asym.euler-maclaurin}.
:::
