---
paths:
    - "**/*.test.ts"
    - "tests/**"
---

# Testing

**Unit tests** (Vitest) sit beside the pure function they test in `src/lib/`, named
`<module>.test.ts`. A test earns its place by checking something the code decides: an
ordering, a neighbour, a calculation, data mapped from one shape to another.

**End-to-end tests** (Playwright) in `tests/e2e/` run against the built site in Chromium,
Firefox and WebKit, each with script on and off. Every page is checked for status, title,
canonical URL, structured data and axe's WCAG 2.2 AA rules in both themes. A check of the
served HTML alone is the same everywhere, so it runs once, in Chromium. A test that needs
script says so with `test.skip(!javaScriptEnabled, …)`. A test never races an animation: slow
it down in the test instead.

**Lighthouse** (`tests/lighthouse.ts`, `pnpm test:lighthouse`) holds every page type to its
mobile budget in CI, against the site served by `wrangler dev`.

Test behaviour, not implementation: query as a reader would, by role, accessible name or
text. No markup snapshots.

## Wording

Always `test`, never `it`. One `describe` per scenario, its title one sentence: the subject,
then any context, then the action. No nested `describe` blocks. A pure function has no state,
so it skips `given`.

```ts
describe("Using relatedPosts, when no topic is shared", () => {
    test("then it should find nothing", () => {});
});
```

Two outcomes are two `then it should` tests, not one test with two assertions.

Automated checks find only some problems. Before a release, test by hand in real Safari and
with a screen reader.
