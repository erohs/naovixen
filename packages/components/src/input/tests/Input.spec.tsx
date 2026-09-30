import { findAxeViolations } from '@naovixen/nvpack/testing';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, expect, test } from 'vitest';

import { Input } from '../Input.component';

describe('Using Input', () => {
    describe('given a label', () => {
        describe('when someone types into it', () => {
            test('then it should hold what they typed', async () => {
                render(<Input aria-label="Name" />);

                await userEvent.setup().type(screen.getByRole('textbox', { name: 'Name' }), 'Ada');

                expect(screen.getByRole('textbox')).toHaveProperty('value', 'Ada');
            });
        });

        describe('when it renders', () => {
            test('then it should have no accessibility violations', async () => {
                render(<Input aria-label="Name" />);

                expect(await findAxeViolations()).toEqual([]);
            });
        });
    });
});
