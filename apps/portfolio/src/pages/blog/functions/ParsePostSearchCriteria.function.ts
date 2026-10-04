import type { IPostSearchCriteria } from "@naovixen/cms";

/** The router reads `?query=404` as a number, so numbers count as words too. */
const toWords = (value: unknown): string | undefined =>
    typeof value === "string" || typeof value === "number" ? String(value) : undefined;

/**
 * Reads the criteria from the address, whether the router wrote them or the form was sent without
 * JavaScript, which repeats `topics` once for each ticked box.
 */
export const parsePostSearchCriteria = (search: Readonly<Record<string, unknown>>): IPostSearchCriteria => ({
    query: toWords(search.query) ?? "",
    topics: (Array.isArray(search.topics) ? search.topics : [search.topics])
        .map(toWords)
        .filter((topic): topic is string => topic !== undefined && topic !== ""),
});
