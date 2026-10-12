VERDICT: PASS
UNIT: var.second-variation-legendre
VERIFIER: B

## Findings
1. [minor] idea (line 65): the block is labelled `original`, but its heuristic (a variation that is small while its slope is not, so the P h'^2 term dominates) is the motivating paragraph of Gelfand-Fomin §25, p. 102, just before the Lemma. The quantitative delta, delta^2, delta^3 scaling is the unit's own and the proof it previews is already cited, so this is borderline rather than a mislabel. Fix: either cite gelfand-fomin-1963 p. 102 on the idea block (provenance=adapted), or leave as is if the editors treat generic heuristics as original.
2. [minor] application (line 143): "the action can never have a maximum at a nontrivial motion". Since L_qdotqdot = m > 0 at every point, Legendre's condition for a maximum fails along every motion, equilibria included, so "nontrivial" is unnecessary and suggests an exception that does not exist. Fix: drop "nontrivial" (for example "can never have a weak maximum at any motion").

## Checked
- Counterexample search: Statement part 2 tested against the double-well integrand (F_zz(1/2) = -1, and the line is indeed beaten by y0 + 0.1 sin(pi x), so no counterexample to the necessary condition). Endpoint case x0 in {a, b} is handled by continuity (step 1 moves inside). Edge case M = 0 is handled explicitly. Checked that Part 2 needs only C^2 (it never integrates by parts) and Part 3 needs C^3 and y in C^2, as stated. Weak-minimum hypothesis is used only for epsilon*h_delta with h_delta fixed, so the bumps' unit slope does not break the argument. No counterexample found.
- Calculations (sympy, .venv/bin/python):
  - G1 = int_{-1}^{1} g'(s)^2 ds for g = (1-s^2)^2: 256/105 (matches).
  - Remark: 2 int_0^{2pi} (cos^2(x/2)/4 - sin^2(x/2)) dx = -3pi/2 (matches).
  - Example: expansion (u^2+u-3/4)^2 = u^4+2u^3-u^2/2-3u/2+9/16 (difference 0); J[y0+eps sin pi x] = 9/16 - pi^2 eps^2/4 + 3 pi^4 eps^4/8 (matches); second derivative at 0 = -pi^2/2 (matches); threshold sqrt6/(3pi) = 0.259899 (matches 0.2599); J at eps = 0.1 = 0.54147883 (matches 0.54148); F_zz = 12z^2-4, value -1 at z = 1/2 (matches); Legendre region |z| >= 1/sqrt3 (matches).
  - Part 3 integration by parts and Part 1 Taylor step re-derived by hand: correct.
- Citations:
  - gelfand-fomin-1963 pp. 99-104: Thm 1 (second variation nonnegative at a minimum) on p. 99 with proof p. 100; formula (9) p. 101; (10)-(11) p. 102 with P = (1/2)F_y'y', Q = (1/2)(F_yy - d/dx F_yy'), which confirms the unit's factor-of-two convention note; Lemma and Legendre's theorem p. 103; local-versus-global discussion (great circle) p. 104. All locators correct and supportive.
  - evans-2010 pp. 431-432: §8.1.3 second variation as i''(0) >= 0 (p. 431, formula (11)); rescaled oscillating test function giving the convexity condition (14) on p. 432. Correct; the application's cite of p. 432 for the scalar case is supported.
- Provenance: Proof Part 2 compared with GF Lemma p. 103 (GF uses a sin^2 bump of height 1 on the integrated form (10), which needs third derivatives) and Evans p. 432 (periodic sawtooth times cutoff). The unit uses a polynomial bump of height and width delta on the un-integrated form, an independent combination of the two ideas, properly marked adapted with both cited; the wording and structure are its own. Definition and statement are adapted and cited; the wording is rewritten. Remark counterexample (y'^2 - y^2 on [0, 2pi]) and double-well example are not in the cited pages: `original` is fair. No `resembles` warnings from the overlap checker.
- Automated checks: `ok`, no warn lines for this unit.
- Style: idea precedes proof; no "clearly"/"obviously"; worked example with checkable numbers; hypotheses named in the remark.
