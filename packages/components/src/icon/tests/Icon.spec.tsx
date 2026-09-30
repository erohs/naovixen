import { findAxeViolations } from '@naovixen/nvpack/testing';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { Icon } from '../Icon.component';
import { sunIcon } from '../icons/Sun.icon';

describe('Using Icon', () => {
    describe('when it renders', () => {
        test('then it should be hidden from assistive technology', () => {
            render(<Icon source={sunIcon} />);

            expect(screen.queryByRole('img')).toBeNull();
        });

        test('then it should have no accessibility violations', async () => {
            render(<Icon source={sunIcon} />);

            expect(await findAxeViolations()).toEqual([]);
        });
    });

    describe('when it sits inside a button', () => {
        test('then it should add nothing to the button name', () => {
            render(
                <button type="button">
                    <Icon source={sunIcon} />
                    Light mode
                </button>,
            );

            expect(screen.getByRole('button', { name: 'Light mode' })).toBeDefined();
        });
    });
});
