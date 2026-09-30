import type { INavigationProps } from '../../navigation/interfaces/INavigationProps';

export interface IMobileMenuProps extends Pick<
    INavigationProps,
    'items' | 'currentHref' | 'linkComponent'
> {
    readonly className?: string | undefined;
}
