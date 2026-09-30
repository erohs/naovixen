import { createFileRoute } from '@tanstack/react-router';
import { OpenGraphType } from '@naovixen/seo';

import { ContactPage } from '../pages/contact/ContactPage.component';
import { buildRouteHead } from '../functions/BuildRouteHead.function';

export const Route = createFileRoute('/contact')({
    head: () =>
        buildRouteHead({
            title: 'Contact',
            description: 'How to get in touch with Naomi Shore.',
            path: '/contact',
            type: OpenGraphType.Website,
        }),
    component: ContactPage,
});
