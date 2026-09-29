import { findAxeViolations } from '@naovixen/component-testing';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { BackToTop } from '../BackToTop.component';

describe('Using BackToTop', () => {
    describe('when it renders', () => {
        test('then it should link to the main content by the name "Back to top"', () => {
            render(<BackToTop />);

            expect(screen.getByRole('link', { name: 'Back to top' }).getAttribute('href')).toBe(
                '#main',
            );
        });

        test('then it should have no accessibility violations', async () => {
            render(<BackToTop />);

            expect(await findAxeViolations()).toEqual([]);
        });
    });
});
