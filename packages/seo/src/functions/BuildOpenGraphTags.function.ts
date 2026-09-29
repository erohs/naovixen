import type { ISeoMetadata, ISite } from '@naovixen/models';

import type { IPropertyMetaTag } from '../interfaces/IPropertyMetaTag';
import { buildOpenGraphImageTags } from './BuildOpenGraphImageTags.function';

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
    // Open Graph writes locales with an underscore: en_GB, not en-GB.
    { property: 'og:locale', content: site.locale.replace('-', '_') },
    ...imageTags,
  ];
}
