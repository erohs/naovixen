# Decisions

Only decisions whose reasoning cannot be recovered from the code, and that someone might
otherwise undo by mistake. Versions live in `pnpm-lock.yaml`.

## A static Astro site, not a framework app with a CMS

The site was a TanStack Start and React monorepo reading from Sanity. For one author and
seven mostly static pages, the CMS, the package boundaries and about 160 KB of client script
cost more than they gave. It is now one Astro package that builds to plain HTML, with content
as MDX in the repo. Publishing is a push; a branch gets a preview on Cloudflare. The old code
is at the `pre-astro` tag.

Blog search runs in the browser over `/blog/search.json`, with the old matching rules. Without
script, the topic pages stand in for it.

## Client-side page changes that keep the header

Pages work fully without script. The narrow-screen menu is a modal `<dialog>` opened by an
invoker command (`commandfor`/`command`), so opening, focus, Escape and the inert page behind
it need none. Without script a link is an ordinary page load and the menu is simply closed on
the next page.

With script, Astro's `<ClientRouter />` changes pages in place, and `navigation.ts` swaps
everything except `<header>`. The open menu and both menu buttons are the same elements on the
next page, so following a link from the menu changes the address at once and the menu slides
away over the new page with its own CSS transitions. Native cross-document view transitions
could do this without script, but Firefox has not shipped them and they cannot be polyfilled.
Revisit when it does. The site once carried the slide across a full page load by replaying it
on the next page; that flashed, stuttered and doubled the header row, so do not go back to it.

The menu starts closing as soon as a page change starts, so a slow or interrupted change can
never leave it open. The router's view transition still runs, made instant by CSS that applies
only during a page change: WebKit crashes when a modal dialog closes during a view transition,
and skipping the transition instead leaves it crashing the next time the menu closes. Do not
put `transition:animate` on `<html>`: it renames the root snapshot, and the theme switch's
circular reveal stops matching. Astro adds a route announcer to the body on every change,
expecting the body to be replaced, so the swap removes the last one. A bundled script that sets
up a page connects on `astro:page-load`.

One script is inlined in the head: `apply-theme.js`, before first paint, applies a chosen
theme and marks that script runs, so the theme switch can show. Everything else is bundled
into files (`assetsInlineLimit: 0`), as the content security policy in `public/_headers`
allows inline scripts only by their hashes. An end-to-end test hashes each inline script as built and fails if the
policy does not allow it.

## One stylesheet for every page

`cssCodeSplit` is off, so every page links the same stylesheet, about 9 KB compressed. With
a stylesheet per page, a page change in place had to add the next page's stylesheets, which
the browser applies a moment after the new page first paints, so its layout briefly fell
apart, and the router waited for them before changing pages at all. A computed-style
comparison of every element on every page found no difference between the two builds.

## The closed menu stays rendered

Firefox and Safari take a closed dialog off the screen at once, before an exit transition can
run, and the `overlay` property that prevents that is Chromium's alone. So the menu sets
`display: block` when closed and hides with `visibility` once its slide has finished. A hidden
dialog is out of the tab order and the accessibility tree, and with page styles off the
browser's own stylesheet still hides it. The menu draws its own copy of the header's row, and
only one of the two is visible at a time. `menu.ts` gives Safari's opening menu focus, which
Safari withholds from a dialog that was hidden while closed, and wraps Tab inside the menu.

## The theme follows the system setting until the reader chooses

Colours are `light-dark()` pairs, so the system setting applies with no script, code blocks
included. The switch sets `data-theme`, which sets `color-scheme`, and remembers the choice in
`localStorage`. It is hidden without script, when there would be nothing to switch.

## Experience and skills are TypeScript lists, not collections

A `file()` collection returns its entries sorted by id, not in file order, and the timeline
and skill groups are ordered by meaning. A typed list keeps its order and is as easy to edit.

## `compressHTML` is `true`

Astro 7 defaults to `'jsx'`, which drops the space where markup breaks across lines between
inline elements. Prettier breaks long lines, so copy lost its spaces ("NaomiShore"). The
classic setting collapses whitespace to one space instead. Where even one space is wrong, as
between a surname and its paw, the parent is a flex container, which ignores it.

## Fonts use `font-display: optional`

Every page is a new document, so a font swapping in after the first paint moved the
right-aligned navigation on each page change. `optional` uses a cached or preloaded font from
the first frame and otherwise keeps the size-matched fallback for that page.

## Icon defaults have no specificity

An icon's own size and the size its parent gives it tied on specificity, so stylesheet order
decided, and that order differs between dev and a build. The icon's defaults sit in `:where()`.

## No-script checks strip scripts rather than switch them off

With script disabled, Playwright's own timers stop, so axe hangs and clicks cannot wait for an
element to settle. Accessibility is scanned with script on, and again on each page served with
its scripts removed, which renders exactly as it does with script off.

## TypeScript 6, not 7

`@astrojs/check` and `typescript-eslint` do not support TypeScript 7 yet. Revisit when both do.

## Dependencies must be old enough to have been noticed

pnpm refuses packages published in the last few days. When it offers to add something to
`minimumReleaseAgeExclude`, pin the previous release instead: a fresh publish is the shape of
a compromised release, and the gate only works if it is not routinely waived.

## Tokens normalise the prototype rather than copy it

The Claude Design prototype used around 35 spacing values, 30 type sizes and a dozen
hand-drawn radii. The tokens collapse them onto short scales, so a spacing or size that differs
from the prototype by a pixel or two is intentional.

Space sits on an 8px grid with a 4px half step, plus fluid steps for the space below a heading,
between sections and at a page's end. Corners come in mirrored pairs (`--radius-medium` and
`--radius-medium-alternate`), so neighbouring boxes do not look stamped from one mould.

**One accent orange for fills, two for text.** `#E8894A` fills buttons in both themes, with
dark text on it. Orange text cannot be one colour: a value dark enough for 4.5:1 on the light
surface is too dark for 4.5:1 on the dark one. So `--color-text-accent` is `#A84C16` in light
and `#E8894A` in dark.

**Lines and shadows are hard and near the text colour**: offset shadows, not soft greys. In
dark they follow the design's warmer creams: text and shadows `#FBF1E4`, lines a step dimmer
at `#F3E2CC`. Brighter cream there glared, so do not merge them back.

## Reduced motion is CSS only

Every animation is CSS, and each stylesheet answers `prefers-reduced-motion` itself.
