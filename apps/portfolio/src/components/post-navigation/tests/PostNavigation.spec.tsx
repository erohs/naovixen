import type { IBlogPostSummary } from '@naovixen/cms';
import { screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { renderWithRouter } from '../../../tests/functions/RenderWithRouter.function';
import { PostNavigation } from '../PostNavigation.component';

const olderPost: IBlogPostSummary = {
    slug: 'older-post',
    title: 'Older post',
    excerpt: 'The older excerpt.',
    publishedAt: '2026-01-01',
    readingTimeInMinutes: 5,
    tags: ['Example topic'],
};

const paths = ['/blog', '/blog/$slug'];

describe('Using PostNavigation, given an older post, when it renders', () => {
    test('then it should link to the older post as the next read', async () => {
        await renderWithRouter(<PostNavigation olderPost={olderPost} />, paths);

        expect(screen.getByRole('link', { name: 'Next: Older post' }).getAttribute('href')).toBe(
            '/blog/older-post',
        );
    });
});

describe('Using PostNavigation, given no older post, when it renders', () => {
    test('then it should only link to all posts', async () => {
        await renderWithRouter(<PostNavigation olderPost={undefined} />, paths);

        expect(screen.getAllByRole('link').map((link) => link.textContent)).toEqual(['All posts']);
    });
});
