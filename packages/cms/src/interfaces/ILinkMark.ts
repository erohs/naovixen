/** The one annotation a text block carries: a span marked with its `_key` links to `href`. */
export interface ILinkMark {
    readonly _type: 'link';
    readonly _key: string;
    readonly href: string;
}
