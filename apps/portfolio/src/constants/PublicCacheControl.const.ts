/**
 * The CDN keeps a page for five minutes, then serves it for up to a day more while fetching a
 * fresh copy, so a publish in Sanity shows within minutes and no visitor waits on it.
 * Browsers always revalidate. A preview response replaces this with `private, no-store`.
 */
export const publicCacheControl = 'public, max-age=0, s-maxage=300, stale-while-revalidate=86400';
