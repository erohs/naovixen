import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { findAxeViolations } from '../../tests/functions/FindAxeViolations.function';
import { Container } from '../Container.component';

describe('Using Container', () => {
  describe('given it is rendered as a header', () => {
    describe('when it renders', () => {
      test('then it should be the page banner', () => {
        render(
          <Container as="header">
            <p>Example header</p>
          </Container>,
        );

        expect(screen.getByRole('banner')).toBeDefined();
      });

      test('then it should have no accessibility violations', async () => {
        render(
          <Container as="header">
            <p>Example header</p>
          </Container>,
        );

        expect(await findAxeViolations()).toEqual([]);
      });
    });
  });

  describe('given no element', () => {
    describe('when it renders', () => {
      test('then it should show its children', () => {
        render(
          <Container>
            <p>Example content</p>
          </Container>,
        );

        expect(screen.getByText('Example content')).toBeDefined();
      });
    });
  });
});
