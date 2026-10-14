VERDICT: FAIL
UNIT: stats.periodogram
VERIFIER: B

## Findings
1. [blocking] statement part 4 (line 126) and proof part 4 (line 196): the exact distribution
   claimed for **tapered** segments is false at some interior Fourier frequencies. The statement
   says that for Gaussian white noise and non-overlapping segments
   $\bar I(\lambda_j)/g \sim \chi^2_{2K}/(2K)$ "at the interior Fourier frequencies of the segment
   grid", and the proof justifies it with "tapering does not disturb the argument, since for white
   noise ... the taper-normalised sums again come out equal and orthogonal at the interior Fourier
   frequencies". They do not come out equal. With a real taper $w$,
   $\operatorname{var}A_j - \operatorname{var}B_j = \sigma^2\sum_t w_t^2\cos(2\lambda_j t)$, which
   vanishes for $w\equiv1$ at every interior $j$ (part 3 is therefore fine) but not for a general
   taper. Counterexample with the unit's own default, the Hann taper of method step 4, at $M = 16$:
   $\sum_t w_t^2 = 6$ and $\sum_t w_t^2\cos(2\lambda_j t) = 1$ at $j = 1$ and $j = 7$, so
   $A_j \sim N(0, 3.5\sigma^2)$ and $B_j \sim N(0, 2.5\sigma^2)$ — uncorrelated but of unequal
   variance, hence $I^w_M(\lambda_j)$ is not $\tfrac12 g\chi^2_2$ and $\bar I$ is not
   $g\chi^2_{2K}/(2K)$. The mean is still exactly $g$, but
   $\mathrm{sd}/\mathrm{mean} = \sqrt{37}/6 = 1.0138$ per segment, not $1$ (Monte Carlo,
   $4\times10^5$ draws: $1.016$ at $j=1$ against $0.998$ at $j=3$). This matters because the unit
   itself treats quoting the wrong degrees of freedom as a real error (remark, line 205). Fix:
   state part 4 for $w \equiv 1$, or add the hypothesis
   $\sum_t w_t^2\mathrm{e}^{-2i\lambda_j t} = 0$ — which for the Hann taper holds at every interior
   $\lambda_j$ except the two nearest each band edge — and say the general tapered case is only
   approximate.

2. [minor] statement part 2 (line 107): "the main lobe of $\Phi^w_N$, whose full width between its
   first zeros is about $4\pi/N$". $4\pi/N$ is the rectangular window's main lobe; a taper widens
   it, as the unit says itself at method step 4 ("a main lobe twice as wide" for Hann). Fix: attach
   the figure to $\Phi_N$, or say "at least $4\pi/N$, and wider for a taper".

## Checked
- Counterexample search: part 1 is an identity and was verified numerically rather than attacked
  (below). Part 2's uniform-convergence argument is correct, including the $\varepsilon$/$H$ split.
  Part 3 was attacked at the frequencies where the orthogonality sums degenerate — $j = 0$ and
  $j = N/2$ — and the unit already handles both, with the right $\chi^2_1$ law. The attack that
  succeeded was on part 4's tapered case (finding 1): I computed
  $\sum_t w_t^2\cos(2\lambda_j t)$ for the Hann taper at $M = 16$ and every interior $j$, getting
  $1$ at $j = 1,7$ and $0$ at $j = 2,\dots,6$, then confirmed the consequence by simulation.
- Calculations:
  - Part A. $x = (5,3,1,3,5,3,1,3)$, mean $3$, $y = (2,0,-2,0,2,0,-2,0)$; $J_8(\lambda_2) = 8$,
    $I_8(\lambda_2) = I_8(\lambda_6) = 64/(16\pi) = 4/\pi = 1.27324$; sum check
    $(2\pi/8)(2\cdot4/\pi) = 2$ against mean square $16/8 = 2$; uncentred $J_8(0) = 24$,
    $I_8(0) = 576/(16\pi) = 11.459 = 9\times1.27324$. All reproduced exactly.
  - Part B. Computed the full 16-point periodogram of $x_t = \cos(2\pi\cdot3.5t/16)$ with numpy:
    $I(\lambda_3) = 0.25121$, $I(\lambda_4) = 0.27130$, $I(\lambda_2) = 0.02892$,
    $I(\lambda_5) = 0.03538$, total $= 1.2732395 = 4/\pi$ (and $\sum_t x_t^2 = 8$ exactly).
    Two-bin share $2(0.25121+0.27130)/1.27324 = 82.08\%$; four-bin $92.18\%$; residue $7.82\%$.
    With the Hann taper: $96.14\%$ and $99.93\%$. Every printed figure matches to the last digit.
  - Part C. $c(0) = (1+\theta^2)\sigma^2$, $c(\pm1) = \theta\sigma^2$ give
    $g = (\sigma^2/2\pi)(1+\theta^2+2\theta\cos\lambda)$ and
    $\mathbb{E}I_N = g - \theta\sigma^2\cos\lambda/(\pi N)$. At $\theta = 1/2$, $\sigma^2 = 1$,
    $N = 8$: $g(0) = 2.25/2\pi = 0.358099$, $\mathbb{E} = 2.125/2\pi = 0.338204$, low by
    $5.556\%$; $g(\pi) = 0.25/2\pi = 0.039789$, $\mathbb{E} = 0.375/2\pi = 0.059683$, high by
    exactly $50\%$; absolute bias $1/(16\pi) = 0.0198944$ at both ends. All correct.
  - Part 1 identity, tested independently on a random record of length $13$:
    $I_N(\lambda_j)$ and $(2\pi)^{-1}\sum_h\hat c(h)\mathrm{e}^{-ih\lambda_j}$ agreed to 10 decimal
    places at $j = 1,4,7$; the sum rule gave $2.1249864485$ on both sides.
  - Window figures: maximising $\sin^2(\pi u)/\sin^2(\pi u/N)$ over $u\in(1,2)$ at $N = 512$ puts
    the first sidelobe at $u = 1.4303$ bins, ratio to peak $0.047192$, i.e. $-13.26$ dB — the
    unit's "about $1.43$", "about $4.7\%$", "$-13.3$ decibels". The Hann window's first sidelobe
    came out at $-31.47$ dB against the unit's "about $-31.5$". Application block:
    $\ln(N/2) = \ln 500 = 6.21$, the unit's "about $6$".
- Citations: grimmett-stirzaker-2020 pp. 438-444 — §9.3 begins on p. 438; Theorem (9.3.2)(b),
  non-negative definiteness, is on p. 439; the discrete-time representation (9.3.11)-(9.3.14) on
  p. 441; Theorem (9.3.15) with (9.3.16)
  $f(\lambda) = (2\pi)^{-1}\sum_n\mathrm{e}^{-in\lambda}\rho(n)$ and (9.3.18)
  $\sum_n|\rho(n)|<\infty$ on p. 442, prefaced by the book's own words "a sufficient (but not
  necessary) condition", which is exactly what the remark at line 202 attributes to it; Example
  (9.3.19), discrete white noise with uniform density on $[-\pi,\pi]$, on p. 442. §9.7 Problem 7(a)
  is on p. 468 as cited: $X_n = Z_n + \alpha Z_{n-1}$ with $Z$ uncorrelated, zero mean, unit
  variance — and the unit says in Part C that it writes $\theta$ for the book's $\alpha$ and keeps
  a general $\sigma^2$, so the report is faithful. rhb-2006 p. 462 — Exercise 13.10 is there, with
  $F_k = (2\pi)^{-1/2}\sum_{n<N}f_n\mathrm{e}^{-2\pi nki/N}$,
  $\tilde f(2\pi k/(N\tau)) \approx F_k\tau$, eight samples at $\tau = 0.25$, and the note about
  good agreement for $k<4$; the note block's use of it as the sampling-interval factor is right.
  arfken-2013 p. 945 — Exercise 19.1.2 with $\alpha_n^2 = a_n^2+b_n^2$ and the Note "The
  coefficients $\alpha_n^2$ ... define what is called the power spectrum. The importance of
  $\alpha_n^2$ lies in their invariance under a shift in the phase $\theta_n$", supporting exactly
  the claim made at line 61. Eq. (20.120) is on p. 1004 (inside the cited 1003-1007); Example
  20.6.1 (aliasing, $\cos 3x$ at four points) on p. 1006; Exercise 20.6.1 on p. 1007 with the three
  cases $0$, $N/2$, $N$ precisely as the proof uses them, and Exercise 20.6.3(a)
  $F_p = F^*_{N-p}$ on p. 1007. stakgold-holst-2011 p. 144 — Exercise 2.3.6 gives
  $F_n(x) = \sin^2(nx/2)/(2\pi n\sin^2(x/2))$ and calls it a delta sequence; this is the unit's
  $\Phi_N$ with $n \to N$, so the normalisation claim at line 75 is right.
- Provenance: the `adapted` blocks are the definition (src Arfken 19.1.2 and RHB 13.10) and the
  proof (src Arfken §20.6 and G&S §9.3). Neither source contains a periodogram, a taper, a spectral
  window or a sampling distribution for $|J_N|^2$; what is drawn from them is the name "power
  spectrum", a sampling-interval factor, three orthogonality sums and an inversion formula, each
  used in our own notation and our own order. Nothing approaches sentence-level resemblance, and
  `node tools/check` raised no `resembles` warning. The `original` label on the statement, idea,
  remark, method, example and application blocks is accurate — which is why finding 1 is ours to
  own rather than a source's.
