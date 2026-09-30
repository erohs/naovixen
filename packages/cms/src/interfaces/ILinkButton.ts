/** Renders as ExternalLinkButton, with `label` as its text. */
export interface ILinkButton {
    readonly _key: string;
    readonly label: string;
    readonly href: string;
    readonly variant: 'primary' | 'secondary';
}
