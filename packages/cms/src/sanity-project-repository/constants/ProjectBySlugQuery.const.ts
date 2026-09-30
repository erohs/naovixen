import { defineQuery } from 'groq';

import { bodyProjection } from '../../constants/BodyProjection.const';

export const projectBySlugQuery = defineQuery(`
    *[_type == "project" && slug.current == $slug][0] {
        "slug": slug.current,
        title,
        summary,
        "isFeatured": coalesce(isFeatured, false),
        screenshot { alt, asset-> { url, metadata { dimensions { width, height } } } },
        stack,
        ${bodyProjection}
    }
`);
