import type { LinkProps } from '@naovixen/components';
import { findAxeViolations } from '@naovixen/component-testing';
import { render, screen } from '@testing-library/react';
import type { FunctionComponent } from 'react';
import { describe, expect, test } from 'vitest';

import { Breadcrumb } from '../Breadcrumb.component';

const trail = [
    { label: 'Home', href: '/' },
    { label: 'Work', href: '/work' },
];

const RouterLink: FunctionComponent<LinkProps> = ({ children, ...anchorProps }) => (
    <a {...anchorProps}>{children} (routed)</a>
);

describe('Using Breadcrumb', () => {
    describe('given a page two levels down', () => {
        describe('when it renders', () => {
            test('then it should be the breadcrumb navigation landmark', () => {
                render(<Breadcrumb trail={trail} currentLabel="Example project" />);

                expect(screen.getByRole('navigation', { name: 'Breadcrumb' })).toBeDefined();
            });

            test('then it should link to each page above this one', () => {
                render(<Breadcrumb trail={trail} currentLabel="Example project" />);

                expect(
                    screen.getAllByRole('link').map((link) => link.getAttribute('href')),
                ).toEqual(['/', '/work']);
            });

            test('then it should list every step in order', () => {
                render(<Breadcrumb trail={trail} currentLabel="Example project" />);

                expect(screen.getAllByRole('listitem').map((item) => item.textContent)).toEqual([
                    'Home',
                    'Work',
                    'Example project',
                ]);
            });

            test('then it should mark the current page', () => {
                render(<Breadcrumb trail={trail} currentLabel="Example project" />);

                expect(screen.getByText('Example project').getAttribute('aria-current')).toBe(
                    'page',
                );
            });

            test('then it should not link the current page', () => {
                render(<Breadcrumb trail={trail} currentLabel="Example project" />);

                expect(screen.queryByRole('link', { name: 'Example project' })).toBeNull();
            });

            test('then it should have no accessibility violations', async () => {
                render(<Breadcrumb trail={trail} currentLabel="Example project" />);

                expect(await findAxeViolations()).toEqual([]);
            });
        });
    });

    describe('given a link component', () => {
        describe('when it renders', () => {
            test('then it should render every link in the trail with it', () => {
                render(
                    <Breadcrumb
                        trail={trail}
                        currentLabel="Example project"
                        linkComponent={RouterLink}
                    />,
                );

                expect(screen.getAllByRole('link').map((link) => link.textContent)).toEqual([
                    'Home (routed)',
                    'Work (routed)',
                ]);
            });
        });
    });

    describe('given its own label', () => {
        describe('when it renders', () => {
            test('then it should be named by that label', () => {
                render(
                    <Breadcrumb
                        trail={trail}
                        currentLabel="Example project"
                        aria-label="You are here"
                    />,
                );

                expect(screen.getByRole('navigation', { name: 'You are here' })).toBeDefined();
            });
        });
    });
});
