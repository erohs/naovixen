import { describe, expect, test } from 'vitest';

import { calculateContrastRatio } from '../functions/CalculateContrastRatio.function';
import { darkTheme } from '../tokens/DarkTheme.tokens';
import { lightTheme } from '../tokens/LightTheme.tokens';
import { contrastRequirements } from '../constants/ContrastRequirements.const';

describe('Using the contrast requirements', () => {
  describe.each([
    { name: 'light', theme: lightTheme },
    { name: 'dark', theme: darkTheme },
  ])('given the $name theme', ({ theme }) => {
    describe.each(contrastRequirements)('when measuring $foreground on $background', (pair) => {
      test('then it should meet WCAG 2.2 AA', () => {
        const ratio = calculateContrastRatio(theme[pair.foreground], theme[pair.background]);

        expect(ratio).toBeGreaterThanOrEqual(pair.minimumRatio);
      });
    });
  });
});
