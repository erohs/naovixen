import { defineQuery } from 'groq';

export const postSummariesQuery = defineQuery(`
    *[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
        "slug": slug.current,
        title,
        excerpt,
        publishedAt,
        "tags": coalesce(tags[]->title, []),
        "plainText": pt::text(body)
    }
`);
