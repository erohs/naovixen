import { createServerFn } from '@tanstack/react-start';

import { createRequestBlogRepository } from '../../functions/CreateRequestBlogRepository.function';

export const listTagsOnServer = createServerFn().handler(async () =>
    (await createRequestBlogRepository()).listTags(),
);
