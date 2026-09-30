/**
 * A body as stored, with each image resolved to its URL and size, or empty for a document
 * saved before it had one. Every query that reads a body interpolates this, so a new block
 * holding an image is added here once.
 */
export const bodyProjection = `"body": coalesce(body[] {
    ...,
    _type == "figure" => {
        image { alt, asset-> { url, metadata { dimensions { width, height } } } }
    }
}, [])`;
