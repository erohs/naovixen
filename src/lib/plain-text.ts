/** The prose of a Markdown or MDX body, without code blocks, component tags or markup. */
export const plainText = (body: string): string =>
    body
        .replace(/```[\s\S]*?```/g, " ")
        .replace(/<[^>]*>/g, " ")
        .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
        .replace(/^\s{0,3}(#{1,6}|>|[-*+]|\d+\.)\s+/gm, "")
        .replace(/[*_`]+/g, "")
        .replace(/\s+/g, " ")
        .trim();
