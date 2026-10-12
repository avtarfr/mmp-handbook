VERDICT: PASS
UNIT: spec.elliptic-integrals
VERIFIER: B

## Findings

1. [minor] proof, part 4 (lines 115, 117): the symbol `m` is used for the pendulum
   mass ("potential energy ... -mgl cos theta", "(1/2) m l^2 theta-dot^2",
   "-mgl cos theta_M") while `m` is the elliptic parameter everywhere else in the
   unit — including eight lines later in the same block, "Write sqrt(m) =
   sin(theta_M/2)". The mass cancels immediately and nothing downstream is wrong, so
   this is not an error, but it is a collision in a unit whose definition block makes
   a point of saying that the only protection against argument confusion "is to state
   the convention". Fix: write the mass as `M` (or drop it, since the statement is
   mass-independent) in the three displays of part 4.

2. [minor] proof, part 3 (line 113): "the integrand (1-m sin^2 theta)^{-1/2} develops
   a non-integrable square-root singularity at theta = pi/2 in the limit". At m = 1
   the integrand is 1/|cos theta| ~ 1/(pi/2 - theta): a simple pole, not a square-root
   singularity. A genuine (pi/2-theta)^{-1/2} singularity would be integrable, so the
   adjective works against the sentence's own point. The rest of the paragraph is
   right and derives the logarithm correctly. Fix: "a non-integrable inverse-linear
   singularity", or simply "the integrand blows up like 1/(pi/2 - theta)".

## Checked

- **Automated checks.** `node tools/check/index.mjs --record` prints `ok
  spec.elliptic-integrals`; no FAIL line and no `resembles` warning.

- **Counterexample search.** The domain restrictions are exactly the right ones:
  `0 <= m < 1` for K (at m = 1 the integral diverges) and `0 <= m <= 1` for E (at
  m = 1 the integrand is |cos theta| and E(1) = 1). The pendulum hypothesis
  `0 < theta_M < pi` is needed twice as the remark claims — I checked that
  sin(theta/2) is strictly increasing on [0, theta_M] exactly for theta_M < pi, so the
  substitution is invertible, and that m = sin^2(theta_M/2) < 1 exactly there. The
  claim that the series coefficients decay like 1/n is right:
  [(2n-1)!!/(2n)!!]^2 ~ 1/(pi n), so the m = 1 series is harmonic-type and diverges —
  consistent with part 3. The hypergeometric identification in part 2 holds only on
  |m| < 1, as stated; I checked it cannot be extended to m = 1 for K.

- **Calculations.** All recomputed in mpmath at 20 digits; every number the unit prints
  was reproduced.
  - **K(1/2) = 1.8540746773013719**, matching the unit's 1.8540746773.
    **K(m=1/4) = 1.6857503548**, matching the unit's warning value 1.6858.
  - Series terms at m = 1/2: 1, 0.125, 0.03515625, 0.01220703, 0.004673. Partial sums
    times pi/2: **1.570796, 1.767146, 1.822369, 1.841544, 1.848884**; after twelve
    terms **1.8540560775** (unit: 1.854056). All match.
  - Series coefficients verified symbolically: K has [(2n-1)!!/(2n)!!]^2 (1/4, 9/64,
    25/256, 1225/16384) and E has the same over (2n-1) (1/4, 3/64, 5/256). The
    Pochhammer identities (1/2)_n = (2n-1)!!/2^n, n! = (2n)!!/2^n,
    (-1/2)_n = -(2n-3)!!/2^n and (2n-3)!! = (2n-1)!!/(2n-1) all check.
  - Part 2 verified numerically: (pi/2)·2F1(1/2,1/2;1;0.5) = **1.8540746773014** =
    K(0.5); (pi/2)·2F1(-1/2,1/2;1;0.64) = **1.2763499431699** = E(0.64).
  - Pendulum: sqrt(l/g) = **0.3193299568**, **T_0 = 2.0064092926 s**,
    **T = 2.3682463463 s**, **T/T_0 = 2K(1/2)/pi = 1.1803405990** — all as printed, and
    the 18.03% figure follows.
  - Small-amplitude expansion: m = theta^2/4 - theta^4/48 + ... fed into
    1 + m/4 + 9m^2/64 gives theta^2/16 and -1/192 + 9/1024 = **11/3072** for theta^4,
    exactly as the unit derives. At theta_M = pi/2: 1 + pi^2/64 = **1.1542125688**
    (unit: 1.15421), capturing 0.15421/0.18034 = **85.5%** of the true correction; with
    the quartic term **1.1760122921** (unit: 1.17601); exact 1.18034.
  - Ellipse: m = 16/25, **E(0.64) = 1.2763499432**, perimeter 20·E =
    **25.5269988634** (unit: 25.526999); crude estimate 2 pi sqrt(17) =
    **25.9062366868** (unit: 25.906237), 1.49% high; direct quadrature of
    4 int_0^{pi/2} sqrt(25 cos^2 t + 9 sin^2 t) dt returns **25.5269988634**,
    identical. (The quoted integrand is the sin/cos-swapped form of the arc-length
    integrand, equal to it on [0, pi/2] by t -> pi/2 - t; the value is right.)
  - Clock rule: 1 s/day = 1/86400 = **1.157e-5**; theta·delta-theta/8 < 1.2e-5 at
    theta = 3 deg = 0.05236 rad gives delta-theta < **1.83e-3 rad = 0.105 deg**, as
    stated.
  - Pendulum derivation re-derived from scratch: d theta = 2 sqrt(m) cos phi /
    sqrt(1 - m sin^2 phi) d phi and the denominator sqrt(m) cos phi cancel exactly,
    leaving T/4 = sqrt(l/g) K(m). Correct.
  - AGM claim: K(m) = pi/(2 AGM(1, sqrt(1-m))) — verified at m = 0.5 and m = 0.9.

- **Citations.** All pages opened with `tools/corpus/pages.mjs`.
  - arfken-2013 pp. 927–932: (18.169) F(phi\alpha), (18.170) F(x|m) with
    `0 <= m < 1`, (18.172)–(18.174) E(phi\alpha), E(x|m) with `0 <= m <= 1`, E(m) —
    the unit's definitions, separators and domain restrictions are the book's;
    (18.175)–(18.176) the two series; **(18.177) prints K(m) = (pi/2) 2F1(1/2,1/2;1;m)
    and E(m) = (pi/2) 2F1(-1/2,1/2;1;m)**, exactly as part 2; (18.178)–(18.179) the
    limits including lim K = infinity; p. 930 the "rational function of t and the
    square root of a quartic" remark the method quotes; Example 18.8.1 uses the
    half-angle substitution sin(theta/2) = sin(theta_M/2) sin phi (eq. 18.167), as the
    proof says. Exercise 18.8.1, p. 931, is the ellipse arc = a E(m) with
    m = (a^2-b^2)/a^2 — exactly the example's second number. Exercise 18.8.4, p. 932,
    prints A_phi = (mu_0 I/(pi k)) (a/rho)^{1/2} [(1-k^2/2)K(k^2) - E(k^2)] with
    k^2 = 4 a rho/((a+rho)^2 + z^2) — the application's display is this, character for
    character, and the unit's note about the squared-modulus argument is right.
  - strogatz-1994 pp. 192–193: Exercise 6.7.4 "(Period of the pendulum)" with the
    substitution sin(alpha/2) sin phi = sin(theta/2), the result T = 4 K(sin^2(alpha/2)),
    the displayed definition of K(m) for 0 < m < 1, and part (d) asking for
    T = 2 pi [1 + alpha^2/16 + O(alpha^4)]. Everything the unit attributes to him is
    there.
  - ahlfors-1979 pp. 238–240: Sect. 2.3 "Mapping on a Rectangle"; K and K' as the
    rectangle's sides; "the inverse function of the elliptic integral (7) is a
    meromorphic function with periods 2K and 2iK'". The unit's final application
    paragraph is a faithful summary, and his modulus convention is correctly flagged.

- **Provenance.** No `resembles` line. I compared the pendulum derivation with
  arfken-2013 pp. 927–928 and strogatz-1994 pp. 192–193: the route is theirs (energy
  integral, half-angle identity, the amplitude-removing substitution) which is why the
  block is `adapted`, but our text is independently written, keeps its own symbols, and
  adds justification the sources do not give (the invertibility argument for the
  substitution, the symmetry argument for the quarter period). The definition block's
  three-conventions table and the K(1/2) vs K(k=1/2) warning are ours. The `original`
  blocks (idea, remark, example, application) are not tracking any one source; the
  ellipse number overlaps Arfken Exercise 18.8.1 only in the identity used, and the
  unit cites it in the frontmatter.

- **Style.** Idea precedes the proof and describes that proof. No "clearly" or
  "obviously". The worked example ends in several checkable numbers (T = 2.368246 s,
  T/T_0 = 1.1803406, P = 25.526999). The hypotheses remark is accurate on every bullet,
  including the correct statement that theta_M = pi is the separatrix.
