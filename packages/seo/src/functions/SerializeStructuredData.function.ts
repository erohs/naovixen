/**
 * JSON for a `<script type="application/ld+json">` element. `<` is escaped so a `</script>`
 * inside CMS content cannot close the element and inject markup.
 */
export const serializeStructuredData = (structuredData: object): string =>
    JSON.stringify(structuredData).replaceAll("<", "\\u003c");
