import type { ImageUrlBuilder } from '@sanity/image-url';

import { toBody } from '../../functions/ToBody.function';
import type { ProjectBySlugQueryResult } from '../../generated/SanityTypes';
import type { IProject } from '../../interfaces/IProject';
import { toProjectSummary } from './ToProjectSummary.function';

export function toProject(
    project: NonNullable<ProjectBySlugQueryResult>,
    imageUrls: ImageUrlBuilder,
): IProject {
    return {
        ...toProjectSummary(project, imageUrls),
        tldr: project.tldr,
        role: project.role,
        timeline: project.timeline,
        liveUrl: project.liveUrl ?? undefined,
        repositoryUrl: project.repositoryUrl ?? undefined,
        sections: project.sections.map((section) => ({
            heading: section.heading,
            body: toBody(section.body, imageUrls),
        })),
    };
}
