import { calculateRelativeLuminance } from './CalculateRelativeLuminance.function';

/** WCAG 2.2 contrast ratio between two `#rrggbb` colours, from 1 to 21. */
export function calculateContrastRatio(firstColor: string, secondColor: string): number {
    const firstLuminance = calculateRelativeLuminance(firstColor);
    const secondLuminance = calculateRelativeLuminance(secondColor);
    const lighter = Math.max(firstLuminance, secondLuminance);
    const darker = Math.min(firstLuminance, secondLuminance);

    return (lighter + 0.05) / (darker + 0.05);
}
