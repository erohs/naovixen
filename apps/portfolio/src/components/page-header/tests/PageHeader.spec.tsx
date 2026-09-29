import { findAxeViolations } from '@naovixen/component-testing';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { PageHeader } from '../PageHeader.component';

describe('Using PageHeader', () => {
    describe('given a heading and an intro', () => {
        describe('when it renders', () => {
            test('then it should be the page heading', () => {
                render(<PageHeader heading="Example page" intro="An example intro." />);

                expect(
                    screen.getByRole('heading', { level: 1, name: 'Example page' }),
                ).toBeDefined();
            });

            test('then it should show the intro', () => {
                render(<PageHeader heading="Example page" intro="An example intro." />);

                expect(screen.getByText('An example intro.')).toBeDefined();
            });

            test('then it should have no accessibility violations', async () => {
                render(<PageHeader heading="Example page" intro="An example intro." />);

                expect(await findAxeViolations()).toEqual([]);
            });
        });
    });
});
