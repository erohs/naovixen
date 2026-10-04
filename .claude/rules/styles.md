---
paths:
    - "**/*.css"
    - "packages/theming/src/tokens/**"
---

# CSS

Global stylesheets. No Tailwind, no CSS-in-JS, no CSS Modules.

## Names

Classes are `nv-` prefixed BEM, enforced by Stylelint. One block per file, named after the
block. A page's stylesheet is the exception: it holds the page's block and one for each of
the sections written in the page's file. Files stay under 400 lines, as in TypeScript; when
a page's would not, its larger sections take a file each beside it, named for the section.

```css
.nv-card {
}
.nv-card__title {
}
.nv-card--featured {
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
@layer reset, tokens, base, components, utilities, overrides;
```

Layer order settles precedence, so a rule that loses a fight is in the wrong layer.
`!important` is a lint error.

## Stacking

`z-index` takes only a layer token, enforced by Stylelint, so nothing is bumped to win a fight.
Five layers, each with one meaning, shown on the design system's tokens page:

| Layer                | Use                                                     |
| -------------------- | ------------------------------------------------------- |
| `--z-index-behind`   | Decoration behind its own block's content               |
| `--z-index-raised`   | A part lifted above the rest of its block               |
| `--z-index-floating` | Fixed controls over the page, such as back-to-top       |
| `--z-index-overlay`  | What covers the page, such as the header with its menu  |
| `--z-index-topmost`  | What must never be covered while focused: the skip link |

A block that stacks its own parts with `behind` or `raised` sets `isolation: isolate`, so
they stay inside it. Two parts on one layer stack in source order. Something that seems to
need a sixth layer is in the wrong stacking context.

## Theming

Themes redefine semantic colour tokens and nothing else. `<html>` carries `data-theme` for
the resolved theme and `data-theme-preference` for the user's choice. No component branches
on the theme, and nothing outside the token files selects on `[data-theme]`.

## State

Style ARIA and `data-*` attributes, not state classes:

```css
.nv-tab[aria-selected="true"] {
}
.nv-disclosure[data-state="open"] {
}
```

## Accessibility

- Every text/background pair meets WCAG 2.2 AA in **both** themes. A test checks the pairs
  in `ContrastRequirements.const.ts`, and the design system shows each ratio.
- `:focus-visible` is always visible and never removed without a replacement.
- Honour `prefers-reduced-motion` (drop transforms, keep opacity), `forced-colors` (use
  `currentColor`, let system colours through) and `prefers-contrast`.
- Decorative flourishes are `aria-hidden` in the markup and toned down under reduced motion
  and forced colours.

## Separation

No dividers. Content is separated by space and grouping, never by an `<hr>`, a rule, or a
border between sections or list items. A border outlines a box; it never splits one. The
exceptions are the design's: the solid edge along the top of the footer, and a dashed rule
above the footer's small print and above a card's details. In
forced colours, where backgrounds vanish, a box that relies on its fill keeps a
`transparent` border so the system draws one.

## Layout

No layout components. A block or page lays itself out in its own stylesheet: `display`,
`gap` with a space token, and `padding-inline: var(--space-padding-page-centred)` to hold
content at the page width.

## Modern CSS

Every browser gets the same result. Use a feature only once Chromium, Firefox and Safari all
ship it, checking first; never a Chromium-only one such as `overlay` or `closedby`. Within
that: nesting, `:has()`, container queries, `clamp()`,
`oklch()`, `light-dark()`, `@property`, `color-scheme`, View Transitions as progressive
enhancement only.

Logical properties throughout — `padding-inline`, `border-block-end`,
`inset-inline-start`. The physical equivalents are a lint error.
