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

Dependencies point one way, from apps down to leaf packages, and never sideways between
siblings. Lint fails the build if that is broken.

Only `components` and `design-system` may import React. Every other package runs unchanged
in a browser, on a Worker, and in a test with no DOM: anything needing a browser
capability declares an interface and has an implementation injected. The base tsconfig
omits the `DOM` lib, so reaching for `window` is a compile error rather than a convention.

Layers: models (data, no behaviour) → services and controllers (logic, dependencies
injected) → hooks (thin React bindings, no logic) → components (models in, semantic HTML
out) → routes (load, map, compose).

Controllers expose `getState()`, `subscribe(listener)` and intent methods, so a hook binds
one with `useSyncExternalStore` and adds nothing of its own.

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
main file, its spec, and for components its showcase. Everything else goes in
`interfaces/`, `types/`, `enums/`, `constants/`, `functions/` or `styles/`, created only
when there is something to put in it.

One barrel per package, `src/index.ts`. No nested index files, no re-export chains.

Something used by one owner lives with that owner. Once a second needs it, move it up to
the package level rather than importing sideways.

Names say what is inside. No `core`, `utils`, `common`, `shared` or `helpers`.

## Commits

Conventional Commits, scoped to the package: `feat(components): add ProjectCard`.

Never commit `source-material/`, `notes/`, `.env`, or anything holding personal details.

## Conventions

`.claude/rules/` holds the detail, each file scoped to the files it applies to and
complete on its own topic: `typescript.md`, `react.md`, `testing.md`, `styles.md`.
