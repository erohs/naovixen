/**
 * The route the design system page is mounted at in every app.
 *
 * Shared so that the route, the `noindex` header and the sitemap's exclusion list all
 * agree. The page is unlisted rather than secret: nothing sensitive goes on it, and it is
 * deliberately absent from `robots.txt`, because listing it there would advertise it.
 */
export const systemPagePath = '/system';
