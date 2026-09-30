import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { findAxeViolations } from '@naovixen/nvpack/testing';
import { TextVariant } from '../enums/TextVariant';
import { Text } from '../Text.component';

describe('Using Text', () => {
    describe('given no element', () => {
        describe('when it renders', () => {
            test('then it should be a paragraph', () => {
                render(<Text>Example paragraph</Text>);

                expect(screen.getByRole('paragraph')).toHaveProperty(
                    'textContent',
                    'Example paragraph',
                );
            });

            test('then it should have no accessibility violations', async () => {
                render(<Text variant={TextVariant.Lead}>Example paragraph</Text>);

                expect(await findAxeViolations()).toEqual([]);
            });
        });
    });
});
