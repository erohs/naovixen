import type { ReactNode } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { OpenGraphType } from '@naovixen/models';
import { buildBlogPostingStructuredData } from '@naovixen/seo';

import { BlogPostPage } from '../../components/blog-post-page/BlogPostPage.component';
import { person } from '../../constants/Person.const';
import { site } from '../../constants/Site.const';
import { buildRouteHead } from '../../functions/BuildRouteHead.function';
import { loadBlogPostPage } from '../../functions/LoadBlogPostPage.function';

const BlogPostComponent = (): ReactNode => <BlogPostPage {...Route.useLoaderData()} />;

export const Route = createFileRoute('/blog/$slug')({
    loader: ({ context, params }) => loadBlogPostPage(context.blogRepository, params.slug),
    /** Without loader data, as on a 404, the root's title stands. */
    head: ({ loaderData }) =>
        loaderData
            ? buildRouteHead(
                  {
                      title: loaderData.post.title,
                      description: loaderData.post.excerpt,
                      path: `/blog/${loaderData.post.slug}`,
                      type: OpenGraphType.Article,
                  },
                  [buildBlogPostingStructuredData(loaderData.post, person, site)],
              )
            : {},
    component: BlogPostComponent,
});
