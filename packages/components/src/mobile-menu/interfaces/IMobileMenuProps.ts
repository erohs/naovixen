import type { INavigationListProps } from '../../navigation-list/interfaces/INavigationListProps';

export interface IMobileMenuProps extends Pick<INavigationListProps, 'items' | 'currentHref'> {
    readonly className?: string | undefined;
}
