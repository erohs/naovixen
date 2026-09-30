import { findAxeViolations } from '@naovixen/nvpack/testing';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { TextArea } from '../TextArea.component';

describe('Using TextArea', () => {
    describe('given a label and rows', () => {
        describe('when it renders', () => {
            test('then it should pass the rows through', () => {
                render(<TextArea aria-label="Message" rows={6} />);

                expect(screen.getByRole('textbox', { name: 'Message' })).toHaveProperty('rows', 6);
            });

            test('then it should have no accessibility violations', async () => {
                render(<TextArea aria-label="Message" />);

                expect(await findAxeViolations()).toEqual([]);
            });
        });
    });
});
