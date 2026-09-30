export interface ISiteFooterProps {
    readonly currentPath: string;
    /** Passed in rather than read from the clock, so the server and the browser agree. */
    readonly year: number;
}
