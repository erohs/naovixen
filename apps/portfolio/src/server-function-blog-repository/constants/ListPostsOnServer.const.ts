import { createServerFn } from '@tanstack/react-start';

import { createRequestBlogRepository } from '../../functions/CreateRequestBlogRepository.function';

export const listPostsOnServer = createServerFn().handler(async () =>
    (await createRequestBlogRepository()).listPosts(),
);
