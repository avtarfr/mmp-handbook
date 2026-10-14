# Privacy

This handbook is a set of static files. There is no account to make, no form to fill in and no
server of ours anywhere: every page you see was written to disk when the site was built, and your
browser does the rest.

## What we collect

Nothing. The site carries no analytics, no tracking pixels, no advertising, no embedded videos or
fonts from anyone else, and no third-party scripts of any kind. Every script, stylesheet, font and
search index it loads comes from this same site. Nothing you do here is reported to us, because
there is nothing here to report to.

## Cookies

None. The site sets no cookies at all.

## What your browser stores

Four things are kept in your browser's local storage so the site remembers them between visits.
They never leave your machine, they are not readable by any other site, and we never see them.

| Key | What it holds |
| --- | --- |
| `mmp-basket` | the unit ids you have ticked for a PDF |
| `mmp-theme` | whether you chose light or dark |
| `mmp-layers` | which layers (proofs, examples, applications) your PDF includes |
| `mmp-pdf-title` | the title you typed for your PDF |

Clearing site data in your browser deletes all four. The site works without them &mdash; you simply
lose the basket and the theme between visits &mdash; so blocking storage breaks nothing you need in
order to read.

## Search

Search runs entirely in your browser. The index is a set of static files served from this site;
your browser fetches the parts it needs and matches your query locally. Your query is never sent
anywhere as a query &mdash; there is nothing to send it to.

## PDFs

The PDF is assembled in your browser from pages already downloaded, and your browser's own print
dialogue saves it. The list of units goes into the print page's address as a parameter, which means
it can appear in your browser history like any other address. Nothing is uploaded, and no PDF is
ever built on a server.

## Caching

Pages are public, identical for everyone, and served with ordinary caching. That matters in two
directions, and both are worth stating plainly:

* **Nothing personal can be cached,** because nothing personal is ever sent. The server receives a
  request for a page and returns the same bytes it returns to everybody. Your basket, your theme and
  your PDF title stay in your browser and are never part of a request.
* **Pages you read may persist on your device.** Your browser caches them, as it caches any site,
  and a shared or managed machine may keep that cache. On a device you do not control, a private
  window and clearing site data afterwards is the usual precaution &mdash; the same one you would
  take with any reference site.

Because every response is public and identical, there is nothing user-specific for an intermediate
cache to leak or mix up.

## Hosting

The site is hosted on GitHub Pages and served through GitHub's content delivery network. We have no
access to server logs and request none, but GitHub necessarily handles the request itself: the
connection carries your IP address and the usual request headers to them, and what they do with
that is governed by their
[privacy statement](https://docs.github.com/site-policy/privacy-policies/github-privacy-statement),
not by this page. Reading the site through a VPN or Tor is the only way to change that, and it works
fine.

## Links out

Citations link to publishers, to Creative Commons and to GitHub. Following one puts you on their
site under their terms; we cannot speak for any of them.

## Changes

This page is part of the site's source. Its history &mdash; every change, with its date &mdash; is
in the repository, so you need not take this version on trust.
