import type { FunctionComponent } from 'react';
import { Breadcrumb, Figure, HandDrawnRule, SectionHeading, TagList } from '@naovixen/blocks';
import { BlogContent } from '@naovixen/blog-content';
import type { IProject, IProjectSection } from '@naovixen/cms';
import {
    arrowLeftIcon,
    arrowRightIcon,
    ButtonVariant,
    externalLinkIcon,
    Heading,
    HeadingSize,
    Icon,
    IconPosition,
    LinkButton,
    Text,
    TextVariant,
    VisuallyHidden,
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
        <Text variant={TextVariant.Lead} className="nv-project-page__tldr">
            <span className="nv-project-page__tldr-label">TL;DR</span> {project.tldr}
        </Text>
    </header>
);

const ProjectFacts: FunctionComponent<{ readonly project: IProject }> = ({ project }) => (
    <dl className="nv-project-page__facts">
        <div>
            <dt>my role</dt>
            <dd>{project.role}</dd>
        </div>
        <div>
            <dt>timeline</dt>
            <dd>{project.timeline}</dd>
        </div>
        <div className="nv-project-page__stack">
            <dt>tech stack</dt>
            <dd>
                <TagList tags={project.stack} label="Tech stack" />
            </dd>
        </div>
    </dl>
);

interface IExternalButtonProps {
    readonly href: string;
    readonly variant: ButtonVariant;
    readonly children: string;
}

const ExternalButton: FunctionComponent<IExternalButtonProps> = ({ href, variant, children }) => (
    <LinkButton href={href} variant={variant} target="_blank" rel="noopener noreferrer">
        {children} <Icon source={externalLinkIcon} />
        <VisuallyHidden> (opens in new tab)</VisuallyHidden>
    </LinkButton>
);

/** Each link shows only when the project has one. */
const ProjectLinks: FunctionComponent<{ readonly project: IProject }> = ({ project }) =>
    (project.liveUrl ?? project.repositoryUrl) && (
        <div className="nv-project-page__links">
            {project.liveUrl && (
                <ExternalButton href={project.liveUrl} variant={ButtonVariant.Primary}>
                    Live demo
                </ExternalButton>
            )}
            {project.repositoryUrl && (
                <ExternalButton href={project.repositoryUrl} variant={ButtonVariant.Secondary}>
                    GitHub repo
                </ExternalButton>
            )}
        </div>
    );

interface IProjectSectionProps {
    readonly section: IProjectSection;
    readonly number: number;
}

const ProjectSection: FunctionComponent<IProjectSectionProps> = ({ section, number }) => (
    <section aria-labelledby={`section-${String(number)}`} className="nv-project-page__section">
        <SectionHeading
            headingId={`section-${String(number)}`}
            number={String(number).padStart(2, '0')}
        >
            {section.heading}
        </SectionHeading>
        <BlogContent body={section.body} linkComponent={RoutedLink} />
    </section>
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
        <ProjectFacts project={project} />
        <ProjectLinks project={project} />
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
            <div className="nv-project-page__body">
                {project.sections.map((section, index) => (
                    <ProjectSection key={section.heading} section={section} number={index + 1} />
                ))}
            </div>
            <HandDrawnRule className="nv-project-page__rule" />
            <MoreProjects nextProject={nextProject} />
        </article>
    </Page>
);
