// HTML templates for the static site. Plain template literals; every dynamic value is escaped.

import { escapeHtml as e } from '../lib/render.mjs';

export const SITE_TITLE = 'Mathematical Methods Handbook';

// What a shared link shows. `siteUrl` is the absolute address of the deployed site (the build's
// --site-url); without it the tags that must be absolute -- og:url, og:image -- are left out rather
// than emitted wrong, and the rest still work.
function shareTags({ base, title, description, path, siteUrl }) {
  const full = title === SITE_TITLE ? title : `${title} · ${SITE_TITLE}`;
  const tags = [
    `<meta name="description" content="${e(description)}">`,
    `<meta property="og:type" content="website">`,
    `<meta property="og:site_name" content="${e(SITE_TITLE)}">`,
    `<meta property="og:title" content="${e(full)}">`,
    `<meta property="og:description" content="${e(description)}">`,
  ];
  if (siteUrl) {
    tags.push(`<meta property="og:url" content="${e(siteUrl + (path || ''))}">`);
    tags.push(`<meta property="og:image" content="${e(siteUrl)}assets/share.png">`);
    tags.push(`<meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">`);
    tags.push(`<meta property="og:image:alt" content="${e(SITE_TITLE)}">`);
    tags.push(`<meta name="twitter:card" content="summary_large_image">`);
  } else {
    tags.push(`<meta name="twitter:card" content="summary">`);
  }
  tags.push(`<link rel="icon" href="${base}assets/icon.svg" type="image/svg+xml">`);
  tags.push(`<link rel="apple-touch-icon" href="${base}assets/icon-180.png">`);
  tags.push(`<meta name="theme-color" content="#f5f3ef" media="(prefers-color-scheme: light)">`);
  tags.push(`<meta name="theme-color" content="#151913" media="(prefers-color-scheme: dark)">`);
  return tags.join('\n');
}

export function layout({ base, title, body, page = '', dev = false, head = '', preview = false, description = '', path = '', siteUrl = '' }) {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${e(title === SITE_TITLE ? title : `${title} · ${SITE_TITLE}`)}</title>
${shareTags({ base, title, description, path, siteUrl })}
<link rel="stylesheet" href="${base}assets/katex/katex.min.css">
<link rel="stylesheet" href="${base}assets/style.css">
<meta name="referrer" content="strict-origin-when-cross-origin">
<!-- Clickjacking. GitHub Pages cannot send an X-Frame-Options or frame-ancestors header, and
     frame-ancestors is ignored in a meta tag, so the defence has to run in the page: hide
     everything up front, and reveal it only once we know we are the top window. A framed page
     therefore shows nothing to overlay. The noscript rule restores the page for readers with
     scripting off, who cannot be clickjacked into a click this way in the first place. -->
<style id="framed">html{display:none}</style>
<noscript><style>html{display:block}.theme-toggle{display:none}</style></noscript>
<script>
if (self === top) { const s = document.getElementById('framed'); if (s) s.remove(); }
else { try { top.location = self.location } catch { document.documentElement.style.display = 'none' } }
try{const t=localStorage.getItem('mmp-theme');if(t)document.documentElement.dataset.theme=t}catch{}
</script>
${head}
</head>
<body class="page-${page}" data-base="${base}">
${preview ? '<p class="preview-note">Private preview &mdash; not published. Please don\'t pass the link on.</p>' : ''}
<header class="site-head">
  <a class="site-name" href="${base}">${SITE_TITLE}</a>
  ${dev ? '<span class="dev-flag" title="Development build: unverified units are shown">dev build</span>' : ''}
  <nav>
    <a href="${base}about/">About</a>
    <a href="${base}bibliography/">Sources</a>
    <a href="${base}provenance/">Provenance</a>
    ${dev ? `<a href="${base}status/">Status</a>` : ''}
    <a class="basket-link" href="${base}basket/">PDF basket <span class="basket-count" hidden></span></a>
    <button class="theme-toggle" type="button" aria-label="Switch theme"><span class="theme-toggle-label">Theme</span></button>
  </nav>
</header>
<main>
${body}
</main>
<footer class="site-foot">
  <p>Every block is labelled <span class="badge badge-original">Original</span>, <span class="badge badge-adapted">Adapted</span> (our wording, following the cited work) or <span class="badge badge-quoted">Quoted</span> (short verbatim excerpt). See <a href="${base}provenance/">provenance</a>.</p>
  <p>Text licensed under <a href="https://creativecommons.org/licenses/by-sa/4.0/" rel="license">CC BY-SA 4.0</a>, except Quoted blocks, which remain under their original copyright.</p>
  <p>Reviewed, not guaranteed: if you find a mistake, <a href="${base}about/#corrections">please report it</a>.</p>
  <p class="foot-links"><a href="${base}about/">About</a> &middot; <a href="${base}provenance/">Provenance</a> &middot; <a href="${base}privacy/">Privacy</a> &middot; <a href="${base}bibliography/">Sources</a></p>
  <p class="foot-author">Maintained by <a href="https://avtarfr.github.io/">Sumangalam Avtar Sharma</a></p>
</footer>
<script src="${base}assets/basket.js" defer></script>
</body>
</html>
`;
}

export function provenanceLegend() {
  return `<ul class="legend">
  <li><span class="badge badge-original">Original</span> written for this handbook, with no specific source.</li>
  <li><span class="badge badge-adapted">Adapted</span> rewritten in our own words; the block names the work and pages it follows.</li>
  <li><span class="badge badge-quoted">Quoted</span> a short verbatim excerpt, cited to the page.</li>
</ul>`;
}

export const STATUS_LABEL = { verified: 'Verified', draft: 'Draft', 'needs-human': 'Held for review' };
