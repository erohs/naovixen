import type { LinkProps } from '@naovixen/components';
import { findAxeViolations } from '@naovixen/component-testing';
import { render, screen } from '@testing-library/react';
import type { FunctionComponent } from 'react';
import { describe, expect, test } from 'vitest';

import { NavigationList } from '../NavigationList.component';

const items = [
    { label: 'Home', href: '/' },
    { label: 'Work', href: '/work' },
    { label: 'Blog', href: '/blog' },
];

const RouterLink: FunctionComponent<LinkProps> = ({ children, ...anchorProps }) => (
    <a {...anchorProps}>{children} (routed)</a>
);

function currentLinkNames(): (string | null)[] {
    return screen.getAllByRole('link', { current: 'page' }).map((link) => link.textContent);
}

describe('Using NavigationList', () => {
    describe('given a page beneath the work section is shown', () => {
        describe('when it renders', () => {
            test('then it should list every item', () => {
                render(<NavigationList items={items} currentHref="/work/example" />);

                expect(screen.getAllByRole('listitem')).toHaveLength(3);
            });

            test('then it should mark only the work section as current', () => {
                render(<NavigationList items={items} currentHref="/work/example" />);

                expect(currentLinkNames()).toEqual(['Work']);
            });

            test('then it should have no accessibility violations', async () => {
                render(<NavigationList items={items} currentHref="/work/example" />);

                expect(await findAxeViolations()).toEqual([]);
            });
        });
    });

    describe('given the home page is shown', () => {
        describe('when it renders', () => {
            test('then it should mark only home as current', () => {
                render(<NavigationList items={items} currentHref="/" />);

                expect(currentLinkNames()).toEqual(['Home']);
            });
        });
    });

    describe('given a page whose path only starts like a section', () => {
        describe('when it renders', () => {
            test('then it should mark nothing as current', () => {
                render(<NavigationList items={items} currentHref="/workshop" />);

                expect(screen.queryAllByRole('link', { current: 'page' })).toEqual([]);
            });
        });
    });

    describe('given a link component', () => {
        describe('when it renders', () => {
            test('then it should render every link with it and still mark the current one', () => {
                render(
                    <NavigationList items={items} currentHref="/blog" linkComponent={RouterLink} />,
                );

                expect(currentLinkNames()).toEqual(['Blog (routed)']);
            });
        });
    });
});
