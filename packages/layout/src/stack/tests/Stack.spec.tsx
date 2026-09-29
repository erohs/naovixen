import { findAxeViolations } from '@naovixen/component-testing';
import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { describe, expect, test } from 'vitest';

import { Space } from '../enums/Space';
import { Stack } from '../Stack.component';

describe('Using Stack', () => {
    describe('given it is rendered as a list', () => {
        describe('when it renders', () => {
            test('then it should be a list of its children', () => {
                render(
                    <Stack as="ul" gap={Space.BetweenText}>
                        <li>First item</li>
                        <li>Second item</li>
                    </Stack>,
                );

                expect(screen.getAllByRole('listitem')).toHaveLength(2);
            });

            test('then it should have no accessibility violations', async () => {
                render(
                    <Stack as="ul">
                        <li>First item</li>
                    </Stack>,
                );

                expect(await findAxeViolations()).toEqual([]);
            });
        });
    });

    describe('given intrinsic props and a gap', () => {
        describe('when it renders', () => {
            test('then it should pass them through to its element', () => {
                render(
                    <Stack as="section" aria-label="Example section" gap={Space.BetweenGroups}>
                        <p>Example paragraph</p>
                    </Stack>,
                );

                expect(screen.getByRole('region', { name: 'Example section' })).toBeDefined();
            });

            test('then it should keep a class name it is given alongside its own', () => {
                render(
                    <Stack as="article" className="extra" gap={Space.BetweenGroups}>
                        <p>Example paragraph</p>
                    </Stack>,
                );

                expect(screen.getByRole('article').className).toBe(
                    'nx-stack nx-stack--gap-between-groups extra',
                );
            });
        });
    });

    describe('given a ref', () => {
        describe('when it renders', () => {
            test('then it should hand its element to the ref', () => {
                const ref = createRef<HTMLElement>();
                render(
                    <Stack as="article" ref={ref}>
                        <p>Example paragraph</p>
                    </Stack>,
                );

                expect(ref.current).toBe(screen.getByRole('article'));
            });
        });
    });
});
