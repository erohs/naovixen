/**
 * Shortens text to a readable excerpt, cutting at a word boundary rather than mid-word.
 *
 * A post's own excerpt field is always preferred; this is the fallback for content that
 * predates that field, and for search result summaries.
 *
 * @param text The full text to shorten.
 * @param maximumLength The longest excerpt to return, before the ellipsis is added.
 * @returns The text unchanged when it already fits, otherwise a shortened copy ending in
 *   a single-character ellipsis.
 */
export function createExcerpt(text: string, maximumLength: number): string {
  const trimmedText = text.trim();

  if (trimmedText.length <= maximumLength) {
    return trimmedText;
  }

  const truncatedText = trimmedText.slice(0, maximumLength);
  const lastSpaceIndex = truncatedText.lastIndexOf(' ');

  // A single word longer than the limit has no space to cut at, so cut it mid-word.
  const excerptBody = lastSpaceIndex > 0 ? truncatedText.slice(0, lastSpaceIndex) : truncatedText;

  return `${excerptBody.trimEnd()}…`;
}
