import { describe, expect, test } from 'vitest';
import { createImageUrlBuilder } from '@sanity/image-url';

import type { IGroqClient } from '../../interfaces/IGroqClient';
import { SanityBlogRepository } from '../SanityBlogRepository';

const imageUrls = createImageUrlBuilder({ projectId: 'fixture', dataset: 'test' });

const assetUrl = 'https://cdn.sanity.io/images/fixture/test/abc123-1200x800.png';

const postFields = {
    slug: 'first-post',
    title: 'First post',
    excerpt: 'An excerpt.',
    publishedAt: '2026-09-30',
    tags: ['CSS'],
};

/** Answers every query with the same result, as Sanity would for the one query a method sends. */
function createRepositoryAnswering(result: unknown): SanityBlogRepository {
    const client: IGroqClient = {
        fetch: <Result>() => Promise.resolve(result as Result),
    };

    return new SanityBlogRepository(client, imageUrls);
}

function createRepositoryWithBody(body: readonly unknown[]): SanityBlogRepository {
    return createRepositoryAnswering({ ...postFields, plainText: 'Some words.', body });
}

describe('Using SanityBlogRepository, given a post of 450 words, when the posts are listed', () => {
    const repository = createRepositoryAnswering([
        { ...postFields, plainText: Array.from({ length: 450 }, () => 'word').join(' ') },
    ]);

    test('then it should estimate the reading time from the words', async () => {
        const [post] = await repository.listPosts();

        expect(post?.readingTimeInMinutes).toBe(3);
    });
});

describe('Using SanityBlogRepository, given no post has the slug, when the post is asked for', () => {
    const repository = createRepositoryAnswering(null);

    test('then it should resolve to undefined', async () => {
        expect(await repository.getPostBySlug('missing')).toBeUndefined();
    });
});

describe('Using SanityBlogRepository, given a text block with no spans, when the post is asked for', () => {
    const repository = createRepositoryWithBody([{ _type: 'block', _key: 'a' }]);

    test('then it should give the block empty children', async () => {
        const post = await repository.getPostBySlug('first-post');

        expect(post?.body[0]).toMatchObject({ children: [], markDefs: [] });
    });
});

describe('Using SanityBlogRepository, given a code block with no language, when the post is asked for', () => {
    const repository = createRepositoryWithBody([{ _type: 'code', _key: 'a', code: 'x' }]);

    test('then it should treat the code as plain text', async () => {
        const post = await repository.getPostBySlug('first-post');

        expect(post?.body[0]).toMatchObject({ language: 'text' });
    });
});

describe('Using SanityBlogRepository, given a figure with an uploaded image, when the post is asked for', () => {
    const repository = createRepositoryWithBody([
        {
            _type: 'figure',
            _key: 'a',
            shape: 'wide',
            image: {
                alt: 'A chart',
                asset: { url: assetUrl, metadata: { dimensions: { width: 1200, height: 800 } } },
            },
        },
    ]);

    test('then it should resolve the image to a sized, format-negotiated URL', async () => {
        const post = await repository.getPostBySlug('first-post');

        expect(post?.body[0]).toMatchObject({
            image: {
                src: expect.stringContaining('auto=format') as unknown,
                alt: 'A chart',
                width: 1200,
                height: 800,
            },
        });
    });
});

describe('Using SanityBlogRepository, given a figure whose image never finished uploading, when the post is asked for', () => {
    const repository = createRepositoryWithBody([
        { _type: 'figure', _key: 'a', shape: 'wide', image: { alt: 'A chart', asset: null } },
    ]);

    test('then it should leave the figure out', async () => {
        const post = await repository.getPostBySlug('first-post');

        expect(post?.body).toEqual([]);
    });
});
