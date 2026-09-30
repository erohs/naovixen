import type { DocumentLocationResolvers } from 'sanity/presentation';

import { locateUnder } from '../functions/LocateUnder.function';

/** Where each document appears on the site, so the Studio can open its page beside the form. */
export const presentationLocations: DocumentLocationResolvers = {
    post: locateUnder('Blog', '/blog'),
    project: locateUnder('Work', '/work'),
};
