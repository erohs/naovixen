---
paths:
    - '**/*.tsx'
---

# React

Components are typed arrow constants. A component in `components` takes its element's
intrinsic props, spreads the rest onto the element, and merges its class names with the
caller's:

```tsx
export const Text: FunctionComponent<ITextProps> = ({
    variant = TextVariant.Body,
    className,
    ...paragraphProps
}) => (
    <p
        {...paragraphProps}
        className={joinClassNames('nv-text', `nv-text--${variant}`, className)}
    />
);
```

`ITextProps extends ComponentPropsWithRef<'p'>`, so `ref`, ARIA and event props pass
straight through. React 19 removed `children` from `FunctionComponent`, so declare it on
the props interface when a component that does not extend an element's props takes
children.

A component file exports its component and nothing else. Its props interface, enums,
constants and helpers live in the sibling subfolders. A page file may also hold the
sections only that page uses, as unexported functions beside it, each within the usual
limits.

## One job each, parts as compounds

A component does one job down one path. Two elements are two components: `Button` renders
a `<button>` and `LinkButton` an anchor, never one component that picks between them. A new
component is for a different job (`BackToTop` knows when to show itself) and is built on
the one it resembles; a different look is a modifier class picked by an enum prop.

A component with parts is a compound. The parts hang off it, and its children are those
parts and its text, nothing looser:

```tsx
<Button>
    <Button.Icon source={downloadIcon} /> Download
</Button>

<Footer smallPrint={smallPrint}>
    <Footer.Column heading="site" links={navigationItems} />
</Footer>
```

A part lives beside its owner's main file, is attached in that file with `Object.assign`,
and is not exported on its own. The stylesheet reads the shape from the parts with
`:has()`, so no prop repeats what the markup already says: a `Button.Icon` given a `label`
in place of text makes the button round, with no `isIconOnly`.

Generic components know nothing of content types, routers or brand. Content types enter
at `rich-content` and in the apps; a component takes its links and copy as props. Data
loading belongs in routes, logic in services.

A link is always `Link`, or something built on it. An app hands its router's link to
`LinkProvider` once, at the root, and every `Link` to a page on the site renders through
it. Nothing takes a link component as a prop.

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
navigates is an `<a>`; a thing that acts is a `<button>`. A link drawn as a button is
`LinkButton`: still an anchor, but announced as a button and answering to Space, so someone
using voice control can say what they see.

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
