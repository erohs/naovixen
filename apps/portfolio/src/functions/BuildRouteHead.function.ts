import type { ISeoMetadata } from '@naovixen/seo';
import { buildHeadTags, serializeStructuredData } from '@naovixen/seo';

import { site } from '../constants/Site.const';
import type { IRouteHead } from '../interfaces/IRouteHead';

/**
 * Call it from leaf routes only. Router merges `meta` by name, but concatenates `links` and
 * `scripts`, so a canonical link set higher up would appear twice.
 */
export function buildRouteHead(
    page: ISeoMetadata,
    structuredData: readonly object[] = [],
): IRouteHead {
    const headTags = buildHeadTags(page, site);

    return {
        meta: [{ title: headTags.title }, ...headTags.meta],
        links: [{ rel: 'canonical', href: headTags.canonicalUrl }],
        scripts: structuredData.map((data) => ({
            type: 'application/ld+json',
            children: serializeStructuredData(data),
        })),
    };
}
