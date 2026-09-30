import type { ButtonVariant } from '../../button/enums/ButtonVariant';
import type { IExternalLinkProps } from '../../external-link/interfaces/IExternalLinkProps';

export interface IExternalLinkButtonProps extends IExternalLinkProps {
    readonly variant?: ButtonVariant | undefined;
}
