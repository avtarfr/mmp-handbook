---
id: ode.self-adjoint-operators
title: Adjoint and self-adjoint differential operators
kind: definition
level: core
summary: The formal adjoint of a second-order differential operator, Lagrange's identity and Green's formula with the boundary term written out, the criterion for formal self-adjointness, and the integrating factor that puts any second-order equation into self-adjoint (Sturm-Liouville) form.
prereqs: [ode.linear-ode-theory, linalg.inner-product-spaces]
provenance: adapted
sources:
  - work: stakgold-holst-2011
    loc: "§2.5, Green's Formula and Lagrange's Identity, eqs. (2.5.7)–(2.5.14), pp. 166–168; §3.2, The Adjoint Problem, eqs. (3.2.17)–(3.2.21) and Examples 3–6, pp. 197–199"
    pages: "166-168, 197-199"
    role: definition of the formal adjoint of a second-order operator and of the conjunct $J(u,v)$; Lagrange's identity and Green's formula in the bilinear (unconjugated) form; the criterion $a_2'=a_1$ for formal self-adjointness; adjoint boundary conditions and the definition of a self-adjoint boundary-value problem
  - work: hassani-2013
    loc: "§14.5, Def. 14.5.1 and Prop. 14.5.2 (exactness), pp. 433–434; eq. (14.21) (the adjoint $L^\\dagger$), Lagrange identities (14.22)–(14.23), p. 434–435; Thm 14.5.4 (every SOLDE can be made self-adjoint) and Example 14.5.5, pp. 435–436; §19.2, the definition of a singular Sturm-Liouville system (four conditions), p. 572, and Example 19.2.2(c) (Bessel in Sturm-Liouville form), p. 571"
    pages: "433-436, 571-572"
    role: the adjoint as the operator whose solutions are integrating factors; the Lagrange identities and the reading of $L^\dagger$ as a Hilbert-space adjoint; the criterion $p_2'=p_1$ and the integrating factor $h=p_2^{-1}\exp\int p_1/p_2$; the Legendre and Bessel examples; the four conditions that make a Sturm-Liouville system singular
  - work: arfken-2013
    loc: "§8.2, Hermitian Operators, eqs. (8.8)–(8.20) and the summary box, pp. 384–386; Example 8.2.1 (Laguerre functions), p. 387"
    pages: "384-387"
    role: the two integrations by parts with the boundary terms displayed; which boundary conditions kill them; the weight factor $w$ that makes the scalar product consistent with hermiticity; the explicit warning that self-adjointness in the differential-equation sense is weaker than self-adjointness of a Hilbert-space operator
  - work: rhb-2006
    loc: "§17.2, eqs. (17.15)–(17.16) (adjoint, self-adjoint, Hermitian), pp. 559–560; §17.4, eqs. (17.32)–(17.35) with the footnote on the sign of the $\\lambda\\rho y$ term, p. 564; §17.4.1, eqs. (17.36)–(17.37), p. 565; §17.4.2, eq. (17.39) and Table 17.1, pp. 566–567"
    pages: "559-560, 564-567"
    role: the distinction between \"self-adjoint\" (no boundary terms required) and \"Hermitian\" (boundary terms vanish); the sign convention for the general Sturm-Liouville equation and the footnoted variant; the integrating factor in the form $F=\exp\int(r-p')/p$; the natural interval, read off from $p(a)=p(b)=0$; the table of classical equations in Sturm-Liouville form
  - work: strauss-2008
    loc: "§5.3, Green's second identity (3), symmetric boundary conditions (4)–(5) and (9), pp. 118–121, and Exercise 8, p. 123; §11.4, the standing hypotheses on $p,q,m$, p. 314, eqs. (7)–(8) and the list of singular cases (i)–(iii), pp. 315–316, and Exercise 6, p. 317"
    pages: "118-123, 314-317"
    role: the definition of symmetric (hermitian) boundary conditions as the vanishing of the boundary term for every admissible pair; the four standard examples and a non-example; the boundary term with the factor $p$ for variable coefficients; the standing hypotheses on the coefficients and what makes a Sturm-Liouville problem singular
  - work: reed-simon-1980
    loc: "§VIII.2, definitions of symmetric and self-adjoint operators and the paragraph on why the distinction matters, pp. 255–256"
    pages: "255-256"
    role: the precise distinction, for unbounded operators, between symmetric ($T\subset T^*$) and self-adjoint ($T=T^*$, equal domains), used in the remark on what formal self-adjointness does and does not give
---

:::definition[Formal adjoint and conjunct]{provenance=adapted src="stakgold-holst-2011:§2.5, eqs. (2.5.8)–(2.5.9), p. 167, and §3.2, eqs. (3.2.17)–(3.2.20), p. 197; hassani-2013:§14.5, eq. (14.21), p. 434"}
Work on a finite interval $[a,b]$ with the second-order operator

$$
L = a_2(x)\,D^2 + a_1(x)\,D + a_0(x), \qquad D = \frac{\mathrm d}{\mathrm d x},
$$

whose coefficients lie in $C^2[a,b]$ — the hypothesis under which :cite[Stakgold and Holst]{work=stakgold-holst-2011 loc="§2.5, p. 166"} set up the identities below — and which we take to be real-valued. The **formal adjoint** of $L$ is the second-order operator

$$
L^{*} = a_2\,D^2 + \bigl(2a_2' - a_1\bigr)D + \bigl(a_2'' - a_1' + a_0\bigr),
$$

and the **conjunct** of two functions $u,v$ is the bilinear expression

$$
J(u,v) = a_2\,\bigl(v u' - u v'\bigr) + \bigl(a_1 - a_2'\bigr)\,u v .
$$

Hassani writes the same operator as $L^{\dagger}$ and the same expression as $p_2 v u' - (p_2 v)' u + p_1 u v$, which expands to the display above. Note that $J$ involves only $u,v$ and their first derivatives: one order less than $L$.

The word *formal* is deliberate. $L^{*}$ is produced by the coefficients of $L$ alone; no boundary conditions, no inner product and no domain have been chosen yet. Boundary conditions enter in the next definition, and the distinction is the subject of the remark below.
:::

:::statement[Lagrange's identity and Green's formula]{provenance=adapted src="stakgold-holst-2011:§2.5, eqs. (2.5.7) and (2.5.10)–(2.5.14), pp. 166–167; hassani-2013:§14.5, Lagrange identities (14.22)–(14.23), pp. 434–435"}
For all $u,v \in C^2[a,b]$,

$$
v\,Lu - u\,L^{*}v = \frac{\mathrm d}{\mathrm d x}\,J(u,v) ,
$$

which is **Lagrange's identity**, and therefore, integrating from $a$ to $b$,

$$
\int_a^b \bigl(v\,Lu - u\,L^{*}v\bigr)\,\mathrm d x \;=\; \Bigl[\,J(u,v)\,\Bigr]_a^b ,
$$

which is **Green's formula**.

$L$ is called **formally self-adjoint** when $L^{*} = L$. For a second-order operator this happens if and only if

$$
a_2' = a_1 ,
$$

in which case $L$ collapses to the divergence form $Lu = \bigl(a_2 u'\bigr)' + a_0 u$ and the conjunct loses its last term:

$$
J(u,v) = a_2\,\bigl(v u' - u v'\bigr), \qquad
\int_a^b \bigl(v\,Lu - u\,Lv\bigr)\,\mathrm d x = \Bigl[\,a_2\,\bigl(v u' - u v'\bigr)\,\Bigr]_a^b .
$$
:::

:::idea{provenance=original}
Both halves come from moving the derivatives off $u$ and onto $v$, and we do it pointwise, before any integration. The product rule rewrites each term of $v\,Lu$ as the derivative of something plus a term carrying no derivative of $u$: twice for $v\,a_2u''$, once for $v\,a_1u'$, not at all for $v\,a_0u$. Collecting the two pieces, the coefficient that has accumulated in front of each derivative of $v$ is exactly the corresponding coefficient of $L^{*}$, while what sits inside the total derivative is exactly $J(u,v)$ — and that identity of functions is Lagrange's. Green's formula is then one integration and the fundamental theorem of calculus, which is where the endpoints appear.
:::

:::proof{provenance=adapted src="stakgold-holst-2011:§2.5, the derivation of (2.5.7)–(2.5.11), pp. 166–167; hassani-2013:§14.5, the computation leading to (14.22), p. 434"}
1. *Move the derivatives off $u$, one term at a time.* Expand each term of $v\,Lu$ using the product rule, aiming to produce a derivative of something plus a term with no derivative on $u$:

   $$
   v\,a_2 u'' = \bigl(a_2 v\,u' - (a_2 v)'\,u\bigr)' + (a_2 v)''\,u ,
   \qquad
   v\,a_1 u' = \bigl(a_1 v\,u\bigr)' - (a_1 v)'\,u .
   $$

   For the first: differentiating the bracket gives $(a_2v)'u' + a_2 v u'' - (a_2v)''u - (a_2v)'u'$, whose middle terms are what we want and whose outer terms cancel. The second is the ordinary product rule rearranged.

2. *Assemble.* Adding the two displays and $v\,a_0 u$,

   $$
   v\,Lu = \frac{\mathrm d}{\mathrm d x}\Bigl[\,a_2 v\,u' - (a_2 v)'\,u + a_1 v\,u \,\Bigr]
   \;+\; u\,\Bigl[\,(a_2 v)'' - (a_1 v)' + a_0 v\,\Bigr].
   $$

3. *Identify the two pieces.* Expanding the second bracket with the product rule,

   $$
   (a_2 v)'' - (a_1 v)' + a_0 v
   = a_2 v'' + \bigl(2a_2' - a_1\bigr)v' + \bigl(a_2'' - a_1' + a_0\bigr) v
   = L^{*}v ,
   $$

   which is where the hypothesis $a_2 \in C^2$, $a_1 \in C^1$ is used: $a_2''$ and $a_1'$ must exist. Expanding the first bracket the same way,

   $$
   a_2 v\,u' - (a_2 v)'\,u + a_1 v\,u
   = a_2\bigl(v u' - u v'\bigr) + \bigl(a_1 - a_2'\bigr)u v
   = J(u,v).
   $$

   Step 2 now reads $v\,Lu = \frac{\mathrm d}{\mathrm d x} J(u,v) + u\,L^{*}v$, which is Lagrange's identity. Integrating over $[a,b]$ and using the fundamental theorem of calculus gives Green's formula. (Stakgold and Holst go the other way round: they integrate by parts to reach Green's formula first, then, since it holds for every upper limit, differentiate it with respect to that limit to obtain Lagrange's identity. The two routes give the same pair of statements.)

4. *The criterion for formal self-adjointness.* Two second-order operators agree as operators exactly when their three coefficients agree, because applying them to $1, x, x^2$ recovers the coefficients. Comparing $L^{*}$ with $L$ term by term, the $D^2$ coefficients already agree, the $D$ coefficients agree iff $2a_2' - a_1 = a_1$, that is iff $a_2' = a_1$, and this condition also forces the agreement of the last coefficients, since $a_2' = a_1$ gives $a_2'' - a_1' = 0$. So $L^{*}=L$ iff $a_2'=a_1$. In that case $a_2 u'' + a_1 u' = a_2 u'' + a_2' u' = (a_2 u')'$, and $a_1 - a_2' = 0$ removes the last term of $J$. $\square$
:::

:::definition[Symmetric boundary conditions and self-adjoint problems]{provenance=adapted src="strauss-2008:§5.3, eqs. (4)–(5) and (9), pp. 119–121, and §11.4, the standing hypotheses on $p,q,m$, p. 314, eq. (8), p. 315, and the singular cases (i)–(iii), p. 316; stakgold-holst-2011:§3.2, pp. 197–198, including Example 4, p. 198; rhb-2006:§17.2, eqs. (17.15)–(17.16), pp. 559–560; hassani-2013:§19.2, the four conditions defining a singular S-L system, p. 572"}
A differential operator becomes an operator on a space of functions only once boundary conditions are imposed. Take a pair of homogeneous conditions on $[a,b]$ of the general form

$$
\alpha_1 X(a) + \beta_1 X(b) + \gamma_1 X'(a) + \delta_1 X'(b) = 0, \qquad
\alpha_2 X(a) + \beta_2 X(b) + \gamma_2 X'(a) + \delta_2 X'(b) = 0,
$$

with eight real constants, and let $\mathcal M$ be the set of $C^2[a,b]$ functions satisfying both. Following Strauss, the pair is called **symmetric** (or **hermitian**) for the formally self-adjoint operator $Lu = (p u')' + a_0 u$ if

$$
\Bigl[\,p\,\bigl(f' \overline{g} - f\, \overline{g}'\bigr)\,\Bigr]_{a}^{b} = 0
\qquad\text{for every pair } f,g \in \mathcal M .
$$

Strauss states this with $p \equiv 1$ in §5.3 and with the factor $p$ for variable coefficients in §11.4; the bars are dropped for real-valued $f,g$. Equivalently: the conjunct's boundary term vanishes for every admissible pair, so Green's formula reduces to $\int_a^b (\overline g\,Lf) = \int_a^b (f\,\overline{Lg})$.

Stakgold and Holst organise the same fact differently. For an arbitrary $L$ and a given $\mathcal M$, they call **adjoint boundary conditions** a pair of conditions whose solution set is

$$
\mathcal M^{*} = \Bigl\{\, v \in C^2[a,b] \;:\; \bigl[J(u,v)\bigr]_a^b = 0 \ \text{for every } u \in \mathcal M \,\Bigr\},
$$

and they call the problem $(L, B_1, B_2)$ **self-adjoint** when both $L^{*} = L$ and $\mathcal M^{*} = \mathcal M$. The boundary functionals $B_1^*, B_2^*$ cutting out $\mathcal M^{*}$ are not unique — any independent linear combinations of them do as well — but $\mathcal M^{*}$ itself is determined by $\mathcal M$.

Four standard cases make the boundary term vanish. With $Lu = (pu')' + a_0u$ and $J(u,v) = p(vu' - uv')$:

- **Dirichlet**, $u(a)=u(b)=0$: each endpoint term has a factor $u$ or $v$ that vanishes.
- **Neumann**, $u'(a)=u'(b)=0$: each endpoint term has a factor $u'$ or $v'$ that vanishes.
- **Separated** (**unmixed**) conditions $\alpha_1 u(a) + \beta_1 u'(a) = 0$ and $\alpha_2 u(b) + \beta_2 u'(b) = 0$, with real $(\alpha_i,\beta_i) \neq (0,0)$: see the proof below. Dirichlet and Neumann are the special cases $\beta_i = 0$ and $\alpha_i = 0$; **Robin** usually names the remaining case, with $\alpha_i$ and $\beta_i$ both nonzero, although Strauss attaches the word to the whole separated family (his Case 4, p. 119). Stakgold and Holst's Example 4 records that unmixed conditions with a formally self-adjoint $L$ give $\mathcal M^* = \mathcal M$: "a typical self-adjoint BVP".
- **Periodic**, $u(a) = u(b)$ and $u'(a) = u'(b)$, *provided* $p(a) = p(b)$: then the two endpoint contributions are equal and cancel.

A fifth case, important for the classical equations of physics, needs no boundary condition at all: if $p(a) = p(b) = 0$ then the boundary term vanishes for all $u,v$ that stay bounded with bounded derivatives, and $[a,b]$ is called the **natural interval** of the operator :cite[]{work=rhb-2006 loc="§17.4.1, p. 565, and §17.4.2, p. 567"}.

This handbook calls a Sturm-Liouville problem **singular** when at least one of Hassani's four conditions holds :cite[]{work=hassani-2013 loc="§19.2, p. 572"}: the interval stretches to infinity in one or both directions; $p$ or $w$ vanishes at one or both endpoints; $q$ is not continuous on $[a,b]$; or one of $p,q,w$ is singular at $a$ or $b$. Strauss's list is the shorter one of three conditions — $p$ vanishes at an endpoint; one of $p$, $q$, $m$ becomes infinite there (his $m$ is our weight $w$); an endpoint is itself infinite :cite[]{work=strauss-2008 loc="§11.4, p. 316"}. The two lists differ over a $q$ with a bounded jump: that makes the problem singular for us, while Strauss's list does not catch it — but neither does it leave the problem regular in his sense, because his standing hypotheses require $q$ continuous :cite[]{work=strauss-2008 loc="§11.4, p. 314"}, so such an equation falls outside his setup altogether. A problem meeting none of the four, with the hypotheses listed in :ref[Sturm-Liouville eigenvalue problems]{to=ode.sturm-liouville-theory}, is **regular**.
:::

:::statement[Separated conditions are symmetric]{provenance=adapted src="strauss-2008:§5.3, Case 4, p. 119, and Exercise 8, p. 123, and §11.4, Exercise 6, p. 317"}
Let $L u = (p u')' + a_0 u$ with $p, a_0$ real, and impose the separated conditions

$$
\alpha_1 u(a) + \beta_1 u'(a) = 0, \qquad \alpha_2 u(b) + \beta_2 u'(b) = 0,
$$

with $\alpha_i, \beta_i$ real and $(\alpha_1,\beta_1) \neq (0,0)$, $(\alpha_2,\beta_2) \neq (0,0)$. Then

$$
\Bigl[\,p\,\bigl(v u' - u v'\bigr)\,\Bigr]_a^b = 0
$$

for every pair $u,v$ of $C^1$ functions satisfying both conditions, and also when $v$ is replaced by $\overline v$.
:::

:::idea{provenance=original}
A separated condition at an endpoint is one linear equation on the two numbers $\bigl(u(a),u'(a)\bigr)$, so it confines that pair to a line through the origin in the plane. Both $u$ and $v$ obey the *same* equation, so both pairs lie on that one line, hence are proportional and have vanishing determinant — and that determinant is precisely the factor $vu'-uv'$ in the endpoint term. The argument is run separately at $a$ and at $b$, which is exactly what "separated" buys: a condition mixing the two endpoints would constrain the four numbers jointly and leave each determinant free.
:::

:::proof{provenance=original}
1. *One endpoint at a time.* The bracket is a difference of a term at $b$ and a term at $a$; it suffices to show that $v u' - u v'$ vanishes at each endpoint separately.

2. *At $x=a$.* The two row vectors $\bigl(u(a), u'(a)\bigr)$ and $\bigl(v(a), v'(a)\bigr)$ in $\mathbb R^2$ (or $\mathbb C^2$) are both annihilated by the linear functional $(y_0,y_1)\mapsto \alpha_1 y_0 + \beta_1 y_1$. Because $(\alpha_1,\beta_1) \neq (0,0)$, that functional is not identically zero, so its kernel is one-dimensional. Two vectors in a one-dimensional subspace are linearly dependent, so the determinant

   $$
   u(a)\,v'(a) - v(a)\,u'(a) = 0 ,
   $$

   which is $-\bigl(v u' - u v'\bigr)\big|_{x=a}$. The same argument at $x=b$ uses $(\alpha_2,\beta_2) \neq (0,0)$.

3. *The conjugate.* The constants $\alpha_i,\beta_i$ are real, so conjugating each boundary condition shows that $\overline v$ satisfies them too; step 2 applies verbatim to the pair $u,\overline v$. $\square$
:::

:::remark{provenance=original}
**Where the hypotheses are used.**

- *$a_2 \in C^2$, $a_1 \in C^1$* are needed for $L^{*}$ to be defined at all, since its coefficients involve $a_2''$ and $a_1'$ (step 3 of the first proof). We state the hypothesis as Stakgold and Holst do, $a_2,a_1,a_0 \in C^2$, although only these two derivatives are differentiated.
- *Real coefficients.* No conjugation appears anywhere in Lagrange's identity or Green's formula, so both hold verbatim for complex-valued coefficients. What needs reality is the *second* reading of $L^{*}$, as a Hilbert-space adjoint. Put $\overline v$ in place of $v$ in Green's formula; with the inner product $(f,g)=\int_a^b f\,\overline g\,\mathrm d x$ it becomes

  $$
  (Lu,\,v) \;-\; \int_a^b u\,L^{*}\overline v\,\mathrm d x \;=\; \bigl[J(u,\overline v)\bigr]_a^b .
  $$

  Only when the coefficients of $L^{*}$ are real is $L^{*}\overline v = \overline{L^{*}v}$, and only then does the middle term equal $(u, L^{*}v)$, giving $(Lu,v) = (u,L^{*}v)$ once the boundary term is gone. Hassani takes exactly this step, remarking that all the operators and functions in play are real before concluding $L^{\dagger} = M$.
- *$(\alpha_i,\beta_i)\neq(0,0)$* in the separated case is what makes the kernel of the boundary functional one-dimensional. Drop it — impose no condition at $a$ — and the boundary term survives: for $Lu = u''$ on $[0,1]$ with only $u(1)=v(1)=0$ imposed, $u = 1-x$ and $v = x^2-1$ give $v u' - u v'\big|_{0} = (-1)(-1) - (1)(0) = 1 \neq 0$.
- *$p(a)=p(b)$ in the periodic case.* Without it the two endpoint contributions need not cancel. Strauss gives a different non-example with $p\equiv 1$: under the conditions $X(a)=X(b)$, $X'(a)=2X'(b)$ the boundary term survives, with the value $f(b)g'(b) - f'(b)g(b)$ in the convention used here. (Strauss's own display is $f'(b)g(b)-f(b)g'(b)$, the negative of ours, because his Green's second identity in §5.3 brackets $-f'g+fg'$ while his symmetry condition (5) and this unit bracket $f'g-fg'$. The magnitude, and the conclusion that the term is generally nonzero, are the same either way.)

**Two conventions for the adjoint, and why they agree here.** Stakgold and Holst, and Hassani, define $L^{*}$ by the *bilinear* pairing $\int v\,Lu$, with no complex conjugate; Arfken and Riley-Hobson-Bence define it by the *sesquilinear* pairing $\int \overline{v}\,Lu$ (in their notation $\int v^{*}Lu$), which is the Hilbert-space adjoint of :ref[inner-product spaces]{to=linalg.inner-product-spaces}. For real coefficients the two give the same operator, by the previous point, and this unit follows the bilinear route because the formulas are then free of bars. For complex coefficients they differ: the sesquilinear adjoint of $iD$ on $[a,b]$ is $iD$, while its bilinear adjoint is $-iD$.

**Formal self-adjointness is not operator self-adjointness.** Arfken states this plainly: because nothing is demanded of the boundary terms, the differential-equation notion is the weaker of the two, and whether $L$ is self-adjoint as a Hilbert-space operator turns on three things at once — the coefficients, the choice of scalar product, and the boundary conditions. Riley-Hobson-Bence encode the distinction in their vocabulary: $L$ is *self-adjoint* when $L^{\dagger}=L$ as a differential expression, and *Hermitian* over $[a,b]$ when in addition the boundary terms vanish. For unbounded operators even "Hermitian" is not the end of the story: :cite[Reed and Simon]{work=reed-simon-1980 loc="§VIII.2, pp. 255–256"} call a densely defined $T$ *symmetric* if $T \subset T^{*}$, that is $D(T)\subset D(T^{*})$ with $T\varphi = T^{*}\varphi$ there, and *self-adjoint* only if also $D(T)=D(T^{*})$; it is for self-adjoint operators alone that the spectral theorem holds and that $e^{-itT}$ is unitary. So "formally self-adjoint $+$ symmetric boundary conditions" delivers a symmetric operator, and the extra work of matching domains belongs to :ref[symmetric and self-adjoint operators]{to=funcan.symmetric-self-adjoint} and :ref[unbounded operators]{to=funcan.unbounded-operators}.

**Sign conventions in the Sturm-Liouville form.** This handbook writes the Sturm-Liouville equation as $-(pu')' + qu = \lambda w u$, as Strauss and Hassani do. Riley-Hobson-Bence write $(py')' + qy + \lambda\rho y = 0$, so their $q$ is the negative of ours, and they note that some authors flip the sign of the $\lambda\rho y$ term as well. Arfken writes $L = D(p_0 D) + p_2$ with $L\psi = \lambda\psi$, so that his $p_2$ is $-q$ and his $\lambda$ is $-\lambda$. Comparing formulas across books therefore requires checking two signs.
:::

:::method[Putting a second-order equation into self-adjoint form]{provenance=adapted src="hassani-2013:§14.5, Thm 14.5.4, p. 435, and §19.2, Example 19.2.2(c), p. 571; arfken-2013:§8.2, eqs. (8.14)–(8.19), pp. 385–386; rhb-2006:§17.4.2, eqs. (17.38)–(17.40) and Table 17.1, pp. 566–567"}
Write $L = a_2 D^2 + a_1 D + a_0$, as in the first definition, and start from the equation

$$
L y + \lambda\,\rho(x)\,y \;=\; a_2(x)\,y'' + a_1(x)\,y' + a_0(x)\,y + \lambda\,\rho(x)\,y \;=\; 0
$$

on an interval where $a_2$ does not vanish. Note the sign: the eigenvalue term is added to $Ly$, as in the convention fixed in the remark above.

1. **Test for self-adjointness.** If $a_2' = a_1$, the operator is already formally self-adjoint: take $h \equiv 1$ and skip to step 4.
2. **Build the integrating factor.**

   $$
   h(x) = \frac{1}{a_2(x)}\exp\!\int^{x} \frac{a_1(t)}{a_2(t)}\,\mathrm d t .
   $$

   Hassani derives this by demanding $h a_1 = (h a_2)'$; Riley-Hobson-Bence write the same factor as $F = \exp\int (a_1 - a_2')/a_2$, which differs from $h$ by a constant and so serves equally well. Note that $h > 0$ wherever $a_2 > 0$.
3. **Multiply through.** The equation becomes $(h a_2 y')' + h a_0 y + \lambda\, h\rho\, y = 0$, because $h a_2 y'' + h a_1 y' = h a_2 y'' + (h a_2)' y' = (h a_2 y')'$.
4. **Read off the Sturm-Liouville data.** In the form $-(p y')' + q y = \lambda w y$ used here,

   $$
   p = h\,a_2 , \qquad q = -\,h\,a_0 , \qquad w = h\,\rho .
   $$

   For an eigenvalue problem with no weight in the original equation — that is, $Ly + \lambda y = 0$, or equivalently $Ly = -\lambda y$ — take $\rho \equiv 1$, so that $w = h$: the integrating factor *is* the weight, and the inner product consistent with hermiticity is $(f,g)_w = \int_a^b w f \overline g\,\mathrm d x$ :cite[]{work=arfken-2013 loc="§8.2, eq. (8.19), p. 386"}. Arfken reaches the same weight from $L\psi = \lambda\psi$; his $\lambda$ is the negative of ours, by the remark above, but the weight is the same expression either way.
5. **Fix the interval and the boundary conditions.** Check that $p > 0$ and $w > 0$ on the interval, and choose boundary conditions from the symmetric list above. If $p$ vanishes at two points, take those two points as the endpoints of the interval — this is the natural interval — and boundedness of $y$ there replaces the boundary conditions.

Riley-Hobson-Bence's Table 17.1 is the result of running this recipe on the classical equations; they write the weight as $\rho$, and their $q$ is the negative of ours. Legendre gives $p = 1-x^2$, $w=1$ on $[-1,1]$; Chebyshev gives $p=(1-x^2)^{1/2}$, $w=(1-x^2)^{-1/2}$; Laguerre gives $p = xe^{-x}$, $w = e^{-x}$ on $[0,\infty)$; Hermite gives $p = w = e^{-x^2}$ on $\mathbb R$; Bessel gives $p = w = x$ with, in our sign convention, $q = \nu^2/x$ (their table prints $q = -\nu^2/x$; the value $\nu^2/x$ is Hassani's, :cite[]{work=hassani-2013 loc="§19.2, Example 19.2.2(c), p. 571"}, whose convention is ours).
:::

:::example{provenance=original}
**An Euler operator.** Take

$$
L u = x^2 u'' + 3x\,u' + u \qquad\text{on } [1,2],
$$

so $a_2 = x^2$, $a_1 = 3x$, $a_0 = 1$.

*Formal adjoint.* $2a_2' - a_1 = 4x - 3x = x$ and $a_2'' - a_1' + a_0 = 2 - 3 + 1 = 0$, so

$$
L^{*}v = x^2 v'' + x\,v' = x\,(x v')' .
$$

Since $a_2' = 2x \neq 3x = a_1$, the operator is *not* formally self-adjoint, and indeed $L^{*}\neq L$.

*Conjunct.* $a_1 - a_2' = 3x - 2x = x$, so

$$
J(u,v) = x^2\bigl(v u' - u v'\bigr) + x\,u v .
$$

*Checking Green's formula on a concrete pair.* Take $u = v = x$. Then $Lu = 0 + 3x + x = 4x$ and $L^{*}v = 0 + x = x$, so

$$
v\,Lu - u\,L^{*}v = 4x^2 - x^2 = 3x^2 ,
$$

while $J(x,x) = x^2(x - x) + x\cdot x\cdot x = x^3$, whose derivative is $3x^2$: Lagrange's identity holds. Integrating,

$$
\int_1^2 3x^2\,\mathrm d x = 7 = \bigl[x^3\bigr]_1^2 = 8-1 = 7 .
$$

*Self-adjoint form.* The integrating factor is

$$
h(x) = \frac{1}{x^2}\exp\!\int^x \frac{3}{t}\,\mathrm d t = \frac{x^3}{x^2} = x ,
$$

and indeed

$$
x\,Lu = x^3 u'' + 3x^2 u' + x u = \bigl(x^3 u'\bigr)' + x\,u .
$$

(Check with $u=x$: the left side is $4x^2$, the right side is $(x^3)' + x^2 = 3x^2+x^2$.)

*As a Sturm-Liouville problem.* The eigenvalue problem $Lu = -\lambda u$ on $[1,2]$ with $u(1)=u(2)=0$ becomes, after multiplication by $h = x$,

$$
-\bigl(x^3 u'\bigr)' - x\,u = \lambda\,x\,u ,
\qquad\text{so}\qquad p = x^3,\quad q = -x,\quad w = x .
$$

On $[1,2]$ we have $p \in C^1$, $q, w$ continuous, $p \ge 1 > 0$ and $w \ge 1 > 0$, and the boundary conditions are separated; this is a regular Sturm-Liouville problem, solved in :ref[the next unit]{to=ode.sturm-liouville-theory}. The weight $w = x$ is what makes the eigenfunctions orthogonal: without it they are not.
:::

:::application{provenance=original}
- **Why the classical polynomials are orthogonal, and with which weight.** Legendre's, Chebyshev's, Hermite's and Laguerre's equations are not self-adjoint as written; the integrating factor of step 2 produces exactly the familiar weights $1$, $(1-x^2)^{-1/2}$, $e^{-x^2}$, $e^{-x}$ on exactly the intervals where the boundary term dies. Arfken's worked case is Laguerre's: $h = x^{-1}e^{\ln x - x} = e^{-x}$, and the factor $x$ in $p = xe^{-x}$ is what kills the boundary term at the origin. See :ref[orthogonal polynomials]{to=spec.orthogonal-polynomials-general}, :ref[Legendre polynomials]{to=spec.legendre-polynomials} and :ref[Bessel orthogonality]{to=spec.bessel-orthogonality}.
- **Quantum mechanics.** An observable must have real eigenvalues, so its operator must be hermitian, and for a differential operator that is two separate requirements: the right form of the coefficients, and boundary conditions that annihilate the conjunct. For $H = -\frac{\hbar^2}{2m}\frac{\mathrm d^2}{\mathrm d x^2} + V(x)$ the first holds automatically ($a_2$ constant, $a_1 = 0$), and the second is the real content of "the wavefunction must vanish at the walls" or "must be square-integrable on the line". Radial problems reach the same conclusion through the natural-interval mechanism: the measure $r^2\,\mathrm d r$ is the weight $w$, and $p = r^2$ vanishing at $r=0$ removes the boundary term there.
- **Heat flow and diffusion in an inhomogeneous medium.** Separating $c\rho\, u_t = (\kappa u_x)_x$ gives $-(\kappa X')' = \lambda\, c\rho\, X$ directly in self-adjoint form, with $p = \kappa$ the conductivity and $w = c\rho$ the heat capacity per unit length. The conjunct $\kappa(v X' - X v')$ is a difference of heat fluxes, and the symmetric boundary conditions are exactly the physically natural ones: fixed temperature (Dirichlet), insulated end (Neumann), Newton cooling $\kappa X' = -\sigma X$ (Robin), or a ring (periodic, with $\kappa$ matching at the join).
- **Green's functions.** Stakgold and Holst's reason for introducing adjoint boundary conditions is that the Green's function of $(L,B_1,B_2)$ and that of the adjoint problem are related by $g^{*}(x,\xi) = g(\xi,x)$; when the problem is self-adjoint this says $g(x,\xi) = g(\xi,x)$, the symmetry that underlies reciprocity theorems in acoustics and electrostatics. See :ref[Green's functions for boundary-value problems]{to=green.green-function-bvp}.
:::
