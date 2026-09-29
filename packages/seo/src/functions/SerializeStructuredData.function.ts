/**
 * JSON for a `<script type="application/ld+json">` element. `<` is escaped so a `</script>`
 * inside CMS content cannot close the element and inject markup.
 */
export function serializeStructuredData(structuredData: object): string {
    return JSON.stringify(structuredData).replaceAll('<', '\\u003c');
}
