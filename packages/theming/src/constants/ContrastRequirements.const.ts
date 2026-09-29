import type { IContrastRequirement } from '../interfaces/IContrastRequirement';

const text = 4.5;
const nonText = 3;

/** Every colour pair the design puts together, held to WCAG 2.2 AA in both themes. */
export const contrastRequirements: readonly IContrastRequirement[] = [
    ...(['--color-background-page', '--color-background-surface'] as const).flatMap(
        (background): IContrastRequirement[] => [
            { foreground: '--color-text-primary', background, minimumRatio: text },
            { foreground: '--color-text-secondary', background, minimumRatio: text },
            { foreground: '--color-text-accent', background, minimumRatio: text },
            { foreground: '--color-text-error', background, minimumRatio: text },
            { foreground: '--color-border', background, minimumRatio: nonText },
            { foreground: '--color-focus', background, minimumRatio: nonText },
        ],
    ),
    {
        foreground: '--color-text-on-accent',
        background: '--color-background-accent',
        minimumRatio: text,
    },
];
