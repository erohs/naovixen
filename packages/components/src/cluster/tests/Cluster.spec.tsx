import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { Space } from '../../enums/Space';
import { findAxeViolations } from '../../tests/functions/FindAxeViolations.function';
import { Cluster } from '../Cluster.component';

describe('Using Cluster', () => {
  describe('given it is rendered as a list', () => {
    describe('when it renders', () => {
      test('then it should be a list of its children', () => {
        render(
          <Cluster as="ul" gap={Space.BetweenText}>
            <li>First item</li>
            <li>Second item</li>
          </Cluster>,
        );

        expect(screen.getAllByRole('listitem')).toHaveLength(2);
      });

      test('then it should have no accessibility violations', async () => {
        render(
          <Cluster as="ul">
            <li>First item</li>
          </Cluster>,
        );

        expect(await findAxeViolations()).toEqual([]);
      });
    });
  });

  describe('given no element', () => {
    describe('when it renders', () => {
      test('then it should show its children', () => {
        render(
          <Cluster>
            <span>Example</span>
          </Cluster>,
        );

        expect(screen.getByText('Example')).toBeDefined();
      });
    });
  });
});
