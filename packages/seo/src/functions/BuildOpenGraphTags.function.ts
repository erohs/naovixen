import type { ISeoMetadata } from '../interfaces/ISeoMetadata';
import type { ISite } from '../interfaces/ISite';

import type { IPropertyMetaTag } from '../interfaces/IPropertyMetaTag';
import { buildOpenGraphImageTags } from './BuildOpenGraphImageTags.function';

/** Open Graph writes locales with an underscore: `en_GB`, not `en-GB`. */
export function buildOpenGraphTags(
    page: ISeoMetadata,
    site: ISite,
    canonicalUrl: string,
): IPropertyMetaTag[] {
    const imageTags = page.image ? buildOpenGraphImageTags(page.image, site.origin) : [];

    return [
        { property: 'og:type', content: page.type },
        { property: 'og:title', content: page.title },
        { property: 'og:description', content: page.description },
        { property: 'og:url', content: canonicalUrl },
        { property: 'og:site_name', content: site.name },
        { property: 'og:locale', content: site.locale.replace('-', '_') },
        ...imageTags,
    ];
}
