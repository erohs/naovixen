import type { IBlogPostSummary } from '@naovixen/cms';
import { describe, expect, test } from 'vitest';

import { findOlderPost } from '../functions/FindOlderPost.function';

function createSummary(slug: string): IBlogPostSummary {
    return {
        slug,
        title: slug,
        excerpt: '',
        publishedAt: '2026-01-01',
        readingTimeInMinutes: 1,
        tags: [],
    };
}

const posts = [createSummary('newest'), createSummary('middle'), createSummary('oldest')];

describe('Using findOlderPost, when asked for the post after one in the middle', () => {
    test('then it should return the next oldest', () => {
        expect(findOlderPost(posts, 'middle')?.slug).toBe('oldest');
    });
});

describe('Using findOlderPost, when asked for the post after the oldest', () => {
    test('then it should return nothing', () => {
        expect(findOlderPost(posts, 'oldest')).toBeUndefined();
    });
});

describe('Using findOlderPost, when asked about a slug that is not listed', () => {
    test('then it should return nothing', () => {
        expect(findOlderPost(posts, 'missing')).toBeUndefined();
    });
});
