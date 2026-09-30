import { findAxeViolations } from '@naovixen/nvpack/testing';
import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { describe, expect, test } from 'vitest';

import { Space } from '../../stack/enums/Space';
import { Grid } from '../Grid.component';

describe('Using Grid', () => {
    describe('given it is rendered as a list', () => {
        describe('when it renders', () => {
            test('then it should be a list of its children', () => {
                render(
                    <Grid as="ul" gap={Space.BetweenText}>
                        <li>First item</li>
                        <li>Second item</li>
                    </Grid>,
                );

                expect(screen.getAllByRole('listitem')).toHaveLength(2);
            });

            test('then it should have no accessibility violations', async () => {
                render(
                    <Grid as="ul">
                        <li>First item</li>
                    </Grid>,
                );

                expect(await findAxeViolations()).toEqual([]);
            });
        });
    });

    describe('given intrinsic props and a gap', () => {
        describe('when it renders', () => {
            test('then it should pass them through to its element', () => {
                render(
                    <Grid as="section" aria-label="Example section" gap={Space.BetweenGroups}>
                        <p>Example paragraph</p>
                    </Grid>,
                );

                expect(screen.getByRole('region', { name: 'Example section' })).toBeDefined();
            });

            test('then it should keep a class name it is given alongside its own', () => {
                render(
                    <Grid as="article" className="extra" gap={Space.BetweenGroups}>
                        <p>Example paragraph</p>
                    </Grid>,
                );

                expect(screen.getByRole('article').className).toBe(
                    'nx-grid nx-grid--gap-between-groups extra',
                );
            });
        });
    });

    describe('given a ref', () => {
        describe('when it renders', () => {
            test('then it should hand its element to the ref', () => {
                const ref = createRef<HTMLElement>();
                render(
                    <Grid as="article" ref={ref}>
                        <p>Example paragraph</p>
                    </Grid>,
                );

                expect(ref.current).toBe(screen.getByRole('article'));
            });
        });
    });
});
