---
id: spec.confluent-hypergeometric
title: Confluent hypergeometric functions
kind: definition
level: core
summary: "Kummer's equation, its entire solution $M(a,c,x)$ and the second solution $U(a,c,x)$, obtained by merging two singular points of the hypergeometric equation, together with the reduction of Hermite, Laguerre, Bessel, error and incomplete-Gamma functions to them."
prereqs: [spec.hypergeometric, spec.gamma-function, ode.frobenius-method]
provenance: adapted
sources:
  - work: rhb-2006
    loc: "§18.11, the confluent equation (18.147) and the worked confluence of the hypergeometric equation, p. 633; the solutions (18.148)–(18.149) and the definition of $U$, pp. 633–634; §18.11.1, the special cases and the integral representation (18.150), p. 634; the derivation of (18.150) and the relations (18.151)–(18.152) with a contiguous relation, p. 635"
    pages: "633-635"
    role: the confluence process by which $x \to x/b$ and $b \to \infty$ turns the hypergeometric equation and series into Kummer's, the pair of solutions at the origin and the construction of $U$ as the combination with a good integer-$c$ limit, the list of elementary and classical special cases, the integral representation for $M$ and its proof by confluence, and Kummer's transformation
  - work: arfken-2013
    loc: "§18.6, Kummer's equation (18.136) with the character of its singular points, the series (18.137)–(18.138), the error-function and incomplete-Gamma cases (18.139)–(18.140), the second solution (18.141) and the definition (18.142) of $U$, p. 917; the alternate form (18.143), the count of contiguous relations and the integral representations (18.144)–(18.145), p. 918; the Bessel, Hermite and Laguerre representations (18.146)–(18.151), pp. 918–919"
    pages: "917-919"
    role: the Pochhammer form of the series and the standard notations ${}_1F_1(a;c;x)$ and $M(a,c,x)$, the irregular singular point at infinity, the analogy between $U$ and the Neumann function, the integral representations of both solutions with their hypotheses, and the explicit identifications of $J_\nu$, $I_\nu$, $H_n$, $L_n$ and $L_n^m$
  - work: hassani-2013
    loc: "§15.5, the confluence limit (15.36)–(15.37), the series (15.38), Box 15.5.1 and Proposition 15.5.2, p. 479; §15.5.1, the hydrogen-like radial equation and its reduction to Kummer's equation, with the quantization condition (15.40) and the resulting spectrum, pp. 480–481; §15.5.2, the reduction of Bessel's equation and eqs. (15.42)–(15.43), pp. 482–483"
    pages: "479-483"
    role: the careful statement of which parameter is sent to infinity in the confluence and why, the Gamma-quotient form of the series, the termination criterion, the substitution $u=z^{\mu}\mathrm{e}^{-\nu z}f(z)$ as the systematic route from a physical radial equation to Kummer's equation, and the worked hydrogen-like spectrum
---

:::definition[Kummer's equation and the functions $M$ and $U$]{provenance=adapted src="arfken-2013:§18.6, eqs. (18.136)–(18.138), (18.141)–(18.142), p. 917; rhb-2006:§18.11, eqs. (18.147)–(18.149) and the definition of $U$, pp. 633–634; hassani-2013:§15.5, eq. (15.37), the series (15.38) and Box 15.5.1, p. 479"}
**Kummer's equation**, also called the confluent hypergeometric equation, is
$$
x\,y'' + (c-x)\,y' - a\,y = 0 .
\tag{K}
$$
It has a regular singular point at $x=0$ and an irregular (essential) one at $x=\infty$; there are no others.

For $c$ neither $0$ nor a negative integer, **Kummer's function** is
$$
M(a,c,x) \;=\; {}_1F_1(a;c;x) \;=\; \sum_{n=0}^{\infty}\frac{(a)_n}{(c)_n}\,\frac{x^n}{n!}
\;=\; 1+\frac{a}{c}\frac{x}{1!}+\frac{a(a+1)}{c(c+1)}\frac{x^2}{2!}+\cdots
$$
with $(a)_n$ the Pochhammer symbol of :ref[]{to=spec.hypergeometric}. The ratio of consecutive terms is $(a+n)x/[(c+n)(n+1)] \to 0$, so the series converges for every finite $x$ (and every finite complex $z$): $M$ is an **entire** function of its argument, which is what the loss of the finite singularity at $x=1$ buys. As with ${}_2F_1$, if $a$ is $0$ or a negative integer $-m$ the series terminates and $M$ is a polynomial of degree $m$.

Arfken, Weber and Harris note that the commas in $M(a,c,x)$ and the semicolons in ${}_1F_1(a;c;x)$ are both standard and denote the same function; we use $M$. Riley, Hobson and Bence write $M(a,c;x)$ and Hassani writes $\Phi(a;\gamma;z)$.

The second solution is less tidy. For $c$ not an integer, $x^{1-c}M(a-c+1,2-c,x)$ solves (K) and is independent of $M$; but it is singular as $c \to 2,3,4,\dots$ while $M$ itself is singular as $c \to 0,-1,-2,\dots$, so neither formula is usable across integer $c$. The combination that is,
$$
U(a,c,x) \;=\; \frac{\pi}{\sin \pi c}\left[\frac{M(a,c,x)}{\Gamma(a-c+1)\Gamma(c)} \;-\; x^{1-c}\,\frac{M(a-c+1,2-c,x)}{\Gamma(a)\Gamma(2-c)}\right] ,
$$
is **Tricomi's function**. The two divergences cancel and $U$ has a finite limit as $c$ approaches an integer, which is exactly the device used for the Neumann function $Y_\nu$ in :ref[]{to=spec.bessel-second-kind-hankel}; Arfken, Weber and Harris point out the parallel explicitly, including that the formula as written is indeterminate at integer $c$ and must be read as a limit.

**A conflict of sign to be aware of.** Riley, Hobson and Bence print the same combination with $\Gamma(a)\Gamma(2-c)$ in the second denominator, Arfken, Weber and Harris print $\Gamma(a)\Gamma(-c)$. The two differ, since $\Gamma(2-c)\ne\Gamma(-c)$ in general. We follow Riley, Hobson and Bence, whose version is the one that reduces to a finite multiple of the standard $U$; the discrepancy is recorded rather than silently resolved.
:::

:::statement[Solutions, confluence, and the elementary reductions]{provenance=adapted src="rhb-2006:§18.11, eqs. (18.147)–(18.150), pp. 633–634, and eqs. (18.151)–(18.152), p. 635; arfken-2013:§18.6, eqs. (18.137)–(18.151), pp. 917–919; hassani-2013:§15.5, eqs. (15.36)–(15.38) and Proposition 15.5.2, p. 479, and eqs. (15.42)–(15.43), pp. 482–483"}
1. **Solutions at the origin.** The exponents of (K) at $x=0$ are $0$ and $1-c$. If $c\notin\{0,-1,-2,\dots\}$ then $y_1 = M(a,c,x)$ solves (K) on all of $\mathbb{C}$; if in addition $c$ is not a positive integer, $y_2 = x^{1-c}M(a-c+1,2-c,x)$ is a second, independent solution, and every solution is a combination of the two. For $c=1$ the two coincide.
2. **Confluence.** With $b$ as the parameter sent to infinity,
   $$
   x(1-x)y''+[c-(a+b+1)x]y'-ab\,y=0
   \quad\xrightarrow[\;b\to\infty\;]{\;x = z/b\;}\quad
   z\,u''+(c-z)u'-a\,u=0 ,
   $$
   and correspondingly $M(a,c,z) = \lim_{b\to\infty}{}_2F_1(a,b;c;z/b)$. The two regular singular points of the hypergeometric equation at $x=1$ and $x=\infty$ merge into the single irregular point at $z=\infty$; this merging is what "confluent" names.
3. **Integral representations.**
   $$
   M(a,c,x) = \frac{\Gamma(c)}{\Gamma(a)\Gamma(c-a)}\int_0^1 \mathrm{e}^{xt}\,t^{\,a-1}(1-t)^{\,c-a-1}\,\mathrm{d}t , \qquad c>a>0 ,
   \tag{IM}
   $$
   $$
   U(a,c,x) = \frac{1}{\Gamma(a)}\int_0^{\infty}\mathrm{e}^{-xt}\,t^{\,a-1}(1+t)^{\,c-a-1}\,\mathrm{d}t , \qquad \operatorname{Re}x>0,\ a>0 .
   \tag{IU}
   $$
4. **Kummer's transformation and the derivative.**
   $$
   M(a,c,x) = \mathrm{e}^{x}\,M(c-a,c,-x), \qquad
   \frac{\mathrm{d}}{\mathrm{d}x}M(a,c,x) = \frac{a}{c}\,M(a+1,c+1,x) .
   $$
5. **Reductions.** With $n$, $m$ non-negative integers and $\nu$ arbitrary,
   $$
   \mathrm{e}^{x} = M(a,a,x), \qquad
   L_n(x) = M(-n,1,x), \qquad
   L_n^{m}(x) = \frac{(n+m)!}{n!\,m!}\,M(-n,m+1,x),
   $$
   $$
   H_{2n}(x) = (-1)^n\frac{(2n)!}{n!}\,M\!\left(-n,\tfrac12,x^2\right), \qquad
   H_{2n+1}(x) = (-1)^n\frac{2\,(2n+1)!}{n!}\,x\,M\!\left(-n,\tfrac32,x^2\right),
   $$
   $$
   J_\nu(x) = \frac{\mathrm{e}^{-\mathrm{i}x}}{\Gamma(\nu+1)}\left(\frac{x}{2}\right)^{\nu} M\!\left(\nu+\tfrac12,\,2\nu+1,\,2\mathrm{i}x\right), \qquad
   I_\nu(x) = \frac{\mathrm{e}^{-x}}{\Gamma(\nu+1)}\left(\frac{x}{2}\right)^{\nu} M\!\left(\nu+\tfrac12,\,2\nu+1,\,2x\right),
   $$
   $$
   \operatorname{erf}(x) = \frac{2x}{\sqrt{\pi}}\,M\!\left(\tfrac12,\tfrac32,-x^2\right), \qquad
   \gamma(a,x) = \int_0^x \mathrm{e}^{-t}t^{\,a-1}\mathrm{d}t = \frac{x^a}{a}\,M(a,a+1,-x) \quad (\operatorname{Re}a>0) .
   $$
:::

:::idea{provenance=original}
Two things make (K) easier than its parent, and both come from the same source: the singularity that used to sit at $x=1$ has been pushed off to infinity and absorbed there. First, there is no finite obstruction left for a power series about the origin to run into, so the series converges everywhere instead of on a disc. Second, the recurrence that the Frobenius method produces loses one factor — it is $(c+n)(n+1)a_{n+1} = (a+n)a_n$ rather than $(c+n)(n+1)a_{n+1}=(a+n)(b+n)a_n$ — which is precisely the statement that one numerator parameter has been spent.

The price is paid at infinity, where the merged singularity is irregular. There is no convergent Frobenius series there, only an asymptotic one, and the two solutions behave quite differently: generically $M$ grows like $\mathrm{e}^{x}x^{a-c}$ while $U$ decays like $x^{-a}$. This asymmetry is the whole physical content of the function. Almost every quantum bound-state problem that is exactly solvable is solvable because a boundary condition at infinity kills the growing solution, and the only way $M$ can fail to grow is by terminating — which happens exactly when $a$ is a non-positive integer. Quantization conditions of the form "$a = -N$" are therefore not an accident of hydrogen; they are the generic shape of the answer.

The reductions in part 5 all have the same explanation. Bessel's equation, the Hermite equation and the Laguerre equation each have one regular singular point and one irregular point at infinity, so by the classification each of them *must* become (K) once the asymptotic factor $z^{\mu}\mathrm{e}^{-\nu z}$ is removed; the only work is finding $\mu$ and $\nu$.
:::

:::proof{provenance=adapted src="rhb-2006:§18.11, the worked confluence and eqs. (18.148)–(18.150), pp. 633–634, and the derivation of (18.150) with the relations on p. 635; hassani-2013:§15.5, eqs. (15.36)–(15.38), p. 479, and the substitution scheme of §15.5.2, pp. 482–483; arfken-2013:§18.6, eqs. (18.137), (18.141), (18.144)–(18.145), pp. 917–918"}
**1. The series.** Insert $y=\sum_{n\ge0}a_nx^{n+\sigma}$ into (K) and divide by $x^{\sigma-1}$. The $n=0$ term at $x=0$ gives the indicial equation $\sigma(\sigma-1)+c\sigma=0$ with roots $0$ and $1-c$, the same roots as for the hypergeometric equation because (K) has the same behaviour at the origin. With $\sigma=0$, the coefficient of $x^{n}$ gives
$$
(n+1)(n+c)\,a_{n+1} = (n+a)\,a_n ,
$$
so with $a_0=1$, $a_n = (a)_n/[(c)_n n!]$, which is $M$. Convergence for all $x$ was checked in the definition, and the series for $y'$ and $y''$ converge there too (differentiating a power series does not change its radius), so the termwise manipulation is valid on the whole plane. For the second solution substitute $y=x^{1-c}u$: the equation for $u$ is again (K), with $a \mapsto a-c+1$ and $c \mapsto 2-c$, so $u = M(a-c+1,2-c,x)$ whenever $2-c$ avoids the forbidden set, i.e. $c\ne2,3,4,\dots$. Independence follows from the behaviour at $0$: $y_1(0)=1$ while $y_2 \sim x^{1-c}$, and for non-integer $c$ these cannot be proportional. This is Hassani's Proposition 15.5.2.

**2. Confluence.** Substitute $x = z/b$ in the hypergeometric equation, so $\mathrm{d}/\mathrm{d}x = b\,\mathrm{d}/\mathrm{d}z$, and write $u(z)=y(x)$:
$$
b z\left(1-\frac{z}{b}\right)u'' + \bigl[bc-(a+b+1)z\bigr]u' - ab\,u = 0 .
$$
Divide by $b$:
$$
z\left(1-\frac{z}{b}\right)u'' + \left[c-\frac{(a+1)z}{b}-z\right]u' - a\,u = 0 ,
$$
and let $b\to\infty$ with $a$, $c$, $z$ fixed: the result is $zu''+(c-z)u'-au=0$, which is (K). Hassani is careful about *which* parameter goes to infinity and why: the singular points of the intermediate equation sit at $z=0$, $z=b$ and $z=\infty$, and it is $z=b$ running out to meet $z=\infty$ that merges them; keeping $c$ finite is forced, since otherwise the coefficient of $u'$ blows up, and $a$ and $b$ may be exchanged, so sending $b$ rather than $a$ is a convention. The same limit applied termwise to the series works because $(b)_n/b^n \to 1$ for each fixed $n$:
$$
{}_2F_1\!\left(a,b;c;\frac{z}{b}\right) = \sum_{n\ge0}\frac{(a)_n}{(c)_n}\frac{z^n}{n!}\cdot\frac{(b)_n}{b^{n}} \longrightarrow \sum_{n\ge0}\frac{(a)_n}{(c)_n}\frac{z^n}{n!} = M(a,c,z) .
$$

**3. The integral representations.** For (IM), take Euler's integral (E) of :ref[]{to=spec.hypergeometric} in the form obtained by exchanging $a$ and $b$ — legitimate by the symmetry of ${}_2F_1$ —
$$
{}_2F_1(a,b;c;x) = \frac{\Gamma(c)}{\Gamma(a)\Gamma(c-a)}\int_0^1 t^{\,a-1}(1-t)^{\,c-a-1}(1-tx)^{-b}\,\mathrm{d}t ,
$$
valid for $c>a>0$, and set $x=z/b$. Then $(1-tz/b)^{-b}\to\mathrm{e}^{tz}$ pointwise in $t$ as $b\to\infty$, and for $b$ large the factor is bounded on $[0,1]$ uniformly, so the limit passes inside the integral and gives (IM). Riley, Hobson and Bence run exactly this argument; Arfken, Weber and Harris quote (IM) with the same hypothesis $c>a>0$ and offer the alternative route of verifying directly that the integral satisfies (K), excluding the other solution and checking the value at $x=0$.

For (IU), the integral converges at $t=0$ because $a>0$ and at $t=\infty$ because $\operatorname{Re}x>0$ dominates the algebraic factor; Arfken, Weber and Harris obtain it by the verification route just described.

**4. Kummer's transformation.** In (IM) substitute $t \mapsto 1-t$. The measure is unchanged, $t^{a-1}(1-t)^{c-a-1}$ becomes $(1-t)^{a-1}t^{c-a-1}$, and $\mathrm{e}^{xt}$ becomes $\mathrm{e}^{x}\mathrm{e}^{-xt}$. Pulling the constant $\mathrm{e}^x$ out,
$$
M(a,c,x) = \mathrm{e}^{x}\,\frac{\Gamma(c)}{\Gamma(a)\Gamma(c-a)}\int_0^1 \mathrm{e}^{-xt}\,t^{\,(c-a)-1}(1-t)^{\,c-(c-a)-1}\,\mathrm{d}t = \mathrm{e}^{x}M(c-a,c,-x) ,
$$
the last step being (IM) itself with $a$ replaced by $c-a$ and $x$ by $-x$. The identity holds for all $x$ by analytic continuation, both sides being entire, and for all admissible $a$, $c$ because both sides are analytic in the parameters. The derivative relation is immediate from the series: differentiating termwise and shifting the index,
$$
\frac{\mathrm{d}}{\mathrm{d}x}\sum_{n\ge1}\frac{(a)_n}{(c)_n}\frac{x^n}{n!} = \sum_{n\ge1}\frac{(a)_n}{(c)_n}\frac{x^{n-1}}{(n-1)!} = \frac{a}{c}\sum_{m\ge0}\frac{(a+1)_m}{(c+1)_m}\frac{x^m}{m!} ,
$$
using $(a)_{m+1} = a(a+1)_m$ and $(c)_{m+1}=c(c+1)_m$.

**5. The reductions.** Each is the same two-line computation, and we give the general form, following Hassani's scheme. To reduce
$$
w'' + \left(\frac{A}{z}+B\right)w' + \left(\frac{C}{z^2}+\frac{D}{z}+E\right)w = 0
$$
to (K), put $w = z^{\mu}\mathrm{e}^{-\nu z}f(z)$ and choose $\nu$ and $\mu$ to kill the two terms that (K) does not have: $\nu$ is fixed by the requirement that the constant term in the coefficient of $f$ vanish, and $\mu$ by the requirement that the $z^{-2}$ term vanish. What is left is $zf''+(\alpha-\beta z)f'-\delta f=0$, which after rescaling $z$ is (K). Two instances:

- **Bessel.** For $w''+z^{-1}w'+(1-\nu^2z^{-2})w=0$, the choices $\mu=\nu$ and the exponential factor $\mathrm{e}^{-\mathrm{i}z}$ give, after setting $t=2\mathrm{i}z$, the equation $t f''+(2\nu+1-t)f' - (\nu+\tfrac12)f=0$, which is (K) with $a=\nu+\tfrac12$, $c=2\nu+1$. Hence $J_\nu(z)$ is a multiple of $z^{\nu}\mathrm{e}^{-\mathrm{i}z}M(\nu+\tfrac12,2\nu+1,2\mathrm{i}z)$, and comparing the leading coefficient with the series $J_\nu(z)=(z/2)^\nu/\Gamma(\nu+1)+\cdots$ of :ref[]{to=spec.bessel-first-kind} fixes the multiple to be $2^{-\nu}/\Gamma(\nu+1)$, giving the formula in part 5. The modified case is the same with $\mathrm{e}^{-z}$ in place of $\mathrm{e}^{-\mathrm{i}z}$.
- **Laguerre.** The Laguerre equation $xy''+(1-x)y'+ny=0$ *is* (K) with $a=-n$, $c=1$, with no substitution at all; since $L_n(0)=1=M(-n,1,0)$, the two agree exactly.

The Hermite and error-function cases are the same calculation with $\mathrm{e}^{-x^2}$-type factors and the change of variable $x\mapsto x^2$, which Arfken, Weber and Harris record as the alternate form of (K) in the variable $x^2$. The incomplete Gamma identity follows from (IM) with $c=a+1$, where the weight $(1-t)^{c-a-1}$ is $1$ and the integral is elementary. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
- **$c\notin\{0,-1,-2,\dots\}$** is used only in iterating the recurrence, exactly as for ${}_2F_1$: $(c)_n$ must not vanish. **$c$ not a positive integer** is what keeps $x^{1-c}M(a-c+1,2-c,x)$ both defined ($2-c$ must avoid the forbidden set) and distinct from $M$. Both conditions are conditions on the *exponent difference* $1-c$ being a non-integer, which is the standard Frobenius proviso of :ref[]{to=ode.frobenius-method}; when it fails, a logarithm enters, and $U$ is the bookkeeping device that absorbs it.
- **$c>a>0$ in (IM)** plays the same two roles as $c>b>0$ did in Euler's integral: $a>0$ for integrability at $t=0$, $c-a>0$ for integrability at $t=1$. Note which parameter is which — the exponent in the first factor is $a-1$, not $c-1$ — because the confluence is applied to the form of Euler's integral with $a$ and $b$ swapped.
- **$\operatorname{Re}x>0$ in (IU)** is what makes $\mathrm{e}^{-xt}$ beat the algebraic growth $(1+t)^{c-a-1}$ at $t=\infty$. It is a genuine restriction, not a technicality: $U$ has a branch cut along the negative real axis, and (IU) is the representation of its principal branch.
- **The confluence limit needs $a$, $c$, $z$ held fixed.** If $c$ were allowed to grow with $b$ the limiting equation would be different (Hassani's point: a careless limit collapses the equation to the elementary $\ddot w + (\gamma/t)\dot w = 0$). Interchanging the limit with the sum in part 2 of the proof is justified termwise for each fixed $n$, and the resulting series converges everywhere — but this is a statement about formal coefficients made rigorous by the entirety of the limit function, not a uniform statement about ${}_2F_1$ for finite $b$.
- **Termination needs $a$, not $c$.** $M$ is a polynomial exactly when $a \in\{0,-1,-2,\dots\}$. This is one-sided in a way that matters physically: making $c$ a negative integer does not terminate the series, it destroys it.
:::

:::method[From a radial equation to Kummer's equation]{provenance=adapted src="hassani-2013:§15.5.1, the reduction of the hydrogen-like radial equation, pp. 480–481, and §15.5.2, the Bessel reduction, pp. 482–483; arfken-2013:§18.6, the alternate form (18.143) and the list of representations, pp. 918–919"}
Given a second-order equation on $(0,\infty)$ with a regular singular point at the origin and an irregular one at infinity — which covers nearly every radial Schrödinger equation:

1. **Clear the first derivative if necessary** and bring the equation to the normal form
   $$
   u'' + \left(\lambda + \frac{A}{r} - \frac{B}{r^{2}}\right)u = 0 ,
   $$
   where $u = rR(r)$ for a three-dimensional radial function $R$ and $B$ is typically $\ell(\ell+1)$.
2. **Rescale so that the constant is $\pm\tfrac14$.** Put $r = kz$ and choose $k$ with $\lambda k^2=-\tfrac14$ for a bound state ($\lambda<0$). The equation becomes $u''+(-\tfrac14+\alpha/z-B/z^2)u=0$ with $\alpha = A k$.
3. **Peel off both asymptotic behaviours.** Write $u(z) = z^{\mu}\mathrm{e}^{-\nu z}f(z)$ and fix the two exponents by the two conditions
   $$
   \nu^2 = \tfrac14 , \qquad \mu(\mu-1) = B ,
   $$
   choosing the signs by the physics: $\nu=+\tfrac12$ so that $u\to0$ at infinity, and $\mu = \ell+1$ (not $-\ell$) so that $u$ is finite at the origin.
4. **Read off the parameters.** What remains is
   $$
   z f'' + \bigl(2\mu-z\bigr)f' - (\mu-\alpha)f = 0 ,
   $$
   which is (K) with $c = 2\mu$ and $a = \mu-\alpha$, so $f = M(\mu-\alpha,\,2\mu,\,z)$ for the solution regular at the origin.
5. **Impose the condition at infinity.** $\mathrm{e}^{-z/2}M(a,c,z)$ blows up unless the series terminates, because $M(a,c,z)$ grows like $\mathrm{e}^{z}z^{a-c}$. So demand
   $$
   a = -N, \qquad N = 0,1,2,\dots ,
   $$
   which is the quantization condition. Translating it back through steps 2–4 gives the spectrum, and $f$ is then a polynomial — in the Coulomb case, an associated Laguerre polynomial.

**Note on step 5.** The growth of $M$ at infinity is the one fact in this recipe that the series does not show directly; it is read from the integral representation (IM), whose integrand is dominated near $t=1$ by $\mathrm{e}^{x}$. Arfken, Weber and Harris and Riley, Hobson and Bence both state the behaviour without proof, and Hassani argues it by comparing the tail coefficients of $M$ with those of $\mathrm{e}^{z}$. If instead the physical boundary condition selects decay at infinity *without* a condition at the origin, the right solution is $U$, whose own integral representation (IU) makes the decay $x^{-a}$ visible at once.
:::

:::example[Two reductions checked to the last digit]{provenance=original}
**(a) A Laguerre polynomial.** Take $a=-3$, $c=1$. The series terminates after four terms, and with $(1)_n = n!$,
$$
M(-3,1,x) = \sum_{n=0}^{3}\frac{(-3)_n}{n!}\frac{x^n}{n!}
= 1 + \frac{-3}{1}x + \frac{6}{2}\frac{x^2}{2} + \frac{-6}{6}\frac{x^3}{6}
= 1-3x+\frac{3x^2}{2}-\frac{x^3}{6} ,
$$
which is $L_3(x)$. Check the claim that this solves Kummer's equation with these parameters. With $y=L_3$, $y'=-3+3x-\tfrac{x^2}{2}$ and $y''=3-x$,
$$
x(3-x)+(1-x)\!\left(-3+3x-\tfrac{x^2}{2}\right)+3\!\left(1-3x+\tfrac{3x^2}{2}-\tfrac{x^3}{6}\right)
$$
$$
= \left(3x-x^2\right)+\left(-3+6x-\tfrac{7x^2}{2}+\tfrac{x^3}{2}\right)+\left(3-9x+\tfrac{9x^2}{2}-\tfrac{x^3}{2}\right) = 0 ,
$$
term by term: the constants give $-3+3=0$, the $x$ terms $3+6-9=0$, the $x^2$ terms $-1-\tfrac72+\tfrac92=0$, the $x^3$ terms $\tfrac12-\tfrac12=0$. A checkable number: at $x=2$,
$$
L_3(2) = 1-6+6-\tfrac{8}{6} = -\tfrac13 = -0.333333\ldots
$$

**(b) A Bessel function in closed form.** Take $\nu=\tfrac12$ in the representation of part 5, so $a=\nu+\tfrac12=1$ and $c=2\nu+1=2$. First evaluate $M(1,2,w)$ exactly: since $(1)_n=n!$ and $(2)_n=(n+1)!$,
$$
M(1,2,w) = \sum_{n\ge0}\frac{n!}{(n+1)!}\frac{w^n}{n!} = \sum_{n\ge0}\frac{w^n}{(n+1)!} = \frac{\mathrm{e}^{w}-1}{w} .
$$
Now put $w=2\mathrm{i}x$ and use $\Gamma(\tfrac32)=\tfrac{\sqrt\pi}{2}$:
$$
J_{1/2}(x) = \frac{\mathrm{e}^{-\mathrm{i}x}}{\Gamma(3/2)}\left(\frac{x}{2}\right)^{1/2}\frac{\mathrm{e}^{2\mathrm{i}x}-1}{2\mathrm{i}x}
= \frac{2}{\sqrt{\pi}}\sqrt{\frac{x}{2}}\cdot\frac{\mathrm{e}^{\mathrm{i}x}-\mathrm{e}^{-\mathrm{i}x}}{2\mathrm{i}x}
= \frac{2}{\sqrt{\pi}}\cdot\frac{1}{\sqrt{2x}}\cdot\frac{\sin x}{1}\cdot\frac{\sqrt{x}\sqrt{x}}{x} ,
$$
and simplifying the powers of $x$,
$$
J_{1/2}(x) = \sqrt{\frac{2}{\pi x}}\,\sin x ,
$$
the familiar closed form. A checkable number at $x=1.3$:
$$
\sqrt{\frac{2}{\pi(1.3)}} = \sqrt{0.489707\ldots} = 0.699791\ldots, \qquad \sin(1.3)=0.963558\ldots,
$$
$$
J_{1/2}(1.3) = 0.699791\times0.963558 = 0.674289\ldots
$$
and high-precision evaluation of the Bessel function gives $J_{1/2}(1.3) = 0.6742893968$, agreeing to every digit shown. The identity $M(1,2,w)=(\mathrm{e}^w-1)/w$ was checked numerically as well, at $w=0.7$: both sides equal $1.4482181535$.
:::

:::application{provenance=original}
**The hydrogen spectrum.** The radial Schrödinger equation for a charge $Z$ with $V(r)=-Ze^2/r$, written for $u=rR$, is exactly the normal form of step 1 of the method, with $\lambda=2E<0$, $A = 2Ze^2$ and $B=\ell(\ell+1)$ in the units $\hbar=m=1$. Steps 2–4 then produce $f = M(\ell+1-\alpha,\,2\ell+2,\,z)$ with $\alpha = A/(2\sqrt{-\lambda})$, and step 5 gives the quantization condition $\ell+1-\alpha = -N$ with $N\ge0$ an integer. Writing $n = N+\ell+1$ and restoring units, this is
$$
E_n = -\frac{Z^2 m e^4}{2\hbar^2 n^2} ,
$$
the Bohr spectrum, with $f$ an associated Laguerre polynomial and $R_{n\ell}(r)\propto r^{\ell}\mathrm{e}^{-Zr/na_0}M(-n+\ell+1,\,2\ell+2,\,2Zr/na_0)$. This is Hassani's derivation, and what it shows is that the integer $n$ is not put in by hand anywhere: it is forced by the single requirement that an entire function of the form $\mathrm{e}^{-z/2}M$ stay bounded, i.e. that the Kummer series terminate. The accidental $\ell$-independence of $E_n$ — the degeneracy peculiar to the Coulomb potential — appears as the fact that $\alpha$, and hence the energy, depends on $N$ and $\ell$ only through their sum.

**Coulomb scattering and the Gamow factor.** Above threshold the same equation has $\lambda>0$ and no termination, and the physically relevant solutions are the regular and irregular Coulomb wave functions $F_\ell$ and $G_\ell$, both built from $M$ and $U$ with imaginary arguments. The near-threshold penetration factor $\lvert M \rvert^2$ at the origin evaluates to the Gamow factor $2\pi\eta/(\mathrm{e}^{2\pi\eta}-1)$, which sets the rate of every charged-particle fusion reaction in a star. It is the Gamma functions in $U$ — the same ones that appear in the definition above — that supply the exponential.

**Three-dimensional harmonic trap, and why $U$ matters.** For $V=\tfrac12m\omega^2r^2$ the same recipe gives $M(-N,\ell+\tfrac32,m\omega r^2/\hbar)$, so the eigenfunctions are Laguerre polynomials in $r^2$ and the spectrum is $(2N+\ell+\tfrac32)\hbar\omega$. But if the trap is cut off, or the problem is posed on the exterior of a sphere with only a decay condition at infinity, there is no condition at the origin to prefer $M$, and the correct solution is $U$. Its algebraic decay $x^{-a}$, read straight off (IU), is then the statement that the wavefunction leaks out with a power-law tail rather than a Gaussian one.

**Everyday special functions.** The last two reductions in part 5 are why $\operatorname{erf}$ and the incomplete Gamma function (:ref[]{to=spec.error-function}) need no separate theory: their series, recurrences, asymptotics and continued fractions are the Kummer ones specialised. A numerical library that implements $M$ and $U$ well — typically by series for small $\lvert x\rvert$, (IU) or an asymptotic expansion for large $\lvert x\rvert$, and Kummer's transformation to avoid cancellation when $x<0$ — gets the error function, the incomplete Gamma function, the Coulomb functions, the Laguerre and Hermite polynomials and the modified Bessel functions in the same stroke. The cancellation point is worth stressing: evaluating $M(a,c,x)$ directly for $x$ large and negative subtracts nearly equal terms, and the standard cure is to compute $\mathrm{e}^{x}M(c-a,c,-x)$ instead, which is Kummer's transformation used as a numerical device.
:::
