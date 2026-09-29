# CLAUDE.md

Instructions for any agent working in this repository. These apply everywhere. The
detailed conventions load on demand — see [Where the rest lives](#where-the-rest-lives).

---

## How to work here

**Read the current documentation first.** This stack moves faster than any model's
training data. Before writing code against a tool, fetch its current documentation and
check the installed version. `docs/decisions.md` records every version this project was
built against and why — add to it when a version changes or a decision is revisited.

Two live examples of why: TypeScript 7 is generally available but is *not* what we use,
because it shipped without a stable compiler API and typescript-eslint cannot run on it.
TanStack Start looks like a stable v1 from its version number but is formally still a
Release Candidate.

**Confirm before deviating.** If something here turns out to be wrong, outdated or
impossible — an API changed, a package was deprecated, a convention fights the tooling —
stop and ask Naomi. Do not quietly substitute an alternative.

**Readability over cleverness.** Prefer explicit and verbose to terse and clever. No
dense one-liners, no indirection that saves five lines and costs an hour of reading. The
test is whether Naomi can open any file in six months and understand it in one pass.

**Accessibility is a floor, not a goal.** WCAG 2.2 AA everywhere. If a design detail
cannot be built accessibly, ask rather than ship it.

---

## Where content comes from

Naomi's CV is the single source of truth for anything factual about her: roles,
employers, dates, skills, education, links. It lives at `source-material/cv.pdf`, which
is git-ignored and must stay that way.

**Never invent or embellish.** If a page needs something the CV does not contain — a
project write-up, an "about me" voice, a social handle, a testimonial — ask Naomi. The
design prototype's placeholder copy is not content and must never ship.

Never publish anything from the CV that says where Naomi lives or how to reach her
privately — phone number, home address, personal email — unless she explicitly asks.

---

## What the design prototype is for

`design-reference/` holds a Claude Design export. It is a picture, not a codebase.

Take from it: layout, spacing rhythm, hierarchy, colour, typography, interaction, motion.
Take nothing else. Its CSS, markup and JavaScript are never copied, imported or adapted.
Everything is rebuilt from our own tokens, primitives and components, using the simplest
CSS that reproduces the same result.

Where the prototype gets its result through a hack — a magic number, absolute
positioning, `!important`, a fixed pixel height, a stack of wrappers, a `<div>` doing a
`<button>`'s job — find the clean equivalent. Where a detail cannot be rebuilt both
cleanly and accessibly, ask Naomi rather than copying the hack.

---

## Architecture

Six layers. Dependencies only ever point downwards.

```
apps/*        ──►  system-page, ui, content, styles, core
system-page   ──►  ui, styles, core
ui            ──►  styles, core
content       ──►  core
core          ──►  nothing internal
styles        ──►  nothing
```

1. **Models** (`core/src/models`) — plain interfaces describing domain data, no behaviour.
2. **Services** (`core/src/services`) — framework-free logic; every dependency arrives
   through an injected interface.
3. **Controllers** (`core/src/controllers`) — framework-free state machines exposing
   `getState()`, `subscribe(listener)` and intent methods.
4. **Adapters** (`ui/src/hooks`) — thin React bindings, usually `useSyncExternalStore`.
   No logic.
5. **Components** (`ui/src/components`) — take models as props, render semantic HTML.
6. **Routes** (`apps/*/src/routes`) — load data, map to models, compose, declare metadata.

**`core` never imports React and never touches the DOM.** A browser capability it needs —
`matchMedia`, cookies, `localStorage` — is expressed as an interface and injected. That
is what makes it testable without a DOM and reusable outside React.

Services reach React through a single `NaovixenProvider` in `ui`, wrapped around each
app's root route.

---

## One concern per folder

Every component, service, controller and route owns a kebab-case folder. The root holds
only the main file, its test, and for components its showcase. Everything else goes in a
subfolder named for what it holds: `interfaces/`, `types/`, `enums/`, `constants/`,
`functions/`, `styles/`.

Create a subfolder only when there is something to put in it — no empty placeholders.

Something used by one owner lives in that owner's folder. The moment a second owner needs
it, move it up to the package level rather than importing sideways between siblings.
Domain models always live in `core/src/models`.

Subfolders are imported by direct path. No nested `index.ts` files, no re-export chains —
each package has exactly one barrel, `src/index.ts`, exporting its public surface.

---

## Commits

[Conventional Commits](https://www.conventionalcommits.org), scoped to the package or app.

```
feat(ui): add ProjectCard
fix(core): resolve system theme when no cookie is present
chore(styles): regenerate tokens
```

Never commit `source-material/`, `.env` files, or anything holding personal details or
secrets.

---

## Where the rest lives

These load automatically when relevant, so this file stays short. Read one directly only
if you need it before touching a matching file.

| Rules | Load when you open |
|---|---|
| `.claude/rules/typescript.md` — naming, casing, file names, TypeScript rules | any `.ts` or `.tsx` |
| `.claude/rules/react.md` — component form, props, component accessibility | any `.tsx` |
| `.claude/rules/testing.md` — what to test, test file names, test wording | any `.spec.ts` / `.spec.tsx` |
| `.claude/rules/styles.md` — BEM, tokens, cascade layers, theming | any `.css` |

Per-package instructions live in a `CLAUDE.md` inside each package and load when you read
files there. They are created alongside each package as it is scaffolded.

Background, not instructions: `docs/decisions.md` (pinned versions and ADRs),
`docs/architecture.md`, `docs/adding-a-new-site.md`.
