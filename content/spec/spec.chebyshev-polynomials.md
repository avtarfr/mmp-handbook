---
id: spec.chebyshev-polynomials
title: Chebyshev polynomials
kind: definition
level: core
summary: "Disguised cosines: $T_n(\\cos\\theta)=\\cos n\\theta$ gives polynomials with a three-term recurrence, orthogonality for the weight $(1-x^{2})^{-1/2}$, and the minimax property that makes $2^{1-n}T_n$ the monic polynomial of degree $n$ that stays closest to zero on $[-1,1]$."
prereqs: [spec.orthogonal-polynomials-general, fourier.fourier-series]
provenance: adapted
sources:
  - work: rhb-2006
    loc: "§18.4, Chebyshev's equation (18.54), the substitution $x=\\cos\\theta$ and the two solutions (18.55), the binomial expansions (18.56)–(18.57), the companions $W_n$ and $U_n$ (18.58), the general solution, the first few $T_n$ and $U_n$ and their special values, and the ODE (18.59) for $U_n$, pp. 595–598; §18.4.1, the Rodrigues formulas, the Sturm-Liouville reading of the orthogonality (18.61), the normalisation (18.62), the expansion coefficients, the orthogonality and normalisation for $U_n$, the generating functions (18.63)–(18.64) and the recurrences (18.65)–(18.72) with the derivative relations, pp. 599–602"
    pages: "595-602"
    role: the trigonometric route taken here in preference to a power-series solution; the clean separation of the four solutions $T_n,V_n,U_n,W_n$ and which two are polynomials; the Sturm-Liouville identification $p=(1-x^{2})^{1/2}$, $\rho=(1-x^{2})^{-1/2}$, $\lambda=n^{2}$; the normalisation constants including the exceptional $n=0$ case; the generating function $(1-xh)/(1-2xh+h^{2})$; the derivation of every recurrence from the cosine addition formulas
  - work: kreyszig-1978
    loc: "§6.3, Definition 6.3-1 (extremal point), Definition 6.3-2 (Haar condition) and the statement that it is necessary and sufficient for uniqueness of best approximations, p. 337; §6.4, Definition 6.4-1 (alternating set), Lemma 6.4-2 (best approximation) and its proof, the reduction of the approximation of $t^{n}$ to a monic problem, pp. 345–346; the induction (4)–(5) showing $\\cos n\\theta$ is a polynomial of degree $n$ in $\\cos\\theta$ with leading coefficient $2^{n-1}$, pp. 347–348; the definition (6), Theorem 6.4-3 (the minimum property), the resulting best approximation (8)–(9), the recursion (10) and the series (11), pp. 348–349; footnote 1 defining the second kind as $\\sin n\\theta$, p. 348"
    pages: "337, 345-349"
    role: the minimax theorem and the apparatus around it — extremal points, alternating sets, the Haar condition and the uniqueness of best uniform approximation; the induction establishing the leading coefficient $2^{n-1}$; the economisation formula $y=x-2^{1-n}T_n$; and the competing definition of the polynomials of the second kind
  - work: arfken-2013
    loc: "§18.4, the ultraspherical generating function (18.85), the type II generating function (18.86), the limiting construction of type I and the generating function (18.91), the recurrences (18.92)–(18.96), Table 18.4, the two ODEs (18.97)–(18.98), the special values (18.100), the parity relations (18.101), the Rodrigues formulas (18.102)–(18.103), the trigonometric forms (18.104)–(18.111), the power series (18.114)–(18.115) and the discussion of the minimax principle in numerical analysis with Example 18.4.1, pp. 899–906; the orthogonality weights at the head of the Orthogonality subsection, p. 906; the Gram-Schmidt constructions in Exercises 5.2.5–5.2.6 with their normalisations, p. 274"
    pages: "274, 899-906"
    role: the placement of both kinds inside the ultraspherical family; the generating function $(1-t^{2})/(1-2xt+t^{2})$ with its exceptional $n=0$ coefficient; the two differential equations; the four trigonometric solutions and the relations between them; the normalisation conventions of the orthogonality integrals; and the statement of why a truncated Chebyshev expansion has nearly equal error maxima
  - work: hassani-2013
    loc: "Table 8.1, the Chebyshev polynomials of both kinds as the Jacobi cases $\\mu=\\nu=-\\tfrac12$ and $\\mu=\\nu=+\\tfrac12$ with weights $(1-x^{2})^{\\mp1/2}$, p. 245; Table 8.2, the generating functions with the coefficient $a_n=2$ for $n\\ge1$ and $a_0=1$, p. 258; Problems 8.36–8.37, the parity relations and the special values $T_n(1)=1$, $U_n(1)=n+1$, p. 263"
    pages: "245, 258, 263"
    role: the identification of both kinds as special Jacobi polynomials and the weights that go with them; the generating functions in the normalisation with the exceptional zeroth coefficient; the special values that pin the convention for $U_n$
  - work: stakgold-holst-2011
    loc: "§10.6, Exercise 10.6.2, parts 1–3: the reduction of the error of a polynomial iterative method to a mini-max problem, the statement that $T_k(x)=\\cos(k\\arccos x)$ solves it by equi-oscillation, the shifted and scaled solution on the spectral interval, and the resulting bound $2\\bigl[(\\sqrt{\\kappa}-1)/(\\sqrt{\\kappa}+1)\\bigr]^{k+1}$, pp. 808–809; Lemma 10.6.10 and the $k=0$ case $P_1^{\\mathrm{opt}}$, p. 776"
    pages: "776, 808-809"
    role: the application to iterative linear solvers — why the Chebyshev polynomial shifted onto the spectral interval is the optimal residual polynomial, and the square-root-of-the-condition-number convergence rate that follows
---

:::definition[Chebyshev polynomials: both kinds]{provenance=adapted src="rhb-2006:§18.4, eqs. (18.54)–(18.55) and (18.58), pp. 595–596; arfken-2013:§18.4, eqs. (18.104)–(18.110), p. 904; kreyszig-1978:§6.4, eq. (6) and footnote 1, p. 348; hassani-2013:Table 8.1, p. 245"}
Substituting $x=\cos\theta$ into **Chebyshev's equation**
$$
(1-x^{2})\,y''-x\,y'+n^{2}y=0
$$
turns it, because $\mathrm{d}/\mathrm{d}x=(-1/\sin\theta)\,\mathrm{d}/\mathrm{d}\theta$, into $\mathrm{d}^{2}y/\mathrm{d}\theta^{2}+n^{2}y=0$, whose solutions are $\cos n\theta$ and $\sin n\theta$. The **Chebyshev polynomials of the first kind** are the first of these written back in $x$:
$$
T_{n}(x)=\cos\bigl(n\arccos x\bigr),\qquad -1\le x\le 1,\qquad n=0,1,2,\dots
$$
The second solution, $V_{n}(x)=\sin(n\arccos x)$, is not a polynomial. Riley, Hobson and Bence and Arfken, Weber and Harris both define two further functions by dividing out the square root,
$$
U_{n}(x)=\frac{V_{n+1}(x)}{\sqrt{1-x^{2}}}=\frac{\sin\bigl((n+1)\theta\bigr)}{\sin\theta},
\qquad
W_{n}(x)=\frac{T_{n+1}(x)}{\sqrt{1-x^{2}}}=\frac{\cos\bigl((n+1)\theta\bigr)}{\sin\theta},
$$
of which $U_{n}$ is a polynomial of degree $n$ — the **Chebyshev polynomial of the second kind** — and $W_{n}$ is not. Exactly two of the four are polynomials, and they are the two that are used.

In the language of :ref[]{to=spec.orthogonal-polynomials-general}, Hassani places both among the Jacobi polynomials: $T_{n}$ is the case $\mu=\nu=-\tfrac12$, with weight $(1-x^{2})^{-1/2}$ on $[-1,1]$, and $U_{n}$ the case $\mu=\nu=+\tfrac12$, with weight $(1-x^{2})^{+1/2}$. Arfken, Weber and Harris instead obtain them as the ultraspherical polynomials $C^{(\alpha)}_{n}$ at $\alpha=0$ and $\alpha=1$, the first of those needing a limit because the generating function degenerates at $\alpha=0$; the Legendre polynomials (:ref[]{to=spec.legendre-polynomials}) sit between them at $\alpha=\tfrac12$.

The first few are
$$
\begin{aligned}
T_{0}&=1, & T_{1}&=x, & T_{2}&=2x^{2}-1, & T_{3}&=4x^{3}-3x, & T_{4}&=8x^{4}-8x^{2}+1,\\
U_{0}&=1, & U_{1}&=2x, & U_{2}&=4x^{2}-1, & U_{3}&=8x^{3}-4x, & U_{4}&=16x^{4}-12x^{2}+1 .
\end{aligned}
$$
Outside $[-1,1]$ the definition is continued by $T_{n}(x)=\cosh(n\,\mathrm{arccosh}\,x)$ for $x>1$, which is the same polynomial; Stakgold and Holst call this extending the Chebyshev polynomials in the natural way, and it is what makes them useful for iteration counts, where the spectral interval is mapped to $[-1,1]$ and the convergence rate is read off at a point outside it.
:::

:::statement[What the Chebyshev polynomials satisfy]{provenance=adapted src="rhb-2006:§18.4, the special values and the ODE (18.59), pp. 597–598, and §18.4.1, eqs. (18.61)–(18.72), pp. 599–602; arfken-2013:§18.4, eqs. (18.86), (18.91)–(18.93), (18.97)–(18.98), (18.100)–(18.101), (18.114)–(18.115), pp. 899–905, and the orthogonality weights, p. 906, with the normalisations of Exercises 5.2.5–5.2.6, p. 274; kreyszig-1978:§6.4, the induction (4) and the recursion (10), pp. 347–349; hassani-2013:Table 8.2, p. 258, and Problems 8.36–8.37, p. 263"}
For $n\ge0$ and $x\in[-1,1]$, with $x=\cos\theta$ and $\theta\in[0,\pi]$:

1. **Polynomial character.** $T_{n}$ is a polynomial of degree $n$; its leading coefficient is $2^{n-1}$ for $n\ge1$ and $1$ for $n=0$. $U_{n}$ is a polynomial of degree $n$ with leading coefficient $2^{n}$. Both have the parity of $n$: $T_{n}(-x)=(-1)^{n}T_{n}(x)$ and $U_{n}(-x)=(-1)^{n}U_{n}(x)$.
2. **Recurrences.** With $T_{0}=1$, $T_{1}=x$, $U_{0}=1$, $U_{1}=2x$,
   $$
   T_{n+1}(x)=2x\,T_{n}(x)-T_{n-1}(x),
   \qquad
   U_{n+1}(x)=2x\,U_{n}(x)-U_{n-1}(x) .
   $$
   The two families obey the *same* recurrence and differ only in the starting pair.
3. **Special values.**
   $$
   T_{n}(1)=1,\quad T_{n}(-1)=(-1)^{n},\quad T_{2m}(0)=(-1)^{m},\quad T_{2m+1}(0)=0,
   $$
   $$
   U_{n}(1)=n+1,\quad U_{n}(-1)=(-1)^{n}(n+1),\quad U_{2m}(0)=(-1)^{m},\quad U_{2m+1}(0)=0 .
   $$
4. **Differential equations.** $T_{n}$ solves $(1-x^{2})y''-xy'+n^{2}y=0$, and $U_{n}$ solves $(1-x^{2})y''-3xy'+n(n+2)y=0$.
5. **Zeros and extrema** (for $n\ge1$). $T_{n}$ has $n$ simple zeros, all in $(-1,1)$,
   $$
   x_{j}=\cos\frac{(2j-1)\pi}{2n},\qquad j=1,\dots,n ,
   $$
   and $n+1$ points of extreme value in $[-1,1]$,
   $$
   y_{j}=\cos\frac{j\pi}{n},\qquad j=0,\dots,n,
   \qquad\text{with}\qquad T_{n}(y_{j})=(-1)^{j} .
   $$
   In particular $\lvert T_{n}(x)\rvert\le1$ on $[-1,1]$, with equality exactly at the $y_{j}$.
6. **Orthogonality.**
   $$
   \int_{-1}^{1}\frac{T_{m}(x)T_{n}(x)}{\sqrt{1-x^{2}}}\,\mathrm{d}x=
   \begin{cases}
   0, & m\neq n,\\
   \pi, & m=n=0,\\
   \pi/2, & m=n\ge1,
   \end{cases}
   \qquad
   \int_{-1}^{1}U_{m}(x)U_{n}(x)\sqrt{1-x^{2}}\,\mathrm{d}x=\frac{\pi}{2}\,\delta_{mn}.
   $$
   The exceptional value at $m=n=0$ in the first kind is not a blemish; it is the reason the constant term of a Chebyshev series is conventionally written $\tfrac12 a_{0}$.
7. **Generating functions.** For $|h|<1$ and $|x|\le1$,
   $$
   \frac{1-xh}{1-2xh+h^{2}}=\sum_{n=0}^{\infty}T_{n}(x)h^{n},
   \qquad
   \frac{1}{1-2xh+h^{2}}=\sum_{n=0}^{\infty}U_{n}(x)h^{n} .
   $$
   Arfken, Weber and Harris and Hassani give the first in the equivalent form $\dfrac{1-h^{2}}{1-2xh+h^{2}}=T_{0}(x)+2\sum_{n\ge1}T_{n}(x)h^{n}$, which is twice the display above minus one.
8. **Relations between the two kinds.**
   $$
   T_{n}'(x)=n\,U_{n-1}(x),
   \qquad
   T_{n}(x)=U_{n}(x)-x\,U_{n-1}(x),
   \qquad
   (1-x^{2})U_{n-1}(x)=x\,T_{n}(x)-T_{n+1}(x).
   $$
:::

:::statement[The minimax property]{provenance=adapted src="kreyszig-1978:§6.4, Theorem 6.4-3 and the surrounding reduction of the problem, pp. 346–349, and §6.3, the Haar condition 6.3-2 with the uniqueness it is stated to give on p. 337, invoked in the proof of Lemma 6.4-2, p. 345; stakgold-holst-2011:§10.6, Exercise 10.6.2 part 2, p. 808"}
Let $n\ge1$ and write $\lVert q\rVert_{\infty}=\max_{-1\le x\le1}\lvert q(x)\rvert$. Among all **monic** real polynomials $q$ of degree $n$,
$$
\min_{q\ \text{monic},\ \deg q=n}\ \lVert q\rVert_{\infty}\;=\;2^{\,1-n},
$$
and the minimum is attained at $q=2^{1-n}T_{n}$ and at no other monic polynomial of degree $n$.

Equivalently — and this is the form in which Kreyszig poses it — the best uniform approximation to $x^{n}$ on $[-1,1]$ by a polynomial of degree at most $n-1$ is
$$
y(x)=x^{n}-2^{1-n}T_{n}(x),
$$
with maximum error $2^{1-n}$; and if $p(x)=\beta_{n}x^{n}+\dots$ is any real polynomial of degree exactly $n$, its best uniform approximation by a polynomial of degree at most $n-1$ is $p(x)-\beta_{n}2^{1-n}T_{n}(x)$, with maximum error $\lvert\beta_{n}\rvert\,2^{1-n}$.

The minimality is Kreyszig's Theorem 6.4-3. Uniqueness is not part of that theorem's statement; it follows from the general result he records on p. 337, and invokes at the start of the proof of his Lemma 6.4-2 — that a finite-dimensional subspace of $C[a,b]$ supplies exactly one closest element to each function precisely when the Haar condition holds in it — together with the observation that the polynomials of degree at most $n-1$ form an $n$-dimensional subspace satisfying the Haar condition, since a non-zero one of them has at most $n-1$ zeros. Stakgold and Holst state the same minimality and attribute it to the equi-oscillation of $T_{n}$, which is exactly item 5 above.
:::

:::idea{provenance=original}
Chebyshev polynomials are cosines wearing a polynomial costume, and almost every property is a trigonometric identity with the costume put back on.

That $\cos n\theta$ *is* a polynomial in $\cos\theta$ is the one thing needing an argument, and it is the addition formula: $\cos(n+1)\theta+\cos(n-1)\theta=2\cos\theta\cos n\theta$. Read as a statement about polynomials this is the three-term recurrence, and running it from $1$ and $x$ both proves the polynomial character and doubles the leading coefficient at each step, which is where $2^{n-1}$ comes from. Orthogonality is then the orthogonality of cosines on $[0,\pi]$: the weight $(1-x^{2})^{-1/2}$ is nothing but the Jacobian $\mathrm{d}x=-\sin\theta\,\mathrm{d}\theta$ in disguise, and a Chebyshev series is literally a Fourier cosine series of $f(\cos\theta)$.

The minimax property is the one genuinely different idea. $T_{n}$ oscillates between $+1$ and $-1$, touching both $n+1$ times, and that is a lot of alternations for a polynomial of degree $n$. Suppose some monic $q$ of degree $n$ stayed strictly closer to zero than $2^{1-n}T_{n}$ does. Then the difference $2^{1-n}T_{n}-q$ would inherit the sign of $2^{1-n}T_{n}$ at each of the $n+1$ alternation points, so it would change sign $n$ times and have $n$ roots. But the leading terms cancel, so the difference has degree at most $n-1$ and cannot have $n$ roots unless it vanishes identically. The hypothesis is contradicted, and the only escape is that $q$ was $2^{1-n}T_{n}$ all along.
:::

:::proof{provenance=adapted src="kreyszig-1978:§6.4, the induction (4)–(5) and the recursion (10), pp. 347–349, and Theorem 6.4-3, p. 348; rhb-2006:§18.4.1, the derivations of (18.69)–(18.70) from the cosine addition formulas and of the normalisation (18.62) by the substitution $x=\cos\theta$, pp. 600–602; arfken-2013:§18.4, the trigonometric forms (18.104)–(18.110), p. 904"}
Throughout, $x=\cos\theta$ with $\theta\in[0,\pi]$, so that $\theta=\arccos x$ is a decreasing bijection of $[-1,1]$ onto $[0,\pi]$ and $\sin\theta=\sqrt{1-x^{2}}\ge0$.

**Item 2, the recurrences.** Adding the two cosine addition formulas $\cos(n\pm1)\theta=\cos n\theta\cos\theta\mp\sin n\theta\sin\theta$ cancels the sine terms:
$$
\cos(n+1)\theta+\cos(n-1)\theta=2\cos\theta\,\cos n\theta .
$$
Written in $x$, this is $T_{n+1}+T_{n-1}=2xT_{n}$. Adding the two sine addition formulas $\sin(n\pm1)\theta=\sin n\theta\cos\theta\pm\cos n\theta\sin\theta$ likewise gives $\sin(n+1)\theta+\sin(n-1)\theta=2\cos\theta\sin n\theta$; dividing by $\sin\theta$ (non-zero for $0<\theta<\pi$) and shifting the index by one gives $U_{n+1}+U_{n-1}=2xU_{n}$, first on $(-1,1)$ and then at $x=\pm1$ by continuity, both sides being continuous.

**Item 1, from item 2.** $T_{0}=1$ and $T_{1}=x$ are polynomials of degrees $0$ and $1$ with leading coefficients $1$ and $1=2^{0}$. If $T_{n-1}$ and $T_{n}$ are polynomials of degrees $n-1$ and $n$ with $T_{n}$ having leading coefficient $2^{n-1}$, then $T_{n+1}=2xT_{n}-T_{n-1}$ has degree $n+1$ with leading coefficient $2\cdot2^{n-1}=2^{n}$, the subtracted term being of lower degree. Induction gives the claim for all $n\ge1$. (Kreyszig proves the same statement in the equivalent trigonometric form, as the existence of an expansion $\cos n\theta=2^{n-1}\cos^{n}\theta+\sum_{j<n}\beta_{nj}\cos^{j}\theta$.) The argument for $U_{n}$ is identical, starting from $U_{0}=1$ and $U_{1}=2x$ and giving leading coefficient $2^{n}$.

For the parity, note that $x\mapsto-x$ corresponds to $\theta\mapsto\pi-\theta$, under which $\cos n\theta\mapsto\cos(n\pi-n\theta)=(-1)^{n}\cos n\theta$; and $\sin((n+1)(\pi-\theta))/\sin(\pi-\theta)=(-1)^{n}\sin((n+1)\theta)/\sin\theta$ by the same computation. Alternatively the recurrence shows by induction that $T_{n}$ contains only powers of the parity of $n$.

**Item 3.** Put $\theta=0$, $\theta=\pi$ and $\theta=\pi/2$ in $T_{n}=\cos n\theta$: these are $x=1$, $x=-1$, $x=0$, giving $1$, $\cos n\pi=(-1)^{n}$ and $\cos(n\pi/2)$, which is $(-1)^{m}$ for $n=2m$ and $0$ for $n$ odd. For $U_{n}=\sin((n+1)\theta)/\sin\theta$ the values at $\theta=0,\pi$ need a limit: as $\theta\to0$, $\sin((n+1)\theta)/\sin\theta\to n+1$ by L'Hopital's rule or by comparing the leading terms of the two sines, and as $\theta\to\pi$ one gets $(-1)^{n}(n+1)$ the same way. At $\theta=\pi/2$, $\sin((n+1)\pi/2)/1$ is $(-1)^{m}$ for $n=2m$ and $0$ for $n$ odd.

**Item 4.** Differentiating $T_{n}=\cos n\theta$ with $\mathrm{d}/\mathrm{d}x=(-1/\sin\theta)\,\mathrm{d}/\mathrm{d}\theta$ reverses the substitution made in the definition: $y=\cos n\theta$ satisfies $y_{\theta\theta}+n^{2}y=0$, and the chain rule converts that back to $(1-x^{2})y''-xy'+n^{2}y=0$. For $U_{n}$, note that $V_{n+1}=\sqrt{1-x^{2}}\,U_{n}$ solves Chebyshev's equation with $n$ replaced by $n+1$, since $V_{n+1}=\sin((n+1)\theta)$ is the other solution of $y_{\theta\theta}+(n+1)^{2}y=0$. Substituting $V_{n+1}=(1-x^{2})^{1/2}U_{n}$ and its derivatives
$$
V_{n+1}'=(1-x^{2})^{1/2}U_{n}'-x(1-x^{2})^{-1/2}U_{n},
$$
$$
V_{n+1}''=(1-x^{2})^{1/2}U_{n}''-2x(1-x^{2})^{-1/2}U_{n}'-(1-x^{2})^{-1/2}U_{n}-x^{2}(1-x^{2})^{-3/2}U_{n}
$$
into $(1-x^{2})V_{n+1}''-xV_{n+1}'+(n+1)^{2}V_{n+1}=0$ and dividing by $(1-x^{2})^{1/2}$ collects to
$$
(1-x^{2})U_{n}''-3xU_{n}'-U_{n}+(n+1)^{2}U_{n}=0 ,
$$
and $(n+1)^{2}-1=n(n+2)$.

**Item 5.** $T_{n}(x)=0$ means $\cos n\theta=0$, that is $n\theta=(2j-1)\pi/2$ for an integer $j$; the values of $\theta$ in $(0,\pi)$ are $\theta_{j}=(2j-1)\pi/(2n)$ for $j=1,\dots,n$, and these give $n$ distinct values $x_{j}=\cos\theta_{j}$ in $(-1,1)$ because $\cos$ is injective on $[0,\pi]$. A polynomial of degree $n$ has at most $n$ roots, so these are all of them and each is simple. Similarly $\lvert T_{n}\rvert=\lvert\cos n\theta\rvert$ attains the value $1$ exactly when $n\theta$ is a multiple of $\pi$, that is at $\theta=j\pi/n$ for $j=0,\dots,n$, where $T_{n}=\cos j\pi=(-1)^{j}$; and $\lvert\cos n\theta\rvert\le1$ everywhere.

**Item 6.** Substitute $x=\cos\theta$, so $\mathrm{d}x=-\sin\theta\,\mathrm{d}\theta$ and $\sqrt{1-x^{2}}=\sin\theta$, which cancels:
$$
\int_{-1}^{1}\frac{T_{m}T_{n}}{\sqrt{1-x^{2}}}\,\mathrm{d}x=\int_{0}^{\pi}\cos m\theta\,\cos n\theta\,\mathrm{d}\theta .
$$
This is the standard cosine orthogonality on $[0,\pi]$ (:ref[]{to=fourier.fourier-series}), equal to $0$ for $m\neq n$, to $\pi/2$ for $m=n\ge1$, and to $\pi$ for $m=n=0$ where the integrand is $1$. For the second kind, $U_{m}U_{n}\sqrt{1-x^{2}}\,\mathrm{d}x=-\sin((m+1)\theta)\sin((n+1)\theta)\,\mathrm{d}\theta$ after the same substitution, and $\int_{0}^{\pi}\sin((m+1)\theta)\sin((n+1)\theta)\,\mathrm{d}\theta=\tfrac{\pi}{2}\delta_{mn}$, with no exceptional case because $m+1\ge1$ always.

**Item 7.** Sum the geometric-like series directly. For $|h|<1$ and $x=\cos\theta$, $\sum_{n\ge0}\cos(n\theta)h^{n}=\operatorname{Re}\sum_{n\ge0}(h\mathrm{e}^{\mathrm{i}\theta})^{n}=\operatorname{Re}\dfrac{1}{1-h\mathrm{e}^{\mathrm{i}\theta}}$, and multiplying numerator and denominator by the conjugate $1-h\mathrm{e}^{-\mathrm{i}\theta}$ gives
$$
\frac{1-h\cos\theta}{1-2h\cos\theta+h^{2}}=\frac{1-xh}{1-2xh+h^{2}} .
$$
Taking the imaginary part instead gives $\sum_{n\ge1}\sin(n\theta)h^{n}=h\sin\theta/(1-2xh+h^{2})$; dividing by $\sin\theta$ and shifting the index gives the generating function for $U_{n}$.

**Item 8.** $T_{n}'(x)=(-1/\sin\theta)\,\mathrm{d}(\cos n\theta)/\mathrm{d}\theta=n\sin n\theta/\sin\theta=nU_{n-1}(x)$. The second relation is the sine addition formula $\sin((n+1)\theta)-\cos\theta\sin(n\theta)=\cos(n\theta)\sin\theta$ divided by $\sin\theta$. The third comes from the cosine addition formula in the form $\cos\theta\cos(n\theta)-\cos\bigl((n+1)\theta\bigr)=\sin\theta\,\sin(n\theta)$: the left side is $xT_{n}-T_{n+1}$, and the right side is $\sin\theta\cdot\sin\theta\,U_{n-1}=(1-x^{2})U_{n-1}$. $\square$
:::

:::proof[of the minimax property]{provenance=adapted src="kreyszig-1978:§6.4, Theorem 6.4-3 and Lemma 6.4-2 with the alternating-set idea, pp. 345–348, and §6.3, the Haar condition and the uniqueness it gives, p. 337"}
Write $\widetilde{T}_{n}=2^{1-n}T_{n}$. By item 1 of the first statement, $\widetilde{T}_{n}$ is monic of degree $n$, and by item 5 it satisfies $\lVert\widetilde{T}_{n}\rVert_{\infty}=2^{1-n}$, attained with alternating signs at the $n+1$ points $y_{j}=\cos(j\pi/n)$:
$$
\widetilde{T}_{n}(y_{j})=(-1)^{j}2^{1-n},\qquad j=0,1,\dots,n .
$$
Note $1=y_{0}>y_{1}>\dots>y_{n}=-1$, since $\cos$ is decreasing on $[0,\pi]$.

**The minimum is not smaller.** Let $q$ be monic of degree $n$ and suppose, for contradiction, that $\lVert q\rVert_{\infty}<2^{1-n}$. Put
$$
d=\widetilde{T}_{n}-q .
$$
Both are monic of degree $n$, so the $x^{n}$ terms cancel and $\deg d\le n-1$. At each $y_{j}$,
$$
(-1)^{j}d(y_{j})=2^{1-n}-(-1)^{j}q(y_{j})\;\ge\;2^{1-n}-\lVert q\rVert_{\infty}\;>\;0 ,
$$
so $d(y_{j})$ is non-zero and has the sign of $(-1)^{j}$. Since $d$ is continuous and changes sign on each of the $n$ intervals $(y_{j+1},y_{j})$, $j=0,\dots,n-1$, the intermediate value theorem gives a root of $d$ strictly inside each, hence $n$ distinct roots. A polynomial of degree at most $n-1$ with $n$ distinct roots is identically zero, so $d\equiv0$ and $q=\widetilde{T}_{n}$; but then $\lVert q\rVert_{\infty}=2^{1-n}$, contradicting the assumed strict inequality. Therefore $\lVert q\rVert_{\infty}\ge2^{1-n}$ for every monic $q$ of degree $n$, and $\widetilde{T}_{n}$ attains the bound.

**Uniqueness.** Minimising $\lVert q\rVert_{\infty}$ over monic $q$ of degree $n$ is the same problem as minimising $\lVert x^{n}-y\rVert_{\infty}$ over $y$ in the subspace $Y$ of polynomials of degree at most $n-1$, by the correspondence $q=x^{n}-y$. Now $\dim Y=n$, and a non-zero element of $Y$ has at most $n-1$ zeros in $[-1,1]$, so $Y$ satisfies the Haar condition (Kreyszig's Definition 6.3-2). Kreyszig's theory then gives a *unique* best uniform approximation to $x^{n}$ out of $Y$ — this is the fact he states on p. 337 and uses at the start of the proof of his Lemma 6.4-2 — and hence a unique minimising monic $q$, which by the previous paragraph is $\widetilde{T}_{n}$.

**The two restatements.** The first is just the correspondence above read backwards: the best approximation is $y=x^{n}-\widetilde{T}_{n}$, whose degree really is at most $n-1$ because the leading terms cancel, and the error is $\lVert\widetilde{T}_{n}\rVert_{\infty}=2^{1-n}$. For the second, write $p=\beta_{n}x^{n}+(\text{lower})$ with $\beta_{n}\ne0$. Then $p-y$ ranges, as $y$ runs over $Y$, over all polynomials of degree exactly $n$ with leading coefficient $\beta_{n}$, that is over $\beta_{n}q$ with $q$ monic; and $\lVert\beta_{n}q\rVert_{\infty}=\lvert\beta_{n}\rvert\,\lVert q\rVert_{\infty}$ is minimised exactly when $\lVert q\rVert_{\infty}$ is. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
**The interval must be $[-1,1]$, and rescaling costs a factor.** Everything above is tied to $[-1,1]$ through $x=\cos\theta$. On a general interval $[a,b]$, substitute
$$
x=\frac{2t-a-b}{b-a},
$$
which maps $[a,b]$ onto $[-1,1]$. The monic polynomial of degree $n$ in $t$ of smallest sup-norm on $[a,b]$ is then $\bigl(\tfrac{b-a}{2}\bigr)^{n}\widetilde{T}_{n}(x)$, and its sup-norm is
$$
2\left(\frac{b-a}{4}\right)^{n} .
$$
The factor shrinks geometrically as the interval shrinks, which is the reason an interpolation error estimate on a short interval is so much better than on a long one, and the reason adaptive subdivision works.

**Monic is essential; without it the problem is trivial.** Drop the constraint on the leading coefficient and the infimum of $\lVert q\rVert_{\infty}$ over polynomials of degree $n$ is $0$, attained by $q\equiv0$. The minimax theorem is a statement about *normalising* the top coefficient, and every application reads it that way: in approximation one normalises the leading coefficient of the error polynomial, in iterative methods one normalises the residual polynomial by $P(0)=1$.

**The norm must be the maximum norm.** In the $L^{2}$ norm with weight $(1-x^{2})^{-1/2}$ the minimising monic polynomial is also $\widetilde{T}_{n}$, because orthogonal polynomials always minimise the weighted $L^{2}$ norm among monic polynomials of their degree (:ref[]{to=spec.orthogonal-polynomials-general}); but in the unweighted $L^{2}$ norm on $[-1,1]$ it is the monic Legendre polynomial instead (:ref[]{to=spec.legendre-polynomials}), and in the $L^{1}$ norm it is $2^{-n}U_{n}$. Different norms, different extremal polynomials. What is special about $T_{n}$ is the max-norm statement, and that is why it governs *worst-case* error rather than mean-square error.

**The equi-oscillation is doing the work, not the orthogonality.** The proof of the minimax property never used item 6. It used only that $\widetilde{T}_{n}$ is monic and that it attains $\pm\lVert\widetilde{T}_{n}\rVert_{\infty}$ alternately at $n+1$ points. This is why Kreyszig develops the alternating set as the central concept, and why Stakgold and Holst describe the result as being due to an equi-oscillation property. A family with the same alternation count would serve equally well; it happens that the cosines supply it.

**Counting the alternations exactly.** The argument would fail with only $n$ alternation points, because then $d$ would be forced to have only $n-1$ roots, which a polynomial of degree $n-1$ can have. The margin is exactly one: $T_{n}$ has $n+1$ extreme points on a *closed* interval, including both endpoints, and dropping either endpoint from $[-1,1]$ destroys the proof. This is also why the minimax polynomial for a general function equi-oscillates at $n+2$ points rather than $n+1$ when the approximating space has dimension $n+1$.
:::

:::remark[Conventions: which family is "the second kind"]{provenance=adapted src="kreyszig-1978:§6.4, footnote 1 to Theorem 6.4-3, p. 348; rhb-2006:§18.4, eqs. (18.55) and (18.58), pp. 596–597; arfken-2013:§18.4, eqs. (18.106)–(18.107), p. 904, and footnote 1 on the spelling, p. 871; hassani-2013:Problem 8.37, p. 263"}
Our sources do not agree, and the disagreement is a real one rather than a matter of scale.

- **Riley, Hobson and Bence, Arfken, Weber and Harris, and Hassani** all set
  $$
  U_{n}(\cos\theta)=\frac{\sin\bigl((n+1)\theta\bigr)}{\sin\theta},
  $$
  a polynomial of degree $n$ with $U_{n}(1)=n+1$. Riley, Hobson and Bence and Arfken, Weber and Harris give the non-polynomial $\sin(n\theta)$ the separate name $V_{n}$.
- **Kreyszig**, in footnote 1 on p. 348, attaches the label *second kind* to $\sin n\theta$ instead, writing it $U_{n}(t)$ as well. That is the function the other three call $V_{n}$, and it is *not* a polynomial.

**This unit follows the first group**, so $U_{n}$ here always means $\sin((n+1)\theta)/\sin\theta$, the degree-$n$ polynomial tabulated in item 1, orthogonal for the weight $(1-x^{2})^{+1/2}$. Nothing in this unit uses Kreyszig's $U_{n}$; his contribution here is the minimax theorem, which concerns $T_{n}$ only and is unaffected. The quick test on a formula from an unfamiliar source: evaluate at $x=1$. Our $U_{n}(1)=n+1$; Kreyszig's vanishes identically there, since $\sin n\theta\to0$ as $\theta\to0$.

Two smaller conventions are worth recording. First, the spelling: Arfken, Weber and Harris note in a footnote that they take "Chebyshev" from the tables of Abramowitz and Stegun, and that forms such as "Tschebyscheff" are also found; the symbol $T$ comes from one of those transliterations, as Kreyszig remarks. Second, the normalisation of the orthogonality integral: all our sources use the $T_{n}$ with $T_{n}(1)=1$ and therefore all get $\pi$ at $n=0$ and $\pi/2$ for $n\ge1$, but an orthonormal convention rescaling $T_{n}$ by $\sqrt{2/\pi}$ is common in the numerical-analysis literature and changes every coefficient formula below by that factor.
:::

:::method[Chebyshev approximation and economisation]{provenance=adapted src="rhb-2006:§18.4.1, the expansion $f=\tfrac12a_0+\sum a_nT_n$ with its coefficient formula, p. 600, and the use of the recurrences for practical computation, p. 602; kreyszig-1978:§6.4, eqs. (8)–(9), the subtraction of a scaled $T_n$ from a polynomial, p. 349; arfken-2013:§18.4, the discussion of the truncation error and Example 18.4.1, pp. 905–906"}
**To expand a function in Chebyshev polynomials.** For $f$ continuous on $[-1,1]$:

1. Write the Chebyshev series $f(x)=\tfrac12a_{0}+\sum_{n\ge1}a_{n}T_{n}(x)$ with
   $$
   a_{n}=\frac{2}{\pi}\int_{-1}^{1}\frac{f(x)T_{n}(x)}{\sqrt{1-x^{2}}}\,\mathrm{d}x
   \;=\;\frac{2}{\pi}\int_{0}^{\pi}f(\cos\theta)\cos(n\theta)\,\mathrm{d}\theta .
   $$
   The halved zeroth term is exactly what the exceptional normalisation in item 6 forces. The second form shows what a Chebyshev series *is*: the Fourier cosine series of $f(\cos\theta)$ (:ref[]{to=fourier.fourier-series}). Everything known about the convergence of Fourier series transfers, with one bonus — $f(\cos\theta)$ is automatically even and $2\pi$-periodic, so there is no jump at the ends of the interval and no Gibbs phenomenon there, however badly $f$ behaves at $\pm1$ in the $x$ variable.
2. In practice evaluate the $a_{n}$ by the discrete cosine transform: sample $f$ at the $N+1$ points $y_{j}=\cos(j\pi/N)$ and transform. This costs $O(N\log N)$ with a fast algorithm (:ref[]{to=fourier.dft-fft}) and returns the coefficients of the polynomial *interpolating* $f$ at those points, which for smooth $f$ differs from the truncated series only in the tail.
3. Truncate after $T_{N}$. If the coefficients are decaying fast, the error is dominated by the first omitted term, so it is close to $a_{N+1}T_{N+1}(x)$: of size $\lvert a_{N+1}\rvert$, nearly equal in magnitude at $N+2$ places and alternating in sign. Arfken, Weber and Harris make exactly this point — the error maxima come out comparable, which approximately minimises the largest one, whereas a Taylor polynomial is excellent at one point and poor at the ends.
4. Evaluate the truncated series by the recurrence of item 2, never by expanding into powers of $x$: the expansion into monomials involves large cancelling coefficients and loses precision.

**To economise a polynomial.** Given $p$ of degree $n$ with leading coefficient $\beta_{n}$, and a tolerance $\varepsilon$:

1. Compute $\lvert\beta_{n}\rvert\,2^{1-n}$. If it exceeds $\varepsilon$, stop: the degree cannot be reduced within tolerance.
2. Otherwise replace $p$ by $p-\beta_{n}2^{1-n}T_{n}$, which has degree at most $n-1$ and differs from $p$ by at most $\lvert\beta_{n}\rvert2^{1-n}$ anywhere on $[-1,1]$. This is Kreyszig's formula (9).
3. Repeat on the new polynomial, accumulating the error bounds, until step 1 stops you.

This is the classical way to shorten a truncated Taylor series, and it is strictly better than simply dropping the top terms: dropping $\beta_{n}x^{n}$ costs $\lvert\beta_{n}\rvert$, while economising it costs only $\lvert\beta_{n}\rvert2^{1-n}$ — a saving of a factor $2^{n-1}$.
:::

:::example[A cubic for $\mathrm{e}^{x}$ on $[-1,1]$]{provenance=original}
Approximate $f(x)=\mathrm{e}^{x}$ on $[-1,1]$ by a cubic, three ways, and compare the worst-case errors.

**Step 1: the Chebyshev coefficients.** By the second form of the coefficient formula,
$$
a_{k}=\frac{2}{\pi}\int_{0}^{\pi}\mathrm{e}^{\cos\theta}\cos(k\theta)\,\mathrm{d}\theta=2\,I_{k}(1),
$$
where $I_{k}$ is the modified Bessel function of the first kind, whose standard integral representation is $I_{k}(z)=\frac1\pi\int_{0}^{\pi}\mathrm{e}^{z\cos\theta}\cos(k\theta)\,\mathrm{d}\theta$ (:ref[]{to=spec.modified-bessel}). So the coefficients are known in closed form:
$$
\tfrac12a_{0}=I_{0}(1)=1.2660659,\quad
a_{1}=2I_{1}(1)=1.1303182,
$$
$$
a_{2}=2I_{2}(1)=0.2714953,\quad
a_{3}=2I_{3}(1)=0.0443368,\quad
a_{4}=2I_{4}(1)=0.0054742 .
$$
(The quadrature and the Bessel values were computed independently and agree to 25 digits.) Note how fast they fall: each is roughly a fifth to a tenth of the last.

**Step 2: the truncated series.** The cubic truncation is
$$
p_{3}(x)=\tfrac12a_{0}+a_{1}T_{1}+a_{2}T_{2}+a_{3}T_{3},
$$
and substituting $T_{2}=2x^{2}-1$, $T_{3}=4x^{3}-3x$ and collecting powers,
$$
p_{3}(x)=0.9945705+0.9973077\,x+0.5429907\,x^{2}+0.1773474\,x^{3} .
$$
Its largest error on $[-1,1]$, found by sampling on a fine grid, is
$$
\max_{[-1,1]}\lvert \mathrm{e}^{x}-p_{3}(x)\rvert=0.0060656 ,
$$
attained at $x=1$; at $x=-1$ the error is $0.0049733$, and the interior extrema are of comparable size with alternating signs. The first omitted coefficient predicted this: $\lvert a_{4}\rvert=0.0054742$, within ten per cent of the realised maximum, exactly as step 3 of the method says.

**Step 3: the alternatives.** The cubic Taylor polynomial $1+x+\tfrac{x^{2}}{2}+\tfrac{x^{3}}{6}$ has
$$
\max_{[-1,1]}\bigl\lvert \mathrm{e}^{x}-\bigl(1+x+\tfrac{x^{2}}{2}+\tfrac{x^{3}}{6}\bigr)\bigr\rvert=\mathrm{e}-\tfrac{8}{3}=0.0516152 ,
$$
attained at $x=1$ and tiny near $x=0$ — superb at one point and eight and a half times worse than the Chebyshev truncation where it matters. The true minimax cubic, computed by the exchange algorithm, has error
$$
E_{3}=0.0055284 .
$$

**Step 4: the comparison.**
$$
\frac{0.0060656}{0.0055284}=1.097,
\qquad
\frac{0.0516152}{0.0055284}=9.336 .
$$
The Chebyshev truncation is within $10\%$ of the unimprovable cubic, and it took one integral per coefficient; the minimax cubic took an iteration. That ratio — a few per cent, not a few per cent of a factor — is why truncated Chebyshev series are used in place of true minimax approximations almost everywhere in practice.

**Step 5: a pure economisation, for contrast.** Take $p(x)=x^{4}$, with $n=4$ and $\beta_{4}=1$. Step 1 of the economisation recipe gives $\beta_{4}2^{1-4}=\tfrac18$, and step 2 replaces $x^{4}$ by
$$
x^{4}-\tfrac18T_{4}(x)=x^{4}-\tfrac18\bigl(8x^{4}-8x^{2}+1\bigr)=x^{2}-\tfrac18 .
$$
So the best uniform cubic (indeed quadratic) approximation to $x^{4}$ on $[-1,1]$ is $x^{2}-\tfrac18$, with error exactly $\tfrac18=0.125$ everywhere the error is extreme — at the five points $\pm1,\pm1/\sqrt2,0$, with alternating signs, as item 5 requires. Dropping the $x^{4}$ term instead would have cost $1$: economisation is eight times better here, the predicted factor $2^{n-1}=2^{3}$.
:::

:::application{provenance=original}
**Spectral methods on a bounded interval.** A Chebyshev spectral method represents the unknown by its values at the extrema $y_{j}=\cos(j\pi/N)$ and differentiates by transforming to coefficients, differentiating the series with $T_{n}'=nU_{n-1}$, and transforming back (:ref[]{to=num.spectral-methods}). For a smooth solution the error falls faster than any power of $N$, the same spectral accuracy a Fourier method gives on a periodic domain — and the reason is the one noted in the method: a Chebyshev series is a Fourier cosine series in disguise, and the awkward boundaries of the interval have been mapped to the smooth turning points of the cosine. The clustering of the $y_{j}$ near $\pm1$, with spacing $O(N^{-2})$ there against $O(N^{-1})$ in the middle, is not a defect but the mechanism: it resolves boundary layers and it is what defeats the Runge phenomenon that wrecks equispaced polynomial interpolation (:ref[]{to=num.interpolation}).

**Clenshaw-Curtis quadrature.** Integrating the interpolant through the same points $y_{j}$ gives a quadrature rule whose weights are computable by one cosine transform and whose accuracy, for smooth integrands, is in practice comparable to Gauss-Legendre of the same order despite being exact only to degree $N$ rather than $2N-1$ (:ref[]{to=num.quadrature}). Its practical advantages are that the nodes are nested — doubling $N$ reuses every old evaluation — and that the weights come from a transform rather than from a root-finding problem.

**Chebyshev acceleration of iterative solvers.** This is the minimax theorem doing real work. In a polynomial iterative method for $Ax=b$, the error after $k$ steps is $e^{k}=P_{k}(A)e^{0}$ for some polynomial $P_{k}$ with $P_{k}(0)=1$, so the worst-case error reduction is governed by $\max_{\lambda\in\sigma(A)}\lvert P_{k}(\lambda)\rvert$. Stakgold and Holst set this up as a mini-max problem over the spectral interval $[\lambda_{\min},\lambda_{\max}]$ and identify the optimum as the Chebyshev polynomial shifted and scaled onto that interval and divided by its value at the origin,
$$
P_{k}(\lambda)=\frac{T_{k}\!\left(\dfrac{\lambda_{\max}+\lambda_{\min}-2\lambda}{\lambda_{\max}-\lambda_{\min}}\right)}{T_{k}\!\left(\dfrac{\lambda_{\max}+\lambda_{\min}}{\lambda_{\max}-\lambda_{\min}}\right)} .
$$
The numerator is bounded by $1$ on the spectrum by item 5; the denominator is $T_{k}$ evaluated *outside* $[-1,1]$, where the $\cosh$ continuation makes it grow geometrically. The resulting bound is
$$
\lVert e^{k}\rVert_{A}\le2\left(\frac{\sqrt{\kappa}-1}{\sqrt{\kappa}+1}\right)^{k}\lVert e^{0}\rVert_{A},
$$
with $\kappa$ the condition number — the square root is the whole point, and it is the same bound that governs the conjugate gradient method, which achieves it without needing to know $\lambda_{\min}$ and $\lambda_{\max}$ in advance (:ref[]{to=num.linear-systems-numerics}). Stakgold and Holst also record the degenerate case $k=1$, where $T_{1}(x)=x$ reproduces the optimal relaxation parameter $\alpha_{\mathrm{opt}}=2/(\lambda_{\min}+\lambda_{\max})$ of simple Richardson iteration (:ref[]{to=num.relaxation-methods}).

**Equiripple filters.** A Chebyshev type I analogue filter has magnitude response $\lvert H(\mathrm{i}\omega)\rvert^{2}=1/\bigl(1+\epsilon^{2}T_{n}^{2}(\omega/\omega_{0})\bigr)$. Inside the passband $T_{n}$ oscillates between $\pm1$, so the response ripples between $1$ and $1/(1+\epsilon^{2})$ — equal ripple, which is the minimax property transcribed into engineering — and outside, where $T_{n}$ grows like $\cosh$, the response falls off faster than that of any other filter of the same order with the same passband tolerance. Trading ripple for roll-off is trading $\epsilon$ against $n$, and the Chebyshev polynomial is what makes the trade optimal.

**Economised series in libraries and firmware.** Before a special function is evaluated in a numerical library, its defining series is folded onto a short interval and economised exactly as in step 5 of the example. A degree-15 Taylor polynomial for $\sin x$ on a reduced range typically economises to degree 7 or 9 at full double precision, which is a factor of two in the cost of every call. The saving per removed term is the factor $2^{n-1}$ computed above, and it is why the coefficients printed in function-approximation handbooks are never the Taylor coefficients.
:::
