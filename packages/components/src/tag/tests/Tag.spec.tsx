import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { findAxeViolations } from '../../tests/functions/FindAxeViolations.function';
import { Tag } from '../Tag.component';

describe('Using Tag', () => {
  describe('when it renders', () => {
    test('then it should show its label', () => {
      render(<Tag label="TypeScript" />);

      expect(screen.getByText('TypeScript')).toBeDefined();
    });

    test('then it should have no accessibility violations', async () => {
      render(<Tag label="TypeScript" />);

      expect(await findAxeViolations()).toEqual([]);
    });
  });
});
