import type { ReactNode } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { OpenGraphType } from '@naovixen/seo';

import { ProjectPage } from '../../pages/project/ProjectPage.component';
import { buildRouteHead } from '../../functions/BuildRouteHead.function';
import { loadProjectPage } from '../../functions/LoadProjectPage.function';

const ProjectComponent = (): ReactNode => <ProjectPage {...Route.useLoaderData()} />;

export const Route = createFileRoute('/work/$slug')({
    loader: ({ context, params }) => loadProjectPage(context.projectRepository, params.slug),
    /** Without loader data, as on a 404, the root's title stands. */
    head: ({ loaderData }) =>
        loaderData
            ? buildRouteHead({
                  title: loaderData.project.title,
                  description: loaderData.project.summary,
                  path: `/work/${loaderData.project.slug}`,
                  type: OpenGraphType.Article,
              })
            : {},
    component: ProjectComponent,
});
