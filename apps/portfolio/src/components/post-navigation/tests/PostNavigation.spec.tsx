import { findAxeViolations } from '@naovixen/nvpack/testing';
import type { IBlogPostSummary } from '@naovixen/models';
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

describe('Using PostNavigation', () => {
    describe('given an older post', () => {
        describe('when it renders', () => {
            test('then it should be navigation named for more posts', async () => {
                await renderWithRouter(<PostNavigation olderPost={olderPost} />, paths);

                expect(screen.getByRole('navigation', { name: 'More posts' })).toBeDefined();
            });

            test('then it should link to all posts', async () => {
                await renderWithRouter(<PostNavigation olderPost={olderPost} />, paths);

                expect(screen.getByRole('link', { name: 'All posts' }).getAttribute('href')).toBe(
                    '/blog',
                );
            });

            test('then it should link to the older post as the next read', async () => {
                await renderWithRouter(<PostNavigation olderPost={olderPost} />, paths);

                expect(
                    screen.getByRole('link', { name: 'Next: Older post' }).getAttribute('href'),
                ).toBe('/blog/older-post');
            });

            test('then it should have no accessibility violations', async () => {
                await renderWithRouter(<PostNavigation olderPost={olderPost} />, paths);

                expect(await findAxeViolations()).toEqual([]);
            });
        });
    });

    describe('given no older post', () => {
        describe('when it renders', () => {
            test('then it should only link to all posts', async () => {
                await renderWithRouter(<PostNavigation olderPost={undefined} />, paths);

                expect(screen.getAllByRole('link').map((link) => link.textContent)).toEqual([
                    'All posts',
                ]);
            });
        });
    });
});
