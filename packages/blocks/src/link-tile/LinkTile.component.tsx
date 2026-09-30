import type { FunctionComponent } from 'react';
import { arrowRightIcon, Icon, Link } from '@naovixen/components';
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
        <LinkComponent {...linkProps} className={joinClassNames('nx-link-tile', className)}>
            <span className="nx-link-tile__disc">
                <Icon source={icon} />
            </span>
            <span className="nx-link-tile__text">
                <span className="nx-link-tile__label">{label}</span>{' '}
                <span className="nx-link-tile__detail">{detail}</span>
            </span>
            <Icon source={trailingIcon} className="nx-link-tile__trailing" />
        </LinkComponent>
    );
};
