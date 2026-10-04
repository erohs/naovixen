/** Turns a topic name into a URL segment that keeps its meaning: "C#" is "csharp", ".NET" is "dotnet". */
export const slugify = (text: string): string =>
    text
        .toLowerCase()
        .replace(/^\./, "dot")
        .replaceAll("#", "sharp")
        .replaceAll("+", "plus")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");
