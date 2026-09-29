import type { INavigationListProps } from '../../navigation-list/interfaces/INavigationListProps';

export interface ISiteNavigationProps extends INavigationListProps {
  /** Full-width rows, one link each, for the menu on narrow screens. */
  readonly isStacked?: boolean | undefined;
}
