import type { IImage } from '@naovixen/models';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { findAxeViolations } from '../../tests/functions/FindAxeViolations.function';
import { Image } from '../Image.component';

const image: IImage = { src: '/example.png', alt: 'Example picture', width: 1600, height: 900 };

describe('Using Image', () => {
  describe('given an image', () => {
    describe('when it renders', () => {
      test('then it should be named by its alt text', () => {
        render(<Image image={image} />);

        expect(screen.getByRole('img', { name: 'Example picture' })).toBeDefined();
      });

      test('then it should reserve its width', () => {
        render(<Image image={image} />);

        expect(screen.getByRole('img')).toHaveProperty('width', 1600);
      });

      test('then it should reserve its height', () => {
        render(<Image image={image} />);

        expect(screen.getByRole('img')).toHaveProperty('height', 900);
      });

      test('then it should load lazily', () => {
        render(<Image image={image} />);

        expect(screen.getByRole('img').getAttribute('loading')).toBe('lazy');
      });

      test('then it should have no accessibility violations', async () => {
        render(<Image image={image} />);

        expect(await findAxeViolations()).toEqual([]);
      });
    });
  });
});
