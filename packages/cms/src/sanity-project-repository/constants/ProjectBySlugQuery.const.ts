import { defineQuery } from 'groq';

export const projectBySlugQuery = defineQuery(`
    *[_type == "project" && slug.current == $slug][0] {
        "slug": slug.current,
        title,
        summary,
        "isFeatured": coalesce(isFeatured, false),
        screenshot { alt, asset-> { url, metadata { dimensions { width, height } } } },
        tldr,
        role,
        timeline,
        stack,
        liveUrl,
        repositoryUrl,
        sections[] {
            heading,
            body[] {
                ...,
                _type == "figure" => {
                    image { alt, asset-> { url, metadata { dimensions { width, height } } } }
                }
            }
        }
    }
`);
