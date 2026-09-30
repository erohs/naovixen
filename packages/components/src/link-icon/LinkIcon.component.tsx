import type { FunctionComponent } from 'react';
import { joinClassNames } from '@naovixen/utilities';

import { Icon } from '../icon/Icon.component';
import { Link } from '../link/Link.component';
import { IconPosition } from './enums/IconPosition';
import type { ILinkIconProps } from './interfaces/ILinkIconProps';

/** The icon always follows the text in the markup; the stylesheet moves it to the side. */
export const LinkIcon: FunctionComponent<ILinkIconProps> = ({
    icon,
    iconPosition = IconPosition.End,
    className,
    children,
    ...linkProps
}) => (
    <Link
        {...linkProps}
        className={joinClassNames('nv-link-icon', `nv-link-icon--${iconPosition}`, className)}
    >
        {children}
        <Icon source={icon} className="nv-link-icon__icon" />
    </Link>
);
