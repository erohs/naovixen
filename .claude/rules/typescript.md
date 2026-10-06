---
paths:
    - "**/*.ts"
    - "**/*.js"
    - "src/**/*.astro"
---

# TypeScript

`astro/tsconfigs/strictest`; `astro check` must report no errors.

## Names

**PascalCase** for interfaces, types and components; **camelCase** for everything else,
including module-level constants. No SCREAMING_SNAKE_CASE.

| Pattern                         | Applies to                                   | Example        |
| ------------------------------- | -------------------------------------------- | -------------- |
| `I` prefix                      | Every interface except a component's `Props` | `IPostSummary` |
| `is` / `has` / `should` / `can` | Booleans                                     | `isFeatured`   |
| `on` prefix                     | Handlers, simple present                     | `onSelect`     |

Astro reads a component's props from an interface named exactly `Props`, so that one keeps
its name. `interface` for object shapes, `type` for unions and aliases. Acronyms are cased as
words (`SeoData`). Whole words, not abbreviations, except `id`, `props`, `src` and `i`. Name
things for what they mean: `publishedPosts`, not `postArray`.

Files are kebab-case, named for what they hold (`reading-time.ts`); components are PascalCase
`.astro`.

## Functions

Arrow functions everywhere, with explicit return types on exported ones. `any` needs a
comment justifying it; prefer `unknown` and narrow.

## Comments

Make the code readable first: a better name, a smaller function, a named constant. Comment
only a contract the signature cannot state, a unit, an edge case, or why a native feature was
not enough. Never restate the code, narrate a step, label a section or record history.
