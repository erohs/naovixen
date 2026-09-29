import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { findAxeViolations } from '../../tests/functions/FindAxeViolations.function';
import { SectionHeading } from '../SectionHeading.component';

describe('Using SectionHeading', () => {
  describe('given a title', () => {
    describe('when it renders', () => {
      test('then it should be a level 2 heading', () => {
        render(<SectionHeading title="Example section" />);

        expect(screen.getByRole('heading', { level: 2, name: 'Example section' })).toBeDefined();
      });

      test('then it should have no accessibility violations', async () => {
        render(<SectionHeading number="01" title="Example section" intro="An introduction." />);

        expect(await findAxeViolations()).toEqual([]);
      });
    });
  });

  describe('given a level', () => {
    describe('when it renders', () => {
      test('then it should be a heading at that level', () => {
        render(<SectionHeading level={3} title="Example subsection" />);

        expect(screen.getByRole('heading', { level: 3 })).toBeDefined();
      });
    });
  });

  describe('given a number', () => {
    describe('when it renders', () => {
      test('then it should leave the number out of the heading name', () => {
        render(<SectionHeading number="01" title="Example section" />);

        expect(screen.getByRole('heading', { name: 'Example section' })).toBeDefined();
      });
    });
  });

  describe('given an intro', () => {
    describe('when it renders', () => {
      test('then it should show the intro as a paragraph', () => {
        render(<SectionHeading title="Example section" intro="An introduction." />);

        expect(screen.getByRole('paragraph')).toHaveProperty('textContent', 'An introduction.');
      });
    });
  });

  describe('given an id', () => {
    describe('when a section is labelled by it', () => {
      test('then it should name the section', () => {
        render(
          <section aria-labelledby="example-section">
            <SectionHeading id="example-section" title="Example section" />
          </section>,
        );

        expect(screen.getByRole('region', { name: 'Example section' })).toBeDefined();
      });
    });
  });
});
