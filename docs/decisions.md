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

## Open

- **Lighthouse CI** (`@lhci/cli`) has not been published since June 2025. Confirm it still
  works before wiring it into CI, or measure with Playwright instead.
- **TanStack Start** is formally a Release Candidate despite its version number. The
  architecture keeps framework code inside `apps/`, so switching would not touch the
  packages.
