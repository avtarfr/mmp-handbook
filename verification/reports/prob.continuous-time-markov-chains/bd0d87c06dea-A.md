VERDICT: PASS
UNIT: prob.continuous-time-markov-chains
VERIFIER: A

## Findings
1. [minor] statement "The architecture of a continuous-time chain", part 1 (line 55): the text
   promises to "flag below the three places where the extended form rather than the bare Markov
   property is what is being used", but only one later passage does any flagging (the idea block,
   line 135), and it names two uses, not three: the holding-time functional equation and "part 4 ...
   which needs the strong form". Moreover part 4 has two halves with different needs - Grimmett and
   Stirzaker prove (6.9.11)(a), independence of destination from duration, from the *extended*
   property and only (6.9.11)(b), the restart, from the *strong* one (p. 291), whereas the idea block
   assigns both to the strong form. Fix: either flag three places explicitly (the proof of the
   exponential holding time; destination-independent-of-duration via the extended property; the
   restart via the strong property at $U_0$) or drop the count.
2. [minor] definition "The chain, its semigroup and its generator" (line ~37): the rate identity
   $\mathbb{P}(X(t+h)=j\mid X(t)=i)=g_{ij}h+o(h)$ is asserted with no restriction on $S$, and the
   sentence after it says it "is part 1 of the Kolmogorov statement below and is proved there" - but
   that part is stated and proved only for finite $S$. So the definition block asserts for countable
   $S$ something the unit establishes only for finite $S$. (Grimmett and Stirzaker's (6.9.9) is
   equally unrestricted and is immediately qualified in the same way, so this is presentation, not
   infidelity.) Fix: write "when $S$ is finite" into the sentence carrying the display, and leave the
   warning about infinite $S$ where it is.
3. [minor] definition "The chain, its semigroup and its generator" (line 31): "equivalently, since
   $S$ is discrete, the paths are step functions". Right-continuity in the stated sense permits
   explosion, where the path has infinitely many jumps inside $[0,T_\infty)$; such a path is
   piecewise constant but is not a step function in the usual sense of finitely many steps on a
   bounded interval. Fix: say "locally constant to the right, hence piecewise constant", or add
   "until the explosion time".
4. [minor] definition block (line ~37) against statement part 5 (line ~62): the definition fixes
   $y_{ij}=\delta_{ij}$, hence $y_{ii}=1$, when $g_i=0$, while part 5 takes the construction's input
   to be "a transition matrix $Y$ with $y_{ii}=0$" and calls it "the same data as a generator matrix
   $G$". The two conventions collide exactly at absorbing states. Nothing downstream breaks (an
   absorbing state is never left under either convention, and Grimmett and Stirzaker note on p. 291
   that $y_{ii}=0$ "is not an essential assumption"), but as written the unit uses $Y$ with two
   incompatible diagonals. Fix: in part 5 say the rows with $g_i=0$ are immaterial, or keep
   $y_{ii}=\delta_{ii}$ throughout.

## Checked
Read Grimmett and Stirzaker pp. 288-310 against the unit. Every locator exists and matches:
Definitions (6.9.1)-(6.9.3), Theorem (6.9.4) with its Chapman-Kolmogorov proof, the extended and
strong Markov properties (6.9.5) with the proof omitted and Norris cited, Theorem (6.9.6) including
"$g_i=0$ absorbing, $g_i=\infty$ impossible" and the $Q(s+t)=Q(s)Q(t)$ route, the generator (6.9.7),
the rate statement (6.9.9) with its finite/infinite caveat, Theorem (6.9.11)(a),(b), the construction
(6.9.12), the minimal process (6.9.13) and Proposition (6.9.14), Theorem (6.9.17)(a),(b),(c),
Definition (6.9.19) and Theorem (6.9.20a) (the Levy dichotomy, so the "no analogue in discrete time"
remark is right), the recurrence definitions (6.9.21) and Theorem (6.9.22b), Exercises (6.9.3),
(6.9.6) and (6.9.11), equations (6.10.1)-(6.10.5), Theorem (6.10.7) with its (9)-(12) proof of the
backward half and the sub-stochastic/uniqueness remarks, Definition (6.10.13) with (6.10.14), Theorem
(6.10.15)(a),(b) including $\pi_k=1/(m_kg_k)$, Lemma (6.10.16a), the limit theorem (6.10.22) with no
aperiodicity hypothesis, the birth-death conditions (2)-(6) and Theorem (6.11.7)(a),(b),(c), Example
(6.11.8) with $g_n=2^n$ and $\lambda/\mu\in(1,2)$, Theorem (6.11.14), Theorem (6.11.16) with
$\mathbb{E}_I(X(t))=Ie^{(\lambda-\mu)t}$ displayed after it, and Corollary (6.11.18) with
$\rho^{-I}=(\mu/\lambda)^I$.
Re-derived by hand: the $\Gamma(g,2)$ bound $1-e^{-gh}-ghe^{-gh}=\tfrac12g^2h^2+O(h^3)$ of step 1(a)
and its uniformity in the states; the diagonal and off-diagonal expansions of step 1(b),(c),
including that the integral in (c) is squeezed between $g_ihe^{-gh}$ and $g_ih$; the collection of
finitely many uniform $o(h)$ terms in step 3 and the resulting $P_t'=P_tG$ and $P_t'=GP_t$; the
term-by-term differentiation of $e^{tG}$; the backward integral equation of step 6, whose
differentiation I carried out and which does return $p_{ij}'=\sum_kg_{ik}p_{kj}$; the column form of
$xG=0$ for a tridiagonal generator, the telescoping $D_{n-1}=D_n$ with $D_0=0$, and the product
formula; and the claim that $\nu_n=x_ng_n$ is stationary for the jump chain, which I checked directly
from $y_{n,n\pm1}$ using detailed balance. Also checked the unit's own non-explosion counterexample
(pure birth with $\lambda_n=n$ from $i\ge1$: infinite $S$, unbounded rates, deterministic hence
transient jump chain, $\sum_{n\ge i}n^{-1}=\infty$) - correct, and it does defeat all three of
(6.9.17)'s conditions, which Grimmett and Stirzaker only assert in general terms. Verified the whole
worked example numerically with numpy/scipy: $G$ has zero row sums, spectrum $\{0,-2,-4\}$,
$\pi=(9,6,1)/16$ satisfies $\pi G=0$ and is the $t\to\infty$ limit; $\mathrm{expm}(G)$ gives
$p_{00}(1)=0.61439546$ and $p_{02}(1)=0.04672782$, matching the printed values, and the closed forms
$9/16+\tfrac38e^{-2t}+\tfrac1{16}e^{-4t}$ and $\tfrac1{16}(1-e^{-2t})^2$ agree with $\mathrm{expm}$
to machine precision at $t=0.3,1,2.5$; the binomial factorisation $(\tfrac34+\tfrac14e^{-2t})^2$
reproduces $p_{00}$; and the hitting-time system of Exercise (6.9.6) solves to $m_1=5$, $m_0=6$.
