import { findAxeViolations } from '@naovixen/component-testing';
import type { IBlogPostSummary } from '@naovixen/models';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { BlogPostHeader } from '../BlogPostHeader.component';

const post: IBlogPostSummary = {
    slug: 'example-post',
    title: 'Example post',
    excerpt: 'An example excerpt.',
    publishedAt: '2026-01-15',
    readingTimeInMinutes: 6,
    tags: ['First topic', 'Second topic'],
};

describe('Using BlogPostHeader', () => {
    describe('given a post and a heading id', () => {
        describe('when it renders', () => {
            test('then it should title the page with the post', () => {
                render(<BlogPostHeader post={post} headingId="post-title" />);

                expect(
                    screen.getByRole('heading', { level: 1, name: 'Example post' }),
                ).toBeDefined();
            });

            test('then it should give the heading the id', () => {
                render(<BlogPostHeader post={post} headingId="post-title" />);

                expect(screen.getByRole('heading', { level: 1 }).id).toBe('post-title');
            });

            test('then it should show the excerpt', () => {
                render(<BlogPostHeader post={post} headingId="post-title" />);

                expect(screen.getByText('An example excerpt.')).toBeDefined();
            });

            test('then it should give the machine-readable publish date', () => {
                render(<BlogPostHeader post={post} headingId="post-title" />);

                expect(screen.getByRole('time').getAttribute('datetime')).toBe('2026-01-15');
            });

            test('then it should show the date in words', () => {
                render(<BlogPostHeader post={post} headingId="post-title" />);

                expect(screen.getByText('15 January 2026')).toBeDefined();
            });

            test('then it should show the reading time', () => {
                render(<BlogPostHeader post={post} headingId="post-title" />);

                expect(screen.getByText('6 min read')).toBeDefined();
            });

            test('then it should hide the separator from assistive technology', () => {
                render(<BlogPostHeader post={post} headingId="post-title" />);

                expect(screen.getByText('·').getAttribute('aria-hidden')).toBe('true');
            });

            test('then it should list the topics', () => {
                render(<BlogPostHeader post={post} headingId="post-title" />);

                expect(screen.getAllByRole('listitem').map((item) => item.textContent)).toEqual([
                    'First topic',
                    'Second topic',
                ]);
            });

            test('then it should name the topic list', () => {
                render(<BlogPostHeader post={post} headingId="post-title" />);

                expect(screen.getByRole('list', { name: 'Topics' })).toBeDefined();
            });

            test('then it should have no accessibility violations', async () => {
                render(<BlogPostHeader post={post} headingId="post-title" />);

                expect(await findAxeViolations()).toEqual([]);
            });
        });
    });
});
