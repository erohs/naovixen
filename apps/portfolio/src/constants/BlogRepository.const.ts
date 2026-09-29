import type { IBlogRepository } from '@naovixen/cms';
import { InMemoryBlogRepository } from '@naovixen/cms';

import { placeholderBlogPosts } from './PlaceholderBlogPosts.const';

/** Phase 7 replaces this with the Sanity repository. */
export const blogRepository: IBlogRepository = new InMemoryBlogRepository(placeholderBlogPosts);
