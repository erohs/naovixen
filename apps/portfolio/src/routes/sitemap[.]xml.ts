import { createFileRoute } from '@tanstack/react-router';
import { buildSitemapXml } from '@naovixen/seo';

import { createSanityBlogRepository } from '../functions/CreateSanityBlogRepository.function';
import { createSanityProjectRepository } from '../functions/CreateSanityProjectRepository.function';
import { site } from '../constants/Site.const';
import { buildSitemapEntries } from '../functions/BuildSitemapEntries.function';

/** Built per request, so a new post is listed without a deploy. */
export const Route = createFileRoute('/sitemap.xml')({
    server: {
        handlers: {
            /* eslint-disable-next-line @typescript-eslint/naming-convention -- name set by TanStack Start */
            GET: async () =>
                new Response(
                    buildSitemapXml(
                        await buildSitemapEntries(
                            createSanityBlogRepository(false),
                            createSanityProjectRepository(false),
                        ),
                        site,
                    ),
                    {
                        headers: { 'Content-Type': 'application/xml; charset=utf-8' },
                    },
                ),
        },
    },
});
