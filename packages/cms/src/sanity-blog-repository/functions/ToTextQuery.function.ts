/**
 * Each typed word becomes a prefix, so results appear while a word is still being typed. Characters
 * that the query syntax gives a meaning to are dropped, so a stray quote or minus cannot break it.
 */
export const toTextQuery = (query: string): string =>
    query
        .replaceAll(/["*-]/gu, " ")
        .split(/\s+/u)
        .filter((word) => word !== "")
        .map((word) => `${word}*`)
        .join(" ");
