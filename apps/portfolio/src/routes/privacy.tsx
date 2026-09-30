import { createFileRoute } from '@tanstack/react-router';
import { OpenGraphType } from '@naovixen/seo';

import { PrivacyPage } from '../components/privacy-page/PrivacyPage.component';
import { buildRouteHead } from '../functions/BuildRouteHead.function';

export const Route = createFileRoute('/privacy')({
    head: () =>
        buildRouteHead({
            title: 'Privacy notice',
            description: 'What this site collects about you, and why.',
            path: '/privacy',
            type: OpenGraphType.Website,
        }),
    component: PrivacyPage,
});
