import type { FunctionComponent } from 'react';
import {
    arrowRightIcon,
    Card,
    Heading,
    HeadingSize,
    Image,
    Link,
    TagList,
    Text,
    VisuallyHidden,
} from '@naovixen/components';
import { joinClassNames } from '@naovixen/utilities';

import type { IProjectCardProps } from './interfaces/IProjectCardProps';

/** A card names only the main few technologies; the case study lists them all. */
const cardStackLength = 3;

const CaseStudyLink: FunctionComponent<Pick<IProjectCardProps, 'project'>> = ({ project }) => (
    <p className="nv-project-card__footer">
        <Link href={`/work/${project.slug}`} className="nv-project-card__link">
            Read case study<VisuallyHidden>: {project.title}</VisuallyHidden>{' '}
            <Link.Icon source={arrowRightIcon} />
        </Link>
    </p>
);

/** The "Read case study" link stretches over the whole card, so anywhere on it opens the project. */
export const ProjectCard: FunctionComponent<IProjectCardProps> = ({
    project,
    headingLevel,
    className,
    ...cardProps
}) => (
    <Card {...cardProps} className={joinClassNames('nv-project-card', className)}>
        {project.screenshot && (
            <Image {...project.screenshot} className="nv-project-card__screenshot" />
        )}
        <div className="nv-project-card__text">
            <Heading level={headingLevel} size={HeadingSize.H4}>
                {project.title}
            </Heading>
            <Text className="nv-project-card__summary">{project.summary}</Text>
        </div>
        <TagList
            tags={project.stack.slice(0, cardStackLength)}
            label="Tech stack"
            className="nv-project-card__tags"
        />
        <CaseStudyLink project={project} />
    </Card>
);
