import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { VisuallyHidden } from '../VisuallyHidden.component';

describe('Using VisuallyHidden', () => {
  describe('when it renders inside a button', () => {
    test('then it should still name the button', () => {
      render(
        <button type="button">
          Read case study<VisuallyHidden>: Example project</VisuallyHidden>
        </button>,
      );

      expect(
        screen.getByRole('button', { name: 'Read case study: Example project' }),
      ).toBeDefined();
    });
  });
});
