# Decisions

Only decisions whose reasoning cannot be recovered from the code, and that someone might
otherwise undo by mistake. Versions live in `pnpm-lock.yaml`; setup steps live in the
README.

## TypeScript 6, not 7

TypeScript 7 shipped without a stable compiler API, so typescript-eslint cannot run on it
(`typescript >=4.8.4 <6.1.0`). Upgrading loses every type-aware rule and
`@typescript-eslint/naming-convention`, which is what enforces the naming conventions.

**Revisit when** typescript-eslint admits TypeScript 7.

## ESLint plugins are the maintained forks

`eslint-plugin-jsx-a11y` (last published October 2024) and `eslint-plugin-react` both cap
at ESLint 9. Replaced by `eslint-plugin-jsx-a11y-x` — same maintainers as
`eslint-plugin-import-x`, which we already use — and `@eslint-react/eslint-plugin`. Do not
reinstate the originals to "fix" a rule name.

## Enums are plain TypeScript enums

House style. Consequences: `erasableSyntaxOnly` must stay off, and `const enum` is banned
because Vite and esbuild transpile one file at a time and cannot resolve it.

## Dependencies must be old enough to have been noticed

pnpm refuses packages published in the last few days. When it offers to add something to
`minimumReleaseAgeExclude`, pin the previous release instead — a fresh publish is the
shape of a compromised release, and the gate only works if it is not routinely waived.
Exempt a package only for a specific needed fix, and say which and why.

## `routeTree.gen.ts` is committed

It is generated, but `typecheck` and `build` are separate Turborepo tasks. On a fresh
clone `typecheck` can run first, and without the file every `createFileRoute` call fails
to compile. `pnpm build` rewrites it if it drifts.

## Sanity for the blog

The requirement is publishing without a redeploy, which a git-based blog cannot meet.
Coupling is confined to one adapter behind `IBlogRepository`.

## `AGENTS.md` belongs to Turborepo

`turbo` writes and re-adds it when it detects an agent. Committed so it does not dirty the
working tree. Claude Code reads `CLAUDE.md` in preference, so it costs no context. Opt out
with `"agentGuidance": false` in `turbo.json`.

## Tokens normalise the prototype rather than copy it

The Claude Design prototype used around 35 spacing values, 30 type sizes and a dozen
hand-drawn radii. The token source collapses them onto short scales, so a spacing or size
that differs from the prototype by a pixel or two is intentional. Notably, its 10px paddings
became 12px.

Space sits on an 8px grid with a 4px half step, plus fluid steps for the space below a
heading, between sections and at a page's end. Corners come in mirrored pairs
(`--radius-medium` and `--radius-medium-alternate`), so neighbouring boxes, such as a
primary and a secondary button, do not look stamped from one mould. Restored after the
September 2026 design review; the first pass dropped them.

**One accent orange for fills, two for text.** `#E8894A` fills buttons in both themes, with
dark text on it. Orange _text_ cannot be one colour: a value dark enough for 4.5:1 on the
light surface is too dark for 4.5:1 on the dark one. So `--color-text-accent` is `#A84C16`
in light and `#E8894A` in dark.

**Lines and shadows are the text colour** in both themes — hard offset shadows, not soft
greys. That is the comic-book look; do not soften it.

## Reduced motion is CSS only

Every animation is CSS, and each stylesheet answers `prefers-reduced-motion` itself, so no
JavaScript reads the preference. Add a service behind an injected media query only when a
script-driven animation arrives.

## The theme is set by an inline script, not by the server

The plan had the server read the theme cookie. A prerendered page never sees a cookie, and
reading one per request would stop the HTML being cached. Instead a small script inlined in
`<head>` (`themeBootScript` in `theming`, rendered with TanStack's `ScriptOnce`, as its docs
recommend) reads the cookie or the system setting and sets `data-theme` before first paint.

The server always renders the same assumed state, and `useTheme` hydrates against it before
moving to the real one, so React sees no mismatch. Without JavaScript, a
`prefers-color-scheme` block in the generated tokens follows the system setting. The cookie
stays, so a server could still read it one day.

## Routes load through an injected repository

Loaders read `context.blogRepository`, an `IBlogRepository` handed to the router. Until Phase
7 it is an `InMemoryBlogRepository` holding placeholder posts; Sanity replaces it without a
route changing.

## Some pieces are drawn to the design's exact numbers

The card's folded corner, the speech bubble, the tag, the heart, the paw and the motion lines
are graphics, so their sizes are the design's own rather than the spacing scale's, as Naomi
asked. Colours still come from the theme, so they follow light and dark. Small controls (the
theme button, back-to-top, link tiles) rest on a 3px shadow, `--shadow-small`, where the
design's buttons use 4px.

## Two looks for a link

A link in content has a solid accent underline that turns wavy under the pointer. A link in
a list of places to go (header, footer) has no underline until the pointer is on it or it is
the current page. The second is a modifier class, `navigationLinkClassName`, that navigation
lists pass to whatever link component renders them, since that may be a router's link.

## Router links match exactly

TanStack Router marks a link active by path prefix and then always sets
`aria-current="page"`, which would call "All posts" the current page on every post. The
app's router links (`RoutedLink`, `RouterLinkIcon`, `RouterLinkButton`) match exactly and
never add the router's `active` class. A section link on a page beneath it is marked by
NavigationList instead.

## Lighthouse is measured behind compression

`vite preview` serves without compression, which alone costs 5–10 performance points on a
throttled mobile run. Local Lighthouse runs go through a compressing proxy, as the CDN will
compress in production.

## Fewer packages, split by reuse

The first cut had 16 workspaces, one per layer of an imagined component library, with a
file per interface and a showcase per component. For one site it was mostly ceremony, so
on 2026-09-30 it was cut to ten: a package exists only when more than one app could use
it, and anything only the portfolio uses lives in the portfolio. `models` dissolved into
the packages that own each type; `layout` became CSS in each owner; `brand` and
`site-shell` folded into `components` and `blocks`. Do not split a package back out for
tidiness alone.

## Tests check logic only

A test that a prop or class name reaches the DOM fails only when the code is rewritten,
never when it breaks. Components without branches have no tests; axe runs once over the
design system instead of in every component's spec.

## Open

- **Lighthouse CI** (`@lhci/cli`) has not been published since June 2025. Confirm it still
  works before wiring it into CI, or measure with Playwright instead.
- **TanStack Start** is formally a Release Candidate despite its version number. The
  architecture keeps framework code inside `apps/`, so switching would not touch the
  packages.
