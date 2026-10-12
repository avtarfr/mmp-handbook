---
id: fourier.parseval-mean-square
title: Mean-square convergence and Parseval's identity
kind: theorem
level: core
summary: The partial sums of a Fourier series are the best mean-square approximations by trigonometric polynomials, they always converge to the function in mean square, and the energy of the function equals the sum of the squared moduli of its coefficients, from which the Riemann-Lebesgue lemma follows at once.
prereqs: [fourier.fourier-series, fourier.fejer-theorem, linalg.inner-product-spaces, linalg.projections-least-squares]
provenance: adapted
sources:
  - work: stein-shakarchi-2003
    loc: "Ch. 3, §1.1–§1.2, pp. 75–81: the pre-Hilbert space $\\mathcal{R}$ and its inner product, pp. 75–77; the orthogonality relation (2) and the Pythagorean identity (3), pp. 77–78; Lemma 1.2 (best approximation), p. 78; the proof of mean-square convergence, p. 79; Thm 1.3 and Bessel's inequality (Remark 1), p. 80; Thm 1.4 (Riemann-Lebesgue), pp. 80–81; Lemma 1.5 (two functions), p. 81. Also Ch. 2, Lemma 3.2, p. 47"
    pages: "47, 75-81"
    role: the whole framework and the proof route — orthonormality of the exponentials, the Pythagorean splitting, the best-approximation lemma, the passage from continuous to integrable functions via the approximation lemma of Ch. 2, Parseval's identity, the Riemann-Lebesgue lemma and the polarised two-function form
  - work: reed-simon-1980
    loc: "§II.1, Thm II.1 (Pythagorean theorem) and the corollaries giving Bessel's and Schwarz's inequalities, pp. 37–38; §II.3, Thm II.6, p. 45"
    pages: "37-38, 45"
    role: the exact Pythagorean identity for a finite orthonormal set and Bessel's inequality as its corollary; the Hilbert-space statement that an orthonormal basis expansion converges and satisfies the norm identity
  - work: stakgold-holst-2011
    loc: "§2.3, pp. 129–130: the Lemma giving (2.3.10)–(2.3.12) with its proof, Remark 1 (the Riemann-Lebesgue lemma for $L_1$ and the extension (2.3.13)), and Remark 2 (that Bessel's inequality is in fact an equality for $L_2$, and that neither holds for every $L_1$ function); (2.3.20)"
    pages: "129-130, 135"
    role: Bessel's inequality proved by expanding the squared error; the statement of Parseval's identity for $L_2(-\\pi,\\pi)$; the Riemann-Lebesgue lemma for integrable functions and for the sine and cosine integrals over an arbitrary interval; the warning that square-summability can fail for an $L_1$ function
  - work: rhb-2006
    loc: "§8.1.3(iii), Bessel's inequality (8.21) and its derivation, pp. 246–247; §12.8, Parseval's theorem (12.13) and the two-function derivation, pp. 426–427"
    pages: "246-247, 426-427"
    role: Bessel's inequality in a finite-dimensional inner-product space and the expansion of the squared error that proves it; Parseval's theorem for an arbitrary period in both complex and real coefficient form, and its reading as a conservation law
  - work: arfken-2013
    loc: "§5.1, Bessel's inequality (5.21) and the argument from (5.22), p. 262; Exercise 19.1.13(a), p. 948"
    pages: "262, 948"
    role: Bessel's inequality as a completeness test and the language of convergence in the mean; the real-coefficient form of Parseval's identity and its reading as a completeness relation
---

:::definition[The mean-square setting]{provenance=adapted src="stein-shakarchi-2003:Ch. 3, §1.1 Example 2 and §1.2, pp. 75–77"}
Let $\mathcal{R}$ be the complex vector space of functions that are Riemann integrable on $[-\pi,\pi]$, regarded as $2\pi$-periodic. On $\mathcal{R}$ put

$$
(f,g) = \frac{1}{2\pi}\int_{-\pi}^{\pi} f(\theta)\,\overline{g(\theta)}\,d\theta ,
\qquad
\lVert f \rVert = (f,f)^{1/2} = \Bigl(\frac{1}{2\pi}\int_{-\pi}^{\pi} \lvert f(\theta)\rvert^2 d\theta\Bigr)^{1/2} ,
$$

linear in the first slot, as in :ref[inner-product spaces]{to=linalg.inner-product-spaces}. Write $e_n(\theta) = e^{in\theta}$. Then

$$
(e_n, e_m) = \frac{1}{2\pi}\int_{-\pi}^{\pi} e^{i(n-m)\theta}\,d\theta = \delta_{nm} ,
\qquad
\hat f(n) = (f, e_n) ,
\qquad
S_N(f) = \sum_{\lvert n \rvert \le N} \hat f(n)\,e_n ,
$$

so $\{e_n\}_{n \in \mathbb{Z}}$ is an orthonormal family and the Fourier coefficients of :ref[the Fourier series]{to=fourier.fourier-series} are the coordinates of $f$ along it. Convergence $\lVert f - g_N\rVert \to 0$ is called *mean-square convergence*, or *convergence in the mean*; :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§5.1, p. 262"} stress that it permits the approximant to deviate from $f$ at isolated points, which is why it is the natural mode of convergence for Fourier series.

Two cautions about $\mathcal{R}$, both from :cite[Stein and Shakarchi]{work=stein-shakarchi-2003 loc="Ch. 3, §1.1, p. 76"}: $\lVert f\rVert = 0$ forces $f$ to vanish only at its points of continuity, and $\mathcal{R}$ is not complete. Neither affects the statements below; see the remark.
:::

:::statement[Pythagoras, best approximation, Bessel]{provenance=adapted src="stein-shakarchi-2003:Ch. 3, §1.2, eq. (3) and Lemma 1.2, pp. 77–78, and Remark 1, p. 80; reed-simon-1980:Thm II.1 and its corollary, pp. 37–38"}
Let $f \in \mathcal{R}$ and let $N \in \mathbb{N}$.

1. **Exact splitting.** $\displaystyle \lVert f \rVert^2 = \lVert f - S_N(f)\rVert^2 + \sum_{\lvert n \rvert \le N} \lvert \hat f(n)\rvert^2 .$
2. **Best approximation.** For every choice of complex numbers $c_n$,
   $$
   \bigl\lVert f - S_N(f) \bigr\rVert \;\le\; \Bigl\lVert f - \sum_{\lvert n \rvert \le N} c_n e_n \Bigr\rVert ,
   $$
   with equality exactly when $c_n = \hat f(n)$ for every $\lvert n \rvert \le N$. The partial sum is the orthogonal projection of $f$ onto the span of $e_{-N},\dots,e_N$.
3. **Bessel's inequality.** $\displaystyle \sum_{n \in \mathbb{Z}} \lvert \hat f(n)\rvert^2 \le \lVert f \rVert^2 ,$ so the coefficient sequence is square-summable. More generally this holds for the coefficients $(f, u_n)$ along any orthonormal family $\{u_n\}$ in $\mathcal{R}$, complete or not.
:::

:::statement[Mean-square convergence and Parseval's identity]{provenance=adapted src="stein-shakarchi-2003:Ch. 3, Thm 1.3 and Lemma 1.5, pp. 80–81; stakgold-holst-2011:§2.3, (2.3.20), p. 135"}
Let $f, g \in \mathcal{R}$. Then

1. **Mean-square convergence.** $\displaystyle \lVert f - S_N(f)\rVert^2 = \frac{1}{2\pi}\int_{-\pi}^{\pi}\bigl\lvert f(\theta) - S_N(f)(\theta)\bigr\rvert^2 d\theta \longrightarrow 0$ as $N \to \infty$.
2. **Parseval's identity.** Bessel's inequality is an equality:
   $$
   \sum_{n \in \mathbb{Z}} \lvert \hat f(n)\rvert^2 \;=\; \lVert f \rVert^2 \;=\; \frac{1}{2\pi}\int_{-\pi}^{\pi} \lvert f(\theta)\rvert^2 d\theta .
   $$
3. **Two functions.** $\displaystyle (f,g) = \frac{1}{2\pi}\int_{-\pi}^{\pi} f\,\overline{g} \;=\; \sum_{n \in \mathbb{Z}} \hat f(n)\,\overline{\hat g(n)} ,$ the series converging absolutely.

The same identities hold for every $f$ in $L^2(-\pi,\pi)$, a statement :cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="§2.3, (2.3.20), p. 135"} record here and prove in their Chapter 4; we prove only the Riemann-integrable case.
:::

:::statement[Riemann-Lebesgue lemma]{provenance=adapted src="stein-shakarchi-2003:Ch. 3, Thm 1.4, pp. 80–81; stakgold-holst-2011:§2.3, (2.3.10) and Remark 1 with (2.3.13), pp. 129–130"}
If $f$ is integrable on the circle then $\hat f(n) \to 0$ as $\lvert n \rvert \to \infty$; equivalently

$$
\int_{-\pi}^{\pi} f(\theta)\cos(N\theta)\,d\theta \to 0
\qquad\text{and}\qquad
\int_{-\pi}^{\pi} f(\theta)\sin(N\theta)\,d\theta \to 0 .
$$

:cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="§2.3, Remark 1 and (2.3.13), p. 130"} record two extensions, both beyond what the proof below gives: the conclusion holds for every $f \in L_1(-\pi,\pi)$, and for $f \in L_1(a,b)$ with $(a,b)$ finite or infinite the integrals $\int_a^b f(x)e^{-ikx}dx$, $\int_a^b f(x)\cos kx\,dx$ and $\int_a^b f(x)\sin kx\,dx$ all tend to $0$ as $\lvert k \rvert \to \infty$, with $k$ no longer restricted to integers.
:::

:::note[Other normalisations of Parseval]{provenance=adapted src="rhb-2006:§12.8, (12.13), p. 426; arfken-2013:Exercise 19.1.13(a), p. 948"}
For period $L$ and $f(x) \sim \sum_r c_r e^{2\pi i r x/L} = \tfrac12 a_0 + \sum_{r \ge 1}\bigl(a_r \cos\frac{2\pi r x}{L} + b_r\sin\frac{2\pi r x}{L}\bigr)$, :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§12.8, (12.13), p. 426"} write the identity as

$$
\frac{1}{L}\int_{x_0}^{x_0+L}\lvert f(x)\rvert^2 dx = \sum_{r=-\infty}^{\infty}\lvert c_r\rvert^2 = \bigl(\tfrac12 a_0\bigr)^2 + \tfrac12 \sum_{r=1}^{\infty}\bigl(a_r^2 + b_r^2\bigr) ,
$$

the average of $\lvert f\rvert^2$ over one period. :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="Exercise 19.1.13(a), p. 948"} state the same thing for period $2\pi$ as $\frac{1}{\pi}\int_{-\pi}^{\pi}\lvert f\rvert^2 = \frac{a_0^2}{2} + \sum_{n\ge1}(a_n^2+b_n^2)$, which is twice the previous line; the discrepancy is only the factor $1/L$ against $1/\pi = 2/L$. Our $\lVert f\rVert^2$ is the period average, so it matches the first form with $L = 2\pi$. Arfken calls the identity a completeness relation, Riley, Hobson and Bence call it a conservation law; both names describe the same equation.
:::

:::idea{provenance=original}
Everything follows from one picture in finitely many dimensions. The exponentials are orthonormal, so the partial sum $S_N(f)$ is the orthogonal projection of $f$ onto a finite-dimensional subspace, and Pythagoras splits $\lVert f\rVert^2$ into the piece captured by the projection and the piece missed. Two things come free: the projection is the closest point of the subspace (best approximation), and the captured piece never exceeds the whole (Bessel). The only genuinely infinite-dimensional input is that nothing is missed in the limit, and that is exactly the density of trigonometric polynomials supplied by :ref[Fejér's theorem]{to=fourier.fejer-theorem}: if some trigonometric polynomial of degree $M$ comes within $\varepsilon$, then by best approximation $S_N(f)$ does too for every $N \ge M$. Parseval is then the splitting identity with the error term sent to zero, and the Riemann-Lebesgue lemma is the remark that the terms of a convergent series tend to zero.
:::

:::proof[Pythagoras, best approximation, Bessel]{provenance=adapted src="stein-shakarchi-2003:Ch. 3, §1.2, pp. 77–78; rhb-2006:§8.1.3(iii), pp. 246–247"}
**Step 1: the error is orthogonal to the subspace.** Fix $N$ and let $V_N$ be the span of $e_{-N},\dots,e_N$. For $\lvert m \rvert \le N$,

$$
\bigl(f - S_N(f),\, e_m\bigr) = (f, e_m) - \sum_{\lvert n \rvert \le N}\hat f(n)\,(e_n, e_m) = \hat f(m) - \hat f(m) = 0 ,
$$

using orthonormality of $\{e_n\}$ at the second step and the definition $\hat f(m) = (f,e_m)$ at the third. By linearity, $f - S_N(f) \perp v$ for every $v \in V_N$. This is the only computation in the proof.

**Step 2: splitting.** Write $f = \bigl(f - S_N(f)\bigr) + S_N(f)$. The two pieces are orthogonal by step 1, since $S_N(f) \in V_N$, so expanding $\lVert f\rVert^2 = (f,f)$ kills the cross terms:

$$
\lVert f\rVert^2 = \lVert f - S_N(f)\rVert^2 + \lVert S_N(f)\rVert^2 .
$$

Orthonormality again gives $\lVert S_N(f)\rVert^2 = \sum_{\lvert n\rvert \le N}\lvert \hat f(n)\rvert^2$, which is part 1.

**Step 3: best approximation.** Let $P = \sum_{\lvert n\rvert\le N} c_n e_n \in V_N$ and set $b_n = \hat f(n) - c_n$. Then $f - P = \bigl(f - S_N(f)\bigr) + \sum_{\lvert n\rvert\le N} b_n e_n$, again an orthogonal decomposition by step 1, so

$$
\lVert f - P\rVert^2 = \lVert f - S_N(f)\rVert^2 + \sum_{\lvert n\rvert \le N}\lvert b_n\rvert^2 \;\ge\; \lVert f - S_N(f)\rVert^2 ,
$$

with equality iff every $b_n = 0$, that is iff $c_n = \hat f(n)$. This is part 2, and it identifies $S_N(f)$ as the orthogonal projection onto $V_N$, the Fourier case of :ref[least squares by projection]{to=linalg.projections-least-squares}.

**Step 4: Bessel.** Dropping the non-negative term $\lVert f - S_N(f)\rVert^2$ from part 1 gives $\sum_{\lvert n\rvert\le N}\lvert \hat f(n)\rvert^2 \le \lVert f\rVert^2$ for every $N$. The left-hand side increases with $N$ and is bounded above by a constant, so it converges, and its limit obeys the same bound. Nothing in steps 1–3 used the particular family $\{e_n\}$ beyond orthonormality, so the same argument gives Bessel's inequality for any orthonormal family — this is how :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§8.1.3(iii), pp. 246–247"} and :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§5.1, (5.22), p. 262"} obtain it, by expanding the squared error directly. $\square$
:::

:::proof[Mean-square convergence, Parseval, Riemann-Lebesgue]{provenance=adapted src="stein-shakarchi-2003:Ch. 3, §1.2, pp. 79–81, using Ch. 2, Lemma 3.2, p. 47"}
Let $\varepsilon > 0$.

**Step 1: the sup norm dominates the mean-square norm.** For any $h \in \mathcal{R}$,

$$
\lVert h\rVert^2 = \frac{1}{2\pi}\int_{-\pi}^{\pi}\lvert h\rvert^2 \le \sup_\theta \lvert h(\theta)\rvert^2 ,
$$

because the average of a function over the circle does not exceed its supremum. So uniform approximation implies mean-square approximation.

**Step 2: continuous $f$.** Suppose first that $f$ is continuous on the circle. By :ref[Fejér's theorem]{to=fourier.fejer-theorem} there is a trigonometric polynomial $P$, of some degree $M$, with $\sup_\theta\lvert f(\theta) - P(\theta)\rvert < \varepsilon$; by step 1, $\lVert f - P\rVert < \varepsilon$. For any $N \ge M$ the polynomial $P$ lies in $V_N$, so best approximation gives $\lVert f - S_N(f)\rVert \le \lVert f - P\rVert < \varepsilon$. As $\varepsilon$ was arbitrary, $\lVert f - S_N(f)\rVert \to 0$.

**Step 3: integrable $f$.** A Riemann integrable $f$ is bounded, say $\lvert f \rvert \le B$. It need not be approximable uniformly by continuous functions, but it is approximable in the sense of :cite[Stein and Shakarchi's]{work=stein-shakarchi-2003 loc="Ch. 2, Lemma 3.2, p. 47"} approximation lemma: there are continuous $g$ on the circle with $\sup\lvert g\rvert \le B$ and $\int_{-\pi}^{\pi}\lvert f - g\rvert$ as small as we please. Choose such a $g$ with $\int_{-\pi}^{\pi}\lvert f-g\rvert < \varepsilon^2$. Then $\lvert f - g\rvert \le 2B$ pointwise, so one factor of $\lvert f-g\rvert$ can be traded for the constant $2B$:

$$
\lVert f - g\rVert^2 = \frac{1}{2\pi}\int_{-\pi}^{\pi}\lvert f-g\rvert\cdot\lvert f-g\rvert
\;\le\; \frac{2B}{2\pi}\int_{-\pi}^{\pi}\lvert f-g\rvert \;<\; \frac{B}{\pi}\,\varepsilon^2 ,
$$

that is $\lVert f - g\rVert < \varepsilon\sqrt{B/\pi}$. This is the step that needs boundedness, and it is why the squared norm is estimated rather than the norm.

Now apply step 2 to the continuous function $g$: there is a trigonometric polynomial $P$ of degree $M$ with $\lVert g - P\rVert < \varepsilon$. The triangle inequality gives $\lVert f - P\rVert < \varepsilon\bigl(1 + \sqrt{B/\pi}\bigr)$, and best approximation gives the same bound for $\lVert f - S_N(f)\rVert$ once $N \ge M$. The constant $1 + \sqrt{B/\pi}$ does not depend on $\varepsilon$, so part 1 of the theorem follows.

**Step 4: Parseval.** Rearranging the splitting identity,

$$
\lVert f\rVert^2 - \sum_{\lvert n\rvert \le N}\lvert\hat f(n)\rvert^2 = \lVert f - S_N(f)\rVert^2 .
$$

By step 3 the right-hand side tends to $0$, so the partial sums on the left converge to $\lVert f\rVert^2$. That is part 2.

**Step 5: two functions.** In any complex inner-product space the polarisation identity

$$
(F,G) = \tfrac14\Bigl(\lVert F+G\rVert^2 - \lVert F-G\rVert^2 + i\lVert F+iG\rVert^2 - i\lVert F-iG\rVert^2\Bigr)
$$

holds; it is verified by expanding each norm as $(F \pm \lambda G, F \pm \lambda G)$ and collecting terms. Apply Parseval to each of the four functions $f \pm g$, $f \pm i g$, whose $n$th coefficients are $\hat f(n) \pm \hat g(n)$ and $\hat f(n) \pm i\hat g(n)$ by linearity of $f \mapsto \hat f(n)$. Polarisation in $\ell^2(\mathbb{Z})$ then reassembles the four sums into $\sum_n \hat f(n)\overline{\hat g(n)}$, giving part 3. Absolute convergence of that series holds because $2\lvert \hat f(n)\overline{\hat g(n)}\rvert \le \lvert \hat f(n)\rvert^2 + \lvert\hat g(n)\rvert^2$ and both of those series converge by Bessel.

**Step 6: Riemann-Lebesgue.** Parseval (or already Bessel) makes $\sum_n \lvert \hat f(n)\rvert^2$ a convergent series of non-negative terms; the terms of a convergent series tend to $0$, so $\lvert \hat f(n)\rvert^2 \to 0$ and hence $\hat f(n) \to 0$ as $\lvert n\rvert \to \infty$. For the real form, $\int_{-\pi}^{\pi} f\cos N\theta\,d\theta = \pi\bigl(\hat f(N) + \hat f(-N)\bigr)$ and $\int_{-\pi}^{\pi} f \sin N\theta\,d\theta = i\pi\bigl(\hat f(N) - \hat f(-N)\bigr)$, both combinations of quantities tending to $0$. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
- **Orthonormality alone gives parts 1–3 of the first statement.** Completeness of the family is never used there, which is why Bessel's inequality holds for any orthonormal family and why it is, as :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§5.1, p. 262"} put it, a test for completeness rather than a consequence of it: equality for every $f$ is exactly completeness. Drop $e_0$ from the family and take $f \equiv 1$: then every coefficient is $0$ while $\lVert f\rVert^2 = 1$, so the inequality is strict.
- **Completeness enters exactly once**, at step 2, through the density of trigonometric polynomials. That density is a theorem, not a definition, and it is the one place where Fejér's theorem is needed; everything else is finite-dimensional geometry.
- **Boundedness is used at step 3** to trade one factor of $\lvert f-g\rvert$ for $2B$. Without it an $L^1$ function can fail to be square-integrable, and then neither Bessel nor Parseval need hold — the warning :cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="§2.3, Remark 2, p. 130"} give explicitly. Riemann integrability already implies boundedness, so the hypothesis is not visible in the statement.
- **Mean-square convergence says nothing pointwise.** $\lVert f - S_N(f)\rVert \to 0$ allows the partial sums to misbehave on a small set at every $N$; see :ref[pointwise convergence]{to=fourier.dirichlet-convergence} and :ref[the Gibbs phenomenon]{to=fourier.gibbs-phenomenon}, where the overshoot has fixed height but shrinking width and so does not obstruct mean-square convergence.
- **Parseval does not make $\mathcal{R}$ complete.** The map $f \mapsto \{\hat f(n)\}$ is isometric into $\ell^2(\mathbb{Z})$ but not onto: :cite[Stein and Shakarchi]{work=stein-shakarchi-2003 loc="Ch. 3, Remark 2, p. 80"} note that there are square-summable sequences that are the coefficient sequence of no Riemann integrable function. Surjectivity is the Riesz-Fischer theorem and needs the Lebesgue space $L^2$; see :ref[orthonormal bases]{to=funcan.orthonormal-bases} and :cite[Reed and Simon]{work=reed-simon-1980 loc="Thm II.6, p. 45"}, who state the two-sided version in a Hilbert space.
- **The Riemann-Lebesgue lemma proved here is weaker than the usual one.** Our route goes through square-summability, so it needs $f$ bounded. The general $L_1$ statement is obtained instead by splitting $f = g + h$ with $g$ bounded and $\int\lvert h\rvert$ small, as :cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="§2.3, Remark 1, p. 130"} do.
:::

:::method[Summing a numerical series with Parseval]{provenance=original}
1. Choose a $2\pi$-periodic $f$ whose Fourier coefficients are, up to constants, the square roots of the terms you want to sum. A term $1/(n^2+a^2)$ asks for $\hat f(n) \propto 1/(n - ia)$ or $1/(n+ia)$; a term $1/n^4$ asks for $\hat f(n) \propto 1/n^2$, hence for an $f$ that is continuous with a jump in its first derivative.
2. Compute the coefficients from the definition, and simplify using $e^{\pm i n\pi} = (-1)^n$.
3. Compute $\lVert f\rVert^2 = \frac{1}{2\pi}\int_{-\pi}^{\pi}\lvert f\rvert^2$ in closed form. This integral is usually elementary even when the series is not.
4. Equate the two sides of Parseval and solve for the sum. Remember that the sum runs over all of $\mathbb{Z}$: separate the $n = 0$ term and halve what is left if the series you want runs over $n \ge 1$.
5. Check numerically. A partial sum to $\lvert n\rvert \le 100$ should match to the accuracy the decay rate allows; coefficients of size $1/n$ give only two or three digits at that point.
6. For a cross term $\sum \hat f(n)\overline{\hat g(n)}$, use part 3 with two different functions rather than squaring one. :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§12.8, pp. 426–427"} caution that choosing the right $f$ for a given series is not a systematic procedure; the useful pairings are found, not derived.
:::

:::example[Parseval applied to $e^{\theta}$]{provenance=original}
Let $f$ be the $2\pi$-periodic function with $f(\theta) = e^{\theta}$ for $-\pi < \theta < \pi$. It is bounded and continuous except for a jump at the odd multiples of $\pi$, so it lies in $\mathcal{R}$.

**Coefficients.** For every $n \in \mathbb{Z}$,

$$
\hat f(n) = \frac{1}{2\pi}\int_{-\pi}^{\pi} e^{(1-in)\theta}\,d\theta
= \frac{1}{2\pi}\,\frac{e^{(1-in)\pi} - e^{-(1-in)\pi}}{1-in}
= \frac{(-1)^n}{2\pi}\,\frac{e^{\pi}-e^{-\pi}}{1-in}
= \frac{(-1)^n \sinh \pi}{\pi\,(1-in)} ,
$$

where $e^{\mp i n \pi} = (-1)^n$ was used. Hence

$$
\lvert \hat f(n)\rvert^2 = \frac{\sinh^2\pi}{\pi^2\,\lvert 1-in\rvert^2} = \frac{\sinh^2 \pi}{\pi^2\,(1+n^2)} .
$$

**Energy.** $\displaystyle \lVert f\rVert^2 = \frac{1}{2\pi}\int_{-\pi}^{\pi} e^{2\theta}\,d\theta = \frac{e^{2\pi}-e^{-2\pi}}{4\pi} = \frac{\sinh 2\pi}{2\pi} = 42.61292\ldots$

**Parseval.** Equating,

$$
\frac{\sinh^2\pi}{\pi^2}\sum_{n \in \mathbb{Z}} \frac{1}{1+n^2} = \frac{\sinh 2\pi}{2\pi}
\quad\Longrightarrow\quad
\sum_{n \in \mathbb{Z}} \frac{1}{1+n^2} = \frac{\pi \sinh 2\pi}{2 \sinh^2\pi} = \frac{\pi \cdot 2\sinh\pi\cosh\pi}{2\sinh^2\pi} = \pi\coth\pi ,
$$

using $\sinh 2\pi = 2\sinh\pi\cosh\pi$. Numerically $\pi\coth\pi = 3.1533480949\ldots$, and separating $n = 0$ gives the one-sided form

$$
\sum_{n=1}^{\infty}\frac{1}{1+n^2} = \frac{\pi\coth\pi - 1}{2} = 1.0766740474\ldots
$$

**Checking, and the size of the error.** Bessel's inequality with $N = 3$ uses $\sum_{\lvert n\rvert \le 3}(1+n^2)^{-1} = 1 + 2(\tfrac12+\tfrac15+\tfrac1{10}) = \tfrac{13}{5}$, so the splitting identity gives the exact mean-square error of the best trigonometric approximation of degree $3$:

$$
\lVert f - S_3(f)\rVert^2 = \frac{\sinh 2\pi}{2\pi} - \frac{13\,\sinh^2\pi}{5\,\pi^2} = 42.61292 - 35.13523 = 7.47770 ,
\qquad \lVert f - S_3(f)\rVert = 2.73454 .
$$

That is still $42\%$ of $\lVert f\rVert = 6.52786$, because $\hat f(n)$ only decays like $1/\lvert n\rvert$: the jump of size $e^{\pi}-e^{-\pi}$ at $\theta = \pi$ is expensive, exactly as :ref[the smoothness-decay correspondence]{to=fourier.smoothness-decay} predicts. At $N = 100$ the error has fallen only to $\lVert f - S_{100}(f)\rVert = 0.51857$.
:::

:::application{provenance=original}
**Energy and power.** For a periodic current $I(t)$ through a resistance $R$, the average dissipated power is $R\,\langle I^2\rangle$, and Parseval says this is $R\sum_r \lvert c_r\rvert^2$: the total power is the sum of the powers carried by the individual harmonics, with no interference terms, because distinct harmonics are orthogonal over a period. This is the sense in which :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§12.8, p. 426"} call the identity a conservation law. The same statement for the root-mean-square value of a waveform is what justifies quoting a signal's spectrum in power per harmonic.

**Normalisation in quantum mechanics.** A state $\psi$ on a ring expands as $\psi = \sum_n c_n e_n$ with $e_n$ the momentum eigenfunctions; Parseval is the statement $\sum_n \lvert c_n\rvert^2 = \lVert\psi\rVert^2 = 1$, that the probabilities of the possible momentum measurements sum to one. Bessel's inequality applied to a truncated basis is the statement that an incomplete set of states cannot account for all of the probability, which is why completeness of the eigenfunction set is not a technicality.

**Truncation error in spectral methods.** Part 1 of the first statement is an exact error formula: the mean-square error of the $N$-term Fourier approximation is the tail $\sum_{\lvert n\rvert > N}\lvert\hat f(n)\rvert^2$. Because of best approximation, no other trigonometric polynomial of the same degree does better, so this tail is the true benchmark against which a numerical scheme is judged, and the convergence rate of a spectral method is read off from the decay of the coefficients.

**Energy inequalities for differential equations.** Applied to $f'$ rather than $f$, Parseval turns $\int\lvert f'\rvert^2$ into $\sum n^2\lvert\hat f(n)\rvert^2$, and comparing the two sums gives the Poincaré-type inequality $\int\lvert f\rvert^2 \le \int\lvert f'\rvert^2$ for mean-zero periodic $f$ — a one-line proof of a bound that controls the decay of solutions of the heat equation on a ring.
:::
