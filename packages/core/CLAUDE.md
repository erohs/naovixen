# @naovixen/core

Models, services and controllers. The bottom of the dependency graph: this package
imports nothing else in the repository.

## No React, no DOM

`core` must run unchanged in a browser, on a Cloudflare Worker, and in a Node test with
no DOM at all. So it never imports React, and never reaches for a browser global —
`window`, `document`, `matchMedia`, `localStorage`, `navigator`, `fetch` bound to a
particular environment.

Two things enforce this, and both should stay:

- `tsconfig.json` extends `@naovixen/tsconfig/base.json`, whose `lib` is `["ES2023"]`
  with no `DOM`. A browser global here is a compile error, not a convention.
- `@typescript-eslint/no-restricted-imports` in the root `eslint.config.js` blocks
  `react`, `react-dom` and every `@naovixen/*` package.

## Express a capability, then inject it

When logic genuinely needs something only a browser can do, describe it as an interface
here and let the caller supply the implementation.

```ts
// services/theme/interfaces/ISystemThemeSource.ts
export interface ISystemThemeSource {
  getResolvedTheme(): ResolvedTheme;
  subscribe(listener: () => void): () => void;
}
```

The `matchMedia` version of that lives in `services/theme/implementations/`, where it is
the only file that knows a browser exists. A test passes a fake instead, with no jsdom
and no mocking framework.

This is also what keeps the package portable: swapping React for something else, or
running a service inside a Worker, means writing a new implementation rather than
editing the logic.

## Layout

```
src/
├── models/           Domain data as plain interfaces. No behaviour, no methods.
├── services/         Logic. One folder per service.
├── controllers/      Framework-free state machines for stateful widgets.
├── functions/        Pure helpers shared by more than one owner.
└── index.ts          The single barrel.
```

A service or controller owns a kebab-case folder holding its class, its spec, and the
`interfaces/`, `enums/`, `constants/`, `functions/` and `implementations/` subfolders it
needs. Something used by one service lives inside that service; once a second needs it,
it moves up to the package level.

## Controllers

A controller exposes exactly three kinds of member: `getState()`, `subscribe(listener)`
returning an unsubscribe function, and intent methods that describe what the user did
(`open()`, `selectTab(id)`) rather than how the state changes.

That shape exists so `ui` can bind one to React with `useSyncExternalStore` and no logic
of its own. Keep it, even when a simpler API would do for the first caller.
