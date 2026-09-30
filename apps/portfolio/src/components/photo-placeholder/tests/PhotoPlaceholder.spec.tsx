import { findAxeViolations } from '@naovixen/nvpack/testing';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { PhotoPlaceholder } from '../PhotoPlaceholder.component';

describe('Using PhotoPlaceholder', () => {
    describe('given a description', () => {
        describe('when it renders', () => {
            test('then it should be an image named by the description', () => {
                render(<PhotoPlaceholder description="Photo placeholder: an example person" />);

                expect(
                    screen.getByRole('img', { name: 'Photo placeholder: an example person' }),
                ).toBeDefined();
            });

            test('then it should have no accessibility violations', async () => {
                render(<PhotoPlaceholder description="Photo placeholder: an example person" />);

                expect(await findAxeViolations()).toEqual([]);
            });
        });
    });
});
