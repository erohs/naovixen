export enum LinkVariant {
    /** A link in content: underlined, and wavy under the pointer. */
    Content = 'content',
    /** A link on a line of its own, such as "All posts": a content link with a bigger target. */
    Standalone = 'standalone',
    /** A link in a list of places to go: no underline unless it is the current page. */
    Navigation = 'navigation',
    /** No look of its own, for a caller that styles the link itself, such as a button or a tile. */
    Unstyled = 'unstyled',
}
