/**
 * The heart on a 100 by 100 grid, from the design: its outline, the body inset inside it, and
 * the shine near its top left.
 */
export const heartShapes = {
    outline:
        '50,94 30,76 14,60 5,46 2,32 5,19 13,10 24,5 35,6 44,12 50,21 56,11 66,5 78,5 89,11 96,21 98,34 94,48 85,62 69,77',
    body: '50,87.4 33,72.1 19.4,58.5 11.75,46.6 9.2,34.7 11.75,23.65 18.55,16 27.9,11.75 37.25,12.6 44.9,17.7 50,25.35 55.1,16.85 63.6,11.75 73.8,11.75 83.15,16.85 89.1,25.35 90.8,36.4 87.4,48.3 79.75,60.2 66.15,72.95',
    shine: { cx: 27, cy: 27, rx: 7, ry: 5, transform: 'rotate(-38 27 27)' },
} as const;
