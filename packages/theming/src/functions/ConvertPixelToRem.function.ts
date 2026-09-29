export function convertPixelToRem(pixels: number): string {
  return `${String(Number((pixels / 16).toFixed(4)))}rem`;
}
