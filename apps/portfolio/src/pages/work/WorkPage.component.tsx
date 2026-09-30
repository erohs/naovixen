import type { FunctionComponent } from 'react';
import { Breadcrumb } from '@naovixen/blocks';
import { Heading, Text } from '@naovixen/components';

import { Page } from '../../components/page/Page.component';
import { ProjectCardList } from '../../components/project-card-list/ProjectCardList.component';
import { RoutedLink } from '../../components/routed-link/RoutedLink.component';
import { homeBreadcrumbTrail } from '../../constants/HomeBreadcrumbTrail.const';
import { placeholderWorkIntro } from '../../constants/PlaceholderWorkIntro.const';
import type { IWorkPageProps } from './interfaces/IWorkPageProps';

export const WorkPage: FunctionComponent<IWorkPageProps> = ({ projects }) => (
    <Page>
        <Breadcrumb trail={homeBreadcrumbTrail} currentLabel="Work" linkComponent={RoutedLink} />
        <header className="nv-work-page__header">
            <Heading level={1}>Work</Heading>
            <Text className="nv-work-page__intro">{placeholderWorkIntro}</Text>
        </header>
        {projects.length === 0 ? (
            <Text>There are no projects yet.</Text>
        ) : (
            <ProjectCardList projects={projects} headingLevel={2} />
        )}
    </Page>
);
