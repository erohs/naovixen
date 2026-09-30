import type { FunctionComponent } from 'react';
import { arrowRightIcon } from '../icon/icons/ArrowRight.icon';
import { Icon } from '../icon/Icon.component';
import { Link } from '../link/Link.component';
import { joinClassNames } from '@naovixen/utilities';

import type { ILinkTileProps } from './interfaces/ILinkTileProps';

/** A whole row that is one link, named by its label and detail. */
export const LinkTile: FunctionComponent<ILinkTileProps> = ({
    label,
    detail,
    icon,
    trailingIcon = arrowRightIcon,
    linkComponent = Link,
    className,
    ...linkProps
}) => {
    const LinkComponent = linkComponent;

    return (
        <LinkComponent {...linkProps} className={joinClassNames('nv-link-tile', className)}>
            <span className="nv-link-tile__disc">
                <Icon source={icon} />
            </span>
            <span className="nv-link-tile__text">
                <span className="nv-link-tile__label">{label}</span>{' '}
                <span className="nv-link-tile__detail">{detail}</span>
            </span>
            <Icon source={trailingIcon} className="nv-link-tile__trailing" />
        </LinkComponent>
    );
};
