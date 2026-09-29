import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import type { UserEvent } from '@testing-library/user-event';
import { describe, expect, test } from 'vitest';

import { findAxeViolations } from '../../tests/functions/FindAxeViolations.function';
import { MobileMenu } from '../MobileMenu.component';

const items = [
  { label: 'Home', path: '/' },
  { label: 'Work', path: '/work' },
];

async function openMenuOnHomePage(): Promise<UserEvent> {
  const user = userEvent.setup();
  render(<MobileMenu items={items} currentPath="/" />);
  await user.click(screen.getByRole('button', { name: 'Menu' }));

  return user;
}

describe('Using MobileMenu', () => {
  describe('given it is closed', () => {
    describe('when it renders', () => {
      test('then it should offer a collapsed menu button', () => {
        render(<MobileMenu items={items} currentPath="/" />);

        expect(screen.getByRole('button', { name: 'Menu', expanded: false })).toBeDefined();
      });

      test('then it should hide the menu', () => {
        render(<MobileMenu items={items} currentPath="/" />);

        expect(screen.queryByRole('navigation')).toBeNull();
      });

      test('then it should have no accessibility violations', async () => {
        render(<MobileMenu items={items} currentPath="/" />);

        expect(await findAxeViolations()).toEqual([]);
      });
    });

    describe('when the button is pressed', () => {
      test('then it should show as expanded', async () => {
        await openMenuOnHomePage();

        expect(screen.getByRole('button', { name: 'Menu', expanded: true })).toBeDefined();
      });

      test('then it should show the main navigation', async () => {
        await openMenuOnHomePage();

        expect(screen.getByRole('navigation', { name: 'Main' })).toBeDefined();
      });

      test('then it should have no accessibility violations', async () => {
        await openMenuOnHomePage();

        expect(await findAxeViolations()).toEqual([]);
      });
    });
  });

  describe('given it is open', () => {
    describe('and focus is on one of its links', () => {
      describe('when Escape is pressed', () => {
        test('then it should close', async () => {
          const user = await openMenuOnHomePage();
          await user.tab();

          await user.keyboard('{Escape}');

          expect(screen.getByRole('button', { name: 'Menu', expanded: false })).toBeDefined();
        });

        test('then it should return focus to the button', async () => {
          const user = await openMenuOnHomePage();
          await user.tab();
          await user.keyboard('{Escape}');

          await user.keyboard('{Enter}');

          expect(screen.getByRole('button', { name: 'Menu', expanded: true })).toBeDefined();
        });
      });
    });

    describe('when a link is followed to another page', () => {
      test('then it should close', async () => {
        const user = userEvent.setup();
        const { rerender } = render(<MobileMenu items={items} currentPath="/" />);
        await user.click(screen.getByRole('button', { name: 'Menu' }));

        rerender(<MobileMenu items={items} currentPath="/work" />);

        expect(screen.getByRole('button', { name: 'Menu', expanded: false })).toBeDefined();
      });
    });
  });
});
