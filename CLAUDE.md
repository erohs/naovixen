# naovixen

Naomi Shore's portfolio. pnpm workspaces and Turborepo, TanStack Start, TypeScript.

## Working rules

- **Check a tool's current docs before using it.** This stack moves faster than training
  data. Installed versions are in `pnpm-lock.yaml`, not in a document.
- **Ask before deviating** from anything here. Never silently substitute an alternative.
- **Readability over cleverness.** Functions 25 lines, files 400, both enforced. Comments
  only where the code genuinely cannot speak for itself.
- **WCAG 2.2 AA is the floor.** If a design detail cannot be built accessibly, ask.

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

`design-reference/` holds a Claude Design export. It is a picture, not a codebase.

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
packages/utilities    small framework-free helpers several packages use
packages/theming      tokens, reset, base styles, fonts, the theme controller
packages/cms          the Sanity blog and project repositories, and the types they return
packages/seo          head tags, JSON-LD, the sitemap and the feed, with the types they read
packages/components   every React component, from Button to Header, plus icons and the theme toggle
packages/rich-content renders Portable Text content blocks with our components
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
routers or content. Larger pieces compose smaller ones in the same package; brand and site
pieces (Logo, Header, Footer) belong there too, taking their links and content as props so
any naovixen site can use them. Layout is plain CSS in the owner's stylesheet, not a
component.

Variation comes from composition, never from a switch: LinkIcon is Link plus Icon, not a
`kind` prop on Link. A consumer that wants something different composes its own.

Layers: services and controllers (logic, dependencies injected) → hooks (thin React
bindings, no logic) → components (props in, semantic HTML out) → routes (load, map,
compose). Controllers expose `getState()`, `subscribe(listener)` and intent methods, so a
hook binds one with `useSyncExternalStore` and adds nothing of its own.

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
Package-level code follows the same shape under `src/`, except in the React packages,
whose `src/` holds component folders and nothing else.

In an app, `pages/<page>/` holds a page. Sections only that page uses are unexported
functions in the page's own file, not folders of their own. `components/` holds what two
or more pages share. Extract a component only when something reuses it, and when it is
generic enough for another site, put it in `components` instead.

One barrel per package, `src/index.ts`. No nested index files, no re-export chains.

Something used by one owner lives with that owner. Once a second needs it, move it up
rather than importing sideways. A component composing another imports it directly: that
is the design, not a sideways dependency.

Names say what is inside. No `core`, `common`, `shared` or `helpers`; `utilities` is the
one package of loose helpers, and only for framework-free functions several packages use.

## Commits

Conventional Commits, scoped to the package: `feat(components): add ThemeToggle`.

Never commit `source-material/`, `notes/`, `.env`, or anything holding personal details.

## Conventions

`.claude/rules/` holds the detail, each file scoped to the files it applies to and
complete on its own topic: `typescript.md`, `react.md`, `testing.md`, `styles.md`.
