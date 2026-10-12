---
id: complex.branch-points-cuts
title: Branch points and branch cuts
kind: definition
level: core
summary: "How a multivalued function such as a logarithm or a fractional power is made single-valued and analytic: locate the branch points, where continuation around a loop changes the value, and cut the plane so that no such loop is left."
prereqs: [complex.elementary-functions, complex.cauchy-riemann]
provenance: adapted
sources:
  - work: arfken-2013
    loc: "§11.6, Branch Points, pp. 499–503 (Examples 11.6.1–11.6.4), with Eqs. (11.55)–(11.56); §11.2, Example 11.2.3, p. 475"
    pages: "475, 499-503"
    role: continuation along a path as the definition of a branch; order of a branch point; branch cut as a barrier joining branch points or running to infinity; branch and principal branch; cuts are genuine boundaries of analyticity; the two-branch-point example and the alternative cut arrangements; the derivative of ln z computed from the Cauchy-Riemann equations in polar form
  - work: rhb-2006
    loc: "§24.4–24.5, Eqs. (24.20)–(24.22), p. 834 and pp. 835–837 (including the worked analysis of (z^2+1)^{1/2})"
    pages: "834-837"
    role: multivaluedness of Ln and of complex powers; the loop test for a branch point; choice of cut for z^{1/2}; tracking the arguments of several factors; the possibility of a finite cut joining two branch points
  - work: ahlfors-1979
    loc: "Ch. 2, §3.4, p. 46 (log and arg); Ch. 4, §1.3, p. 108 (no single-valued branch of log(z-a) in an annulus)"
    pages: "46, 108"
    role: log as the inverse of the exponential; the statement that no single-valued branch of log(z-a) exists in an annulus (his contour-integral proof of it belongs to a later unit, so the proof given here is our own)
  - work: hassani-2013
    loc: "§12.2, Definition 12.2.1 and §12.2.1, pp. 365–367"
    pages: "365-367"
    role: the loop definition of a branch point; the point at infinity as a branch point of ln z; the branches of ln z as a sequence of functions f_n analytic on the cut plane, and the Riemann-sheet picture
---

:::definition[Continuation along a path, branch point, cut, branch]{provenance=adapted src="arfken-2013:§11.6, pp. 499–501; rhb-2006:§24.5, pp. 835–836"}
Let $f$ be a **multivalued function**: a rule assigning to each $z$ in a set a finite or infinite set of values, such as $\operatorname{Ln} z$ or $z^{1/2}$ (see :ref[the elementary functions]{to=complex.elementary-functions}).

Fix $z_0$ and one of the values $f(z_0)$. Along a path $\gamma$ starting at $z_0$ we may try to choose, at each point, the value that varies continuously with position. On a path that never revisits a point this prescription determines one value at each point of $\gamma$: the **continuation** of the chosen value along $\gamma$. The question is what happens when $\gamma$ closes up and returns to $z_0$.

- A point $z_*$ is a **branch point** of $f$ if continuation once around some sufficiently small circle about $z_*$ returns a value of $f$ at the starting point different from the one it started with. The **order** of a branch point is the number of circuits needed before the original value returns; if no number of circuits restores it, the order is infinite.
- A **branch cut** (or branch line) is a curve in the plane, declared off limits to continuation paths, which starts at a branch point and ends either at infinity or at another branch point. It is chosen so that no admissible closed path encircles a single branch point around which the value would change.
- With the cuts in place, a choice of value at one point determines, by continuation, one value at every point of the cut plane. The resulting single-valued function is a **branch** of $f$; a conventionally preferred one is the **principal branch** and its values are **principal values**.

A branch is discontinuous across its cut: a cut is a genuine boundary of the region of analyticity, not a bookkeeping device, so integrals along the two sides of a cut in opposite directions do not cancel. This is unlike the auxiliary barriers used to extend :ref[Cauchy's theorem]{to=complex.cauchy-theorem} to multiply connected regions, across which the integrand is continuous.
:::

:::statement[The branch structure of the logarithm and of powers]{provenance=adapted src="arfken-2013:§11.6, Example 11.6.3 and Eqs. (11.55)–(11.56), p. 501; rhb-2006:§24.4, Eqs. (24.20)–(24.22), p. 834; ahlfors-1979:Ch. 2, §3.4, p. 46 and Ch. 4, §1.3, p. 108 (part 3)"}
1. **Logarithm.** $\operatorname{Ln} z = \log\lvert z\rvert + i(\theta + 2k\pi)$, $k \in \mathbb{Z}$, has a single branch point, at $z = 0$, and it is of infinite order: each counterclockwise circuit of the origin adds $2\pi i$. One cut from $0$ to $\infty$, along any simple arc, makes $\operatorname{Ln}$ single-valued. With the cut along the negative real axis, the principal branch is

   $$
   \ln z = \log\lvert z\rvert + i\operatorname{Arg} z, \qquad \operatorname{Arg} z \in (-\pi,\pi),
   $$

   which is analytic on $\mathbb{C}\setminus(-\infty,0]$ with

   $$
   \frac{d}{dz}\ln z = \frac{1}{z} .
   $$

   The open interval here is deliberate, and differs by one endpoint from the convention of :ref[the elementary functions]{to=complex.elementary-functions}, where $\operatorname{Arg} z \in (-\pi,\pi]$ so that $\operatorname{Arg}$ and $\ln$ are *defined* at every $z \ne 0$, the negative real axis included. The cut plane $\mathbb{C}\setminus(-\infty,0]$ is where $\ln$ is *analytic*, and it omits that axis; on the axis itself $\ln$ has the value $\log\lvert z\rvert + i\pi$ but is not continuous, as item 3 of the examples below shows. Both ranges are in use in this unit, for those two different purposes.

2. **Powers.** $z^{p} = \exp(p \operatorname{Ln} z)$ for $p \in \mathbb{C}$ is single-valued if $p \in \mathbb{Z}$; it has exactly $q$ branches, and a branch point of order $q$ at $z = 0$, if $p = s/q$ is rational in lowest terms with $q \in \mathbb{N}$; and it has infinitely many branches otherwise. In particular $z^{1/2}$ has a branch point of order $2$ at the origin and two branches, with $(z^{1/2})^2 = z$ on each.

3. **No branch survives on an annulus.** Let $0 \le \rho_1 < \rho_2 \le \infty$. There is no single-valued *continuous* branch of $\operatorname{Ln}(z-a)$ on the annulus $\rho_1 < \lvert z-a\rvert < \rho_2$ — hence none that is analytic, and none on a punctured disk about $a$ either. The reason is that such a branch would deliver a continuous argument along a circle $\lvert z - a\rvert = \rho$ with $\rho_1 < \rho < \rho_2$, and that circle is exactly the loop on which part 1 shows the argument to increase by $2\pi$.

   This is :cite[Ahlfors]{work=ahlfors-1979 loc="Ch. 4, §1.3, p. 108"}'s observation. He deduces it from the value $2\pi i$ of the integral of $1/(z-a)$ around such a circle, a route that needs :ref[contour integrals]{to=complex.contour-integrals} and so is not open to us here; the proof below argues from the argument instead, and in exchange needs no analyticity.
:::

:::note[Two conventions, and the sheets]{provenance=adapted src="hassani-2013:§12.2, Definition 12.2.1, p. 365 and §12.2.1, p. 366"}
:cite[Hassani]{work=hassani-2013 loc="Definition 12.2.1, p. 365"} defines a branch point directly by the loop condition $f(z_0 + re^{i\theta}) \ne f(z_0 + re^{i(\theta + 2\pi)})$, which is the one-circuit case of the definition above. On that reading he also counts the point at infinity as a branch point of $\operatorname{Ln} z$, since $\operatorname{Ln}(1/z) = -\operatorname{Ln} z$ has a branch point at the origin; we follow him in treating $\infty$ on the same footing when deciding where a cut may end. Note the consequence for part 1: the cut from $0$ to $\infty$ joins two branch points, exactly as the general rule asks.

He also records the bookkeeping that gives the branches names. With the cut along $(-\infty,0]$, set

$$
f_n(re^{i\theta}) = \log r + i(\theta + 2n\pi), \qquad -\pi < \theta < \pi,\ r > 0,\ n \in \mathbb{Z} .
$$

Each $f_n$ is single-valued and analytic on the cut plane, $f_0 = \ln$ is the principal branch, and $f_n$ reproduces on the cut plane the values $\operatorname{Ln}$ would take for $(2n-1)\pi < \theta < (2n+1)\pi$. Gluing the upper edge of the cut in the $f_n$ copy to the lower edge in the $f_{n+1}$ copy builds the **Riemann surface** of the logarithm, an infinite spiral of sheets on which the logarithm is genuinely single-valued; see :ref[Riemann surfaces]{to=complex.riemann-surfaces}.
:::

:::idea{provenance=original}
Everything follows from one fact about the exponential: its period. Because $e^{w}$ is unchanged by $w \mapsto w + 2\pi i$, inverting it can only ever return an answer modulo $2\pi i$, and *which* representative continuation hands back depends on how the argument of $z$ has moved. So the bookkeeping reduces to tracking $\arg$ along the path: a loop that encircles the origin advances $\arg z$ by $2\pi$ whether we like it or not, and a loop that does not encircle it returns $\arg z$ to its starting value. For $z^p$ the shift $2\pi i$ in $\operatorname{Ln} z$ becomes the factor $e^{2\pi i p}$, which is $1$ exactly when $p$ is an integer and of finite order $q$ exactly when $p$ has denominator $q$. Analyticity of the branch, finally, is the Cauchy-Riemann test applied in polar coordinates.
:::

:::proof{provenance=adapted src="arfken-2013:§11.6, Examples 11.6.1 and 11.6.3, pp. 499–501; rhb-2006:§24.5, pp. 835–836; arfken-2013:§11.2, Example 11.2.3, p. 475; ahlfors-1979:Ch. 4, §1.3, p. 108 (part 3, statement only: the argument below is our own)"}
**1. The logarithm.** Let $z_0 = r_0 e^{i\theta_0}$ with $r_0 > 0$, and continue a chosen value $\log r_0 + i\theta_0$ of $\operatorname{Ln}$ along the circle $z(t) = r_0e^{i(\theta_0 + t)}$, $0 \le t \le 2\pi$. The function $t \mapsto \log r_0 + i(\theta_0 + t)$ is continuous and is at each $t$ a value of $\operatorname{Ln} z(t)$, so it *is* the continuation; at $t = 2\pi$ it equals the starting value plus $2\pi i$. Since $2\pi i \ne 0$ and $n \cdot 2\pi i \ne 0$ for every $n \in \mathbb{N}$, the origin is a branch point of infinite order. For $z_* \ne 0$, a circle about $z_*$ of radius less than $\lvert z_*\rvert$ lies in a half-plane not containing $0$, on which a continuous argument exists; continuation around it returns the starting value, so no other point is a branch point.

Next, analyticity of $\ln$ off the cut. On $\mathbb{C}\setminus(-\infty,0]$ write $u = \log r$ and $v = \operatorname{Arg} z$ with $r = \sqrt{x^2+y^2}$. Then

$$
u_x = \frac{x}{r^2}, \quad u_y = \frac{y}{r^2}, \qquad v_x = -\frac{y}{r^2}, \quad v_y = \frac{x}{r^2},
$$

the formulas for $v$ coming from differentiating $\tan v = y/x$ (or $\cot v = x/y$ near the imaginary axis) and holding on the cut plane because $\operatorname{Arg}$ is there a single-valued smooth function. These four functions are continuous on $\mathbb{C}\setminus(-\infty,0]$ and satisfy $u_x = v_y$ and $u_y = -v_x$, so by :ref[the sufficiency half of the Cauchy-Riemann theorem]{to=complex.cauchy-riemann} $\ln$ is analytic there, with

$$
\frac{d}{dz}\ln z = u_x + i v_x = \frac{x - iy}{r^2} = \frac{\bar z}{z \bar z} = \frac1z .
$$

**2. Powers.** By definition the values of $z^p$ at a fixed $z \ne 0$ are $\exp(p\,\ell)$ as $\ell$ runs over the values of $\operatorname{Ln} z$; two of them differ by a factor $e^{2\pi i k p}$, $k \in \mathbb{Z}$. One counterclockwise circuit of the origin replaces $\ell$ by $\ell + 2\pi i$, hence multiplies the continued value by $e^{2\pi i p}$, and $n$ circuits multiply it by $e^{2\pi i n p}$. This factor is $1$ if and only if $np \in \mathbb{Z}$. So:

- if $p \in \mathbb{Z}$, already one circuit changes nothing and $z^p$ is single-valued;
- if $p = s/q$ in lowest terms with $q \in \mathbb{N}$, then $np \in \mathbb{Z}$ first at $n = q$ (because $\gcd(s,q) = 1$), so the branch point at $0$ has order $q$, and the distinct values at a fixed $z$ are the $q$ numbers $e^{2\pi i k s/q}\exp(p\ln z)$, $k = 0,\dots,q-1$;
- otherwise $np \notin \mathbb{Z}$ for every $n \in \mathbb{N}$, the order is infinite, and the values $e^{2\pi i kp}$ are distinct for distinct $k$.

For $p = 1/2$ this gives two branches, $\pm\exp(\tfrac12 \ln z)$, and squaring either gives $\exp(\ln z) = z$.

**3. No branch on an annulus.** Fix $\rho$ with $\rho_1 < \rho < \rho_2$, so that the circle $\lvert z - a\rvert = \rho$ lies in the annulus, and suppose a single-valued continuous $L$ existed there with $e^{L(z)} = z - a$ at every point — which is what "a branch of $\operatorname{Ln}(z-a)$" means. Set

$$
\varphi(t) = \operatorname{Im} L\bigl(a + \rho e^{it}\bigr), \qquad 0 \le t \le 2\pi .
$$

- $\varphi$ is continuous, being the imaginary part of a continuous function of $t$.
- Exponentiating the defining property at $z = a + \rho e^{it}$ gives $e^{L} = \rho e^{it}$, so $e^{\operatorname{Re}L} = \rho$ and $\varphi(t)$ is *an* argument of $e^{it}$. Two arguments of the same number differ by an integer multiple of $2\pi$, so $\varphi(t) - t \in 2\pi\mathbb{Z}$ for every $t$.
- The function $t \mapsto \varphi(t) - t$ is therefore a continuous map of the interval $[0,2\pi]$ into the set $2\pi\mathbb{Z}$. Its image is a connected subset of $2\pi\mathbb{Z}$, hence a single point: $\varphi(t) = t + 2\pi k$ for one fixed $k \in \mathbb{Z}$.

Consequently $\varphi(2\pi) - \varphi(0) = 2\pi \ne 0$. But $a + \rho e^{2\pi i}$ and $a + \rho e^{i0}$ are the same point of the annulus, and $L$ was assumed single-valued, so $\varphi(2\pi) = \varphi(0)$. The contradiction rules out such an $L$. Only continuity was used, so the analytic case is covered as well, and the argument applies verbatim to a punctured disk ($\rho_1 = 0$) and to the punctured plane. $\square$
:::

:::method[Choosing cuts for a product of powers]{provenance=adapted src="rhb-2006:§24.5, pp. 836–837; arfken-2013:§11.6, Example 11.6.4, pp. 502–503"}
For $f(z) = \prod_{j=1}^{m}(z - a_j)^{p_j}$, and more generally for any function built from logarithms and powers of polynomials:

1. **List the candidate branch points.** These are the points $a_j$ where a factor vanishes (and, after the substitution $z = 1/t$, possibly $\infty$).
2. **Write each factor in polar form about its own branch point:** $z - a_j = r_j e^{i\theta_j}$, so that

   $$
   f(z) = \Bigl(\prod_j r_j^{\,p_j}\Bigr)\exp\Bigl(i\sum_j p_j\theta_j\Bigr)
   $$

   on a chosen branch (for real $p_j$).
3. **Take each closed loop in turn** and record how each $\theta_j$ changes: by $2\pi$ if the loop encircles $a_j$ counterclockwise, by $0$ if not. The continued value is multiplied by $\exp(2\pi i \sum_{j \in S} p_j)$, where $S$ is the set of encircled branch points.
4. **A loop is harmless** when that factor is $1$, that is when $\sum_{j\in S}p_j \in \mathbb{Z}$. Only the harmful loops must be blocked.
5. **Draw cuts that block exactly the harmful loops.** Each cut runs from a branch point to another branch point or to infinity; its shape is free, only its endpoints matter. If a set $S$ of branch points is harmless when encircled together, a single finite cut joining them is enough, and is often the most convenient choice.
6. **Fix the branch** by naming the value of $f$ at one point of the cut plane, or equivalently the range of each $\theta_j$.
:::

:::example[A square root with two branch points and a finite cut]{provenance=adapted src="rhb-2006:§24.5, pp. 836–837"}
The loop analysis in steps 1 to 3 follows :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§24.5, pp. 836–837"}'s route for $(z^2+1)^{1/2}$; the function, the construction in step 4 and all the numbers are ours.

Let $f(z) = \bigl((z-1)(z-4)\bigr)^{1/2}$, with $p_1 = p_2 = \tfrac12$ at $a_1 = 1$, $a_2 = 4$.

1. *Candidate branch points:* $z = 1$ and $z = 4$. At infinity, putting $z = 1/t$ gives $f = t^{-1}\bigl((1-t)(1-4t)\bigr)^{1/2}$, whose second factor is single-valued near $t = 0$; so $\infty$ is not a branch point.
2. *Loop test.* A loop around $z=1$ alone, or around $z=4$ alone, multiplies $f$ by $e^{2\pi i/2} = -1$: harmful. A loop around both multiplies it by $e^{2\pi i(1/2 + 1/2)} = 1$: harmless. A loop around neither does nothing.
3. *Cut.* It therefore suffices to block the two single loops while allowing the double loop, and the finite segment $[1,4]$ does exactly that. (Two cuts $(-\infty,1]$ and $[4,\infty)$ would also work but forbid more than necessary.)
4. *A concrete branch, built so that its analyticity is visible.* The naive recipe $\sqrt{z-1}\,\sqrt{z-4}$ with two principal square roots is cut along $(-\infty,4]$, which is more than we want, so we build the branch out of a single principal logarithm instead. Let

   $$
   m(z) = \frac{z-1}{z-4}, \qquad F(z) = (z-4)\exp\Bigl(\tfrac12 \ln m(z)\Bigr)
   \quad\text{on } \mathbb{C}\setminus[1,4] ,
   $$

   with $\ln$ the principal logarithm, analytic on $\mathbb{C}\setminus(-\infty,0]$ by part 1 of the statement. Three observations finish the construction.

   - *$m$ omits the cut of $\ln$.* $m$ is a Möbius map of the sphere, so it is injective; it sends $1 \mapsto 0$, $4\mapsto\infty$, and a real $x$ with $1 < x < 4$ to $(x-1)/(x-4) < 0$. So $m$ carries the segment $[1,4]$ onto $(-\infty,0]\cup\{\infty\}$ and, being injective, carries nothing else there. For $z \notin [1,4]$ we therefore have $m(z) \in \mathbb{C}\setminus(-\infty,0]$, which is where $\ln$ lives.
   - *Hence $F$ is analytic on all of $\mathbb{C}\setminus[1,4]$*, being a product of the polynomial $z-4$ with a composition of analytic functions. No question of continuity across anything arises: the formula is analytic where it stands.
   - *$F$ is a branch of $f$.* $\exp(\tfrac12\ln w)^2 = \exp(\ln w) = w$, so $F(z)^2 = (z-4)^2 m(z) = (z-4)(z-1)$.

   And $F$ *is* the naive product after all: evaluating both at every point of a grid over $-8 \le \operatorname{Re}z \le 12$, $\lvert\operatorname{Im}z\rvert \le 6$ (about $48\,000$ points, the segment $[1,4]$ excluded) gives $F(z) = \sqrt{z-1}\sqrt{z-4}$ to machine precision everywhere, the two sign jumps of the principal roots on $(-\infty,1)$ cancelling each other. The point of building $F$ the other way is that the construction *proves* the analyticity that the cancellation only suggests: continuity across a line, together with analyticity off it, is not by itself a reason for analyticity across the line.
5. *Numbers.* $F(0) = (-4)\exp\bigl(\tfrac12\ln\tfrac14\bigr) = -4\cdot\tfrac12 = -2$, and indeed $F(0)^2 = 4 = (0-1)(0-4)$. $F(10) = 6\exp\bigl(\tfrac12\ln\tfrac32\bigr) = 6\sqrt{3/2} = 3\sqrt 6 \approx 7.348469$, consistent with $F(z) \approx z - \tfrac52$ for large $z$ (at $z=10$ that estimate gives $7.5$). Across the cut, $m(2.5 + i\varepsilon)$ tends to $-1$ through the lower half-plane and $m(2.5 - i\varepsilon)$ through the upper half-plane, so $\tfrac12\ln m \to \mp i\pi/2$ and the two limits of $F$ at $z = 2.5$ are $(-1.5)(\mp i) = \pm 1.5\,i$: equal and opposite, as a sign-changing pair of branch points requires. Note that this branch is negative for real $z<1$ and positive for real $z>4$; a single-valued branch need not have a single sign.
:::

:::example[Values and orders]{provenance=original}
1. *Order three.* $z^{1/3}$ has a branch point of order $3$ at the origin: one counterclockwise circuit multiplies a value by $e^{2\pi i/3}$, two circuits by $e^{4\pi i/3}$, three by $1$. Starting from the value $2$ at $z = 8$ and going once round, we return with $2e^{2\pi i/3} = -1 + i\sqrt3$, whose cube is $8$ as well.
2. *A logarithm with two cuts, or one.* $g(z) = \ln\frac{z-1}{z+1}$ has branch points at $\pm 1$, each of infinite order, since a loop around $+1$ alone adds $2\pi i$ and a loop around $-1$ alone subtracts it. A loop around both adds $0$, so the finite cut $[-1,1]$ suffices; this is the cut taken for Legendre's functions of the second kind $Q_n$, the first of which is $Q_0(z) = \tfrac12\ln\frac{z+1}{z-1}$.
3. *Principal values on the cut.* With the convention $\operatorname{Arg} z \in (-\pi,\pi]$, the principal $\ln$ is defined at $z = -4$, with $\ln(-4) = \log 4 + i\pi \approx 1.386294 + 3.141593\,i$, but it is not continuous there: $\ln(-4 - i\varepsilon) \to \log 4 - i\pi$. The cut is the half-line where the function must be regarded as having two boundary values, differing by $2\pi i$.
:::

:::application{provenance=original}
Branch cuts are where the physics lives, not a technicality. Three examples.

- *Propagating versus evanescent waves.* A wave number $k = \sqrt{\omega^2/c^2 - \kappa^2}$, as a function of frequency, is a two-valued function with branch points at $\omega = \pm c\kappa$: the cut separates the propagating band from the evanescent one, and which branch of the square root is taken is fixed by the physical requirement of decay at infinity. The same choice appears in waveguides, in the Sommerfeld half-space problem and in the index of refraction of a plasma.
- *Thresholds in scattering.* A scattering amplitude, continued in the energy, has a branch point at each threshold where a new channel opens; the discontinuity across the cut is the production cross-section, by the optical theorem, and the sheet reached by crossing the cut carries the resonance poles. This is the setting of :ref[dispersion relations]{to=complex.dispersion-relations}, and the multi-sheeted picture is made precise by :ref[Riemann surfaces]{to=complex.riemann-surfaces}.
- *Integrals around a cut.* Because a branch is discontinuous across its cut, the two sides contribute with opposite signs rather than cancelling, and the resulting contour integral evaluates real integrals that elementary methods miss — for instance $\int_0^\infty x^{-s}/(1+x)\,dx$ via a keyhole contour (:ref[integrals with branch cuts]{to=complex.branch-cut-integrals}).

In numerical work the practical point is sharper still: library functions implement *principal* branches, so a formula assembled from them can be wrong by a sign or a factor $e^{2\pi i p}$ on part of the plane. The example above, where $\sqrt{z-1}\sqrt{z-4}$ turned out to be analytic across $(-\infty,1)$ although each factor is not, is the kind of check worth making before trusting such a formula.
:::
