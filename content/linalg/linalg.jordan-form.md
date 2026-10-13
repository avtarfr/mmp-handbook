---
id: linalg.jordan-form
title: Jordan normal form
kind: theorem
level: advanced
summary: Every square matrix whose eigenvalues lie in the ground field is similar to a block diagonal matrix of Jordan blocks, unique up to the order of the blocks; the block sizes are read off the nullities of the powers of $A - \lambda I$, and the form turns powers and power series of a defective matrix into polynomial-times-exponential formulas.
prereqs: [linalg.eigenvalues-eigenvectors, linalg.vector-spaces-bases, linalg.linear-maps-matrices, linalg.determinants]
provenance: adapted
sources:
  - work: dummit-foote-2004
    loc: "§12.3, the definition of the elementary Jordan matrix and of Jordan canonical form, p. 492; Thm 22 and Thm 23 (existence and uniqueness up to a permutation of the blocks), p. 493; Cor 24, p. 493; Cor 25 (diagonalizable iff the minimal polynomial has no repeated roots), p. 494"
    pages: "492-494"
    role: the definitions of Jordan block and Jordan canonical form; the hypothesis that the field contains all the eigenvalues; the existence and uniqueness statement; the minimal-polynomial criterion for diagonalizability
  - work: hirsch-smale-devaney-2013
    loc: "§5.5, the Proposition on p. 94 (real canonical form, with the 2 x 2 blocks C_2 and the identity blocks I_2), the Proposition and proof on pp. 95-96 (the 3 x 3 case) and the worked matrices on pp. 96-99; §5.6, genericity, p. 100"
    pages: "94-100"
    role: the real canonical form of a real matrix with complex eigenvalues; the practical device of building a chain by back-solving (A - lambda I)V_{j+1} = V_j; the observation that repeated eigenvalues are untypical
  - work: hassani-2013
    loc: "§17.7, the Jordan canonical form displayed after Eq. (17.12), p. 539"
    pages: "539"
    role: the shape of the form as a physicist's text states it, with the nilpotent part of the spectral decomposition as its origin
  - work: grimmett-stirzaker-2020
    loc: "§6.6, the Perron-Frobenius theorem (1), p. 269; the paragraph on the 'Jordan canonical form' P = B^{-1}MB and the bound |p_ij(n) - pi_j| <= c mu^n, p. 270"
    pages: "269-270"
    role: the application to the n-step transition matrix of a finite Markov chain with repeated eigenvalues
  - work: lee-2013
    loc: "Appendix D, 'Simple Solution Techniques', the 2 x 2 constant-coefficient system with a single eigenvalue and its generalized eigenvector, pp. 673-674"
    pages: "673-674"
    role: the generalized eigenvector of a defective 2 x 2 system and the solution e^{lambda t}(t Z_0 + Z_1)
---

:::definition[Jordan block]{provenance=adapted src="dummit-foote-2004:§12.3, the definition on p. 492"}
For $\lambda$ in a field $F$ and an integer $m \ge 1$, the **Jordan block** $J_m(\lambda)$ is the $m \times m$ matrix carrying $\lambda$ in every diagonal position, $1$ in every position of the first superdiagonal, and $0$ everywhere else:

$$
J_m(\lambda) =
\begin{pmatrix}
\lambda & 1 & & \\
 & \lambda & \ddots & \\
 & & \ddots & 1 \\
 & & & \lambda
\end{pmatrix}
= \lambda I_m + N_m , \qquad
(N_m)_{pq} = \begin{cases} 1, & q = p+1, \\ 0, & \text{otherwise.}\end{cases}
$$

:cite[Dummit and Foote]{work=dummit-foote-2004 loc="p. 492"} call this the elementary Jordan matrix with eigenvalue $\lambda$. A matrix is **in Jordan canonical form** when it is block diagonal with Jordan blocks as its diagonal blocks. The nilpotent part $N_m$ shifts the standard basis down one step, $N_m e_1 = 0$ and $N_m e_{t} = e_{t-1}$ for $t \ge 2$, so $N_m^m = 0$ while $N_m^{m-1} \neq 0$.

The block $J_m(\lambda)$ is upper triangular, so its characteristic polynomial is $(x - \lambda)^m$: the eigenvalue $\lambda$ has algebraic multiplicity $m$. Its eigenspace, however, is the line spanned by $e_1$, because $(J_m(\lambda) - \lambda I)x = 0$ reads $x_{t} = 0$ for $t \ge 2$. So a single block of size $m \ge 2$ is defective in the sense of :ref[the eigenvalue problem]{to=linalg.eigenvalues-eigenvectors}, with geometric multiplicity $1$ against algebraic multiplicity $m$.
:::

:::definition[Generalized eigenvectors, generalized eigenspaces and Jordan chains]{provenance=original}
Let $A$ be $n \times n$ over $F$ and $\lambda \in F$. A vector $x \neq 0$ is a **generalized eigenvector** of $A$ for $\lambda$ if

$$
(A - \lambda I)^{j} x = 0 \quad \text{for some } j \ge 1 ,
$$

and the smallest such $j$ is its **rank**. Rank $1$ means an ordinary eigenvector. The **generalized eigenspace** is

$$
G_\lambda = \ker (A - \lambda I)^{n} ,
$$

which contains every generalized eigenvector for $\lambda$, because the kernels of the powers stop growing after at most $n$ steps (step 1 of the proof below). Write

$$
d_j(\lambda) = \dim \ker (A - \lambda I)^{j} = n - \operatorname{rank}(A - \lambda I)^{j} , \qquad d_0(\lambda) = 0 ,
$$

so that $d_1(\lambda)$ is the geometric multiplicity of $\lambda$ and $d_n(\lambda) = \dim G_\lambda$.

A **Jordan chain** of length $s$ for $\lambda$ is a list $x_1, \dots, x_s$ of non-zero vectors with

$$
(A - \lambda I)x_1 = 0, \qquad (A - \lambda I)x_{t} = x_{t-1} \quad (2 \le t \le s) ,
$$

that is, $x_t = (A - \lambda I)^{s-t}x_s$ with $x_t$ of rank $t$. Written as the columns of a matrix in this order, a chain is exactly a basis on which $A$ acts as $J_s(\lambda)$: $Ax_1 = \lambda x_1$ and $Ax_t = \lambda x_t + x_{t-1}$.

Finally, some non-zero polynomial does annihilate $A$: the $n^2 + 1$ matrices $I, A, A^2, \dots, A^{n^2}$ cannot be independent in the $n^2$-dimensional space of $n \times n$ matrices, so a non-trivial linear relation among them exhibits a non-zero polynomial $q$ of degree at most $n^2$ with $q(A) = 0$, and dividing by its leading coefficient makes it monic. The **minimal polynomial** $\mu_A$ of $A$ is therefore well defined as the monic polynomial of least degree with $\mu_A(A) = 0$. It divides every polynomial that annihilates $A$, since dividing such a polynomial by $\mu_A$ leaves a remainder of lower degree that also annihilates $A$, which forces the remainder to be $0$.
:::

:::statement[Jordan normal form]{provenance=adapted src="dummit-foote-2004:§12.3, Thm 23 and Cor 24, p. 493"}
Let $A$ be an $n \times n$ matrix over a field $F$, and suppose **every eigenvalue of $A$ already lies in $F$**: the characteristic polynomial is a product of linear factors there. (Over $\mathbb{C}$ this costs nothing.) Then:

1. **Existence.** Some invertible matrix $P$ with entries in $F$ puts $A$ into Jordan canonical form by similarity:
$$
P^{-1} A P = J = \operatorname{diag}\bigl(J_{s_1}(\nu_1),\ J_{s_2}(\nu_2),\ \dots,\ J_{s_b}(\nu_b)\bigr), \qquad s_1 + \cdots + s_b = n ,
$$
each $\nu_i$ an eigenvalue of $A$, the same eigenvalue permitted in several blocks. The columns of $P$ are $b$ Jordan chains laid end to end.
2. **Uniqueness.** $J$ is determined by $A$ up to the order of its blocks.
3. Should a diagonal matrix $D$ happen to be similar to $A$, then $D$ is itself the Jordan form, since diagonal entries are $1 \times 1$ blocks and part 2 leaves no second answer :cite[]{work=dummit-foote-2004 loc="Cor 24, p. 493"}. So nothing is lost by always asking for the Jordan form rather than for a diagonalization.
:::

:::statement[The block structure is read off the nullities]{provenance=original}
With $d_j(\lambda)$ as above, in the Jordan form of $A$:

1. the number of blocks carrying the eigenvalue $\lambda$ is $d_1(\lambda)$, the geometric multiplicity of $\lambda$;
2. the number of those blocks of size **at least** $j$ is $d_j(\lambda) - d_{j-1}(\lambda)$, and the number of size exactly $j$ is $2d_j(\lambda) - d_{j-1}(\lambda) - d_{j+1}(\lambda)$;
3. the total of their sizes is $\dim G_\lambda$, which equals the algebraic multiplicity of $\lambda$;
4. the largest of their sizes is the multiplicity of $\lambda$ as a root of the minimal polynomial $\mu_A$; consequently $\mu_A(x) = \prod_\lambda (x - \lambda)^{s(\lambda)}$ with $s(\lambda)$ that largest size.

In particular $A$ is diagonalizable exactly when every block has size $1$, which by 4 happens exactly when $\mu_A$ has no repeated root :cite[]{work=dummit-foote-2004 loc="Cor 25, p. 494"}, and by 1 and 3 exactly when $d_1(\lambda)$ equals the algebraic multiplicity for every $\lambda$.
:::

:::idea{provenance=original}
Two independent mechanisms are at work, and the proof separates them.

The first is that different eigenvalues do not interfere. If $T = A - \lambda I$, then the kernels of $T, T^2, T^3, \dots$ grow and must stall, and at the moment they stall the space splits as $\ker T^n \oplus \operatorname{im}T^n$ into a part where $T$ is nilpotent and a part where $T$ is invertible. Peeling off one eigenvalue at a time this way decomposes $F^n$ into the generalized eigenspaces $G_\lambda$, on each of which $A$ is $\lambda I$ plus a nilpotent matrix.

The second is a statement about one nilpotent matrix $N$: its domain has a basis made of chains $N^{s-1}u, \dots, Nu, u$. This is proved by induction on the dimension, applying the result to the smaller space $N(V)$ and then *lengthening* every chain found there by one step — possible precisely because the chains in $N(V)$ start from vectors that are themselves images.

Uniqueness needs no new idea: the numbers $d_j(\lambda)$ are unchanged by similarity, and a direct count shows a block of size $s$ contributes $\min(j, s)$ to $d_j(\lambda)$. Inverting that count recovers the block sizes from the $d_j(\lambda)$, so no two different block patterns can describe the same matrix.
:::

:::proof{provenance=original}
Throughout, $V = F^n$ and matrices act on column vectors. Dummit and Foote reach this theorem as a corollary of the elementary divisor decomposition of $V$ as a module over the polynomial ring $F[x]$ :cite[]{work=dummit-foote-2004 loc="§12.3, pp. 490-493"}; the argument below is self-contained and uses nothing beyond rank and nullity.

**Step 1: the kernels of the powers stall, and the space splits.** Let $T : V \to V$ be linear, $d = \dim V$. Since $T^{j}x = 0$ implies $T^{j+1}x = 0$, the kernels increase: $\ker T \subseteq \ker T^2 \subseteq \cdots$. Suppose $\ker T^{j} = \ker T^{j+1}$ for some $j$. If $T^{j+2}x = 0$ then $T^{j+1}(Tx) = 0$, so $Tx \in \ker T^{j+1} = \ker T^{j}$, so $T^{j+1}x = 0$: the chain is constant from $j$ on. As each strict increase costs at least one dimension and $\dim V = d$, equality is reached at the latest at $j = d$. Hence

$$
\ker T^{d} = \ker T^{d+1} = \cdots =: K , \qquad R := \operatorname{im} T^{d} .
$$

Then $V = K \oplus R$. Indeed $\dim K + \dim R = d$ by rank-nullity applied to $T^d$, and the sum is direct: if $x = T^{d}y$ lies in $K$, then $T^{2d}y = 0$, so $y \in \ker T^{2d} = \ker T^{d}$ and therefore $x = T^{d}y = 0$. Both summands are carried into themselves by $T$ (and by any matrix commuting with $T$), $T$ is nilpotent on $K$ because $T^{d} = 0$ there, and $T$ is injective on $R$ — a vector of $R$ killed by $T$ lies in $K \cap R = \{0\}$ — hence invertible on $R$.

**Step 2: $V$ is the direct sum of the generalized eigenspaces.** We show by induction on $\dim V$ that if the characteristic polynomial of $A$ splits over $F$, with distinct roots $\lambda_1, \dots, \lambda_p$, then $V = G_{\lambda_1} \oplus \cdots \oplus G_{\lambda_p}$.

The case $\dim V = 0$ is empty. Otherwise apply step 1 to $T = A - \lambda_1 I$, giving $V = K \oplus R$ with $K = \ker(A - \lambda_1 I)^{n} = G_{\lambda_1}$ and both summands invariant under $A$ (because $A$ commutes with $T$). Here $K \neq \{0\}$, since $\lambda_1$ is a root of the characteristic polynomial and so has an eigenvector, whence $\dim R < \dim V$. Choosing a basis adapted to the splitting makes $A$ block diagonal, so its characteristic polynomial is the product of those of $A|_{K}$ and $A|_{R}$; in particular the latter splits over $F$ as well. On $K$ we have $A = \lambda_1 I + T$ with $T$ nilpotent, hence strictly upper triangular in a suitable basis of $K$ — choose a basis adapted to the flag $\{0\} \subseteq \ker T \subseteq \ker T^{2} \subseteq \cdots \subseteq K$, which exhausts $K$ by step 1, and note that $T$ carries $\ker T^{j}$ into $\ker T^{j-1}$, so each basis vector is sent into the span of the strictly earlier ones (step 3 below gives the sharper chain basis, and does not depend on the present step). Hence the characteristic polynomial of $A|_K$ is $(x - \lambda_1)^{\dim K}$ and the remaining roots $\lambda_2, \dots, \lambda_p$ are exactly the eigenvalues of $A|_R$. Also, for $\lambda \neq \lambda_1$ the matrix $A - \lambda I = (\lambda_1 - \lambda)I + T$ is invertible on $K$ — a non-zero scalar plus a nilpotent matrix is invertible, its inverse being the finite sum $\sum_{i\ge 0}(-1)^{i}(\lambda_1 - \lambda)^{-i-1}T^{i}$. Consequently, for $j \ge 2$,

$$
G_{\lambda_j} \subseteq R :
$$

write $x \in G_{\lambda_j}$ as $x = y + z$ with $y \in K$, $z \in R$. Because $K$ and $R$ are invariant, $(A - \lambda_j I)^{n}y$ lies in $K$ and $(A - \lambda_j I)^{n}z$ lies in $R$, and their sum is $0$; the decomposition of $0$ being unique, each vanishes separately. Then $y = 0$ by the invertibility just noted, so $x = z \in R$. The inductive hypothesis applied to $A|_R$ decomposes $R$ into the generalized eigenspaces of $A|_R$, and the one for $\lambda_j$ is $\ker(A - \lambda_j I)^{\dim R} \cap R$, which equals $G_{\lambda_j}$: it is contained in $G_{\lambda_j}$ because the kernels only grow with the exponent, and contains it because $G_{\lambda_j} \subseteq R$ and the kernels have stalled by exponent $\dim R$ inside $R$, by step 1 applied there. Adding $K = G_{\lambda_1}$ gives the claim.

Two consequences. First, the computation just made of the characteristic polynomial of $A|_K$ applies to every $G_\lambda$, so $\dim G_\lambda$ is the algebraic multiplicity of $\lambda$. Second, it suffices to produce a Jordan basis of each $G_\lambda$ separately.

**Step 3: a nilpotent matrix has a basis of chains.** Let $N : V \to V$ be nilpotent, $\dim V = d$. We claim $V$ has a basis that is a disjoint union of chains $N^{s-1}u, \dots, Nu, u$ with $N^{s}u = 0$, and that the ends $N^{s-1}u$ of those chains form a basis of $\ker N$.

Induct on $d$. For $d = 0$ there is nothing to prove. If $N = 0$, any basis works, each vector a chain of length one, and the ends span $\ker N = V$. Otherwise set $W = N(V)$ and $k = \dim \ker N$, so $\dim W = d - k$ by rank-nullity, and $k \ge 1$ because a nilpotent matrix on a non-zero space has non-trivial kernel (take the largest $i$ with $N^{i} \neq 0$ and any $x$ with $N^{i}x \neq 0$; then $N^{i}x \in \ker N$). Hence $\dim W < d$, and $N$ restricts to a nilpotent map of $W$. By the inductive hypothesis $W$ has a chain basis, say chains

$$
C_i : \quad N^{s_i - 1}u_i, \ \dots,\ N u_i,\ u_i \qquad (i = 1, \dots, r), \qquad N^{s_i}u_i = 0 ,
$$

whose ends $N^{s_i-1}u_i$ form a basis of $\ker N \cap W = \ker(N|_W)$; in particular $r = \dim(\ker N \cap W)$.

Now lengthen. Each $u_i$ lies in $W = N(V)$, so choose $v_i \in V$ with $Nv_i = u_i$; the list

$$
C_i' : \quad N^{s_i}v_i\ (= N^{s_i-1}u_i),\ \dots,\ Nv_i\ (= u_i),\ v_i
$$

is a chain of length $s_i + 1$, since $N^{s_i+1}v_i = N^{s_i}u_i = 0$. Extend the $r$ vectors $N^{s_i-1}u_i$ to a basis of $\ker N$ by adjoining $z_1, \dots, z_{k-r}$, each of which is a chain of length one.

The resulting list has $\sum_{i}(s_i + 1) + (k - r) = (d - k) + r + (k - r) = d$ vectors, so it is enough to show it is independent. Suppose

$$
\sum_{i=1}^{r}\sum_{t=0}^{s_i} a_{i,t}\, N^{t}v_i \ +\ \sum_{j=1}^{k-r} b_j z_j = 0 .
$$

Apply $N$. The terms $t = s_i$ die because $N^{s_i+1}v_i = 0$, and the $z_j$ die because they lie in $\ker N$, leaving $\sum_i \sum_{t=0}^{s_i-1}a_{i,t}N^{t}u_i = 0$. These vectors are precisely the chain basis of $W$, so every $a_{i,t}$ with $t \le s_i - 1$ vanishes. What is left of the relation is $\sum_i a_{i,s_i}N^{s_i-1}u_i + \sum_j b_jz_j = 0$, a relation among a basis of $\ker N$, so the remaining coefficients vanish too. Finally, the ends of the new chains are the $N^{s_i-1}u_i$ together with the $z_j$, which is the chosen basis of $\ker N$, so the second half of the claim is inherited.

**Step 4: existence.** Apply step 3 to $N = (A - \lambda I)|_{G_\lambda}$ for each eigenvalue $\lambda$, which is legitimate by step 2. A chain $x_1, \dots, x_s$ of $N$ satisfies $Ax_1 = \lambda x_1$ and $Ax_t = \lambda x_t + x_{t-1}$, so on the span of that chain, in that order, $A$ is the matrix $J_s(\lambda)$. Concatenating the chains over all $\lambda$ gives a basis of $V$ by step 2; let $P$ be the matrix of its columns. Then $AP = PJ$ with $J$ block diagonal of Jordan blocks, that is $P^{-1}AP = J$.

**Step 5: uniqueness.** Let $J$ be any Jordan matrix similar to $A$, say $P^{-1}AP = J$. Since $P^{-1}(A - \lambda I)^{j}P = (J - \lambda I)^{j}$, similar matrices have the same nullities, so $d_j(\lambda)$ may be computed from $J$. A kernel of a block diagonal matrix is the direct sum of the kernels of its blocks, so $d_j(\lambda)$ is the sum over blocks $J_s(\nu)$ of $\dim\ker(J_s(\nu) - \lambda I)^{j}$. For $\nu \neq \lambda$ that block contributes nothing: $J_s(\nu) - \lambda I$ is triangular with the non-zero number $\nu - \lambda$ on its diagonal, hence invertible, and so is its $j$-th power. For $\nu = \lambda$ the block contributes $\dim \ker N_s^{j}$, and $N_s^{j}$ maps $e_t \mapsto e_{t-j}$ (zero when $t \le j$), so its kernel is spanned by $e_1, \dots, e_{\min(j,s)}$. Therefore

$$
d_j(\lambda) = \sum_{\text{blocks } J_s(\lambda) \text{ of } J} \min(j, s) ,
\qquad\text{hence}\qquad
d_j(\lambda) - d_{j-1}(\lambda) = \#\{\text{blocks } J_s(\lambda) : s \ge j\} ,
$$

because $\min(j,s) - \min(j-1,s)$ is $1$ when $s \ge j$ and $0$ otherwise. The right-hand side determines, for every $j$, how many blocks for $\lambda$ have size at least $j$, hence the whole multiset of block sizes for every eigenvalue, hence $J$ up to the order of the blocks. This proves both the uniqueness statement and parts 1, 2 and 3 of the structure statement — part 1 being the case $j = 1$, part 3 following from $d_n(\lambda) = \sum_s s = \dim G_\lambda$ and step 2, and the "exactly $j$" count in part 2 being the difference of the counts for $\ge j$ and $\ge j+1$.

For part 4, note that for a block, $(J_s(\lambda) - \lambda I)^{i} = N_s^{i}$ vanishes exactly when $i \ge s$, while $J_s(\lambda) - \nu I$ is invertible for $\nu \neq \lambda$. So a polynomial $q$ annihilates $J$ if and only if it annihilates every block, and $q(J_s(\lambda)) = 0$ holds if and only if $(x-\lambda)^{s}$ divides $q$: writing $q(x) = \sum_i c_i (x - \lambda)^{i}$, we get $q(J_s(\lambda)) = \sum_i c_i N_s^{i}$, whose superdiagonals are the $c_i$ for $i < s$, so it vanishes exactly when $c_0 = \cdots = c_{s-1} = 0$. The monic polynomial of least degree divisible by $(x - \lambda)^{s(\lambda)}$ for every $\lambda$, with $s(\lambda)$ the largest block size, is $\prod_\lambda(x-\lambda)^{s(\lambda)}$, and $\mu_A = \mu_J$ because similarity preserves polynomial identities. $\square$
:::

:::statement[Powers and power series of a Jordan block]{provenance=original}
Let $J_m(\lambda) = \lambda I + N_m$ as above. For every integer $k \ge 0$,

$$
J_m(\lambda)^{k} = \sum_{i=0}^{\min(k,\,m-1)} \binom{k}{i}\lambda^{k-i} N_m^{i} ,
\qquad\text{entrywise}\qquad
\bigl(J_m(\lambda)^{k}\bigr)_{pq} = \binom{k}{q-p}\lambda^{\,k-q+p}
\quad\text{for } p \le q \le p+k ,
$$

the entry being $0$ at every other position — that is, for $q < p$ and also for $q - p > k$, so that no negative power of $\lambda$ is ever called for. (Writing the formula with the convention $\binom{k}{i} = 0$ for $i > k$ would make it read $0 \cdot \lambda^{\text{negative}}$ when $\lambda = 0$ and $q - p > k$, which is why those positions are excluded outright rather than by a convention. At the far edge of that range, $q = p + k$ with $\lambda = 0$, the entry is $\binom{k}{k}\lambda^{0} = 1$, using $0^0 = 1$; this is the statement that $J_m(0)^{k} = N_m^{k}$.) More generally, if $f(z) = \sum_{i \ge 0} c_i (z - \lambda)^{i}$ converges in a disc about $\lambda$, then

$$
f\bigl(J_m(\lambda)\bigr) = \sum_{i=0}^{m-1} \frac{f^{(i)}(\lambda)}{i!}\, N_m^{i} ,
$$

a finite sum: the block sees only the first $m$ Taylor coefficients of $f$ at $\lambda$. Applying this blockwise through $A = PJP^{-1}$ gives, for an $n \times n$ matrix $A$ with largest block size $s(\lambda)$ at each eigenvalue,

$$
\bigl(A^{k}\bigr)_{pq} = \sum_{\lambda \in \sigma(A),\ \lambda \neq 0} \varphi_{pq}^{\lambda}(k)\, \lambda^{k} ,
$$

with each $\varphi_{pq}^{\lambda}$ a polynomial in $k$ of degree at most $s(\lambda) - 1$. The sum omits a zero eigenvalue, and the formula then holds for all $k \ge s(0)$, where $s(0)$ is the largest block size at $0$ (and for all $k \ge 1$ when $A$ is invertible, the omission being vacuous): the blocks at $0$ are nilpotent of index at most $s(0)$, so they contribute to $A^{k}$ only while $k < s(0)$, and a term $\varphi(k)\,0^{k}$ could not record that contribution. Hence $A^{k} \to 0$ if and only if every eigenvalue satisfies $|\lambda| < 1$; and $A^{k}$ stays bounded as $k \to \infty$ if and only if every eigenvalue satisfies $|\lambda| \le 1$ and every eigenvalue with $|\lambda| = 1$ has $s(\lambda) = 1$. The same formula with $f(z) = e^{tz}$ gives the polynomial-times-exponential shape of $\exp(tA)$; the computational route is in :ref[the matrix exponential]{to=linalg.matrix-exponential}.
:::

:::proof{provenance=original}
$\lambda I$ commutes with $N_m$, so the binomial theorem holds for $(\lambda I + N_m)^{k}$ exactly as for numbers — the usual proof by induction only ever needs that the two terms commute. Terms with $i \ge m$ drop out because $N_m^{m} = 0$, and the sum runs only to $i = k$, so no term carries a negative power of $\lambda$. The entry form follows from $(N_m^{i})_{pq} = 1$ when $q = p + i$ and $0$ otherwise, which is the statement that $N_m^{i}$ shifts the basis $i$ places: the position $(p,q)$ receives a contribution from the single term $i = q - p$ when $0 \le q - p \le \min(k, m-1)$, and from no term at all otherwise, which is why the entry vanishes for $q < p$ and for $q - p > k$ whatever $\lambda$ may be.

For the power series, substitute $z = J_m(\lambda)$ into $f(z) = \sum_i c_i(z-\lambda)^{i}$, so that $(z - \lambda)^i$ becomes $N_m^{i}$, which vanishes for $i \ge m$; only $i \le m - 1$ survives, the sum is finite, and $c_i = f^{(i)}(\lambda)/i!$ is Taylor's formula. (Convergence of the series is therefore not at issue for a single block, though it is for the eigenvalue to lie in the disc of convergence of $f$ at all.)

For $A = PJP^{-1}$ we get $A^{k} = PJ^{k}P^{-1}$, and $J^k$ is block diagonal with the blocks $J_{s_i}(\nu_i)^{k}$ just computed. Every entry of $A^{k}$ is therefore a fixed linear combination of the entries of the blocks, each of which is $\binom{k}{i}\lambda^{k-i}$ for some $i \le s(\lambda) - 1$; and $\binom{k}{i} = k(k-1)\cdots(k-i+1)/i!$ is a polynomial in $k$ of degree $i$. Grouping by eigenvalue and writing $\binom{k}{i}\lambda^{k-i} = \bigl(\binom{k}{i}\lambda^{-i}\bigr)\lambda^{k}$ gives the stated form with $\deg \varphi^{\lambda}_{pq} \le s(\lambda) - 1$. That rewriting needs $\lambda \neq 0$, which is why the eigenvalue $0$ is excluded from the sum; once $k \ge s(0)$ every block at $0$ has already died, since $N_s^{k} = 0$ for $s \le s(0) \le k$, so the omitted blocks contribute nothing and the formula is exact from that $k$ on.

For the limit: if every $|\lambda| < 1$ then each $k^{i}|\lambda|^{k} \to 0$, since the geometric factor beats any polynomial, so $A^{k} \to 0$. Conversely, if $Ax = \lambda x$ with $x \neq 0$ then $A^{k}x = \lambda^{k}x$, which tends to $0$ only if $|\lambda| < 1$. For boundedness both conditions are necessary, and here $J^{k} = P^{-1}A^{k}P$ lets us argue on $J$: the two are bounded or unbounded together. Suppose $A^{k}$ is bounded. If some eigenvalue had $|\lambda| > 1$, an eigenvector $x \neq 0$ would give $\lVert A^{k}x \rVert = |\lambda|^{k}\lVert x\rVert \to \infty$; so every eigenvalue has $|\lambda| \le 1$. If some eigenvalue with $|\lambda| = 1$ had $s(\lambda) = m \ge 2$, the entry $\binom{k}{m-1}\lambda^{k-m+1}$ in the corner of a largest block for that $\lambda$ would have modulus $\binom{k}{m-1} \to \infty$, making $J^{k}$ and hence $A^{k}$ unbounded; so every eigenvalue of modulus $1$ has $s(\lambda) = 1$. Conversely, if every eigenvalue of modulus $1$ has $s(\lambda) = 1$ and all others have $|\lambda| < 1$, each entry of $J^{k}$ is either $\lambda^{k}$ with $|\lambda| = 1$ or one of the terms $\binom{k}{i}\lambda^{k-i}$ with $|\lambda| < 1$, which tend to $0$; so $J^{k}$, and with it $A^{k}$, is bounded. $\square$
:::

:::remark[Where the hypotheses are used]{provenance=adapted src="hirsch-smale-devaney-2013:§5.5, the Proposition on p. 94, and §5.6, p. 100; grimmett-stirzaker-2020:§6.6, p. 270"}
**The field must contain the eigenvalues.** This hypothesis of :cite[Dummit and Foote]{work=dummit-foote-2004 loc="Thm 23, p. 493"} enters at step 2, where an eigenvalue $\lambda_1 \in F$ is needed to start the peeling, and again in the induction. It is not a formality: over $F = \mathbb{R}$ the rotation $\begin{pmatrix} 0 & -1 \\ 1 & 0\end{pmatrix}$ has characteristic polynomial $x^2 + 1$, no real eigenvalue and hence no real Jordan form, although over $\mathbb{C}$ it is $\operatorname{diag}(i, -i)$. What a real matrix does have is the **real canonical form** of :cite[Hirsch, Smale and Devaney]{work=hirsch-smale-devaney-2013 loc="§5.5, Proposition, p. 94"}: a block diagonal real matrix whose blocks are either real Jordan blocks or, for a conjugate pair $\alpha \pm i\beta$ with $\beta \neq 0$, block-upper-bidiagonal matrices built from $C_2 = \begin{pmatrix} \alpha & \beta \\ -\beta & \alpha \end{pmatrix}$ on the diagonal and $2 \times 2$ identity matrices one place above. One obtains it from the complex Jordan form by replacing each conjugate pair of chains with the real and imaginary parts of one of them.

**Uniqueness is only up to the order of the blocks, and $P$ is far from unique.** Even for $A = \lambda I$, every invertible $P$ works. In general, scaling a whole chain by a non-zero constant, or swapping two chains of the same length for the same eigenvalue, changes $P$ and leaves $J$ alone; the form is an invariant of $A$, the basis is not.

**The eigenvalues and the geometric multiplicities do not determine $J$.** Blocks of sizes $(3,1)$ and $(2,2)$ for the same $\lambda$ both give algebraic multiplicity $4$ and geometric multiplicity $2$; they are told apart only by $d_2(\lambda)$, which is $3$ in the first case and $4$ in the second. This is why the structure statement needs the whole sequence $d_1, d_2, \dots$ and not just $d_1$.

**The form is discontinuous in $A$, so it cannot be computed in floating point.** For $\varepsilon \neq 0$ the matrix $\begin{pmatrix} 0 & 1 \\ \varepsilon & 0\end{pmatrix}$ has distinct eigenvalues $\pm\sqrt{\varepsilon}$ and is diagonalizable; at $\varepsilon = 0$ it is a single $2 \times 2$ Jordan block. Arbitrarily small perturbations therefore change the answer completely, and the ranks $\operatorname{rank}(A - \lambda I)^{j}$ that the method below uses are exactly the quantities that rounding destroys. Jordan form is a tool for exact arithmetic and for theory; numerical work uses the Schur form or the :ref[singular value decomposition]{to=linalg.svd} instead, and the relevant sensitivity is measured by :ref[condition numbers]{to=linalg.matrix-norms-conditioning}. :cite[Hirsch, Smale and Devaney]{work=hirsch-smale-devaney-2013 loc="§5.6, p. 100"} make the complementary point that a matrix met at random has distinct eigenvalues, so the non-trivial Jordan structure that matters in practice arises from symmetry or from a tuned parameter, not by accident.

**Normal matrices never need it.** A normal matrix is unitarily diagonalizable (:ref[]{to=linalg.normal-matrices}), so all its Jordan blocks have size $1$; non-trivial Jordan structure is a strictly non-normal phenomenon.

**Conventions.** Many texts, including :cite[Hassani]{work=hassani-2013 loc="§17.7, p. 539"}, write the $1$s on the superdiagonal as here; others put them on the subdiagonal, which is the transpose and equally valid. Some books, among them :cite[Grimmett and Stirzaker]{work=grimmett-stirzaker-2020 loc="§6.6, p. 270"}, present the form with one block per distinct eigenvalue, of size equal to that eigenvalue's multiplicity; that is the special case in which each eigenvalue has geometric multiplicity $1$, and part 1 of the structure statement is what allows several blocks in general. We follow the several-block statement of :cite[Dummit and Foote]{work=dummit-foote-2004 loc="Thm 23, p. 493"} throughout.
:::

:::method[Computing the Jordan form and a Jordan basis]{provenance=adapted src="hirsch-smale-devaney-2013:§5.5, the proof on pp. 95-96 and the worked matrices on pp. 96-99"}
Given an $n \times n$ matrix $A$ over $\mathbb{C}$ with exact entries:

1. **Eigenvalues.** Factor the characteristic polynomial $\chi_A$ and record each distinct eigenvalue $\lambda$ with its algebraic multiplicity $a(\lambda)$.
2. **Nullities.** For each $\lambda$, compute $r_j = \operatorname{rank}(A - \lambda I)^{j}$ for $j = 1, 2, \dots$ until $r_j$ stops decreasing, and set $d_j = n - r_j$. Stop at the first $j$ with $d_j = a(\lambda)$; this $j$ is the largest block size for $\lambda$.
3. **Block sizes.** The number of blocks for $\lambda$ of size at least $j$ is $d_j - d_{j-1}$. Equivalently, the list $d_1 - d_0,\ d_2 - d_1,\ \dots$ (automatically non-increasing, since a block of size $\ge j+1$ has size $\ge j$) is the conjugate partition of the list of block sizes. Check that the sizes sum to $a(\lambda)$.
4. **Chains, longest first.** For the largest size $s$, pick $v \in \ker(A - \lambda I)^{s}$ not in $\ker(A - \lambda I)^{s-1}$ and generate the chain downwards by repeated multiplication:
$$
v,\quad (A - \lambda I)v,\quad (A-\lambda I)^2 v,\ \dots,\ (A - \lambda I)^{s-1}v .
$$
Every later chain for the same $\lambda$, whether another of length $s$ or one of a smaller length $s'$, is started from a vector chosen by one and the same rule. Abbreviate $T = A - \lambda I$ and let $U$ be the span of all chain vectors produced so far; then take

$$
v \in \ker T^{s'} \qquad\text{with}\qquad v \notin \ker T^{s'-1} + U ,
$$

and run the chain $v, Tv, \dots, T^{s'-1}v$ downwards as before.

**The second condition is about the sum of the two subspaces, not about each of them.** Requiring only $v \notin \ker T^{s'-1}$ and $v \notin U$ is genuinely too weak. Take $\lambda = 0$ and $A$ the direct sum of $J_3(0)$ and $J_2(0)$, with the chains $a_1, a_2, a_3$ and $b_1, b_2$ as its basis, so $Aa_3 = a_2$, $Aa_2 = a_1$, $Aa_1 = 0$, $Ab_2 = b_1$, $Ab_1 = 0$. Steps 1 to 3 give $d_1 = 2$, $d_2 = 4$, $d_3 = 5$ and block sizes $3, 2$. Choosing $v = a_3$ produces $U = \operatorname{span}\{a_1, a_2, a_3\}$, and then $v' = a_2 + b_1$ satisfies all three of the weaker conditions — $A^{2}v' = 0$, $Av' = a_1 \neq 0$, $v' \notin U$ — yet its chain is $a_1,\ a_2 + b_1$, which repeats $a_1$: the assembled list has rank $4$, not $5$, and $P$ is singular. The rule above rejects $v'$, since $a_2 + b_1 \in U + \ker A$, and accepts $b_2$, which is the correct choice.

**Why the rule is the right one.** For $v \in \ker T^{s'}$, the condition $v \notin \ker T^{s'-1} + U$ says precisely that the bottom vector $T^{s'-1}v$ of the new chain is not in the span of the bottom vectors $T^{s_i-1}v_i$ of the chains already built. (All chains built so far have length $s_i \ge s'$, since the sizes are taken in decreasing order. Suppose $v = y + u$ with $T^{s'-1}y = 0$ and $u \in U$. From $T^{s'}v = 0$ and $T^{s'}y = 0$ we get $T^{s'}u = 0$; expanding $u = \sum_i\sum_{t < s_i} a_{i,t}T^{t}v_i$ in the chain vectors, the only terms of $T^{s'}u$ that survive are those with $t < s_i - s'$, and they are distinct members of the chain list, so $a_{i,t} = 0$ for every $t < s_i - s'$. Applying $T^{s'-1}$ to what remains kills every term with $t > s_i - s'$ and gives $T^{s'-1}v = T^{s'-1}u = \sum_i a_{i,\,s_i - s'}\,T^{s_i - 1}v_i$, a combination of bottom vectors. Conversely, if $T^{s'-1}v = \sum_i c_i T^{s_i - 1}v_i$, then $v - \sum_i c_i T^{s_i - s'}v_i$ lies in $\ker T^{s'-1}$, so $v \in \ker T^{s'-1} + U$.) And chains whose bottom vectors are independent are jointly independent: in a vanishing combination $\sum_i \sum_{t < s_i} a_{i,t}T^{t}v_i = 0$ with some coefficient non-zero, let $c_i$ be the least $t$ with $a_{i,t} \neq 0$ and put $q = \max_i (s_i - c_i)$ over the chains that occur; applying $T^{q-1}$ annihilates every term except those with $s_i - c_i = q$ and $t = c_i$, and leaves a vanishing combination of distinct bottom vectors with a non-zero coefficient — impossible. Finally, a legal choice is available exactly as often as step 3 predicts: the vectors $T^{s_i - s'}v_i$ taken from the chains already built have independent images in $\ker T^{s'}/\ker T^{s'-1}$ (apply $T^{s'-1}$ and use the independence of the bottoms), that quotient has dimension $d_{s'} - d_{s'-1}$, the number of blocks of size at least $s'$, and by the equivalence just proved $\ker T^{s'-1} + U$ meets $\ker T^{s'}$ in exactly the preimage of the span of those images. So the supply of choices runs out only when the chains of length $\ge s'$ already number $d_{s'} - d_{s'-1}$.

Equivalently, and this is the device :cite[Hirsch, Smale and Devaney]{work=hirsch-smale-devaney-2013 loc="§5.5, pp. 95-96"} use in their worked $3\times3$ and $4\times4$ examples, start from an eigenvector and *back-solve* $(A - \lambda I)x_{t} = x_{t-1}$, going up the chain instead of down.
5. **Assemble.** Write each chain as consecutive columns **ending** with the top vector $v$, that is in the order $(A-\lambda I)^{s-1}v, \dots, (A - \lambda I)v, v$; concatenate the chains over all eigenvalues to form $P$. Then $J = P^{-1}AP$, with the blocks in the order the chains were laid down.
6. **Check** without inverting $P$: verify $AP = PJ$ column by column, and verify $\operatorname{tr}A = \operatorname{tr}J$ and $\det A = \det J$.

If only the *form* is wanted — enough for powers, growth rates and the minimal polynomial — stop after step 3; the eigenvectors are needed only for $P$. Never run this on inexact data: see the remark above.
:::

:::example[A defective 4 x 4 matrix and its powers]{provenance=original}
Let

$$
A = \begin{pmatrix} 2 & -1 & 1 & -1 \\ -1 & 2 & 1 & -1 \\ 2 & 2 & 1 & -2 \\ 4 & 4 & -4 & 3 \end{pmatrix} .
$$

**Step 1: eigenvalues.** Expanding $\det(xI - A)$ gives

$$
\chi_A(x) = x^4 - 8x^3 + 18x^2 - 27 = (x-3)^3 (x+1) ,
$$

the factorization being confirmed by multiplying out: $(x^3 - 9x^2 + 27x - 27)(x+1) = x^4 - 8x^3 + 18x^2 - 27$, the linear terms $-27x$ and $+27x$ cancelling. The two standard tests agree: $\operatorname{tr}A = 2 + 2 + 1 + 3 = 8 = 3 + 3 + 3 - 1$, and $\det A = \chi_A(0) = -27 = 3\cdot3\cdot3\cdot(-1)$. So $a(3) = 3$ and $a(-1) = 1$.

**Step 2: nullities at $\lambda = 3$.** With $B = A - 3I$,

$$
B = \begin{pmatrix} -1 & -1 & 1 & -1 \\ -1 & -1 & 1 & -1 \\ 2 & 2 & -2 & -2 \\ 4 & 4 & -4 & 0 \end{pmatrix} ,
\qquad
B^2 = \begin{pmatrix} 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 \\ -16 & -16 & 16 & 0 \\ -16 & -16 & 16 & 0 \end{pmatrix} .
$$

Call the rows of $B$ in order $R_1, \dots, R_4$. Then $R_2 = R_1$, and subtracting multiples of $R_1$ from the last two rows leaves the same vector twice, $R_3 + 2R_1 = R_4 + 4R_1 = (0,0,0,-4)$, so $R_4 = R_3 - 2R_1$. The row space is therefore spanned by $R_1$ and $R_3$, which are independent because $R_3$ has a non-zero fourth entry after $R_1$ has been cleared from it: $\operatorname{rank}B = 2$ and $d_1(3) = 2$. For $B^2$ the two non-zero rows are equal, so $\operatorname{rank}B^2 = 1$ and $d_2(3) = 3 = a(3)$; the chain of kernels has stalled.

**Step 3: block sizes.** The number of blocks for $3$ is $d_1 = 2$; the number of size at least $2$ is $d_2 - d_1 = 1$; the number of size at least $3$ is $d_3 - d_2 = 0$. So the blocks for $3$ have sizes $2$ and $1$, summing to $3 = a(3)$ as required. The eigenvalue $-1$ is simple, giving one block of size $1$. Hence

$$
J = \begin{pmatrix} 3 & 1 & 0 & 0 \\ 0 & 3 & 0 & 0 \\ 0 & 0 & 3 & 0 \\ 0 & 0 & 0 & -1 \end{pmatrix} ,
$$

and the minimal polynomial is $\mu_A(x) = (x-3)^2(x+1)$, the largest block size at $3$ being $2$. Indeed $B^2(A+I) = 0$ while $B(A+I) \neq 0$: that product is $\begin{pmatrix} -4 & -4 & 4 & -4 \\ -4 & -4 & 4 & -4 \\ -8 & -8 & 8 & -8 \\ 0 & 0 & 0 & 0\end{pmatrix}$.

**Step 4: the chains.** Take the top of the long chain to be $v = (0,0,0,1)^{\mathsf T}$, which lies in $\ker B^2$ (the fourth column of $B^2$ is zero) but not in $\ker B$ (the fourth column of $B$ is $(-1,-1,-2,0)^{\mathsf T} \neq 0$). The chain is

$$
x_1 = Bv = (-1,-1,-2,0)^{\mathsf T}, \qquad x_2 = v = (0,0,0,1)^{\mathsf T} ,
$$

and $Bx_1 = 0$, as the four rows confirm: $1 + 1 - 2 + 0 = 0$ from $R_1$ and again from $R_2$, then $-2 - 2 + 4 + 0 = 0$ from $R_3$, then $-4 - 4 + 8 + 0 = 0$ from $R_4$.

For the second block at $3$ we need an eigenvector independent of $x_1$. Write a general vector as $\xi = (\xi_1, \xi_2, \xi_3, \xi_4)^{\mathsf T}$ and solve $B\xi = 0$: rows 1 and 2 give $-\xi_1 - \xi_2 + \xi_3 - \xi_4 = 0$ and row 4 gives $\xi_1 + \xi_2 - \xi_3 = 0$, whence $\xi_4 = 0$ and $\xi_3 = \xi_1 + \xi_2$; row 3 is then automatic. A basis of $\ker B$ is $(-1,1,0,0)^{\mathsf T}$ and $(1,0,1,0)^{\mathsf T}$, and we may take

$$
w = (-1, 1, 0, 0)^{\mathsf T} ,
$$

which is independent of $x_1 = -(-1,1,0,0)^{\mathsf T} - 2(1,0,1,0)^{\mathsf T}$.

For $\lambda = -1$: $(A + I)\xi = 0$ has the one-dimensional solution space spanned by $z = (0,0,1,1)^{\mathsf T}$, as one checks on the first row, $2\cdot 0 - 1\cdot 0 + 1 \cdot 1 - 1 \cdot 1 = 0$, and similarly on the others.

**Step 5: assemble and check.** Laying the chain down first,

$$
P = \begin{pmatrix} -1 & 0 & -1 & 0 \\ -1 & 0 & 1 & 0 \\ -2 & 0 & 0 & 1 \\ 0 & 1 & 0 & 1\end{pmatrix}, \qquad \det P = -2 \neq 0 .
$$

The identity $AP = PJ$ holds column by column: $Ax_1 = 3x_1$, $Av = 3v + x_1$ (which is $Bv = x_1$, verified above), $Aw = 3w$ and $Az = -z$. Hence $P^{-1}AP = J$.

**Powers.** By the block-power formula, $J^{k} = \operatorname{diag}\bigl(J_2(3)^k,\ 3^{k},\ (-1)^{k}\bigr)$ with $J_2(3)^{k} = \begin{pmatrix} 3^{k} & k3^{k-1} \\ 0 & 3^{k}\end{pmatrix}$, so $A^{k} = PJ^{k}P^{-1}$ splits into three fixed matrices:

$$
A^{k} = 3^{k}\,\Pi + k\,3^{k-1} M + (-1)^{k}\,\Pi' ,
$$

$$
\Pi = \begin{pmatrix} 1&0&0&0\\0&1&0&0\\1&1&0&0\\1&1&-1&1\end{pmatrix}, \quad
M = \begin{pmatrix} -1&-1&1&-1\\-1&-1&1&-1\\-2&-2&2&-2\\0&0&0&0\end{pmatrix}, \quad
\Pi' = \begin{pmatrix} 0&0&0&0\\0&0&0&0\\-1&-1&1&0\\-1&-1&1&0\end{pmatrix} .
$$

Here $\Pi$ and $\Pi'$ are the projections onto $G_3$ and $G_{-1}$ along each other ($\Pi^2 = \Pi$, $\Pi'^2 = \Pi'$, $\Pi + \Pi' = I$) and $M = B\Pi$ is the nilpotent part, $M^2 = 0$. Note that $\Pi$ is **not** an orthogonal projection: $A$ is not normal, and nothing forces the two generalized eigenspaces to be perpendicular.

**Checking the formula.** At $k = 1$ it returns $3\Pi + M - \Pi' = A$; for instance the $(3,1)$ entry is $3 \cdot 1 + 1\cdot(-2) - (-1) = 2$, which is $A_{31}$. At $k = 2$, squaring $A$ directly gives

$$
A^2 = \begin{pmatrix} 3 & -6 & 6 & -6 \\ -6 & 3 & 6 & -6 \\ -4 & -4 & 13 & -12 \\ 8 & 8 & -8 & 9\end{pmatrix} ,
$$

and the formula gives for the $(3,1)$ entry $9 \cdot 1 + 2 \cdot 3 \cdot (-2) + (-1) = 9 - 12 - 1 = -4$, which agrees.

**A number to check against.** Take $k = 10$. Then

$$
\bigl(A^{10}\bigr)_{31} = 3^{10}\cdot 1 + 10\cdot 3^{9}\cdot(-2) + 1 \cdot(-1) = 59049 - 393660 - 1 = -334612 ,
$$

which is what repeated squaring of $A$ produces. The structure is visible in the arithmetic: the term $-393660$, carrying the factor $k$, already dominates $3^{10} = 59049$ at $k = 10$, and the whole entry grows like $-2k\,3^{k-1}$ rather than like $3^{k}$. That extra factor of $k$ is the single $2 \times 2$ Jordan block, and nothing in the spectrum $\{3, -1\}$ alone would have predicted it.
:::

:::application{provenance=original}
**How fast a finite Markov chain forgets its start.** For a finite irreducible aperiodic chain with transition matrix $S$ and stationary distribution $\pi$, the $n$-step probabilities are the entries of $S^{n}$. When the eigenvalues are distinct one diagonalizes, and :cite[Grimmett and Stirzaker]{work=grimmett-stirzaker-2020 loc="§6.6, p. 270"} read off the geometric rate: with $\varrho$ the largest modulus among the eigenvalues other than $1$ (they write $\mu$ for it), there is a constant $c$ with $|p_{ij}(n) - \pi_j| \le c\,\varrho^{\,n}$. They then note that repeated eigenvalues block this route, and that the Jordan form takes its place: $S = B^{-1}JB$ in our notation (they write $M$ for the Jordan matrix), with $S^{n} = B^{-1}J^{n}B$. Their Perron-Frobenius theorem :cite[]{work=grimmett-stirzaker-2020 loc="§6.6, Thm (1), p. 269"} lists the eigenvalue $1$ once for an irreducible aperiodic chain and puts every other eigenvalue strictly inside the unit circle, so the block at $1$ is $1 \times 1$ and only the other blocks can be large. The block-power formula of this unit then says exactly what changes: an eigenvalue $\lambda \neq 1$ whose largest block has size $s$ contributes terms $\binom{n}{i}\lambda^{n-i}$ with $i \le s-1$, so with $s$ the largest block size over all eigenvalues other than $1$ the clean bound acquires a polynomial factor and becomes $|p_{ij}(n) - \pi_j| \le c\,n^{s-1}\varrho^{\,n}$. Since $n^{s-1}\varrho^{\,n} \le c'\,\tau^{\,n}$ for any $\tau$ strictly between $\varrho$ and $1$, geometric convergence survives, but the *pre-asymptotic* behaviour does not: for $n$ up to about $(s-1)/\log(1/\varrho)$ the polynomial is still winning, and a chain with a large Jordan block mixes visibly more slowly than its second eigenvalue suggests. This is the discrete-time counterpart of the warning that the spectrum alone does not control $\|A^{k}\|$.

**Defective linear systems and the factor of $t$.** For $\dot x = Ax$ with a repeated eigenvalue and too few eigenvectors, the missing solutions are supplied by the chain. :cite[Lee]{work=lee-2013 loc="Appendix D, pp. 673-674"} gives the $2 \times 2$ case explicitly: when $A$ has the single eigenvalue $\lambda$ with eigenvector $Z_0$ and $A - \lambda I \neq 0$, there is a generalized eigenvector $Z_1$ with $(A - \lambda I)Z_1 = Z_0$, and the second independent solution is $e^{\lambda t}(tZ_0 + Z_1)$. In the language above, $Z_0, Z_1$ is a Jordan chain of length two, and the solution is the second column of $P\exp(tJ)$. The same bookkeeping in general: a chain $x_1, \dots, x_s$ for $\lambda$ carries the $s$ solutions $u_r(t) = e^{\lambda t}\sum_{i=0}^{r-1}(t^{i}/i!)\,x_{r-i}$ for $r = 1, \dots, s$, polynomial in $t$ of degree up to $s-1$. Differentiating $u_r$ and using $Ax_{r-i} = \lambda x_{r-i} + x_{r-i-1}$ (with $x_0 = 0$) reproduces $\dot u_r = Au_r$ term by term. Physically this is where secular terms come from — critically damped oscillators, resonant forcing, marginal stability in a linearized flow — and it is why a stability analysis must look at the Jordan structure of any eigenvalue sitting on the imaginary axis, not merely at its real part. See :ref[linear systems]{to=ode.linear-systems} for the solution theory and :ref[the matrix exponential]{to=linalg.matrix-exponential} for computing $\exp(tA)$ in practice.

**Perturbation theory near a degeneracy.** In quantum mechanics the Hamiltonian is Hermitian and therefore never defective, but the matrices that govern open and driven systems are not. An effective non-Hermitian Hamiltonian describing a resonance, a gain-loss optical cavity or a damped coupled oscillator typically has isolated parameter values — exceptional points — where two eigenvalues and their eigenvectors *coalesce*, which is precisely a $2 \times 2$ Jordan block. The splitting of the two eigenvalues near such a point goes like $\sqrt{\varepsilon}$ in the detuning $\varepsilon$, not like $\varepsilon$, exactly as in the matrix $\begin{pmatrix} 0 & 1 \\ \varepsilon & 0 \end{pmatrix}$ of the remark above, and that square-root response is what makes exceptional points attractive as sensors. The Jordan form is the right language here because the whole phenomenon is the failure of diagonalizability at one point of parameter space.

**A reason to stop short of step 4.** Because steps 1 to 3 use only ranks and the characteristic polynomial, the Jordan *form* is often all one computes: it is what decides whether $A^{k}$ or $\exp(tA)$ carries polynomial factors, what the minimal polynomial is (hence how many powers of $A$ are genuinely independent, which bounds the length of a Krylov recurrence), and whether a projection or involution identity can hold. The eigenvectors, which cost far more, are needed only when the solution itself, and not its shape, is wanted.
:::
