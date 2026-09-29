/** Width and height are the intrinsic size in pixels, so the browser can reserve the space. */
export interface IImage {
    readonly src: string;
    readonly alt: string;
    readonly width: number;
    readonly height: number;
}
