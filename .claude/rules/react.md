---
paths:
  - "**/*.tsx"
---

# React components

## Form

Components are typed arrow constants.

```tsx
export const ProjectCard: FunctionComponent<IProjectCardProps> = ({
  project,
  variant = ProjectCardVariant.Default,
}) => {
  const className = buildProjectCardClassName(variant);

  return <article className={className}>…</article>;
};
```

React 19 removed `children` from `FunctionComponent`, so any component accepting children
declares it on its own props interface.

A component file contains the component and nothing else. Its props interface, enums,
constants and helper functions each live in their own subfolder beside it.

## Props

Props interfaces are named `I<ComponentName>Props` and live in `interfaces/`.

Components receive **models** as props — `IProject`, `IBlogPostSummary` — not loose
strings assembled at the call site. They are presentational unless they genuinely need
not to be: data loading belongs in routes, logic belongs in `core`.

## The `on` prefix and prop shadowing

Both a callback prop and the handler bound to it use the `on` prefix, which collides if
they share a name. Name the prop for the **intent** and the local handler for the **DOM
event it is bound to**:

```tsx
export const ProjectCard: FunctionComponent<IProjectCardProps> = ({ project, onSelect }) => {
  const onClick = (): void => {
    onSelect(project.slug);
  };

  return <article onClick={onClick}>…</article>;
};
```

## Markup

Reach for a landmark, a heading, a `<button>` or an `<a>` before reaching for a `<div>`.
A thing that navigates is an `<a>`; a thing that acts is a `<button>`.

Classes are `nx-` prefixed BEM — see `.claude/rules/styles.md`. Components never branch on
the current theme.

## Accessibility

- One `<h1>` per page; heading levels in order with none skipped.
- Every interactive element is reachable and operable by keyboard, in a sensible order,
  with no traps.
- Interactive targets are at least 24×24 px.
- State is expressed with ARIA or `data-*` attributes, which the CSS then styles —
  `aria-expanded`, `aria-selected`, `aria-current`, `data-state`. Not state classes.
- Icons either carry an accessible name or are `aria-hidden`. Decorative flourishes are
  always `aria-hidden`.
- Nothing is communicated by colour alone.
- Images have real `alt` text, or `alt=""` when genuinely decorative.
- Anything that animates respects `prefers-reduced-motion`.

`eslint-plugin-jsx-a11y` runs in lint and axe runs in Playwright, but both are a backstop.
Neither catches a wrong heading order or a meaningless `alt`.

## Showcases

Every component has a `*.showcase.tsx` beside it exporting its variants and states. The
`/system` page collects these automatically, and Playwright uses them as visual and
accessibility fixtures — so a showcase covering every state is how a component gets
tested, not an optional extra.
