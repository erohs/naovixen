import { findAxeViolations } from '@naovixen/nvpack/testing';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { Callout } from '../Callout.component';

describe('Using Callout', () => {
    describe('given a kind, a heading and some text', () => {
        describe('when it renders', () => {
            test('then it should be marked as a note', () => {
                render(
                    <Callout kind="tip!" heading="Example heading">
                        <p>Example text.</p>
                    </Callout>,
                );

                expect(screen.getByRole('note').textContent).toBe(
                    'tip!Example headingExample text.',
                );
            });

            test('then it should have no accessibility violations', async () => {
                render(
                    <Callout kind="tip!" heading="Example heading">
                        <p>Example text.</p>
                    </Callout>,
                );

                expect(await findAxeViolations()).toEqual([]);
            });
        });
    });

    describe('given intrinsic props', () => {
        describe('when it renders', () => {
            test('then it should pass them through to the note', () => {
                render(
                    <Callout kind="tip!" heading="Example heading" aria-label="Example note">
                        <p>Example text.</p>
                    </Callout>,
                );

                expect(screen.getByRole('note', { name: 'Example note' })).toBeDefined();
            });
        });
    });
});
