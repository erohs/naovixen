/** Shortens text at a word boundary, falling back to a mid-word cut for a single long word. */
export function createExcerpt(text: string, maximumLength: number): string {
    const trimmedText = text.trim();

    if (trimmedText.length <= maximumLength) {
        return trimmedText;
    }

    const truncatedText = trimmedText.slice(0, maximumLength);
    const lastSpaceIndex = truncatedText.lastIndexOf(' ');
    const excerptBody = lastSpaceIndex > 0 ? truncatedText.slice(0, lastSpaceIndex) : truncatedText;

    return `${excerptBody.trimEnd()}…`;
}
