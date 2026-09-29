import { describe, expect, test } from 'vitest';
import type { IBlogPostSummary, IPerson, ISite } from '@naovixen/models';

import { buildBlogPostingStructuredData } from '../functions/BuildBlogPostingStructuredData.function';

const site: ISite = { name: 'Example Person', origin: 'https://example.com', locale: 'en-GB' };

const author: IPerson = { name: 'Example Person', jobTitle: 'Software Engineer', socialLinks: [] };

const post: IBlogPostSummary = {
  slug: 'hello-world',
  title: 'Hello, world',
  excerpt: 'A first post.',
  publishedAt: '2026-09-02',
  readingTimeInMinutes: 3,
  tags: ['Accessibility'],
};

describe('Using buildBlogPostingStructuredData', () => {
  describe('when building a blog post', () => {
    test('then it should give the absolute URL of the post', () => {
      expect(buildBlogPostingStructuredData(post, author, site).url).toBe(
        'https://example.com/blog/hello-world',
      );
    });

    test('then it should use the title as the headline', () => {
      expect(buildBlogPostingStructuredData(post, author, site).headline).toBe('Hello, world');
    });

    test('then it should credit the author', () => {
      expect(buildBlogPostingStructuredData(post, author, site).author.name).toBe('Example Person');
    });

    test('then it should carry the publication date', () => {
      expect(buildBlogPostingStructuredData(post, author, site).datePublished).toBe('2026-09-02');
    });
  });
});
