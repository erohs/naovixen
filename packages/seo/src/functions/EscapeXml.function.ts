const xmlEntities: Readonly<Record<string, string>> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;",
};

export const escapeXml = (text: string): string =>
    text.replace(/[&<>"']/g, (character) => xmlEntities[character] ?? character);
