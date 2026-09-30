import type { FunctionComponent } from 'react';
import { arrowLeftIcon, arrowRightIcon, IconPosition, LinkIcon } from '@naovixen/components';
import type { ILink } from '@naovixen/components';
import { joinClassNames } from '@naovixen/utilities';

import type { IMoreNavigationProps } from './interfaces/IMoreNavigationProps';

const NextLink: FunctionComponent<{ readonly link: ILink }> = ({ link }) => (
    <LinkIcon href={link.href} icon={arrowRightIcon} className="nv-more-navigation__next">
        Next: {link.label}
    </LinkIcon>
);

/** Back to the list at one end and, where there is one, the next read at the other. */
export const MoreNavigation: FunctionComponent<IMoreNavigationProps> = ({
    label,
    backLink,
    nextLink,
    className,
    ...navProps
}) => (
    <nav
        {...navProps}
        aria-label={label}
        className={joinClassNames('nv-more-navigation', className)}
    >
        <LinkIcon href={backLink.href} icon={arrowLeftIcon} iconPosition={IconPosition.Start}>
            {backLink.label}
        </LinkIcon>
        {nextLink && <NextLink link={nextLink} />}
    </nav>
);
