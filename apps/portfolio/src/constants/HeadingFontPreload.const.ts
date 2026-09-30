import headingFontUrl from '@fontsource-variable/fredoka/files/fredoka-latin-wght-normal.woff2?url';

/**
 * Fredoka sets every heading, the largest text on most pages, so it is fetched before the
 * stylesheet asks for it. Vite gives the same hashed file the stylesheet loads. Fonts are
 * always fetched in CORS mode, so the preload must be too or the browser fetches it twice.
 */
export const headingFontPreload = {
    rel: 'preload',
    href: headingFontUrl,
    as: 'font',
    type: 'font/woff2',
    crossOrigin: 'anonymous',
} as const;
