---
id: spec.legendre-polynomials
title: Legendre polynomials
kind: definition
level: core
summary: "The polynomial solutions of Legendre's equation, with the four descriptions that are used interchangeably in practice - the differential equation, Rodrigues' formula, the generating function and the three-term recurrence - together with their orthogonality on [-1, 1] and the normalisation 2/(2l+1)."
prereqs: [spec.orthogonal-polynomials-general, ode.frobenius-method, ode.sturm-liouville-theory]
provenance: adapted
sources:
  - work: rhb-2006
    loc: "§18.1 (Legendre functions), eqs. (18.1)–(18.4) and the series solution, pp. 577–578; §18.1.1, the termination of the series and the normalisation P_l(1) = 1 with the first six polynomials, pp. 578–579; §18.1.2, Rodrigues' formula (18.9) with its proof, pp. 581–582, the normalisation integral (18.11), p. 582, the direct proof of orthogonality (18.12), p. 583, the expansion (18.13)–(18.14), pp. 583–584, the generating function (18.15) with the proof that it solves Legendre's equation, pp. 584–585, the inverse-distance expansion (18.22), p. 585, the derivative recurrences (18.18)–(18.21), p. 585, and the collected recurrence relations (18.23)–(18.27), p. 586"
    pages: "577-586"
    role: the differential equation and its Frobenius solution; the integer-l termination; Rodrigues' formula and its proof by repeated differentiation of (x^2-1)^l; the norm 2/(2l+1); the direct Sturm-Liouville proof of orthogonality; the generating function and the derivation of the recurrences from it; the expansion coefficients; the multipole application
  - work: strauss-2008
    loc: "§10.6 (Legendre functions), the explicit coefficients (3) and the first six polynomials, p. 290, the recursion (4) and the orthogonality (5), p. 290, the proof of the normalising constant (6), pp. 290–291, Rodrigues' formula (7), p. 291, the section ZEROS with its Rolle's-theorem proof, p. 291, and the generating function (8) with its proof by the partial differential equation it satisfies, p. 292"
    pages: "290-292"
    role: the proof of the norm 2/(2l+1) from the recurrence alone (no integration by parts), the Rolle's-theorem proof that P_l has exactly l zeros in (-1, 1) and that its kth derivative has exactly l-k, and the derivation of the generating function from the partial differential equation it satisfies
  - work: kreyszig-1978
    loc: "§3.7-1 (Legendre polynomials), the Gram-Schmidt construction in L²[-1, 1], eqs. (1)–(2c), pp. 176–177, the proof of the norm and of orthogonality by repeated integration by parts, pp. 178–180, the totality proof via the Weierstrass approximation theorem, pp. 176–177, and the transplantation to L²[a, b], p. 180"
    pages: "176-180"
    role: the identification of the Legendre polynomials as the Gram-Schmidt orthogonalisation of the monomials in L²[-1, 1]; the orthonormal normalisation sqrt((2n+1)/2) P_n; the completeness of the system in L²[-1, 1] as a consequence of the density of polynomials
  - work: hassani-2013
    loc: "§8.4.3 (Legendre polynomials), the Rodriguez formula (8.19) with standardisation K_n = (-1)^n 2^n n!, p. 250, h_n = 2/(2n+1) and the recurrence (8.20) and equation (8.21)–(8.22) from the general theory, pp. 251–252; §8.5, Example 8.5.2 (delta function expansion) and P_n(0), pp. 256–257; §8.6, Table 8.2, p. 258"
    pages: "250-252, 256-258"
    role: Legendre polynomials as the mu = nu = 0 Jacobi case of the general Rodrigues construction, with the recurrence, the norm and the differential equation obtained by specialising the general coefficient formulas; the values P_n(0); the generating function as a table entry
  - work: arfken-2013
    loc: "§12.1, Example 12.1.3 (the generating function derived from the Schlaefli integral), pp. 557–558, and Table 12.1, p. 559"
    pages: "557-559"
    role: the derivation of the generating function by contour integration of the Rodrigues formula, and the summary table entry for Legendre
---

:::definition[Legendre's equation and the Legendre polynomials]{provenance=adapted src="rhb-2006:§18.1, eq. (18.1), p. 577, and §18.1.1, pp. 578–579; hassani-2013:§8.4.3, eqs. (8.19) and (8.22), pp. 250–252; strauss-2008:§10.6, eq. (7), p. 291"}
**Legendre's equation** is
$$
(1-x^{2})y''-2xy'+\ell(\ell+1)y=0 ,
\tag{L}
$$
with $\ell$ a given real parameter. Equivalently, in the Sturm-Liouville form of :ref[]{to=ode.sturm-liouville-theory},
$$
\frac{\mathrm{d}}{\mathrm{d}x}\Bigl[(1-x^{2})\frac{\mathrm{d}y}{\mathrm{d}x}\Bigr]+\ell(\ell+1)y=0 ,
$$
so $p=1-x^{2}$, $q=0$, weight $\rho=1$, eigenvalue $\lambda=\ell(\ell+1)$, on the natural interval $[-1,1]$. The equation has regular singular points at $x=-1,1,\infty$ and an ordinary point at $x=0$. Riley, Hobson and Bence call *any* solution of (L) a Legendre function; in applications $x=\cos\theta$ is the cosine of a polar angle, so $-1\le x\le1$.

For $\ell=n$ a non-negative integer, (L) has a polynomial solution of degree $n$, unique up to scale. The **Legendre polynomial** $P_{n}$ is that solution standardised by
$$
P_{n}(1)=1 .
$$
This standardisation forces $P_{n}(-1)=(-1)^{n}$. Explicitly,
$$
P_{0}=1,\quad
P_{1}=x,\quad
P_{2}=\tfrac12(3x^{2}-1),\quad
P_{3}=\tfrac12(5x^{3}-3x),
$$
$$
P_{4}=\tfrac18(35x^{4}-30x^{2}+3),\quad
P_{5}=\tfrac18(63x^{5}-70x^{3}+15x).
$$
The second solution of (L) for integer $\ell$ is an infinite series, singular at $x=\pm1$; it is the subject of :ref[]{to=spec.legendre-second-kind} and plays no part here.

In the language of :ref[]{to=spec.orthogonal-polynomials-general}, $(P_{n})$ is the orthogonal family on $(-1,1)$ for the weight $w\equiv1$, standardised at $x=1$ instead of monically. Kreyszig reaches it from the other end: he applies Gram-Schmidt to $1,x,x^{2},\dots$ in $L^{2}[-1,1]$ and identifies the output, up to the factor $\sqrt{(2n+1)/2}$ that makes it a unit vector, as $P_{n}$. Hassani reaches it as the Jacobi case $\mu=\nu=0$ of the general Rodrigues construction, with standardisation constant $K_{n}=(-1)^{n}2^{n}n!$.
:::

:::statement[The four descriptions and the orthogonality relation]{provenance=adapted src="rhb-2006:§18.1.2, eqs. (18.9), (18.11), (18.12), (18.15) and (18.23)–(18.27), pp. 581–586; strauss-2008:§10.6, eqs. (4)–(8), pp. 290–292; kreyszig-1978:§3.7-1, eqs. (2a)–(3), pp. 177–178; hassani-2013:§8.4.3, eqs. (8.19)–(8.20), pp. 250–252"}
Let $n,l,k$ denote non-negative integers. The following hold.

1. **Rodrigues' formula.**
   $$
   P_{l}(x)=\frac{1}{2^{l}\,l!}\,\frac{\mathrm{d}^{l}}{\mathrm{d}x^{l}}\bigl(x^{2}-1\bigr)^{l} .
   $$
   (Hassani writes the same thing as $(-1)^{l}(2^{l}l!)^{-1}\mathrm{d}^{l}(1-x^{2})^{l}/\mathrm{d}x^{l}$.)
2. **Generating function.** For $\lvert x\rvert\le1$ and $\lvert h\rvert<1$,
   $$
   G(x,h)=\bigl(1-2xh+h^{2}\bigr)^{-1/2}=\sum_{l=0}^{\infty}P_{l}(x)\,h^{l} .
   $$
   The closed endpoints $x=\pm1$ are included on the authority of Riley, Hobson and Bence, who evaluate $G(1,h)=(1-h)^{-1}$ on p. 585 and read the normalisation off it; Strauss states his eq. (8) for the open range $\lvert z\rvert<1$ (and then also sets $z=1$ in it).
3. **Three-term recurrence.**
   $$
   (l+1)P_{l+1}(x)=(2l+1)x\,P_{l}(x)-l\,P_{l-1}(x),
   \qquad P_{0}=1,\ P_{1}=x .
   $$
   Among the derivative recurrences, the ones most used are
   $$
   (1-x^{2})P_{l}'=l\bigl(P_{l-1}-xP_{l}\bigr),
   \qquad
   (2l+1)P_{l}=P_{l+1}'-P_{l-1}' .
   $$
4. **Orthogonality and normalisation.**
   $$
   \int_{-1}^{1}P_{l}(x)P_{k}(x)\,\mathrm{d}x=\frac{2}{2l+1}\,\delta_{lk} .
   $$
   Consequently $\bigl(\sqrt{(2l+1)/2}\,P_{l}\bigr)_{l\ge0}$ is orthonormal in $L^{2}[-1,1]$, and (Kreyszig) it is *total* there: every $f\in L^{2}[-1,1]$ has
   $$
   f=\sum_{l=0}^{\infty}a_{l}P_{l},
   \qquad
   a_{l}=\frac{2l+1}{2}\int_{-1}^{1}f(x)P_{l}(x)\,\mathrm{d}x ,
   $$
   the series converging in $L^{2}$. Riley, Hobson and Bence state the expansion for any $f$ satisfying the Dirichlet conditions of a Fourier series.
5. **Parity and zeros.** $P_{l}(-x)=(-1)^{l}P_{l}(x)$. Inside $(-1,1)$, $P_{l}$ has exactly $l$ zeros, all simple; and (Strauss) for $1\le k\le l$ the $k$th derivative $\mathrm{d}^{k}P_{l}/\mathrm{d}x^{k}$ has exactly $l-k$ zeros in $(-1,1)$, none of these derivatives vanishing at $x=\pm1$.
6. **Values at the ends and the centre.** $P_{l}(1)=1$, $P_{l}(-1)=(-1)^{l}$, and (Hassani)
   $$
   P_{2m}(0)=\frac{(-1)^{m}(2m)!}{2^{2m}(m!)^{2}},
   \qquad
   P_{2m+1}(0)=0 .
   $$
:::

:::idea{provenance=original}
The four descriptions are four ways to pin down "the degree-$l$ polynomial solution of (L) with value $1$ at $x=1$", and each proof is the same two moves: *show the candidate solves (L), then check it at $x=1$*. Uniqueness does the rest, because (L) has only a one-dimensional space of solutions regular at both ends.

For Rodrigues' formula the first move is Leibniz: $u=(x^{2}-1)^{l}$ satisfies the first-order relation $(x^{2}-1)u'=2lxu$, and differentiating that $l+1$ times turns it into (L) for $u^{(l)}$. For the generating function, differentiating $G$ in $x$ and in $h$ produces two identities between $\sum P_{l}h^{l}$ and $\sum P_{l}'h^{l}$; eliminating between them yields (L) term by term. The recurrence falls out of the same two identities without any extra work.

Orthogonality needs nothing about Legendre polynomials at all: it is the Sturm-Liouville argument, $\int(p y_{l}')'y_{k}-\int(py_{k}')'y_{l}$ integrated by parts, where the boundary terms die because $p=1-x^{2}$ vanishes at both ends. The *value* $2/(2l+1)$ is a separate computation, and there are two cheap routes: integrate Rodrigues' formula by parts $l$ times (Riley-Hobson-Bence, Kreyszig), or play the recurrence against itself (Strauss) and never integrate anything.
:::

:::proof[Rodrigues' formula]{provenance=adapted src="rhb-2006:§18.1.2, pp. 581–582; strauss-2008:§10.6, eq. (7) and Exercise 2, p. 291"}
Write $u=(x^{2}-1)^{l}$ and $u^{(m)}=\mathrm{d}^{m}u/\mathrm{d}x^{m}$.

**Step 1: a first-order relation.** Differentiating, $u'=2lx(x^{2}-1)^{l-1}$, hence
$$
(x^{2}-1)\,u' - 2l\,x\,u = 0 .
$$

**Step 2: differentiate it $l+1$ times.** Apply Leibniz's rule to each product. In $(x^{2}-1)u'$ only three terms survive, because $x^{2}-1$ has vanishing third derivative; in $xu$ only two:
$$
(x^{2}-1)u^{(l+2)}+(l+1)\cdot 2x\,u^{(l+1)}+\frac{(l+1)l}{2}\cdot2\,u^{(l)}
-2l\bigl[x\,u^{(l+1)}+(l+1)u^{(l)}\bigr]=0 .
$$
Collecting,
$$
(x^{2}-1)u^{(l+2)}+2x\,u^{(l+1)}-l(l+1)u^{(l)}=0 ,
$$
and multiplying by $-1$ this is precisely (L) with $y=u^{(l)}$ and $\ell=l$.

**Step 3: $u^{(l)}$ is a polynomial of degree $l$, regular at $\pm1$.** $u$ is a polynomial of degree $2l$, so $u^{(l)}$ is a polynomial of degree $l$; being a polynomial it is regular everywhere, in particular at the singular points $x=\pm1$ of (L). The space of such solutions is one-dimensional, so $u^{(l)}=c_{l}P_{l}$ for some constant $c_{l}$.

**Step 4: evaluate at $x=1$ to get $c_{l}$.** Write $u=(x-1)^{l}(x+1)^{l}$ and apply Leibniz:
$$
u^{(l)}=\sum_{r=0}^{l}\binom{l}{r}\frac{\mathrm{d}^{r}(x-1)^{l}}{\mathrm{d}x^{r}}\,\frac{\mathrm{d}^{l-r}(x+1)^{l}}{\mathrm{d}x^{l-r}} .
$$
At $x=1$ every term with $r<l$ carries a surviving positive power of $x-1$ and so vanishes; the term $r=l$ gives $l!\cdot(x+1)^{l}$, that is $l!\,2^{l}$. Hence $u^{(l)}(1)=2^{l}l!$, and since $P_{l}(1)=1$ we get $c_{l}=2^{l}l!$, which is Rodrigues' formula. $\square$
:::

:::proof[Generating function and recurrences]{provenance=adapted src="rhb-2006:§18.1.2, eqs. (18.15)–(18.27), pp. 584–586; strauss-2008:§10.6, eq. (8), p. 292"}
Let $G(x,h)=(1-2xh+h^{2})^{-1/2}$. For $\lvert x\rvert\le1$ the quadratic $1-2xh+h^{2}$ has no zero with $\lvert h\rvert<1$ (its roots are $x\pm\mathrm{i}\sqrt{1-x^{2}}$, of modulus $1$), so $G$ is analytic in $h$ on the unit disc and has a Taylor expansion $G=\sum_{l\ge0}Q_{l}(x)h^{l}$ there, with coefficients $Q_{l}$ to be identified.

**Step 1: two differentiated forms.** Differentiating $G$ gives
$$
\frac{\partial G}{\partial x}=h\,(1-2xh+h^{2})^{-3/2}=\sum_{l}Q_{l}'h^{l},
\qquad
\frac{\partial G}{\partial h}=(x-h)(1-2xh+h^{2})^{-3/2}=\sum_{l}lQ_{l}h^{l-1} .
$$

**Step 2: a relation with no fractional powers.** From the first display, $(1-2xh+h^{2})\sum_{l}Q_{l}'h^{l}=h\sum_{l}Q_{l}h^{l}$. Matching the coefficient of $h^{l+1}$,
$$
Q_{l}=Q_{l+1}'-2xQ_{l}'+Q_{l-1}' .
\tag{a}
$$

**Step 3: a second relation.** Dividing the two displays of Step 1 eliminates the $-3/2$ power: $(x-h)\sum_{l}Q_{l}'h^{l}=h\sum_{l}lQ_{l}h^{l-1}$. The coefficient of $h^{l}$ gives
$$
xQ_{l}'-Q_{l-1}'=lQ_{l} .
\tag{b}
$$

**Step 4: eliminate.** Read (b) as $Q_{l-1}'=xQ_{l}'-lQ_{l}$ and substitute it into (a); the term $Q_{l-1}'$ disappears and the two multiples of $xQ_{l}'$ combine to leave
$$
(l+1)Q_{l}=Q_{l+1}'-xQ_{l}' .
\tag{c}
$$
Now take (c) with $l$ replaced by $l-1$, that is $lQ_{l-1}=Q_{l}'-xQ_{l-1}'$, and subtract from it $x$ times (b), that is $lxQ_{l}=x^{2}Q_{l}'-xQ_{l-1}'$. The terms $xQ_{l-1}'$ cancel and
$$
l\bigl(Q_{l-1}-xQ_{l}\bigr)=Q_{l}'-x^{2}Q_{l}'=(1-x^{2})Q_{l}' .
\tag{d}
$$

**Step 5: (L).** Differentiate (d) and use (b) once more:
$$
(1-x^{2})Q_{l}''-2xQ_{l}'=l\bigl(Q_{l-1}'-xQ_{l}'-Q_{l}\bigr)=l\bigl(-lQ_{l}-Q_{l}\bigr)=-l(l+1)Q_{l},
$$
where the middle equality is (b) solved for $Q_{l-1}'-xQ_{l}'=-lQ_{l}$. So each $Q_{l}$ satisfies (L) with $\ell=l$.

**Step 6: identify $Q_{l}=P_{l}$.** Each $Q_{l}$ is a polynomial of degree $l$ (expand $G$ in powers of $2xh-h^{2}$ by the binomial series and collect; the coefficient of $h^{l}$ is a polynomial in $x$ of degree $l$), so it is regular at $x=\pm1$ and therefore a multiple of $P_{l}$. Setting $x=1$,
$$
G(1,h)=\bigl[(1-h)^{2}\bigr]^{-1/2}=\frac{1}{1-h}=\sum_{l\ge0}h^{l},
$$
so $Q_{l}(1)=1$ for every $l$, matching the standardisation. Hence $Q_{l}=P_{l}$, which proves part 2, and (b), (c), (d) become the derivative recurrences of part 3.

*(Strauss obtains Step 5 in one stroke instead: $G$ satisfies the partial differential equation $[(1-x^{2})G_{x}]_{x}+h(hG)_{hh}=0$, and inserting the expansion makes each coefficient satisfy (L). Arfken, Weber and Harris go the opposite way, starting from Rodrigues' formula, converting the $l$-fold derivative into Cauchy's integral — the Schlaefli integral — summing the resulting geometric series in $h$ and evaluating one residue.)*

**Step 7: the three-term recurrence.** Substitute $\sum P_{l}h^{l}=(1-2xh+h^{2})^{-1/2}$ into $\partial G/\partial h$ from Step 1, so that
$$
(x-h)\sum_{l}P_{l}h^{l}=(1-2xh+h^{2})\sum_{l}lP_{l}h^{l-1} .
$$
The coefficient of $h^{l}$ on the left is $xP_{l}-P_{l-1}$; on the right it is $(l+1)P_{l+1}-2xlP_{l}+(l-1)P_{l-1}$. Equating and rearranging,
$$
(l+1)P_{l+1}=(2l+1)xP_{l}-lP_{l-1} . \qquad\square
$$
:::

:::proof[Orthogonality and the value of the norm]{provenance=adapted src="rhb-2006:§18.1.2, pp. 582–583; strauss-2008:§10.6, eq. (6), pp. 290–291; kreyszig-1978:§3.7-1, pp. 179–180"}
**Orthogonality.** Let $l\neq k$. Both $P_{l}$ and $P_{k}$ satisfy (L), written in Sturm-Liouville form; multiply the equation for $P_{l}$ by $P_{k}$ and integrate over $[-1,1]$:
$$
\int_{-1}^{1}P_{k}\bigl[(1-x^{2})P_{l}'\bigr]'\mathrm{d}x+l(l+1)\int_{-1}^{1}P_{k}P_{l}\,\mathrm{d}x=0 .
$$
Integrate the first term by parts. The boundary term is $\bigl[(1-x^{2})P_{k}P_{l}'\bigr]_{-1}^{1}=0$, because the factor $1-x^{2}$ vanishes at both ends while $P_{k}$ and $P_{l}'$ are finite there — this is precisely where the regularity of $P_{l}$ at $x=\pm1$ is used. So
$$
-\int_{-1}^{1}(1-x^{2})P_{k}'P_{l}'\,\mathrm{d}x+l(l+1)\int_{-1}^{1}P_{k}P_{l}=0 .
$$
Now swap the roles of $l$ and $k$ and subtract: the first integral is symmetric and cancels, leaving
$$
\bigl[l(l+1)-k(k+1)\bigr]\int_{-1}^{1}P_{k}P_{l}\,\mathrm{d}x=0 .
$$
Since $l\neq k$ are non-negative integers, $l(l+1)\neq k(k+1)$, so the integral vanishes. (Taking $k=0$ gives the frequently used $\int_{-1}^{1}P_{l}=0$ for $l\ge1$.) Alternatively this is immediate from part 3 of :ref[]{to=spec.orthogonal-polynomials-general} once $P_{l}$ is known to be the orthogonal family for $w\equiv1$; Kreyszig proves it directly by showing $\int_{-1}^{1}x^{m}P_{l}\,\mathrm{d}x=0$ for $m<l$ through $m$ integrations by parts of Rodrigues' formula.

**The norm, by the recurrence (Strauss's route).** Write $(f,g)=\int_{-1}^{1}fg$. Take the inner product of the three-term recurrence $(l+1)P_{l+1}=(2l+1)xP_{l}-lP_{l-1}$ with $P_{l-1}$. Orthogonality kills $(P_{l+1},P_{l-1})$, leaving
$$
0=(2l+1)(xP_{l},P_{l-1})-l\,(P_{l-1},P_{l-1}) .
$$
Next write the recurrence with $l$ replaced by $l-1$, namely $lP_{l}=(2l-1)xP_{l-1}-(l-1)P_{l-2}$, and take its inner product with $P_{l}$; now $(P_{l-2},P_{l})=0$ and
$$
l\,(P_{l},P_{l})=(2l-1)(xP_{l-1},P_{l}) .
$$
The two mixed terms are the same number, since $(xP_{l},P_{l-1})=(xP_{l-1},P_{l})$. Eliminating it,
$$
(2l+1)(P_{l},P_{l})=(2l-1)(P_{l-1},P_{l-1}),
$$
valid for $l\ge1$. So $(2l+1)(P_{l},P_{l})$ does not depend on $l$; at $l=0$ it equals $1\cdot\int_{-1}^{1}1\,\mathrm{d}x=2$. Hence $(P_{l},P_{l})=2/(2l+1)$, which with the orthogonality is part 4. No integration by parts was needed.

**The same number, by Rodrigues' formula.** Riley, Hobson and Bence instead put Rodrigues' formula into both factors and integrate by parts $l$ times; every boundary term carries an undifferentiated factor $x^{2}-1$ and dies, so
$$
\int_{-1}^{1}P_{l}^{2}
=\frac{(-1)^{l}}{2^{2l}(l!)^{2}}\int_{-1}^{1}(x^{2}-1)^{l}\frac{\mathrm{d}^{2l}}{\mathrm{d}x^{2l}}(x^{2}-1)^{l}\,\mathrm{d}x
=\frac{(2l)!}{2^{2l}(l!)^{2}}\int_{-1}^{1}(1-x^{2})^{l}\,\mathrm{d}x ,
$$
using $\mathrm{d}^{2l}(x^{2}-1)^{l}/\mathrm{d}x^{2l}=(2l)!$. The remaining integral $K_{l}=\int_{-1}^{1}(1-x^{2})^{l}$ satisfies $(2l+1)K_{l}=2lK_{l-1}$ (integrate by parts against the constant $1$ and write $2x^{2}=2-2(1-x^{2})$), whence $K_{l}=2^{2l+1}(l!)^{2}/(2l+1)!$ and the product is $2/(2l+1)$ again.

**Completeness.** Kreyszig's argument: polynomials are dense in $C[-1,1]$ in the supremum norm by the Weierstrass approximation theorem, $C[-1,1]$ is dense in $L^{2}[-1,1]$, and $\operatorname{span}\{P_{0},\dots,P_{m}\}$ is the set of polynomials of degree $\le m$. So the orthonormal system $\sqrt{(2l+1)/2}\,P_{l}$ has dense span, which is totality; see :ref[]{to=funcan.orthonormal-bases}. Part 4's expansion and coefficient formula follow by taking the inner product of the series with $P_{k}$ term by term. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
**$\ell$ an integer.** Nothing else makes the Frobenius series terminate. Riley, Hobson and Bence solve (L) at the ordinary point $x=0$ and find the two-step recurrence
$$
a_{n+2}=\frac{n(n+1)-\ell(\ell+1)}{(n+1)(n+2)}\,a_{n} ,
$$
whose numerator vanishes at $n=\ell$ exactly when $\ell$ is a non-negative integer. Both series otherwise continue for ever, with radius of convergence $1$ — the distance to the nearest singular point — and both diverge at $x=\pm1$. So for non-integer $\ell$ there is *no* solution of (L) bounded on the closed interval $[-1,1]$, which is why in a physical problem on a full sphere the separation constant is forced to be $\ell(\ell+1)$ with $\ell$ integral.

**Regularity at $x=\pm1$.** Used three times: in Step 3 of the Rodrigues proof and Step 6 of the generating-function proof, to identify a candidate with $P_{l}$ rather than with some mixture of $P_{l}$ and the second solution; and in the orthogonality proof, to kill the boundary term. Without it orthogonality genuinely fails, and it fails for the boundary term's sake and not for want of integrability. Take the second solution at $\ell=0$,
$$
Q_{0}(x)=\tfrac12\ln\frac{1+x}{1-x}=\operatorname{artanh}x .
$$
Its singularity at $x=\pm1$ is only logarithmic, so $Q_{0}$ is perfectly square integrable: $\int_{-1}^{1}Q_{0}^{2}\,\mathrm{d}x=\pi^{2}/6=1.644934\ldots$, a convergent integral. What goes wrong is the one step the proof cannot do without. Since $Q_{0}'=(1-x^{2})^{-1}$, the product
$$
(1-x^{2})Q_{0}'=1
$$
*identically*, so the factor $1-x^{2}$ no longer quenches anything and the boundary term survives. Running the Sturm-Liouville argument on the pair $P_{1}=x$ and $Q_{0}$, with eigenvalues $\lambda_{1}=2$ and $\lambda_{0}=0$,
$$
(\lambda_{1}-\lambda_{0})\int_{-1}^{1}P_{1}Q_{0}\,\mathrm{d}x
=\Bigl[(1-x^{2})\bigl(P_{1}Q_{0}'-Q_{0}P_{1}'\bigr)\Bigr]_{-1}^{1}
=\bigl[x-(1-x^{2})\operatorname{artanh}x\bigr]_{-1}^{1}=2 ,
$$
the second piece vanishing at both ends because the linear factor beats the logarithm: $(1-x^{2})\operatorname{artanh}x\to0$ as $x\to\pm1$. Hence $\int_{-1}^{1}P_{1}Q_{0}\,\mathrm{d}x=1$, not $0$: two solutions of (L) with different eigenvalues, both square integrable, and not orthogonal. Regularity at $x=\pm1$, not integrability, is the hypothesis doing the work.

**$p=1-x^{2}$ vanishing at both ends.** This is what makes $[-1,1]$ the natural interval and makes the Sturm-Liouville problem singular-but-self-adjoint with no boundary conditions imposed by hand. On a sub-interval $[-1,c]$ with $c<1$ the boundary term at $c$ does not vanish and the $P_{l}$ are *not* orthogonal there; the correct family for $[a,b]$ is Kreyszig's affine transplant $P_{l}\bigl(1+2\frac{x-b}{b-a}\bigr)$.

**$\lvert h\rvert<1$ in the generating function.** The series is a Taylor series about $h=0$ and the nearest singularity of $G$ in $h$ sits at modulus $1$ for $\lvert x\rvert\le 1$. This is the reason the multipole expansion in the application below must be organised with the *smaller* radius in the numerator; swapping the two radii gives a divergent series, not a wrong one.

**Convergence of the expansion.** Part 4 is an $L^{2}$ statement, and that is all the orthonormality plus totality gives. Pointwise or uniform convergence is a separate question, settled by the Dirichlet-type conditions Riley, Hobson and Bence invoke; a jump in $f$ produces the same overshoot near the jump as in a Fourier series.
:::

:::method[Computing with Legendre polynomials]{provenance=original}
1. **To tabulate or evaluate $P_{l}(x)$:** never differentiate Rodrigues' formula and never sum the explicit coefficient series. Start from $P_{0}=1$, $P_{1}=x$ and iterate
   $$
   P_{l+1}=\frac{(2l+1)x\,P_{l}-l\,P_{l-1}}{l+1} .
   $$
   Each step costs one multiplication and one subtraction. Upward iteration is numerically safe on $\lvert x\rvert\le1$, though not because the coefficients are small or of one sign — the $P_{l-1}$ term enters with a minus sign, and $(2l+1)x/(l+1)$ is negative throughout $x<0$. The reason is that on $[-1,1]$ the two solutions of this recurrence, $P_{l}$ and the second-kind solution $Q_{l}$, are of the same order of magnitude: each decays only like $l^{-1/2}$, with oscillating sign. So an upward sweep never has to recover a solution that is exponentially small against its companion, and a rounding error made at step $l$ stays a rounding error. (Outside $[-1,1]$, where $P_{l}$ grows and $Q_{l}$ decays, the same recurrence is stable upward for $P_{l}$ and useless upward for $Q_{l}$.) Note also $\lvert P_{l}(x)\rvert\le1$ on $[-1,1]$, so nothing overflows.
2. **To expand a given $f$ on $[-1,1]$:** compute $a_{l}=\tfrac{2l+1}{2}\int_{-1}^{1}fP_{l}$. Use the parity rule first: if $f$ is even, every odd $a_{l}$ vanishes, and conversely, which halves the work.
3. **To expand a polynomial exactly:** match from the top down. The coefficient of $x^{N}$ in $P_{N}$ is $(2N)!/[2^{N}(N!)^{2}]$; subtract the right multiple of $P_{N}$, and repeat on the remainder, which now has degree $\le N-1$. This is exact arithmetic and avoids every integral.
4. **To differentiate or integrate an expansion:** use $(2l+1)P_{l}=P_{l+1}'-P_{l-1}'$, which integrates to $\int P_{l}=\bigl(P_{l+1}-P_{l-1}\bigr)/(2l+1)$ up to a constant, and $(1-x^{2})P_{l}'=l(P_{l-1}-xP_{l})$ for the derivative.
5. **To solve a boundary-value problem on a sphere with azimuthal symmetry:** expand the boundary data in $P_{l}(\cos\theta)$ and match coefficient by coefficient against the general separated solution $\sum_{l}(A_{l}r^{l}+B_{l}r^{-l-1})P_{l}(\cos\theta)$; see :ref[]{to=pde.separation-of-variables}.
:::

:::example[Expanding $x^{4}$, and five values of $P_{l}$ at $x=0.3$]{provenance=original}
**Part 1: the expansion of $x^{4}$.** The function $x^{4}$ is even and of degree $4$, so only $a_{0},a_{2},a_{4}$ can be nonzero. Work from the top, as in step 3 of the method. The leading coefficient of $P_{4}=\tfrac18(35x^{4}-30x^{2}+3)$ is $35/8$, so
$$
x^{4}-\frac{8}{35}P_{4}=x^{4}-\Bigl(x^{4}-\frac{30}{35}x^{2}+\frac{3}{35}\Bigr)=\frac{6}{7}x^{2}-\frac{3}{35}.
$$
The leading coefficient of $P_{2}=\tfrac12(3x^{2}-1)$ is $3/2$, so subtract $\tfrac67\cdot\tfrac23=\tfrac47$ times $P_{2}$:
$$
\frac{6}{7}x^{2}-\frac{3}{35}-\frac{4}{7}\cdot\frac{3x^{2}-1}{2}
=\frac{6}{7}x^{2}-\frac{3}{35}-\frac{6}{7}x^{2}+\frac{2}{7}
=-\frac{3}{35}+\frac{10}{35}=\frac{1}{5}.
$$
Hence
$$
x^{4}=\frac{8}{35}P_{4}(x)+\frac{4}{7}P_{2}(x)+\frac{1}{5}P_{0}(x).
$$

**Check the top coefficient by the integral formula.** By part 4,
$$
a_{4}=\frac{9}{2}\int_{-1}^{1}x^{4}P_{4}(x)\,\mathrm{d}x
=\frac{9}{2}\cdot\frac{1}{8}\int_{-1}^{1}\bigl(35x^{8}-30x^{6}+3x^{4}\bigr)\mathrm{d}x
=\frac{9}{16}\Bigl(\frac{70}{9}-\frac{60}{7}+\frac{6}{5}\Bigr).
$$
With denominator $315$: $\tfrac{70}{9}=\tfrac{2450}{315}$, $\tfrac{60}{7}=\tfrac{2700}{315}$, $\tfrac65=\tfrac{378}{315}$, so the bracket is $\tfrac{2450-2700+378}{315}=\tfrac{128}{315}$ and
$$
a_{4}=\frac{9}{16}\cdot\frac{128}{315}=\frac{1152}{5040}=\frac{8}{35} ,
$$
agreeing with the algebraic route. As a further check, Parseval in the orthogonal basis must reproduce $\int_{-1}^{1}x^{8}\mathrm{d}x=\tfrac29$:
$$
\sum_{l}a_{l}^{2}\frac{2}{2l+1}
=\frac{2}{1}\Bigl(\frac15\Bigr)^{2}+\frac{2}{5}\Bigl(\frac47\Bigr)^{2}+\frac{2}{9}\Bigl(\frac{8}{35}\Bigr)^{2}
=\frac{2}{25}+\frac{32}{245}+\frac{128}{11025} .
$$
Over $11025$: $\tfrac{2}{25}=\tfrac{882}{11025}$, $\tfrac{32}{245}=\tfrac{1440}{11025}$, and $882+1440+128=2450$, so the sum is $\tfrac{2450}{11025}=\tfrac{2}{9}$. Exactly right.

**Part 2: the recurrence at $x=0.3$.** Start from $P_{0}=1$, $P_{1}=0.3$ and iterate $P_{l+1}=\bigl[(2l+1)(0.3)P_{l}-lP_{l-1}\bigr]/(l+1)$:
$$
P_{2}=\frac{3(0.3)(0.3)-1}{2}=\frac{0.27-1}{2}=-0.365=-\frac{73}{200},
$$
$$
P_{3}=\frac{5(0.3)(-0.365)-2(0.3)}{3}=\frac{-0.5475-0.6}{3}=-0.3825=-\frac{153}{400},
$$
$$
P_{4}=\frac{7(0.3)(-0.3825)-3(-0.365)}{4}=\frac{-0.803250+1.095}{4}=0.0729375,
$$
$$
P_{5}=\frac{9(0.3)(0.0729375)-4(-0.3825)}{5}=\frac{0.196931250+1.53}{5}=0.34538625 .
$$
Compare with the closed forms: $P_{4}(0.3)=\tfrac18\bigl(35(0.0081)-30(0.09)+3\bigr)=\tfrac18(0.2835-2.7+3)=\tfrac18(0.5835)=0.0729375$ and $P_{5}(0.3)=\tfrac18\bigl(63(0.00243)-70(0.027)+15(0.3)\bigr)=\tfrac18(0.15309-1.89+4.5)=\tfrac18(2.76309)=0.34538625$. The recurrence and the explicit polynomials agree to the last digit, and as rationals $P_{5}(3/10)=276309/800000$. Every number here was checked symbolically.
:::

:::application{provenance=adapted src="rhb-2006:§18.1.2, eq. (18.22) and the electrostatic potential that follows it, pp. 585–586; hassani-2013:§8.5, Example 8.5.2, pp. 256–257"}
**The inverse-distance expansion, and multipoles.** Put $h=r'/r$ and $x=\cos\theta$ in the generating function, where $\theta$ is the angle between two position vectors of lengths $r'<r$. Since $\lvert\mathbf{r}-\mathbf{r}'\rvert^{2}=r^{2}+r'^{2}-2rr'\cos\theta$,
$$
\frac{1}{\lvert\mathbf{r}-\mathbf{r}'\rvert}
=\frac{1}{r}\Bigl[1-2\frac{r'}{r}\cos\theta+\Bigl(\frac{r'}{r}\Bigr)^{2}\Bigr]^{-1/2}
=\frac{1}{r}\sum_{l=0}^{\infty}\Bigl(\frac{r'}{r}\Bigr)^{l}P_{l}(\cos\theta) .
$$
Riley, Hobson and Bence read off at once the potential of a point charge $q$ at $\mathbf{r}'$,
$$
V(\mathbf{r})=\frac{q}{4\pi\varepsilon_{0}r}\sum_{l\ge0}\Bigl(\frac{r'}{r}\Bigr)^{l}P_{l}(\cos\theta),
$$
whose $l=0$ term is the familiar $q/(4\pi\varepsilon_{0}r)$. Integrating over a charge distribution turns the $l$th term into the $l$th multipole moment: this expansion *is* the multipole expansion (:ref[]{to=pde.multipole-expansion}), and it is why "monopole, dipole, quadrupole" are indexed by Legendre order. The same formula with $r$ and $r'$ exchanged is needed when the field point is the nearer one — a consequence of the $\lvert h\rvert<1$ restriction, not an extra convention. The gravitational version is the standard description of the Earth's, Moon's and Mars's external fields, and the geodetic coefficients $J_{2}$ (the equatorial bulge) and its successors are exactly the coefficients of this series.

**Angular momentum and selection rules.** With $x=\cos\theta$, the Legendre polynomials are the $m=0$ angular wavefunctions of any central-force problem: they are the $\theta$-dependence of the $s$, $p_{z}$, $d_{z^{2}},\dots$ orbitals, and the orthogonality relation of part 4 is what makes states of different $l$ non-interacting. The three-term recurrence, rewritten as a statement about $\cos\theta\,P_{l}$, is the origin of the dipole selection rule $\Delta l=\pm1$: multiplying by $\cos\theta$ can only move a state to its two neighbours in $l$. Extending this to $m\neq0$ is the business of :ref[]{to=spec.associated-legendre} and :ref[]{to=spec.spherical-harmonics}.

**Approximation, filtering and quadrature.** Truncating the Legendre expansion is the optimal degree-$N$ polynomial approximation to $f$ in the $L^{2}[-1,1]$ norm, which makes it the natural basis for spectral-element discretisations of a one-dimensional domain. The zeros of $P_{n}$ are the nodes of the $n$-point Gauss-Legendre rule (:ref[]{to=num.quadrature}), and the fact that they are $n$ distinct interior points is part 5 above. Hassani's expansion of the delta function, $\delta(x)=\sum_{l}\tfrac{2l+1}{2}P_{l}(0)P_{l}(x)$, is the closure relation of the same basis and the starting point for building Green's functions on a sphere (:ref[]{to=green.eigenfunction-expansion-green}).
:::
