---
id: ode.reduction-of-order
title: Reduction of order
kind: method
level: core
summary: 'One known solution $\varphi_1$ of a linear homogeneous equation, nonvanishing on an interval, lowers the order by one through the substitution $y = u\varphi_1$; for second-order equations this gives the second solution in closed form, $\varphi_2 = \varphi_1\int \varphi_1^{-2}e^{-\int a_1}$, which is Abel''s formula integrated once.'
prereqs: [ode.linear-ode-theory]
provenance: adapted
sources:
  - work: coddington-1989
    loc: "Ch. 3, §5 (reduction of the order of a homogeneous equation), Eq. (5.1), Thm 9, pp. 118-119; Eqs. (5.4)-(5.7) and Thm 10 with its worked example, pp. 120-121"
    pages: "118-121"
    role: the general-order statement (substitution $y = u\varphi_1$ with $v = u'$, and the proof that the resulting functions are a basis), the hypothesis $\varphi_1 \ne 0$ on $I$, and the closed formula for the second solution when $n = 2$
  - work: arfken-2013
    loc: "§7.6, Eqs. (7.59)-(7.68) and Example 7.6.3, pp. 362-363"
    pages: "362-363"
    role: the derivation of the second solution from $W' = -PW$ and $W = y_1^2(y_2/y_1)'$; the normalisation $W(a) = 1$; the simplification when $P = 0$; the remark that the lower limits only add a multiple of the known solution
  - work: hassani-2013
    loc: "§14.4.1, Thm 14.4.4 and Example 14.4.5, pp. 426-427"
    pages: "426-427"
    role: the second-solution formula with both constants displayed and the remark that the constant $C$ merely adds a multiple of $f_1$; the worked second solutions of $y'' - k^2y = 0$ and $y'' + k^2y = 0$
  - work: rhb-2006
    loc: "§16.4.1, The Wronskian method, Eq. (16.25), pp. 544-545; §15.2.3, the substitution $y = uv$ and its worked example, p. 507"
    pages: "507, 544-545"
    role: the same formula derived by dividing the Wronskian by $y_1^2$; the statement that assuming $y_2 = u y_1$ and the Wronskian route give the same thing; the use of the method to supply the missing second Frobenius solution
---

:::note[The problem]{provenance=original}
It is common to find one solution of a linear homogeneous equation by luck, inspection or a series. Reduction of order converts that one solution into a lowering of the order by one — and for a second-order equation, directly into the missing second solution, in closed form. The idea is the same as :ref[variation of parameters]{to=ode.variation-of-parameters}: let a constant become a function. The difference is that here the equation is homogeneous, so instead of a particular solution we gain a smaller homogeneous equation.
:::

:::statement[Reduction of order, general order]{provenance=adapted src="coddington-1989:Ch. 3, §5, Eq. (5.1) and Thm 9, pp. 118-119"}
Let $a_1, \dots, a_n$ be continuous on an interval $I$, let

$$
L(y) = y^{(n)} + a_1(x)y^{(n-1)} + \cdots + a_n(x)y ,
$$

and let $\varphi_1$ be a solution of $L(y) = 0$ on $I$ with

$$
\varphi_1(x) \ne 0 \quad\text{for every } x \in I .
$$

Substituting $y = u\varphi_1$ into $L(y) = 0$ and writing $v = u'$ gives a linear homogeneous equation of order $n-1$ for $v$,

$$
\varphi_1\,v^{(n-1)} + \cdots + \bigl[n\varphi_1^{(n-1)} + (n-1)a_1\varphi_1^{(n-2)} + \cdots + a_{n-1}\varphi_1\bigr]v \;=\; 0 ,
\tag{R}
$$

whose leading coefficient $\varphi_1$ does not vanish on $I$, so that $(\mathrm{R})$ has $n-1$ linearly independent solutions $v_2, \dots, v_n$ on $I$. If $x_0 \in I$ and

$$
u_k(x) = \int_{x_0}^{x} v_k(t)\,dt , \qquad k = 2, \dots, n ,
$$

then

$$
\varphi_1, \quad u_2\varphi_1, \quad \dots, \quad u_n\varphi_1
$$

is a basis for the solutions of $L(y) = 0$ on $I$.
:::

:::statement[Second order: the second solution in closed form]{provenance=adapted src="coddington-1989:Ch. 3, §5, Eq. (5.7) and Thm 10, p. 120; hassani-2013:§14.4.1, Thm 14.4.4, p. 426; arfken-2013:§7.6, Eq. (7.67), p. 363; rhb-2006:§16.4.1, Eq. (16.25), p. 544"}
Let $a_1, a_2$ be continuous on $I$, consider

$$
y'' + a_1(x)y' + a_2(x)y = 0 ,
$$

and let $\varphi_1$ be a solution with $\varphi_1(x) \ne 0$ on $I$. Fix $x_0 \in I$. Then

$$
\varphi_2(x) \;=\; \varphi_1(x)\int_{x_0}^{x}\frac{1}{\varphi_1(s)^{2}}\exp\left[-\int_{x_0}^{s}a_1(t)\,dt\right]ds
$$

is a solution on $I$, and $\{\varphi_1, \varphi_2\}$ is a basis for the solutions on $I$. Its Wronskian is

$$
W(\varphi_1, \varphi_2)(x) \;=\; \exp\left[-\int_{x_0}^{x}a_1(t)\,dt\right] ,
$$

in particular $W(x_0) = 1$: the formula is normalised so that independence is automatic.

Two special cases are worth remembering. If $a_1 \equiv 0$ (as in $y'' + a_2y = 0$, the form every second-order equation can be put into), then $\varphi_2 = \varphi_1\int \varphi_1^{-2}$. And changing $x_0$, or adding a constant to the outer integral, changes $\varphi_2$ only by a multiple of $\varphi_1$, so any convenient antiderivative may be used and any resulting multiple of $\varphi_1$ discarded.
:::

:::idea{provenance=original}
Two ideas, and they meet.

*The substitution.* If we look for further solutions in the form $y = u\varphi_1$, then the terms in which $u$ appears undifferentiated assemble into $u\,L(\varphi_1) = 0$ and disappear. What survives involves only $u', u'', \dots, u^{(n)}$, which is an equation of order $n-1$ in $v = u'$. We have not solved anything, but we have one order less to solve, and we needed $\varphi_1 \neq 0$ only to keep the new leading coefficient nonvanishing.

*Abel's formula.* For $n = 2$ the reduced equation is first-order and so can be integrated explicitly; but there is a shortcut that bypasses it. Abel's formula already tells us the Wronskian of the pair $\{\varphi_1, \varphi_2\}$ before we know $\varphi_2$. And the Wronskian is exactly $\varphi_1^{2}(\varphi_2/\varphi_1)'$. So $(\varphi_2/\varphi_1)'$ is known; one integration gives $\varphi_2/\varphi_1$, and the formula drops out. This is why the second solution of a second-order equation costs only an integral: the Wronskian does the work.
:::

:::proof[Reduction of order, general order]{provenance=adapted src="coddington-1989:Ch. 3, §5, pp. 118-119"}
**Step 1 (substitute).** Let $u$ be any $n$-times differentiable function on $I$ and expand $L(u\varphi_1)$ by the Leibniz rule. For $0 \le m \le n$,

$$
(u\varphi_1)^{(m)} = \sum_{i=0}^{m}\binom{m}{i}u^{(i)}\varphi_1^{(m-i)} ,
$$

so, with $a_0 := 1$,

$$
L(u\varphi_1) = \sum_{m=0}^{n}a_{n-m}\,(u\varphi_1)^{(m)}
= \sum_{i=0}^{n}u^{(i)}\underbrace{\left[\sum_{m\ge i}\binom{m}{i}a_{n-m}\varphi_1^{(m-i)}\right]}_{=\,b_i} .
$$

**Step 2 (the $u$ term vanishes).** The coefficient of $u^{(0)} = u$ is $b_0 = \sum_m a_{n-m}\varphi_1^{(m)} = L(\varphi_1) = 0$, because $\varphi_1$ solves the equation — this is the only place that hypothesis is used. Hence

$$
L(u\varphi_1) = \sum_{i=1}^{n}b_i\,u^{(i)} = \sum_{j=0}^{n-1}b_{j+1}\,v^{(j)}, \qquad v = u' .
$$

So $u\varphi_1$ solves $L(y) = 0$ exactly when $v = u'$ solves the order-$(n-1)$ linear homogeneous equation $\sum_{j}b_{j+1}v^{(j)} = 0$, which is $(\mathrm{R})$.

**Step 3 (the reduced equation is non-singular).** Its leading coefficient is $b_n = \binom{n}{n}a_0\varphi_1 = \varphi_1$, nonzero on $I$ by hypothesis. Dividing by it gives a normalised equation of order $n-1$ with coefficients continuous on $I$, so by :ref[the dimension theorem]{to=ode.linear-ode-theory} it has $n-1$ linearly independent solutions $v_2, \dots, v_n$ on $I$ — and no more.

**Step 4 (the $n$ functions solve the equation).** $\varphi_1 = 1\cdot\varphi_1$ corresponds to $u \equiv 1$, $v \equiv 0$. Each $u_k = \int_{x_0}^{x}v_k$ is differentiable with $u_k' = v_k$, so $u_k\varphi_1$ solves $L(y) = 0$ by Step 2.

**Step 5 (independence).** Suppose $c_1\varphi_1 + c_2u_2\varphi_1 + \cdots + c_nu_n\varphi_1 = 0$ on $I$. Dividing by $\varphi_1$, which is nonvanishing,

$$
c_1 + c_2u_2(x) + \cdots + c_nu_n(x) = 0 \qquad (x \in I) .
$$

Differentiating, $c_2v_2 + \cdots + c_nv_n = 0$ on $I$, and the independence of $v_2, \dots, v_n$ forces $c_2 = \cdots = c_n = 0$. The displayed identity then gives $c_1 = 0$.

**Step 6 (basis).** These are $n$ linearly independent solutions of an equation of order $n$, hence a basis (:ref[]{to=ode.linear-ode-theory}). $\square$
:::

:::proof[Second order, by Abel's formula]{provenance=adapted src="arfken-2013:§7.6, Eqs. (7.63)-(7.67), pp. 362-363; rhb-2006:§16.4.1, p. 544"}
**Step 1 (the quotient derivative).** Wherever $\varphi_1 \ne 0$, for any differentiable $\varphi_2$,

$$
\left(\frac{\varphi_2}{\varphi_1}\right)' = \frac{\varphi_1\varphi_2' - \varphi_1'\varphi_2}{\varphi_1^{2}} = \frac{W(\varphi_1,\varphi_2)}{\varphi_1^{2}} .
$$

**Step 2 (what the Wronskian must be).** Suppose $\varphi_2$ is a solution. By :ref[Abel's formula]{to=ode.linear-ode-theory}, $W(\varphi_1,\varphi_2)(x) = W(x_0)\,e^{-A(x)}$ where $A(x) = \int_{x_0}^{x}a_1$. We are free to look for the solution with $W(x_0) = 1$, since multiplying $\varphi_2$ by a constant rescales $W$. So we require

$$
\left(\frac{\varphi_2}{\varphi_1}\right)'(x) = \frac{e^{-A(x)}}{\varphi_1(x)^{2}} .
$$

**Step 3 (integrate).** The right-hand side is continuous on $I$ ($a_1$ is continuous, $\varphi_1$ is continuous and nonvanishing), so it has the antiderivative $\int_{x_0}^{x}\varphi_1(s)^{-2}e^{-A(s)}\,ds$, and

$$
\varphi_2(x) = \varphi_1(x)\int_{x_0}^{x}\frac{e^{-A(s)}}{\varphi_1(s)^{2}}\,ds
$$

is forced, up to adding a constant multiple of $\varphi_1$.

**Step 4 (it really is a solution).** So far we have only derived a necessary form; now verify it. Put $g(x) = \int_{x_0}^{x}\varphi_1^{-2}e^{-A}$, so $\varphi_2 = \varphi_1 g$ with $g' = \varphi_1^{-2}e^{-A}$. Then

$$
\varphi_2' = \varphi_1'g + \varphi_1g', \qquad
\varphi_2'' = \varphi_1''g + 2\varphi_1'g' + \varphi_1g'' ,
$$

and therefore

$$
\varphi_2'' + a_1\varphi_2' + a_2\varphi_2 = \underbrace{\bigl(\varphi_1'' + a_1\varphi_1' + a_2\varphi_1\bigr)}_{=\,0}g \;+\; 2\varphi_1'g' + \varphi_1g'' + a_1\varphi_1g' .
$$

For the remainder, differentiate $g' = \varphi_1^{-2}e^{-A}$: since $A' = a_1$,

$$
g'' = -2\frac{\varphi_1'}{\varphi_1^{3}}e^{-A} - a_1\frac{e^{-A}}{\varphi_1^{2}} = -\left(\frac{2\varphi_1'}{\varphi_1} + a_1\right)g' ,
$$

so $\varphi_1g'' = -2\varphi_1'g' - a_1\varphi_1g'$, which cancels the remaining three terms exactly. Hence $\varphi_2$ solves the equation.

**Step 5 (basis).** By Step 1, $W(\varphi_1,\varphi_2) = \varphi_1^{2}g' = e^{-A}$, which is nonzero everywhere on $I$; by :ref[the Wronskian criterion]{to=ode.linear-ode-theory}, $\{\varphi_1,\varphi_2\}$ is a basis. $\square$

The same formula comes out of the substitution route of the previous proof: for $n = 2$ the reduced equation $(\mathrm{R})$ is $\varphi_1v' + (2\varphi_1' + a_1\varphi_1)v = 0$, whose integrating factor is $\varphi_1e^{A}$, giving $\varphi_1^{2}e^{A}v = \text{const}$ and hence $v = u' = \varphi_1^{-2}e^{-A}$ as above.
:::

:::remark[Where the hypotheses are used]{provenance=original}
- **$\varphi_1 \ne 0$ on $I$** enters twice: it keeps the leading coefficient of the reduced equation away from zero (Step 3 of the first proof), and it is needed to divide by $\varphi_1^{2}$. The hypothesis is genuinely restrictive. For $y'' + y = 0$ with $\varphi_1 = \sin x$, the formula $\varphi_2 = \sin x\int\csc^{2} = -\cos x$ is valid on $(0,\pi)$ and the answer happens to extend to $\mathbb{R}$, but the derivation does not: it must be run on each interval between zeros of $\sin$ and the pieces matched. In general the second solution exists on all of $I$ (by the existence theorem) even though this *formula* for it does not.
- **A zero of $\varphi_1$ is where the second solution misbehaves.** Near a simple zero at $x_1$, $\varphi_1(s)^{2} \sim c(s - x_1)^{2}$, so the inner integral diverges like $1/(x - x_1)$ and $\varphi_2 \to$ a finite nonzero limit; near a point where $\varphi_1$ vanishes to higher order (which happens only at a singular point of the equation) the divergence is stronger. This is the mechanism behind the logarithms and inverse powers in the irregular solutions of Legendre's and Bessel's equations.
- **Continuity of $a_1$** is what makes $e^{-A}$ well defined and continuous; $a_2$ is never used explicitly in the second-order formula, which is striking — all of its influence is already encoded in $\varphi_1$.
- **Constants are free, as the books stress.** :cite[Hassani]{work=hassani-2013 loc="Thm 14.4.4 and the preceding paragraph, p. 426"} writes the general second solution as $\varphi_1\bigl(C + K\int\cdots\bigr)$ and sets $C = 0$ because that term is proportional to $\varphi_1$; :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="pp. 362-363"} drop the lower limits for the same reason and normalise $W = 1$. We fix $W(x_0) = 1$ by taking the lower limit $x_0$ in both integrals, which is the same choice.
- **The two routes are the same calculation.** :cite{work=rhb-2006 loc="§16.4.1, p. 545"} notes that assuming $y_2 = u(z)y_1(z)$ and the Wronskian route give identical results; the last paragraph of the proof above is that identity.
:::

:::method[Getting a second solution]{provenance=adapted src="coddington-1989:Ch. 3, §5, pp. 119-121; arfken-2013:§7.6, p. 363"}
1. **Normalise** to $y'' + a_1y' + a_2y = 0$ and fix an interval $I$ on which $\varphi_1$ has no zero.
2. **Compute the Wronskian factor** $e^{-A}$, $A(x) = \int_{x_0}^{x}a_1$. For $a_1 = c/x$ this is a power of $x$; for $a_1$ constant it is an exponential; for $a_1 = 0$ it is $1$.
3. **Integrate** $\varphi_1^{-2}e^{-A}$ once. Partial fractions usually does it when $\varphi_1$ is a polynomial, and this step is where logarithms are born.
4. **Multiply by $\varphi_1$** and simplify, discarding any multiple of $\varphi_1$ that the constants of integration produced.
5. **Check** by substitution, or by confirming $W(\varphi_1,\varphi_2) = e^{-A}$, which is a weaker but much cheaper test.
6. For order $n > 2$, substitute $y = u\varphi_1$ directly, set $v = u'$, and solve the resulting equation of order $n-1$ by whatever means; then integrate each of its solutions once and multiply by $\varphi_1$.
:::

:::example[Legendre's equation with $\ell = 1$: the logarithmic second solution]{provenance=original}
Take $(1 - x^{2})y'' - 2xy' + 2y = 0$ with the known solution $\varphi_1(x) = x$, and work on $I = (0,1)$, where $\varphi_1 \ne 0$.

1. **Normalise:** $a_1(x) = -2x/(1-x^{2})$, $a_2(x) = 2/(1-x^{2})$.
2. **Wronskian factor.** With $x_0 = \tfrac12$,

   $$
   A(s) = \int_{1/2}^{s}\frac{-2t}{1 - t^{2}}\,dt = \Bigl[\ln(1 - t^{2})\Bigr]_{1/2}^{s} = \ln\frac{1 - s^{2}}{3/4},
   \qquad
   e^{-A(s)} = \frac{3}{4}\cdot\frac{1}{1 - s^{2}} .
   $$

3. **Integrate.** By partial fractions, $\dfrac{1}{s^{2}(1-s^{2})} = \dfrac{1}{s^{2}} + \dfrac{1}{1-s^{2}}$, so

   $$
   \int\frac{ds}{s^{2}(1-s^{2})} = -\frac{1}{s} + \frac{1}{2}\ln\frac{1+s}{1-s} .
   $$

4. **Assemble.** Up to the constant factor $\tfrac34$ and a multiple of $\varphi_1 = x$ coming from the lower limit,

   $$
   \varphi_2(x) \;=\; x\left(-\frac{1}{x} + \frac{1}{2}\ln\frac{1+x}{1-x}\right) \;=\; \frac{x}{2}\ln\frac{1+x}{1-x} - 1 .
   $$

   This is the second solution used in :ref[]{to=ode.linear-ode-theory}, where it is checked by substitution and its Wronskian with $x$ is computed to be $1/(1-x^{2})$.
5. **The formula's own prediction.** $W(\varphi_1,\varphi_2)$ should be $e^{-A(x)} = \tfrac34(1-x^{2})^{-1}$ for the normalised $\varphi_2$; our $\varphi_2$ has had the factor $\tfrac34$ removed, so $W = (1-x^{2})^{-1}$, as found independently there. The two computations agree.
6. **Beyond $(0,1)$.** The resulting $\varphi_2$ in fact solves the equation on all of $(-1,1)$, as direct substitution shows, even though the derivation needed $x \ne 0$; at $x = 0$ the inner integral diverges but the product with $\varphi_1 = x$ stays finite, with $\varphi_2(0) = -1$. At $x = \pm1$ the equation is singular and $\varphi_2$ blows up logarithmically — the generic fate of the second solution at a singular point.
:::

:::example[A polynomial second solution]{provenance=original}
Take

$$
x\,y'' - (x+2)\,y' + 2y = 0 \qquad \text{on } I = (0,\infty) .
$$

1. **A solution by inspection.** Try $\varphi_1 = e^{x}$: then $xe^{x} - (x+2)e^{x} + 2e^{x} = 0$. It never vanishes, so the hypothesis holds on all of $I$ — indeed on $\mathbb{R}$, but the equation is singular at $x = 0$, so we stay on $x > 0$.
2. **Normalise:** $y'' - \dfrac{x+2}{x}y' + \dfrac{2}{x}y = 0$, so $a_1(x) = -1 - \dfrac{2}{x}$.
3. **Wronskian factor.** With $x_0 = 1$,

   $$
   A(s) = \int_{1}^{s}\left(-1 - \frac{2}{t}\right)dt = -(s - 1) - 2\ln s ,
   \qquad
   e^{-A(s)} = e^{\,s-1}s^{2} .
   $$

4. **Integrate.**

   $$
   \frac{e^{-A(s)}}{\varphi_1(s)^{2}} = \frac{e^{\,s-1}s^{2}}{e^{2s}} = e^{-1}s^{2}e^{-s} ,
   \qquad
   \int_{1}^{x} s^{2}e^{-s}\,ds = \Bigl[-(s^{2}+2s+2)e^{-s}\Bigr]_{1}^{x} = 5e^{-1} - (x^{2}+2x+2)e^{-x} .
   $$

5. **Assemble.**

   $$
   \varphi_2(x) = e^{x}\cdot e^{-1}\Bigl[5e^{-1} - (x^{2}+2x+2)e^{-x}\Bigr]
   = 5e^{\,x-2} - e^{-1}\bigl(x^{2}+2x+2\bigr) .
   $$

   The first term is a multiple of $\varphi_1$, so discard it, and drop the constant $-e^{-1}$: a second solution is

   $$
   \varphi_2(x) = x^{2} + 2x + 2 .
   $$

6. **Checks.** Substituting: $x\cdot 2 - (x+2)(2x+2) + 2(x^{2}+2x+2) = 2x - 2x^{2} - 6x - 4 + 2x^{2} + 4x + 4 = 0$. And $W(e^{x}, x^{2}+2x+2) = e^{x}(2x+2) - e^{x}(x^{2}+2x+2) = -x^{2}e^{x}$, which is a constant multiple of $e^{-A(x)} = x^{2}e^{\,x-1}$ as Abel's formula requires. The general solution on $x > 0$ is $y = c_1e^{x} + c_2(x^{2}+2x+2)$.
7. **A remark worth the attention.** An equation with a non-polynomial solution can have a polynomial one as well, and here the polynomial is the *second* solution, produced by an integration rather than by a series. Note also that neither solution is a polynomial times the other, and that the Wronskian $-x^{2}e^{x}$ vanishes at the singular point $x = 0$, exactly as :ref[]{to=ode.linear-ode-theory} predicts.
:::

:::application{provenance=original}
**Second solutions of the equations of physics.** The standard special functions come in pairs, and the second member of each pair is produced this way. Legendre's equation gives $P_\ell$ by a series and then $Q_\ell$ by exactly the computation of the first example above, with its $\ln\frac{1+x}{1-x}$; Bessel's equation gives $J_n$ and then $Y_n$, whose $\ln x$ has the same origin. In a physical problem the irregular solution is usually the one discarded by a boundary condition — but one must know it to know that it has been discarded, and in exterior or scattering problems it is the one that is kept.

**The repeated-root case in the Frobenius method.** If the two exponents at a regular singular point coincide, or if their difference is a whole number, the series method yields only one solution (:ref[]{to=ode.frobenius-method}). :cite[Riley, Hobson and Bence]{work=rhb-2006 loc="§16.4.1, pp. 544-545"} use precisely this formula to manufacture the missing one; it is also the cleanest explanation of *why* a logarithm must appear, since $\int \varphi_1^{-2}e^{-A}$ produces $\int ds/s$ exactly when the exponents are equal or differ by an integer.

**Critical damping.** For $\ddot x + 2\gamma\dot x + \gamma^{2}x = 0$ the characteristic polynomial has the double root $-\gamma$, so inspection gives only $\varphi_1 = e^{-\gamma t}$. Here $a_1 = 2\gamma$, $e^{-A} = e^{-2\gamma t}$ and $\varphi_1^{-2} = e^{2\gamma t}$, so the integrand is $1$ and $\varphi_2 = t\,e^{-\gamma t}$. The factor $t$ that appears in every repeated-root formula is this trivial integral; the critically damped oscillator of :ref[]{to=ode.harmonic-oscillator} is its most familiar instance.

**Numerics.** When a solution has been computed numerically on a grid, this formula gives the second one by quadrature, which is far more stable than integrating the equation a second time: a numerical solution of a second-order equation started near the "wrong" solution is contaminated by the dominant one, whereas the quadrature has no such instability as long as $\varphi_1$ stays away from zero.
:::
