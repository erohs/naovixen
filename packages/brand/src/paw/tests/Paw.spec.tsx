import { findAxeViolations } from '@naovixen/component-testing';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { Paw } from '../Paw.component';

describe('Using Paw', () => {
    describe('when it renders beside text', () => {
        test('then it should be hidden from assistive technology', () => {
            render(
                <p>
                    Example text <Paw />
                </p>,
            );

            expect(screen.queryByRole('img')).toBeNull();
        });

        test('then it should have no accessibility violations', async () => {
            render(
                <p>
                    Example text <Paw />
                </p>,
            );

            expect(await findAxeViolations()).toEqual([]);
        });
    });
});
