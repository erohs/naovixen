# naovixen

Naomi Shore's portfolio. pnpm workspaces and Turborepo, TanStack Start, TypeScript.

## Working rules

- **Check a tool's current docs before using it.** This stack moves faster than training
  data. Installed versions are in `pnpm-lock.yaml`, not in a document.
- **Ask before deviating** from anything here. Never silently substitute an alternative.
- **Readability over cleverness.** Functions 25 lines, files 400, both enforced. Comments
  only where the code genuinely cannot speak for itself.
- **WCAG 2.2 AA is the floor.** If a design detail cannot be built accessibly, ask.

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
siblings. The exact graph is enforced in `eslint.config.js`; read it there rather than
keeping a second copy here.

Only `components` and `design-system` may import React. Every other package runs
unchanged in a browser, on a Worker, and in a test with no DOM — anything needing a
browser capability declares an interface and has an implementation injected. The base
tsconfig omits the `DOM` lib so this is a compile error, not a convention.

Layers: models (data, no behaviour) → services and controllers (logic, dependencies
injected) → hooks (thin React bindings, no logic) → components (models in, semantic HTML
out) → routes (load, map, compose).

Controllers expose `getState()`, `subscribe(listener)` and intent methods, so a hook can
bind one with `useSyncExternalStore` and add nothing.

## Folders

A component, service, controller or route owns a kebab-case folder. Its root holds the
main file, its spec, and for components its showcase. Everything else goes in
`interfaces/`, `types/`, `enums/`, `constants/`, `functions/` or `styles/`, created only
when there is something to put in it.

One barrel per package, `src/index.ts`. No nested index files, no re-export chains.

Something used by one owner lives with that owner. Once a second needs it, move it up to
the package level rather than importing sideways.

## Commits

Conventional Commits, scoped to the package: `feat(components): add ProjectCard`.

Never commit `source-material/`, `.env`, or anything holding personal details.

## Detail loads on demand

`.claude/rules/` holds the conventions, each scoped to the files it applies to:
`typescript.md`, `react.md`, `testing.md`, `styles.md`. Decisions whose reasoning is not
obvious from the code are in `docs/decisions.md`.
