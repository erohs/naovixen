import type { IPublishedPost } from '../interfaces/IPublishedPost';
import type { IPerson } from '../interfaces/IPerson';
import type { ISite } from '../interfaces/ISite';

import { schemaOrgContext } from '../constants/SchemaOrgContext.const';
import type { IBlogPostingStructuredData } from '../interfaces/IBlogPostingStructuredData';
import { resolveAbsoluteUrl } from './ResolveAbsoluteUrl.function';

export function buildBlogPostingStructuredData(
    post: IPublishedPost,
    author: IPerson,
    site: ISite,
): IBlogPostingStructuredData {
    return {
        '@context': schemaOrgContext,
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.excerpt,
        datePublished: post.publishedAt,
        url: resolveAbsoluteUrl(site.origin, `/blog/${post.slug}`),
        inLanguage: site.locale,
        keywords: post.tags,
        author: { '@type': 'Person', name: author.name, url: site.origin },
    };
}
