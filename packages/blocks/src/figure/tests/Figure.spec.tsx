import type { IImage } from '@naovixen/models';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { findAxeViolations } from '../../tests/functions/FindAxeViolations.function';
import { Figure } from '../Figure.component';

const image: IImage = {
  src: '/example.png',
  alt: 'Example project home page',
  width: 1600,
  height: 900,
};

describe('Using Figure', () => {
  describe('given an image and a caption', () => {
    describe('when it renders', () => {
      test('then it should show the image by its alt text', () => {
        render(<Figure image={image} caption="The home page." />);

        expect(screen.getByRole('img', { name: 'Example project home page' })).toBeDefined();
      });

      test('then it should show the caption inside the figure', () => {
        render(<Figure image={image} caption="The home page." />);

        expect(screen.getByRole('figure').textContent).toBe('The home page.');
      });

      test('then it should have no accessibility violations', async () => {
        render(<Figure image={image} caption="The home page." />);

        expect(await findAxeViolations()).toEqual([]);
      });
    });
  });

  describe('given no caption', () => {
    describe('when it renders', () => {
      test('then it should have no accessibility violations', async () => {
        render(<Figure image={image} />);

        expect(await findAxeViolations()).toEqual([]);
      });
    });
  });
});
