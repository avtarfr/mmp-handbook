VERDICT: FAIL
UNIT: green.causal-green-functions
VERIFIER: B

## Findings
1. [blocking] :::example item 7 (line 250): the number is wrong by a square. The sentence reads
   "$|\hat G(\omega)|^2 = \bigl[(k-m\omega^2)^2 + c^2\omega^2\bigr]^{-1}$ is largest at
   $\omega^2 = k/m-2\gamma^2 = 3$, where its value is $1/(c\,\omega_d) = 1/4$", but at the peak
   $(k-m\omega^2)^2 + c^2\omega^2 = (c^2/2m)^2 + c^2(k/m - c^2/2m^2) = c^2\omega_d^2$, so
   $|\hat G|^2 = 1/(c\omega_d)^2$ and $|\hat G| = 1/(c\omega_d)$. With $c=2$, $\omega_d=2$ the
   maximum of $|\hat G|^2$ is $1/16 = 0.0625$, not $1/4$. Checked numerically: scanning
   $|\hat G(\omega)|^2 = |5-\omega^2-2i\omega|^{-2}$ on a grid of step $10^{-3}$ peaks at
   $\omega = 1.732$ with value $0.06249999988$, and $|\hat G(\sqrt3)|^2 = 0.0625$ exactly while
   $|\hat G(\sqrt3)| = 0.25$. Fix: either say the peak of $|\hat G|$ is $1/(c\omega_d) = 1/4$, or
   keep $|\hat G|^2$ and give $1/(c\omega_d)^2 = 1/16$.
2. [minor] :::remark[Where the hypotheses are used], second bullet (line 194): the content of the
   claim is exactly right — Stakgold & Holst's Exercise 1.4.5 is $mu''+ku = f$, $t>0$, with
   $u(0)=\alpha$, $u'(0)=\beta$, and asks for the causal Green's function and the solution written
   as the Green's integral plus $\alpha\cos\sqrt{k/m}\,t + \beta\sqrt{m/k}\sin\sqrt{k/m}\,t$ — but
   it sits on pp. 89–90, outside the declared `pages: "176-177, 188-191, 195, 199"`. (Stakgold's
   p. 177 does point to this exercise, so the pointer is natural; only the page list is short.)
   Fix: add pp. 89–90 to the stakgold-holst-2011 `pages`.
3. [minor] :::statement (line 58): $u_\tau$ is defined as the solution of $Lu_\tau = 0$ only on
   $t > \tau$, yet part (i) then writes the advanced Green's function as
   $G_{\mathrm{adv}}(t,\tau) = -H(\tau-t)u_\tau(t)$, and Step 4 of the first proof evaluates
   $u_\tau$ and $u_\tau'$ on $t<\tau$. Nothing is wrong — a linear equation with continuous
   coefficients and $a_p\ne0$ extends $u_\tau$ uniquely to the whole interval, and Stakgold &
   Holst's own (3.1.10) poses it on $-\infty<x<\infty$ — but the unit's own hypothesis as written
   does not license the use. Fix: pose $Lu_\tau=0$ on the whole interval, as (3.1.10) does.
4. [minor] :::statement (line 114), item 2: the "analytic in the upper half-plane" conclusion is
   the unit's own bridge, not something either cited Arfken passage states. His §12.8 *assumes* a
   function analytic in the upper half-plane (p. 591) and only remarks that the dispersion
   relations "may be taken as a consequence of causality"; his §20.5 derives (20.111)–(20.113)
   with the opposite transform sign (20.110), which would put the analyticity in the lower
   half-plane. The unit's own proof supplies the step and the conventions remark states the sign
   clash honestly, so this is a labelling nicety rather than an unsupported claim. Fix: say in the
   statement that item 2 is proved below rather than letting the block `src` carry it.

## Checked
- Automated checks: `node tools/check/index.mjs --record` — `ok` for this unit, no FAIL lines.
  Warn line judged: `:::remark` (line 201), 8-word run with arfken-2013 p. 591, "is analytic in
  the upper half plane and". Line 202 is "a causal response function is analytic in the **upper**
  half-plane and its poles lie below the real axis". The matched run is the standard name of a
  standard hypothesis (Arfken's own sentence is "a complex function $f(z)$ that is analytic in the
  upper half-plane and on the real axis"), and the two sentences say different things. Not a
  provenance problem.
- Counterexample search: tested the advanced Green's function of part (i) against its own defining
  conditions ($G_{\mathrm{adv}} = -u_\tau$ for $t<\tau$: continuous at $\tau$ since
  $u_\tau(\tau)=0$, jump $0-(-1/a_2) = 1/a_2$, vanishing for $t>\tau$ — all hold), and
  $G - G_{\mathrm{adv}} = u_\tau$. Tested the undamped case of line 196: $G_0 = \sin\omega_0t/m\omega_0$
  and $\hat G = 1/(k-m\omega^2)$ has poles exactly at $\pm\omega_0 = \pm\sqrt{k/m}$ on the real
  axis — correct. Tested the pole map of Step 5 ($P(-i\omega) = 0 \iff \omega = i\zeta_j$, so
  $\operatorname{Im}\omega = \operatorname{Re}\zeta_j$) and the step-response identity of part (iv)
  by constructing $F(t,\tau) = \int_\tau^t G(t,\sigma)d\sigma$, which gives $-\partial F/\partial\tau = G$
  and, on integrating $u = \int_a^t(-\partial_\tau F)f\,d\tau$ by parts with $F(t,t)=0$, exactly
  (3.1.15). Probed the small-$t$ expansion of the example against the ODE's own Taylor data
  ($u''(0) = f/m = 1$, $u'''(0) = -c/m = -2$), reproducing $t^2/2 - t^3/3$.
- Calculations (mpmath, 25 digits; one `mp.odefun` integration):
  - Impulse response: $\gamma = 1$, $\omega_d = \sqrt{5-1} = 2$, roots $-1\pm2i$ of
    $s^2+2s+5$; $G(t,\tau) = \tfrac12 e^{-(t-\tau)}\sin 2(t-\tau)$, with value $0$ and
    $t$-derivative $1/m = 1$ at $t=\tau$. Correct.
  - The antiderivative of item 3, $-\tfrac15e^{-s}(\sin 2s + 2\cos 2s)$, verified by
    differentiation; both branch formulas re-derived from $\int_0^t$ and $\int_{t-1}^t$.
  - $u(1) = 0.1971671902109190$ from the closed form, the same from the $t\ge1$ branch (so the two
    branches agree at $t=1$), the same from the quadrature $\int_0^1 G(1,\tau)d\tau$, and the same
    from `mp.odefun` integrating $u''+2u'+5u = f$ from $t=0$: $0.19716719021091903$. The printed
    $0.19716719$ is right.
  - $u(3) = -0.03610410180880736$ from the closed form and $-0.03610410180880736$ from
    $\int_0^1 G(3,\tau)d\tau$. The printed $-0.03610410$ is right, and negative as the text says.
  - Small-$t$: $u(0.01) = 4.966625997\times10^{-5}$ against $t^2/2-t^3/3 = 4.966666\times10^{-5}$ —
    agreement to the stated order. Static limit $1/k = 0.2$ confirmed.
  - Transfer function: $P(-i\omega) = k - m\omega^2 - ic\omega = 5-\omega^2-2i\omega$ confirmed,
    and independently $\int_0^\infty\tfrac12 e^{-t}\sin2t\,e^{i\omega t}dt = 1/(5-\omega^2-2i\omega)$.
    Poles $\omega = \pm2-i$ confirmed from $\omega^2+2i\omega-5=0$; real parts $\pm\omega_d$,
    imaginary part $-\gamma$. $\hat G(0) = 0.2$ and
    $\int_0^\infty G_0\,dt = 0.2$ — both as printed.
  - Peak of the response: $\omega^2 = k/m - 2\gamma^2 = 3$ re-derived by minimising
    $(k-m\omega^2)^2+c^2\omega^2$ in $\omega^2$; $\sqrt3 = 1.7320508$ and $\sqrt5 = 2.2360680$ as
    printed. The peak *value* is wrong (finding 1).
- Citations:
  - stakgold-holst-2011 §2.5 Example 10, pp. 176–177. (2.5.47) with $LE = \delta(t-\tau)$;
    $E=0$ for $t<\tau$, $E,\dots,E^{(p-2)}$ continuous at $\tau$ "(therefore all are 0 at
    $\tau+$)", $E^{(p-1)}(\tau+,\tau) = 1/a_p(\tau)$; the IVP (2.5.48) for $u_\tau$; (2.5.49)
    $E = H(t-\tau)u_\tau(t)$; the test-function verification whose boundary expression leaves only
    the $j=p-1$ term with $u_\tau^{(p-1)}(\tau)a_p(\tau)\phi(\tau) = \phi(\tau)$; the sentence
    "causality removes all arbitrariness from fundamental solutions"; and
    $u_\tau(t) = v(t-\tau)$ for constant coefficients. Every one of these is used by the unit and
    every one is on those two pages.
  - stakgold-holst-2011 §3.1, pp. 188–191. The definition of the causal fundamental solution
    $H(x-\xi)u_\xi(x)$ for merely continuous coefficients, p. 188; the differentiation
    verification and Theorem 3.1.4 with (3.1.9), p. 189; Remark 4 with (3.1.13), p. 190; Exercise
    3.1.3 — "The causal fundamental solution $E(t,\tau)$ is known as the impulse response in
    electrical engineering", (3.1.14), $-\partial F/\partial\tau = E$, and the two forms (3.1.15)
    — pp. 190–191. All match, including the unit's sentence that Stakgold and Holst use the name
    "impulse response".
  - stakgold-holst-2011 §3.2, pp. 195 and 199. (3.2.11) $g = H(x-\xi)u_\xi(x)$ with
    $u(\xi)=0$, $u'(\xi) = 1/a_2(\xi)$, and the constant-coefficient form, p. 195; Example 6, "the
    adjoint boundary conditions never coincide with the original boundary conditions" for an
    initial-value problem whatever $L$ is, p. 199. Both match.
  - arfken-2013 pp. 452–454. The remark that an initial-value problem has two conditions at one
    endpoint and that its Green's functions "will no longer be symmetric", p. 453; Example 10.1.2
    with $G = 0$ for $x<t$, $G = \sin(x-t)$ for $x>t$ (10.25), (10.26), and the causality
    observation, pp. 453–454. Match; note the unit renames Arfken's $(x,t)$ as $(t,\tau)$, which
    it says.
  - arfken-2013 pp. 999–1001. (20.104); (20.105)–(20.106) obtained by "Adopting the concept of
    causality (that the cause precedes the effect)"; Example 20.5.1's high-pass filter (20.109)
    $\varphi = i\omega RC/(1+i\omega RC)$; (20.110) $\varphi(\omega) = \int_0^\infty\Phi(t)e^{-i\omega t}dt$;
    (20.111)–(20.113) and "The present result is similar to those involving causality that were
    discussed in Section 12.8". All match, and the conventions remark's quotation of (20.110) and
    of the word "similar" is exact.
  - arfken-2013 pp. 591–593. "the dispersion relations may be taken as a consequence of causality
    and therefore are independent of the details of the particular interaction"; the hypothesis of
    a function "analytic in the upper half-plane and on the real axis"; (12.116), (12.117),
    (12.118) — which are, with the principal value, precisely the pair the unit displays; the
    Hilbert-transform naming and the Kramers–Kronig/optics framing. Match (see finding 4 for the
    one nicety).
  - arfken-2013 p. 1021, Example 20.8.5. $mX''+bX'+kX = 0$ by Laplace transform, with the
    completed square giving $\omega_1^2 = k/m - b^2/4m^2$. Matches the unit's $\omega_d$ with
    $\gamma = c/2m$.
  - rhb-2006 p. 465, Exercise 13.24. "the so-called impulse response or Green's function" of
    $T\dot x + x = \delta(t)$; part (b)'s rectangular pulse of duration $\tau$; part (c)'s limit
    $A = 1/\tau$, $\tau\to0$ giving $x(t) = T^{-1}e^{-t/T}$; part (d)'s direct Laplace route. All
    match the frontmatter and the application bullet.
- Provenance: the `original` blocks are ours. The worked example is a new one — Stakgold's
  Exercise 1.4.5 is the *undamped* $mu''+ku=f$, Arfken's Example 20.8.5 is the damped oscillator
  with no forcing (free decay from $X_0$ by Laplace transform), Arfken's Example 10.1.2 is
  $u''+u=f$, and RHB's is first order; nobody works a damped oscillator driven by a rectangular
  pulse, and the pulse-response branch formulas and all the numbers are ours. The `adapted` first
  proof follows Stakgold p. 189's verification route (differentiate $k$ times, the boundary terms
  vanish until the $p$th, which yields $f/a_p$) but recasts it for $p=2$ with its own eight steps,
  adds Step 1's uniqueness argument and Step 4's advanced-solution check, which the book does not
  have, and relegates the distributional verification to a one-sentence summary of p. 177 rather
  than reproducing it. The closest passage I compared was Step 5/6 against p. 189's displayed
  derivatives: the formulas are the same because there is only one such formula, and the notation
  and the surrounding prose are the unit's. The `adapted` second proof follows Arfken §20.5
  (20.104)–(20.110) in content but is structurally the unit's own — Arfken never does the
  analytic-continuation estimate of Step 4 — and the unit says so. Provenance labels are correct.
