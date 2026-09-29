import { findAxeViolations } from '@naovixen/component-testing';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { ExclamationBubble } from '../ExclamationBubble.component';

describe('Using ExclamationBubble', () => {
    describe('given a greeting', () => {
        describe('when it renders', () => {
            test('then it should say the greeting', () => {
                render(<ExclamationBubble>say hello!</ExclamationBubble>);

                expect(screen.getByText('say hello!')).toBeDefined();
            });

            test('then it should keep the motion lines out of the accessibility tree', () => {
                render(<ExclamationBubble>say hello!</ExclamationBubble>);

                expect(screen.queryByRole('img')).toBeNull();
            });

            test('then it should have no accessibility violations', async () => {
                render(<ExclamationBubble>say hello!</ExclamationBubble>);

                expect(await findAxeViolations()).toEqual([]);
            });
        });
    });
});
