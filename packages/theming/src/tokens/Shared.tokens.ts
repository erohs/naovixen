import { convertPixelToRem } from '../functions/ConvertPixelToRem.function';
import { createFluidValue } from '../functions/CreateFluidValue.function';

/** Tokens that are the same in both themes. Authored in px, emitted in rem. */
export const sharedTokens = {
    '--font-family-body': "'Schibsted Grotesk Variable', 'Schibsted Grotesk Fallback', sans-serif",
    '--font-family-heading': "'Fredoka Variable', 'Fredoka Fallback', sans-serif",
    '--font-family-code': "'JetBrains Mono Variable', 'JetBrains Mono Fallback', monospace",
    '--font-family-handwriting': "'Gochi Hand', cursive",

    '--font-size-display': createFluidValue(52, 128),
    '--font-size-h1': createFluidValue(44, 96),
    '--font-size-h2': createFluidValue(28, 52),
    '--font-size-h3': convertPixelToRem(24),
    '--font-size-h4': convertPixelToRem(18),
    '--font-size-lead': createFluidValue(21, 24),
    '--font-size-body': convertPixelToRem(18),
    '--font-size-small': convertPixelToRem(16),
    '--font-size-meta': convertPixelToRem(14),

    '--font-weight-regular': '400',
    '--font-weight-semi-bold': '600',
    '--line-height-heading': '1.15',
    '--line-height-body': '1.6',
    '--letter-spacing-heading': '-0.01em',

    '--space-between-text': convertPixelToRem(8),
    '--space-between-content': convertPixelToRem(16),
    '--space-between-groups': convertPixelToRem(32),
    '--space-between-sections': createFluidValue(48, 96),
    '--space-padding-page': createFluidValue(16, 48),
    '--space-padding-container': convertPixelToRem(24),
    '--space-padding-panel': convertPixelToRem(48),
    '--space-padding-action': `${convertPixelToRem(12)} ${convertPixelToRem(24)}`,
    '--space-padding-chip': `${convertPixelToRem(8)} ${convertPixelToRem(12)}`,
    '--space-indent-list': convertPixelToRem(24),

    '--layout-width-page': convertPixelToRem(1160),
    '--layout-width-prose': convertPixelToRem(720),
    '--size-action-minimum': convertPixelToRem(44),
    /** In em, so the gap under a link grows with its text. */
    '--size-underline-offset': '0.3em',

    '--border-width-default': '1px',
    '--border-width-standout': '2px',
    '--border-width-highlight': '3px',

    /** Elliptical radii bend each corner differently, so boxes read as hand-drawn. */
    '--radius-small': '10px 4px 9px 5px / 5px 9px 4px 10px',
    '--radius-medium': '24px 12px 22px 14px / 14px 22px 12px 24px',
    '--radius-large': '30px 18px 32px 16px / 18px 30px 16px 32px',
    '--radius-round': '50% 44% 52% 46% / 46% 52% 44% 50%',

    /** Lifts and presses move by these offsets, so the shadow stays put. */
    '--size-shadow-offset-resting': '4px',
    '--size-shadow-offset-raised': '6px',
    '--shadow-resting':
        'var(--size-shadow-offset-resting) var(--size-shadow-offset-resting) 0 var(--color-shadow)',
    '--shadow-raised':
        'var(--size-shadow-offset-raised) var(--size-shadow-offset-raised) 0 var(--color-shadow)',

    '--duration-fast': '150ms',
    '--duration-medium': '300ms',
    '--duration-slow': '450ms',
    '--easing-standard': 'ease',
    '--easing-bounce': 'cubic-bezier(0.34, 1.9, 0.5, 1)',

    /** Above the page for fixed controls such as the skip link and back-to-top link. */
    '--z-index-floating': '10',
} as const;
