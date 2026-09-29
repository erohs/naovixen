import { findAxeViolations } from '@naovixen/component-testing';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, expect, test } from 'vitest';

import { SkipLink } from '../SkipLink.component';

describe('Using SkipLink', () => {
    describe('given it is first on the page', () => {
        describe('when someone presses Tab', () => {
            test('then it should be the first thing to take focus', async () => {
                render(
                    <>
                        <SkipLink href="#main">Skip to content</SkipLink>
                        <a href="/">Home</a>
                    </>,
                );

                await userEvent.setup().tab();

                expect(
                    screen.getByRole('link', { name: 'Skip to content' }).matches(':focus'),
                ).toBe(true);
            });
        });

        describe('when it renders', () => {
            test('then it should have no accessibility violations', async () => {
                render(<SkipLink href="#main">Skip to content</SkipLink>);

                expect(await findAxeViolations()).toEqual([]);
            });
        });
    });
});
