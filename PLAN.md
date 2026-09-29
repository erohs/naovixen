# naovixen — Implementation Plan

> **This file is temporary.** It is the working plan for turning the Claude Design prototype into a production codebase.
> The implementing agent must **delete `PLAN.md` in the final phase**, after moving anything with lasting value (coding guidelines, architecture notes) into `CLAUDE.md` and `docs/`.

---

## Where we are

**Phases 0–5 are done.** `pnpm typecheck`, `test`, `lint` and `build` all pass. Next:
Phase 6, the design system page. Phase 5's pages carry placeholder copy (every file named
`Placeholder*` in `apps/portfolio/src/constants`) until Naomi answers the content gaps.

Still unanswered:

- Open questions 4–5 — hosting (9), analytics (9). Phase 5 routes follow the prototype:
  `/work`, `/work/$slug`, `/contact` and `/privacy` as well as the planned ones.
- The 16 content gaps in `docs/content-inventory.md` (git-ignored). The ones that bite
  first: which case studies exist, whether PebblePad work can be shown visually at all,
  Naomi's GitHub and Bluesky handles, and whether `naovixen.dev` is real or placeholder.

---

## 0. Rules for the implementing agent

1. **Read the latest official docs before each phase.** Your training data is out of date for most of this stack. Before writing code for a tool, fetch its current docs (getting started, config reference, migration notes) and check the latest stable version on npm. Record the versions you pinned in `docs/decisions.md`.
2. **Confirm before deviating.** If a decision in this plan turns out to be wrong or outdated (e.g. a tool is deprecated, an API changed), stop and ask Naomi rather than silently choosing an alternative.
3. **Readability over cleverness.** Prefer explicit, verbose, well-named code. No clever one-liners, no magic abstractions. Future Naomi should understand any file in one read.
4. **Work phase by phase.** Tick the checkboxes as you go. Each phase ends with its verification step passing before moving on.
5. **Open questions (section 12) must be answered before the phase that depends on them.**
6. **Trust the design's layout, not its code.** The Claude Design output may contain wonky CSS and messy implementation. Use it only for what it _looks like and how it behaves_: layout, spacing rhythm, hierarchy, colours, typography, interactions. Never copy its CSS, markup or JS. Rebuild everything clean and minimal from our tokens, layout primitives and conventions: the simplest CSS that reproduces the same visual result. If the prototype achieves something with hacks (magic numbers, absolute positioning, `!important`, fixed pixel heights, nested wrappers, non-semantic markup), find the clean equivalent. If a design detail can't be reproduced cleanly or accessibly, ask Naomi rather than copying the hack.
7. **Content comes from Naomi's CV, or from Naomi.** Her CV is at `source-material/cv.pdf`. Use it as the single source for personal and factual content: bio, roles, employers, dates, skills, projects, education and links. **Never invent or embellish anything.** If a page needs information the CV doesn't contain (e.g. project write-ups, screenshots, an "about me" tone, social links), or the CV is ambiguous, ask Naomi. Placeholder copy from the design reference is not content. Don't publish private details from the CV (phone number, home address, personal email) unless Naomi explicitly says to.
8. **Commit every stage.** The repo is initialised with `git init` as the very first step. Every phase ends with a commit once its verification passes, using Conventional Commits (e.g. `feat(theming): add design tokens and themes`). Smaller commits within a phase are welcome; never leave a phase's work uncommitted before starting the next. Each commit also ticks the completed checkboxes in `PLAN.md`, so the plan's history shows progress. Never commit anything in `source-material/`, secrets or `.env` files.

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
| Framework-agnostic logic  | Pure TS packages: `models`, `formatting`, `seo`, `cms`, `theming`                                | React only appears in thin adapters (hooks) and components                                                                                                                                                                                       |
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
│   └── studio/                  # Sanity Studio — Phase 7
├── packages/
│   ├── models/                  # domain data shapes, no behaviour — Phase 3
│   ├── formatting/              # text and date formatting
│   ├── seo/                     # metadata and structured data — Phase 3
│   ├── cms/                     # blog repository adapters — Phase 7
│   ├── theming/                 # tokens, themes, fonts, reset, base, layout primitives
│   ├── components/              # generic HTML-level React components
│   ├── layout/                  # Container, Stack, Cluster, Grid
│   ├── blocks/                  # generic compositions: Card, Breadcrumb, Disclosure…
│   ├── brand/                   # logo, wordmark, fox and doodles
│   ├── site-shell/              # header, footer, theme toggle, back-to-top
│   ├── portable-text/           # blog body renderer
│   ├── component-testing/       # shared test setup and axe helper (dev only)
│   ├── design-system/           # every showcase, and the hidden /system page
│   ├── typescript-config/       # shared tsconfig bases
│   └── eslint-config/           # shared lint rules
├── design-reference/            # Claude Design export — visual reference only
├── source-material/             # cv.pdf — git-ignored
├── docs/
├── CLAUDE.md
└── PLAN.md                      # this file — delete when done
```

Packages are internal: no build step, no versions, each exports its TypeScript source from
`src/index.ts`. The allowed dependency directions are enforced in `eslint.config.js`.

---

## 3–4. Coding guidelines and architecture

Moved to `CLAUDE.md` and `.claude/rules/`, which are the source of truth.

---

## 5. Styling system

### 5.1 Tokens and stylesheets

Built in Phase 2 in `packages/theming`. Token data lives in `src/tokens/*.tokens.ts`;
`pnpm generate` writes `src/generated/tokens.css`, and lint fails if it is stale. The
conventions are in `.claude/rules/styles.md`.

`packages/components/src/index.css` imports every component's `styles/*.css` into
`layer(components)`. Each app imports `@naovixen/theming/styles.css` then
`@naovixen/components/styles.css` once, in its root route.

### 5.3 Theming

- `<html data-theme="light|dark">` holds the resolved theme; `data-theme-preference` holds the user's choice.
- Preference stored in a cookie so the server renders the correct theme (no flash). A tiny inline script in `<head>` handles the `system` case before first paint.
- Themes only redefine **semantic** colour tokens; components never branch on theme.
- `ThemeToggle` component: accessible (announces current state), works without JavaScript falling back to system theme.

### 5.4 Brand direction (from the design brief)

Simple, accessible, professional, Scandinavian restraint with a playful hint of colour and interactivity; colour and sketchy/comic-book feel inspired by Jayrnski. Logo styled as code: `< naovixen />`.

- Playful colours will often be used decoratively; **check every text/background pair meets WCAG 2.2 AA in both themes**. The pairs are listed in `ContrastRequirements.const.ts` and tested.
- Sketchy/comic flourishes (hand-drawn borders, offset shadows, doodles) should be CSS/SVG decoration, `aria-hidden`, and toned down under `prefers-reduced-motion` and `forced-colors`.

---

## 6. Blog

### 6.1 Requirements

- Add or edit posts **without redeploying**.
- Render posts with Naomi's own components and styles, including custom embedded blocks (callouts, code blocks, image with caption, project embeds, etc.).

### 6.2 Approach (proposed — confirm in open questions)

- **Sanity** as headless CMS; Studio lives in `apps/studio` and is deployed to Sanity's hosted studio URL. Verify current free-tier limits.
- Content is **Portable Text** (structured JSON), rendered by a serializer map in `components` so every block/mark becomes a `@naovixen/components` component. No raw HTML injection.
- Schema enforces quality: required `alt` text on images, required excerpt/description (SEO), slug validation, published date, tags.
- **Framework-agnostic boundary:**
    - `models`: `BlogPost`, `BlogPostSummary`, `BlogRepository` interface (`listPosts`, `getPostBySlug`, `listTags`).
    - `cms`: `SanityBlogRepository implements BlogRepository` — maps CMS documents to `models`. Swapping CMS later means writing one new adapter.
- **Freshness without deploys:** blog routes are server-rendered; responses sent with `Cache-Control` using `s-maxage` + `stale-while-revalidate` so the CDN serves fast and picks up new posts within minutes. Optional: a Sanity webhook that purges the CDN cache for instant publishing.
- Draft preview: preview route guarded by a secret token, using Sanity's draft perspective. Verify current Sanity preview/visual-editing docs.
- RSS/Atom feed at `/blog/feed.xml`; blog posts included in the sitemap.

---

## 7. Hidden design system page (`/system`)

- Lives in `@naovixen/design-system` and is mounted as a route in every app, so each site shows the shared system rendered with its own theme.
- Not linked anywhere, `<meta name="robots" content="noindex, nofollow">` plus `X-Robots-Tag` header, excluded from the sitemap. **Do not list it in `robots.txt`** (that advertises it). Hidden ≠ secret; nothing sensitive goes here.
- Sections:
    1. **Colours** — every semantic token, swatch in light and dark, value, and contrast ratio against its paired token (computed in `theming`).
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

- [ ] Per-route `title`, `description`, canonical URL, Open Graph and Twitter card tags via a `buildSeoMetadata()` function in `seo`.
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
- [x] `@naovixen/typescript-config` (base, react-library, app) and `@naovixen/eslint-config`; Prettier; Stylelint with `selector-class-pattern` enforcing `^nx-[a-z0-9]+(-[a-z0-9]+)*(__[a-z0-9]+(-[a-z0-9]+)*)?(--[a-z0-9]+(-[a-z0-9]+)*)?$`.
- [x] Empty `theming`, `components`, `formatting`, `design-system` packages exporting source.
- [x] `@typescript-eslint/naming-convention` configured for section 3.1/3.2: camelCase functions, variables and parameters; PascalCase classes, interfaces, types and React components; UPPER_CASE allowed for module-level constants; leading underscore **required** on `private` methods and **forbidden** elsewhere. Non-exported module functions with an underscore are checked in review (the rule can't tell exported from non-exported cleanly — verify against current docs).
- [x] Vitest ESLint plugin with `valid-title` (or equivalent — check current docs) enforcing section 3.5: outer `describe` starts with `Using `, inner `describe`s start with `given `, `and ` or `when `, and every `test` starts with `then it should `. Enable `consistent-test-it` (or equivalent) set to `test` so `it` is a lint error.
- [x] Lint rules enforcing section 3.4: component (`*.tsx`) and service files may export only their one component/class (e.g. `no-restricted-syntax` on exported interfaces, types, enums and top-level `const`s outside the matching subfolders); files in `interfaces/`, `enums/`, `functions/` may export only one symbol. Document any rule that can't be automated in `CLAUDE.md`.
- [x] `apps/portfolio` scaffolded with TanStack Start, importing one function from each package to prove linking and HMR work across packages.
- **Verify:** `pnpm dev`, `pnpm build`, `pnpm lint`, `pnpm typecheck` all pass; editing a package updates the app live. **Commit** once this passes.

### Phase 2 — Theming package

- [x] Derive palette, typography, spacing, radii, shadows and motion from how `design-reference/` **looks when rendered**, normalised into a small, consistent scale in `*.tokens.ts`. Don't lift raw values from its CSS: collapse near-duplicates (e.g. five slightly different greys or paddings become one token) and list any merges in `docs/decisions.md` for Naomi to check.
- [x] Token generator script + generated `tokens.css`; light and dark semantic themes.
- [x] Reset, base typography, focus styles, layout primitives, minimal utilities, cascade layers.
- [x] Self-hosted fonts with fallback metrics.
- **Verify:** generator is deterministic; contrast check for all semantic pairs passes AA. **Commit** once this passes.

### Phase 3 — Logic packages

- [x] `models`: `Project`, `NavigationItem`, `SocialLink`, `SeoMetadata`, `BlogPost`, `BlogPostSummary`, plus `Image`, `Site` and `Person` for SEO. `Product` dropped until a shop exists.
- [x] `cms`: the `BlogRepository` interface, which the Sanity adapter joins in Phase 7.
- [x] `seo`: `buildHeadTags`, and JSON-LD builders for `Person`, `WebSite` and `BlogPosting`.
- [x] `formatting`: date and reading-time formatting (en-GB).
- [x] `ThemeController` in `theming`, with cookie storage and `matchMedia` source implementations. `ReducedMotionService` dropped: every animation is CSS, which honours `prefers-reduced-motion` itself.
- [x] Unit tests for everything, written to `.claude/rules/testing.md`.
- **Verify:** every exported function tested; no React or DOM imports outside `components` and `design-system`. **Commit** once this passes.

### Phase 4 — React packages

Reworked after review: the first cut was site widgets, not a component library.

- [x] `components`: generic, HTML-level, intrinsic props passed through — Button, BusyButton, IconButton, ToggleButton, Link, LinkIcon, LinkButton, ExternalLink, Input, TextArea, Label, FormField, Heading, Text, Code, Image, Tag, Blockquote, Icon (one `*.icon.ts` source per icon), VisuallyHidden, SkipLink.
- [x] `layout`: Container, Stack, Cluster, Grid.
- [x] `blocks`: Card, Callout, CodeBlock, Figure, TagList, SpeechBubble, Breadcrumb, Pagination, Disclosure, NavigationList, LinkTile, SectionHeading, HandDrawnRule.
- [x] `brand`: Logo, Wordmark, a redrawn line-art FoxMascot, Heart, Paw.
- [x] `site-shell`: ThemeProvider and `useTheme`, ThemeToggle, SiteHeader, SiteNavigation, MobileMenu, SiteFooter, BackToTop.
- [x] `portable-text`: BlogContent.
- [x] App compositions: ProjectCard and PostCard in `apps/portfolio`.
- [x] Showcases for every component in `design-system`. Behaviour + axe tests on every component.
- **Verify:** all tests pass; ESLint and Stylelint clean; no component imports a raw palette token; no component file exports anything but its component. **Commit** once this passes.

### Phase 5 — Portfolio app

- [x] Root route: `<html lang="en-GB">`, theme cookie handling, head/meta, global CSS, provider, skip link, route announcer.
- [x] Routes per the Claude Design prototype's layout, rebuilt from scratch with semantic HTML and our components: `/`, `/about`, `/blog`, `/blog/$slug`, `/contact`, `/privacy`, custom 404. The work routes move to Phase 7 with the CMS.
- [x] Copy the CV cannot supply uses the prototype's placeholder text for now, kept in one clearly named placeholder file per route so it is easy to find and replace. It never deploys (see Phase 9).
- [x] SEO metadata + JSON-LD on every route; `sitemap.xml`, `robots.txt`.
- **Verify:** pages match the prototype's layout visually on mobile and desktop (compare screenshots side by side), with no code carried over from it; Lighthouse ≥ 95 across all four categories locally. **Commit** once this passes.
- **Result:** mobile Lighthouse 97–98 performance and 100 for accessibility, best practices and SEO on every page, measured behind compression (see `docs/decisions.md`); 87–92 performance without it.

### Phase 6 — Design system page

- [ ] Build `@naovixen/design-system` (section 7) and mount `/system` in the portfolio.
- **Verify:** every token and every showcase appears automatically; page is `noindex` and absent from the sitemap. **Commit** once this passes.

### Phase 7 — Blog

- [ ] Sanity project + `apps/studio` schemas (post, project, author, tag, custom blocks) with validation.
- [ ] Project repository in `cms`, `/work` and `/work/$slug` routes, and the home page's featured work.
- [ ] `SanityBlogRepository` in `cms`, mapping to `models`, with tests against fixture data.
- [ ] Blog routes with caching headers, tag filtering, pagination, RSS, sitemap entries.
- [ ] Draft preview route (optional webhook cache purge).
- **Verify:** publishing a post in Studio appears on the live site within the cache window with **no deployment**. **Commit** once this passes.

### Phase 8 — Quality gates and CI

- [ ] GitHub Actions: typecheck, lint, Stylelint, unit tests, token freshness, Playwright + axe on all routes, Lighthouse CI budgets.
- **Verify:** CI green on a PR. **Commit** once this passes.

### Phase 9 — Deployment

- [ ] Every Phase 5 placeholder replaced with real copy from the CV or Naomi.
- [ ] Cloudflare project for the portfolio; Sanity Studio deployed.
- [ ] Custom domains, HTTPS, security headers (CSP, `Referrer-Policy`, `Permissions-Policy`, HSTS).
- [ ] Build filtering configured per app.
- **Verify:** `naovixen.com` live over HTTPS with the canonical host redirect working. **Commit** once this passes.

### Phase 10 — Documentation and cleanup

- [ ] `docs/architecture.md`, `docs/decisions.md`, `docs/adding-a-new-site.md`, README with day-to-day commands ("how to add a component", "how to add a post", "how to add a page").
- [ ] Delete `docs/content-inventory.md` once all gaps are filled (keep `source-material/` locally for future updates).
- [ ] **Delete `PLAN.md`** and commit: `chore: remove implementation plan`.

---

## 11. Definition of done

- Portfolio deployed to `naovixen.com` from a monorepo whose unversioned shared packages contain nothing portfolio-specific, so a new site can be added without touching them.
- Blog posts publish without a deploy and render with naovixen components.
- `/system` documents every token and component, generated from source.
- WCAG 2.2 AA, Lighthouse ≥ 95 in all categories on mobile, CI enforcing it.
- Only `components` and `design-system` import React; components are model-driven.
- `PLAN.md` removed; `CLAUDE.md` and `docs/` hold the lasting knowledge.

---

## 12. Open questions (answer before the dependent phase)

1. **Section 3.2 defaults** — keep or change? In particular **enums**: native TypeScript `enum`, or an `as const` object with a derived union type (erases to plain objects, works with TypeScript's `erasableSyntaxOnly` and Node's type stripping, which native enums don't)? (Phase 0)
2. **Blog CMS** — Sanity (structured content, hosted editor, instant publishing) or an alternative? Git-based options (MDX in the repo) are simpler but need a rebuild to publish. (Phase 7)
3. **Project/portfolio content** — typed data files in the repo, or managed in the CMS alongside the blog? (Phase 5) **Answered: Sanity, alongside the blog.**
4. **Hosting** — happy with Cloudflare, or prefer Netlify/Vercel? (Phase 9)
5. **Analytics** — none, or a privacy-friendly option that avoids a UK/EU cookie banner (e.g. Plausible, Cloudflare Web Analytics)? (Phase 9)
6. **Contact** — contact form (needs a form/email service) or just links? (Phase 5) **Answered: links only.**
