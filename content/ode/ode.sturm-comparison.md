---
id: ode.sturm-comparison
title: Sturm comparison and oscillation theorems
kind: theorem
level: advanced
summary: The zeros of two independent solutions of a second-order linear equation interlace, a solution of the equation with the larger coefficient must vanish between consecutive zeros of a solution of the equation with the smaller one, and these two facts bound the spacing of zeros, decide whether solutions oscillate, and count the zeros of Sturm-Liouville eigenfunctions.
prereqs: [ode.sturm-liouville-theory, ode.self-adjoint-operators, ode.linear-ode-theory]
provenance: adapted
sources:
  - work: hassani-2013
    loc: "§14.4, Def. 14.4.1 (Wronskian) and Prop. 14.4.2 (Abel's formula and the constancy of the sign of the Wronskian), p. 425; §14.4.3, Thm 14.4.8 (separation) with its proof and Example 14.4.9, pp. 430–431; Thm 14.4.10 (comparison, stated there without proof and referred to Birkhoff and Rota) and Prop. 14.4.11 (reduction of $y''+py'+qy=0$ to the normal form $u''+Su=0$), p. 431; §19.1, Thm 19.1.9, pp. 568–569"
    pages: "425, 430-431, 568-569"
    role: the statement and proof route of the separation theorem through the non-vanishing of the Wronskian; the statement of the comparison theorem together with its exceptional case; the substitution $u=y\exp(\frac12\int p)$ and the formula $S=q-\frac14p^2-\frac12p'$; the count of zeros of the $n$th eigenfunction of a regular Sturm-Liouville system
  - work: coddington-1989
    loc: "Ch. 3, §4, Exercise 4(a) and its hint (the comparison argument), Exercise 5 (separation for the same equation) and Exercise 8 (zeros are simple and isolated), pp. 117–118; Ch. 4, §7, Exercise 3, p. 171, and §8, Exercise 6, p. 179 (the normal form of Bessel's equation and the infinitude of the zeros of $J_\\alpha$)"
    pages: "117-118, 171, 179"
    role: the proof route for the comparison theorem — integrate the derivative of $\psi\varphi'-\varphi\psi'$ across a pair of consecutive zeros and compare signs — stated there with a strict inequality between the coefficients and for real-valued solutions; the simplicity and isolation of zeros; the substitution $\psi=x^{1/2}y$ that puts Bessel's equation into normal form and the comparison with $y''+y=0$ used in our first example
  - work: docarmo-2016
    loc: "§5-5, Exercises 3(b)–3(c) (the first and second comparison theorems for Jacobi fields), Exercises 4–5 and Exercise 6, \"Sturm's Oscillation Theorem\", pp. 375–376"
    pages: "375-376"
    role: the form of the conclusion in which the comparison solution is allowed to vanish at the right-hand endpoint; the identification of the Jacobi equation $v''+Kv=0$ and of conjugate points with the zeros of a solution, used in the application
  - work: strauss-2008
    loc: "§10.4, Nodes, the one-dimensional Dirichlet count on p. 278 and Thm 1 with the remark following it, p. 281"
    pages: "278-279, 281"
    role: the vocabulary of nodes and nodal sets, the statement that in one dimension the $n$th Dirichlet eigenfunction has $n-1$ nodes dividing the interval into $n$ pieces, and the physical reading of a node as a point of the string that never moves
---

:::definition[Zeros, the normal form, and oscillation]{provenance=adapted src="hassani-2013:§14.4, Def. 14.4.1, p. 425, and Prop. 14.4.11, p. 431; coddington-1989:Ch. 3, §4, Exercise 8, p. 118"}
Throughout, $I$ is an interval of the real line and all functions on it are real-valued. The two shapes of second-order equation used here are

$$
y'' + P(x)\,y' + Q(x)\,y = 0
\qquad\text{and}\qquad
\bigl(p(x)\,u'\bigr)' + G(x)\,u = 0 ,
$$

with $P,Q,G$ continuous on $I$, $p \in C^1(I)$ and $p > 0$. The second is the divergence shape of :ref[the previous chapter's self-adjoint form]{to=ode.self-adjoint-operators}; dividing it by $p$ turns it into the first with $P = p'/p$ and $Q = G/p$, so both are genuine second-order equations with continuous coefficients, and :ref[the structure theory]{to=ode.linear-ode-theory} applies to each.

A **zero** of a solution is a point of $I$ at which it vanishes. A solution is **nontrivial** if it is not identically zero. A zero $x_0$ of a solution $y$ is **simple** when $y'(x_0) \neq 0$; since $y(x_0) = y'(x_0) = 0$ would force $y \equiv 0$ by the uniqueness of the solution of an initial-value problem for :ref[a linear equation with continuous coefficients]{to=ode.linear-ode-theory}, *every zero of a nontrivial solution is simple*. A simple zero is isolated, because $y(x) = y'(x_0)(x-x_0) + o(x - x_0)$ is nonzero for $x$ near $x_0$ and $x \neq x_0$; so a nontrivial solution has only finitely many zeros in any compact subinterval of $I$, and the zeros in such a subinterval can be listed in increasing order. Two zeros $x_1 < x_2$ are **consecutive** when the solution does not vanish anywhere in $(x_1,x_2)$.

The **normal form** (or Liouville form) of $y'' + Py' + Qy = 0$ is obtained by the substitution

$$
u(x) = y(x)\,\exp\!\Bigl(\tfrac12\!\int_\alpha^x P(t)\,\mathrm d t\Bigr) ,
\qquad\text{which satisfies}\qquad
u'' + S\,u = 0 , \quad S = Q - \tfrac14 P^2 - \tfrac12 P' ,
$$

for any base point $\alpha \in I$ :cite[]{work=hassani-2013 loc="Prop. 14.4.11, p. 431"}; the formula requires $P \in C^1(I)$. The exponential factor never vanishes, **so $y$ and $u$ have exactly the same zeros**, and every question about zeros may be moved to the normal form. The same remark applies to the divergence shape as soon as $p \in C^2(I)$, which is what makes $P = p'/p$ continuously differentiable: the normalising factor is then $\exp\bigl(\frac12\int_\alpha^x p'/p\bigr) = \sqrt{p(x)/p(\alpha)} > 0$, so $(pu')' + Gu = 0$ and its normal form share their zeros too. Under the standing assumption $p \in C^1$ alone the normal form need not exist, and the comparison theorem below is proved directly in the divergence shape for exactly that reason.

Finally, a nontrivial solution on $[a,\infty)$ is called **oscillatory** if it has infinitely many zeros there and **nonoscillatory** otherwise. By the separation theorem below, applied on each compact subinterval of $[a,\infty)$, this is a property of the equation and not of the particular solution: if one nontrivial solution has infinitely many zeros then so has every other, since an independent partner must vanish between consecutive ones.

The Wronskian of two solutions is $W[f,g] = f g' - g f'$, as in :ref[the structure theory]{to=ode.linear-ode-theory}; for the divergence shape the useful quantity is the weighted Wronskian $p\,W[f,g]$, which is the conjunct of :ref[the self-adjoint unit]{to=ode.self-adjoint-operators}.
:::

:::statement[Sturm separation theorem]{provenance=adapted src="hassani-2013:§14.4.3, Thm 14.4.8, p. 430; coddington-1989:Ch. 3, §4, Exercise 5, p. 117"}
Let $f$ and $g$ be real-valued linearly independent solutions of $y'' + Py' + Qy = 0$ on $[a,b]$, with $P$ and $Q$ real and continuous there. Then

1. $f$ and $g$ have no common zero in $[a,b]$;
2. between two consecutive zeros of $g$ in $[a,b]$ there lies **exactly one** zero of $f$, and between two consecutive zeros of $f$ there lies exactly one zero of $g$.

The zeros of the two solutions therefore interlace. Hassani records the conclusion as the statement that the zeros of two independent solutions alternate; Coddington puts it as the existence of a zero of one between successive zeros of the other, and states it for real-valued solutions.
:::

:::statement[Sturm comparison theorem]{provenance=adapted src="hassani-2013:§14.4.3, Thm 14.4.10, p. 431; coddington-1989:Ch. 3, §4, Exercise 4(a), p. 117; docarmo-2016:§5-5, Exercise 6, p. 376"}
**Divergence shape.** Let $p \in C^1[a,b]$ with $p > 0$, and let $G$ and $H$ be continuous and real on $[a,b]$ with

$$
H(x) \;\ge\; G(x) \qquad (a \le x \le b).
$$

Let $u$ be a nontrivial real solution of $(pu')' + Gu = 0$ and $v$ a nontrivial real solution of $(pv')' + Hv = 0$, and let $x_1 < x_2$ be two zeros of $u$. Then $v$ vanishes somewhere in the open interval $(x_1,x_2)$, unless

$$
H \equiv G \text{ on } [x_1,x_2] \quad\text{and}\quad v \text{ is a constant multiple of } u \text{ there},
$$

in which case $v$ vanishes at $x_1$ and at $x_2$ instead. In particular $v$ always has a zero in $(x_1, x_2]$.

**Normal form.** This is the case $p \equiv 1$, and it needs no new letters: if $H \ge G$ on $[a,b]$, $u$ is a nontrivial real solution of $u'' + Gu = 0$ and $v$ a nontrivial real solution of $v'' + Hv = 0$, then $v$ has a zero between any two zeros of $u$, except in the stated degenerate case. The solution of the equation with the **larger** coefficient is the one forced to oscillate faster. In the notation $u'' + S_u u = 0$, $v'' + S_v v = 0$ of the normal form, the hypothesis is $S_v \ge S_u$. (Hassani writes the two zeroth-order coefficients as $p$ and $q$; here $P$ and $Q$ are already committed, by the definition block and the separation theorem above, to the coefficients of $y'' + Py' + Qy = 0$, so the two coefficients being compared are called $G$ and $H$ throughout this unit.)

Hassani states the normal-form version and refers to Birkhoff and Rota for a proof; his exceptional clause reads as a condition on the whole of $[a,b]$, and the remark below explains why it has to be read on $[x_1,x_2]$. Coddington's version assumes the strict inequality $H > G$ and then has no exceptional case. Do Carmo's "Sturm oscillation theorem" is the conclusion in the closed-interval form $(x_1,x_2]$ given above.
:::

:::idea{provenance=original}
One identity does all the work. For two solutions of two equations in divergence shape with the *same* $p$, the weighted Wronskian $W = p\,(uv' - vu')$ has derivative

$$
W' = u\,(pv')' - v\,(pu')' = (G - H)\,u\,v ,
$$

because the cross terms $p u'v'$ cancel. So the sign of $G - H$ controls whether $W$ rises or falls. Suppose $u$ vanishes at $x_1$ and $x_2$ and $v$ did not vanish between: normalise both to be positive inside. At a zero of $u$ the weighted Wronskian collapses to $-p\,v\,u'$, which is $\le 0$ at $x_1$ (where $u$ is increasing) and $\ge 0$ at $x_2$ (where $u$ is decreasing). So $W$ has *increased* across $[x_1,x_2]$. But $H \ge G$ makes $W' \le 0$ there, so $W$ cannot have increased. The only escape is that every inequality is an equality, which pins down the degenerate case.

The separation theorem is the same computation with $H = G$, where the identity says that $W$ is constant; Abel's formula then says that the Wronskian of two independent solutions never vanishes, and a nonvanishing Wronskian at a zero of $g$ forces $f$ to be nonzero and $g'$ to change sign between consecutive zeros, so that $f$ changes sign too.
:::

:::proof[Separation]{provenance=adapted src="hassani-2013:§14.4.3, proof of Thm 14.4.8, pp. 430–431, using Prop. 14.4.2, p. 425"}
Write $W(x) = f(x)g'(x) - g(x)f'(x)$.

1. *The Wronskian never vanishes.* By :ref[Abel's formula]{to=ode.linear-ode-theory}, $W(x) = W(c)\exp\bigl(-\int_c^x P\bigr)$ for any $c \in [a,b]$. Linear independence of $f$ and $g$ makes $W(c) \neq 0$, and an exponential is never zero, so $W$ is nowhere zero on $[a,b]$ and keeps one sign there. This is the step that uses the continuity of $P$, which is what makes Abel's formula available.

2. *No common zeros.* If $f(x_0) = g(x_0) = 0$ then $W(x_0) = 0$, contradicting step 1. This proves part 1.

3. *At a zero of $g$.* Let $x_0$ be a zero of $g$. Then $W(x_0) = f(x_0)\,g'(x_0)$, and since $W(x_0) \neq 0$ both factors are nonzero: $f(x_0) \neq 0$, and $g$ has a simple zero at $x_0$.

4. *Sign change of $g'$ between consecutive zeros.* Let $x_1 < x_2$ be consecutive zeros of $g$. On $(x_1,x_2)$ the continuous function $g$ has no zero, so it keeps one sign; say $g > 0$ there, the other case being the same with $g$ replaced by $-g$. Then $g'(x_1) \ge 0$ and $g'(x_2) \le 0$ as one-sided limits of difference quotients, and by step 3 neither is zero, so $g'(x_1) > 0 > g'(x_2)$.

5. *Hence a zero of $f$ in between.* By step 3, $f(x_1) = W(x_1)/g'(x_1)$ and $f(x_2) = W(x_2)/g'(x_2)$. The numerators have the same sign by step 1 and the denominators have opposite signs by step 4, so $f(x_1)$ and $f(x_2)$ have opposite signs. As $f$ is continuous, the intermediate value theorem gives a point of $(x_1,x_2)$ at which $f$ vanishes. *Here the hypothesis that $f$ and $g$ are real-valued is used twice*: a complex-valued function has no sign and obeys no intermediate value theorem.

6. *Exactly one, and the symmetric statement.* Suppose $f$ had two zeros $y_1 < y_2$ in $(x_1,x_2)$; shrinking, we may take them consecutive zeros of $f$. Steps 3–5 apply verbatim with the roles of $f$ and $g$ exchanged (the Wronskian of the exchanged pair is $-W$, which also never vanishes), so $g$ would vanish somewhere in $(y_1,y_2) \subset (x_1,x_2)$ — impossible, since $x_1$ and $x_2$ are consecutive zeros of $g$. So there is exactly one. Exchanging the roles once more gives the statement with $f$ and $g$ interchanged. $\square$
:::

:::proof[Comparison]{provenance=adapted src="coddington-1989:Ch. 3, §4, Exercise 4(a) with its hint, p. 117; hassani-2013:§14.4.3, Thm 14.4.10, p. 431"}
It is enough to treat $x_1 < x_2$ *consecutive* zeros of $u$, and for a non-consecutive pair the exceptional clause is vacuous. Indeed, suppose $u$ has a zero $z \in (x_1,x_2)$ and apply the consecutive case to a pair $x_1' < x_2'$ of consecutive zeros of $u$ inside $[x_1,z]$: either $v$ vanishes in $(x_1',x_2') \subset (x_1,x_2)$, or the degenerate case puts a zero of $v$ at $x_2' \le z < x_2$, which again lies in the open interval $(x_1,x_2)$. So between non-consecutive zeros of $u$ the solution $v$ vanishes in the *open* interval with no exception, and the degenerate clause of the statement has content only for a consecutive pair, which is the case treated from here on. Suppose, for contradiction, that $v$ has no zero in $(x_1,x_2)$.

1. *Normalise the signs.* On $(x_1,x_2)$ neither $u$ nor $v$ vanishes, so each keeps one sign; replacing $u$ by $-u$ and $v$ by $-v$ if necessary — which changes neither equation nor the set of zeros — we may take $u > 0$ and $v > 0$ on $(x_1,x_2)$. By continuity $v(x_1) \ge 0$ and $v(x_2) \ge 0$.

2. *The endpoint derivatives of $u$.* The zeros of the nontrivial solution $u$ are simple, so $u'(x_1) \neq 0 \neq u'(x_2)$. Since $u(x_1) = 0$ and $u > 0$ immediately to the right, $u'(x_1) > 0$; since $u(x_2) = 0$ and $u > 0$ immediately to the left, $u'(x_2) < 0$. *This step uses $p > 0$*, through the fact that $(pu')' + Gu = 0$ is a second-order equation with continuous coefficients, so that its initial-value problems have unique solutions.

3. *The identity.* Put $W = p\,(uv' - vu')$. Expanding and cancelling $p\,u'v'$,
   $$
   W' = p'(uv' - vu') + p(uv'' - vu'') = u\,(pv')' - v\,(pu')' = u\,(-Hv) - v\,(-Gu) = (G-H)\,u\,v .
   $$

4. *Integrate.* Because $H \ge G$ on $[x_1,x_2]$ and $uv \ge 0$ there by step 1, the integrand is $\le 0$, so
   $$
   W(x_2) - W(x_1) = \int_{x_1}^{x_2} (G-H)\,u\,v\,\mathrm d x \;\le\; 0 .
   $$

5. *Evaluate the endpoints.* At a zero of $u$ the first term of $W$ drops out: $W(x_i) = -\,p(x_i)\,v(x_i)\,u'(x_i)$. With $p > 0$, $v(x_i) \ge 0$ and the signs of step 2,
   $$
   W(x_1) = -\,p(x_1)\,v(x_1)\,u'(x_1) \;\le\; 0 ,
   \qquad
   W(x_2) = -\,p(x_2)\,v(x_2)\,u'(x_2) \;\ge\; 0 ,
   $$
   so $W(x_2) - W(x_1) \ge 0$.

6. *Both inequalities are equalities.* Steps 4 and 5 force $W(x_1) = W(x_2) = 0$ and $\int_{x_1}^{x_2}(H-G)uv = 0$. From $W(x_1) = 0$ with $p(x_1) > 0$ and $u'(x_1) \neq 0$ we get $v(x_1) = 0$, and likewise $v(x_2) = 0$: so $v$ does vanish at both endpoints, which is the first half of the degenerate case. From the vanishing integral, with $(H-G)uv$ continuous, nonnegative and with $uv > 0$ on $(x_1,x_2)$, we get $H = G$ throughout $[x_1,x_2]$ — if $H(x_\ast) > G(x_\ast)$ at some interior $x_\ast$ the integrand would be strictly positive on a neighbourhood and the integral could not vanish, and the endpoints are then covered by continuity.

7. *Identify the degenerate case.* On $[x_1,x_2]$ the functions $u$ and $v$ now solve one and the same equation $(py')' + Gy = 0$, and both vanish at $x_1$. Their weighted Wronskian is constant there by step 3, and it is $0$ at $x_1$; since $p > 0$, $uv' - vu' \equiv 0$, so $u$ and $v$ are linearly dependent on $[x_1,x_2]$ and $v = cu$ with $c \neq 0$.

So either $v$ vanishes in $(x_1,x_2)$, or the degenerate case holds and $v(x_2) = 0$; in both cases $v$ has a zero in $(x_1,x_2]$. Setting $p \equiv 1$ gives the normal-form statement verbatim. $\square$
:::

:::remark{provenance=original}
**Where the hypotheses are used.**

- *Real-valuedness* is used in step 5 of the separation proof and in step 1 of the comparison proof, both of which argue from signs. It cannot be dropped. Hassani's Theorem 14.4.8 does not carry the word, but $y'' + y = 0$ has the independent solutions $f = \sin x$ and $g = \mathrm e^{\mathrm i x}$, and $g$ has no zero at all, so nothing interlaces with the zeros of $f$ at $0$ and $\pi$. Coddington's Exercise 5 states the separation property for real-valued solutions, and that is the form given above.
- *Linear independence* is what makes the Wronskian nonzero in step 1 of the separation proof. For $f = g$ it fails completely: a solution does not vanish between its own consecutive zeros, by definition.
- *$p > 0$* is used twice in the comparison proof: in step 2, to know that a zero of a nontrivial solution is simple, and in steps 5–7, where $W(x_i) = 0$ is converted into $v(x_i) = 0$ by dividing by $p(x_i)$. At a point where $p$ vanishes the equation degenerates and zeros can pile up; this is one of the ways a Sturm-Liouville problem becomes singular, as :ref[the previous unit]{to=ode.sturm-liouville-theory} records.
- *The same $p$ in both equations* is essential to the identity of step 3. Two equations in divergence shape with different leading coefficients are compared by the Sturm-Picone theorem, which is not treated here; in practice one first reduces both to normal form, where the leading coefficient is $1$.
- *$H \ge G$* is used twice. In step 4 it makes the integrand $(G-H)uv$ nonpositive, which is what gives $W(x_2) - W(x_1) \le 0$; and in step 6 it is used again, because a vanishing integral forces $H = G$ only for an integrand of one sign. Reversing the hypothesis reverses step 4 alone: the two inequalities displayed in step 5 contain neither $G$ nor $H$ — they come from the signs of $u'$ and $v$ at the endpoints — and so continue to give $W(x_2) - W(x_1) \ge 0$. With both conclusions now pointing the same way there is no contradiction left, and the argument proves nothing. This is why the theorem is one-sided: only the solution of the equation with the larger coefficient is forced to vanish.

**The exceptional case is local, not global.** Hassani's Theorem 14.4.10 states the exception as the equality of the two coefficients together with one solution being a constant multiple of the other, without restricting the equality of the coefficients to the interval between the two zeros. Read on the whole of $[a,b]$ that clause is too narrow. Take $[a,b] = [0,2\pi]$, $p \equiv 1$, $G \equiv 1$ and

$$
H(x) = \begin{cases} 1, & 0 \le x \le \pi, \\ 1 + (x-\pi)^2, & \pi \le x \le 2\pi, \end{cases}
$$

so that $H$ is continuous, $H \ge G$, and $H \neq G$ on $[a,b]$. Then $u = \sin x$ solves $u'' + Gu = 0$ with consecutive zeros $0$ and $\pi$, and the solution $v$ of $v'' + Hv = 0$ with $v(0) = 0$, $v'(0) = 1$ equals $\sin x$ on $[0,\pi]$, so it has no zero in $(0,\pi)$ — while the exception as quoted does not apply, because $H$ and $G$ differ somewhere in $[a,b]$. With the clause read on $[x_1,x_2]$, as in the statement above, the theorem is correct and is what the proof gives. Coddington sidesteps the question by assuming $H > G$ strictly, which removes the exception altogether.

**Why the conclusion cannot be improved to an open interval.** Keeping $H \ge G$ rather than $H > G$ really does cost the open interval: for $H = G$ and $v = u$ the only zeros of $v$ in $[x_1,x_2]$ are the endpoints. The closed-interval form $(x_1,x_2]$ of do Carmo's Exercise 6 is the sharp statement.
:::

:::statement[Oscillation, zero spacing, and the zeros of eigenfunctions]{label="Corollary" provenance=adapted src="coddington-1989:Ch. 3, §4, Exercises 4(b) and 7, pp. 117–118; hassani-2013:§19.1, Thm 19.1.9, pp. 568–569; strauss-2008:§10.4, p. 278 and Thm 1, p. 281"}
Let $u$ be a nontrivial real solution of $u'' + S u = 0$ with $S$ continuous and real.

1. **Nonoscillation.** If $S \le 0$ on an interval $J$, then $u$ has at most one zero in $J$.
2. **Zeros are not too close.** If $S \le M^2$ on $[\alpha,\beta]$ with $M > 0$, then any two zeros of $u$ in $[\alpha,\beta]$ differ by at least $\pi/M$.
3. **Zeros are not too far apart.** If $S \ge m^2 > 0$ on $[\alpha,\alpha+\pi/m]$, then $u$ has a zero in $(\alpha,\alpha+\pi/m]$, whatever $u$ is.
4. **Oscillation.** If $S \ge m^2 > 0$ on $[a,\infty)$ then every nontrivial solution is oscillatory, with consecutive zeros at most $\pi/m$ apart. If $S \le 0$ on $[a,\infty)$ every nontrivial solution is nonoscillatory.
5. **Counting.** Let $u(\alpha) = 0$ and let $N$ be the number of zeros of $u$ in $(\alpha,\beta]$. Then
   $$
   S \le M^2 \text{ on } [\alpha,\beta] \ (M>0)
   \;\Longrightarrow\;
   N \le \Bigl\lfloor \frac{(\beta-\alpha)M}{\pi} \Bigr\rfloor ,
   \qquad
   S \ge m^2 \text{ on } [\alpha,\beta] \ (m>0)
   \;\Longrightarrow\;
   N \ge \Bigl\lfloor \frac{(\beta-\alpha)m}{\pi} \Bigr\rfloor .
   $$
   The two halves are independent: neither needs the bound in the other direction.

Now let $-(p\varphi')' + q\varphi = \lambda w \varphi$ on $[a,b]$ be a regular Sturm-Liouville problem in the sense of :ref[the previous unit]{to=ode.sturm-liouville-theory}, with Dirichlet conditions $\varphi(a) = \varphi(b) = 0$ and eigenvalues $\lambda_1 < \lambda_2 < \cdots$.

6. **More eigenvalue, more zeros.** If $\lambda < \mu$ are eigenvalues with eigenfunctions $\varphi$ and $\psi$, then $\psi$ vanishes somewhere strictly between any two consecutive zeros of $\varphi$ in $[a,b]$. Consequently, if $\varphi$ has $k$ zeros in the open interval $(a,b)$, then $\psi$ has at least $k+1$: the number of interior zeros increases strictly with the eigenvalue.
7. **The exact count** is quoted, not proved here: Hassani's Theorem 19.1.9 states that the eigenfunction $u_n$ belonging to $\lambda_n$ has exactly $n$ zeros in the interval on which the system is posed, and Strauss records the same count in the form that the $n$th Dirichlet eigenfunction on an interval has $n-1$ nodes, dividing the interval into $n$ pieces. The two agree after the shift of index discussed in :ref[the previous unit]{to=ode.sturm-liouville-theory}; the numbering used below is Strauss's, so that $\varphi_n$ has $n-1$ interior zeros.
:::

:::proof[The corollary]{provenance=original}
Parts 1–5 are the comparison theorem with a constant-coefficient equation in the other slot, and part 6 is the comparison theorem with $p$ the same and the coefficient moved by $\lambda$.

1. Suppose $u$ had two zeros in $J$; shrinking, take them consecutive, $x_1 < x_2$. Compare $u$ (coefficient $S$) with the solution $v \equiv 1$ of $v'' + 0\cdot v = 0$ (coefficient $0 \ge S$). The comparison theorem puts a zero of $v$ in $(x_1,x_2]$ — but $v$ is never zero. The degenerate case is no escape either: it would make $v$ a nonzero multiple of $u$, and $u(x_1) = 0$ while $v(x_1) = 1$.

2. Let $x_1 < x_2$ be zeros of $u$ in $[\alpha,\beta]$; shrinking as before, take them consecutive, and suppose $x_2 - x_1 < \pi/M$. Compare $u$ (coefficient $S \le M^2$) with $v(x) = \sin\bigl(M(x-x_1)\bigr)$, a nontrivial solution of $v'' + M^2 v = 0$. Since $M^2 \ge S$, the theorem gives a zero of $v$ in $(x_1,x_2]$. But the zeros of $v$ are $x_1 + j\pi/M$, and the first one after $x_1$ lies beyond $x_2$. Contradiction.

3. The function $\sin\bigl(m(x-\alpha)\bigr)$ is a nontrivial solution of $y'' + m^2y = 0$ with $\alpha$ and $\alpha+\pi/m$ as consecutive zeros. Apply the comparison theorem on $[\alpha,\alpha+\pi/m]$ with this function in the slot of the smaller coefficient $m^2$ and $u$ in the slot of the larger coefficient $S \ge m^2$: the conclusion is a zero of $u$ in $(\alpha, \alpha+\pi/m]$. No hypothesis on $u$ is needed.

4. Apply part 3 repeatedly from $\alpha = a$, then from each zero produced, to get zeros $z_1 < z_2 < \cdots$ with $z_{j+1} \le z_j + \pi/m$; they do not accumulate, since zeros are isolated, so there are infinitely many. The second half is part 1.

5. Let $z_0 = \alpha < z_1 < z_2 < \cdots$ be the zeros of $u$ in $[\alpha,\beta]$ in increasing order, and put $J = \lfloor(\beta-\alpha)m/\pi\rfloor$. Claim: $z_j$ exists and satisfies $z_j \le \alpha + j\pi/m$ for every $j \le J$. Induct: the case $j=0$ is the hypothesis $u(\alpha)=0$, and if it holds for some $j < J$ then $z_j + \pi/m \le \alpha + (j+1)\pi/m \le \beta$, so the window $[z_j, z_j+\pi/m]$ lies in $[\alpha,\beta]$ and part 3 applies there, producing a further zero at distance at most $\pi/m$. Each of $z_1, \dots, z_J$ lies in $(\alpha,\beta]$, so $N \ge J$, the lower bound. For the upper bound, part 2 applied to the consecutive pairs $z_0,z_1,\dots$ gives $z_j - z_{j-1} \ge \pi/M$ and hence $z_j \ge \alpha + j\pi/M$; a zero of index $j$ can satisfy $z_j \le \beta$ only if $j \le (\beta-\alpha)M/\pi$, so $N \le \lfloor(\beta-\alpha)M/\pi\rfloor$.

6. Write the eigenvalue equation in divergence shape: $(p\varphi')' + (\lambda w - q)\varphi = 0$ and $(p\psi')' + (\mu w - q)\psi = 0$, with the same $p$. Their coefficients differ by
   $$
   (\mu w - q) - (\lambda w - q) = (\mu - \lambda)\,w > 0 ,
   $$
   strictly, because $\mu > \lambda$ and $w > 0$ is part of regularity. The comparison theorem applies with $u = \varphi$, $v = \psi$, and the strict inequality rules out the degenerate case, so $\psi$ vanishes strictly between any two consecutive zeros of $\varphi$. For the count: with $\varphi(a) = \varphi(b) = 0$ and $k$ zeros inside, the zeros of $\varphi$ in $[a,b]$ are $a = z_0 < z_1 < \cdots < z_k < z_{k+1} = b$, which is $k+1$ consecutive pairs; $\psi$ vanishes inside each of the $k+1$ open intervals $(z_j, z_{j+1})$, and these are disjoint, so $\psi$ has at least $k+1$ zeros in $(a,b)$. $\square$
:::

:::method{provenance=original}
To locate, bound or count the zeros of solutions of a second-order linear equation:

1. **Normalise.** If the equation is $y'' + Py' + Qy = 0$, pass to the normal form $u'' + Su = 0$ with $S = Q - \frac14P^2 - \frac12P'$; the zeros are unchanged. If two *different* equations are to be compared, put both in normal form, or bring both to divergence shape with the same $p$ — the comparison theorem needs a common leading coefficient.
2. **Bracket the coefficient.** On the window $[\alpha,\beta]$ of interest find constants with $m^2 \le S \le M^2$. Take $m^2$ to be the infimum and $M^2$ the supremum of $S$ there; a tighter window gives a tighter bracket.
3. **Read off the spacing.** Consecutive zeros are at least $\pi/M$ and at most $\pi/m$ apart. If $S \le 0$ anywhere on the window, there is at most one zero in that part of it.
4. **Count.** For a solution vanishing at $\alpha$, part 5 of the corollary brackets the number of zeros in $(\alpha,\beta]$ between $\lfloor(\beta-\alpha)m/\pi\rfloor$ and $\lfloor(\beta-\alpha)M/\pi\rfloor$.
5. **For an eigenvalue problem,** the coefficient is $\lambda w - q$, which increases with $\lambda$ at every point. So running step 4 backwards turns a known zero count into a bracket for the eigenvalue: if the $n$th Dirichlet eigenfunction is known to have $n-1$ interior zeros, then the eigenvalue must be large enough to fit $n$ half-oscillations into the interval and small enough not to fit $n+1$.
:::

:::example{provenance=original}
**The spacing of the zeros of $J_0$.** Bessel's equation of order zero, $x^2y'' + xy' + x^2y = 0$, is $y'' + x^{-1}y' + y = 0$ on $x > 0$. Here $P = 1/x$ and $Q = 1$, so the normalising factor is $\exp\bigl(\frac12\int \mathrm dx/x\bigr) = \sqrt x$ and

$$
S = Q - \tfrac14 P^2 - \tfrac12 P' = 1 - \frac{1}{4x^2} + \frac{1}{2x^2} = 1 + \frac{1}{4x^2} ,
$$

so $u(x) = \sqrt x\,J_0(x)$ satisfies $u'' + \bigl(1 + \tfrac1{4x^2}\bigr)u = 0$ (this is the substitution Coddington uses in Chapter 4, Exercise 3, p. 171). Because $\sqrt x > 0$ for $x > 0$, the positive zeros of $J_0$ are exactly the zeros of $u$. See :ref[Bessel functions of the first kind]{to=spec.bessel-first-kind}.

*Upper bound on the gaps.* On $(0,\infty)$ we have $S > 1$, so part 3 of the corollary with $m = 1$ gives a zero of $u$ in every interval $(\alpha, \alpha+\pi]$; and since the inequality $S > m^2$ is strict, the degenerate case cannot occur and the zero lies in the **open** interval. Hence consecutive positive zeros of $J_0$ are less than $\pi = 3.141593$ apart, and part 4 says there are infinitely many of them.

*Lower bound on the gaps.* Write $j_{0,1} = 2.404826$ for the first positive zero. On $[\,j_{0,1},\infty)$,

$$
S(x) \;\le\; 1 + \frac{1}{4\,j_{0,1}^2} \;=\; 1.043229 \;=\; M^2 , \qquad M = 1.021386 ,
$$

so part 2 says consecutive zeros beyond $j_{0,1}$ are at least $\pi/M = 3.075814$ apart.

*Check.* The first six positive zeros of $J_0$ are

$$
2.404826,\quad 5.520078,\quad 8.653728,\quad 11.791534,\quad 14.930918,\quad 18.071064 ,
$$

with gaps

$$
3.115253,\quad 3.133650,\quad 3.137807,\quad 3.139383,\quad 3.140146 .
$$

Every gap lies in $[3.075814,\ 3.141593]$, as predicted, and the smallest of them, $3.115253$, clears the lower bound by $0.039$. The gaps increase towards $\pi$ because $S(x) \to 1$; this is the same statement as the asymptotic form $J_0(x) \sim \sqrt{2/\pi x}\,\cos(x - \pi/4)$ of :ref[the Bessel asymptotics]{to=spec.bessel-asymptotics}, obtained here without any asymptotic analysis.

*Separation, concretely.* $J_0$ and $Y_0$ are independent solutions of the same equation, so their zeros must interlace. The first few are
$$
\underbrace{0.893577}_{Y_0} < \underbrace{2.404826}_{J_0} < \underbrace{3.957678}_{Y_0} < \underbrace{5.520078}_{J_0} < \underbrace{7.086051}_{Y_0} < \underbrace{8.653728}_{J_0} ,
$$
alternating exactly as the separation theorem requires.
:::

:::example{provenance=original}
**Bracketing the eigenvalues of a tilted well.** Take the regular Sturm-Liouville problem

$$
-u'' + 10\,x\,u = \lambda\,u \quad \text{on } [0,1], \qquad u(0) = u(1) = 0 ,
$$

so $p = w = 1$, $q(x) = 10x$ and the normal-form coefficient is $S(x) = \lambda - 10x$, with

$$
\lambda - 10 \;\le\; S(x) \;\le\; \lambda \qquad (0 \le x \le 1).
$$

Let $\varphi_n$ be the $n$th eigenfunction, with $k = n-1$ interior zeros by part 7 of the corollary, so that $\varphi_n$ has $N = k+1 = n$ zeros in $(0,1]$ counting the one at $x=1$.

*Every eigenvalue is positive.* If $\lambda \le 0$ then $S \le 0$ on $[0,1]$, and part 1 allows at most one zero; but $\varphi_n$ vanishes at both endpoints. So $\lambda_n > 0$ and we may take $M = \sqrt{\lambda_n}$.

*Lower bound.* By the counting bound of part 5 in the direction that needs only $S \le M^2$, taken with $\alpha=0$, $\beta=1$ and $M = \sqrt{\lambda_n}$,
$$
n \;=\; N \;\le\; \Bigl\lfloor \frac{\sqrt{\lambda_n}}{\pi} \Bigr\rfloor \;\le\; \frac{\sqrt{\lambda_n}}{\pi} ,
\qquad\text{so}\qquad
\lambda_n \;\ge\; n^2\pi^2 .
$$

*Upper bound.* Suppose $\lambda_n > n^2\pi^2 + 10$ and set $m = \sqrt{\lambda_n - 10} > n\pi$. Then $S(x) = \lambda_n - 10x > m^2$ for $x < 1$, so each application of part 3 gives a zero *strictly* inside the window, and the zeros $0 = z_0 < z_1 < \cdots$ of $\varphi_n$ satisfy $z_j < j\pi/m < j/n$. In particular $z_n < 1$, so $z_1, \dots, z_n$ are $n$ zeros in the open interval $(0,1)$ — one more than the $n-1$ that $\varphi_n$ has. Hence
$$
n^2\pi^2 \;\le\; \lambda_n \;\le\; n^2\pi^2 + 10 .
$$
The width of the bracket is the oscillation of $q$ across the interval, which is the right answer: adding a constant to $q$ shifts every eigenvalue by that constant.

*Check against the exact values.* Substituting $s = 10^{1/3}(x - \lambda/10)$ turns the equation into Airy's equation (see :ref[Airy functions]{to=spec.airy-functions}), so the eigenvalues are the roots of
$$
\operatorname{Ai}(s_0)\operatorname{Bi}(s_1) - \operatorname{Ai}(s_1)\operatorname{Bi}(s_0) = 0 ,
\qquad s_0 = -\lambda\,10^{-2/3}, \quad s_1 = 10^{1/3} - \lambda\,10^{-2/3} .
$$
Solving numerically:

| $n$ | $n^2\pi^2$ | $\lambda_n$ | $n^2\pi^2 + 10$ | interior zeros of $\varphi_n$ |
|---|---|---|---|---|
| 1 | 9.86960 | 14.76010 | 19.86960 | none |
| 2 | 39.47842 | 44.51092 | 49.47842 | $0.484206$ |
| 3 | 88.82644 | 93.84593 | 98.82644 | $0.327158,\ 0.660335$ |
| 4 | 157.91367 | 162.92561 | 167.91367 | $0.247063,\ 0.496043,\ 0.747000$ |

Every eigenvalue sits inside its bracket, and $\varphi_n$ has exactly $n-1$ interior zeros.

*The spacing bound, checked on $\varphi_4$.* Here $m = \sqrt{162.925610-10} = 12.366309$ and $M = \sqrt{162.925610} = 12.764232$. Part 2 asks only for $S \le M^2$ on $[0,1]$, so *every* gap is at least $\pi/M = 0.246125$. Part 3 is the weaker tool: it needs $S \ge m^2$ on a whole window $[z, z+\pi/m]$, so it bounds a gap above by $\pi/m = 0.254044$ only for a zero $z$ with $z + \pi/m \le 1$. That covers the gaps starting at $0$, $0.247063$ and $0.496043$, but not the last one, whose window $[0.747000,\ 1.001044]$ leaves the interval; there the upper bound is unavailable, and the gap is instead closed by the Dirichlet zero at $x=1$. The four gaps between the zeros $0,\ 0.247063,\ 0.496043,\ 0.747000,\ 1$ are

$$
0.247063,\quad 0.248980,\quad 0.250958,\quad 0.253000 ,
$$

all at least $0.246125$, the first three below the predicted $0.254044$ and the fourth below it as well although nothing above forces that; they increase from left to right because $S(x) = \lambda_4 - 10x$ decreases as $x$ grows: the eigenfunction oscillates faster where the potential is lower.

*Interlacing.* Part 6 predicts a zero of $\varphi_4$ strictly between consecutive zeros of $\varphi_3$. The zeros of $\varphi_3$ in $[0,1]$ are $0,\ 0.327158,\ 0.660335,\ 1$, and each of the three gaps does contain one of $0.247063$, $0.496043$, $0.747000$.
:::

:::application{provenance=original}
- **Nodes of a vibrating string.** For $w u_{tt} = (pu_x)_x - qu$ the modes are the Sturm-Liouville eigenfunctions, and their interior zeros are the points of the string that never move. Part 6 is the statement that each higher harmonic has at least one more node than the one below it, and part 7 fixes the count at $n-1$ for the $n$th mode — the fact a player uses when touching the string at a node to sound a harmonic :cite[]{work=strauss-2008 loc="§10.4, pp. 278–279"}. Part 5 says where the nodes are: closer together where $p/w$ is small, which is why the nodes of a string of varying density crowd into the heavy sections. See :ref[the vibrating string]{to=pde.vibrating-string-modes} and :ref[normal modes]{to=linalg.normal-modes}.
- **Counting bound states.** For $-\psi'' + V(x)\psi = E\psi$ the normal-form coefficient is $S = E - V$, positive exactly in the classically allowed region. Part 3 says the wavefunction completes a half-oscillation in every stretch of length $\pi/\sqrt{E - V_{\max}}$ there, and part 1 says it cannot oscillate at all where $E < V$; counting the half-oscillations that fit is the node-counting argument behind the statement that the $n$th bound state has $n-1$ nodes, and, read backwards as in the second example, it brackets the energies. The refinement in which $\sqrt{E-V(x)}$ is integrated instead of bounded is :ref[the WKB approximation]{to=asym.wkb-approximation}.
- **Conjugate points and the stability of extremals.** Along a geodesic on a surface, a Jacobi field normal to the geodesic obeys $v'' + K(s)v = 0$ with $K$ the Gaussian curvature, and the conjugate points are the zeros of $v$ :cite[]{work=docarmo-2016 loc="§5-5, Exercise 3, p. 375"}. The comparison theorem then reads: the more positively curved the surface, the sooner geodesics refocus. Do Carmo draws the two standard conclusions — if $K \le K_0$ with $K_0 > 0$ there is no conjugate point before $\pi/\sqrt{K_0}$, and if $K \ge K_1 > 0$ there is one by $\pi/\sqrt{K_1}$ — which are parts 2 and 3 of the corollary in geometric dress. The same computation in the calculus of variations is Jacobi's condition for a weak minimum: see :ref[conjugate points]{to=var.jacobi-conjugate-points} and :ref[geodesics]{to=geom.geodesics}.
- **Zeros of the special functions.** Every classical orthogonal family satisfies a second-order equation, so its zeros are governed by the corollary rather than by its series. The first example gives the spacing of the zeros of $J_0$ from the equation alone; the same argument applied to $x^{1/2}J_\nu(x)$, whose normal-form coefficient is $S_\nu(x) = 1 + (1-4\nu^2)/(4x^2)$, shows that every $J_\nu$ with $\nu \ge 0$ has infinitely many positive zeros :cite[]{work=coddington-1989 loc="Ch. 4, §8, Exercise 6, p. 179, with the case of order zero in Ch. 4, §7, Exercise 3, p. 171"}. For $\nu > 1/2$ one gets more: there $S_\nu < 1$, so part 2 with $M = 1$ separates consecutive zeros by at least $\pi$, and a gap of exactly $\pi$ is impossible — comparing with $\sin(x - x_1)$, whose only zero in $(x_1, x_1+\pi]$ is the right endpoint, would put us in the degenerate case and force $S_\nu \equiv 1$ on the gap. So for $\nu > 1/2$ the zeros are strictly more than $\pi$ apart. Those zeros are what the Dirichlet condition on a circular drum selects, and they index the Fourier-Bessel series of :ref[Bessel orthogonality]{to=spec.bessel-orthogonality}.
:::
