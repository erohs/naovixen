import type { ButtonVariant } from '../../button/enums/ButtonVariant';
import type { LinkProps } from '../../link/types/LinkProps';

export interface ILinkButtonProps extends LinkProps {
    readonly variant?: ButtonVariant | undefined;
}
