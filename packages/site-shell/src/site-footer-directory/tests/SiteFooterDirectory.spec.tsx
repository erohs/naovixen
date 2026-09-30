import { findAxeViolations } from '@naovixen/nvpack/testing';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { SiteFooterDirectory } from '../SiteFooterDirectory.component';

const navigationItems = [
    { label: 'Home', path: '/' },
    { label: 'Work', path: '/work' },
];
const socialLinks = [{ label: 'Example profile', url: 'https://example.com' }];

function renderDirectory(): void {
    render(
        <SiteFooterDirectory
            blurb="An example line about the site."
            navigationItems={navigationItems}
            socialLinks={socialLinks}
            currentPath="/"
        />,
    );
}

describe('Using SiteFooterDirectory', () => {
    describe('given the home page is shown', () => {
        describe('when it renders', () => {
            test('then it should show the blurb', () => {
                renderDirectory();

                expect(screen.getByText('An example line about the site.')).toBeDefined();
            });

            test('then it should mark home as the current page', () => {
                renderDirectory();

                expect(screen.getByRole('link', { current: 'page' }).textContent).toBe('Home');
            });

            test('then it should have no accessibility violations', async () => {
                renderDirectory();

                expect(await findAxeViolations()).toEqual([]);
            });
        });
    });
});
