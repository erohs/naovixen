import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { Breadcrumb } from '../Breadcrumb.component';

const trail = [
    { label: 'Home', href: '/' },
    { label: 'Work', href: '/work' },
];

describe('Using Breadcrumb, given a page two levels down, when it renders', () => {
    test('then it should be the breadcrumb navigation landmark', () => {
        render(<Breadcrumb trail={trail} currentLabel="Example project" />);

        expect(screen.getByRole('navigation', { name: 'Breadcrumb' })).toBeDefined();
    });

    test('then it should link to each page above this one', () => {
        render(<Breadcrumb trail={trail} currentLabel="Example project" />);

        expect(screen.getAllByRole('link').map((link) => link.getAttribute('href'))).toEqual([
            '/',
            '/work',
        ]);
    });

    test('then it should mark the current page', () => {
        render(<Breadcrumb trail={trail} currentLabel="Example project" />);

        expect(screen.getByText('Example project').getAttribute('aria-current')).toBe('page');
    });

    test('then it should not link the current page', () => {
        render(<Breadcrumb trail={trail} currentLabel="Example project" />);

        expect(screen.queryByRole('link', { name: 'Example project' })).toBeNull();
    });
});
