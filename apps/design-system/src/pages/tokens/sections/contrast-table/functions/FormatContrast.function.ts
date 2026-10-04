import type { IColorTheme, IContrastRequirement } from "@naovixen/theming";
import { calculateContrastRatio } from "@naovixen/theming";
import { translate } from "../../../../../translate/Translate.const";

/** Such as "7.21 pass", so a failing pair reads as one without relying on colour. */
export const formatContrast = (requirement: IContrastRequirement, theme: IColorTheme): string => {
    const ratio = calculateContrastRatio(theme[requirement.foreground], theme[requirement.background]);
    const verdict = ratio >= requirement.minimumRatio ? "contrastTable.pass" : "contrastTable.fail";

    return translate(verdict, { ratio: ratio.toFixed(2) });
};
