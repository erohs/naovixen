import type { LinkProps } from '@naovixen/components';
import { findAxeViolations } from '@naovixen/component-testing';
import { render, screen } from '@testing-library/react';
import type { ComponentType, FunctionComponent } from 'react';
import { describe, expect, test } from 'vitest';

import { createThemeControllerForTests } from '../../theme-provider/tests/functions/CreateThemeControllerForTests.function';
import { ThemeProvider } from '../../theme-provider/ThemeProvider.component';
import { SiteHeader } from '../SiteHeader.component';

const navigationItems = [
    { label: 'Home', path: '/' },
    { label: 'Work', path: '/work' },
];

const RouterLink: FunctionComponent<LinkProps> = ({ children, ...anchorProps }) => (
    <a {...anchorProps} data-routed="true">
        {children}
    </a>
);

function renderHeaderOnCaseStudy(linkComponent?: ComponentType<LinkProps>): void {
    render(
        <ThemeProvider themeController={createThemeControllerForTests()}>
            <SiteHeader
                navigationItems={navigationItems}
                currentPath="/work/example"
                linkComponent={linkComponent}
            />
        </ThemeProvider>,
    );
}

describe('Using SiteHeader', () => {
    describe('given a case study is shown', () => {
        describe('when it renders', () => {
            test('then it should be the banner landmark', () => {
                renderHeaderOnCaseStudy();

                expect(screen.getByRole('banner')).toBeDefined();
            });

            test('then it should link home', () => {
                renderHeaderOnCaseStudy();

                expect(screen.getByRole('link', { name: 'naovixen' })).toHaveProperty(
                    'pathname',
                    '/',
                );
            });

            test('then it should mark the work section as current', () => {
                renderHeaderOnCaseStudy();

                expect(screen.getByRole('link', { current: 'page' }).textContent).toBe('Work');
            });

            test('then it should offer the theme toggle', () => {
                renderHeaderOnCaseStudy();

                expect(screen.getByRole('button', { name: 'Dark mode' })).toBeDefined();
            });

            test('then it should offer the menu button', () => {
                renderHeaderOnCaseStudy();

                expect(screen.getByRole('button', { name: 'Menu' })).toBeDefined();
            });

            test('then it should have no accessibility violations', async () => {
                renderHeaderOnCaseStudy();

                expect(await findAxeViolations()).toEqual([]);
            });
        });

        describe('and a link component', () => {
            describe('when it renders', () => {
                test('then it should render every link with it', () => {
                    renderHeaderOnCaseStudy(RouterLink);

                    expect(
                        screen.getAllByRole('link').every((link) => link.dataset.routed === 'true'),
                    ).toBe(true);
                });
            });
        });
    });
});
