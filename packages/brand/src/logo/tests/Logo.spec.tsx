import type { LinkProps } from '@naovixen/components';
import { findAxeViolations } from '@naovixen/component-testing';
import { render, screen } from '@testing-library/react';
import type { FunctionComponent } from 'react';
import { describe, expect, test } from 'vitest';

import { Logo } from '../Logo.component';

const RouterLink: FunctionComponent<LinkProps> = ({ children, ...anchorProps }) => (
    <a {...anchorProps} data-routed="true">
        {children}
    </a>
);

describe('Using Logo', () => {
    describe('when it renders', () => {
        test('then it should link home by the name naovixen', () => {
            render(<Logo />);

            expect(screen.getByRole('link', { name: 'naovixen' })).toHaveProperty('pathname', '/');
        });

        test('then it should have no accessibility violations', async () => {
            render(<Logo />);

            expect(await findAxeViolations()).toEqual([]);
        });
    });

    describe('given a link component', () => {
        describe('when it renders', () => {
            test('then it should render the link with it', () => {
                render(<Logo linkComponent={RouterLink} />);

                expect(screen.getByRole('link', { name: 'naovixen' }).dataset.routed).toBe('true');
            });
        });
    });

    describe('given intrinsic anchor props', () => {
        describe('when it renders', () => {
            test('then it should pass them through, so the home page can be marked current', () => {
                render(<Logo aria-current="page" />);

                expect(screen.getByRole('link', { current: 'page' })).toBeDefined();
            });
        });
    });
});
