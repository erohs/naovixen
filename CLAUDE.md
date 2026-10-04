# naovixen

Naomi Shore's portfolio. pnpm workspaces and Turborepo, TanStack Start, TypeScript.

## Working rules

- **Check a tool's current docs before using it.** This stack moves faster than training
  data. Installed versions are in `pnpm-lock.yaml`, not in a document.
- **Ask before deviating** from anything here. Never silently substitute an alternative.
- **Readability over cleverness.** Functions 25 lines, files 400, both enforced. Comments
  only where the code genuinely cannot speak for itself.
- **WCAG 2.2 AA is the floor.** If a design detail cannot be built accessibly, ask.
- **Every current browser gets the same experience.** Build only on features all of
  Chromium, Firefox and Safari ship. Where one lags, use an approach that works in all
  three rather than enhancing for one; if none exists, ask.

## Delegating work

A subagent writes its findings to `notes/<task>.md` as it goes, not only in its final
report. If it runs out of context the work survives on disk and the next run continues
from the file instead of starting over. `notes/` is git-ignored.

## Content

Anything factual about Naomi comes from `source-material/cv.pdf` (git-ignored) or from
Naomi. Never invent a project, a handle, a testimonial or a bio. The prototype's
placeholder copy never ships.

Never publish her phone number, home address or personal email unless she asks.

## Design reference

`design-reference/` (git-ignored) holds Claude Design exports. It is a picture, not a codebase.

Take layout, spacing, hierarchy, colour, typography and motion from it. Never copy its
CSS, markup or JavaScript — rebuild from our own tokens and components with the simplest
CSS that gets the same result. If a detail needs a hack to reproduce, ask rather than
copy it.

## Architecture

```
apps/portfolio        naovixen.com
apps/design-system    every token and component rendered, run locally, never deployed
apps/studio           Sanity Studio for posts and projects, deployed to Sanity's hosting
packages/nvpack       eslint, tsconfig and vitest presets
packages/utilities    framework-free helpers several packages use, the shared translator
                      and the live announcer
packages/theming      tokens, reset, base styles, fonts, the theme controller
packages/cms          the Sanity blog and project repositories, and the types they return,
                      one interface per content block
packages/seo          head tags, JSON-LD, the sitemap and the feed, with the types they read
packages/components   every generic React component, from Button to Header, plus icons and
                      the DOM behaviours they share
packages/rich-content renders a body from cms, each block as the component it is named for
```

Dependencies point one way, from apps down, and never sideways between siblings. Lint
fails the build if that is broken. A package is justified by reuse: if only the portfolio
would use something, it lives in the portfolio.

Logic packages (`utilities`, `theming`, `cms`, `seo`) never import React. They run
unchanged in a browser, on a Worker, and in a test with no DOM: anything needing a browser
capability declares an interface and has an implementation injected. The base tsconfig
omits the `DOM` lib, so reaching for `window` is a compile error. Types live with the
package that owns them; a package that only reads a shape declares the small one it needs.

`components` pass their element's intrinsic props and ref through and know nothing of
routers, content or brand. Each one renders what its name promises, built from the element
a developer would expect, and behaves the way that pattern conventionally does, in our
styling. Site pieces (Header, Footer) belong there, taking their logo, links and content as
props. Brand flourishes with no conventional counterpart, such as the logo and the
exclamation bubble, live in the portfolio. Layout is plain CSS in the owner's stylesheet, not a
component: nothing like a ButtonGroup or a CardGrid, which only arranges its children. A
grouping is a component when the HTML gives it a meaning of its own, as a radio group has.

One job per component, down one path: a Button acts, a LinkButton navigates, and neither
does both. No near-copies either: a look is a variant, not a second component. A component
with parts is a compound whose parts hang off it (`Button.Icon`, `Footer.Column`), so its
children are those parts and its text, and no prop repeats what the markup already says.

Layers: services and controllers (logic, dependencies injected) → components (props in,
semantic HTML out) → routes (load, map, compose). No custom hooks: logic that needs no React
lives in a service, a controller or a function, so any framework can reuse it. A component
binds one with React's own hooks (`useSyncExternalStore` on a controller's `getState()` and
`subscribe(listener)`) or a ref callback that returns its cleanup.

Shared behaviour is generic, not written per component. Framework-free logic, such as the
`LiveAnnouncer`, goes in `utilities` with its capabilities injected. Behaviour that needs the
DOM, such as `dismissOnEscape` or `focusController`, goes in `components`, one folder each,
ready for the next dialog, dropdown or combobox. Native HTML comes first: a modal is a
`<dialog>` opened with `showModal()`, not a re-implementation of one. An overlay that must
leave part of the page showing and usable above it, as the header's menu leaves the header
row, is a disclosure that makes the rest of the page inert with `inertOutside`.

## SOLID

The architecture above is dependency inversion already applied. Keep the rest with it.

- **One reason to change.** One export per file, one concern per folder, short functions.
  If a name needs "and", it is two things.
- **Extend rather than edit.** New behaviour arrives as a new implementation of an
  existing interface, not another branch in a growing conditional. A second CMS is a new
  repository class, not an edit to the old one.
- **Implementations are substitutable.** Anything implementing an interface honours its
  contract, including when it does nothing: a no-op theme storage must be safe to pass in.
- **Interfaces stay small.** A consumer depends on the methods it calls, not on a
  service's whole surface. Split a fat interface rather than making callers ignore half.
- **Depend on interfaces, never concretions.** Logic declares what it needs; the caller
  supplies it.

## Folders

A component, service, controller or route owns a kebab-case folder. Its root holds the
main file. Everything else goes in `interfaces/`, `types/`, `enums/`, `constants/`,
`functions/`, `styles/` or `tests/`, created only when there is something to put in it.
A part of a compound, such as a footer's column, sits beside the main file and stays out
of the barrel. Variants of one component sit flat in its folder, sharing its subfolders:
`button/` holds Button, LinkButton, BackToTop and SkipLink. Package-level code follows the same
shape under `src/`, except in the React packages, whose `src/` holds component and behaviour
folders and nothing else.

One component per file, enforced by lint.

An app's `src/` is laid out by who uses what:

- `routes/` holds route files and nothing else. A route only loads, builds the head and
  hands props to its page, so leaving TanStack means rewriting this folder alone.
- `pages/` mirrors the URLs: `/blog/$slug` is `pages/blog/post/`. A page folder holds the
  page, what only it uses, and its child pages. Each section owns a folder under
  `sections/`, with its parts, constants and styles.
- `components/` holds what two or more pages share. Extract a component only when
  something reuses it, and when it is generic enough for another site, put it in
  `components` instead.
- `features/<domain>/` holds logic two or more routes share, grouped by what it is about
  (`blog`, `preview`, `seo`), never by kind. A service sits in its feature as a folder.

Nothing app-wide sits in a flat `src/constants/` or `src/functions/`.

One barrel per package, `src/index.ts`. No nested index files, no re-export chains.

Something used by one owner lives with that owner. Once a second needs it, move it up
rather than importing sideways. A component composing another imports it directly: that
is the design, not a sideways dependency.

Names say what is inside. No `core`, `common`, `shared` or `helpers`; `utilities` is the
one package of loose helpers, and only for framework-free functions several packages use.

## Text and translation

No user-facing string is written in code. Every package or app that shows text keeps it in
`resources/<locale>.json` at its root and reads it through i18next, one namespace each,
through its `translate` constant. Never build a sentence by concatenation: a whole message
with `{{placeholders}}` and plural keys (`_one`, `_other`), so a translator can reorder it.
Words that need markup keep it in the message (`University · <strong>First</strong>`,
`Email <email>{{address}}</email>`) and render through `FormattedMessage`.

## Announcements

A live region sits beside the thing it speaks for, rendered empty from the first paint, and
speaks through a `LiveAnnouncer`. The app's one global region is for page-wide news only,
such as a page loading or something saved. Its messages leave the page within five minutes.

## Commits

Conventional Commits, scoped to the package: `feat(components): add ThemeToggle`.

Never commit `source-material/`, `notes/`, `.env`, or anything holding personal details.

## Conventions

`.claude/rules/` holds the detail, each file scoped to the files it applies to and
complete on its own topic: `typescript.md`, `react.md`, `testing.md`, `styles.md`.
