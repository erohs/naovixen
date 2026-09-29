import type { INavigationItem } from '@naovixen/models';

export interface ISiteHeaderProps {
  readonly navigationItems: readonly INavigationItem[];
  readonly currentPath: string;
}
