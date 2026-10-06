# naovixen — Launch plan

> **This file is temporary.** It tracks the static Astro rebuild from branch `astro-rebuild`
> to launch on `www.naovixen.com`. Tick each box in the commit that finishes it. In the last
> phase, move anything of lasting value into `CLAUDE.md`, `.claude/rules/` or
> `docs/decisions.md`, then delete this file.

---

## Where we are

**Phases 1–9 are done** (2026-10-06) on `astro-rebuild`. Every page, the content, search,
the theme switch and the menu are built, and `pnpm check`, `lint`, `test`, `build` and
`test:e2e` pass in all three engines with and without script. Locally, mobile Lighthouse
scores 99–100.

Still to do: the verification that needs a person or a deployment (Phase 10), CI and
deployment (Phase 11), launch content from Naomi (Phase 12), and the cut-over (Phase 13).

The TanStack Start, React and Sanity monorepo this replaces is at the `pre-astro` tag, and
its plan is in that tag's `PLAN.md`. Its Sanity dataset is exported to `notes/sanity-export`.

---

## Goal

One static Astro site, built the way Astro intends rather than ported from the monorepo:

- Animations behave exactly as the prototype's.
- Every page works and keeps its layout with script off, and reads in order with styles off.
- The same experience in current Chromium, Firefox and Safari.
- Fast (mobile Lighthouse 100), strong SEO, WCAG 2.2 AA.
- Easy to edit: content is MDX in the repo, copy sits in the template it appears in.

---

## How the rebuild plan changed

The rebuild was planned on 2026-10-04 with no client router, no theme switch and no search.
Building it changed these, each recorded with its reason in `docs/decisions.md`:

| Planned                                     | Built                                                                         |
| ------------------------------------------- | ----------------------------------------------------------------------------- |
| No script beyond one inline head script     | `<ClientRouter />` keeps the header across page changes; four bundled scripts |
| Menu's close replayed on the next page load | The header is never swapped, so the menu closes with its own transitions      |
| Theme follows the system only               | System by default, plus a switch that shows only with script                  |
| No search; topic pages only                 | Search over `/blog/search.json`, with topic pages standing in without script  |
| Experience and skills as YAML collections   | Typed lists in `src/data/`, which keep their order                            |
| JetBrains Mono for code, dates and chips    | The system monospace font; the logo is SVG drawn from JetBrains Mono          |
| A stylesheet per page                       | One stylesheet for every page                                                 |
| `ArticleLayout`                             | `PageLayout`                                                                  |

Dropped with the monorepo, from the old plan: Sanity and draft preview, the design-system
app, Turborepo build filtering, `docs/adding-a-new-site.md`, i18next, and BEM prefixes.

---

## Phases

### Phase 1 — Prepare

- [x] Tag `main` as `pre-astro`.
- [x] Export the Sanity dataset and check it against the seed fixture.
- [x] Create branch `astro-rebuild`.

### Phase 2 — Scaffold and tooling

- [x] Remove the monorepo; scaffold Astro 7 at the repo root.
- [x] Strictest tsconfig, ESLint, Prettier, Stylelint, Vitest, Playwright, `.nvmrc`,
      `wrangler.jsonc`.

### Phase 3 — Foundations

- [x] Tokens, reset, base and shared styles; fonts through the Fonts API.
- [x] `Head`, `BaseLayout`, the head script, theme, skip link, logo, footer.

### Phase 4 — Header and menu

- [x] The `<dialog>` menu and its animations, copied 1:1 from the prototype.
- [x] Client-side page changes that keep the header, so a menu link closes the menu in one slide.
- [x] Reduced motion and forced colours.

### Phase 5 — UI components

- [x] Link, LinkButton, LinkTile, Card, TagList, bubbles, PagerNav, Icon, BackToTop.

### Phase 6 — Content

- [x] Collection schemas; the six posts, three projects and the privacy notice as MDX.
- [x] Experience and skills lists; the content blocks (Callout, Facts, CodeFigure).

### Phase 7 — Pages

- [x] Home, about, contact, work and project, blog and post, privacy, 404.

### Phase 8 — Topics and search

- [x] Topic list and topic pages; blog search.

### Phase 9 — SEO outputs

- [x] Structured data (Person, WebSite, BlogPosting, BreadcrumbList), sitemap, feed, robots.
- [x] `_headers` (CSP, HSTS, caching) and `_redirects`.

### Phase 10 — Verify

- [x] End-to-end tests on every route in all three engines, with and without script and styles.
- [ ] Mobile Lighthouse 100 on every page type, measured on the Phase 11 preview. Local
      runs on 2026-10-06 (`wrangler dev`, gzip, Lighthouse 13.5) scored 100 in every category
      on a post and a project; home and `/blog/` scored 99 for performance (LCP 1.8 s against
      1.7 s) and 100 in the rest.
- [ ] Animation parity: the prototype and the new site side by side in each browser — menu,
      card hover, button press.
- [ ] By hand: real Safari on macOS and iOS; VoiceOver and NVDA through the menu, search and
      theme switch.

### Phase 11 — CI and deployment

GitHub Actions checks; Cloudflare Workers Builds deploys. Pushing is the whole release: no
wrangler login and no API token.

- [ ] `.github/workflows/ci.yml` on every PR and push to `main`: `check`, `lint`, `test`;
      `test:e2e` split into one job per engine, each with script on and off; and
      `pnpm test:lighthouse` (Lighthouse 13, fetched when run: median of three mobile runs on
      five pages, retrying a failed recording; performance at least 95, every other category
      100). Every job has a time limit. First run: Lighthouse scored the home page 99, 100,
      100, 100 before a failed recording, now retried. Tick once it is green on a PR.
- [x] Push `astro-rebuild` and open a PR to `main`.
- [ ] Connect Workers Builds in the Cloudflare dashboard (Naomi): Workers & Pages → Create
      application → Import a repository → `erohs/naovixen`. The Worker's name must be
      `naovixen`, matching `wrangler.jsonc`. Build command `pnpm build`; deploy command
      `npx wrangler deploy`; production branch `main`; build variable `PNPM_VERSION` =
      `12.8.1` (Cloudflare's default pnpm is older). Its first build, of `main`, fails
      until the PR merges, as `main` still holds the monorepo; nothing is served from it.
      Every other branch gets a preview link on its pull request.
- [ ] On the PR's preview link, `curl -I` for
      `x-robots-tag: noindex`, the headers, the 404 status and the `/about` → `/about/`
      redirect.
- [ ] Require the CI checks to pass before a PR merges to `main` (GitHub → Settings →
      Branches), since Workers Builds deploys `main` whatever CI says.

### Phase 12 — Launch content

None of these may ship. Each is marked "Placeholder" in the code.

- [ ] The real contact email (now `hello@naovixen.dev`).
- [ ] GitHub and Bluesky handles, or remove them. LinkedIn is the only confirmed profile.
- [ ] The testimonial's quote, name and role, or remove the section.
- [ ] The portrait photo, or remove its frames.
- [ ] The privacy notice's email and hosting providers, and a line on the cookieless
      analytics.
- [ ] The CV PDF, if one is to be published (a redacted copy, without the phone number or
      personal email). Until then every CV link stays hidden.
- [ ] An Open Graph image, at least one for the whole site.
- [ ] The remaining gaps in `docs/content-inventory.md`.

### Phase 13 — Cut over

- [ ] Merge the `astro-rebuild` PR; Workers Builds deploys it.
- [ ] Add `www.naovixen.com` as the Worker's custom domain, keeping `naovixen.com`
      redirecting to it, as the domain does today.
- [ ] Turn on Cloudflare Web Analytics, which sets no cookies. Check its current docs first:
      if it needs a script beacon, ask before adding it, and allow it in the CSP in
      `public/_headers`. Record the decision in `docs/decisions.md`.
- [ ] Retire the Sanity Studio deployment and project (the export is kept).
- [ ] Delete `docs/content-inventory.md` once every gap is filled.
- [x] Update the memory notes that still describe the monorepo.
- [ ] **Delete `PLAN.md`:** `chore: remove the launch plan`.

---

## Definition of done

- `www.naovixen.com` serves the Astro site over HTTPS, with `naovixen.com` redirecting to it.
- No placeholder reaches the live site.
- Publishing a post is a push to `main`.
- WCAG 2.2 AA and mobile Lighthouse 100, checked automatically and by hand.
- `PLAN.md` removed; `CLAUDE.md`, `.claude/rules/` and `docs/decisions.md` hold what lasts.
