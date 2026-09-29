import { findAxeViolations } from '@naovixen/component-testing';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { Heart } from '../Heart.component';

describe('Using Heart', () => {
    describe('when it renders beside text', () => {
        test('then it should be hidden from assistive technology', () => {
            render(
                <p>
                    Example text <Heart />
                </p>,
            );

            expect(screen.queryByRole('img')).toBeNull();
        });

        test('then it should have no accessibility violations', async () => {
            render(
                <p>
                    Example text <Heart />
                </p>,
            );

            expect(await findAxeViolations()).toEqual([]);
        });
    });
});
