import type { ImageUrlBuilder } from '@sanity/image-url';

import { toImage } from '../../functions/ToImage.function';
import type { ProjectSummariesQueryResult } from '../../generated/SanityTypes';
import type { IProjectSummary } from '../../interfaces/IProjectSummary';

export function toProjectSummary(
    project: ProjectSummariesQueryResult[number],
    imageUrls: ImageUrlBuilder,
): IProjectSummary {
    return {
        slug: project.slug,
        title: project.title,
        summary: project.summary,
        stack: project.stack,
        isFeatured: project.isFeatured,
        screenshot:
            project.screenshot === null ? undefined : toImage(project.screenshot, imageUrls),
    };
}
