VERDICT: PASS
UNIT: num.relaxation-methods
VERIFIER: B

## Findings
1. [minor] definition "Splitting, and the three sweeps" (line 43) and throughout: the symbol $U$ carries two
   meanings in the same unit -- the strictly upper triangular part of $A$ in $A = D - L - U$ and again in
   $(1-\omega)D + \omega U$ at line 128, and the solution vector in $U_{j,k}$, $U^{(n)}$, $U^{\ast}$,
   $\widetilde U_{j,k}$. Every occurrence is disambiguated by its decoration, so nothing is actually wrong, but
   the clash is avoidable: Stakgold and Holst write the splitting as $A = D - L - L^{T}$ (p. 799), which the
   frontmatter already quotes. Fix: rename the upper-triangular block, e.g. $A = D - L - L^{T}$ or $A = D - L - R$.
2. [minor] application (line 217): "Southwell's hand-relaxation ... is literally the Gauss-Seidel sweep" is then
   described as proceeding "with the residual at each node written down and the largest one 'relaxed' first".
   Those are two different orderings: Gauss-Seidel is a fixed sweep order, while relaxing the largest residual
   first is the Gauss-Southwell variant. The sentence contradicts itself. Fix: say that Southwell's practice is
   the same family of local corrections, and that relaxing the largest residual first is a variant ordering.
3. [minor] definition "The discrete Poisson problem" (line 37): "Strauss derives the uniqueness of the solution
   of (P) from that principle". Strauss's argument (p. 220) is for the homogeneous case $f \equiv 0$ -- two
   solutions of (2) with the same boundary values -- and uniqueness for general $f$ follows only via the
   nonsingularity the next clause mentions. The order of the two is inverted relative to the source. Fix:
   "uniqueness for the homogeneous problem, and from that the nonsingularity of $A$, hence unique solvability
   of (P) for every $f$".
4. [minor] definition (line 31): "both have size $N$" for $A$ and $F$. $A$ is $N \times N$ and $F$ has $N$
   entries. Fix: say so.
5. [minor] frontmatter `prereqs` (line 7): Part 1 of the proof leans on the matrix-power facts
   ($E^n \to 0 \iff \rho(E)<1$, $\|E^n\|^{1/n} \to \rho(E)$) and cites :ref[]{to=linalg.eigenvalues-eigenvectors},
   which is not listed as a prerequisite. Fix: add it.

## Checked
- Counterexample search / statement attacks: built the $49 \times 49$ five-point matrix $A$ for $m=7$,
  $h = 1/8$, formed $E_{\mathrm{J}} = I - D^{-1}A$, $E_{\mathrm{GS}} = I - (D-L)^{-1}A$ and
  $E_\omega = I - \omega(D-\omega L)^{-1}A$ explicitly and took eigenvalues.
  - $\rho(E_{\mathrm{J}}) = 0.92387953251129$ against $\cos(\pi/8) = 0.92387953251129$ -- claim 2 holds, and the
    maximiser is indeed the pair $p=q=1$ (with $p=q=m$ giving $-\cos\pi h$, as Part 2 says, since
    $m\pi h = \pi - \pi h$).
  - $\rho(E_{\mathrm{GS}}) = 0.85355339059327$ against $\cos^2(\pi/8) = 0.85355339059327$ -- claim 3's squaring
    identity holds for this matrix in lexicographic order, as claimed.
  - $\rho(E_{\omega_{\mathrm{opt}}}) = 0.446462697$ against $\omega_{\mathrm{opt}}-1 = 0.446462692$; the
    $5\times10^{-9}$ gap is the expected double-precision error on a defective eigenvalue, not a discrepancy.
  - Scanning $\omega$ over $[1,1.99]$ in steps of $0.001$ put the minimum at $\omega = 1.447$ with
    $\rho = 0.4470$ -- exactly the unit's reported scan.
  - Tried to break claim 4's floor: for $\omega = 1.40, 1.44, 1.50, 1.60$ the computed $\rho(E_\omega)$ was
    $0.6112, 0.5112, 0.5000, 0.6000$. Above $\omega_{\mathrm{opt}}$ it equals $\omega-1$ exactly and the floor
    is attained; below it the rise is about ten times steeper. This confirms both the floor and the asymmetry
    asserted in method step 4 ("$\omega=1.50 \to 0.500$, $1.60 \to 0.600$, $1.44 \to 0.511$, $1.40 \to 0.611$"),
    every figure of which I reproduced.
  - The determinant argument of Part 4a checks out symbolically: $E_\omega = (D-\omega L)^{-1}[(1-\omega)D+\omega U]$,
    triangular factors, $\det E_\omega = (1-\omega)^N$, hence $\rho \ge |1-\omega|$ and $0<\omega<2$.
  - The eigenvector claim in Part 2 was verified by direct substitution: $v^{(p,q)}$ vanishes on the boundary
    indices and $A v^{(p,q)} = \lambda_{p,q}v^{(p,q)}$ with $\lambda_{p,q} = (4-2\cos p\pi h-2\cos q\pi h)/h^2$.
  - The remark's two-dimensional von Neumann cross-check is correct: with $s_1=s_2=1/4$ the amplification factor
    $1-4s_1\sin^2(\theta_1/2)-4s_2\sin^2(\theta_2/2)$ at $\theta_1=\theta_2=\pi h$ is
    $1-2\sin^2(\pi h/2) = \cos\pi h = \rho(E_{\mathrm J})$, and $s_1+s_2 = 1/2$ is exactly the 2D stability limit
    $1-4(s_1+s_2) \ge -1$. Both statements hold.
- Calculations (numpy/mpmath, independent of the unit):
  - Step 1 table reproduced exactly. $\lambda_{1,1} = 4(1-\cos\pi h)/h^2$ gives $18.7451660$, $19.4868397$,
    $19.6758729$ for $h = 1/4, 1/8, 1/16$; $U^{\ast}_{\text{centre}} = 2\pi^2/\lambda_{1,1}$ gives
    $1.05302929$, $1.01295075$, $1.00321896$; errors $5.302929\times10^{-2}$, $1.295075\times10^{-2}$,
    $3.218964\times10^{-3}$; ratios $4.094690$ and $4.023265$, printed as $4.0947$ and $4.0233$. And
    $2\pi^2 = 19.7392088$. Every digit in the table is right.
  - Step 2: $\cos(\pi/8) = 0.92387953$, $\cos^2(\pi/8) = 0.85355339$, $2/(1+\sin(\pi/8)) = 1.44646269$,
    $\omega_{\mathrm{opt}}-1 = 0.44646269$. All four as printed.
  - Step 3 predictions: $\ln(10^{-10})/\ln\rho$ gives $290.83$, $145.41$, $28.55$, printed as $290.8$, $145.4$,
    $28.6$. Running the three iterations from $U^{(0)}=0$ against the exact discrete solution
    $U^{\ast} = A^{-1}F$ until $\|U^{(n)}-U^{\ast}\|_\infty$ had fallen by $10^{-10}$ gave **291, 146 and 35**
    sweeps -- the unit's three numbers exactly. $146/35 = 4.17$ ("a factor of $4.2$") and
    $2/(\pi h) = 16/\pi = 5.093$ ("$5.09$"); $35/28.55 = 1.23$ ("about a quarter more").
  - Step 4: $5\times49\times146 = 3.58\times10^4$ and $8\times49\times35 = 1.37\times10^4$, printed as
    $3.6\times10^4$ and $1.4\times10^4$. The per-node counts are derivable: four additions plus one scaling is
    $5$ for Jacobi/Gauss-Seidel, and the SOR correction $U+\omega(\widetilde U-U)$ adds three more, giving $8$.
    At $h = 1/1000$: $|\ln 10^{-10}|/(\pi^2h^2) = 2.33\times10^{6}$ ("$2.3\times10^6$") and
    $|\ln 10^{-10}|/(2\pi h) = 3.66\times10^{3}$ ("about $3.7\times10^3$"). The $O(N^2)$ / $O(N^{3/2})$ scaling
    and the extra $\ln N$ from $\varepsilon = O(h^2) = O(N^{-1})$ both follow as stated.
  - Claim 5 asymptotics rechecked: $-\ln\cos\pi h = \tfrac12\pi^2h^2+O(h^4)$,
    $-\ln\cos^2\pi h = \pi^2h^2+O(h^4)$, and $\ln\frac{1+\sigma}{1-\sigma} = 2\sigma+O(\sigma^3) = 2\pi h+O(h^3)$
    with $\sigma = \sin\pi h$. The ratio $2\pi h / (\pi^2h^2) = 2/(\pi h)$ confirms the stated speed-up factor.
  - The method's fallback $\omega = 2/(1+\sqrt{1-\rho(E_{\mathrm J})^2})$ reduces to $2/(1+\sin\pi h)$ when
    $\rho(E_{\mathrm J}) = \cos\pi h$ -- consistent with claim 4.
- Citations:
  - strauss-2008 §8.4, pp. 218-221, all pages opened. Eq. (1) centred approximation and the choice
    $\Delta x = \Delta y$ (p. 218-219); the averaging form (2) with its template (p. 219); the mean value
    property and the maximum/minimum principle "unless it is a constant" (p. 219); "no marching method is
    available" and "if we divide $x$ and $y$ each into 100 parts, we get about 10,000 little squares" (p. 219);
    the uniqueness argument and the conclusion that the determinant is not zero (p. 220); Jacobi (3) with
    "converges, however, very slowly and so Jacobi iteration is never used in practice" (p. 220); the remark
    that (3) is the same calculation as the two-dimensional explicit heat scheme with
    $\Delta t = (\Delta x)^2/4$ (p. 220); Gauss-Seidel (4) with the prescribed bottom-row, left-to-right order and
    "works about twice as fast as Jacobi" (p. 221); SOR (5), "If $\omega = \tfrac14$, it is the same as
    Gauss-Seidel", the fixed-point check that the limit satisfies (2), and the deferral of the choice of
    $\omega$ to "more specialized texts" (p. 221). Every attribution is supported and every locator is right.
    The unit's convention warning (line 65) is exactly right: Strauss's $\omega$ is one quarter of the one used
    here, and he says so at Eq. (5).
  - stakgold-holst-2011 §10.6. p. 799: $A = D - L - L^{T}$, Richardson (10.6.27), Jacobi $B = D^{-1}$ (10.6.28),
    Gauss-Seidel $B = (D-L)^{-1}$ (10.6.29), SOR $B = \omega(D-\omega L)^{-1}$ (10.6.30), the splitting
    $A = M - R$ and "convergence ... is governed completely by the spectral radius ... $\rho(M^{-1}R)$". The
    unit's three $B$'s match (10.6.28)-(10.6.30) exactly. p. 800: Theorem 10.6.4 on M-matrices and regular
    splittings, stated as the unit reports it; the closed-form eigenvalues of the model Poisson matrix; the
    spectral radii Richardson $1-O(h^2)$, Jacobi $\cos\pi h \approx 1-\tfrac12\pi^2h^2$, Gauss-Seidel
    $\cos^2\pi h \approx 1-\pi^2h^2$, SOR $\approx 1-O(h)$; "for consistently ordered matrices with Property A
    ... the spectral radius of the Gauss-Seidel error propagation matrix is the square of the Jacobi matrix
    spectral radius"; "The same dependence on $h$ is exhibited for one- and two-dimensional problems"; and
    "As $h \to 0$ ... $\rho(E) \to 1$". Note that S&H's displayed model problem is the 3D unit cube, but they
    state explicitly that the $h$-dependence carries to two dimensions and point to [184] for the 2D case, so
    the unit's use for the unit square is faithful -- and the unit derives the 2D eigenvalues itself rather
    than borrowing them. p. 801: the tolerance $\varepsilon = O(h^s)$ at discretisation-error level and the
    iteration count $|\ln\varepsilon|/|\ln\rho(E)|$. p. 803, Table 10.1: the two-dimensional column gives
    Gauss-Seidel $O(N^2\ln N)$, SOR $O(N^{1.5}\ln N)$, multilevel $O(N\ln N)$, nested multilevel and domain
    decomposition $O(N)$ -- precisely the four figures the unit quotes. pp. 790-792: Figure 10.11
    "Error-smoothing effect of Gauss-Seidel iteration", with high-frequency error components damped and
    low-frequency components left to be eliminated on a coarser mesh as the motivation for multilevel methods.
    The unit's closing remark reports this correctly.
  - Both works' page ranges in the frontmatter exist and treat these topics.
- Provenance: `npm run check` reported no `resembles` lines for this unit. Compared the two definition blocks
  with Strauss pp. 219-221 and Stakgold-Holst p. 799 by hand. The unit reorganises both: Strauss gives only the
  $f \equiv 0$ averaging form and three grid recipes with no matrices, while the unit sets up $AU=F$ with
  general $f$, the $h^2$ scaling, and the operator form $U^{(n+1)} = U^{(n)}+B(F-AU^{(n)})$ taken from S&H; the
  convention clash between the two books is handled explicitly in our own words, which no source does. Nothing
  reads as a paraphrase of either page; wording and ordering are ours throughout, and `adapted` is right.
  The statement block is a fair report of S&H p. 800 (the $\omega_{\mathrm{opt}}$ formula excepted, which the
  remark openly says no library book proves and which I verified numerically instead). The `original` blocks --
  idea, remark, method, example, application -- contain nothing book-specific: the eigenvector derivation, the
  determinant floor argument, the Jacobi/heat-equation identity pushed to the 2D stability limit, the exactly
  solvable test problem and every number in it are ours. I checked bibliography/works.yaml: the library holds
  no numerical-analysis text, so the remark's claim that Young's formula is unproved here is accurate.
