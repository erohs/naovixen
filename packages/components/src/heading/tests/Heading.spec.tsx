import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { HeadingSize } from '../../enums/HeadingSize';
import { findAxeViolations } from '../../tests/functions/FindAxeViolations.function';
import { Heading } from '../Heading.component';

describe('Using Heading', () => {
  describe('given a level', () => {
    describe('when it renders', () => {
      test('then it should be a heading at that level', () => {
        render(<Heading level={3}>Example project</Heading>);

        expect(screen.getByRole('heading', { level: 3, name: 'Example project' })).toBeDefined();
      });

      test('then it should have no accessibility violations', async () => {
        render(<Heading level={2}>Example section</Heading>);

        expect(await findAxeViolations()).toEqual([]);
      });
    });
  });

  describe('given a size that differs from its level', () => {
    describe('when it renders', () => {
      test('then it should keep the level it was given', () => {
        render(
          <Heading level={1} size={HeadingSize.Display}>
            Example page title
          </Heading>,
        );

        expect(screen.getByRole('heading', { level: 1 })).toBeDefined();
      });
    });
  });

  describe('given an id', () => {
    describe('when a region is labelled by it', () => {
      test('then it should name the region', () => {
        render(
          <section aria-labelledby="example-heading">
            <Heading level={2} id="example-heading">
              Example section
            </Heading>
          </section>,
        );

        expect(screen.getByRole('region', { name: 'Example section' })).toBeDefined();
      });
    });
  });
});
