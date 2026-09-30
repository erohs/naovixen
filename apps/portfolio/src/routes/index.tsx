import type { ReactNode } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { OpenGraphType } from '@naovixen/seo';
import { buildPersonStructuredData, buildWebSiteStructuredData } from '@naovixen/seo';

import { HomePage } from '../components/home-page/HomePage.component';
import { latestPostCount } from '../constants/LatestPostCount.const';
import { person } from '../constants/Person.const';
import { site } from '../constants/Site.const';
import { buildRouteHead } from '../functions/BuildRouteHead.function';

const HomeComponent = (): ReactNode => <HomePage latestPosts={Route.useLoaderData()} />;

export const Route = createFileRoute('/')({
    loader: async ({ context }) =>
        (await context.blogRepository.listPosts()).slice(0, latestPostCount),
    head: () =>
        buildRouteHead(
            {
                title: 'Naomi Shore — Software Engineer',
                description:
                    'Naomi Shore is a software engineer with seven years of experience across React, TypeScript and C#/.NET, and a focus on accessibility.',
                path: '/',
                type: OpenGraphType.Website,
            },
            [buildPersonStructuredData(person, site), buildWebSiteStructuredData(site)],
        ),
    component: HomeComponent,
});
