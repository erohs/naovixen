---
paths:
    - '**/*.tsx'
---

# React

Components are typed arrow constants. A component in `components` takes its element's
intrinsic props, spreads the rest onto the element, and merges its class names with the
caller's:

```tsx
export const Button: FunctionComponent<IButtonProps> = ({
    variant = ButtonVariant.Secondary,
    type = 'button',
    className,
    children,
    ...buttonProps
}) => (
    <button
        {...buttonProps}
        type={type}
        className={joinClassNames('nv-button', `nv-button--${variant}`, className)}
    >
        {children}
    </button>
);
```

`IButtonProps extends ComponentPropsWithRef<'button'>`, so `ref`, ARIA and event props pass
straight through. React 19 removed `children` from `FunctionComponent`, so declare it on
the props interface when a component that does not extend an element's props takes
children.

A component file exports its component and nothing else. Its props interface, enums,
constants and helpers live in the sibling subfolders. A page file may also hold the
sections only that page uses, as unexported functions beside it, each within the usual
limits.

## Compose, do not branch

A variant is a new component built from an existing one: `LinkIcon` renders `Link` with an
`Icon`; `ExclamationBubble` renders `SpeechBubble` with motion lines. Never a `kind` prop with a switch
inside. A variant that changes only the look is a modifier class, picked by an enum prop.

Generic components know nothing of content types, routers or brand. Content types enter
at `rich-content` and in the apps; a component takes its links and copy as props. Data
loading belongs in routes, logic in services.

A link is always `Link`, or something built on it. An app hands its router's link to
`LinkProvider` once, at the root, and every `Link` to a page on the site renders through
it. Nothing takes a link component as a prop, except `LinkTile`, which may be external.

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

## Design system

`apps/design-system` renders every token and component with a few examples each: a new
component gets its examples on the right page there, written as plain JSX. A component
that needs state to show, such as a controlled disclosure, gets a small demo in that
app's `components/`. Its one test runs axe over every page.
