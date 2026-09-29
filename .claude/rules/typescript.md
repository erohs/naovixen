---
paths:
  - "**/*.ts"
  - "**/*.tsx"
---

# Naming, file names and TypeScript

## Casing by kind of thing

**PascalCase** — classes, interfaces, type aliases, enums, enum members, React
components, React contexts.

**camelCase** — everything else: variables, constants, function names, parameters, object
properties and methods, class properties and methods, static members, custom event names,
hooks.

There is no SCREAMING_SNAKE_CASE in this codebase. A module-level constant is a camelCase
`const` like any other binding.

## Prefixes and suffixes that carry meaning

| Pattern | Applies to | Example |
|---|---|---|
| `I` prefix | Every interface | `IThemeStorage`, `IBlogPost` |
| `I…Props` | React component props interfaces | `IProjectCardProps` |
| `_` prefix | Private class members, and non-exported module functions | `private _notifyListeners()` |
| `use` prefix | React hooks | `useTheme`, `useReducedMotion` |
| `on` prefix | Event handlers and callback props, simple present | `onSelect`, not `onSelected` |
| `is` / `has` / `should` / `can` | Booleans | `isFeatured`, `hasCoverImage` |

Enum type names end in a singular noun; members are PascalCase.

```ts
// enums/ThemePreference.ts
export enum ThemePreference {
  Light = 'light',
  Dark = 'dark',
  System = 'system',
}
```

Interfaces describe object shapes and contracts. `type` is for unions, aliases and mapped
types.

```ts
// types/ThemeChangeListener.ts
export type ThemeChangeListener = (state: IThemeState) => void;
```

## Acronyms and initialisms

Cased as ordinary words, never shouted. `SeoMetadata` not `SEOMetadata`. `IApiResponse`
not `IAPIResponse`. `jsonLdScript` not `JSONLDScript`. `parseVttCue` not `parseVTTCue`.

## Abbreviations

Write the whole word. `button` not `btn`. `navigation` not `nav`. `element` not `el`.
`dictionary` not `dict`.

The exceptions are abbreviations that read as words in their own right: `id`, `props`,
`ref`, `src`, `ui`, and `i` for a loop index. HTML element names keep their own spelling —
a `<nav>` is a `<nav>`.

## Choosing names

Name things for what they mean, not for their type or where they sit. `publishedPosts`
beats `postArray`; `resolvedTheme` beats `themeValue`. Functions and methods get verb
phrases describing what they do. Collections get plural names, or names that read as a
group.

---

## File names

A file is named after the single thing it exports, in PascalCase, plus a suffix saying
what kind of thing it is. Directories stay kebab-case.

The PascalCase rule applies to the *file*, not the export — a function exported as
`resolveTheme` lives in `ResolveTheme.function.ts`, and a hook exported as `useTheme`
lives in `UseTheme.hook.ts`.

| Exports | Suffix | Example file |
|---|---|---|
| React component | `.component.tsx` | `ThemeToggle.component.tsx` |
| React hook | `.hook.ts` | `UseTheme.hook.ts` |
| React context | `.context.ts` | `NaovixenContext.context.ts` |
| Class | *none* | `ThemeService.ts` |
| Function | `.function.ts` | `CalculateContrastRatio.function.ts` |
| Constant or instance | `.const.ts` | `DefaultThemePreference.const.ts` |
| Interface | *none* | `IBlogPost.ts` |
| Enum | *none* | `ThemePreference.ts` |
| Type | *none* | `ThemeChangeListener.ts` |
| Side effects only | `.effect.ts` | `RouteAnnouncerPolyfill.effect.ts` |

Anything containing JSX is `.tsx`; everything else `.ts`.

CSS files are the exception to PascalCase — they are kebab-case, named for the BEM block
they style, so `ProjectCard.component.tsx` is styled by `styles/project-card.css`.

**One exported thing per file**, named after it. Named exports only, no default exports,
except where a framework requires otherwise such as TanStack Router's `export const Route`.

---

## TypeScript rules

`strict: true`, plus `noUncheckedIndexedAccess` and `exactOptionalPropertyTypes`.

- **`var` is banned.** `const` by default, `let` only where the binding genuinely changes.
  Enforced by `no-var` and `prefer-const`.
- **`const enum` is banned.** It cannot be transpiled a file at a time, which is how Vite
  and esbuild build this project. Plain `enum` only.
- **`erasableSyntaxOnly` stays off**, because plain enums emit runtime code. Deliberate
  trade — see `docs/decisions.md`, ADR-0006.
- **Explicit return types on every exported function**, including `void`.
- **TSDoc on every exported symbol.** Say why it exists and what a caller needs to know.
- **`any` needs a comment justifying it.** Prefer `unknown` and narrow.

Comments explain *why*. The code already says what.
