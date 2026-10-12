VERDICT: PASS
UNIT: complex.cauchy-riemann
VERIFIER: A

## Findings
1. [minor] definition (line 35): the list of differentiation rules gives sum, product and quotient
   but not composition. Later units in the chapter lean on this one for the chain rule — e.g.
   `complex.branch-points-cuts` calls $F(z) = (z-4)\exp(\tfrac12\ln m(z))$ analytic "being a product
   of the polynomial $z-4$ with a composition of analytic functions", and
   `complex.contour-integrals` differentiates $t \mapsto F(z(t))$ "by the chain rule". Fix: add the
   chain rule to the sentence; its proof is the real one verbatim, as the sentence already says of
   the others.
2. [minor] example "Orthogonal level curves" (line 158): the hypothesis is stated as $\nabla u \ne
   0$; it is worth one clause that the Cauchy-Riemann equations give $|\nabla v| = |\nabla u|$, so
   $\nabla v$ vanishes at exactly the same points and the statement is symmetric in $u$ and $v$ (as
   the closing sentence about $f'(z) = 2z$ implicitly uses).

## Checked
Verified both directions of the statement step by step. Necessity: re-derived $f'(z_0) = u_x + iv_x$
from real $h$ and $f'(z_0) = -i(u_y + iv_y) = v_y - iu_y$ from $h = ik$, and confirmed that the
combined form $f_x = -if_y$ is equivalent to the pair (expanded both sides in $u, v$). Sufficiency:
checked that the first-order expansions are exactly what prereq
`found.partial-derivatives-chain-rule` part 2 supplies (I read that unit's statement block: $C^1$ on
an open set implies differentiability at every point), that the combination step uses
$u_y + iv_y = i(u_x+iv_x)$ correctly, and that the error term estimate
$|\varepsilon|/|h+ik| \to 0$ is justified. Harmonicity: the mixed-partial interchange is covered by
the $C^2$ clause of the same prereq, and the deduction for $v$ by applying the result to $-if = v -
iu$ is correct. Uniqueness of the conjugate: $w = v - \tilde v$ has $w_x = w_y = 0$, which I checked
follows from the two equations with the same $u$. Verified the claim "$u$ is the conjugate of $-v$"
by checking that $(-v, u)$ satisfies the Cauchy-Riemann pair, i.e. that $-v + iu = if$. Compared
against Ahlfors pp. 24–26 (read with `tools/corpus/pages.mjs`): Eqs. (5), (6), $f' = u_x + iv_x$,
"the existence of the four partial derivatives is implied by the existence of $f'$", "$v$ is
determined only up to an additive constant", "$u$ is the conjugate harmonic function of $-v$", the
sufficiency theorem with continuous first partials, and his remark that harmonicity really follows
from analyticity of $f'$ — statement part 3's note about removing the $C^2$ hypothesis is faithful
to him. Also checked Arfken Eqs. (11.10)–(11.12), p. 472 (continuity of the partials justifying the
increment formula), his definition of analytic as differentiable *and single-valued* in a region,
and Eqs. (11.14)–(11.15), pp. 473–474 for the orthogonality of level curves. Tested the remark's
counterexample $f = \bar z^{\,2}/z$ by hand in polar form: $f(re^{i\theta}) = re^{-3i\theta}$, $f(x)
= x$ and $f(iy) = iy$ so both equations hold at $0$, $f(z)/z = e^{-4i\theta}$ has no limit, and the
radial and tangential quotients off the origin are $e^{-4i\theta_0}$ and $-3e^{-4i\theta_0}$ as
stated. Checked $2xy + i(x^2-y^2) = i\overline{z^2}$ and that its Cauchy-Riemann equations force
$x = y = 0$; likewise for $|z|^2$ and $\operatorname{Re}z$. Every number in the two examples
verified: $u$ harmonic, $\varphi' = -2$, $f = z^3 - 2iz$, $f(2+i) = 4+7i$ against $u(2,1)=4$,
$v(2,1)=7$, and $f'(2+i) = 9+10i$ both ways; $\nabla u\cdot\nabla v = 8-8 = 0$ at $2+i$ with the
tangent directions $(2,4)/\sqrt{20}$, $(4,-2)/\sqrt{20}$, and the $45^\circ$ degeneration at the
origin where $f'$ vanishes.
