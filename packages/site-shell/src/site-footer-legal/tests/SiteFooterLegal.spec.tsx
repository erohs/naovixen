import { findAxeViolations } from '@naovixen/nvpack/testing';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { SiteFooterLegal } from '../SiteFooterLegal.component';

const privacyLink = { label: 'Privacy notice', path: '/privacy' };

describe('Using SiteFooterLegal', () => {
    describe('given another page is shown', () => {
        describe('when it renders', () => {
            test('then it should show the copyright line for the given year', () => {
                render(
                    <SiteFooterLegal
                        copyrightHolder="Example Name"
                        year={2026}
                        privacyLink={privacyLink}
                        currentPath="/"
                    />,
                );

                expect(screen.getByText('© 2026 Example Name')).toBeDefined();
            });

            test('then it should link to the privacy notice', () => {
                render(
                    <SiteFooterLegal
                        copyrightHolder="Example Name"
                        year={2026}
                        privacyLink={privacyLink}
                        currentPath="/"
                    />,
                );

                expect(screen.getByRole('link', { name: 'Privacy notice' })).toHaveProperty(
                    'pathname',
                    '/privacy',
                );
            });

            test('then it should have no accessibility violations', async () => {
                render(
                    <SiteFooterLegal
                        copyrightHolder="Example Name"
                        year={2026}
                        privacyLink={privacyLink}
                        currentPath="/"
                    />,
                );

                expect(await findAxeViolations()).toEqual([]);
            });
        });
    });

    describe('given the privacy notice is shown', () => {
        describe('when it renders', () => {
            test('then it should mark the privacy link as the current page', () => {
                render(
                    <SiteFooterLegal
                        copyrightHolder="Example Name"
                        year={2026}
                        privacyLink={privacyLink}
                        currentPath="/privacy"
                    />,
                );

                expect(screen.getByRole('link', { current: 'page' }).textContent).toBe(
                    'Privacy notice',
                );
            });
        });
    });
});
