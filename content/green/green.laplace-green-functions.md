---
id: green.laplace-green-functions
title: Green's functions for Laplace and Poisson problems
kind: theorem
level: core
summary: Defines the Dirichlet and Neumann Green's functions of a bounded region for $\nabla^2$, derives the representation formula that expresses the solution of $\nabla^2 u = \rho$ from the data alone, and proves that the Dirichlet Green's function is symmetric in its two arguments.
prereqs: [pde.laplace-fundamental-solution, vcalc.green-identities, vcalc.dirac-delta-basics]
provenance: adapted
sources:
  - work: rhb-2006
    loc: "§21.5.1, Eqs. (21.77)-(21.78), p. 752 (the defining equation $LG = \\delta(\\mathbf{r}-\\mathbf{r}_0)$ and the homogeneous-boundary-condition solution); §21.5.2, Eqs. (21.80)-(21.84), pp. 754-756 (the general formula obtained from Green's second theorem); §21.5.3, Eqs. (21.85)-(21.86) and the splitting $G = F + H$, pp. 756-757; §21.5.4, the consistency condition $\\oint_S \\partial G/\\partial n\\, dS = 1$, the choice $\\partial G/\\partial n = 1/A$ and Eq. (21.106), pp. 765-766"
    pages: "752-757, 765-766"
    role: the convention $\\nabla^2 G = \\delta$, the representation formula and its derivation from Green's second theorem, the Dirichlet and Neumann solution formulas, and the Neumann consistency condition
  - work: strauss-2008
    loc: "§7.3, pp. 188-190: the three-part definition of the Green's function of a domain $D$ at a point $x_0$, Theorem 1 (the Dirichlet formula), the symmetry $G(x,x_0) = G(x_0,x)$ with its proof by excising two small spheres, Theorem 2 (the formula for Poisson's equation, Eq. (7)), and the remark that existence can be shown and uniqueness is Exercise 1; §7.2, Eq. (7.2.1), p. 186 (the representation formula with the bare fundamental solution)"
    pages: "186-190"
    role: the definition by the three properties, the symmetry theorem and the excision route of its proof, and the statement that a Green's function exists
  - work: evans-2010
    loc: "§2.2.4, pp. 33-35: the corrector problem (26), the definition $G(x,y) = \\Phi(y-x) - \\phi^x(y)$, Theorem 12 (representation formula using Green's function, Eq. (30)) for $u \\in C^2(\\bar U)$ solving $-\\Delta u = f$ in $U$, $u = g$ on $\\partial U$, with $U$ bounded open and $\\partial U$ of class $C^1$, and Theorem 13 (symmetry) with its proof"
    pages: "33-35"
    role: the precise smoothness hypotheses, the corrector formulation of the construction, and the opposite sign convention recorded in the remark
  - work: arfken-2013
    loc: "§10.2, pp. 459-462: the four general properties of a Green's function in two and three dimensions, the symmetry $G(\\mathbf{r}_1,\\mathbf{r}_2) = G^*(\\mathbf{r}_2,\\mathbf{r}_1)$ derived from Hermiticity, the eigenfunction expansion, the fundamental Green's function $-1/(4\\pi|\\mathbf{r}_1-\\mathbf{r}_2|)$ obtained from Gauss's theorem, and the discussion of the sign ambiguity on p. 462"
    pages: "459-462"
    role: the symmetry argument from Hermiticity, the statement that a solution of the homogeneous equation may always be added to adapt the boundary conditions, and the explicit discussion of the sign convention
  - work: hassani-2013
    loc: "§22.1, Eq. (22.2), p. 666: the Dirichlet solution $u(x) = \\int_D G_D(x,y) f(y)\\, d^m y + \\int_{\\partial D} g(y_b)\\, \\partial G_D/\\partial n_y\\, da$ in $m$ dimensions, with the three special cases listed on p. 667"
    pages: "666-667"
    role: the same Dirichlet formula in $m$ dimensions and the reading of its two terms as the response to the source and to the boundary data
---

:::note[Sign and naming conventions]{provenance=original}
Books disagree about the sign of the Green's function of the Laplacian, and the disagreement is pure bookkeeping: a change of sign in $G$ is compensated by a change of sign in the integral that uses it. Throughout this unit we take

$$
\nabla^2 G(\mathbf{r}, \mathbf{r}_0) = \delta(\mathbf{r} - \mathbf{r}_0) ,
$$

which is the convention of Riley, Hobson and Bence, of Arfken, Weber and Harris, and of Hassani. In three dimensions $G$ is then **negative** near its pole, behaving like $-1/(4\pi|\mathbf{r}-\mathbf{r}_0|)$. Evans instead defines $G$ by $-\Delta G = \delta_x$, so his Green's function is the negative of ours; Strauss writes down the same function as ours but calls it "the Green's function for the operator $-\Delta$", because he thinks of the Dirichlet problem in the form $-\Delta u = $ source. Arfken comments explicitly that previous editions of that book used the other sign. The remark at the end of the unit lists the resulting differences in the formulas.
:::

:::definition[Fundamental solution, Dirichlet and Neumann Green's functions]{provenance=adapted src="rhb-2006:§21.5.2-21.5.4, Eqs. (21.82), (21.85) and p. 766; strauss-2008:§7.3, the three properties, p. 188; evans-2010:§2.2.4, the corrector problem (26) and the definition on p. 33"}
Let $V \subseteq \mathbb{R}^3$ be a bounded domain whose boundary $S = \partial V$ is of class $C^1$, with unit outward normal $\hat{\mathbf{n}}$ and total area $A = \oint_S dS$. Write

$$
F(\mathbf{r}, \mathbf{r}_0) = -\frac{1}{4\pi\lvert\mathbf{r}-\mathbf{r}_0\rvert}
$$

for the :ref[fundamental solution]{to=pde.laplace-fundamental-solution} of $\nabla^2$ in three dimensions, which satisfies $\nabla^2 F = \delta(\mathbf{r}-\mathbf{r}_0)$ and decays at infinity.

Fix $\mathbf{r}_0 \in V$. A function $G(\cdot\,, \mathbf{r}_0)$ defined on $\overline{V}\setminus\{\mathbf{r}_0\}$ is a **Green's function for $\nabla^2$ on $V$ with pole at $\mathbf{r}_0$** if

1. $G(\cdot\,,\mathbf{r}_0)$ is $C^2$ and harmonic on $V \setminus \{\mathbf{r}_0\}$; and
2. the **corrector** $H(\mathbf{r},\mathbf{r}_0) = G(\mathbf{r},\mathbf{r}_0) - F(\mathbf{r},\mathbf{r}_0)$ extends to a function of class $C^2(\overline{V})$ that is harmonic on all of $V$, including at $\mathbf{r}_0$.

Condition 2 says that $G$ has exactly the singularity of $F$ at its pole and nothing else; with it, $\nabla^2 G = \delta(\mathbf{r}-\mathbf{r}_0)$ holds in the sense of distributions. A Green's function is pinned down by a boundary condition, and two are standard:

- the **Dirichlet Green's function** $G_D$, required to satisfy $G_D(\mathbf{r},\mathbf{r}_0) = 0$ for $\mathbf{r} \in S$;
- the **Neumann Green's function** $G_N$, required to satisfy
  $$
  \frac{\partial G_N}{\partial n}(\mathbf{r},\mathbf{r}_0) = \frac{1}{A}
  \qquad\text{for } \mathbf{r} \in S .
  $$

Strauss states the Dirichlet case as three conditions: $G$ harmonic in $D$ except at $x_0$ and twice continuously differentiable there, $G = 0$ on the boundary, and $G(x) + 1/(4\pi\lvert x - x_0\rvert)$ finite at $x_0$, with continuous second derivatives everywhere and harmonic at $x_0$. Our conditions 1 and 2 are that third condition restated through the corrector, which is how Evans and Riley, Hobson and Bence organise it: Evans builds $G$ by solving $\Delta\phi^x = 0$ in $U$ with $\phi^x = \Phi(y-x)$ on $\partial U$ and then subtracting, and Riley, Hobson and Bence write $G = F + H$ with $H$ a solution of Laplace's equation in $V$ adjusted so that the sum vanishes on $S$.
:::

:::remark[Why the Neumann condition cannot be $\partial G/\partial n = 0$]{provenance=adapted src="rhb-2006:§21.5.4, the consistency condition and the choice $1/A$, p. 766"}
The obvious analogue of the Dirichlet condition would be $\partial G/\partial n = 0$ on $S$, and it is not available. Integrating $\nabla^2 G = \delta(\mathbf{r}-\mathbf{r}_0)$ over $V$ and converting the left side with the :ref[divergence theorem]{to=vcalc.divergence-theorem} gives

$$
\oint_S \frac{\partial G}{\partial n}\, dS = \int_V \nabla^2 G\; dV = 1 ,
$$

so the normal derivative of any Green's function has total flux $1$ through $S$ and cannot vanish identically. The cheapest way to meet the constraint is to spread the flux uniformly, $\partial G/\partial n = 1/A$; this is the choice Riley, Hobson and Bence call the Neumann Green's function, and the one used below.
:::

:::statement[Representation formula and the solution of Poisson's equation]{provenance=adapted src="rhb-2006:§21.5.2 Eq. (21.84) p. 756, §21.5.3 Eq. (21.86) p. 756, §21.5.4 Eq. (21.106) p. 766; strauss-2008:§7.3, Theorems 1 and 2, pp. 188-190; evans-2010:§2.2.4, Theorem 12, p. 34; hassani-2013:§22.1, Eq. (22.2), p. 666"}
Let $V$ be a bounded domain with $C^1$ boundary $S$, let $\rho$ be continuous on $\overline{V}$, and let $u \in C^2(\overline{V})$ solve

$$
\nabla^2 u = \rho \quad\text{in } V .
$$

Let $G(\cdot\,,\mathbf{r}_0)$ be any Green's function for $\nabla^2$ on $V$ with pole at $\mathbf{r}_0 \in V$, in the sense of the definition above. Then

$$
u(\mathbf{r}_0) \;=\; \int_V G(\mathbf{r},\mathbf{r}_0)\,\rho(\mathbf{r})\; dV(\mathbf{r})
\;+\; \oint_S \left[ u(\mathbf{r})\,\frac{\partial G(\mathbf{r},\mathbf{r}_0)}{\partial n} - G(\mathbf{r},\mathbf{r}_0)\,\frac{\partial u(\mathbf{r})}{\partial n} \right] dS(\mathbf{r}) ,
\tag{R}
$$

all derivatives and integrations being with respect to the first argument $\mathbf{r}$. Two specialisations remove the term that is not data:

1. **Dirichlet problem.** If $u = f$ on $S$ and $G = G_D$ vanishes on $S$, the second boundary term drops out and
   $$
   u(\mathbf{r}_0) = \int_V G_D(\mathbf{r},\mathbf{r}_0)\,\rho(\mathbf{r})\; dV + \oint_S f(\mathbf{r})\,\frac{\partial G_D(\mathbf{r},\mathbf{r}_0)}{\partial n}\; dS .
   \tag{D}
   $$
2. **Neumann problem.** If $\partial u/\partial n = f$ on $S$ and $G = G_N$ has $\partial G_N/\partial n = 1/A$ on $S$, the first boundary term becomes $A^{-1}\oint_S u\, dS = \langle u\rangle_S$, the average of $u$ over $S$, and
   $$
   u(\mathbf{r}_0) = \int_V G_N(\mathbf{r},\mathbf{r}_0)\,\rho(\mathbf{r})\; dV + \langle u\rangle_S - \oint_S G_N(\mathbf{r},\mathbf{r}_0)\, f(\mathbf{r})\; dS .
   \tag{N}
   $$
   Here $\langle u \rangle_S$ is not data: it is the one constant that Neumann data leave undetermined (:ref[]{to=vcalc.green-identities}), and may be assigned freely.

In (D) the solution has been expressed entirely through the data $\rho$ and $f$; the two terms are, in Hassani's reading, the response to the source inside and the response to the boundary values. Both reduce to $u(\mathbf{r}_0) = \int_V G\rho\, dV$ when the data on $S$ vanish, which is the elementary form of the Green's function method quoted by Riley, Hobson and Bence as Eq. (21.78).
:::

:::idea{provenance=original}
Everything comes from :ref[Green's second identity]{to=vcalc.green-identities}, which pairs two functions and trades their Laplacians inside the region against their boundary values and normal derivatives. Put $u$, the unknown, in one slot. In the other slot we are free to put whatever we like, and the whole art is in the choice.

Choosing the fundamental solution $F$ is the first step: $F$ is harmonic, so its Laplacian contributes nothing to the volume integral, except that its singularity at $\mathbf{r}_0$ is exactly strong enough to leave behind the single number $u(\mathbf{r}_0)$. (Technically we cut a small ball around the pole out of $V$, apply the identity on what is left, and watch the sphere of radius $\varepsilon$ contribute the spherical average of $u$, which tends to $u(\mathbf{r}_0)$.) That already yields a formula for $u(\mathbf{r}_0)$, but it involves both $u$ and $\partial u/\partial n$ on $S$, and in a boundary-value problem only one of them is known.

The second step repairs this. Adding to $F$ any function $H$ that is harmonic throughout $V$ changes nothing in the volume term, because Green's second identity applied to the pair $u, H$ has no singularity to produce; it only changes the boundary terms. So we may shop among correctors $H$ for the one that makes the unwanted boundary term vanish — $G = 0$ on $S$ kills the $\partial u/\partial n$ term, and $\partial G/\partial n$ constant converts the $u$ term into the harmless surface average. The Green's function is $F$ plus the corrector that the boundary condition selects.
:::

:::proof[Proof of (R), (D) and (N)]{provenance=adapted src="strauss-2008:§7.2, pp. 186-187 and §7.3, pp. 188-189; rhb-2006:§21.5.2, pp. 754-756; evans-2010:§2.2.4, pp. 33-34"}
Write $r = \lvert\mathbf{r}-\mathbf{r}_0\rvert$ and $F = F(\mathbf{r},\mathbf{r}_0) = -1/(4\pi r)$, and split $G = F + H$ with $H$ as in condition 2 of the definition.

**Step 1 (the corrector contributes only boundary terms).** $H(\cdot\,,\mathbf{r}_0)$ and $u$ both lie in $C^2(\overline{V})$ and $\nabla^2 H = 0$ in $V$, so Green's second identity applies to the pair on $V$ with no excision:

$$
\int_V \bigl( u\,\nabla^2 H - H\,\nabla^2 u \bigr)\, dV = \oint_S \left( u\,\frac{\partial H}{\partial n} - H\,\frac{\partial u}{\partial n}\right) dS .
$$

Since $\nabla^2 H = 0$ and $\nabla^2 u = \rho$, this reads

$$
- \int_V H\rho\; dV = \oint_S \left( u\,\frac{\partial H}{\partial n} - H\,\frac{\partial u}{\partial n}\right) dS .
\tag{1}
$$

**Step 2 (the fundamental solution, with the pole cut out).** Let $B_\varepsilon$ denote the open ball $\lvert\mathbf{r}-\mathbf{r}_0\rvert < \varepsilon$, with $\varepsilon$ small enough that its closure lies inside $V$, and excise it: $V_\varepsilon = V\setminus\overline{B_\varepsilon}$. On $V_\varepsilon$ the function $F$ is smooth and harmonic, so Green's second identity gives

$$
- \int_{V_\varepsilon} F\rho\; dV = \oint_S \left( u\,\frac{\partial F}{\partial n} - F\,\frac{\partial u}{\partial n}\right) dS
\;+\; \oint_{\partial B_\varepsilon} \left( u\,\frac{\partial F}{\partial n} - F\,\frac{\partial u}{\partial n}\right) dS ,
\tag{2}
$$

the boundary of $V_\varepsilon$ consisting of $S$ and the sphere $\partial B_\varepsilon$. The hypothesis $u\in C^2(\overline V)$ is used here and nowhere else: it is what lets the identity be applied at all and what makes $u$ and $\nabla u$ bounded near $\mathbf{r}_0$.

**Step 3 (the small sphere delivers $-u(\mathbf{r}_0)$).** On $\partial B_\varepsilon$ the outward normal of $V_\varepsilon$ points *towards* $\mathbf{r}_0$, so $\partial/\partial n = -\partial/\partial r$ there. With $F = -1/(4\pi r)$,

$$
F\big|_{r=\varepsilon} = -\frac{1}{4\pi\varepsilon},
\qquad
\frac{\partial F}{\partial n}\bigg|_{r=\varepsilon} = -\frac{\partial}{\partial r}\left(-\frac{1}{4\pi r}\right)\bigg|_{r=\varepsilon} = -\frac{1}{4\pi\varepsilon^2} .
$$

Both are constant on the sphere, whose area is $4\pi\varepsilon^2$, so

$$
\oint_{\partial B_\varepsilon}\left( u\,\frac{\partial F}{\partial n} - F\,\frac{\partial u}{\partial n}\right) dS
= -\frac{1}{4\pi\varepsilon^2}\oint_{\partial B_\varepsilon} u\, dS + \frac{1}{4\pi\varepsilon}\oint_{\partial B_\varepsilon}\frac{\partial u}{\partial n}\, dS
= -\overline{u}_\varepsilon + \varepsilon\,\overline{\left(\frac{\partial u}{\partial n}\right)}_{\!\varepsilon} ,
$$

where a bar denotes the average over $\partial B_\varepsilon$. As $\varepsilon \to 0$ the first term tends to $-u(\mathbf{r}_0)$, because $u$ is continuous at $\mathbf{r}_0$; the second tends to $0$, because $\lvert\nabla u\rvert$ is bounded near $\mathbf{r}_0$ and the prefactor is $\varepsilon$.

**Step 4 (the volume integral converges).** $\lvert F\rho\rvert \le C/r$ near $\mathbf{r}_0$ with $C = \max\lvert\rho\rvert/4\pi$, and $\int_{B_\delta} r^{-1} dV = 4\pi\int_0^\delta r\, dr = 2\pi\delta^2$ is finite, so $\int_{V_\varepsilon} F\rho\, dV \to \int_V F\rho\, dV$. Letting $\varepsilon\to0$ in (2) therefore gives

$$
u(\mathbf{r}_0) = \int_V F\rho\; dV + \oint_S \left( u\,\frac{\partial F}{\partial n} - F\,\frac{\partial u}{\partial n}\right) dS .
\tag{3}
$$

This is the representation formula with the bare fundamental solution (Strauss's Eq. (7.2.1), there written for a harmonic $u$).

**Step 5 (add the two).** Adding (1) to (3) and using $G = F + H$ in each of the three places where the pair $F, H$ occurs gives exactly (R).

**Step 6 (the two specialisations).** If $G = G_D$ vanishes at every point of $S$, the term $-\oint_S G_D\,\partial u/\partial n\, dS$ in (R) vanishes identically, whatever $\partial u/\partial n$ may be; substituting the Dirichlet datum $u = f$ in the surviving term gives (D). If instead $\partial G_N/\partial n = 1/A$ on $S$, then

$$
\oint_S u\,\frac{\partial G_N}{\partial n}\; dS = \frac{1}{A}\oint_S u\; dS = \langle u\rangle_S ,
$$

and substituting the Neumann datum $\partial u/\partial n = f$ in the other term gives (N). $\square$
:::

:::statement[Symmetry of the Dirichlet Green's function]{provenance=adapted src="strauss-2008:§7.3, Eq. (4) and its proof, pp. 189-190; evans-2010:§2.2.4, Theorem 13, pp. 34-35; arfken-2013:§10.2, Eqs. (10.34)-(10.36), p. 460"}
Let $V$ be a bounded domain with $C^1$ boundary and suppose a Dirichlet Green's function $G_D(\cdot\,,\mathbf{r}_0)$ exists for every $\mathbf{r}_0 \in V$. Then

$$
G_D(\mathbf{a},\mathbf{b}) = G_D(\mathbf{b},\mathbf{a})
\qquad\text{for all } \mathbf{a},\mathbf{b}\in V,\ \mathbf{a}\neq\mathbf{b} .
$$

In electrostatics $G_D(\mathbf{r},\mathbf{r}_0)$ is (up to the factor $-1/\varepsilon_0$) the potential inside a grounded conductor $S$ due to a unit point charge at $\mathbf{r}_0$, and the symmetry is the **principle of reciprocity**: a source at $\mathbf{a}$ produces at $\mathbf{b}$ what a source at $\mathbf{b}$ would produce at $\mathbf{a}$. Arfken, Weber and Harris obtain the same conclusion, in the form $G(\mathbf{r}_1,\mathbf{r}_2) = G^*(\mathbf{r}_2,\mathbf{r}_1)$, from the Hermiticity of the operator together with its boundary conditions, and note that it holds for any problem whose definition makes the operator Hermitian. For real $G$ the two statements agree.
:::

:::idea{provenance=original}
Green's second identity is antisymmetric in its two slots, so if we feed it two Green's functions with poles at $\mathbf{a}$ and $\mathbf{b}$, the left-hand side is the difference of two numbers and the right-hand side vanishes, because both functions are zero on $S$. The two numbers turn out to be $G_D(\mathbf{a},\mathbf{b})$ and $G_D(\mathbf{b},\mathbf{a})$. Formally: $\int_V(v\,\nabla^2 w - w\,\nabla^2 v)\,dV$ with $\nabla^2 v = \delta_{\mathbf{a}}$ and $\nabla^2 w = \delta_{\mathbf{b}}$ picks out $v(\mathbf{b}) - w(\mathbf{a})$, which must equal zero.

The work lies in making this legitimate: both functions are singular, so two balls have to be cut out, and the limit on each small sphere has to be computed. Each sphere reproduces the calculation of Step 3 of the previous proof, with the other Green's function playing the role that $u$ played there.
:::

:::proof{provenance=adapted src="strauss-2008:§7.3, pp. 189-190; evans-2010:§2.2.4, proof of Theorem 13, pp. 34-35"}
Fix distinct $\mathbf{a},\mathbf{b}\in V$ and write

$$
v(\mathbf{r}) = G_D(\mathbf{r},\mathbf{a}), \qquad w(\mathbf{r}) = G_D(\mathbf{r},\mathbf{b}) .
$$

Let $\varepsilon$ be small enough that the closed balls $\overline{B_\varepsilon(\mathbf{a})}$ and $\overline{B_\varepsilon(\mathbf{b})}$ are disjoint and contained in $V$, and put $V_\varepsilon = V\setminus\bigl(\overline{B_\varepsilon(\mathbf{a})}\cup \overline{B_\varepsilon(\mathbf{b})}\bigr)$.

**Step 1 (the identity on the punctured region).** On $V_\varepsilon$ both $v$ and $w$ are $C^2$ and harmonic, so Green's second identity has vanishing left-hand side:

$$
0 = \oint_{S}\left(v\,\frac{\partial w}{\partial n} - w\,\frac{\partial v}{\partial n}\right) dS
+ A_\varepsilon + B_\varepsilon ,
$$

where $A_\varepsilon$ and $B_\varepsilon$ are the same integrand over $\partial B_\varepsilon(\mathbf{a})$ and $\partial B_\varepsilon(\mathbf{b})$, with the normal of $V_\varepsilon$, which points into each small ball.

**Step 2 (the outer boundary drops out).** On $S$ both $v$ and $w$ vanish, by the Dirichlet condition. Each of the two products $v\,\partial w/\partial n$ and $w\,\partial v/\partial n$ therefore vanishes pointwise on $S$, and $A_\varepsilon + B_\varepsilon = 0$ for every admissible $\varepsilon$.

**Step 3 (the sphere about $\mathbf{a}$).** Near $\mathbf{a}$ write $v = F_{\mathbf{a}} + H_{\mathbf{a}}$ with $F_{\mathbf{a}}(\mathbf{r}) = -1/(4\pi\lvert\mathbf{r}-\mathbf{a}\rvert)$ and $H_{\mathbf{a}}$ of class $C^2$ near $\mathbf{a}$; $w$ is also $C^2$ near $\mathbf{a}$, since its only singularity is at $\mathbf{b}$. Of the four pieces of $A_\varepsilon$:

- $\oint v\,\partial w/\partial n\, dS$ is $O(\varepsilon^{-1})\cdot O(1)\cdot O(\varepsilon^{2}) = O(\varepsilon)$, because $\lvert v\rvert \le 1/(4\pi\varepsilon) + O(1)$ while $\partial w/\partial n$ is bounded and the area is $4\pi\varepsilon^2$;
- $-\oint w\,\partial H_{\mathbf{a}}/\partial n\, dS$ is $O(\varepsilon^{-1})\cdot O(1) \cdot O(\varepsilon^2) = O(\varepsilon)$ for the same reason, with the roles exchanged;
- $-\oint w\,\partial F_{\mathbf{a}}/\partial n\, dS$ is the surviving term. As in Step 3 of the previous proof, $\partial F_{\mathbf{a}}/\partial n = -1/(4\pi\varepsilon^2)$ on the sphere, so this equals $+\overline{w}_\varepsilon$, the average of $w$ over $\partial B_\varepsilon(\mathbf{a})$, which tends to $w(\mathbf{a})$ by continuity of $w$ at $\mathbf{a}$.

Hence $A_\varepsilon \to w(\mathbf{a}) = G_D(\mathbf{a},\mathbf{b})$.

**Step 4 (the sphere about $\mathbf{b}$).** The same count with $v$ and $w$ exchanged applies at $\mathbf{b}$, but the integrand $v\,\partial w/\partial n - w\,\partial v/\partial n$ is antisymmetric, so the surviving term is now $+\oint v\,\partial F_{\mathbf{b}}/\partial n\, dS \to -v(\mathbf{b}) = -G_D(\mathbf{b},\mathbf{a})$. Hence $B_\varepsilon \to -G_D(\mathbf{b},\mathbf{a})$.

**Step 5.** Letting $\varepsilon\to0$ in $A_\varepsilon + B_\varepsilon = 0$ gives $G_D(\mathbf{a},\mathbf{b}) - G_D(\mathbf{b},\mathbf{a}) = 0$. $\square$
:::

:::statement[Uniqueness of the Dirichlet Green's function]{provenance=adapted src="strauss-2008:§7.3, p. 188, where uniqueness is Exercise 1"}
For each $\mathbf{r}_0\in V$ there is at most one Dirichlet Green's function with pole at $\mathbf{r}_0$.
:::

:::proof{provenance=original}
Let $G_1, G_2$ be two of them and put $D = G_1 - G_2$. By condition 2 of the definition, $G_i = F + H_i$ with $H_i \in C^2(\overline{V})$ harmonic in $V$, so $D = H_1 - H_2$ is harmonic on the whole of $V$ — the singularities, both equal to $F$, have cancelled — and $D \in C^2(\overline{V})$. On $S$, $D = 0 - 0 = 0$. By the uniqueness theorem for the Dirichlet problem (:ref[]{to=vcalc.green-identities}, part 1, applied with $f = 0$ and $h = 0$), $D \equiv 0$. $\square$
:::

:::note[Existence]{provenance=adapted src="strauss-2008:§7.3, p. 188; evans-2010:§2.2.4, p. 34"}
That a Dirichlet Green's function exists for a bounded domain is asserted but not proved here; Strauss records that it "can be shown", and Evans points out that constructing $G$ amounts to solving the corrector problem $\Delta\phi^x = 0$ in $U$ with $\phi^x = \Phi(y-x)$ on $\partial U$, which is itself a Dirichlet problem and "in general a difficult matter", possible explicitly only for domains of simple geometry. The theorems above are therefore conditional on existence, and the next unit, :ref[the method of images]{to=green.method-of-images}, exhibits $G_D$ for the two geometries where the construction is elementary. For bounded domains the existence proof belongs to the general solvability theory of elliptic equations; see :ref[]{to=pde.lax-milgram}.
:::

:::remark[Where the hypotheses are used, and what the conventions cost]{provenance=original}
- *$u \in C^2(\overline{V})$.* Used in Step 2 of the first proof, to apply Green's second identity on $V_\varepsilon$, and in Step 3, where boundedness of $u$ and $\nabla u$ near $\mathbf{r}_0$ kills the second small-sphere term. Without continuity of $u$ up to $S$ the boundary integrals in (R) need not even be defined.
- *$\rho$ continuous (or merely bounded) on $\overline{V}$.* Used only in Step 4, to make $\int_V F\rho\, dV$ converge against the $1/r$ singularity of $F$. Boundedness is more than needed; $\rho$ integrable against $1/r$ suffices for that step.
- *Boundedness of $V$.* The formulas extend to unbounded domains, but only with an added condition at infinity. Strauss handles the half-space by demanding of every function in play that it, along with its derivatives, decay to $0$ at large $\lvert x\rvert$; Riley, Hobson and Bence treat an exterior region formally, taking $S$ to consist of the inner surface together with a sphere of radius $R$ and letting $R\to\infty$. The content of the condition is that the contribution of the sphere at infinity vanishes.
- *The Dirichlet condition in Step 2 of the symmetry proof.* It is used as $G_D = 0$ on $S$ for *both* poles. For the Neumann Green's function the same computation leaves the outer boundary term $A^{-1}\oint_S(v - w)\, dS$, so it gives instead
  $$
  G_N(\mathbf{a},\mathbf{b}) - G_N(\mathbf{b},\mathbf{a}) = \langle G_N(\cdot\,,\mathbf{b})\rangle_S - \langle G_N(\cdot\,,\mathbf{a})\rangle_S .
  $$
  For each pole, a Neumann Green's function is fixed only to within one added constant (adding a constant changes neither $\nabla^2 G$ nor $\partial G/\partial n$), so the normalisation $\langle G_N(\cdot\,,\mathbf{r}_0)\rangle_S = 0$ may be imposed for every $\mathbf{r}_0$, and with it $G_N$ is symmetric too. Without that normalisation it need not be.
- *The Neumann formula (N) does not depend on the normalisation.* Replacing $G_N(\mathbf{r},\mathbf{r}_0)$ by $G_N(\mathbf{r},\mathbf{r}_0) + c(\mathbf{r}_0)$ changes the right-hand side of (N) by $c(\mathbf{r}_0)\left[\int_V \rho\, dV - \oint_S f\, dS\right]$, which is zero by the compatibility condition that Neumann data must satisfy for a solution to exist (:ref[]{to=vcalc.green-identities}). So the ambiguity in $G_N$ is invisible in the answer — as it must be, since the answer is $u(\mathbf{r}_0)$.
- *Signs under the other convention.* With Evans's $G^{\mathrm E} = -G$, satisfying $-\Delta G^{\mathrm E} = \delta$, and his form $-\Delta u = f$ of the equation (so $f = -\rho$), formula (D) becomes $u(x) = -\oint g\,\partial G^{\mathrm E}/\partial\nu\, dS + \int f G^{\mathrm E}\, dy$, which is his Eq. (30): both terms flip sign twice and one overall sign remains in the boundary term. Strauss's Theorem 2 reads $u(x_0) = \oint h\, \partial G/\partial n\, dS + \int f G\, dx$ for $\Delta u = f$, which is our (D) with his $G$ equal to ours. The three statements are the same statement.
- *Dimension.* Nothing above is special to $\mathbb{R}^3$ except the explicit $F$. In $\mathbb{R}^2$ the fundamental solution is $F = (2\pi)^{-1}\ln\lvert\mathbf{r}-\mathbf{r}_0\rvert$ (plus an arbitrary constant, which here matters: Riley, Hobson and Bence note that in two dimensions one cannot impose $F\to0$ at infinity), and the small-circle computation of Step 3 produces $u(\mathbf{r}_0)$ in just the same way. Hassani states (D) for a general dimension $m$, and Evans works throughout in $\mathbb{R}^n$ with $\Phi$ the $n$-dimensional fundamental solution.
:::

:::note[Radial integrals used in the examples]{provenance=original}
On the ball $B_a$ of radius $a$ about the origin and its boundary sphere $S_a$, for a function of $r = \lvert\mathbf{r}\rvert$ alone,

$$
\int_{B_a} g(r)\, dV = 4\pi\int_0^a g(r)\, r^2\, dr ,
\qquad
\oint_{S_a} g(a)\, dS = 4\pi a^2 g(a) .
$$

In particular $\int_{B_a} r^{-1}\, dV = 4\pi\int_0^a r\, dr = 2\pi a^2$ and $\int_{B_a} dV = \tfrac{4}{3}\pi a^3$.
:::

:::example[The Green's functions of a ball with pole at the centre, and a test of (D)]{provenance=original}
Take $V = B_a$, the ball of radius $a$ about the origin, and put the pole at $\mathbf{r}_0 = \mathbf{0}$. Then $F = -1/(4\pi r)$ is already radial, and the corrector need only be a constant, so both Green's functions can be written down at once.

1. *Dirichlet.* Try $G_D(\mathbf{r},\mathbf{0}) = -\dfrac{1}{4\pi r} + c$. A constant is harmonic and $C^2$ on $\overline{B_a}$, so condition 2 holds; $G_D = 0$ at $r = a$ forces $c = 1/(4\pi a)$, giving
   $$
   G_D(\mathbf{r},\mathbf{0}) = \frac{1}{4\pi}\left(\frac{1}{a} - \frac{1}{r}\right),
   \qquad
   \frac{\partial G_D}{\partial n}\bigg|_{r=a} = \frac{\partial}{\partial r}\left(-\frac{1}{4\pi r}\right)\bigg|_{r=a} = \frac{1}{4\pi a^2} .
   $$
2. *Neumann.* For $G_N = -1/(4\pi r) + c$ the normal derivative at $r = a$ is the same $1/(4\pi a^2)$, which is precisely $1/A$ with $A = 4\pi a^2$. So the bare fundamental solution *is* a Neumann Green's function of the ball when the pole sits at the centre, for any $c$; take $c = 0$.

*Test of (D).* Let $u = r^2 = x^2+y^2+z^2$ on $\overline{B_a}$. It is a polynomial, hence in $C^2(\overline{B_a})$, with $\rho = \nabla^2 u = 6$ and boundary value $f = a^2$. Formula (D) should return $u(\mathbf{0}) = 0$.

- *Boundary term.* $\displaystyle \oint_{S_a} f\,\frac{\partial G_D}{\partial n}\, dS = a^2\cdot\frac{1}{4\pi a^2}\cdot 4\pi a^2 = a^2 .$
- *Volume term.* $\displaystyle \int_{B_a} G_D\,\rho\; dV = 6\cdot\frac{1}{4\pi}\left[\frac{1}{a}\int_{B_a} dV - \int_{B_a}\frac{dV}{r}\right] = \frac{6}{4\pi}\left[\frac{1}{a}\cdot\frac{4\pi a^3}{3} - 2\pi a^2\right] = \frac{6}{4\pi}\left[\frac{4\pi a^2}{3} - 2\pi a^2\right] = -a^2 .$
- *Sum.* $a^2 - a^2 = 0 = u(\mathbf{0})$, as required. Note that both terms are of size $a^2$ and cancel exactly; with $a = 2$ they are $+4$ and $-4$.

*Test of (N).* The same $u = r^2$ has $f = \partial u/\partial n = 2a$ on $S_a$ and $\langle u\rangle_{S_a} = a^2$. Formula (N) with $G_N = -1/(4\pi r)$ gives

$$
\underbrace{6\cdot\left(-\frac{1}{4\pi}\right)\int_{B_a}\frac{dV}{r}}_{=\;-3a^2}
\;+\;\underbrace{a^2}_{\langle u\rangle_S}
\;-\;\underbrace{\left(-\frac{1}{4\pi a}\right)(2a)\,4\pi a^2}_{=\;-2a^2}
\;=\; -3a^2 + a^2 + 2a^2 = 0 = u(\mathbf{0}) .
$$

The data pass the compatibility test, $\oint_{S_a} f\, dS = 2a\cdot4\pi a^2 = 8\pi a^3$ and $\int_{B_a}\rho\, dV = 6\cdot\tfrac43\pi a^3 = 8\pi a^3$, as they must for a solution to exist.
:::

:::example[Symmetry made explicit, and a non-zero value]{provenance=original}
Stay with the unit ball, $a = 1$. The Dirichlet Green's function with pole at a general interior point is derived in :ref[the next unit]{to=green.method-of-images}; for the pole at the centre we have $G_D(\mathbf{r},\mathbf{0}) = (4\pi)^{-1}(1 - 1/r)$ from the previous example, and the symmetry theorem then predicts

$$
G_D(\mathbf{0},\mathbf{b}) = G_D(\mathbf{b},\mathbf{0}) = \frac{1}{4\pi}\left(1 - \frac{1}{\lvert\mathbf{b}\rvert}\right) .
$$

So the potential at the centre of a grounded unit sphere due to a unit source at distance $\lvert\mathbf{b}\rvert = \tfrac12$ is $(4\pi)^{-1}(1-2) = -1/(4\pi) = -0.0795775$, and this equals the potential at distance $\tfrac12$ from the centre due to a unit source *at* the centre — which is immediate from the explicit formula. The content of the theorem is that the first of those two numbers, which would otherwise require the Green's function with an off-centre pole, is obtainable from the second.

For a case in which (D) returns a non-zero value, take $u = r^2 + 1$ on the unit ball: then $\rho = 6$, $f = 2$, and (D) gives $2\cdot\tfrac{1}{4\pi}\cdot 4\pi + (-1) = 2 - 1 = 1 = u(\mathbf{0})$.
:::

:::application{provenance=original}
**Electrostatics with conductors.** The reason the Green's function method is the standard tool of potential theory is that it separates the geometry from the data. The potential inside a grounded conducting surface $S$ obeys $\nabla^2\phi = -\rho_{\mathrm e}/\varepsilon_0$ with $\phi = 0$ on $S$, so by (D),

$$
\phi(\mathbf{r}_0) = -\frac{1}{\varepsilon_0}\int_V G_D(\mathbf{r},\mathbf{r}_0)\,\rho_{\mathrm e}(\mathbf{r})\; dV .
$$

One solves the geometry once, for $G_D$, and then any charge distribution inside is handled by an integration. If the conductor is instead held at a prescribed potential $f$ that varies over the surface, the boundary term of (D) supplies the rest. The reciprocity theorem $G_D(\mathbf{a},\mathbf{b}) = G_D(\mathbf{b},\mathbf{a})$ is used in reverse in measurement: a four-point resistivity probe gives the same reading when source and sense contacts are interchanged, and in capacitance and antenna work the same symmetry underlies the reciprocity of transmitting and receiving patterns.

**Steady heat flow and groundwater.** $\nabla^2 T = -q/k$ with $T$ prescribed on the boundary is the steady heat equation with volumetric heating $q$ and conductivity $k$; $G_D$ of the region is the temperature response to a point heater with the boundary held at zero, and (D) is the superposition of such responses. The Neumann form (N) is the one needed when it is the *flux* that is prescribed — an insulated or uniformly heated surface, or in hydrology a confined aquifer with prescribed recharge across its boundary — and the fact that only $\langle u \rangle_S$ is left free is the statement that steady flux data fix the temperature field but not its datum level.

**Lattice sums and image systems.** Because $G_D$ for a region and $F$ for free space differ by a harmonic corrector, the practical content of the theory is the search for correctors. For half-spaces, slabs, wedges of rational angle and spheres they are finite or infinite sets of image sources (:ref[]{to=green.method-of-images}); for a general region one falls back on an :ref[eigenfunction expansion]{to=green.eigenfunction-expansion-green} or on numerical solution, and in boundary-element codes the discretised form of (R) — unknowns on the surface only — is the whole method.

**Why the formula is more than a solution formula.** Arfken, Weber and Harris stress that a Green's function turns a differential operator into an integral operator, and integral operators are bounded while differential operators are not. That trade is what makes the Green's function the starting point for the perturbative treatment of the Helmholtz and Schrödinger equations (:ref[]{to=green.helmholtz-green-functions}, :ref[]{to=green.born-approximation}) and for the Fredholm theory of :ref[integral equations]{to=green.integral-equations}.
:::
