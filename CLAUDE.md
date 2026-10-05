# naovixen

Naomi Shore's portfolio and blog: a static Astro site that builds to plain HTML, deployed to
Cloudflare. TypeScript, pnpm. `docs/decisions.md` records the choices code cannot explain.

## Working rules

- **Check a tool's current docs before using it.** This stack moves faster than training
  data. Installed versions are in `pnpm-lock.yaml`.
- **Ask before deviating** from anything here. Never silently substitute an alternative.
- **Readability over cleverness.** Functions 25 lines, files 400, both enforced. Comments
  only where the code cannot speak for itself.
- **WCAG 2.2 AA is the floor.** If a design detail cannot be built accessibly, ask.
- **Every current browser gets the same experience.** Build only on features Chromium,
  Firefox and Safari all ship. Where one lags, use an approach that works in all three; if
  none exists, ask.
- **HTML and CSS first.** Every page works, and keeps its layout, with JavaScript off, and
  reads in order with styles off. Reach for script only when HTML and CSS cannot do the job,
  and ask first.

## Content

Anything factual about Naomi comes from `source-material/cv.pdf` (git-ignored) or from
Naomi. Never invent a project, a handle, a testimonial or a bio. The prototype's placeholders
(an email, two handles, a testimonial, photo frames) stay in place, each marked "Placeholder"
in the code, until Naomi replaces them; none may reach launch. A fact with no placeholder,
such as the CV, is left out and whatever shows it hides itself.

Never publish her phone number, home address or personal email unless she asks.

## Design reference

`design-reference/` (git-ignored) holds Claude Design exports. It is a picture, not a codebase.
Take layout, spacing, hierarchy, colour, typography and motion from it, copying animation
values exactly. Rebuild everything else from our own tokens and components with the simplest
CSS that gets the same result. If a detail needs a hack, ask rather than copy it.

## Layout

```
src/
  site.ts            facts shown across the site: name, links, navigation
  content.config.ts  collection schemas
  content/           posts, projects and the privacy notice, as MDX
  data/              typed lists the home page shows: experience, skills
  pages/             one file per URL
  layouts/           BaseLayout (every page), PageLayout (pages with a breadcrumb)
  components/        site/ (header, footer, menu), ui/ (shared pieces), content/ (MDX
                     blocks), and a folder per area that owns its own: home/, blog/, work/
  lib/               pure functions with tests beside them
  scripts/           the browser scripts: one inlined in the head, the rest bundled
  styles/            tokens, reset, base, and the few styles several components share
  icons/             SVG icons, with their licences
tests/e2e/           Playwright, every engine, with and without script
```

A component lives with the one area that uses it, and moves to `ui/` when a second needs it.
Components are PascalCase `.astro`; everything else is kebab-case. Copy is written in the
template it appears in.

## Commits

Conventional Commits: `feat: add topic pages`. Never commit `source-material/`, `notes/`,
`.env`, or anything holding personal details.

## Delegating work

A subagent writes its findings to `notes/<task>.md` as it goes, not only in its final report,
so the work survives if it runs out of context. `notes/` is git-ignored.

## Conventions

`.claude/rules/` holds the detail, each file scoped to what it covers: `typescript.md`,
`astro.md`, `styles.md`, `testing.md`.
