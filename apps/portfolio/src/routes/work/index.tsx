import type { ReactNode } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { OpenGraphType } from '@naovixen/seo';

import { WorkPage } from '../../pages/work/WorkPage.component';
import { placeholderWorkIntro } from '../../constants/PlaceholderWorkIntro.const';
import { buildRouteHead } from '../../functions/BuildRouteHead.function';

const WorkComponent = (): ReactNode => <WorkPage projects={Route.useLoaderData()} />;

export const Route = createFileRoute('/work/')({
    loader: ({ context }) => context.projectRepository.listProjects(),
    head: () =>
        buildRouteHead({
            title: 'Work',
            description: placeholderWorkIntro,
            path: '/work',
            type: OpenGraphType.Website,
        }),
    component: WorkComponent,
});
