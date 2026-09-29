import { screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { findAxeViolations } from '../../tests/functions/FindAxeViolations.function';
import { renderWithProvider } from '../../tests/functions/RenderWithProvider.function';
import { SiteNavigation } from '../SiteNavigation.component';

const items = [
  { label: 'Home', path: '/' },
  { label: 'Work', path: '/work' },
];

describe('Using SiteNavigation', () => {
  describe('given the work section is shown', () => {
    describe('when it renders', () => {
      test('then it should be the main navigation landmark', () => {
        renderWithProvider(<SiteNavigation items={items} currentPath="/work" />);

        expect(screen.getByRole('navigation', { name: 'Main' })).toBeDefined();
      });

      test('then it should mark the work link as the current page', () => {
        renderWithProvider(<SiteNavigation items={items} currentPath="/work" />);

        expect(screen.getByRole('link', { current: 'page' }).textContent).toBe('Work');
      });

      test('then it should have no accessibility violations', async () => {
        renderWithProvider(<SiteNavigation items={items} currentPath="/work" isStacked />);

        expect(await findAxeViolations()).toEqual([]);
      });
    });
  });
});
