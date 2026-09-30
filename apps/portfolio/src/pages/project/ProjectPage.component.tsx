import type { FunctionComponent } from 'react';
import { Breadcrumb, Figure, HandDrawnRule, TagList } from '@naovixen/blocks';
import { RichContent } from '@naovixen/rich-content';
import type { IProject } from '@naovixen/cms';
import {
    arrowLeftIcon,
    arrowRightIcon,
    Heading,
    HeadingSize,
    IconPosition,
    Text,
    TextVariant,
} from '@naovixen/components';

import { Page } from '../../components/page/Page.component';
import { RoutedLink } from '../../components/routed-link/RoutedLink.component';
import { RouterLinkIcon } from '../../components/router-link-icon/RouterLinkIcon.component';
import type { IProjectPageData } from '../../interfaces/IProjectPageData';
import { workBreadcrumbTrail } from './constants/WorkBreadcrumbTrail.const';

const ProjectHeader: FunctionComponent<{ readonly project: IProject }> = ({ project }) => (
    <header className="nv-project-page__header">
        <Heading level={1} size={HeadingSize.Title} id="project-title">
            {project.title}
        </Heading>
        <Text variant={TextVariant.Lead} className="nv-project-page__summary">
            {project.summary}
        </Text>
    </header>
);

const ProjectStack: FunctionComponent<{ readonly project: IProject }> = ({ project }) => (
    <dl className="nv-project-page__stack">
        <dt>tech stack</dt>
        <dd>
            <TagList tags={project.stack} label="Tech stack" />
        </dd>
    </dl>
);

/** Wraps round to the first project, so every case study leads to another. */
const MoreProjects: FunctionComponent<Pick<IProjectPageData, 'nextProject'>> = ({
    nextProject,
}) => (
    <nav aria-label="More projects" className="nv-project-page__more">
        <RouterLinkIcon to="/work" icon={arrowLeftIcon} iconPosition={IconPosition.Start}>
            All projects
        </RouterLinkIcon>
        {nextProject && (
            <RouterLinkIcon
                to="/work/$slug"
                params={{ slug: nextProject.slug }}
                icon={arrowRightIcon}
                className="nv-project-page__next"
            >
                Next: {nextProject.title}
            </RouterLinkIcon>
        )}
    </nav>
);

/** The screenshot is the largest thing on the page, so it loads first rather than lazily. */
const ProjectOverview: FunctionComponent<{ readonly project: IProject }> = ({ project }) => (
    <>
        <ProjectHeader project={project} />
        <ProjectStack project={project} />
        {project.screenshot && (
            <Figure image={{ ...project.screenshot, loading: 'eager', fetchPriority: 'high' }} />
        )}
    </>
);

export const ProjectPage: FunctionComponent<IProjectPageData> = ({ project, nextProject }) => (
    <Page>
        <article aria-labelledby="project-title">
            <Breadcrumb
                trail={workBreadcrumbTrail}
                currentLabel={project.title}
                linkComponent={RoutedLink}
            />
            <ProjectOverview project={project} />
            <RichContent
                body={project.body}
                linkComponent={RoutedLink}
                className="nv-project-page__body"
            />
            <HandDrawnRule className="nv-project-page__rule" />
            <MoreProjects nextProject={nextProject} />
        </article>
    </Page>
);
