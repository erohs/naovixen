import { defineQuery } from "groq";

/**
 * `$textQuery` is empty when nothing was typed, and an empty text query matches everything. A match in
 * the title outranks one in the excerpt, which outranks one in the body.
 */
export const postSearchQuery = defineQuery(`{
    "posts": *[
        _type == "post" && defined(slug.current)
        && (count($topics) == 0 || count((tags[]->title)[@ in $topics]) > 0)
        && [title, excerpt, pt::text(body), tags[]->title] match text::query($textQuery)
    ] | score(
        boost(title match text::query($textQuery), 3),
        boost(excerpt match text::query($textQuery), 2),
        pt::text(body) match text::query($textQuery)
    ) | order(_score desc, publishedAt desc) {
        "slug": slug.current,
        title,
        excerpt,
        publishedAt,
        "tags": coalesce(tags[]->title, []),
        "plainText": pt::text(body)
    },
    "totalCount": count(*[_type == "post" && defined(slug.current)])
}`);
