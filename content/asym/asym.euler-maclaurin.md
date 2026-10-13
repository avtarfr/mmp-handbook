---
id: asym.euler-maclaurin
title: Euler-Maclaurin summation
kind: theorem
level: core
summary: Turns a sum over integers into an integral plus a short, explicitly bounded series of boundary derivative terms built from the Bernoulli numbers, so that a slowly convergent series can be evaluated to eight figures from a handful of terms.
prereqs: [found.taylor-theorem, found.series-convergence-tests, asym.asymptotic-series, fourier.fourier-series]
provenance: adapted
sources:
  - work: arfken-2013
    loc: "§12.2 Bernoulli numbers, pp. 560-566: the generating function $t/(e^t-1)=\\sum B_nt^n/n!$, Eq. (12.28), and the values $B_0=1$, $B_1=-1/2$ (12.29)-(12.30); the parity argument (12.31)-(12.32) giving $B_{2n+1}=0$ for $n\\ge1$; the radius of convergence $2\\pi$ (p. 562); the closed form $B_{2n}=(-1)^{n+1}2(2n)!\\zeta(2n)/(2\\pi)^{2n}$, Eq. (12.38), and Table 12.2; the generating function $te^{st}/(e^t-1)=\\sum B_n(s)t^n/n!$ for the Bernoulli polynomials, Eq. (12.42), Table 12.3, and the two properties used below, $B_n'(s)=nB_{n-1}(s)$ (12.45) and $B_n(1)=(-1)^nB_n(0)$ (12.47). §12.3 Euler-Maclaurin integration formula, pp. 567-570: the derivation by repeated integration by parts, Eqs. (12.48)-(12.55); the one-interval formula (12.56); the shifted and summed form over $[0,n]$, Eq. (12.57), with the remark that the sum over $p$ corrects the trapezoidal rule; the observation (p. 569) that the final integral usually does not vanish as $q$ grows, so the formula is asymptotic rather than convergent; Example 12.3.1 and Table 12.4, pp. 569-570, where $\\zeta(3)$ is computed and the accuracy is improved by evaluating the first few terms explicitly and applying the formula only to the tail"
    pages: "560-570"
    role: the definition of the Bernoulli numbers and polynomials and the three properties the proof uses; the route to the formula (repeated integration by parts, raising the index with $B_n'=nB_{n-1}$); the summed form of the formula; the closed form of $B_{2n}$ in terms of $\zeta(2n)$ used to bound the remainder; the asymptotic rather than convergent character of the expansion; the stratagem of applying the formula only to the tail of a series
  - work: stein-shakarchi-2003
    loc: "Ch. 3, Problem 5, pp. 98-99: the Bernoulli polynomials defined by $ze^{xz}/(e^z-1)=\\sum B_n(x)z^n/n!$; the expansion $B_n(x)=\\sum_k\\binom{n}{k}B_kx^{n-k}$ and the first four polynomials; the difference equation $B_n(x+1)-B_n(x)=nx^{n-1}$ and the consequence $B_n(0)=B_n(1)=B_n$ for $n\\ge2$; and the characterisation of the family by $B_0=1$, $B_n'(x)=nB_{n-1}(x)$ and $\\int_0^1B_n(x)dx=0$ for $n\\ge1$"
    pages: "98-99"
    role: the characterisation of the Bernoulli polynomials by the three conditions, which is the form the proof actually uses; the vanishing of $\int_0^1 B_n$ for $n\ge1$; the equality $B_n(0)=B_n(1)$ for $n\ge2$ stated directly rather than deduced from a parity relation
  - work: ahlfors-1979
    loc: "Ch. 5, §1.3, Exercise 4, p. 186: the Laurent development of $(e^z-1)^{-1}$ at the origin is written $z^{-1}-\\tfrac12+\\sum_{k\\ge1}(-1)^{k-1}B_kz^{2k-1}/(2k)!$, the numbers $B_k$ so defined being all positive"
    pages: "186"
    role: the competing indexing and sign convention for the Bernoulli numbers, recorded so that formulas taken from different books are not combined by accident
---

:::definition[Bernoulli numbers and Bernoulli polynomials]{provenance=adapted src="arfken-2013:§12.2, Eqs. (12.28), (12.42), (12.45), (12.47), pp. 560-566; stein-shakarchi-2003:Ch. 3, Problem 5, pp. 98-99"}
The **Bernoulli numbers** $B_n$ and **Bernoulli polynomials** $B_n(x)$ are the coefficients in the two generating functions
$$
\frac{t}{e^{t}-1} \;=\; \sum_{n=0}^{\infty} B_n\,\frac{t^{n}}{n!} ,
\qquad
\frac{t\,e^{xt}}{e^{t}-1} \;=\; \sum_{n=0}^{\infty} B_n(x)\,\frac{t^{n}}{n!} ,
$$
both valid for $0 < |t| < 2\pi$, the radius of convergence being set by the zeros of $e^{t}-1$ nearest the origin at $t = \pm 2\pi i$. Setting $x = 0$ in the second gives $B_n(0) = B_n$. The first few are
$$
B_0 = 1,\quad B_1 = -\tfrac12,\quad B_2 = \tfrac16,\quad B_4 = -\tfrac1{30},\quad B_6 = \tfrac1{42},\quad B_8 = -\tfrac1{30},\quad B_{10} = \tfrac5{66},
$$
$$
B_0(x) = 1,\quad B_1(x) = x - \tfrac12,\quad B_2(x) = x^{2} - x + \tfrac16,\quad B_3(x) = x^{3} - \tfrac32x^{2} + \tfrac12 x .
$$

Three properties are all the proof below needs. Stein and Shakarchi show that they characterise the family.

- **(B1) Derivative.** $B_n'(x) = n\,B_{n-1}(x)$ for $n \ge 1$.
- **(B2) Endpoints.** $B_n(1) = (-1)^{n}B_n(0)$; hence $B_n(1) = B_n(0) = B_n$ for every even $n$, and $B_n(1) = B_n(0) = B_n = 0$ for every odd $n \ge 3$. The exception is $n = 1$: $B_1(0) = -\tfrac12$ and $B_1(1) = +\tfrac12$.
- **(B3) Mean zero.** $\int_0^{1}B_n(x)\,dx = 0$ for $n \ge 1$. This follows from (B1) and (B2): the integral equals $\bigl(B_{n+1}(1)-B_{n+1}(0)\bigr)/(n+1)$, and $n + 1 \ge 2$.

For (B1), differentiate the second generating function with respect to $x$: the left side becomes $t$ times itself, which shifts the index by one. For (B2), replace $t$ by $-t$ in the first generating function and use $-t/(e^{-t}-1) = t e^{t}/(e^{t}-1)$, which is the second one at $x = 1$.

**A warning about conventions.** Ahlfors writes the Laurent development of $(e^{z}-1)^{-1}$ with coefficients $B_k$ that are all positive and carry half our index: his $B_k$ is $(-1)^{k-1}$ times our $B_{2k}$ :cite[]{work=ahlfors-1979 loc="Ch. 5, §1.3, Ex. 4, p. 186"}. Arfken notes that a third convention, $B_n = 2(2n)!\zeta(2n)/(2\pi)^{2n}$ with halved index and all signs positive, is also in use :cite[]{work=arfken-2013 loc="Eq. (12.39), p. 564"}. Everything in this handbook uses the convention displayed above, in which $B_1 = -1/2$ and the signs of $B_{2n}$ alternate. Formulas lifted from a book must be checked against its own definition before being combined with ours. The arithmetic properties of these numbers, and the closed form of $\zeta(2n)$ they produce, are collected in :ref[]{to=spec.zeta-bernoulli}.
:::

:::definition[The periodic Bernoulli functions]{provenance=original}
For $k \ge 1$ let
$$
\widetilde B_k(x) \;=\; B_k\bigl(x - \lfloor x \rfloor\bigr) \qquad (x \in \mathbb{R}) ,
$$
the $1$-periodic extension of $B_k$ restricted to $[0,1)$. By (B2), $B_k(1) = B_k(0)$ for every $k \ge 2$, so $\widetilde B_k$ is continuous for $k \ge 2$; $\widetilde B_1$ is the sawtooth $x - \lfloor x\rfloor - \tfrac12$, which jumps at the integers. On $[0,1)$ we have $\widetilde B_k = B_k$, so $\widetilde B_k(m) = B_k$ at every integer $m$.
:::

:::statement[Euler-Maclaurin summation formula]{provenance=adapted src="arfken-2013:§12.3, Eqs. (12.56)-(12.57), pp. 568-569"}
Let $a < b$ be integers, let $q \ge 1$, and let $f \in C^{2q}\bigl([a,b]\bigr)$. Then
$$
\sum_{j=a}^{b} f(j)
\;=\;
\int_a^{b} f(x)\,dx
\;+\; \frac{f(a)+f(b)}{2}
\;+\; \sum_{p=1}^{q} \frac{B_{2p}}{(2p)!}\Bigl[f^{(2p-1)}(b) - f^{(2p-1)}(a)\Bigr]
\;+\; R_q ,
$$
with the remainder given exactly by
$$
R_q \;=\; -\frac{1}{(2q)!}\int_a^{b} \widetilde B_{2q}(x)\,f^{(2q)}(x)\,dx
\qquad\text{and}\qquad
|R_q| \;\le\; \frac{|B_{2q}|}{(2q)!}\int_a^{b}\bigl|f^{(2q)}(x)\bigr|\,dx .
$$
Only even-index Bernoulli numbers occur: the odd ones from $B_3$ on vanish, and the single surviving odd term, from $B_1$, is the $\tfrac12\bigl(f(a)+f(b)\bigr)$ written separately.

**Half-open form.** If $f \in C^{2q}\bigl([a,\infty)\bigr)$, if $\int_a^{\infty}f$ and $\int_a^{\infty}|f^{(2q)}|$ converge, and if $f(x) \to 0$ and $f^{(2p-1)}(x) \to 0$ as $x \to \infty$ for $p = 1,\dots,q$, then letting $b \to \infty$ gives
$$
\sum_{j=a}^{\infty} f(j)
\;=\;
\int_a^{\infty} f(x)\,dx \;+\; \frac{f(a)}{2}
\;-\; \sum_{p=1}^{q} \frac{B_{2p}}{(2p)!}\,f^{(2p-1)}(a) \;+\; R_q ,
\qquad
|R_q| \le \frac{|B_{2q}|}{(2q)!}\int_a^{\infty}\bigl|f^{(2q)}\bigr| .
$$

Arfken writes the formula the other way round, as the integral over $[0,n]$ expressed through the trapezoidal sum, and reads the $p$-sum as the correction to the trapezoidal rule. The two arrangements differ only by moving terms across the equals sign.
:::

:::idea{provenance=original}
Integrating by parts turns $\int_0^1 f$ into boundary values minus $\int_0^1 f'$ — and the freedom in choosing the antiderivative of $1$ is exactly where the Bernoulli polynomials come in. Take the antiderivative $B_1(x) = x - \tfrac12$, chosen to be odd about the midpoint; its boundary values $\mp\tfrac12$ assemble the trapezoidal average $\tfrac12(f(0)+f(1))$. Repeat: $B_1$ has antiderivative $B_2/2$, whose boundary values are *equal* by (B2), so the boundary term collapses to $B_2\bigl[f'(1)-f'(0)\bigr]/2$. Repeat again: $B_2$ has antiderivative $B_3/3$, which *vanishes* at both ends, so that step produces no boundary term at all. That alternation — one boundary term, then none, then one, then none — is why only even-index Bernoulli numbers appear, and it lets the two steps be bundled into a single induction from $q$ to $q+1$. Finally, the one-interval identity is applied to each of $[a,a+1], \dots, [b-1,b]$ and the results added: the half-weights at interior nodes combine into full weights, the derivative terms telescope to the two endpoints, and the leftover integrals glue into one integral against the periodised Bernoulli function.
:::

:::proof{provenance=adapted src="arfken-2013:§12.3, Eqs. (12.48)-(12.57), pp. 567-569"}
**Step 1 (the unit interval, $q = 1$).** Let $g \in C^{2}([0,1])$. Since $B_1' = B_0 = 1$ by (B1),
$$
\int_0^{1} g \;=\; \int_0^{1} g\,B_1' \;=\; \bigl[g B_1\bigr]_0^{1} - \int_0^{1} g'B_1
\;=\; \tfrac12\bigl(g(0)+g(1)\bigr) - \int_0^{1} g'B_1 ,
$$
using $B_1(1) = \tfrac12$, $B_1(0) = -\tfrac12$ from (B2). Now $B_1 = B_2'/2$ by (B1), and $B_2(1) = B_2(0) = B_2$ by (B2), so
$$
\int_0^{1} g'B_1 \;=\; \tfrac12\int_0^{1} g'B_2' \;=\; \tfrac12 B_2\bigl[g'(1)-g'(0)\bigr] - \tfrac12\int_0^{1}g''B_2 .
$$
Combining,
$$
\int_0^{1} g \;=\; \tfrac12\bigl(g(0)+g(1)\bigr) - \frac{B_2}{2!}\bigl[g'(1)-g'(0)\bigr] + \frac{1}{2!}\int_0^{1}B_2\,g'' . \tag{$\ast_1$}
$$

**Step 2 (induction on $q$).** Suppose that for some $q \ge 1$ and all $g \in C^{2q}([0,1])$
$$
\int_0^{1} g \;=\; \tfrac12\bigl(g(0)+g(1)\bigr) - \sum_{p=1}^{q}\frac{B_{2p}}{(2p)!}\bigl[g^{(2p-1)}(1)-g^{(2p-1)}(0)\bigr] + \frac{1}{(2q)!}\int_0^{1}B_{2q}\,g^{(2q)} . \tag{$\ast_q$}
$$
Let $g \in C^{2q+2}([0,1])$ and transform the last integral in two integrations by parts. First, $B_{2q} = B_{2q+1}'/(2q+1)$ by (B1), and $B_{2q+1}(1) = B_{2q+1}(0) = 0$ by (B2) because $2q+1 \ge 3$ is odd; so the boundary term vanishes and
$$
\frac{1}{(2q)!}\int_0^{1}B_{2q}g^{(2q)} \;=\; \frac{1}{(2q+1)!}\int_0^{1}B_{2q+1}'\,g^{(2q)} \;=\; -\frac{1}{(2q+1)!}\int_0^{1}B_{2q+1}\,g^{(2q+1)} .
$$
Second, $B_{2q+1} = B_{2q+2}'/(2q+2)$ by (B1), and now $B_{2q+2}(1) = B_{2q+2}(0) = B_{2q+2}$ by (B2) because the index is even; so
$$
-\frac{1}{(2q+1)!}\int_0^{1}B_{2q+1}g^{(2q+1)}
= -\frac{B_{2q+2}}{(2q+2)!}\bigl[g^{(2q+1)}(1)-g^{(2q+1)}(0)\bigr] + \frac{1}{(2q+2)!}\int_0^{1}B_{2q+2}\,g^{(2q+2)} .
$$
Substituting into $(\ast_q)$ gives $(\ast_{q+1})$. With $(\ast_1)$ from Step 1, $(\ast_q)$ holds for every $q \ge 1$.

**Step 3 (add the intervals).** Fix $q$ and $f \in C^{2q}([a,b])$. For each integer $\nu$ with $a \le \nu \le b-1$ apply $(\ast_q)$ to $g(x) = f(x+\nu)$, whose derivatives are $g^{(k)}(x) = f^{(k)}(x+\nu)$, and sum over $\nu$:

- $\sum_{\nu} \int_0^{1} f(x+\nu)\,dx = \int_a^{b} f$, by the change of variable $x \mapsto x - \nu$ on each piece.
- $\sum_{\nu} \tfrac12\bigl(f(\nu)+f(\nu+1)\bigr) = \sum_{j=a}^{b}f(j) - \tfrac12\bigl(f(a)+f(b)\bigr)$: each interior node is counted with weight $\tfrac12$ twice, the two end nodes once.
- $\sum_{\nu}\bigl[f^{(2p-1)}(\nu+1)-f^{(2p-1)}(\nu)\bigr] = f^{(2p-1)}(b)-f^{(2p-1)}(a)$, a telescoping sum.
- $\sum_{\nu}\int_0^{1}B_{2q}(x)f^{(2q)}(x+\nu)\,dx = \int_a^{b}\widetilde B_{2q}(x)f^{(2q)}(x)\,dx$, because on $[\nu,\nu+1)$ the periodised function $\widetilde B_{2q}$ is $B_{2q}(x-\nu)$.

The result is
$$
\int_a^{b}f \;=\; \sum_{j=a}^{b}f(j) - \tfrac12\bigl(f(a)+f(b)\bigr) - \sum_{p=1}^{q}\frac{B_{2p}}{(2p)!}\bigl[f^{(2p-1)}(b)-f^{(2p-1)}(a)\bigr] + \frac{1}{(2q)!}\int_a^{b}\widetilde B_{2q}f^{(2q)} ,
$$
and solving for $\sum_{j=a}^{b}f(j)$ is the statement, with $R_q = -\frac{1}{(2q)!}\int_a^{b}\widetilde B_{2q}f^{(2q)}$.

**Step 4 (the bound).** By the note below, $|\widetilde B_{2q}(x)| \le |B_{2q}|$ for all $x$. Hence
$$
|R_q| \;\le\; \frac{1}{(2q)!}\int_a^{b}\bigl|\widetilde B_{2q}(x)\bigr|\,\bigl|f^{(2q)}(x)\bigr|\,dx \;\le\; \frac{|B_{2q}|}{(2q)!}\int_a^{b}\bigl|f^{(2q)}\bigr| .
$$

**Step 5 (the half-open form).** Let $b \to \infty$ through the integers. The three limits assumed in the statement dispose of $f(b)$ and of $f^{(2p-1)}(b)$, the integral $\int_a^b f$ converges by assumption, and the remainder converges because $\int_a^{\infty}|f^{(2q)}|$ does, with the same bound. $\square$
:::

:::note[Why $|\widetilde B_{2q}| \le |B_{2q}|$]{provenance=original}
Let $k \ge 1$ and let $c_j = \int_0^{1}B_k(x)e^{-2\pi ijx}dx$ be the Fourier coefficients of the $1$-periodic function $\widetilde B_k$ (see :ref[]{to=fourier.fourier-series}). By (B3), $c_0 = 0$. For $k = 1$, integration by parts gives
$$
c_j \;=\; \int_0^{1}\bigl(x-\tfrac12\bigr)e^{-2\pi ijx}dx \;=\; -\frac{1}{2\pi i j} \qquad (j \neq 0) .
$$
For $k \ge 2$, integrating by parts and using $B_k' = kB_{k-1}$ together with $B_k(1) = B_k(0)$ kills the boundary term and leaves $c_j(B_k) = \frac{k}{2\pi i j}\,c_j(B_{k-1})$. By induction,
$$
c_j(B_k) \;=\; -\frac{k!}{(2\pi i j)^{k}} \qquad (j \neq 0,\ k \ge 1) .
$$
For $k \ge 2$ these coefficients are $O(|j|^{-2})$, so the Fourier series converges absolutely and uniformly; its sum is continuous and has the same coefficients as the continuous function $\widetilde B_k$, so the two agree:
$$
\widetilde B_k(x) \;=\; -k!\sum_{j \neq 0}\frac{e^{2\pi ijx}}{(2\pi ij)^{k}} \qquad (k \ge 2) .
$$
Taking absolute values with $k = 2q$ and using $|(2\pi ij)^{2q}| = (2\pi|j|)^{2q}$,
$$
\bigl|\widetilde B_{2q}(x)\bigr| \;\le\; \frac{(2q)!}{(2\pi)^{2q}}\sum_{j\neq0}\frac{1}{|j|^{2q}} \;=\; \frac{2\,(2q)!\,\zeta(2q)}{(2\pi)^{2q}} \;=\; \bigl|B_{2q}\bigr| ,
$$
the last equality being Arfken's closed form $B_{2q} = (-1)^{q+1}2(2q)!\zeta(2q)/(2\pi)^{2q}$ :cite[]{work=arfken-2013 loc="Eq. (12.38), p. 564"}. The bound is attained at $x = 0$, where $\widetilde B_{2q} = B_{2q}$, so it is sharp.
:::

:::remark[Where the hypotheses are used, and why the formula is asymptotic]{provenance=original}
- **Integer endpoints.** Step 3 adds whole unit intervals. With non-integer $a$ or $b$ the telescoping fails and extra fractional-interval terms appear; the formula as stated is simply false, as $f \equiv 1$ on $[0, \tfrac12]$ already shows.
- **$f \in C^{2q}$, and nothing more.** The proof integrates by parts $2q$ times and never differentiates beyond that order, so $2q$ continuous derivatives is exactly what is needed for the formula *at that $q$*. A function with few derivatives still gets a valid formula at small $q$.
- **The bound needs $f^{(2q)}$ integrable, not small.** No smallness of the derivatives is assumed anywhere; the quality of the result is decided afterwards, by how large $\int|f^{(2q)}|$ turns out to be.
- **Increasing $q$ usually makes things worse eventually.** Nothing in the theorem says $R_q \to 0$ as $q \to \infty$ at fixed $a,b,f$, and Arfken records that in applications the remainder integral, though small, generally does not tend to zero :cite[]{work=arfken-2013 loc="p. 569"}. The reason is visible in the bound: $|B_{2q}|/(2q)! = 2\zeta(2q)/(2\pi)^{2q}$ shrinks like $(2\pi)^{-2q}$, but $\int|f^{(2q)}|$ normally grows faster, like $(2q)!$ divided by a fixed power. The $q$-expansion is therefore an :ref[asymptotic series]{to=asym.asymptotic-series} in the strict sense, and the optimal-truncation rule of that unit applies: stop at the smallest correction term.
- **When it is exact.** If $f$ is a polynomial of degree $d$, then $f^{(2q)} \equiv 0$ for $2q > d$ and the formula is an identity with no remainder. Taking $f(x) = x^{2}$, $a = 0$, $b = N$, $q = 1$ gives $\sum_{j=0}^{N}j^{2} = N^{3}/3 + N^{2}/2 + N/6$, which is $N(N+1)(2N+1)/6$: the classical closed forms for power sums are the degenerate case.
- **What goes wrong with a rapidly oscillating summand.** Take $f(x) = \cos(\omega x)$ on $[a,b]$. Then $|f^{(2p-1)}| \le \omega^{2p-1}$ and $|B_{2p}|/(2p)! = 2\zeta(2p)/(2\pi)^{2p}$, so a correction term is of size at most $(2/\omega)(\omega/2\pi)^{2p}$ and the remainder bound is of size $(b-a)\,\omega\,(\omega/2\pi)^{2q}$ at worst. For $\omega < 2\pi$ both shrink geometrically and the formula is excellent; for $\omega > 2\pi$ both *grow* with $p$ and $q$ from the first term on, and no truncation is useful. The threshold $\omega = 2\pi$ is exactly the radius of convergence of the generating function that defines the $B_n$, and it is the statement that the summand must be resolved by the integer grid: one sample per period is not enough. Euler-Maclaurin is a tool for summands that vary slowly from one integer to the next.
:::

:::method[Summing a slowly convergent series]{provenance=adapted src="arfken-2013:§12.3, Example 12.3.1 and Table 12.4, pp. 569-570"}
To evaluate $S = \sum_{n=1}^{\infty} f(n)$ for a smooth, eventually monotone $f$ decaying too slowly for direct summation:

1. **Split the series.** Choose a cut $N$ and write $S = \sum_{n=1}^{N-1}f(n) + \sum_{n=N}^{\infty}f(n)$. The first part is evaluated exactly, term by term.
2. **Check the limits.** Confirm that $\int_N^{\infty}f$ converges and that $f$ and the odd derivatives $f',f''',\dots,f^{(2q-1)}$ tend to $0$ at infinity, so the half-open form applies.
3. **Apply the formula to the tail only.** Add $\int_N^{\infty}f + \tfrac12 f(N)$ and then the corrections $-B_{2p}f^{(2p-1)}(N)/(2p)!$ for $p = 1,2,\dots$
4. **Bound the error before deciding where to stop.** Compute $\frac{|B_{2q}|}{(2q)!}\int_N^{\infty}|f^{(2q)}|$. If $f^{(2q)}$ has constant sign on $[N,\infty)$ — the usual case for a monotone decaying $f$ — this integral is just $|f^{(2q-1)}(N)|$, so the bound equals the magnitude of the last correction term retained. The error is then never worse than the last term kept.
5. **Choose $N$ and $q$ together.** Raising $N$ costs one evaluation of $f$ per step and shrinks every correction; raising $q$ costs one derivative and helps only while the terms are still falling. Arfken's table makes the first point vividly: moving the cut from $N = 1$ to $N = 4$ took his estimate of $\zeta(3)$ from $1.1667$ to $1.202057$ against a true value of $1.202057$, that is from one correct figure to seven.
6. **Stop when the terms stop falling.** The corrections form an asymptotic series in $1/N$; truncate at the smallest one, as in :ref[]{to=asym.asymptotic-series}.
:::

:::example[$\zeta(3/2)$ to eight figures from four terms and three corrections]{provenance=original}
The series $\sum_{n\ge1}n^{-3/2}$ converges, but hopelessly slowly: its tail beyond $N$ is about $2N^{-1/2}$, so eight-figure accuracy by direct summation would need some $4\times10^{16}$ terms. Euler-Maclaurin does it with seven numbers.

**Set-up.** Take $f(x) = x^{-s}$ with $s = \tfrac32$, and cut at $N = 5$. All the derivatives are available in closed form:
$$
f^{(k)}(x) \;=\; (-1)^{k}\,(s)_k\,x^{-s-k} , \qquad (s)_k := s(s+1)\cdots(s+k-1) ,
$$
so $f$ and every derivative tend to $0$ at infinity and $\int_5^{\infty}x^{-3/2}dx = 2\cdot5^{-1/2}$ converges: step 2 of the method is satisfied for every $q$. The half-open formula gives, for the tail,
$$
\sum_{n=5}^{\infty} n^{-s}
\;=\; \frac{N^{1-s}}{s-1} \;+\; \frac{N^{-s}}{2} \;+\; \sum_{p=1}^{q}\frac{B_{2p}}{(2p)!}\,(s)_{2p-1}\,N^{-s-2p+1} \;+\; R_q ,
$$
the sign of the correction terms having flipped because $f^{(2p-1)}(N) = -(s)_{2p-1}N^{-s-2p+1}$ is negative.

**The error bound.** Since $f^{(2q)}(x) = (s)_{2q}x^{-s-2q} > 0$ keeps one sign,
$$
\int_N^{\infty}\bigl|f^{(2q)}\bigr| \;=\; \frac{(s)_{2q}}{s+2q-1}\,N^{-s-2q+1} \;=\; (s)_{2q-1}N^{-s-2q+1} ,
$$
so $|R_q| \le \frac{|B_{2q}|}{(2q)!}(s)_{2q-1}N^{-s-2q+1}$, which is exactly the magnitude of the $p = q$ correction term. This is the situation described in step 4: **the error is bounded by the last term kept.**

**The arithmetic.** With $s = 3/2$, $N = 5$, and $B_2 = 1/6$, $B_4 = -1/30$, $B_6 = 1/42$:

| contribution | value |
|---|---|
| $\sum_{n=1}^{4} n^{-3/2}$ | $1.67100348032$ |
| $\int_5^{\infty}x^{-3/2}dx = 2/\sqrt5$ | $0.89442719100$ |
| $\tfrac12\cdot 5^{-3/2}$ | $0.04472135955$ |
| $p=1$: $\dfrac{B_2}{2!}\,s\,5^{-5/2} = \dfrac{s}{12\cdot 5^{5/2}}$ | $+0.00223606798$ |
| $p=2$: $-\dfrac{(s)_3}{720\cdot 5^{9/2}}$ | $-0.00001304373$ |
| $p=3$: $+\dfrac{(s)_5}{30240\cdot 5^{13/2}}$ | $+0.00000030746$ |

Running totals: after the first three rows, $2.61015203087$; after $p=1$, $2.61238809885$; after $p=2$, $2.61237505512$; after $p=3$,
$$
\zeta(3/2) \;\approx\; 2.61237536258 , \qquad |R_3| \;\le\; 3.1\times10^{-7} .
$$
The true value is $\zeta(3/2) = 2.61237534869$, so the actual error is $+1.4\times10^{-8}$, comfortably inside the guaranteed bound and about an order of magnitude better than it. The corrections are still falling at $p = 3$ — the ratio of successive ones is about $1/40$ here — so a fourth would help; that is the optimal-truncation test of step 6, applied in the direction of "keep going".

**Reading the table.** The whole calculation used four exact terms of the series, one elementary integral, and three derivative corrections at the single point $x = 5$. Against $4\times10^{16}$ terms of direct summation, that is the point of the formula.
:::

:::application[Bose-Einstein condensation, lattice sums and Romberg extrapolation]{provenance=original}
**The condensation temperature of an ideal Bose gas.** For a non-interacting gas of bosons of mass $m$ in a box, the number of particles in excited states at temperature $T$ and zero chemical potential is obtained by summing the Bose occupation numbers over momentum states. Replacing the sum by an integral — the leading Euler-Maclaurin term, legitimate because the level spacing is tiny compared with $k_BT$ — gives the density
$$
n_{\text{exc}} \;=\; \frac{g}{\lambda_T^{3}}\,\zeta(3/2) , \qquad \lambda_T = \frac{h}{\sqrt{2\pi m k_B T}} ,
$$
with $g$ the spin degeneracy. The gas cannot hold more than this in excited states, so condensation begins when $n\lambda_T^{3} = g\,\zeta(3/2)$, that is at
$$
T_c \;=\; \frac{2\pi\hbar^{2}}{m k_B}\left(\frac{n}{g\,\zeta(3/2)}\right)^{2/3} .
$$
The number computed in the example is the one that appears here. For spin-polarised ${}^{87}\mathrm{Rb}$ ($m = 1.4432\times10^{-25}\,\mathrm{kg}$, $g = 1$) at a typical trapped density $n = 1\times10^{14}\,\mathrm{cm^{-3}} = 1\times10^{20}\,\mathrm{m^{-3}}$,
$$
T_c \;=\; 3.98\times10^{-7}\,\mathrm{K} \;\approx\; 398\ \mathrm{nK} ,
$$
in the few-hundred-nanokelvin range where these experiments are done. The *corrections* in the example matter too: for a gas in a finite box the discreteness of the levels is exactly the difference between the sum and the integral, and the $\tfrac12 f(N)$ and derivative terms are the leading finite-size shifts of $T_c$.

**Lattice sums.** The same split — exact summation over a core of near neighbours, Euler-Maclaurin for the tail — is the standard way to evaluate slowly convergent lattice sums in solid-state physics, such as Madelung constants and dispersion-energy sums $\sum |\mathbf{R}|^{-6}$ over a Bravais lattice, where direct summation converges far too slowly to be useful.

**Quadrature.** Read in Arfken's direction, the formula says that the trapezoidal rule's error on a smooth integrand is a series in even powers of the step $h$ with coefficients built from boundary derivatives :cite[]{work=arfken-2013 loc="Eq. (12.57), p. 569"}. Two consequences are standard in numerical analysis: the error expansion in $h^{2}$ is what Richardson extrapolation eliminates order by order, giving the Romberg scheme (:ref[]{to=num.quadrature}); and for a *periodic* integrand integrated over a whole period, every boundary derivative term cancels, so the trapezoidal rule converges faster than any power of $h$ — the reason spectral methods use equally spaced quadrature on periodic domains (:ref[]{to=num.spectral-methods}).

**Stirling's series.** Applying the formula to $f(x) = \ln x$ turns $\ln n! = \sum_{j=1}^{n}\ln j$ into $n\ln n - n$ plus boundary terms and an asymptotic series in $1/n$ with Bernoulli coefficients; see :ref[]{to=asym.stirling-formula}, where the constant $\tfrac12\ln(2\pi)$ that Euler-Maclaurin leaves undetermined is pinned down by other means.
:::
