---
id: ode.sturm-liouville-theory
title: Sturm-Liouville eigenvalue problems
kind: theorem
level: core
summary: For a regular Sturm-Liouville problem the eigenvalues are real and simple and form an increasing sequence tending to infinity, and eigenfunctions belonging to different eigenvalues are orthogonal with respect to the weight in the equation.
prereqs: [ode.self-adjoint-operators, ode.linear-ode-theory, linalg.inner-product-spaces]
provenance: adapted
sources:
  - work: hassani-2013
    loc: "§19.1, the Sturm-Liouville operator (19.1), the separated boundary conditions (19.2) and the definition of a regular Sturm-Liouville system, pp. 566–567; the Wronskian argument for nondegeneracy (19.3), p. 567; Thm 19.1.9, pp. 568–569; §19.2, eqs. (19.5)–(19.7) (reduction of a general SOLDE to the standard and normal forms) and the Lagrange identity (19.9)–(19.10), pp. 569–571; Example 19.2.2 and the definition of a singular system, pp. 571–572"
    pages: "566-572"
    role: the definition of a regular Sturm-Liouville system with separated boundary conditions; the proof that the eigenspaces are one-dimensional; the statement that the eigenvalues are countable, form an increasing sequence with infinity as its limit, and have a complete orthogonal set of nondegenerate eigenfunctions, together with the zero count; the periodic-boundary-condition example in which simplicity fails; the list of what makes a problem singular
  - work: strauss-2008
    loc: "§5.3, Green's second identity (3), symmetric boundary conditions, Thm 1 (orthogonality), Thm 2 (real eigenvalues and real eigenfunctions) and Thm 3 (no negative eigenvalues), pp. 118–122; §5.4, Thm 1 (infinitely many eigenvalues, $\\lambda_n\\to+\\infty$), p. 125; §11.4, the Sturm-Liouville equation (7), symmetric boundary conditions (8), Thm 1, the singular cases and the remark on [CL] and [CH], pp. 314–316"
    pages: "118-122, 125, 314-316"
    role: proof route for reality of the eigenvalues and for orthogonality via Green's second identity; the criterion for the absence of negative eigenvalues; the variable-coefficient Sturm-Liouville problem with its hypotheses on $p$, $q$ and $m$, and the statement that the eigenvalues tend to $+\infty$ and the eigenfunctions are complete
  - work: rhb-2006
    loc: "§17.1, the weighted inner product (17.6) and the requirement on the weight, p. 557; §17.3.1 (reality of the eigenvalues, eqs. (17.18)–(17.23)), §17.3.2 (orthogonality and normalisation), §17.3.4 (construction of real eigenfunctions), pp. 561–564; §17.4 and §17.4.1, eqs. (17.32)–(17.37) and the worked proof of hermiticity, pp. 564–565"
    pages: "557, 561-565"
    role: the weighted eigenvalue equation $Ly=\lambda\rho y$ and the hypotheses on the weight; the proof that the eigenvalues are real and the eigenfunctions orthogonal with weight, run with the weight present throughout; the construction of real eigenfunctions from complex ones; the sign convention it uses for the Sturm-Liouville operator
  - work: arfken-2013
    loc: "§8.2, eqs. (8.13) and (8.20) (the orthogonality identity with and without a weight) and the summary box, pp. 385–386; §8.5, summary items 3–6, p. 398"
    pages: "385-386, 398"
    role: the identity $(\lambda_u-\lambda_v)\int v^{*}u\,w\,\mathrm dx = [wp_0(v^{*}u'-(v^{*})'u)]_a^b$ from which orthogonality with weight is read off; the summary of what hermiticity buys (real eigenvalues, orthogonality, completeness, Gram-Schmidt for degenerate eigenfunctions)
  - work: stakgold-holst-2011
    loc: "§6.3, the extremal characterisations Thms 6.3.1–6.3.3 and the finiteness of multiplicities, pp. 371–374; Thm 6.3.6, p. 375"
    pages: "371-375"
    role: the route by which the existence of infinitely many eigenvalues and the completeness of the eigenfunctions are actually proved — Green's function, a compact symmetric integral operator, and its spectral theory — cited in the note that states those two facts without proof
---

:::definition[Regular Sturm-Liouville problem]{provenance=adapted src="strauss-2008:§11.4, eq. (7) with the hypotheses on p. 314 and the symmetric condition (8), p. 315; hassani-2013:§19.1, eq. (19.2) and the definition of a regular Sturm-Liouville system, pp. 566–567, §19.1, p. 569 (non-separated conditions may destroy regularity), and §19.2, the four conditions defining a singular system, p. 572; rhb-2006:§17.1, eq. (17.6), p. 557"}
A **regular Sturm-Liouville problem** on a finite interval $[a,b]$ consists of the differential equation

$$
-\bigl(p(x)\,u'\bigr)' + q(x)\,u \;=\; \lambda\,w(x)\,u , \qquad a < x < b ,
$$

in which

- $p \in C^1[a,b]$ and $q, w \in C[a,b]$ are real-valued,
- $p(x) > 0$ and $w(x) > 0$ for every $x \in [a,b]$,

together with **separated boundary conditions**

$$
\alpha_1\,u(a) + \beta_1\,u'(a) = 0 , \qquad \alpha_2\,u(b) + \beta_2\,u'(b) = 0 ,
$$

with $\alpha_1,\beta_1,\alpha_2,\beta_2$ real and neither pair $(\alpha_1,\beta_1)$ nor $(\alpha_2,\beta_2)$ equal to $(0,0)$; Hassani imposes this last requirement by asking that the $2\times 2$ array of the four constants have no vanishing row. Strauss's hypotheses on $p$, $q$ and $w$ (he writes $m$ for the weight) are the ones displayed above; Hassani sets up the theory for the Liouville normal form $u'' - q u = \lambda u$ and reduces the general case to it, as the note below records.

A number $\lambda \in \mathbb C$ is an **eigenvalue** if the problem has a solution $u \not\equiv 0$ in $C^2[a,b]$, and such a $u$ is an **eigenfunction** belonging to $\lambda$. The **weighted inner product** and norm are

$$
(f,g)_w = \int_a^b w(x)\,f(x)\,\overline{g(x)}\,\mathrm d x , \qquad
\lVert f\rVert_w = (f,f)_w^{1/2} ,
$$

an inner product in the sense of :ref[inner products and norms]{to=linalg.inner-product-spaces} precisely because $w$ is continuous and strictly positive: $\lVert f\rVert_w = 0$ then forces $f \equiv 0$ for continuous $f$. Riley-Hobson-Bence require of their weight that it be real and non-negative on $[a,b]$; the strict positivity assumed here is Strauss's hypothesis.

By :ref[the self-adjoint form of a second-order operator]{to=ode.self-adjoint-operators}, *every* second-order linear equation with a non-vanishing leading coefficient can be brought to this shape by an integrating factor, so the theorem below applies far beyond equations that arrive already in divergence form.

Following Hassani :cite[]{work=hassani-2013 loc="§19.2, p. 572"}, the problem is called **singular** when at least one of four conditions on the equation holds: the interval stretches to infinity in one or both directions; $p$ or $w$ vanishes at one or both endpoints; $q$ is not continuous on $[a,b]$; or one of $p,q,w$ is singular at $a$ or $b$. Nothing about the boundary conditions appears in that list, and nothing about them appears in Strauss's shorter list either :cite[]{work=strauss-2008 loc="§11.4, p. 316"}; of non-separated conditions Hassani says only that they *may destroy the regularity* of the system :cite[]{work=hassani-2013 loc="§19.1, p. 569"}. So a problem with smooth positive $p$ and $w$ but periodic boundary conditions is **not regular** while being singular in neither author's sense — and it is exactly such a problem that breaks part 3 below, as the remark records. For any problem that is not regular, the conclusions of parts 3 and 4 may fail.
:::

:::statement[Sturm-Liouville theorem, regular case]{provenance=adapted src="strauss-2008:§5.3, Thms 1–2, pp. 120–121, together with §11.4, Thm 1, p. 314; rhb-2006:§17.3.1–17.3.2 and §17.3.4, pp. 561–564; hassani-2013:§19.1, the argument at (19.3), p. 567, and Thm 19.1.9, pp. 568–569; arfken-2013:§8.2, eq. (8.20), p. 386"}
For a regular Sturm-Liouville problem:

1. **The eigenvalues are real**, and every eigenfunction is a constant multiple of a real-valued eigenfunction.
2. **Orthogonality with weight.** If $\lambda \neq \mu$ are eigenvalues with eigenfunctions $u$ and $v$, then $(u,v)_w = 0$. Each eigenfunction may therefore be scaled so that the eigenfunctions form an orthonormal family in $(\cdot,\cdot)_w$.
3. **The eigenvalues are simple.** The solutions of the problem for a fixed eigenvalue $\lambda$ form a one-dimensional space: any two eigenfunctions belonging to the same eigenvalue are proportional.
4. **The spectrum.** There are countably many eigenvalues and no more; they are bounded below, and arranged in increasing order they form a strictly increasing sequence
   $$
   \lambda_1 < \lambda_2 < \lambda_3 < \cdots \longrightarrow +\infty .
   $$
   Part 4 is stated here without proof; see the note below.

Parts 1-3 use only Green's formula and the separated boundary conditions. Part 4 is where the compactness of the inverse operator enters.
:::

:::idea{provenance=original}
Everything in parts 1 and 2 comes from one identity. Green's formula for the formally self-adjoint operator $Lu = -(pu')' + qu$ says that $\int_a^b(\overline v\,Lu - u\,L\overline v)$ equals a boundary term built from $p$, $u$, $v$ and their first derivatives; separated boundary conditions annihilate that term. Feeding in $Lu = \lambda w u$ and $L v = \mu w v$ turns the left-hand side into $(\lambda - \overline\mu)(u,v)_w$. Taking $v=u$ gives $(\lambda-\overline\lambda)\lVert u\rVert_w^2 = 0$, hence $\lambda$ real; taking $\lambda \neq \mu$ gives $(u,v)_w = 0$. It is the same one-line argument that makes the eigenvalues of a :ref[Hermitian matrix]{to=linalg.hermitian-spectral-theorem} real and its eigenvectors orthogonal; the boundary conditions are what supply the "Hermitian" part.

Simplicity is a different mechanism, and it is the one place where *separated* conditions matter rather than merely symmetric ones. Two eigenfunctions for the same $\lambda$ both satisfy one and the same linear condition on the pair $(u(a),u'(a))$, which pins that pair down to a line in the plane; so their Wronskian vanishes at $a$, and a Wronskian of two solutions of the same second-order equation that vanishes once vanishes identically.
:::

:::proof{provenance=adapted src="strauss-2008:§5.3, proofs of Thms 1 and 2, pp. 120–121; rhb-2006:§17.3.1, eqs. (17.18)–(17.23), p. 561, and §17.3.4, p. 563; hassani-2013:§19.1, eq. (19.3), p. 567; arfken-2013:§8.2, eqs. (8.18)–(8.20), p. 386"}
Write $Lu = -(pu')' + qu$, so that the equation is $Lu = \lambda w u$.

1. *The master identity.* For any $f,g \in C^2[a,b]$, the product rule gives
   $$
   g\,Lf - f\,Lg = -g\,(pf')' + f\,(pg')' = \frac{\mathrm d}{\mathrm d x}\Bigl[\,p\,\bigl(f\,g' - g\,f'\bigr)\Bigr] ,
   $$
   because differentiating the bracket produces $f'(pg') + f(pg')' - g'(pf') - g(pf')'$, whose first and third terms cancel. Integrating,
   $$
   \int_a^b \bigl(g\,Lf - f\,Lg\bigr)\,\mathrm d x = \Bigl[\,p\,\bigl(f g' - g f'\bigr)\,\Bigr]_a^b .
   $$
   This is Green's formula of :ref[the previous unit]{to=ode.self-adjoint-operators}. The sign is worth pinning down: our $L = -(pu')' + qu$ is that unit's divergence-form operator $(a_2u')' + a_0u$ with $a_2 = -p$ and $a_0 = q$, so its conjunct is $J(f,g) = a_2\,(gf' - fg') = p\,(fg' - gf')$, which is exactly the bracket displayed above. Here $q$ has dropped out because it enters both terms symmetrically.

2. *The boundary term dies.* Let $u,v$ be eigenfunctions, with eigenvalues $\lambda,\mu$. Because the coefficients $\alpha_i,\beta_i$ are real, $\overline v$ satisfies the same two boundary conditions as $v$. Apply step 1 with $f = u$, $g = \overline v$. At $x=a$ the vectors $\bigl(u(a),u'(a)\bigr)$ and $\bigl(\overline v(a),\overline v{}'(a)\bigr)$ are both annihilated by the nonzero functional $(y_0,y_1)\mapsto \alpha_1 y_0 + \beta_1 y_1$, whose kernel is a line; two vectors on a line have vanishing determinant, so $u\overline v{}' - \overline v u' = 0$ at $a$. The same holds at $b$, using $(\alpha_2,\beta_2)\neq(0,0)$. Hence
   $$
   \int_a^b \bigl(\overline v\,Lu - u\,L\overline v\bigr)\,\mathrm d x = 0 .
   $$

3. *Insert the eigenvalue equations.* Since $p,q,w$ are real, conjugating $Lv = \mu w v$ gives $L\overline v = \overline\mu\, w\,\overline v$. So the integrand in step 2 is $\lambda\,w\,u\overline v - \overline\mu\,w\,u\overline v$, and
   $$
   \bigl(\lambda - \overline{\mu}\bigr)\,(u,v)_w = 0 .
   $$
   This is the master identity. (Arfken's eq. (8.20) is the same statement with the boundary term still displayed on the right.)

4. *Part 1, reality.* Put $v = u$, $\mu = \lambda$: then $(\lambda - \overline\lambda)\lVert u\rVert_w^2 = 0$. Here the hypothesis $w > 0$ is used: $u$ is continuous and not identically zero, so $\lVert u\rVert_w^2 = \int_a^b w|u|^2 > 0$. Therefore $\lambda = \overline\lambda$.

5. *Part 1, real eigenfunctions.* Let $u = y + iz$ with $y,z$ real. Since $\lambda$, $p$, $q$ and $w$ are real, taking real and imaginary parts of $Lu = \lambda w u$ gives $Ly = \lambda w y$ and $Lz = \lambda w z$; and since the eight boundary constants are real, $y$ and $z$ satisfy the boundary conditions too. At least one of $y,z$ is not identically zero, so $\lambda$ has a real eigenfunction. By part 3, proved below, every eigenfunction for $\lambda$ is then a multiple of that one.

6. *Part 2, orthogonality.* With $\lambda \neq \mu$, both real by part 1, step 3 reads $(\lambda-\mu)(u,v)_w = 0$ with $\lambda - \mu \neq 0$, so $(u,v)_w = 0$. Normalising is possible because $\lVert u\rVert_w > 0$, again by $w>0$; replacing $u$ by $u/\lVert u\rVert_w$ makes the family orthonormal.

7. *Part 3, simplicity.* Let $u_1,u_2$ be eigenfunctions for the same $\lambda$. Both satisfy $\alpha_1 y(a) + \beta_1 y'(a) = 0$, so as in step 2 their Wronskian
   $$
   W(x) = u_1(x)\,u_2'(x) - u_2(x)\,u_1'(x)
   $$
   vanishes at $x=a$. Both solve the same second-order equation, which in the form $u'' = -\frac{p'}{p}u' + \frac{q-\lambda w}{p}u$ has continuous coefficients on $[a,b]$ — this is where $p > 0$ and $p \in C^1$ are needed. By Abel's identity for :ref[the Wronskian]{to=ode.linear-ode-theory}, $W$ is either identically zero or nowhere zero; since $W(a)=0$ it is identically zero, so $u_1$ and $u_2$ are linearly dependent. (Directly: $(pW)' = u_1(pu_2')' - u_2(pu_1')' = u_1(q-\lambda w)u_2 - u_2(q-\lambda w)u_1 = 0$, so $pW$ is constant, and it is $0$ at $a$; as $p>0$, $W\equiv 0$.) Hence the eigenspace is one-dimensional. $\square$
:::

:::note[Part 4 is not proved here]{provenance=adapted src="hassani-2013:§19.1, Thm 19.1.9, pp. 568–569, with the construction of the compact resolvent on p. 567, and §19.2, eq. (19.7), p. 569; strauss-2008:§5.4, Thm 1, p. 125, and §11.4, p. 316; stakgold-holst-2011:§6.3, Thms 6.3.1–6.3.4 and Thm 6.3.6, pp. 371–375"}
That there are infinitely many eigenvalues and that they tend to $+\infty$ cannot be reached by the elementary identity above; every proof goes through an auxiliary compactness argument, and this handbook quotes the result rather than proving it.

Hassani's route: shift $\lambda$ so that $0$ is not an eigenvalue, invert the operator by an explicit Green's kernel built from two solutions, observe that the resulting integral operator is Hilbert-Schmidt and hence compact, and read the spectrum of the differential operator off the spectrum of its compact inverse. His Theorem 19.1.9 states, for a regular Sturm-Liouville system, that there are countably many eigenvalues, that they can be arranged in an increasing sequence having infinity as its limit, that the eigenvectors are nondegenerate and form a complete orthogonal set, and that the eigenfunction $u_n$ attached to the $n$th eigenvalue vanishes at exactly $n$ points of the interval on which the system is posed. He states it for the Liouville normal form $u'' - qu = \lambda u$ with separated conditions, and then shows in §19.2 that the Liouville substitution
$$
u(x) = v(t)\,\bigl[p(x)w(x)\bigr]^{-1/4}, \qquad t = \int_a^x \sqrt{\tfrac{w(s)}{p(s)}}\,\mathrm d s ,
$$
carries the general equation $-(pu')'+qu = \lambda w u$ into that form, so that the theorem still holds.

Stakgold and Holst run the same strategy in the language of integral equations: the Green's function of a self-adjoint boundary-value problem is a real symmetric Hilbert-Schmidt kernel, its compact self-adjoint integral operator has eigenvalues of finite multiplicity tending to $0$, and their Theorem 6.3.6 concludes that the eigenfunctions of the boundary-value problem form an orthonormal basis. Strauss records both conclusions for Sturm-Liouville problems — unbounded growth of $\lambda_n$, and a complete eigenfunction family — pointing the reader to Coddington-Levinson and Courant-Hilbert for an ODE-style proof, and proves the model case $-X''=\lambda X$ by a minimisation argument in Chapter 11.

The relevant ingredients are developed in :ref[compact operators]{to=funcan.compact-operators}, :ref[the spectral theorem for compact self-adjoint operators]{to=funcan.compact-self-adjoint} and :ref[Hilbert-Schmidt kernels]{to=green.hilbert-schmidt}; the zero count is the subject of :ref[Sturm comparison and oscillation theorems]{to=ode.sturm-comparison}. Completeness itself is taken up in :ref[eigenfunction expansions]{to=ode.eigenfunction-expansions}.
:::

:::remark{provenance=original}
**Where the hypotheses are used.**

- *$w > 0$* is used twice in step 4 and step 6, to know that $\lVert u\rVert_w \neq 0$. If $w$ were allowed to change sign, $\int w|u|^2$ could vanish for a nonzero $u$ and the argument for reality would collapse; such *indefinite* problems genuinely can have complex eigenvalues.
- *$p > 0$ and $p \in C^1$* make the equation a genuine second-order equation with continuous coefficients on all of $[a,b]$, which is what the Wronskian argument of step 7 needs. Where $p$ vanishes the problem is singular and simplicity can fail.
- *Separated* boundary conditions are needed only for part 3. Parts 1 and 2 hold for any symmetric boundary conditions, periodic ones included. Simplicity genuinely fails for periodic conditions: Hassani's Example 19.2.2(b) takes $u'' + \omega^2 u = 0$ on $[-T,T]$ with $u(-T)=u(T)$, $u'(-T)=u'(T)$ and finds the eigenvalue $(n\pi/T)^2$ carried by the two independent eigenfunctions $\sin(n\pi t/T)$ and $\cos(n\pi t/T)$ — so, by Theorem 19.1.9, that system is not regular. When an eigenvalue is degenerate, orthogonality within its eigenspace is not automatic but can be arranged by :ref[Gram-Schmidt]{to=linalg.gram-schmidt}, as Riley-Hobson-Bence and Arfken both note.
- *Real coefficients* are used in step 2 (so that $\overline v$ obeys the boundary conditions), in step 3 (so that $L\overline v = \overline\mu w \overline v$) and in step 5. With complex $q$ the operator is not symmetric and nothing survives.

**The sign of the eigenvalues.** Nothing above says the eigenvalues are positive, and in general they are not: when $w \equiv 1$, adding a constant $c$ to $q$ leaves the eigenfunctions alone and shifts every $\lambda_n$ by $c$, so any finite number of them can be pushed below zero. Strauss gives a sufficient condition in the model case $-X''=\lambda X$ with symmetric boundary conditions: if
$$
\Bigl[\,f(x)\,f'(x)\,\Bigr]_a^b \le 0
$$
for every real $f$ satisfying the boundary conditions, there is no negative eigenvalue. This holds for Dirichlet, Neumann and periodic conditions, and for Robin conditions when the two Robin constants have the right sign; it fails for others, and the second example below exhibits a Robin problem with one negative eigenvalue. What *is* always true in the regular case is that the eigenvalues are bounded below, since they increase to $+\infty$ with only finitely many below any level.

**Two conventions.** This unit writes the equation as $-(pu')' + qu = \lambda w u$, following Strauss and Hassani. Riley-Hobson-Bence write $(py')' + qy + \lambda\rho y = 0$, so their $q$ is the negative of ours and their operator is $Ly = -(py')'-qy$; their $\rho$ is our $w$. They record that some authors also flip the sign of the $\lambda\rho y$ term. Arfken writes $L = D(p_0D) + p_2$ with $L\psi = \lambda\psi$ and a weight $w$ in the scalar product, so his $\lambda$ is the negative of ours. The mathematics is the same; only the labels move.
:::

:::example{provenance=original}
**A weighted problem with closed-form eigenvalues.** Take the Euler equation of :ref[the previous unit]{to=ode.self-adjoint-operators} as an eigenvalue problem on $[1,2]$:

$$
x^2 u'' + 3x\,u' + u = -\lambda\,u , \qquad u(1) = u(2) = 0 .
$$

*Putting it in Sturm-Liouville form.* The integrating factor is $h = x$, and multiplying through gives

$$
-\bigl(x^3 u'\bigr)' - x\,u = \lambda\,x\,u ,
\qquad p = x^3, \quad q = -x, \quad w = x .
$$

On $[1,2]$: $p\in C^1$ with $p \ge 1 > 0$, $q$ and $w$ continuous with $w \ge 1 > 0$, and the conditions $u(1)=u(2)=0$ are separated with $(\alpha_1,\beta_1)=(\alpha_2,\beta_2)=(1,0)$. The problem is regular, so parts 1-4 apply.

*Solving it.* The equation $x^2u'' + 3xu' + (1+\lambda)u = 0$ is of :ref[Euler-Cauchy]{to=ode.euler-equation} type; substituting $u = x^{m}$ gives $m(m-1) + 3m + 1 + \lambda = (m+1)^2 + \lambda = 0$, so $m = -1 \pm i\sqrt{\lambda}$ for $\lambda > 0$ and

$$
u(x) = \frac{1}{x}\Bigl[A\cos\bigl(\sqrt\lambda\,\ln x\bigr) + B\sin\bigl(\sqrt\lambda\,\ln x\bigr)\Bigr].
$$

The condition $u(1)=0$ forces $A = 0$. Then $u(2)=0$ needs $\sin(\sqrt\lambda\,\ln 2) = 0$, that is $\sqrt\lambda\,\ln 2 = n\pi$. Checking separately that $\lambda = 0$ gives $u = (A + B\ln x)/x$, killed by the two conditions, and that $\lambda < 0$ gives real exponents $m = -1 \pm \sqrt{-\lambda}$ and again only $u \equiv 0$, the full list is

$$
\lambda_n = \Bigl(\frac{n\pi}{\ln 2}\Bigr)^{2} , \qquad
\varphi_n(x) = \frac{1}{x}\,\sin\!\Bigl(\frac{n\pi\ln x}{\ln 2}\Bigr) , \qquad n = 1,2,3,\dots
$$

Numerically $\lambda_1 = 20.5423$, $\lambda_2 = 82.1692$, $\lambda_3 = 184.881$, and $\lambda_n = 20.5423\,n^2 \to \infty$: real, simple, increasing without bound, as parts 1, 3 and 4 promise.

*Orthogonality, with the weight and without it.* Substituting $s = \ln x/\ln 2$, so that $\mathrm d x / x = \ln 2\,\mathrm d s$ and $s$ runs over $[0,1]$,

$$
(\varphi_n,\varphi_m)_w = \int_1^2 x\cdot\frac{1}{x^2}\sin\!\Bigl(\frac{n\pi\ln x}{\ln 2}\Bigr)\sin\!\Bigl(\frac{m\pi\ln x}{\ln 2}\Bigr)\mathrm d x
= \ln 2\int_0^1 \sin(n\pi s)\sin(m\pi s)\,\mathrm d s
= \frac{\ln 2}{2}\,\delta_{nm} ,
$$

so $\lVert\varphi_n\rVert_w^2 = \tfrac12\ln 2 = 0.346574$ for every $n$, and $\sqrt{2/\ln 2}\,\varphi_n$ is an orthonormal family. The weight is doing real work: without it,

$$
\int_1^2 \varphi_1(x)\,\varphi_2(x)\,\mathrm d x = 0.0307804 \neq 0 .
$$

*Simplicity, concretely.* For $\lambda = \lambda_n$ the solution space of the ODE is spanned by $x^{-1}\cos(\sqrt{\lambda_n}\ln x)$ and $\varphi_n$, a two-dimensional space; the single condition $u(1)=0$ cuts it down to the one-dimensional span of $\varphi_n$, and the condition at $x=2$ is then satisfied automatically. This is part 3 in action: one separated condition already removes one dimension.

*Zeros.* $\varphi_n$ vanishes at $x = 2^{k/n}$ for $k = 0,1,\dots,n$, hence exactly $n-1$ times inside $(1,2)$ and twice on the boundary. The zero count quoted in the note — "$u_n$ vanishes at exactly $n$ points" — therefore matches only after the index shift $n \mapsto n-1$: our $\varphi_n$, with $n-1$ interior zeros, is Hassani's $u_{n-1}$, so his numbering of the eigenvalues would have to begin at $n=0$. His own Example 19.2.2(a) numbers the Dirichlet eigenfunctions $\sin(n\pi t/T)$ from $n=1$, as we do. We report the theorem as he prints it.
:::

:::example{provenance=original}
**A Robin problem with a negative eigenvalue.** Take

$$
-u'' = \lambda u \quad\text{on } [0,1], \qquad u(0) = 0, \qquad u'(1) = 2\,u(1) ,
$$

so $p = w = 1$, $q = 0$, and the conditions are separated with $(\alpha_1,\beta_1) = (1,0)$ and $(\alpha_2,\beta_2) = (-2,1)$. The problem is regular.

*Positive eigenvalues.* For $\lambda = k^2 > 0$ the condition at $0$ gives $u = \sin kx$, and the condition at $1$ gives $k\cos k = 2\sin k$, that is $\tan k = k/2$. The roots are

$$
k_1 = 4.27478,\quad k_2 = 7.59655,\quad k_3 = 10.81267,\quad k_4 = 13.99522,\dots
$$

with $\lambda = k^2$: $18.2738$, $57.7075$, $116.914$, $195.866$. (For large $n$, $k_n \approx (n+\tfrac12)\pi - 2/k_n$; the fourth root is $4.4548\pi$.)

*A negative eigenvalue.* For $\lambda = -\mu^2 < 0$ the condition at $0$ gives $u = \sinh\mu x$, and the condition at $1$ gives $\mu\cosh\mu = 2\sinh\mu$, that is $\mu\coth\mu = 2$. Since $\mu\coth\mu$ increases from $1$ at $\mu = 0^{+}$ to $\infty$, there is exactly one root,

$$
\mu_0 = 1.915008 , \qquad \lambda_0 = -\mu_0^2 = -3.667256 ,
$$

with eigenfunction $\varphi_0(x) = \sinh(1.915008\,x)$. And $\lambda = 0$ is not an eigenvalue: $u = cx$ then needs $c = 2c$, so $c=0$.

*Why Strauss's criterion does not forbid it.* For a real $f$ with $f(0)=0$ and $f'(1)=2f(1)$,

$$
\Bigl[f f'\Bigr]_0^1 = f(1)f'(1) = 2\,f(1)^2 \;\ge\; 0 ,
$$

which is the wrong sign for the hypothesis of Strauss's Theorem 3; the negative eigenvalue is what the criterion was guarding against. Flipping the condition to $u'(1) = -2u(1)$ gives $[ff']_0^1 = -2f(1)^2 \le 0$, so Theorem 3 applies and there is **no negative eigenvalue** — that, and no more, is what it concludes. To get strict positivity one rules out $\lambda = 0$ separately: it would need $u = cx$ with $c = -2c$, hence $c = 0$. With both facts in hand, every eigenvalue of the flipped problem is positive.

*Orthogonality across the sign change.* With $w \equiv 1$ the inner product is the plain integral, and

$$
(\varphi_0,\varphi_1)_w = \int_0^1 \sinh(\mu_0 x)\,\sin(k_1 x)\,\mathrm d x = 1.2\times10^{-44}
$$

when $\mu_0$ and $k_1$ are taken to $40$ digits: zero to the working precision. The residual is a measure of the root-finding, not of the mathematics: with the six-digit values $\mu_0 = 1.915008$ and $k_1 = 4.27478$ printed above, the same integral evaluates to $1.48\times10^{-6}$ instead. Almost all of that comes from the rounding of $k_1$, which is low by $2.3\times10^{-6}$; the integral's sensitivity to $k_1$ near the root is about $0.65$, and $0.65\times 2.3\times10^{-6} = 1.5\times10^{-6}$. Orthogonality holds exactly at the exact roots, and the truncated roots are not eigenvalues. Meanwhile $\lVert\varphi_0\rVert_w^2 = 2.50531$ and $\lVert\varphi_1\rVert_w^2 = 0.455104$, both comfortably of order one. Orthogonality does not care that one eigenvalue is negative and the other positive; it only cares that they differ.
:::

:::application{provenance=original}
- **Normal modes.** Separating a linear wave equation $w(x)\,u_{tt} = (p(x)u_x)_x - q(x)u$ on $[a,b]$ gives exactly the regular Sturm-Liouville problem above, with $\lambda = \omega^2$. Part 1 says the squared frequencies are real — the system oscillates rather than growing or decaying; part 2 says the modes do not exchange energy, so the total energy is the sum of the modal energies; part 3 says that for a one-dimensional system with ends held in these ways there are no degenerate modes, which is why a string has no accidental mode doubling while a drumhead does. See :ref[normal modes]{to=linalg.normal-modes} and :ref[the vibrating string]{to=pde.vibrating-string-modes}.
- **Quantum mechanics on an interval.** For $-\psi'' + V(x)\psi = E\psi$ on $[a,b]$ with any separated boundary condition — an infinite well, a finite box with a Robin matching condition at the wall — part 1 is the statement that the measured energies are real, part 2 that stationary states of different energy are orthogonal, and part 3 that in one dimension bound states are non-degenerate, the theorem behind the statement that a one-dimensional bound-state spectrum is a simple ladder. Negative eigenvalues are the bound states; the Robin example above is a one-state model of exactly that situation.
- **Heat conduction and relaxation times.** For $w u_t = (pu_x)_x - qu$, separating variables gives $u = \sum c_n e^{-\lambda_n t}\varphi_n(x)$. Part 4 says the decay rates $\lambda_n$ run off to infinity, so all but the first few modes die almost at once and the long-time behaviour is governed by $\lambda_1$ alone: it is the slowest decay rate, and its reciprocal $1/\lambda_1$ is the relaxation time of a rod, a fin, or a diffusing tracer. Bounds for it without solving the equation come from :ref[the variational characterisation]{to=var.variational-eigenvalues} and :ref[the Rayleigh-Ritz method]{to=var.rayleigh-ritz}.
- **Where the classical special functions come from.** Legendre's, Bessel's, Hermite's and Laguerre's equations are Sturm-Liouville equations whose problems are *singular*, so the conclusions above are not automatic; the orthogonality relations nevertheless survive whenever the boundary term vanishes, which is the content of Hassani's Box 19.2.3 and the reason each family comes with its own weight and its own interval. See :ref[general orthogonal polynomials]{to=spec.orthogonal-polynomials-general}.
:::
