import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { findAxeViolations } from '../../tests/functions/FindAxeViolations.function';
import { TextVariant } from '../enums/TextVariant';
import { Text } from '../Text.component';

describe('Using Text', () => {
  describe('given no element', () => {
    describe('when it renders', () => {
      test('then it should be a paragraph', () => {
        render(<Text>Example paragraph</Text>);

        expect(screen.getByRole('paragraph')).toHaveProperty('textContent', 'Example paragraph');
      });

      test('then it should have no accessibility violations', async () => {
        render(<Text variant={TextVariant.Lead}>Example paragraph</Text>);

        expect(await findAxeViolations()).toEqual([]);
      });
    });
  });

  describe('given it is rendered inline', () => {
    describe('when it renders', () => {
      test('then it should not be a paragraph', () => {
        render(
          <Text variant={TextVariant.Meta} as="span">
            1 January 2026
          </Text>,
        );

        expect(screen.queryByRole('paragraph')).toBeNull();
      });
    });
  });
});
