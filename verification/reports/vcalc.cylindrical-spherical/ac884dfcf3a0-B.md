VERDICT: PASS
UNIT: vcalc.cylindrical-spherical
VERIFIER: B

## Findings

1. [minor] definition[Spherical polar coordinates] (line 49): the displayed domain reads "for
   $r > 0$, $0 \le \theta \le \pi$ and $0 \le \varphi < 2\pi$", but line 71 then excludes
   $\theta = 0$ and $\theta = \pi$, and the statement block (line 118) holds only "away from the
   origin and the polar axis". So the stated range includes two values the unit goes on to remove.
   The cylindrical definition handles the same point cleanly by writing $\rho > 0$ in the display
   itself. Fix: write $0 < \theta < \pi$ in the display, keeping the sentence that records Arfken's
   closed range and why the ends are dropped.

2. [minor] example[A conducting sphere in a uniform field], step 2 (line 300): "Since the exterior
   Dirichlet problem has a unique bounded solution, this is the field." $\Phi$ is not bounded — it
   grows like $-E_0r\cos\theta$, which the same sentence has just said. The argument that works is
   the one applied to the difference: $\Phi + E_0r\cos\theta$ is harmonic in $r > a$, equals
   $E_0a\cos\theta$ on the sphere and tends to $0$ at infinity, and a function with those three
   properties is unique. Fix: state the uniqueness for that difference, or say "unique solution with
   the prescribed value on $r=a$ and the prescribed behaviour at infinity".

3. [minor] proof[Second derivation], step 4 (line 237): "$\theta = \arctan(s/z)$ at fixed $z$" holds
   only for $z > 0$; on the lower half-space the principal branch gives the wrong value, and on
   $z = 0$ it is undefined, yet the result quoted,
   $\partial\theta/\partial s = z/(s^2+z^2) = \cos\theta/r$, is correct throughout the domain. The
   clean derivation is from $\cos\theta = z/r$: differentiating at fixed $z$ gives
   $-\sin\theta\,\partial_s\theta = -zs/r^3$, hence $\partial_s\theta = z/r^2 = \cos\theta/r$ for
   every $\theta \in (0,\pi)$. Fix: derive it that way, or note the branch.

4. [minor] proof[Second derivation], step 1 (line 208): "the two mixed columns cancel exactly". Of
   the two columns that cancel, only $u_{\rho\varphi}$ is a mixed derivative; the other is the
   first-order $u_\varphi$ column. Fix: name them, e.g. "the $u_{\rho\varphi}$ and $u_\varphi$
   columns cancel".

5. [minor] remark (lines 253, 256): the block is `provenance=original` with no `src`, but it reports
   three specific book items — Strauss's warning about the two angle letters (p. 158), RHB's point
   that the step to $(\nabla^2\mathbf{a})_i = \nabla^2a_i$ fails in these systems (p. 357), and
   Arfken's Eqs. (3.151) and (3.160). Each source is named in the prose and the frontmatter lists
   the pages with the matching role, and the synthesis is ours, so this is not book material passed
   off as ours. Fix: add a block-level
   `src="strauss-2008:§6.1, p. 158; rhb-2006:§10.9, p. 357; arfken-2013:Eqs. (3.151), (3.160), pp. 190, 192"`.

## Checked

- Automated checks: `node tools/check/index.mjs --record vcalc.curvilinear-coordinates vcalc.cylindrical-spherical`
  reports `ok` for this unit, no FAIL lines. The eight warnings concern other units only
  (prerequisite ordering inside `found.*`, 296 unwritten map units, and invalid frontmatter YAML in
  `content/complex/complex.branch-points-cuts.md`). `npm run check -- vcalc.cylindrical-spherical`
  produced no `resembles` line. The forward reference `vcalc.dirac-delta-basics` is unwritten but is
  in `content/map.yaml` (line 140) with "Laplacian of $1/r$" in its scope, so the pointer at line 255
  is apt.

- Counterexample search and independent derivation: I rebuilt both tables from the coordinate maps
  with sympy rather than reading them off. Cylindrical: $h = (1,\rho,1)$, $H = \rho$,
  $\hat{\mathbf{e}}_\rho = (\cos\varphi,\sin\varphi,0)$,
  $\hat{\mathbf{e}}_\varphi = (-\sin\varphi,\cos\varphi,0)$, $\hat{\mathbf{e}}_z = \mathbf{k}$,
  $\hat{\mathbf{e}}_\rho\times\hat{\mathbf{e}}_\varphi = \hat{\mathbf{e}}_z$ — all exactly as the
  definition states. Spherical: $h = (1,r,r\sin\theta)$ (sympy returns $r|\sin\theta|$, which is
  $r\sin\theta$ on the stated $0<\theta<\pi$), $H = r^2\sin\theta$, the three unit vectors as
  displayed at lines 59–61, and $\hat{\mathbf{e}}_r\times\hat{\mathbf{e}}_\theta - \hat{\mathbf{e}}_\varphi = \mathbf{0}$
  for $\sin\theta>0$. Feeding these into the general curvilinear Laplacian reproduced the tabulated
  cylindrical and spherical Laplacians with difference exactly $0$ (the spherical case leaves only a
  `Piecewise` branch at $\sin\theta = 0$, which the unit excludes). The radial identity
  $r^{-2}(r^2\Phi_r)_r = r^{-1}(r\Phi)_{rr}$ checked symbolically to $0$. The plane-polar identity
  $(*)$ checked numerically for $g(\rho,\varphi) = \sin 2\rho\,e^{\cos\varphi} + \rho^3\varphi$ at
  $(x,y) = (0.7,1.3)$: Cartesian $11.00852742$ against polar $11.00862029$ (central differences at
  step $10^{-6}$). I also re-expanded the $u_{xx}$ row of the table at line 205 by hand and got
  $\cos^2\varphi$, $-2\sin\varphi\cos\varphi/\rho$, $\sin^2\varphi/\rho^2$, $\sin^2\varphi/\rho$,
  $+2\sin\varphi\cos\varphi/\rho^2$ — the row as printed, and the $u_{yy}$ row is its correct
  partner. Both vector-Laplacian claims survived testing: computing
  $\nabla(\nabla\cdot\mathbf{a}) - \nabla\times(\nabla\times\mathbf{a})$ from the general formulas
  and subtracting the componentwise scalar Laplacian gave, in cylindrical,
  $-a_\rho/\rho^2 - 2\rho^{-2}\partial_\varphi a_\varphi$, $-a_\varphi/\rho^2 + 2\rho^{-2}\partial_\varphi a_\rho$
  and $0$ — i.e. the displayed Eq. (3.151) exactly, including the claim at line 114 that only the
  $z$-component is the naive one; and in spherical all three extra terms involve all of $a_r$,
  $a_\theta$, $a_\varphi$, so the claim at line 158 is right. Degenerate cases behave as the remark
  says: the tables need every $h_i > 0$, failing on the $z$-axis and at $r = 0$ and
  $\theta \in \{0,\pi\}$. The only statements that bent under testing are the four minors above, and
  none of them is false mathematics.

- Calculations (example 1, pipe flow), each recomputed independently with sympy:
  $\nabla\cdot\mathbf{v} = 0$; $\nabla\times\mathbf{v} = (0,\,2V\rho/a^2,\,0)$ in the
  $(\hat{\mathbf{e}}_\rho,\hat{\mathbf{e}}_\varphi,\hat{\mathbf{e}}_z)$ frame, so
  $-dv/d\rho = 2V\rho/a^2$ as stated and the wall value is $2V/a = 2(0.20)/0.0050 = 80.0\ \mathrm{s^{-1}}$;
  $\nabla^2v = -4V/a^2$; $dp/dz = -4\mu V/a^2 = -32.0\ \mathrm{Pa\,m^{-1}}$;
  $Q = \pi Va^2/2 = 7.853981634\times10^{-6}\ \mathrm{m^3\,s^{-1}}$, i.e. $7.85\ \mathrm{mL\,s^{-1}}$,
  mean speed exactly $V/2 = 0.10\ \mathrm{m\,s^{-1}}$; the Hagen–Poiseuille cross-check
  $8\mu Q/(\pi a^4) = 32.000\ \mathrm{Pa\,m^{-1}}$, agreeing with step 4; Reynolds number
  $998 \times 0.10 \times 0.010 / 10^{-3} = 998$, below $2300$. I also confirmed the two claims the
  example leans on rather than computes: the convective term vanishes because neither $v$ nor
  $\hat{\mathbf{e}}_z$ depends on $z$, and $(\nabla^2\mathbf{v})_\rho = (\nabla^2\mathbf{v})_\varphi = 0$
  by Eq. (3.151) when $a_\rho = a_\varphi = 0$, so "only non-trivial component" is right.

- Calculations (example 2, conducting sphere): $\nabla^2\Phi$ came out exactly $0$ for
  $\Phi = -E_0(r-a^3/r^2)\cos\theta$; the angular factor
  $(\sin\theta)^{-1}(\sin\theta\,(\cos\theta)')' = -2\cos\theta$ as line 297 states, and the two
  radial pieces quoted in step 1 are both $-2E_0(r^{-1}-a^3r^{-4})$, so they do cancel.
  $E_r - E_0(1+2a^3/r^3)\cos\theta = 0$ and $E_\theta + E_0(1-a^3/r^3)\sin\theta = 0$ symbolically;
  at $r=a$, $E_r = 3E_0\cos\theta$ and $E_\theta = 0$ identically, as claimed.
  $\sigma_{\max} = 3\varepsilon_0E_0 = 3(8.854\times10^{-12})(1.00\times10^5) = 2.6562\times10^{-6}\ \mathrm{C\,m^{-2}}$,
  printed as $2.66\ \mu\mathrm{C\,m^{-2}}$ — correct to the three figures given.
  $\oint\sigma\,dA = 0$ exactly, and
  $p = \oint\sigma\,(a\cos\theta)\,dA = 4\pi\varepsilon_0a^3E_0$ exactly, numerically
  $8.9010\times10^{-11}\ \mathrm{C\,m}$, printed as $8.90\times10^{-11}$ — correct. The final
  identification is right too: $p\cos\theta/(4\pi\varepsilon_0r^2) = E_0a^3\cos\theta/r^2$, which is
  the second term of $\Phi$.

- Calculations (application): the separation claims check out. Cylindrical
  $\Phi = R(\rho)e^{im\varphi}e^{\pm kz}$ gives $\rho^2R'' + \rho R' + (k^2\rho^2-m^2)R = 0$, Bessel's
  equation. Spherical $R(r)Y$ gives $r^2R''+2rR'-\ell(\ell+1)R = 0$, whose indicial equation
  $s^2+s-\ell(\ell+1)=0$ has roots $s = \ell$ and $s = -\ell-1$, so the solutions are $r^\ell$ and
  $r^{-\ell-1}$ and the $\ell=1$ pair is $r$, $r^{-2}$ — exactly the pair the sphere example used.
  The substitution claim is right as well: $\nabla^2(u/r) = u''/r$, so $\Phi = u(r)/r$ turns the
  radial operator into a plain second derivative.

- Citations:
  - `rhb-2006` pp. 357–363, 369 (§10.9–§10.10): located and supporting. The warning that the step to
    $(\nabla^2\mathbf{a})_i = \nabla^2a_i$ cannot be made in cylindrical and spherical polars is at
    the top of p. 357, as the remark says. Cylindrical coordinates, unit vectors, scale factors and
    the volume element are on pp. 357–360, with the ranges $\rho \ge 0$,
    $0 \le \phi < 2\pi$, $-\infty<z<\infty$, and the plane-polar area element $dA = \rho\,d\rho\,d\phi$
    noted on p. 361 — all as reported at lines 25 and 45. Table 10.2 (p. 360) matches our cylindrical
    gradient, divergence, curl determinant and Laplacian term for term. Spherical coordinates,
    Eqs. (10.53)–(10.54), the unit vectors, the scale factors $1$, $r$, $r\sin\theta$ and
    $dV = r^2\sin\theta\,dr\,d\theta\,d\phi$ are on pp. 361–362, with the range $r \ge 0$,
    $0 \le \theta \le \pi$, $0 \le \phi < 2\pi$ — so line 49's parenthesis about RHB writing
    $r \ge 0$ is right. Table 10.3 (p. 363) matches our spherical table term for term, and the
    alternative radial form with the words about shortening calculations is immediately below it on
    p. 363. Table 10.4 (p. 369) is the general set the first proof substitutes into.
  - `arfken-2013` pp. 185–192 (§3.10): located and supporting. The general operators
    Eqs. (3.138)–(3.143) are on pp. 185–187. Cylindrical: Eq. (3.144) for the coordinates,
    Eq. (3.145) for the scale factors, Eq. (3.146) for the displacement, area and volume elements —
    which is where the three face elements at line 83 come from — Eqs. (3.147)–(3.150) for the
    operators, and Eq. (3.151) for the vector Laplacian on p. 190, matching lines 107–111 exactly.
    Spherical: the ranges on p. 190 with the statement that neither $\theta$ nor $\varphi$ is well
    defined at $r = 0$ and that $\varphi$ is ill-defined at $\theta = 0$ and $\theta = \pi$ — exactly
    what line 71 attributes to Arfken — then Eqs. (3.152)–(3.153), the elements Eq. (3.154), the
    solid angle Eq. (3.155) with $\int d\Omega = 4\pi$, the operators Eqs. (3.156)–(3.159) and the
    vector Laplacian Eq. (3.160) on pp. 191–192.
  - `strauss-2008` pp. 156–160 (§6.1): located and supporting. The Jacobian matrix and its inverse,
    with the caution that $\partial r/\partial x$ is not the reciprocal of $\partial x/\partial r$,
    are on p. 157, as are the two operator identities and plane-polar Eq. (5); the chain of variables
    $(x,y,z)\to(s,\varphi,z)\to(r,\theta,\varphi)$ is set up on p. 158 and the two plane
    calculations with the cancellation of $u_{ss}$ on p. 159, ending in Eq. (7), the spherical
    Laplacian, on pp. 159–160. The angle-letter warning that the remark attributes to Strauss's
    p. 158 is there, and Strauss does use the same convention as ours ($z = r\cos\theta$,
    $s = r\sin\theta$), so line 253 is accurate.

- Provenance: the closest comparison is `proof[Second derivation]` against Strauss pp. 156–160,
  since it takes his route in full — invert the Jacobian, square the two operators, add, then use
  the plane result twice and eliminate $s$. The block is `adapted` and cites those pages, which is
  the right label, and the rewriting is real rather than cosmetic: the central computation is
  reorganised into a table of coefficients sorted by which derivative of $u$ they multiply, where
  Strauss writes the two squared operators out as displays, and our version adds the reading of the
  cancellation as "the analytic trace of the two directions being perpendicular", a cylindrical step
  that Strauss does not have, and an explicit sentence on why the two $u_{ss}$ are the same quantity.
  The notation differs throughout ($\rho,\varphi$ against his $r,\theta$ in the plane). No sentence
  tracks his for more than a formula. `proof[First derivation]` is `adapted` from Table 10.4 and
  Arfken's general equations and is simply the substitution, correctly labelled. Both `example`
  blocks are correctly `original`: Arfken's own pipe example (Example 3.10.2, p. 190) computes the
  nonlinear Navier–Stokes term $\nabla\times[\mathbf{v}\times(\nabla\times\mathbf{v})]$ for the same
  class of field and shows it vanishes, which is a different calculation from ours, and none of our
  numbers, the Hagen–Poiseuille cross-check or the Reynolds-number check appears there; the
  conducting-sphere example is standard physics but set up and carried out with our own radius,
  field strength and consistency checks. The one weakness is finding 5, the uncited in-prose book
  attributions inside the `original` remark.
