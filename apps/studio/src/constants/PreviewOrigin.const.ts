/** The Studio running locally previews the local site; the deployed Studio previews the live one. */
export const previewOrigin =
    typeof location !== 'undefined' && location.hostname === 'localhost'
        ? 'http://localhost:3000'
        : 'https://naovixen.com';
