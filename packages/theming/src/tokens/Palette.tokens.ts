/**
 * Raw colours. Never emitted as CSS: themes map these onto semantic roles, and only the
 * roles reach a stylesheet.
 */
export const palette = {
    ink: '#1F1B22',
    cream: '#FBF6EE',
    /** A warmer cream for text and shadows on the dark theme, softer than the light page. */
    parchment: '#FBF1E4',
    /** Dimmer again, for lines on the dark theme. */
    linen: '#F3E2CC',
    sand: '#F3EADC',
    wheat: '#E3CFBA',
    espresso: '#2B1D14',
    cocoa: '#3B2A1E',
    orange: '#E8894A',
    burntOrange: '#A84C16',
    coral: '#F07C74',
    lavender: '#8E7AAE',
    deepPlum: '#4A3A5E',
    lilac: '#C9B8E6',
    brickRed: '#A3261E',
    salmon: '#F59A8F',
} as const;
