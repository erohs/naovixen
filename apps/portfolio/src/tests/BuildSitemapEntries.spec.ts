import { InMemoryBlogRepository } from '@naovixen/cms';
import type { IProjectRepository } from '@naovixen/cms';
import { describe, expect, test } from 'vitest';

import { buildSitemapEntries } from '../functions/BuildSitemapEntries.function';

const projectRepository: IProjectRepository = {
    listProjects: () =>
        Promise.resolve([
            { slug: 'habit-tracker', title: '', summary: '', stack: [], isFeatured: false },
        ]),
    getProjectBySlug: () => Promise.resolve(undefined),
};

describe('Using buildSitemapEntries, given one published post and one project, when the entries are built', () => {
    const repository = new InMemoryBlogRepository([
        {
            slug: 'hello',
            title: 'Hello',
            excerpt: '',
            publishedAt: '2026-09-02',
            readingTimeInMinutes: 1,
            tags: [],
            body: [],
        },
    ]);

    test('then it should list the post with its date', async () => {
        const entries = await buildSitemapEntries(repository, projectRepository);

        expect(entries).toContainEqual({ path: '/blog/hello', lastModified: '2026-09-02' });
    });

    test('then it should list the project', async () => {
        const entries = await buildSitemapEntries(repository, projectRepository);

        expect(entries).toContainEqual({ path: '/work/habit-tracker' });
    });

    test('then it should list the home page', async () => {
        expect(await buildSitemapEntries(repository, projectRepository)).toContainEqual({
            path: '/',
        });
    });
});
