---
paths:
    - "**/*.tsx"
---

# React

Components are typed arrow constants. A component in `components` takes its element's
intrinsic props, spreads the rest onto the element, and merges its class names with the
caller's:

```tsx
export const Text: FunctionComponent<ITextProps> = ({
    variant = TextVariant.Body,
    className,
    children,
    ...paragraphProps
}) => (
    <p {...paragraphProps} className={joinClassNames("nv-text", `nv-text--${variant}`, className)}>
        {children}
    </p>
);
```

`ITextProps extends ComponentPropsWithRef<'p'>`, so `ref`, ARIA and event props pass
straight through. React 19 removed `children` from `FunctionComponent`, so declare it on
the props interface when a component that does not extend an element's props takes
children.

Children are explicit. A component that takes them destructures `children` and renders it
between its tags; one that takes none omits it (`Omit<…, "children">`) and self-closes.
Nothing passes children through a spread.

Props are never typed in the signature: an interface in `interfaces/` (`IBackToTopProps`) or,
for an alias such as an `Omit`, a type in `types/` (`BackToTopProps`).

One component per file, enforced by lint. A component file exports its component and
nothing else. Its props interface, enums, constants and helpers live in the sibling
subfolders. A page's sections each own a folder under its `sections/`.

## No custom hooks

Logic lives in services, controllers and functions that know nothing of React. A component
binds them with React's own hooks or with a ref callback that returns its cleanup:

```tsx
<div ref={(panel) => (panel === null ? undefined : dismissOnEscape(panel, onDismiss))} />
```

A visual that follows the page, such as BackToTop appearing on scroll, writes a `data-*`
attribute from its ref callback rather than holding React state, so nothing re-renders.

## Text

Every string comes from the package's `resources/<locale>.json` through its `translate`
constant: `translate("backToTop")`. Interpolate and pluralise inside the message,
`translate("readingTime", { count })`, never by joining strings in JSX.

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

Reach for a landmark, a heading, a `<button>` or an `<a>` before a `<div>`, and for the
element the platform already has: `<dialog>` for a modal, `<details>` for an uncontrolled
disclosure, `<hgroup>` for a heading and its intro line, `<search>` around a search form. An
extra element earns its place by meaning or by a job nothing else can do, such as a scroll
container; never wrap just to hang a class. A thing that
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
- Reflows at 320 CSS px with no sideways scroll, and survives user text spacing: no fixed
  heights on text.
- A control's accessible name starts with its visible text, so voice control can say it.
- Nothing sticky or fixed hides the focused element.
- A modal is a `<dialog>`: the page behind is inert, Escape closes it, focus returns to its
  opener. An overlay that keeps part of the page usable above it, such as the header menu,
  is a disclosure: while open, `inertOutside` and `containFocus` hold the reader to what
  shows, and Escape closes it with focus back on its button. Whatever opens over its
  invoker closes on Escape and returns focus.
- Status messages speak through a `LiveRegion` beside their subject (see CLAUDE.md).

## Performance

- Images are `Image`: lazy and async by default, with `width` and `height`. The largest image
  above the fold is `loading="eager"` and `fetchPriority="high"`.
- Static content renders on the server; client code waits for an interaction.
- Scrolling, resizing and theme changes never re-render a tree to restyle it: an attribute
  and CSS do it.

## Design system

`apps/design-system` renders every token and component with a few examples each: a new
component gets its examples on the right page there, written as plain JSX. A component
that needs state to show, such as a controlled disclosure, gets a small demo in that
app's `components/`. Its one test runs axe over every page.
