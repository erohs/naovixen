import { findAxeViolations } from '@naovixen/nvpack/testing';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { PostCardDetails } from '../PostCardDetails.component';

const post = {
    slug: 'example-post',
    title: 'Example post',
    excerpt: 'An example excerpt.',
    publishedAt: '2026-01-15',
    readingTimeInMinutes: 6,
    tags: ['Example topic'],
};

describe('Using PostCardDetails', () => {
    describe('given a post', () => {
        describe('when it renders', () => {
            test('then it should give the machine-readable publish date', () => {
                render(<PostCardDetails post={post} />);

                expect(screen.getByRole('time').getAttribute('datetime')).toBe('2026-01-15');
            });

            test('then it should say how long the post takes to read', () => {
                render(<PostCardDetails post={post} />);

                expect(screen.getByText('6 min read')).toBeDefined();
            });

            test('then it should list the topics', () => {
                render(<PostCardDetails post={post} />);

                expect(screen.getByRole('list', { name: 'Topics' }).textContent).toBe(
                    'Example topic',
                );
            });

            test('then it should have no accessibility violations', async () => {
                render(<PostCardDetails post={post} />);

                expect(await findAxeViolations()).toEqual([]);
            });
        });
    });
});
