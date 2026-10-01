import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import type { UserEvent } from '@testing-library/user-event';
import { describe, expect, test } from 'vitest';

import { Header } from '../Header.component';

const items = [
    { label: 'Home', href: '/' },
    { label: 'Work', href: '/work' },
];

interface IOpenMenu {
    readonly user: UserEvent;
    readonly showPath: (path: string) => void;
}

async function openMenuOnHomePage(): Promise<IOpenMenu> {
    const user = userEvent.setup();
    const { rerender } = render(<Header items={items} currentHref="/" />);
    await user.click(screen.getByRole('button', { name: 'Menu' }));

    const showPath = (path: string): void => {
        rerender(<Header items={items} currentHref={path} />);
    };

    return { user, showPath };
}

describe('Using Header, given its menu is closed, when it renders', () => {
    test('then it should offer a collapsed menu button', () => {
        render(<Header items={items} currentHref="/" />);

        expect(screen.getByRole('button', { name: 'Menu', expanded: false })).toBeDefined();
    });

    test('then it should show the navigation once, as the row', () => {
        render(<Header items={items} currentHref="/" />);

        expect(screen.getAllByRole('navigation', { name: 'Main' })).toHaveLength(1);
    });
});

describe('Using Header, given its menu is closed, when the button is pressed', () => {
    test('then it should show as expanded', async () => {
        await openMenuOnHomePage();

        expect(screen.getByRole('button', { name: 'Menu', expanded: true })).toBeDefined();
    });

    test('then it should show the navigation again, in the menu', async () => {
        await openMenuOnHomePage();

        expect(screen.getAllByRole('navigation', { name: 'Main' })).toHaveLength(2);
    });
});

describe('Using Header, given its menu is open, when the path changes', () => {
    test('then it should close', async () => {
        const { showPath } = await openMenuOnHomePage();

        showPath('/work');

        expect(screen.getByRole('button', { name: 'Menu', expanded: false })).toBeDefined();
    });
});

describe('Using Header, given its menu is open and focus is on one of its links, when Escape is pressed', () => {
    test('then it should close', async () => {
        const { user } = await openMenuOnHomePage();
        await user.tab();

        await user.keyboard('{Escape}');

        expect(screen.getByRole('button', { name: 'Menu', expanded: false })).toBeDefined();
    });

    test('then it should put focus back on the button, so Enter reopens it', async () => {
        const { user } = await openMenuOnHomePage();
        await user.tab();
        await user.keyboard('{Escape}');

        await user.keyboard('{Enter}');

        expect(screen.getByRole('button', { name: 'Menu', expanded: true })).toBeDefined();
    });
});
