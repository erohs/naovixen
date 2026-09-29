/** WCAG 2.2 relative luminance of a `#rrggbb` colour. */
export function calculateRelativeLuminance(hexColor: string): number {
    const match = /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(hexColor);

    if (match === null) {
        throw new TypeError(`Expected a #rrggbb colour, received "${hexColor}".`);
    }

    const [red, green, blue] = match.slice(1).map((channelHex) => {
        const channel = parseInt(channelHex, 16) / 255;

        return channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4;
    }) as [number, number, number];

    return 0.2126 * red + 0.7152 * green + 0.0722 * blue;
}
