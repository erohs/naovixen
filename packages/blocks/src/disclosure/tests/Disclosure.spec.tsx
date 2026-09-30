import { findAxeViolations } from '@naovixen/nvpack/testing';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import type { UserEvent } from '@testing-library/user-event';
import type { FunctionComponent } from 'react';
import { useState } from 'react';
import { describe, expect, test, vi } from 'vitest';

import { Disclosure } from '../Disclosure.component';

const ControlledDisclosure: FunctionComponent<{ readonly isInitiallyOpen: boolean }> = ({
    isInitiallyOpen,
}) => {
    const [isOpen, setIsOpen] = useState(isInitiallyOpen);

    return (
        <Disclosure label="Menu" isOpen={isOpen} onOpenChange={setIsOpen}>
            <a href="/work">Work</a>
        </Disclosure>
    );
};

async function openWithFocusOnItsLink(): Promise<UserEvent> {
    const user = userEvent.setup();
    render(<ControlledDisclosure isInitiallyOpen />);
    await user.click(screen.getByRole('link', { name: 'Work' }));

    return user;
}

describe('Using Disclosure', () => {
    describe('given it is closed', () => {
        describe('when it renders', () => {
            test('then it should offer a collapsed button', () => {
                render(<ControlledDisclosure isInitiallyOpen={false} />);

                expect(screen.getByRole('button', { name: 'Menu', expanded: false })).toBeDefined();
            });

            test('then it should hide its content', () => {
                render(<ControlledDisclosure isInitiallyOpen={false} />);

                expect(screen.queryByRole('link')).toBeNull();
            });

            test('then it should have no accessibility violations', async () => {
                render(<ControlledDisclosure isInitiallyOpen={false} />);

                expect(await findAxeViolations()).toEqual([]);
            });
        });

        describe('when the button is pressed', () => {
            test('then it should ask to open', async () => {
                const onOpenChange = vi.fn();
                render(
                    <Disclosure label="Menu" isOpen={false} onOpenChange={onOpenChange}>
                        Example content
                    </Disclosure>,
                );

                await userEvent.setup().click(screen.getByRole('button'));

                expect(onOpenChange).toHaveBeenCalledExactlyOnceWith(true);
            });

            test('then it should show its content once the caller opens it', async () => {
                render(<ControlledDisclosure isInitiallyOpen={false} />);

                await userEvent.setup().click(screen.getByRole('button'));

                expect(screen.getByRole('link', { name: 'Work' })).toBeDefined();
            });
        });
    });

    describe('given it is open', () => {
        describe('when it renders', () => {
            test('then it should have no accessibility violations', async () => {
                render(<ControlledDisclosure isInitiallyOpen />);

                expect(await findAxeViolations()).toEqual([]);
            });
        });

        describe('when the button is pressed', () => {
            test('then it should ask to close', async () => {
                const onOpenChange = vi.fn();
                render(
                    <Disclosure label="Menu" isOpen onOpenChange={onOpenChange}>
                        Example content
                    </Disclosure>,
                );

                await userEvent.setup().click(screen.getByRole('button'));

                expect(onOpenChange).toHaveBeenCalledExactlyOnceWith(false);
            });
        });

        describe('and focus is inside its content', () => {
            describe('when Escape is pressed', () => {
                test('then it should close', async () => {
                    const user = await openWithFocusOnItsLink();

                    await user.keyboard('{Escape}');

                    expect(
                        screen.getByRole('button', { name: 'Menu', expanded: false }),
                    ).toBeDefined();
                });

                test('then it should return focus to the button', async () => {
                    const user = await openWithFocusOnItsLink();

                    await user.keyboard('{Escape}');

                    await user.keyboard('{Enter}');

                    expect(
                        screen.getByRole('button', { name: 'Menu', expanded: true }),
                    ).toBeDefined();
                });
            });
        });
    });
});
