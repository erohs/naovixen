import { defineQuery } from 'groq';

import { bodyProjection } from '../../constants/BodyProjection.const';

export const postBySlugQuery = defineQuery(`
    *[_type == "post" && slug.current == $slug][0] {
        "slug": slug.current,
        title,
        excerpt,
        publishedAt,
        "tags": coalesce(tags[]->title, []),
        "plainText": pt::text(body),
        ${bodyProjection}
    }
`);
