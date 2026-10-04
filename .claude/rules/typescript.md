---
paths:
    - "**/*.ts"
    - "**/*.tsx"
---

# Naming, file names, TypeScript

## Casing

**PascalCase** — classes, interfaces, type aliases, enums, enum members, React components
and contexts. **camelCase** — everything else, including module-level constants. There is
no SCREAMING_SNAKE_CASE here.

| Pattern                         | Applies to                                  | Example                      |
| ------------------------------- | ------------------------------------------- | ---------------------------- |
| `I` prefix                      | Every interface                             | `IThemeStorage`              |
| `I…Props`                       | Component props interfaces                  | `IProjectCardProps`          |
| `_` prefix                      | Private class members                       | `private _notifyListeners()` |
| `on` prefix                     | Handlers and callback props, simple present | `onSelect`, not `onSelected` |
| `is` / `has` / `should` / `can` | Booleans                                    | `isFeatured`                 |

Enum names end in a singular noun; members are PascalCase. `interface` for object shapes,
`type` for unions, aliases and mapped types. Only interfaces take the `I`: a props alias
in `types/` is `BackToTopProps`.

Acronyms are cased as words: `SeoMetadata`, `IApiResponse`, `parseVttCue`.

Write whole words — `button`, not `btn`. Exceptions: `id`, `props`, `ref`, `src`, `ui`,
and `i` for a loop index.

Name things for what they mean, not their type: `publishedPosts`, not `postArray`.

## File names

PascalCase, named after the single thing exported, plus a role suffix. The casing applies
to the file, not the export: `resolveTheme` lives in `ResolveTheme.function.ts` and
`timeoutScheduler` in `TimeoutScheduler.const.ts`. Directories stay kebab-case.

| Exports              | Suffix           |
| -------------------- | ---------------- |
| React component      | `.component.tsx` |
| React context        | `.context.ts`    |
| Function             | `.function.ts`   |
| Constant or instance | `.const.ts`      |
| Side effects only    | `.effect.ts`     |
| Icon's SVG source    | `.icon.ts`       |
| Class                | none             |
| Interface            | none             |
| Enum                 | none             |
| Type                 | none             |

JSX means `.tsx`. CSS files are the exception to PascalCase: kebab-case, named for the BEM
block, so `LinkTile.component.tsx` pairs with `styles/link-tile.css`.

One exported thing per file. Named exports only, except where a framework requires
otherwise (`export const Route`).

## Functions

Arrow functions everywhere, enforced by lint: `export const formatDate = (isoDate: string):
string => …`. No `function` declarations or expressions. A class keeps its methods; one that
is handed out as a callback, such as `subscribe`, is an arrow property so `this` holds.

## Rules

`strict`, plus `noUncheckedIndexedAccess` and `exactOptionalPropertyTypes`.

- `var` is banned. `const`, or `let` where the binding changes.
- `const enum` is banned — Vite transpiles one file at a time and cannot resolve it.
- Explicit return types on exported functions, including `void`.
- `any` needs a comment justifying it. Prefer `unknown` and narrow.
- Functions 25 lines, files 400. A longer function wants splitting, not a bigger limit.

## Comments

Make the code readable first: a better name, a smaller function, a named constant. Add a
comment only when that cannot carry it:

- TSDoc on a declaration whose contract the signature cannot state: a non-obvious
  constraint, a unit, an edge case, why a native feature was not enough.
- `TODO:`, `FIXME:` or `HACK:` with its reason.
- Tool directives: `eslint-disable-next-line … -- reason`, `@ts-expect-error`, IDE
  `noinspection`.

Never a comment that restates the code, narrates a step, labels a section or records
history. Lint allows only these forms (`naovixen/allowed-comments`); whether one earns its
place is for review. In CSS, `/* … */` above the rule, by the same test.

## Not enforced by lint

Watch for these in review — no rule catches them:

- More than one export in a file under `interfaces/`, `enums/`, `types/` or `functions/`.
- A file name that does not match its export, or carries the wrong role suffix.
