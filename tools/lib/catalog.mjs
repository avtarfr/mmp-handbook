// Everything a build needs in one place: works, map, units, ledger status and the ordered tree of
// part -> chapter -> section -> units that a given build includes.
//
// A public build includes only units whose current content has passed the verification gate;
// a dev build includes everything and shows each unit's status.

import { worksById } from './works.mjs';
import { contentConfig, loadMap, loadUnits, mapPlacements, sectionIds } from './units.mjs';
import { readLedger, unitStatus } from './ledger.mjs';

export function loadCatalog({ fixtures = false, publicOnly = false } = {}) {
  const config = contentConfig({ fixtures });
  const works = worksById();
  const map = loadMap(config);
  const { units, errors } = loadUnits(config);
  const ledger = readLedger(config.ledgerFile);
  const placements = mapPlacements(map);
  const status = new Map([...units.values()].map((u) => [u.id, unitStatus(ledger, u)]));
  const included = (id) => units.has(id) && (!publicOnly || status.get(id) === 'verified');

  const tree = [];
  for (const part of map.parts || []) {
    const chapters = [];
    for (const chapter of part.chapters || []) {
      const sections = (chapter.sections || [])
        .map((section) => ({ section, units: sectionIds(section).filter(included).map((id) => units.get(id)) }))
        .filter((s) => s.units.length);
      if (sections.length) chapters.push({ part, chapter, sections });
    }
    if (chapters.length) tree.push({ part, chapters });
  }
  const includedUnits = tree.flatMap((p) => p.chapters.flatMap((c) => c.sections.flatMap((s) => s.units)));
  return { config, works, map, units, errors, ledger, placements, status, included, tree, includedUnits, publicOnly, fixtures };
}
