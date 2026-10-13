---
id: spec.legendre-second-kind
title: Legendre functions of the second kind
kind: definition
level: advanced
summary: "The second solution Q_n of Legendre's equation for integer degree: its series definition and normalisation, the closed form P_n(x) artanh(x) minus a polynomial, the logarithmic blow-up at x = ±1 with the harmonic number H_n as its constant, and the Wronskian (1-x^2)^{-1} with P_n."
prereqs: [spec.legendre-polynomials, ode.ordinary-point-series, ode.reduction-of-order, ode.sturm-liouville-theory, ode.linear-ode-theory]
provenance: adapted
sources:
  - work: rhb-2006
    loc: "§16.4.1 (the Wronskian method), eq. (16.25), p. 544; §18.1, the power-series solution of Legendre's equation and the two series (18.3)–(18.4), pp. 577–578; §18.1.1, the definition of the Legendre functions of the second kind with the normalising constants (18.5)–(18.6), the general solution (18.7) and the convergence of Q_l only for |x| < 1, pp. 579–580; the closed forms Q_0 (18.8) and Q_1 obtained by the Wronskian method, p. 580; the singularity of Q_l at x = ±1 and the discarding of Q_l in full-sphere problems, p. 581; the recurrence relations (18.23)–(18.27), p. 586; §18.2.1, the associated functions Q_l^m (18.31)–(18.32), p. 588"
    pages: "544, 577-581, 586, 588"
    role: the definition of Q_n as the non-terminating power series with the normalising constants alpha_n and beta_n; the statement that those constants make Q_n obey the same recurrences as P_n; the reduction-of-order computation of Q_0 and Q_1; the general solution c_1 P_n + c_2 Q_n for integer degree; the role of Q_n as the solution discarded by regularity at the poles; the associated functions of the second kind
  - work: arfken-2013
    loc: "§7.6, Exercise 7.6.9 (the Wronskian of P_n and Q_n has the form A_n/(1-x^2)) and Exercise 7.6.11 (for a self-adjoint equation p W is constant and the second solution is y_1 times the integral of dt/(p y_1^2)), p. 371; §15.1, the remark that a family satisfying the Legendre recurrences satisfies the Legendre ODE, p. 720; §15.6, the reduction-of-order definition (15.154) and Q_0 (15.155), p. 766, Q_1 (15.156), Q_2 (15.157), the recurrences (15.158)–(15.159), the expansion (15.160), the convention ln[(x+1)/(x-1)] for |x| > 1 and the branch cut along [-1, 1], p. 767, Figs. 15.13–15.14, p. 768, Properties 1–4 including the parity Q_l(-x) = (-1)^{l+1} Q_l(x), Q_l(1) infinite, Q_{2s+1}(0) (15.161) and Q_l tending to 0 at infinity, p. 769, the series about the origin (15.164)–(15.166), p. 770, and Exercises 15.6.3 (the inverse-power series at infinity) and 15.6.4 (n[P_n Q_{n-1} - P_{n-1} Q_n] = 1), p. 771"
    pages: "371, 720, 766-771"
    role: the closed forms of Q_0, Q_1, Q_2 and the general pattern (15.160); the recurrences taken as the route to higher degree; the parity, the values at the origin, the infinite value at x = 1 and the vanishing at infinity; the convention and branch cut outside [-1, 1]; the form A_n/(1-x^2) of the Wronskian and the constancy of p W in self-adjoint form; the contiguous relation n[P_n Q_{n-1} - P_{n-1} Q_n] = 1
  - work: hassani-2013
    loc: "§15.4, the Jacobi functions of the second kind Q^{(alpha,beta)}_lambda (15.33) and their alpha = beta = 0 specialisation, the Legendre functions of the first kind (15.35) and the displayed formula for Q_lambda immediately after it, p. 478"
    pages: "478"
    role: the hypergeometric representation of Q_lambda for complex degree and complex argument off the cut, which exhibits the (z-1)^{-lambda-1} behaviour and extends the definition beyond integer degree
---

:::definition[The second solution for integer degree]{provenance=adapted src="rhb-2006:§18.1 and §18.1.1, eqs. (18.2)–(18.7), pp. 578–579; arfken-2013:§15.6, eqs. (15.153)–(15.156), pp. 766–767"}
Throughout, $n$ is a non-negative integer, $P_n$ is the Legendre polynomial of :ref[]{to=spec.legendre-polynomials}, and Legendre's equation is
$$
(1-x^{2})y''-2xy'+\ell(\ell+1)y=0,
\qquad\text{equivalently}\qquad
\bigl[(1-x^{2})y'\bigr]'+\ell(\ell+1)y=0 .
\tag{L}
$$
Write
$$
L(x):=\tfrac12\ln\frac{1+x}{1-x}=\operatorname{artanh}x
\quad(-1<x<1),
\qquad
H_{n}:=\sum_{m=1}^{n}\frac1m \quad (H_{0}=0),
$$
so that $L'(x)=(1-x^{2})^{-1}$.

In (L) the origin is an ordinary point whose nearest singular neighbours are $x=\pm1$, so there are two solutions in powers of $x$, each with radius of convergence $1$. Substituting $y=\sum_{k\ge0}a_{k}x^{k}$ gives the two-step recurrence
$$
a_{k+2}=\frac{k(k+1)-\ell(\ell+1)}{(k+1)(k+2)}\,a_{k},
$$
and the choices $(a_{0},a_{1})=(1,0)$ and $(0,1)$ produce an even solution $y_{\mathrm{e}}$ and an odd solution $y_{\mathrm{o}}$ respectively. When $\ell=n$ the numerator vanishes at $k=n$, so exactly one of the two series terminates — $y_{\mathrm{e}}$ if $n$ is even, $y_{\mathrm{o}}$ if $n$ is odd — and that one is the Legendre polynomial up to a factor. **The other series does not terminate, and converges only on $(-1,1)$.**

Riley, Hobson and Bence take the non-terminating series as the second solution and normalise it: the **Legendre function of the second kind** of degree $n$ is
$$
Q_{n}:=\alpha_{n}\,y_{\mathrm{o}}\ \ (n\text{ even}),
\qquad
Q_{n}:=\beta_{n}\,y_{\mathrm{e}}\ \ (n\text{ odd}),
$$
$$
\alpha_{n}=\frac{(-1)^{n/2}\,2^{n}\bigl[(n/2)!\bigr]^{2}}{n!},
\qquad
\beta_{n}=\frac{(-1)^{(n+1)/2}\,2^{n-1}\bigl\{[(n-1)/2]!\bigr\}^{2}}{n!} .
$$
Their stated reason for these particular constants is that the resulting $Q_{n}$ then satisfy, verbatim, the recurrences already established for $P_{n}$. Part 6 of the statement below identifies $\alpha_{n}$ and $\beta_{n}$ in closed form and the proof shows what forces them.

Arfken, Weber and Harris define the same functions by reduction of order (:ref[]{to=ode.reduction-of-order}) instead. In the self-adjoint form of (L) the leading coefficient is $p=1-x^{2}$, so a second solution is
$$
Q_{n}(x)=P_{n}(x)\int^{x}\frac{\mathrm{d}t}{(1-t^{2})\,P_{n}(t)^{2}} ,
\tag{R}
$$
and they remark that (R) fixes both the scale and the functional form of $Q_{n}$. By construction $Q_{n}$ is of the opposite parity to $P_{n}$, since it is the series that $P_{n}$ is not.

**Outside the interval.** Formulas for $Q_{n}$ on $(-1,1)$ contain $\ln\frac{1+x}{1-x}$. For real $x>1$ this is complex, and Arfken, Weber and Harris replace it by $\ln\frac{x+1}{x-1}$, discarding the resulting constant multiple $\pm\mathrm{i}\pi P_{n}$ of the first solution. In the complex plane the logarithm forces a branch cut, traditionally $[-1,1]$ (:ref[]{to=complex.branch-points-cuts}); the functions on $(-1,1)$ are the average of the two sides of that cut. Hassani arrives at $Q_{\lambda}$ for arbitrary complex degree by specialising the second-kind Jacobi functions $Q^{(\alpha,\beta)}_{\lambda}$ to $\alpha=\beta=0$,
$$
Q_{\lambda}(z)=\frac{2^{\lambda}\,\Gamma^{2}(\lambda+1)}{\Gamma(2\lambda+2)\,(z-1)^{\lambda+1}}\;
F\Bigl(\lambda+1,\lambda+1;2\lambda+2;\frac{2}{1-z}\Bigr),
$$
with $F$ the hypergeometric function of :ref[]{to=spec.hypergeometric}; at $\lambda=n$ this agrees with the $x>1$ convention above.
:::

:::statement[Closed form, singularities and Wronskian]{provenance=adapted src="rhb-2006:§18.1.1, eqs. (18.5)–(18.8), pp. 579–580, and §18.1.2, eqs. (18.23)–(18.27), p. 586; arfken-2013:§15.6, eqs. (15.155)–(15.161), pp. 766–769, and §7.6, Exercise 7.6.9, p. 371"}
Let $n\ge0$ be an integer and $-1<x<1$. Then:

1. **Closed form.** There is a polynomial $R_{n}$ of degree exactly $n-1$ (with $R_{0}\equiv0$) such that
   $$
   Q_{n}(x)=P_{n}(x)\,L(x)-R_{n}(x),
   \qquad
   R_{n}(x)=\sum_{m=1}^{n}\frac1m\,P_{m-1}(x)\,P_{n-m}(x) .
   $$
   In particular
   $$
   Q_{0}=L,\qquad
   Q_{1}=xL-1,\qquad
   Q_{2}=P_{2}L-\tfrac32x,\qquad
   Q_{3}=P_{3}L-\tfrac52x^{2}+\tfrac23 .
   $$
   Arfken, Weber and Harris write the polynomial part as
   $R_{n}=\frac{2n-1}{1\cdot n}P_{n-1}+\frac{2n-5}{3(n-1)}P_{n-3}+\cdots$, which is the same polynomial resolved in the Legendre basis.
2. **Logarithmic singularity.** $R_{n}(1)=H_{n}$, and as $x\to1^{-}$
   $$
   Q_{n}(x)=\tfrac12\ln\frac{2}{1-x}-H_{n}+O\bigl((1-x)\ln(1-x)\bigr) .
   $$
   By the parity in part 4 the behaviour at the other end is
   $Q_{n}(x)=(-1)^{n+1}\bigl[\tfrac12\ln\frac{2}{1+x}-H_{n}\bigr]+O\bigl((1+x)\ln(1+x)\bigr)$ as $x\to-1^{+}$.
   So $Q_{n}$ is unbounded at both ends for every $n$ — Arfken, Weber and Harris record this as $Q_{n}(1)=\infty$ — while remaining square integrable on $(-1,1)$, the singularity being only logarithmic.
3. **Recurrences.** The $Q_{n}$ satisfy the same relations as the $P_{n}$:
   $$
   (n+1)Q_{n+1}=(2n+1)x\,Q_{n}-n\,Q_{n-1},
   \qquad
   (2n+1)Q_{n}=Q_{n+1}'-Q_{n-1}' ,
   $$
   together with $(1-x^{2})Q_{n}'=n(Q_{n-1}-xQ_{n})$ and the rest of the family in :ref[]{to=spec.legendre-polynomials}.
4. **Parity and values at the origin.** $Q_{n}(-x)=(-1)^{n+1}Q_{n}(x)$: the $Q_{n}$ of even degree are odd functions and conversely. Hence $Q_{2p}(0)=0$, while
   $$
   Q_{2p+1}(0)=(-1)^{p+1}\frac{(2p)!!}{(2p+1)!!} .
   $$
   There is no singularity at $x=0$, which is an ordinary point of (L).
5. **Wronskian.** On $(-1,1)$,
   $$
   W[P_{n},Q_{n}](x)=P_{n}(x)Q_{n}'(x)-P_{n}'(x)Q_{n}(x)=\frac{1}{1-x^{2}} .
   $$
   Arfken, Weber and Harris state this in the form $A_{n}/(1-x^{2})$ with $A_{n}$ independent of $x$; with the normalisation above $A_{n}=1$ for every $n$. The Wronskian never vanishes, so $\{P_{n},Q_{n}\}$ is a basis of the solution space of (L) at $\ell=n$: every solution on $(-1,1)$ is $c_{1}P_{n}+c_{2}Q_{n}$. The companion contiguous relation of Arfken, Weber and Harris is
   $n\bigl[P_{n}Q_{n-1}-P_{n-1}Q_{n}\bigr]=1$.
6. **The normalising constants.** $\alpha_{n}=1/P_{n}(0)$ for even $n$ and $\beta_{n}=-1/P_{n}'(0)$ for odd $n$; these are precisely the values that make $A_{n}=1$ in part 5.
7. **Outside the interval.** With the convention $L\mapsto\tfrac12\ln\frac{x+1}{x-1}$ for $x>1$, each $Q_{n}$ is finite and positive on $(1,\infty)$, decreasing to $0$; Arfken, Weber and Harris obtain the expansion in inverse powers of $x$ whose leading term is
   $$
   Q_{n}(x)\sim\frac{n!}{(2n+1)!!}\,x^{-n-1}
   \qquad (x\to\infty).
   $$
:::

:::idea{provenance=original}
Everything follows from one generating function. Put $G(x,h)=(1-2xh+h^{2})^{-1/2}=\sum_{n}P_{n}h^{n}$ and look for a *second* family packed the same way. Two observations do it.

First, $P_{n}L$ almost solves Legendre's equation: because $(1-x^{2})L'=1$, substituting $P_{n}L$ into (L) leaves the clean residue $2P_{n}'$ and nothing else. So the second solution must be $P_{n}L$ corrected by whatever cancels $2P_{n}'$, and because $2P_{n}'$ is a polynomial, the correction should be one too.

Second, the correction can be read off in one stroke rather than degree by degree. The generating function of the corrections turns out to be $G$ multiplied by $A(x,h)=\int_{0}^{h}G(x,s)\,\mathrm{d}s$, an integral that is elementary — complete the square under the square root — so the whole family $\sum Q_{n}h^{n}=G\cdot[L-A]$ is available in closed form. Differentiating that product in $x$ and in $h$ gives the two recurrences exactly as for the $P_{n}$; reading off the coefficient of $h^{n}$ gives the closed form with $R_{n}=\sum_{m}\frac1mP_{m-1}P_{n-m}$; and setting $x=1$ in $R_{n}$ gives $\sum_{m}\frac1m=H_{n}$ because every $P_{j}(1)=1$. That last line is the whole content of the logarithmic singularity.

The Wronskian is separate and cheaper: $(1-x^{2})W$ has zero derivative for any two solutions of (L), so it is a constant, and the constant is best evaluated by letting $x\to1^{-}$, where the polynomial pieces are killed by the factor $1-x^{2}$ and only $P_{n}(1)^{2}=1$ survives.
:::

:::proof[The generating function of the second solutions]{provenance=original}
Write $G=(1-2xh+h^{2})^{-1/2}$, and let
$$
\mathcal{M}[\Psi]:=\partial_{x}\bigl[(1-x^{2})\Psi_{x}\bigr]+\partial_{h}\bigl[h^{2}\Psi_{h}\bigr] .
$$
If $\Psi=\sum_{n\ge0}\psi_{n}(x)h^{n}$ then $\partial_{h}[h^{2}\Psi_{h}]=\sum_{n}n(n+1)\psi_{n}h^{n}$, so
$$
\mathcal{M}[\Psi]=\sum_{n\ge0}\Bigl\{\bigl[(1-x^{2})\psi_{n}'\bigr]'+n(n+1)\psi_{n}\Bigr\}h^{n} :
\tag{1}
$$
**$\mathcal{M}[\Psi]=0$ says precisely that every coefficient $\psi_{n}$ solves (L) with $\ell=n$.** For $G$ itself this is the statement proved in :ref[]{to=spec.legendre-polynomials}, so we may use $\mathcal{M}[G]=0$. We shall also use the two elementary derivatives
$$
G_{x}=hG^{3},
\qquad
G_{h}=(x-h)G^{3},
\tag{2}
$$
each obtained by differentiating $(1-2xh+h^{2})^{-1/2}$ once.

**Step 1: the candidate.** Set
$$
A(x,h):=\int_{0}^{h}\frac{\mathrm{d}s}{\sqrt{1-2xs+s^{2}}},
\qquad
\Lambda:=L-A,
\qquad
\Phi:=G\,\Lambda .
$$
Completing the square, $1-2xs+s^{2}=(s-x)^{2}+(1-x^{2})$, so the integral is a standard inverse hyperbolic sine and
$$
A(x,h)=\Bigl[\ln\bigl(s-x+\sqrt{1-2xs+s^{2}}\bigr)\Bigr]_{s=0}^{s=h}
=\ln\frac{h-x+\sqrt{1-2xh+h^{2}}}{1-x},
$$
whence, using $L=\ln\sqrt{(1+x)/(1-x)}$,
$$
\Lambda(x,h)=\ln\frac{\sqrt{1-x^{2}}}{\,h-x+\sqrt{1-2xh+h^{2}}\,} .
\tag{3}
$$

**Step 2: $\Phi$ is analytic in $h$ on the unit disc.** For $\lvert x\rvert<1$ the roots of $1-2xh+h^{2}$ in $h$ are $x\pm\mathrm{i}\sqrt{1-x^{2}}$, both of modulus $1$, so $\sqrt{1-2xh+h^{2}}$ has an analytic branch on $\lvert h\rvert<1$ equal to $1$ at $h=0$. The denominator in (3) cannot vanish there: $h-x+\sqrt{1-2xh+h^{2}}=0$ would force $1-2xh+h^{2}=(x-h)^{2}$, that is $x^{2}=1$. Being non-vanishing on a disc and equal to $1-x>0$ at $h=0$, it admits a single-valued analytic logarithm. Hence $\Phi=\sum_{n\ge0}q_{n}(x)h^{n}$ with radius of convergence at least $1$.

**Step 3: the two derivatives of $\Lambda$.** Differentiating (3) in $h$ recovers the integrand, $\Lambda_{h}=-A_{h}=-G$. For the $x$-derivative, write $u=1-2xh+h^{2}$ and differentiate the logarithm:
$$
\Lambda_{x}=\frac{-x}{1-x^{2}}+\frac{\sqrt{u}+h}{\sqrt{u}\,\bigl(h-x+\sqrt{u}\bigr)} .
$$
Multiply numerator and denominator of the second term by $\sqrt{u}-h+x$. The denominator becomes $\sqrt{u}\,[u-(h-x)^{2}]=\sqrt{u}\,(1-x^{2})$, and the numerator becomes $u+x\sqrt{u}-h^{2}+hx=1-xh+x\sqrt{u}$. The two terms in $x$ cancel and
$$
\Lambda_{h}=-G,
\qquad
\Lambda_{x}=\frac{(1-xh)\,G}{1-x^{2}} .
\tag{4}
$$

**Step 4: $\mathcal{M}[\Phi]=0$.** For any product $G\Lambda$, expanding each derivative by the Leibniz rule and collecting,
$$
\mathcal{M}[G\Lambda]
=\Lambda\,\mathcal{M}[G]
+2\bigl\{(1-x^{2})G_{x}\Lambda_{x}+h^{2}G_{h}\Lambda_{h}\bigr\}
+G\,\mathcal{M}[\Lambda] .
$$
The first term vanishes. For the second, (2) and (4) give
$$
(1-x^{2})G_{x}\Lambda_{x}=h(1-xh)G^{4},
\qquad
h^{2}G_{h}\Lambda_{h}=-h^{2}(x-h)G^{4},
$$
and since $(1-xh)-h(x-h)=1-2xh+h^{2}=G^{-2}$, their sum is $hG^{2}$; the second term is therefore $2hG^{2}$. For the third, (4) gives $(1-x^{2})\Lambda_{x}=(1-xh)G$ and $h^{2}\Lambda_{h}=-h^{2}G$, so
$$
\mathcal{M}[\Lambda]=\partial_{x}\bigl[(1-xh)G\bigr]-\partial_{h}\bigl[h^{2}G\bigr]
=-hG+(1-xh)hG^{3}-2hG-h^{2}(x-h)G^{3}
=-3hG+hG^{3}G^{-2}=-2hG .
$$
Hence $G\,\mathcal{M}[\Lambda]=-2hG^{2}$, the two surviving terms cancel, and $\mathcal{M}[\Phi]=0$. By (1), **every coefficient $q_{n}$ solves (L) with $\ell=n$.** $\square$
:::

:::proof[Closed form, recurrences, parity and the singularity]{provenance=original}
We now read the properties off $\Phi=G\Lambda=LG-GA$.

**Closed form (part 1).** Integrating $G=\sum_{k\ge0}P_{k}h^{k}$ term by term from $0$ to $h$,
$$
A(x,h)=\sum_{k\ge0}\frac{P_{k}(x)}{k+1}h^{k+1}=\sum_{m\ge1}\frac{P_{m-1}(x)}{m}h^{m}.
$$
Multiplying this by $G$ and taking the coefficient of $h^{n}$ in $\Phi=LG-GA$,
$$
q_{n}=P_{n}L-R_{n},
\qquad
R_{n}=\sum_{m=1}^{n}\frac1m P_{m-1}P_{n-m}
\quad (R_{0}=0).
$$
Each summand has degree $(m-1)+(n-m)=n-1$, and the leading coefficients of Legendre polynomials are positive, so the leading coefficients cannot cancel: $R_{n}$ is a polynomial of degree exactly $n-1$ for $n\ge1$. Taking $n=0,1,2,3$ gives $R_{0}=0$, $R_{1}=1$, $R_{2}=P_{0}P_{1}+\tfrac12P_{1}P_{0}=\tfrac32x$ and $R_{3}=P_{2}+\tfrac12x^{2}+\tfrac13P_{2}=\tfrac52x^{2}-\tfrac23$, which are the four displayed cases.

**The three-term recurrence (part 3).** From (2) and (4),
$$
\Phi_{h}=G_{h}\Lambda+G\Lambda_{h}=(x-h)G^{3}\Lambda-G^{2},
$$
and multiplying by $1-2xh+h^{2}=G^{-2}$,
$$
(1-2xh+h^{2})\,\Phi_{h}=(x-h)\Phi-1 .
\tag{5}
$$
This is the identity that produces the recurrence for the $P_{n}$, except for the extra constant $-1$ on the right, which only affects the coefficient of $h^{0}$. Comparing coefficients of $h^{n}$ with $n\ge1$,
$$
(n+1)q_{n+1}-2xn\,q_{n}+(n-1)q_{n-1}=x\,q_{n}-q_{n-1},
$$
which rearranges to $(n+1)q_{n+1}=(2n+1)xq_{n}-nq_{n-1}$. At $n=0$ the same comparison gives $q_{1}=xq_{0}-1$.

**The derivative recurrence (part 3).** In the same way,
$\Phi_{x}=G_{x}\Lambda+G\Lambda_{x}=hG^{3}\Lambda+(1-xh)G^{2}/(1-x^{2})$, so
$$
(1-2xh+h^{2})\,\Phi_{x}=h\,\Phi+\frac{1-xh}{1-x^{2}} .
\tag{6}
$$
For $n\ge2$ the coefficient of $h^{n}$ reads $q_{n}'-2xq_{n-1}'+q_{n-2}'=q_{n-1}$, which is the relation the $P_{n}$ satisfy; eliminating between it and the three-term recurrence exactly as in :ref[]{to=spec.legendre-polynomials} yields $(2n+1)q_{n}=q_{n+1}'-q_{n-1}'$ and $(1-x^{2})q_{n}'=n(q_{n-1}-xq_{n})$.

**Parity and the origin (part 4).** $L$ is odd and $P_{j}(-x)=(-1)^{j}P_{j}(x)$, so every summand of $R_{n}$ has parity $(-1)^{n-1}$ and
$$
q_{n}(-x)=(-1)^{n}P_{n}(x)\bigl(-L(x)\bigr)-(-1)^{n-1}R_{n}(x)=(-1)^{n+1}q_{n}(x) .
$$
For even $n$ this makes $q_{n}$ odd, so $q_{n}(0)=0$. For odd $n$, setting $x=0$ in the three-term recurrence gives $q_{n+1}(0)=-\frac{n}{n+1}q_{n-1}(0)$, so from $q_{1}(0)=-1$,
$$
q_{2p+1}(0)=(-1)^{p+1}\frac{2\cdot4\cdots(2p)}{3\cdot5\cdots(2p+1)}
=(-1)^{p+1}\frac{(2p)!!}{(2p+1)!!},
$$
which is Arfken, Weber and Harris's value. (For $p=1$ and $p=2$ this is $\tfrac23$ and $-\tfrac8{15}$.)

**The logarithmic singularity (part 2).** Since $P_{j}(1)=1$ for every $j$,
$$
R_{n}(1)=\sum_{m=1}^{n}\frac1m\cdot1\cdot1=H_{n} ,
$$
with no computation at all. Now split $L$ as $L(x)=\tfrac12\ln\frac{2}{1-x}+\tfrac12\ln\frac{1+x}{2}$. As $x\to1^{-}$ the second piece is $O(1-x)$, and $P_{n}(x)-1=O(1-x)$ because $P_{n}$ is a polynomial with $P_{n}(1)=1$; hence
$$
P_{n}(x)L(x)=\tfrac12\ln\frac{2}{1-x}+O\bigl((1-x)\ln(1-x)\bigr).
$$
Likewise $R_{n}(x)=H_{n}+O(1-x)$. Subtracting gives part 2, and the statement at $x=-1$ follows from the parity. In particular $\lvert q_{n}(x)\rvert\to\infty$ at both ends, while $\int_{-1}^{1}q_{n}^{2}$ converges because $\ln^{2}$ is integrable. $\square$
:::

:::proof[The Wronskian, and the identification with the normalised series]{provenance=adapted src="arfken-2013:§7.6, Exercises 7.6.9 and 7.6.11(a), p. 371; rhb-2006:§18.1.1, eqs. (18.5)–(18.6), p. 579"}
**Step 1: $(1-x^{2})W$ is constant.** Let $u,v$ be any two solutions of (L) at $\ell=n$ and $W=uv'-u'v$. Then $W'=uv''-u''v$ and, using (L) for each of $u$ and $v$ to replace $(1-x^{2})v''$ and $(1-x^{2})u''$,
$$
(1-x^{2})W'=u\bigl[2xv'-n(n+1)v\bigr]-\bigl[2xu'-n(n+1)u\bigr]v=2xW .
$$
Hence $\frac{\mathrm{d}}{\mathrm{d}x}\bigl[(1-x^{2})W\bigr]=(1-x^{2})W'-2xW=0$. This is Arfken, Weber and Harris's observation that $pW$ is constant for a self-adjoint equation, here with $p=1-x^{2}$; their Exercise 7.6.9 states the Legendre case as $W=A_{n}/(1-x^{2})$.

**Step 2: the constant is $1$.** Take $u=P_{n}$, $v=q_{n}=P_{n}L-R_{n}$. Using $(1-x^{2})L'=1$,
$$
(1-x^{2})W=(1-x^{2})\bigl[P_{n}\bigl(P_{n}'L+P_{n}L'-R_{n}'\bigr)-P_{n}'\bigl(P_{n}L-R_{n}\bigr)\bigr]
=P_{n}^{2}+(1-x^{2})\bigl[P_{n}'R_{n}-P_{n}R_{n}'\bigr],
$$
the terms carrying $L$ having cancelled. The right-hand side is a polynomial, so we may evaluate it at $x=1$: the bracket is finite there and is multiplied by $1-x^{2}=0$, while $P_{n}(1)^{2}=1$. Hence $A_{n}=1$ for every $n$ and
$$
P_{n}q_{n}'-P_{n}'q_{n}=\frac{1}{1-x^{2}} .
$$
Since this never vanishes on $(-1,1)$, $P_{n}$ and $q_{n}$ are linearly independent there and span the solution space (:ref[]{to=ode.linear-ode-theory}), giving part 5. The contiguous relation $n[P_{n}Q_{n-1}-P_{n-1}Q_{n}]=1$ of Arfken, Weber and Harris is the same statement rewritten with the recurrences of part 3.

**Step 3: $q_{n}=Q_{n}$.** Both $q_{n}$ and $Q_{n}$ solve (L) at $\ell=n$, and both have parity $(-1)^{n+1}$ — for $Q_{n}$ by its definition as the non-terminating series, for $q_{n}$ by part 4. Since $P_{n}$ has the opposite parity, a solution of definite parity $(-1)^{n+1}$ is unique up to scale, so $q_{n}$ and $Q_{n}$ are proportional and it is enough to match one value at $x=0$.

Let $n$ be even. Then $Q_{n}=\alpha_{n}y_{\mathrm{o}}$ with $y_{\mathrm{o}}(0)=0$, $y_{\mathrm{o}}'(0)=1$, so $Q_{n}(0)=0$ and $Q_{n}'(0)=\alpha_{n}$; also $P_{n}'(0)=0$. Putting $x=0$ in Step 2 for the pair $P_{n},Q_{n}$ — whose Wronskian constant we may call $A_{n}$ — gives $A_{n}=P_{n}(0)\alpha_{n}$. Now :ref[]{to=spec.legendre-polynomials} gives $P_{2m}(0)=(-1)^{m}(2m)!/\bigl[2^{2m}(m!)^{2}\bigr]$, that is $P_{n}(0)=(-1)^{n/2}n!/\bigl(2^{n}[(n/2)!]^{2}\bigr)$, which is exactly $1/\alpha_{n}$. So $A_{n}=1$: Riley, Hobson and Bence's constant $\alpha_{n}$ is the one that normalises the Wronskian, $\alpha_{n}=1/P_{n}(0)$, and $q_{n}$ and $Q_{n}$ — proportional, with the same Wronskian against $P_{n}$ — coincide.

Let $n$ be odd. Then $Q_{n}=\beta_{n}y_{\mathrm{e}}$ with $y_{\mathrm{e}}(0)=1$, $y_{\mathrm{e}}'(0)=0$, so $Q_{n}(0)=\beta_{n}$, $Q_{n}'(0)=0$, and $P_{n}(0)=0$; the Wronskian at the origin is $-P_{n}'(0)\beta_{n}$. Setting $x=0$ in the derivative recurrence $(1-x^{2})P_{n}'=n(P_{n-1}-xP_{n})$ gives $P_{n}'(0)=nP_{n-1}(0)$, so with $n=2p+1$,
$$
P_{n}'(0)=(2p+1)\frac{(-1)^{p}(2p)!}{2^{2p}(p!)^{2}}=\frac{(-1)^{p}(2p+1)!}{2^{2p}(p!)^{2}}=-\frac{1}{\beta_{n}} ,
$$
the last equality being the definition of $\beta_{n}$ with $(n-1)/2=p$ and $(-1)^{(n+1)/2}=(-1)^{p+1}$. Hence the Wronskian constant is again $1$ and $q_{n}=Q_{n}$. This proves part 6 and completes the identification. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
**$n$ an integer.** Only then does one of the two series terminate, so that "the second solution" is unambiguous and the first is a polynomial. For non-integer $\ell$ *both* series are infinite and both blow up at $x=\pm1$; the functions $P_{\lambda}$, $Q_{\lambda}$ of Hassani's hypergeometric formulas still exist, but nothing in this unit's proofs survives, because $R_{n}$ was a polynomial precisely because $G$ generates polynomials.

**$\lvert x\rvert<1$.** Used three times. The series defining $Q_{n}$ converges only there. The generating function argument needs $\lvert x\rvert\le1$ so that the singularities of $G$ in $h$ sit on $\lvert h\rvert=1$, and needs $\lvert x\rvert<1$ strictly so that $h-x+\sqrt{u}$ does not vanish — at $x=\pm1$ it does, which is the analytic shadow of the singularity of $Q_{n}$ at the ends. And $L=\operatorname{artanh}x$ is real only there; beyond $x=1$ one must switch to $\tfrac12\ln\frac{x+1}{x-1}$, which differs by $\tfrac12\ln(-1)$ and so changes the solution by a multiple of $P_{n}$ — a real change of function, not a change of notation.

**Regularity at the ends is what selects $P_{n}$.** Part 2 is the general-$n$ version of the $n=0$ calculation in :ref[]{to=spec.legendre-polynomials}: the obstruction is *not* a failure of square integrability, since $\int_{-1}^{1}Q_{n}^{2}$ converges for every $n$, but the survival of the boundary form $p\,(uv'-u'v)$, with $p=1-x^{2}$, at the endpoints $x=\pm1$: the Sturm-Liouville argument needs that form to vanish at each end for the operator to be symmetric. Part 5 makes that explicit and quantitative: for $u=P_{n}$, $v=Q_{n}$ the boundary form equals $1$ at each endpoint separately, as far from zero as it could be. That single number is why a problem on the full sphere must set $c_{2}=0$ in $y=c_{1}P_{n}+c_{2}Q_{n}$, and hence why the separation constant is quantised.

**Where the normalisation enters.** Nothing in parts 1–4 depends on the scale of $Q_{n}$ except through the starting values $Q_{0}=L$, $Q_{1}=xL-1$. The content of the constants $\alpha_{n},\beta_{n}$ is exactly part 6: they are the unique choice making the Wronskian constant equal $1$ for every degree, and therefore the unique choice under which $P_{n}$ and $Q_{n}$ obey one and the same recurrence. A different scaling for each $n$ — for instance normalising $Q_{n}$ to have unit value at $x=0$ — would destroy part 3 and with it every computational use of these functions.

**Two silent points in the reduction-of-order formula (R).** Its lower limit is left open, and a
different lower limit changes the answer by a constant multiple of $P_{n}$; what pins that multiple
down is the parity, since $P_{n}$ and $Q_{n}$ have opposite parities and so no multiple of $P_{n}$
can be added without destroying it. Also, $P_{n}$ has $n$ simple zeros inside $(-1,1)$, so the
integrand of (R) is not locally integrable at them; the quotient $Q_{n}/P_{n}$ nevertheless has a
finite limit at each, because the double pole of $P_{n}^{-2}$ integrates to a simple pole which the
prefactor $P_{n}$ cancels. We have taken the generating-function route instead of (R) partly for
this reason: it never divides by $P_{n}$ and so never meets either difficulty. Arfken, Weber and
Harris state that (R) fixes the scale and the form of $Q_{n}$ without comment on either point.

**$R_{n}(1)=H_{n}$ needs $P_{j}(1)=1$.** This is the standardisation of the Legendre polynomials, not a coincidence. With the monic standardisation of :ref[]{to=spec.orthogonal-polynomials-general} the constant in part 2 would be a different and far less memorable number.

**Degree exactly $n-1$.** The claim that the leading coefficients in $R_{n}=\sum_{m}\frac1mP_{m-1}P_{n-m}$ cannot cancel uses that all of them are positive, which is read off Rodrigues' formula. Without that, $R_{n}$ could in principle drop degree, and the asymptotic statements in part 7 would need separate proof.
:::

:::method[Computing with $Q_{n}$]{provenance=original}
1. **On $(-1,1)$:** set $L=\operatorname{artanh}x$, take $Q_{0}=L$ and $Q_{1}=xL-1$, and iterate upward,
   $$
   Q_{n+1}=\frac{(2n+1)x\,Q_{n}-n\,Q_{n-1}}{n+1} .
   $$
   This is stable, and for the same reason as for $P_{n}$: on $(-1,1)$ the two solutions of the recurrence are of comparable size (both decay only like $n^{-1/2}$ with oscillating sign), so no step has to recover a small quantity from large ones. Near the ends, cancel the singularity by hand — compute $L$ and the polynomial $R_{n}$ separately and subtract — rather than letting $L$ and $P_{n}L$ both overflow.
2. **On $(1,\infty)$: do not iterate upward.** There $P_{n}$ grows like $(x+\sqrt{x^{2}-1})^{n}$ while $Q_{n}$ decays like its reciprocal, so an upward sweep for $Q_{n}$ is contaminated by the dominant solution and loses everything. At $x=5$ in double precision the upward recurrence already gives $Q_{10}$ wrong by four orders of magnitude and $Q_{20}$ wrong by twenty-three. Instead either use the closed form of part 1 with $L$ replaced by $\tfrac12\ln\frac{x+1}{x-1}$, or run the recurrence *downward* from a high starting index with arbitrary seed values and rescale at the end using the known $Q_{0}$: downward iteration is stable exactly when the wanted solution is the decaying one.
3. **To obtain the polynomial part $R_{n}$ in closed form:** use $R_{n}=\sum_{m=1}^{n}\frac1mP_{m-1}P_{n-m}$ directly, or iterate $R_{n+1}=\bigl[(2n+1)xR_{n}-nR_{n-1}\bigr]/(n+1)$ from $R_{0}=0$, $R_{1}=1$ — the same recurrence, since $P_{n}L$ satisfies it on its own. Check the result with $R_{n}(1)=H_{n}$, which catches almost every arithmetic slip.
4. **To solve a boundary-value problem for (L) on $[a,b]\subset(-1,1)$:** write the general solution $c_{1}P_{n}+c_{2}Q_{n}$ and impose the two conditions. Because part 5 gives $pW=1$ exactly, no normalising determinant has to be computed: the solution of the two-by-two system can be written down directly, and the Green's function of :ref[]{to=green.green-function-bvp} is built from $P_{n},Q_{n}$ with denominator $1$.
5. **For the associated equation** with $m\neq0$, use $Q_{n}^{m}=(1-x^{2})^{m/2}\mathrm{d}^{m}Q_{n}/\mathrm{d}x^{m}$, the second-kind counterpart of the construction in :ref[]{to=spec.associated-legendre}; these are again singular at $x=\pm1$ and again discarded on the full sphere.
:::

:::example[Building $Q_{3}$, and four checks]{provenance=original}
**Step 1: the polynomial part.** From $R_{0}=0$, $R_{1}=1$ and $R_{n+1}=\bigl[(2n+1)xR_{n}-nR_{n-1}\bigr]/(n+1)$,
$$
R_{2}=\frac{3x\cdot1-1\cdot0}{2}=\frac{3x}{2},
\qquad
R_{3}=\frac{5x\cdot\frac{3x}{2}-2\cdot1}{3}=\frac{5x^{2}}{2}-\frac{2}{3}.
$$
The sum formula agrees: $R_{3}=P_{0}P_{2}+\tfrac12P_{1}P_{1}+\tfrac13P_{2}P_{0}=\tfrac43\cdot\tfrac{3x^{2}-1}{2}+\tfrac12x^{2}=\tfrac52x^{2}-\tfrac23$. Hence, with $L=\operatorname{artanh}x$,
$$
Q_{3}(x)=\tfrac12(5x^{3}-3x)\,L(x)-\tfrac52x^{2}+\tfrac23 .
$$

**Check 1 (the harmonic number).** $R_{3}(1)=\tfrac52-\tfrac23=\tfrac{15-4}{6}=\tfrac{11}{6}$, and $H_{3}=1+\tfrac12+\tfrac13=\tfrac{11}{6}$. Agreed.

**Step 2: a value.** Take $x=\tfrac12$, where $L=\tfrac12\ln3$ and
$$
P_{2}(\tfrac12)=-\tfrac18,
\qquad
P_{3}(\tfrac12)=\tfrac12\bigl(\tfrac58-\tfrac32\bigr)=-\tfrac7{16},
\qquad
R_{3}(\tfrac12)=\tfrac58-\tfrac23=-\tfrac1{24}.
$$
So
$$
Q_{3}(\tfrac12)=-\tfrac7{16}\cdot\tfrac12\ln3+\tfrac1{24}
=\frac{1}{24}-\frac{7}{32}\ln3
=0.0416666\ldots-0.2403214\ldots=-0.1986547715 .
$$

**Check 2 (the recurrence, independently).** $Q_{1}(\tfrac12)=\tfrac14\ln3-1=-0.7253469278$ and $Q_{2}(\tfrac12)=-\tfrac18\cdot\tfrac12\ln3-\tfrac34=-0.8186632680$. Then
$$
Q_{3}(\tfrac12)=\frac{5\cdot\tfrac12\cdot(-0.8186632680)-2\cdot(-0.7253469278)}{3}
=\frac{-2.0466581701+1.4506938557}{3}=-0.1986547715 ,
$$
matching the closed form to ten digits.

**Check 3 (the Wronskian).** $P_{3}'=\tfrac12(15x^{2}-3)$, so $P_{3}'(\tfrac12)=\tfrac38$; and $Q_{3}'=P_{3}'L+P_{3}L'-R_{3}'$ with $L'(\tfrac12)=\tfrac43$ and $R_{3}'(\tfrac12)=\tfrac52$, so
$$
Q_{3}'(\tfrac12)=\tfrac38\cdot\tfrac12\ln3-\tfrac7{16}\cdot\tfrac43-\tfrac52=\tfrac3{16}\ln3-\tfrac{37}{12}.
$$
Therefore
$$
P_{3}Q_{3}'-P_{3}'Q_{3}
=-\tfrac7{16}\Bigl(\tfrac3{16}\ln3-\tfrac{37}{12}\Bigr)-\tfrac38\Bigl(-\tfrac7{32}\ln3+\tfrac1{24}\Bigr)
=\Bigl(-\tfrac{21}{256}+\tfrac{21}{256}\Bigr)\ln3+\tfrac{259}{192}-\tfrac{3}{192}
=\tfrac{256}{192}=\tfrac43 .
$$
The logarithms cancel exactly, and $\tfrac43=1/(1-\tfrac14)$ as part 5 requires.

**Check 4 (the singularity).** Part 2 predicts $Q_{3}(x)\approx\tfrac12\ln\frac{2}{1-x}-\tfrac{11}{6}$ near $x=1$. At $x=1-10^{-5}$ that is $\tfrac12\ln(2\times10^{5})-1.8333333=6.1030363-1.8333333=4.2697030$, while the closed form gives $4.2693843$. The discrepancy is $3.2\times10^{-4}$, of the predicted size $O\bigl((1-x)\ln(1-x)\bigr)=1.2\times10^{-4}$ up to a constant of order one. Every number above was verified symbolically and in extended precision.
:::

:::application{provenance=adapted src="rhb-2006:§18.1.1, eq. (18.7) and the discussion of regularity, pp. 579–581; arfken-2013:§15.6, the convention for x > 1 and Properties 2 and 4, pp. 767–769"}
**The solution one throws away — and why that is a theorem.** In any problem posed on a full sphere the polar angle runs over $0\le\theta\le\pi$, so $x=\cos\theta$ reaches both $\pm1$, and the general separated solution $c_{1}P_{n}+c_{2}Q_{n}$ must have $c_{2}=0$ because $Q_{n}$ is infinite there. Riley, Hobson and Bence take this step at the start of their treatment of $P_{n}$ (:ref[]{to=pde.separation-of-variables}). Part 5 is what makes it rigorous rather than cosmetic: it is not that $Q_{n}$ is "badly behaved", it is that the bilinear boundary form $p\,(uv'-u'v)$ for the pair $P_{n},Q_{n}$ equals exactly $1$ at each pole instead of vanishing there, so the Legendre operator is self-adjoint on the regular solutions and on nothing larger.

**Regions that do not contain the poles.** Exclude one or both poles — a conical hole, the gap between two coaxial cones, a sector of a spherical shell — and the boundary condition that killed $Q_{n}$ is gone, so both solutions survive and the degree is no longer forced to be an integer. Physically the $Q$-part is the piece of the field that remembers the axis has been cut out.

**Prolate spheroidal problems and the charged rod.** Here is the cleanest place where $Q_{n}$ is the answer rather than the discard. Prolate spheroidal coordinates based on foci at $z=\pm c$ use $\xi=(r_{1}+r_{2})/2c\ge1$ and $\eta=(r_{1}-r_{2})/2c\in[-1,1]$, where $r_{1},r_{2}$ are the distances to the two foci. Laplace's equation separates with $P_{n}(\eta)$ in the angular variable and, in $\xi$, the same Legendre equation again — now on $(1,\infty)$, where $P_{n}$ grows and $Q_{n}$ decays. An *exterior* field therefore expands as $\sum_{n}a_{n}P_{n}(\eta)Q_{n}(\xi)$, Arfken, Weber and Harris's property $Q_{n}(\infty)=0$ being exactly the radiation-free condition at infinity. The simplest case is a uniformly charged rod of half-length $c$ and total charge $q$ along the axis. Integrating $1/\lvert\mathbf{r}-\mathbf{r}'\rvert$ over the rod gives the elementary closed form $\ln\frac{r_{1}+r_{2}+2c}{r_{1}+r_{2}-2c}$, and in these coordinates $r_{1}+r_{2}=2c\xi$, so
$$
V=\frac{q}{4\pi\varepsilon_{0}\,c}\cdot\frac12\ln\frac{\xi+1}{\xi-1}
=\frac{q}{4\pi\varepsilon_{0}\,c}\,Q_{0}(\xi) .
$$
The potential of a charged needle *is* the Legendre function of the second kind of degree zero. Two checks confirm it: part 7 gives $Q_{0}(\xi)\sim1/\xi$, and $\xi\to r/c$ far away, so $V\to q/(4\pi\varepsilon_{0}r)$ as it must; and the equipotentials $\xi=\text{const}$ are confocal prolate spheroids, which is why the same formula is the potential of any charged conducting spheroid with those foci. The higher $Q_{n}(\xi)$ do the same job for the multipole terms of a spheroidal conductor, the spheroidal analogue of the $r^{-n-1}$ of :ref[]{to=pde.multipole-expansion}.

**Green's functions.** Part 5 says $p\,W[P_{n},Q_{n}]=1$ identically, which is unusually convenient: the one-dimensional Green's function of :ref[]{to=green.green-function-bvp} for the Legendre operator on a sub-interval of $(-1,1)$ is
$$
G(x,s)=-\frac{u(x_{<})\,v(x_{>})}{p\,W[u,v]}
$$
with $u,v$ the combinations of $P_{n},Q_{n}$ satisfying the left and right conditions; the prefactor $1/(pW)$ is a constant, by Step 1 of the Wronskian proof, so it can be computed once from the two combinations rather than at every evaluation. The same structure, with $P_{n}$ regular at the inner end and $Q_{n}$ decaying at the outer, is what makes $P_{n}(x_{<})Q_{n}(x_{>})$ the standard kernel in exterior and annular problems.
:::
