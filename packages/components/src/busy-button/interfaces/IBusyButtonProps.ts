import type { IButtonProps } from '../../button/interfaces/IButtonProps';

export interface IBusyButtonProps extends IButtonProps {
    /** While true the button shows a spinner and ignores presses, but keeps its focus. */
    readonly isBusy: boolean;
}
