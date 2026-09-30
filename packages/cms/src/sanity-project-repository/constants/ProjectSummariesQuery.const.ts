import { defineQuery } from 'groq';

export const projectSummariesQuery = defineQuery(`
    *[_type == "project" && defined(slug.current)] | order(position asc) {
        "slug": slug.current,
        title,
        summary,
        "tags": coalesce(tags[]->title, []),
        "isFeatured": coalesce(isFeatured, false),
        screenshot { alt, asset-> { url, metadata { dimensions { width, height } } } }
    }
`);
