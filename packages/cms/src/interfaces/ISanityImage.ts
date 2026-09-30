/** The image projection every query asks for: alt text, and the asset's URL and size. */
export interface ISanityImage {
    readonly alt: string;
    readonly asset: {
        readonly url: string;
        readonly metadata: {
            readonly dimensions: { readonly width: number; readonly height: number } | null;
        } | null;
    } | null;
}
