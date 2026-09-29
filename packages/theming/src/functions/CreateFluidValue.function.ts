import { convertPixelToRem } from './ConvertPixelToRem.function';

/** Grows linearly from `minimumPixels` at a 360px viewport to `maximumPixels` at 1280px. */
export function createFluidValue(minimumPixels: number, maximumPixels: number): string {
  const narrowestViewport = 360;
  const widestViewport = 1280;
  const slope = (maximumPixels - minimumPixels) / (widestViewport - narrowestViewport);
  const minimum = convertPixelToRem(minimumPixels);
  const maximum = convertPixelToRem(maximumPixels);
  const intercept = convertPixelToRem(minimumPixels - slope * narrowestViewport);
  const viewportWidth = `${String(Number((slope * 100).toFixed(4)))}vw`;

  return `clamp(${minimum}, ${intercept} + ${viewportWidth}, ${maximum})`;
}
