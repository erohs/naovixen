import type { FunctionComponent } from 'react';
import { Card, TagList } from '@naovixen/blocks';
import { Heading, HeadingSize, Image, Text } from '@naovixen/components';
import { joinClassNames } from '@naovixen/formatting';

import { CaseStudyLink } from '../case-study-link/CaseStudyLink.component';
import type { IProjectCardProps } from './interfaces/IProjectCardProps';

/** One link per card, so a screen reader's link list names each case study once. */
export const ProjectCard: FunctionComponent<IProjectCardProps> = ({
    project,
    href,
    headingLevel,
    linkComponent,
    className,
    ...cardProps
}) => (
    <Card {...cardProps} className={joinClassNames('nx-project-card', className)}>
        {project.screenshot && (
            <Image {...project.screenshot} className="nx-project-card__screenshot" />
        )}
        <Heading level={headingLevel} size={HeadingSize.H4}>
            {project.title}
        </Heading>
        <Text className="nx-project-card__summary">{project.summary}</Text>
        <TagList tags={project.stack} label="Tech stack" />
        <footer className="nx-project-card__footer">
            <CaseStudyLink href={href} projectTitle={project.title} linkComponent={linkComponent} />
        </footer>
    </Card>
);
