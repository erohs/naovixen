---
paths:
    - "**/*.css"
    - "src/**/*.astro"
---

# CSS

Scoped `<style>` in each component, with `scopedStyleStrategy: 'where'`, so scoping adds no
specificity. Global sheets in `src/styles/` sit in layers (`reset`, `base`, `shared`);
component styles are unlayered and win over them.

## Names

Short kebab-case classes, a `--variant` suffix where one block has variants. Scoping does the
namespacing, so no prefixes. Style state through ARIA and `data-*` attributes, not classes.
A component-scoped custom property leads with the block (`--card-radius`).

## Tokens

`src/styles/tokens.css` holds them all, named category first (`--space-between-content`,
`--font-size-h3`). Few and general on purpose: pick the one whose name fits the job, and add
one only when nothing fits, never one per component. Space and type are in rem; borders,
radii and shadows are drawing geometry in px. Colours are `light-dark()` pairs, so the theme
follows the system setting with no script. Design measurements that only mean something
relative to each other, such as the card's folded corner, are written out.

## Accessibility

- Every text and background pair meets WCAG 2.2 AA in both themes.
- `:focus-visible` is always visible and never removed without a replacement.
- Honour `prefers-reduced-motion` (drop transforms, keep opacity), `forced-colors` and
  `prefers-contrast`.
- Generated content is decoration: give it empty alternative text (`content: "/" / ""`).
- Never reorder meaningful content with CSS; source order is reading order.

## Layout and features

Logical properties throughout, enforced by Stylelint. No `!important`. No dividers between
sections or list items: space separates content, apart from the design's own dashed rules in
cards and the footer's top edge. Use a feature only once Chromium, Firefox and Safari all ship
it, and check first.
