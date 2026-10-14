---
id: num.floating-point-errors
title: Floating-point arithmetic and error
kind: definition
level: core
summary: Defines the floating-point numbers, machine epsilon and the unit roundoff, proves the relative-error bound that every rounded operation obeys, and separates the conditioning of a problem (which no algorithm can repair) from the stability of an algorithm (which a better algorithm can).
prereqs: []
provenance: adapted
sources:
  - work: rhb-2006
    loc: "Ch. 27, introduction: rounding errors, attributed there to the limited precision with which a value can be stored, set against truncation errors, attributed to the approximations built into the procedure itself, and the warning that a procedure's sensitivity to both must be understood, pp. 984-985"
    pages: "984-985"
    role: the two sources of numerical error and the warning that a procedure's sensitivity to them is a property of the procedure; the vocabulary rounding error / truncation error as this handbook uses it
  - work: rhb-2006
    loc: "§27.3.1, Gaussian elimination with interchange: the equations are reordered before each elimination so that the largest remaining coefficient of the variable being eliminated sits on the leading diagonal, the stated purpose being to keep the errors from finite precision from becoming excessive, with a worked three-variable example, pp. 995-996; read with the chapter's opening remarks on rounding, pp. 984-985"
    pages: "984-985, 995-996"
    role: the standard example of two algorithms for one problem that differ only in their sensitivity to rounding - our illustration that stability is a property of the algorithm
  - work: strauss-2008
    loc: "§1.5, Well-posed problems: stability as the third requirement of well-posedness and why it is demanded of physical models; the non-singular matrix with one very small eigenvalue, whose solution is unique but whose error is 'greatly magnified' by a perturbation of b, and which is called ill-conditioned in scientific computation, pp. 26-27"
    pages: "26-27"
    role: conditioning as the stability half of well-posedness, and the term ill-conditioned
  - work: arfken-2013
    loc: "Exercise 5.1.3 with its Note: the Hilbert matrix arising from least-squares fitting by a power series, with det A = 3.7 x 10^{-12} at n = 5 and the system 'becoming ill-conditioned and unstable', p. 267"
    pages: "267"
    role: a concrete ill-conditioned problem from an everyday fitting calculation
---

:::note{provenance=original}
**What it means.** A computer does not do arithmetic in $\mathbb{R}$. It works in a finite set of numbers, and every operation lands on the nearest member of that set. The single fact worth carrying away is quantitative: in IEEE double precision each operation commits a *relative* error of at most $1.11 \times 10^{-16}$, and that is all the arithmetic itself does to you. Everything else -- the catastrophic loss of digits, the answer that is wrong in the third place -- comes from how those tiny errors are propagated by the formula you chose, or from the problem itself being hypersensitive to its data. Keeping those two apart is the whole content of this unit.
:::

:::definition[Floating-point numbers, machine epsilon, unit roundoff]{provenance=original}
Fix a base $\beta \ge 2$, a **precision** $t \ge 1$ and exponent bounds $e_{\min} \le e_{\max}$. The set of **normalised floating-point numbers** is

$$
\mathbb{F} = \{0\} \cup \Bigl\{ \pm m \,\beta^{\,e-t+1} \ : \ \beta^{\,t-1} \le m \le \beta^{\,t}-1,\ m \in \mathbb{Z},\ e_{\min} \le e \le e_{\max} \Bigr\} .
$$

Writing $m$ in base $\beta$ displays the familiar form $\pm (d_0 . d_1 d_2 \cdots d_{t-1})_\beta \times \beta^{e}$ with the leading digit $d_0 \neq 0$; the condition $m \ge \beta^{t-1}$ is exactly that normalisation. A non-zero $x \in \mathbb{F}$ with exponent $e$ satisfies $\beta^{e} \le |x| < \beta^{e+1}$, and the spacing between neighbouring elements of $\mathbb{F}$ in that range -- one **unit in the last place**, $\operatorname{ulp}$ -- is $\beta^{\,e-t+1}$. The spacing is therefore not uniform: it is proportional to the magnitude, which is the defining feature of a floating-point system and the reason relative error, not absolute error, is the natural currency here.

Two numbers measure the fineness of $\mathbb{F}$ near $1$:

- the **machine epsilon** $\varepsilon_{M} = \beta^{\,1-t}$, the gap between $1$ and the next larger element of $\mathbb{F}$;
- the **unit roundoff** $u = \tfrac{1}{2}\beta^{\,1-t} = \tfrac{1}{2}\varepsilon_M$, half that gap.

Usage differs between books and between software: some call $u$ the machine epsilon, and some programming environments report $\varepsilon_M$ under that name. This unit uses the two symbols above throughout, and every statement below is in terms of $u$.

Let $\mathrm{fl} : \mathbb{R} \to \mathbb{F}$ be **round to nearest**: $\mathrm{fl}(x)$ is the element of $\mathbb{F}$ closest to $x$, ties broken by any fixed rule. Say $x$ is **in range** if $\beta^{\,e_{\min}} \le |x| \le (\beta - \beta^{\,1-t})\beta^{\,e_{\max}}$, the largest element of $\mathbb{F}$ being $(\beta^t - 1)\beta^{\,e_{\max}-t+1} = (\beta - \beta^{1-t})\beta^{e_{\max}}$. Below the lower bound the number **underflows**, above the upper bound it **overflows**.

The IEEE-754 binary64 format ("double precision") is $\beta = 2$, $t = 53$, $e_{\min} = -1022$, $e_{\max} = 1023$, so

$$
\varepsilon_M = 2^{-52} = 2.220446049250313 \times 10^{-16}, \qquad
u = 2^{-53} = 1.1102230246251565 \times 10^{-16},
$$

the smallest positive normalised number is $2^{-1022} = 2.2250738585072014 \times 10^{-308}$ and the largest finite number is $(2-2^{-52})2^{1023} = 1.7976931348623157 \times 10^{308}$. Since $53 \log_{10} 2 = 15.95$, a double carries just under sixteen decimal digits.
:::

:::statement[The rounding error of one operation]{provenance=original}
Let $x \in \mathbb{R}$ be in range. Then

$$
\mathrm{fl}(x) = x\,(1+\delta) \qquad \text{for some } \delta \text{ with } |\delta| \le u .
$$

If moreover $a, b \in \mathbb{F}$, $\ast$ is one of $+,-,\times,\div$ (with $b \neq 0$ for $\div$), and the exact value $a \ast b$ is in range, then the IEEE-754 requirement that an operation return the correctly rounded exact result gives

$$
\mathrm{fl}(a \ast b) = (a \ast b)(1+\delta), \qquad |\delta| \le u ,
$$

and likewise $\mathrm{fl}(\sqrt{a}) = \sqrt{a}\,(1+\delta)$ with $|\delta| \le u$. This pair of statements is called the **standard model** of floating-point arithmetic.
:::

:::idea{provenance=original}
Everything follows from the spacing. The numbers of $\mathbb{F}$ between two consecutive powers $\beta^{e}$ and $\beta^{e+1}$ sit on a uniform grid of mesh $\beta^{e-t+1}$. Rounding to the nearest grid point costs at most half a mesh in absolute terms; dividing that by $|x| \ge \beta^{e}$ turns it into a *relative* bound in which the exponent $e$ cancels. The cancellation of $e$ is the whole point: the bound is the same everywhere in range, which is why floating point is useful across three hundred orders of magnitude. The second half of the statement is then not a separate fact but a definition honoured: the hardware is required to compute $a \ast b$ exactly and then round, so the only error is the rounding already bounded.
:::

:::proof{provenance=original}
Let $x$ be in range; by symmetry take $x > 0$, and let $e$ be the integer with $\beta^{e} \le x < \beta^{e+1}$. Being in range forces $e_{\min} \le e \le e_{\max}$.

1. *The grid.* The elements of $\mathbb{F}$ with exponent $e$ are the numbers $m\beta^{\,e-t+1}$ for integers $m$ with $\beta^{t-1} \le m \le \beta^{t}-1$. They run from $\beta^{e}$ up to $\beta^{e+1} - \beta^{\,e-t+1}$ in steps of $\beta^{\,e-t+1}$. Two cases complete the grid. If $e < e_{\max}$, the next element of $\mathbb{F}$ is $\beta^{e+1}$ (exponent $e+1$, $m = \beta^{t-1}$), one further step along, so the whole closed interval $[\beta^{e}, \beta^{e+1}]$ is covered by grid points of spacing $\beta^{\,e-t+1}$. If $e = e_{\max}$, then $\beta^{e+1} \notin \mathbb{F}$, but the largest element of $\mathbb{F}$ is $\beta^{e+1}-\beta^{\,e-t+1}$ and $x$ being in range means $x$ does not exceed it; so $x$ again lies in the gridded part.

2. *Rounding cost.* By step 1, $x$ lies between two consecutive grid points of spacing $\beta^{\,e-t+1}$, hence within $\tfrac12\beta^{\,e-t+1}$ of the nearer one. Since $\mathrm{fl}(x)$ is the nearest element of all of $\mathbb{F}$, it is at least as close:
$$
|\mathrm{fl}(x) - x| \le \tfrac12 \beta^{\,e-t+1} .
$$

3. *Relative form.* Divide by $x$ and use $x \ge \beta^{e}$:
$$
\frac{|\mathrm{fl}(x) - x|}{x} \le \frac{\tfrac12\beta^{\,e-t+1}}{\beta^{e}} = \tfrac12 \beta^{\,1-t} = u .
$$
Setting $\delta = (\mathrm{fl}(x)-x)/x$ gives $\mathrm{fl}(x) = x(1+\delta)$ with $|\delta| \le u$, which is the first claim.

4. *Operations.* IEEE-754 specifies that $+,-,\times,\div$ and $\sqrt{\ }$ return the correctly rounded value of the exact mathematical result. So the computed value of $a \ast b$ is $\mathrm{fl}(a \ast b)$ with $a \ast b$ the exact real number, and step 3 applied to that real number gives the stated bound. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
- **In range.** The bound $x \ge \beta^{e}$ in step 3 is the only place normalisation enters, and it is where the proof fails on underflow. Below $\beta^{e_{\min}}$ the grid stops shrinking: IEEE-754 fills that gap with **subnormal** numbers, multiples of $\beta^{\,e_{\min}-t+1}$, so only the *absolute* bound $|\mathrm{fl}(x)-x| \le \tfrac12\beta^{\,e_{\min}-t+1}$ survives. For $x = 2^{-1080}$ in binary64 the nearest representable numbers are $0$ and $2^{-1074}$, and the relative error of rounding is of order $1$. Overflow is worse still: there is no bound at all, the result being $\infty$.
- **Round to nearest.** Step 2 uses it. With truncation toward zero the error is at most a whole step rather than half, and the bound doubles to $|\delta| \le \varepsilon_M = 2u$; the error also acquires a systematic sign, so it accumulates linearly over a long computation instead of partly cancelling.
- **One operation at a time.** The model governs each operation separately. It says nothing about a sequence of them, and no amount of staring at it will tell you the error of a formula; that requires propagating the $\delta$'s through the formula, which is what the condition number below does.
- **$a, b$ already in $\mathbb{F}$.** The second half assumes the operands are representable. If they are themselves rounded data the two errors compose, giving $(1+\delta_1)(1+\delta_2) = 1 + \delta_1 + \delta_2 + O(u^2)$: relative errors add to first order.
:::

:::remark[Subtraction is innocent: cancellation reveals error, it does not create it]{provenance=original}
A subtraction of nearly equal numbers is often blamed for a loss of accuracy. The blame is misplaced, and sharply so.

Write $\mathbb{F}^{\ast}$ for $\mathbb{F}$ together with the subnormals, the integer multiples of $\beta^{\,e_{\min}-t+1}$ of modulus below $\beta^{\,e_{\min}}$, which IEEE-754 provides.

**Lemma (Sterbenz).** Let $\beta = 2$ and let $a, b \in \mathbb{F}$ be positive with $\tfrac12 b \le a \le 2b$. Then $a - b \in \mathbb{F}^{\ast}$, so $\mathrm{fl}(a-b) = a-b$ *exactly*.

*Proof.* Take $a \ge b$ (otherwise swap and negate, which changes nothing). Let $e$ be the exponent of $b$, so $2^{e} \le b < 2^{e+1}$ and $b$ is an integer multiple of $2^{\,e-t+1}$. Since $a \ge b$ the exponent of $a$ is some $e_a \ge e$, so $a$ is a multiple of $2^{\,e_a-t+1}$, hence of $2^{\,e-t+1}$; so is the difference. The hypothesis $a \le 2b$ gives $0 \le a-b \le b < 2^{e+1}$. Set $v = a-b$ and suppose $v > 0$. Let $e'$ be the integer with $2^{e'} \le v < 2^{e'+1}$; then $e' \le e$, and $v$, being a multiple of $2^{\,e-t+1} = 2^{\,e-e'}\cdot 2^{\,e'-t+1}$, is a multiple of $2^{\,e'-t+1}$. If $e' \ge e_{\min}$, then $v = m\,2^{\,e'-t+1}$ with $2^{t-1} \le m < 2^{t}$, a normalised element of $\mathbb{F}$. If $e' < e_{\min}$, then $v < 2^{\,e_{\min}}$ while $v$ is a multiple of $2^{\,e-t+1}$ and $e \ge e_{\min}$, so $v$ is a multiple of $2^{\,e_{\min}-t+1}$: a subnormal. Either way $v \in \mathbb{F}^{\ast}$, and $v = 0$ is in $\mathbb{F}$ trivially. $\square$

So when two close numbers are subtracted, the subtraction itself is error-free. What happens is that the *errors already present in the operands*, which were small relative to the operands, are now large relative to the much smaller difference. The worked example below shows this happening digit by digit: the square root is rounded, the subtraction is exact, and the answer is wrong in the third decimal place.
:::

:::definition[Conditioning of a problem, stability of an algorithm]{provenance=adapted src="strauss-2008:§1.5, the stability requirement for well-posedness and the ill-conditioned matrix with a very small eigenvalue, pp. 26-27"}
Regard a problem as a map $f : X \to Y$ from data to answer. Its **relative condition number** at $x$ measures how much a relative perturbation of the data is magnified in the answer:

$$
\kappa_f(x) \;=\; \lim_{\epsilon \to 0} \ \sup_{0 < \|\Delta x\| \le \epsilon \|x\|} \ \frac{\|f(x+\Delta x) - f(x)\| \big/ \|f(x)\|}{\|\Delta x\| \big/ \|x\|} .
$$

For a differentiable scalar $f$ with $f(x) \neq 0$ this is $\kappa_f(x) = |x f'(x)| / |f(x)|$. A problem is **ill-conditioned** when $\kappa_f$ is large; :cite[Strauss]{work=strauss-2008 loc="§1.5, p. 27"} introduces the word for the matrix case, where the data are the right-hand side of $Au = b$ and a very small eigenvalue of $A$ magnifies a perturbation of $b$ (the matrix condition number $\|A\|\,\|A^{-1}\|$ is treated in :ref[]{to=linalg.matrix-norms-conditioning}). Conditioning is a property of the *problem*: it is there before any algorithm is chosen, and no algorithm removes it, because the data themselves are only known to within a rounding.

An algorithm is a second map $\tilde f : X \to Y$, the one the machine actually computes. It is **backward stable** if for every $x$ there is a nearby $\tilde x$ with

$$
\tilde f(x) = f(\tilde x), \qquad \frac{\|\tilde x - x\|}{\|x\|} = O(u) :
$$

the computed answer is the exact answer to a slightly different question. Backward stability is a property of the *algorithm*, and two algorithms for the same problem can differ in it completely. The two notions combine in one inequality, proved by the definition of $\kappa_f$: if $\tilde f(x) = f(\tilde x)$ with relative backward error $\eta$, then

$$
\frac{\|\tilde f(x) - f(x)\|}{\|f(x)\|} \ \le \ \kappa_f(x)\,\eta + o(\eta) .
$$

**Forward error $\lesssim$ condition number $\times$ backward error.** A large forward error therefore has exactly two possible causes, and the inequality tells you which: either $\kappa_f$ is large, in which case the problem is to blame and a different algorithm will not help, or the algorithm is unstable and should be replaced.
:::

:::remark[Rounding error and truncation error are different things]{provenance=adapted src="rhb-2006:Ch. 27, introduction, pp. 984-985"}
:cite[Riley, Hobson and Bence]{work=rhb-2006 loc="Ch. 27, pp. 984-985"} separate two sources of numerical error, and the distinction is used throughout this part of the handbook. **Rounding error** comes from the finite precision with which a value is stored, and is what this unit is about; it is governed by $u$ and does not improve when you refine a discretisation. **Truncation error** (also called discretisation error) comes from the approximation built into the numerical procedure itself -- replacing a derivative by a difference quotient (:ref[]{to=num.finite-differences}), an integral by a finite sum (:ref[]{to=num.quadrature}), a function by a polynomial (:ref[]{to=num.interpolation}) -- and it shrinks as the step $h$ shrinks. The two run in opposite directions as $h \to 0$: truncation error falls like a power of $h$ while rounding error, divided by $h$ or $h^2$ in a difference quotient, grows. The optimal step is where they cross, and it is never zero.
:::

:::method[Diagnosing and curing a loss of accuracy]{provenance=original}
1. **Estimate the condition number of the problem** at your data, from $\kappa_f = |xf'(x)|/|f(x)|$ for a scalar problem or from $\|A\|\|A^{-1}\|$ for a linear system. If $\kappa_f \approx 10^{k}$, expect to lose $k$ of your sixteen digits no matter what you do. Stop here if $k$ is large: the fix is a reformulation of the problem, better data, or extended precision -- not a better algorithm.
2. **If the problem is well conditioned but the answer is bad, the algorithm is unstable.** Look for the step at which a quantity much smaller than its inputs is formed. That step is where previously harmless relative errors become visible.
3. **Remove the cancellation algebraically**, using an identity that computes the small quantity directly instead of as a difference:
$$
\sqrt{x+1}-\sqrt{x} = \frac{1}{\sqrt{x+1}+\sqrt{x}}, \qquad
1 - \cos x = 2\sin^{2}\tfrac{x}{2}, \qquad
\ln(1+x) \ \text{by its series for small } x .
$$
For the roots of $ax^2+bx+c$, compute the root of larger modulus by the usual formula with the sign of $b$ chosen to *add*, then obtain the other from the product of the roots, $x_1 x_2 = c/a$.
4. **Reorder the arithmetic** where you cannot remove the cancellation: sum a series from the small terms upward, and pivot before eliminating. Pivoting is the standard instance: :cite[Gaussian elimination with interchange]{work=rhb-2006 loc="§27.3.1, pp. 995-996"} reorders the equations before each elimination so that the largest remaining coefficient occupies the diagonal position, which bounds the multipliers by $1$ and stops the rounding errors growing. Same problem, same arithmetic count, different stability (:ref[]{to=num.linear-systems-numerics}).
5. **Re-run in higher precision and compare.** Agreement to $k$ digits between double and quadruple precision is evidence, not proof, that $k$ digits are right; disagreement is proof that they are not.
:::

:::example[A well-conditioned problem that a natural formula gets wrong in the third decimal place]{provenance=original}
Take the quadratic

$$
x^{2} - 2bx + 1 = 0, \qquad b = 10^{7},
$$

whose roots are $r_{\pm} = b \pm \sqrt{b^{2}-1}$ with $r_{+}r_{-} = 1$. We want the small root $r_{-}$. All of what follows is IEEE binary64 arithmetic.

**Step 1: the problem is perfectly conditioned.** Treat $b$ as the datum. From $r_{-} = b - \sqrt{b^{2}-1}$,
$$
\frac{dr_{-}}{db} = 1 - \frac{b}{\sqrt{b^{2}-1}} = -\frac{r_{-}}{\sqrt{b^{2}-1}},
\qquad\text{so}\qquad
\kappa(b) = \left|\frac{b}{r_{-}}\frac{dr_{-}}{db}\right| = \frac{b}{\sqrt{b^{2}-1}} = 1.000000000000005 .
$$
A relative perturbation of $b$ changes $r_{-}$ by the same relative amount. Nothing about this problem is delicate.

**Step 2: the natural formula, step by step.** $b = 10^{7}$ is in $\mathbb{F}$. So is $b^{2} = 10^{14}$, since $10^{14} = 2^{14}\cdot 5^{14}$ and $5^{14} = 6103515625 < 2^{53}$; so is $b^{2}-1 = 99999999999999 < 2^{53}$, and both operations are exact. The square root is not exact: its true value is
$$
\sqrt{99999999999999} = 9999999.99999995000000000125\ldots,
$$
and the nearest double is
$$
\mathrm{fl}(\sqrt{b^2-1}) = 9999999.99999994970858097076416015625 ,
$$
low by $2.914 \times 10^{-10}$. That is a relative error of $2.91 \times 10^{-17}$, comfortably inside the guaranteed $u = 1.11\times10^{-16}$: the square root did its job.

**Step 3: the subtraction, which is exact.** The operands satisfy $\tfrac12 b \le \mathrm{fl}(\sqrt{b^2-1}) \le 2b$, so by the lemma above the subtraction commits no error at all and returns the exact difference of the two stored numbers,
$$
\widetilde r_{-} = 10^{7} - 9999999.99999994970858097076416015625 = 5.029141902923583984375\times10^{-8},
$$
which rounds to the double $5.029141902923584\times10^{-8}$.

**Step 4: compare.** The true root, to twenty digits, is
$$
r_{-} = \frac{1}{10^{7}+\sqrt{10^{14}-1}} = 5.0000000000000125\times10^{-8} .
$$
So the computed value is wrong by $2.914\times10^{-10}$ -- precisely the error made in step 2, carried through unchanged -- and its **relative error is $5.83 \times 10^{-3}$**. Two correct digits out of sixteen, from a problem with $\kappa = 1$ and an arithmetic that never erred by more than $3\times10^{-17}$ relatively.

**Step 5: the stable formula.** Using $r_{-} = 1/(b+\sqrt{b^{2}-1})$ there is no subtraction of near-equals. The same square root, now added to $b$, gives the double
$$
\widetilde r_{-}^{\,\text{stable}} = 5.000000000000013\times10^{-8},
$$
with **relative error $1.02\times10^{-16}$**, that is $0.92\,u$: full accuracy. The two formulas are the same function of $b$ on paper and differ by a factor of $5.7\times10^{13}$ in accuracy. That factor is the difference between an unstable algorithm and a stable one, and the condition number $\kappa = 1$ is what tells us the blame lies there and not with the question.
:::

:::application[Variance, and why one-pass formulas are banned in production code]{provenance=original}
Reducing a long record -- a time series of temperatures, a run of detector counts, a Monte Carlo sample (:ref[]{to=num.monte-carlo}) -- to a mean and a variance is the most-performed calculation in the applied sciences, and the textbook identity
$$
s^{2} = \frac{1}{n-1}\Bigl(\sum_i x_i^{2} - \frac{1}{n}\Bigl(\sum_i x_i\Bigr)^{2}\Bigr)
$$
is attractive because it needs one pass and two accumulators. It is also a subtraction of two nearly equal large numbers whenever the data have a large mean compared with their spread, which is the normal situation for an instrument reading around a baseline.

Take the five values $x_i = 10^{8}+i$, $i = 1,\dots,5$, whose mean is exactly $10^{8}+3$ and whose sample variance is exactly $\tfrac{1}{4}(4+1+0+1+4) = 2.5$. In binary64: $\sum x_i = 500000015$ is formed exactly, but $\sum x_i^{2}$ has the exact value $50000003000000055$, which is not representable -- $5\times10^{16}$ lies in $[2^{55},2^{56})$, where the spacing of $\mathbb{F}$ is $2^{\,55-52} = 8$ -- and the machine returns the correctly rounded $50000003000000056$. On the other side, $(\sum x_i)^2 = 250000015000000225$ lies in $[2^{57},2^{58})$, where the spacing is $32$, and rounds to $250000015000000224$; dividing by $n = 5$ gives $50000003000000044.8$, which rounds to $50000003000000048$. The difference of the two stored numbers is $8$, and the formula returns
$$
s^{2}_{\text{naive}} = \frac{8}{4} = 2.0 \qquad\text{against the true } 2.5 ,
$$
an error of $20\%$ with data that are integers and a calculation with four correct inputs. The two-pass form $s^{2} = \frac{1}{n-1}\sum_i (x_i - \bar x)^2$, which subtracts before squaring, returns $2.5$ exactly.

The same arithmetic lies behind three familiar rules of practice: subtract a reference value from a geophysical record before computing its statistics; compute differences of total energies in molecular dynamics by accumulating the difference rather than differencing the totals; and, in least-squares fitting, avoid forming the normal-equation matrix at all. :cite[Arfken, Weber and Harris]{work=arfken-2013 loc="Exercise 5.1.3, Note, p. 267"} record what happens if you do: fitting a power series on $[0,1]$ produces the Hilbert matrix $A_{ij} = 1/(i+j+1)$, whose determinant at $n = 5$ is already $3.7\times10^{-12}$ and whose system they describe as becoming ill-conditioned and unstable. That is case 1 of the method above and not case 2 -- the problem is ill-conditioned, so the cure is to change the problem, by orthogonalising the basis (:ref[]{to=spec.orthogonal-polynomials-general}) or by solving the least-squares problem through a QR or singular-value decomposition (:ref[]{to=linalg.svd}) instead of through the normal equations.
:::
