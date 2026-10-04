/** Readable and stable, such as `tag-csharp` for "C#". No dots, which would make the document private. */
export const toTagId = (title: string): string =>
    `tag-${title
        .toLowerCase()
        .replaceAll("#", "sharp")
        .replaceAll("+", "plus")
        .replaceAll(/[^a-z0-9]+/gu, "-")
        .replaceAll(/^-|-$/gu, "")}`;
