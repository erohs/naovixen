import type { LinkProps } from '@naovixen/components';
import { findAxeViolations } from '@naovixen/component-testing';
import { render, screen } from '@testing-library/react';
import type { FunctionComponent } from 'react';
import { describe, expect, test } from 'vitest';

import { Pagination } from '../Pagination.component';

const back = { label: 'All projects', href: '/work' };
const next = { label: 'Next: Example project', href: '/work/example' };

const RouterLink: FunctionComponent<LinkProps> = ({ children, ...anchorProps }) => (
    <a {...anchorProps}>{children} (routed)</a>
);

function linkNames(): (string | null)[] {
    return screen.getAllByRole('link').map((link) => link.textContent);
}

describe('Using Pagination', () => {
    describe('given a back link and a next link', () => {
        describe('when it renders', () => {
            test('then it should be a navigation landmark', () => {
                render(<Pagination back={back} next={next} />);

                expect(screen.getByRole('navigation', { name: 'Pagination' })).toBeDefined();
            });

            test('then it should offer back before next', () => {
                render(<Pagination back={back} next={next} />);

                expect(linkNames()).toEqual(['All projects', 'Next: Example project']);
            });

            test('then it should have no accessibility violations', async () => {
                render(<Pagination back={back} next={next} />);

                expect(await findAxeViolations()).toEqual([]);
            });
        });
    });

    describe('given only a back link', () => {
        describe('when it renders', () => {
            test('then it should offer only the back link', () => {
                render(<Pagination back={back} />);

                expect(linkNames()).toEqual(['All projects']);
            });
        });
    });

    describe('given a link component and its own label', () => {
        describe('when it renders', () => {
            test('then it should render both links with it', () => {
                render(<Pagination back={back} next={next} linkComponent={RouterLink} />);

                expect(linkNames()).toEqual([
                    'All projects (routed)',
                    'Next: Example project (routed)',
                ]);
            });

            test('then it should be named by that label', () => {
                render(<Pagination back={back} aria-label="Where next" />);

                expect(screen.getByRole('navigation', { name: 'Where next' })).toBeDefined();
            });
        });
    });
});
