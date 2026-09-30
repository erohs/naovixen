import { findAxeViolations } from '@naovixen/nvpack/testing';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, expect, test, vi } from 'vitest';

import { Button } from '../Button.component';
import { ButtonVariant } from '../enums/ButtonVariant';

describe('Using Button', () => {
    describe('given only a label', () => {
        describe('when it renders', () => {
            test('then it should be a button named by its label', () => {
                render(<Button>Save</Button>);

                expect(screen.getByRole('button', { name: 'Save' })).toBeDefined();
            });

            test('then it should not submit a surrounding form', () => {
                render(<Button>Save</Button>);

                expect(screen.getByRole('button')).toHaveProperty('type', 'button');
            });

            test('then it should have no accessibility violations', async () => {
                render(<Button variant={ButtonVariant.Primary}>Save</Button>);

                expect(await findAxeViolations()).toEqual([]);
            });
        });
    });

    describe('given intrinsic button props', () => {
        describe('when it renders', () => {
            test('then it should pass them through to the button', () => {
                render(
                    <Button type="submit" disabled>
                        Send
                    </Button>,
                );

                expect(screen.getByRole('button', { name: 'Send' })).toMatchObject({
                    type: 'submit',
                    disabled: true,
                });
            });

            test('then it should keep a class name it is given alongside its own', () => {
                render(<Button className="extra">Save</Button>);

                expect(screen.getByRole('button').className).toBe(
                    'nx-button nx-button--secondary extra',
                );
            });
        });
    });

    describe('given a click handler', () => {
        describe('when it is pressed', () => {
            test('then it should call the handler once', async () => {
                const onClick = vi.fn();
                render(<Button onClick={onClick}>Save</Button>);

                await userEvent.setup().click(screen.getByRole('button'));

                expect(onClick).toHaveBeenCalledOnce();
            });
        });

        describe('when it is activated from the keyboard', () => {
            test('then it should call the handler', async () => {
                const onClick = vi.fn();
                render(<Button onClick={onClick}>Save</Button>);
                const user = userEvent.setup();

                await user.tab();
                await user.keyboard('{Enter}');

                expect(onClick).toHaveBeenCalledOnce();
            });
        });
    });
});
