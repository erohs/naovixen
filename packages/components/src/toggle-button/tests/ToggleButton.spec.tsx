import { findAxeViolations } from '@naovixen/nvpack/testing';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, expect, test, vi } from 'vitest';

import { ToggleButton } from '../ToggleButton.component';

describe('Using ToggleButton', () => {
    describe('given it is pressed', () => {
        describe('when it renders', () => {
            test('then it should report the pressed state', () => {
                render(<ToggleButton isPressed>Dark mode</ToggleButton>);

                expect(
                    screen.getByRole('button', { name: 'Dark mode', pressed: true }),
                ).toBeDefined();
            });

            test('then it should have no accessibility violations', async () => {
                render(<ToggleButton isPressed>Dark mode</ToggleButton>);

                expect(await findAxeViolations()).toEqual([]);
            });
        });
    });

    describe('given it is not pressed', () => {
        describe('when it is pressed', () => {
            test('then it should call the handler', async () => {
                const onClick = vi.fn();
                render(
                    <ToggleButton isPressed={false} onClick={onClick}>
                        Dark mode
                    </ToggleButton>,
                );

                await userEvent.setup().click(screen.getByRole('button', { pressed: false }));

                expect(onClick).toHaveBeenCalledOnce();
            });
        });
    });
});
