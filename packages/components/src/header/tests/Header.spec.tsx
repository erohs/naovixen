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

function lastMenuLink(): HTMLElement {
    const link = screen.getAllByRole('link', { name: 'Work' }).at(-1);

    if (link === undefined) {
        throw new Error('The menu has no Work link.');
    }

    return link;
}

describe('Using Header, given its menu is closed, when it renders', () => {
    test('then it should offer a collapsed menu button', () => {
        render(<Header items={items} currentHref="/" />);

        expect(screen.getByRole('button', { name: 'Menu', expanded: false })).toBeDefined();
    });
});

describe('Using Header, given its menu is closed, when the button is pressed', () => {
    test('then it should show as expanded', async () => {
        await openMenuOnHomePage();

        expect(screen.getByRole('button', { name: 'Menu', expanded: true })).toBeDefined();
    });
});

describe('Using Header, given its menu is open, when the path changes', () => {
    test('then it should close', async () => {
        const { showPath } = await openMenuOnHomePage();

        showPath('/work');

        expect(screen.getByRole('button', { name: 'Menu', expanded: false })).toBeDefined();
    });
});

describe('Using Header, given its menu was opened on a page and the path has moved on, when that page is shown again', () => {
    test('then it should stay closed', async () => {
        const { showPath } = await openMenuOnHomePage();
        showPath('/work');

        showPath('/');

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

describe('Using Header, given its menu is open and focus is on its last link, when Tab is pressed', () => {
    test('then it should move focus back to the button, so Enter closes the menu', async () => {
        const { user } = await openMenuOnHomePage();
        lastMenuLink().focus();
        await user.tab();

        await user.keyboard('{Enter}');

        expect(screen.getByRole('button', { name: 'Menu', expanded: false })).toBeDefined();
    });
});

describe('Using Header, given its menu is open and focus is on the button, when Shift+Tab and then Tab are pressed', () => {
    test('then it should bring focus round to the last link and back, so Enter closes the menu', async () => {
        const { user } = await openMenuOnHomePage();
        await user.tab({ shift: true });
        await user.tab();

        await user.keyboard('{Enter}');

        expect(screen.getByRole('button', { name: 'Menu', expanded: false })).toBeDefined();
    });
});
