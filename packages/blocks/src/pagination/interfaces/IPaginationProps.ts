import type { INavigationItem } from '@naovixen/models';

export interface IPagerProps {
  /** Usually the index this page belongs to, such as all projects. */
  readonly back: INavigationItem;
  /** The next page in the series, when there is one. */
  readonly next?: INavigationItem | undefined;
}
