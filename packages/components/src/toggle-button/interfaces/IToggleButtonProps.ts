import type { IButtonProps } from '../../button/interfaces/IButtonProps';

export interface IToggleButtonProps extends Omit<IButtonProps, 'aria-pressed'> {
    readonly isPressed: boolean;
}
