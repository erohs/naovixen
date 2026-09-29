/**
 * The router matches by prefix and marks a match `aria-current="page"`, which would call
 * "All posts" the current page on every post. Only the page itself is current.
 */
export const exactActiveOptions = { exact: true } as const;
