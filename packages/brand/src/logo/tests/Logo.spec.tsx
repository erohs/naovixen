import { screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { findAxeViolations } from '../../tests/functions/FindAxeViolations.function';
import { renderWithProvider } from '../../tests/functions/RenderWithProvider.function';
import { RouterLinkForTests } from '../../tests/functions/RouterLinkForTests.component';
import { Logo } from '../Logo.component';

describe('Using Logo', () => {
  describe('when it renders', () => {
    test('then it should link home by the name naovixen', () => {
      renderWithProvider(<Logo />);

      expect(screen.getByRole('link', { name: 'naovixen' })).toHaveProperty('pathname', '/');
    });

    test('then it should go through the router', () => {
      renderWithProvider(<Logo />, { linkComponent: RouterLinkForTests });

      expect(screen.getByRole('link').dataset.routed).toBe('true');
    });

    test('then it should have no accessibility violations', async () => {
      renderWithProvider(<Logo />);

      expect(await findAxeViolations()).toEqual([]);
    });
  });
});
