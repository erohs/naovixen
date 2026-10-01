import type { FunctionComponent } from 'react';
import { joinClassNames } from '@naovixen/utilities';

import { Icon } from '../icon/Icon.component';
import { arrowRightIcon } from '../icon/icons/ArrowRight.icon';
import { LinkVariant } from '../link/enums/LinkVariant';
import { Link } from '../link/Link.component';
import type { ILinkTileProps } from './interfaces/ILinkTileProps';

/** A whole row that is one Link, named by its label and detail. */
export const LinkTile: FunctionComponent<ILinkTileProps> = ({
    label,
    detail,
    icon,
    trailingIcon = arrowRightIcon,
    className,
    ...linkProps
}) => (
    <Link
        {...linkProps}
        variant={LinkVariant.Unstyled}
        className={joinClassNames('nv-link-tile', className)}
    >
        <span className="nv-link-tile__disc">
            <Icon source={icon} />
        </span>
        <span className="nv-link-tile__text">
            <span className="nv-link-tile__label">{label}</span>{' '}
            <span className="nv-link-tile__detail">{detail}</span>
        </span>
        <Icon source={trailingIcon} className="nv-link-tile__trailing" />
    </Link>
);
