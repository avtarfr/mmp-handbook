---
id: fourier.partial-fractions
title: Partial fractions for inverse transforms
kind: method
level: core
summary: Shows that every rational function splits uniquely into a polynomial plus one singular part per pole, gives the cover-up rule and its derivative extension for the coefficients, the real form that keeps complex-conjugate pairs together as quadratics, and turns the decomposition into a recipe for inverting Laplace and $z$-transforms term by term.
prereqs: [fourier.laplace-transform, complex.residue-theorem, complex.taylor-series]
provenance: adapted
sources:
  - work: ahlfors-1979
    loc: "Ch. 2, §1.4 (Rational functions), the construction of the singular part at each finite pole and at infinity and the resulting representation, Eqs. (12)–(14), pp. 30–32, with Exercise 2, p. 32"
    pages: "30-32"
    role: the existence proof we follow — subtract one singular part per pole and show the remainder is a rational function with no poles at all — and the residue form $\\sum_k P(a_k)/\\bigl(Q'(a_k)(z-a_k)\\bigr)$ of the decomposition for a denominator with distinct roots
  - work: rhb-2006
    loc: "§1.4 and §1.4.1, pp. 18–24: the counting of terms and of the exponents $n_i$ (Eq. 1.43 and the two bullets on p. 19), the three ways of fixing the coefficients including the cover-up recipe (iii) on p. 20, the preliminary long division (1.45) on p. 21, the form $(B_ix+C_i)/(x^2+a_i^2)$ for real quadratic factors on pp. 22–23, the alternative form (1.48) for a repeated root on p. 23, and the restriction of the cover-up rule to the highest inverse power of a repeated root, p. 24"
    pages: "18-24"
    role: the bookkeeping (how many terms, of what shape), the cover-up recipe stated as a practical rule, the division step that makes a function proper, the real form with linear numerators over quadratic factors, and the statement of what the cover-up rule can and cannot do at a repeated root
  - work: arfken-2013
    loc: "§1.5, the three shapes of partial-fraction term — distinct linear factors (1.83), a quadratic factor with numerator $ax+b$, and a repeated linear factor $(x-a_1)^m$ — together with the limit formula (1.84) for the coefficients and Example 1.5.3, pp. 42–43; §20.7, Example 20.7.2 (inverting $k^2/[s(s^2+k^2)]$ term by term from a table), p. 1013; §20.10, Exercise 20.10.11 (Heaviside expansion theorem) and Exercise 20.10.13, p. 1045"
    pages: "42-43, 1013, 1045"
    role: the catalogue of term shapes and the limit form of the cover-up rule; the use of the decomposition to read an inverse Laplace transform off a table; the Heaviside expansion theorem in the form $F(t)=\\sum_i [g(s_i)/h'(s_i)]\\mathrm{e}^{s_it}$ for a transform $g/h$ with simple zeros of $h$
---

:::note[What this unit is for]{provenance=original}
An inverse Laplace transform is hard in general and easy for a handful of standard shapes: $1/(s-p)$, $1/(s-p)^m$, and the two real forms $(s-\alpha)/[(s-\alpha)^2+\beta^2]$ and $\beta/[(s-\alpha)^2+\beta^2]$. The point of a partial-fraction decomposition is that **every** rational transform is a finite sum of exactly those shapes, so the inversion is a table lookup once the algebra is done. The Bromwich integral of :ref[]{to=fourier.laplace-transform} is not needed; the decomposition is what the Bromwich contour would have produced anyway, pole by pole.

Everything here is algebra over $\mathbb{C}$ and applies verbatim to any transform whose inverse is read off a table: Laplace, $z$- and discrete-time transforms, and generating functions (:ref[]{to=prob.generating-functions}).
:::

:::definition[Proper rational functions, poles and singular parts]{provenance=adapted src="ahlfors-1979:Ch. 2, §1.4, pp. 30–32; rhb-2006:§1.4, p. 18 and footnote"}
A **rational function** is a quotient $R = g/h$ of polynomials with complex coefficients, $h\not\equiv0$. We always assume the quotient is in **lowest terms**: $g$ and $h$ have no common root. Following Riley, Hobson and Bence we also normalise $h$ to be monic, dividing both polynomials by the leading coefficient of $h$ if necessary.

$R$ is **proper** when $\deg g < \deg h$. Writing

$$
h(s) \;=\; \prod_{k=1}^{q}\,(s-p_k)^{m_k},
\qquad p_1,\dots,p_q \ \text{distinct},\quad m_1+\dots+m_q = \deg h ,
$$

which the fundamental theorem of algebra always permits over $\mathbb{C}$, the numbers $p_k$ are the **poles** of $R$ and $m_k$ is the **order** of the pole $p_k$. A pole of order $1$ is **simple**.

The **singular part** of $R$ at $p_k$ is a sum

$$
S_k(s) \;=\; \sum_{j=1}^{m_k}\frac{a_{k,j}}{(s-p_k)^{j}} ,
$$

that is, a polynomial in $1/(s-p_k)$ with no constant term. Ahlfors calls this the singular part of $R$ at $p_k$ and builds the decomposition out of these pieces, one for each pole and one more at $\infty$.
:::

:::statement[Partial-fraction decomposition]{provenance=adapted src="ahlfors-1979:Ch. 2, §1.4, Eq. (14), p. 32; rhb-2006:§1.4, Eq. (1.43) and the two bullets, p. 19, Eq. (1.45), p. 21, Eq. (1.48), p. 23; arfken-2013:§1.5, Eqs. (1.83)–(1.84), pp. 42–43"}
Let $R=g/h$ be rational and in lowest terms, with the factorisation of $h$ above.

**1. Existence and uniqueness.** There is exactly one polynomial $G$ and exactly one family of complex numbers $a_{k,j}$ ($1\le k\le q$, $1\le j\le m_k$) with

$$
R(s) \;=\; G(s) \;+\; \sum_{k=1}^{q}\ \sum_{j=1}^{m_k}\frac{a_{k,j}}{(s-p_k)^{j}} .
$$

The polynomial $G$ is the quotient of $g$ by $h$: it is zero exactly when $R$ is proper, and otherwise has degree $\deg g-\deg h$. The number of unknown coefficients $a_{k,j}$ is $\deg h$, one per root counted with multiplicity.

**2. The coefficients.** For each $k$ and each $1\le j\le m_k$,

$$
a_{k,j} \;=\; \frac{1}{(m_k-j)!}\,
\lim_{s\to p_k}\frac{\mathrm{d}^{\,m_k-j}}{\mathrm{d}s^{\,m_k-j}}
\Bigl[(s-p_k)^{m_k}R(s)\Bigr] .
$$

Two cases are worth naming. The **cover-up rule** is the case $j=m_k$, in which no derivative is taken:

$$
a_{k,m_k} \;=\; \lim_{s\to p_k}(s-p_k)^{m_k}R(s) ,
$$

so for a **simple** pole $a_{k,1}=\lim_{s\to p_k}(s-p_k)R(s)$, which is Arfken's Eq. (1.84) and, in Riley, Hobson and Bence's wording, the instruction to delete the factor $s-p_k$ from $h$ and evaluate what is left at $s=p_k$. When every pole is simple this can be written with the derivative of the denominator,

$$
R(s) \;=\; G(s)+\sum_{k=1}^{q}\frac{g(p_k)}{h'(p_k)}\,\frac{1}{s-p_k},
$$

which is Ahlfors's Exercise 2 on p. 32. Each $a_{k,1}$ is the residue of $R$ at $p_k$ in the sense of :ref[]{to=complex.residue-theorem}.

**3. The real form.** If $g$ and $h$ have real coefficients then $a_{k,j}$ and $a_{l,j}$ are complex conjugates whenever $p_l=\overline{p_k}$, and the two singular parts of a conjugate pair of poles of order $m$ combine into

$$
\sum_{j=1}^{m}\frac{B_j s + C_j}{\bigl[(s-\alpha)^2+\beta^2\bigr]^{\,j}},
\qquad p_k=\alpha+\mathrm{i}\beta,\quad B_j,C_j\in\mathbb{R} ,
$$

so a real $R$ has a decomposition with only real constants, in which each irreducible real quadratic factor of $h$ carries a numerator of degree at most one. Riley, Hobson and Bence give this real form for factors $x^2+a_i^2$ (their p. 23), and Arfken for a general quadratic $x^2+px+q$ (his p. 42).
:::

:::statement[Heaviside expansion theorem]{provenance=adapted src="arfken-2013:§20.10, Exercise 20.10.11, p. 1045"}
If a Laplace transform can be written as $F(s)=g(s)/h(s)$ with $g$ and $h$ analytic and $h$ having simple, isolated zeros at the points $s_i$, then

$$
f(t)\;=\;\mathcal{L}^{-1}\{F\}(t)\;=\;\sum_i \frac{g(s_i)}{h'(s_i)}\,\mathrm{e}^{s_i t} .
$$

Arfken states this as an exercise and in this generality: $g$ and $h$ need only be analytic, not polynomials, so the sum may be infinite — the transform $1/\bigl(s\cosh\sqrt{s}\,\bigr)$ of a heat-conduction problem is of this type. For polynomial $g$ and $h$ with $\deg g<\deg h$ it is exactly part 2 of the decomposition theorem above, inverted term by term with $1/(s-p)\mapsto\mathrm{e}^{pt}$.
:::

:::idea{provenance=original}
A rational function is determined, up to a polynomial, by how it blows up. Near a pole $p_k$ of order $m_k$ the function behaves like a finite string of powers $(s-p_k)^{-m_k},\dots,(s-p_k)^{-1}$, and that string is the singular part $S_k$. Subtract all of the singular parts: what remains is rational with no poles anywhere, hence a polynomial. That is the whole of existence, and it is Ahlfors's argument.

Uniqueness is a counting statement: two decompositions would differ by a rational function that is identically zero, and multiplying the difference by $(s-p_k)^{m_k}$ and letting $s\to p_k$ kills every term except one, forcing the coefficients to agree. Running that same limit on $R$ itself, rather than on the difference, is exactly the formula for the coefficients — which is why the cover-up rule is not a trick but the uniqueness proof read forwards.
:::

:::proof[Existence, uniqueness and the coefficient formula]{provenance=adapted src="ahlfors-1979:Ch. 2, §1.4, Eqs. (12)–(14), pp. 31–32"}
**Step 1: isolate the behaviour at one pole.** Fix $k$ and put $\Phi_k(s)=(s-p_k)^{m_k}R(s)$. Because the quotient is in lowest terms, $g(p_k)\ne0$, and the factor $(s-p_k)^{m_k}$ cancels the whole of that factor in $h$; so $\Phi_k$ is rational with no pole at $p_k$, and $\Phi_k(p_k)\neq 0$. Hence $\Phi_k$ is differentiable at $p_k$ to all orders and has a Taylor expansion there (:ref[]{to=complex.taylor-series}),

$$
\Phi_k(s)=\sum_{i\ge0} c_{k,i}\,(s-p_k)^{i},
\qquad c_{k,i}=\frac{\Phi_k^{(i)}(p_k)}{i!} .
$$

Dividing by $(s-p_k)^{m_k}$,

$$
R(s) \;=\; \underbrace{\sum_{i=0}^{m_k-1}\frac{c_{k,i}}{(s-p_k)^{m_k-i}}}_{\textstyle =:S_k(s)} \;+\; \underbrace{\sum_{i\ge m_k}c_{k,i}(s-p_k)^{i-m_k}}_{\text{no pole at }p_k} .
$$

Setting $j=m_k-i$ identifies the coefficients of $S_k$ as $a_{k,j}=c_{k,m_k-j}=\Phi_k^{(m_k-j)}(p_k)/(m_k-j)!$, which is the formula in part 2 of the statement. For $j=m_k$ the derivative order is zero and the formula reads $a_{k,m_k}=\Phi_k(p_k)$: the cover-up rule.

**Step 2: subtract every singular part.** Consider

$$
D(s) \;=\; R(s)-\sum_{k=1}^{q}S_k(s) .
$$

$D$ is rational, so its only possible poles are the $p_k$. At $p_k$, Step 1 shows $R-S_k$ has no pole, and the other $S_l$ ($l\ne k$) are finite at $p_k$ because $p_l\neq p_k$; so $D$ has no pole at $p_k$ either. A rational function with no poles in $\mathbb{C}$ has a denominator with no roots, hence a constant denominator: $D$ is a polynomial, which we name $G$. This gives the decomposition.

**Step 3: $G$ is the quotient of the division.** Each $S_k(s)\to0$ as $\lvert s\rvert\to\infty$, so $R-G\to0$. Multiplying the decomposition by $h$ gives $g = Gh + r$ with $r=h\cdot(R-G)$ a polynomial of degree less than $\deg h$ — because $r/h\to0$ at infinity. By uniqueness of polynomial division, $G$ is the quotient and $r$ the remainder of $g$ by $h$. In particular $G=0$ precisely when $R$ is proper, and $\deg G=\deg g-\deg h$ otherwise. This is the preliminary long division of Riley, Hobson and Bence's Eq. (1.45).

**Step 4: uniqueness.** Suppose two decompositions of $R$ exist, with data $(G,a_{k,j})$ and $(\tilde G,\tilde a_{k,j})$. Subtracting, the rational function

$$
0 \;=\; (G-\tilde G)(s)+\sum_{k}\sum_{j}\frac{a_{k,j}-\tilde a_{k,j}}{(s-p_k)^{j}}
$$

holds for all $s$ outside the poles. Fix $k$, multiply by $(s-p_k)^{m_k}$ and let $s\to p_k$: every term with $l\ne k$, and the polynomial term, carries the factor $(s-p_k)^{m_k}\to0$; the terms with $j<m_k$ carry $(s-p_k)^{m_k-j}\to0$; only $a_{k,m_k}-\tilde a_{k,m_k}$ survives, so it is zero. Remove that term and repeat with $(s-p_k)^{m_k-1}$ to get $a_{k,m_k-1}=\tilde a_{k,m_k-1}$, and so on down to $j=1$. Doing this at every pole leaves $G-\tilde G=0$. The count $\sum_k m_k=\deg h$ of coefficients is immediate from the factorisation.

**Step 5: the real form.** Let $g,h$ have real coefficients. Taking complex conjugates in $R(\bar s)=\overline{R(s)}$ and using uniqueness, the decomposition of $R$ obtained by conjugating all coefficients and swapping each $p_k$ for $\overline{p_k}$ is again a decomposition of $R$; so $a_{\bar k,j}=\overline{a_{k,j}}$, where $\bar k$ indexes the pole $\overline{p_k}$. For a conjugate pair $p=\alpha+\mathrm{i}\beta$, $\bar p=\alpha-\mathrm{i}\beta$ with $\beta\neq0$, the two $j$th terms add to

$$
\frac{a_j}{(s-p)^j}+\frac{\overline{a_j}}{(s-\bar p)^j}
=\frac{a_j (s-\bar p)^j+\overline{a_j}(s-p)^j}{\bigl[(s-\alpha)^2+\beta^2\bigr]^{j}} ,
$$

using $(s-p)(s-\bar p)=(s-\alpha)^2+\beta^2$. The numerator is $2\operatorname{Re}\bigl[a_j(s-\bar p)^j\bigr]=:N_j(s)$, a real polynomial of degree $\le j$, and we write $Q(s)=(s-\alpha)^2+\beta^2$ for the real quadratic in the denominator. It remains to reduce $N_j/Q^{\,j}$ to the advertised shape. Divide $N_j$ by $Q$ with remainder: $N_j=Q\,U_j+(B_js+C_j)$ with $B_j,C_j\in\mathbb{R}$ and $U_j$ real of degree $\le j-2$, so that

$$
\frac{N_j}{Q^{\,j}}=\frac{B_js+C_j}{Q^{\,j}}+\frac{U_j}{Q^{\,j-1}} .
$$

The second term has the same shape as the first with the exponent lowered by one and the numerator degree lowered by two, so the division can be repeated on it. After $r$ repetitions the exponent is $j-r$ and the numerator degree is at most $j-2r$; by the time the exponent has fallen to $1$, at $r=j-1$, the numerator degree is at most $2-j\le1$ and nothing is left to divide. So $N_j/Q^{\,j}$ is a real combination of terms $(Bs+C)/Q^{\,i}$ with $i\le j$. Summing over $j=1,\dots,m$ and collecting the terms with equal $i$ gives the form in part 3. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
- **Lowest terms.** Step 1 uses $g(p_k)\neq0$ only to say that $p_k$ really is a pole of order $m_k$. If $g$ and $h$ share the root $p_k$, the cover-up rule applied to the uncancelled $h$ returns $\lim_{s\to p_k}(s-p_k)^{m_k}g(s)/h(s)=0$, because the numerator still carries the factor $s-p_k$; and the ansatz of "one term per factor of $h$" asks for more terms than the function has poles. Cancel common factors first.
- **Properness.** Nothing fails without it — $G$ simply is not zero. What fails is the naive ansatz: $(s^{3}+2)/(s^{2}-1)$ is in lowest terms (the numerator is $3$ at $s=1$ and $1$ at $s=-1$), and if one writes it as $A/(s-1)+B/(s+1)$ the right side tends to $0$ as $\lvert s\rvert\to\infty$ while the left side grows like $s$, so no choice of $A,B$ can repair it. Riley, Hobson and Bence make the division the first step for exactly this reason.
- **Distinctness of the $p_k$.** Step 2 needs $S_l$ to be finite at $p_k$ for $l\ne k$, which is the statement $p_l\neq p_k$. This is why the factorisation must be organised by *distinct* roots with multiplicities, not by repeating a factor.
- **The full string of powers at a repeated pole.** Dropping the lower powers is the standard error. Take $R(s)=1/[(s+1)(s-3)^{2}]$ and suppose it could be written as $A/(s+1)+B/(s-3)^{2}$, with no $1/(s-3)$ term. Clearing denominators, $1=A(s-3)^{2}+B(s+1)$ would have to hold for every $s$. Putting $s=3$ gives $B=\tfrac14$ and putting $s=-1$ gives $A=\tfrac1{16}$; but then the coefficient of $s^{2}$ is $A=\tfrac1{16}$ on the right and $0$ on the left. No pair $(A,B)$ works, and the missing $1/(s-3)$ term is what repairs it. Riley, Hobson and Bence issue the same warning on their p. 23.
- **The cover-up rule at a repeated pole.** With $m_k>1$ the rule gives only $a_{k,m_k}$, the coefficient of the *highest* inverse power; the remaining $a_{k,j}$ need the derivatives. Riley, Hobson and Bence state this restriction explicitly on their p. 24. The reason is visible in Step 1: a derivative of $\Phi_k$ is needed to reach the next Taylor coefficient.
- **Real coefficients for the real form.** Step 5 is the only place realness is used. For a genuinely complex $R$ there is no real form, and one works with the complex poles directly.
- **$\beta\ne0$ in the real form.** A real quadratic with $\beta=0$ is $(s-\alpha)^2$, not irreducible; it belongs to the repeated-real-pole case.
:::

:::method[Decomposing, and inverting a transform]{provenance=adapted src="rhb-2006:§1.4 and §1.4.1, pp. 19–24; arfken-2013:§1.5, pp. 42–43, and §20.7, Example 20.7.2, p. 1013"}
Given a rational transform $F(s)=g(s)/h(s)$:

1. **Cancel and normalise.** Remove common factors of $g$ and $h$; divide through so that $h$ is monic.
2. **Divide if improper.** If $\deg g\ge\deg h$, divide to get $F=G+r/h$ with $\deg r<\deg h$. For a Laplace transform a non-zero $G$ signals a delta function and its derivatives in $F(t)$, since $\mathcal{L}\{\delta\}=1$; a transform of an ordinary function is always proper.
3. **Factor $h$** and list the distinct poles $p_k$ with their orders $m_k$. Decide now whether to work over $\mathbb{C}$ (every factor linear) or over $\mathbb{R}$ (complex pairs kept as quadratics). For hand inversion of a real transform the real route is usually shorter, because it lands directly on $\mathrm{e}^{\alpha t}\cos\beta t$ and $\mathrm{e}^{\alpha t}\sin\beta t$.
4. **Write the ansatz** with one term per factor: $a_{k,j}/(s-p_k)^j$ for $j=1,\dots,m_k$ at each real or complex pole, and $(B_js+C_j)/[(s-\alpha)^2+\beta^2]^j$ for each conjugate pair kept real.
5. **Fix the coefficients.** Cover-up first: it gives every $a_{k,1}$ at a simple pole and the top coefficient $a_{k,m_k}$ at a repeated one, with no simultaneous equations. For the rest, either differentiate as in part 2 of the statement, or subtract the terms already known from $F$ and simplify, or substitute a few convenient values of $s$ and solve. Riley, Hobson and Bence list these as methods (i)–(iii) and mix them freely.
6. **Check.** Evaluate both sides at one value of $s$ that is not a pole — $s=0$ is usually easiest — or compare the coefficient of $1/s$ as $s\to\infty$: for a proper $F$, $\sum_k a_{k,1}$ must equal $\lim_{s\to\infty} sF(s)$.
7. **Invert term by term**, using linearity and the standard pairs of :ref[]{to=fourier.laplace-transform}:

$$
\frac{1}{(s-p)^{m}}\ \longmapsto\ \frac{t^{m-1}\mathrm{e}^{pt}}{(m-1)!},
\qquad
\frac{s-\alpha}{(s-\alpha)^2+\beta^2}\ \longmapsto\ \mathrm{e}^{\alpha t}\cos\beta t,
\qquad
\frac{\beta}{(s-\alpha)^2+\beta^2}\ \longmapsto\ \mathrm{e}^{\alpha t}\sin\beta t .
$$

   To use the last two, first write the numerator of a quadratic term as a multiple of $s-\alpha$ plus a constant; completing the square in the denominator supplies $\alpha$ and $\beta$. This is the step Arfken's Example 20.7.2 performs, reading each piece off a table.
8. **Check the answer at $t=0$.** The initial-value theorem $f(0^+)=\lim_{s\to\infty}sF(s)$ catches most sign errors in one line.

**For a $z$-transform** $X(z)=\sum_{n\ge0}x_n z^{-n}$, apply the same steps to $X(z)/z$ rather than to $X(z)$, then multiply each resulting term by $z$. The reason is that the useful tabulated pair is $z/(z-p)\mapsto p^{n}$, not $1/(z-p)$; decomposing $X(z)/z$ puts a factor $z$ on every term automatically and keeps the $n=0$ value right. A repeated pole gives $z/(z-p)^2\mapsto (n/p)\,p^{n}$, and a conjugate pair gives a damped oscillation $r^n\cos(n\theta+\varphi)$ with $p=r\mathrm{e}^{\mathrm{i}\theta}$.
:::


:::example[A fourth-order transform, and a $z$-transform]{provenance=original}
**(a) Laplace, with a double pole and a complex pair.** Invert

$$
F(s)=\frac{2s^{2}+11s+19}{(s+2)^{2}\,\bigl(s^{2}+2s+5\bigr)} .
$$

*Step 1–3.* The numerator has no root at $s=-2$ ($8-22+19=5\neq0$) nor at the roots of $s^2+2s+5$, so the quotient is in lowest terms; it is proper (degree $2$ over degree $4$), so $G=0$. The poles are $s=-2$, double, and $s=-1\pm2\mathrm{i}$, simple. We keep the pair real: $s^2+2s+5=(s+1)^2+4$, so $\alpha=-1$, $\beta=2$.

*Step 4.* The ansatz is

$$
F(s)=\frac{A}{(s+2)^{2}}+\frac{B}{s+2}+\frac{Cs+D}{(s+1)^{2}+4} .
$$

*Step 5.* Write $\Phi(s)=(s+2)^2F(s)=(2s^2+11s+19)/(s^2+2s+5)$. Cover-up gives

$$
A=\Phi(-2)=\frac{8-22+19}{4-4+5}=\frac{5}{5}=1 .
$$

For $B$ we need one derivative. With $u=2s^2+11s+19$ and $v=s^2+2s+5$,

$$
\Phi'=\frac{u'v-uv'}{v^{2}},\qquad
\Phi'(-2)=\frac{(4(-2)+11)\cdot5-5\cdot(2(-2)+2)}{5^{2}}=\frac{3\cdot5-5\cdot(-2)}{25}=\frac{25}{25}=1 ,
$$

so $B=\Phi'(-2)/1!=1$, the factor $1/(m_k-j)!$ of part 2 being $1/(2-1)!=1$ here. Subtracting the two known terms and simplifying gives the rest:

$$
F(s)-\frac{1}{(s+2)^{2}}-\frac{1}{s+2}
=\frac{2s^{2}+11s+19-(s^{2}+2s+5)-(s+2)(s^{2}+2s+5)}{(s+2)^{2}(s^{2}+2s+5)} .
$$

The numerator is $2s^2+11s+19-(s^2+2s+5)-(s^3+4s^2+9s+10)=-s^{3}-3s^{2}+4=-(s+2)^{2}(s-1)$, so the quotient is $(-s+1)/(s^2+2s+5)$ and $C=-1$, $D=1$.

*Step 6: check.* At $s=0$ the left side is $19/(4\cdot5)=0.95$ and the right side is $\tfrac14+\tfrac12+\tfrac15=0.95$. Also $\lim_{s\to\infty}sF(s)=0$ and the residues sum to $B+C=1-1=0$, as they must.

*Step 7.* Split the quadratic term as $(-s+1)=-(s+1)+2$:

$$
F(s)=\frac{1}{(s+2)^{2}}+\frac{1}{s+2}-\frac{s+1}{(s+1)^{2}+4}+\frac{2}{(s+1)^{2}+4} ,
$$

so, term by term,

$$
f(t)=t\,\mathrm{e}^{-2t}+\mathrm{e}^{-2t}-\mathrm{e}^{-t}\cos2t+\mathrm{e}^{-t}\sin2t
=(1+t)\,\mathrm{e}^{-2t}+\mathrm{e}^{-t}\bigl(\sin2t-\cos2t\bigr) .
$$

*Step 8: check.* $f(0)=1+(0-1)=0$, matching $\lim_{s\to\infty}sF(s)=0$; and $f'(0)=2$ matches $\lim_{s\to\infty}s^{2}F(s)=2$. At $t=1$,

$$
f(1)=2\mathrm{e}^{-2}+\mathrm{e}^{-1}(\sin 2-\cos 2)=0.2706706+0.4876037=0.7582743\quad(7\ \text{d.p.}) .
$$

**(b) A $z$-transform.** Invert $X(z)=\dfrac{z}{(z-1)\bigl(z-\tfrac12\bigr)}$, the transfer function of a first-order digital accumulator driven by a step.

Decompose $X(z)/z$, not $X(z)$:

$$
\frac{X(z)}{z}=\frac{1}{(z-1)(z-\tfrac12)}=\frac{2}{z-1}-\frac{2}{z-\tfrac12},
$$

the two coefficients by cover-up: $1/(1-\tfrac12)=2$ and $1/(\tfrac12-1)=-2$. Multiplying back by $z$,

$$
X(z)=\frac{2z}{z-1}-\frac{2z}{z-\tfrac12}
\qquad\Longrightarrow\qquad
x_n=2-2\Bigl(\tfrac12\Bigr)^{n}=2-2^{\,1-n} .
$$

*Check.* $x_0=2-2=0$, consistent with $X(z)\to0$ as $z\to\infty$; and expanding $X$ in powers of $z^{-1}$ directly,

$$
X(z)=\frac{z^{-1}}{1-\tfrac32 z^{-1}+\tfrac12 z^{-2}}=z^{-1}+\tfrac32 z^{-2}+\tfrac74 z^{-3}+\tfrac{15}{8}z^{-4}+\cdots ,
$$

which gives $x_1=1$, $x_2=1.5$, $x_3=1.75$, $x_4=1.875$ — the same as $2-2^{1-n}$. The sequence climbs to its limit $x_\infty=2$, and the rate at which it does so is set by the pole at $z=\tfrac12$: the transient is $-2\cdot2^{-n}$, halving each step.
:::

:::application[Where the decomposition does the work]{provenance=original}
**Modes of a linear system.** Laplace-transforming a constant-coefficient ODE (:ref[]{to=ode.laplace-transform-method}) turns it into $P(s)X(s)=Q(s)$, with $P$ the characteristic polynomial and $Q$ carrying the forcing and the initial data. The response is the rational function $X=Q/P$, and its partial-fraction decomposition *is* the modal decomposition of the system: one term per root of $P$, each inverting to a mode $\mathrm{e}^{pt}$, $t^{j}\mathrm{e}^{pt}$ or $\mathrm{e}^{\alpha t}\cos\beta t$. Stability is read off the poles — all in $\operatorname{Re}s<0$ — and the slowest mode is the pole nearest the imaginary axis, as in part (a), where the pair at $-1\pm2\mathrm{i}$ decays more slowly than the double pole at $-2$ and therefore dominates for large $t$. A repeated pole is the critically damped case, and the factor $t$ in $t\mathrm{e}^{-2t}$ is where it shows itself.

**Circuits and transfer functions.** A network of resistors, capacitors and inductors has an impedance that is a rational function of $s$; so is the transfer function from any input to any output. Partial fractions convert it into a sum of first-order lags and resonant second-order sections, which is both how such a filter is analysed and how it is physically built, section by section. The coefficient $a_{k,1}$ at a pole is the residue, so the same numbers appear if one instead closes the Bromwich contour of :ref[]{to=fourier.laplace-transform} and sums residues.

**Digital filters and difference equations.** A linear recurrence $\sum_j \alpha_j y_{n-j}=\sum_j\beta_j u_{n-j}$ becomes $Y(z)=H(z)U(z)$ with $H$ rational, and part (b) is the pattern for getting the impulse response back: poles inside $\lvert z\rvert<1$ give decaying terms, a pole on the unit circle gives a persistent oscillation or a constant, and a pole outside means the filter diverges. The same algebra on a probability generating function (:ref[]{to=prob.generating-functions}) turns a rational generating function into a closed form for the $n$th term — the Fibonacci numbers being the smallest example, with two simple poles.

**Rational integrands and series.** The decomposition is also what makes $\int R(x)\,\mathrm{d}x$ elementary for every rational $R$: each term integrates to a logarithm, a power, or an arctangent. Arfken uses it in the opposite direction, to convert an awkward series into telescoping pieces, and it is the finite counterpart of the pole expansions of a meromorphic function in :ref[]{to=complex.pole-expansions-products}.
:::
