VERDICT: PASS
UNIT: complex.branch-cut-integrals
VERIFIER: A

## Findings
1. [minor] example "Dogbone across a two-branch-point cut", Morera paragraph (lines 207-211): the
   decomposition is written for a contour with a *discrete* set of crossings -- "cut $\gamma$ at its
   crossings of the diameter", "close each group by running along the diameter between consecutive
   crossings", "every added diameter segment is traversed once in each direction". A closed contour
   in $U$, even a piecewise-smooth one, may meet the diameter in infinitely many points (e.g.
   $t\mapsto x_0+t+i\,t^{4}\sin(1/t)$), in which case there are no "consecutive crossings" and the
   pairing-up of added segments is not available as stated. The handbook's Morera
   (complex.cauchy-integral-formula, consequence 4) is the all-closed-contours form, so the
   generality is actually needed and is not optional here. The conclusion is right and the repair is
   one sentence; two ways. (a) Note that it suffices to prove $\oint_{\partial T}w\,dz=0$ for every
   triangle $T\subset U$ -- a triangle boundary meets a line in at most two points or contains one
   whole edge, so the crossing set is finite -- and that vanishing on triangles already gives a local
   primitive, hence analyticity, after which all closed contours follow. (b) Keep arbitrary $\gamma$
   and account for the real part of $\gamma$ with a primitive: $w$ restricted to the real diameter is
   continuous, so it has a primitive $W$ there; writing $[0,1]\setminus\gamma^{-1}(\mathbb{R})$ as
   countably many open intervals $(a_j,b_j)$, each arc closed by the segment
   $[\gamma(b_j),\gamma(a_j)]$ gives $\oint w=0$ on the closed half-disc, and summing turns
   $\oint_\gamma w\,dz$ into $\int_0^1 (W\circ\gamma)'\,dt = W(\gamma(1))-W(\gamma(0)) = 0$.
   Fix: adopt (a) or (b), or say explicitly that $\gamma$ is taken polygonal/triangular.

## Checked
Re-derived the jump values for $z^p$ and $\log z$ on $\arg z\in(0,2\pi)$ and the $\delta\to0^+$
limit argument in the keyhole definition (the two compact angular strips $[\rho,R]\times[0,\delta_0]$
and $[\rho,R]\times[2\pi-\delta_0,2\pi]$ do avoid the poles, given $\delta_0$ below every pole
argument, and the unit now says so); re-derived all three worked examples step by step, including the
pole phases $2e^{i\pi}$, $3e^{i\pi/2}$, $3e^{3i\pi/2}$ and the residue sums, and confirmed
$I=2\pi/(\sqrt3\,2^{1/3})=2.8792270$, $J=\pi\sqrt6/6=1.2825498$, $L=\pi/\sqrt3=1.8137994$ by mpmath
quadrature to 10+ digits; checked the dogbone branch analysis (boundary values $\pm i\sqrt{1-x^2}$,
$w(-2)=-\sqrt3$, $w=+\sqrt{x^2-1}$ on $(1,\infty)$ and $-\sqrt{x^2-1}$ on $(-\infty,-1)$) and the
uniform estimate $|w/z-1|\le|z|^{-2}$ including the two-sector connectedness step; verified the
application's numbers (arcsine transform $1/\sqrt3=0.5773503$, semicircle transform
$2(2-\sqrt3)=0.5358984$) numerically. Compared against Ahlfors p. 159 (order-two zero at infinity, at
most a simple pole at the origin, the $x=t^2$ route and the $-\pi\alpha$ to $3\pi\alpha$ branch),
Arfken p. 535 (Eq. 11.114 and the "serious mistake" remark about $e^{-\pi i/2}$), Arfken p. 503
(Table 11.1 and the single-valuedness of a loop round both branch points), RHB p. 866 (Fig. 24.16 and
the non-cancellation of $AB$ and $CD$) and Hassani p. 371 (states only that the circle contributions
tend to zero, as the unit's parenthetical says). All five listed prerequisites are used.
