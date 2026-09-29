import { findAxeViolations } from '@naovixen/component-testing';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, expect, test, vi } from 'vitest';

import { BusyButton } from '../BusyButton.component';

describe('Using BusyButton', () => {
    describe('given it is busy', () => {
        describe('when it is pressed', () => {
            test('then it should not call the handler', async () => {
                const onClick = vi.fn();
                render(
                    <BusyButton isBusy onClick={onClick}>
                        Send
                    </BusyButton>,
                );

                await userEvent.setup().click(screen.getByRole('button'));

                expect(onClick).not.toHaveBeenCalled();
            });

            test('then it should not submit its form again', async () => {
                const onSubmit = vi.fn();
                render(
                    <form onSubmit={onSubmit}>
                        <BusyButton isBusy type="submit">
                            Send
                        </BusyButton>
                    </form>,
                );

                await userEvent.setup().click(screen.getByRole('button'));

                expect(onSubmit).not.toHaveBeenCalled();
            });
        });

        describe('when it renders', () => {
            test('then it should stay focusable while unavailable', () => {
                render(<BusyButton isBusy>Send</BusyButton>);

                expect(screen.getByRole('button', { name: 'Send' })).toMatchObject({
                    disabled: false,
                    ariaDisabled: 'true',
                });
            });

            test('then it should have no accessibility violations', async () => {
                render(<BusyButton isBusy>Send</BusyButton>);

                expect(await findAxeViolations()).toEqual([]);
            });
        });
    });

    describe('given it is not busy', () => {
        describe('when it is pressed', () => {
            test('then it should call the handler', async () => {
                const onClick = vi.fn();
                render(
                    <BusyButton isBusy={false} onClick={onClick}>
                        Send
                    </BusyButton>,
                );

                await userEvent.setup().click(screen.getByRole('button'));

                expect(onClick).toHaveBeenCalledOnce();
            });
        });
    });
});
