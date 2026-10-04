import { createFileRoute } from "@tanstack/react-router";
import { buildSitemapXml } from "@naovixen/seo";
import { createSanityBlogRepository } from "../features/blog/functions/CreateSanityBlogRepository.function";
import { createSanityProjectRepository } from "../features/projects/functions/CreateSanityProjectRepository.function";
import { publicCacheControl } from "../features/cache-control/constants/PublicCacheControl.const";
import { site } from "../features/site/constants/Site.const";
import { buildSitemapEntries } from "../features/seo/functions/BuildSitemapEntries.function";

/** Built per request, so a new post is listed without a deploy. */
export const Route = createFileRoute("/sitemap.xml")({
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
                        headers: {
                            "Content-Type": "application/xml; charset=utf-8",
                            "Cache-Control": publicCacheControl,
                        },
                    },
                ),
        },
    },
});
