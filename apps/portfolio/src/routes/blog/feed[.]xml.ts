import { createFileRoute } from '@tanstack/react-router';
import { buildRssFeedXml } from '@naovixen/seo';

import { blogFeedChannel } from '../../constants/BlogFeedChannel.const';
import { publicCacheControl } from '../../constants/PublicCacheControl.const';
import { site } from '../../constants/Site.const';
import { createSanityBlogRepository } from '../../functions/CreateSanityBlogRepository.function';

/** Built per request from published posts only, so a new post reaches readers without a deploy. */
export const Route = createFileRoute('/blog/feed.xml')({
    server: {
        handlers: {
            /* eslint-disable-next-line @typescript-eslint/naming-convention -- name set by TanStack Start */
            GET: async () => {
                const posts = await createSanityBlogRepository(false).listPosts();

                return new Response(buildRssFeedXml(posts, blogFeedChannel, site), {
                    headers: {
                        'Content-Type': 'application/rss+xml; charset=utf-8',
                        'Cache-Control': publicCacheControl,
                    },
                });
            },
        },
    },
});
