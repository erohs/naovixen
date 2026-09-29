import type { FunctionComponent } from 'react';

import { ButtonVariant } from '../enums/ButtonVariant';
import { IconName } from '../enums/IconName';
import { buildButtonClassName } from '../functions/BuildButtonClassName.function';
import { joinClassNames } from '../functions/JoinClassNames.function';
import { Icon } from '../icon/Icon.component';

/**
 * A plain in-page link, not a router link: following it scrolls to `#main` and moves focus
 * there, which needs no script. The page's main element must carry `id="main"`.
 */
export const BackToTop: FunctionComponent = () => (
  <a
    href="#main"
    className={joinClassNames(buildButtonClassName(ButtonVariant.Primary), 'nx-back-to-top')}
    aria-label="Back to top"
  >
    <Icon name={IconName.ArrowUp} />
  </a>
);
