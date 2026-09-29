---
paths:
  - '**/*.tsx'
---

# React

Components are typed arrow constants:

```tsx
export const ProjectCard: FunctionComponent<IProjectCardProps> = ({
  project,
  variant = ProjectCardVariant.Default,
}) => {
  const className = buildProjectCardClassName(variant);

  return <article className={className}>…</article>;
};
```

React 19 removed `children` from `FunctionComponent`, so declare it on the props
interface when the component takes children.

A component file holds the component and nothing else. Its props interface, enums,
constants and helpers live in the sibling subfolders.

Components take **models** as props — `IProject`, `IBlogPostSummary` — not loose strings
assembled at the call site. Data loading belongs in routes, logic in services.

## The `on` prefix collides

A callback prop and its handler both start with `on`. Name the prop for the intent and the
handler for the DOM event it is bound to:

```tsx
const onClick = (): void => {
  onSelect(project.slug);
};
```

## Markup

Reach for a landmark, a heading, a `<button>` or an `<a>` before a `<div>`. A thing that
navigates is an `<a>`; a thing that acts is a `<button>`.

State goes on ARIA and `data-*` attributes, which the CSS then styles — so the accessible
state and the visual state cannot drift apart.

## Accessibility

jsx-a11y and axe are a backstop, not the standard. They cannot catch a wrong heading
order, a meaningless `alt`, or a focus order that makes no sense.

- One `<h1>` per page, heading levels in order.
- Keyboard-operable in a sensible order, no traps. Targets at least 24×24 px.
- Icons have an accessible name or are `aria-hidden`. Decoration is always `aria-hidden`.
- Nothing communicated by colour alone.
- Real `alt` text, or `alt=""` when genuinely decorative.
- Anything animated respects `prefers-reduced-motion`.

## Showcases

Every component has a `*.showcase.tsx` beside it exporting its variants and states. The
design system page collects them automatically and Playwright uses them as fixtures, so a
showcase missing a state is that state going untested.
