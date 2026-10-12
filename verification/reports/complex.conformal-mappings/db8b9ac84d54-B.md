VERDICT: FAIL
UNIT: complex.conformal-mappings
VERIFIER: B

## Findings

1. [blocking] :::remark[Which regions can be reached] (line 237): the Schwarz-Christoffel
   mechanism sentence has the turn backwards. The unit says "Each factor contributes a turn of
   $\phi_j - \pi$ as $\xi$ passes $x_j$ along the real axis". The factor is
   $(\xi-x_j)^{(\phi_j/\pi)-1}$; as $\xi$ crosses $x_j$ from left to right along the real axis,
   $\arg(\xi-x_j)$ goes from $\pi$ to $0$, a change of $-\pi$, so the factor's argument -- and
   hence the direction of the image tangent -- changes by $(\phi_j/\pi-1)(-\pi) = \pi - \phi_j$,
   the *exterior* turn, which is positive (a left turn) for a convex vertex traversed with the
   polygon's interior on the left. The unit's $\phi_j-\pi$ is the negative of this.
   Checked numerically on the single-vertex case $n=1$, $x_1=0$, $\phi_1=\pi/2$, for which
   (24.30) gives $w = 2Az^{1/2}$, the standard quadrant map: the image tangent has
   $\arg = -\pi/2$ for $\xi<0$ and $\arg = 0$ for $\xi>0$, a turn of $+\pi/2 = \pi-\phi_1$,
   not $-\pi/2$. This sentence is our own gloss (Riley, Hobson and Bence do not state the turn
   at p. 843), so it is our error, not the book's.
   Fix: "Each factor contributes a turn of $\pi - \phi_j$ -- the exterior angle -- as $\xi$
   passes $x_j$ along the real axis".

2. [blocking] :::remark[Where the hypotheses are used] (line 86): misattribution. The last
   sentence of the first bullet reads "Ahlfors calls the points where $g'=0$ the **critical
   points** of the transformation." Ahlfors does not. The term in this sense is Riley, Hobson
   and Bence's, p. 841: "at points where $g'(z)=0$, the angle $\arg g'(z)$ through which line
   elements are rotated is undefined; these are called critical points of the transformation."
   Ahlfors's treatment of $f'(z_0)=0$ (pp. 73-75) and of the power map (p. 90) uses no such
   term; a full-text search of ahlfors-1979 finds "critical" only on pp. 4, 14, 218, 303-306,
   and its index entry "Critical point, 304-306" is the zeros of $a_0(z)$ and of the
   discriminant of an algebraic function, an unrelated use. Both works are cited by the block,
   so the fact is covered, but the attribution names the wrong one.
   Fix: "Riley, Hobson and Bence call the points where $g'=0$ the **critical points** of the
   transformation (p. 841)."

3. [minor] :::definition[Conformal at a point] (line 37): the quoted exception clause
   "except at points at which $g'(z)$, and hence $h'(w)$, is zero or infinite" is not what
   p. 840 says -- the book writes $h'(z)$. Changing a symbol silently inside quotation marks is
   the problem, even though the change makes the book more nearly right (the book's own slip is
   recorded as [source] below).
   Fix: either quote the clause as printed, or drop the quotation marks and paraphrase.

4. [source] hassani-2013, Proposition 10.3.1(b), p. 306 (cited by the "Harmonic functions ride
   along" statement, line 168). Part (b) reads "If $f$ is harmonic in $(x,y)$, it is also
   harmonic in $(x',y')$", but $f$ in that proposition is the *mapping* $f(z)=z'$, which is
   analytic and so harmonic for free; the statement is vacuous as literally written. The
   intended claim -- which is the one the unit reports -- is that an arbitrary harmonic function
   composed with the map stays harmonic. The unit reports the intent faithfully and is not
   failed for it. Recorded with `tools/discrepancy.mjs add`.

5. [source] rhb-2006, §24.7, p. 840. The exception clause attached to properties (i)-(iv) says
   "$g'(z)$, and hence $h'(z)$", but $h$ is defined on p. 839 as the inverse $z = h(w)$, a
   function of $w$. A typographical slip in the book. Recorded with
   `tools/discrepancy.mjs add`.

## Checked

- Automated: `node tools/check/index.mjs --record` gives `ok complex.conformal-mappings`
  with four `resembles` warnings, all judged below.

- Counterexample search.
  - Conformality statement, claim 1: tried $f'(z_0)=0$ (the unit excludes it and the remark
    gives the $m\theta$ opening correctly), arcs with vanishing tangent (excluded by
    hypothesis), $\overline{z}$ (correctly excluded by the signed-angle clause). Claim 4's
    "local, not global" caveat tested against $z^2$ on $1<|z|<2$ and $e^z$ on a strip of
    height $>2\pi$: both genuinely fail injectivity with $f'\neq0$, as the remark says.
  - Mobius statement: checked the degenerate branch of the three-fixed-point argument
    ($\infty$ fixed forces $c=0$ and a degree-$\le1$ polynomial with two roots) -- the unit's
    "degree at most 2 with three distinct roots in $\widehat{\mathbb C}$" covers it loosely but
    not wrongly. Cross-ratio formula tested at $z=z_2,z_3,z_4$: gives $1,0,\infty$, so it
    matches the stated Ahlfors convention.
  - Circle equation $(*)$: verified the three substitutions by hand. Translation gives
    $B'=B-A\beta$, $C'=C-2\operatorname{Re}(\overline B\beta)+A|\beta|^2$ and
    $|B'|^2-AC'=|B|^2-AC$; multiplication gives $|B'|^2-AC'=|\alpha|^2(|B|^2-AC)$; inversion
    gives $A'=C$, $B'=\overline B$, $C'=A$ and the same invariant. All as printed.
  - Harmonic-transport statement: the identity $\Delta(\Phi_0\circ g)=|g'|^2(\Delta\Phi_0)\circ g$
    verified symbolically in sympy with $g(z)=z^3+2z+1$ and the deliberately non-harmonic
    $\Phi_0=U^3V+e^U\cos V+U^2$: `simplify(lhs-rhs)` returns exactly `0`.
  - Schwarz-Christoffel turn: counterexample above (finding 1).

- Calculations (worked example, half-disk at $T=0$ on the diameter and $T=100$ on the arc).
  Redone independently in mpmath at 30 digits.
  - $g_1(i/2)=(1+i/2)/(1-i/2)=3/5+4i/5$; $W=\zeta^2=-7/25+24i/25$; $\arg W=\pi-\arctan(24/7)
    =1.85459043600322\ldots=2\arctan(4/3)$. Both routes agree, as the unit claims.
  - $T(i/2)=(200/\pi)\arctan(4/3)=59.03344706017331\ldots$ — matches the unit's $59.0334\ldots$
  - Spot value $T(0.3+0.4i)=(200/\pi)\arctan(1.0\overline6)=52.05290029554955\ldots$ — matches
    the unit's $52.0529\ldots$, and lies in $(0,100)$.
  - Finite-difference Laplacian of $T$ at $0.3+0.4i$ with $h=10^{-6}$: $1.491\times10^{-10}$ —
    matches the unit's "$1.5\times10^{-10}$".
  - Boundary checks reproduced: $T=0$ on $y=0$, $T\to100$ as $1-x^2-y^2\to0^+$; the identity
    $(1+z)/(1-z)=(1-|z|^2+2iy)/|1-z|^2$ verified algebraically, so the $\arctan$ form is right
    and the principal branch is legitimate (real part positive on the disk).
  - Corner exponent in the application: $\Phi=c\,r^{\pi/\alpha}\sin(\pi\theta/\alpha)$ has
    $|\nabla\Phi|=c(\pi/\alpha)r^{(\pi/\alpha)-1}$ (modulus of the derivative of $cz^{\pi/\alpha}$),
    as printed; sign change at $\alpha=\pi$ and $r^{-1/2}$ at $\alpha=2\pi$ both correct.
  - Mobius decomposition $\frac{az+b}{cz+d}=\frac ac+\frac{bc-ad}{c^2}\cdot\frac1{z+d/c}$
    verified by clearing denominators.

- Citations.
  - ahlfors-1979 pp. 73-76: §2.3 Eqs. (1)-(2) give exactly claim 1 and claim 2; the partial
    converse with continuous partials and the circle of radius $\frac12|f_x+if_y|$ is p. 74,
    including "indirectly conformal" and the inverse with derivative $1/f'(z)$; Eq. (6) on
    p. 76 is the area formula. Matches.
  - ahlfors-1979 pp. 76-80: Eq. (7) and the inverse p. 76; the group and the
    translation/inversion/rotation decomposition pp. 77-78; Definition 12 and Eq. (9) p. 78;
    Theorem 12 (invariance) and Theorem 13 (reality test) p. 79; Theorem 14 (circles to
    circles) p. 80. Every locator in the unit is right.
  - ahlfors-1979 p. 90: the power map, $|w|=|z|^a$, $\arg w=a\arg z$, and "The mapping is one
    to one only if $a(\varphi_2-\varphi_1)\le2\pi$, and in this case $S(\varphi_1,\varphi_2)$
    is mapped onto $S(a\varphi_1,a\varphi_2)$". The unit reports this as a necessary condition,
    which is what the book says. Matches. (Nothing on this page about "critical points" —
    see finding 2.)
  - ahlfors-1979 p. 230: Theorem 1 is the Riemann mapping theorem with $f(z_0)=0$, $f'(z_0)>0$,
    onto $|w|<1$, unique; the proof does take the member of the family with maximal derivative.
    Matches.
  - rhb-2006 pp. 839-843: the "both analytic apart from isolated points" definition p. 839;
    properties (i)-(iv) and the exception clause p. 840; Eqs. (24.25)-(24.27), the area factor
    $|g'|^2$, the critical points, and Eqs. (24.28)-(24.29) p. 841; the half-plane-to-disk map
    $e^{i\varphi}(z-z_0)/(z-z_0^*)$ with the "nearer to $z_0$ than to its reflection" argument
    p. 842; Eq. (24.30) p. 843 with the $(\phi_j/\pi)-1$ exponents, the vertex correspondence
    and the roles of $A$ and $B$. All match the unit, including the formula as displayed.
  - rhb-2006 pp. 876-878: the transport of Laplace's equation and of constant boundary values
    p. 876 with the footnote the unit cites; the $w=z^2$ and $w=z^{1/2}$ examples pp. 877-878;
    the parenthetical "$g'(z)$ is either 0 or $\infty$ at the origin, and so neither
    transformation is conformal there. Consequently there is no violation of result (ii)" at
    p. 878; the wedge-plus-images line charge p. 878. All match.
  - hassani-2013 pp. 304-308: the cylindrical-symmetry motivation p. 304; the two conditions a
    useful change of variable must meet and the angle-preservation definition p. 305;
    Proposition 10.3.1(a),(b), the list of elementary maps, Eq. (10.8) and Example 10.3.2
    p. 306; the line case $r=|a|$ and the shifted inversion $z'=1/(z-c)$ and "homographic
    transformations" p. 307; the two-cylinder potential in the annulus p. 308. All match
    (see finding 4 for the imprecision in 10.3.1(b)).

- Provenance. Four `resembles` warnings, all compared against the cited pages by hand.
  - definition, line 30, 11 words with rhb-2006 p. 840: this is the exception clause, set in
    quotation marks and explicitly attributed to Riley, Hobson and Bence in the surrounding
    sentence. A short attributed quotation, acceptable — but see finding 3 on its accuracy.
  - statement, line 168, 9 words with ahlfors-1979 p. 162 ("real and imaginary parts of an
    analytic function are harmonic") and 8 words with p. 168 ("as the real part of an analytic
    function"): both are the only natural English for these standard facts, and the surrounding
    sentences attribute the route to Riley, Hobson and Bence's Eqs. (24.28)-(24.29), not to
    Ahlfors p. 162/168. No copying.
  - method, line 209, 8 words with ahlfors-1979 p. 90 ("the mapping is one to one only if"):
    an explicitly attributed quasi-quotation of the restriction, named as Ahlfors's, within a
    sentence of our own. Acceptable.
  - Block labels: the two `original` idea blocks describe routes the books do not take (the
    chain-rule/one-angle reading, and the "preserve the shape of a single equation" route for
    circles); the `original` Wirtinger proof of the transport identity is not any source's
    route (Riley, Hobson and Bence go via $F=f\circ h$, which the unit attributes to them in
    the statement block instead); the `original` worked example and application are ours. The
    `adapted` proofs do follow their cited sources' routes and are rewritten, not paraphrased
    sentence by sentence. I found no mislabelling.

- Style. Block order follows the guide (note, definition, statement, idea, proof, remark,
  further definitions and statements with their own idea/proof, statement, idea, proof, method,
  remark, example, application). An idea precedes each proof. No "clearly"/"obviously"/"easy to
  see". One fully worked example with checkable numbers, all of which I reproduced. The
  "where the hypotheses are used" remark is accurate on every point I tested.
