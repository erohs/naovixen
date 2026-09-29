import type { LinkProps } from '../../link/types/LinkProps';
import type { IconPosition } from '../enums/IconPosition';

export interface ILinkIconProps extends LinkProps {
    /** An icon source, such as `arrowRightIcon`. */
    readonly icon: string;
    readonly iconPosition?: IconPosition | undefined;
}
