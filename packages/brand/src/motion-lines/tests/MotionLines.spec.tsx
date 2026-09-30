import { findAxeViolations } from '@naovixen/nvpack/testing';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { MotionLines } from '../MotionLines.component';

describe('Using MotionLines', () => {
    describe('when it renders beside a speech bubble', () => {
        test('then it should be hidden from assistive technology', () => {
            render(
                <p>
                    say hello! <MotionLines />
                </p>,
            );

            expect(screen.queryByRole('img')).toBeNull();
        });

        test('then it should have no accessibility violations', async () => {
            render(
                <p>
                    say hello! <MotionLines />
                </p>,
            );

            expect(await findAxeViolations()).toEqual([]);
        });
    });
});
