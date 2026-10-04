import type { ISeedFact } from "../interfaces/ISeedFact";

/**
 * A body block as written in the fixture. Paragraphs, headings and list items may hold links,
 * written `[text](url)`.
 */
export type SeedBlock =
    | { readonly type: "paragraph"; readonly text: string }
    | { readonly type: "heading"; readonly text: string }
    | { readonly type: "sectionHeading"; readonly text: string; readonly isNumbered?: boolean }
    | { readonly type: "list"; readonly items: readonly string[] }
    | { readonly type: "code"; readonly language: string; readonly filename?: string; readonly code: string }
    | { readonly type: "callout"; readonly label: string; readonly title: string; readonly text: string }
    | { readonly type: "facts"; readonly facts: readonly ISeedFact[] };
