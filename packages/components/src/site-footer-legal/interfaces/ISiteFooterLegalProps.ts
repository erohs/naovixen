import type { INavigationItem } from '@naovixen/models';

export interface ISiteFooterLegalProps {
  readonly copyrightHolder: string;
  /** Passed in rather than read from the clock, so the server and the browser agree. */
  readonly year: number;
  readonly privacyLink: INavigationItem;
  readonly currentPath: string;
}
