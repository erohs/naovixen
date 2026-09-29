import { findAxeViolations } from '@naovixen/component-testing';
import { screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { renderWithRouter } from '../../../tests/functions/RenderWithRouter.function';
import { RoutedLink } from '../RoutedLink.component';

const paths = ['/blog', '/blog/example-post'];

describe('Using RoutedLink', () => {
    describe('given an href', () => {
        describe('when it renders', () => {
            test('then it should render a link to the href', async () => {
                await renderWithRouter(<RoutedLink href="/blog">Blog</RoutedLink>, paths);

                expect(screen.getByRole('link', { name: 'Blog' }).getAttribute('href')).toBe(
                    '/blog',
                );
            });

            test('then it should have no accessibility violations', async () => {
                await renderWithRouter(<RoutedLink href="/blog">Blog</RoutedLink>, paths);

                expect(await findAxeViolations()).toEqual([]);
            });
        });
    });

    describe('given the current path is the href', () => {
        describe('when it renders', () => {
            test('then it should mark the link as the current page', async () => {
                await renderWithRouter(<RoutedLink href="/blog">Blog</RoutedLink>, paths, '/blog');

                expect(
                    screen.getByRole('link', { name: 'Blog' }).getAttribute('aria-current'),
                ).toBe('page');
            });

            test('then it should not add an active class', async () => {
                await renderWithRouter(<RoutedLink href="/blog">Blog</RoutedLink>, paths, '/blog');

                expect(
                    screen.getByRole('link', { name: 'Blog' }).classList.contains('active'),
                ).toBe(false);
            });
        });
    });

    describe('given the current path is beneath the href', () => {
        describe('when it renders', () => {
            test('then it should not mark the link as the current page', async () => {
                await renderWithRouter(
                    <RoutedLink href="/blog">Blog</RoutedLink>,
                    paths,
                    '/blog/example-post',
                );

                expect(
                    screen.getByRole('link', { name: 'Blog' }).hasAttribute('aria-current'),
                ).toBe(false);
            });
        });
    });

    describe('given no href', () => {
        describe('when it renders', () => {
            test('then it should link to the home page', async () => {
                await renderWithRouter(<RoutedLink>Home</RoutedLink>, paths, '/blog');

                expect(screen.getByRole('link', { name: 'Home' }).getAttribute('href')).toBe('/');
            });
        });
    });

    describe('given a target', () => {
        describe('when it renders', () => {
            test('then it should pass the target to the link', async () => {
                await renderWithRouter(
                    <RoutedLink href="/blog" target="_blank">
                        Blog
                    </RoutedLink>,
                    paths,
                );

                expect(screen.getByRole('link', { name: 'Blog' }).getAttribute('target')).toBe(
                    '_blank',
                );
            });
        });
    });
});
