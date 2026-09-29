import { screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { findAxeViolations } from '../../tests/functions/FindAxeViolations.function';
import { renderWithProvider } from '../../tests/functions/RenderWithProvider.function';
import { SiteHeader } from '../SiteHeader.component';

const navigationItems = [
  { label: 'Home', path: '/' },
  { label: 'Work', path: '/work' },
];

describe('Using SiteHeader', () => {
  describe('given a case study is shown', () => {
    describe('when it renders', () => {
      test('then it should be the banner landmark', () => {
        renderWithProvider(<SiteHeader navigationItems={navigationItems} currentPath="/work/a" />);

        expect(screen.getByRole('banner')).toBeDefined();
      });

      test('then it should link home', () => {
        renderWithProvider(<SiteHeader navigationItems={navigationItems} currentPath="/work/a" />);

        expect(screen.getByRole('link', { name: 'naovixen' })).toBeDefined();
      });

      test('then it should mark the work section as current', () => {
        renderWithProvider(<SiteHeader navigationItems={navigationItems} currentPath="/work/a" />);

        expect(screen.getByRole('link', { current: 'page' }).textContent).toBe('Work');
      });

      test('then it should offer the theme toggle', () => {
        renderWithProvider(<SiteHeader navigationItems={navigationItems} currentPath="/work/a" />);

        expect(screen.getByRole('button', { name: 'Dark mode' })).toBeDefined();
      });

      test('then it should offer the menu button', () => {
        renderWithProvider(<SiteHeader navigationItems={navigationItems} currentPath="/work/a" />);

        expect(screen.getByRole('button', { name: 'Menu' })).toBeDefined();
      });

      test('then it should have no accessibility violations', async () => {
        renderWithProvider(<SiteHeader navigationItems={navigationItems} currentPath="/work/a" />);

        expect(await findAxeViolations()).toEqual([]);
      });
    });
  });
});
