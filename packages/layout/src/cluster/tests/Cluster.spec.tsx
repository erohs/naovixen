import { findAxeViolations } from '@naovixen/nvpack/testing';
import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { describe, expect, test } from 'vitest';

import { Space } from '../../stack/enums/Space';
import { Cluster } from '../Cluster.component';

describe('Using Cluster', () => {
    describe('given it is rendered as a list', () => {
        describe('when it renders', () => {
            test('then it should be a list of its children', () => {
                render(
                    <Cluster as="ul" gap={Space.BetweenText}>
                        <li>First item</li>
                        <li>Second item</li>
                    </Cluster>,
                );

                expect(screen.getAllByRole('listitem')).toHaveLength(2);
            });

            test('then it should have no accessibility violations', async () => {
                render(
                    <Cluster as="ul">
                        <li>First item</li>
                    </Cluster>,
                );

                expect(await findAxeViolations()).toEqual([]);
            });
        });
    });

    describe('given intrinsic props and a gap', () => {
        describe('when it renders', () => {
            test('then it should pass them through to its element', () => {
                render(
                    <Cluster as="section" aria-label="Example section" gap={Space.BetweenGroups}>
                        <p>Example paragraph</p>
                    </Cluster>,
                );

                expect(screen.getByRole('region', { name: 'Example section' })).toBeDefined();
            });

            test('then it should keep a class name it is given alongside its own', () => {
                render(
                    <Cluster as="article" className="extra" gap={Space.BetweenGroups}>
                        <p>Example paragraph</p>
                    </Cluster>,
                );

                expect(screen.getByRole('article').className).toBe(
                    'nx-cluster nx-cluster--gap-between-groups extra',
                );
            });
        });
    });

    describe('given a ref', () => {
        describe('when it renders', () => {
            test('then it should hand its element to the ref', () => {
                const ref = createRef<HTMLElement>();
                render(
                    <Cluster as="article" ref={ref}>
                        <p>Example paragraph</p>
                    </Cluster>,
                );

                expect(ref.current).toBe(screen.getByRole('article'));
            });
        });
    });
});
