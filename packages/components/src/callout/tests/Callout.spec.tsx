import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { findAxeViolations } from '../../tests/functions/FindAxeViolations.function';
import { Callout } from '../Callout.component';

describe('Using Callout', () => {
  describe('given a kind, a title and some text', () => {
    describe('when it renders', () => {
      test('then it should be marked as a note', () => {
        render(
          <Callout kind="tip!" title="Example title">
            <p>Example text.</p>
          </Callout>,
        );

        expect(screen.getByRole('note').textContent).toBe('tip!Example titleExample text.');
      });

      test('then it should have no accessibility violations', async () => {
        render(
          <Callout kind="tip!" title="Example title">
            <p>Example text.</p>
          </Callout>,
        );

        expect(await findAxeViolations()).toEqual([]);
      });
    });
  });
});
