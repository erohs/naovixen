/** Project screenshots and post images come from Sanity's image CDN, so the connection opens early. */
export const sanityImagePreconnect = { rel: "preconnect", href: "https://cdn.sanity.io" } as const;
