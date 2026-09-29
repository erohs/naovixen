---
paths:
  - "**/*.css"
---

# CSS

Global stylesheets. No Tailwind, no CSS-in-JS, no CSS Modules.

## Class names

BEM, prefixed `nx-`, all lower case:

```css
.nx-project-card { }
.nx-project-card__title { }
.nx-project-card--featured { }
```

Stylelint enforces the pattern. One block per file, named after the block:
`styles/project-card.css`.

## Custom properties

Unprefixed, category first:

```css
--color-accent
--space-4
--font-size-body
--duration-fast
```

The categories are `--color-*`, `--font-family-*`, `--font-size-*`, `--font-weight-*`,
`--line-height-*`, `--letter-spacing-*`, `--space-*`, `--size-*`, `--radius-*`,
`--border-width-*`, `--shadow-*`, `--duration-*`, `--easing-*`, `--layout-*`,
`--breakpoint-*` (reference only — media queries cannot read custom properties) and
`--z-index-*`.

Component-scoped properties lead with the block name and are set on the block:

```css
.nx-project-card {
  --project-card-padding-inline: var(--space-4);
}
```

## Tokens are semantic

Components use `--color-surface`, `--color-text-muted`, `--color-accent`,
`--color-border`, `--color-focus-ring`. Raw palette values appear only in the token source
and are never referenced from a component stylesheet.

Tokens are generated. Edit `packages/styles/src/tokens/*.tokens.ts` and regenerate — never
hand-edit `packages/styles/src/generated/tokens.css`. CI fails if the generated file is
out of date.

## Cascade layers

Declared once, in `packages/styles/src/index.css`:

```css
@layer reset, tokens, base, layout, components, utilities, overrides;
```

Every component stylesheet is imported into `layer(components)`. Because layer order
already settles precedence, specificity fights should not happen — if you reach for
`!important` or a doubled selector, the rule is in the wrong layer.

## Theming

Themes redefine semantic colour tokens and nothing else. `<html>` carries
`data-theme="light|dark"` for the resolved theme and `data-theme-preference` for the
user's choice.

No component ever branches on the theme, and no stylesheet ever selects on
`[data-theme]` outside the token files.

## State comes from attributes

Style ARIA and `data-*` attributes, not state classes. The accessible state and the
visual state are then the same fact, and cannot drift apart.

```css
.nx-tab[aria-selected='true'] { }
.nx-disclosure[data-state='open'] { }
```

## Accessibility

- Every text/background pair must meet WCAG 2.2 AA in **both** themes. The `/system` page
  computes these automatically — check it after changing a colour token.
- `:focus-visible` is always visible, and never removed without a replacement.
- Honour `prefers-reduced-motion` (cut transforms and long transitions, keep opacity),
  `forced-colors` (let system colours through; use `currentColor` and `canvas`-aware
  borders) and `prefers-contrast`.
- Decorative flourishes — hand-drawn borders, offset shadows, doodles — are CSS or SVG,
  `aria-hidden` in the markup, and toned down under reduced motion and forced colours.
- Never hide focus or meaning behind `overflow: hidden`.

## Modern CSS

Welcome where Baseline support allows, and worth checking before relying on: native
nesting, `:has()`, container queries, logical properties (`margin-inline`, `padding-block`),
`clamp()` for fluid type and space, `oklch()`, `light-dark()`, `@property`, `color-scheme`,
and View Transitions as progressive enhancement only.

Prefer logical properties throughout — `padding-inline`, `border-block-end`, `inset-inline-start`.
