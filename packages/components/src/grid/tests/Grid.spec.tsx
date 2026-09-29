import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { Space } from '../../enums/Space';
import { findAxeViolations } from '../../tests/functions/FindAxeViolations.function';
import { Grid } from '../Grid.component';

describe('Using Grid', () => {
  describe('given it is rendered as a list', () => {
    describe('when it renders', () => {
      test('then it should be a list of its children', () => {
        render(
          <Grid as="ol" gap={Space.BetweenGroups}>
            <li>First item</li>
            <li>Second item</li>
          </Grid>,
        );

        expect(screen.getAllByRole('listitem')).toHaveLength(2);
      });

      test('then it should have no accessibility violations', async () => {
        render(
          <Grid as="ul">
            <li>First item</li>
          </Grid>,
        );

        expect(await findAxeViolations()).toEqual([]);
      });
    });
  });

  describe('given no element', () => {
    describe('when it renders', () => {
      test('then it should show its children', () => {
        render(
          <Grid>
            <p>Example cell</p>
          </Grid>,
        );

        expect(screen.getByText('Example cell')).toBeDefined();
      });
    });
  });
});
