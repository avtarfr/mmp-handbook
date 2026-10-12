---
id: green.eigenfunction-expansion-green
title: Eigenfunction expansion of Green's functions
kind: theorem
level: core
summary: Derives the bilinear series $G(x,\xi;\lambda) = \sum_n u_n(x)\overline{u_n(\xi)}/(\lambda_n-\lambda)$ for the resolvent of a regular Sturm–Liouville problem and the special case $G = \sum u_n(x)\overline{u_n(\xi)}/\lambda_n$ at $\lambda=0$, shows that $G$ is meromorphic in $\lambda$ with simple poles at the eigenvalues whose residues are $-u_n(x)\overline{u_n(\xi)}$, and uses that to read the whole spectrum off a closed-form Green's function.
prereqs: [green.green-function-bvp, ode.eigenfunction-expansions, ode.sturm-liouville-theory, linalg.hermitian-spectral-theorem, complex.singularities, complex.residue-theorem]
provenance: adapted
sources:
  - work: stakgold-holst-2011
    loc: "Ch. 7, §7.1, pp. 409–415: the operator (7.1.3), the regular problem (7.1.12) with the unmixed conditions parametrised by $\\alpha,\\beta$, and properties (7.1.7)–(7.1.11); the facts that the eigenvalues are real, simple and increase to $+\\infty$ and that the normalised eigenfunctions are an orthonormal basis, p. 412; the resolvent problem (7.1.15); the bilinear series (7.1.16) and the series (7.1.18) for the solution; the residue statement and the contour formula (7.1.19) with the completeness relation (7.1.20); the entire solutions $v,z$, the representation (7.1.22), the characteristic function $C(\\lambda)$ of (7.1.23), and the identification (7.1.24)–(7.1.25) of the normalised eigenfunctions from the residues, pp. 413–415"
    pages: "409-415"
    role: the resolvent formulation, the bilinear series, the pole-and-residue theorem and its proof route through the characteristic function $C(\lambda)$
  - work: arfken-2013
    loc: "§10.1, pp. 449–450: the expansion of $G$ and of $\\delta(x-t)$ in the orthonormal eigenfunctions, Eqs. (10.10)–(10.13), the resulting bilinear form (10.14), the symmetry (10.15) it reveals, and the explicit caveat that the analysis fails if any $\\lambda_n$ is zero; §10.1, p. 455, Eqs. (10.29)–(10.31), the conversion of the eigenvalue ODE into an integral equation with kernel $G$"
    pages: "449-450, 455"
    role: the short derivation of the bilinear series from completeness, the deduction of symmetry from it, and the zero-eigenvalue caveat
  - work: rhb-2006
    loc: "§17.5, pp. 569–571: the superposition of eigenfunctions for $Ly = f$ with $Ly_n = \\lambda_n\\rho y_n$, Eqs. (17.43)–(17.49); the coefficients (17.48); the identification of the braces as the Green's function, Eqs. (17.50)–(17.51); the symmetry (17.52) and the remark that this formulation is equivalent to $LG = \\delta$"
    pages: "569-571"
    role: the derivation from the superposition side, with the Sturm–Liouville weight $\rho$ displayed
  - work: hassani-2013
    loc: "§20.4, pp. 630–632: Green's functions as resolvents, $R_0(A) = A^{-1}$ and $(L_x-\\lambda)G_\\lambda = \\delta(x-y)/w(x)$; the derivation of the coefficients $a_n^{(k)}(y) = u_n^{*(k)}(y)/(\\lambda_n-\\lambda)$ by Green's identity; the expansion (20.42), its validity exactly when $\\lambda$ is no eigenvalue, the simple poles and the residue $-\\sum_k u_n^{*(k)}(y)u_n^{(k)}(x)$; the contour formula (20.43) giving $-\\delta(x-y)/w(x)$; and the special case (20.44). Also §20, p. 605: $G$ as the integral kernel of $L^{-1}$"
    pages: "605, 630-632"
    role: the resolvent language, the derivation of the coefficients used in the proof, the degenerate-eigenvalue form of the series, and the contour integral that returns completeness
---

:::definition[The regular problem, its resolvent, and the Green's function of $L-\lambda$]{provenance=adapted src="stakgold-holst-2011:§7.1, (7.1.1)–(7.1.6), (7.1.12), (7.1.15), pp. 409–413; hassani-2013:§20.4, p. 630"}
Let $p \in C^1[a,b]$ with $p > 0$, let $q$ and $s$ be continuous with $s > 0$ on $[a,b]$, and consider the formally self-adjoint expression together with its **weighted inner product**

$$
\mathcal{L}u = -\bigl(p\,u'\bigr)' + q\,u ,
\qquad
(f,g)_s = \int_a^b s(x)\,f(x)\,\overline{g(x)}\,dx .
$$

Impose **unmixed** boundary conditions written, as Stakgold and Holst do, with two angles $\alpha,\beta \in [0,\pi)$:

$$
B_au = u(a)\cos\alpha - u'(a)\sin\alpha = 0 ,
\qquad
B_bu = u(b)\cos\beta + u'(b)\sin\beta = 0 .
$$

($\beta = 0$ is $u(b) = 0$ and $\beta = \pi/2$ is $u'(b) = 0$; likewise at $a$.) The **eigenvalue problem** is

$$
\mathcal{L}u = \lambda\,s\,u \ \ (a<x<b), \qquad B_au = B_bu = 0 .
$$

The **Green's function of $\mathcal{L} - \lambda s$**, also called the **resolvent kernel**, is the function $G(x,\xi;\lambda)$ with

$$
-\bigl(p\,G'\bigr)' + q\,G - \lambda\,s\,G = \delta(x-\xi) \ \ (a<x,\xi<b),
\qquad B_aG = B_bG = 0 ,
$$

derivatives taken in $x$; this is Stakgold and Holst's (7.1.15). It is the Green's function of :ref[the previous construction]{to=green.green-function-bvp} applied to the operator $\mathcal{L} - \lambda s$, whose leading coefficient is $-p$, so the jump condition reads

$$
\left.\frac{\partial G}{\partial x}\right|_{\xi^+} - \left.\frac{\partial G}{\partial x}\right|_{\xi^-} = -\frac{1}{p(\xi)} .
$$

By the existence theorem it exists exactly when $\lambda$ is **not** an eigenvalue, and then

$$
w(x,\lambda) = \int_a^b G(x,\xi;\lambda)\,f(\xi)\,d\xi
$$

is the unique solution of $\mathcal{L}w - \lambda s w = f$ with the same boundary conditions. Hassani's way of putting it: $G$ is the kernel of the operator $(L - \lambda)^{-1}$, the **resolvent** $R_\lambda(L)$, and $G$ at $\lambda = 0$ is the kernel of $L^{-1}$. Write $G(x,\xi) = G(x,\xi;0)$ for that case.
:::

:::note[Facts about the spectrum used but not proved here]{provenance=adapted src="stakgold-holst-2011:§7.1, item 3 and (7.1.14), p. 412"}
For the regular problem above the following hold, and are quoted rather than proved:

- the eigenvalues are real, simple, and can be listed as $\lambda_1 < \lambda_2 < \dots \to +\infty$, with only finitely many negative;
- the corresponding normalised eigenfunctions $\{u_n\}$, with $(u_n,u_m)_s = \delta_{nm}$, form an **orthonormal basis** of the space with inner product $(\cdot,\cdot)_s$;
- hence the completeness relation, valid as an identity between distributions,
  $$
  \frac{\delta(x-\xi)}{s(x)} = \sum_n u_n(x)\,\overline{u_n(\xi)} ,
  $$
  Stakgold and Holst's (7.1.20).

Their proof converts the eigenvalue problem into the integral equation $v = \lambda Kv$ with the symmetric Hilbert–Schmidt kernel $k(x,\xi) = \sqrt{s(x)}\,g_0(x,\xi)\sqrt{s(\xi)}$, where $g_0$ is the Green's function at $\lambda=0$, and applies the spectral theory of self-adjoint Hilbert–Schmidt operators; the simplicity of the eigenvalues uses the unmixedness of the boundary conditions. That route is :ref[Sturm–Liouville theory]{to=ode.sturm-liouville-theory} and :ref[Hilbert–Schmidt theory]{to=green.hilbert-schmidt}. Note that the Green's function is used to prove the completeness that is used below to expand it; the two statements are not circular, because the expansion below assumes completeness as given.
:::

:::statement[The bilinear expansion]{provenance=adapted src="stakgold-holst-2011:§7.1, (7.1.16) and (7.1.18), p. 413; hassani-2013:§20.4, (20.42) and (20.44), pp. 631–632; arfken-2013:§10.1, (10.14)–(10.15), p. 450; rhb-2006:§17.5, (17.50)–(17.52), p. 570"}
Let $\lambda$ be different from every eigenvalue. Then

$$
\boxed{\;G(x,\xi;\lambda) \;=\; \sum_{n} \frac{u_n(x)\,\overline{u_n(\xi)}}{\lambda_n - \lambda}\;}
$$

the **bilinear series** for the resolvent kernel, and the solution of $\mathcal{L}w - \lambda sw = f$ with the given boundary conditions is

$$
w(x,\lambda) = \sum_n \frac{\langle f,u_n\rangle}{\lambda_n - \lambda}\,u_n(x) ,
\qquad
\langle f,u_n\rangle = \int_a^b f(\xi)\,\overline{u_n(\xi)}\,d\xi .
$$

In particular, provided $0$ is not an eigenvalue,

$$
G(x,\xi) = \sum_n \frac{u_n(x)\,\overline{u_n(\xi)}}{\lambda_n} ,
$$

which is Arfken's (10.14), Hassani's (20.44) and Riley, Hobson and Bence's (17.51). Two consequences are immediate from the form of the series:

- **Symmetry.** $G(x,\xi;\lambda) = \overline{G(\xi,x;\overline\lambda)}$; for real $\lambda$ and real eigenfunctions, $G(x,\xi;\lambda) = G(\xi,x;\lambda)$. Arfken's (10.15) and Riley, Hobson and Bence's (17.52) record this, and it agrees with the reciprocity proved directly in :ref[the construction unit]{to=green.green-function-bvp}.
- **Where the solution is large.** The coefficient of $u_n$ in $w$ carries the factor $(\lambda_n-\lambda)^{-1}$, so driving the system near an eigenvalue amplifies the component of the response along that eigenfunction without limit — resonance, read off the formula.

If an eigenvalue $\lambda_n$ is degenerate, the numerator becomes $\sum_k u_n^{(k)}(x)\overline{u_n^{(k)}(\xi)}$, summed over an orthonormal basis of its eigenspace, as in Hassani's (20.42). The regular problem of the definition has simple eigenvalues, so a single term suffices there.
:::

:::statement[Poles, residues, and recovery of the spectrum]{provenance=adapted src="stakgold-holst-2011:§7.1, pp. 413–415, the residue statement, (7.1.19) and (7.1.22)–(7.1.25); hassani-2013:§20.4, the residue and (20.43), p. 631"}
Regard $G(x,\xi;\lambda)$ as a function of the complex variable $\lambda$ with $x,\xi$ fixed.

**(i) Meromorphy.** $G$ is meromorphic in $\lambda$, with **simple poles** exactly at the eigenvalues $\lambda_n$, and

$$
\operatorname*{Res}_{\lambda = \lambda_n} G(x,\xi;\lambda) = -\,u_n(x)\,\overline{u_n(\xi)} .
$$

**(ii) Closed form.** Let $v(\cdot,\lambda)$ solve $\mathcal{L}v = \lambda s v$ with $v(a,\lambda) = \sin\alpha$, $v'(a,\lambda) = \cos\alpha$, and let $z(\cdot,\lambda)$ solve the same equation with $z(b,\lambda) = \sin\beta$, $z'(b,\lambda) = -\cos\beta$. Then $B_av = 0$, $B_bz = 0$, both are **entire** functions of $\lambda$, and

$$
G(x,\xi;\lambda) = -\,\frac{v(x_{<},\lambda)\,z(x_{>},\lambda)}{C(\lambda)} ,
\qquad
p(x)\,W\bigl[v,z;x\bigr] = p\,(vz' - zv') = C(\lambda) ,
$$

where $C$, the **characteristic function**, is entire and independent of $x$. The zeros of $C$ are exactly the eigenvalues, and they are simple.

**(iii) Eigenfunctions from residues.** Writing $v_n = v(\cdot,\lambda_n)$, $z_n = z(\cdot,\lambda_n)$, these are proportional, $v_n = k_nz_n$ with $k_n$ a nonzero real constant, and the normalised eigenfunction is

$$
u_n(x) = \pm\,\frac{v_n(x)}{\bigl\{k_n\,C'(\lambda_n)\bigr\}^{1/2}} = \pm\left\{\frac{k_n}{C'(\lambda_n)}\right\}^{1/2}z_n(x) ,
$$

Stakgold and Holst's (7.1.25). So a closed-form expression for $G$, obtained without any knowledge of the spectrum, determines the eigenvalues as the poles and the normalised eigenfunctions from the residues — the normalisation constant included, which is the part usually computed by a separate integral.

**(iv) Completeness as a contour integral.** Integrating $G$ counterclockwise around a circle $C_\infty$ in the $\lambda$ plane enclosing all the poles and summing the residues gives

$$
\frac{1}{2\pi i}\oint_{C_\infty} G(x,\xi;\lambda)\,d\lambda = -\sum_n u_n(x)\overline{u_n(\xi)} = -\frac{\delta(x-\xi)}{s(x)} ,
$$

Stakgold and Holst's (7.1.19) with (7.1.20), and Hassani's (20.43). Both authors note that the series does not converge in the ordinary sense; the identity holds in the sense of distributions. Stakgold and Holst add that for a problem with continuous spectrum the same contour formula survives with the sum replaced by an integral over a continuous parameter, because $G$ then has a branch cut instead of poles.
:::

:::idea{provenance=original}
A Green's function inverts a differential operator; an orthonormal basis of eigenfunctions diagonalises it. Put the two together and the inverse must be diagonal in the same basis, with the reciprocals of the eigenvalues on the diagonal — exactly as a symmetric matrix $A = \sum\lambda_n e_ne_n^{\mathsf T}$ has $A^{-1} = \sum\lambda_n^{-1}e_ne_n^{\mathsf T}$. The bilinear series is that identity written as a kernel, and $(\mathcal{L}-\lambda s)^{-1}$ replaces $\lambda_n$ by $\lambda_n - \lambda$.

Two short routes prove it. Arfken's: expand both the unknown kernel and the delta in the basis, apply $\mathcal{L}$, and compare coefficients. Stakgold's and Hassani's: pair the defining equation for $G$ with $u_n$ and use the symmetry of $\mathcal{L}$ to move the operator onto $u_n$, which turns $(\mathcal{L}-\lambda s)G$ into $(\lambda_n-\lambda)$ times the coefficient; the delta on the other side supplies $\overline{u_n(\xi)}$. The second route is used below, because it needs completeness only at the last step.

The pole structure is then forced: a sum of simple poles with residues $-u_n(x)\overline{u_n(\xi)}$. The surprise is that the same information can be extracted from the *constructed* Green's function, which knows nothing about eigenfunctions. Build $G$ out of two solutions normalised by initial data independent of $\lambda$; those depend analytically on $\lambda$, so all the $\lambda$-dependence of the poles sits in the one scalar $C(\lambda) = pW[v,z]$ in the denominator. $C$ vanishes exactly when $v$ and $z$ are proportional — that is, when a single function satisfies the equation and *both* boundary conditions, which is what an eigenfunction is. Taking the residue, the two pieces $v(x_<)z(x_>)$ fuse into the symmetric product $z_n(x)z_n(\xi)$: the kink at $x=\xi$ leaves no trace, because at an eigenvalue the two branches are multiples of the same function.
:::

:::proof[The bilinear expansion]{provenance=adapted src="hassani-2013:§20.4, the computation of $a_n^{(k)}(y)$, pp. 630–631; stakgold-holst-2011:§7.1, derivation of (7.1.16), p. 413"}
Fix $\xi \in (a,b)$ and let $\lambda$ be no eigenvalue, so that $G(\cdot,\xi;\lambda)$ exists.

**Step 1 (expand in the basis).** Since $\{u_n\}$ is an orthonormal basis for $(\cdot,\cdot)_s$ and $G(\cdot,\xi;\lambda)$ satisfies the boundary conditions,

$$
G(x,\xi;\lambda) = \sum_n g_n(\xi,\lambda)\,u_n(x), \qquad g_n = \bigl(G(\cdot,\xi;\lambda),\,u_n\bigr)_s = \int_a^b s(x)\,G(x,\xi;\lambda)\,\overline{u_n(x)}\,dx .
$$

**Step 2 (pair the defining equation with $u_n$).** Multiply $\mathcal{L}G - \lambda sG = \delta(\cdot-\xi)$ by $\overline{u_n(x)}$ and integrate over $(a,b)$. The right-hand side gives $\overline{u_n(\xi)}$ by the sifting property. The left-hand side is

$$
\int_a^b \overline{u_n}\,\mathcal{L}G\,dx \;-\; \lambda\int_a^b s\,\overline{u_n}\,G\,dx
= \bigl(\mathcal{L}G,u_n\bigr)_{\!*} - \lambda\,g_n ,
$$

where $\bigl(\mathcal{L}G,u_n\bigr)_{\!*}$ denotes the unweighted integral $\int \overline{u_n}\,\mathcal{L}G$.

**Step 3 (move $\mathcal{L}$ onto the eigenfunction).** For the formally self-adjoint $\mathcal{L}$, Lagrange's identity gives $\overline{u_n}\,\mathcal{L}G - G\,\overline{\mathcal{L}u_n} = \bigl[p\,W(G,\overline{u_n})\bigr]'$ with $W(G,\overline{u_n}) = G\,\overline{u_n}' - G'\,\overline{u_n}$ — directly: the two terms in $q$ cancel, and $-\overline{u_n}(pG')' + G(p\overline{u_n}')'$ is the derivative of $p(G\overline{u_n}' - G'\overline{u_n})$, the cross terms $p\,G'\overline{u_n}'$ cancelling. (This is Stakgold and Holst's (7.1.8), which carries their $1/s$ because their $L$ does; multiplying by $s$ gives the form above.) Hence

$$
\int_a^b\bigl(\overline{u_n}\,\mathcal{L}G - G\,\overline{\mathcal{L}u_n}\bigr)dx = \Bigl[p\,\bigl(G\,\overline{u_n}' - G'\,\overline{u_n}\bigr)\Bigr]_a^b = 0 ,
$$

because $G(\cdot,\xi;\lambda)$ and $u_n$ both satisfy the same unmixed homogeneous conditions, which make the Wronskian vanish at each endpoint separately. Here the self-adjointness of the problem — both $\mathcal{L}^* = \mathcal{L}$ and the matching boundary conditions — is used. Since $\mathcal{L}u_n = \lambda_n s u_n$ and $\lambda_n$ is real,

$$
\int_a^b \overline{u_n}\,\mathcal{L}G\,dx = \int_a^b G\,\overline{\mathcal{L}u_n}\,dx = \lambda_n\int_a^b s\,G\,\overline{u_n}\,dx = \lambda_n\,g_n .
$$

**Step 4 (solve for the coefficient).** Steps 2 and 3 combine to $\bigl(\lambda_n - \lambda\bigr)g_n = \overline{u_n(\xi)}$. As $\lambda$ is no eigenvalue, $\lambda_n - \lambda \ne 0$ and

$$
g_n(\xi,\lambda) = \frac{\overline{u_n(\xi)}}{\lambda_n - \lambda} .
$$

Substituting into Step 1 gives the bilinear series.

**Step 5 (the solution series).** For $w = \int_a^b G(\cdot,\xi;\lambda)f(\xi)\,d\xi$, insert the series and integrate term by term:

$$
w(x,\lambda) = \sum_n \frac{u_n(x)}{\lambda_n-\lambda}\int_a^b \overline{u_n(\xi)}\,f(\xi)\,d\xi = \sum_n\frac{\langle f,u_n\rangle}{\lambda_n-\lambda}\,u_n(x) .
$$

**Step 6 (symmetry).** The series displays $G(x,\xi;\lambda)$ as $\sum u_n(x)\overline{u_n(\xi)}/(\lambda_n-\lambda)$; interchanging $x$ and $\xi$ and conjugating sends each term to itself with $\lambda$ replaced by $\overline\lambda$, so $G(x,\xi;\lambda) = \overline{G(\xi,x;\overline\lambda)}$. $\square$
:::

:::proof[Poles, residues and the characteristic function]{provenance=adapted src="stakgold-holst-2011:§7.1, pp. 413–415"}
**Step 1 (the two entire solutions).** Let $v(\cdot,\lambda)$ and $z(\cdot,\lambda)$ be as in the statement. Each is the solution of an initial-value problem whose data do not involve $\lambda$ and whose equation depends on $\lambda$ analytically. That $v$, $z$ and their $x$-derivatives are then **entire** functions of $\lambda$ is *quoted* from Stakgold and Holst, not proved here: the argument converts the initial-value problem into a Volterra integral equation and sums its Neumann series, which converges for every complex $\lambda$, and neither the Volterra form nor the convergence of that series is among this unit's prerequisites. Everything below uses only the conclusion. The choice of initial data makes $B_av = 0$ and $B_bz = 0$: for instance $B_av = \sin\alpha\cos\alpha - \cos\alpha\sin\alpha = 0$.

**Step 2 (the shape of $G$).** For $x < \xi$, $G$ solves the homogeneous equation and satisfies the condition at $a$, so it is a multiple of $v$; for $x>\xi$ it is a multiple of $z$. Continuity at $x=\xi$ forces the common form $G = A\,v(x_{<},\lambda)z(x_{>},\lambda)$ with $A$ depending on $\xi$ and $\lambda$ but not on $x$.

**Step 3 (the jump fixes $A$).** The jump condition is $\bigl[\partial G/\partial x\bigr]_{\xi^-}^{\xi^+} = -1/p(\xi)$, since the leading coefficient of $\mathcal{L}-\lambda s$ is $-p$. Computing the two one-sided derivatives,

$$
A\bigl[v(\xi,\lambda)z'(\xi,\lambda) - v'(\xi,\lambda)z(\xi,\lambda)\bigr] = -\frac{1}{p(\xi)} ,
$$

and the bracket is the Wronskian $W[v,z;\xi]$. By Abel's formula for a formally self-adjoint operator, $p(x)W[v,z;x]$ is independent of $x$; call it $C(\lambda)$. Then $A\,C(\lambda)/p(\xi) = -1/p(\xi)$, so $A = -1/C(\lambda)$ and

$$
G(x,\xi;\lambda) = -\frac{v(x_{<},\lambda)\,z(x_{>},\lambda)}{C(\lambda)} .
$$

Being a Wronskian of entire functions times $p$, $C$ is entire.

**Step 4 (zeros of $C$ are the eigenvalues).** If $C(\mu) = 0$ then $W[v,z;x]$ vanishes identically, so $v(\cdot,\mu)$ and $z(\cdot,\mu)$ are linearly dependent. Neither vanishes identically, because their initial data $(\sin\alpha,\cos\alpha)$ and $(\sin\beta,-\cos\beta)$ are not both zero for $\alpha,\beta \in [0,\pi)$. Hence $v(\cdot,\mu)$ is a nonzero multiple of $z(\cdot,\mu)$ and therefore satisfies *both* boundary conditions as well as the equation: $\mu$ is an eigenvalue. Conversely, the bilinear series shows $G$ is singular at each $\lambda_n$, and the only possible source of a singularity in Step 3 is a zero of $C$; so $C(\lambda_n) = 0$. The bilinear series also shows the poles are simple, so the zeros of $C$ are simple.

**Step 5 (the residue).** Fix $n$ and abbreviate $v_n = v(\cdot,\lambda_n)$, $z_n = z(\cdot,\lambda_n)$, with $v_n = k_nz_n$ from Step 4. Since $C(\lambda_n) = 0$ and $C'(\lambda_n) \ne 0$,

$$
\operatorname*{Res}_{\lambda=\lambda_n} G = -\frac{v_n(x_{<})\,z_n(x_{>})}{C'(\lambda_n)} = -\frac{k_n\,z_n(x_{<})\,z_n(x_{>})}{C'(\lambda_n)} = -\frac{k_n\,z_n(x)\,z_n(\xi)}{C'(\lambda_n)} ,
$$

the last step because $z_n(x_<)z_n(x_>) = z_n(x)z_n(\xi)$ whichever of $x,\xi$ is the larger. The discontinuity of $\partial G/\partial x$ at $x=\xi$ has left no trace: at an eigenvalue the two branches are multiples of one and the same function.

**Step 6 (identify the eigenfunction).** Comparing with the residue $-u_n(x)\overline{u_n(\xi)}$ read off the bilinear series, and recalling that for a real problem the eigenfunctions may be taken real,

$$
u_n(x)u_n(\xi) = \frac{k_n\,z_n(x)z_n(\xi)}{C'(\lambda_n)} \quad\text{for all } x,\xi ,
$$

so $u_n = \pm\{k_n/C'(\lambda_n)\}^{1/2}z_n$, equivalently $u_n = \pm v_n/\{k_nC'(\lambda_n)\}^{1/2}$. The sign is the usual arbitrary phase of an eigenfunction.

**Step 7 (the contour integral).** Let $C_\infty$ be a large circle in the $\lambda$ plane enclosing all the poles. Summing residues,

$$
\frac{1}{2\pi i}\oint_{C_\infty} G(x,\xi;\lambda)\,d\lambda = \sum_n\operatorname*{Res}_{\lambda_n}G = -\sum_n u_n(x)\overline{u_n(\xi)} = -\frac{\delta(x-\xi)}{s(x)} ,
$$

by the completeness relation quoted in the note. Stakgold and Holst and Hassani both record that the last series diverges pointwise and the identity is to be read distributionally. $\square$
:::

:::remark[Where the hypotheses are used, and what the series does and does not do]{provenance=original}
- **$\lambda$ not an eigenvalue.** Used in Step 4 of the first proof to divide by $\lambda_n-\lambda$, and it is also exactly the condition for $G$ to exist (Hassani states the equivalence explicitly). At $\lambda = \lambda_n$ the resolvent does not exist and its substitute is :ref[the modified Green's function]{to=green.fredholm-alternative}, whose bilinear series is the same one with the offending term deleted.
- **Zero as an eigenvalue.** The $\lambda=0$ series $\sum u_nu_n/\lambda_n$ is the special case $\lambda=0$ and requires $0 \notin\{\lambda_n\}$. Arfken flags this explicitly and declines to pursue it; the insulated-rod problem of the previous unit is the standard instance.
- **Self-adjointness.** Step 3 of the first proof uses both $\mathcal{L}^*=\mathcal{L}$ and the fact that $G$ and $u_n$ satisfy the *same* boundary conditions. For a non-self-adjoint problem the expansion needs the eigenfunctions of $L$ in one argument and those of $L^*$ in the other, and the eigenfunctions need not be complete at all.
- **Convergence.** The series converges in the mean-square sense for each fixed $\xi$, since it is the expansion of a function in an orthonormal basis. Pointwise convergence is better than that because the coefficients decay and the eigenfunctions stay bounded: for a regular problem $\lambda_n \sim c\,n^2$ and the normalised $u_n$ are bounded uniformly in $n$ and in $x$ — both facts belong to :ref[Sturm–Liouville theory]{to=ode.sturm-liouville-theory} and are used here, not proved — so the terms are $O(n^{-2})$ uniformly and the series converges absolutely and uniformly, with $G$ continuous. It cannot, however, be differentiated twice term by term: the result would be the completeness relation, a distribution, not a function — which is precisely the kink at $x=\xi$ reappearing.
- **Practical weight.** Arfken is blunt that the bilinear series is of "dubious value as a computational tool": computing a few eigenfunctions and summing a slowly converging series is usually worse than solving the two-point problem in closed form. Its value is structural — symmetry, resonance, the pole picture — and in the *reverse* direction of part (iii), where a closed-form $G$ hands over the whole spectrum.
- **Where simplicity of the eigenvalues matters.** Steps 5 and 6 of the second proof assume each eigenvalue has a one-dimensional eigenspace, which holds for the unmixed conditions above. With periodic conditions eigenvalues can be double, and the residue is then the sum over an orthonormal basis of the eigenspace, as in Hassani's (20.42).
:::

:::remark[Conventions]{provenance=original}
Four books, four normalisations of the same object. This unit uses Stakgold and Holst's: the equation carries no weight on the delta, the weight sits in the inner product, and the solution is $\int Gf\,d\xi$.

| Source | Eigenvalue problem | Equation for $G$ | Solution |
|---|---|---|---|
| here, Stakgold–Holst | $\mathcal{L}u = \lambda s u$ | $(\mathcal{L}-\lambda s)G = \delta$ | $\int G f\,d\xi$ |
| Arfken | $L\varphi_n = \lambda_n\varphi_n$ | $LG = \delta$ | $\int Gf\,dt$ |
| Riley–Hobson–Bence | $Ly_n = \lambda_n\rho\,y_n$ | $LG = \delta$ | $\int Gf\,dz$ |
| Hassani | $L_xu = \lambda u$ | $(L_x-\lambda)G_\lambda = \delta/w$ | $\int w\,Gf\,dy$ |

All four produce the same bilinear series $\sum u_n(x)\overline{u_n(\xi)}/(\lambda_n-\lambda)$, each in its own symbols, with eigenfunctions normalised in the inner product that goes with the weight.

Two cautions, about the weight and about the sign.

**The weight.** Hassani's $1/w$ on the delta does *not* make his kernel ours divided by $w$: his (20.24) defines $L_x = \frac1w\frac{d}{dx}\bigl(p\frac{d}{dx}\bigr) + q$, with the $1/w$ already inside the operator, so multiplying $(L_x-\lambda)G_\lambda = \delta/w$ through by $w$ returns the same unweighted delta the other three rows carry. (Take $p=1$, $q=0$, $w=s=2$ on $(0,1)$ with Dirichlet conditions at $\lambda=0$: ours solves $-G''=\delta$, giving $G = x_<(1-x_>)$; his solves $\tfrac12\,\partial_x^2G_\lambda = \delta/2$, giving $G_\lambda = -x_<(1-x_>)$. The two differ by a sign — the sign discussed next — and by nothing else; there is no factor $2$ anywhere.) Where the weight really sits is on the *source*: his equation multiplied through by $w$ reads $\bigl[(pu')' + qwu - \lambda wu\bigr] = wf$ when the forcing is $f$, so it is $wf$, not $f$, that his representation $u(x) = \int w\,G_\lambda f\,dy$ is matched to. Dropping his kernel into our integral $\int G f\,d\xi$ therefore loses that $w$: the mistake is a factor $w$ in the forcing, not in the kernel.

**The sign.** Arfken writes $L$ for the self-adjoint $(pu')' + qu$, whose eigenvalues *decrease* to $-\infty$, whereas $\mathcal{L} = -(pu')'+qu$ used here has eigenvalues increasing to $+\infty$: the two spectra run in opposite directions. They are related by a plain change of sign, $\lambda_n^{\text{Arfken}} = -\lambda_n$, only when $q \equiv 0$, for only then is $(pu')'+qu$ the negative of $-(pu')'+qu$; with $q \ne 0$ the two operators are genuinely different and the eigenvalues are not sign-flips of one another. Hassani's $L_x$ of (20.24) carries Arfken's sign too, so the same caveat applies to his row.
:::

:::method[Reading the spectrum off a Green's function]{provenance=adapted src="stakgold-holst-2011:§7.1, pp. 413–415"}
1. **Build $G(x,\xi;\lambda)$ in closed form**, keeping $\lambda$ as a parameter: solve $\mathcal{L}u = \lambda su$ twice, once with the initial data at $a$ that enforce $B_au=0$ and once with the data at $b$ that enforce $B_bu = 0$, giving $v(\cdot,\lambda)$ and $z(\cdot,\lambda)$. Use the data of part (ii) literally, $\bigl(\sin\alpha,\cos\alpha\bigr)$ at $a$ and $\bigl(\sin\beta,-\cos\beta\bigr)$ at $b$: they must not involve $\lambda$.
2. **Compute the characteristic function** $C(\lambda) = p\,(vz'-zv')$, which must come out independent of $x$; if it does not, the operator was not in formally self-adjoint form.
3. **Assemble** $G = -v(x_{<},\lambda)z(x_{>},\lambda)/C(\lambda)$.
4. **Find the eigenvalues** as the zeros of $C$. They are the poles of $G$, and for a regular problem they are real and simple. This reading depends on step 1 having been followed: if $v$ or $z$ was rescaled by a factor depending on $\lambda$ — easily done when a convenient closed form is picked up instead — then $C$ acquires extra zeros that are not eigenvalues, as item 7 of the example shows. The check is to confirm that $G$ really has a pole at each candidate.
5. **Normalise the eigenfunctions** by $u_n = \pm v_n/\{k_nC'(\lambda_n)\}^{1/2}$, where $v_n = k_nz_n$; no separate normalisation integral is needed.
6. **Or go the other way**: given the spectrum, write $G(x,\xi;\lambda) = \sum u_n(x)\overline{u_n(\xi)}/(\lambda_n-\lambda)$ and $w = \sum\langle f,u_n\rangle u_n/(\lambda_n-\lambda)$. Use this to locate resonances and to see which modes a given forcing excites, rather than to compute $G$ numerically.
:::

:::example[An Euler operator on $[1,e]$: closed form, series, poles and residues]{provenance=original}
Take

$$
\mathcal{L}u = -\bigl(x\,u'\bigr)' \ \ \text{on } 1 \le x \le e , \qquad u(1) = u(e) = 0 , \qquad s(x) = \frac1x .
$$

So $p(x) = x$, $q = 0$, and $\alpha = \beta = 0$ in the angle notation.

1. *The substitution that trivialises it.* Put $t = \ln x$, so $x\,d/dx = d/dt$ and $t$ runs over $[0,1]$. Then $\bigl(xu'\bigr)' = \frac1x u_{tt}$ and $\delta(x-\xi) = \delta(t-\tau)/x$ with $\tau = \ln\xi$, so the eigenvalue problem $-\bigl(xu'\bigr)' = \lambda u/x$ becomes $-u_{tt} = \lambda u$ with $u = 0$ at $t = 0,1$.
2. *Spectrum.* Hence $\lambda_n = n^2\pi^2$ for $n = 1,2,\dots$, with eigenfunctions $\sin(n\pi t)$. Normalising in $(\cdot,\cdot)_s$: $\int_1^e u^2\,\frac{dx}{x} = \int_0^1u^2\,dt$, so
   $$
   u_n(x) = \sqrt2\,\sin\bigl(n\pi\ln x\bigr) , \qquad \lambda_n = n^2\pi^2 .
   $$
3. *The Green's function at $\lambda = 0$, built without eigenfunctions.* The homogeneous equation $(xu')'=0$ gives $u = c\ln x + d$; take $u_1 = \ln x$ (zero at $x=1$) and $u_2 = \ln x - 1$ (zero at $x=e$). Their Wronskian is $W = u_1u_2' - u_1'u_2 = \frac{\ln x}{x} - \frac{\ln x - 1}{x} = \frac1x$, and the leading coefficient of $\mathcal{L}$ is $a_2 = -x$, so $a_2(\xi)W(\xi) = -1$ and
   $$
   G(x,\xi) = \frac{u_1(x_{<})u_2(x_{>})}{-1} = \ln x_{<}\,\bigl(1 - \ln x_{>}\bigr) .
   $$
   Checks: $-\bigl(xG'\bigr)' = 0$ on each side; $G$ vanishes at $x=1$ and $x=e$; $G$ is continuous at $x=\xi$; and the jump in $\partial G/\partial x$ there is $-\frac{1}{\xi}\ln\xi - \frac{1-\ln\xi}{\xi} = -\frac1\xi = -\frac{1}{p(\xi)}$, as required.
4. *The bilinear series.* The theorem predicts
   $$
   \ln x_{<}\,\bigl(1-\ln x_{>}\bigr) = \frac{2}{\pi^2}\sum_{n=1}^{\infty}\frac{\sin(n\pi\ln x)\,\sin(n\pi\ln\xi)}{n^2} .
   $$
   At $x = 1.5$, $\xi = 2$: the left side is $\ln 1.5\,(1-\ln 2) = 0.4054651\times0.3068528 = 0.12441811$; summing $4000$ terms of the right side gives $0.12441811$. (At $x = \xi$ the identity is the classical $\sum n^{-2}\sin^2 n\pi t = \tfrac{\pi^2}{2}t(1-t)$.)
5. *Solving with it.* For $f(x) = 1/x$, substituting $\tau = \ln\xi$ turns $u(x) = \int_1^e G(x,\xi)f(\xi)\,d\xi$ into $\int_0^1 t_{<}(1-t_{>})\,d\tau$, which is $\tfrac12 t(1-t)$; that is
   $$
   u(x) = \tfrac12\,\ln x\,\bigl(1 - \ln x\bigr) , \qquad u(2) = 0.10634708 .
   $$
   Direct check: $-\bigl(xu'\bigr)' = -\tfrac1x u_{tt} = \tfrac1x = f(x)$, and $u(1)=u(e)=0$.
6. *The same answer as a series.* Here $\langle f,u_n\rangle = \int_1^e \frac1\xi\sqrt2\sin(n\pi\ln\xi)\,d\xi = \sqrt2\int_0^1\sin n\pi\tau\,d\tau = \dfrac{\sqrt2\,\bigl(1-(-1)^n\bigr)}{n\pi}$, so
   $$
   u(x) = \sum_n\frac{\langle f,u_n\rangle}{\lambda_n}u_n(x) = \frac{4}{\pi^3}\sum_{n\ \text{odd}}\frac{\sin(n\pi\ln x)}{n^3} ,
   $$
   and the classical sum $\sum_{n\ \text{odd}}n^{-3}\sin n\pi t = \tfrac{\pi^3}{8}t(1-t)$ reproduces item 5 exactly.
7. *The resolvent and its poles.* Keeping $\lambda$, the same substitution gives $-g_{tt} - \lambda g = \delta(t-\tau)$, so with $k = \sqrt\lambda$,
   $$
   G(x,\xi;\lambda) = \frac{\sin\bigl(k\,t_{<}\bigr)\,\sin\bigl(k(1-t_{>})\bigr)}{k\,\sin k} , \qquad t = \ln x,\ \tau = \ln\xi .
   $$
   In the language of part (ii), $v = \sin kt$ satisfies the condition at $x=1$ and $z = \sin k(1-t)$ the one at $x=e$. These are *not* the initial-value normalisations part (ii) prescribes. With $\alpha=\beta=0$ those ask for $v(1,\lambda)=0$, $v'(1,\lambda)=1$ and $z(e,\lambda)=0$, $z'(e,\lambda)=-1$ (primes in $x$, and $d/dx = \frac1x\,d/dt$), which give
   $$
   v_{\mathrm{ii}} = \frac{\sin kt}{k} , \qquad z_{\mathrm{ii}} = \frac{e}{k}\,\sin\bigl(k(1-t)\bigr) .
   $$
   The factors $k$ and $k/e$ relating them to $v,z$ depend on $\lambda$, not merely on scale. For $G$ itself and for the residues this is harmless — rescaling $v$ and $z$ rescales $C = p\,W[v,z]$ by the same product, and the residue formula of part (iii) is invariant under it, as item 8 will use. It is *not* harmless for part (i)'s reading of $C$. Because $p\,W_x[v,z] = W_t[v,z]$ under $t=\ln x$, the convenient pair gives
   $$
   C(\lambda) = -k\sin k ,
   $$
   whose zeros include $k = n\pi$, that is $\lambda = n^2\pi^2$ — the eigenvalues, recovered without ever solving the eigenvalue problem — but also $\lambda = 0$, since $-k\sin k = -\lambda + \lambda^2/6 - \dots$ has a simple zero there. That zero is spurious: $\lambda = 0$ is not an eigenvalue, and $G$ has no pole there but tends to the $\ln x_<(1-\ln x_>)$ of item 3. The normalisation of part (ii) is what removes the trap, since
   $$
   C_{\mathrm{ii}}(\lambda) = \frac{e}{k^2}\bigl(-k\sin k\bigr) = -\frac{e\sin k}{k} \longrightarrow -e \ne 0 \quad\text{as } \lambda \to 0 .
   $$
   The moral for step 4 of the method: read eigenvalues off the zeros of $C$ only when $v$ and $z$ carry part (ii)'s $\lambda$-independent initial data; a rescaling by a function of $\lambda$ can manufacture zeros that are not eigenvalues.
8. *Residues return the normalised eigenfunctions.* Here the convenient pair $v,z$ of item 7 may be used together with its own $C = -k\sin k$: replacing $(v,z)$ by $(av,bz)$ sends $C \mapsto abC$, $k_n = v_n/z_n \mapsto (a/b)k_n$ and $z_n \mapsto bz_n$, so the combination $k_nz_n(x)z_n(\xi)/C'(\lambda_n)$ is unchanged. Now $C'(\lambda) = -\frac{d}{d\lambda}\bigl(k\sin k\bigr) = -\frac{\sin k + k\cos k}{2k}$, which at $k = n\pi$ is $-\tfrac12(-1)^n$. Also $z_n(t) = \sin n\pi(1-t) = -(-1)^n\sin n\pi t$, so $k_n = v_n/z_n = -(-1)^n$ and
   $$
   \operatorname*{Res}_{\lambda=\lambda_n}G = -\frac{k_nz_n(t)z_n(\tau)}{C'(\lambda_n)} = -\frac{(-1)^{2n}\sin n\pi t\,\sin n\pi\tau}{\tfrac12} = -2\sin(n\pi\ln x)\sin(n\pi\ln\xi) ,
   $$
   which is $-u_n(x)u_n(\xi)$, normalisation included. Numerically at $x=1.5$, $\xi=2$, $n=2$: multiplying $G$ by $\lambda - \lambda_2$ at $\lambda = 4\pi^2 + 10^{-6}$ gives $1.0486688$, against the predicted $-u_2(1.5)u_2(2) = 1.0486688$.
9. *Resonance.* The solution of $\mathcal{L}w - \lambda sw = f$ with $f = 1/x$ is $\sum_n\langle f,u_n\rangle u_n/(\lambda_n-\lambda)$. Only odd $n$ contribute, so pushing $\lambda$ towards $4\pi^2$ — an *even* eigenvalue — leaves $w$ bounded, while pushing it towards $\pi^2$ makes $w$ blow up along $u_1$. Whether a near-resonance is felt depends on whether the forcing overlaps the mode, which is exactly what the numerator $\langle f,u_n\rangle$ records.
:::

:::application{provenance=original}
- **Reading a spectrum from a response function.** Part (iii) is the mathematics behind spectroscopy in its broadest sense. A measured frequency response is a resolvent; its poles in the complex frequency plane are the natural frequencies of the system and the residues give the mode shapes together with their normalisation. Experimental modal analysis of a structure, impedance spectroscopy of a circuit, and the extraction of resonance parameters from a scattering amplitude are all this procedure. The pole--residue form $\sum u_n(x)u_n(\xi)/(\lambda_n-\lambda)$ is what a fitting routine fits.
- **Resonance and mode selection.** The factor $\langle f,u_n\rangle/(\lambda_n-\lambda)$ says that a drive excites a mode in proportion to its overlap with that mode and inversely with the detuning. An organ pipe blown at a node of a given harmonic does not sound it; a load applied at a nodal line of a plate mode does not excite it; a laser cavity tuned between two longitudinal modes couples weakly to both. Engineers use the same formula backwards, placing actuators where $\langle f,u_n\rangle$ is large for the mode they want and small for the one they fear.
- **Quantum mechanics.** With $\mathcal{L} = -\frac{\hbar^2}{2m}\frac{d^2}{dx^2} + V$, the resolvent $(H-E)^{-1}$ is the energy Green's function, the bilinear series is the spectral decomposition $\sum_n\psi_n(x)\overline{\psi_n(\xi)}/(E_n-E)$, and the poles on the real axis are the bound-state energies with residues giving the wavefunctions. Continuing to complex $E$ turns a continuous spectrum into a branch cut, and resonances appear as poles on the second sheet — the continuous-spectrum version Stakgold and Holst point to. The contour formula of part (iv) is the completeness relation $\sum_n|\psi_n\rangle\langle\psi_n| = 1$ in disguise, and the same contour integral with an extra factor $e^{-iEt/\hbar}$ yields the propagator.
- **Heat and diffusion.** Expanding the initial datum in eigenfunctions and attaching $e^{-\lambda_nt}$ to each solves the heat equation, with the slowest mode $\lambda_1$ controlling the long-time behaviour; a negative $\lambda_1$ signals instability. The Green's function of the time-dependent problem is the Laplace transform of the resolvent, which is why the poles of $G(\cdot,\cdot;\lambda)$ are the decay rates (:ref[Green's functions for the wave and heat equations]{to=green.wave-heat-green-functions}).
- **Converting to an integral equation.** Because $G$ inverts $\mathcal{L}$, the eigenvalue problem becomes $u(x) = \lambda\int_a^b G(x,\xi)s(\xi)u(\xi)\,d\xi$. Arfken's reason for preferring this form is that the integral operator is bounded while the differential operator is not, so stronger theorems apply; it is also the form a numerical scheme can discretise stably, since discretising $G$ gives a well-conditioned matrix where discretising $d^2/dx^2$ gives one whose condition number grows like the square of the mesh refinement.
:::
