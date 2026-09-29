---
paths:
  - '**/*.spec.ts'
  - '**/*.spec.tsx'
---

# Testing

Vitest for units and components, Testing Library for rendering, Playwright and axe for
end-to-end and accessibility.

## Test behaviour, not implementation

A test should survive any refactor that does not change what the code does for its
callers.

- Exercise only what is exported: props and rendered output, service methods, function
  inputs and outputs.
- Never reach for an underscore-prefixed member, and never assert on internal state.
- Query the way a user would — by role, accessible name, label, text. Not by class name.
  Test IDs only where there is genuinely no accessible alternative.
- No snapshot tests of markup.
- Mock at the boundaries, through injected interfaces — a fake `IThemeStorage`, a
  fixture-backed `IBlogRepository`. Never mock the internals of the thing under test.

A component test that queries by role and accessible name is also an accessibility test.
That is the point: if the test cannot find the button, neither can a screen reader.

## File names

Tests sit beside what they test, named for it with a `.spec` suffix:
`ThemeService.spec.ts`, `ProjectCard.spec.tsx`, `ResolveTheme.spec.ts`.

When one subject needs several test files, insert a PascalCase description:
`ThemeService.Persistence.spec.ts`, `ThemeService.SystemChanges.spec.ts`.

Integration tests use `Integration` as that description:
`SanityBlogRepository.Integration.spec.ts`.

## How tests are worded

Always `test`, never `it` — enforced by lint. Nest `describe` blocks so the runner output
reads as one English sentence.

| Level            | Wording                              | Required                          |
| ---------------- | ------------------------------------ | --------------------------------- |
| Outer `describe` | `Using <subject>`                    | Always                            |
| `describe`       | `given <context>`                    | Only when there is state or setup |
| `describe`       | `and <more context>`                 | Optional, repeatable              |
| `describe`       | `when <action>`                      | Always                            |
| `test`           | `then it should <outcome>`           | Always                            |
| `describe`       | `and <follow-up action>`             | Optional                          |
| `test`           | `then it should <follow-up outcome>` | Required after a follow-up action |

```ts
describe('Using ThemeService', () => {
  describe('given no stored preference', () => {
    describe('and the system reports a dark colour scheme', () => {
      describe('when the state is read', () => {
        test('then it should resolve to the dark theme', () => {
          /* … */
        });
        test('then it should report the preference as system', () => {
          /* … */
        });

        describe('and the preference is set to light', () => {
          test('then it should resolve to the light theme', () => {
            /* … */
          });
          test('then it should persist light to storage', () => {
            /* … */
          });
        });
      });
    });
  });
});
```

A pure function has no state to set up, so it skips `given`:

```ts
describe('Using buildProjectCardClassName', () => {
  describe('when called with the featured variant', () => {
    test('then it should return the block class and the featured modifier', () => {
      /* … */
    });
  });
});
```

Setup belongs to the `describe` that introduces it — a `beforeEach` inside the `given` or
`and` block whose wording describes the state it creates.

One assertion per `test` where it reads naturally. Two outcomes are two `then it should`
blocks, not one test with two expectations.
