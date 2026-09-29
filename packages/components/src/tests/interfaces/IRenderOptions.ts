import type { IThemeController } from '@naovixen/theming';

import type { LinkComponent } from '../../types/LinkComponent';

export interface IRenderOptions {
  readonly themeController?: IThemeController;
  readonly linkComponent?: LinkComponent;
}
