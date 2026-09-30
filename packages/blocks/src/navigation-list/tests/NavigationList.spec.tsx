import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { NavigationList } from '../NavigationList.component';

const items = [
    { label: 'Home', href: '/' },
    { label: 'Work', href: '/work' },
    { label: 'Blog', href: '/blog' },
];

function currentLinkNames(): (string | null)[] {
    return screen.getAllByRole('link', { current: 'page' }).map((link) => link.textContent);
}

describe('Using NavigationList, given a page beneath the work section is shown, when it renders', () => {
    test('then it should mark only the work section as current', () => {
        render(<NavigationList items={items} currentHref="/work/example" />);

        expect(currentLinkNames()).toEqual(['Work']);
    });
});

describe('Using NavigationList, given the home page is shown, when it renders', () => {
    test('then it should mark only home as current', () => {
        render(<NavigationList items={items} currentHref="/" />);

        expect(currentLinkNames()).toEqual(['Home']);
    });
});

describe('Using NavigationList, given a page whose path only starts like a section, when it renders', () => {
    test('then it should mark nothing as current', () => {
        render(<NavigationList items={items} currentHref="/workshop" />);

        expect(screen.queryAllByRole('link', { current: 'page' })).toEqual([]);
    });
});
