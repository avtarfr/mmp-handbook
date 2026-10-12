---
id: spec.hypergeometric
title: The hypergeometric function
kind: definition
level: core
summary: "The Gauss series ${}_2F_1(a,b;c;x)$ and the three-singular-point equation it solves, with Euler's integral representation, Gauss's closed form at $x=1$, and the reduction of elementary and classical-polynomial functions to it."
prereqs: [ode.frobenius-method, spec.gamma-function, spec.beta-function, found.power-series]
provenance: adapted
sources:
  - work: rhb-2006
    loc: "§18.10, the hypergeometric equation (18.136) and its Frobenius treatment, eqs. (18.137)–(18.143), pp. 628–630; §18.10.1, the table of special cases and the Chebyshev worked example, p. 631; the integral representation (18.144) with its derivation and the value at $x=1$, pp. 631–632; the transformation (18.145), the derivative relation (18.146) and the contiguous relation, p. 632"
    pages: "628-632"
    role: the form of the equation and its three regular singular points, the Frobenius calculation and the coefficient recurrence, the pair of solutions at the origin and the conditions on $c$, the endpoint convergence thresholds, the list of elementary and polynomial special cases, Euler's integral representation and the route to Gauss's summation formula
  - work: arfken-2013
    loc: "§18.5, eq. (18.120) and the series (18.121) in Pochhammer form, pp. 911–912; the second solution (18.123) and the integer-$c$ caveat, p. 912; contiguous relations (18.126)–(18.127) and the hypergeometric representations (18.128)–(18.135) of the ultraspherical, Legendre and Chebyshev functions, pp. 913–914; Exercises 18.5.7, 18.5.8 and 18.5.12, pp. 915–916"
    pages: "911-916"
    role: the Pochhammer-symbol form of the series and the meaning of the subscripts in ${}_2F_1$, the real-parameter convergence thresholds at the endpoints, the polynomial and degenerate cases, the standard second solution, the hypergeometric forms of the classical polynomials, and the statements of the integral representation and of Gauss's summation formula with their hypotheses
  - work: hassani-2013
    loc: "§15.4, the HGDE (15.21), the characteristic exponents and the recurrence, the Gamma-quotient form (15.22) of the series and Box 15.4.1, pp. 473–474; the canonical basis (15.24) and the identity (15.25), pp. 474–476; the bases at $z=1$ and $z=\\infty$, eqs. (15.26)–(15.31), and the elementary special cases, pp. 476–477"
    pages: "473-477"
    role: the Gamma-quotient form of the coefficients, the termination of the series when a numerator parameter is a negative integer, the canonical bases at the three singular points and Kummer's count of twenty-four solutions, and the symmetry and derivative identities
  - work: ahlfors-1979
    loc: "§4.4 of Ch. 9, the reduction of a second-order equation with three regular singularities to eq. (24), pp. 315–316; the coefficient recurrence, the series, the radius-of-convergence argument and the second solution at the origin, pp. 317–318; Exercise 3, p. 318"
    pages: "315-318"
    role: the proof that every second-order linear equation with exactly three regular singular points reduces to the hypergeometric equation, the exponent bookkeeping behind that reduction, and the function-theoretic argument that the radius of convergence is exactly one unless the series terminates
  - work: coddington-1989
    loc: "Ch. 4, §9, the hypergeometric equation as the example of an equation with three regular singular points, p. 182; Exercises 5 and 6, pp. 182–183"
    pages: "182-183"
    role: the identification of $0$, $1$ and $\infty$ as the regular singular points, and the Legendre equation as a hypergeometric equation after $z \mapsto 2t-1$
---

:::definition[Pochhammer symbols and the Gauss series]{provenance=adapted src="arfken-2013:§18.5, eqs. (18.121) and the definition of $(a)_n$, p. 912; rhb-2006:§18.10, eqs. (18.141)–(18.142) and the footnote on the notation ${}_2F_1$, pp. 629–630; hassani-2013:§15.4, eq. (15.22) and Box 15.4.1, p. 473"}
For a complex number $a$ and an integer $n \ge 0$ the **Pochhammer symbol** (rising factorial) is
$$
(a)_0 = 1, \qquad (a)_n = a(a+1)(a+2)\cdots(a+n-1) .
$$
When $a$ is not a non-positive integer, $(a)_n = \Gamma(a+n)/\Gamma(a)$ (:ref[]{to=spec.gamma-function}).

Let $a$, $b$ be arbitrary and let $c$ be neither $0$ nor a negative integer. The **Gauss series**, or **hypergeometric series**, is
$$
{}_2F_1(a,b;c;x) \;=\; \sum_{n=0}^{\infty} \frac{(a)_n (b)_n}{(c)_n}\,\frac{x^n}{n!}
\;=\; 1 + \frac{ab}{c}\,\frac{x}{1!} + \frac{a(a+1)\,b(b+1)}{c(c+1)}\,\frac{x^2}{2!} + \cdots ,
$$
and its sum is the **hypergeometric function**. Three features are immediate from the display.

- **Symmetry.** $a$ and $b$ enter identically, so ${}_2F_1(a,b;c;x) = {}_2F_1(b,a;c;x)$.
- **Termination.** If $a$ or $b$ is $0$ or a negative integer $-m$, then $(a)_n = 0$ for every $n > m$ and the series is a polynomial of degree at most $m$. Hassani reaches the same conclusion from the Gamma-quotient form of the coefficients, where the poles of $\Gamma(a+k)$ and of $\Gamma(a)$ cancel while $k \le m$ and the pole of $\Gamma(a)$ alone survives afterwards.
- **It generalises the geometric series.** Taking $b = c$ cancels the two middle factors and leaves $\sum_n (a)_n x^n/n!$, and with $a = 1$ as well this is $\sum_n x^n$ — which is where the name comes from.

**Notation.** The subscripts in ${}_2F_1$ count Pochhammer symbols: two upstairs, one downstairs. They exist to distinguish the function from the generalised series ${}_pF_q$, and in particular from the ${}_1F_1$ of :ref[]{to=spec.confluent-hypergeometric}. Where no confusion can arise, Riley, Hobson and Bence and Hassani write $F(a,b,c;x)$ and $F(\alpha,\beta;\gamma;z)$ for the same object; Arfken, Weber and Harris separate the numerator from the denominator parameters with a semicolon, and we follow them. Our variable is written $x$ when it is real and $z$ when the complex plane is in view; the function is the same.

**Where the series converges.** The ratio of consecutive terms is $(a+n)(b+n)x/[(n+1)(c+n)] \to x$, so unless the series terminates its radius of convergence is $1$. On the boundary, Riley, Hobson and Bence record for real parameters that the series converges at $x = 1$ when $c > a+b$ and at $x = -1$ when $c > a+b-1$; Arfken, Weber and Harris give the same two thresholds, and describe the series as divergent when $c \le a+b-1$, which is a statement about the endpoints only, the radius of convergence being $1$ in every non-terminating case.
:::

:::statement[The hypergeometric equation, its solutions, and Gauss's summation formula]{provenance=adapted src="rhb-2006:§18.10, eqs. (18.136)–(18.143), pp. 628–630, and eq. (18.144) with the value at $x=1$, pp. 631–632; arfken-2013:§18.5, eqs. (18.120), (18.123), pp. 911–912, and Exercises 18.5.7–18.5.8, pp. 915–916; hassani-2013:§15.4, eqs. (15.21)–(15.24), pp. 473–474; ahlfors-1979:§4.4, eq. (24) and the following page, pp. 316–318; coddington-1989:Ch. 4, §9, p. 182"}
Let $a$, $b$, $c$ be given numbers. The **hypergeometric equation** (Gauss's equation) is
$$
x(1-x)\,y'' + \bigl[\,c - (a+b+1)x\,\bigr]y' - ab\,y = 0 .
\tag{H}
$$

1. **Singular points.** The points $x = 0$, $x = 1$ and $x = \infty$ are regular singular points of (H), and there are no others. Conversely, every second-order linear equation whose only singularities in the extended plane are three regular singular points can be brought to the form (H) by a Möbius change of the independent variable followed by multiplication of the unknown by a power of $x$ and a power of $x-1$.
2. **Solutions at the origin.** The exponents of (H) at $x = 0$ are $0$ and $1-c$. If $c$ is neither $0$ nor a negative integer then
   $$
   y_1(x) = {}_2F_1(a,b;c;x)
   $$
   solves (H) on $\lvert x\rvert < 1$. If in addition $c$ is not a positive integer, then
   $$
   y_2(x) = x^{1-c}\,{}_2F_1(a-c+1,\,b-c+1;\,2-c;\,x)
   $$
   is a second solution, and $y_1$, $y_2$ are independent, so the general solution on $0 < \lvert x\rvert < 1$ is $Ay_1 + By_2$. The solutions regular at the origin are the multiples of $y_1$. When $c$ is an integer the two formulas coincide or one of them breaks down, and a logarithm appears in the second solution.
3. **Euler's integral representation.** If $c > b > 0$ and $\lvert x \rvert < 1$,
   $$
   {}_2F_1(a,b;c;x) = \frac{\Gamma(c)}{\Gamma(b)\,\Gamma(c-b)}\int_{0}^{1} t^{\,b-1}(1-t)^{\,c-b-1}(1-tx)^{-a}\,\mathrm{d}t .
   \tag{E}
   $$
4. **Gauss's summation formula.** If $a$, $b$, $c$ are real, $c$ is not $0$ or a negative integer, and $c > a+b$, then the series converges at $x = 1$ and
   $$
   {}_2F_1(a,b;c;1) = \frac{\Gamma(c)\,\Gamma(c-a-b)}{\Gamma(c-a)\,\Gamma(c-b)} .
   \tag{G}
   $$
:::

:::idea{provenance=original}
Everything here is forced by the shape of (H). Dividing by $x(1-x)$ shows that the coefficient of $y'$ has simple poles only at $0$ and $1$ and the coefficient of $y$ a simple pole at each as well, which is exactly the Frobenius condition at both points; counting degrees at infinity gives the third singularity and no more. Because the singularities are at $0$ and $1$ and nowhere else in the finite plane, a power series about the origin can only fail at distance $1$, so the radius of convergence is $1$ without any estimate being needed.

For the series itself, Frobenius turns (H) into a *two-term* recurrence — the price of the particular quadratic $x(1-x)$ multiplying $y''$ — and a two-term recurrence can simply be iterated. The coefficient that comes out, $(a)_n(b)_n/[(c)_n n!]$, is the definition of ${}_2F_1$; the numerator parameters are those of the recurrence's numerator and the denominator parameter is $c$, which is why the three parameters of the equation reappear unchanged in the function.

Gauss's formula (G) is the only statement here that is not bookkeeping, and it is Euler's integral in disguise: put $x = 1$ in (E) and the integrand collapses to $t^{b-1}(1-t)^{c-a-b-1}$, a Beta integral. All the Gamma functions in (G) come from that one Beta function together with the normalising constant already present in (E).
:::

:::proof{provenance=adapted src="rhb-2006:§18.10, eqs. (18.137)–(18.143), pp. 629–630, and the derivation of (18.144) and of the value at $x=1$, pp. 631–632; hassani-2013:§15.4, the recurrence and eqs. (15.22)–(15.24), pp. 473–474; ahlfors-1979:§4.4, pp. 316–318"}
**1. The singular points.** Write (H) as $y'' + p\,y' + q\,y = 0$ with
$$
p(x) = \frac{c-(a+b+1)x}{x(1-x)}, \qquad q(x) = \frac{-ab}{x(1-x)} .
$$
Both are analytic except at $0$ and $1$. At $x=0$, $xp(x)$ and $x^2q(x)$ are analytic (the second vanishes there), so $0$ is a regular singular point in the sense of :ref[]{to=ode.frobenius-method}; the same computation at $x=1$ with $(x-1)p$ and $(x-1)^2q$ gives the second. For infinity substitute $x = 1/t$: the transformed equation has $t=0$ as a regular singular point because $p(1/t)$ is $O(t)$ and $q(1/t)$ is $O(t^2)$ as $t \to 0$, which is precisely the criterion. Coddington lists (H) as *the* example of an equation with these three regular singular points and no others.

For the converse we follow Ahlfors. Place the three singularities at $0$, $1$, $\infty$ by a Möbius map of the independent variable, which preserves both the order of the equation and the character of each singularity. Requiring regularity at $0$ and $1$ forces
$$
p(x) = \frac{A}{x} + \frac{B}{x-1}, \qquad q(x) = \frac{C}{x^2} + \frac{D}{x(x-1)} + \frac{E}{(x-1)^2}
$$
with no entire parts, since any polynomial added would make $\infty$ irregular, and regularity at infinity also forces one linear relation among the constants. The indicial equations at $0$, $1$ and $\infty$ then express $A,\dots,E$ in terms of the six exponents, whose sum is $1$. Finally, substituting $y = x^{\alpha_1}(x-1)^{\beta_1}w$, where $\alpha_1$ is one exponent at $0$ and $\beta_1$ one exponent at $1$, lowers those two exponents to $0$ and leaves an equation of exactly the form (H), with
$$
c = 1+\alpha_1-\alpha_2, \qquad a = \alpha_1+\beta_1+\gamma_1, \qquad b = \alpha_1+\beta_1+\gamma_2 .
$$
Ahlfors assumes here that no exponent difference is an integer, so that the two exponents at each singularity really are distinguishable and the substitution does not collapse.

**2. The series.** Put $y = \sum_{n\ge0} a_n x^{n+\sigma}$ into (H) and divide by $x^{\sigma-1}$:
$$
\sum_{n\ge0}\Bigl\{(1-x)(n+\sigma)(n+\sigma-1) + \bigl[c-(a+b+1)x\bigr](n+\sigma) - abx\Bigr\}a_n x^{n} = 0 .
$$
Setting $x=0$ keeps only $n=0$ and gives the indicial equation $\sigma(\sigma-1)+c\sigma = 0$, with roots $\sigma = 0$ and $\sigma = 1-c$, as Hassani also records.

Take $\sigma = 0$ and collect the coefficient of $x^{n+1}$. The terms with $(1-x)$ and with $c$ contribute from $a_{n+1}$, the rest from $a_n$:
$$
(n+1)(n+c)\,a_{n+1} = \bigl[n(n-1) + (a+b+1)n + ab\bigr]a_n = (n+a)(n+b)\,a_n ,
$$
the factorisation on the right being the identity $n^2+(a+b)n+ab = (n+a)(n+b)$. Hence
$$
a_{n+1} = \frac{(a+n)(b+n)}{(n+1)(c+n)}\,a_n ,
$$
which is solvable in closed form because only two consecutive coefficients occur. With $a_0=1$, iterating gives $a_n = (a)_n(b)_n/[(c)_n\,n!]$, and no denominator vanishes precisely because $c \notin \{0,-1,-2,\dots\}$. This is the Gauss series, so $y_1 = {}_2F_1(a,b;c;x)$ solves (H) wherever the series converges.

For the convergence radius: by the ratio test it is $1$ unless the series terminates. Ahlfors gives a reason that uses no estimate at all. The series continues analytically along every path avoiding $x=1$; if its radius exceeded $1$ it would be entire, and near infinity an entire solution would have to be a combination of the two solutions $x^{-a}g_1$, $x^{-b}g_2$ that the theory provides there, which is single-valued only if $a$ or $b$ is an integer. Liouville's theorem then rules out a positive integer, leaving only the terminating case.

**Second solution.** Put $y = x^{1-c}u$ in (H). A direct substitution shows $u$ satisfies the hypergeometric equation with parameters
$$
a_1 = a-c+1, \qquad b_1 = b-c+1, \qquad c_1 = 2-c ,
$$
which is the same bookkeeping Riley, Hobson and Bence perform by taking $\sigma = 1-c$ in the Frobenius sum and comparing the resulting recurrence with the first one. Provided $c_1 = 2-c$ is not $0$ or a negative integer — that is, $c$ is not $2,3,4,\dots$ — the first part applies to $u$, giving $y_2 = x^{1-c}{}_2F_1(a_1,b_1;c_1;x)$. Independence is free: $y_1(0) = 1$ while $y_2$ behaves like $x^{1-c}$ at the origin, so for non-integer $c$ no constant multiple of one is the other.

**3. Euler's integral.** Assume $c>b>0$ and $\lvert x\rvert<1$. Start from the series and write each coefficient as a Beta function (:ref[]{to=spec.beta-function}): since $(b)_n/(c)_n = \Gamma(b+n)\Gamma(c)/[\Gamma(b)\Gamma(c+n)]$ and $B(b+n,c-b) = \Gamma(b+n)\Gamma(c-b)/\Gamma(c+n)$,
$$
\frac{(b)_n}{(c)_n} = \frac{\Gamma(c)}{\Gamma(b)\Gamma(c-b)}\,B(b+n,\,c-b)
= \frac{\Gamma(c)}{\Gamma(b)\Gamma(c-b)}\int_0^1 t^{\,b+n-1}(1-t)^{\,c-b-1}\,\mathrm{d}t ,
$$
the Beta integral converging because $b+n>0$ and $c-b>0$. Substituting this into the series,
$$
{}_2F_1(a,b;c;x) = \frac{\Gamma(c)}{\Gamma(b)\Gamma(c-b)}\int_0^1 t^{\,b-1}(1-t)^{\,c-b-1}\sum_{n\ge0}\frac{(a)_n}{n!}(tx)^n\,\mathrm{d}t .
$$
Interchanging sum and integral is legitimate: for $0\le t\le1$ and fixed $\lvert x\rvert = r < 1$ the inner series is dominated termwise by $\lvert(a)_n\rvert r^n/n!$, whose sum is finite, so the convergence is uniform in $t$ and the integrable factor $t^{b-1}(1-t)^{c-b-1}$ may be carried through. Finally the inner sum is the binomial series $\sum_n (a)_n w^n/n! = (1-w)^{-a}$ at $w=tx$, which gives (E). Riley, Hobson and Bence run this computation in the same direction; Arfken, Weber and Harris set it as Exercise 18.5.7 with the same hypothesis $c>b>0$.

**4. Gauss's formula.** Suppose first $c>b>0$ and $c-a-b>0$. Let $x \to 1^-$ in (E). The integrand increases to $t^{b-1}(1-t)^{c-a-b-1}$, which is integrable on $(0,1)$ exactly because $b>0$ and $c-a-b>0$; monotone convergence (for $a>0$; for $a\le0$ the integrand is bounded by an integrable function uniformly in $x$, and dominated convergence applies) therefore permits the limit under the integral sign, and
$$
\lim_{x\to1^-}{}_2F_1(a,b;c;x) = \frac{\Gamma(c)}{\Gamma(b)\Gamma(c-b)}\int_0^1 t^{\,b-1}(1-t)^{\,c-a-b-1}\mathrm{d}t
= \frac{\Gamma(c)}{\Gamma(b)\Gamma(c-b)}\cdot\frac{\Gamma(b)\Gamma(c-a-b)}{\Gamma(c-a)} ,
$$
which is the right-hand side of (G). Since $c>a+b$, the series converges at $x=1$, and by Abel's theorem (:ref[]{to=found.power-series}) its sum there is that same limit. The restriction $c>b$ is removable by the symmetry in $a$ and $b$ whenever $c>a$, and the remaining cases follow by analytic continuation in the parameters, both sides of (G) being analytic where $c>a+b$ holds. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
- **$c \notin \{0,-1,-2,\dots\}$** is used exactly once, at the step where the recurrence is iterated: a vanishing $(c)_n$ would make the coefficient undefined. If $c$ is a non-positive integer the exponent $0$ is still a root of the indicial equation, but the Frobenius recurrence breaks down at $n = -c$ and the series solution must be replaced by the other exponent's solution together with a logarithm.
- **$c$ not a positive integer** is what makes $y_2$ exist and differ from $y_1$. For $c=1$ the two formulas are literally the same function. For $c = 2,3,4,\dots$ the parameter $2-c$ of $y_2$ is a non-positive integer, so $y_2$ is not defined at all. Arfken, Weber and Harris note the escape hatch: for integer $c$ one of the two may still be rescued if $a$ or $b$ is an integer too, so that the offending denominator is cancelled by a vanishing numerator.
- **$c > b > 0$** is used twice in (E), and for different reasons. $b>0$ makes $t^{b-1}$ integrable at $t=0$; $c-b>0$ makes $(1-t)^{c-b-1}$ integrable at $t=1$. Neither is needed for the series, so (E) is strictly weaker than the series as a definition — but it is the representation that continues ${}_2F_1$ analytically past $x=1$ into the plane cut along $[1,\infty)$, which the series cannot do.
- **$c > a+b$** is needed twice as well: once for the convergence of the series at $x=1$, and once for the convergence of the Beta integral at $t=1$ after $x$ has been set to $1$. The two conditions are the same inequality, which is not a coincidence: both measure the same failure. If $c \le a+b$ the limit is $+\infty$ for positive parameters, in line with the pole that the right-hand side of (G) has at $c-a-b = 0$. A concrete case: $a=b=\tfrac12$, $c=1$ gives $c-a-b=0$ and ${}_2F_1(\tfrac12,\tfrac12;1;x) = 2K(x)/\pi$ diverges logarithmically as $x\to1$ (:ref[]{to=spec.elliptic-integrals}).
- **No exponent difference an integer** is Ahlfors's hypothesis in the converse part of statement 1, not ours in the rest. It is what lets him pick one exponent at $0$ and one at $1$ and strip them off; if two exponents at a point coincide, the second solution there is logarithmic and the normal form is reached only after a limit.
:::

:::method[Recognising and reducing a hypergeometric equation]{provenance=adapted src="rhb-2006:§18.10 and §18.10.1, the canonical-form discussion and the Chebyshev worked example, pp. 628–631; arfken-2013:§18.5, the alternate forms (18.124)–(18.125) and the representations (18.128)–(18.135), pp. 913–914; hassani-2013:§15.4, the Jacobi, Gegenbauer and Legendre reductions, eqs. (15.32)–(15.35), pp. 477–478; coddington-1989:Ch. 4, §9, Exercise 5, p. 182"}
Given a second-order linear equation and asked whether its solutions are hypergeometric:

1. **Count the singular points in the extended plane.** Find every point where the equation, written as $y''+py'+qy=0$, has $p$ or $q$ singular, and test infinity by $x=1/t$. If there are exactly three and all are regular, the equation *is* hypergeometric up to the changes below; if there are more, or one is irregular, it is not (two singular points give only powers and logarithms, and an irregular point at infinity leads instead to :ref[]{to=spec.confluent-hypergeometric}).
2. **Move the singular points to $0$, $1$, $\infty$** with the Möbius map determined by where they are. For an equation singular at $\pm1$ and $\infty$ — the usual case in physics, because that is where Legendre, Gegenbauer and Chebyshev live — the map is $x = (1-z)/2$, which sends $z=1$ to $x=0$ and $z=-1$ to $x=1$. Remember $\mathrm{d}/\mathrm{d}z = -\tfrac12\,\mathrm{d}/\mathrm{d}x$.
3. **Strip the exponents.** Compute the indicial roots at $x=0$ and at $x=1$; if the smaller ones are not already $0$, substitute $y = x^{\alpha}(1-x)^{\beta}w$ with those values, which shifts them to zero and leaves an equation in the canonical form.
4. **Read off $a$, $b$, $c$** by matching coefficients with (H): $c$ is the constant term in the bracket, $a+b+1$ is minus the coefficient of $x$ in it, and $ab$ is minus the coefficient of $y$. So $a$ and $b$ are the two roots of $\lambda^2 - (a+b)\lambda + ab = 0$ with these numbers, and which root is called $a$ does not matter.
5. **Fix the normalisation.** The solution you want is a multiple of ${}_2F_1$; find the multiple by comparing both sides at one convenient point, usually $x=0$, where ${}_2F_1 = 1$. Riley, Hobson and Bence do exactly this for the Chebyshev polynomials, noting that the two normalisations happen to agree there, and Arfken, Weber and Harris list the resulting prefactors for the ultraspherical, Legendre and Chebyshev families.
6. **If you need the solution near $x=1$ or $x=\infty$ instead**, do not re-derive it: Hassani's bases
   $$
   {}_2F_1(a,b;a+b-c+1;1-x), \qquad x^{-a}\,{}_2F_1\!\left(a,\,1+a-c;\,a-b+1;\,\tfrac1x\right)
   $$
   and their partners are obtained from the one at the origin by the substitutions $x\mapsto1-x$ and $x\mapsto1/x$. There are twenty-four such expressions in all — Kummer's solutions — of which only two are independent at any one point.

**Shortcuts worth knowing.** Many identifications are quicker from the series than from the equation: $(1-x)^{-a} = {}_2F_1(a,b;b;x)$, $x^{-1}\ln(1+x) = {}_2F_1(1,1;2;-x)$, $x^{-1}\arcsin x = {}_2F_1(\tfrac12,\tfrac12;\tfrac32;x^2)$ and $x^{-1}\arctan x = {}_2F_1(\tfrac12,1;\tfrac32;-x^2)$ are all read off by comparing coefficients. And the derivative relation
$$
\frac{\mathrm{d}}{\mathrm{d}x}{}_2F_1(a,b;c;x) = \frac{ab}{c}\,{}_2F_1(a+1,b+1;c+1;x)
$$
means that differentiating never leaves the family.
:::

:::example[Legendre's equation reduced, and a number from Gauss's formula]{provenance=original}
**Part 1: the reduction.** Legendre's equation of degree $\lambda$ is
$$
(1-z^2)\,u'' - 2z\,u' + \lambda(\lambda+1)u = 0 .
$$
Its singular points are $z=\pm1$ and $\infty$, all regular, so step 1 of the method succeeds. Apply step 2 with $z = 1-2x$, so that $x = (1-z)/2$ and $\mathrm{d}/\mathrm{d}z = -\tfrac12\,\mathrm{d}/\mathrm{d}x$. Then $1-z^2 = (1-z)(1+z) = 2x\cdot2(1-x) = 4x(1-x)$ and, writing $y(x) = u(z)$,
$$
4x(1-x)\cdot\tfrac14 y'' - 2(1-2x)\cdot\bigl(-\tfrac12 y'\bigr) + \lambda(\lambda+1)y = 0 ,
$$
that is
$$
x(1-x)y'' + (1-2x)y' + \lambda(\lambda+1)y = 0 .
$$
This is already in the form (H) — step 3 is vacuous, because the exponents at $x=0$ are $0$ and $1-c=0$ — and step 4 reads off
$$
c = 1, \qquad a+b+1 = 2, \qquad ab = -\lambda(\lambda+1) .
$$
So $a+b=1$ and $ab=-\lambda(\lambda+1)$, whose roots are $a = -\lambda$ and $b=\lambda+1$: indeed $a+b = 1$ and $ab = -\lambda(\lambda+1)$. Step 5: at $x=0$, i.e. $z=1$, the Legendre polynomial satisfies $P_n(1)=1$ and ${}_2F_1=1$, so the normalising constant is $1$ and
$$
P_{\lambda}(z) = {}_2F_1\!\left(-\lambda,\;\lambda+1;\;1;\;\frac{1-z}{2}\right) .
$$
(Coddington sets the same reduction as an exercise, in the form $\psi(t) = \varphi(2t-1)$, and records the parameters $\alpha = p+1$, $\beta = -p$, $\gamma = 1$ — the same pair $\{-\lambda,\lambda+1\}$ with the labels exchanged, which the symmetry of ${}_2F_1$ makes irrelevant.)

**A checkable number.** Take $\lambda = 3$ and $z = \tfrac12$, so the argument is $x = (1-\tfrac12)/2 = \tfrac14$. Since $a=-3$ the series terminates after four terms:
$$
{}_2F_1\!\left(-3,4;1;\tfrac14\right) = \sum_{n=0}^{3}\frac{(-3)_n(4)_n}{(1)_n}\frac{(1/4)^n}{n!} .
$$
Term by term, with $(-3)_1=-3$, $(-3)_2=6$, $(-3)_3=-6$ and $(4)_1=4$, $(4)_2=20$, $(4)_3=120$, $(1)_n = n!$:
$$
n=0:\;1, \qquad
n=1:\;\frac{(-3)(4)}{1}\cdot\frac{1/4}{1} = -3, \qquad
n=2:\;\frac{(6)(20)}{2}\cdot\frac{1/16}{2} = \frac{30}{16} = 1.875,
$$
$$
n=3:\;\frac{(-6)(120)}{6}\cdot\frac{1/64}{6} = -120\cdot\frac{1}{384} = -0.3125 .
$$
The sum is $1-3+1.875-0.3125 = -0.4375$. Against this, $P_3(z) = \tfrac12(5z^3-3z)$ gives
$$
P_3\!\left(\tfrac12\right) = \tfrac12\left(\tfrac58-\tfrac32\right) = \tfrac12\left(-\tfrac78\right) = -\frac{7}{16} = -0.4375 ,
$$
in exact agreement (:ref[]{to=spec.legendre-polynomials}).

**Part 2: a value at $x=1$.** Take $a=\tfrac12$, $b=\tfrac13$, $c=2$. Then $c-a-b = 2-\tfrac56 = \tfrac76 > 0$, so (G) applies:
$$
{}_2F_1\!\left(\tfrac12,\tfrac13;2;1\right) = \frac{\Gamma(2)\,\Gamma(7/6)}{\Gamma(3/2)\,\Gamma(5/3)}
= \frac{1 \times 0.9277\ldots}{0.8862\ldots \times 0.9027\ldots} = 1.159595\ldots
$$
The series itself converges to the same value, but slowly, as it must: its terms decay only like $n^{-(1+(c-a-b))} = n^{-13/6}$. Summing the first $60$ terms gives $1.158077$, and the first $2000$ give $1.159570$ — creeping towards $1.1595953$ from below, which is the practical argument for knowing (G) rather than summing. All the numbers in this example were checked in exact or high-precision arithmetic.
:::

:::application{provenance=original}
**One function for the whole classical zoo.** Nearly every named function that solves a second-order equation with three regular singular points is a ${}_2F_1$ with particular parameters: Legendre and associated Legendre functions, Gegenbauer (ultraspherical) and Jacobi polynomials, Chebyshev polynomials of all four kinds, and the Legendre functions of the second kind. The practical payoff is not elegance but transfer. A single library routine for ${}_2F_1$ evaluates all of them; a single contiguous relation among ${}_2F_1(a\pm1,b,c;x)$ specialises to the three-term recurrences that each family is usually introduced with; the derivative relation above specialises to each family's derivative formula; and Gauss's formula (G) supplies normalisation constants that would otherwise each need their own integral. Arfken, Weber and Harris make the point in reverse, by listing the prefactors needed to put each classical polynomial on its conventional scale — the mathematics is one function, the conventions are many.

**Exactly solvable quantum mechanics.** A one-dimensional Schrödinger problem is solvable in closed form essentially when the substitution that removes the asymptotic behaviour leaves a hypergeometric equation. The Pöschl–Teller well $V(x) = -V_0\operatorname{sech}^2(x/L)$ is the standard case: with $\xi = \tanh^2(x/L)$ or $\xi = \tfrac12(1+\tanh(x/L))$ the radial equation becomes (H), the bound states are the terminating cases where a numerator parameter is a negative integer — exactly the termination clause of the definition — and the reflection and transmission amplitudes above the barrier are ratios of Gamma functions, which is Gauss's formula (G) at work, since the connection between the solution that is purely outgoing at $x=+\infty$ and the incoming-plus-reflected solution at $x=-\infty$ is a linear relation among the hypergeometric bases at $0$, $1$ and $\infty$. The famous reflectionless potentials, where $T=1$ at every energy, are the parameter values at which one Gamma function in the denominator hits a pole.

**Angular problems in three dimensions.** Because $P_\lambda(\cos\theta) = {}_2F_1(-\lambda,\lambda+1;1;\sin^2(\theta/2))$ by the reduction worked above, the hypergeometric form is what makes non-integer degree $\lambda$ meaningful. That is needed whenever a boundary is a cone rather than a full sphere — the field near the tip of a conical conductor, or near the vertex of a wedge — where the separation constant is fixed by requiring $P_\lambda(\cos\theta_0)=0$ at the cone's half-angle and the admissible $\lambda$ come out non-integral. There is no Rodrigues formula or finite polynomial to fall back on in that situation; the series definition is the definition.

**Numerical practice.** The convergence behaviour in Part 2 of the example is the reason production code never evaluates ${}_2F_1$ from its series alone. Near $x=1$ one applies a transformation such as ${}_2F_1(a,b;c;x) = (1-x)^{c-a-b}{}_2F_1(c-a,c-b;c;x)$ or one of the connection formulas to move the argument into a region where the series converges geometrically; for $\lvert x\rvert>1$ one uses the basis at infinity. The twenty-four Kummer solutions are, from this point of view, a numerical toolkit rather than a curiosity.
:::
