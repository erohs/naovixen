import type { ILinkButton } from './ILinkButton';

/** Renders as ButtonGroup. */
export interface IButtonGroupBlock {
    readonly _type: 'buttonGroup';
    readonly _key: string;
    readonly buttons: readonly ILinkButton[];
}
