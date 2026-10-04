export const convertPixelToRem = (pixels: number): string => `${String(Number((pixels / 16).toFixed(4)))}rem`;
