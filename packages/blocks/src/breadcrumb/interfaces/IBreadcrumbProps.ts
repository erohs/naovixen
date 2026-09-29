import type { INavigationItem } from '@naovixen/models';

export interface IBreadcrumbProps {
  /** The pages above this one, from the top down. */
  readonly trail: readonly INavigationItem[];
  readonly currentLabel: string;
}
