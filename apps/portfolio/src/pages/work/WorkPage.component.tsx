import type { FunctionComponent } from 'react';
import { Breadcrumb, CardGrid, Heading, Text } from '@naovixen/components';

import { Page } from '../../components/page/Page.component';
import { ProjectCard } from '../../components/project-card/ProjectCard.component';
import { homeBreadcrumbTrail } from '../../constants/HomeBreadcrumbTrail.const';
import { placeholderWorkIntro } from '../../constants/PlaceholderWorkIntro.const';
import type { IWorkPageProps } from './interfaces/IWorkPageProps';

export const WorkPage: FunctionComponent<IWorkPageProps> = ({ projects }) => (
    <Page>
        <Breadcrumb trail={homeBreadcrumbTrail} currentLabel="Work" />
        <header className="nv-work-page__header">
            <Heading level={1}>Work</Heading>
            <Text className="nv-work-page__intro">{placeholderWorkIntro}</Text>
        </header>
        {projects.length === 0 ? (
            <Text>There are no projects yet.</Text>
        ) : (
            <CardGrid>
                {projects.map((project) => (
                    <li key={project.slug}>
                        <ProjectCard project={project} headingLevel={2} />
                    </li>
                ))}
            </CardGrid>
        )}
    </Page>
);
