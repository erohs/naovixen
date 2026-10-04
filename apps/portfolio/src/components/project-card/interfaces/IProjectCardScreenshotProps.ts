import type { IImage } from "@naovixen/cms";

export interface IProjectCardScreenshotProps {
    readonly screenshot: IImage;
    /** Likely the largest thing in view on load, so it is fetched first rather than lazily. */
    readonly isAboveTheFold: boolean;
}
