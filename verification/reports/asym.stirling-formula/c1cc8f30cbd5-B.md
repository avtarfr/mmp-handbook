VERDICT: PASS
UNIT: asym.stirling-formula
VERIFIER: B

## Findings
1. [source] example, Part A (line 213): the unit reports a disagreement with
   :cite[Arfken, Weber and Harris] Table 13.1, p. 625, and the unit is right. Recomputing the
   two-term ratio $\sqrt{2\pi}s^{s+1/2}e^{-s}(1+\tfrac1{12s})/\Gamma(s+1)$ at 30 digits gives
   $0.99996824$ at $s=10$, where the book prints $0.99998$. The error is the book's. Recorded with
   `node tools/discrepancy.mjs add asym.stirling-formula arfken-2013 "§13.4, Table 13.1, last row
   (s = 10), p. 625" ...`. No change required; by docs/contributing/source-authority.md this does not
   fail the unit, and the unit handles it exactly as the drafter guidance asks.

2. [minor] example, Part A (line 213): "our values agree with theirs everywhere except at $s=10$"
   is true only if one notices that Arfken's table truncates rather than rounds. My values round
   to $0.92214$ at $s=1$ and $0.99079$ at $s=9$ where the book prints $0.92213$ and $0.99078$, and
   to $0.98622$ at $s=6$ where it prints $0.98621$ — all consistent with truncation, none with
   round-to-nearest. The unit's own "which rounds to $0.99997$" silently switches to the other
   convention, which slightly weakens the comparison: under the table's own convention the entry
   should read $0.99996$.
   Fix: add half a clause saying the book truncates, and give both $0.99996$ and $0.99997$.

3. [minor] method, step 4 (line 200): "two [terms suffice] from $x\approx6$" is a factor of two or
   three too cautious on the unit's own evidence. The two-term relative error is $2.8\times10^{-4}$
   at $x=3$ and $5.2\times10^{-4}$ at $x=2$, so three significant figures are reached at
   $x\approx3$. (One term from $x\approx100$ is right: $1/(12x)=8.3\times10^{-4}$ there.)
   Fix: $x\approx3$.

4. [minor] application (line 270): "applying the two-term formula to all three factorials" for
   de Moivre-Laplace. The one-term formula already delivers $\sqrt{2/(\pi n)}e^{-y^2/2}$ with the
   constant; the $1/(12x)$ factors cancel to $O(n^{-1})$ and are not needed for the stated result.
   Fix: "the leading formula".

## Checked
- Counterexample search: the hypotheses of Laplace's method as the proof invokes them.
  $\varphi(u)=u-1-\ln u$ on $(0,\infty)$: $\varphi'=1-1/u$ vanishes only at $u=1$,
  $\varphi''=u^{-2}>0$ everywhere so non-degeneracy is automatic as the remark says,
  $\varphi(1)=0$, $\varphi''(1)=1$, and $\varphi\to+\infty$ at both ends. The expansion
  $\varphi(1+v)=v-\ln(1+v)=v^2/2-v^3/3+v^4/4-\cdots$ and the sign flip into
  $\exp[x(v^3/3-v^4/4+\cdots)]$ are both correct. The Gaussian moments
  $\int e^{-xv^2/2}v^{2k}dv=\sqrt{2\pi/x}\,(2k-1)!!\,x^{-k}$ check at $k=0,1,2,3$, giving
  $\langle v^4\rangle=3x^{-2}$ and $\langle v^6\rangle=15x^{-3}$ as stated. The remark's claim
  that the $u\to0^+$ end contributes only $O(x^{-x})$ up to $e^x$ is right in order of magnitude
  ($e^xu^xe^{-xu}$ integrated over $(0,1/x)$ is $\sim e^xx^{-x-2}$), far smaller than any
  exponential. The statement's internal consistency check
  $\ln\Gamma(z+1)=\ln z+\ln\Gamma(z)$ does turn Ahlfors's (37) into Arfken's (13.60):
  $\tfrac12\log2\pi-z+(z-\tfrac12)\log z+\ln z=\tfrac12\log2\pi+(z+\tfrac12)\log z-z$.
  I also checked the series coefficients of the definition block against part 3: $n=1$ gives
  $B_2/(2\cdot1\cdot z)=1/(12z)$, $n=2$ gives $B_4/(4\cdot3z^3)=-1/(360z^3)$, $n=3$ gives
  $B_6/(6\cdot5z^5)=1/(1260z^5)$, matching (13.60) term for term; and Ahlfors's older-numbering
  $C_\nu=(-1)^{\nu-1}B_\nu/[(2\nu-1)2\nu]$ with $B_1=\tfrac16$ gives the same $1/(12z)$, as the
  unit claims. The remark's divergence claim is right: at $z=10$ the terms bottom out near
  $n\approx\pi z$ at about $5\times10^{-28}$, far below double precision relative to
  $\ln\Gamma(11)=15.1$.
- Calculations, all at 30-50 digits with mpmath and checked symbolically with sympy where
  algebraic.
  Step 6: $-\tfrac x4\cdot\tfrac3{x^2}=-\tfrac3{4x}$, $\tfrac{x^2}{18}\cdot\tfrac{15}{x^3}=\tfrac5{6x}$,
  $-\tfrac34+\tfrac56=\tfrac1{12}$ — correct.
  Part A table: $S_1/\Gamma$, $S_2/\Gamma$, $S_3/\Gamma$ at $x=5$ are
  $0.98349307,\ 0.99988462,\ 1.0000212$ (unit: $0.983493,\ 0.999885,\ 1.000021$) and at $x=10$ are
  $0.99170404,\ 0.99996824,\ 1.0000027$ (unit: $0.991704,\ 0.999968,\ 1.000003$) — every entry
  correct. The prose errors $1.651\%\to1.7\%$, $0.8296\%\to0.83\%$, $1.154\times10^{-4}\to1.2\times10^{-4}$,
  $3.176\times10^{-5}\to3.2\times10^{-5}$, $2.121\times10^{-5}\to2.1\times10^{-5}$,
  $2.674\times10^{-6}\to2.7\times10^{-6}$ are all right, and the sign change between the second
  and third truncation is real.
  Part B: $\binom{100}{50}=100891344545564193334812497256=1.00891344546\times10^{29}$ (unit's digits
  are exact). The correction algebra checks symbolically: with $x=1/n$,
  $(1+\tfrac x{24}+\tfrac{x^2}{1152})/(1+\tfrac x{12}+\tfrac{x^2}{288})^2=1-\tfrac x8+\tfrac{x^2}{128}+O(x^3)$,
  and the denominator squares to $1+\tfrac x6+\tfrac{x^2}{72}+\cdots$, both exactly as printed;
  $\tfrac1{1152}+\tfrac1{72}-\tfrac1{144}=\tfrac9{1152}=\tfrac1{128}$ confirmed.
  Numbers: $4^{50}=1.2676506\times10^{30}$, $\sqrt{50\pi}=12.53314137$, leading term
  $1.01143884241\times10^{29}$ high by $0.2503\%$ (unit: $0.250\%$); two-term
  $1.00891024531\times10^{29}$ with relative error $3.172\times10^{-6}$ (unit:
  $1.008910245\times10^{29}$, $3.2\times10^{-6}$); three-term $1.00891340605\times10^{29}$ with
  relative error $3.905\times10^{-8}$ (unit: $1.008913406\times10^{29}$, $3.9\times10^{-8}$); error
  ratios $789.2$ and $81.2$ (unit: "about $790$ and $81$"). At $n=1$ the three approximations are
  $2.25676,\ 1.97466,\ 1.99229$ (unit: $2.257,\ 1.975,\ 1.992$). Every boxed and quoted number in
  the unit is correct.
  I separately verified the application's claims: $u_{2k}=\binom{2k}{k}2^{-2k}\sim1/\sqrt{\pi k}$
  follows from the example's own result; $k=n/2+y\sqrt n/2$ turns $\binom nk2^{-n}$ into
  $\sqrt{2/(\pi n)}e^{-y^2/2}$; and Stakgold and Holst's $I_k=2^{2k+1}(k!)^2/(2k+1)!$ gives
  $\sqrt k\,I_k\to\sqrt\pi$, since $I_k=2^{2k+1}/[(2k+1)\binom{2k}k]\sim\sqrt{\pi/k}$.
- Citations, every page opened.
  arfken-2013: p. 589 Example 12.7.1 with $\Gamma(t+1)=t^{t+1}\int_0^\infty e^{t(\ln z-z)}dz$,
  $\arg w''=\pi$, $\theta=0$, and "probably the easiest way of obtaining this term" (matches);
  p. 591 Exercise 12.7.3, $\Gamma(1+s)\approx\sqrt{2\pi s}\,s^se^{-s}$ for complex $s$ with large
  positive real part (matches part 4's last sentence exactly); p. 622 "a relatively simple way of
  obtaining the full asymptotic expansion is by use of the Euler-Maclaurin integration formula"
  (matches step 7); p. 623 Eq. (13.55) applied to $\int_0^\infty(z+x)^{-2}dx=1/z$, Eq. (13.56), and
  "Since the Bernoulli numbers diverge strongly, this series does not converge ... semiconvergent"
  (matches the definition block's divergence claim and its locator); p. 624 Eqs. (13.57)-(13.60),
  $C_1=0$ and $C_2=\tfrac12\ln2\pi$ from the Legendre duplication formula, and "The absolute value
  of the error is less than the absolute value of the first term neglected" (matches part 3's last
  sentence); p. 625 Exercise 13.4.1 with
  $1+\tfrac1{12z}+\tfrac1{288z^2}-\tfrac{139}{51840z^3}$ (matches part 2 exactly), Exercise 13.4.3
  (matches), Table 13.1 (finding 1) and Fig. 13.4's "0.83% low" (matches the unit's $0.83\%$).
  ahlfors-1979: p. 201 §2.5 heading, the residue proof after Lindelöf, and the partial sums of
  $\sum(z+\nu)^{-2}$ (matches the frontmatter); p. 203 Eqs. (35)-(36) and the split at $\eta=|z|/2$
  with the half plane $x\ge c>0$ (matches part 4 and the remark); p. 204 $C=-1$ from
  $\Gamma(z+1)=z\Gamma(z)$, $C'=\tfrac12\log2\pi$ from $\Gamma(z)\Gamma(1-z)=\pi/\sin\pi z$ at
  $z=\tfrac12+iy$, and Eqs. (37)-(38) (matches the unit's displayed identity character for
  character in content); p. 205 Eqs. (40)-(41) and the warning against reading it as a Laurent
  development (matches the definition block).
  grimmett-stirzaker-2020: p. 86 Eq. (20) and $u_{2k}\sim1/\sqrt{\pi k}$ (matches the application);
  p. 214 Example (6), the de Moivre footnote, and Eq. (7)
  $\Gamma(t)/[t^{t-1}e^{-t}\sqrt{2\pi t}]\to1$, which is the unit's equivalent form
  $\Gamma(t)\sim t^{t-1/2}e^{-t}\sqrt{2\pi}$ (matches); p. 215 the Fourier-inversion proof with
  dominated convergence (matches); p. 216 Exercise 5.9.6, "Laplace's method of steepest descent",
  with $f_n(x)=n\log x-x$ (matches step 4, including the maximum at $x=n$); p. 403 Problem 5.12.26
  with the bound $a(n-k,n)/a(n+1,n)\le e^{-k^2/(2n)}$ and the Poisson CLT (matches).
  hassani-2013: p. 385 Example 12.5.1 with $f(z)=\ln z-z/\alpha$, $z_0=\alpha$,
  $\tfrac12f''(z_0)=\tfrac1{2\alpha^2}e^{i\pi}$, $\theta_1=0$, and "Stirling approximation"
  (matches step 2's remark that Hassani does not rescale).
  folland-1999: p. 327 Exercise 21, $Y_n=\max\{(S_n-n)/\sqrt n,0\}$,
  $E(Y_n)=n^{n+1/2}e^{-n}/n!$ by a telescoping sum, vague convergence to
  $\tfrac12\delta_0+\chi_{(0,\infty)}\nu_1$, $E(Y_n)\to(2\pi)^{-1/2}$ (matches the remark and the
  application).
  stakgold-holst-2011: p. 122 Exercise 2.2.7(a), $I_k=2^{2k+1}(k!)^2/(2k+1)!$,
  $k!\sim k^ke^{-k}\sqrt{2\pi k}$, $\lim\sqrt k\,I_k=\sqrt\pi$, in the Weierstrass approximation
  theorem exercise (matches the application, including that it is the delta-family normalisation).
- Provenance: `definition`, `statement` and `proof` are `adapted` with sources; the proof's
  seven-step shape (rescale, exponentiate, check Laplace's hypotheses, leading order, expand to
  $v^4$ and $v^6$, integrate against moments, hand the rest to Euler-Maclaurin) is ours — Arfken
  and Hassani both stop at the leading term, Grimmett and Stirzaker give only the exercise
  statement, and Arfken's §13.4 reaches the series by an entirely different route that the unit
  describes rather than reproduces. No sentence tracks a source's wording; the closest thing is
  the unavoidable $\varphi(u)=u-1-\ln u$. The `idea`, `remark`, `method`, `example` and
  `application` blocks are `original`; the $\binom{100}{50}$ computation and the $S_3$ column of
  Part A appear in none of the sources, and per docs/COPYRIGHT_POLICY.md line 9 reporting a book's
  table with an inline cite in an otherwise original example is Original. `npm run check` reports
  no `resembles` warning for this unit.
