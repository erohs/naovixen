import type { LinkProps } from '@naovixen/components';
import { findAxeViolations } from '@naovixen/component-testing';
import { render, screen } from '@testing-library/react';
import type { FunctionComponent } from 'react';
import { describe, expect, test } from 'vitest';

import { SiteNavigationLayout } from '../enums/SiteNavigationLayout';
import { SiteNavigation } from '../SiteNavigation.component';

const items = [
    { label: 'Home', path: '/' },
    { label: 'Work', path: '/work' },
];

const RouterLink: FunctionComponent<LinkProps> = ({ children, ...anchorProps }) => (
    <a {...anchorProps} data-routed="true">
        {children}
    </a>
);

describe('Using SiteNavigation', () => {
    describe('given a page beneath the work section is shown', () => {
        describe('when it renders', () => {
            test('then it should be the main navigation landmark', () => {
                render(<SiteNavigation items={items} currentPath="/work/example" />);

                expect(screen.getByRole('navigation', { name: 'Main' })).toBeDefined();
            });

            test('then it should link each item to its path', () => {
                render(<SiteNavigation items={items} currentPath="/work/example" />);

                expect(screen.getByRole('link', { name: 'Work' })).toHaveProperty(
                    'pathname',
                    '/work',
                );
            });

            test('then it should mark the work link as the current page', () => {
                render(<SiteNavigation items={items} currentPath="/work/example" />);

                expect(screen.getByRole('link', { current: 'page' }).textContent).toBe('Work');
            });

            test('then it should have no accessibility violations', async () => {
                render(
                    <SiteNavigation
                        items={items}
                        currentPath="/work/example"
                        layout={SiteNavigationLayout.Stacked}
                    />,
                );

                expect(await findAxeViolations()).toEqual([]);
            });
        });
    });

    describe('given a link component', () => {
        describe('when it renders', () => {
            test('then it should render every link with it', () => {
                render(<SiteNavigation items={items} currentPath="/" linkComponent={RouterLink} />);

                expect(
                    screen.getAllByRole('link').every((link) => link.dataset.routed === 'true'),
                ).toBe(true);
            });
        });
    });
});
