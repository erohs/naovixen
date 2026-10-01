import type { IIconProps } from '../../icon/interfaces/IIconProps';

export interface IButtonIconProps extends IIconProps {
    /**
     * Names a button that has no text. It is read out but not shown, and the button becomes a
     * small round control.
     */
    readonly label?: string | undefined;
}
