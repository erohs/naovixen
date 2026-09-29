# Decisions

An append-only log of architectural decisions and the tool versions they were made
against. Each entry records the date, the decision, why it was made, and what would
make us revisit it.

Versions are recorded because this project's rule is to read current documentation
before each phase: knowing which version a decision was made against is what makes a
later re-read meaningful.

---

## Pinned versions

Checked against the npm registry on **2026-09-29**.

### Runtime and package management

| Package | Pinned | Latest available | Note |
|---|---|---|---|
| Node.js | 24 (Active LTS) | 26.x current, 24.x Active LTS, 22.x maintenance | Locally installed: 22.17.0 |
| pnpm | 12.6.0 | 12.6.0 | Activated through Corepack |
| turbo | 2.11.5 | 2.11.5 | |

### Language and build

| Package | Pinned | Latest available | Note |
|---|---|---|---|
| typescript | 6.0.3 | 7.0.2 | 6.0.3 is the newest release typescript-eslint supports |
| vite | 8.3.1 | 8.3.1 | Requires Node `^20.19.0 \|\| >=22.12.0` |
| react / react-dom | 19.3.0 | 19.3.0 | |
| @vitejs/plugin-react | 6.1.1 | 6.1.1 | |

### Framework

| Package | Pinned | Latest available | Note |
|---|---|---|---|
| @tanstack/react-start | 1.168.59 | 1.168.59 | Still labelled Release Candidate — see ADR-0003 |
| @tanstack/react-router | 1.170.40 | 1.170.40 | |
| @tanstack/router-plugin | 1.168.41 | 1.168.41 | |
| @cloudflare/vite-plugin | 1.62.0 | 1.62.0 | Cloudflare's supported path for TanStack Start |
| wrangler | 4.143.0 | 4.143.0 | |

### Quality tooling

| Package | Pinned | Latest available | Note |
|---|---|---|---|
| eslint | 10.11.0 | 10.11.0 | Flat config only |
| typescript-eslint | 8.71.0 | 8.71.0 | Peer range `typescript >=4.8.4 <6.1.0` |
| eslint-plugin-jsx-a11y | 6.10.2 | 6.10.2 | |
| @vitest/eslint-plugin | 1.6.27 | 1.6.27 | Supplies `valid-title` and `consistent-test-it` |
| @tanstack/eslint-plugin-router | 1.162.0 | 1.162.0 | |
| stylelint | 17.15.0 | 17.15.0 | |
| stylelint-config-standard | 40.0.0 | 40.0.0 | |
| prettier | 3.9.9 | 3.9.9 | |
| eslint-config-prettier | 10.1.8 | 10.1.8 | |

### Testing

| Package | Pinned | Latest available | Note |
|---|---|---|---|
| vitest | 5.0.2 | 5.0.2 | Requires Node `^22.12.0 \|\| ^24.0.0 \|\| >=26.0.0` |
| @vitest/coverage-v8 | 5.0.2 | 5.0.2 | |
| @testing-library/react | 16.3.3 | 16.3.3 | |
| @testing-library/jest-dom | 7.0.1 | 7.0.1 | |
| @testing-library/user-event | 14.6.7 | 14.6.7 | |
| jsdom | 30.1.1 | 30.1.1 | |
| @playwright/test | 1.63.0 | 1.63.0 | |
| @axe-core/playwright | 4.13.0 | 4.13.0 | |
| @lhci/cli | 0.15.1 | 0.15.1 | Last published 2025-06-25 — see ADR-0005 |

### Content

| Package | Pinned | Latest available | Note |
|---|---|---|---|
| sanity | 6.16.0 | 6.16.0 | |
| @sanity/client | 8.8.0 | 8.8.0 | |

### Fonts

All four typefaces used by the design prototype are published by Fontsource, so they
can be self-hosted as WOFF2 with no Google Fonts request at runtime.

| Package | Pinned | Role |
|---|---|---|
| @fontsource-variable/fredoka | 5.3.0 | Display / headings |
| @fontsource-variable/schibsted-grotesk | 5.3.0 | Body text |
| @fontsource-variable/jetbrains-mono | 5.3.0 | Code and the logo |
| @fontsource/gochi-hand | 5.3.0 | Handwritten decorative accents |

---

## ADR-0001 — TypeScript 6, not 7

**Date:** 2026-09-29
**Status:** Accepted (Naomi, 2026-09-29)

TypeScript 7.0 (the Go rewrite, "Project Corsa") reached general availability on
2026-07-08 and is what `npm install typescript` gives you today. We are proposing to
pin **TypeScript 6.0.3** instead.

**Why:** TypeScript 7.0 shipped without a stable programmatic compiler API, and
Microsoft has said the replacement API lands in 7.1. `typescript-eslint@8.71.0`
declares its peer range as `typescript >=4.8.4 <6.1.0`, so on TypeScript 7 we would
lose typescript-eslint entirely — and with it every type-aware lint rule and
`@typescript-eslint/naming-convention`, which is the rule the plan relies on to
enforce the naming conventions in section 3.1 and 3.2.

**What we give up:** the 8–12x faster builds of the native compiler. On a codebase
this size that is not a meaningful cost.

**Revisit when:** typescript-eslint publishes a release whose peer range admits
TypeScript 7. Its `rc-v8` dist-tag suggests that work is underway.

---

## ADR-0002 — Node version

**Date:** 2026-09-29
**Status:** Accepted (Naomi, 2026-09-29)

Node 24 ("Krypton") is the Active LTS line; Node 22 ("Jod") is in maintenance and
Node 26 is Current. `@tanstack/react-start` requires `node >=22.12.0` and `vitest@5`
requires `^22.12.0 || ^24.0.0 || >=26.0.0`.

Proposing **Node 24 (Active LTS)** in `.nvmrc`, matched by the CI workflow and the
Cloudflare build image. The machine this is being built on currently runs 22.17.0,
which would need upgrading.

Naomi confirmed Node 24 on 2026-09-29.

---

## ADR-0003 — TanStack Start is still a Release Candidate

**Date:** 2026-09-29
**Status:** Accepted

The plan asked us to verify TanStack Start's release status. As of today its
documentation still carries the notice:

> "TanStack Start is currently in the **Release Candidate** stage! This means it is
> considered feature-complete and its API is considered stable."

Despite `1.168.59` looking like a stable semver major, the project has not declared
v1 final. We are proceeding with it because the API is declared stable and the
fallback (React Router in framework mode) remains available. The architecture in
section 4 deliberately keeps framework-specific code confined to `apps/*`, so a
switch would not touch `core`, `styles` or `ui`.

---

## ADR-0004 — Cloudflare deployment uses the Cloudflare Vite plugin

**Date:** 2026-09-29
**Status:** Accepted

Cloudflare's supported path for a TanStack Start app is `@cloudflare/vite-plugin`,
which builds the app into a Worker running on `workerd`. This replaces the older
Nitro preset approach. Revisit at Phase 9 against the then-current documentation.

---

## ADR-0005 — Lighthouse CI needs verifying before Phase 8

**Date:** 2026-09-29
**Status:** Open

`@lhci/cli` was last published on 2025-06-25, over a year ago. Before wiring it into
CI in Phase 8, confirm it is still maintained and still works against the current
Chrome; otherwise budget enforcement moves to the Lighthouse CLI directly or to a
Playwright-driven measurement.

---

## ADR-0006 — Enums are native TypeScript enums

**Date:** 2026-09-29
**Status:** Accepted (Naomi, 2026-09-29) — supersedes the `as const` form first
recorded here the same day

Resolves open question 1. This entry originally recorded an `as const` object with a
derived union type. Naomi then supplied the house style guide these conventions are
drawn from, which specifies native TypeScript enums, and confirmed that it wins.

```ts
// enums/ThemePreference.ts
export enum ThemePreference {
  Light = 'light',
  Dark = 'dark',
  System = 'system',
}
```

**What this costs.** Native enums emit runtime code, so `erasableSyntaxOnly` must stay
off and these files cannot run under Node's native type stripping. Neither is used by
this project: everything is built by Vite, which transpiles enums correctly.

**What is banned as a result.** `const enum` cannot be transpiled a file at a time,
which is exactly how Vite and esbuild build this project. `isolatedModules` makes that
a compile error, and CLAUDE.md section 8 states it explicitly.

**To verify in Phase 1.** Confirm a native enum survives the Vite build in both the
client and SSR bundles before the pattern is used widely.
---

## ADR-0007 — Typefaces are self-hosted from Fontsource

**Date:** 2026-09-29
**Status:** Accepted

The design prototype loads Fredoka, Schibsted Grotesk, JetBrains Mono and Gochi Hand
from Google Fonts. All four are published by Fontsource, so they are installed as
dependencies and served from our own origin: no third-party request on page load, no
`preconnect` to `fonts.googleapis.com`, and no data leaving the visitor's browser to
Google. Three of the four have variable versions, which cuts the number of files.

---

## ADR-0008 — Sanity is the blog CMS

**Date:** 2026-09-29
**Status:** Accepted (Naomi, 2026-09-29)

Resolves open question 2. The hard requirement in section 6.1 is publishing without
a redeploy, which a git-based MDX blog cannot meet. Sanity stores posts as Portable
Text, which is structured data rather than markup, so every block and mark is
rendered by one of our own components and no raw HTML is ever injected. The schema
can make alt text and excerpts required rather than merely encouraged.

The coupling is confined to one adapter: `core` declares the `BlogRepository`
interface and the `BlogPost` model, and `content` holds `SanityBlogRepository`.
Changing CMS later means writing one new class.

---

## ADR-0009 — Git remote

**Date:** 2026-09-29
**Status:** Accepted (Naomi, 2026-09-29)

`origin` is `git@github.com:erohs/naovixen.git` (private), tracking `main`.
GitHub Actions in Phase 8 and the Cloudflare project in Phase 9 both build from it.

---

## ADR-0010 — Naomi's house style supersedes PLAN.md section 3.2

**Date:** 2026-09-29
**Status:** Accepted (Naomi, 2026-09-29)

Naomi supplied the naming and file-layout conventions she already works to, and they
differ from the defaults drafted in PLAN.md section 3.2. Consistency with how she
actually writes code beats a convention invented for this repository, so the house
style wins wherever the two disagree. CLAUDE.md is now the single authority; section
3.2 of the plan is superseded and the plan is deleted in Phase 10 regardless.

The conventions themselves are recorded in CLAUDE.md in this project's own words and
with this project's own examples. The source document is not reproduced anywhere in
the repository.

What changed from the drafted defaults:

| Area | PLAN.md draft | Adopted |
|---|---|---|
| Interfaces | `ProjectCardProps` | `IProjectCardProps` — `I` prefix throughout |
| File names | kebab-case, `theme.service.ts` | PascalCase, `ThemeService.ts` |
| Components | function declarations | typed arrow constants, `FunctionComponent<IProps>` |
| Enums | `as const` + derived union | native `enum` |
| Module constants | `SCREAMING_SNAKE_CASE` | camelCase, one per `*.const.ts` file |
| Event handlers | `onSelect` prop, `handleSelect` implementation | `on` prefix for both, disambiguated by DOM event name |
| Test files | `*.test.ts` | `*.spec.ts` |
| Integration tests | `*.integration.test.ts` | `*.Integration.spec.ts` |
| Acronyms | not specified | cased as words — `SeoMetadata`, not `SEOMetadata` |
| Abbreviations | avoid | avoid, with a short allow-list: `id`, `props`, `ref`, `src`, `ui`, `i` |

Kept from the plan, because the house style does not cover them: kebab-case
directories and CSS file names, `nx-` prefixed BEM classes, unprefixed CSS custom
properties, one barrel file per package, explicit return types on exported functions,
TSDoc on exported symbols, the `Using / given / when / then it should` test wording,
and Conventional Commits.

One correction applied. The source names hook files in PascalCase like every other
file, but its worked example shows an unrelated file name, so the rule and the example
disagree. The rule is applied as written — a hook exported as `useTheme` lives in
`UseTheme.hook.ts` — on the grounds that the same transformation already applies to
functions, where `resolveTheme` lives in `ResolveTheme.function.ts`.

---

## ADR-0011 — `var` is banned

**Date:** 2026-09-29
**Status:** Accepted (Naomi, 2026-09-29)

`const` by default, `let` where a binding genuinely changes, `var` never. Function
scoping and hoisting make `var` a source of bugs that block scoping does not have.
Enforced by the `no-var` and `prefer-const` ESLint rules as errors, configured in
Phase 1.

---

## ADR-0012 — Instructions are split so agents load only what they need

**Date:** 2026-09-29
**Status:** Accepted (Naomi, 2026-09-29)

A single large `CLAUDE.md` is loaded into every session in full, spending context on
CSS rules during a TypeScript task and on testing rules during a styling one. Claude
Code's documentation puts the target at under 200 lines per file, and adherence drops
as files grow.

The conventions are therefore split across three mechanisms, chosen by how each rule is
scoped:

| Mechanism | Loads | Used for |
|---|---|---|
| `CLAUDE.md` at the repository root | Every session | Rules that apply everywhere: how to work, content sources, the design-reference rule, architecture, commits |
| `.claude/rules/*.md` with `paths:` frontmatter | Only when a matching file is opened | Rules scoped by file type: `typescript.md`, `react.md`, `testing.md`, `styles.md` |
| `CLAUDE.md` inside a package or app | Only when a file in that directory is read | Rules scoped by location, created alongside each package as it is scaffolded |

The root file is 145 lines and every rules file is under 120.

**`@path` imports are deliberately not used.** They are expanded eagerly at launch, so
they organise the text without saving any context — which is the entire point of the
split. Paths are written inside backticks instead, which Claude Code's import parser
skips.

**Keep them consistent.** Claude Code concatenates every file it finds rather than
letting the most specific one win, so two files that contradict each other leave the
choice to chance. A rule belongs in exactly one place.
