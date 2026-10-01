import type { FunctionComponent } from 'react';
import { joinClassNames } from '@naovixen/utilities';

import { Icon } from '../icon/Icon.component';
import type { IIconProps } from '../icon/interfaces/IIconProps';

/** `Link.Icon`: an icon beside the link's text, on whichever side it is written. */
export const LinkIcon: FunctionComponent<IIconProps> = ({ className, ...iconProps }) => (
    <Icon {...iconProps} className={joinClassNames('nv-link__icon', className)} />
);
