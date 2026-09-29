import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, expect, test } from 'vitest';

import { findAxeViolations } from '../../tests/functions/FindAxeViolations.function';
import { SkipLink } from '../SkipLink.component';

describe('Using SkipLink', () => {
  describe('given a target id', () => {
    describe('when it renders', () => {
      test('then it should link to the target', () => {
        render(<SkipLink targetId="main" />);

        expect(screen.getByRole('link', { name: 'Skip to content' }).getAttribute('href')).toBe(
          '#main',
        );
      });

      test('then it should have no accessibility violations', async () => {
        render(<SkipLink targetId="main" />);

        expect(await findAxeViolations()).toEqual([]);
      });
    });

    describe('when the page is entered from the keyboard', () => {
      test('then it should be the first thing focused', async () => {
        render(
          <>
            <SkipLink targetId="main" />
            <a href="/">Home</a>
          </>,
        );

        await userEvent.setup().tab();

        expect(screen.getByRole('link', { name: 'Skip to content' }).matches(':focus')).toBe(true);
      });
    });
  });

  describe('given a label', () => {
    describe('when it renders', () => {
      test('then it should be named by the label', () => {
        render(<SkipLink targetId="projects" label="Skip to projects" />);

        expect(screen.getByRole('link', { name: 'Skip to projects' })).toBeDefined();
      });
    });
  });
});
