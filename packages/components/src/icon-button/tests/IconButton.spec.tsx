import { findAxeViolations } from '@naovixen/nvpack/testing';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { menuIcon } from '../../icon/icons/Menu.icon';
import { IconButton } from '../IconButton.component';

describe('Using IconButton', () => {
    describe('when it renders', () => {
        test('then it should be named by its label, not its icon', () => {
            render(<IconButton icon={menuIcon} label="Menu" />);

            expect(screen.getByRole('button', { name: 'Menu' })).toBeDefined();
        });

        test('then it should pass intrinsic button props through', () => {
            render(<IconButton icon={menuIcon} label="Menu" aria-expanded={false} />);

            expect(screen.getByRole('button', { expanded: false })).toBeDefined();
        });

        test('then it should have no accessibility violations', async () => {
            render(<IconButton icon={menuIcon} label="Menu" />);

            expect(await findAxeViolations()).toEqual([]);
        });
    });
});
