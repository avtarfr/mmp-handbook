VERDICT: PASS
UNIT: fourier.smoothness-decay
VERIFIER: B

## Findings
1. [minor] method, item 5 (line 203): "if $\lvert c_m\rvert \le A\lvert m\rvert^{-q}$ then then for
   $q > 1/2$" - "then" is doubled. Fix: delete one.
2. [minor] remark, "One jump costs exactly one power" (line 191): the claim that a $D(S)$ function
   with a simple jump has coefficients of order $1/\lvert m\rvert$ "and no better" is exactly
   Stakgold and Holst's Thm 2.3.2, p. 131 (they prove $m c_m$ bounded while $m^{1+\varepsilon}c_m$
   is unbounded), but the sentence is uncited inside an `original` block, while the two cases that
   follow it are cited to Examples 2 and 3 on p. 132. The claim is true as stated, so this is not
   a provenance error, only an attribution the reader would want. Fix: add
   `:cite[]{work=stakgold-holst-2011 loc="§2.3, Thm 2.3.2, p. 131"}`.

## Checked
- **Automated.** `node tools/check/index.mjs --record fourier.fejer-theorem
  fourier.parseval-mean-square fourier.smoothness-decay` - 3/3 pass, no FAIL line for this unit.
  Two warns, both judged: (i) statement line 51, 9-word run with stein-shakarchi-2003 p. 42, "the
  fourier series of converges absolutely and uniformly to" - that is the conclusion clause of
  Cor. 2.4 and is the stock phrase for this mode of convergence (Strauss p. 142 and Stakgold
  p. 134 write it the same way); standard wording. (ii) proof line 132, 8-word run with
  arfken-2013 p. 24, "term by term integration of uniformly convergent series" - this is the
  `:ref` link text pointing at our own unit `found.termwise-operations`, i.e. the standard name of
  the theorem being invoked, not borrowed prose. No `resembles` line for this unit. No "clearly" /
  "obviously" / "easy to see". Block order is definition, statement x4, idea, proof x3, remark,
  method, example, application: idea before the proofs, a fully worked example with checkable
  numbers, hypotheses-used remark, no exercises.
- **Counterexample search on the statements.** (i) $d_m = imc_m$ with only interval smoothness:
  took $f(\theta)=\theta$ on $(-\pi,\pi)$, smooth on the open interval but with a jump on the
  circle - $\hat f(m)=i(-1)^m/m$ (recomputed by parts: $\int_{-\pi}^{\pi}\theta e^{-im\theta}
  d\theta = 2\pi i(-1)^m/m$), which decays only like $1/|m|$, so the statement's insistence on
  $C^k(S)$ rather than $C^k[-\pi,\pi]$ is necessary and the remark's example is correct. (ii) Tried
  to break part 2 with $f$ continuous and $f'$ only piecewise continuous ($|x|$): $\sum|c_m|<\infty$
  still holds, consistent with the Strauss caveat the unit reports, and no contradiction with the
  $C^1(S)$ hypothesis as stated. (iii) Converse: tried $c_m$ square-summable with $m^kc_m$ square-
  summable but not absolutely summable - the conclusion can fail, and the remark says exactly this,
  so the hypothesis $\sum|m|^k|c_m|<\infty$ is not over-strong by accident. (iv) The gap claim:
  $c_m=O(|m|^{-k-1-\varepsilon})$ is what a power law needs for $\sum|m|^k|c_m|<\infty$ -
  confirmed. (v) Part 3 of the integration statement: for $f\in C^2(S)$, $|mc_m|=|\widehat{f'}(m)|$
  and $f'\in C^1(S)$, so part 2 applies to $f'$ and the differentiated series converges absolutely
  - correct, no gap. (vi) Degenerate $m=0$ in the converse's step-1 bound: the display adds
  $|c_0|$ separately, so the $j=0$ case is covered. No counterexample found.
- **Calculations** (`.venv/bin/python`, mpmath/sympy/numpy).
  - Classification of $h(\theta)=\theta(\pi^2-\theta^2)$: $h(\pm\pi)=0$; $h'=\pi^2-3\theta^2$ with
    $h'(\pm\pi)=-2\pi^2$ (matching, so $h\in C^1(S)$); $h''=-6\theta$ with $h''(\pi)=-6\pi\ne
    6\pi=h''(-\pi)$ (so $h\notin C^2(S)$). All as printed.
  - The two integrals: $\int_0^\pi\theta\sin m\theta\,d\theta=(-1)^{m+1}\pi/m$ and
    $\int_0^\pi\theta^3\sin m\theta\,d\theta=(-1)^{m+1}\pi^3/m+6(-1)^m\pi/m^3$ (antiderivative
    $-\theta^3\cos\theta+3\theta^2\sin\theta+6\theta\cos\theta-6\sin\theta$ checks the $m=1$ case,
    $\pi^3-6\pi$). Hence $b_m=\tfrac2\pi\bigl(-6(-1)^m\pi/m^3\bigr)=12(-1)^{m+1}/m^3$, as printed,
    with the $\pi^3/m$ terms cancelling exactly as the text says.
  - Check at $\theta=\pi/2$: the series collapses to $12\beta(3)=12\pi^3/32=3\pi^3/8$ and
    $h(\pi/2)=\tfrac\pi2(\pi^2-\pi^2/4)=3\pi^3/8=11.627354$ - the printed value.
  - $\sum|b_m|=12\zeta(3)=14.424683$ and $12\zeta(2)=2\pi^2=19.739209$: both as printed.
  - First derivative at $\theta=0$: $12\eta(2)=12\cdot\pi^2/12=\pi^2=h'(0)$; at $\theta=\pi$:
    $-12\zeta(2)=-2\pi^2=h'(\pi)$. Both correct.
  - Second formal derivative: $\sum_{m\ge1}(-1)^{m+1}\sin m\theta/m=\theta/2$ on $(-\pi,\pi)$, so
    the series sums to $-6\theta=h''(\theta)$ there and to $0$ at $\theta=\pi$ while
    $h''(\pi^-)=-6\pi$ - the non-uniformity the text claims. Third formal derivative has terms not
    tending to $0$. Correct.
  - Integration: $\int_0^x h=\pi^2x^2/2-x^4/4$; term by term, $12\sum(-1)^{m+1}(1-\cos mx)/m^4$. At
    $x=\pi$ the right side is $24\sum_{j\ge0}(2j+1)^{-4}=24\cdot\pi^4/96=\pi^4/4$ and the left is
    $\pi^4/2-\pi^4/4=\pi^4/4=24.352273$ - printed value confirmed, using
    $\sum_{m\ \rm odd}m^{-4}=\tfrac{15}{16}\zeta(4)=\pi^4/96$.
  - The integration formula of statement part 1 tested independently on $f=\mathrm{sgn}$ (whose
    own Fourier series is only conditionally convergent): $c_0(x+\pi)+\sum_{m\ne0}\frac{c_m}{im}
    (e^{imx}-(-1)^m)$ truncated at $|m|\le40001$ gives $-1.1415767$, $-2.6415767$, $-2.4415767$,
    $-0.6415767$, $0$ at $x=-2,-0.5,0.7,2.5,\pi$ against the exact $-1.1415927$, $-2.6415927$,
    $-2.4415927$, $-0.6415927$, $0$ - agreement to $1.6\times10^{-5}$, the expected truncation
    error. The formula and its $(-1)^m$ constant are right.
  - Supporting constants: $\sum_{m\ne0}m^{-2}=2\zeta(2)=\pi^2/3$, so proof step 3's "$\sqrt{\pi^2/3}$"
    is right. Method item 5's bound: $\sum_{|m|>N}|c_m|^2\le2A^2\int_N^\infty t^{-2q}dt$ gives
    $\bigl(2A^2/(2q-1)\bigr)^{1/2}N^{-q+1/2}$, as printed.
  - Real-form conversions used in the definition and step 1: $a_m=\hat f(m)+\hat f(-m)$,
    $b_m=i(\hat f(m)-\hat f(-m))$, and Strauss's $A_m=-B'_m/m$, $B_m=A'_m/m$ all follow from
    $A'_m=mB_m$, $B'_m=-mA_m$. Consistent throughout the unit.
- **Citations.** All opened with `node tools/corpus/pages.mjs`.
  - stakgold-holst-2011 pp. 130-134: $C^k(S)$ and $D(S)$ are defined on pp. 130-131 in the sense
    the unit gives, including the periodic-extension reading, $C^0(S)=C(S)$, and the "$D$ is both
    worse and better than $C$" point with $\sqrt{|x|}$ as the excluded cusp; Thm 2.3.1 p. 131 is
    $\lim c_m m^p=0$ for $f\in C^p(S)$, proved by integrating by parts $p$ times with the boundary
    terms killed by periodicity - our route; the unnamed Theorem on p. 134 is the $C^1(S)$ uniform-
    convergence result with $d_m=imc_m$, the Schwarz-inequality estimate and the M-test, exactly as
    attributed; Remark 1 p. 130 is the Riemann-Lebesgue lemma. Example 2 p. 132 is $|x|$ with
    $a_m=-4/(\pi m^2)$ for odd $m$, and Example 3 p. 132 is the periodised $\cos ax$ with $m^2a_m$
    bounded and a derivative discontinuous at odd multiples of $\pi$ - both as the remark says.
    Example 3 *also* contains the infinite-rod temperature with exponentially small coefficients,
    so the application's second citation to "Example 3, p. 132" is right too; I checked this
    specifically because the two citations point at the same example for different content.
  - stein-shakarchi-2003 pp. 42-44: the $O$ notation is introduced on p. 42; Cor. 2.4 (twice
    continuously differentiable on the circle $\Rightarrow\hat f(n)=O(1/|n|^2)$, series absolutely
    and uniformly convergent) is on p. 42 with the two-fold integration by parts on p. 43,
    including the bound $2\pi|n|^2|\hat f(n)|\le\int_0^{2\pi}|f''|$ that the unit quotes with the
    correct note about the interval; the class $C^k$ is named on p. 44. All locators correct.
  - strauss-2008: p. 130 has the sine series $\sum_{n\ \rm odd}\frac{4}{n\pi}\sin nx$ of $f\equiv1$
    on $(0,\pi)$, the divergent term-by-term derivative $\frac4\pi\sum_{n\ \rm odd}\cos nx$, and
    "Differentiation of a Fourier series is a delicate matter. But integration term by term is not
    delicate and is usually valid (see Exercise 11)" - the short quoted phrase in the unit is
    accurate and attributed. pp. 141-142 have (15) $A_n=-B'_n/n$ and (16) $B_n=A'_n/n$ with
    "We have just used the periodicity", the Bessel + Schwarz estimate, and on p. 142 "This proof
    is also valid if $f(x)$ is continuous but $f'(x)$ is merely piecewise continuous. An example is
    $f(x)=|x|$" - exactly the caveat the unit reports. Correct.
  - arfken-2013 p. 947, Exercise 19.1.12: "Show that integration of the Fourier expansion of
    $f(x)=x$ ... leads to $\pi^2/12=\sum(-1)^{n+1}/n^2$" - precisely the use the method's item 4
    attributes. Correct.
- **Provenance.** Compared the first `proof` with Stakgold p. 131 and p. 134 and with S-S p. 43:
  the content is theirs and the block is correctly `adapted` and cited, but the writing is ours -
  four named steps, the single integration by parts isolated and its boundary term computed
  explicitly ($(-1)^m(f(\pi)-f(-\pi))$, which neither book writes), the iteration separated from
  the $C^1$ Cauchy-Schwarz argument, and S-S's two-fold by-parts compressed into the constant form.
  The `proof[Term-by-term integration]` follows Strauss's exercise only in outcome: the
  construction $F(x)=\int_{-\pi}^x(f-c_0)$, the periodicity step, the $\hat F(m)=c_m/(im)$
  computation, the Fejer-uniqueness closing and the $x=-\pi$ constant-fixing are written here, and
  Strauss gives no proof at all on p. 130. The `proof[The converse]` and the `statement[The
  converse]` are `original`; I found no cited page stating that result (S-S p. 43 gestures at it in
  Exercise 10 and p. 42 proves only the uniqueness half), so `original` is the right label.
  `original` blocks: the converse statement and proof, `idea`, `remark`, `method`, `example`,
  `application`. The example ($\theta(\pi^2-\theta^2)$ and its four operations) is not any cited
  book's example - Stakgold's are $x$, $|x|$ and $\cos ax$, Strauss's is the constant $1$, Arfken's
  is $x$ - and every number in it is our own computation, all of which I reproduced. No block needs
  relabelling.
- **[source]** None recorded: nothing in the unit disagrees with a cited source.
