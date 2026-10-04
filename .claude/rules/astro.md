---
paths:
    - "src/**/*.astro"
    - "src/content/**"
---

# Astro components and content

- A component renders what its name promises from the element a developer would expect,
  and behaves as that pattern conventionally does. Native first: a modal is a `<dialog>`, a
  disclosure is `<details>`, a link that looks like a button is still a link.
- Props are an `interface Props` in the frontmatter. A parent passes `class` only to place a
  component; a component that needs a variant takes a prop or reads a custom property
  (`--card-radius`), never a class meant to beat its own rules.
- No layout components: a page or section lays itself out in its own `<style>`. Shared
  layout helpers live in `src/styles/layout.css`.
- Content blocks are components passed to `<Content components={…} />` in `Prose.astro`, so
  MDX files need no imports. A new block is a component there and a line in that map.
- Anything that depends on a fact Naomi has not confirmed (`site.email`, `site.cvPath`)
  renders only when it is set.
- Interactive markup works without script. If it cannot, ask before adding any.
