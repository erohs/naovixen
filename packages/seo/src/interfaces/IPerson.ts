export interface IPerson {
    readonly name: string;
    readonly jobTitle: string;
    /** Each profile's `url` becomes a `sameAs` entry. */
    readonly socialLinks: readonly { readonly url: string }[];
}
