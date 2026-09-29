/**
 * The paw on a 100 by 100 grid, from the design: the pad, the four toes from left to right and
 * the shine on the pad. Each part is drawn half an outline inside its edge, so the outline sits
 * within it.
 */
export const pawShapes = {
    pad: {
        d: 'M47.4 46.5H50A29.5 26.2 0 0 1 79.5 72.7 22.9 19.8 0 0 1 56.6 92.5H46A25.5 18.8 0 0 1 20.5 73.7 26.9 27.2 0 0 1 47.4 46.5Z',
        transform: 'rotate(-3 50 69.5)',
    },
    toes: [
        { cx: 11, cy: 38.5, rx: 8.5, ry: 11, transform: 'rotate(-28 11 38.5)' },
        { cx: 33, cy: 17.5, rx: 9.5, ry: 12, transform: 'rotate(-10 33 17.5)' },
        { cx: 67, cy: 17.5, rx: 9.5, ry: 12, transform: 'rotate(10 67 17.5)' },
        { cx: 89, cy: 38.5, rx: 8.5, ry: 11, transform: 'rotate(28 89 38.5)' },
    ],
    shine: { cx: 35, cy: 57, rx: 5, ry: 4, transform: 'rotate(-30 35 57)' },
} as const;
