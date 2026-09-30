import type { IBlogPostSummary } from '@naovixen/models';
import { screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { renderWithRouter } from '../../../tests/functions/RenderWithRouter.function';
import { BlogPage } from '../BlogPage.component';

const posts: readonly IBlogPostSummary[] = [
    {
        slug: 'example-post',
        title: 'Example post',
        excerpt: 'An example excerpt.',
        publishedAt: '2026-01-15',
        readingTimeInMinutes: 6,
        tags: ['Example topic'],
    },
];

const paths = ['/', '/blog', '/blog/example-post'];

describe('Using BlogPage, given some posts, when it renders', () => {
    test('then it should title each post card at level 2', async () => {
        await renderWithRouter(<BlogPage posts={posts} />, paths, '/blog');

        expect(screen.getByRole('heading', { level: 2, name: 'Example post' })).toBeDefined();
    });
});

describe('Using BlogPage, given no posts, when it renders', () => {
    test('then it should say there are no posts yet', async () => {
        await renderWithRouter(<BlogPage posts={[]} />, paths, '/blog');

        expect(screen.getByText('There are no posts yet.')).toBeDefined();
    });

    test('then it should not list any cards', async () => {
        await renderWithRouter(<BlogPage posts={[]} />, paths, '/blog');

        expect(screen.queryAllByRole('article')).toHaveLength(0);
    });
});
