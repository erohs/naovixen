import { findAxeViolations } from '@naovixen/nvpack/testing';
import type { IBlogPostSummary } from '@naovixen/models';
import { screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { renderWithRouter } from '../../../tests/functions/RenderWithRouter.function';
import { LatestPostsSection } from '../LatestPostsSection.component';

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

function renderLatestPostsSection(): Promise<unknown> {
    return renderWithRouter(<LatestPostsSection posts={posts} />, ['/blog', '/blog/example-post']);
}

describe('Using LatestPostsSection', () => {
    describe('given some posts', () => {
        describe('when it renders', () => {
            test('then it should be a section named by its heading', async () => {
                await renderLatestPostsSection();

                expect(screen.getByRole('region', { name: 'From the blog' })).toBeDefined();
            });

            test('then it should have a level 2 heading', async () => {
                await renderLatestPostsSection();

                expect(
                    screen.getByRole('heading', { level: 2, name: 'From the blog' }),
                ).toBeDefined();
            });

            test('then it should link to all posts', async () => {
                await renderLatestPostsSection();

                expect(screen.getByRole('link', { name: 'All posts' }).getAttribute('href')).toBe(
                    '/blog',
                );
            });

            test('then it should title each post card at level 3', async () => {
                await renderLatestPostsSection();

                expect(
                    screen.getByRole('heading', { level: 3, name: 'Example post' }),
                ).toBeDefined();
            });

            test('then it should have no accessibility violations', async () => {
                await renderLatestPostsSection();

                expect(await findAxeViolations()).toEqual([]);
            });
        });
    });
});
