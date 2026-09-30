/** Renders as Callout, with `text` as its body. */
export interface ICalloutBlock {
    readonly _type: 'callout';
    readonly _key: string;
    readonly label: string;
    readonly title: string;
    readonly text: string;
}
