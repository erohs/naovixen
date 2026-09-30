import type { LinkProps } from '@naovixen/components';
import { findAxeViolations } from '@naovixen/nvpack/testing';
import type { IBlogPostSummary } from '@naovixen/models';
import { render, screen } from '@testing-library/react';
import type { FunctionComponent } from 'react';
import { describe, expect, test } from 'vitest';

import { PostCard } from '../PostCard.component';

const post: IBlogPostSummary = {
    slug: 'example-post',
    title: 'Example post',
    excerpt: 'An example excerpt.',
    publishedAt: '2026-01-15',
    readingTimeInMinutes: 6,
    tags: ['Example topic'],
};

const RouterLink: FunctionComponent<LinkProps> = ({ children, ...anchorProps }) => (
    <a {...anchorProps} data-routed="true">
        {children}
    </a>
);

describe('Using PostCard', () => {
    describe('given a post', () => {
        describe('when it renders', () => {
            test('then it should be an article', () => {
                render(<PostCard post={post} href="/blog/example-post" headingLevel={2} />);

                expect(screen.getByRole('article')).toBeDefined();
            });

            test('then it should title the card with a heading at the given level', () => {
                render(<PostCard post={post} href="/blog/example-post" headingLevel={2} />);

                expect(
                    screen.getByRole('heading', { level: 2, name: 'Example post' }),
                ).toBeDefined();
            });

            test('then it should link the title to the post', () => {
                render(<PostCard post={post} href="/blog/example-post" headingLevel={2} />);

                expect(screen.getByRole('link', { name: 'Example post' })).toHaveProperty(
                    'pathname',
                    '/blog/example-post',
                );
            });

            test('then it should show the excerpt', () => {
                render(<PostCard post={post} href="/blog/example-post" headingLevel={2} />);

                expect(screen.getByText('An example excerpt.')).toBeDefined();
            });

            test('then it should give the machine-readable publish date', () => {
                render(<PostCard post={post} href="/blog/example-post" headingLevel={2} />);

                expect(screen.getByRole('time').getAttribute('datetime')).toBe('2026-01-15');
            });

            test('then it should show the date in words', () => {
                render(<PostCard post={post} href="/blog/example-post" headingLevel={2} />);

                expect(screen.getByText('15 January 2026')).toBeDefined();
            });

            test('then it should show the reading time', () => {
                render(<PostCard post={post} href="/blog/example-post" headingLevel={2} />);

                expect(screen.getByText('6 min read')).toBeDefined();
            });

            test('then it should list the topics', () => {
                render(<PostCard post={post} href="/blog/example-post" headingLevel={2} />);

                expect(screen.getByRole('list', { name: 'Topics' }).textContent).toBe(
                    'Example topic',
                );
            });

            test('then it should have no accessibility violations', async () => {
                render(<PostCard post={post} href="/blog/example-post" headingLevel={2} />);

                expect(await findAxeViolations()).toEqual([]);
            });
        });
    });

    describe('given a link component', () => {
        describe('when it renders', () => {
            test('then it should render the title link with it', () => {
                render(
                    <PostCard
                        post={post}
                        href="/blog/example-post"
                        headingLevel={2}
                        linkComponent={RouterLink}
                    />,
                );

                expect(screen.getByRole('link').getAttribute('data-routed')).toBe('true');
            });
        });
    });

    describe('given intrinsic article props', () => {
        describe('when it renders', () => {
            test('then it should pass them through to the article', () => {
                render(
                    <PostCard
                        post={post}
                        href="/blog/example-post"
                        headingLevel={2}
                        aria-label="Latest post"
                    />,
                );

                expect(screen.getByRole('article', { name: 'Latest post' })).toBeDefined();
            });
        });
    });
});
