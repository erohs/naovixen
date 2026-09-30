import { findAxeViolations } from '@naovixen/nvpack/testing';
import type { IBlogPostSummary } from '@naovixen/models';
import { screen, within } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { placeholderBlogIntro } from '../../../constants/PlaceholderBlogIntro.const';
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

describe('Using BlogPage', () => {
    describe('given some posts', () => {
        describe('when it renders', () => {
            test('then it should be headed Blog', async () => {
                await renderWithRouter(<BlogPage posts={posts} />, paths, '/blog');

                expect(screen.getByRole('heading', { level: 1, name: 'Blog' })).toBeDefined();
            });

            test('then it should show the intro', async () => {
                await renderWithRouter(<BlogPage posts={posts} />, paths, '/blog');

                expect(screen.getByText(placeholderBlogIntro)).toBeDefined();
            });

            test('then it should link back home in the breadcrumb', async () => {
                await renderWithRouter(<BlogPage posts={posts} />, paths, '/blog');

                const breadcrumb = screen.getByRole('navigation', { name: 'Breadcrumb' });

                expect(
                    within(breadcrumb).getByRole('link', { name: 'Home' }).getAttribute('href'),
                ).toBe('/');
            });

            test('then it should title each post card at level 2', async () => {
                await renderWithRouter(<BlogPage posts={posts} />, paths, '/blog');

                expect(
                    screen.getByRole('heading', { level: 2, name: 'Example post' }),
                ).toBeDefined();
            });

            test('then it should have no accessibility violations', async () => {
                await renderWithRouter(<BlogPage posts={posts} />, paths, '/blog');

                expect(await findAxeViolations()).toEqual([]);
            });
        });
    });

    describe('given no posts', () => {
        describe('when it renders', () => {
            test('then it should say there are no posts yet', async () => {
                await renderWithRouter(<BlogPage posts={[]} />, paths, '/blog');

                expect(screen.getByText('There are no posts yet.')).toBeDefined();
            });

            test('then it should not list any cards', async () => {
                await renderWithRouter(<BlogPage posts={[]} />, paths, '/blog');

                expect(screen.queryAllByRole('article')).toHaveLength(0);
            });
        });
    });
});
