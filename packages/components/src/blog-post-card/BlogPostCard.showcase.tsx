import type { IBlogPostSummary } from '@naovixen/models';

import type { IShowcase } from '../interfaces/IShowcase';
import { BlogPostCard } from './BlogPostCard.component';

const examplePost: IBlogPostSummary = {
  slug: 'example-post',
  title: 'Example post',
  excerpt: 'A one-line excerpt from the example post.',
  publishedAt: '2026-01-15',
  readingTimeInMinutes: 6,
  tags: ['Example topic', 'Another topic'],
};

export const blogPostCardShowcase: IShowcase = {
  name: 'BlogPostCard',
  examples: [
    {
      name: 'Default',
      render: () => <BlogPostCard post={examplePost} href="/blog/example-post" headingLevel={3} />,
    },
  ],
};
