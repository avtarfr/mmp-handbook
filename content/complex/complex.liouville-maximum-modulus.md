---
id: complex.liouville-maximum-modulus
title: Liouville's theorem and the maximum modulus principle
kind: theorem
level: core
summary: "Cauchy's estimates bound the derivatives of an analytic function by the maximum of its modulus on a circle; a bounded entire function is therefore constant, every non-constant polynomial has a root, and the modulus of a non-constant analytic function attains its maximum only on the boundary."
prereqs: [complex.cauchy-integral-formula, found.compactness, found.connectedness-homotopy]
provenance: adapted
sources:
  - work: ahlfors-1979
    loc: "Ch. 4, §2.3, Eq. (25) with Liouville's theorem and the fundamental theorem of algebra, p. 122, and the advice on choosing r with Exercise 4, p. 123; §3.4, Thms 12 and 12' with Eqs. (34)–(35), pp. 134–135, and Thm 13 (Schwarz's lemma) with its rescaling, p. 135"
    pages: "122-123, 133-135"
    role: Cauchy's estimate from the derivative formula; Liouville and the deduction of the fundamental theorem of algebra; the choice of radius that makes the estimate sharpest, and the example on which we illustrate it; both forms of the maximum principle and both proofs of it (via the open mapping property and via the mean value property); the Schwarz-lemma bound |f(z)| <= M|z|/R used in the second example
  - work: rhb-2006
    loc: "§24.10, Eq. (24.49) and the following paragraph, p. 853"
    pages: "853"
    role: Cauchy's inequality for the nth derivative derived from the ML estimate, and Liouville's theorem obtained from it by letting the radius grow
  - work: arfken-2013
    loc: "§11.4, Further Applications, Eq. (11.37) and the following two paragraphs, p. 490"
    pages: "490"
    role: Cauchy's inequality for Taylor coefficients, Liouville's theorem, and the proof of the fundamental theorem of algebra by repeated division
  - work: hassani-2013
    loc: "§10.5, Prop. 10.5.4 (no local maximum of |f|), Prop. 10.5.5 (Liouville) and Thm 10.5.6 (fundamental theorem of algebra), pp. 317–318"
    pages: "317-318"
    role: the maximum principle stated in the local form we adopt; Liouville proved directly from the derivative formula on a circle of growing radius; the complete factorization of a polynomial by repeated division
---

:::statement[Cauchy's estimates, Liouville, and the maximum modulus principle]{provenance=adapted src="ahlfors-1979:Ch. 4, §2.3, Eq. (25) and p. 122, and §3.4, Thms 12 and 12', p. 134; rhb-2006:§24.10, Eq. (24.49), p. 853; arfken-2013:§11.4, Eq. (11.37), p. 490; hassani-2013:§10.5, Props. 10.5.4–10.5.5 and Thm 10.5.6, pp. 317–318"}
1. **Cauchy's estimate.** Let $f$ be analytic on a region containing the closed disk $\lvert z - a\rvert \le r$ and put $M(r) = \max_{\lvert z - a\rvert = r}\lvert f(z)\rvert$. Then

   $$
   \bigl\lvert f^{(n)}(a)\bigr\rvert \le \frac{n!\,M(r)}{r^{n}}, \qquad n = 0, 1, 2, \dots
   $$

2. **Liouville's theorem.** A function analytic on the whole plane and bounded there is constant.

3. **Fundamental theorem of algebra.** A polynomial $P$ of degree $n \ge 1$ with complex coefficients has a root; consequently it factors as $P(z) = a_n\prod_{k=1}^{n}(z - \lambda_k)$ and has exactly $n$ roots counted with multiplicity.

4. **Maximum modulus principle.** Let $f$ be analytic on a region (a connected open set) $\Omega$.

   (a) *Global form.* If there is $z_0 \in \Omega$ with $\lvert f(z)\rvert \le \lvert f(z_0)\rvert$ for every $z \in \Omega$, then $f$ is constant on $\Omega$. Equivalently, if $f$ is non-constant then $\lvert f\rvert$ has no maximum in $\Omega$.

   (b) *Local form.* If $\lvert f\rvert$ has a local maximum at $z_0 \in \Omega$ — that is, $\lvert f(z)\rvert \le \lvert f(z_0)\rvert$ for all $z$ in some disk about $z_0$ — then $f$ is constant on a disk about $z_0$. In particular $\lvert f\rvert$ has no *strict* local maximum anywhere in $\Omega$; the word "strict" is ours, and the next paragraph says why it is needed.

   Form (a) is how :cite[Ahlfors]{work=ahlfors-1979 loc="Thm 12, p. 134"} states the principle, with "non-constant" among the hypotheses. :cite[Hassani]{work=hassani-2013 loc="Prop. 10.5.4, p. 317"} states instead that $\lvert f\rvert$ cannot have a local maximum in the region of analyticity, with no exception made for constants. Read literally that is not the same as form (b) and it is not available to us: a constant $f$ has a (non-strict) local maximum of $\lvert f\rvert$ at every point. Form (b) is the conditional version — a local maximum is allowed, but only if $f$ is constant nearby — and it is what we prove and use. The proof below gives both forms, and (b) yields (a) once one knows that a function constant on a disk is constant on the whole region, which is the identity theorem (:ref[Taylor series]{to=complex.taylor-series}); we do not use that here and prove (a) directly.

5. **Boundary form.** If $E \subset \mathbb{C}$ is closed and bounded, $f$ is continuous on $E$ and analytic on the interior of $E$, then $\max_{E}\lvert f\rvert$ is attained at a point of the boundary of $E$. In particular, if $\lvert f\rvert \le M$ on the boundary then $\lvert f\rvert \le M$ throughout $E$.
:::

:::idea{provenance=original}
Everything here comes from one inequality applied to one formula. Cauchy's integral formula writes $f^{(n)}(a)$ as an average of $f$ over a circle against the kernel $(z-a)^{-n-1}$; the ML estimate turns that average into the product of the largest value of the integrand and the length of the circle, and the powers of $r$ do not cancel — they leave $r^{-n}$. So the derivatives of an analytic function cannot be large unless the function is large nearby, and the larger the circle one can use, the smaller the bound. Liouville is this read at $n=1$ with $r \to \infty$: if $M(r)$ never grows, $f'$ must vanish identically. The fundamental theorem of algebra follows because a polynomial without roots would have a bounded reciprocal.

The maximum principle is of a different flavour and has two proofs. The topological one: a non-constant analytic function maps open sets to open sets, so the image of a neighbourhood of $z_0$ contains a disk around $f(z_0)$, which contains points of larger modulus. The analytic one, which is self-contained here: the integral formula on a circle says $f(z_0)$ is the *average* of $f$ on the circle, and an average cannot have modulus larger than the largest value averaged unless all the values line up — so if $\lvert f(z_0)\rvert$ were maximal, $\lvert f\rvert$ would be constant on every small circle about $z_0$, hence near $z_0$, and then $f$ itself would be constant.
:::

:::proof[Parts 1 to 3]{provenance=adapted src="ahlfors-1979:Ch. 4, §2.3, p. 122; rhb-2006:§24.10, p. 853; arfken-2013:§11.4, p. 490"}
**Part 1.** Let $C$ be the positively oriented circle $\lvert z - a\rvert = r$, of length $2\pi r$. By :ref[Cauchy's integral formula for the derivatives]{to=complex.cauchy-integral-formula},

$$
f^{(n)}(a) = \frac{n!}{2\pi i}\oint_C \frac{f(z)}{(z-a)^{n+1}}\,dz .
$$

On $C$ the integrand has modulus $\lvert f(z)\rvert / r^{n+1} \le M(r)/r^{n+1}$, since $\lvert z - a\rvert = r$ exactly. The ML estimate (:ref[contour integrals]{to=complex.contour-integrals}) gives

$$
\bigl\lvert f^{(n)}(a)\bigr\rvert \le \frac{n!}{2\pi}\cdot\frac{M(r)}{r^{n+1}}\cdot 2\pi r = \frac{n!\,M(r)}{r^{n}} .
$$

**Part 2.** Let $f$ be entire with $\lvert f\rvert \le M$ everywhere, and let $a \in \mathbb{C}$. Then $M(r) \le M$ for every $r > 0$, so part 1 with $n = 1$ gives

$$
\lvert f'(a)\rvert \le \frac{M(r)}{r} \le \frac{M}{r} \qquad\text{for all } r > 0 .
$$

Here the hypothesis that $f$ is entire is used twice: to know that *every* $r$ is allowed, and that the bound $M$ holds on every circle. Letting $r \to \infty$ gives $f'(a) = 0$. As $a$ was arbitrary, $f' \equiv 0$ on $\mathbb{C}$, so $u_x = v_x = 0$ and, by the Cauchy-Riemann equations, $u_y = v_y = 0$ as well; a function with vanishing partial derivatives on the connected set $\mathbb{C}$ is constant.

**Part 3.** Let $P(z) = a_nz^n + \dots + a_0$ with $n \ge 1$ and $a_n \ne 0$, and suppose $P$ had no root. Then $g = 1/P$ is entire. For $\lvert z\rvert = R$,

$$
\lvert P(z)\rvert \ge \lvert a_n\rvert R^n - \sum_{k=0}^{n-1}\lvert a_k\rvert R^k \ge R^n\Bigl(\lvert a_n\rvert - \sum_{k=0}^{n-1}\frac{\lvert a_k\rvert}{R^{n-k}}\Bigr) \xrightarrow[R\to\infty]{} \infty ,
$$

by the triangle inequality, so $g(z) \to 0$ as $\lvert z\rvert \to \infty$. Choose $R_0$ with $\lvert g\rvert \le 1$ for $\lvert z\rvert \ge R_0$; on the compact disk $\lvert z\rvert \le R_0$ the continuous function $\lvert g\rvert$ is bounded by :ref[compactness]{to=found.compactness}. So $g$ is a bounded entire function, hence constant by part 2 — and the constant is $0$ because $g \to 0$, which is impossible since $g = 1/P$ never vanishes. Therefore $P$ has a root $\lambda_1$.

Dividing, $P(z) = (z - \lambda_1)Q(z)$ with $\deg Q = n - 1$: indeed $P(z) - P(\lambda_1) = P(z)$ is a linear combination of the terms $z^k - \lambda_1^k$, each divisible by $z - \lambda_1$. Repeating $n$ times reduces the degree to $0$ and gives the stated factorization, with the leading coefficient $a_n$; a product of linear factors vanishes exactly at the $\lambda_k$, so $P$ has no further roots. $\square$
:::

:::proof[Parts 4 and 5]{provenance=adapted src="ahlfors-1979:Ch. 4, §3.4, Thms 12 and 12' and Eqs. (34)–(35), pp. 133–135"}
**Part 4.** Steps 1 to 3 prove form (b); Step 4 then proves form (a). Let $f$ be analytic on the region $\Omega$ and suppose first only that $\lvert f\rvert$ has a local maximum at $z_0 \in \Omega$: there is $r_0 > 0$ with $\lvert f(z)\rvert \le \lvert f(z_0)\rvert$ whenever $\lvert z - z_0\rvert < r_0$, and we may shrink $r_0$ so that this disk lies in $\Omega$.

**Step 1 (the mean value property).** Choose $0 < r < r_0$, so that the closed disk $\lvert z - z_0\rvert \le r$ lies in $\Omega$ and in the disk where the maximality holds. By :ref[the mean value consequence of Cauchy's formula]{to=complex.cauchy-integral-formula},

$$
f(z_0) = \frac{1}{2\pi}\int_0^{2\pi}f\bigl(z_0 + \rho e^{i\theta}\bigr)\,d\theta \qquad\text{for every } 0 < \rho \le r ,
$$

and therefore, taking moduli,

$$
\lvert f(z_0)\rvert \le \frac{1}{2\pi}\int_0^{2\pi}\bigl\lvert f(z_0 + \rho e^{i\theta})\bigr\rvert\,d\theta . \tag{$\ast$}
$$

**Step 2 ($\lvert f\rvert$ is constant on small circles).** Put $h(\theta) = \lvert f(z_0)\rvert - \lvert f(z_0 + \rho e^{i\theta})\rvert$ for $0 < \rho \le r$. By the assumed local maximality, $h \ge 0$; and $h$ is continuous, since $f$ is. Rearranging $(\ast)$ gives $\frac{1}{2\pi}\int_0^{2\pi}h(\theta)\,d\theta \le 0$. A continuous non-negative function with non-positive integral vanishes identically, so $\lvert f\rvert = \lvert f(z_0)\rvert$ on every circle $\lvert z - z_0\rvert = \rho$ with $\rho \le r$, hence on the whole disk $D = \{\lvert z - z_0\rvert \le r\}$.

**Step 3 (constant modulus forces constant $f$; this proves form (b)).** On $D$ we have $u^2 + v^2 = c$ with $c = \lvert f(z_0)\rvert^2$. If $c = 0$ then $f \equiv 0$ on $D$. Otherwise differentiate: $uu_x + vv_x = 0$ and $uu_y + vv_y = 0$. Using the Cauchy-Riemann equations $u_y = -v_x$, $v_y = u_x$, the second becomes $-uv_x + vu_x = 0$. The two linear equations

$$
\begin{aligned}
u\,u_x + v\,v_x &= 0, \\
v\,u_x - u\,v_x &= 0
\end{aligned}
$$

in the unknowns $(u_x, v_x)$ have determinant $-(u^2+v^2) = -c \ne 0$, so $u_x = v_x = 0$ on $D$, and then $u_y = v_y = 0$ too. Hence $f$ is constant on $D$.

**Step 4 (form (a): spread the constancy over $\Omega$).** Assume now the global hypothesis: $\lvert f(z)\rvert \le \lvert f(z_0)\rvert$ for *every* $z \in \Omega$. Put $c_0 = f(z_0)$ and

$$
A = \{z \in \Omega : f(z) = c_0\} .
$$

- $A \ne \emptyset$, since $z_0 \in A$.
- $A$ is closed in $\Omega$: it is $f^{-1}(\{c_0\})$ and $f$ is continuous.
- $A$ is open. Let $z \in A$. Then $\lvert f(z)\rvert = \lvert c_0\rvert = \lvert f(z_0)\rvert$, and by the global hypothesis $\lvert f\rvert \le \lvert f(z)\rvert$ on all of $\Omega$, so $\lvert f\rvert$ certainly has a local maximum at $z$. By Steps 1 to 3 applied at $z$ in place of $z_0$, $f$ is constant on a disk about $z$, and that constant is $f(z) = c_0$; so this disk lies in $A$.

A non-empty subset of a connected set that is both open and closed in it is the whole set (:ref[connectedness]{to=found.connectedness-homotopy}), so $A = \Omega$ and $f \equiv c_0$ on $\Omega$.

**Part 5.** $E$ is closed and bounded and $\lvert f\rvert$ is continuous on it, so by :ref[compactness]{to=found.compactness} the maximum is attained, say at $z_0 \in E$. If $z_0 \in \partial E$, we are done. Otherwise $z_0$ lies in the interior of $E$; let $\Omega_0$ be the connected component of $\operatorname{int}E$ containing $z_0$, a region. Since $\lvert f\rvert \le \lvert f(z_0)\rvert$ on all of $E$, in particular near $z_0$, part 4 applies on $\Omega_0$ and $f$ is constant there, of modulus $\lvert f(z_0)\rvert$.

Now $\partial \Omega_0$ is non-empty, because $\Omega_0$ is a non-empty bounded open set, and $\partial\Omega_0 \subseteq \partial E$: if some $p \in \partial\Omega_0$ lay in $\operatorname{int}E$, take a disk $N \subseteq \operatorname{int}E$ about $p$; as $p$ is a limit of points of $\Omega_0$, the connected set $N$ meets $\Omega_0$, so $N \cup \Omega_0$ is a connected subset of $\operatorname{int}E$ and hence lies in the component $\Omega_0$; then $p \in \Omega_0$, which is open, contradicting $p \in \partial\Omega_0$. And $p \notin E$ is impossible because $\partial\Omega_0 \subseteq \overline{\Omega_0} \subseteq E$, $E$ being closed. So $p \in \partial E$.

By continuity of $f$ on $E$, $\lvert f\rvert = \lvert f(z_0)\rvert$ on $\overline{\Omega_0}$ and in particular at any point of $\partial\Omega_0 \subseteq \partial E$: the maximum is attained on the boundary of $E$ after all. The final sentence of part 5 is this statement rearranged. $\square$
:::

:::remark{provenance=original}
**Where the hypotheses are used, and how sharp the results are.**

- *"Entire" is essential in Liouville, not merely "analytic and bounded".* The function $f(z) = 1/(1-z)$ is analytic and bounded on the disk $\lvert z\rvert < \tfrac12$ but not constant: the proof needs arbitrarily large circles, which only an entire function provides. Likewise $e^{iz}$ is entire and bounded on the closed upper half-plane, and is not constant.
- *Boundedness cannot be weakened to "bounded on the real axis".* $\sin z$ is entire with $\lvert \sin x\rvert \le 1$ for real $x$, yet $\lvert \sin(10i)\rvert = \sinh 10 \approx 11013.23$. Part 2 demands a bound on the whole plane.
- *Polynomial growth gives polynomials.* If $f$ is entire with $\lvert f(z)\rvert \le A + B\lvert z\rvert^{p}$ for some $p \ge 0$, then part 1 with $n > p$ gives $\lvert f^{(n)}(0)\rvert \le n!(A + Br^{p})/r^{n} \to 0$, so $f^{(n)} \equiv 0$ for every $n > p$ (the same argument at every centre) and $f$ is a polynomial of degree at most $\lfloor p\rfloor$ — the floor, because $n$ runs over integers and the smallest integer exceeding $p$ is $\lfloor p \rfloor + 1$. Liouville is the case $p = 0$.
- *Cauchy's estimate is rarely sharp, and the choice of $r$ matters.* The advice to choose $r$ so as to minimise $M(r)r^{-n}$, and the example of a function whose maximum modulus blows up like $1/(R-r)$ at the edge of its disk of analyticity, are :cite[Ahlfors]{work=ahlfors-1979 loc="Ch. 4, §2.3, p. 123, with Exercise 4"}'s; the following numbers are ours. For $f(z) = 1/(2-z)$ on $\lvert z\rvert < 2$ we have $M(r) = 1/(2-r)$ and $f^{(n)}(0) = n!/2^{n+1}$ exactly. The bound is $n!/\bigl(r^{n}(2-r)\bigr)$, minimised at $r = 2n/(n+1)$: for $n = 1$ this gives $1$ against the true value $0.25$, and for $n=3$ it gives $3.556$ against $0.375$. The estimate is an order-of-magnitude tool.
- *The maximum principle says nothing about the minimum* unless $f$ has no zero: $\lvert z\rvert$ on the closed unit disk has its minimum at the interior point $0$. Applying part 4 to $1/f$ gives a minimum principle wherever $f \ne 0$.
- *"Region" means connected.* On a disconnected open set $f$ can be one constant on one piece and a larger constant on another, and then $\lvert f\rvert$ does attain a maximum. Step 4 of the proof is exactly where connectedness enters.
- *Real and imaginary parts obey the same principle.* For the real part, apply part 4 to $e^{f}$, which is analytic with $\lvert e^f\rvert = e^{\operatorname{Re}f}$: since $t \mapsto e^t$ is strictly increasing, a maximum of $\operatorname{Re}f$ is a maximum of $\lvert e^f\rvert$, so there is none unless $f$ is constant. For the imaginary part the right auxiliary function is $e^{-if}$, which has $\lvert e^{-if}\rvert = e^{\operatorname{Im}f}$; $e^{f}$ says nothing about $\operatorname{Im}f$. Either way this is the maximum principle for harmonic functions (:ref[harmonic functions]{to=pde.harmonic-functions}), and minima are covered by $e^{-f}$ and $e^{if}$.
:::

:::example[Cauchy's estimate, Liouville's theorem and a growth bound]{provenance=original}
1. *A numerical estimate.* Let $f(z) = 1/(2-z)$ and $a = 0$. On $\lvert z\rvert = 1$, $\lvert 2 - z\rvert \ge 1$, so $M(1) = 1$ (attained at $z = 1$) and part 1 gives $\lvert f'(0)\rvert \le 1$. The true value is $f'(z) = (2-z)^{-2}$, so $f'(0) = 0.25$: the bound holds with a factor of $4$ to spare, as it must since $\lvert f\rvert$ is far below $M(1)$ on most of the circle.
2. *A growth bound applied.* Suppose $f$ is entire with $\lvert f(z)\rvert \le 5 + 2\lvert z\rvert^{3/2}$ for all $z$. Take $n = 2$ in part 1 at any centre $a$: $\lvert f''(a)\rvert \le 2(5 + 2(\lvert a\rvert + r)^{3/2})/r^{2}$, and letting $r \to \infty$ with $a$ fixed gives $f''(a) = 0$. So $f'' \equiv 0$ and $f(z) = \alpha z + \beta$. The conclusion "degree at most $1$" cannot be improved to "constant", because one non-constant affine function does satisfy the hypothesis: $f(z) = z$ has $\lvert z\rvert \le 5 + 2\lvert z\rvert^{3/2}$ for every $z$ — for $\lvert z\rvert \le 5$ because the left side is then at most $5$, and for $\lvert z\rvert > 5$ because $2\lvert z\rvert^{3/2} > 2\sqrt5\,\lvert z\rvert > \lvert z\rvert$. (Most affine functions do *not* satisfy it: $f \equiv 100$ already fails at $z = 0$, where the bound is $5$. The hypothesis has fixed constants, so it is a genuine restriction on $\alpha$ and $\beta$; all that sharpness needs is one non-constant example.) Note what the growth exponent $\tfrac32$ buys: not a $\tfrac32$-power function, which is not entire, but a polynomial of degree $\lfloor \tfrac32\rfloor = 1$.
3. *An entire function cannot omit a disk.* Suppose $f$ is entire and its values avoid some disk: $\lvert f(z) - w_0\rvert \ge \delta > 0$ for all $z$, with $\delta>0$ fixed. Then $g = 1/(f - w_0)$ is entire, since the denominator never vanishes, and $\lvert g\rvert \le 1/\delta$ everywhere. By part 2, $g$ is constant, hence so is $f$. So the image of a non-constant entire function is dense in $\mathbb{C}$. The hypothesis really is about omitting a *disk* and not a point: $e^{z}$ is entire and non-constant and its image is exactly $\mathbb{C}\setminus\{0\}$, which omits one point but no disk. Concretely, $e^{z} = 10^{-6}$ is solved by $z = -6\log 10 \approx -13.815511$, so values arbitrarily close to the omitted point do occur.
:::

:::example[Maximum modulus on a square and a disk]{provenance=adapted src="ahlfors-1979:Ch. 4, §3.4, Thm 13 and the rescaling that follows it, p. 135 (item 3 only)"}
1. *An exact maximum.* Let $f(z) = z^2 - 2z$ on the closed unit disk $E = \{\lvert z\rvert \le 1\}$. By part 5 the maximum of $\lvert f\rvert$ is on $\lvert z\rvert = 1$, where $\lvert f(z)\rvert = \lvert z\rvert\,\lvert z - 2\rvert = \lvert z-2\rvert$. For $z = e^{i\theta}$, $\lvert z - 2\rvert^2 = 5 - 4\cos\theta$, maximal at $\theta = \pi$. So $\max_E \lvert f\rvert = 3$, attained at $z = -1$ and nowhere else; a scan of $1000$ points of the circle confirms the maximum $3.000000$ at $\theta = \pi$. At the interior point $0$, $\lvert f(0)\rvert = 0$.
2. *A bound obtained without computing anything.* Let $f(z) = e^{z}$ and $E = [0,1]\times[0,1]$, the closed unit square. Then $\lvert e^z\rvert = e^{\operatorname{Re}z} \le e$ on $E$, with equality exactly on the boundary edge $\operatorname{Re}z = 1$: the maximum $e \approx 2.718282$ is on $\partial E$, as part 5 requires, and no interior point comes close to it.
3. *A Schwarz-type estimate.* Suppose $g$ is analytic on an open set containing the closed disk $\lvert z\rvert \le 2$, with $\lvert g\rvert \le 10$ on the circle $\lvert z\rvert = 2$ and $g(0) = 0$. The conclusion is that

   $$
   \lvert g(z)\rvert \le 5\lvert z\rvert \ \text{ for } \lvert z\rvert \le 2,
   \qquad \lvert g'(0)\rvert \le 5 ,
   $$

   which is :cite[Ahlfors]{work=ahlfors-1979 loc="Thm 13 and the paragraph after it, p. 135"}'s Schwarz lemma with his bound $M$ set to $10$ and his radius $R$ to $2$, so that $M/R = 5$. His proof puts $h(z) = g(z)/z$ with $h(0) = g'(0)$ and calls that extension analytic; justifying the extension needs the removable-singularity theorem (:ref[isolated singularities]{to=complex.singularities}), which this unit does not have. The following route uses only parts 1 and 5 above, and works on annuli so that the point $0$ never has to be discussed.

   - *The derivative bound first.* Part 1 with $n = 1$, $a = 0$, $r = 2$ and $M(2) \le 10$ gives $\lvert g'(0)\rvert \le 1!\cdot 10/2 = 5$ outright.
   - *Boundary values of $h = g/z$ on an annulus.* Fix $0 < \varepsilon < 2$ and let $E_\varepsilon = \{\varepsilon \le \lvert z\rvert \le 2\}$. On $E_\varepsilon$ the function $h(z) = g(z)/z$ is continuous and, on the interior, analytic — the denominator does not vanish anywhere on $E_\varepsilon$, so no extension is needed. The boundary of $E_\varepsilon$ is the two circles $\lvert z\rvert = 2$, where $\lvert h\rvert = \lvert g\rvert/2 \le 5$, and $\lvert z\rvert = \varepsilon$, where $\lvert h\rvert \le M_g(\varepsilon)/\varepsilon$ with $M_g(\varepsilon) = \max_{\lvert z\rvert = \varepsilon}\lvert g\rvert$.
   - *The inner circle is harmless as $\varepsilon \to 0$.* Since $g(0) = 0$, the difference quotient $g(z)/z$ tends to $g'(0)$ as $z \to 0$, so $M_g(\varepsilon)/\varepsilon = \max_{\lvert z\rvert = \varepsilon}\lvert g(z)/z\rvert \to \lvert g'(0)\rvert \le 5$. Hence for any $\eta > 0$ there is $\varepsilon_\eta$ with $M_g(\varepsilon)/\varepsilon \le 5 + \eta$ for all $\varepsilon < \varepsilon_\eta$.
   - *Conclude.* By part 5 applied to $h$ on $E_\varepsilon$, $\lvert h\rvert \le \max\{5,\ M_g(\varepsilon)/\varepsilon\} \le 5 + \eta$ on all of $E_\varepsilon$, for every $\varepsilon < \varepsilon_\eta$. Any $z$ with $0 < \lvert z\rvert \le 2$ lies in $E_\varepsilon$ for all small enough $\varepsilon$, so $\lvert h(z)\rvert \le 5 + \eta$; letting $\eta \to 0$ gives $\lvert h(z)\rvert \le 5$, that is $\lvert g(z)\rvert \le 5\lvert z\rvert$, for every such $z$, and at $z = 0$ the inequality reads $0 \le 0$.

   Both bounds are attained: $g(z) = 5z$ has $\lvert g\rvert = 10$ on $\lvert z\rvert = 2$, $g(0) = 0$, $\lvert g(z)\rvert = 5\lvert z\rvert$ everywhere and $g'(0) = 5$.
:::

:::application{provenance=original}
- *Earnshaw's theorem.* An electrostatic potential $\Phi$ in a charge-free region is harmonic, and by the last bullet of the remark it has no interior maximum or minimum. A stable equilibrium of a point charge would require a strict minimum of its potential energy $q\Phi$ at an interior point, which is therefore impossible: no arrangement of fixed charges can trap a charged particle in stable static equilibrium. The same argument forbids static magnetic trapping of a paramagnetic particle and is why ion traps use oscillating fields (Paul trap) and why magnetic levitation needs diamagnets, superconductors or feedback.
- *No growth without singularities.* Liouville's theorem says a non-constant analytic function must either be unbounded or have a singularity somewhere, including possibly at infinity. In dispersion theory this is used in reverse: a response function that is analytic in a half-plane and tends to a constant at infinity is pinned down by its singularities, which are the resonances of the system (:ref[dispersion relations]{to=complex.dispersion-relations}). The statement that the only bounded entire functions are constants is also why a nontrivial scattering amplitude must have cuts or poles.
- *Stability and spectra.* The fundamental theorem of algebra guarantees that an $n\times n$ matrix has $n$ eigenvalues counted with multiplicity, which is the starting point of :ref[eigenvalues and eigenvectors]{to=linalg.eigenvalues-eigenvectors} and hence of normal-mode analysis and linear stability theory. Cauchy's estimate, applied to the resolvent, bounds how fast a matrix function can vary and underlies error bounds for contour-integral algorithms for $e^{tA}$ (:ref[the matrix exponential]{to=linalg.matrix-exponential}).
- *A maximum principle for diffusion.* The argument of part 4 is the complex-analytic ancestor of the maximum principles for elliptic and parabolic equations: the temperature inside a body with no internal sources never exceeds the maximum on its surface and at the initial time (:ref[the maximum principle for the heat equation]{to=pde.heat-maximum-principle}), which is what makes numerical schemes for diffusion stable when they respect it.
:::
