import { createServerFn } from '@tanstack/react-start';

import { createSanityBlogRepository } from '../../functions/CreateSanityBlogRepository.function';
import { isPreviewResponse } from '../../functions/IsPreviewResponse.function';

export const listTagsOnServer = createServerFn().handler(async () =>
    createSanityBlogRepository(await isPreviewResponse()).listTags(),
);
