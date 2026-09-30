import type { IBlogPostSummary } from '@naovixen/cms';
import { screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { renderWithRouter } from '../../../tests/functions/RenderWithRouter.function';
import { PostCardList } from '../PostCardList.component';

const posts: readonly IBlogPostSummary[] = [
    {
        slug: 'newer-post',
        title: 'Newer post',
        excerpt: 'The newer excerpt.',
        publishedAt: '2026-02-01',
        readingTimeInMinutes: 4,
        tags: ['First topic'],
    },
    {
        slug: 'older-post',
        title: 'Older post',
        excerpt: 'The older excerpt.',
        publishedAt: '2026-01-01',
        readingTimeInMinutes: 5,
        tags: ['Second topic'],
    },
];

function renderPostCardList(): Promise<unknown> {
    return renderWithRouter(<PostCardList posts={posts} headingLevel={3} />, [
        '/blog/newer-post',
        '/blog/older-post',
    ]);
}

describe('Using PostCardList, given some posts, when it renders', () => {
    test('then it should link each card to its post', async () => {
        await renderPostCardList();

        expect(screen.getAllByRole('link').map((link) => link.getAttribute('href'))).toEqual([
            '/blog/newer-post',
            '/blog/older-post',
        ]);
    });
});
