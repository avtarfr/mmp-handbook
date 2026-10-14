VERDICT: PASS
UNIT: funcan.bounded-operators
VERIFIER: A

## Findings
1. [minor] statement, part 3 (line 69): under the block's preamble ("$T : \mathcal{D}(T) \to Y$ linear,
   $\mathcal{D}(T) \subseteq X$") the clause "the null space $N(T)$ is closed" is true only when
   $\mathcal{D}(T)$ is closed, and the proof silently needs it: it takes $x \in \overline{N(T)}$ and
   writes $Tx$, which presupposes $x \in \mathcal{D}(T)$. For a densely defined bounded operator the
   claim fails in $X$: on $X = \ell^2$ with $\mathcal{D}(T)$ the finitely supported sequences and
   $Tu = \sum_j u_j/j$ (bounded there, by Cauchy-Schwarz with $\sum j^{-2} < \infty$), $N(T)$ is a
   dense proper subspace of the closed hyperplane $\ker\tilde T$, hence not closed in $X$. The unit
   is internally consistent, because $N(T)$ and $R(T)$ are introduced (line 59) only inside the
   "when $\mathcal{D}(T) = X$" paragraph, so the intended scope is $T \in \mathcal{B}(X,Y)$; but part 3
   does not say so and a reader applying it to the unit's own densely defined examples (multiplication
   by $1/x$) would be misled. Fix: open part 3 with "For $T \in \mathcal{B}(X,Y)$", or say "closed in
   $\mathcal{D}(T)$".
2. [source] kreyszig-1978, Cor. 2.7-10(b), p. 98: the same gap is in the source. Kreyszig's proof
   takes $x \in \overline{\mathcal{N}(T)}$, picks $x_n \in \mathcal{N}(T)$ with $x_n \to x$ and applies
   part (a) to conclude $Tx_n \to Tx$, but part (a) is stated for $x_n, x \in \mathcal{D}(T)$ and the
   corollary's hypothesis is only "$T$ a bounded linear operator", with $\mathcal{D}(T) \subseteq X$
   allowed to be a proper dense subspace. Recorded with `tools/discrepancy.mjs`; the unit reports the
   source faithfully, so this does not fail it.
3. [minor] example "An operator norm that is a supremum and not a maximum" (line 226): "This is
   Stakgold and Holst's example, with the interval placed at the other endpoint". Their Example 4,
   p. 303, puts $u_\varepsilon$ on exactly the same interval, $1-\varepsilon < x < 1$ (unnormalised,
   so $\|u_\varepsilon\|^2 = \varepsilon$ and $\|Au_\varepsilon\|^2 = \varepsilon[1-\varepsilon+\varepsilon^2/3]$,
   which is our displayed identity times $\varepsilon$). What our version actually adds is the
   normalisation and the explicit arithmetic, not a change of endpoint. Fix: delete the clause, or
   replace it with "normalised, and with the arithmetic carried out explicitly".
4. [minor] prerequisites: the worked example's Step 2 (line 182) gets completeness of
   $\{\sqrt2\cos\omega_n x\}$ in $L^2(0,1)$ from :ref{to=ode.sturm-liouville-theory}, and that
   completeness is load-bearing — Step 4's $\|Au\|^2 = \sum_n s_n^2|c_n|^2 \le s_1^2\|u\|^2$, and hence
   the exact value $\|A\| = 2/\pi$, needs the family to span, not merely to be orthonormal (the unit's
   own parenthesis proves only orthonormality). `ode.sturm-liouville-theory` is not in `prereqs` and is
   not reachable from any entry that is. Fix: list it (the map places `ode` before `funcan`, so no
   forward-reference warning results), as `ode.eigenfunction-expansions` and
   `spec.hermite-polynomials` list their own cross-part prerequisites.
5. [minor] remark, last bullet (line 155): the counterexample to equality in submultiplicativity is
   set up for $\|ST\|$ but exhibited for the other order — $S = \bigl(\begin{smallmatrix}0&1\\0&0\end{smallmatrix}\bigr)$,
   $T = \bigl(\begin{smallmatrix}0&0\\0&1\end{smallmatrix}\bigr)$ give $TS = 0$ while $ST = S \ne 0$
   with $\|ST\| = 1 = \|S\|\|T\|$, i.e. equality. The point stands (apply the bound to the product
   $TS$), but as written the displayed inequality and the matrices named do not line up. Fix: write
   "$\|TS\| \le \|T\|\,\|S\|$", or swap the two matrices.

## Checked
Re-derived all seven parts. Part 1: checked the quotient/sphere/ball suprema agree including the
$z = 0$ and $\mathcal{D}(T) = \{0\}$ edge cases and all four norm axioms. Part 2: checked both
directions, and that the "continuity at one point" half uses linearity exactly where the unit says
(that $x_0 + \delta y/\|y\|$ stays in the subspace, and that the scalar comes out of $T$); checked the
non-linear counterexamples $\sqrt{|t|}$ (fails at $0$) and $t^2$ (fails at $\infty$). Part 4: checked
that norm equivalence is the only finite-dimensional input. Part 5, 6, 7: checked the telescoping,
the three completeness steps (Cauchy at each point, uniform bound $M$, uniformity of the $\varepsilon$
in $\|x\| \le 1$), the interleaving argument for well-definedness of $\tilde T$, and both inequalities
giving $\|\tilde T\| = \|T\|$. Compared each attribution against the pages: Kreyszig Def. 2.7-1 and
(2) pp. 91-92, Thm 2.7-8 p. 96 ("if a normed space $X$ is finite dimensional, every linear operator on
$X$ is bounded"), Thm 2.7-9(a),(b) pp. 96-98 (same two-direction route, same $\delta = \varepsilon/\|T\|$
and $x = x_0 + \delta y/\|y\|$ construction), Cor. 2.7-10 p. 98, Thm 2.7-11 pp. 100-101 (extension to
$\overline{\mathcal{D}(T)}$ with equal norm, same interleaving step), and Problems 5-6 p. 101, which are
the $\ell^2$ operator $u_j \mapsto u_j/j$ used in the remark; Reed and Simon Example 4 p. 69 and
Thm III.2 p. 70 ("If $Y$ is complete, $\mathcal{B}(X,Y)$ is a Banach space") and p. 185 ("Ker $T$ is
necessarily closed, but Ran $T$ may not be closed"); Hassani Example 17.2.7 p. 515 (the $\sqrt{x-a}$
example, with $\|Df\|^2 = \tfrac14\int dx/(x-a) = \infty$) and Prop. 17.2.8 with (17.5) pp. 515-516;
Stakgold and Holst p. 300 (the two formulas (5.1.2) and the "to prove that a number $m$ is the norm"
recipe, which the definition block and method step 2 report correctly), Example 4 p. 303, Example 5
p. 304 (multiplication by $1/x$, dense natural domain, $u_\varepsilon$ supported on $(\varepsilon,1)$),
Example 6 with (5.1.9) p. 304, Example 7 p. 305 ("The exact expression for $\|A\|$ is $2/\pi$"),
Example 9 pp. 305-306 (right shift, range the closed manifold orthogonal to $e_1$) and Exercise 5.1.3
p. 306, whose Holmgren condition $\max_z \iint|k(x,y)k(x,z)|\,dx\,dy = M$, the bound $M^{1/2}$ and the
non-Hilbert-Schmidt convolution example are reproduced exactly as printed.
Verified every number with mpmath at 20 digits: $1/\sqrt2 = 0.7071068$; the kernel integral
$\int_0^1 x\,dx = 1/2$; $A e_n = f_n/\omega_n$ by hand; the orthonormality claim
$2\int_0^1\cos\omega_n x\cos\omega_m x\,dx = \sin((n-m)\pi)/((n-m)\pi) + \sin((n+m-1)\pi)/((n+m-1)\pi)
= \delta_{nm}$, and that both boundary-condition pairs are satisfied by $\cos\omega_n x$ and
$\sin\omega_n x$; $s_1 = 2/\pi = 0.6366198$; $\sum_n s_n^2 = (4/\pi^2)(\pi^2/8) = 1/2$, equal to the
kernel integral as claimed; the overshoot factor $\pi/(2\sqrt2) = 1.1107207$ (11%). Reproduced the
numerical check of Step 5 independently: power iteration on the discretised Volterra operator at
$n = 4000$ gives a largest singular value $0.63661976$ against $2/\pi = 0.63661977$, exactly the
printed pair (at $n = 1000$ it gives $0.63661964$, so the quoted digits do depend on the stated grid).
Second example: $(1-(1-\varepsilon)^3)/(3\varepsilon) = 1 - \varepsilon + \varepsilon^2/3$ symbolically,
$0.9900333\ldots$ and $0.9950042$ at $\varepsilon = 10^{-2}$, $0.9999500$ at $\varepsilon = 10^{-4}$
(the latter is $\|Mu_\varepsilon\|$, the nearest antecedent, and is right); and the non-attainment
argument. Checked the remark's $\ell^2$ example: $(1/j)_j \in \ell^2$ but has no preimage, and the
range contains all finitely supported sequences, so it is dense and not closed.
