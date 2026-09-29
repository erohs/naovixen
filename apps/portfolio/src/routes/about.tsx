import { createFileRoute } from '@tanstack/react-router';
import { OpenGraphType } from '@naovixen/models';

import { AboutPage } from '../components/about-page/AboutPage.component';
import { buildRouteHead } from '../functions/BuildRouteHead.function';

export const Route = createFileRoute('/about')({
    head: () =>
        buildRouteHead({
            title: 'About',
            description:
                'About Naomi Shore: a software engineer who joined PebblePad as an apprentice in 2019 and earned a first-class degree alongside the job.',
            path: '/about',
            type: OpenGraphType.Website,
        }),
    component: AboutPage,
});
