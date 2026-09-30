import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import type { UserEvent } from '@testing-library/user-event';
import { describe, expect, test } from 'vitest';

import { MobileMenu } from '../MobileMenu.component';

const items = [
    { label: 'Home', path: '/' },
    { label: 'Work', path: '/work' },
];

interface IOpenMenu {
    readonly user: UserEvent;
    readonly showPath: (path: string) => void;
}

async function openMenuOnHomePage(): Promise<IOpenMenu> {
    const user = userEvent.setup();
    const { rerender } = render(<MobileMenu items={items} currentPath="/" />);
    await user.click(screen.getByRole('button', { name: 'Menu' }));

    const showPath = (path: string): void => {
        rerender(<MobileMenu items={items} currentPath={path} />);
    };

    return { user, showPath };
}

describe('Using MobileMenu, given it is closed, when it renders', () => {
    test('then it should offer a collapsed menu button', () => {
        render(<MobileMenu items={items} currentPath="/" />);

        expect(screen.getByRole('button', { name: 'Menu', expanded: false })).toBeDefined();
    });

    test('then it should hide the navigation', () => {
        render(<MobileMenu items={items} currentPath="/" />);

        expect(screen.queryByRole('navigation')).toBeNull();
    });
});

describe('Using MobileMenu, given it is closed, when the button is pressed', () => {
    test('then it should show as expanded', async () => {
        await openMenuOnHomePage();

        expect(screen.getByRole('button', { name: 'Menu', expanded: true })).toBeDefined();
    });

    test('then it should show the main navigation', async () => {
        await openMenuOnHomePage();

        expect(screen.getByRole('navigation', { name: 'Main' })).toBeDefined();
    });
});

describe('Using MobileMenu, given it is open, when the path changes', () => {
    test('then it should close', async () => {
        const { showPath } = await openMenuOnHomePage();

        showPath('/work');

        expect(screen.getByRole('button', { name: 'Menu', expanded: false })).toBeDefined();
    });
});

describe('Using MobileMenu, given it is open and focus is on one of its links, when Escape is pressed', () => {
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
