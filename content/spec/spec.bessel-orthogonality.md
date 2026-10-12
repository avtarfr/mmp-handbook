---
id: spec.bessel-orthogonality
title: Orthogonality and Fourier-Bessel series
kind: theorem
level: core
summary: 'For fixed order $\nu > -1$ the functions $J_\nu(\alpha_{\nu j}r/a)$, with $\alpha_{\nu j}$ the positive zeros of $J_\nu$, are orthogonal on $[0,a]$ with weight $r$ and have squared norm $\tfrac12a^{2}J_{\nu+1}(\alpha_{\nu j})^{2}$, so any reasonable function on the disc expands in a Fourier-Bessel series with explicitly computable coefficients.'
prereqs: [spec.bessel-first-kind, ode.sturm-liouville-theory, ode.self-adjoint-operators, ode.eigenfunction-expansions, ode.sturm-comparison]
provenance: adapted
sources:
  - work: arfken-2013
    loc: "§14.2, Bessel's equation as a Sturm-Liouville problem (14.41)-(14.42), the weight $w(\\rho)=\\rho$, the Lommel identity (14.43), the vanishing of the lower boundary term and the orthogonality relation (14.44), pp. 661-662; the Neumann alternative $J_\\nu'(ka)=0$, p. 662; the normalisation (14.45)-(14.46) by l'Hopital's rule and the substitution $J_\\nu'(\\alpha_{\\nu i})=-J_{\\nu+1}(\\alpha_{\\nu i})$, pp. 662-663; the Bessel series (14.47)-(14.48) with the completeness assumption stated as such, p. 663; Exercises 14.2.1 (the two Lommel integrals), 14.2.2 (the Neumann normalisation), 14.2.3 (validity for $\\nu>-1$), 14.2.4 (no complex zeros), 14.2.7 (Parseval) and 14.2.8, pp. 665-666; §14.1, Table 14.1 (zeros of $J_n$ and $J_n'$), p. 648, Exercise 14.1.11 (interlacing of the zeros), p. 656, and the leading asymptotic form (14.144), p. 694"
    pages: "648, 656, 661-666, 694"
    role: the Sturm-Liouville framing with weight $\rho$; the Lommel identity and the two boundary conditions that make the boundary term vanish; the normalisation integral and its reduction to $J_{\nu+1}$; the definition of the Bessel series and its coefficients, with completeness stated as an assumption; the Neumann-condition variant; numerical values of the zeros and the statements about their reality, interlacing and spacing
  - work: rhb-2006
    loc: "§18.5.3, the Sturm-Liouville form with $p=x$, $q=-\\nu^2/x$, $\\lambda=\\alpha^2$, $\\rho=x$ and the remark that no interval is singled out by $p$, p. 608; the derivation of the cross identity (18.87)-(18.88) by multiplying and subtracting, pp. 609-610; the evaluation of $\\int J_\\nu^2(\\alpha x)x\\,dx$ by parts (18.89), pp. 609-610; the Bessel series (18.90)-(18.91) and the proof of the coefficient formula, pp. 610-611"
    pages: "608-611"
    role: the proof route for orthogonality (multiply the two equations, subtract, recognise an exact derivative, integrate); the honest observation that the Sturm-Liouville weight alone does not select an interval; the indefinite-integral form of the normalisation; the derivation of the coefficient formula from term-by-term integration
  - work: strauss-2008
    loc: "§10.5, the statements about the zeros (infinitely many, simple, interlacing, numerical values for $J_0$) and the asymptotic form (5), pp. 283-284; the normalising constants (8) and the simplified form (9) at a zero, with the proof by multiplying the self-adjoint equation by $2zu'$, p. 284; §10.2, the drumhead eigenvalue problem (16)-(21) and the orthogonality of $J_n(\\beta_{nm}r)\\{\\cos,\\sin\\}n\\theta$ with respect to the area inner product on the disc, pp. 267-269"
    pages: "267-269, 283-284"
    role: the facts about the zeros; the compact derivation of the normalisation integral from an exact derivative; the two-dimensional picture in which the weight $r$ is simply the area element of the disc and the Bessel series is one factor of a double eigenfunction expansion
  - work: hassani-2013
    loc: "§15.6, Problem 15.39(a)-(d), which derives the cross identity, the limit $\\mu\\to\\lambda$ by l'Hopital's rule, the second Lommel integral and the final normalisation $\\int_0^a zJ_\\nu^2(x_{\\nu n}z/a)dz = \\tfrac12 a^2J_{\\nu+1}^2(x_{\\nu n})$, p. 490"
    pages: "490"
    role: the same two results obtained as a single chain of steps, confirming the normalisation constant and the route through the limit $\mu\to\lambda$
---

:::definition[The zeros of $J_\nu$]{provenance=adapted src="strauss-2008:§10.5, pp. 283-284; arfken-2013:§14.1, Table 14.1, p. 648, Exercises 14.1.11 and 14.2.4, pp. 656 and 665"}
Fix $\nu > -1$ and real. The function $J_\nu$ has infinitely many positive zeros

$$
0 < \alpha_{\nu1} < \alpha_{\nu2} < \alpha_{\nu3} < \cdots \longrightarrow \infty ,
$$

each of them **simple** ($J_\nu'(\alpha_{\nu j}) \ne 0$), and no complex zeros at all (:cite{work=arfken-2013 loc="§14.2, Exercise 14.2.4, p. 665"}). We write $\beta_{\nu j}$ for the $j$-th positive zero of $J_\nu'$. Three further facts, all from :cite[Strauss]{work=strauss-2008 loc="§10.5, p. 283"} except where noted:

- **Interlacing.** Between two consecutive zeros of $J_\nu$ there lies a zero of $J_{\nu+1}$, and conversely, so the two sets of zeros separate each other. This is :cite[Strauss's]{work=strauss-2008 loc="§10.5, p. 283"} statement, made for every real order; :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§14.1, Exercise 14.1.11, p. 656"} set the sharper form — one and only one zero in between — as an exercise, but only at integer order $n$. More generally the zeros of any two independent solutions of Bessel's equation separate each other, which is :ref[Sturm separation]{to=ode.sturm-comparison} applied to this equation.
- **Spacing.** Consecutive zeros approach a separation of $\pi$. This follows from the leading asymptotic form $J_\nu(x) \sim \sqrt{2/\pi x}\cos\bigl(x - \nu\pi/2 - \pi/4\bigr)$ (:cite{work=arfken-2013 loc="§14.6, Eq. (14.144), p. 694"}; :ref[]{to=spec.bessel-asymptotics}), which also gives the useful estimate
  $$
  \alpha_{\nu j} \;\approx\; \left(j + \frac{\nu}{2} - \frac14\right)\pi .
  $$
- **No closed formula.** The zeros are not expressible in elementary terms and must be found numerically; they are tabulated in :cite{work=arfken-2013 loc="§14.1, Table 14.1, p. 648"}.

The first few, to seven decimals:

| $j$ | $\alpha_{0j}$ | $\alpha_{1j}$ | $\alpha_{2j}$ | $\beta_{1j}$ |
|---|---|---|---|---|
| 1 | 2.4048256 | 3.8317060 | 5.1356223 | 1.8411838 |
| 2 | 5.5200781 | 7.0155867 | 8.4172441 | 5.3314428 |
| 3 | 8.6537279 | 10.1734681 | 11.6198412 | 8.5363164 |
| 4 | 11.7915344 | 13.3236919 | 14.7959518 | 11.7060049 |

The estimate above gives $\alpha_{03} \approx 2.75\pi = 8.6393798$ against the true $8.6537279$, an error of $0.17\%$; by $j=4$ the error is $0.09\%$. Two consistency checks on the table: since $J_0' = -J_1$, the zeros of $J_0'$ are $0$ together with the $\alpha_{1j}$, so the $\beta_{0j}$ need no separate column; and interlacing requires $\alpha_{0j} < \alpha_{1j} < \alpha_{0,j+1}$, which the first two columns satisfy at every row.
:::

:::statement[Orthogonality and normalisation]{provenance=adapted src="arfken-2013:§14.2, Eqs. (14.41)-(14.46), pp. 661-663, with Exercises 14.2.1-14.2.3, p. 665; rhb-2006:§18.5.3, Eqs. (18.84)-(18.89), pp. 608-610; strauss-2008:§10.5, Eqs. (8)-(9), p. 284"}
Fix $\nu > -1$ and $a > 0$.

**(i) The Lommel identity.** For any $\alpha, \beta > 0$ with $\alpha \ne \beta$,

$$
\bigl(\alpha^{2}-\beta^{2}\bigr)\int_0^{a} J_\nu(\alpha r)\,J_\nu(\beta r)\,r\,dr
= a\Bigl[\beta\,J_\nu(\alpha a)J_\nu'(\beta a) - \alpha\,J_\nu(\beta a)J_\nu'(\alpha a)\Bigr] ,
$$

where $J_\nu'$ is the derivative with respect to the whole argument. The lower endpoint contributes nothing.

**(ii) Orthogonality.** Consequently the right-hand side, and hence the integral, vanishes whenever the boundary data at $r = a$ are such that the bracket is zero. The two standard cases are

- **Dirichlet:** $\alpha = \alpha_{\nu i}/a$ and $\beta = \alpha_{\nu j}/a$, so that $J_\nu(\alpha a) = J_\nu(\beta a) = 0$;
- **Neumann:** $\alpha = \beta_{\nu i}/a$ and $\beta = \beta_{\nu j}/a$, so that $J_\nu'(\alpha a) = J_\nu'(\beta a) = 0$.

In either case, for $i \ne j$,

$$
\int_0^{a} J_\nu\!\left(\lambda_{\nu i}\frac{r}{a}\right)J_\nu\!\left(\lambda_{\nu j}\frac{r}{a}\right)r\,dr = 0 ,
\qquad \lambda = \alpha \text{ or } \beta .
$$

**(iii) Normalisation.** For every $A > 0$,

$$
2\int_0^{A} J_\nu(x)^{2}\,x\,dx = \bigl[A\,J_\nu'(A)\bigr]^{2} + \bigl(A^{2}-\nu^{2}\bigr)J_\nu(A)^{2} ,
$$

and hence, after rescaling,

$$
\int_0^{a} J_\nu\!\left(\alpha_{\nu j}\frac{r}{a}\right)^{2}r\,dr = \frac{a^{2}}{2}J_\nu'(\alpha_{\nu j})^{2} = \frac{a^{2}}{2}J_{\nu+1}(\alpha_{\nu j})^{2}
$$

in the Dirichlet case, and

$$
\int_0^{a} J_\nu\!\left(\beta_{\nu j}\frac{r}{a}\right)^{2}r\,dr = \frac{a^{2}}{2}\left(1 - \frac{\nu^{2}}{\beta_{\nu j}^{2}}\right)J_\nu(\beta_{\nu j})^{2}
$$

in the Neumann case.

**Where this sits.** Dividing Bessel's equation in the variable $kr$ by $r$ exhibits it as the :ref[Sturm-Liouville problem]{to=ode.sturm-liouville-theory}

$$
-\frac{d}{dr}\left(r\frac{du}{dr}\right) + \frac{\nu^{2}}{r}u = k^{2}\,r\,u ,
$$

with $p(r) = r$, $q(r) = \nu^{2}/r$, weight $w(r) = r$ and eigenvalue $k^{2}$. The weight $r$ is not an artifice: on a disc of radius $a$ it is exactly the Jacobian of plane polar coordinates, so this orthogonality is orthogonality in $L^{2}$ of the disc (:cite{work=strauss-2008 loc="§10.2, Eq. (23), p. 269"}). But the problem is **singular**: $p(0) = 0$ and $q$ blows up at the origin, so the regular Sturm-Liouville theorem does not apply and conclusions have to be re-earned. :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§18.5.3, p. 608"} make the point sharply: because $p(x) = x$, nothing in the equation itself picks out an interval on which solutions for different eigenvalues are automatically orthogonal; the interval and the boundary conditions must be supplied, and $[0,a]$ works only because the $r = 0$ endpoint takes care of itself.
:::

:::idea{provenance=original}
Both halves are the same trick used twice. For orthogonality, write down the equation for $J_\nu(\alpha r)$ and the equation for $J_\nu(\beta r)$, multiply each by the other function and subtract: the second-derivative and first-derivative terms assemble into the exact derivative $\frac{d}{dr}\bigl[r(fg'-gf')\bigr]$, and what is left on the other side is $(\alpha^{2}-\beta^{2})rfg$. Integrating turns a statement about an integral into a statement about one boundary value. For the normalisation the two functions coincide, so this identity degenerates to $0 = 0$; instead multiply the self-adjoint equation by $2ru'$, which again produces an exact derivative, this time of $(ru')^{2} + (r^{2}-\nu^{2})u^{2}$. In both cases the endpoint $r = 0$ contributes nothing, because the factor $r$ in $p$ suppresses it.
:::

:::proof[Orthogonality and the Lommel identity]{provenance=adapted src="rhb-2006:§18.5.3, Eqs. (18.85)-(18.88), pp. 609-610; arfken-2013:§14.2, Eq. (14.43), p. 661"}
**Step 1: the two equations.** Put $f(r) = J_\nu(\alpha r)$ and $g(r) = J_\nu(\beta r)$. If $w = \alpha r$ then $f' = \alpha J_\nu'(w)$ and $f'' = \alpha^{2}J_\nu''(w)$, so

$$
r^{2}f'' + rf' + (\alpha^{2}r^{2}-\nu^{2})f = w^{2}J_\nu''(w) + wJ_\nu'(w) + (w^{2}-\nu^{2})J_\nu(w) = 0
$$

by Bessel's equation itself; likewise $r^{2}g'' + rg' + (\beta^{2}r^{2}-\nu^{2})g = 0$. The rescaling is the only place the parameters $\alpha,\beta$ enter.

**Step 2: subtract, and recognise a derivative.** Multiply the $f$-equation by $g$, the $g$-equation by $f$, subtract, and divide by $r$:

$$
r\bigl(f''g - g''f\bigr) + \bigl(f'g - g'f\bigr) + \bigl(\alpha^{2}-\beta^{2}\bigr)r\,fg = 0 .
$$

The first two groups are exactly $-\frac{d}{dr}\bigl[r(fg'-gf')\bigr]$, since

$$
\frac{d}{dr}\Bigl[r\bigl(fg'-gf'\bigr)\Bigr] = r\bigl(fg''-gf''\bigr) + \bigl(fg'-gf'\bigr) ,
$$

the terms $f'g'$ cancelling. Hence

$$
\frac{d}{dr}\Bigl[r\bigl(fg'-gf'\bigr)\Bigr] = \bigl(\alpha^{2}-\beta^{2}\bigr)\,r\,fg .
$$

**Step 3: integrate from $0$ to $a$.** Integrating,

$$
\bigl(\alpha^{2}-\beta^{2}\bigr)\int_0^{a}r\,f g\,dr = \Bigl[r\bigl(fg'-gf'\bigr)\Bigr]_0^{a} .
$$

At $r = a$ the bracket is $a\bigl[\beta J_\nu(\alpha a)J_\nu'(\beta a) - \alpha J_\nu(\beta a)J_\nu'(\alpha a)\bigr]$, which is the stated right-hand side.

**Step 4: the endpoint $r = 0$ gives nothing, for $\nu > -1$.** Near $0$ the series give $f(r) = c_\alpha r^{\nu}\bigl[1+O(r^{2})\bigr]$ with $c_\alpha = (\alpha/2)^{\nu}/\Gamma(1+\nu)$, and therefore $f'(r) = \nu f(r)/r\bigl[1+O(r^{2})\bigr]$, and the same for $g$. Hence

$$
fg' - gf' = \frac{\nu}{r}fg - \frac{\nu}{r}gf + O\bigl(r^{2\nu+1}\bigr) = O\bigl(r^{2\nu+1}\bigr) ,
$$

the leading terms cancelling identically. Multiplying by $r$ gives $O(r^{2\nu+2})$, which tends to $0$ precisely when $\nu > -1$. (For $\nu \ge 0$ no cancellation is even needed: each term separately vanishes. The cancellation is what rescues the range $-1 < \nu < 0$, where $f$ and $g$ are individually unbounded; see :cite{work=arfken-2013 loc="§14.2, Exercise 14.2.3, p. 665"}.) The integral on the left converges for the same reason: $r\,fg \sim r^{2\nu+1}$ is integrable at $0$ exactly when $\nu > -1$.

**Step 5: the two boundary conditions.** If $\alpha a$ and $\beta a$ are both zeros of $J_\nu$, both terms in the bracket at $r=a$ contain a vanishing factor $J_\nu(\alpha a)$ or $J_\nu(\beta a)$. If instead both are zeros of $J_\nu'$, both terms contain a vanishing $J_\nu'$. Either way the right-hand side is zero, and since $\alpha^{2} \ne \beta^{2}$ we may divide:

$$
\int_0^{a}J_\nu(\alpha r)J_\nu(\beta r)\,r\,dr = 0 . \qquad\square
$$

(More general homogeneous conditions $\kappa J_\nu(\lambda a) + \lambda J_\nu'(\lambda a) = 0$ with a fixed $\kappa$ also annihilate the bracket, giving the so-called Dini series; the computation is the same.)
:::

:::proof[The normalisation]{provenance=adapted src="strauss-2008:§10.5, Eqs. (8)-(9), p. 284; arfken-2013:§14.2, Eqs. (14.45)-(14.46), pp. 662-663; hassani-2013:§15.6, Problem 15.39, p. 490"}
**Step 1: an exact derivative.** Let $u(x) = J_\nu(x)$, which satisfies the self-adjoint form $(xu')' + \bigl(x - \nu^{2}/x\bigr)u = 0$. Multiply by $2xu'$ and read the two pieces as derivatives:

$$
2(xu')(xu')' = \frac{d}{dx}\bigl[(xu')^{2}\bigr] ,
\qquad
2xu'\left(x-\frac{\nu^{2}}{x}\right)u = 2\bigl(x^{2}-\nu^{2}\bigr)uu' = \frac{d}{dx}\Bigl[\bigl(x^{2}-\nu^{2}\bigr)u^{2}\Bigr] - 2xu^{2} .
$$

Adding, the equation becomes

$$
\frac{d}{dx}\Bigl[(xu')^{2} + \bigl(x^{2}-\nu^{2}\bigr)u^{2}\Bigr] = 2x\,u^{2} .
$$

**Step 2: integrate.** Integrating from $0$ to $A$,

$$
2\int_0^{A}x\,J_\nu(x)^{2}\,dx = \Bigl[(xJ_\nu'(x))^{2} + (x^{2}-\nu^{2})J_\nu(x)^{2}\Bigr]_0^{A} .
$$

At the lower limit, $J_\nu(x) = cx^{\nu}[1+O(x^{2})]$ and $xJ_\nu'(x) = \nu cx^{\nu}[1+O(x^{2})]$, so the bracket is $\bigl(\nu^{2} - \nu^{2}\bigr)c^{2}x^{2\nu} + O(x^{2\nu+2}) = O(x^{2\nu+2})$, which vanishes for $\nu > -1$ — again by cancellation of the two leading terms, not by each vanishing separately. This gives part (iii) of the statement.

**Step 3: specialise to a zero.** Take $A = \alpha_{\nu j}$, so $J_\nu(A) = 0$ and only the first term survives:

$$
\int_0^{\alpha_{\nu j}}x\,J_\nu(x)^{2}\,dx = \tfrac12\,\alpha_{\nu j}^{2}\,J_\nu'(\alpha_{\nu j})^{2} .
$$

**Step 4: rescale to $[0,a]$.** Substituting $x = \alpha_{\nu j}r/a$, so $x\,dx = (\alpha_{\nu j}/a)^{2}r\,dr$,

$$
\int_0^{a}J_\nu\!\left(\alpha_{\nu j}\frac{r}{a}\right)^{2}r\,dr
= \left(\frac{a}{\alpha_{\nu j}}\right)^{2}\int_0^{\alpha_{\nu j}}x\,J_\nu(x)^{2}\,dx
= \frac{a^{2}}{2}J_\nu'(\alpha_{\nu j})^{2} .
$$

**Step 5: replace $J_\nu'$ by $J_{\nu+1}$.** The recurrence $xJ_\nu'(x) - \nu J_\nu(x) = -xJ_{\nu+1}(x)$ of :ref[]{to=spec.bessel-first-kind}, evaluated at $x = \alpha_{\nu j}$ where $J_\nu$ vanishes, gives $J_\nu'(\alpha_{\nu j}) = -J_{\nu+1}(\alpha_{\nu j})$. Squaring removes the sign, and the Dirichlet normalisation follows.

**Step 6: the Neumann case.** Take instead $A = \beta_{\nu j}$, a zero of $J_\nu'$. Then the first term of the bracket in Step 2 vanishes and the second survives:

$$
\int_0^{\beta_{\nu j}}x\,J_\nu(x)^{2}\,dx = \tfrac12\bigl(\beta_{\nu j}^{2}-\nu^{2}\bigr)J_\nu(\beta_{\nu j})^{2} ,
$$

and the same rescaling gives $\tfrac12 a^{2}\bigl(1-\nu^{2}/\beta_{\nu j}^{2}\bigr)J_\nu(\beta_{\nu j})^{2}$, which is :cite[Arfken, Weber and Harris's]{work=arfken-2013 loc="§14.2, Exercise 14.2.2(b), p. 665"} answer. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
- **$\nu > -1$.** This single condition does three jobs: it makes $r J_\nu(\alpha r)^{2} \sim r^{2\nu+1}$ integrable at the origin, it makes the boundary term at $r = 0$ vanish, and it is the range in which $J_\nu$ has only real zeros. What fails below it is the first job: for non-integer $\nu$ the integrand near the origin is $\Theta(r^{2\nu+1})$, and $\int_0 r^{2\nu+1}dr$ diverges once $2\nu+1 \le -1$, logarithmically in the limiting case. So the condition is sharp *approached through non-integer orders* — it is $\nu \downarrow -1$ that breaks the integral, not $\nu = -1$ itself. The endpoint is in fact fine, which is why :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§14.2, p. 661, footnote 3"} state the vanishing of the lower boundary term for all $\nu \ge -1$: at $\nu = -1$ the $1/\Gamma$ convention gives $J_{-1} = -J_1$ (:ref[]{to=spec.bessel-first-kind}), the leading power is $r^{3}$ and not $r^{-1}$, and the formulas of this unit hold verbatim — for instance $\int_0^{1}rJ_{-1}(\alpha_{11}r)^{2}dr = 0.0811075654 = \tfrac12J_0(\alpha_{11})^{2}$, which is exactly $\tfrac12J_{\nu+1}(\alpha_{\nu 1})^{2}$ at $\nu = -1$. The same holds at every negative integer order, since $J_{-n} = (-1)^{n}J_n$ there; the unit states the hypothesis as $\nu > -1$ because that is the range in which the proof below runs without case distinctions. For $-1 < \nu < 0$ the result survives only because of a cancellation between two individually divergent boundary terms — a case worth checking explicitly rather than waving at, which is why :cite{work=arfken-2013 loc="§14.2, Exercise 14.2.3, p. 665"} sets it as an exercise.
- **Same order $\nu$, different scale.** The orthogonal family is $\{J_\nu(\alpha_{\nu j}r/a)\}_j$ at **fixed** $\nu$. There is no orthogonality between $J_\nu$ and $J_\mu$ for $\nu \ne \mu$; in the two-dimensional problem the different orders are separated instead by the orthogonality of $e^{im\varphi}$ in the angular variable. Mixing the two kinds of index is the commonest error here.
- **The lower limit must be $0$.** On an annulus $[b,a]$ with $b > 0$, Step 4 of the first proof is unavailable and the boundary term at $r = b$ must be killed by a condition there. The eigenfunctions are then combinations of $J_\nu$ and $Y_\nu$ (:ref[]{to=spec.bessel-second-kind-hankel}) and the eigenvalues solve a transcendental determinant condition, not $J_\nu(\lambda) = 0$.
- **Dirichlet or Neumann, consistently.** The bracket in the Lommel identity vanishes when *both* $\alpha a$ and $\beta a$ satisfy the same condition. A set mixing zeros of $J_\nu$ with zeros of $J_\nu'$ is not orthogonal.
- **Simplicity of the zeros, in the normalisation.** Step 3 divides by nothing, but Step 5 would be vacuous if $J_\nu'(\alpha_{\nu j})$ were zero: the normalisation constant would vanish and the expansion would be meaningless. Simplicity of the zeros is therefore not decoration. It follows from uniqueness for the initial value problem: $J_\nu(\alpha) = J_\nu'(\alpha) = 0$ at an interior point $\alpha > 0$ would force $J_\nu \equiv 0$.
- **Completeness is not proved here.** :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="§14.2, p. 663"} preface the Bessel series by assuming, in so many words and without argument, that the family is complete; we follow them, and label the hypothesis as a hypothesis in the statement above. The justification belongs to the theory of singular Sturm-Liouville problems (:ref[]{to=ode.eigenfunction-expansions}); orthogonality and the norm, which are what this unit proves, are completely elementary by comparison.
:::

:::statement[Fourier-Bessel series]{provenance=adapted src="arfken-2013:§14.2, Eqs. (14.47)-(14.48), p. 663, and Exercise 14.2.7, p. 666; rhb-2006:§18.5.3, Eqs. (18.90)-(18.91), pp. 610-611"}
Fix $\nu > -1$ and $a > 0$, and assume the set $\bigl\{J_\nu(\alpha_{\nu j}r/a)\bigr\}_{j\ge1}$ is complete in the weighted space $L^{2}\bigl([0,a],\,r\,dr\bigr)$ of **complex-valued** functions, with the inner product $(f,g) = \int_0^{a}f(r)\overline{g(r)}\,r\,dr$. The basis functions are real for real $\nu$, so the conjugate plays no part in the coefficient formula; it does appear in Parseval's relation, and both are written below with moduli so that complex $f$ is covered. Then every $f$ in that space has the **Fourier-Bessel expansion**

$$
f(r) = \sum_{j=1}^{\infty}c_{j}\,J_\nu\!\left(\alpha_{\nu j}\frac{r}{a}\right) ,
\qquad
c_{j} = \frac{2}{a^{2}\,J_{\nu+1}(\alpha_{\nu j})^{2}}\int_0^{a}f(r)\,J_\nu\!\left(\alpha_{\nu j}\frac{r}{a}\right)r\,dr ,
$$

the series converging in mean square with weight $r$. Parseval's relation reads

$$
\int_0^{a}\bigl|f(r)\bigr|^{2}\,r\,dr = \frac{a^{2}}{2}\sum_{j=1}^{\infty}\bigl|c_{j}\bigr|^{2}\,J_{\nu+1}(\alpha_{\nu j})^{2}
$$

(:cite{work=arfken-2013 loc="§14.2, Exercise 14.2.7, p. 666"}). The coefficient formula is obtained exactly as for any orthogonal expansion: multiply by $J_\nu(\alpha_{\nu i}r/a)\,r$, integrate, and use orthogonality to kill every term but $i = j$ and the normalisation to evaluate that one (:cite{work=rhb-2006 loc="§18.5.3, p. 611"}).

Replacing $\alpha_{\nu j}$ by $\beta_{\nu j}$ throughout, and the norm by its Neumann value, gives the companion expansion appropriate to a flux-free boundary.
:::

:::method[Expanding a function in a Fourier-Bessel series]{provenance=adapted src="arfken-2013:§14.2, Eqs. (14.47)-(14.48), p. 663; rhb-2006:§18.5.3, pp. 610-611"}
1. **Fix the order.** $\nu$ is set by the problem — by the azimuthal index $m$ in a disc problem, by $\ell+\tfrac12$ in a spherical one — not by the function being expanded.
2. **Fix the boundary condition at $r = a$,** and with it the eigenvalues: $\lambda_{j} = \alpha_{\nu j}$ for $f(a) = 0$, $\lambda_{j} = \beta_{\nu j}$ for $f'(a) = 0$. Look the zeros up or compute them from the estimate $(j+\nu/2-\tfrac14)\pi$ refined by Newton's method, using $J_\nu' = J_{\nu-1} - \nu J_\nu/x$.
3. **Compute the overlap integrals** $\int_0^{a}f(r)J_\nu(\lambda_{j}r/a)\,r\,dr$. Where $f$ is a power of $r$, use the antiderivatives $\int x^{\nu}J_{\nu-1}dx = x^{\nu}J_\nu$ and $\int x^{-\nu}J_{\nu+1}dx = -x^{-\nu}J_\nu$ of :ref[]{to=spec.bessel-first-kind}, reducing higher powers by parts.
4. **Divide by the norm**, $\tfrac12a^{2}J_{\nu+1}(\alpha_{\nu j})^{2}$ or $\tfrac12a^{2}(1-\nu^{2}/\beta_{\nu j}^{2})J_\nu(\beta_{\nu j})^{2}$.
5. **Check with Parseval.** Compute $\int_0^{a}f^{2}r\,dr$ independently and compare with the sum of squared coefficients times their norms. This catches a wrong normalisation immediately, which a few numerical partial sums may not.
6. **Expect slow convergence if $f$ does not satisfy the boundary condition.** The partial sums converge to the boundary value imposed by the eigenfunctions, so forcing $f(a) \ne 0$ into a Dirichlet Bessel series produces Gibbs-like behaviour near $r = a$.
:::

:::example[A Fourier-Bessel series, checked three ways]{provenance=original}
Expand $f(r) = 1-r^{2}$ on $0 \le r \le 1$ in Bessel functions of order zero with the Dirichlet condition, that is, in $\bigl\{J_0(\alpha_{j}r)\bigr\}$ with $\alpha_{j} = \alpha_{0j}$. Note first that $f(1) = 0$, so $f$ obeys the boundary condition and good convergence is expected.

**Step 1: the overlap integral.** Put $u = \alpha r$, $\alpha = \alpha_{j}$. Then

$$
\int_0^{1}(1-r^{2})J_0(\alpha r)\,r\,dr = \frac{1}{\alpha^{2}}\int_0^{\alpha}\left(1-\frac{u^{2}}{\alpha^{2}}\right)J_0(u)\,u\,du .
$$

For the first piece, $\frac{d}{du}[uJ_1(u)] = uJ_0(u)$, so $\int_0^{\alpha}uJ_0\,du = \alpha J_1(\alpha)$. For the second, integrate by parts against the same antiderivative and then use $\frac{d}{du}[u^{2}J_2] = u^{2}J_1$:

$$
\int_0^{\alpha}u^{3}J_0\,du = \Bigl[u^{2}\cdot uJ_1\Bigr]_0^{\alpha} - 2\int_0^{\alpha}u^{2}J_1\,du
= \alpha^{3}J_1(\alpha) - 2\alpha^{2}J_2(\alpha) .
$$

Hence

$$
\int_0^{1}(1-r^{2})J_0(\alpha r)\,r\,dr
= \frac{1}{\alpha^{2}}\left[\alpha J_1(\alpha) - \frac{1}{\alpha^{2}}\Bigl(\alpha^{3}J_1(\alpha) - 2\alpha^{2}J_2(\alpha)\Bigr)\right]
= \frac{1}{\alpha^{2}}\Bigl[\alpha J_1(\alpha) - \alpha J_1(\alpha) + 2J_2(\alpha)\Bigr]
= \frac{2J_2(\alpha)}{\alpha^{2}} .
$$

Since $\alpha$ is a zero of $J_0$, the three-term recurrence gives $J_2(\alpha) = (2/\alpha)J_1(\alpha) - J_0(\alpha) = (2/\alpha)J_1(\alpha)$, so the integral is $4J_1(\alpha)/\alpha^{3}$.

**Step 2: the coefficients.** With $a = 1$, $\nu = 0$, the norm is $\tfrac12 J_1(\alpha_{j})^{2}$, so

$$
c_{j} = \frac{2}{J_1(\alpha_{j})^{2}}\cdot\frac{4J_1(\alpha_{j})}{\alpha_{j}^{3}} = \frac{8}{\alpha_{j}^{3}\,J_1(\alpha_{j})} .
$$

Numerically:

| $j$ | $\alpha_{j}$ | $J_1(\alpha_{j})$ | $c_{j}$ |
|---|---|---|---|
| 1 | 2.4048256 | 0.5191475 | 1.1080223 |
| 2 | 5.5200781 | $-0.3402648$ | $-0.1397775$ |
| 3 | 8.6537279 | 0.2714523 | 0.0454765 |
| 4 | 11.7915344 | $-0.2324598$ | $-0.0209909$ |
| 5 | 14.9309177 | 0.2065464 | 0.0116362 |

**Check 1: the value at the centre.** $J_0(0) = 1$, so $\sum_j c_j$ must equal $f(0) = 1$. The partial sums are $1.0043666$ ($5$ terms), $0.9998451$ ($20$ terms), $0.9999898$ ($60$ terms) — converging to $1$, slowly, at the rate the coefficients dictate. That rate is $|c_j| = \Theta(j^{-5/2})$, not $\Theta(j^{-3})$: the explicit $\alpha_j^{-3}$ is partly undone by the $J_1(\alpha_j)$ in the denominator, which by the leading asymptotic form satisfies $|J_1(\alpha_j)| = \Theta(\alpha_j^{-1/2})$, so $|c_j| = \Theta(\alpha_j^{-5/2}) = \Theta(j^{-5/2})$ since $\alpha_j \approx (j-\tfrac14)\pi$. The products $|c_j|\alpha_j^{5/2}$ are $10.0221$, $10.0260$, $10.0265$, $10.0265$ at $j = 4, 11, 51, 101$, flat to five figures, whereas $|c_j|j^{3}$ is $1.343$, $2.013$, $4.144$, $5.796$ at the same $j$ and still climbing.

**Check 2: a value off centre.** At $r = 0.5$ the exact value is $0.75$. The partial sums are $0.7502500$ ($5$ terms), $0.7499708$ ($20$ terms), $0.7499989$ ($60$ terms).

**Check 3: Parseval, which gives a closed-form sum.** Directly,

$$
\int_0^{1}(1-r^{2})^{2}r\,dr = \int_0^{1}\bigl(r - 2r^{3} + r^{5}\bigr)dr = \frac12 - \frac12 + \frac16 = \frac16 .
$$

Parseval's relation with $a = 1$, $\nu = 0$ says this equals $\tfrac12\sum_j c_j^{2}J_1(\alpha_j)^{2}$ — here $f$ and the $c_j$ are real, so the moduli in the general statement are immaterial. Substituting $c_j = 8/(\alpha_j^{3}J_1(\alpha_j))$, the factors $J_1(\alpha_j)^{2}$ cancel exactly and

$$
\frac16 = \frac12\sum_{j=1}^{\infty}\frac{64}{\alpha_{j}^{6}} = 32\sum_{j=1}^{\infty}\alpha_{0j}^{-6} ,
\qquad\text{so}\qquad
\boxed{\;\sum_{j=1}^{\infty}\frac{1}{\alpha_{0j}^{6}} = \frac{1}{192}\;}
$$

a closed-form value for a sum over the zeros of $J_0$, obtained purely from the normalisation constant. Summing the first $199$ terms numerically gives $0.0052083333$ against $1/192 = 0.0052083333$ — agreement to ten decimal places, and a decisive check that the normalisation $\tfrac12a^{2}J_{\nu+1}(\alpha_{\nu j})^{2}$ is right. (The same argument applied to $f(r) = 1$, whose coefficients are $c_j = 2/[\alpha_j J_1(\alpha_j)]$, gives $\sum_j \alpha_{0j}^{-2} = \tfrac14$.)
:::

:::application{provenance=original}
**The drumhead, and what a drum sounds like.** A circular membrane of radius $a$ fixed at the rim has normal modes $J_m(\alpha_{mj}r/a)\,e^{\pm im\varphi}$ with angular frequencies $\omega_{mj} = c\,\alpha_{mj}/a$, and the initial shape and velocity are matched by a Fourier-Bessel series in $j$ inside a Fourier series in $\varphi$ (:cite{work=strauss-2008 loc="§10.2, pp. 267-269"}). The orthogonality proved here is what makes the matching possible, and the normalisation is what makes the coefficients explicit. The frequencies are in the ratios $\alpha_{01}:\alpha_{11}:\alpha_{21}:\alpha_{02} = 2.4048:3.8317:5.1356:5.5201$, that is $1:1.593:2.136:2.295$ — not integer multiples. That is exactly why a drum has no definite pitch while a string, whose eigenvalues are $n\pi$, does; and it is why a timpanist loads the head to push the first few overtones towards harmonic ratios.

**Heat and diffusion in a cylinder.** For a cylinder of radius $a$ held at zero on its curved surface, the temperature relaxes as $T(r,t) = \sum_j c_j J_0(\alpha_{0j}r/a)\exp\bigl(-\kappa\alpha_{0j}^{2}t/a^{2}\bigr)$, with $c_j$ the Fourier-Bessel coefficients of the initial profile. After a short time only the first term survives, so the cooling of any axially symmetric billet, wire or reactor fuel rod settles into a universal $J_0$ profile decaying with time constant $a^{2}/(\kappa\alpha_{01}^{2}) = a^{2}/(5.783\,\kappa)$, independently of how it started. The identical series solves the corresponding Schrodinger problem for a particle in a cylindrical box, under the substitution $\kappa \to \mathrm{i}\hbar/2m$ that turns the diffusion equation $\partial_tT = \kappa\nabla^{2}T$ into $\mathrm{i}\hbar\,\partial_t\psi = -(\hbar^{2}/2m)\nabla^{2}\psi$: the decaying factors become the phases $\exp(-\mathrm{i}E_jt/\hbar)$ with $E_j = \hbar^{2}\alpha_{0j}^{2}/(2ma^{2})$, so the energies of the axially symmetric states are fixed by the same zeros. The sign matters, and so does the order of the substitution: writing $-\mathrm{i}\kappa$ in place of $\mathrm{i}\kappa$ runs the evolution backwards in time.

**Electrostatics and the cylindrical Dirichlet problem.** For a grounded cylindrical can with a prescribed potential on one end cap, separation gives $\psi = \sum_{m,j}c_{mj}J_m(\alpha_{mj}\rho/a)e^{im\varphi}\sinh(\alpha_{mj}z/a)$, and the $c_{mj}$ come from a Fourier-Bessel integral in $\rho$ inside a Fourier integral in $\varphi$ (:cite{work=arfken-2013 loc="§14.2, Example 14.2.1, pp. 663-665"}). The same expansion with $J_m'$ zeros handles an insulated side wall.

**Waveguides and optical fibres.** The cutoff wavenumbers of the TM modes of a circular pipe are $\alpha_{mj}/a$ and of the TE modes $\beta_{mj}/a$; since $\beta_{11} = 1.8412 < \alpha_{01} = 2.4048$, the lowest mode of a circular waveguide is TE$_{11}$, and the single-mode band of the guide is the interval between those two numbers. The same zeros fix the single-mode condition of a step-index optical fibre.

**From series to transform.** Letting $a \to \infty$ at fixed $r$ turns the discrete spectrum $\alpha_{\nu j}/a$ into a continuum and the Fourier-Bessel series into the Hankel transform $F(\gamma) = \int_0^{\infty}f(r)J_\nu(\gamma r)r\,dr$ with the inversion $f(r) = \int_0^{\infty}F(\gamma)J_\nu(\gamma r)\gamma\,d\gamma$, the orthogonality relation becoming $\int_0^{\infty}J_\nu(\gamma r)J_\nu(\gamma' r)r\,dr = \delta(\gamma-\gamma')/\gamma$ (:ref[]{to=fourier.hankel-mellin}). This is the standard tool for axisymmetric problems on an unbounded domain, and in two-dimensional imaging it is the radial part of the Fourier transform — which is why Fourier-Bessel expansions appear in computed tomography, in the point-spread functions of optical systems, and in the analysis of the cosmic microwave background on a disc of sky.
:::
