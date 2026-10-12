VERDICT: PASS
UNIT: complex.elementary-functions
VERIFIER: A

## Findings
1. [minor] proof (line 68): the `src` attributes the whole proof to Ahlfors pp. 43, 45, but part 1 is
   proved here by the Cauchy product of the two exponential series, which is not Ahlfors's route (he
   differentiates $e^z e^{c-z}$ and uses that a function with vanishing derivative on the plane is
   constant, p. 43). The argument given is correct and the `idea` block already calls it ours. Fix:
   restrict the src for part 1 to the statement, or add "the Cauchy-product route is ours".
2. [minor] proof, part 4, "All periods are multiples" (line 99): only $\omega > 0$ is handled, while
   statement part 4 speaks of all periods. Fix: one clause observing that $-\omega$ is a period
   whenever $\omega$ is, and $0$ trivially, so the positive case suffices.
3. [minor] application (line 216): "The $n$th roots of unity are the characters of the cyclic group
   $\mathbb{Z}/n$" — the characters are the homomorphisms $\mathbb{Z}/n \to U(1)$; the roots of unity
   are their values (equivalently the entries of the DFT matrix, as the sentence goes on to say).
   Fix: "are the values of the characters".
4. [source] statement "de Moivre and the nth roots" (line 139) and remark (line 172): Riley, Hobson
   and Bence, Eq. (3.27), p. 95, assert de Moivre's theorem "valid for all $n$ whether real,
   imaginary or complex". The unit follows Ahlfors's integer-exponent form, states that it does, and
   exhibits the failure at $n = \tfrac12$, $\theta = 3\pi$, which I checked ($(-1)^{1/2}$ has
   principal value $+i$, while $\cos\tfrac{3\pi}{2} + i\sin\tfrac{3\pi}{2} = -i$). This is handled
   exactly as `docs/contributing/source-authority.md` requires and is already recorded in
   `verification/discrepancies.md`. Not blocking.

## Checked
Re-derived the whole periodicity argument of proof part 4 line by line (the four integrations giving
$C(y) \le 1 - y^2/2 + y^4/24$, the sign change at $y=\sqrt3$ where the bound is $-\tfrac18$, the
strengthening of Ahlfors's $\sin y_0 = \pm1$ to $S(y_0) = +1$ via $S(y) \ge y - y^3/6 > 0$ on
$(0,\sqrt6)$, the minimality argument via $w^4 = 1 \Rightarrow w \in \{1,-1,i,-i\}$, and the
division-with-remainder step); checked parts 1, 2, 3, 5, de Moivre and the $n$th-root count
including the "same root" criterion $(k-k')/n \in \mathbb{Z}$. Compared the statements against
Ahlfors pp. 43, 45, 46 and Ch. 1 §2.2 (printed pages read with `tools/corpus/pages.mjs`): the
differential-equation starting point attributed to him in the exponential definition, his
$0 \le y < 2\pi$ normalisation, his "single value iff $b$ is an integer, exactly $q$ values for
$b = p/q$ reduced", and his set-valued reading of $\log(z_1z_2) = \log z_1 + \log z_2$ all match the
unit; also checked RHB Eqs. (24.20)–(24.22), p. 834 (principal range $(-\pi,\pi]$, $t^z = \exp(z\,
\operatorname{Ln} t)$), Eq. (3.27), p. 95, and Arfken Eq. (1.138), p. 60 with Eq. (11.55), p. 501 and
Example 11.6.1, p. 499 (where $\theta$ runs $0$ to $2\pi$ and the value $-\pi$ is explicitly
declined) — the remark's account of the three conventions is accurate. Every number in the two
example blocks verified with mpmath: $\ln(-1+i\sqrt3) = 0.693147 + 2.094395i$;
$a^{4i} = e^{-\pi-8k\pi}$ with $e^{-\pi} = 0.04321392$ and $e^{7\pi} = 3.5533\times10^{9}$; the
general criterion for $a^{it}$ to be real/positive; $(1+i)^i = 0.428829 + 0.154872i$; the cube roots
of $8i$ and the hand check $(\sqrt3+i)^3 = 8i$; $\sin(1+2i) = 3.165779 + 1.959601i$ with
$|\sin(1+2i)|^2 = 13.86219$; and the exponential-route integrals, including differentiating the
antiderivatives back and quadrature of $\int_0^\infty e^{-2x}\cos 5x\,dx = 2/29$ and
$\int_0^\infty e^{-2x}\sin 5x\,dx = 5/29$ to full precision. Prerequisites `found.power-series` and
`found.absolute-convergence` are both used (termwise differentiation; summation by diagonals) and
nothing else beyond standard real calculus is needed.
