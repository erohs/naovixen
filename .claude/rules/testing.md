---
paths:
  - '**/*.spec.ts'
  - '**/*.spec.tsx'
---

# Testing

Vitest, Testing Library, and Playwright with axe for end-to-end.

## Test behaviour, not implementation

A test should survive any refactor that does not change what the code does for callers.

- Exercise only what is exported. Never reach for an underscore-prefixed member, never
  assert on internal state.
- Query as a user would — role, accessible name, label, text. Not class names. Test IDs
  only where there is no accessible alternative. A component test that queries by role is
  also an accessibility test: if the test cannot find the button, nor can a screen reader.
- No markup snapshots.
- Mock at the boundaries, through the injected interfaces — a fake `IThemeStorage`, a
  fixture-backed `IBlogRepository`. Never mock the internals of the thing under test.

## File names

In the `tests/` folder of whatever owns the code, named after what they test:
`theme-service/tests/ThemeService.spec.ts`, and `src/tests/CreateExcerpt.spec.ts` for
`src/functions/CreateExcerpt.function.ts`.

Several files for one subject take a PascalCase description:
`ThemeService.Persistence.spec.ts`. Integration tests use `Integration` as that
description: `SanityBlogRepository.Integration.spec.ts`.

## Wording

Always `test`, never `it`. Nest `describe` blocks so the runner output reads as a
sentence.

| Level            | Wording                    | Required                          |
| ---------------- | -------------------------- | --------------------------------- |
| Outer `describe` | `Using <subject>`          | Always                            |
| `describe`       | `given <context>`          | Only when there is state or setup |
| `describe`       | `and <more context>`       | Optional, repeatable              |
| `describe`       | `when <action>`            | Always                            |
| `test`           | `then it should <outcome>` | Always                            |

```ts
describe('Using ThemeService', () => {
  describe('given no stored preference', () => {
    describe('and the system reports a dark colour scheme', () => {
      describe('when the state is read', () => {
        test('then it should resolve to the dark theme', () => {});

        describe('and the preference is set to light', () => {
          test('then it should persist light to storage', () => {});
        });
      });
    });
  });
});
```

A pure function has no state to set up, so it skips `given`.

Setup belongs to the `describe` that introduces it — a `beforeEach` inside the `given` or
`and` block whose wording describes the state it creates.

Two outcomes are two `then it should` blocks, not one test with two assertions.
