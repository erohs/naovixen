import { InMemoryBlogRepository } from '@naovixen/cms';
import { describe, expect, test } from 'vitest';

import { buildSitemapEntries } from '../functions/BuildSitemapEntries.function';

describe('Using buildSitemapEntries', () => {
    describe('given one published post', () => {
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

        describe('when the entries are built', () => {
            test('then it should list the post with its date', async () => {
                const entries = await buildSitemapEntries(repository);

                expect(entries).toContainEqual({ path: '/blog/hello', lastModified: '2026-09-02' });
            });

            test('then it should list the home page', async () => {
                expect(await buildSitemapEntries(repository)).toContainEqual({ path: '/' });
            });
        });
    });
});
