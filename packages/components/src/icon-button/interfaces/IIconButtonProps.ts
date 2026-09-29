import type { IButtonProps } from '../../button/interfaces/IButtonProps';

export interface IIconButtonProps extends Omit<IButtonProps, 'children'> {
    /** An icon source, such as `menuIcon`. */
    readonly icon: string;
    /** The button's name. Required, because the icon alone says nothing to a screen reader. */
    readonly label: string;
}
