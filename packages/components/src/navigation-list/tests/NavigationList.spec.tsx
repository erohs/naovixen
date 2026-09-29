import { screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { findAxeViolations } from '../../tests/functions/FindAxeViolations.function';
import { renderWithProvider } from '../../tests/functions/RenderWithProvider.function';
import { NavigationList } from '../NavigationList.component';

const items = [
  { label: 'Home', path: '/' },
  { label: 'Work', path: '/work' },
  { label: 'Blog', path: '/blog' },
];

describe('Using NavigationList', () => {
  describe('given a page beneath the work section is shown', () => {
    describe('when it renders', () => {
      test('then it should list every item', () => {
        renderWithProvider(<NavigationList items={items} currentPath="/work/example" />);

        expect(screen.getAllByRole('listitem')).toHaveLength(3);
      });

      test('then it should mark only the work section as current', () => {
        renderWithProvider(<NavigationList items={items} currentPath="/work/example" />);

        expect(
          screen.getAllByRole('link', { current: 'page' }).map((link) => link.textContent),
        ).toEqual(['Work']);
      });

      test('then it should have no accessibility violations', async () => {
        renderWithProvider(<NavigationList items={items} currentPath="/work/example" />);

        expect(await findAxeViolations()).toEqual([]);
      });
    });
  });

  describe('given the home page is shown', () => {
    describe('when it renders', () => {
      test('then it should mark only home as current', () => {
        renderWithProvider(<NavigationList items={items} currentPath="/" />);

        expect(
          screen.getAllByRole('link', { current: 'page' }).map((link) => link.textContent),
        ).toEqual(['Home']);
      });
    });
  });
});
