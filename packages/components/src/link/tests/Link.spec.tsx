import { findAxeViolations } from '@naovixen/nvpack/testing';
import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { describe, expect, test } from 'vitest';

import { Link } from '../Link.component';

describe('Using Link', () => {
    describe('given an href and text', () => {
        describe('when it renders', () => {
            test('then it should be a link named by its text', () => {
                render(<Link href="/work">Work</Link>);

                expect(screen.getByRole('link', { name: 'Work' })).toHaveProperty(
                    'pathname',
                    '/work',
                );
            });

            test('then it should have no accessibility violations', async () => {
                render(<Link href="/work">Work</Link>);

                expect(await findAxeViolations()).toEqual([]);
            });
        });
    });

    describe('given intrinsic anchor props', () => {
        describe('when it renders', () => {
            test('then it should pass them through, so a router can mark the current page', () => {
                render(
                    <Link href="/work" aria-current="page">
                        Work
                    </Link>,
                );

                expect(screen.getByRole('link', { current: 'page' })).toBeDefined();
            });
        });
    });

    describe('given a ref', () => {
        describe('when it renders', () => {
            test('then it should hand the anchor to the ref, as a router link needs', () => {
                const ref = createRef<HTMLAnchorElement>();
                render(
                    <Link href="/work" ref={ref}>
                        Work
                    </Link>,
                );

                expect(ref.current).toBe(screen.getByRole('link'));
            });
        });
    });
});
