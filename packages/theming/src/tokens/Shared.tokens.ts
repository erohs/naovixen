import { convertPixelToRem } from '../functions/ConvertPixelToRem.function';
import { createFluidValue } from '../functions/CreateFluidValue.function';

/** Tokens that are the same in both themes. Authored in px, emitted in rem. */
export const sharedTokens = {
    '--font-family-body': "'Schibsted Grotesk Variable', 'Schibsted Grotesk Fallback', sans-serif",
    '--font-family-heading': "'Fredoka Variable', 'Fredoka Fallback', sans-serif",
    '--font-family-code': "'JetBrains Mono Variable', 'JetBrains Mono Fallback', monospace",
    '--font-family-handwriting': "'Gochi Hand', cursive",

    '--font-size-display': createFluidValue(52, 128),
    '--font-size-h1': createFluidValue(46, 96),
    /** A long heading that heads a page of its own, such as a post's title. */
    '--font-size-title': createFluidValue(38, 64),
    '--font-size-h2': createFluidValue(30, 52),
    '--font-size-h3': createFluidValue(26, 36),
    '--font-size-h4': convertPixelToRem(22),
    '--font-size-lead': createFluidValue(20, 22),
    '--font-size-body': convertPixelToRem(18),
    '--font-size-small': convertPixelToRem(16),
    '--font-size-meta': convertPixelToRem(14),

    '--font-weight-regular': '400',
    '--font-weight-semi-bold': '600',
    '--line-height-heading': '1.1',
    /** Smaller headings, labels and controls, which need more room between lines. */
    '--line-height-subheading': '1.3',
    '--line-height-body': '1.65',
    '--letter-spacing-heading': '-0.01em',

    /** An 8px grid, with a half step for text that belongs together, such as a name and role. */
    '--space-between-lines': convertPixelToRem(4),
    '--space-between-text': convertPixelToRem(8),
    '--space-between-content': convertPixelToRem(16),
    '--space-between-blocks': convertPixelToRem(24),
    '--space-between-groups': convertPixelToRem(32),
    '--space-between-regions': convertPixelToRem(48),
    '--space-below-heading': createFluidValue(32, 48),
    '--space-between-sections': createFluidValue(48, 96),
    '--space-padding-page': createFluidValue(16, 48),
    /**
     * Inline padding that holds content at the page width, centred, with the page gutter either
     * side. The percentage resolves against whatever element uses it, so a full-width band keeps
     * its background while its content lines up with the page.
     */
    '--space-padding-page-centred':
        'max(var(--space-padding-page), (100% - var(--layout-width-page)) / 2)',
    /** Below the last section of a page, before the footer. */
    '--space-padding-page-end': createFluidValue(96, 128),
    '--space-padding-container': convertPixelToRem(24),
    '--space-padding-panel': createFluidValue(32, 64),
    '--space-padding-action': `${convertPixelToRem(12)} ${convertPixelToRem(24)}`,
    '--space-padding-chip': `${convertPixelToRem(8)} ${convertPixelToRem(12)}`,
    '--space-indent-list': convertPixelToRem(24),

    '--layout-width-page': convertPixelToRem(1064),
    '--layout-width-prose': convertPixelToRem(720),
    '--size-action-minimum': convertPixelToRem(48),
    /** In em, so the gap under a link grows with its text. */
    '--size-underline-offset': '0.3em',

    '--border-width-default': '1.5px',
    '--border-width-standout': '2px',
    '--border-width-highlight': '3px',

    /**
     * Elliptical radii bend each corner differently, so boxes read as hand-drawn. An
     * alternate is the mirror image, so neighbouring boxes do not look stamped from one mould.
     */
    '--radius-small': '10px 4px 9px 5px / 5px 9px 4px 10px',
    '--radius-medium': '26px 12px 24px 14px / 14px 24px 12px 26px',
    '--radius-medium-alternate': '12px 26px 14px 24px / 24px 14px 26px 12px',
    '--radius-large': '30px 22px 34px 18px / 22px 32px 18px 30px',
    '--radius-large-alternate': '18px 30px 16px 28px / 30px 16px 28px 18px',
    '--radius-round': '50% 44% 52% 46% / 46% 52% 44% 50%',

    /** Lifts and presses move by these offsets, so the shadow stays put. */
    '--size-shadow-offset-small': '3px',
    '--size-shadow-offset-resting': '4px',
    '--size-shadow-offset-raised': '6px',
    /** For small controls, such as round icon buttons and link tiles, which a full shadow swamps. */
    '--shadow-small':
        'var(--size-shadow-offset-small) var(--size-shadow-offset-small) 0 var(--color-shadow)',
    '--shadow-resting':
        'var(--size-shadow-offset-resting) var(--size-shadow-offset-resting) 0 var(--color-shadow)',
    '--shadow-raised':
        'var(--size-shadow-offset-raised) var(--size-shadow-offset-raised) 0 var(--color-shadow)',

    '--duration-fast': '150ms',
    '--duration-medium': '300ms',
    '--duration-slow': '450ms',
    '--easing-standard': 'ease',
    '--easing-bounce': 'cubic-bezier(0.34, 1.9, 0.5, 1)',
    '--easing-emphasized': 'cubic-bezier(0.76, 0, 0.24, 1)',

    /** Above the page for fixed controls such as the skip link and back-to-top link. */
    '--z-index-floating': '10',
    /** Above the floating controls: the header, while its menu covers the page. */
    '--z-index-overlay': '20',
} as const;
