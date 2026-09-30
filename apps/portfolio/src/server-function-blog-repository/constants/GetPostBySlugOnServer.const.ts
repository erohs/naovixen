import { createServerFn } from '@tanstack/react-start';

import { createSanityBlogRepository } from '../../functions/CreateSanityBlogRepository.function';
import { isPreviewResponse } from '../../functions/IsPreviewResponse.function';

export const getPostBySlugOnServer = createServerFn()
    .validator((slug: string) => slug)
    .handler(async ({ data: slug }) =>
        createSanityBlogRepository(await isPreviewResponse()).getPostBySlug(slug),
    );
