const xmlEntities: Readonly<Record<string, string>> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;',
};

export function escapeXml(text: string): string {
    return text.replace(/[&<>"']/g, (character) => xmlEntities[character] ?? character);
}
