// Structural checks across units: map <-> files, prerequisite and cross-reference targets, cycles.

import { mapPlacements, sectionIds } from '../lib/units.mjs';

export function checkGraph(units, map) {
  const errors = [];
  const warnings = [];
  const placements = mapPlacements(map);
  const seen = new Map();
  for (const part of map.parts || [])
    for (const ch of part.chapters || [])
      for (const sec of ch.sections || [])
        for (const id of sectionIds(sec)) {
          if (seen.has(id)) errors.push(`map: ${id} is listed twice (${seen.get(id)} and ${part.id}/${ch.id}/${sec.id})`);
          seen.set(id, `${part.id}/${ch.id}/${sec.id}`);
          if (!units.has(id)) warnings.push(`map: ${id} (${part.id}/${ch.id}/${sec.id}) has no unit file yet`);
        }
  for (const [id, u] of units) {
    if (!placements.has(id)) errors.push(`${u.rel}: unit ${id} is not placed in map.yaml`);
    for (const p of u.prereqs) {
      if (p === id) errors.push(`${u.rel}: unit lists itself as a prerequisite`);
      else if (!units.has(p) && !placements.has(p)) errors.push(`${u.rel}: unknown prerequisite ${p}`);
      else if (placements.has(p) && placements.has(id) && placements.get(p).order > placements.get(id).order) {
        warnings.push(`${u.rel}: prerequisite ${p} comes after ${id} in the map`);
      }
    }
    for (const r of u.refs) if (!units.has(r) && !placements.has(r)) errors.push(`${u.rel}: :ref to unknown unit ${r}`);
  }
  // Cycle detection over prerequisites (iterative DFS with colouring).
  const colour = new Map();
  for (const start of units.keys()) {
    if (colour.get(start)) continue;
    const stack = [[start, 0]];
    const path = [];
    while (stack.length) {
      const top = stack.at(-1);
      const [id, i] = top;
      if (i === 0) {
        colour.set(id, 1);
        path.push(id);
      }
      const prereqs = units.get(id)?.prereqs || [];
      if (i < prereqs.length) {
        top[1]++;
        const next = prereqs[i];
        if (colour.get(next) === 1) errors.push(`prerequisite cycle: ${[...path.slice(path.indexOf(next)), next].join(' -> ')}`);
        else if (!colour.get(next) && units.has(next)) stack.push([next, 0]);
      } else {
        colour.set(id, 2);
        path.pop();
        stack.pop();
      }
    }
  }
  return { errors, warnings };
}

// All prerequisites of the given ids (transitively), in map order, excluding the ids themselves.
export function prerequisiteClosure(units, ids, placements) {
  const out = new Set();
  const visit = (id) => {
    for (const p of units.get(id)?.prereqs || []) {
      if (!out.has(p)) {
        out.add(p);
        visit(p);
      }
    }
  };
  ids.forEach(visit);
  ids.forEach((id) => out.delete(id));
  return [...out].sort((a, b) => (placements.get(a)?.order ?? 1e9) - (placements.get(b)?.order ?? 1e9));
}
