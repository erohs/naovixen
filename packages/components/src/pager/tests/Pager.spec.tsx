import { screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { findAxeViolations } from '../../tests/functions/FindAxeViolations.function';
import { renderWithProvider } from '../../tests/functions/RenderWithProvider.function';
import { Pager } from '../Pager.component';

const back = { label: 'All projects', path: '/work' };
const next = { label: 'Next: Example project', path: '/work/example' };

describe('Using Pager', () => {
  describe('given a back link and a next link', () => {
    describe('when it renders', () => {
      test('then it should be a navigation landmark', () => {
        renderWithProvider(<Pager back={back} next={next} />);

        expect(screen.getByRole('navigation', { name: 'Where next' })).toBeDefined();
      });

      test('then it should offer back before next', () => {
        renderWithProvider(<Pager back={back} next={next} />);

        expect(screen.getAllByRole('link').map((link) => link.textContent)).toEqual([
          'All projects',
          'Next: Example project',
        ]);
      });

      test('then it should have no accessibility violations', async () => {
        renderWithProvider(<Pager back={back} next={next} />);

        expect(await findAxeViolations()).toEqual([]);
      });
    });
  });

  describe('given only a back link', () => {
    describe('when it renders', () => {
      test('then it should offer only the back link', () => {
        renderWithProvider(<Pager back={back} />);

        expect(screen.getAllByRole('link')).toHaveLength(1);
      });
    });
  });
});
