import { createServerFn } from '@tanstack/react-start';

import { createRequestBlogRepository } from '../../functions/CreateRequestBlogRepository.function';

export const getPostBySlugOnServer = createServerFn()
    .validator((slug: string) => slug)
    .handler(async ({ data: slug }) => (await createRequestBlogRepository()).getPostBySlug(slug));
