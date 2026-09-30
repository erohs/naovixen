import { findAxeViolations } from '@naovixen/nvpack/testing';
import { render, screen } from '@testing-library/react';
import type { FunctionComponent } from 'react';
import { describe, expect, test } from 'vitest';
import type { LinkProps } from '@naovixen/components';

import type { ISiteFooterProps } from '../interfaces/ISiteFooterProps';
import { SiteFooter } from '../SiteFooter.component';

const footerProps: ISiteFooterProps = {
    navigationItems: [
        { label: 'Home', path: '/' },
        { label: 'Work', path: '/work' },
    ],
    socialLinks: [
        { label: 'Example profile', url: 'https://example.com' },
        { label: 'Email', url: 'mailto:hello@example.com' },
    ],
    blurb: 'An example line about the site.',
    copyrightHolder: 'Example Name',
    year: 2026,
    privacyLink: { label: 'Privacy notice', path: '/privacy' },
    currentPath: '/work/example',
};

const RouterLink: FunctionComponent<LinkProps> = ({ children, ...anchorProps }) => (
    <a {...anchorProps} data-routed="true">
        {children}
    </a>
);

describe('Using SiteFooter', () => {
    describe('given a page beneath the work section is shown', () => {
        describe('when it renders', () => {
            test('then it should be the content information landmark', () => {
                render(<SiteFooter {...footerProps} />);

                expect(screen.getByRole('contentinfo')).toBeDefined();
            });

            test('then it should offer the site links under a "site" heading', () => {
                render(<SiteFooter {...footerProps} />);

                expect(screen.getByRole('navigation', { name: 'site' })).toBeDefined();
            });

            test('then it should offer the profile links under an "elsewhere" heading', () => {
                render(<SiteFooter {...footerProps} />);

                expect(screen.getByRole('navigation', { name: 'elsewhere' })).toBeDefined();
            });

            test('then it should mark the work section as current', () => {
                render(<SiteFooter {...footerProps} />);

                expect(screen.getByRole('link', { current: 'page' }).textContent).toBe('Work');
            });

            test('then it should show the blurb', () => {
                render(<SiteFooter {...footerProps} />);

                expect(screen.getByText('An example line about the site.')).toBeDefined();
            });

            test('then it should show the copyright line', () => {
                render(<SiteFooter {...footerProps} />);

                expect(screen.getByText('© 2026 Example Name')).toBeDefined();
            });

            test('then it should have no accessibility violations', async () => {
                render(<SiteFooter {...footerProps} />);

                expect(await findAxeViolations()).toEqual([]);
            });
        });
    });

    describe('given a link component', () => {
        describe('when it renders', () => {
            test('then it should render the site links with it', () => {
                render(<SiteFooter {...footerProps} linkComponent={RouterLink} />);

                expect(screen.getByRole('link', { name: 'Work' }).dataset.routed).toBe('true');
            });

            test('then it should render the privacy link with it', () => {
                render(<SiteFooter {...footerProps} linkComponent={RouterLink} />);

                expect(screen.getByRole('link', { name: 'Privacy notice' }).dataset.routed).toBe(
                    'true',
                );
            });

            test('then it should leave the profile links as plain links to other sites', () => {
                render(<SiteFooter {...footerProps} linkComponent={RouterLink} />);

                expect(
                    screen.getByRole('link', { name: 'Example profile (opens in new tab)' }).dataset
                        .routed,
                ).toBeUndefined();
            });
        });
    });
});
