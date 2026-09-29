import { describe, expect, test } from 'vitest';

import { createFluidValue } from '../functions/CreateFluidValue.function';

function resolveFluidValueInPixels(fluidValue: string, viewportPixels: number): number {
  const preferred = /clamp\([^,]+, ([\d.-]+)rem \+ ([\d.]+)vw,/.exec(fluidValue);
  const interceptPixels = Number(preferred?.[1]) * 16;
  const pixelsPerViewportPixel = Number(preferred?.[2]) / 100;

  return interceptPixels + pixelsPerViewportPixel * viewportPixels;
}

describe('Using createFluidValue', () => {
  describe('when growing from 16px to 48px', () => {
    const fluidValue = createFluidValue(16, 48);

    test('then it should clamp between the two sizes in rem', () => {
      expect(fluidValue).toMatch(/^clamp\(1rem, .+, 3rem\)$/);
    });

    test('then it should be 16px at the narrowest viewport', () => {
      expect(resolveFluidValueInPixels(fluidValue, 360)).toBeCloseTo(16, 2);
    });

    test('then it should be 48px at the widest viewport', () => {
      expect(resolveFluidValueInPixels(fluidValue, 1280)).toBeCloseTo(48, 2);
    });
  });
});
