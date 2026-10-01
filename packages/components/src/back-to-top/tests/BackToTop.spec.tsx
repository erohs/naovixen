import { fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, test } from 'vitest';

import { BackToTop } from '../BackToTop.component';

function scrollTo(position: number): void {
    Object.defineProperty(window, 'scrollY', { value: position, configurable: true });
    fireEvent.scroll(window);
}

afterEach(() => {
    Object.defineProperty(window, 'scrollY', { value: 0, configurable: true });
});

describe('Using BackToTop, given no href, when it renders', () => {
    test('then it should link to the main content by the name "Back to top"', () => {
        render(<BackToTop />);

        expect(screen.getByRole('button', { name: 'Back to top' }).getAttribute('href')).toBe(
            '#main',
        );
    });
});

describe('Using BackToTop, given the page is at the top, when it renders', () => {
    test('then it should start hidden', () => {
        render(<BackToTop />);

        expect(screen.getByRole('button').dataset.visible).toBe('false');
    });
});

describe('Using BackToTop, given the page has scrolled less than a screen, when it renders', () => {
    test('then it should stay hidden', () => {
        render(<BackToTop />);
        scrollTo(window.innerHeight - 1);

        expect(screen.getByRole('button').dataset.visible).toBe('false');
    });
});

describe('Using BackToTop, given the page has scrolled a full screen, when it renders', () => {
    test('then it should show', () => {
        render(<BackToTop />);
        scrollTo(window.innerHeight);

        expect(screen.getByRole('button').dataset.visible).toBe('true');
    });
});
