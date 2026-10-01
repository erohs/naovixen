import type { ILinkButton } from './ILinkButton';

/** Renders as a row of LinkButtons. */
export interface ILinkButtonsBlock {
    readonly _type: 'linkButtons';
    readonly _key: string;
    readonly buttons: readonly ILinkButton[];
}
