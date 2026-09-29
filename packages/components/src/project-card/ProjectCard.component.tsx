import type { FunctionComponent } from 'react';

import { HeadingSize } from '../enums/HeadingSize';
import { IconName } from '../enums/IconName';
import { Heading } from '../heading/Heading.component';
import { Image } from '../image/Image.component';
import { Link } from '../link/Link.component';
import { TagList } from '../tag-list/TagList.component';
import { VisuallyHidden } from '../visually-hidden/VisuallyHidden.component';
import type { IProjectCardProps } from './interfaces/IProjectCardProps';

/** One link per card, so a screen reader's link list names each case study once. */
export const ProjectCard: FunctionComponent<IProjectCardProps> = ({
  project,
  href,
  headingLevel,
}) => (
  <article className="nx-project-card">
    {project.screenshot && (
      <Image image={project.screenshot} className="nx-project-card__screenshot" />
    )}
    <Heading level={headingLevel} size={HeadingSize.H3}>
      {project.title}
    </Heading>
    <p className="nx-project-card__summary">{project.summary}</p>
    <TagList tags={project.stack} label="Tech stack" />
    <footer className="nx-project-card__footer">
      <Link href={href} trailingIcon={IconName.ArrowRight}>
        Read case study<VisuallyHidden>: {project.title}</VisuallyHidden>
      </Link>
    </footer>
  </article>
);
