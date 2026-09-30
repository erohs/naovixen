import { findAxeViolations } from '@naovixen/nvpack/testing';
import { fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, test } from 'vitest';

import { BackToTop } from '../BackToTop.component';

function scrollTo(position: number): void {
    Object.defineProperty(window, 'scrollY', { value: position, configurable: true });
    fireEvent.scroll(window);
}

describe('Using BackToTop', () => {
    afterEach(() => {
        Object.defineProperty(window, 'scrollY', { value: 0, configurable: true });
    });

    describe('when it renders', () => {
        test('then it should link to the main content by the name "Back to top"', () => {
            render(<BackToTop />);

            expect(screen.getByRole('link', { name: 'Back to top' }).getAttribute('href')).toBe(
                '#main',
            );
        });

        test('then it should start hidden, at the top of the page', () => {
            render(<BackToTop />);

            expect(screen.getByRole('link').dataset.visible).toBe('false');
        });

        test('then it should have no accessibility violations', async () => {
            render(<BackToTop />);

            expect(await findAxeViolations()).toEqual([]);
        });
    });

    describe('given the page has scrolled less than a screen', () => {
        describe('when it renders', () => {
            test('then it should stay hidden', () => {
                render(<BackToTop />);
                scrollTo(window.innerHeight - 1);

                expect(screen.getByRole('link').dataset.visible).toBe('false');
            });
        });
    });

    describe('given the page has scrolled a full screen', () => {
        describe('when it renders', () => {
            test('then it should show', () => {
                render(<BackToTop />);
                scrollTo(window.innerHeight);

                expect(screen.getByRole('link').dataset.visible).toBe('true');
            });
        });
    });
});
