---
id: complex.singularities
title: Classification of isolated singularities
kind: definition
level: core
summary: An isolated singularity is removable, a pole of finite order, or essential, according to whether the principal part of the Laurent series is empty, finite or infinite; equivalently according to whether the function stays bounded, tends to infinity, or comes arbitrarily close to every complex value.
prereqs: [complex.laurent-series, complex.taylor-series, complex.contour-integrals, found.power-series]
provenance: adapted
sources:
  - work: ahlfors-1979
    loc: "Ch. 4, §3.1, Thm 7 (removable singularities), p. 124; §3.2, poles, their order and singular part, meromorphic functions, the three cases via $\\lim \\lvert z-a\\rvert^{\\alpha}\\lvert f\\rvert$, and Thm 9 (Weierstrass), pp. 127-129"
    pages: "124-129"
    role: the removability criterion; definition of pole order and singular part; meromorphic functions; the classification; Casorati-Weierstrass and its proof route; the convention at infinity
  - work: arfken-2013
    loc: "§11.6, Singularities: poles and branch points, pp. 498-500; essential singularity of $e^{1/z}$, Exercise 11.6.1, p. 507"
    pages: "498-500, 507"
    role: physicists' terminology for poles and their order; the behaviour of $e^{1/z}$ at the origin
  - work: rhb-2006
    loc: "§24.6, Singularities and zeros of complex functions, pp. 838-839, and §24.11, principal part of a Laurent series, p. 855"
    pages: "838-839, 855"
    role: classification by the principal part of the Laurent expansion; behaviour at infinity by the substitution $z = 1/w$
  - work: hassani-2013
    loc: "§11.2, Classification of Isolated Singularities, the three types and the $e^{1/z}$ value-hitting construction, pp. 342-343; §12.1, meromorphic functions, p. 363"
    pages: "342-343, 363"
    role: cross-check of the definitions and of the classification; the construction solving $e^{1/z} = a$ at points accumulating at the origin; a narrower definition of "meromorphic" that we note but do not follow
---

:::note{provenance=original}
**What it means.** A single analytic function can fail in only a few ways at an isolated bad point, and the Laurent series sorts them out completely. If the negative powers are absent, the point was never bad: the function extends analytically across it. If finitely many negative powers appear, the function blows up like a fixed integer power -- a pole, and the familiar behaviour of a rational function. If infinitely many appear, the function behaves wildly: near such a point it comes arbitrarily close to *every* complex number. There is no fourth case and no fractional order. Branch points, which also look singular, are excluded here because they are not isolated singularities of a single-valued function (:ref[]{to=complex.branch-points-cuts}).
:::

:::definition[Isolated singularity]{provenance=adapted src="ahlfors-1979:Ch. 4, §3.2, p. 127"}
Let $f$ be analytic on a punctured disc $0 < \lvert z - z_0\rvert < \delta$. Then $z_0$ is an **isolated singularity** of $f$. By Laurent's theorem (:ref[]{to=complex.laurent-series}) applied to that punctured disc, $f$ has there a unique expansion

$$
f(z) \;=\; \underbrace{\sum_{n=0}^{\infty} a_n (z-z_0)^n}_{\text{regular part}} \;+\; \underbrace{\sum_{n=1}^{\infty} a_{-n}(z-z_0)^{-n}}_{\text{principal part}} .
$$

Note that nothing is assumed about $f$ *at* $z_0$: the function need not be defined there.
:::

:::definition[The three types]{provenance=adapted src="rhb-2006:§24.6, pp. 838-839; ahlfors-1979:Ch. 4, §3.2, pp. 128-129"}
With the notation above, $z_0$ is

- a **removable singularity** if $a_{-n} = 0$ for every $n \ge 1$ (the principal part is empty);
- a **pole of order $h$** ($h \ge 1$) if $a_{-h} \ne 0$ and $a_{-n} = 0$ for all $n > h$ (the principal part is a non-empty finite sum). A pole of order $1$ is **simple**, of order $2$ **double**, and so on. The finite sum $\sum_{n=1}^{h} a_{-n}(z-z_0)^{-n}$ is the **singular part** of $f$ at $z_0$;
- an **essential singularity** if $a_{-n} \ne 0$ for infinitely many $n \ge 1$.

The coefficient $a_{-1}$, in all three cases, is the **residue** of $f$ at $z_0$, written $\operatorname{Res}_{z = z_0} f$ (:ref[]{to=complex.residue-theorem}).

A function analytic on a region $\Omega$ except for poles is **meromorphic** on $\Omega$: every $a \in \Omega$ has a disc $\lvert z - a\rvert < \delta$ contained in $\Omega$ on which $f$ is either analytic throughout, or analytic on the punctured disc with a pole at $a$. Poles of a meromorphic function are isolated by this definition.
:::

:::definition[Behaviour at infinity]{provenance=adapted src="ahlfors-1979:Ch. 4, §3.2, p. 129; rhb-2006:§24.6, p. 839"}
If $f$ is analytic on $\lvert z\rvert > R$, the point at infinity is treated as an isolated singularity of $f$ by convention: $\infty$ is a removable singularity, a pole of order $h$, or an essential singularity of $f$ according as $z_0 = 0$ is a removable singularity, a pole of order $h$, or an essential singularity of

$$
g(w) \;=\; f(1/w) ,
\qquad 0 < \lvert w \rvert < 1/R .
$$

Equivalently, write the Laurent series of $f$ on $\lvert z\rvert > R$ as $\sum_{n \in \mathbb{Z}} a_n z^n$: then $\infty$ is removable if $a_n = 0$ for all $n \ge 1$, a pole of order $h$ if $a_h \ne 0$ and $a_n = 0$ for $n > h$, and essential otherwise. For a pole at infinity the singular part is a polynomial in $z$.
:::

:::statement[Riemann's criterion for removability]{provenance=adapted src="ahlfors-1979:Ch. 4, §3.1, Thm 7, p. 124"}
Let $f$ be analytic on $\Omega' = \Omega \setminus\{z_0\}$ for a region $\Omega$ containing $z_0$. There exists a function analytic on all of $\Omega$ agreeing with $f$ on $\Omega'$ if and only if

$$
\lim_{z \to z_0} (z - z_0)\, f(z) \;=\; 0 .
$$

The extension, when it exists, is unique. In particular, boundedness of $f$ near $z_0$ is sufficient.
:::

:::statement[Characterisation of the three types by behaviour]{provenance=adapted src="ahlfors-1979:Ch. 4, §3.2, pp. 127-129, Thm 9, p. 129"}
Let $z_0$ be an isolated singularity of $f$.

1. $z_0$ is removable $\iff$ $f$ is bounded on some punctured neighbourhood of $z_0$ $\iff$ $\lim_{z\to z_0} f(z)$ exists in $\mathbb{C}$.
2. $z_0$ is a pole $\iff$ $\lim_{z \to z_0} \lvert f(z)\rvert = \infty$. In that case the order $h$ is the unique integer for which $(z-z_0)^h f(z)$ has a removable singularity with non-zero limit, and
   $$
   f(z) \;=\; (z - z_0)^{-h}\, \varphi(z) \quad\text{with } \varphi \text{ analytic near } z_0,\ \varphi(z_0) \ne 0 .
   $$
   Equivalently, $1/f$ extends analytically with a zero of order exactly $h$ at $z_0$.
3. $z_0$ is essential $\iff$ neither of the above, i.e. $\lvert f\rvert$ is unbounded near $z_0$ but $\lvert f(z)\rvert$ does not tend to $\infty$.
4. **Casorati-Weierstrass.** If $z_0$ is an essential singularity, then $f$ comes arbitrarily close to every complex value in every neighbourhood of $z_0$: for every $A \in \mathbb{C}$, every $\varepsilon > 0$ and every $\delta > 0$ there is $z$ with $0 < \lvert z - z_0\rvert < \delta$ and $\lvert f(z) - A\rvert < \varepsilon$.

**No fractional orders.** If for some real $\alpha$ one has $\lim_{z \to z_0}\lvert z - z_0\rvert^{\alpha}\lvert f(z)\rvert = 0$, and for some other real $\alpha$ one has the limit $\infty$, then there is an *integer* $h$ such that the limit is $0$ for all $\alpha > h$ and $\infty$ for all $\alpha < h$. This $h$ is the **algebraic order** of $f$ at $z_0$: positive at a pole, negative at a zero, zero where $f$ is analytic and non-vanishing.
:::

:::idea{provenance=original}
Everything rests on Riemann's criterion, which turns an analytic question into a one-line limit. Its proof is a size estimate on the Laurent coefficients. Each $a_{-n}$ with $n \ge 1$ is an integral of $f(\zeta)(\zeta - z_0)^{n-1}$ over a circle of radius $r$, and the hypothesis $(z-z_0)f(z)\to0$ says precisely that $\lvert f\rvert$ is at most $\varepsilon/r$ on that circle once $r$ is small. The two factors of $r$ in the $ML$ bound -- one from the circumference, one from the hypothesis -- leave $\varepsilon r^{\,n-1} \le \varepsilon$. Since $\varepsilon$ is arbitrary, the whole principal part vanishes, and what remains is a power series, which converges on the full disc and supplies the missing value.

Given that, the pole case follows by inverting: if $\lvert f \rvert \to \infty$ then $1/f$ is small, hence bounded, hence extends with the value $0$, and a zero of an analytic function has a finite order (:ref[]{to=complex.taylor-series}). Taking $h$ to be that order and inverting again gives $f = (z-z_0)^{-h}\varphi$.

Casorati-Weierstrass is then a contradiction argument in one move: if $f$ stayed a distance $\varepsilon$ away from some value $A$, then $1/(f - A)$ would be bounded, so $A$ would be a removable singularity of... more precisely, $f - A$ would have a pole or a removable singularity at $z_0$, and so would $f$. That contradicts essentialness.
:::

:::proof{provenance=adapted src="ahlfors-1979:Ch. 4, §3.1-3.2, pp. 124-129"}
**Riemann's criterion.** *Necessity and uniqueness.* If an analytic $F$ on $\Omega$ agrees with $f$ off $z_0$, then $F$ is continuous at $z_0$, so $(z-z_0)f(z) = (z-z_0)F(z) \to 0 \cdot F(z_0) = 0$. Uniqueness holds because two continuous extensions must agree at $z_0$ by taking limits along $\Omega'$.

*Sufficiency.* Assume $(z-z_0)f(z) \to 0$. Pick $\delta > 0$ with the punctured disc $0 < \lvert z - z_0\rvert < \delta$ inside $\Omega$. On that punctured disc $f$ is analytic, so Laurent's theorem (:ref[]{to=complex.laurent-series}) gives a unique expansion $f(z) = \sum_{n\in\mathbb{Z}}a_n(z-z_0)^n$ with

$$
a_{-n} \;=\; \frac{1}{2\pi i}\oint_{\lvert \zeta - z_0\rvert = r} f(\zeta)\,(\zeta - z_0)^{n-1}\, d\zeta
\qquad (0 < r < \delta,\ n \ge 1).
$$

Let $\varepsilon > 0$. The hypothesis supplies $r_\varepsilon \in (0, \min(\delta,1))$ such that $\lvert (\zeta - z_0) f(\zeta)\rvert \le \varepsilon$, that is $\lvert f(\zeta)\rvert \le \varepsilon / r$, whenever $\lvert \zeta - z_0\rvert = r \le r_\varepsilon$. For such an $r$ the $ML$ estimate (:ref[]{to=complex.contour-integrals}) gives, for every $n \ge 1$,

$$
\lvert a_{-n}\rvert \;\le\; \frac{1}{2\pi}\cdot 2\pi r \cdot \frac{\varepsilon}{r}\cdot r^{\,n-1} \;=\; \varepsilon\, r^{\,n-1} \;\le\; \varepsilon ,
$$

using $r \le 1$. The coefficients do not depend on $r$, and $\varepsilon$ was arbitrary, so $a_{-n} = 0$ for every $n \ge 1$: the principal part is empty. Hence $f(z) = \sum_{n\ge0}a_n(z-z_0)^n$ on the punctured disc. A power series convergent at points of modulus arbitrarily close to $\delta$ converges on the whole disc $\lvert z - z_0\rvert < \delta$ and is analytic there (:ref[]{to=found.power-series}); call its sum $F$. Then $F$ is analytic on the full disc and equals $f$ off $z_0$, so patching $F$ on the disc with $f$ on $\Omega\setminus\{z_0\}$ gives the required extension.

**Part 1.** If $z_0$ is removable in the Laurent sense, the series $\sum_{n\ge0}a_n(z-z_0)^n$ converges on the full disc and defines an analytic extension, so $f$ has a finite limit and is bounded near $z_0$. Conversely, if $f$ is bounded, say $\lvert f \rvert \le M$ for $0 < \lvert z - z_0\rvert < \delta$, then $\lvert (z-z_0)f(z)\rvert \le M\lvert z - z_0\rvert \to 0$, so Riemann's criterion gives an analytic extension $F$; the Laurent coefficients of $f$ are then the Taylor coefficients of $F$ by uniqueness (:ref[]{to=complex.laurent-series}), so the principal part vanishes. Existence of a finite limit implies boundedness near $z_0$, closing the cycle.

**Part 2, pole $\Rightarrow$ blow-up.** If the principal part is the finite sum ending at $a_{-h} \ne 0$, then $(z-z_0)^h f(z) = \sum_{n \ge 0} a_{n-h}(z-z_0)^{n}$ has a removable singularity with value $a_{-h} \ne 0$ at $z_0$. Hence $\lvert f(z)\rvert = \lvert z-z_0\rvert^{-h}\lvert a_{-h} + O(z - z_0)\rvert \to \infty$.

**Part 2, blow-up $\Rightarrow$ pole.** Suppose $\lvert f(z)\rvert \to \infty$ as $z \to z_0$. Then there is $\delta' \le \delta$ with $\lvert f \rvert \ge 1$, in particular $f \ne 0$, on $0 < \lvert z - z_0\rvert < \delta'$. So $g = 1/f$ is analytic there and $\lvert g\rvert \le 1$, hence bounded; by Part 1 it extends analytically, and the extension has $g(z_0) = \lim 1/f = 0$. Since $g \not\equiv 0$, this zero has a finite order $h \ge 1$ and $g(z) = (z-z_0)^h g_h(z)$ with $g_h$ analytic and $g_h(z_0) \ne 0$ (:ref[]{to=complex.taylor-series}). Then $\varphi := 1/g_h$ is analytic and non-zero near $z_0$ and

$$
f(z) \;=\; \frac{1}{g(z)} \;=\; (z-z_0)^{-h}\varphi(z) .
$$

Expanding the analytic $\varphi$ in its Taylor series and multiplying by $(z-z_0)^{-h}$ produces a Laurent series whose principal part stops at $n = h$ with coefficient $\varphi(z_0) \ne 0$: a pole of order exactly $h$. The hypothesis $\lvert f\rvert\to\infty$ was used twice, to get $f \ne 0$ near $z_0$ and to get $g(z_0) = 0$.

**Part 3** is the definition of "neither", given that Parts 1 and 2 characterise the other two cases by behaviour.

**No fractional orders.** Suppose $\lim_{z\to z_0}\lvert z - z_0\rvert^{\alpha}\lvert f(z)\rvert = 0$ for some real $\alpha$, and (as the statement assumes) that $\lvert z-z_0\rvert^{\beta}\lvert f(z)\rvert \to \infty$ for some other real $\beta$. The first limit is $0$ for every larger exponent as well, hence for some integer $m \ge \alpha$. For that $m$, $(z-z_0)^{m}f(z)$ satisfies Riemann's criterion -- indeed $\lvert z - z_0\rvert^{m}\lvert f\rvert \to 0$, so multiplying by one more factor still tends to $0$ -- and so extends analytically with value $0$ at $z_0$. The extension cannot vanish identically: that would force $f \equiv 0$ on a punctured neighbourhood of $z_0$, and then $\lvert z-z_0\rvert^{\beta}\lvert f\rvert \equiv 0$ for every $\beta$, contradicting the second hypothesis. So the extension has a zero of some finite order $k \ge 1$ at $z_0$, giving $(z-z_0)^{m}f(z) = (z-z_0)^{k}\psi(z)$ with $\psi(z_0)\ne0$, so $f(z) = (z-z_0)^{k-m}\psi(z)$. Put $h = m - k$. Then $\lvert z-z_0\rvert^{\alpha}\lvert f\rvert \to 0$ for $\alpha > h$ and $\to\infty$ for $\alpha < h$, since the sign of $\alpha - h$ decides which power dominates and $\lvert \psi \rvert \to \lvert\psi(z_0)\rvert \ne 0$. In particular $\beta < h < \alpha$, and the integer $h$ is determined by the two families of exponents, so starting the argument from the exponent with limit $\infty$ produces the same $h$. (If no exponent gives either limit we are in the essential case, and the statement's hypothesis does not hold.)

**Part 4, Casorati-Weierstrass.** Let $z_0$ be essential and suppose, for a contradiction, that there are $A \in \mathbb{C}$, $\varepsilon > 0$ and $\delta' > 0$ with

$$
\lvert f(z) - A \rvert \;\ge\; \varepsilon \qquad\text{for } 0 < \lvert z - z_0\rvert < \delta' .
$$

Then $u = 1/(f - A)$ is analytic on that punctured disc and $\lvert u\rvert \le 1/\varepsilon$, so by Part 1 it extends analytically across $z_0$. If $u(z_0) \ne 0$ then $f - A = 1/u$ is bounded near $z_0$, so by Part 1 again $z_0$ is a removable singularity of $f - A$, hence of $f$. If $u(z_0) = 0$ then $\lvert 1/u \rvert \to \infty$, so $\lvert f - A\rvert \to \infty$, so $\lvert f \rvert \to \infty$, and by Part 2 $z_0$ is a pole of $f$. Either way $z_0$ is not essential -- a contradiction. $\square$
:::

:::remark[Where the hypotheses are used, and what the types look like]{provenance=original}
- **"Isolated" is essential.** The whole classification uses the existence of a punctured disc of analyticity, which is what Laurent's theorem needs. A branch point of $z^{1/2}$ at the origin is not an isolated singularity of a single-valued analytic function, so it is outside this scheme; so is the accumulation of poles of $1/\sin(\pi/z)$ at $z = 0$, since every punctured neighbourhood of $0$ contains poles $1/n$.
- **Riemann's criterion looks weaker than boundedness but is not.** Its hypothesis $(z-z_0)f(z)\to0$ is formally weaker than "$f$ bounded near $z_0$", and that is why it is the convenient thing to check: a crude estimate on $f$ suffices, with no need to know that $f$ is bounded. But by Part 1 the two conditions are equivalent for an isolated singularity, since each is equivalent to removability. So no analytic function on a punctured disc satisfies the criterion while being unbounded; in particular growth like $\log\lvert z-z_0\rvert^{-1}$ is impossible for such an $f$, however natural it looks as a borderline case. What the limit form does buy is the version with $(z-z_0)^{m}f(z)$ used in the "no fractional orders" argument, where boundedness of $f$ itself is not available.
- **"Meromorphic" is not used identically everywhere.** We follow Ahlfors (p. 128): analytic except for poles, of any order. :cite[Hassani]{work=hassani-2013 loc="§12.1, p. 363"} reserves the word for functions whose only singularities are *simple* poles, which is the class his pole-expansion theorem needs. Our statements about meromorphic functions are for the wider class.
- **Casorati-Weierstrass is sharp in one direction only.** It says the image of every punctured neighbourhood is dense in $\mathbb{C}$. It does not say the image is all of $\mathbb{C}$ minus at most one point; that stronger statement (Picard's theorem) is not proved here, and $e^{1/z}$, which omits the value $0$, shows that one exceptional value really can be omitted.
- **A pole at infinity means polynomial growth.** From the definition at infinity, an entire function with a pole of order $h$ at $\infty$ has a Laurent series on $\lvert z\rvert > 0$ with no negative powers (it is entire) and no powers above $h$, so it is a polynomial of degree $h$. Correspondingly $e^z$, whose expansion has arbitrarily high powers, has an essential singularity at infinity.
:::

:::example[Classifying every singularity of one function]{provenance=original}
Let

$$
f(z) \;=\; \frac{1 - \cos z}{z^{3}\,(z-2)} .
$$

**At $z = 0$.** Use $1 - \cos z = \tfrac12 z^{2} - \tfrac{1}{24}z^{4} + O(z^{6})$. Then

$$
f(z) \;=\; \frac{\tfrac12 z^{2}\bigl(1 - \tfrac{1}{12}z^{2} + O(z^4)\bigr)}{z^{3}(z-2)}
\;=\; \frac{1}{2z}\cdot\frac{1 - \tfrac{1}{12}z^2 + O(z^4)}{z - 2} .
$$

The second factor is analytic at $0$ with value $-\tfrac12$, so $z f(z) \to -\tfrac14$: a finite non-zero limit. Hence $z=0$ is a **simple pole**, not the triple pole the factor $z^{3}$ suggests, because the numerator has a double zero there. Its residue is $-\tfrac14$: expanding $1/(z-2) = -\tfrac12(1 + \tfrac z2 + \cdots)$,

$$
f(z) \;=\; \left(\frac{1}{2z} - \frac{z}{24} + \cdots\right)\left(-\frac12 - \frac z4 - \cdots\right)
\;=\; -\frac{1}{4z} - \frac18 + \cdots .
$$

**At $z = 2$.** The numerator $1 - \cos 2 = 1.4161468$ is non-zero and $z^3 = 8$, so $f$ has a **simple pole** with residue $(1-\cos 2)/8 = 0.1770184$.

**At $z = \infty$.** Substituting $z = 1/w$, $g(w) := f(1/w) = w^{4}(1-\cos(1/w))/(1 - 2w)$. Now $\cos(1/w)$ has an essential singularity at $w=0$: its Laurent series on $0<\lvert w\rvert<\infty$ is $\sum_{k\ge0}(-1)^k w^{-2k}/(2k)!$, with a non-zero coefficient at $w^{-2k}$ for every $k$, so infinitely many negative powers. Suppose $g$ had only finitely many negative powers on $0<\lvert w\rvert<1/2$, say none below $w^{-N}$. Then

$$
1 - \cos\frac1w \;=\; \frac{1-2w}{w^{4}}\,g(w) ,
$$

and multiplying a Laurent series with lowest power $w^{-N}$ by the analytic factor $1-2w$ and by $w^{-4}$ produces a Laurent series with lowest power $w^{-N-4}$: finitely many negative powers, contradicting the previous sentence. So $g$ has infinitely many negative powers and $\infty$ is an **essential singularity** of $f$. There are no other singularities, since $1-\cos z$ is entire.

**Numerical check of the residue at $0$.** Integrating $f$ over the circle $\lvert z\rvert = 0.3$ (which encloses only the singularity at $0$) and dividing by $2\pi i$ gives $-0.250000000$, matching $-\tfrac14$.
:::

:::example[A removable singularity, a double pole and an essential singularity side by side]{provenance=original}
Consider the three functions on punctured neighbourhoods of the origin.

1. $p(z) = (e^{2z} - 1)/z$. Since $e^{2z}-1 = 2z + 2z^2 + \tfrac43 z^3 + \cdots$, we get $p(z) = 2 + 2z + \tfrac43 z^2 + \cdots$: no principal part, so **removable**, with the extension $p(0) = 2$. Riemann's criterion is visible directly: $z\,p(z) = e^{2z}-1 \to 0$.
2. $q(z) = (1 - \cos z)/z^{4}$. From the same expansion of $1-\cos z$, $q(z) = \tfrac{1}{2}z^{-2} - \tfrac{1}{24} + \tfrac{1}{720}z^{2} - \cdots$. The principal part stops at $z^{-2}$, so a **double pole**, with $\operatorname{Res}_{0} q = 0$: a pole of order $2$ can perfectly well have zero residue. Consistently, $z^{2}q(z) \to \tfrac12 \ne 0$.
3. $r(z) = e^{1/z}$. Its Laurent series $\sum_{k\ge0} z^{-k}/k!$ has infinitely many negative powers: **essential**. The behaviour matches part 3 of the statement: along the positive real axis $r(x) = e^{1/x} \to \infty$, while along the negative real axis $r(-x) = e^{-1/x} \to 0$, so $\lvert r \rvert$ is unbounded yet does not tend to $\infty$. Casorati-Weierstrass is explicit here: to hit a target $A \ne 0$ exactly, solve $1/z = \operatorname{Log} A + 2\pi i k$, giving solutions $z_k \to 0$ as $k \to \infty$. (:cite[Hassani]{work=hassani-2013 loc="§11.2, p. 342"} makes the same construction for real targets; the numbers below are ours.) Taking $A = 1 + i$: $\operatorname{Log} A = \tfrac12\ln 2 + i\pi/4 = 0.3465736 + 0.7853982\,i$, and $k = 10$ gives $z_{10} = 1/(0.3465736 + 63.6172513\,i) = 0.0000856313 - 0.0157185402\,i$, with $\lvert z_{10}\rvert = 0.0157188$; evaluating $e^{1/z_{10}}$ returns $1 + i$ to full precision. Every neighbourhood of $0$, however small, contains such a point.
:::

:::application[Poles as resonances, essential singularities as a warning]{provenance=original}
The classification is not bookkeeping: in physics the type of a singularity carries the physics.

- **Poles of a response function are resonances and decay rates.** The retarded Green's function of a damped mode, continued to complex frequency, has simple poles at $\omega = \pm\omega_r - i\Gamma/2$. The real part of the pole position is the resonance frequency, the imaginary part the linewidth, and the residue the oscillator strength that appears in the sum rules. Fitting a measured lineshape is, in this language, locating a pole and measuring its residue.
- **Pole order counts degeneracy and multiplicity.** A double pole in a scattering amplitude signals two coincident resonances or a threshold effect; the statement above says the order is always a positive integer, which is why "half a pole" is never the right description of data and why an apparently fractional power law points instead to a branch point (:ref[]{to=complex.branch-points-cuts}).
- **Removable singularities are the ones to look for in a formula.** Expressions such as $(e^{2z}-1)/z$ above, or $\sin(kr)/(kr)$ in a scattering form factor, look singular and are not; a code that evaluates them naively will divide by zero at exactly the physically interesting point $k \to 0$. Riemann's criterion is the check that a finite limit exists, and the Taylor series of the extension is the stable way to evaluate it.
- **Essential singularities mark the breakdown of expansion.** The essential singularity of $e^{-1/g}$ at $g = 0$ is the standard model for a non-perturbative contribution: all its derivatives at $g = 0^{+}$ along the real axis vanish, so no perturbative order in $g$ ever sees it, while Casorati-Weierstrass says the function takes every value arbitrarily near $g = 0$ in the complex plane. Instanton and tunnelling contributions are detected exactly this way.
:::
