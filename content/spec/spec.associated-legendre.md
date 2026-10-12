---
id: spec.associated-legendre
title: Associated Legendre functions
kind: definition
level: core
summary: "The regular solutions of the associated Legendre equation, built from the Legendre polynomials by m-fold differentiation and a factor (1-x^2)^{m/2}, with their two orthogonality relations, their behaviour under m -> -m, and an explicit account of the Condon-Shortley sign convention that divides the textbooks."
prereqs: [spec.legendre-polynomials, spec.orthogonal-polynomials-general, ode.sturm-liouville-theory]
provenance: adapted
sources:
  - work: arfken-2013
    loc: "§15.4 (Associated Legendre Equation), eqs. (15.68)–(15.74), pp. 741–742, the Frobenius analysis and the condition on l and m, p. 742, the definition (15.78)–(15.80) with the AMS-55 phase factor and footnote 3, p. 743, the relation (15.81) for negative m, p. 743, the generating function (15.82) and the recurrences (15.84)–(15.92), pp. 743–744, Table 15.3, p. 745, Example 15.4.1, pp. 745–746, parity and special values (15.95)–(15.96), p. 746, the explicit orthogonality and normalisation calculation (15.97)–(15.105), pp. 746–748, the polynomial form (15.106) and the second orthogonality (15.107), p. 748"
    pages: "741-748"
    role: the equation and the substitution that removes the m^2/(1-x^2) term; the Frobenius argument fixing l to be an integer at least m; the definition of P_l^m with the (-1)^m AMS-55 phase and the explicit note that Jackson omits it; the negative-m relation; parity, endpoint and centre values; the integration-by-parts derivation of the orthogonality and the normalisation constant; the second orthogonality in m with weight (1-x^2)^{-1}; the table of the first ten functions
  - work: rhb-2006
    loc: "§18.2 (Associated Legendre functions), eq. (18.28) and the reduction (18.29) with its proof, p. 587, the integer-l case (18.31)–(18.33) with the proof of (18.33), pp. 588–589, the table of the first six functions and the singularity of Q_l^m, p. 589, §18.2.2, orthogonality (18.36) and the Rodrigues-formula derivation of the normalisation (18.37), pp. 590–591, the expansion (18.38), p. 591, the second orthogonality (18.39) with its normalisation, p. 591, and the generating function (18.40) and recurrences (18.41)–(18.44) with a sample derivation, pp. 592–593"
    pages: "587-593"
    role: the equation in the form with m^2/(1-x^2); the proof that (1-x^2)^{|m|/2} d^{|m|}u/dx^{|m|} solves it whenever u solves Legendre's equation; the definition without the (-1)^m phase and the footnote recording the rival convention; the negative-m relation proved from Leibniz; the two orthogonality relations with both normalisation constants; the generating function and four recurrences
  - work: strauss-2008
    loc: "§10.6 (Legendre functions), ASSOCIATED LEGENDRE FUNCTIONS: eq. (10), the definition (11) with the proof that it solves (10), and the normalising constants (12), pp. 292–293; §10.3, the separated orthogonality relations in theta and the normalisation (23), p. 275"
    pages: "275, 292-293"
    role: a third, independent statement of the equation, the definition without the phase factor, the two-line proof via the m-times-differentiated Legendre equation, and the normalisation constant; also the form in which the relation is used after separating variables in a ball
  - work: hassani-2013
    loc: "§13.4 (Eigenvectors of L²: Spherical Harmonics), the ladder-operator construction, eqs. (13.25)–(13.33), pp. 406–408, the definition of P_l^m in terms of the normalised theta functions and eq. (13.35) in Box 13.4.2, pp. 408–409, and the negative-m relation (13.38), p. 410"
    pages: "406-410"
    role: the quantum-mechanical route, in which P_l^m appears as the theta part of an eigenfunction of the angular-momentum operators built by lowering from the top state, together with the resulting form of the Rodrigues-type formula with l-m derivatives and the negative-m relation
---

:::definition[The associated Legendre equation and $P_{l}^{m}$]{provenance=adapted src="rhb-2006:§18.2, eqs. (18.28) and (18.32), pp. 587–588; arfken-2013:§15.4, eqs. (15.68), (15.79) and (15.80), pp. 741–743; strauss-2008:§10.6, eqs. (10)–(11), pp. 292–293"}
The **associated Legendre equation** is
$$
(1-x^{2})y''-2xy'+\Bigl[\ell(\ell+1)-\frac{m^{2}}{1-x^{2}}\Bigr]y=0 ,
\tag{AL}
$$
or in Sturm-Liouville form
$$
\frac{\mathrm{d}}{\mathrm{d}x}\Bigl[(1-x^{2})\frac{\mathrm{d}y}{\mathrm{d}x}\Bigr]-\frac{m^{2}}{1-x^{2}}\,y+\ell(\ell+1)\,y=0 ,
$$
with $p=1-x^{2}$, $q=-m^{2}/(1-x^{2})$, weight $\rho=1$, eigenvalue $\lambda=\ell(\ell+1)$, natural interval $[-1,1]$. It reduces to Legendre's equation of :ref[]{to=spec.legendre-polynomials} when $m=0$, and it has the same three regular singular points $x=-1,1,\infty$. Only $m^{2}$ appears, so $m$ and $-m$ give the same equation. In applications $m$ is an integer, $x=\cos\theta$, and $-1\le x\le1$.

For integers $l\ge0$ and $\lvert m\rvert\le l$, the **associated Legendre function of the first kind** is
$$
\boxed{\;P_{l}^{m}(x)=(-1)^{m}\,(1-x^{2})^{m/2}\,\frac{\mathrm{d}^{m}P_{l}(x)}{\mathrm{d}x^{m}}
=\frac{(-1)^{m}}{2^{l}\,l!}\,(1-x^{2})^{m/2}\,\frac{\mathrm{d}^{l+m}}{\mathrm{d}x^{l+m}}\bigl(x^{2}-1\bigr)^{l}\;}
$$
for $m\ge0$, the second form extending the definition verbatim to $-l\le m<0$. The superscript is an index, not a power. Since $P_{l}$ has degree $l$, we have $P_{l}^{m}\equiv0$ for $\lvert m\rvert>l$, and $P_{l}^{0}=P_{l}$. The second, linearly independent solution of (AL) for integer $l$ and $m$ is the associated Legendre function of the second kind $Q_{l}^{m}$, built the same way from $Q_{l}$; like $Q_{l}$ it is singular at $x=\pm1$ and is therefore discarded in every problem on a full sphere. The first few are
$$
P_{1}^{1}=-(1-x^{2})^{1/2},\qquad
P_{2}^{1}=-3x(1-x^{2})^{1/2},\qquad
P_{2}^{2}=3(1-x^{2}),
$$
$$
P_{3}^{1}=-\tfrac32(5x^{2}-1)(1-x^{2})^{1/2},\qquad
P_{3}^{2}=15x(1-x^{2}),\qquad
P_{3}^{3}=-15(1-x^{2})^{3/2},
$$
or, with $x=\cos\theta$ so that $(1-x^{2})^{1/2}=\sin\theta$: $P_{1}^{1}=-\sin\theta$, $P_{2}^{2}=3\sin^{2}\theta$, $P_{3}^{3}=-15\sin^{3}\theta$.
:::

:::remark[The sign convention, stated before anything is proved]{provenance=adapted src="arfken-2013:§15.4, eq. (15.78) with footnote 3, p. 743, and §15.5, p. 758; rhb-2006:§18.2.1, eq. (18.32) with its footnote, p. 588, and §18.3, eq. (18.45), p. 593; strauss-2008:§10.6, eq. (11), p. 293; hassani-2013:§13.4, Box 13.4.2, eqs. (13.34)–(13.35), p. 409"}
Two incompatible definitions of $P_{l}^{m}$ are in circulation, and a formula copied from one book into another is a common source of sign errors.

- **With the phase** (the convention used here): $P_{l}^{m}=(-1)^{m}(1-x^{2})^{m/2}\mathrm{d}^{m}P_{l}/\mathrm{d}x^{m}$. Arfken, Weber and Harris insert the factor $(-1)^{m}$ to agree with *Handbook of Mathematical Functions* (AMS-55), which they call the most widely accepted standard, and they note in a footnote that Jackson's *Classical Electrodynamics* omits it. The factor is the **Condon-Shortley phase**, which carries the names of E. U. Condon and G. H. Shortley because their book on atomic spectroscopy fixed it as the standard; Arfken, Weber and Harris remark that one of its effects is to alternate the sign with $m$ among the positive-$m$ *spherical harmonics*, and that it was introduced so that the spherical harmonics come out with the usual phase.
- **Without the phase:** $P_{l}^{m}=(1-x^{2})^{m/2}\mathrm{d}^{m}P_{l}/\mathrm{d}x^{m}$. This is Riley, Hobson and Bence's eq. (18.32), Strauss's eq. (11) and Hassani's eq. (13.35): Hassani's function is $(-1)^{m}$ times ours, so where we have $P_{1}^{1}=-\sin\theta$ he has $P_{1}^{1}=+\sin\theta$. All three books then put the $(-1)^{m}$ back into the definition of the spherical harmonic — Riley, Hobson and Bence in eq. (18.45), Hassani in eq. (13.34) of Box 13.4.2 — so their $Y_{l}^{m}$ agrees with Arfken, Weber and Harris's; see :ref[]{to=spec.spherical-harmonics}.

So the two conventions differ by $(-1)^{m}$ in $P_{l}^{m}$ and agree in $Y_{l}^{m}$. Everything that is quadratic in $P_{l}^{m}$ — both orthogonality relations and both normalisation constants — is the same in either convention, and so is the equation (AL). What *does* change sign is every table entry with odd $m$, every recurrence with an odd number of $P^{m}$'s of odd $m$, and the negative-$m$ relation if one is not careful. There is a further, rarer variant in which $P_{l}^{-m}$ is *defined* to equal $P_{l}^{m}$, which Riley, Hobson and Bence flag; with that choice $m$ must be replaced by $\lvert m\rvert$ throughout, as Strauss does in his definition of the spherical harmonics. We do not use it.
:::

:::statement[Properties of $P_{l}^{m}$]{provenance=adapted src="rhb-2006:§18.2, eqs. (18.29) and (18.33), pp. 587–589, and §18.2.2, eqs. (18.36)–(18.44), pp. 590–593; arfken-2013:§15.4, eqs. (15.74), (15.81), (15.84), (15.88), (15.93), (15.95)–(15.96) and (15.104)–(15.107), pp. 742–748; strauss-2008:§10.6, eqs. (11)–(12), pp. 292–293"}
Let $l\ge0$ and $m$ be integers with $\lvert m\rvert\le l$.

1. **It solves the equation.** If $u$ solves Legendre's equation with parameter $\ell$, then $(1-x^{2})^{\lvert m\rvert/2}\,\mathrm{d}^{\lvert m\rvert}u/\mathrm{d}x^{\lvert m\rvert}$ solves (AL) with the same $\ell$ and with that $m$. In particular $P_{l}^{m}$ solves (AL) with $\ell=l$, and it is regular at $x=\pm1$.
2. **Shape.** $P_{l}^{m}(x)=(1-x^{2})^{m/2}\,\mathcal{P}_{l}^{m}(x)$ for $m\ge0$, where $\mathcal{P}_{l}^{m}$ is a polynomial of degree $l-m$. Hence $P_{l}^{m}$ is a polynomial of degree $l$ when $m$ is even, and carries a fractional power of $1-x^{2}$ when $m$ is odd; either way it is regular on $[-1,1]$, and it vanishes at $x=\pm1$ unless $m=0$.
3. **Integrality is forced.** The Frobenius analysis of (AL) at $x=0$ gives the coefficient recurrence
   $$
   a_{j+2}=\frac{j^{2}+(2m+1)j-\lambda+m(m+1)}{(j+1)(j+2)}\,a_{j},
   $$
   for the polynomial factor $\mathcal{P}$, this being the branch belonging to the indicial root $k=0$; the series diverges at $x=\pm1$ unless the numerator vanishes, terminating it. Arfken, Weber and Harris keep the two Frobenius branches apart. For $k=0$ the numerator must vanish at a non-negative **even** $j$, and it does so at $j=l-m$ when $\lambda=l(l+1)$, which requires $l$ to be an integer, at least $m$, and *of the same parity as* $m$. The second indicial root, $k=1$, supplies by the same argument the admissible $l$ of the opposite parity to $m$. Taken together the two branches give: for each $m$ the admissible $l$ run from $m$ upwards, one for every integer; equivalently, for each $l$ the admissible $m$ run from $-l$ to $l$.
4. **Negative $m$.**
   $$
   P_{l}^{-m}(x)=(-1)^{m}\frac{(l-m)!}{(l+m)!}\,P_{l}^{m}(x).
   $$
   So $P_{l}^{-m}$ carries no new information; it is kept because the recurrences in $m$ produce it.
5. **Parity and special values.**
   $$
   P_{l}^{m}(-x)=(-1)^{l+m}P_{l}^{m}(x),
   \qquad
   P_{l}^{m}(\pm1)=0 \ \ (m\neq0),
   $$
   and at the centre
   $$
   P_{l}^{m}(0)=\begin{cases}
   \dfrac{(-1)^{(l+m)/2}\,(l+m-1)!!}{(l-m)!!}, & l+m \text{ even},\\[2mm]
   0, & l+m \text{ odd}.
   \end{cases}
   $$
   Also $P_{m}^{m}(x)=(-1)^{m}(2m-1)!!\,(1-x^{2})^{m/2}$ and $P_{m+1}^{m}(x)=(-1)^{m}(2m+1)!!\,x\,(1-x^{2})^{m/2}$.
6. **Orthogonality in $l$ at fixed $m$, with unit weight.**
   $$
   \int_{-1}^{1}P_{l}^{m}(x)\,P_{k}^{m}(x)\,\mathrm{d}x
   =\frac{2}{2l+1}\,\frac{(l+m)!}{(l-m)!}\,\delta_{lk},
   $$
   or with $x=\cos\theta$,
   $$
   \int_{0}^{\pi}P_{l}^{m}(\cos\theta)P_{k}^{m}(\cos\theta)\sin\theta\,\mathrm{d}\theta
   =\frac{2}{2l+1}\frac{(l+m)!}{(l-m)!}\,\delta_{lk}.
   $$
   Consequently any $f$ on $(-1,1)$ expands, at fixed $m\ge0$, as $f=\sum_{k\ge0}a_{m+k}P_{m+k}^{m}$ with
   $$
   a_{l}=\frac{2l+1}{2}\frac{(l-m)!}{(l+m)!}\int_{-1}^{1}f(x)P_{l}^{m}(x)\,\mathrm{d}x .
   $$
   The sum starts at $l=m$ because $P_{l}^{m}=0$ below that.
7. **Orthogonality in $m$ at fixed $l$, with weight $(1-x^{2})^{-1}$.**
   $$
   \int_{-1}^{1}P_{l}^{m}(x)P_{l}^{k}(x)\,\frac{\mathrm{d}x}{1-x^{2}}
   =\frac{(l+m)!}{m\,(l-m)!}\,\delta_{mk}
   \qquad (m,k\ge1).
   $$
   Both books that state this relation add that it is of no practical use, because in spherical coordinates the $\varphi$ boundary condition already separates the different $m$.
8. **Generating function and recurrences.** For $m\ge0$,
   $$
   \frac{(2m)!\,(1-x^{2})^{m/2}}{2^{m}m!\,(1-2hx+h^{2})^{m+1/2}}=\sum_{n=0}^{\infty}\tilde P_{n+m}^{m}(x)\,h^{n},
   $$
   where $\tilde P$ denotes the phase-free functions of Riley, Hobson and Bence (so $\tilde P_{l}^{m}=(-1)^{m}P_{l}^{m}$). The two most useful recurrences are
   $$
   (2l+1)x\,P_{l}^{m}=(l+m)P_{l-1}^{m}+(l-m+1)P_{l+1}^{m},
   $$
   $$
   P_{l}^{m+1}+\frac{2mx}{(1-x^{2})^{1/2}}P_{l}^{m}+(l+m)(l-m+1)P_{l}^{m-1}=0 ,
   $$
   the first stepping in $l$ at fixed $m$, the second in $m$ at fixed $l$. Both are valid for negative as well as non-negative $m$ with the definition adopted here.
:::

:::idea{provenance=original}
Everything comes from the single observation that **differentiating Legendre's equation $m$ times almost gives the associated equation**. Differentiating $(1-x^{2})u''-2xu'+\ell(\ell+1)u=0$ $m$ times with Leibniz produces
$$
(1-x^{2})v''-2x(m+1)v'+(\ell-m)(\ell+m+1)v=0,
\qquad v=\frac{\mathrm{d}^{m}u}{\mathrm{d}x^{m}} ,
$$
which differs from (AL) only in the first-derivative coefficient and the eigenvalue. The factor $(1-x^{2})^{m/2}$ is exactly the change of dependent variable that repairs both: it trades the extra $-2mxv'$ for the term $-m^{2}y/(1-x^{2})$. That one calculation proves part 1, and parts 2, 3 and 5 are then bookkeeping about degrees and parities.

The orthogonality in $l$ (part 6) is again the Sturm-Liouville argument: $p=1-x^{2}$ vanishes at both ends, so the boundary terms die, and the $q$ term is the same for both functions and cancels on subtraction. The orthogonality in $m$ (part 7) is the *same* equation read as an eigenvalue problem in $-m^{2}$ with weight $(1-x^{2})^{-1}$ — one equation, two self-adjoint readings, two orthogonality relations.

The normalisation constant is the only genuine computation. Put Rodrigues' formula into both factors, integrate by parts $l+m$ times so that all boundary terms vanish, and then notice that of all the terms Leibniz produces in differentiating $(1-x^{2})^{m}\,\mathrm{d}^{l+m}(x^{2}-1)^{l}/\mathrm{d}x^{l+m}$ a further $l+m$ times, exactly one has the degrees right to survive. That term carries the factor $(l+m)!/(l-m)!$, and the rest of the integral is the Legendre computation already done.
:::

:::proof[Part 1: the reduction to Legendre's equation]{provenance=adapted src="rhb-2006:§18.2, the proof of eq. (18.29), p. 587; strauss-2008:§10.6, the lines following eq. (11), p. 293"}
Assume first $m\ge0$; the case $m<0$ then follows because (AL) contains only $m^{2}$.

**Step 1: differentiate Legendre's equation $m$ times.** Let $u$ solve $(1-x^{2})u''-2xu'+\ell(\ell+1)u=0$ and set $v=\mathrm{d}^{m}u/\mathrm{d}x^{m}$. Apply $\mathrm{d}^{m}/\mathrm{d}x^{m}$ term by term with Leibniz's rule. The factor $1-x^{2}$ contributes three terms, $-2x$ contributes two, and the constant one:
$$
(1-x^{2})v''+m(-2x)v'+\binom{m}{2}(-2)v
\;-\;2\bigl[xv'+mv\bigr]
\;+\;\ell(\ell+1)v=0 .
$$
Collecting the $v'$ terms gives $-2x(m+1)v'$, and the $v$ terms give $\bigl[\ell(\ell+1)-m(m-1)-2m\bigr]v=\bigl[\ell(\ell+1)-m(m+1)\bigr]v$. Since $\ell(\ell+1)-m(m+1)=(\ell-m)(\ell+m+1)$,
$$
(1-x^{2})v''-2x(m+1)v'+(\ell-m)(\ell+m+1)v=0 .
\tag{D}
$$

**Step 2: restore the dependent variable.** Put $y=(1-x^{2})^{m/2}v$, so $v=(1-x^{2})^{-m/2}y$. Differentiating,
$$
v'=(1-x^{2})^{-m/2}\Bigl[y'+\frac{mx}{1-x^{2}}\,y\Bigr],
$$
$$
v''=(1-x^{2})^{-m/2}\Bigl[y''+\frac{2mx}{1-x^{2}}\,y'+\frac{m}{1-x^{2}}\,y+\frac{m(m+2)x^{2}}{(1-x^{2})^{2}}\,y\Bigr].
$$

**Step 3: substitute into (D).** Write $\sigma=1-x^{2}$ for brevity. Putting the two displays into $\sigma v''-2x(m+1)v'+(\ell-m)(\ell+m+1)v=0$ and cancelling the common factor $\sigma^{-m/2}$, which is nonzero for $\lvert x\rvert<1$,
$$
\sigma y''
+\underbrace{\Bigl[2mx-2x(m+1)\Bigr]}_{y'}y'
+\underbrace{\Bigl[m+\frac{m(m+2)x^{2}}{\sigma}-\frac{2m(m+1)x^{2}}{\sigma}+(\ell-m)(\ell+m+1)\Bigr]}_{y}y=0 .
$$
The coefficient of $y'$ collapses to $-2x$. In the coefficient of $y$, the two fractions combine with $m(m+2)-2m(m+1)=-m^{2}$ into $-m^{2}x^{2}/\sigma$, and since $\dfrac{m^{2}x^{2}}{\sigma}=\dfrac{m^{2}}{\sigma}-m^{2}$,
$$
m-\frac{m^{2}x^{2}}{\sigma}=m+m^{2}-\frac{m^{2}}{\sigma}=m(m+1)-\frac{m^{2}}{\sigma} .
$$
Adding the last piece and using $(\ell-m)(\ell+m+1)=\ell(\ell+1)-m(m+1)$, the coefficient of $y$ is $\ell(\ell+1)-m^{2}/\sigma$. Altogether
$$
(1-x^{2})y''-2xy'+\Bigl[\ell(\ell+1)-\frac{m^{2}}{1-x^{2}}\Bigr]y=0 ,
$$
which is (AL).

**Step 4: specialise and check regularity.** Take $u=P_{l}$, $\ell=l$. Then $y=(1-x^{2})^{m/2}\mathrm{d}^{m}P_{l}/\mathrm{d}x^{m}$, and multiplying by the constant $(-1)^{m}$ — which (AL) permits, being linear — gives $P_{l}^{m}$. For part 2, $\mathrm{d}^{m}P_{l}/\mathrm{d}x^{m}$ is a polynomial of degree $l-m$ (zero if $m>l$), so $P_{l}^{m}=(-1)^{m}(1-x^{2})^{m/2}\mathcal{P}$ with $\deg\mathcal{P}=l-m$. The factor $(1-x^{2})^{m/2}$ is continuous on $[-1,1]$ and vanishes at $\pm1$ for $m\ge1$, so $P_{l}^{m}$ is regular on the closed interval and vanishes at the ends unless $m=0$. For part 5, each differentiation flips parity and $(1-x^{2})^{m/2}$ is even, so $P_{l}^{m}$ has the parity of $l+m$. $\square$
:::

:::proof[Parts 4, 6 and 7: negative $m$, and the two orthogonality relations]{provenance=adapted src="rhb-2006:§18.2.1, the proof of eq. (18.33), pp. 588–589, and §18.2.2, the derivation of eqs. (18.36)–(18.37) and (18.39), pp. 590–591; arfken-2013:§15.4, eqs. (15.97)–(15.107), pp. 746–748"}
**Part 4, negative $m$.** Take $m\ge0$ and work on $(-1,1)$, where $1-x>0$ and $1+x>0$ so that every fractional power below is unambiguous. Split $(x^{2}-1)^{l}=(x-1)^{l}(x+1)^{l}$ and apply Leibniz to the $(l+m)$-fold derivative in the definition. The term with $r$ derivatives on $(x-1)^{l}$ is
$$
\binom{l+m}{r}\frac{l!}{(l-r)!}(x-1)^{l-r}\cdot\frac{l!}{(r-m)!}(x+1)^{r-m},
$$
nonzero only when $r\le l$ (first factor) and $l+m-r\le l$, that is $r\ge m$ (second). Multiply by $(1-x^{2})^{m/2}=(1-x)^{m/2}(1+x)^{m/2}$ and write $(x-1)^{l-r}=(-1)^{l-r}(1-x)^{l-r}$:
$$
P_{l}^{m}=\frac{(-1)^{m}}{2^{l}l!}\sum_{r=m}^{l}
\frac{(l+m)!\,(l!)^{2}\,(-1)^{l-r}}{r!\,(l+m-r)!\,(l-r)!\,(r-m)!}\;
(1-x)^{\,l-r+m/2}\,(1+x)^{\,r-m/2} .
\tag{$\dagger$}
$$

Now repeat with $-m$ in place of $m$, so that the definition reads $P_{l}^{-m}=\frac{(-1)^{-m}}{2^{l}l!}(1-x^{2})^{-m/2}\mathrm{d}^{l-m}(x^{2}-1)^{l}/\mathrm{d}x^{l-m}$. Leibniz now gives terms indexed by $s$, with $s$ derivatives on $(x-1)^{l}$:
$$
\binom{l-m}{s}\frac{l!}{(l-s)!}(x-1)^{l-s}\cdot\frac{l!}{(s+m)!}(x+1)^{s+m},
\qquad 0\le s\le l-m .
$$
Multiplying by $(1-x)^{-m/2}(1+x)^{-m/2}$ and again replacing $(x-1)^{l-s}$ by $(-1)^{l-s}(1-x)^{l-s}$, the term carries $(1-x)^{\,l-s-m/2}(1+x)^{\,s+m/2}$. Substitute $s=r-m$, so that $r$ again runs from $m$ to $l$: the powers become
$$
(1-x)^{\,l-r+m-m/2}(1+x)^{\,r-m+m/2}=(1-x)^{\,l-r+m/2}(1+x)^{\,r-m/2},
$$
**identical** to those in $(\dagger)$, and the sign becomes $(-1)^{l-s}=(-1)^{l-r+m}$. The factorials become
$$
\frac{(l-m)!}{(r-m)!\,(l-r)!}\cdot\frac{(l!)^{2}}{(l-r+m)!\,r!},
$$
which is the same set $\{r!,\ (l+m-r)!,\ (l-r)!,\ (r-m)!\}$ as in $(\dagger)$ with $(l+m)!$ replaced by $(l-m)!$. Collecting the prefactors, $(-1)^{-m}(-1)^{l-r+m}=(-1)^{l-r}$, whereas $(\dagger)$ carries $(-1)^{m}(-1)^{l-r}$. Therefore every term of $P_{l}^{-m}$ equals the corresponding term of $P_{l}^{m}$ times the single constant
$$
\frac{(l-m)!}{(l+m)!}\cdot\frac{1}{(-1)^{m}}=(-1)^{m}\frac{(l-m)!}{(l+m)!} ,
$$
and summing,
$$
P_{l}^{-m}=(-1)^{m}\frac{(l-m)!}{(l+m)!}P_{l}^{m} .
$$
Hassani obtains the same relation from the ladder-operator construction, by building $Y_{l,-m}$ from the bottom state with $L_{+}$ instead of from the top state with $L_{-}$ and comparing.

**Part 6, orthogonality in $l$.** Fix $m$ and let $l\neq k$. Both $P_{l}^{m}$ and $P_{k}^{m}$ satisfy the Sturm-Liouville form of (AL) with the *same* $p=1-x^{2}$ and the *same* $q=-m^{2}/(1-x^{2})$, and different eigenvalues $l(l+1)$, $k(k+1)$. Multiply the equation for $P_{l}^{m}$ by $P_{k}^{m}$, integrate over $[-1,1]$, and integrate the $p$-term by parts. The boundary contribution is
$$
\Bigl[(1-x^{2})\,P_{k}^{m}\,\frac{\mathrm{d}P_{l}^{m}}{\mathrm{d}x}\Bigr]_{-1}^{1}=0 ,
$$
because $1-x^{2}$ vanishes at both ends while $P_{k}^{m}$ and $\mathrm{d}P_{l}^{m}/\mathrm{d}x$ stay bounded there — for $m\ge1$ the derivative of $(1-x^{2})^{m/2}$ can blow up like $(1-x^{2})^{m/2-1}$, but $1-x^{2}$ times it still tends to $0$, and $P_{k}^{m}$ itself vanishes at the ends. Subtracting the same identity with $l$ and $k$ exchanged, the symmetric integral $\int(1-x^{2})(P_{k}^{m})'(P_{l}^{m})'$ and the $q$-integral $\int q P_{l}^{m}P_{k}^{m}$ both cancel, leaving
$$
\bigl[l(l+1)-k(k+1)\bigr]\int_{-1}^{1}P_{l}^{m}P_{k}^{m}\,\mathrm{d}x=0 ,
$$
hence the integral vanishes. Note that $m$ must be the same in both factors for the $q$-terms to cancel.

**The normalisation constant.** Take $l=k$ and write $R=x^{2}-1$. By the definition,
$$
I_{l}^{m}=\int_{-1}^{1}\bigl(P_{l}^{m}\bigr)^{2}\mathrm{d}x
=\frac{1}{2^{2l}(l!)^{2}}\int_{-1}^{1}(1-x^{2})^{m}\Bigl[\frac{\mathrm{d}^{l+m}R^{l}}{\mathrm{d}x^{l+m}}\Bigr]^{2}\mathrm{d}x ,
$$
the two factors $(-1)^{m}$ having squared away. Integrate by parts $l+m$ times, differentiating $(1-x^{2})^{m}\mathrm{d}^{l+m}R^{l}/\mathrm{d}x^{l+m}$ and integrating the other factor. Each boundary term retains at least one undifferentiated factor $R$ and so vanishes at $x=\pm1$. Thus
$$
I_{l}^{m}=\frac{(-1)^{l+m}}{2^{2l}(l!)^{2}}\int_{-1}^{1}R^{l}\,\frac{\mathrm{d}^{l+m}}{\mathrm{d}x^{l+m}}\Bigl[(1-x^{2})^{m}\frac{\mathrm{d}^{l+m}R^{l}}{\mathrm{d}x^{l+m}}\Bigr]\mathrm{d}x .
$$
Expand the inner $(l+m)$-fold derivative by Leibniz. A term differentiates $(1-x^{2})^{m}$ $r$ times and $\mathrm{d}^{l+m}R^{l}/\mathrm{d}x^{l+m}$ a further $l+m-r$ times. The first is nonzero only for $r\le2m$; the second needs $2l+2m-r\le 2l$, that is $r\ge2m$. So $r=2m$ is the only surviving term, and it contributes
$$
\binom{l+m}{2m}\frac{\mathrm{d}^{2m}(1-x^{2})^{m}}{\mathrm{d}x^{2m}}\,\frac{\mathrm{d}^{2l}R^{l}}{\mathrm{d}x^{2l}}
=\frac{(l+m)!}{(2m)!\,(l-m)!}\cdot(-1)^{m}(2m)!\cdot(2l)!
=(-1)^{m}\frac{(l+m)!}{(l-m)!}(2l)! ,
$$
where $\mathrm{d}^{2m}(1-x^{2})^{m}/\mathrm{d}x^{2m}=(-1)^{m}(2m)!$ and $\mathrm{d}^{2l}R^{l}/\mathrm{d}x^{2l}=(2l)!$. Hence, with $(-1)^{l+m}(-1)^{m}=(-1)^{l}$,
$$
I_{l}^{m}=\frac{(-1)^{l}(2l)!}{2^{2l}(l!)^{2}}\frac{(l+m)!}{(l-m)!}\int_{-1}^{1}R^{l}\,\mathrm{d}x
=\frac{(2l)!}{2^{2l}(l!)^{2}}\frac{(l+m)!}{(l-m)!}\int_{-1}^{1}(1-x^{2})^{l}\,\mathrm{d}x .
$$
The last integral is the $K_{l}=2^{2l+1}(l!)^{2}/(2l+1)!$ of :ref[]{to=spec.legendre-polynomials}, so
$$
I_{l}^{m}=\frac{(2l)!}{2^{2l}(l!)^{2}}\cdot\frac{2^{2l+1}(l!)^{2}}{(2l+1)!}\cdot\frac{(l+m)!}{(l-m)!}
=\frac{2}{2l+1}\frac{(l+m)!}{(l-m)!} .
$$
At $m=0$ this is the Legendre value $2/(2l+1)$, as it must be. The $\theta$-form follows from $x=\cos\theta$, $\mathrm{d}x=-\sin\theta\,\mathrm{d}\theta$.

**Part 7, orthogonality in $m$.** Read (AL) the other way: for fixed $l$, the family $\{P_{l}^{m}\}_{m}$ consists of eigenfunctions of
$$
\frac{\mathrm{d}}{\mathrm{d}x}\Bigl[(1-x^{2})\frac{\mathrm{d}y}{\mathrm{d}x}\Bigr]+l(l+1)y=-m^{2}\,\frac{1}{1-x^{2}}\,y ,
$$
a Sturm-Liouville problem with $p=1-x^{2}$, $q=l(l+1)$, eigenvalue $-m^{2}$ and weight $\rho=(1-x^{2})^{-1}$; the natural interval is again $[-1,1]$ and the $P_{l}^{m}$ are regular there. Distinct eigenvalues force orthogonality with respect to *that* weight. Since the eigenvalue is $-m^{2}$, "distinct" means $\lvert m\rvert\neq\lvert k\rvert$, and that is the hypothesis under which Riley, Hobson and Bence state the vanishing, their eq. (18.39); $m=-k$ gives the same eigenvalue and the argument says nothing about it (part 4 does, and the integral is then nonzero).

The restriction to $m,k\ge1$ in part 7 belongs to the *constant*, not to the vanishing. The value $(l+m)!/[m(l-m)!]$, which Arfken, Weber and Harris and Riley, Hobson and Bence both record, blows up as $m\to0$, and rightly so: at $m=0$ the integral itself diverges, because $P_{l}^{0}(\pm1)=(\pm1)^{l}\neq0$ leaves the integrand $P_{l}^{2}/(1-x^{2})$ behaving like $[2(1-x)]^{-1}$ at the upper end. For $m\ge1$ the factor $(1-x^{2})^{m}$ in $(P_{l}^{m})^{2}$ more than cancels the weight and the integral converges. Both books add that the relation is not used in practice. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
**$\lvert m\rvert\le l$ and $l$ an integer.** These are not conventions but the only way to get a solution bounded on $[-1,1]$, by part 3. Arfken, Weber and Harris note in a footnote the natural hope that the prefactor $(1-x^{2})^{m/2}$, which vanishes at the ends, might tame a divergent series $\mathcal{P}$; they state that it does not. For $\lvert m\rvert>l$ the function $P_{l}^{m}$ is not a small solution but identically zero, which is why the expansion in part 6 starts at $l=m$.

**The same $m$ in both factors of part 6.** The $q$-term $-m^{2}/(1-x^{2})$ cancels on subtraction only if it is identical in the two equations. With different $m$'s there is a leftover $(k^{2}-m^{2})\int P_{l}^{m}P_{l'}^{k}(1-x^{2})^{-1}$ and the relation fails; what survives instead is part 7, with its different weight. Riley, Hobson and Bence are explicit that $m$ must match.

**Vanishing of $p=1-x^{2}$ at both ends.** This is what kills the boundary terms in part 6 and in the normalisation integral, and it is why no boundary condition has to be imposed by hand. The step is delicate for $m\ge1$: $\mathrm{d}P_{l}^{m}/\mathrm{d}x$ is *unbounded* at $x=\pm1$ when $m=1$ (it behaves like $(1-x^{2})^{-1/2}$), and what vanishes is the product $(1-x^{2})P_{k}^{m}(P_{l}^{m})'$, in which $P_{k}^{m}$ supplies another factor $(1-x^{2})^{m/2}$. On a spherical cap $\theta\in[0,\theta_{0}]$ with $\theta_{0}<\pi$ the boundary term at $\theta_{0}$ does not vanish and the $P_{l}^{m}$ are *not* orthogonal; the correct eigenfunctions there solve (AL) with non-integer $\ell$, which is Strauss's hint for the cone problem.

**The Condon-Shortley phase.** It is used nowhere in any proof: it is a constant and (AL) is linear and homogeneous. It cancels identically out of parts 6 and 7, which are quadratic. It matters only in parts 4, 5 and 8, and in any table. Compare Arfken, Weber and Harris's $P_{1}^{1}=-\sin\theta$ with Riley, Hobson and Bence's $P_{1}^{1}=+\sin\theta$: both books are internally consistent, and both produce the same $Y_{1}^{1}$.

**Reality.** All of $P_{l}^{m}$, (AL) and both weights are real, so nothing above needs complex conjugation. Conjugation appears only once the azimuthal factor $\mathrm{e}^{\mathrm{i}m\varphi}$ is attached, in :ref[]{to=spec.spherical-harmonics}.
:::

:::method[Getting $P_{l}^{m}$ and its integrals]{provenance=adapted src="arfken-2013:§15.4, Example 15.4.1 and eqs. (15.88), (15.93)–(15.94), pp. 745–746"}
1. **For a single value, small $l$ and $m$:** differentiate $P_{l}$ $m$ times, multiply by $(1-x^{2})^{m/2}$, and attach $(-1)^{m}$.
2. **For a whole table, or for large $l$:** climb in $l$ at fixed $m$, as Arfken, Weber and Harris do. Start from the closed forms
   $$
   P_{m}^{m}=(-1)^{m}(2m-1)!!\,(1-x^{2})^{m/2},
   \qquad
   P_{m+1}^{m}=(-1)^{m}(2m+1)!!\,x\,(1-x^{2})^{m/2},
   $$
   the second being the $l=m$ case of the recurrence with the $P_{m-1}^{m}=0$ term dropped, and then iterate
   $$
   P_{l+1}^{m}=\frac{(2l+1)x\,P_{l}^{m}-(l+m)P_{l-1}^{m}}{l-m+1} .
   $$
   Remember that any $P_{l'}^{m}$ with $l'<m$ is zero, so terms containing one are simply omitted.
3. **To raise $m$ instead:** use the second recurrence of part 8, solved for $P_{l}^{m+1}$.
4. **For negative $m$:** do not differentiate a negative number of times; use part 4.
5. **For any integral $\int_{-1}^{1}P_{l}^{m}P_{k}^{m}\,\mathrm{d}x$:** do not integrate. It is $0$ unless $l=k$, and then it is $\dfrac{2}{2l+1}\dfrac{(l+m)!}{(l-m)!}$.
6. **To normalise for quantum mechanics:** the combination that is a unit vector in $L^{2}(0,\pi;\sin\theta\,\mathrm{d}\theta)$ is
   $$
   \Theta_{l}^{m}(\theta)=\sqrt{\frac{2l+1}{2}\frac{(l-m)!}{(l+m)!}}\;P_{l}^{m}(\cos\theta),
   $$
   which is the $\theta$ half of a spherical harmonic.
:::

:::example[$P_{3}^{2}$ from three routes, and its norm]{provenance=original}
**Step 1: from the definition.** $P_{3}=\tfrac12(5x^{3}-3x)$, so $P_{3}'=\tfrac12(15x^{2}-3)$ and $P_{3}''=15x$. With $m=2$ the phase is $(-1)^{2}=+1$ and
$$
P_{3}^{2}(x)=(1-x^{2})^{1}\cdot 15x=15x\,(1-x^{2}) .
$$

**Step 2: from the Rodrigues form.** Here $l+m=5$ and $(x^{2}-1)^{3}=x^{6}-3x^{4}+3x^{2}-1$. Only the leading term survives five differentiations: $\mathrm{d}^{5}x^{6}/\mathrm{d}x^{5}=6!\,x/1!=720x$, while $x^{4}$, $x^{2}$ and the constant are annihilated. Then
$$
P_{3}^{2}=\frac{(+1)}{2^{3}\cdot3!}(1-x^{2})\cdot 720x=\frac{720}{48}x(1-x^{2})=15x(1-x^{2}),
$$
the same thing.

**Step 3: from the recurrence.** Start at the top: $P_{2}^{2}=(-1)^{2}(3)!!\,(1-x^{2})=3(1-x^{2})$, since $(2\cdot2-1)!!=3!!=3$. Then the $l=m=2$ case of the step-in-$l$ recurrence, with $P_{1}^{2}=0$ dropped, gives
$$
P_{3}^{2}=\frac{(2\cdot2+1)x\,P_{2}^{2}-0}{2-2+1}=5x\cdot3(1-x^{2})=15x(1-x^{2}).
$$
Three routes, one answer.

**Step 4: the normalisation integral, by hand.** Part 6 predicts
$$
\int_{-1}^{1}\bigl(P_{3}^{2}\bigr)^{2}\mathrm{d}x=\frac{2}{2\cdot3+1}\cdot\frac{(3+2)!}{(3-2)!}=\frac{2}{7}\cdot\frac{120}{1}=\frac{240}{7} .
$$
Check it directly:
$$
\int_{-1}^{1}225x^{2}(1-x^{2})^{2}\mathrm{d}x
=225\int_{-1}^{1}\bigl(x^{2}-2x^{4}+x^{6}\bigr)\mathrm{d}x
=225\Bigl(\frac23-\frac45+\frac27\Bigr).
$$
Over $105$: $\tfrac23=\tfrac{70}{105}$, $\tfrac45=\tfrac{84}{105}$, $\tfrac27=\tfrac{30}{105}$, so the bracket is $\tfrac{70-84+30}{105}=\tfrac{16}{105}$ and the integral is $225\cdot\tfrac{16}{105}=\tfrac{3600}{105}=\tfrac{240}{7}=34.2857\ldots$ — exactly the predicted value.

**Step 5: two more checks.** The $m=1$ case: $P_{3}^{1}=-\tfrac32(5x^{2}-1)(1-x^{2})^{1/2}$, and
$$
\int_{-1}^{1}\bigl(P_{3}^{1}\bigr)^{2}\mathrm{d}x=\frac94\int_{-1}^{1}(5x^{2}-1)^{2}(1-x^{2})\,\mathrm{d}x=\frac{24}{7},
$$
against the formula $\tfrac27\cdot\tfrac{4!}{2!}=\tfrac27\cdot12=\tfrac{24}{7}$. And the second orthogonality of part 7 at $l=3$, $m=1$:
$$
\int_{-1}^{1}\frac{\bigl(P_{3}^{1}\bigr)^{2}}{1-x^{2}}\,\mathrm{d}x
=\frac94\int_{-1}^{1}(5x^{2}-1)^{2}\,\mathrm{d}x
=\frac94\int_{-1}^{1}\bigl(25x^{4}-10x^{2}+1\bigr)\mathrm{d}x
=\frac94\Bigl(25\cdot\tfrac25-10\cdot\tfrac23+2\Bigr)=\frac94\cdot\frac{16}{3}=12,
$$
since $10-\tfrac{20}{3}+2=\tfrac{16}{3}$; and this matches $\dfrac{(l+m)!}{m\,(l-m)!}=\dfrac{4!}{1\cdot2!}=12$. Also $\int_{-1}^{1}P_{3}^{1}P_{3}^{2}(1-x^{2})^{-1}\mathrm{d}x=0$ by parity, since $P_{3}^{1}$ is even and $P_{3}^{2}$ is odd — consistent with part 5, $(-1)^{3+1}=+1$ and $(-1)^{3+2}=-1$. Every integral in this example was checked symbolically.
:::

:::application{provenance=original}
**Anything separated in spherical coordinates.** Whenever $\nabla^{2}$ is separated in spherical polars without assuming axial symmetry, the polar-angle factor is forced to be $P_{l}^{m}(\cos\theta)$ and the azimuthal factor $\mathrm{e}^{\mathrm{i}m\varphi}$ (or $\cos m\varphi$, $\sin m\varphi$). The integer $m$ comes from single-valuedness in $\varphi$; the integer $l\ge\lvert m\rvert$ comes from part 3; and the pair $(l,m)$ then labels the solution completely. This applies to the Laplace, Helmholtz, Schrödinger and wave equations alike, and it is where :ref[]{to=pde.separation-of-variables} and :ref[]{to=spec.spherical-harmonics} begin.

**Atomic structure.** In the hydrogen-like problem, $-\hbar^{2}\nabla^{2}/2\mu+V(r)$ commutes with the angular-momentum operators, and $P_{l}^{m}(\cos\theta)\mathrm{e}^{\mathrm{i}m\varphi}$ is the simultaneous eigenfunction: $l$ is the orbital quantum number, $m$ the magnetic one, and the $(2l+1)$-fold degeneracy in $m$ is the statement that $l$ fixes the radial equation while $m$ does not. The Condon-Shortley phase is in the tables of atomic spectroscopy precisely because it makes the angular-momentum ladder operators act with uniform signs; this is why a formula lifted from a spectroscopy table into an electrodynamics calculation that follows Jackson will be wrong by $(-1)^{m}$. Hassani's construction, which produces the angular eigenfunctions by lowering from the top state with $L_{-}$, shows what the ladder route does and does not settle: it fixes the relative phases along a ladder of fixed $l$, and it delivers the phase-free $P_{l}^{m}$ of his eq. (13.35), with the $(-1)^{m}$ then put into $Y_{lm}$ by hand in eq. (13.34). The phase is a choice made in the definition, in whichever of the two places the book prefers; no derivation forces it.

**Geomagnetism and gravimetry.** The Earth's magnetic and gravitational fields are catalogued as expansions in $P_{l}^{m}(\cos\theta)\{\cos m\varphi,\sin m\varphi\}$ — the Gauss coefficients $g_{l}^{m}$, $h_{l}^{m}$ of the International Geomagnetic Reference Field, and the Stokes coefficients $C_{lm}$, $S_{lm}$ of a gravity model. Here $l$ measures the spatial scale and $m$ the number of lobes around a line of latitude, and part 6 is what makes the coefficients recoverable from satellite data by projection. The normalisation differs between fields: geodesy mostly uses the "fully normalised" $\bar P_{l}^{m}$, which is $P_{l}^{m}$ times $\sqrt{(2-\delta_{m0})(2l+1)(l-m)!/(l+m)!}$, because the raw $(l+m)!/(l-m)!$ in part 6 overflows at the degree $l\sim2000$ of a modern model.

**Normal modes of a sphere.** The free oscillations of the Earth, the acoustic modes of a spherical cavity, and the vibrations of a drum stretched over a hemisphere all have $P_{l}^{m}(\cos\theta)$ as their angular shape, with the radial factor a spherical Bessel function (:ref[]{to=spec.spherical-bessel}). The nodal pattern is read straight off part 5: $l-\lvert m\rvert$ nodal circles of latitude from the zeros of the polynomial factor, and $\lvert m\rvert$ nodal meridians from the azimuthal factor.
:::
