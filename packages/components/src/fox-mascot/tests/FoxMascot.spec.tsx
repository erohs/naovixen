import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { findAxeViolations } from '../../tests/functions/FindAxeViolations.function';
import { FoxMascot } from '../FoxMascot.component';

describe('Using FoxMascot', () => {
  describe('when it renders', () => {
    test('then it should be hidden from assistive technology', () => {
      render(<FoxMascot />);

      expect(screen.queryByRole('img')).toBeNull();
    });

    test('then it should have no accessibility violations', async () => {
      render(<FoxMascot />);

      expect(await findAxeViolations()).toEqual([]);
    });
  });
});
