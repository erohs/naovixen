import { useId } from 'react';
import type { FunctionComponent } from 'react';

import { HeadingSize } from '../heading/enums/HeadingSize';
import { Heading } from '../heading/Heading.component';
import { NavigationList } from '../navigation-list/NavigationList.component';
import type { IFooterColumnProps } from './interfaces/IFooterColumnProps';

/** `Footer.Column`: a headed list of links, and a navigation landmark named by its heading. */
export const FooterColumn: FunctionComponent<IFooterColumnProps> = ({
    heading,
    links,
    currentHref,
}) => {
    const headingId = useId();

    return (
        <nav className="nv-footer__column" aria-labelledby={headingId}>
            <Heading level={2} size={HeadingSize.H3} id={headingId} className="nv-footer__heading">
                {heading}
            </Heading>
            <NavigationList items={links} currentHref={currentHref} className="nv-footer__links" />
        </nav>
    );
};
