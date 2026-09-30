/** A run of text within a text block, with the marks (strong, code, a link's key) on it. */
export interface ITextSpan {
    readonly _type: 'span';
    readonly _key: string;
    readonly text: string;
    readonly marks?: readonly string[] | undefined;
}
