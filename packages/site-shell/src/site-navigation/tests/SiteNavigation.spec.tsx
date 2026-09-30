import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { SiteNavigation } from '../SiteNavigation.component';

const items = [
    { label: 'Home', path: '/' },
    { label: 'Work', path: '/work' },
];

describe('Using SiteNavigation, given a page beneath the work section is shown, when it renders', () => {
    test('then it should be the main navigation landmark', () => {
        render(<SiteNavigation items={items} currentPath="/work/example" />);

        expect(screen.getByRole('navigation', { name: 'Main' })).toBeDefined();
    });

    test('then it should link each item to its path', () => {
        render(<SiteNavigation items={items} currentPath="/work/example" />);

        expect(screen.getByRole('link', { name: 'Work' })).toHaveProperty('pathname', '/work');
    });

    test('then it should mark the work link as the current page', () => {
        render(<SiteNavigation items={items} currentPath="/work/example" />);

        expect(screen.getByRole('link', { current: 'page' }).textContent).toBe('Work');
    });
});
