import type { ReactNode } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { OpenGraphType } from '@naovixen/seo';

import { BlogPage } from '../../pages/blog/BlogPage.component';
import { blogDescription } from '../../constants/BlogDescription.const';
import { buildRouteHead } from '../../functions/BuildRouteHead.function';

const BlogComponent = (): ReactNode => <BlogPage posts={Route.useLoaderData()} />;

export const Route = createFileRoute('/blog/')({
    loader: ({ context }) => context.blogRepository.listPosts(),
    head: () =>
        buildRouteHead({
            title: 'Blog',
            description: blogDescription,
            path: '/blog',
            type: OpenGraphType.Website,
        }),
    component: BlogComponent,
});
