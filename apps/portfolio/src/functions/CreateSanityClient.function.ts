import { createClient } from '@sanity/client';
import type { SanityClient } from '@sanity/client';

import { sanityProject } from '../constants/SanityProject.const';

/**
 * Published content comes from Sanity's CDN with no token. Drafts need the read token and
 * the live API, so they are never cached on the way.
 */
export function createSanityClient(isPreview: boolean): SanityClient {
    const publishedClient = createClient({
        ...sanityProject,
        useCdn: true,
        perspective: 'published',
        requestTagPrefix: 'portfolio',
    });

    const token = process.env.SANITY_API_READ_TOKEN;

    if (!isPreview || token === undefined) {
        return publishedClient;
    }

    return publishedClient.withConfig({
        useCdn: false,
        perspective: 'drafts',
        token,
    });
}
