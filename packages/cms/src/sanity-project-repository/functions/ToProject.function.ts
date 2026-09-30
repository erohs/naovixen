import type { ImageUrlBuilder } from '@sanity/image-url';

import { toBody } from '../../functions/ToBody.function';
import type { ProjectBySlugQueryResult } from '../../generated/SanityTypes';
import type { IProject } from '../../interfaces/IProject';
import { toProjectSummary } from './ToProjectSummary.function';

export function toProject(
    project: NonNullable<ProjectBySlugQueryResult>,
    imageUrls: ImageUrlBuilder,
): IProject {
    return { ...toProjectSummary(project, imageUrls), body: toBody(project.body, imageUrls) };
}
