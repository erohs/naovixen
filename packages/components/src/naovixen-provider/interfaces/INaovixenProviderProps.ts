import type { ReactNode } from 'react';
import type { IThemeController } from '@naovixen/theming';

import type { LinkComponent } from '../../types/LinkComponent';

export interface INaovixenProviderProps {
  readonly themeController: IThemeController;
  /** The router's link. Plain anchors when left out, so a full page load follows. */
  readonly linkComponent?: LinkComponent;
  readonly children: ReactNode;
}
