---
paths:
    - '**/*.css'
    - 'packages/theming/src/tokens/**'
---

# CSS

Global stylesheets. No Tailwind, no CSS-in-JS, no CSS Modules.

## Names

Classes are `nx-` prefixed BEM, enforced by Stylelint. One block per file, named after the
block.

```css
.nx-card {
}
.nx-card__title {
}
.nx-card--featured {
}
```

Custom properties are unprefixed, lead with their category, then say what the value is
for: `--space-between-content`, `--space-padding-action`, `--font-size-h3`.
Categories are `color`, `font-family`, `font-size`, `font-weight`, `line-height`,
`letter-spacing`, `space`, `size`, `radius`, `border-width`, `shadow`, `duration`,
`easing`, `layout`, `breakpoint`, `z-index`.

Component-scoped properties lead with the block name and are set on the block:
`--card-padding-inline`.

## Tokens

Tokens are few and general on purpose. Pick the one whose name fits the job, say
`--space-between-content`; add a token only when nothing fits, never one per component.
No length or colour literals in a component stylesheet.

Space, type and layout are in rem so they follow the reader's font size. Borders, radii and
shadows are drawing geometry and stay in px.

Tokens are generated. Edit `packages/theming/src/tokens/*.tokens.ts`, run `pnpm generate`
in `packages/theming`, and never hand-edit the generated CSS. Lint fails if it is stale.

## Layers

Declared once, in `packages/theming/src/index.css`:

```css
@layer reset, tokens, base, layout, components, utilities, overrides;
```

Layer order settles precedence, so a rule that loses a fight is in the wrong layer.
`!important` is a lint error.

## Theming

Themes redefine semantic colour tokens and nothing else. `<html>` carries `data-theme` for
the resolved theme and `data-theme-preference` for the user's choice. No component branches
on the theme, and nothing outside the token files selects on `[data-theme]`.

## State

Style ARIA and `data-*` attributes, not state classes:

```css
.nx-tab[aria-selected='true'] {
}
.nx-disclosure[data-state='open'] {
}
```

## Accessibility

- Every text/background pair meets WCAG 2.2 AA in **both** themes. The design system page
  computes this — check it after changing a colour token.
- `:focus-visible` is always visible and never removed without a replacement.
- Honour `prefers-reduced-motion` (drop transforms, keep opacity), `forced-colors` (use
  `currentColor`, let system colours through) and `prefers-contrast`.
- Decorative flourishes are `aria-hidden` in the markup and toned down under reduced motion
  and forced colours.

## Modern CSS

Use where Baseline allows, checking first: nesting, `:has()`, container queries, `clamp()`,
`oklch()`, `light-dark()`, `@property`, `color-scheme`, View Transitions as progressive
enhancement only.

Logical properties throughout — `padding-inline`, `border-block-end`,
`inset-inline-start`. The physical equivalents are a lint error.
