import type { IBlogPostSummary } from '@naovixen/cms';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { PostCard } from '../PostCard.component';

const post: IBlogPostSummary = {
    slug: 'example-post',
    title: 'Example post',
    excerpt: 'The excerpt.',
    publishedAt: '2026-02-01',
    readingTimeInMinutes: 4,
    tags: ['A topic'],
};

describe('Using PostCard, given a post, when it renders', () => {
    test('then it should link the title to the post', () => {
        render(<PostCard post={post} headingLevel={3} />);

        expect(screen.getByRole('link', { name: 'Example post' }).getAttribute('href')).toBe(
            '/blog/example-post',
        );
    });
});
