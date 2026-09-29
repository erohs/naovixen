import { findAxeViolations } from '@naovixen/component-testing';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { Wordmark } from '../Wordmark.component';

describe('Using Wordmark', () => {
    describe('when it renders', () => {
        test('then it should show the name', () => {
            render(<Wordmark />);

            expect(screen.getByText('naovixen')).toBeDefined();
        });

        test('then it should hide the brackets from assistive technology', () => {
            render(<Wordmark />);

            expect(screen.getByText('<').getAttribute('aria-hidden')).toBe('true');
        });

        test('then it should have no accessibility violations', async () => {
            render(<Wordmark />);

            expect(await findAxeViolations()).toEqual([]);
        });
    });
});
