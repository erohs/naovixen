import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { Space } from '../../enums/Space';
import { findAxeViolations } from '../../tests/functions/FindAxeViolations.function';
import { Stack } from '../Stack.component';

describe('Using Stack', () => {
  describe('given it is rendered as a list', () => {
    describe('when it renders', () => {
      test('then it should be a list of its children', () => {
        render(
          <Stack as="ul" gap={Space.BetweenText}>
            <li>First item</li>
            <li>Second item</li>
          </Stack>,
        );

        expect(screen.getAllByRole('listitem')).toHaveLength(2);
      });

      test('then it should have no accessibility violations', async () => {
        render(
          <Stack as="ul">
            <li>First item</li>
          </Stack>,
        );

        expect(await findAxeViolations()).toEqual([]);
      });
    });
  });

  describe('given it is rendered as an article', () => {
    describe('when it renders', () => {
      test('then it should be an article', () => {
        render(
          <Stack as="article">
            <p>Example paragraph</p>
          </Stack>,
        );

        expect(screen.getByRole('article')).toBeDefined();
      });
    });
  });
});
