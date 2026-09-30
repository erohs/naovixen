import { defineQuery } from 'groq';

export const postBySlugQuery = defineQuery(`
    *[_type == "post" && slug.current == $slug][0] {
        "slug": slug.current,
        title,
        excerpt,
        publishedAt,
        "tags": coalesce(tags[]->title, []),
        "plainText": pt::text(body),
        body[] {
            ...,
            _type == "figure" => {
                image { alt, asset-> { url, metadata { dimensions { width, height } } } }
            }
        }
    }
`);
