---
paths:
    - '**/*.spec.ts'
    - '**/*.spec.tsx'
---

# Testing

Vitest and Testing Library. Accessibility is checked in one place: the design-system app
runs axe over every page of examples.

## Test logic, not React

A test earns its place by checking something the code decides: a branch, a calculation,
state that changes, data mapped from one shape to another, an attribute the component
sets from its own state (`aria-expanded` flipping when a menu opens).

Do not test:

- that a prop, ref, class name or intrinsic attribute reaches the element;
- that children or text render;
- that a component with no branches renders at all.

If a component has no logic, it has no test file.

## Test behaviour, not implementation

A test should survive any refactor that does not change what the code does for callers.

- Exercise only what is exported. Never reach for an underscore-prefixed member, never
  assert on internal state.
- Query as a user would — role, accessible name, label, text. Not class names. Test IDs
  only where there is no accessible alternative.
- No markup snapshots.
- Mock at the boundaries, through the injected interfaces — a fake `IThemeStorage`, a
  fixture-backed `IBlogRepository`. Never mock the internals of the thing under test.

## File names

In the `tests/` folder of whatever owns the code, named after what they test:
`theme-controller/tests/ThemeController.spec.ts`, and `src/tests/FormatDate.spec.ts` for
`src/functions/FormatDate.function.ts`.

## Wording

Always `test`, never `it`. One `describe` per scenario, its title one sentence: the
subject, then any context, then the action. No nested `describe` blocks.

```ts
describe('Using ThemeController, given no stored preference and a dark system theme, when the state is read', () => {
    test('then it should resolve to the dark theme', () => {});
});

describe('Using ThemeController, when the preference is set to light', () => {
    test('then it should persist light to storage', () => {});
});
```

A pure function has no state to set up, so it skips `given`: `Using formatDate, when
given an ISO date`.

Setup belongs to the `describe` whose title describes the state it creates.

Two outcomes are two `then it should` tests, not one test with two assertions.
