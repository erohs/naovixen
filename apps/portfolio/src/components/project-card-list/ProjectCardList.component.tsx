import type { FunctionComponent } from 'react';

import { ProjectCard } from '../project-card/ProjectCard.component';
import type { IProjectCardListProps } from './interfaces/IProjectCardListProps';

export const ProjectCardList: FunctionComponent<IProjectCardListProps> = ({
    projects,
    headingLevel,
}) => (
    <ul className="nv-project-card-list">
        {projects.map((project) => (
            <li key={project.slug}>
                <ProjectCard project={project} headingLevel={headingLevel} />
            </li>
        ))}
    </ul>
);
