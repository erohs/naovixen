import type { ButtonVariant } from '../../button/enums/ButtonVariant';
import type { ILinkProps } from '../../link/interfaces/ILinkProps';

/** Its role and its answer to Space are its own, so neither can be passed in. */
export interface ILinkButtonProps extends Omit<ILinkProps, 'variant' | 'role' | 'onKeyDown'> {
    readonly variant?: ButtonVariant | undefined;
}
