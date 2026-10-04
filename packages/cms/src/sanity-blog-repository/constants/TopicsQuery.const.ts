import { defineQuery } from "groq";

export const topicsQuery = defineQuery(`
    *[_type == "tag"] {
        title,
        "postCount": count(*[_type == "post" && defined(slug.current) && references(^._id)])
    }[postCount > 0] | order(postCount desc, title asc)
`);
