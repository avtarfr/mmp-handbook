---
id: spec.orthogonal-polynomials-general
title: General properties of orthogonal polynomials
kind: theorem
level: core
summary: "For any positive weight with finite moments the monomials can be orthogonalised into a unique family of polynomials of degrees 0, 1, 2, ...; the family obeys a three-term recurrence, each member has exactly its own degree many simple zeros inside the interval, and the classical families all come from one Rodrigues formula."
prereqs: [linalg.gram-schmidt, linalg.inner-product-spaces, ode.sturm-liouville-theory]
provenance: adapted
sources:
  - work: hassani-2013
    loc: "§7.2, L²_w(a, b) and the weight function, p. 222; §7.2.1 (Orthogonal Polynomials), eqs. (7.7)–(7.14) and Examples 7.2.4–7.2.5, pp. 222–225; §8.1, Thm 8.1.1 with Lemmas 8.1.2–8.1.3 and Prop. 8.1.4, pp. 241–243; the generalized Rodriguez formula, eq. (8.2), p. 243; §8.2, Prop. 8.2.1 and Table 8.1, pp. 244–245; §8.3, eq. (8.4), p. 245"
    pages: "222-225, 241-245"
    role: the weighted space and the strictly positive weight; the Gram-Schmidt construction of the orthogonal family from the monomials; the derivation and the coefficient formulas for the three-term recurrence; the generalised Rodrigues formula with its three hypotheses and the proof that it produces a polynomial of exact degree n orthogonal to all lower degrees; the classification of the classical weights by the degree of s
  - work: arfken-2013
    loc: "§12.1 (Orthogonal Polynomials), eqs. (12.1)–(12.9) and the proof through eq. (12.16), pp. 551–554; the degree argument, p. 554; Table 12.1, p. 559"
    pages: "551-554, 559"
    role: the Sturm-Liouville form with polynomial coefficients, the self-adjointness condition and the weight obtained from it by integration, the Rodrigues formula in the form (1/w)(d/dx)^n (w p^n) with the eigenvalue read off from the leading coefficient, and the table of the five classical families with their equations, Rodrigues formulas and generating functions
  - work: kreyszig-1978
    loc: "§3.7-1 (Legendre polynomials), the Gram-Schmidt construction from the monomials and the proof that the resulting orthonormal sequence is total in L²[-1, 1], pp. 176–180"
    pages: "176-180"
    role: the model argument that Gram-Schmidt applied to the monomials yields polynomials of exactly the expected degree, and that the resulting orthonormal sequence is total because polynomials are dense
  - work: rhb-2006
    loc: "§27.4.3 (Gaussian integration), pp. 1005–1007"
    pages: "1005-1007"
    role: "the application. An n-point rule whose nodes are the zeros of the nth orthogonal polynomial for the weight, with the weights read off from the Lagrange-type representation, exact for polynomials of degree up to 2n - 1"
---

:::definition[Weight, weighted inner product, orthogonal family]{provenance=adapted src="hassani-2013:§7.2, p. 222, and §7.2.1, p. 222"}
Let $(a,b)\subseteq\mathbb{R}$ be an interval, finite or infinite. A **weight** on $(a,b)$ is a measurable function $w$ with

- $w(x)>0$ for every $x\in(a,b)$, and
- finite **moments** $\displaystyle \mu_{k}=\int_{a}^{b}x^{k}w(x)\,\mathrm{d}x$ for every integer $k\ge 0$.

Hassani's $L^{2}_{w}(a,b)$ is the space of measurable $f$ with $\int_{a}^{b}\lvert f\rvert^{2}w<\infty$, carrying
$$
(f,g)_{w} = \int_{a}^{b} f(x)\,\overline{g(x)}\,w(x)\,\mathrm{d}x ,
\qquad
\lVert f\rVert_{w} = (f,f)_{w}^{1/2},
$$
and it is complete. His standing requirement on $w$ is that it be strictly positive and integrable on $(a,b)$; the moment condition above is the extra hypothesis that makes every monomial a member of $L^{2}_{w}$, since $\lVert x^{k}\rVert_{w}^{2}=\mu_{2k}$. Both are needed here and both are stated, rather than left to be read off from the examples.

A sequence $(p_{n})_{n\ge0}$ of real polynomials is an **orthogonal family for $w$** if $\deg p_{n}=n$ for every $n$ and $(p_{n},p_{m})_{w}=0$ whenever $n\neq m$. We write
$$
h_{n} = \lVert p_{n}\rVert_{w}^{2}
$$
for the squared norms, and $k_{n}^{(n)}$, $k_{n}^{(n-1)}$ for the coefficients of $x^{n}$ and of $x^{n-1}$ in $p_{n}$, following Hassani's notation. The family is **monic** if $k_{n}^{(n)}=1$ for all $n$. A **standardisation** is any rule fixing the one free scalar in each $p_{n}$: Legendre polynomials are standardised by $p_{n}(1)=1$, Chebyshev polynomials of the first kind by a leading coefficient $2^{n-1}$, and so on.
:::

:::statement[Existence, uniqueness, and orthogonality to lower degrees]{provenance=adapted src="hassani-2013:§7.2.1, p. 222, and eq. (7.7), p. 223; kreyszig-1978:§3.7-1, pp. 176–179"}
Let $w$ be a weight on $(a,b)$ in the sense above. Then:

1. **Existence.** Applying the Gram-Schmidt process of :ref[]{to=linalg.gram-schmidt} to $1,x,x^{2},\dots$ in $L^{2}_{w}(a,b)$ produces an orthogonal family $(p_{n})$ for $w$, with $\deg p_{n}=n$ exactly.
2. **Uniqueness up to scale.** If $(p_{n})$ and $(\tilde p_{n})$ are both orthogonal families for $w$, then $\tilde p_{n}=c_{n}p_{n}$ with $c_{n}\neq0$ for every $n$. In particular the monic family is unique, and any standardisation determines the family completely.
3. **Orthogonality to all lower degrees.** For every $n$,
   $$
   (p_{n},q)_{w}=0 \qquad\text{for every polynomial } q \text{ with } \deg q<n .
   $$
   Equivalently, $p_{n}$ is orthogonal to $1,x,\dots,x^{n-1}$.

Hassani records part 3 as the "obvious property" that any polynomial of degree below $n$ is a combination of $p_{0},\dots,p_{n-1}$.
:::

:::statement[Three-term recurrence]{provenance=adapted src="hassani-2013:§7.2.1, eqs. (7.9)–(7.13), pp. 223–224"}
Let $(p_{n})$ be an orthogonal family for $w$. Then for every $n\ge1$,
$$
p_{n+1}(x) = (\alpha_{n}x+\beta_{n})\,p_{n}(x) + \gamma_{n}\,p_{n-1}(x),
\tag{$\ast$}
$$
with constants
$$
\alpha_{n} = \frac{k_{n+1}^{(n+1)}}{k_{n}^{(n)}},
\qquad
\beta_{n} = \alpha_{n}\left(\frac{k_{n+1}^{(n)}}{k_{n+1}^{(n+1)}}-\frac{k_{n}^{(n-1)}}{k_{n}^{(n)}}\right),
\qquad
\gamma_{n} = -\frac{h_{n}\alpha_{n}}{h_{n-1}\alpha_{n-1}} .
$$
No term in $p_{n-2}$ or below occurs. In particular $\gamma_{n}$ has the sign opposite to $\alpha_{n}/\alpha_{n-1}$, so for a monic family ($\alpha_{n}\equiv1$) every $\gamma_{n}$ is strictly negative.

For the **monic** family the recurrence takes the form used in computation,
$$
p_{n+1}(x) = (x-B_{n})\,p_{n}(x) - C_{n}\,p_{n-1}(x),
\qquad
B_{n} = \frac{(xp_{n},p_{n})_{w}}{h_{n}},
\qquad
C_{n} = \frac{h_{n}}{h_{n-1}}>0 ,
\tag{$\ast\ast$}
$$
valid for $n\ge1$, together with $p_{0}=1$ and $p_{1}(x)=x-B_{0}$, $B_{0}=\mu_{1}/\mu_{0}$.
:::

:::statement[The zeros are real, simple and interior]{provenance=original}
Let $(p_{n})$ be an orthogonal family for a weight $w$ on $(a,b)$, and let $n\ge1$. Then $p_{n}$ has exactly $n$ zeros, they are all real and simple, and they all lie in the open interval $(a,b)$.
:::

:::statement[Rodrigues formulas and the classical families]{provenance=adapted src="hassani-2013:§8.1, Thm 8.1.1 and eq. (8.1), p. 241, Prop. 8.1.4, p. 243, eq. (8.2), p. 243, and §8.2, Prop. 8.2.1, p. 245; arfken-2013:§12.1, eqs. (12.1)–(12.9), pp. 551–552, and Table 12.1, p. 559"}
The classical families are not built by Gram-Schmidt but written down in closed form. Two equivalent routes are standard.

**Hassani's route (Tricomi's).** Suppose $s$ is a polynomial of degree at most $2$ with only real roots, $w$ is strictly positive and integrable on $(a,b)$ with
$$
w(a)s(a)=0=w(b)s(b),
$$
and the function $F_{1}$ defined below is a polynomial of degree $1$. Set
$$
F_{n}(x) = \frac{1}{K_{n}w(x)}\frac{\mathrm{d}^{n}}{\mathrm{d}x^{n}}\bigl[w(x)s(x)^{n}\bigr]
$$
with normalising constants $K_{n}$: this is the **generalised Rodrigues formula**. Then each $F_{n}$ is a polynomial of degree exactly $n$ and $\int_{a}^{b}F_{n}p\,w=0$ for every polynomial $p$ of degree $<n$, so $(F_{n})$ is an orthogonal family for $w$. Moreover each $F_{n}$ solves the Sturm-Liouville equation
$$
\frac{\mathrm{d}}{\mathrm{d}x}\Bigl(ws\,\frac{\mathrm{d}F_{n}}{\mathrm{d}x}\Bigr)=w\lambda_{n}F_{n},
\qquad
\lambda_{n}=K_{1}k_{1}^{(1)}n+\sigma_{2}n(n-1),
$$
where $\sigma_{2}$ is the coefficient of $x^{2}$ in $s$.

**Arfken's route.** Start instead from a second-order equation with polynomial coefficients,
$$
p(x)y''+q(x)y'+\lambda y=0,
\qquad p=\alpha x^{2}+\beta x+\gamma,\quad q=\mu x+\nu ,
$$
multiply by the factor $w=p^{-1}\exp\!\int (q/p)$ that makes it self-adjoint (so that $(wp)'=wq$), and then
$$
y_{n}(x)=\frac{1}{w(x)}\Bigl(\frac{\mathrm{d}}{\mathrm{d}x}\Bigr)^{n}\bigl[w(x)p(x)^{n}\bigr]
$$
is a polynomial of degree $n$ solving the equation with
$$
\lambda_{n}=-n(n-1)\alpha-n\mu .
$$
The two routes agree with $s=p$: Arfken's self-adjointness condition $(wp)'=wq$ is Hassani's requirement that $(1/w)\,\mathrm{d}(ws)/\mathrm{d}x$ be a polynomial of degree $1$.

**Classification.** Hassani's Proposition 8.2.1 shows that the degree of $s$ decides everything. Up to an affine change of variable there are only three cases:

| $\deg s$ | $s(x)$ | $w(x)$ | $(a,b)$ | family |
|---|---|---|---|---|
| $0$ | $1$ | $\mathrm{e}^{-x^{2}}$ | $(-\infty,\infty)$ | Hermite $H_{n}$ |
| $1$ | $x$ | $x^{\nu}\mathrm{e}^{-x}$, $\nu>-1$ | $(0,\infty)$ | Laguerre $L^{\nu}_{n}$ |
| $2$ | $1-x^{2}$ | $(1+x)^{\mu}(1-x)^{\nu}$, $\mu,\nu>-1$ | $(-1,1)$ | Jacobi $P^{\mu,\nu}_{n}$ |

Legendre ($\mu=\nu=0$), Gegenbauer ($\mu=\nu=\lambda-\tfrac12$) and the two kinds of Chebyshev ($\mu=\nu=\mp\tfrac12$) are the special Jacobi cases of Hassani's Table 8.1. Arfken's Table 12.1 lists the equation, the Rodrigues formula and the generating function for Legendre, Hermite, Laguerre and both Chebyshev families; the individual families are the subject of :ref[]{to=spec.legendre-polynomials}, :ref[]{to=spec.hermite-polynomials}, :ref[]{to=spec.laguerre-polynomials} and :ref[]{to=spec.chebyshev-polynomials}.

Note the direction of the logic: Rodrigues formulas give *some* orthogonal families, in closed form, together with a differential equation. Gram-Schmidt gives the family for *every* admissible weight, but no closed form and no differential equation. For a weight outside the table — for instance $w(x)=x$ on $(0,1)$ in the example below, which is Jacobi only after the affine map to $(-1,1)$, or $w(x)=\mathrm{e}^{-x^{4}}$ on $\mathbb{R}$, which is in no case at all — the family exists, obeys a three-term recurrence and has interior simple zeros, but satisfies no second-order equation of the above form.
:::

:::idea{provenance=original}
The first three theorems are the single fact of part 3 of the existence statement — $p_{n}$ is orthogonal to everything of lower degree — used three times.

*Existence and uniqueness.* Gram-Schmidt cannot fail, because $w>0$ makes $\lVert q\rVert_{w}>0$ for every nonzero polynomial $q$, so no vector in the process is ever killed; and taking $n+1$ monomials in and getting $n+1$ polynomials out forces the degrees to be $0,1,\dots,n$. Uniqueness holds because $p_{n}$ is determined up to scale as the one direction in the $(n+1)$-dimensional space of polynomials of degree $\le n$ perpendicular to the $n$-dimensional subspace of degree $<n$.

*Recurrence.* Subtract from $p_{n+1}$ the multiple of $xp_{n}$ that cancels its leading term. What is left has degree $\le n$, so it expands in $p_{0},\dots,p_{n}$. Test that expansion against $p_{m}$: the $p_{n+1}$ term dies for $m\le n$ by orthogonality, and the $xp_{n}$ term dies as soon as $xp_{m}$ has degree below $n+1$, that is for $m\le n-2$. So all coefficients below $p_{n-1}$ vanish and only three terms survive.

*Zeros.* If $p_{n}$ changed sign at fewer than $n$ interior points, we could manufacture a low-degree polynomial $q$ whose sign changes are exactly those of $p_{n}$. Then $p_{n}q$ never changes sign, so $\int p_{n}q\,w$ cannot vanish — yet it must, because $\deg q<n$.

*Rodrigues.* Different in kind, and the only place where $w$ has to be differentiable. The whole statement rests on one bookkeeping lemma: differentiating $w s^{n}$ once lowers the power of $s$ by one and raises the degree of the polynomial factor by one, because the hypothesis on $F_{1}$ says that $(ws)'$ is $w$ times a polynomial of degree $\le1$. Iterating gives $\mathrm{d}^{m}(ws^{n})/\mathrm{d}x^{m}=ws^{n-m}\times(\text{polynomial})$, which is a polynomial times $w$ when $m=n$ — so $F_{n}$ is a polynomial — and which vanishes at both ends when $m<n$, because a factor $ws$ survives. Those vanishing boundary values are exactly what is needed to integrate by parts $k+1$ times against a polynomial of degree $k<n$ and arrive at zero.
:::

:::proof[Existence, uniqueness, orthogonality to lower degrees]{provenance=adapted src="hassani-2013:§7.2.1, pp. 222–223; kreyszig-1978:§3.7-1, pp. 176–179"}
**The monomials lie in $L^{2}_{w}$ and are independent.** $\lVert x^{k}\rVert_{w}^{2}=\mu_{2k}<\infty$ by the moment hypothesis, so each monomial is in the space. A nontrivial linear combination of monomials is a nonzero polynomial $q$, and
$$
\lVert q\rVert_{w}^{2}=\int_{a}^{b}\lvert q\rvert^{2}w>0
$$
because $\lvert q\rvert^{2}w$ is continuous, non-negative, strictly positive off the finitely many zeros of $q$ — this is where $w>0$ enters. So $q\neq 0$ in $L^{2}_{w}$ and the monomials are linearly independent.

**Gram-Schmidt.** Run the process of :ref[]{to=linalg.gram-schmidt} on $1,x,x^{2},\dots$. At step $n$ it subtracts from $x^{n}$ its projection onto the span of the previous outputs and divides by a norm that we have just shown is nonzero. Each output is a linear combination of $1,\dots,x^{n}$, hence a polynomial of degree $\le n$; and the coefficient of $x^{n}$ is the (nonzero) reciprocal of that norm times $1$, because the subtracted projection involves only $1,\dots,x^{n-1}$. So $\deg p_{n}=n$ exactly. This is the construction Kreyszig carries out on $[-1,1]$ with $w\equiv1$ to produce the Legendre polynomials, and Hassani's remark that orthogonalising the monomials must give polynomials.

**Orthogonality to lower degrees.** By construction $\operatorname{span}\{p_{0},\dots,p_{n-1}\}=\operatorname{span}\{1,\dots,x^{n-1}\}=:\mathcal{P}_{n-1}$, the polynomials of degree $\le n-1$. Since $p_{n}\perp p_{m}$ for $m<n$, $p_{n}\perp\mathcal{P}_{n-1}$. This is part 3.

**Uniqueness.** Let $\tilde p_{n}$ be any polynomial of degree $n$ orthogonal to $\mathcal{P}_{n-1}$. Write $\tilde p_{n}=\sum_{j=0}^{n}c_{j}p_{j}$, possible because $\deg\tilde p_{n}\le n$. For $m<n$, orthogonality to $p_{m}\in\mathcal{P}_{n-1}$ gives $0=(\tilde p_{n},p_{m})_{w}=c_{m}h_{m}$, and $h_{m}>0$, so $c_{m}=0$. Hence $\tilde p_{n}=c_{n}p_{n}$, with $c_{n}\neq0$ since $\deg\tilde p_{n}=n$. Any second orthogonal family satisfies the same hypothesis at each $n$, which proves part 2. $\square$
:::

:::proof[The three-term recurrence]{provenance=adapted src="hassani-2013:§7.2.1, eqs. (7.9)–(7.11), pp. 223–224"}
**Step 1: kill the leading term.** The polynomial
$$
r(x) = p_{n+1}(x) - \alpha_{n}\,x\,p_{n}(x),
\qquad \alpha_{n}=\frac{k_{n+1}^{(n+1)}}{k_{n}^{(n)}},
$$
has no $x^{n+1}$: the coefficient of $x^{n+1}$ in $xp_{n}$ is $k_{n}^{(n)}$, and $\alpha_{n}$ was chosen to match. So $\deg r\le n$ and $r=\sum_{j=0}^{n}a_{j}p_{j}$ for some scalars $a_{j}$.

**Step 2: test against $p_{m}$ for $m\le n-2$.** Take $(\,\cdot\,,p_{m})_{w}$ of $r=p_{n+1}-\alpha_{n}xp_{n}$:
$$
(r,p_{m})_{w} = (p_{n+1},p_{m})_{w} - \alpha_{n}\,(xp_{n},p_{m})_{w}
= 0 - \alpha_{n}\,(p_{n},xp_{m})_{w} .
$$
The first term vanishes by orthogonality since $m\le n-2<n+1$. In the second we moved the real factor $x$ across the inner product, which is legitimate because $x$ is real and the inner product has $\overline{x\,p_{m}}=x\,\overline{p_{m}}$. Now $\deg(xp_{m})=m+1\le n-1<n$, so $(p_{n},xp_{m})_{w}=0$ by part 3 of the previous statement. Hence $(r,p_{m})_{w}=0$, while also $(r,p_{m})_{w}=a_{m}h_{m}$ from the expansion. Since $h_{m}>0$,
$$
a_{m}=0 \qquad\text{for } m=0,1,\dots,n-2 ,
$$
which is exactly where the hypothesis "orthogonal to all lower degrees" does the work. Only $a_{n}$ and $a_{n-1}$ survive, giving $(\ast)$ with $\beta_{n}=a_{n}$ and $\gamma_{n}=a_{n-1}$.

**Step 3: identify $\beta_{n}$.** Compare coefficients of $x^{n}$ in $p_{n+1}=\alpha_{n}xp_{n}+\beta_{n}p_{n}+\gamma_{n}p_{n-1}$. The last term contributes nothing ($\deg p_{n-1}=n-1$), so
$$
k_{n+1}^{(n)} = \alpha_{n}k_{n}^{(n-1)}+\beta_{n}k_{n}^{(n)} ,
$$
and solving, with $\alpha_{n}k_{n}^{(n)}=k_{n+1}^{(n+1)}$,
$$
\beta_{n}=\frac{k_{n+1}^{(n)}}{k_{n}^{(n)}}-\alpha_{n}\frac{k_{n}^{(n-1)}}{k_{n}^{(n)}}
=\alpha_{n}\left(\frac{k_{n+1}^{(n)}}{k_{n+1}^{(n+1)}}-\frac{k_{n}^{(n-1)}}{k_{n}^{(n)}}\right),
$$
Hassani's formula.

**Step 4: identify $\gamma_{n}$.** Take $(\,\cdot\,,p_{n-1})_{w}$ of $(\ast)$. The left side gives $0$; on the right, $(p_{n},p_{n-1})_{w}=0$, so
$$
0 = \alpha_{n}(xp_{n},p_{n-1})_{w}+\gamma_{n}h_{n-1}
= \alpha_{n}(p_{n},xp_{n-1})_{w}+\gamma_{n}h_{n-1}.
$$
To evaluate $(p_{n},xp_{n-1})_{w}$, apply $(\ast)$ at index $n-1$: $xp_{n-1}=\alpha_{n-1}^{-1}\bigl(p_{n}-\beta_{n-1}p_{n-1}-\gamma_{n-1}p_{n-2}\bigr)$, and only the $p_{n}$ term survives against $p_{n}$:
$$
(p_{n},xp_{n-1})_{w}=\frac{h_{n}}{\alpha_{n-1}} .
$$
Therefore $\gamma_{n}=-\alpha_{n}h_{n}/(\alpha_{n-1}h_{n-1})$, as claimed. Since $h_{n},h_{n-1}>0$, the sign of $\gamma_{n}$ is opposite to that of $\alpha_{n}/\alpha_{n-1}$.

**Step 5: the monic form.** Put $\alpha_{n}=1$ for all $n$, write $B_{n}=-\beta_{n}$ and $C_{n}=-\gamma_{n}=h_{n}/h_{n-1}>0$; then $(\ast)$ becomes $(\ast\ast)$. For $B_{n}$ the coefficient formula is awkward to use directly, so take $(\,\cdot\,,p_{n})_{w}$ of $(\ast\ast)$ instead:
$$
0=(xp_{n},p_{n})_{w}-B_{n}h_{n}-C_{n}\,(p_{n-1},p_{n})_{w}=(xp_{n},p_{n})_{w}-B_{n}h_{n},
$$
giving $B_{n}=(xp_{n},p_{n})_{w}/h_{n}$. For $n=0$ the same computation with $p_{0}=1$ gives $B_{0}=(x,1)_{w}/(1,1)_{w}=\mu_{1}/\mu_{0}$. $\square$
:::

:::proof[The zeros]{provenance=original}
$p_{n}$ is a real polynomial of degree $n$, so it has $n$ zeros in $\mathbb{C}$ counted with multiplicity. We show $n$ of them are distinct points of $(a,b)$; that exhausts the count and leaves none complex and none repeated.

**Step 1: count the interior sign changes.** Let $x_{1}<\dots<x_{r}$ be the points of $(a,b)$ at which $p_{n}$ changes sign, that is the real zeros of $p_{n}$ in $(a,b)$ of odd multiplicity. Suppose, for contradiction, that $r<n$. (If $p_{n}$ has no interior sign change, take $r=0$ and $q\equiv1$ below.)

**Step 2: build a test polynomial.** Put
$$
q(x)=\prod_{j=1}^{r}(x-x_{j}),
$$
a real polynomial of degree $r<n$.

**Step 3: the product has one sign.** The function $p_{n}q$ is a real polynomial that changes sign at no point of $(a,b)$: at each $x_{j}$ both factors change sign, so the product does not, and at every other point of $(a,b)$ neither factor does. Hence $p_{n}q\ge0$ throughout $(a,b)$ or $p_{n}q\le0$ throughout $(a,b)$. It is not the zero polynomial, since $p_{n}\neq0$ and $q\neq0$.

**Step 4: the integral cannot vanish.** Replacing $q$ by $-q$ if necessary, assume $p_{n}q\ge0$ on $(a,b)$. The product vanishes only at its finitely many zeros, and $w>0$ everywhere on $(a,b)$, so $p_{n}q\,w$ is non-negative and strictly positive except at finitely many points. Therefore
$$
\int_{a}^{b}p_{n}(x)q(x)w(x)\,\mathrm{d}x>0 .
$$
(The integral is finite: $p_{n}q$ is a polynomial, and all moments of $w$ are finite.) This is the step that needs $w>0$ on all of $(a,b)$.

**Step 5: but orthogonality forbids it.** $q$ is real and $\deg q=r<n$, so by part 3 of the existence statement $\int_{a}^{b}p_{n}q\,w=(p_{n},q)_{w}=0$. This contradicts Step 4.

Hence $r\ge n$. A degree-$n$ polynomial has at most $n$ zeros, so $r=n$: there are exactly $n$ distinct points of $(a,b)$ where $p_{n}$ changes sign. Each is a zero, and together they account for all $n$ zeros of $p_{n}$; so each has multiplicity one and there are no others, real or complex. $\square$
:::

:::proof[The Rodrigues construction]{provenance=adapted src="hassani-2013:§8.1, Lemmas 8.1.2 and 8.1.3 and the proof of Thm 8.1.1, pp. 242–243"}
We prove Hassani's route; his Lemma 8.1.2 is left to a problem in the book, so we prove it too. Write $p_{\le k}$ for an unspecified polynomial of degree at most $k$, as Hassani does, and let $F_{n}=(K_{n}w)^{-1}\mathrm{d}^{n}(ws^{n})/\mathrm{d}x^{n}$. The hypotheses are: $\deg s\le2$ with real roots only; $w>0$ and integrable on $(a,b)$ with $w(a)s(a)=0=w(b)s(b)$; and $F_{1}$ a polynomial of degree $1$. The last one says precisely that
$$
\frac{\mathrm{d}(ws)}{\mathrm{d}x}=w\,t,
\qquad t=K_{1}F_{1}\ \text{a polynomial with}\ \deg t\le1 .
\tag{H}
$$

**Lemma A (Hassani's 8.1.2).** For $1\le m\le n$,
$$
\frac{\mathrm{d}^{m}}{\mathrm{d}x^{m}}\bigl[w\,s^{n}\,p_{\le k}\bigr]=w\,s^{\,n-m}\,p_{\le k+m} .
$$
*Proof, by induction on $m$.* For $m=1$, expand and use $w'=w(t-s')/s$, which is (H) rearranged (valid where $s\neq0$, and the conclusion is an identity between continuous functions, so it extends to the whole interval):
$$
\bigl[ws^{n}p_{\le k}\bigr]'
= w'\,s^{n}p_{\le k}+n\,w\,s^{n-1}s'\,p_{\le k}+w\,s^{n}p_{\le k}'
= w\,s^{\,n-1}\Bigl[\bigl(t+(n-1)s'\bigr)p_{\le k}+s\,p_{\le k}'\Bigr].
$$
In the bracket, $t$ and $s'$ have degree $\le1$, so the first product has degree $\le k+1$; and $s\,p_{\le k}'$ has degree $\le 2+(k-1)=k+1$. The bracket is therefore $p_{\le k+1}$, which is the claim for $m=1$. If the claim holds for $m<n$, apply the case $m=1$ once more with $n-m$ in place of $n$ and $k+m$ in place of $k$; the power of $s$ is still at least $1$, so the step is legitimate, and we get $ws^{\,n-m-1}p_{\le k+m+1}$. $\square$

**Lemma B (Hassani's 8.1.3).** For $0\le m<n$, $\mathrm{d}^{m}(ws^{n})/\mathrm{d}x^{m}$ vanishes at $x=a$ and at $x=b$.
*Proof.* Take $k=0$, $p_{\le0}=1$ in Lemma A: the derivative equals $w\,s^{\,n-m}\,p_{\le m}$. Since $m<n$ we have $n-m\ge1$, so this is $(ws)\,s^{\,n-m-1}p_{\le m}$, and $ws$ vanishes at both endpoints by hypothesis. $\square$

**$F_{n}$ is a polynomial of degree at most $n$.** Lemma A with $m=n$, $k=0$ gives $\mathrm{d}^{n}(ws^{n})/\mathrm{d}x^{n}=w\,s^{0}\,p_{\le n}=w\,p_{\le n}$, so $F_{n}=p_{\le n}/K_{n}$ is a polynomial of degree at most $n$.

**Orthogonality to lower degrees.** Let $q$ be a polynomial with $\deg q=k<n$. Then
$$
K_{n}\int_{a}^{b}q\,F_{n}\,w\,\mathrm{d}x=\int_{a}^{b}q(x)\,\frac{\mathrm{d}^{n}(ws^{n})}{\mathrm{d}x^{n}}\,\mathrm{d}x .
$$
Integrate by parts, moving one derivative at a time onto $q$. After $j$ steps the boundary term is
$$
(-1)^{j-1}\Bigl[q^{(j-1)}\,\frac{\mathrm{d}^{\,n-j}(ws^{n})}{\mathrm{d}x^{\,n-j}}\Bigr]_{a}^{b},
$$
which vanishes by Lemma B because $n-j<n$ for $j\ge1$. Carrying this out $k$ times leaves
$$
(-1)^{k}\int_{a}^{b}q^{(k)}(x)\,\frac{\mathrm{d}^{\,n-k}(ws^{n})}{\mathrm{d}x^{\,n-k}}\,\mathrm{d}x
=(-1)^{k}C\int_{a}^{b}\frac{\mathrm{d}}{\mathrm{d}x}\Bigl[\frac{\mathrm{d}^{\,n-k-1}(ws^{n})}{\mathrm{d}x^{\,n-k-1}}\Bigr]\mathrm{d}x ,
$$
where $C=q^{(k)}$ is the constant $k$th derivative of a degree-$k$ polynomial, and where $n-k-1\ge0$ because $k<n$. The last integral is $\bigl[\mathrm{d}^{\,n-k-1}(ws^{n})/\mathrm{d}x^{\,n-k-1}\bigr]_{a}^{b}=0$, again by Lemma B. So $\int_{a}^{b}qF_{n}w=0$.

**The degree is exactly $n$.** Write $F_{n}=p_{\le n-1}+k_{n}^{(n)}x^{n}$, multiply by $wF_{n}$ and integrate:
$$
\int_{a}^{b}F_{n}^{2}\,w
=\underbrace{\int_{a}^{b}p_{\le n-1}F_{n}\,w}_{=0\ \text{by the previous step}}
+\;k_{n}^{(n)}\int_{a}^{b}x^{n}F_{n}\,w .
$$
The left side is strictly positive, because $w>0$ and $F_{n}$ is a nonzero polynomial (it is nonzero: if $F_{n}\equiv0$ then $\mathrm{d}^{n}(ws^{n})/\mathrm{d}x^{n}\equiv0$, making $ws^{n}$ a polynomial of degree $<n$, which contradicts Lemma A at $m=n-1$ unless $w$ vanishes somewhere). Hence the right side is nonzero, so $k_{n}^{(n)}\neq0$ and $\deg F_{n}=n$.

Combining the last two steps: $(F_{n})$ has $\deg F_{n}=n$ and is orthogonal to all lower degrees, so by the uniqueness statement proved above it *is* the orthogonal family for $w$, standardised by the choice of $K_{n}$. The differential equation of Proposition 8.1.4, the equivalence with Arfken's route and the classification into three cases are reported from Hassani and from Arfken, Weber and Harris as cited; we have not reproved them. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
**$w>0$ on all of $(a,b)$.** Used twice: to make $\lVert q\rVert_{w}>0$ for every nonzero polynomial, so that Gram-Schmidt never divides by zero and $h_{n}>0$ (needed in every step of the recurrence proof); and in Step 4 of the zeros proof. Weakening it to $w\ge0$ breaks the location of the zeros. Take $(a,b)=(-1,1)$ with $w=1$ on $(-1,0)$ and $w=0$ on $[0,1)$. The resulting "orthogonal polynomials" are the Legendre polynomials transplanted to $(-1,0)$; all of their zeros lie in $(-1,0)$, and the half-interval $(0,1)$ contains none, so "every zero lies in $(a,b)$" is no longer the sharp statement it was. If instead $w$ is replaced by a measure with only $N$ atoms, then $\mathcal{P}_{N}$ has dimension $N+1$ but the space has dimension $N$: the Gram-Schmidt step at index $N$ divides by zero and the family stops at $p_{N-1}$.

**Finite moments.** Used to put the monomials in $L^{2}_{w}$ at all. For $w(x)=(1+x^{2})^{-1}$ on $\mathbb{R}$ one has $\mu_{0}=\pi<\infty$, so $w$ is integrable and strictly positive, but $\mu_{2}=\int x^{2}w=\infty$: the function $x$ is not in $L^{2}_{w}$, and the construction produces only $p_{0}$. Hassani's strict positivity and integrability are therefore not enough on an infinite interval, and the moment condition in our definition is what repairs this.

**Orthogonality to all lower degrees (not merely to the other $p_{m}$).** This is the only input to Step 2 of the recurrence proof and Step 5 of the zeros proof. It is why the recurrence is three-term and not $(n+2)$-term: the degree of $xp_{m}$ must stay below $n$.

**$w$ real and the family real.** Step 3 of the zeros proof is an argument about sign, and Step 2 of the recurrence proof moves the real variable $x$ across the inner product. With a complex-valued weight neither survives, and the zeros need not be real.

**Nothing about smoothness of $w$.** No derivative of $w$ is used in any of the three theorems. Smoothness enters only in the Rodrigues construction, where hypothesis (H) makes $(ws)'$ exist and equal $w$ times a polynomial; without it Lemma A has no meaning and the closed form does not exist, although the family still does.
:::


:::method[Constructing the family and its recurrence for a given weight]{provenance=original}
Given a weight $w$ on $(a,b)$ and a target degree $N$:

1. **Compute the moments** $\mu_{0},\dots,\mu_{2N}$. Stop here if any is infinite: the weight is not admissible.
2. **Decide the standardisation.** Monic is the cheapest; if the family is to match a book's tables, use the book's rule (for example $p_{n}(1)=1$) and rescale at the end.
3. **Start the recurrence.** $p_{0}=1$, $h_{0}=\mu_{0}$, $B_{0}=\mu_{1}/\mu_{0}$, $p_{1}(x)=x-B_{0}$, $h_{1}=\mu_{2}-\mu_{1}^{2}/\mu_{0}$.
4. **Iterate $(\ast\ast)$.** For $n=1,\dots,N-1$: form $(xp_{n},p_{n})_{w}$ and $h_{n}$ as integrals against $w$ (or as combinations of the moments), set $B_{n}=(xp_{n},p_{n})_{w}/h_{n}$ and $C_{n}=h_{n}/h_{n-1}$, and put $p_{n+1}=(x-B_{n})p_{n}-C_{n}p_{n-1}$. This is cheaper and far more stable than orthogonalising the monomials directly, whose Gram matrix is notoriously ill-conditioned; see :ref[]{to=num.linear-systems-numerics}.
5. **Check as you go.** $C_{n}>0$ always; and $p_{n}$ must have $n$ simple zeros inside $(a,b)$. Either failing is a sign of arithmetic error.
6. **For the nodes and weights of the $n$-point Gauss rule**, take the zeros $x_{1},\dots,x_{n}$ of $p_{n}$ from step 5 and solve the $n\times n$ linear system $\sum_{i}W_{i}x_{i}^{k}=\mu_{k}$, $k=0,\dots,n-1$, for the quadrature weights $W_{i}$.
:::

:::example[The family for $w(x)=x$ on $(0,1)$, and its two-point Gauss rule]{provenance=original}
Take $(a,b)=(0,1)$ and $w(x)=x$: strictly positive on the open interval, with moments $\mu_{k}=\int_{0}^{1}x^{k+1}\mathrm{d}x=1/(k+2)$, all finite. We build the monic family.

**Step 1: $p_{0}$ and $p_{1}$.** $p_{0}=1$, $h_{0}=\mu_{0}=\tfrac12$, and
$$
B_{0}=\frac{\mu_{1}}{\mu_{0}}=\frac{1/3}{1/2}=\frac{2}{3},
\qquad
p_{1}(x)=x-\frac{2}{3}.
$$
Its squared norm is
$$
h_{1}=\int_{0}^{1}\Bigl(x-\tfrac23\Bigr)^{2}x\,\mathrm{d}x
=\int_{0}^{1}\Bigl(x^{3}-\tfrac43x^{2}+\tfrac49x\Bigr)\mathrm{d}x
=\tfrac14-\tfrac49+\tfrac29=\tfrac14-\tfrac29=\tfrac{1}{36}.
$$

**Step 2: $p_{2}$ by Gram-Schmidt.** Orthogonalising $x^{2}$ against $p_{1}$ and $p_{0}$ needs
$$
(x^{2},p_{1})_{w}=\int_{0}^{1}x^{2}\Bigl(x-\tfrac23\Bigr)x\,\mathrm{d}x=\tfrac15-\tfrac23\cdot\tfrac14=\tfrac1{30},
\qquad
(x^{2},p_{0})_{w}=\int_{0}^{1}x^{3}\,\mathrm{d}x=\tfrac14,
$$
so
$$
p_{2}=x^{2}-\frac{1/30}{1/36}\Bigl(x-\tfrac23\Bigr)-\frac{1/4}{1/2}
= x^{2}-\frac{6}{5}x+\frac{4}{5}-\frac12
= x^{2}-\frac{6}{5}x+\frac{3}{10}.
$$

**Step 3: the same $p_{2}$ from the recurrence.** Here
$$
(xp_{1},p_{1})_{w}=\int_{0}^{1}x^{2}\Bigl(x-\tfrac23\Bigr)^{2}\mathrm{d}x
=\tfrac15-\tfrac43\cdot\tfrac14+\tfrac49\cdot\tfrac13=\tfrac{2}{135},
$$
so $B_{1}=(2/135)/(1/36)=\tfrac{8}{15}$ and $C_{1}=h_{1}/h_{0}=(1/36)/(1/2)=\tfrac1{18}$. Then
$$
(x-\tfrac{8}{15})\Bigl(x-\tfrac23\Bigr)-\tfrac1{18}
= x^{2}-\Bigl(\tfrac{8}{15}+\tfrac{10}{15}\Bigr)x+\tfrac{16}{45}-\tfrac{1}{18}
= x^{2}-\tfrac65x+\tfrac{3}{10},
$$
since $\tfrac{16}{45}-\tfrac1{18}=\tfrac{32}{90}-\tfrac{5}{90}=\tfrac{27}{90}=\tfrac{3}{10}$: the recurrence reproduces $p_{2}$ exactly, as $(\ast\ast)$ requires. One more turn, with $h_{2}=\int_{0}^{1}p_{2}^{2}x\,\mathrm{d}x=\tfrac1{600}$, gives $B_{2}=\tfrac{18}{35}$, $C_{2}=h_{2}/h_{1}=\tfrac{3}{50}$ and
$$
p_{3}(x)=x^{3}-\tfrac{12}{7}x^{2}+\tfrac67x-\tfrac4{35}.
$$

**Step 4: the zeros.** From $10x^{2}-12x+3=0$,
$$
x_{1,2}=\frac{6\mp\sqrt{6}}{10},
\qquad x_{1}=0.355051\ldots,\quad x_{2}=0.844949\ldots,
$$
two simple zeros, both inside $(0,1)$, as the zeros theorem demands. ($p_{3}$ likewise has three: $0.212341$, $0.590533$, $0.911412$.)

**Step 5: the two-point Gauss rule.** Take the two zeros as nodes and solve $W_{1}+W_{2}=\mu_{0}=\tfrac12$, $W_{1}x_{1}+W_{2}x_{2}=\mu_{1}=\tfrac13$. Subtracting $x_{2}$ times the first from the second,
$$
W_{1}=\frac{\tfrac13-\tfrac12x_{2}}{x_{1}-x_{2}}
=\frac{(2-3\sqrt6)/60}{-\sqrt6/5}
=\frac{9-\sqrt6}{36}=0.1819586\ldots,
\qquad
W_{2}=\frac{9+\sqrt6}{36}=0.3180414\ldots .
$$

**Step 6: the checkable number.** The rule $\int_{0}^{1}f(x)\,x\,\mathrm{d}x\approx W_{1}f(x_{1})+W_{2}f(x_{2})$ should be exact for $f$ of degree $\le 3$ and fail at degree $4$. For $f(x)=x^{3}$ the true value is $\int_{0}^{1}x^{4}\mathrm{d}x=\tfrac15$, and
$$
W_{1}x_{1}^{3}+W_{2}x_{2}^{3}
= \frac{9-\sqrt6}{36}\Bigl(\frac{6-\sqrt6}{10}\Bigr)^{3}+\frac{9+\sqrt6}{36}\Bigl(\frac{6+\sqrt6}{10}\Bigr)^{3}
= \frac{1}{5} ,
$$
exactly — in decimals $0.1819586\times0.0447582+0.3180414\times0.6032418=0.0081441+0.1918559=0.2000000$. At degree $4$ the rule gives $\tfrac{33}{200}=0.165$ against the true $\int_{0}^{1}x^{5}\mathrm{d}x=\tfrac16=0.1\overline{6}$, so degree $3=2\cdot2-1$ is indeed the last exact degree. Every quantity in this example was checked symbolically.
:::

:::application{provenance=adapted src="rhb-2006:§27.4.3, pp. 1005–1007"}
**Gaussian quadrature.** The zeros theorem is the reason Gauss rules exist. Riley, Hobson and Bence describe the scheme: to integrate over $(a,b)$ against a weight $w$, take the $n$ nodes to be the zeros of the $n$th orthogonal polynomial for $w$ — which the theorem guarantees are $n$ distinct points *inside* the interval, so that the integrand is only ever sampled where it lives — interpolate the integrand at those nodes, and integrate the interpolant. The resulting $n$-point rule is exact for every polynomial of degree up to $2n-1$, twice what $n$ equally spaced points buy. Their Gauss-Legendre case ($w\equiv1$ on $[-1,1]$, nodes the zeros of $P_{n}$, weights $2/[(1-x_{i}^{2})\lvert P_{n}'(x_{i})\rvert^{2}]$) is the workhorse of finite-element and spectral codes; their three-point rule applied to $\int_{0}^{1}(1+x^{2})^{-1}\mathrm{d}x$ returns $0.78527$ against the exact $\pi/4=0.78540$, where the trapezium and Simpson rules on the same three points give $0.7750$ and $0.7833$. The weight is chosen to absorb whatever is awkward about the integrand: $\mathrm{e}^{-x}$ on $(0,\infty)$ for Gauss-Laguerre, $\mathrm{e}^{-x^{2}}$ on $\mathbb{R}$ for Gauss-Hermite, $(1-x^{2})^{\pm1/2}$ for Gauss-Chebyshev. See :ref[]{to=num.quadrature}.

**Separation of variables.** Every family in the classification table above arises as the eigenfunctions of a Sturm-Liouville problem (:ref[]{to=ode.sturm-liouville-theory}) obtained by separating a partial differential equation in a coordinate system adapted to the geometry: Legendre from the polar angle in spherical coordinates (:ref[]{to=pde.separation-of-variables}), Laguerre from the radial Coulomb problem, Hermite from the harmonic oscillator. The orthogonality relation of this unit is then exactly what makes the expansion coefficients computable, and the three-term recurrence is what makes the special-function values computable — in practice one never sums a Rodrigues formula, one iterates $(\ast)$ upward from $p_{0}$ and $p_{1}$.

**Least squares and spectral methods.** Because $p_{n}\perp\mathcal{P}_{n-1}$, the best degree-$N$ approximation to $f$ in $\lVert\cdot\rVert_{w}$ is the truncation $\sum_{n\le N}(f,p_{n})_{w}p_{n}/h_{n}$ of a single expansion: raising $N$ adds a term and changes none of the earlier ones, which is false for a fit in the monomial basis. This is why climate and fluid codes carry spectral coefficients rather than nodal polynomial fits, and why a weighted polynomial fit to data is computed in an orthogonal basis.
:::
