import type { IBlogPost } from '@naovixen/models';
import { describe, expect, test } from 'vitest';

import { InMemoryBlogRepository } from '../InMemoryBlogRepository';

function createPost(slug: string, publishedAt: string, tags: readonly string[]): IBlogPost {
    return {
        slug,
        title: `Post ${slug}`,
        excerpt: 'An excerpt.',
        publishedAt,
        readingTimeInMinutes: 3,
        tags,
        body: [],
    };
}

describe('Using InMemoryBlogRepository', () => {
    describe('given posts held out of date order', () => {
        const repository = new InMemoryBlogRepository([
            createPost('older', '2026-05-20', ['Process', 'CSS']),
            createPost('newer', '2026-09-02', ['CSS']),
        ]);

        describe('when the posts are listed', () => {
            test('then it should list the newest first', async () => {
                const posts = await repository.listPosts();

                expect(posts.map((post) => post.slug)).toEqual(['newer', 'older']);
            });

            test('then it should leave out the bodies', async () => {
                const posts = await repository.listPosts();

                expect(posts[0]).not.toHaveProperty('body');
            });
        });

        describe('when a post is asked for by its slug', () => {
            test('then it should return that post', async () => {
                expect((await repository.getPostBySlug('older'))?.title).toBe('Post older');
            });
        });

        describe('when a post is asked for by an unknown slug', () => {
            test('then it should return nothing', async () => {
                expect(await repository.getPostBySlug('missing')).toBeUndefined();
            });
        });

        describe('when the tags are listed', () => {
            test('then it should list each tag once, alphabetically', async () => {
                expect(await repository.listTags()).toEqual(['CSS', 'Process']);
            });
        });
    });
});
