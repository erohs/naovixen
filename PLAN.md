# naovixen — Implementation Plan

> **This file is temporary.** It is the working plan for turning the Claude Design prototype into a production codebase.
> The implementing agent must **delete `PLAN.md` in the final phase**, after moving anything with lasting value (coding guidelines, architecture notes) into `CLAUDE.md` and `docs/`.

---

## 0. Rules for the implementing agent

1. **Read the latest official docs before each phase.** Your training data is out of date for most of this stack. Before writing code for a tool, fetch its current docs (getting started, config reference, migration notes) and check the latest stable version on npm. Record the versions you pinned in `docs/decisions.md`.
2. **Confirm before deviating.** If a decision in this plan turns out to be wrong or outdated (e.g. a tool is deprecated, an API changed), stop and ask Naomi rather than silently choosing an alternative.
3. **Readability over cleverness.** Prefer explicit, verbose, well-named code. No clever one-liners, no magic abstractions. Future Naomi should understand any file in one read.
4. **Work phase by phase.** Tick the checkboxes as you go. Each phase ends with its verification step passing before moving on.
5. **Open questions (section 12) must be answered before the phase that depends on them.**
6. **Trust the design's layout, not its code.** The Claude Design output may contain wonky CSS and messy implementation. Use it only for what it _looks like and how it behaves_: layout, spacing rhythm, hierarchy, colours, typography, interactions. Never copy its CSS, markup or JS. Rebuild everything clean and minimal from our tokens, layout primitives and conventions: the simplest CSS that reproduces the same visual result. If the prototype achieves something with hacks (magic numbers, absolute positioning, `!important`, fixed pixel heights, nested wrappers, non-semantic markup), find the clean equivalent. If a design detail can't be reproduced cleanly or accessibly, ask Naomi rather than copying the hack.
7. **Content comes from Naomi's CV, or from Naomi.** Her CV is at `source-material/cv.pdf`. Use it as the single source for personal and factual content: bio, roles, employers, dates, skills, projects, education and links. **Never invent or embellish anything.** If a page needs information the CV doesn't contain (e.g. project write-ups, screenshots, an "about me" tone, social links), or the CV is ambiguous, ask Naomi. Placeholder copy from the design reference is not content. Don't publish private details from the CV (phone number, home address, personal email) unless Naomi explicitly says to.
8. **Commit every stage.** The repo is initialised with `git init` as the very first step. Every phase ends with a commit once its verification passes, using Conventional Commits (e.g. `feat(styles): add design tokens and themes`). Smaller commits within a phase are welcome; never leave a phase's work uncommitted before starting the next. Each commit also ticks the completed checkboxes in `PLAN.md`, so the plan's history shows progress. Never commit anything in `source-material/`, secrets or `.env` files.

---

## 1. Decision summary

| Area                      | Decision                                                                                         | Notes                                                                                                                                                                                                                                            |
| ------------------------- | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Language                  | TypeScript, `strict: true`                                                                       | Plus `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`                                                                                                                                                                                    |
| UI library                | React (latest stable)                                                                            |                                                                                                                                                                                                                                                  |
| App framework / router    | **TanStack Start** (TanStack Router)                                                             | Type-safe file-based routing, SSR, prerendering, server functions, Vite-based. At time of planning it was at v1 release-candidate stage; **verify current status**. Fallback if unsuitable: React Router (framework mode). Ask before switching. |
| Monorepo                  | **pnpm workspaces + Turborepo**                                                                  | Internal packages, no publishing, no versioning                                                                                                                                                                                                  |
| Package linking           | `"workspace:*"` + packages export TypeScript source directly                                     | "Internal / just-in-time packages": no build step, no version numbers, edits are live in every app                                                                                                                                               |
| Styling                   | Global CSS, prefixed BEM (`.nx-block__element--modifier`), CSS custom properties, cascade layers | **No Tailwind, no CSS-in-JS, no CSS Modules**                                                                                                                                                                                                    |
| Theming                   | CSS variables + `data-theme` on `<html>`, light / dark / system                                  | Cookie-backed so SSR renders the right theme with no flash                                                                                                                                                                                       |
| Framework-agnostic logic  | `@naovixen/core`: pure TS models, services, controllers                                          | React only appears in thin adapters (hooks) and components                                                                                                                                                                                       |
| Blog                      | Headless CMS (**Sanity** proposed), fetched at request time with CDN caching                     | Publish without redeploying; rich content mapped to own components                                                                                                                                                                               |
| Hosting                   | **Cloudflare** (Workers), one project per app                                                    | Verify TanStack Start's current Cloudflare deployment guide. Alternatives: Netlify, Vercel                                                                                                                                                       |
| Domains                   | `naovixen.com` → portfolio                                                                       | Future sites (e.g. a merch shop) are **not built now**; the architecture only has to make adding one easy                                                                                                                                        |
| Tests                     | Vitest (unit), Testing Library (components), Playwright + axe (end-to-end + accessibility)       |                                                                                                                                                                                                                                                  |
| Linting                   | ESLint (flat config, typescript-eslint, jsx-a11y), Stylelint (BEM pattern enforced), Prettier    |                                                                                                                                                                                                                                                  |
| Hidden design system page | `/system` route in every app, `noindex`, excluded from sitemap                                   |                                                                                                                                                                                                                                                  |

---

## 2. Repository structure

```
naovixen/
├── apps/
│   ├── portfolio/               # naovixen.com (TanStack Start)
│   └── studio/                  # Sanity Studio (blog content editing)
├── packages/
│   ├── core/                    # @naovixen/core — pure TS: models, services, controllers, utilities
│   ├── styles/                  # @naovixen/styles — tokens, themes, reset, base, typography, layout
│   ├── ui/                      # @naovixen/ui — React components (+ showcase files)
│   ├── content/                 # @naovixen/content — blog repository interface + CMS adapters
│   ├── system-page/             # @naovixen/system-page — the hidden design system page, reused by every app
│   ├── tsconfig/                # @naovixen/tsconfig — shared tsconfig bases
│   └── eslint-config/           # @naovixen/eslint-config — shared lint rules
├── design-reference/            # Claude Design export / screenshots — visual reference only; never imported or copied
├── source-material/             # cv.pdf — content source; git-ignored so personal details never reach the repo
├── docs/
│   ├── architecture.md
│   ├── decisions.md             # decisions whose reasoning is not obvious from the code
│   └── adding-a-new-site.md
├── CLAUDE.md                    # Permanent agent instructions + coding guidelines
├── PLAN.md                      # This file — delete when done
├── turbo.json
├── pnpm-workspace.yaml
└── package.json
```

### Dependency rules (enforce with ESLint `import/no-restricted-paths` or similar)

```
apps/*  ──►  ui, styles, content, core, system-page
system-page ──► ui, styles, core
ui      ──►  styles, core
content ──►  core
core    ──►  (nothing internal; no React, no DOM-framework imports)
styles  ──►  (nothing; plain CSS + token data)
```

`core` must never import React. If something in `core` needs the DOM (e.g. `matchMedia`), it goes behind an injected interface so it can be tested and reused outside React.

### Internal package shape (no build, no versions)

```jsonc
// packages/ui/package.json
{
  "name": "@naovixen/ui",
  "private": true,
  "type": "module",
  "exports": {
    ".": "./src/index.ts",
    "./styles.css": "./src/index.css",
  },
  "dependencies": {
    "@naovixen/core": "workspace:*",
    "@naovixen/styles": "workspace:*",
  },
  "peerDependencies": { "react": "*", "react-dom": "*" },
}
```

Apps consume the TypeScript source directly; Vite transpiles it. Verify in the TanStack Start / Vite docs whether any `ssr.noExternal` or similar config is needed for workspace packages that ship `.ts` and `.css`.

---

## 3. Coding guidelines

> **Superseded.** `CLAUDE.md` and `.claude/rules/` are now the
> authority on every convention below. Naomi supplied her own house style in Phase 0 and it
> won wherever the two disagreed.
> This section is kept only as a record of what was originally proposed.

### 3.1 Confirmed by Naomi

| Thing                    | Convention                                                                                                                                                                                                            | Example                                                                     |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| Folders                  | kebab-case                                                                                                                                                                                                            | `components/project-card/`                                                  |
| React component files    | PascalCase                                                                                                                                                                                                            | `ProjectCard.tsx`                                                           |
| CSS files                | kebab-case                                                                                                                                                                                                            | `project-card.css`                                                          |
| CSS classes              | Global, `nx-` prefixed BEM                                                                                                                                                                                            | `.nx-project-card`, `.nx-project-card__title`, `.nx-project-card--featured` |
| CSS custom properties    | Unprefixed, category first                                                                                                                                                                                            | `--color-accent`, `--space-4`, `--font-size-body`                           |
| Functions                | camelCase                                                                                                                                                                                                             | `buildProjectCardClassName()`, `resolveTheme()`                             |
| Variables and parameters | camelCase                                                                                                                                                                                                             | `resolvedTheme`, `projectSummaries`                                         |
| Private functions        | camelCase with a leading underscore. Applies to private class methods (combined with TypeScript's `private` modifier) and module functions that aren't exported                                                       | `private _notifyListeners()`, `function _readCookie()`                      |
| Classes                  | PascalCase                                                                                                                                                                                                            | `ThemeService`, `SanityBlogRepository`                                      |
| Separation of concerns   | A component file contains **only the component**. Interfaces, styles, constants, enums and functions each live in their own subfolder inside the owning folder. The same applies to services, controllers and routes. | See 3.4                                                                     |

### 3.2 Proposed defaults — Naomi to confirm or change in Phase 0

| Thing                         | Proposed convention                                                                                                                                   | Example                                                                                                                                                      |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Non-component TS files        | kebab-case with a role suffix                                                                                                                         | `theme.service.ts`, `project.model.ts`, `blog.repository.ts`, `project-card-props.interface.ts`, `project-card-variant.enum.ts`, `project-card.constants.ts` |
| One thing per file            | One exported interface, enum or function per file, file named after it. Constants may be grouped per owner in one `*.constants.ts` file               | `build-project-card-class-name.ts` exports `buildProjectCardClassName`                                                                                       |
| Functions                     | kebab-case file named after the function, in `functions/`, with its test beside it                                                                    | `functions/build-project-card-class-name.ts` + `.test.ts`                                                                                                    |
| Hooks                         | `useX` function in kebab-case file, in the package's `hooks/` folder                                                                                  | `useTheme` in `hooks/use-theme.ts`                                                                                                                           |
| Component folder root         | Only the component, its showcase and its test                                                                                                         | `ProjectCard.tsx`, `ProjectCard.test.tsx`, `ProjectCard.showcase.tsx`                                                                                        |
| Exports                       | Named exports only (framework-required exports excepted, e.g. `export const Route`)                                                                   | `export function ProjectCard()`                                                                                                                              |
| Components                    | Function declarations, not arrow constants                                                                                                            | `export function Button(props: ButtonProps)`                                                                                                                 |
| Props types                   | `<ComponentName>Props`                                                                                                                                | `ProjectCardProps`                                                                                                                                           |
| Object shapes / contracts     | `interface`                                                                                                                                           | `interface Project { … }`, `interface ThemeStorage { … }`                                                                                                    |
| Unions, aliases, mapped types | `type`                                                                                                                                                | `type ThemePreference = 'light' \| 'dark' \| 'system'`                                                                                                       |
| Enums                         | **Pending — see section 12, question 1.** Either TypeScript `enum`, or an `as const` object plus derived union type. Either way they live in `enums/` | `enums/theme-preference.enum.ts`                                                                                                                             |
| Booleans                      | `is` / `has` / `should` / `can` prefix                                                                                                                | `isFeatured`, `hasCoverImage`                                                                                                                                |
| Event props / handlers        | `onX` props, `handleX` implementations                                                                                                                | `onSelect` → `handleSelect`                                                                                                                                  |
| Module constants              | SCREAMING_SNAKE_CASE for fixed, module-level values (the one exception to camelCase variables); ordinary local `const`s stay camelCase                | `DEFAULT_THEME_PREFERENCE` vs `const resolvedTheme = …`                                                                                                      |
| Abbreviations                 | Avoid; write full words                                                                                                                               | `button` not `btn`, `navigation` not `nav` (except HTML element names)                                                                                       |
| Return types                  | Explicit on every exported function                                                                                                                   | `export function formatDate(date: Date): string`                                                                                                             |
| Barrel files                  | Only one per package (`src/index.ts`)                                                                                                                 | No nested `index.ts` re-export chains                                                                                                                        |
| Component-scoped CSS vars     | Block name then property, set on the block                                                                                                            | `--project-card-padding-inline`                                                                                                                              |
| UI state in CSS               | Prefer ARIA / `data-*` attributes over state classes                                                                                                  | `.nx-tab[aria-selected="true"]`, `[data-state="open"]`                                                                                                       |
| Comments                      | Explain _why_, not _what_; TSDoc on every exported symbol                                                                                             |                                                                                                                                                              |
| Commits                       | Conventional Commits                                                                                                                                  | `feat(ui): add ProjectCard`                                                                                                                                  |

### 3.3 CSS custom property categories

`--color-*`, `--font-family-*`, `--font-size-*`, `--font-weight-*`, `--line-height-*`, `--letter-spacing-*`, `--space-*`, `--size-*`, `--radius-*`, `--border-width-*`, `--shadow-*`, `--duration-*`, `--easing-*`, `--layout-*`, `--breakpoint-*` (reference only; media queries cannot use vars), `--z-index-*`.

Colour tokens are **semantic** (`--color-surface`, `--color-text`, `--color-text-muted`, `--color-accent`, `--color-accent-contrast`, `--color-border`, `--color-focus-ring`). Raw palette values live only in the token source file and are never referenced by components directly.

> Note: unprefixed variables could in theory clash with a third-party stylesheet. Low risk for these sites; revisit only if a clash appears.

### 3.4 Folder structure: one concern per folder

Every component, service, controller and route owns a kebab-case folder. Its root holds only the main file (plus showcase and test). Everything else goes in a subfolder named after its concern. **Only create a subfolder when there is something to put in it** — no empty placeholder folders.

| Subfolder     | Contains                                            | File naming                                                                 |
| ------------- | --------------------------------------------------- | --------------------------------------------------------------------------- |
| `interfaces/` | Props, state and contract interfaces                | `project-card-props.interface.ts`                                           |
| `types/`      | Union/alias/mapped types (if not in `interfaces/`)  | `project-card-size.type.ts`                                                 |
| `enums/`      | Enums (form per section 12, Q1)                     | `project-card-variant.enum.ts`                                              |
| `constants/`  | Constants for this owner                            | `project-card.constants.ts`                                                 |
| `functions/`  | Pure helper functions, one per file, test alongside | `build-project-card-class-name.ts`, `build-project-card-class-name.test.ts` |
| `styles/`     | The owner's CSS (components only)                   | `project-card.css`                                                          |

**Component example**

```
packages/ui/src/components/project-card/
├── ProjectCard.tsx                      # the component only: imports, JSX, nothing else exported
├── ProjectCard.test.tsx
├── ProjectCard.showcase.tsx
├── interfaces/
│   └── project-card-props.interface.ts
├── enums/
│   └── project-card-variant.enum.ts
├── constants/
│   └── project-card.constants.ts
├── functions/
│   ├── build-project-card-class-name.ts
│   └── build-project-card-class-name.test.ts
└── styles/
    └── project-card.css
```

**Service example (core)**

```
packages/core/src/services/theme/
├── theme.service.ts                     # the ThemeService class only
├── theme.service.test.ts
├── interfaces/
│   ├── theme-state.interface.ts
│   ├── theme-storage.interface.ts
│   └── system-theme-source.interface.ts
├── enums/
│   ├── theme-preference.enum.ts
│   └── resolved-theme.enum.ts
├── constants/
│   └── theme.constants.ts               # DEFAULT_THEME_PREFERENCE, THEME_COOKIE_NAME
├── functions/
│   ├── resolve-theme.ts
│   └── resolve-theme.test.ts
└── implementations/
    ├── cookie-theme-storage.ts
    └── media-query-system-theme-source.ts
```

**Shared vs owned:** something used by only one owner lives in that owner's subfolder. Once a second owner needs it, move it up to the package level (e.g. `packages/core/src/interfaces/`, `packages/ui/src/functions/`) rather than importing sideways between siblings. Domain models always live in `packages/core/src/models/`.

**Imports:** subfolders are imported by direct path, never via nested `index.ts` files. The package's single `src/index.ts` re-exports whatever is public (e.g. `ProjectCard` and `ProjectCardProps`).

### 3.5 Testing guidelines

**Primary goal:** every unit and integration test checks **behaviour and the public API**. A test should keep passing through any refactor that doesn't change what the code does for its callers.

- Test only through what is exported: component props and rendered output, service methods, function inputs and outputs. **Never import or call underscore-prefixed private functions or methods**, and never assert on internal state or implementation details.
- Components: render with Testing Library and query the way a user would (by role, accessible name, label, text). No querying by class name or test IDs unless there is no accessible alternative. No snapshot tests of markup.
- Mock only at boundaries, via the injected interfaces from section 4 (e.g. a fake `ThemeStorage`, a fixture-backed `BlogRepository`). Don't mock the module under test's own internals.
- **Unit tests** live beside what they test: `ProjectCard.test.tsx`, `theme.service.test.ts`, `functions/resolve-theme.test.ts`.
- **Integration tests** (proposed naming, confirm in Phase 0) use `*.integration.test.ts(x)` beside the entry point they exercise, e.g. `sanity-blog.repository.integration.test.ts` against fixture CMS responses, or a route rendered with real services and fake boundaries.

#### Test description format

Tests are written as nested `describe` / `test` blocks (always `test`, never `it`) so the runner output reads as one sentence:

| Level            | Wording                             | Required?                                                                                                                 |
| ---------------- | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| Outer `describe` | `Using [TEST FILE CONTEXT]`         | Always                                                                                                                    |
| `describe`       | `given [CONTEXT]`                   | Skip when there's no state or scenario setup, e.g. a pure function, or a function with no arguments and no external state |
| `describe`       | `and [FURTHER CONTEXT]`             | Optional, repeatable                                                                                                      |
| `describe`       | `when [ACTION]`                     | Always                                                                                                                    |
| `test`           | `then it should [REACTION]`         | Always                                                                                                                    |
| `describe`       | `and [FURTHER ACTION]`              | Optional follow-up action                                                                                                 |
| `test`           | `then it should [FURTHER REACTION]` | Required after a follow-up action                                                                                         |

**Stateful example (service)**

```ts
describe('Using ThemeService', () => {
  describe('given no stored preference', () => {
    describe('and the system theme is dark', () => {
      describe('when getState is called', () => {
        test('then it should resolve to the dark theme', () => {
          /* … */
        });
        test('then it should report the preference as system', () => {
          /* … */
        });

        describe('and setPreference is called with light', () => {
          test('then it should resolve to the light theme', () => {
            /* … */
          });
          test('then it should write light to storage', () => {
            /* … */
          });
        });
      });
    });
  });
});
```

Runner output: _Using ThemeService › given no stored preference › and the system theme is dark › when getState is called › and setPreference is called with light › then it should write light to storage_

**Pure function example (no `given`)**

```ts
describe('Using buildProjectCardClassName', () => {
  describe('when called with the featured variant', () => {
    test('then it should return the block class and the featured modifier', () => {
      /* … */
    });
  });
});
```

**Component example**

```tsx
describe('Using ProjectCard', () => {
  describe('given a project with a cover image', () => {
    describe('when it renders', () => {
      test('then it should show the image with its alt text', () => {
        /* … */
      });
      test('then it should label the article with the project title', () => {
        /* … */
      });
    });
  });
});
```

Setup belongs in the `describe` level that introduces it (`beforeEach` inside the `given` / `and` block), so each level's wording matches the state it creates.

---

## 4. Architecture: model-driven, framework-agnostic

### 4.1 Layers

1. **Models** (`core/src/models`): plain TypeScript interfaces for domain data — `Project`, `BlogPost`, `BlogPostSummary`, `SocialLink`, `NavigationItem`, `SeoMetadata`. No behaviour.
2. **Services** (`core/src/services`): pure TS classes or functions containing logic. Dependencies are injected through interfaces so they run anywhere (browser, server, tests).
3. **Controllers** (`core/src/controllers`): framework-agnostic state machines for complex interactive widgets (e.g. disclosure, tabs, carousel, command palette). Expose `getState()`, `subscribe(listener)`, and intent methods.
4. **Adapters** (`ui/src/hooks`): thin React hooks that bind a service/controller to React via `useSyncExternalStore`. No business logic here.
5. **Components** (`ui/src/components`): receive **models** as props and render semantic HTML with BEM classes. Presentational by default.
6. **Routes** (`apps/*/src/routes`): load data (via `content` repositories or local data files), map it to models, compose components, declare SEO metadata.

### 4.2 Example of the pattern

Each block below is a separate file, following section 3.4. (Enum form shown as `as const` + union purely for illustration until section 12, Q1 is answered.)

```ts
// packages/core/src/services/theme/enums/theme-preference.enum.ts
export const ThemePreference = { Light: 'light', Dark: 'dark', System: 'system' } as const;
export type ThemePreference = (typeof ThemePreference)[keyof typeof ThemePreference];
```

```ts
// packages/core/src/services/theme/interfaces/theme-storage.interface.ts
import type { ThemePreference } from '../enums/theme-preference.enum';

export interface ThemeStorage {
  readPreference(): ThemePreference | undefined;
  writePreference(preference: ThemePreference): void;
}
```

```ts
// packages/core/src/services/theme/interfaces/theme-state.interface.ts
import type { ThemePreference } from '../enums/theme-preference.enum';
import type { ResolvedTheme } from '../enums/resolved-theme.enum';

export interface ThemeState {
  preference: ThemePreference;
  resolvedTheme: ResolvedTheme;
}
```

```ts
// packages/core/src/services/theme/constants/theme.constants.ts
import { ThemePreference } from '../enums/theme-preference.enum';

export const DEFAULT_THEME_PREFERENCE = ThemePreference.System;
export const THEME_COOKIE_NAME = 'theme-preference';
```

```ts
// packages/core/src/services/theme/theme.service.ts — the class only
import type { ThemeStorage } from './interfaces/theme-storage.interface';
import type { SystemThemeSource } from './interfaces/system-theme-source.interface';
import type { ThemeState } from './interfaces/theme-state.interface';
import { resolveTheme } from './functions/resolve-theme';

export class ThemeService {
  // …explicit, documented implementation: getState, subscribe, setPreference
}
```

```ts
// packages/ui/src/hooks/use-theme.ts — adapter only
export function useTheme(themeService: ThemeService): ThemeState {
  return useSyncExternalStore(themeService.subscribe, themeService.getState, themeService.getState);
}
```

```ts
// packages/ui/src/components/project-card/interfaces/project-card-props.interface.ts
import type { Project } from '@naovixen/core';
import type { ProjectCardVariant } from '../enums/project-card-variant.enum';

export interface ProjectCardProps {
  project: Project;
  variant?: ProjectCardVariant;
}
```

```ts
// packages/ui/src/components/project-card/functions/build-project-card-class-name.ts
import { ProjectCardVariant } from '../enums/project-card-variant.enum';
import { PROJECT_CARD_BLOCK_CLASS } from '../constants/project-card.constants';

export function buildProjectCardClassName(variant: ProjectCardVariant): string {
  if (variant === ProjectCardVariant.Featured) {
    return `${PROJECT_CARD_BLOCK_CLASS} ${PROJECT_CARD_BLOCK_CLASS}--featured`;
  }
  return PROJECT_CARD_BLOCK_CLASS;
}
```

```tsx
// packages/ui/src/components/project-card/ProjectCard.tsx — the component only
import type { ProjectCardProps } from './interfaces/project-card-props.interface';
import { ProjectCardVariant } from './enums/project-card-variant.enum';
import { buildProjectCardClassName } from './functions/build-project-card-class-name';

export function ProjectCard({ project, variant = ProjectCardVariant.Default }: ProjectCardProps) {
  const className = buildProjectCardClassName(variant);
  return (
    <article className={className} aria-labelledby={`project-${project.slug}-title`}>
      …
    </article>
  );
}
```

Services are provided to the React tree via a single `NaovixenProvider` in `ui`, which each app wraps around its root route.

---

## 5. Styling system

### 5.1 Token source of truth

- Tokens are authored as typed data in `packages/styles/src/tokens/*.tokens.ts` (colour palette, semantic colours per theme, typography, spacing, radii, shadows, motion, layout).
- A small, readable script (`packages/styles/scripts/generate-tokens.ts`) writes `packages/styles/src/generated/tokens.css`. The generated file is committed; CI fails if it is out of date.
- The same token data powers the `/system` page, so the documentation can never drift from the CSS.

### 5.2 CSS architecture

```css
/* packages/styles/src/index.css */
@layer reset, tokens, base, layout, components, utilities, overrides;

@import './reset.css' layer(reset);
@import './generated/tokens.css' layer(tokens);
@import './base.css' layer(base); /* typography, links, focus styles, selection */
@import './layout.css' layer(layout); /* .nx-container, .nx-stack, .nx-cluster, .nx-grid */
@import './utilities.css' layer(utilities); /* .nx-visually-hidden, etc. — keep tiny */
```

`packages/ui/src/index.css` `@import`s every component's `styles/*.css` file into `layer(components)`. Each app imports `@naovixen/styles` then `@naovixen/ui/styles.css` once, in its root route. (One predictable stylesheet; components stay small so the cost is low. Revisit only if bundle budgets demand per-route CSS.)

Modern CSS to use (check browser support on MDN / Baseline first): cascade layers, native nesting, `:has()`, container queries for components, logical properties (`margin-inline`, `padding-block`), `clamp()` fluid type and spacing, `oklch()` colours, `light-dark()` where helpful, `@property` for animatable variables, `color-scheme`, View Transitions API as progressive enhancement.

### 5.3 Theming

- `<html data-theme="light|dark">` holds the resolved theme; `data-theme-preference` holds the user's choice.
- Preference stored in a cookie so the server renders the correct theme (no flash). A tiny inline script in `<head>` handles the `system` case before first paint.
- Themes only redefine **semantic** colour tokens; components never branch on theme.
- `ThemeToggle` component: accessible (announces current state), works without JavaScript falling back to system theme.

### 5.4 Brand direction (from the design brief)

Simple, accessible, professional, Scandinavian restraint with a playful hint of colour and interactivity; colour and sketchy/comic-book feel inspired by Jayrnski. Logo styled as code: `< naovixen />`.

- Playful colours will often be used decoratively; **check every text/background pair meets WCAG 2.2 AA in both themes**. Provide `--color-*-contrast` pairs.
- Sketchy/comic flourishes (hand-drawn borders, offset shadows, doodles) should be CSS/SVG decoration, `aria-hidden`, and toned down under `prefers-reduced-motion` and `forced-colors`.

---

## 6. Blog

### 6.1 Requirements

- Add or edit posts **without redeploying**.
- Render posts with Naomi's own components and styles, including custom embedded blocks (callouts, code blocks, image with caption, project embeds, etc.).

### 6.2 Approach (proposed — confirm in open questions)

- **Sanity** as headless CMS; Studio lives in `apps/studio` and is deployed to Sanity's hosted studio URL. Verify current free-tier limits.
- Content is **Portable Text** (structured JSON), rendered by a serializer map in `ui` so every block/mark becomes a `@naovixen/ui` component. No raw HTML injection.
- Schema enforces quality: required `alt` text on images, required excerpt/description (SEO), slug validation, published date, tags.
- **Framework-agnostic boundary:**
  - `core`: `BlogPost`, `BlogPostSummary`, `BlogRepository` interface (`listPosts`, `getPostBySlug`, `listTags`).
  - `content`: `SanityBlogRepository implements BlogRepository` — maps CMS documents to `core` models. Swapping CMS later means writing one new adapter.
- **Freshness without deploys:** blog routes are server-rendered; responses sent with `Cache-Control` using `s-maxage` + `stale-while-revalidate` so the CDN serves fast and picks up new posts within minutes. Optional: a Sanity webhook that purges the CDN cache for instant publishing.
- Draft preview: preview route guarded by a secret token, using Sanity's draft perspective. Verify current Sanity preview/visual-editing docs.
- RSS/Atom feed at `/blog/feed.xml`; blog posts included in the sitemap.

---

## 7. Hidden design system page (`/system`)

- Lives in `@naovixen/system-page` and is mounted as a route in every app, so each site shows the shared system rendered with its own theme.
- Not linked anywhere, `<meta name="robots" content="noindex, nofollow">` plus `X-Robots-Tag` header, excluded from the sitemap. **Do not list it in `robots.txt`** (that advertises it). Hidden ≠ secret; nothing sensitive goes here.
- Sections:
  1. **Colours** — every semantic token, swatch in light and dark, value, and contrast ratio against its paired token (computed in `core`).
  2. **Typography** — type scale, families, weights, line heights, a specimen paragraph.
  3. **Spacing, radii, shadows, motion** — visual scales generated from token data.
  4. **Layout primitives** — container, stack, cluster, grid demos.
  5. **Components** — each `*.showcase.tsx` file exports its variants/states; the page collects them automatically (e.g. via `import.meta.glob`).
  6. **Theme switcher** at the top.
- Showcases double as visual/accessibility test fixtures for Playwright.

---

## 8. Performance, SEO and accessibility checklist

### Performance

- [ ] Static pages prerendered at build; blog server-rendered with CDN caching.
- [ ] Route-level code splitting (TanStack Router default — verify).
- [ ] Minimal client JS: interactive islands only where needed; no heavy dependencies without justification in `docs/decisions.md`.
- [ ] Fonts self-hosted, WOFF2, subset, `font-display: swap`, preload the primary face, fallback metric overrides (`size-adjust`, `ascent-override`) to avoid layout shift.
- [ ] Images: responsive `srcset`/`sizes`, AVIF/WebP, explicit `width`/`height`, `loading="lazy"` below the fold, `fetchpriority="high"` on the LCP image. Sanity images via its image URL builder.
- [ ] Budgets (enforced in CI via Lighthouse CI): LCP < 2.5 s, INP < 200 ms, CLS < 0.1, Lighthouse Performance ≥ 95 on mobile.

### SEO

- [ ] Per-route `title`, `description`, canonical URL, Open Graph and Twitter card tags via a `buildSeoMetadata()` service in `core`.
- [ ] `<html lang="en-GB">`.
- [ ] JSON-LD: `Person` (details from the CV, only fields Naomi approved for publishing) + `WebSite` on the home page, `BlogPosting` on posts.
- [ ] `sitemap.xml` (static routes + CMS posts), `robots.txt`, RSS feed.
- [ ] Semantic heading structure, descriptive link text, clean slugs.
- [ ] Open Graph images (static per page initially; generated per post as a later enhancement).

### Accessibility (target WCAG 2.2 AA)

- [ ] Semantic landmarks, one `<h1>` per page, logical heading order.
- [ ] Skip link, visible `:focus-visible` styles, focus moved and route change announced on navigation.
- [ ] Minimum 24×24 px target sizes; full keyboard support; no keyboard traps.
- [ ] Colour contrast verified for all token pairs in both themes (automated on `/system`).
- [ ] `prefers-reduced-motion`, `forced-colors`, and `prefers-contrast` respected.
- [ ] No information by colour alone; icons have accessible names or are `aria-hidden`.
- [ ] `eslint-plugin-jsx-a11y` in lint; axe checks in Playwright on every route and the `/system` page.

---

## 9. Deployment

- Each app is a **separate Cloudflare project** pointing at the same repo with its own root directory and build command (`pnpm turbo build --filter=portfolio`).
- Build only when relevant: configure build watch paths (or `turbo-ignore`) so each app only rebuilds when its own folder or a `packages/*` it depends on changes. With one app today this mostly skips deploys for docs-only changes; it matters once a second site exists.
- Preview deployments on every branch/PR.
- Custom domain: `naovixen.com` (plus `www` redirect to the apex, or the reverse — pick one canonical host).
- Environment variables (Sanity project ID, dataset, preview secret) documented in `.env.example` per app; secrets only in the hosting dashboard.
- GitHub Actions CI on every PR: typecheck, lint (ESLint + Stylelint), unit tests, token-file freshness check, Playwright + axe, Lighthouse CI.
- `docs/adding-a-new-site.md` explains how to spin up a new site in minutes (e.g. a future merch shop: new app folder, depend on the shared packages, set domain, create hosting project, deploy).

---

## 10. Phases

### Phase 0 — Groundwork and confirmation

- [x] `git init` (default branch `main`), then create `.gitignore` covering `node_modules/`, build output, `.env*` (except `.env.example`), `source-material/` and `docs/content-inventory.md`.
- [x] First commit: `.gitignore` and `PLAN.md` only — `chore: initialise repository`.
- [x] Ask Naomi whether to connect a remote now (e.g. a private GitHub repository). CI (Phase 8) and deployment (Phase 9) need one.
- [x] Read current docs: pnpm workspaces, Turborepo, TanStack Start + Router, Vite, React, Sanity, Cloudflare deployment for TanStack Start, typescript-eslint, Stylelint, Vitest, Playwright. Record versions in `docs/decisions.md`.
- [x] Ask Naomi to confirm/amend section 3.2 and answer section 12. **Section 3.2 is superseded by `CLAUDE.md` and `.claude/rules/`. Questions 1 and 2 answered. Questions 3–6 still open.**
- [x] Ask Naomi to place the Claude Design export (and/or screenshots) in `design-reference/` and her CV at `source-material/cv.pdf`.
- [x] Add `source-material/` to `.gitignore` before anything is committed.
- [x] Read the CV and write `docs/content-inventory.md` (also git-ignored): which page will use which CV information, plus a list of **content gaps** — everything the pages need that the CV doesn't cover. Ask Naomi to fill the gaps and confirm which contact details may be published.
- [x] Create `CLAUDE.md` containing: coding guidelines (section 3), architecture rules (section 4), the docs-first rule, and "readability over cleverness".
- **Verify:** Naomi has approved the guidelines. **Commit:** `docs: add CLAUDE.md and coding guidelines`.

### Phase 1 — Monorepo scaffold

- [x] Root `package.json`, `pnpm-workspace.yaml`, `turbo.json`, `.nvmrc` (current Node LTS), `.editorconfig`, `.gitignore`.
- [x] `@naovixen/tsconfig` (base, react-library, app) and `@naovixen/eslint-config`; Prettier; Stylelint with `selector-class-pattern` enforcing `^nx-[a-z0-9]+(-[a-z0-9]+)*(__[a-z0-9]+(-[a-z0-9]+)*)?(--[a-z0-9]+(-[a-z0-9]+)*)?$`.
- [x] Empty `core`, `styles`, `ui`, `content`, `system-page` packages exporting source.
- [x] `@typescript-eslint/naming-convention` configured for section 3.1/3.2: camelCase functions, variables and parameters; PascalCase classes, interfaces, types and React components; UPPER_CASE allowed for module-level constants; leading underscore **required** on `private` methods and **forbidden** elsewhere. Non-exported module functions with an underscore are checked in review (the rule can't tell exported from non-exported cleanly — verify against current docs).
- [x] Vitest ESLint plugin with `valid-title` (or equivalent — check current docs) enforcing section 3.5: outer `describe` starts with `Using `, inner `describe`s start with `given `, `and ` or `when `, and every `test` starts with `then it should `. Enable `consistent-test-it` (or equivalent) set to `test` so `it` is a lint error.
- [x] Lint rules enforcing section 3.4: component (`*.tsx`) and service files may export only their one component/class (e.g. `no-restricted-syntax` on exported interfaces, types, enums and top-level `const`s outside the matching subfolders); files in `interfaces/`, `enums/`, `functions/` may export only one symbol. Document any rule that can't be automated in `CLAUDE.md`.
- [x] `apps/portfolio` scaffolded with TanStack Start, importing one function from each package to prove linking and HMR work across packages.
- **Verify:** `pnpm dev`, `pnpm build`, `pnpm lint`, `pnpm typecheck` all pass; editing a package updates the app live. **Commit** once this passes.

### Phase 2 — Styles package

- [ ] Derive palette, typography, spacing, radii, shadows and motion from how `design-reference/` **looks when rendered**, normalised into a small, consistent scale in `*.tokens.ts`. Don't lift raw values from its CSS: collapse near-duplicates (e.g. five slightly different greys or paddings become one token) and list any merges in `docs/decisions.md` for Naomi to check.
- [ ] Token generator script + generated `tokens.css`; light and dark semantic themes.
- [ ] Reset, base typography, focus styles, layout primitives, minimal utilities, cascade layers.
- [ ] Self-hosted fonts with fallback metrics.
- **Verify:** generator is deterministic; contrast check for all semantic pairs passes AA. **Commit** once this passes.

### Phase 3 — Core package

- [ ] Models: `Project`, `NavigationItem`, `SocialLink`, `SeoMetadata`, `BlogPost`, `BlogPostSummary`, `Product`.
- [ ] Services: `ThemeService` (+ cookie storage and `matchMedia` source implementations), `ReducedMotionService`, `buildSeoMetadata`, `buildStructuredData`, `calculateContrastRatio`, date/reading-time formatting (en-GB).
- [ ] `BlogRepository` interface.
- [ ] Unit tests for everything, written to section 3.5 (public API and behaviour only).
- **Verify:** 100% of exported functions tested; `core` has zero React/DOM-framework imports. **Commit** once this passes.

### Phase 4 — UI package

- [ ] `NaovixenProvider`, `useTheme`, `useReducedMotion` adapters.
- [ ] Primitives: `SkipLink`, `VisuallyHidden`, `Container`, `Stack`, `Cluster`, `Grid`, `Heading`, `Text`, `Link` (router-agnostic: accepts a link component via provider), `Button`, `Icon`, `Tag`.
- [ ] Brand: `Logo` (`< naovixen />`, accessible name "naovixen"), `ThemeToggle`.
- [ ] Composites from the design: `SiteHeader`, `SiteNavigation`, `SiteFooter`, `ProjectCard`, `BlogPostCard`, `Callout`, `CodeBlock`, `Figure`, plus whatever else the prototype contains.
- [ ] Portable Text serializer map (`BlogContent` component).
- [ ] Each component follows section 3.4: component, showcase and test at the folder root; `interfaces/`, `enums/`, `constants/`, `functions/` and `styles/` subfolders as needed. Behaviour + axe tests on the component, unit tests beside each function.
- **Verify:** all tests pass; ESLint and Stylelint clean; no component imports a raw palette token; no component file exports anything but its component. **Commit** once this passes.

### Phase 5 — Portfolio app

- [ ] Root route: `<html lang="en-GB">`, theme cookie handling, head/meta, global CSS, provider, skip link, route announcer.
- [ ] Routes per the Claude Design prototype's layout, rebuilt from scratch with semantic HTML and our components (expected: `/`, `/projects`, `/projects/$slug`, `/about`, `/blog`, `/blog/$slug`, custom 404). Project data as typed local data files in the app unless Naomi wants it in the CMS. All copy comes from the CV or Naomi's answers (rule 7), never the prototype's placeholder text.
- [ ] SEO metadata + JSON-LD on every route; `sitemap.xml`, `robots.txt`.
- **Verify:** pages match the prototype's layout visually on mobile and desktop (compare screenshots side by side), with no code carried over from it; Lighthouse ≥ 95 across all four categories locally. **Commit** once this passes.

### Phase 6 — System page

- [ ] Build `@naovixen/system-page` (section 7) and mount `/system` in the portfolio.
- **Verify:** every token and every showcase appears automatically; page is `noindex` and absent from the sitemap. **Commit** once this passes.

### Phase 7 — Blog

- [ ] Sanity project + `apps/studio` schemas (post, author, tag, custom blocks) with validation.
- [ ] `SanityBlogRepository` in `content`, mapping to `core` models, with tests against fixture data.
- [ ] Blog routes with caching headers, tag filtering, pagination, RSS, sitemap entries.
- [ ] Draft preview route (optional webhook cache purge).
- **Verify:** publishing a post in Studio appears on the live site within the cache window with **no deployment**. **Commit** once this passes.

### Phase 8 — Quality gates and CI

- [ ] GitHub Actions: typecheck, lint, Stylelint, unit tests, token freshness, Playwright + axe on all routes, Lighthouse CI budgets.
- **Verify:** CI green on a PR. **Commit** once this passes.

### Phase 9 — Deployment

- [ ] Cloudflare project for the portfolio; Sanity Studio deployed.
- [ ] Custom domains, HTTPS, security headers (CSP, `Referrer-Policy`, `Permissions-Policy`, HSTS).
- [ ] Build filtering configured per app.
- **Verify:** `naovixen.com` live over HTTPS with the canonical host redirect working. **Commit** once this passes.

### Phase 10 — Documentation and cleanup

- [ ] `docs/architecture.md`, `docs/decisions.md`, `docs/adding-a-new-site.md`, README with day-to-day commands ("how to add a component", "how to add a post", "how to add a page").
- [ ] Confirm `CLAUDE.md` contains everything from sections 3 and 4, plus rules 6 and 7 (design reference and content sources).
- [ ] Delete `docs/content-inventory.md` once all gaps are filled (keep `source-material/` locally for future updates).
- [ ] **Delete `PLAN.md`** and commit: `chore: remove implementation plan`.

---

## 11. Definition of done

- Portfolio deployed to `naovixen.com` from a monorepo whose unversioned shared packages contain nothing portfolio-specific, so a new site can be added without touching them.
- Blog posts publish without a deploy and render with naovixen components.
- `/system` documents every token and component, generated from source.
- WCAG 2.2 AA, Lighthouse ≥ 95 in all categories on mobile, CI enforcing it.
- `core` is React-free; components are model-driven.
- `PLAN.md` removed; `CLAUDE.md` and `docs/` hold the lasting knowledge.

---

## 12. Open questions (answer before the dependent phase)

1. **Section 3.2 defaults** — keep or change? In particular **enums**: native TypeScript `enum`, or an `as const` object with a derived union type (erases to plain objects, works with TypeScript's `erasableSyntaxOnly` and Node's type stripping, which native enums don't)? (Phase 0)
2. **Blog CMS** — Sanity (structured content, hosted editor, instant publishing) or an alternative? Git-based options (MDX in the repo) are simpler but need a rebuild to publish. (Phase 7)
3. **Project/portfolio content** — typed data files in the repo, or managed in the CMS alongside the blog? (Phase 5)
4. **Hosting** — happy with Cloudflare, or prefer Netlify/Vercel? (Phase 9)
5. **Analytics** — none, or a privacy-friendly option that avoids a UK/EU cookie banner (e.g. Plausible, Cloudflare Web Analytics)? (Phase 9)
6. **Contact** — contact form (needs a form/email service) or just links? (Phase 5)
