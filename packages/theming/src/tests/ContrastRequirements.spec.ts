import { describe, expect, test } from 'vitest';

import { calculateContrastRatio } from '../functions/CalculateContrastRatio.function';
import { darkTheme } from '../tokens/DarkTheme.tokens';
import { lightTheme } from '../tokens/LightTheme.tokens';
import { contrastRequirements } from '../constants/ContrastRequirements.const';

const themedRequirements = [
    { name: 'light', theme: lightTheme },
    { name: 'dark', theme: darkTheme },
].flatMap(({ name, theme }) => contrastRequirements.map((pair) => ({ name, theme, ...pair })));

describe.each(themedRequirements)(
    'Using the contrast requirements, given the $name theme, when measuring $foreground on $background',
    ({ theme, foreground, background, minimumRatio }) => {
        test('then it should meet WCAG 2.2 AA', () => {
            const ratio = calculateContrastRatio(theme[foreground], theme[background]);

            expect(ratio).toBeGreaterThanOrEqual(minimumRatio);
        });
    },
);
