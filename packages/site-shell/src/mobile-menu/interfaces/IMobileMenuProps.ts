import type { ISiteNavigationProps } from '../../site-navigation/interfaces/ISiteNavigationProps';

export interface IMobileMenuProps extends Pick<
    ISiteNavigationProps,
    'items' | 'currentPath' | 'linkComponent'
> {
    readonly className?: string | undefined;
}
