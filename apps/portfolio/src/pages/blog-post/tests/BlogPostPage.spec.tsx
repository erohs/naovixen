import type { IBlogPost, IBlogPostSummary } from '@naovixen/cms';
import { screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { renderWithRouter } from '../../../tests/functions/RenderWithRouter.function';
import { BlogPostPage } from '../BlogPostPage.component';

const post: IBlogPost = {
    slug: 'newer-post',
    title: 'Newer post',
    excerpt: 'The newer excerpt.',
    publishedAt: '2026-02-01',
    readingTimeInMinutes: 3,
    tags: ['Example topic'],
    body: [],
};

const olderPost: IBlogPostSummary = {
    slug: 'older-post',
    title: 'Older post',
    excerpt: 'The older excerpt.',
    publishedAt: '2026-01-01',
    readingTimeInMinutes: 5,
    tags: ['Example topic'],
};

const paths = ['/', '/blog', '/blog/$slug'];

describe('Using BlogPostPage, given an older post, when it renders', () => {
    test('then it should link to the older post as the next read', async () => {
        await renderWithRouter(<BlogPostPage post={post} olderPost={olderPost} />, paths);

        expect(screen.getByRole('link', { name: 'Next: Older post' }).getAttribute('href')).toBe(
            '/blog/older-post',
        );
    });
});

describe('Using BlogPostPage, given no older post, when it renders', () => {
    test('then it should offer no next read', async () => {
        await renderWithRouter(<BlogPostPage post={post} olderPost={undefined} />, paths);

        expect(screen.queryByRole('link', { name: /^Next:/ })).toBeNull();
    });
});
