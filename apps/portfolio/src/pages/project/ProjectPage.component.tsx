import type { FunctionComponent } from 'react';
import {
    Breadcrumb,
    Figure,
    HandDrawnRule,
    Heading,
    HeadingSize,
    TagList,
    Text,
    TextVariant,
} from '@naovixen/components';
import { RichContent } from '@naovixen/rich-content';
import type { IProject } from '@naovixen/cms';

import { MoreNavigation } from '../../components/more-navigation/MoreNavigation.component';
import { Page } from '../../components/page/Page.component';
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

/** Wraps round to the first project, so every case study leads to another. */
export const ProjectPage: FunctionComponent<IProjectPageData> = ({ project, nextProject }) => (
    <Page>
        <article aria-labelledby="project-title">
            <Breadcrumb trail={workBreadcrumbTrail} currentLabel={project.title} />
            <ProjectOverview project={project} />
            <RichContent body={project.body} className="nv-project-page__body" />
            <HandDrawnRule className="nv-project-page__rule" />
            <MoreNavigation
                label="More projects"
                backLink={{ label: 'All projects', href: '/work' }}
                nextLink={
                    nextProject && {
                        label: nextProject.title,
                        href: `/work/${nextProject.slug}`,
                    }
                }
            />
        </article>
    </Page>
);
