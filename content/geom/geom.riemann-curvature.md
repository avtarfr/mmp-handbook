---
id: geom.riemann-curvature
title: The Riemann curvature tensor
kind: definition
level: advanced
summary: Defines the Riemann tensor as the obstruction to interchanging two covariant derivatives, derives its coordinate formula and its algebraic symmetries, and builds the Ricci tensor and the scalar curvature from it.
prereqs: [geom.covariant-derivative, geom.metric-tensor, geom.tensors]
provenance: adapted
sources:
  - work: rhb-2006
    loc: "Ch. 26, Exercise 26.27 (second covariant derivatives and the components $R^{l}{}_{ijk}$), p. 981; Exercise 26.29 (Christoffel symbols of the first kind; $g_{ij;k}=0$), p. 982"
    pages: "981-982"
    role: the defining commutator relation, the coordinate formula for the components, the index and sign convention followed here, and the vanishing of the tensor in Euclidean space
  - work: arfken-2013
    loc: "Ch. 4, Exercise 4.1.5 (symmetries of the Riemann–Christoffel tensor $R_{iklm}$), p. 214"
    pages: "214"
    role: the list of symmetry relations and the count of independent components in four dimensions
  - work: stakgold-holst-2011
    loc: "Ch. 10, §10.4 (the Einstein constraint equations), pp. 727–728"
    pages: "727-728"
    role: curvature as the failure of covariant differentiation to commute; Ricci tensor, scalar curvature, Einstein tensor and the Einstein field equations; the opposite sign convention for the Riemann tensor
---

:::definition[The Riemann, Ricci and scalar curvatures]{provenance=adapted src="rhb-2006:Ch. 26, Exercise 26.27, p. 981; stakgold-holst-2011:§10.4, p. 728"}
Let $u^1,\dots,u^n$ be coordinates on a region carrying a metric $g_{ij}$, with inverse $g^{ij}$, and let

$$
\Gamma^{l}_{ik} \;=\; \tfrac12\, g^{lm}\Bigl(\frac{\partial g_{mi}}{\partial u^{k}} + \frac{\partial g_{mk}}{\partial u^{i}} - \frac{\partial g_{ik}}{\partial u^{m}}\Bigr)
$$

be the Christoffel symbols of :ref[the covariant derivative]{to=geom.covariant-derivative}; they are symmetric in $i$ and $k$. A semicolon denotes covariant differentiation, and repeated indices are summed. For a covector field $v_i$ we write $v_{i;jk} = (v_{i;j})_{;k}$, so the **outer** derivative carries the **last** index.

- The **Riemann curvature tensor** has components $R^{l}{}_{ijk}$ defined by the requirement that

  $$
  v_{i;jk} - v_{i;kj} \;=\; R^{l}{}_{ijk}\, v_{l}
  $$

  hold for every covector field $v$. Part 1 of the statement below shows that this determines $R^{l}{}_{ijk}$ and gives its formula in terms of the $\Gamma$'s.
- The **fully covariant form** is $R_{lijk} = g_{lm}R^{m}{}_{ijk}$.
- The **Ricci tensor** is the contraction $R_{ij} = R^{k}{}_{ikj}$, and the **scalar curvature** (or Ricci scalar) is $R = g^{ij}R_{ij}$. Both are obtained from the Riemann tensor by contracting indices.
- The region is **flat** if there are coordinates in which all the $g_{ij}$ are constants.

Stakgold and Holst place the outer derivative on the last index too, but define their curvature tensor by commuting a *vector* field rather than a covector; theirs is therefore the negative of the one defined here. The remark on conventions below records what that changes.
:::

:::statement[Coordinate formula, symmetries and flatness]{provenance=adapted src="rhb-2006:Exercise 26.27, p. 981; arfken-2013:Exercise 4.1.5, p. 214"}
With the notation of the definition, and with $\partial_j = \partial/\partial u^{j}$:

1. **Formula.** For every covector field, $v_{i;jk} - v_{i;kj} = R^{l}{}_{ijk}v_{l}$ with

   $$
   R^{l}{}_{ijk} \;=\; \partial_j \Gamma^{l}_{ik} - \partial_k \Gamma^{l}_{ij} + \Gamma^{m}_{ik}\Gamma^{l}_{mj} - \Gamma^{m}_{ij}\Gamma^{l}_{mk}.
   $$

   These $n^4$ functions are the components of a tensor of type $(1,3)$: one contravariant and three covariant indices.

2. **Symmetries.** Writing $R_{lijk} = g_{lm}R^{m}{}_{ijk}$,

   $$
   R_{lijk} = -R_{likj}, \qquad R_{lijk} = -R_{iljk}, \qquad R_{lijk} = R_{jkli},
   $$

   and the first Bianchi identity holds:

   $$
   R_{lijk} + R_{ljki} + R_{lkij} = 0 .
   $$

3. **Count.** In four dimensions the first two antisymmetries cut the number of independent components from $256$ to $36$, the pair symmetry $R_{lijk}=R_{jkli}$ cuts it to $21$, and the Bianchi identity cuts it to $20$.

4. **Ricci.** $R_{ij} = R_{ji}$, so the Ricci tensor is a symmetric covariant 2-tensor and $R = g^{ij}R_{ij}$ is a scalar.

5. **Flatness.** If the region is flat, then every component $R^{l}{}_{ijk}$ vanishes, and it vanishes in *every* coordinate system on the region, curvilinear ones included.
:::

:::idea{provenance=original}
Two ordinary partial derivatives commute. Two covariant derivatives do not, because each one subtracts a Christoffel correction that itself varies from point to point, and differentiating that correction leaves a residue. The residue is algebraic in $v$: all the terms in which $v$ is differentiated are symmetric in the two differentiation indices and cancel. What survives multiplies $v_l$, and the quotient rule then makes the coefficient a tensor. The symmetries are read off once the whole thing is written out in terms of $g$ and its first and second derivatives: the second-derivative part is a four-term combination whose index pattern displays all three symmetries at a glance, and the $\Gamma\Gamma$ part is handled by relabelling the summed indices.
:::

:::proof{provenance=adapted src="rhb-2006:Exercise 26.27, p. 981; rhb-2006:Exercise 26.29, p. 982; arfken-2013:Exercise 4.1.5 and its note, p. 214"}
**1. The formula, and the tensor character.**

The covariant derivative of a covector is $v_{i;j} = \partial_j v_i - \Gamma^{m}_{ij}v_m$, and $v_{i;j}$ is a covariant 2-tensor, so

$$
v_{i;jk} \;=\; \partial_k\bigl(v_{i;j}\bigr) - \Gamma^{m}_{ik}\,v_{m;j} - \Gamma^{m}_{jk}\,v_{i;m}.
$$

Subtract the same expression with $j$ and $k$ exchanged, and take the four kinds of term in turn.

- The last term, $\Gamma^{m}_{jk}v_{i;m}$, is unchanged by exchanging $j$ and $k$, *because the Christoffel symbols are symmetric in their two lower indices*. It cancels.
- Expanding $\partial_k(v_{i;j}) = \partial_k\partial_j v_i - (\partial_k\Gamma^{m}_{ij})v_m - \Gamma^{m}_{ij}\partial_k v_m$, the term $\partial_k\partial_j v_i$ cancels, since mixed partial derivatives of the smooth function $v_i$ commute.
- The two terms in which $v$ is differentiated once, namely $-\Gamma^{m}_{ij}\partial_k v_m$ from the expansion and $-\Gamma^{m}_{ik}\partial_j v_m$ from $-\Gamma^{m}_{ik}v_{m;j}$, together form an expression symmetric under $j \leftrightarrow k$. They cancel too.
- What is left is undifferentiated $v$:

  $$
  v_{i;jk} - v_{i;kj} = \bigl(-\partial_k\Gamma^{l}_{ij} + \Gamma^{m}_{ik}\Gamma^{l}_{mj}\bigr)v_l - \bigl(-\partial_j\Gamma^{l}_{ik} + \Gamma^{m}_{ij}\Gamma^{l}_{mk}\bigr)v_l,
  $$

  which is $R^{l}{}_{ijk}v_l$ with $R^{l}{}_{ijk}$ as stated.

The left-hand side is a covariant 3-tensor for each choice of $v$, and $v_l$ is an arbitrary covector. By :ref[the quotient rule]{to=geom.tensors}, the coefficients $R^{l}{}_{ijk}$ are the components of a tensor of type $(1,3)$.

**2. Symmetries.** Write $\Gamma_{lik} = g_{lm}\Gamma^{m}_{ik}$ for the Christoffel symbols with the first index lowered, so that

$$
\Gamma_{lik} = \tfrac12\bigl(\partial_i g_{lk} + \partial_k g_{li} - \partial_l g_{ik}\bigr), \qquad \Gamma_{lik} = \Gamma_{lki},
$$

and note the identity $\partial_j g_{lm} = \Gamma_{lmj} + \Gamma_{mlj}$, which is obtained by adding the two half-sums and is the content of the relation $g_{ij;k}=0$.

*Step 2a: lower the index.* Using $g_{lm}\partial_j\Gamma^{m}_{ik} = \partial_j\Gamma_{lik} - (\partial_j g_{lm})\Gamma^{m}_{ik}$ and the same for the $k$-derivative,

$$
R_{lijk} = \partial_j\Gamma_{lik} - \partial_k\Gamma_{lij} - (\partial_j g_{lm})\Gamma^{m}_{ik} + (\partial_k g_{lm})\Gamma^{m}_{ij} + \Gamma^{m}_{ik}\Gamma_{lmj} - \Gamma^{m}_{ij}\Gamma_{lmk}.
$$

Substituting $\partial_j g_{lm} = \Gamma_{lmj}+\Gamma_{mlj}$ kills the terms $\Gamma^{m}_{ik}\Gamma_{lmj}$ and $\Gamma^{m}_{ij}\Gamma_{lmk}$, leaving

$$
R_{lijk} = \partial_j\Gamma_{lik} - \partial_k\Gamma_{lij} - \Gamma^{m}_{ik}\Gamma_{mlj} + \Gamma^{m}_{ij}\Gamma_{mlk}.
$$

*Step 2b: separate second from first derivatives.* Inserting the half-sums for $\Gamma_{lik}$ and $\Gamma_{lij}$, four of the six second-derivative terms survive, and writing $\Gamma^{m}_{ik}\Gamma_{mlj} = g^{mp}\Gamma_{pik}\Gamma_{mlj}$ gives

$$
R_{lijk} \;=\; \tfrac12\bigl(\partial_i\partial_j g_{lk} + \partial_k\partial_l g_{ij} - \partial_j\partial_l g_{ik} - \partial_i\partial_k g_{lj}\bigr) \;+\; g^{mp}\bigl(\Gamma_{pij}\Gamma_{mlk} - \Gamma_{pik}\Gamma_{mlj}\bigr). \tag{$\ast$}
$$

*Step 2c: read off the three symmetries.* In $(\ast)$ the second-derivative bracket has one term for each of the four pairings, with a plus sign when the pair $\{l,k\}$ or $\{i,j\}$ sits on $g$ and a minus sign otherwise.

- Exchanging $j$ and $k$ sends the bracket to its negative (the first and fourth terms swap with sign change, as do the second and third), and in the quadratic part the two products swap; so $R_{lijk} = -R_{likj}$. The same conclusion is immediate from the original formula, where $j$ and $k$ enter antisymmetrically.
- Exchanging $l$ and $i$ sends the bracket to its negative in the same way; in the quadratic part it gives $g^{mp}(\Gamma_{plj}\Gamma_{mik} - \Gamma_{plk}\Gamma_{mij})$, which becomes the negative of the original after renaming the summed indices $m \leftrightarrow p$. Hence $R_{lijk} = -R_{iljk}$.
- Replacing $(l,i,j,k)$ by $(j,k,l,i)$ leaves the bracket term for term unchanged; in the quadratic part it gives $g^{mp}(\Gamma_{pkl}\Gamma_{mji} - \Gamma_{pki}\Gamma_{mjl})$, which equals the original once the symmetry $\Gamma_{lik}=\Gamma_{lki}$ is used and $m\leftrightarrow p$ renamed in the first product. Hence $R_{lijk} = R_{jkli}$.
- For the Bianchi identity, add $(\ast)$ for $(l,i,j,k)$, $(l,j,k,i)$ and $(l,k,i,j)$. In the second-derivative part the twelve terms cancel in six pairs, for instance $+\tfrac12\partial_i\partial_j g_{lk}$ from the first against $-\tfrac12\partial_j\partial_i g_{lk}$ from the second. In the quadratic part the six products cancel in three pairs, using only $\Gamma_{pij}=\Gamma_{pji}$. The sum is zero.

**3. Count in four dimensions.** By the first two antisymmetries, $R_{lijk}$ is determined by its values on an antisymmetric pair $A=(l,i)$ and an antisymmetric pair $B=(j,k)$. With $n=4$ each pair takes $\binom{4}{2}=6$ independent values, so $36$ components remain out of $4^4=256$. The pair symmetry says the $6\times 6$ array indexed by $(A,B)$ is symmetric, leaving $6\cdot 7/2 = 21$. Finally the Bianchi identity adds information only when all four indices are different, which in four dimensions happens for a single set of values, so one further condition remains and $20$ components are independent.

**4. Ricci.** Lowering the contracted index, $R_{ij} = R^{k}{}_{ikj} = g^{kl}R_{likj}$ and likewise $R_{ji} = g^{kl}R_{ljki}$. Apply the pair symmetry to the second: $R_{ljki} = R_{kilj}$. Now rename the two summed indices, $k \leftrightarrow l$, and use $g^{kl}=g^{lk}$:

$$
R_{ji} = g^{kl}R_{kilj} = g^{lk}R_{likj} = g^{kl}R_{likj} = R_{ij}.
$$

Hence the Ricci tensor is symmetric, and $R = g^{ij}R_{ij}$ is a full contraction of tensors, so a scalar.

**5. Flatness.** In coordinates where the $g_{ij}$ are constants all their derivatives vanish, so every $\Gamma^{l}_{ik}$ is zero and the formula of part 1 gives $R^{l}{}_{ijk}=0$ throughout. By part 1 these are the components of a tensor, and a tensor whose components vanish in one coordinate system has vanishing components in every coordinate system, because the transformation law is linear and homogeneous in them. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=original}
- *Symmetry of the Christoffel symbols in their lower indices* is used twice: to cancel the term $\Gamma^{m}_{jk}v_{i;m}$ in part 1, and in the Bianchi identity in part 2. A connection with torsion fails both: the commutator then acquires an extra term proportional to the first derivative of $v$, and the cyclic sum of curvatures is no longer zero.
- *Metric compatibility*, in the form $\partial_j g_{lm} = \Gamma_{lmj}+\Gamma_{mlj}$, is what produces the clean expression $(\ast)$ and hence the two symmetries $R_{lijk}=-R_{iljk}$ and $R_{lijk}=R_{jkli}$. For a general connection only the antisymmetry in the last two indices and the Bianchi identity survive; there is then no reason for the first two indices to be antisymmetric, and no reason for the Ricci tensor to be symmetric.
- *Smoothness of $v$ to second order* is what lets $\partial_k\partial_j v_i$ cancel; the metric must be of class $C^2$ for $(\ast)$ to make sense pointwise.
- *Flatness in part 5 is a hypothesis about the existence of special coordinates, not about the components in the coordinates at hand.* Euclidean $\mathbb{R}^3$ in spherical polars has six nonzero Christoffel symbols and a non-constant metric, yet $R^{l}{}_{ijk}\equiv 0$; see the second example. The converse — that $R\equiv 0$ forces constant-coefficient coordinates to exist locally — is also true, but it is proved by constructing a frame that is parallel in every direction, whose integrability condition is precisely the vanishing of the curvature; that argument is not given here.
:::

:::remark[Conventions, and the general count]{provenance=adapted src="stakgold-holst-2011:§10.4, p. 728; arfken-2013:Exercise 4.1.5, p. 214"}
*The other sign convention.* Stakgold and Holst write the commutator for a **vector** field,

$$
V^{a}{}_{;bc} - V^{a}{}_{;cb} = R^{a}{}_{dbc}V^{d}, \qquad R^{a}{}_{dbc} = \Gamma^{a}_{bd,c} - \Gamma^{a}_{cd,b} + \Gamma^{a}_{ec}\Gamma^{e}_{bd} - \Gamma^{a}_{eb}\Gamma^{e}_{cd},
$$

with a comma for partial differentiation. Their semicolon convention is the same as ours: $V^{a}{}_{;bc}$ means $(V^{a}{}_{;b})_{;c}$, so in both conventions the outer derivative carries the last index, and their indices $(a,d,b,c)$ sit in the slots of our $(l,i,j,k)$. Nothing is transposed; what differs is the field being commuted. The two commutators have opposite signs, because the second covariant derivatives of the *scalar* $\omega_a V^{a}$ do commute: expanding $(\omega_aV^{a})_{;bc}-(\omega_aV^{a})_{;cb}=0$ and cancelling the cross terms leaves

$$
\bigl(\omega_{a;bc}-\omega_{a;cb}\bigr)V^{a} \;=\; -\,\omega_{a}\bigl(V^{a}{}_{;bc}-V^{a}{}_{;cb}\bigr),
$$

so a covector picks up the curvature with the sign reversed. Hence their $R^{a}{}_{dbc}$ is the negative of the tensor $R^{l}{}_{ijk}$ defined here — equivalently, it is ours with the last two indices transposed. The sign propagates to every contraction: with the same contraction patterns their Ricci tensor $R_{ab}$, their scalar curvature $R$ and their Einstein tensor $G_{ab}=R_{ab}-\tfrac12Rg_{ab}$ are likewise the negatives of ours, so any formula taken from one convention into the other must be checked for this sign, not only formulas in the Riemann tensor itself. (The field equations quoted in the application below are written with the Ricci tensor and scalar curvature of *this* unit.) A reliable test is that the unit sphere should come out with positive scalar curvature, as it does below. Arfken's symmetry relations, written for $R_{iklm}$, match ours after the renaming $(i,k,l,m)\mapsto(l,i,j,k)$, and are insensitive to the sign.

*The count in $n$ dimensions.* Repeating the argument of part 3 with $N = \binom{n}{2} = n(n-1)/2$ independent antisymmetric pairs gives $N(N+1)/2$ components after the pair symmetry, and the Bianchi identity removes one for each set of four distinct index values, that is $\binom{n}{4}$ of them. The difference simplifies to

$$
\frac{N(N+1)}{2} - \binom{n}{4} \;=\; \frac{n^{2}(n^{2}-1)}{12},
$$

which is $1$ for $n=2$, $6$ for $n=3$, $20$ for $n=4$ and $50$ for $n=5$. In two dimensions the single component is $R_{1212}$, so all of the curvature of a surface is carried by one number at each point — this is the tensor counterpart of :ref[Gauss's theorema egregium]{to=geom.theorema-egregium}.
:::

:::method[Computing the curvature of a given metric]{provenance=original}
1. Write down $g_{ij}$ in the chosen coordinates and invert it to get $g^{ij}$. For a diagonal metric this is just reciprocals.
2. Compute the Christoffel symbols $\Gamma^{l}_{ik} = \tfrac12 g^{lm}(\partial_i g_{mk} + \partial_k g_{mi} - \partial_m g_{ik})$, using $\Gamma^{l}_{ik}=\Gamma^{l}_{ki}$ to halve the work.
3. Compute $R^{l}{}_{ijk} = \partial_j\Gamma^{l}_{ik} - \partial_k\Gamma^{l}_{ij} + \Gamma^{m}_{ik}\Gamma^{l}_{mj} - \Gamma^{m}_{ij}\Gamma^{l}_{mk}$, but only for $j<k$ and, after lowering, only for pairs $(l,i)$ with $l<i$ and $(j,k)$ with $j<k$ and $(l,i)$ not later than $(j,k)$. The symmetries supply the rest.
4. Contract: $R_{ij} = R^{k}{}_{ikj}$, then $R = g^{ij}R_{ij}$.
5. Check. Verify $R_{lijk}=-R_{likj}$ and $R_{lijk}=R_{jkli}$ on one nonzero component; in two dimensions verify $R = 2R_{1212}/\det(g_{ij})$, and compare $R/2$ with the Gaussian curvature from :ref[the second fundamental form]{to=geom.surface-curvature} when the surface is given in $\mathbb{R}^3$.
:::

:::example[The sphere of radius $a$]{provenance=original}
Take the surface coordinates $u^1=\theta$, $u^2=\varphi$ on a sphere of radius $a$, with

$$
g_{11} = a^2, \qquad g_{22} = a^2\sin^2\theta, \qquad g_{12}=g_{21}=0,
$$

so $g^{11} = a^{-2}$ and $g^{22} = a^{-2}\sin^{-2}\theta$.

*Christoffel symbols.* The only non-constant metric component is $g_{22}$, with $\partial_1 g_{22} = 2a^2\sin\theta\cos\theta$. Step 2 of the method gives

$$
\Gamma^{1}_{22} = \tfrac12 g^{11}\bigl(-\partial_1 g_{22}\bigr) = -\sin\theta\cos\theta, \qquad \Gamma^{2}_{12} = \Gamma^{2}_{21} = \tfrac12 g^{22}\,\partial_1 g_{22} = \cot\theta,
$$

and all the others vanish.

*Curvature.* In two dimensions there is one independent component. Take $l=1$, $i=2$, $j=1$, $k=2$:

$$
R^{1}{}_{212} = \partial_1\Gamma^{1}_{22} - \partial_2\Gamma^{1}_{21} + \Gamma^{m}_{22}\Gamma^{1}_{m1} - \Gamma^{m}_{21}\Gamma^{1}_{m2}.
$$

Here $\partial_1\Gamma^{1}_{22} = -\cos 2\theta$; the second term vanishes because $\Gamma^{1}_{21}=0$; the third vanishes because $\Gamma^{1}_{11}=\Gamma^{1}_{21}=0$; and the fourth is $-\Gamma^{2}_{21}\Gamma^{1}_{22} = \cot\theta\,\sin\theta\cos\theta = \cos^2\theta$. So

$$
R^{1}{}_{212} = \cos^2\theta - \cos 2\theta = \cos^{2}\theta - (2\cos^{2}\theta - 1) = \sin^{2}\theta, \qquad R_{1212} = g_{11}R^{1}{}_{212} = a^{2}\sin^{2}\theta .
$$

*Ricci and scalar.* $R_{11} = R^{k}{}_{1k1} = R^{2}{}_{121}$. Lowering and applying the two antisymmetries, $g_{22}R^{2}{}_{121} = R_{2121} = -R_{1221} = R_{1212} = a^2\sin^2\theta$, so $R_{11} = a^2\sin^2\theta/g_{22} = 1$. Similarly $R_{22} = R^{1}{}_{212} = \sin^{2}\theta$. Hence

$$
R_{ij} = \frac{1}{a^{2}}\,g_{ij}, \qquad R = g^{ij}R_{ij} = \frac{1}{a^{2}}\,g^{ij}g_{ij} = \frac{2}{a^{2}} .
$$

*Checks.* The metric is positive definite with $\det(g_{ij}) = a^4\sin^2\theta$, and $2R_{1212}/\det(g_{ij}) = 2a^2\sin^2\theta/(a^4\sin^2\theta) = 2/a^2 = R$, as step 5 requires. Half the scalar curvature is $1/a^2$, the Gaussian curvature of a sphere of radius $a$. **For $a=3$ the scalar curvature is $R = 2/9 \approx 0.2222$**, positive and the same at every point, as it must be for a surface no isometry of which distinguishes one point from another.
:::

:::example[Flat space in curvilinear coordinates]{provenance=original}
In spherical polars $(r,\theta,\varphi)$ on $\mathbb{R}^3$ the Euclidean metric is $g = \operatorname{diag}(1,\,r^2,\,r^2\sin^2\theta)$, which is anything but constant. Step 2 gives six nonvanishing Christoffel symbols,

$$
\Gamma^{r}_{\theta\theta} = -r,\quad \Gamma^{r}_{\varphi\varphi} = -r\sin^{2}\theta,\quad \Gamma^{\theta}_{r\theta} = \frac1r,\quad \Gamma^{\theta}_{\varphi\varphi} = -\sin\theta\cos\theta,\quad \Gamma^{\varphi}_{r\varphi} = \frac1r,\quad \Gamma^{\varphi}_{\theta\varphi} = \cot\theta,
$$

together with those obtained by swapping the two lower indices. Take the component $R^{r}{}_{\theta r\theta}$:

$$
R^{r}{}_{\theta r\theta} = \partial_r\Gamma^{r}_{\theta\theta} - \partial_\theta\Gamma^{r}_{\theta r} + \Gamma^{m}_{\theta\theta}\Gamma^{r}_{mr} - \Gamma^{m}_{\theta r}\Gamma^{r}_{m\theta} = (-1) - 0 + 0 - \Gamma^{\theta}_{\theta r}\Gamma^{r}_{\theta\theta} = -1 - \frac1r(-r) = 0 .
$$

The third term vanishes because $\Gamma^{r}_{mr}=0$ for every $m$. Repeating this for the other five independent components $(n=3$ gives six$)$ returns zero every time, so **every component of the Riemann tensor is $0$**. This had to happen: Cartesian coordinates make the metric the constant matrix $\delta_{ij}$, so part 5 applies. It is the reason one may freely exchange the order of two covariant derivatives in vector calculus in curvilinear coordinates, as :ref[the differential operators in general coordinates]{to=geom.tensor-operators-general-coordinates} tacitly do.
:::

:::application{provenance=adapted src="stakgold-holst-2011:§10.4, eq. (10.4.48), pp. 727–728"}
General relativity replaces the Newtonian gravitational field by the curvature of a four-dimensional spacetime whose metric $g_{ab}$ has Lorentzian signature, so that the curvature computed above *is* the gravitational field. The field equations are

$$
G_{ab} = \kappa\, T_{ab}, \qquad G_{ab} = R_{ab} - \tfrac12 R\, g_{ab}, \qquad \kappa = \frac{8\pi G}{c^{4}},
$$

where $T_{ab}$ is the stress–energy tensor of the matter and radiation. These are ten equations for the ten independent components of the symmetric tensor $g_{ab}$. The Einstein tensor $G_{ab}$ is built only from the Ricci tensor and the scalar curvature, so the field equations constrain just the traces of the Riemann tensor; in four dimensions that is $10$ of the $20$ independent components, and the remaining $10$ — the Weyl part — propagate freely. That is why gravitational waves can travel through empty space, where $T_{ab}=0$, and be detected by interferometers such as LIGO, which measure the change in the relative lengths of two perpendicular arms as a ripple in $g_{ab}$ passes. Stakgold and Holst use the Einstein equations as a source of hard nonlinear elliptic problems: splitting off the time direction turns four of the ten equations into constraints on the initial data, and those constraints are solved numerically for the simulations against which detected waveforms are matched.
:::
