import type { IBlogRepository } from '@naovixen/cms';

import { ServerFunctionBlogRepository } from '../server-function-blog-repository/ServerFunctionBlogRepository';

export const blogRepository: IBlogRepository = new ServerFunctionBlogRepository();
