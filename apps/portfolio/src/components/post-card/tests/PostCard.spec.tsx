import type { IBlogPostSummary } from '@naovixen/models';
import { screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { findAxeViolations } from '../../tests/functions/FindAxeViolations.function';
import { renderWithProvider } from '../../tests/functions/RenderWithProvider.function';
import { BlogPostCard } from '../BlogPostCard.component';

const post: IBlogPostSummary = {
  slug: 'example-post',
  title: 'Example post',
  excerpt: 'An example excerpt.',
  publishedAt: '2026-01-15',
  readingTimeInMinutes: 6,
  tags: ['Example topic'],
};

describe('Using BlogPostCard', () => {
  describe('given a post', () => {
    describe('when it renders', () => {
      test('then it should title the card with a heading at the given level', () => {
        renderWithProvider(<BlogPostCard post={post} href="/blog/example-post" headingLevel={2} />);

        expect(screen.getByRole('heading', { level: 2, name: 'Example post' })).toBeDefined();
      });

      test('then it should link the title to the post', () => {
        renderWithProvider(<BlogPostCard post={post} href="/blog/example-post" headingLevel={2} />);

        expect(screen.getByRole('link', { name: 'Example post' })).toHaveProperty(
          'pathname',
          '/blog/example-post',
        );
      });

      test('then it should give the machine-readable publish date', () => {
        renderWithProvider(<BlogPostCard post={post} href="/blog/example-post" headingLevel={2} />);

        expect(screen.getByRole('time').getAttribute('datetime')).toBe('2026-01-15');
      });

      test('then it should show the date in words', () => {
        renderWithProvider(<BlogPostCard post={post} href="/blog/example-post" headingLevel={2} />);

        expect(screen.getByText('15 January 2026')).toBeDefined();
      });

      test('then it should show the reading time', () => {
        renderWithProvider(<BlogPostCard post={post} href="/blog/example-post" headingLevel={2} />);

        expect(screen.getByText('6 min read')).toBeDefined();
      });

      test('then it should list the topics', () => {
        renderWithProvider(<BlogPostCard post={post} href="/blog/example-post" headingLevel={2} />);

        expect(screen.getByRole('list', { name: 'Topics' }).textContent).toBe('Example topic');
      });

      test('then it should have no accessibility violations', async () => {
        renderWithProvider(<BlogPostCard post={post} href="/blog/example-post" headingLevel={2} />);

        expect(await findAxeViolations()).toEqual([]);
      });
    });
  });
});
