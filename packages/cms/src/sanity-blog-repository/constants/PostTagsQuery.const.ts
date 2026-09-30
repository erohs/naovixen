import { defineQuery } from 'groq';

/** Only tags some post uses, so a tag filter never leads to an empty list. */
export const postTagsQuery = defineQuery(`
    *[_type == "tag" && count(*[_type == "post" && references(^._id)]) > 0] | order(title asc).title
`);
