---
paths:
    - '**/*.ts'
    - '**/*.tsx'
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
| `use` prefix                    | Hooks                                       | `useTheme`                   |
| `on` prefix                     | Handlers and callback props, simple present | `onSelect`, not `onSelected` |
| `is` / `has` / `should` / `can` | Booleans                                    | `isFeatured`                 |

Enum names end in a singular noun; members are PascalCase. `interface` for object shapes,
`type` for unions, aliases and mapped types.

Acronyms are cased as words: `SeoMetadata`, `IApiResponse`, `parseVttCue`.

Write whole words — `button`, not `btn`. Exceptions: `id`, `props`, `ref`, `src`, `ui`,
and `i` for a loop index.

Name things for what they mean, not their type: `publishedPosts`, not `postArray`.

## File names

PascalCase, named after the single thing exported, plus a role suffix. The casing applies
to the file, not the export: `resolveTheme` lives in `ResolveTheme.function.ts` and
`useTheme` in `UseTheme.hook.ts`. Directories stay kebab-case.

| Exports              | Suffix           |
| -------------------- | ---------------- |
| React component      | `.component.tsx` |
| React hook           | `.hook.ts`       |
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
block, so `LinkIcon.component.tsx` pairs with `styles/link-icon.css`.

One exported thing per file. Named exports only, except where a framework requires
otherwise (`export const Route`).

## Rules

`strict`, plus `noUncheckedIndexedAccess` and `exactOptionalPropertyTypes`.

- `var` is banned. `const`, or `let` where the binding changes.
- `const enum` is banned — Vite transpiles one file at a time and cannot resolve it.
- Explicit return types on exported functions, including `void`.
- `any` needs a comment justifying it. Prefer `unknown` and narrow.
- Functions 25 lines, files 400. A longer function wants splitting, not a bigger limit.

## Comments

Only where the code genuinely cannot speak for itself: a non-obvious constraint, a
workaround and its reason, a unit, an edge case. A comment restating the signature is
noise.

A comment that earns its place is TSDoc, `/** … */`, on the declaration it explains — so
editors show it where the symbol is used. No `//` line comments. In CSS, `/* … */` above
the rule it explains.

## Not enforced by lint

Watch for these in review — no rule catches them:

- More than one export in a file under `interfaces/`, `enums/`, `types/` or `functions/`.
- A file name that does not match its export, or carries the wrong role suffix.
