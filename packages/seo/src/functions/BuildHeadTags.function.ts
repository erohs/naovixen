import type { ISeoMetadata, ISite } from '@naovixen/models';

import type { IHeadTags } from '../interfaces/IHeadTags';
import { buildDocumentTitle } from './BuildDocumentTitle.function';
import { buildOpenGraphTags } from './BuildOpenGraphTags.function';
import { resolveAbsoluteUrl } from './ResolveAbsoluteUrl.function';

/** X reads the Open Graph tags, so `twitter:card` is the only Twitter tag it needs. */
export function buildHeadTags(page: ISeoMetadata, site: ISite): IHeadTags {
    const canonicalUrl = resolveAbsoluteUrl(site.origin, page.path);
    const twitterCard = page.image ? 'summary_large_image' : 'summary';

    return {
        title: buildDocumentTitle(page.title, site.name),
        canonicalUrl,
        meta: [
            { name: 'description', content: page.description },
            ...buildOpenGraphTags(page, site, canonicalUrl),
            { name: 'twitter:card', content: twitterCard },
        ],
    };
}
