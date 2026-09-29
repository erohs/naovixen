import type { INavigationItem } from '@naovixen/models';

export interface INavigationListProps {
  readonly items: readonly INavigationItem[];
  /** The path being shown, which marks the matching item as the current page. */
  readonly currentPath: string;
}
