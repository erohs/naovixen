import { createServerFn } from '@tanstack/react-start';

import { createSanityProjectRepository } from '../../functions/CreateSanityProjectRepository.function';
import { isPreviewResponse } from '../../functions/IsPreviewResponse.function';

export const getProjectBySlugOnServer = createServerFn()
    .validator((slug: string) => slug)
    .handler(async ({ data: slug }) =>
        createSanityProjectRepository(await isPreviewResponse()).getProjectBySlug(slug),
    );
