/** The part of the DOM's `MediaQueryList` this uses, so the package needs no DOM types. */
export interface IMediaQueryList {
    readonly matches: boolean;
    addEventListener(type: 'change', listener: () => void): void;
    removeEventListener(type: 'change', listener: () => void): void;
}
