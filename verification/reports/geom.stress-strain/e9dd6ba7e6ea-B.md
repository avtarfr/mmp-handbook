VERDICT: FAIL
UNIT: geom.stress-strain
VERIFIER: B

## Findings

1. [blocking] remark "Where the hypotheses are used", bullet "Small displacement gradients"
   (line 125, `provenance=original`): the exact change in the squared length of a material
   line element is written
   $2e_{ij}\,dx_idx_j + \partial_ku_i\,\partial_ku_j\,dx_idx_j$. The summed index is on the
   wrong slot. From $dx' = (I+Du)dx$ with $(Du)_{ij}=\partial u_i/\partial x_j$,
   $ds'^2-ds^2 = dx_i\bigl[2e_{ij} + (Du^{\mathsf T}Du)_{ij}\bigr]dx_j$, that is
   $\partial_i u_k\,\partial_j u_k\,dx_idx_j$ (the Green-Lagrange term), not
   $\partial_k u_i\,\partial_k u_j\,dx_idx_j = (Du\,Du^{\mathsf T})_{ij}dx_idx_j$. Failing
   case: $u=(x_2,0,0)$, $dx=(1,0,0)$. The true change is $0$ (the map sends $(0,0,0)\mapsto(0,0,0)$
   and $(1,0,0)\mapsto(1,0,0)$); $2e_{ij}dx_idx_j = 0$ and the correct quadratic term is $0$,
   but the unit's expression gives $+1$. Fix: write
   $2e_{ij}\,dx_idx_j + \partial_iu_k\,\partial_ju_k\,dx_idx_j$.
2. [blocking] remark, bullet beginning "*$\mu \neq 0$*" (line 129, `provenance=original`):
   both translations of the non-degeneracy conditions into Poisson's ratio are wrong.
   With $E=\mu(3\lambda+2\mu)/(\lambda+\mu)$ and $\sigma=\lambda/(2(\lambda+\mu))$ (sympy):
   $3\lambda+2\mu=0 \iff \sigma=-1$ (and then $E=0$), $\mu=0 \iff \sigma=\tfrac12$, and
   $\lambda+\mu=0$ makes $\sigma$ infinite, not $-1$. So "*$3\lambda+2\mu \neq 0$* ... by (2)
   it is equivalent to $\sigma \neq \tfrac12$" is false — the unit's own relation (2),
   $3\lambda+2\mu = E/(1-2\sigma)$, blows up at $\sigma=\tfrac12$ rather than vanishing — and
   "*$\lambda+\mu \neq 0$*, that is $\sigma \neq -1$" is false as well. The physics attached
   to the wrong condition is itself right ($\sigma\to\tfrac12$ is the incompressible limit),
   but it belongs with $\mu\neq 0$ / $\lambda\to\infty$. Fix: $\mu=0\iff\sigma=\tfrac12$ (the
   fluid and incompressible limit, where (2) sends $3\lambda+2\mu\to\infty$ and $\theta\to0$);
   $3\lambda+2\mu=0\iff\sigma=-1$, which is what (1) cannot be solved at and is the case no
   real material occupies; $\lambda+\mu=0$ is where $E$ and $\sigma$ cease to be defined.
3. [blocking] definition "Displacement and the strain tensor", last parenthesis (line 37):
   "That $\omega_j$ is the dual pseudovector of $\omega_{ij}$ is the correspondence of
   :ref[]{to=geom.pseudotensors}." It is $-\omega_j$. With the unit's own
   $\omega_{ij}=\tfrac12(\partial_ju_i-\partial_iu_j)$ and $u_i=a_i+\epsilon_{ijk}\omega_jx_k$
   one gets $\omega_{ij}=-\epsilon_{ijk}\omega_k$, so the dual as defined in
   geom.pseudotensors statement 3 is $\tfrac12\epsilon_{ijk}\omega_{jk}=-\omega_i$. Checked
   with $\omega=(0,0,1)$: $u=(-x_2,x_1,0)$, $\omega_{12}=-1$, and the dual comes out
   $(0,0,-1)$. Fix: either define the rotation tensor with the other index order,
   $\omega_{ij}=\tfrac12(\partial_iu_j-\partial_ju_i)$ (whose dual is $+\omega_j$ and which
   is the usual continuum-mechanics convention), or say "$-\omega_j$" here.
4. [minor] frontmatter / automated warning: `npm run check` reports "evans-2010 pp. 5, 85
   never mention stress/strain/tensor; check the page numbers". This is a false positive and
   needs no change: p. 5 (§1.2.2) does carry the equilibrium equations
   $\mu\Delta\mathbf u+(\lambda+\mu)D(\operatorname{div}\mathbf u)=0$ and the evolution
   equations, and p. 85 is §2.5 Problem 21(b), "show $w:=\operatorname{div}\mathbf u$ and
   $\mathbf w := \operatorname{curl}\mathbf u$ each solve wave equations, but with differing
   speeds of propagation" — exactly as cited. Evans simply never uses the words.

## Checked

- **Automated checks.** `node tools/check/index.mjs --record` gives no FAIL line for this
  unit; the one unit-specific warning is the evans-2010 page warning handled in finding 4.
  No `resembles` line.
- **Counterexample search.** Statement 1: the reduction depends on contracting
  $c_{ijkl}$ against a symmetric $e$, and I checked that $\eta$ and $\nu$ are genuinely
  inseparable — replacing $e$ by a non-symmetric array splits them again, which is the
  remark's claim. Statement 2 probed for the converse: an eigenvector of $p$ is an
  eigenvector of $e$ only because $2\mu\neq 0$; with $\mu=0$ every vector is an eigenvector
  of $p$ and the statement is vacuous, consistent with the $\mu\neq 0$ hypothesis. Statement
  3 probed at its excluded points, which produced finding 2. The small-gradient bullet
  probed with a pure shear, which produced finding 1. The rigid-motion claim in the
  definition probed with $\omega=(0,0,1)$, which produced finding 3 (the claim that
  $e_{ij}=0$ for a rigid motion is itself correct — $\partial u_i/\partial x_l=\epsilon_{ijl}\omega_j$
  is antisymmetric in $i,l$).
- **Calculations** (numpy/sympy; script kept locally). $E=200$ GPa,
  $\sigma=0.3$: $\mu = 76.923076\ldots = 1000/13$ GPa and $\lambda = 115.384615\ldots = 1500/13$
  GPa — match. $\theta=4\times10^{-4}$ — match. Stress matrix in MPa came out
  $p_{11}=p_{22}=76.9231=1000/13$, $p_{12}=15.3846=200/13$, $p_{33}=46.1538=600/13$,
  $p_{13}=p_{23}=0$ — every entry matches. Principal strains $3\times10^{-4}$,
  $1\times10^{-4}$, $0$ with eigenvectors $(1,1,0)/\sqrt2$, $(1,-1,0)/\sqrt2$, $(0,0,1)$ —
  match. Principal stresses $1200/13=92.3077$, $800/13=61.5385$, $600/13=46.1538$ MPa —
  match. Maximum shear $300/13=23.0769$ MPa — matches "$\approx 23.1$". Trace check: sum of
  principal stresses $=200.000$ MPa and $E\theta/(1-2\sigma)=200.000$ MPa — the independent
  check does close. Wave speeds: $\lambda+2\mu=3500/13=269.23$ GPa, $c_P=5856.4$ m s$^{-1}$
  and $c_S=3130.4$ m s$^{-1}$ at $\rho=7850$ kg m$^{-3}$ — match "$\approx 5.86$" and
  "$\approx 3.13$" km s$^{-1}$. Poisson solid: $\sigma=\tfrac14$ gives $\lambda=\mu=0.4E$ and
  $c_P/c_S=\sqrt3$ — confirmed. Proof algebra re-derived independently:
  $e_{11}=S(\lambda+\mu)/[\mu(3\lambda+2\mu)]$, $\sigma=\lambda/[2(\lambda+\mu)]$,
  $3\lambda+2\mu=E/(1-2\sigma)$, and the Navier terms
  $\partial_ip_{ij}=\mu\nabla^2u_j+(\lambda+\mu)\partial_j(\nabla\cdot u)$ with
  $\rho w_{tt}=(\lambda+2\mu)\nabla^2 w$ and $\rho\mathbf w_{tt}=\mu\nabla^2\mathbf w$ — all
  correct as printed.
- **Citations.** rhb-2006 §26.12, pp. 950-954: p. 950 Eq. (26.42) the inertia tensor with
  $J_i=I_{il}\omega_l$, p. 951 the principal axes; p. 953 the strain tensor
  $e_{ij}=\tfrac12(\partial u_i/\partial x_j+\partial u_j/\partial x_i)$, the symmetric
  stress tensor $p_{ij}$ with "the $x_j$-component of the stress vector acting across a plane
  whose normal lies in the $x_i$-direction" (the unit's index convention matches exactly),
  Hooke's law Eq. (26.46), the assumed isotropic form Eq. (26.47), the reduction to
  $p_{ij}=\lambda e_{kk}\delta_{ij}+2\mu e_{ij}$, the simple-tension system and
  Eq. (26.48) for $E$; p. 954 Eq. (26.49) for $\sigma$ and the final engineering form
  $\sigma E/[(1+\sigma)(1-2\sigma)]\,e_{kk}\delta_{ij}+E/(1+\sigma)\,e_{ij}$. Every locator
  correct, and the unit's "assuming rather than proving it" is exactly how RHB present
  Eq. (26.47). stakgold-holst-2011 §0.4, pp. 20-22: the continuum model and the Lagrangian /
  material-coordinate advantage (p. 20), the traction Eq. (0.4.5), the tetrahedron argument
  giving linear dependence on the direction cosines of $n$, the index convention of
  Eq. (0.4.6) ("the first index refers to the direction of the normal... the second to the
  component axis"), the divergence-theorem step and the momentum balance Eq. (0.4.8)
  (p. 21), and the angular impulse-momentum law mentioned but deferred (pp. 20, 22). All
  supported. arfken-2013: Exercise 4.1.4, p. 214, is indeed "an isotropic second-rank tensor
  in 3-D space must be a multiple of $\delta^i_j$", and Exercise 4.2.4, p. 218, is the three
  Kronecker-delta products shown isotropic — both as described. evans-2010 pp. 5 and 85 check
  out, see finding 4.
- **Provenance.** No `resembles` line. The `adapted` proof follows RHB's worked example
  route but adds the principal-axis step with the spectral theorem, names the three
  non-degeneracy hypotheses RHB leave silent, and derives (2); the prose is rewritten, not
  transcribed. The two `adapted` definitions merge RHB's one-paragraph treatment with
  Stakgold and Holst's tetrahedron argument and attribute each half; acceptable. The
  `original` idea, remark, method, example and application are not traceable to any source —
  the steel example, the rosette/photoelasticity paragraph and the thermal-stress paragraph
  are the unit's own, and findings 1-3 are all in `original` text.
- **Style.** Idea before proof; no "clearly"/"obviously"; a fully worked example ending in
  checkable numbers and carrying its own trace check; hypotheses named at the steps that use
  them (modulo finding 2); no exercises.
