import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { Navigation } from '../Navigation.component';

const items = [
    { label: 'Home', href: '/' },
    { label: 'Work', href: '/work' },
];

describe('Using Navigation, given a page beneath the work section is shown, when it renders', () => {
    test('then it should be the main navigation landmark', () => {
        render(<Navigation items={items} currentHref="/work/example" />);

        expect(screen.getByRole('navigation', { name: 'Main' })).toBeDefined();
    });

    test('then it should mark the work link as the current page', () => {
        render(<Navigation items={items} currentHref="/work/example" />);

        expect(screen.getByRole('link', { current: 'page' }).textContent).toBe('Work');
    });
});
