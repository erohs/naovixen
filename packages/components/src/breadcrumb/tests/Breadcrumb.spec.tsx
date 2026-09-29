import { screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { findAxeViolations } from '../../tests/functions/FindAxeViolations.function';
import { renderWithProvider } from '../../tests/functions/RenderWithProvider.function';
import { Breadcrumb } from '../Breadcrumb.component';

const trail = [
  { label: 'Home', path: '/' },
  { label: 'Work', path: '/work' },
];

describe('Using Breadcrumb', () => {
  describe('given a case study two levels down', () => {
    describe('when it renders', () => {
      test('then it should be the breadcrumb navigation landmark', () => {
        renderWithProvider(<Breadcrumb trail={trail} currentLabel="Example project" />);

        expect(screen.getByRole('navigation', { name: 'Breadcrumb' })).toBeDefined();
      });

      test('then it should link to each page above this one', () => {
        renderWithProvider(<Breadcrumb trail={trail} currentLabel="Example project" />);

        expect(screen.getAllByRole('link').map((link) => link.textContent)).toEqual([
          'Home',
          'Work',
        ]);
      });

      test('then it should list every step in order', () => {
        renderWithProvider(<Breadcrumb trail={trail} currentLabel="Example project" />);

        expect(screen.getAllByRole('listitem').map((item) => item.textContent)).toEqual([
          'Home/',
          'Work/',
          'Example project',
        ]);
      });

      test('then it should mark the current page', () => {
        renderWithProvider(<Breadcrumb trail={trail} currentLabel="Example project" />);

        expect(screen.getByText('Example project').getAttribute('aria-current')).toBe('page');
      });

      test('then it should not link the current page', () => {
        renderWithProvider(<Breadcrumb trail={trail} currentLabel="Example project" />);

        expect(screen.queryByRole('link', { name: 'Example project' })).toBeNull();
      });

      test('then it should have no accessibility violations', async () => {
        renderWithProvider(<Breadcrumb trail={trail} currentLabel="Example project" />);

        expect(await findAxeViolations()).toEqual([]);
      });
    });
  });
});
