VERDICT: FAIL
UNIT: num.root-finding
VERIFIER: B

## Findings

1. [blocking] statement, part (a) Bisection (lines 43-54): the iteration as written has no
   provision for `f(x_n) = 0`, and with the strict inequality `f(a_n) f(x_n) < 0` the stated
   conclusion is false. Counterexample: `f(x) = x - 1/2` on `[a,b] = [0,1]`, which is continuous
   with `f(0)f(1) = -1/4 < 0`. Step 1 gives `x_1 = 1/2`, so `f(x_1) = 0`; the test
   `f(a_1)f(x_1) < 0` reads `0 < 0`, which is false, so the rule takes the "otherwise" branch and
   sets `[a_2,b_2] = [1/2, 1]`. From then on every test is `0 < 0` again and the bracket collapses
   to the right: `[a_n,b_n] = [1 - 2^{-(n-1)}, 1]` and `x_n = 1 - 2^{-n}`. Hence `a_n \uparrow 1`
   and `b_n \downarrow 1`, the common limit is `1`, and `f(1) = 1/2 \neq 0`, contradicting
   "a limit `\xi` with `f(\xi) = 0`"; the bound `|x_n - \xi| \le (b-a)/2^n` also fails, since
   `x_8 = 255/256` is at distance `0.496` from the actual root `1/2` while the bound claims
   `2^{-8} = 0.0039`. This is a degenerate case that occurs routinely in practice, because a
   dyadic midpoint landing exactly on the root is a common event in binary arithmetic.
   The proof is aware of the case and the statement is not: proof step 1 (line 106) says
   "If `f(x_n) = 0` we have the root and stop", a stop rule the statement does not contain, and
   proof step 1's sign argument ("the two products have the product `f(a_n)f(b_n)f(x_n)^2 < 0`")
   is valid only when `f(x_n) \neq 0`. So the unit is also internally inconsistent here.
   Fix: either weaken the test in the statement to `f(a_n) f(x_n) \le 0` (which repairs it with a
   one-character change: the root is then kept as `b_{n+1}` and the bracket never loses it), or
   add the stopping clause "if `f(x_n) = 0` the iteration stops with `\xi = x_n`" to the
   statement so that it matches the proof.

2. [minor] statement (line 42) and frontmatter `role` (line 13): the `src` of the statement block
   is `rhb-2006` (§27.1.3-27.1.4, §27.2) plus `kreyszig-1978` (§5.1 Problem 15), and those
   locators do support parts (a) and (b). They do not support part (c): Riley, Hobson and Bence
   do not treat the unbracketed secant method at all (their §27.1.2, pp. 988-989, is the
   bracketed false-position variant, and nothing on pp. 985-994 mentions the golden-ratio order
   or the Fibonacci bound), and Kreyszig pp. 304-306 is only about one-point contractions. The
   secant statement and its order are our own material. The `adapted` label is the conservative
   direction and nothing is misattributed in the prose, so this is not blocking, but the
   frontmatter `role` "the three schemes" overstates what rhb-2006 supplies.
   Fix: mark part (c) as original, or narrow the `src`/`role` to say that rhb-2006 supplies
   (a), (b) and the order-of-convergence apparatus only.

3. [minor] method, step 4 (line 188): "if `|e|` has not at least halved, discard the step and
   bisect instead". The error `|e| = |x_n - \xi|` is exactly the quantity that is unknown during
   the computation, so this test as phrased cannot be implemented.
   Fix: say what is actually monitored -- the bracket width `b_n - a_n`, or the step
   `|x_{n+1} - x_n|`.

4. [minor] remark, first bullet (line 166): `f(x) = 1/x` on `[-1,1]` is offered as the case where
   the limit is not a root, but on that exact bracket the very first midpoint is `x_1 = 0`, the
   pole itself, so `f(x_1)` is undefined and the iteration cannot be started at all. The point
   being made is correct for a generic bracket (I ran the stated rule on `[-2,1]`: the iterates
   are `-0.5, 0.25, -0.125, \dots \to 0`, converging to the pole, which is not a root).
   Fix: use a bracket whose midpoints avoid the singularity, e.g. `[-2,1]`.

5. [minor] remark (line 177) cites Kreyszig at "§5.1, Problem 15, p. 306". The problem's
   hypotheses ("real-valued and twice continuously differentiable on `[a,b]`, `\bar{x}` a simple
   zero") are the last lines of p. 305; only the conclusion to be proved is on p. 306. The
   frontmatter range `304-306` is right; the inline locator should be `pp. 305-306`.

6. [source] rhb-2006, §27.2, Eqs. (27.18)-(27.19), p. 993: the book's definition of Nth-order
   convergence requires only `F'(\xi) = \cdots = F^{(N-1)}(\xi) = 0`, with no condition
   `F^{(N)}(\xi) \neq 0`, so as written it does not pin the order (and the worked square-root
   example on p. 994 has to add "but not third-order" by hand). The unit follows the source and
   supplies the missing non-degeneracy condition explicitly in its own voice at line 39, which
   is the right treatment. Recorded with `tools/discrepancy.mjs`; not a fault of the unit.

7. [minor] automated check emits `warn num.root-finding: kreyszig-1978 pp. 304-306 never mention
   findin; check the page numbers`. I judge this a false positive of the title-keyword
   heuristic: pp. 304-306 are Problems 10-16 of Kreyszig §5.1, which are precisely about
   iterative solution of `f(x) = 0` ("To find approximate numerical solutions of a given
   equation f(x)=0", p. 304) and about Newton's method (Problem 15), i.e. exactly this topic.
   The page numbers are right. No action needed.

## Checked

- **Automated checks.** `node tools/check/index.mjs --record num.root-finding`: `ok`, no FAIL
  line; the only unit-specific warn is item 7 above. `npm run check -- num.root-finding`
  produced no `resembles` line.

- **Counterexample search.**
  - *Bisection, exact root at a midpoint*: `f(x) = x - 1/2` on `[0,1]`, run in exact rational
    arithmetic with the rule exactly as the statement writes it. Iterates
    `1/2, 3/4, 7/8, 15/16, 31/32, 63/64, 127/128, 255/256`; bracket `[1-2^{-(n-1)}, 1]`;
    limit `1`, `f(1) = 1/2 \neq 0`. Statement (a) is false as written -- finding 1.
  - *Bisection, no sign change*: `f(x) = x^2` on `[-1,1]` -- correctly excluded by the
    hypothesis `f(a)f(b) < 0`, as the remark says.
  - *Bisection, discontinuous f*: `f(x) = 1/x`. On `[-1,1]` the first midpoint is the pole
    (finding 4); on `[-2,1]` the iterates `-0.5, 0.25, -0.125, \dots` converge to `0`, not a
    root, confirming the remark's point.
  - *Secant, `f(x_n) = f(x_{n-1})`*: cannot occur in the neighbourhood the statement uses,
    because `f' \neq 0` there makes `f` strictly monotone; proof step 3 covers it by the mean
    value theorem. No counterexample.
  - *Newton at a multiple root*: re-derived `e_{n+1} = e_n(1 - g/(mg + e_n g'))\to(1-1/m)e_n`
    and the modified iteration `e_{n+1} = e_n^2 g'/(mg + e_n g')`; both match the unit.
    `(1/2)^n \cdot 10^{-1} = 10^{-15}` gives `n = \log_2 10^{14} = 46.5`, so "about 47 steps",
    and quadratic Newton with `C \approx 0.56` goes `10^{-1} \to 5.6\times10^{-3} \to
    1.8\times10^{-5} \to 1.8\times10^{-10} \to 1.8\times10^{-20}`, so "instead of 4". Both right.
  - *Newton with `f \notin C^2`*: `f = \operatorname{sign}(x)|x|^{1/3}`, `f/f' = 3x`,
    `x_{n+1} = -2x_n`. Verified.
  - *Newton 2-cycle*: `f = x^3 - 2x + 2`, `x_0 = 0 \to x_1 = 1 \to x_2 = 0`. Verified; and the
    cubic has exactly one real root (`f` at its critical points `\pm\sqrt{2/3}` is `3.09` and
    `0.911`, both positive), which I computed as `-1.76929235424`, matching the unit's
    `-1.769292354`.
  - *Statement (b) when `f''(\xi) = 0`*: the stated limit is then `0`, so the unit's hedge
    "better than 2" is correct rather than "order 2".
  - *Fibonacci identity* `F_n = (\varphi^{n+1} - (-\varphi)^{-n-1})/\sqrt5` with `F_0 = F_1 = 1`:
    checked at `n = 0,1,2` (gives `1, 1, 2`).
  - *Secant order algebra*: `C|e_n|^p \approx K_*|e_n||e_{n-1}|` with `|e_n| = C|e_{n-1}|^p`
    gives `C^{p+1}|e_{n-1}|^{p^2} \approx K_*C|e_{n-1}|^{p+1}`, hence `p^2 = p+1` and
    `C^p = K_*`, so `C = K_*^{1/p} = K_*^{p-1}`. Reproduced exactly.

- **Calculations** (`.venv/bin/python`, mpmath at 60-400 digits; every value below is one I
  obtained independently, not copied from the unit).
  - Root of `x^3 - 2x - 5`: I get `\xi = 2.094551481542326591482`; unit's
    `2.0945514815423265915` is right to all 20 digits quoted.
  - `f'(\xi) = 11.16143773`, `3\xi = 6.28365444`, `f''(\xi)/2f'(\xi) = 0.562978945778`.
    Unit: `6.28365444 / 11.16143773 = 0.5629789458`. Correct.
  - Bisection on `[2,3]`: midpoints `2.5, 2.25, 2.125, 2.0625, 2.09375, 2.109375`, errors
    `0.405449, 0.155449, 0.0304485, -0.0320515, -0.000801482, 0.0148235`. Unit's
    `0.4054, 0.1554, 0.03045, -0.03205, -0.0008015, 0.01482`: all correct, including the sign
    pattern and the observation that `x_5` beats `x_6`. `\log_2 10^{10} = 33.219281`, so 34.
  - Newton from `x_0 = 2`: I obtain
    `x_1 = 2.1`, `x_2 = 2.0945681211041852182`, `x_3 = 2.0945514816981993029`,
    `x_4 = 2.0945514815423265915`; errors `-9.45515\times10^{-2}`, `5.44852\times10^{-3}`,
    `1.66396\times10^{-5}`, `1.55873\times10^{-10}`, `1.36783\times10^{-20}`; ratios
    `e_n/e_{n-1}^2 = 0.60945515, 0.56051215, 0.56297138, 0.56297895`. Every entry of the
    unit's table matches to the digits printed, and the ratio does tend to `0.5629789458`.
    `\log_{10}|e_n| = -1.02433, -2.26372, -4.77886, -9.80723, -19.864`, matching the unit's
    `-1.02, -2.26, -4.78, -9.81, -19.86`. Hand step checked too: `f(2.1) = 0.061`,
    `f'(2.1) = 11.23`, `2.1 - 0.061/11.23 = 2.09456812110`.
  - Secant from `x_0 = 2, x_1 = 3`: `x_2 = 35/17 = 2.0588235294117647059`, then
    `2.0812636598450228492`, `2.0948241460940523543`, `2.0945494310352473216`,
    `2.0945514812275991239`, `2.0945514815423269548`; errors `-3.5728\times10^{-2}`,
    `-1.32878\times10^{-2}`, `2.72665\times10^{-4}`, `-2.05051\times10^{-6}`,
    `-3.14727\times10^{-10}`, `3.63319\times10^{-16}`; ratios `e_n/(e_{n-1}e_{n-2})` =
    `0.41732656, 0.4107541, 0.57433696, 0.56595096, 0.56291743, 0.56297941`. All six rows of
    the unit's table are correct to the digits printed.
  - Measured secant orders `\log|e_{n+1}|/\log|e_n|` at 400 digits:
    `1.59583, 1.67051, 1.62488, 1.63159, 1.6228, 1.62232, 1.62016`. The unit's list
    `1.596, 1.671, 1.625, 1.632, 1.623, 1.622, 1.620` is exactly these seven, correctly
    rounded, against `\varphi = 1.6180339887`.
  - Evaluation counts: secant reaching `x_6` uses `f(x_0),\dots,f(x_5)` = 6 evaluations;
    Newton reaching `x_3` uses 3 of `f` and 3 of `f'` = 6. The unit's cost comparison is right.
  - Floating-point floor: `|x^3| + |2x| + |5| = 9.19 + 4.19 + 5 = 18.38` at `\xi`, times
    `u = 1.11\times10^{-16}` gives `2.04\times10^{-15}`; divided by `|f'(\xi)| = 11.16` gives
    `1.83\times10^{-16}`; `\mathrm{ulp}(2.09) = 2^{-51} = 4.44\times10^{-16}`; ratio `0.41`.
    The unit's `2\times10^{-15}`, `1.8\times10^{-16}`, `4.4\times10^{-16}`, "about 0.4 of an
    ulp" are all correct. The double-root floor `\sqrt{2\,\text{noise}/|f''|} \approx 10^{-8}`
    is right in order of magnitude.
  - Wien application. Derivative condition: `5/x - e^x/(e^x-1) = 0 \Rightarrow 5(e^x-1)=xe^x
    \Rightarrow 5(1-e^{-x}) = x \Rightarrow g(x) = x - 5 + 5e^{-x} = 0`. Verified.
    `g(4) = 5e^{-4} - 1 = -0.90842181`, so `x_* \neq 4` and the root is simple, as claimed.
    Newton from `x_0 = 5`: `g(5) = 0.033689735`, `g'(5) = 0.966310265`,
    `x_1 = 4.96513569583650453`, `g(x_1) = 2.0715309\times10^{-5}`,
    `x_2 = 4.96511423175260272`, `g(x_2) = 8.035942\times10^{-12}`,
    `x_3 = 4.9651142317442763`, `g(x_3) = 1.2093011\times10^{-24}`. All match the unit.
    Errors `x_n - x_*`: `3.489\times10^{-2}`, `2.1464\times10^{-5}`, `8.3264\times10^{-12}`,
    `\approx 1.25\times10^{-24}` -- the unit's `3.5\times10^{-2}, 2.1\times10^{-5},
    8.3\times10^{-12}, 1.2\times10^{-24}` are correct (these are genuinely the errors, not the
    residuals, though the two agree to the quoted precision at `n=1,2`).
    `\lceil \log_2(2/(5\times10^{-16}))\rceil = \lceil 51.828921 \rceil = 52`. Correct.
    `hc/k_B = 0.014387768775\ \mathrm{m\,K}` from the SI defining constants;
    `b = hc/(k_B x_*) = 2.89777195519\times10^{-3}\ \mathrm{m\,K}`, which is the CODATA value;
    `b/5772 = 5.0203949\times10^{-7}\ \mathrm{m} = 502.04\ \mathrm{nm}`. All correct.
  - Method step 2: `\lceil \log_2 100 \rceil = \lceil 6.644 \rceil = 7`. Correct.
    Step 6: Newton `2^{1/2} = 1.414` digits-multiplier per evaluation vs secant
    `\varphi = 1.618`; and finite-differenced Newton gets `2` per two evaluations where the
    secant gets `\varphi^2 = 2.618`, so the unit's advice against it is right.

- **Citations.**
  - rhb-2006 §27.1.3, Eq. (27.9), p. 990 -- binary chopping, `x_n = \tfrac12(A_n+B_n)`.
    Matches; the locator and page are right.
  - rhb-2006 §27.1.4, Eqs. (27.10)-(27.11), pp. 990-991 -- the tangent construction and
    `x_{n+1} = x_n - f(x_n)/f'(x_n)`. Matches.
  - rhb-2006 §27.1.4, p. 991 -- the warning about `f'(x_n)` near zero and the oscillation near a
    maximum or minimum. Both sentences are on that page; the unit's rendering is faithful.
  - rhb-2006 §27.1.2, Eq. (27.8), pp. 988-989 -- linear interpolation, and the remark that one
    chord endpoint tends to stay fixed when the curvature keeps one sign near the root. Both on
    p. 989. The unit's identification of this with false position is our own and is standard.
  - rhb-2006 §27.2, Eqs. (27.15)-(27.16), (27.18)-(27.19), pp. 992-994 -- the error recursion,
    the definition of Nth-order convergence, the parenthetical that differentiability of `F` is
    not a prerequisite, and (bottom of p. 993) the computation
    `F'(x) = f f''/[f']^2`, zero at a simple root. All present; locators right. See finding 6.
  - rhb-2006 §27.1, p. 992 -- the closing recommendation. The book says "some combination of the
    first three methods mentioned, followed by the NR scheme if great accuracy were required";
    the unit says "some combination of a bracketing method with Newton-Raphson at the end". The
    book's "first three" includes rearrangement, which is not a bracketing method, so the unit's
    rendering is slightly narrower than the source, but it does not misreport the substance of
    the recommendation. Not raised as a separate finding; it is part of finding 2's scope.
  - kreyszig-1978 §5.1, Problems 10, 11, 15, pp. 304-306 -- Problem 10 (`|g'(x)| \le \alpha < 1`
    via Banach), Problem 11 (the interval and error estimates) on p. 304, Problem 15 (Newton's
    method a contraction near a simple zero of a twice continuously differentiable `f`) spanning
    pp. 305-306. The frontmatter range is right; see finding 5 on the inline locator.
  - All four `:ref` targets (`found.taylor-theorem`, `num.interpolation`,
    `num.floating-point-errors`, `funcan.banach-fixed-point`) exist in content/map.yaml.

- **Provenance.** Closest comparison: the proof of Newton's second-order convergence. RHB reach it
  through the fixed-point map, differentiating `F(x) = x - f/f'` to get `F'= f f''/[f']^2` and
  noting it vanishes at a simple root (p. 993). The unit instead derives the exact identity
  `e_{n+1} = f''(\eta_n) e_n^2 / 2f'(x_n)` from Taylor with a Lagrange remainder, and gets the
  invariance of the interval and the `\theta^{2^n}` bound out of it. Different route, different
  structure, no shared sentences: `adapted` is correctly applied and the text is genuinely
  rewritten. The bisection proof likewise supplies a convergence argument RHB do not give (RHB
  only tabulate and observe the factor of 2). The chord-error lemma in part (c) and the whole
  golden-ratio argument are not in either cited source -- hence finding 2, which is about the
  `src` string being too generous to rhb-2006, not about any text being too close to it. No
  `resembles` warnings from `npm run check`. The `original` blocks (note, idea, example,
  application) follow no book: RHB's standard example throughout §27.1 is `x^5-2x^2-3`, not
  `x^3-2x-5`, and the Wien application appears nowhere in the cited pages.

- **Style guide.** Idea block precedes the proof; no "clearly" or "obviously" (the one match for
  "exercise" at line 177 is the word used to describe Kreyszig's own problem, not an exercise set
  for the reader); no exercises; a fully worked example ending in checkable numbers, and a second
  one in the application ending in `502.04 nm`; hypotheses are named where used, and the remark
  block does this systematically. Block order matches docs/STYLE_GUIDE.md.
