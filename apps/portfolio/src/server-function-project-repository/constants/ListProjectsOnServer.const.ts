import { createServerFn } from '@tanstack/react-start';

import { createSanityProjectRepository } from '../../functions/CreateSanityProjectRepository.function';
import { isPreviewResponse } from '../../functions/IsPreviewResponse.function';

export const listProjectsOnServer = createServerFn().handler(async () =>
    createSanityProjectRepository(await isPreviewResponse()).listProjects(),
);
