---
id: spec.laguerre-polynomials
title: Laguerre polynomials
kind: definition
level: core
summary: "The polynomials orthogonal on the half-line with weight $x^{k}\\mathrm{e}^{-x}$: their Rodrigues formula and generating function, the associated Laguerre equation they solve, the two conventions in circulation, and the hydrogen radial functions they build."
prereqs: [spec.orthogonal-polynomials-general, spec.gamma-function, ode.frobenius-method]
provenance: adapted
sources:
  - work: rhb-2006
    loc: "§18.7, Laguerre's equation (18.107) with real parameter, the Frobenius analysis and indicial equation, the series (18.110)–(18.111) and the first few polynomials, p. 617; §18.7.1, the Rodrigues formula (18.112) and its Leibniz proof, p. 618, the Sturm-Liouville reading of the orthogonality and the normalisation (18.113), p. 619, the generating function (18.114) and the recurrences (18.115)–(18.117), pp. 620–621; §18.8, the associated Laguerre equation (18.118), the definition (18.119), the first few $L^m_n$ and the series (18.120), pp. 621–622; §18.8.1, the Rodrigues formula (18.121), the orthogonality with weight $x^{m}\\mathrm{e}^{-x}$ and the normalisation (18.122), the expansion coefficients, the generating function (18.123), the value of $L^m_n(0)$ and the recurrences (18.124)–(18.125), pp. 622–624; the footnote on the competing definition, p. 621"
    pages: "617-624"
    role: the whole structure of the chapter followed here, from the Frobenius argument that the parameter must be a non-negative integer for a polynomial solution, through the Rodrigues formulas for both families, the Sturm-Liouville identification of the weights, the integration-by-parts evaluation of the two normalisation constants, to the generating functions and the recurrences; and the footnote recording the alternative convention for the associated polynomials
  - work: arfken-2013
    loc: "§18.3, the Laguerre ODE (18.44), the self-adjoint weight (18.45), the Rodrigues formula (18.46), the contour derivation of the generating function (18.47)–(18.49), the recurrences (18.51)–(18.52), Table 18.2, the series (18.53), the value $L_n(0)=1$ (18.54), the orthonormality (18.55) and the Laguerre functions (18.56)–(18.57), pp. 889–892; the associated polynomials (18.58)–(18.59), Weber's generating function (18.60) and the relations (18.61)–(18.68) drawn from it, the associated Laguerre equation (18.69), the weight (18.70), the orthogonality (18.71), the Rodrigues formula (18.72) and the substitutions (18.73)–(18.75), Table 18.3 and the value $L^k_n(0)$ (18.64), pp. 892–895; Example 18.3.1 (the hydrogen atom), eqs. (18.76)–(18.83), and the normalised radial function quoted in Exercise 18.3.8, pp. 896–898; footnote 4 on the competing definition, p. 892"
    pages: "889-898"
    role: the derivation of the weight $x^{k}\mathrm{e}^{-x}$ from the ODE; the normalisation of the ordinary polynomials to $\delta_{mn}$ and of the associated ones to $(n+k)!/n!$; the remark that the associated Laguerre equation has non-polynomial solutions diverging like $x^{k}\mathrm{e}^{x}$ when $n$ is not an integer, and the use of that fact to quantise the hydrogen spectrum; the hydrogen radial equation, its reduction, the energies and the normalised radial function; footnote 4 recording the alternative convention
  - work: hassani-2013
    loc: "Proposition 8.2.1(b) (the weight $x^{\\nu}\\mathrm{e}^{-x}$ on $(0,\\infty)$ with $\\nu>-1$ as the degree-one case of the classical scheme), p. 245; §8.4.2, the standardisation $K_n=n!$, the generalised Rodrigues formula (8.16), the leading coefficient $(-1)^{n}/n!$, the norm $h_n=\\Gamma(n+\\nu+1)/n!$, the recurrence and the differential equation (8.18), pp. 249–250; Table 8.2, p. 258; Problem 8.32, p. 263"
    pages: "245, 249-250, 258, 263"
    role: the treatment with a real parameter $\nu>-1$ rather than an integer, the restriction $\nu>-1$ itself, the norm written with the gamma function, and the tabulated generating function
  - work: kreyszig-1978
    loc: "§3.7-3, the Gram-Schmidt construction from $t^{n}\\mathrm{e}^{-t/2}$ in $L^{2}[0,\\infty)$, the orthonormal sequence (10a), the Rodrigues definition (10b), the series (10c), the first few polynomials (10*), the totality statement and Laguerre's equation (11), pp. 184–185; Problems 11–13 (generating function and recurrences), p. 188"
    pages: "184-185, 188"
    role: the Laguerre functions $\mathrm{e}^{-t/2}L_n(t)$ as the orthonormal sequence produced by Gram-Schmidt on the half-line, and the statement that it is total in $L^{2}[0,\infty)$
---

:::definition[Laguerre and associated Laguerre polynomials]{provenance=adapted src="rhb-2006:§18.7, eq. (18.112), p. 618, and §18.8, eqs. (18.118)–(18.121), pp. 621–622; arfken-2013:§18.3, eqs. (18.44), (18.46) and (18.58), (18.69), (18.72), pp. 889–895; hassani-2013:§8.4.2, eq. (8.16) and eq. (8.18), pp. 249–250, and Problem 8.32, p. 263; kreyszig-1978:§3.7-3, eqs. (10b)–(10c), p. 184"}
Fix an integer $k\ge0$. The **associated Laguerre polynomials** $L^{k}_{0},L^{k}_{1},L^{k}_{2},\dots$ are defined by the Rodrigues formula
$$
L^{k}_{n}(x) \;=\; \frac{\mathrm{e}^{x}\,x^{-k}}{n!}\,\frac{\mathrm{d}^{n}}{\mathrm{d}x^{n}}\Bigl(x^{\,n+k}\,\mathrm{e}^{-x}\Bigr),
\qquad x>0 .
$$
The case $k=0$ gives the **(ordinary) Laguerre polynomials**, written $L_{n}=L^{0}_{n}$:
$$
L_{n}(x)=\frac{\mathrm{e}^{x}}{n!}\frac{\mathrm{d}^{n}}{\mathrm{d}x^{n}}\bigl(x^{n}\mathrm{e}^{-x}\bigr).
$$
This is the convention of all four of our sources, and it is the one in which $L_{n}(0)=1$. In the language of :ref[]{to=spec.orthogonal-polynomials-general}, $L^{k}_{n}$ is the classical family belonging to the weight
$$
w_{k}(x)=x^{k}\mathrm{e}^{-x} \quad\text{on}\quad (0,\infty),
$$
with the scale fixed by the choice Hassani writes as $K_{n}=n!$. Hassani runs the whole construction with a real parameter $\nu>-1$ in place of the integer $k$, writing $L^{\nu}_{n}$. The only item below that genuinely needs $k$ to be an integer is the equivalent definition in item 2, which differentiates $k$ times; everything else survives with each factorial in $k$ read through the gamma function (:ref[]{to=spec.gamma-function}), $(n+k)!\mapsto\Gamma(n+\nu+1)$ and $(k+m)!\mapsto\Gamma(\nu+m+1)$, so that the explicit sum of item 1 becomes a series in $\Gamma$'s and its value at the origin becomes $L^{\nu}_{n}(0)=\Gamma(n+\nu+1)/[n!\,\Gamma(\nu+1)]$ (Hassani, Problem 8.32), just as item 6 already writes the norm as $\Gamma(n+\nu+1)/n!$. We note below where the real case differs.

The first few, for general $k$, are
$$
L^{k}_{0}=1,\qquad
L^{k}_{1}=k+1-x,\qquad
L^{k}_{2}=\tfrac12\bigl[x^{2}-2(k+2)x+(k+1)(k+2)\bigr],
$$
and for $k=0$,
$$
L_{0}=1,\quad L_{1}=1-x,\quad L_{2}=\tfrac12\bigl(x^{2}-4x+2\bigr),\quad L_{3}=\tfrac16\bigl(-x^{3}+9x^{2}-18x+6\bigr).
$$
Note the sign: $L_{n}$ starts at $+1$ and its leading term is $(-1)^{n}x^{n}/n!$, so these polynomials are *not* monic and alternate in overall sign at large $x$.

The **Laguerre functions** $\varphi^{k}_{n}(x)=\mathrm{e}^{-x/2}x^{k/2}L^{k}_{n}(x)$ absorb half the weight, so that they are orthogonal with unit weight; Kreyszig's orthonormal sequence in $L^{2}[0,\infty)$ is the case $k=0$, namely $\mathrm{e}^{-x/2}L_{n}(x)$, which he obtains by Gram-Schmidt from $x^{n}\mathrm{e}^{-x/2}$ (:ref[]{to=linalg.gram-schmidt}).
:::

:::statement[What the Laguerre polynomials satisfy]{provenance=adapted src="rhb-2006:§18.7, eqs. (18.107) and (18.111), p. 617, §18.7.1, eqs. (18.113)–(18.117), pp. 619–621, and §18.8–18.8.1, eqs. (18.118)–(18.125), pp. 621–624; arfken-2013:§18.3, eqs. (18.49), (18.51)–(18.55), (18.59), (18.61)–(18.64), (18.66), (18.69), (18.71), (18.73), pp. 890–895; hassani-2013:§8.4.2, the recurrence and eq. (8.18) and the norm $h_n=\Gamma(n+\nu+1)/n!$, pp. 249–250; kreyszig-1978:§3.7-3, eq. (11), p. 185"}
Let $k\ge0$ be an integer and $L^{k}_{n}$ as defined above. Write $L^{k}_{-1}\equiv0$.

1. **Explicit form.** For $n\ge0$,
   $$
   L^{k}_{n}(x)=\sum_{m=0}^{n}(-1)^{m}\,\frac{(n+k)!}{(n-m)!\,(k+m)!\,m!}\;x^{m} .
   $$
   So $L^{k}_{n}$ is a polynomial of degree exactly $n$ with leading coefficient $(-1)^{n}/n!$, and
   $$
   L^{k}_{n}(0)=\binom{n+k}{n}=\frac{(n+k)!}{n!\,k!},
   \qquad\text{in particular } L_{n}(0)=1 .
   $$
   Unlike the Legendre, Hermite and Chebyshev families, the $L^{k}_{n}$ have no parity: the interval $(0,\infty)$ is not symmetric.
2. **Relation to the ordinary polynomials.** $\displaystyle L^{k}_{n}(x)=(-1)^{k}\frac{\mathrm{d}^{k}}{\mathrm{d}x^{k}}L_{n+k}(x)$. This is the formula Riley, Hobson and Bence and Arfken, Weber and Harris take as their *definition* of the associated polynomials; here it is a consequence of the Rodrigues formula. It requires $k$ to be a non-negative integer, and is the one item of this statement that does not survive to Hassani's real $\nu$.
3. **Generating function.** For $|h|<1$ and all $x$,
   $$
   \frac{\mathrm{e}^{-xh/(1-h)}}{(1-h)^{k+1}}=\sum_{n=0}^{\infty}L^{k}_{n}(x)\,h^{n} .
   $$
4. **Recurrences.** For $n\ge1$ and $k\ge0$,
   $$
   (n+1)L^{k}_{n+1}(x)=(2n+k+1-x)\,L^{k}_{n}(x)-(n+k)\,L^{k}_{n-1}(x),
   $$
   $$
   x\,\bigl(L^{k}_{n}\bigr)'(x)=n\,L^{k}_{n}(x)-(n+k)\,L^{k}_{n-1}(x),
   \qquad
   \bigl(L^{k}_{n}\bigr)'(x)=-L^{k+1}_{n-1}(x),
   $$
   and, for every $n\ge0$,
   $$
   L^{k+1}_{n}=\sum_{j=0}^{n}L^{k}_{j} .
   $$
   The last two relations move between neighbouring values of the upper index; note that differentiating *raises* $k$ and lowers $n$. (With the convention $L^{k}_{-1}\equiv0$ the first three relations hold at $n=0$ as well; the fourth needs no convention.)
5. **The associated Laguerre equation.** $y=L^{k}_{n}$ solves
   $$
   x\,y''+(k+1-x)\,y'+n\,y=0 ,
   $$
   which for $k=0$ is Laguerre's equation $xy''+(1-x)y'+ny=0$. The point $x=0$ is a regular singular point and $x=\infty$ an irregular one.
6. **Orthogonality and norm.** For all $m,n\ge0$,
   $$
   \int_{0}^{\infty}\mathrm{e}^{-x}x^{k}\,L^{k}_{m}(x)\,L^{k}_{n}(x)\,\mathrm{d}x=\frac{(n+k)!}{n!}\;\delta_{mn} .
   $$
   For $k=0$ the right-hand side is simply $\delta_{mn}$: the ordinary Laguerre polynomials are already orthonormal for the weight $\mathrm{e}^{-x}$, with no normalising constant at all. In Hassani's real-parameter version the constant is $\Gamma(n+\nu+1)/n!$, which reduces to $(n+k)!/n!$ at $\nu=k$ (:ref[]{to=spec.gamma-function}).
7. **Self-adjoint form and completeness.** $\varphi^{k}_{n}=\mathrm{e}^{-x/2}x^{k/2}L^{k}_{n}$ satisfies
   $$
   x\,\bigl(\varphi^{k}_{n}\bigr)''+\bigl(\varphi^{k}_{n}\bigr)'+\Bigl(-\frac{x}{4}+\frac{2n+k+1}{2}-\frac{k^{2}}{4x}\Bigr)\varphi^{k}_{n}=0 ,
   $$
   and the closely related $\Phi^{k}_{n}=\mathrm{e}^{-x/2}x^{(k+1)/2}L^{k}_{n}$ satisfies the equation with no first-derivative term,
   $$
   \bigl(\Phi^{k}_{n}\bigr)''+\Bigl(-\frac14+\frac{2n+k+1}{2x}-\frac{k^{2}-1}{4x^{2}}\Bigr)\Phi^{k}_{n}=0 ,
   $$
   which is the form in which the hydrogen radial equation appears. For $k=0$, Kreyszig states that the normalised functions $\mathrm{e}^{-x/2}L_{n}(x)$ form a *total* orthonormal sequence in $L^{2}[0,\infty)$; we record that on his authority and do not prove it. Items 1–6 are proved below.
:::

:::idea{provenance=original}
Every identity here is squeezed out of the Rodrigues formula by one of two moves.

The first move is Leibniz's rule. Differentiating $x^{n+k}\mathrm{e}^{-x}$ exactly $n$ times produces a sum over how many of the derivatives landed on the power and how many on the exponential; dividing out the $x^{k}\mathrm{e}^{-x}$ that was never differentiated leaves a polynomial of degree $n$, written down term by term. That is item 1, and the leading coefficient, the value at the origin and the generating function all follow from the series by elementary resummation.

The second move is to differentiate a first-order identity many times. The function $v=x^{n+k}\mathrm{e}^{-x}$ satisfies $xv'=(n+k-x)v$ — one line, because $v$ is a power times an exponential. Differentiating that identity $n+1$ times with Leibniz's rule relates $v^{(n)}$, $v^{(n+1)}$ and $v^{(n+2)}$, and since $v^{(n)}$ *is* $n!\,x^{k}\mathrm{e}^{-x}L^{k}_{n}$ by definition, the relation is the associated Laguerre equation in disguise. No power series and no appeal to the general classical theory are needed.

Orthogonality then needs nothing new: put the Rodrigues formula for the higher-index polynomial inside the integral and integrate by parts $n$ times. The boundary terms vanish because what is being differentiated is a power at least $x^{k}$ at the origin and an exponential at infinity; and after $n$ parts the other factor has been differentiated $n$ times, which annihilates it if its degree is smaller. The one surviving case is $m=n$, where the $n$th derivative of a degree-$n$ polynomial is a constant and the integral collapses to $\Gamma(n+k+1)$.
:::

:::proof{provenance=adapted src="rhb-2006:§18.7.1, the Leibniz evaluation of the Rodrigues formula, p. 619, the integration-by-parts evaluation of the normalisation, p. 619 and p. 623, and §18.8, the Leibniz derivation of the associated equation, p. 621; arfken-2013:§18.3, the extraction of the recurrences from the generating function, p. 890, and the relations (18.61)–(18.63), p. 893"}
**Item 1.** Apply Leibniz's rule to $\mathrm{d}^{n}/\mathrm{d}x^{n}\bigl(x^{n+k}\mathrm{e}^{-x}\bigr)$, letting $r$ derivatives fall on the power and $n-r$ on the exponential:
$$
\frac{\mathrm{d}^{n}}{\mathrm{d}x^{n}}\bigl(x^{n+k}\mathrm{e}^{-x}\bigr)
=\sum_{r=0}^{n}\binom{n}{r}\frac{(n+k)!}{(n+k-r)!}\,x^{\,n+k-r}\,(-1)^{n-r}\mathrm{e}^{-x} .
$$
Multiply by $\mathrm{e}^{x}x^{-k}/n!$ and substitute $m=n-r$, so that $x^{n+k-r}\cdot x^{-k}=x^{m}$, $\binom{n}{r}=\frac{n!}{(n-m)!\,m!}$ after the substitution, and $(n+k-r)!=(k+m)!$:
$$
L^{k}_{n}(x)=\sum_{m=0}^{n}(-1)^{m}\frac{(n+k)!}{(n-m)!\,(k+m)!\,m!}\,x^{m} .
$$
The $m=n$ term is $(-1)^{n}(n+k)!\,x^{n}/\bigl(0!\,(k+n)!\,n!\bigr)=(-1)^{n}x^{n}/n!$, which is the leading term and is non-zero, so the degree is exactly $n$. The $m=0$ term is $(n+k)!/(n!\,k!)$, which is the value at the origin.

**Item 3.** Insert the series and exchange the two finite-or-absolutely-convergent sums:
$$
\sum_{n\ge0}L^{k}_{n}(x)h^{n}
=\sum_{m\ge0}\frac{(-1)^{m}x^{m}}{m!\,(k+m)!}\sum_{n\ge m}\frac{(n+k)!}{(n-m)!}\,h^{n} .
$$
Put $n=m+j$ in the inner sum and factor out $h^{m}$:
$$
\sum_{j\ge0}\frac{(m+j+k)!}{j!}h^{m+j}
=(m+k)!\,h^{m}\sum_{j\ge0}\binom{j+m+k}{j}h^{j}
=(m+k)!\,\frac{h^{m}}{(1-h)^{m+k+1}} ,
$$
by the binomial series $\sum_{j}\binom{j+p}{j}h^{j}=(1-h)^{-(p+1)}$, valid for $|h|<1$. The factor $(m+k)!$ cancels the one in the denominator, leaving
$$
\sum_{n\ge0}L^{k}_{n}(x)h^{n}=\frac{1}{(1-h)^{k+1}}\sum_{m\ge0}\frac{1}{m!}\left(\frac{-xh}{1-h}\right)^{m}
=\frac{\mathrm{e}^{-xh/(1-h)}}{(1-h)^{k+1}} .
$$
Both rearrangements are legitimate for $|h|<1$ and fixed $x$, since all the sums converge absolutely there.

**Item 4.** Write $G=G_{k}(x,h)$ for the generating function. Differentiating in $h$,
$$
\frac{\partial G}{\partial h}=\left[\frac{k+1}{1-h}-\frac{x}{(1-h)^{2}}\right]G ,
\qquad\text{so}\qquad
(1-h)^{2}\frac{\partial G}{\partial h}=\bigl[(k+1)(1-h)-x\bigr]G .
$$
Insert $G=\sum_{n}L^{k}_{n}h^{n}$ and collect the coefficient of $h^{n}$ on each side. On the left, $(1-2h+h^{2})\sum_{n}nL^{k}_{n}h^{n-1}$ gives $(n+1)L^{k}_{n+1}-2nL^{k}_{n}+(n-1)L^{k}_{n-1}$; on the right, $(k+1-x)L^{k}_{n}-(k+1)L^{k}_{n-1}$. Equating and moving all but the first term to the right,
$$
(n+1)L^{k}_{n+1}=(2n+k+1-x)L^{k}_{n}-(n+k)L^{k}_{n-1},
$$
where the two coefficients were assembled as $2nL^{k}_{n}+(k+1-x)L^{k}_{n}=(2n+k+1-x)L^{k}_{n}$ and $-(n-1)L^{k}_{n-1}-(k+1)L^{k}_{n-1}=-(n+k)L^{k}_{n-1}$.

Differentiating in $x$ instead gives $\partial G/\partial x=-\frac{h}{1-h}G$, that is $(1-h)\partial_{x}G=-hG$, whose $h^{n}$ coefficient is
$$
\bigl(L^{k}_{n}\bigr)'-\bigl(L^{k}_{n-1}\bigr)'=-L^{k}_{n-1} .
$$
Summing this from index $1$ to $n$ telescopes, and $\bigl(L^{k}_{0}\bigr)'=0$, so
$$
\bigl(L^{k}_{n}\bigr)'=-\sum_{i=0}^{n-1}L^{k}_{i} .
$$
Finally, comparing the generating functions for two neighbouring upper indices, $G_{k+1}=G_{k}/(1-h)$, and expanding $1/(1-h)=\sum_{j}h^{j}$, the $h^{n}$ coefficient of the product is $L^{k+1}_{n}=\sum_{j=0}^{n}L^{k}_{j}$. Combining the last two displays gives $\bigl(L^{k}_{n}\bigr)'=-L^{k+1}_{n-1}$.

For the remaining recurrence, differentiate the series of item 1 term by term and multiply by $x$:
$$
x\bigl(L^{k}_{n}\bigr)'=\sum_{m=1}^{n}(-1)^{m}\frac{(n+k)!\,m}{(n-m)!\,(k+m)!\,m!}x^{m}
=n\,L^{k}_{n}-(n+k)L^{k}_{n-1},
$$
where the last equality is checked coefficient by coefficient: the coefficient of $x^{m}$ on the right is
$$
(-1)^{m}\frac{n\,(n+k)!}{(n-m)!(k+m)!m!}-(-1)^{m}\frac{(n+k)(n-1+k)!}{(n-1-m)!(k+m)!m!}
=(-1)^{m}\frac{(n+k)!}{(k+m)!\,m!}\left[\frac{n}{(n-m)!}-\frac{1}{(n-1-m)!}\right],
$$
and $\frac{n}{(n-m)!}-\frac{1}{(n-1-m)!}=\frac{n-(n-m)}{(n-m)!}=\frac{m}{(n-m)!}$, which is the coefficient on the left.

**Item 2.** Iterating $\bigl(L^{k}_{n}\bigr)'=-L^{k+1}_{n-1}$ a total of $k$ times starting from $L^{0}_{n+k}=L_{n+k}$ gives
$$
\frac{\mathrm{d}^{k}}{\mathrm{d}x^{k}}L_{n+k}=(-1)^{k}L^{k}_{n},
$$
which is the stated relation.

**Item 5.** Put $v(x)=x^{\,n+k}\mathrm{e}^{-x}$, so that $v^{(n)}=n!\,x^{k}\mathrm{e}^{-x}L^{k}_{n}$ by the Rodrigues formula. Because $v$ is a power times an exponential it satisfies the first-order identity
$$
x\,v'=(n+k-x)\,v .
$$
Differentiate this $n+1$ times with Leibniz's rule. On the left, only the first two Leibniz terms survive because $x$ is linear:
$$
\bigl(xv'\bigr)^{(n+1)}=x\,v^{(n+2)}+(n+1)\,v^{(n+1)} .
$$
On the right, likewise,
$$
\bigl((n+k-x)v\bigr)^{(n+1)}=(n+k-x)\,v^{(n+1)}-(n+1)\,v^{(n)} .
$$
Equating and collecting,
$$
x\,v^{(n+2)}+(1-k+x)\,v^{(n+1)}+(n+1)\,v^{(n)}=0 .
\tag{$\dagger$}
$$
Now write $y=L^{k}_{n}$ and express the three derivatives in terms of $y$. From $v^{(n)}=n!\,x^{k}\mathrm{e}^{-x}y$,
$$
v^{(n+1)}=n!\,x^{k-1}\mathrm{e}^{-x}\bigl[x y'+(k-x)y\bigr],
$$
$$
v^{(n+2)}=n!\,x^{k-2}\mathrm{e}^{-x}\Bigl\{x\bigl[xy''+(k+1-x)y'-y\bigr]+(k-1-x)\bigl[xy'+(k-x)y\bigr]\Bigr\} ,
$$
each obtained by one differentiation and collection of terms. Substitute these into $(\dagger)$ and divide through by the common factor $n!\,x^{k-1}\mathrm{e}^{-x}$:
$$
x\bigl[xy''+(k+1-x)y'-y\bigr]+(k-1-x)\bigl[xy'+(k-x)y\bigr]+(1-k+x)\bigl[xy'+(k-x)y\bigr]+(n+1)xy=0 .
$$
The second and third brackets carry the coefficients $(k-1-x)$ and $(1-k+x)$, which sum to zero, so those two terms cancel exactly. What is left is
$$
x\bigl[xy''+(k+1-x)y'-y\bigr]+(n+1)xy=0 ,
$$
and dividing by $x$ (legitimate for $x>0$, and the conclusion extends to $x=0$ by continuity, both sides being polynomials) gives
$$
x\,y''+(k+1-x)\,y'+n\,y=0 .
$$

**Item 6.** Let $m\le n$ and substitute the Rodrigues formula for the factor of index $n$:
$$
I=\int_{0}^{\infty}\mathrm{e}^{-x}x^{k}L^{k}_{m}L^{k}_{n}\,\mathrm{d}x
=\frac{1}{n!}\int_{0}^{\infty}L^{k}_{m}(x)\,\frac{\mathrm{d}^{n}}{\mathrm{d}x^{n}}\bigl(x^{\,n+k}\mathrm{e}^{-x}\bigr)\,\mathrm{d}x .
$$
Integrate by parts $n$ times, each time moving one derivative off the Rodrigues factor and onto $L^{k}_{m}$. The boundary term at step $j$ is
$$
\Bigl[\bigl(L^{k}_{m}\bigr)^{(j)}(x)\;\frac{\mathrm{d}^{\,n-1-j}}{\mathrm{d}x^{\,n-1-j}}\bigl(x^{\,n+k}\mathrm{e}^{-x}\bigr)\Bigr]_{0}^{\infty},
\qquad j=0,\dots,n-1 .
$$
It vanishes at $\infty$ because every derivative of $x^{n+k}\mathrm{e}^{-x}$ is a polynomial times $\mathrm{e}^{-x}$; and at $0$ because differentiating $x^{n+k}\mathrm{e}^{-x}$ fewer than $n+k$ times leaves a factor $x^{n+k-(n-1-j)}=x^{k+1+j}$, which is a positive power of $x$ since $k\ge0$ and $j\ge0$. Hence
$$
I=\frac{(-1)^{n}}{n!}\int_{0}^{\infty}\bigl(L^{k}_{m}\bigr)^{(n)}(x)\;x^{\,n+k}\mathrm{e}^{-x}\,\mathrm{d}x .
$$
If $m<n$ the $n$th derivative of a polynomial of degree $m$ is identically zero, so $I=0$; by symmetry of $I$ in $m$ and $n$ this covers every $m\neq n$. If $m=n$, the $n$th derivative of $L^{k}_{n}$ is $n!$ times its leading coefficient, namely $n!\cdot(-1)^{n}/n!=(-1)^{n}$ by item 1, a constant. Therefore
$$
I=\frac{(-1)^{n}}{n!}\,(-1)^{n}\int_{0}^{\infty}x^{\,n+k}\mathrm{e}^{-x}\,\mathrm{d}x=\frac{\Gamma(n+k+1)}{n!}=\frac{(n+k)!}{n!},
$$
using the integral definition of the gamma function (:ref[]{to=spec.gamma-function}). $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
**$n$ must be a non-negative integer, and this is what quantises hydrogen.** Riley, Hobson and Bence write Laguerre's equation with a real parameter $\nu$ and run Frobenius about the regular singular point $x=0$ (:ref[]{to=ode.frobenius-method}). The indicial equation is $\sigma^{2}=0$, a repeated root, so there is only one Frobenius solution; it is an ordinary power series with
$$
a_{m+1}=\frac{m-\nu}{(m+1)^{2}}\,a_{m} ,
$$
which terminates exactly when $\nu$ is a non-negative integer. If it does not terminate, $a_{m+1}/a_{m}\to 1/m$ for large $m$, which is the coefficient ratio of $\mathrm{e}^{x}$, and the solution grows like $\mathrm{e}^{x}$. Arfken, Weber and Harris record the same fact for the associated equation — its non-polynomial solutions diverge proportionally to $x^{k}\mathrm{e}^{x}$ — and then use precisely this to quantise the hydrogen spectrum: the radial function contains the factor $\mathrm{e}^{-\rho/2}L^{2L+1}_{\lambda-L-1}(\rho)$, and only when $\lambda-L-1$ is a non-negative integer does $\mathrm{e}^{-\rho/2}$ beat the growth and leave a bound state. Integrality of the principal quantum number is therefore not an assumption; it is the boundary condition at infinity.

**The second solution is thrown away at the origin, not at infinity.** Because the indicial roots coincide, the second solution of Laguerre's equation contains a $\log x$ and blows up at the origin. It is excluded by requiring regularity at $x=0$. The two exclusions are independent: integrality handles $x=\infty$, regularity handles $x=0$, and a Sturm-Liouville problem on $(0,\infty)$ needs a condition at each end.

**$k>-1$, not merely $k\ge0$.** Nothing in item 6 needs $k$ to be an integer; what it needs is that $x^{k}$ be integrable near the origin and that the boundary terms vanish there. Both fail at $k\le-1$: already $\int_{0}^{1}x^{-1}\mathrm{e}^{-x}\mathrm{d}x=\infty$, so the inner product itself is undefined. This is exactly Hassani's standing restriction $\nu>-1$ in his Proposition 8.2.1(b), and it is why the natural parameter range is $k>-1$ rather than $k\ge0$. Integrality of $k$ is needed only for item 2, which expresses $L^{k}_{n}$ as a $k$-fold derivative. The factorials $(n+k)!$ and $(k+m)!$ of item 1, and the binomial coefficient $\binom{n+k}{n}$ with them, are not exceptions: for real $\nu>-1$ they are read as $\Gamma(n+\nu+1)$ and $\Gamma(\nu+m+1)$, and the value at the origin becomes $\Gamma(n+\nu+1)/[n!\,\Gamma(\nu+1)]$, which is how Hassani states it; item 6 is already written that way.

**A different weight for every $k$.** The orthogonality in item 6 holds within a fixed upper index. There is no sense in which $L^{2}_{3}$ and $L^{5}_{3}$ are orthogonal: they live in different weighted spaces. Arfken, Weber and Harris make the point explicitly — for each $k$ the associated Laguerre polynomials form a *new* orthogonal set. In the hydrogen application this is the reason that radial functions with different $L$ are not orthogonal through the radial integral alone; their orthogonality comes from the angular factor (:ref[]{to=spec.spherical-harmonics}).

**Where $k\ge0$ enters the boundary terms.** In the proof of item 6 the surviving power at the origin was $x^{k+1+j}$ with $j\ge0$. For $-1<k<0$ this is still a positive power, so the argument survives; for $k\le-1$ the $j=0$ boundary term need not vanish, and the integration by parts breaks down at the first step.
:::

:::remark[Two conventions for the associated polynomials]{provenance=adapted src="arfken-2013:§18.3, footnote 4 to eq. (18.58), p. 892; rhb-2006:§18.8, the footnote to eq. (18.119), p. 621"}
Both Arfken, Weber and Harris and Riley, Hobson and Bence pause to warn that a second convention is in circulation, and they describe the same clash. Writing $\mathcal{L}$ for the other family, those authors set
$$
\mathcal{L}^{k}_{n}(x)=\frac{\mathrm{d}^{k}}{\mathrm{d}x^{k}}L_{n}(x) ,
$$
indexing by the degree of the *parent* Laguerre polynomial rather than by the degree of the result. The two are related by
$$
L^{k}_{n}(x)=(-1)^{k}\,\mathcal{L}^{k}_{n+k}(x) ,
$$
which is Riley, Hobson and Bence's footnote verbatim in content, and Arfken, Weber and Harris's footnote 4 in the same form. Note that **both** things change: the sign $(-1)^{k}$ and the subscript, by $k$. $\mathcal{L}^{k}_{n}$ has degree $n-k$, while $L^{k}_{n}$ has degree $n$.

This unit uses $L^{k}_{n}$ throughout, the convention of all four sources' main text and of the tables of Abramowitz and Stegun that Arfken, Weber and Harris say they follow. The practical test: in our convention $L^{k}_{n}(0)=\binom{n+k}{n}>0$ and the polynomial has degree $n$; in the other, $\mathcal{L}^{k}_{n}$ has degree $n-k$ and $\mathcal{L}^{k}_{n}(0)=(-1)^{k}\binom{n}{n-k}$ alternates in sign with $k$. A hydrogen radial function written with the wrong one goes wrong twice over. It acquires a sign $(-1)^{2L+1}=-1$, which a normalisation constant hides; and — far worse — the subscript is wrong by $2L+1$. In our convention the correct factor for the state with principal number $N$ and orbital number $L$ is $L^{2L+1}_{N-L-1}$, of degree $N-L-1$, and the other convention calls that same object $-\mathcal{L}^{2L+1}_{N+L}$; so a formula carried across without translating the subscript becomes $L^{2L+1}_{N+L}$, of degree $N+L$. Since $L^{k}_{m}$ has exactly $m$ simple zeros in $(0,\infty)$, the symptom is a radial function with $N+L$ nodes instead of $N-L-1$ — for $2\mathrm{p}$ ($N=2$, $L=1$) three nodes where the true function has none, and for $3\mathrm{d}$ ($N=3$, $L=2$) five instead of none. (Degrees and zero counts here were checked symbolically.)

A third difference, independent of this one, is the overall scale: Hassani's standardisation $K_{n}=n!$ is what puts the $1/n!$ in front of the Rodrigues formula. Dropping it (as some older texts do) multiplies $L^{k}_{n}$ by $n!$ and changes the norm in item 6 from $(n+k)!/n!$ to $n!\,(n+k)!$.
:::

:::method[Recognising and solving an associated Laguerre problem]{provenance=adapted src="arfken-2013:§18.3, the substitutions (18.73)–(18.75) and Example 18.3.1, the reduction of the hydrogen radial equation (18.76)–(18.83), pp. 895–897; rhb-2006:§18.8.1, the expansion $f=\sum a_n L^m_n$ and its coefficient formula, p. 623"}
Many bound-state radial problems arrive in a form with a $1/x$ and a $1/x^{2}$ term and no obvious polynomial in sight. The recipe is to strip off the asymptotics at both ends and read off what is left.

1. **Scale so that the exponential decay rate is $1/2$.** If the equation is $u''+\bigl(-\tfrac{\alpha^{2}}{4}+\tfrac{\beta}{r}-\tfrac{\gamma}{r^{2}}\bigr)u=0$, put $x=\alpha r$. The equation becomes $u''+\bigl(-\tfrac14+\tfrac{\beta/\alpha}{x}-\tfrac{\gamma}{x^{2}}\bigr)u=0$ in the new variable.
2. **Match to the normal form of item 7.** Compare with
   $$
   \Phi''+\Bigl(-\frac14+\frac{2n+k+1}{2x}-\frac{k^{2}-1}{4x^{2}}\Bigr)\Phi=0 .
   $$
   Reading the $1/x^{2}$ coefficient gives $k=\sqrt{4\gamma+1}$ — take the positive root, since the other sign makes $x^{(k+1)/2}$ singular at the origin. Reading the $1/x$ coefficient gives $n=\tfrac12\bigl(2\beta/\alpha-k-1\bigr)$.
3. **Impose integrality.** The solution is bounded at infinity only if $n$ is a non-negative integer. This is the quantisation condition, and solving it for whatever physical parameter sits inside $\alpha$ or $\beta$ gives the spectrum.
4. **Write down the solution.** $\Phi=\mathrm{e}^{-x/2}x^{(k+1)/2}L^{k}_{n}(x)$, and the original unknown is recovered by undoing step 1.
5. **Normalise.** Use item 6: $\int_{0}^{\infty}\mathrm{e}^{-x}x^{k}\bigl(L^{k}_{n}\bigr)^{2}\mathrm{d}x=(n+k)!/n!$, and multiply by whatever Jacobian the change of variable in step 1 introduced.

**To expand a function** on $(0,\infty)$: by item 6 the coefficients in $f=\sum_{n}a_{n}L^{k}_{n}$ are
$$
a_{n}=\frac{n!}{(n+k)!}\int_{0}^{\infty}f(x)\,L^{k}_{n}(x)\,x^{k}\mathrm{e}^{-x}\,\mathrm{d}x .
$$
For $k=0$ the prefactor is $1$. Evaluate $L^{k}_{n}$ at a point by the three-term recurrence of item 4, starting from $L^{k}_{0}=1$ and $L^{k}_{1}=k+1-x$, never by the explicit sum of item 1, whose terms alternate and grow before cancelling.
:::

:::example[The hydrogen $2\mathrm{p}$ radial function]{provenance=original}
Take hydrogen ($Z=1$) in the state with principal quantum number $N=2$ and orbital quantum number $L=1$, and build the radial function from scratch by the recipe above, then compute $\langle r\rangle$ and $\langle 1/r\rangle$.

**Step 1: reduce the radial equation.** With $u(r)=r\,R(r)$ the radial Schrodinger equation for a Coulomb potential is
$$
u''+\left(-\frac{\alpha^{2}}{4}+\frac{2}{a_{0}r}-\frac{L(L+1)}{r^{2}}\right)u=0,
\qquad \alpha^{2}=-\frac{8mE}{\hbar^{2}},
$$
with $a_{0}$ the Bohr radius. Set $x=\alpha r$. Comparing with the normal form, the $1/x^{2}$ coefficient gives $k^{2}-1=4L(L+1)$, that is $k=2L+1=3$; the $1/x$ coefficient gives $2n+k+1=4/(\alpha a_{0})$, which with $k=2L+1$ reads $2(n+L+1)=4/(\alpha a_{0})$, that is $\alpha=2/(Na_{0})$ with $N=n+L+1$ the principal quantum number. For $N=2$, $L=1$ we get $n=N-L-1=0$ and $\alpha=1/a_{0}$.

**Step 2: write the function.** With $n=0$ the Laguerre factor is $L^{3}_{0}=1$, so
$$
u(r)\propto \mathrm{e}^{-x/2}x^{(k+1)/2}=\mathrm{e}^{-r/2a_{0}}\Bigl(\frac{r}{a_{0}}\Bigr)^{2},
\qquad
R_{21}(r)=\frac{u}{r}\propto \frac{r}{a_{0}}\,\mathrm{e}^{-r/2a_{0}} .
$$

**Step 3: normalise.** Require $\int_{0}^{\infty}R_{21}^{2}r^{2}\mathrm{d}r=1$. Writing $R_{21}=C\,r\,\mathrm{e}^{-r/2a_{0}}$,
$$
C^{2}\int_{0}^{\infty}r^{4}\mathrm{e}^{-r/a_{0}}\,\mathrm{d}r=C^{2}\,4!\,a_{0}^{5}=24\,C^{2}a_{0}^{5}=1,
$$
using $\int_{0}^{\infty}r^{p}\mathrm{e}^{-r/a_{0}}\mathrm{d}r=p!\,a_{0}^{p+1}$. Hence $C=1/\bigl(2\sqrt{6}\,a_{0}^{5/2}\bigr)$ and
$$
R_{21}(r)=\frac{1}{2\sqrt{6}\,a_{0}^{3/2}}\,\frac{r}{a_{0}}\,\mathrm{e}^{-r/2a_{0}} .
$$

**Step 4: the two expectation values.** With the same integral formula,
$$
\langle r\rangle=\int_{0}^{\infty}r\,R_{21}^{2}\,r^{2}\mathrm{d}r=C^{2}\int_{0}^{\infty}r^{5}\mathrm{e}^{-r/a_{0}}\mathrm{d}r
=\frac{5!\,a_{0}^{6}}{24\,a_{0}^{5}}=\frac{120}{24}a_{0}=5a_{0} ,
$$
$$
\Bigl\langle \frac1r\Bigr\rangle=C^{2}\int_{0}^{\infty}r^{3}\mathrm{e}^{-r/a_{0}}\mathrm{d}r=\frac{3!\,a_{0}^{4}}{24\,a_{0}^{5}}=\frac{6}{24a_{0}}=\frac{1}{4a_{0}} .
$$

**Step 5: check.** Arfken, Weber and Harris quote, for the normalised hydrogenic radial function, $\langle r\rangle=\tfrac{a_{0}}{2}\bigl[3N^{2}-L(L+1)\bigr]$ and $\langle r^{-1}\rangle=1/(N^{2}a_{0})$. At $N=2$, $L=1$ these give $\tfrac{a_{0}}{2}(12-2)=5a_{0}$ and $1/(4a_{0})$: both match. The normalisation, $\langle r\rangle$ and $\langle 1/r\rangle$ were also recomputed symbolically from the general formula
$$
R_{NL}(r)=\alpha^{3/2}\left[\frac{(N-L-1)!}{2N\,(N+L)!}\right]^{1/2}\mathrm{e}^{-\alpha r/2}(\alpha r)^{L}L^{2L+1}_{N-L-1}(\alpha r),
\qquad \alpha=\frac{2}{Na_{0}} ,
$$
and agree; the same check at $N=3$, $L=0$ returns $\langle r\rangle=\tfrac{27}{2}a_{0}$, again matching the quoted formula.

**Reading the numbers.** $\langle 1/r\rangle=1/(N^{2}a_{0})$ depends only on $N$, not on $L$ — which is why the Coulomb energy $-\tfrac12 e^{2}\langle 1/r\rangle/(4\pi\epsilon_{0})$ is degenerate in $L$, the accidental degeneracy of the hydrogen atom. By contrast $\langle r\rangle=5a_{0}$ does depend on $L$: the $2\mathrm{s}$ state ($N=2$, $L=0$) has $\langle r\rangle=6a_{0}$, further out on average than $2\mathrm{p}$ even though $2\mathrm{s}$ has more weight very close to the nucleus. The two facts together are the whole story of why $\langle r\rangle$ is a poor predictor of chemical behaviour and $\langle 1/r\rangle$ is a good one.
:::

:::application{provenance=original}
**The hydrogen atom.** Separating the Schrodinger equation for a charge $Ze$ in spherical coordinates leaves the angular part to the spherical harmonics (:ref[]{to=spec.spherical-harmonics}) and the radial part to the associated Laguerre equation with $k=2L+1$, as in the example. The bound states are labelled by $N=n+L+1=1,2,3,\dots$, the energies are
$$
E_{N}=-\frac{Z^{2}m}{2N^{2}\hbar^{2}}\left(\frac{e^{2}}{4\pi\epsilon_{0}}\right)^{2},
$$
and the radial function has $n=N-L-1$ nodes, which is the degree of its Laguerre factor. Three structural facts come straight out of the mathematics: the energy depends on $N$ alone, because the quantisation condition in step 3 of the method involves only the combination $2n+k+1=2N$; the degeneracy of level $N$ is $\sum_{L=0}^{N-1}(2L+1)=N^{2}$; and the node count is $N-L-1$, so the $1\mathrm{s}$, $2\mathrm{p}$, $3\mathrm{d}$, … states are nodeless. Arfken, Weber and Harris note that the bound states alone are not complete — the positive-energy continuum states are needed for that — which matters whenever one expands a scattering state or a tightly localised wave packet in hydrogenic orbitals.

**Gauss-Laguerre quadrature.** The $n$ zeros of $L^{k}_{n}$ are real, simple and in $(0,\infty)$ (:ref[]{to=spec.orthogonal-polynomials-general}), and there are weights $w_{i}$ making
$$
\int_{0}^{\infty}x^{k}\mathrm{e}^{-x}f(x)\,\mathrm{d}x\approx\sum_{i=1}^{n}w_{i}f(x_{i})
$$
exact for all polynomials $f$ of degree at most $2n-1$ (:ref[]{to=num.quadrature}). This is the standard tool for integrals over a half-line with exponential decay: partition functions and thermal averages, the energy integrals of radiative transfer, and lifetime integrals in reliability work. The decay rate must be matched to the weight first — an integrand behaving like $\mathrm{e}^{-3x}$ should be rescaled to $\mathrm{e}^{-x}$ before the rule is applied, or the quadrature converges slowly.

**Laguerre-Gaussian laser modes.** In a cylindrically symmetric cavity the paraxial equation separates in polar coordinates, and the transverse modes are
$$
u_{n\ell}(r,\phi)\;\propto\;\left(\frac{r\sqrt2}{w}\right)^{|\ell|}L^{|\ell|}_{n}\!\left(\frac{2r^{2}}{w^{2}}\right)\mathrm{e}^{-r^{2}/w^{2}}\mathrm{e}^{\mathrm{i}\ell\phi} .
$$
The index $n$ counts radial rings, the index $\ell$ is the azimuthal winding, and each photon in such a beam carries orbital angular momentum $\ell\hbar$. These are the beams used in optical tweezers to spin trapped particles and in mode-division multiplexing to carry independent channels on one wavelength; the independence of the channels is item 6, the orthogonality of $L^{|\ell|}_{n}$ for different $n$ at fixed $\ell$, together with the orthogonality of $\mathrm{e}^{\mathrm{i}\ell\phi}$.

**Sonine polynomials in kinetic theory.** In the Chapman-Enskog solution of the Boltzmann equation the perturbation of the Maxwellian is expanded in the associated Laguerre polynomials of the squared speed — called Sonine polynomials in that literature — with $k=\tfrac12$ or $\tfrac32$, half-integer values that are perfectly legal because the construction needs only $k>-1$. The transport coefficients of a dilute gas, its viscosity and thermal conductivity, come out as ratios of determinants built from the matrix elements of the collision operator in this basis, and the first-order truncation is already accurate to a couple of per cent: for a hard-sphere gas the first Sonine approximation to the viscosity is low by under two per cent, and the thermal conductivity by somewhat more.

**Expansions in numerical work on a half-line.** Because $\mathrm{e}^{-x/2}L_{n}(x)$ is a complete orthonormal sequence in $L^{2}[0,\infty)$ (Kreyszig's totality statement), Laguerre functions are the natural spectral basis for problems on a semi-infinite domain — boundary layers, radial transport, the outer region of an atmospheric column — where a Chebyshev or Fourier basis would need an artificial truncation of the domain (:ref[]{to=num.spectral-methods}). The practical caveat is the same as for the quadrature: the method converges fast only if the solution's decay rate is close to $\mathrm{e}^{-x/2}$, so a scaling parameter must be fitted to the problem.
:::
