import type { IColorTheme, IContrastRequirement } from '@naovixen/theming';
import { calculateContrastRatio } from '@naovixen/theming';

/** Such as "7.21 pass", so a failing pair reads as one without relying on colour. */
export function formatContrast(requirement: IContrastRequirement, theme: IColorTheme): string {
    const ratio = calculateContrastRatio(
        theme[requirement.foreground],
        theme[requirement.background],
    );
    const verdict = ratio >= requirement.minimumRatio ? 'pass' : 'FAIL';

    return `${ratio.toFixed(2)} ${verdict}`;
}
