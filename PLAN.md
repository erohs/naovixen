# naovixen — Launch plan

> **This file is temporary.** It tracks the static Astro site, merged to `main` on
> 2026-10-06, to launch on `www.naovixen.com`. Tick each box in the commit that finishes it. In the last
> phase, move anything of lasting value into `CLAUDE.md`, `.claude/rules/` or
> `docs/decisions.md`, then delete this file.

---

## Where we are

**Phases 1–9 are done, and the site is on `main`** (2026-10-06, PR #1), with CI green on
every check: types, lint, unit tests, end-to-end in all three engines with and without
script, and the Lighthouse budget.

Still to do: the verification that needs a person (Phase 10), launch content from Naomi (Phase 12), and the cut-over (Phase 13).
`www.naovixen.com` is still served by Vercel.

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
- [x] Animation parity with the prototype: menu, card hover, button press (Naomi, 2026-10-06).
- [ ] By hand: NVDA through the menu, search and theme switch. There is no way to check real
      Safari or VoiceOver, so WebKit in the end-to-end tests stands in for Safari.

### Phase 11 — CI and deployment

GitHub Actions checks; Cloudflare Workers Builds deploys. Pushing is the whole release: no
wrangler login and no API token.

- [x] `.github/workflows/ci.yml` on every PR and push to `main`: `check`, `lint`, `test`;
      `test:e2e` split into one job per engine, each with script on and off; and
      `pnpm test:lighthouse` (Lighthouse 13, fetched when run: median of three mobile runs on
      five pages, retrying a failed recording; performance at least 95, every other category
      100). Every job has a time limit. Each run's summary page shows the Lighthouse scores
      and the end-to-end results, with the merged Playwright report attached. Green on PR #1.
- [x] Push `astro-rebuild` and open a PR to `main`.
- [x] Connect Workers Builds in the Cloudflare dashboard (Naomi, 2026-10-06): the Worker
      `naovixen`, matching `wrangler.jsonc`; build command `pnpm run build`; deploy command
      `npx wrangler deploy` on `main`; Cloudflare's default `npx wrangler preview` on every
      other branch, which needs the `previews` block in `wrangler.jsonc`; build variable
      `PNPM_VERSION` = `12.8.1` (Cloudflare's default pnpm is older). `main` deploys to
      `naovixen.naomimshore.workers.dev`; the domain is untouched until Phase 13.
- [x] On PR #2's preview link (`<branch>-naovixen.naomimshore.workers.dev`):
      `x-robots-tag: noindex`, the headers, the redirects and the 404 status all as expected.
      Previews show Cloudflare's plain "Not found" rather than `404.html`, which production
      serves; a gap in the Previews beta, so check the 404 page on production instead.

### Phase 12 — Launch content

Settled with Naomi on 2026-10-06. Anything without a real value is left undefined in
`src/site.ts`, which hides whatever shows it.

- [x] Contact email `hello@naovixen.com`, forwarded by Cloudflare Email Routing.
    - [ ] Turn on Email Routing for `naovixen.com` and route `hello@` to Naomi's inbox
          (Naomi). Send a test before launch.
- [x] GitHub `erohs` and Bluesky `@naovixen.com`. The Bluesky handle is verified by the
      `_atproto` TXT record, which must survive every DNS change.
- [x] No testimonial and no portrait for now. Both components stay, rendering nothing until
      there is a real one.
- [x] The privacy notice names Cloudflare for hosting and email forwarding.
    - [ ] Add a line on the cookieless analytics when Phase 13 turns them on.
- [x] The CV at `/naomi-shore-cv.pdf`, redacted to the name alone: no town, phone, email or
      LinkedIn, in the text or the file's metadata. The town is off the about page too.
- [x] One Open Graph image for the whole site, `public/og.png`, drawn from the home page's
      hero.
- [x] Rewrite the copy, posts and case studies with a front-end focus, using the `writer`
      agent (`.claude/agents/writer.md`) with the `humanizer` plugin, then fill the remaining
      gaps in `docs/content-inventory.md`.

### Phase 13 — Cut over

- [x] Merge the `astro-rebuild` PR (#1, 2026-10-06).
- [ ] Move `www.naovixen.com` from Vercel to the Worker. The DNS is already on Cloudflare,
      but `www` and the bare domain point at Vercel, which serves the old fursuit app and
      redirects the bare domain to `www`. Cloudflare refuses a custom domain while a CNAME
      exists, so delete `www`'s Vercel CNAME and add `www.naovixen.com` as the Worker's
      custom domain straight after (`www` is down in between). Replace the bare domain's
      Vercel `A` records with a proxied `AAAA` `@` → `100::`, and add the "Redirect from root
      to WWW" rule to `https://www.naovixen.com`, keeping the path, with a 301.
- [ ] Retire the fursuit app's services (its code is kept in `erohs/fursuit-builder`, and its
      databases hold no customers):
    - [x] `fursuit-builder`: disable its Deploy and Validate migrations workflows, and delete
          its four Actions secrets.
    - [ ] Vercel: remove the domains, delete the project, and uninstall its GitHub app if
          unused.
    - [ ] Supabase: delete the prod and dev projects.
    - [ ] Resend: delete the API key and the `mail.naovixen.com` domain, then its DNS records
          (`MX` and `TXT` on `send.mail`, `TXT` on `resend._domainkey.mail`), and revoke any
          Cloudflare API token its one-click setup created.
    - [ ] Turnstile: delete the fursuit widget.
    - [ ] `_dmarc.naovixen.com`: once the contact email is settled, either keep it or, if
          nothing sends from `naovixen.com`, publish `v=spf1 -all` and `p=reject`.
- [ ] Turn on Cloudflare Web Analytics, which sets no cookies. Check its current docs first:
      if it needs a script beacon, ask before adding it, and allow it in the CSP in
      `public/_headers`. Record the decision in `docs/decisions.md`.
- [ ] Retire the Sanity Studio deployment and project (the export is kept).
- [ ] Delete `docs/content-inventory.md` once every gap is filled.
- [x] Update the memory notes that still describe the monorepo.
- [ ] Mobile Lighthouse 100 on every page type, run against the live `www.naovixen.com`.
      CI's budget is 95 for performance on a local server; local runs on 2026-10-06 scored
      100 on a post and a project, and 99 for performance on home and `/blog/` (LCP 1.8 s
      against 1.7 s).
- [ ] **Delete `PLAN.md`:** `chore: remove the launch plan`.

---

## Definition of done

- `www.naovixen.com` serves the Astro site over HTTPS, with `naovixen.com` redirecting to it.
- No placeholder reaches the live site.
- Publishing a post is a push to `main`.
- WCAG 2.2 AA, checked automatically and with NVDA; mobile Lighthouse 100 on the live site.
- `PLAN.md` removed; `CLAUDE.md`, `.claude/rules/` and `docs/decisions.md` hold what lasts.
