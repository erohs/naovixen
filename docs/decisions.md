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

## Two small inline scripts, and two bundled ones

Pages work fully without script. The narrow-screen menu is a modal `<dialog>` opened by an
invoker command (`commandfor`/`command`), so opening, focus, Escape and the inert page behind
it need none. What script adds:

- `apply-theme.js`, inline before first paint, applies a chosen theme and marks that script
  runs, so the theme switch can show.
- `menu.js`, inline, gives Safari's opening menu focus, which Safari withholds from a dialog
  that was hidden while closed. It also carries the menu's closing slide across a page change:
  the click starts the slide and records when, and the next page resumes it from that point
  with a negative `animation-delay`. Native cross-document view transitions would do this, but
  Firefox has not shipped them and they cannot be polyfilled. Revisit when it does.
- `theme-toggle.ts` and `post-search.ts` are bundled modules, loaded only where they are used.

The content security policy in `public/_headers` allows the inline scripts by their hashes. A
unit test fails if either changes and its hash does not.

## The closed menu stays rendered

Firefox and Safari take a closed dialog off the screen at once, before an exit transition can
run, and the `overlay` property that prevents that is Chromium's alone. So the menu sets
`display: block` when closed and hides with `visibility` once its slide has finished, exactly
as the old panel did. A hidden dialog is out of the tab order and the accessibility tree, and
with page styles off the browser's own stylesheet still hides it.

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
